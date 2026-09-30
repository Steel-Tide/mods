#!/usr/bin/env python3
"""Write the mod's map, `maps/the-rumbling.steel-tide-map`: the whole mod on one field.

Paradis (seat 0) holds the south-west behind its Walls — the headquarters, the ODM camp,
the academy, the town, the giant trees — with the Survey Corps and its heroes in the
streets and its Titans at the gate. North of the Walls the Founder stands among the Wall
Titans, with Rod Reiss's Titan crawling past: bring it to the Walls and they crumble into
more. The world (seat 1) holds the east: Marley's base above its harbour and fleet, the
Middle-East Allied Forces to the north, the Warriors in their Titan forms and the mindless
Titans of the Beast Titan's making out in the field before the Walls.

Tiles are 32 world px; a building sits on its top-left tile; a unit's `a` is its facing in
degrees clockwise from east. Pieces that would overlap, stand on the wrong ground or leave a
def out fail the run, since the game drops an overlapping piece without a word. The forms a
unit only takes by itself (on its gear, in the air) and the squads (which are put down as
their soldiers the moment they appear) are left off.

  python3 mods/aot-rumbling/make-map.py
"""
import base64
import json
import math
import os

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "maps", "the-rumbling.steel-tide-map")
MOD = json.load(open(os.path.join(HERE, "mod.json"), encoding="utf-8"))
DEFS = {d["id"]: d for d in MOD["defs"]}
P = "aot-rumbling-"

# the game's terrain codes (game/core/src/core/types.ts)
DEEP, WATER, SAND, GRASS, FOREST, MOUNTAIN, ROAD, MUD, MARSH, SNOW, RUBBLE = range(11)

W, H = 128, 96
t = [[GRASS] * W for _ in range(H)]


def fill(x0, y0, x1, y1, v):
    for y in range(max(0, y0), min(H, y1)):
        for x in range(max(0, x0), min(W, x1)):
            t[y][x] = v


def lcg(seed):
    """a small deterministic generator, so the file is the same every run"""
    s = seed
    while True:
        s = (s * 1103515245 + 12345) % (1 << 31)
        yield s / (1 << 31)


rnd = lcg(20260928)


def blob(cx, cy, rx, ry, v, keep=(GRASS,)):
    """an irregular patch: an ellipse whose edge wanders, laid only on the ground it may cover"""
    bumps = [0.75 + 0.5 * next(rnd) for _ in range(12)]
    for y in range(int(cy - ry - 2), int(cy + ry + 3)):
        for x in range(int(cx - rx - 2), int(cx + rx + 3)):
            if not (0 <= x < W and 0 <= y < H) or t[y][x] not in keep:
                continue
            dx, dy = (x + 0.5 - cx) / rx, (y + 0.5 - cy) / ry
            ang = (math.atan2(dy, dx) / (2 * math.pi)) % 1 * 12
            i = int(ang)
            f = ang - i
            edge = bumps[i] * (1 - f) + bumps[(i + 1) % 12] * f
            if dx * dx + dy * dy <= edge * edge:
                t[y][x] = v


# ---- the ground: the sea along the south, a road from the gate to Marley, rough ground in the field
fill(0, 0, W, 1, FOREST)
fill(0, 0, 1, 82, FOREST)
fill(0, 82, W, 84, SAND)
fill(0, 84, W, H, WATER)
fill(0, 90, W, H, DEEP)
fill(47, 30, 84, 32, ROAD)           # the road from the east wall across the field
fill(23, 28, 25, 80, ROAD)           # the town's high street, out of the gate
blob(62, 60, 5, 4, MUD)
blob(66, 14, 5, 4, RUBBLE)
blob(58, 72, 4, 3, MOUNTAIN)
blob(78, 50, 3, 5, MOUNTAIN)
blob(52, 6, 3, 3, FOREST)


def rle(rows):
    flat = [v for row in rows for v in row]
    out = bytearray()
    i = 0
    while i < len(flat):
        v = flat[i]
        run = 1
        while i + run < len(flat) and flat[i + run] == v and run < 255:
            run += 1
        out += bytes((run, v))
        i += run
    return base64.b64encode(bytes(out)).decode("ascii")


