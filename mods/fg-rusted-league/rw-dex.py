#!/usr/bin/env python3
"""Read the stats of Rusted Warfare's hard-coded units out of the FG Rusted League package's bytecode.

Rusted Warfare 1.13 defines its first roster — the builder, the tank, the factories, the
turrets — in Java rather than in ini files, and the League repaints most of them. Their
numbers live in `classes.dex`; this disassembles it with the Android SDK's `dexdump` and
writes what the converter needs to `rw-core.json`, which is checked in so `port-fg.py`
runs without the SDK.

  python3 mods/fg-rusted-league/rw-dex.py

What was found where (RW 1.13.3, obfuscated names):
- the unit types are the enum `game/units/bo`, one subclass a type: `c()I` is the price,
  `y()F` the build speed, `a(Z)` makes the unit's class;
- on the unit, the constructor sets `bQ` (max hp) and `bF` (radius); getters give the move
  speed `u()F`, turn speed `v()F`, range `l()F`, sight `f_()I`, reload `b(I)F` in ticks,
  what it may fire at `W()Z` air, `X()Z` land, `V()Z` underwater, and `g()` its movement;
- a shot is a `game/f`: `R` direct damage, `V` area damage, `W` area radius, `r` speed,
  `h` life in ticks;
- the turrets share one class and hand their numbers to a strategy (`game/units/d/a/h`):
  `a()F` range, `b()F` reload, `c()F` damage.
The field names were read off the loader for ini units (`game/units/custom/k`), which
reads `maxHp`, `radius`, `moveSpeed` and the rest into the same slots.
"""
import glob
import json
import os
import re
import struct
import subprocess

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(os.path.dirname(HERE))
DEX = os.path.join(REPO, "rusted-warfare-mods", "skycraft", "classes.dex")
P = "com/corrodinggames/rtt/game/units/"


def dexdump():
    tools = sorted(glob.glob(os.path.expanduser("~/Library/Android/sdk/build-tools/*/dexdump")))
    if not tools:
        raise SystemExit("dexdump not found: install the Android SDK build-tools")
    return subprocess.run([tools[-1], "-d", DEX], capture_output=True, text=True, errors="replace").stdout


def classes(text):
    out = {}
    for part in re.split(r"\nClass #\d+\s*-\s*\n", text):
        m = re.search(r"Class descriptor\s*:\s*'L([^;]+);'", part)
        if m:
            out[m.group(1)] = part
    return out


def methods(cls, name):
    """(name, type, instructions) for every method of a class, the operands tidied"""
    out = []
    for m in re.finditer(r"name\s*:\s*'([^']+)'\n\s*type\s*:\s*'([^']+)'.*?(?=\n\s*#\d+\s*:|\Z)", cls.get(name, ""), re.S):
        if "(" not in m.group(2):
            continue
        ins = []
        for line in m.group(0).split("\n"):
            if "|" in line and re.match(r"^[0-9a-f]{6}:", line.strip()):
                i = line.split("|", 1)[1].strip()
                i = re.sub(r" // (method|type|field|string)@[0-9a-f]+", "", i)
                i = i.replace("Lcom/corrodinggames/rtt/", "")
                ins.append(i[6:] if re.match(r"^[0-9a-f]{4}: ", i) else i)
        out.append((m.group(1), m.group(2), ins[1:]))
    return out


def superclass(cls, name):
    m = re.search(r"Superclass\s*:\s*'L([^;]+);'", cls.get(name, ""))
    return m.group(1) if m else None


def fbits(i):
    return struct.unpack(">f", struct.pack(">i", int(i)))[0]


def const_of(instr, as_int=False):
    """a const instruction's value; `/high16` carries a float's bits unless the method returns an int"""
    m = re.match(r"const(/\w+)? v\d+, #(int|float) ([-\d.eE+]+|nan)", instr)
    if not m:
        return None
    op, kind, v = m.groups()
    if v == "nan":
        return None
    if kind == "float":
        # dexdump guesses a 32-bit constant's type; an int method's is its bits
        return struct.unpack(">i", struct.pack(">f", float(v)))[0] if as_int else float(v)
    if op == "/high16" and not as_int:
        return round(fbits(v), 6)
    return int(v)


def track(body):
    """each instruction with the constants its registers hold at that point"""
    regs = {}
    for i in body:
        m = re.match(r"(const[/\w]*) (v\d+), ", i)
        if m:
            regs[m.group(2)] = const_of(i)
        else:
            m = re.match(r"move(?:/from16)? (v\d+), (v\d+)", i)
            if m:
                regs[m.group(1)] = regs.get(m.group(2))
            m = re.match(r"int-to-float (v\d+), (v\d+)", i)
            if m and isinstance(regs.get(m.group(2)), int):
                regs[m.group(1)] = float(regs[m.group(2)])
        yield i, dict(regs)


GETTERS = {"u()F": "speed", "v()F": "turn", "l()F": "range", "f_()I": "sight", "b(I)F": "delay",
           "W()Z": "air", "X()Z": "land", "V()Z": "sub"}
MOVES = "NONE LAND BUILDING AIR WATER HOVER OVER_CLIFF OVER_CLIFF_WATER".split()


def getter_value(key, body):
    """the constant a getter returns: the last one loaded, leaving out those only compared
    against (an aircraft's speed is 0 below a height, its speed above it)"""
    # a state check (`()Z`: afloat, dived, landed) that picks between two constants is fine
    if any(b.startswith("iget-object") or (b.startswith("invoke") and ":()Z" not in b) for b in body):
        return None
    vals = []
    for k, b in enumerate(body):
        v = const_of(b, as_int=key.endswith("I") or key.endswith("Z"))
        if v is None:
            continue
        reg = b.split()[1].rstrip(",")
        if k + 1 < len(body) and body[k + 1].startswith("cmp") and reg in body[k + 1]:
            continue
        vals.append(v)
    if not vals:
        return None
    if key in ("u()F", "l()F", "v()F"):
        return max(float(v) for v in vals)  # the unit at its best: in its own element, surfaced
    return vals[-1]


def unit_stats(cls, name):
    chain = []
    n = name
    while n and n in cls:
        chain.append(n)
        n = superclass(cls, n)
    out = {}
    for c in reversed(chain):  # parents first, the unit's own override them
        for mn, t, body in methods(cls, c):
            key = mn + t.split(")")[0] + ")" + t.split(")")[1][:1]
            if key in GETTERS and 1 <= len(body) <= 12 and any(b.startswith("return") for b in body):
                v = getter_value(key, body)
                if v is not None:
                    if t.endswith("F") and isinstance(v, int):
                        v = float(v)
                    out[GETTERS[key]] = v
            if key == "g()L" and len(body) <= 3:
                m = re.search(r"sget-object v\d+, game/units/bc;\.(\w)", " ".join(body))
                if m:
                    out["movement"] = MOVES["abcdefgh".index(m.group(1))]
    for mn, t, body in methods(cls, name):
        if mn != "<init>":
            continue
        for i, regs in track(body):
            m = re.match(r"iput(?:-\w+)? (v\d+), v\d+, game/units/[\w/$]+;\.(bQ|bF):F", i)
            if m and regs.get(m.group(1)) is not None:
                out["hp" if m.group(2) == "bQ" else "radius"] = float(regs[m.group(1)])
    shots = []
    for c in chain[:2]:
        for mn, t, body in methods(cls, c):
            if not any("game/f;.R:F" in b or "game/f;.V:F" in b for b in body):
                continue
            cur = {}
            for i, regs in track(body):
                if "game/f;.a:(game/units/ba;FF)game/f;" in i and cur:
                    shots.append(cur)
                    cur = {}
                m = re.match(r"iput(?:-\w+)? (v\d+), v\d+, game/f;\.(R|V|W|r|h):F", i)
                if m and regs.get(m.group(1)) is not None:
                    cur[{"R": "dmg", "V": "area", "W": "areaRadius", "r": "speed", "h": "life"}[m.group(2)]] = float(regs[m.group(1)])
            if cur:
                shots.append(cur)
    out["shots"] = shots
    draws = []
    for c in chain[:2]:
        for mn, t, body in methods(cls, c):
            for i in body:
                m = re.search(r"R\$drawable;\.(\w+):I", i)
                if m and m.group(1) not in draws:
                    draws.append(m.group(1))
    out["drawables"] = draws
    return out


# the turret types, and the strategy class each hands its numbers to
TURRET_STRATEGY = {"turret": "d/a/m", "turretT2": "d/a/k", "turretT3": "d/a/l",
                   "turret_artillery": "d/a/i", "turret_flamethrower": "d/a/j"}


def strategy(cls, name):
    out = {}
    for mn, t, body in methods(cls, P + name):
        key = mn + t.split(")")[0] + ")"
        if key in ("a()", "b()", "c()") and 1 <= len(body) <= 3:
            vals = [v for v in (const_of(b) for b in body) if v is not None]
            if vals:
                out[{"a()": "range", "b()": "delay", "c()": "dmg"}[key]] = float(vals[-1])
    return out


def main():
    cls = classes(dexdump())
    enum = []
    cur = None
    for mn, t, body in methods(cls, P + "bo"):
        if mn != "<clinit>":
            continue
        for i in body:
            m = re.search(r"new-instance v\d+, game/units/([\w/$]+);", i)
            if m:
                cur = m.group(1)
                continue
            m = re.search(r'const-string v\d+, "([^"]+)"', i)
            if m and cur:
                enum.append((m.group(1), cur))
                cur = None
    out = {}
    for name, sub in enum:
        e = {}
        for mn, t, body in methods(cls, P + sub):
            key = mn + t.split(")")[0] + ")" + t.split(")")[1][:1]
            vals = [v for v in (const_of(b, as_int=key.endswith("I")) for b in body) if v is not None]
            if key == "c()I" and len(body) <= 3 and vals:
                e["price"] = vals[-1]
            if key == "y()F" and len(body) <= 3 and vals:
                e["buildSpeed"] = vals[-1]
            if key == "a(Z)L":
                m = re.search(r"new-instance v\d+, game/units/([\w/$]+);", " ".join(body))
                if m:
                    e["class"] = m.group(1)
        if "class" in e:
            e.update(unit_stats(cls, P + e["class"]))
        if name in TURRET_STRATEGY:
            s = strategy(cls, TURRET_STRATEGY[name])
            e.update(range=s.get("range"), delay=s.get("delay"), shots=[{"dmg": s.get("dmg")}])
        out[name] = e
    path = os.path.join(HERE, "rw-core.json")
    json.dump(out, open(path, "w"), indent=1, sort_keys=True)
    print(f"wrote {path}: {len(out)} types")


if __name__ == "__main__":
    main()