spawns = [{"x": 12, "y": 60}, {"x": 118, "y": 40}]
deposits = [{"x": 38, "y": 70}, {"x": 40, "y": 44}, {"x": 60, "y": 40}, {"x": 104, "y": 40}, {"x": 96, "y": 24}]
decor = [{"kind": "tent", "x": 30, "y": 52}, {"kind": "tent", "x": 33, "y": 52}, {"kind": "freighter", "x": 60, "y": 90},
         {"kind": "freighter2", "x": 20, "y": 92}, {"kind": "tower", "x": 82, "y": 30}]

units = []
taken = {}


def rect(id_, x, y):
    d = DEFS[id_]
    if d["kind"] == "building":
        return x, y, d.get("fw", 2), d.get("fh", 2)
    return x, y, 1, 1


def put(sfx, owner, x, y, a=None):
    id_ = P + sfx
    assert id_ in DEFS, id_
    rx, ry, rw, rh = rect(id_, x, y)
    assert 0 <= rx and 0 <= ry and rx + rw <= W and ry + rh <= H, f"{id_} off the map at {x},{y}"
    for yy in range(ry, ry + rh):
        for xx in range(rx, rx + rw):
            assert (xx, yy) not in taken, f"{id_} at {x},{y} overlaps {taken[(xx, yy)]}"
            taken[(xx, yy)] = id_
    piece = {"id": id_, "owner": owner, "x": x, "y": y}
    if a is not None and DEFS[id_]["kind"] == "unit":
        piece["a"] = a
    units.append(piece)


def ground_of(id_):
    d = DEFS[id_]
    if d["kind"] == "building":
        return "yard" if any(DEFS[u].get("domain") == "ship" for u in d.get("produces", []) if u in DEFS) else "land"
    return {"ship": "water", "air": "any", "amphibious": "any"}.get(d.get("domain"), "land")


# the spawns keep their ground for the opening headquarters
for s in spawns:
    for yy in range(s["y"] - 3, s["y"] + 4):
        for xx in range(s["x"] - 4, s["x"] + 5):
            taken[(xx, yy)] = "the opening HQ"

# ================================================================ Paradis, seat 0
# the Walls: the north stretch with the gate, the east stretch down to the shore
for x in (2, 6, 10, 14, 18, 26, 30, 34, 38, 42):
    put("wall", 0, x, 26)
put("gate", 0, 22, 26)
for y in range(26, 82, 4):
    put("wall-v", 0, 46, y)
for x, y in ((43, 36), (43, 50), (43, 64)):
    put("wall-cannon", 0, x, y)
# the town's power: the game's own plants
for x, y in ((4, 36), (4, 40), (8, 36)):
    units.append({"id": "power3", "owner": 0, "x": x, "y": y})
    for yy in range(y, y + 2):
        for xx in range(x, x + 2):
            taken[(xx, yy)] = "power3"
# the town
for sfx, x, y in (("paradis-hq", 4, 30), ("odm-camp", 10, 30), ("odm-camp-2", 17, 30), ("academy", 28, 30), ("stable", 35, 30),
                  ("giant-tree", 40, 30), ("giant-tree", 40, 34), ("bell-tower", 22, 36), ("house", 28, 38), ("house", 31, 38),
                  ("house-big", 34, 38), ("house", 28, 42), ("house", 31, 42), ("house-big", 34, 42), ("house", 4, 70),
                  ("house", 7, 70), ("house-big", 10, 70), ("giant-tree", 40, 70)):
    put(sfx, 0, x, y)
# the Survey Corps in the streets, the heroes at their head, the Garrison's guns and carts behind
for k, sfx in enumerate(["scout"] * 6 + ["military-police"] * 3 + ["anti-personnel"] * 3 + ["thunder-spear"] * 3):
    put(sfx, 0, 28 + (k % 5) * 2, 48 + (k // 5) * 2, 0)
for k, sfx in enumerate(["erwin", "mikasa", "levi", "eren", "armin", "floch", "kenny", "grisha"]):
    put(sfx, 0, 28 + (k % 4) * 3, 56 + (k // 4) * 3, 0)
for k, sfx in enumerate(["garrison", "garrison", "carriage", "horse", "horse", "field-cannon", "wheeled-cannon"]):
    put(sfx, 0, 4 + k * 3, 46, 0)
for k in range(4):
    put("eldian", 0, 4 + k * 2, 76, 0)
# its Titans at the gate, and the Rumbling to the north: the Founder among the Wall Titans
put("attack-titan", 0, 26, 21, 270)
put("attack-titan-grisha", 0, 16, 20, 270)
put("colossal-armin", 0, 38, 18, 270)
put("founding-titan", 0, 10, 8, 0)
for x, y in ((24, 6), (34, 8), (44, 12)):
    put("wall-titan", 0, x, y, 0)
put("rod-reiss", 0, 58, 6, 90)

# ================================================================ the world, seat 1
# Marley above its harbour
for sfx, x, y in (("marley-hq", 108, 46), ("marley-factory", 102, 46), ("super-heavy-factory", 94, 46), ("air-factory", 118, 50),
                  ("airship-factory", 112, 58), ("warrior-ground", 100, 58), ("institute", 92, 58), ("repair-depot", 106, 64),
                  ("repair-station", 102, 64), ("sniper-tower", 88, 46), ("sniper-tower", 88, 56), ("aa-mg", 90, 64), ("aa-gun", 94, 64),
                  ("coastal-gun", 116, 76), ("naval-yard", 96, 84), ("me-naval-yard", 106, 84)):
    put(sfx, 1, x, y)
for x, y in ((120, 64), (120, 68), (116, 70)):
    units.append({"id": "power3", "owner": 1, "x": x, "y": y})
    for yy in range(y, y + 2):
        for xx in range(x, x + 2):
            taken[(xx, yy)] = "power3"
# the Middle-East Allied Forces to the north
for sfx, x, y in (("me-hq", 110, 8), ("me-factory", 102, 8), ("me-bunker", 92, 10), ("me-bunker-2", 92, 16),
                  ("me-mortar-emplacement", 100, 14), ("me-wall", 88, 6), ("me-wall", 88, 8), ("me-fort", 88, 10),
                  ("me-wall", 88, 12), ("me-wall", 88, 14), ("repair-station", 116, 16)):
    put(sfx, 1, x, y)
# the armies, facing west across the field
MARLEY = ["marley-engineer", "marley-truck", "marley-rifleman", "marley-rifleman", "marley-machine-gunner", "marley-machine-gunner",
          "marley-grenadier", "marley-at-rifleman", "marley-flamethrower", "marley-troop-truck", "marley-armored-car", "marley-tank",
          "marley-tank", "anti-titan-gun", "super-heavy-tank"]
for k, sfx in enumerate(MARLEY):
    put(sfx, 1, 88 + (k % 5) * 3, 70 + (k // 5) * 4, 180)
ME = ["me-engineer", "me-rifleman", "me-rifleman", "me-sapper", "me-sapper", "me-hmg", "me-mortar", "me-truck", "me-light-tank",
      "me-light-tank", "me-tank", "me-at-gun", "me-howitzer"]
for k, sfx in enumerate(ME):
    put(sfx, 1, 100 + (k % 5) * 3, 20 + (k // 5) * 4, 180)
# the Warriors, in human form by the training ground and as their Titans in the field
for k, sfx in enumerate(["gabi", "porco", "falco", "pieck", "lara", "annie", "reiner", "bertholdt", "zeke"]):
    put(sfx, 1, 96 + (k % 5) * 2, 54 + (k // 5) * 2, 180)
for sfx, x, y in (("armored-titan", 66, 36), ("armored-titan-shed", 66, 46), ("female-titan", 72, 40), ("colossal", 76, 22),
                  ("jaw-titan", 60, 50), ("cart-titan", 74, 58), ("cart-titan-cannon", 80, 60), ("war-hammer-titan", 70, 66),
                  ("beast-titan", 84, 38)):
    put(sfx, 1, x, y, 180)
# the mindless, before the Walls
MINDLESS = ["pure-small", "pure-medium", "pure-large", "pure-fat", "smiling-titan", "long-neck-abnormal", "leaping-abnormal",
            "crawling-abnormal", "running-abnormal", "red-eyed-abnormal"]
for k, sfx in enumerate(MINDLESS):
    put(sfx, 1, 54 + (k % 5) * 5, 74 + (k // 5) * 5 if k >= 5 else 70 + (k // 5) * 5, 180)
# the air fleet over the base, the navy in the bay
for k, sfx in enumerate(["fighter", "fighter", "heavy-bomber", "combat-airship", "strategic-airship", "bird-titan"]):
    put(sfx, 1, 90 + k * 5, 36, 180)
for sfx, x in (("landing-craft", 50), ("frigate", 68), ("ironclad", 80), ("battleship", 94)):
    put(sfx, 1, x, 91, 180)

# ================================================================ checks
tile = lambda x, y: t[y][x]
for u in units:
    if u["id"] not in DEFS:
        continue
    rx, ry, rw, rh = rect(u["id"], u["x"], u["y"])
    tiles = [tile(xx, yy) for yy in range(ry, ry + rh) for xx in range(rx, rx + rw)]
    need = ground_of(u["id"])
    if need == "land":
        assert all(v not in (DEEP, WATER) for v in tiles), f"{u['id']} stands in the water at {u['x']},{u['y']}"
    elif need == "water":
        assert all(v in (DEEP, WATER) for v in tiles), f"{u['id']} stands ashore at {u['x']},{u['y']}"
    elif need == "yard":
        assert all(v in (DEEP, WATER) for v in tiles), f"{u['id']} is not on the water at {u['x']},{u['y']}"
        ring = [tile(xx, yy) for yy in range(ry - 1, ry + rh + 1) for xx in range(rx - 1, rx + rw + 1)
                if 0 <= xx < W and 0 <= yy < H and not (rx <= xx < rx + rw and ry <= yy < ry + rh)]
        assert any(v not in (DEEP, WATER) for v in ring), f"{u['id']} has no shore at {u['x']},{u['y']}"
# the Founder is kept out of the Walls' reach: brought to them, they crumble
founder = next(u for u in units if u["id"] == P + "founding-titan")
for u in units:
    if u["id"] in (P + "wall", P + "wall-v", P + "gate"):
        assert math.hypot(u["x"] - founder["x"], u["y"] - founder["y"]) > 14, "the Founder stands too near the Walls"
# the Eldians are kept out of the Beast Titan's roar: its side's own turn at its call
beast = [u for u in units if u["id"] == P + "beast-titan"]
for u in units:
    if u["id"] == P + "eldian":
        assert all(b["owner"] != u["owner"] or math.hypot(u["x"] - b["x"], u["y"] - b["y"]) > 18 for b in beast)
SELF_FORMS = {d["id"] for d in MOD["defs"] if d["id"].endswith(("-odm", "-squad")) or "-ridden" in d["id"]}
missing = sorted(set(DEFS) - {u["id"] for u in units} - SELF_FORMS)
assert not missing, f"not on the map: {missing}"
assert len(units) <= 400, len(units)

data = {
    "format": "steel-tide-map",
    "v": 1,
    "name": "The Rumbling",
    "description": "All of Attack on Titan: The Rumbling on one field. Paradis behind its Walls with the Survey Corps in the streets and the Founder among the Wall Titans to the north; Marley's base, harbour and fleet and the Middle-East Allied Forces in the east, with the Warriors' Titans and the mindless ones out in the field before the Walls.",
    "translations": {
        "zh": {"name": "地鸣", "description": "整个《进击の巨人『地鸣』》摆在一片战场上：城墙后的帕拉迪岛，调查兵团在街上，始祖巨人与地鸣巨人立在墙北；东方是马莱的基地、港口与舰队，以及中东联合军；战士们的巨人和无垢巨人在墙外的原野上。"},
    },
    "w": W,
    "h": H,
    "terrain": rle(t),
    "deposits": deposits,
    "spawns": spawns,
    "decor": decor,
    "units": units,
}
os.makedirs(os.path.dirname(OUT), exist_ok=True)
text = json.dumps(data, ensure_ascii=False, separators=(",", ":"))
open(OUT, "w", encoding="utf-8").write(text + "\n")
n0 = sum(1 for u in units if u["owner"] == 0)
print(f"wrote {os.path.relpath(OUT)}: {W}x{H}, {len(units)} pieces ({n0} of Paradis, {len(units) - n0} of the world), {len(decor)} props, {len(text) / 1024:.0f} KB")
