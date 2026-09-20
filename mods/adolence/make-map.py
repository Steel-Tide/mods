#!/usr/bin/env python3
"""Write the mod's map, `maps/city-of-sin.steel-tide-map`: the edge of Adolon.

A map a mod carries (`maps` in mod.json) is a file the Map Editor could have
exported — terrain, deposits, spawns, props and the pieces standing before the
whistle — and it may stand the mod's own units. This one is drawn here rather
than in the editor so it can be regenerated with the roster: a city grid on
the west bank, the police dug in around the Joint Precinct, and across the
avenue the dead, bred from two nests in the rubble.

Seat 0 opens on the west spawn and gets the police; seat 1 opens on the east
spawn and gets the dead. Tiles are 32 world px; a building sits on its
top-left tile; a unit's `a` is its facing in degrees clockwise from east.

  python3 mods/adolence/make-map.py
"""
import base64
import json
import os

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "maps", "city-of-sin.steel-tide-map")

# the game's terrain codes (game/core/src/core/types.ts)
DEEP, WATER, SAND, GRASS, FOREST, MOUNTAIN, ROAD, MUD, MARSH, SNOW, RUBBLE = range(11)

W, H = 72, 48
t = [[GRASS] * W for _ in range(H)]


def fill(x0, y0, x1, y1, v):
    for y in range(max(0, y0), min(H, y1)):
        for x in range(max(0, x0), min(W, x1)):
            t[y][x] = v


# ---- the ground: a river down the east edge, a lake, rubble where the city burned
fill(66, 0, 72, 48, WATER)
fill(69, 0, 72, 48, DEEP)
fill(60, 40, 67, 48, WATER)
fill(0, 0, 72, 2, FOREST)
fill(0, 46, 60, 48, FOREST)
fill(0, 2, 3, 46, FOREST)
# the avenues: a grid of roads, the city's bones
for y in (10, 24, 38):
    fill(4, y, 66, y + 2, ROAD)
for x in (14, 30, 46):
    fill(x, 2, x + 2, 46, ROAD)
# the blocks the dead hold are rubble and mud; the police side keeps its lawns
fill(48, 3, 66, 10, RUBBLE)
fill(48, 12, 66, 24, RUBBLE)
fill(32, 12, 46, 24, MUD)
fill(48, 26, 66, 38, RUBBLE)
fill(32, 26, 46, 38, MUD)
fill(32, 40, 60, 46, RUBBLE)
# sand along the water
fill(64, 2, 66, 46, SAND)
# a pond behind the police yards, for the boats the naval yard would launch
fill(4, 27, 13, 37, SAND)
fill(5, 28, 12, 36, WATER)
fill(7, 30, 10, 34, DEEP)


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


# ---- what the map offers: metal for both sides
deposits = [{"x": 8, "y": 6}, {"x": 8, "y": 42}, {"x": 22, "y": 20}, {"x": 22, "y": 30},
            {"x": 56, "y": 6}, {"x": 56, "y": 42}, {"x": 40, "y": 20}, {"x": 40, "y": 30}]
# the police open on the west, the dead on the east
spawns = [{"x": 8, "y": 24}, {"x": 58, "y": 24}]

# ---- props: the city that was
decor = [
    {"kind": "tower", "x": 5, "y": 4}, {"kind": "pole", "x": 13, "y": 9}, {"kind": "pole", "x": 29, "y": 9}, {"kind": "pole", "x": 45, "y": 9},
    {"kind": "pole", "x": 13, "y": 23}, {"kind": "pole", "x": 29, "y": 23}, {"kind": "pole", "x": 13, "y": 37}, {"kind": "pole", "x": 29, "y": 37},
    {"kind": "hangar", "x": 5, "y": 40}, {"kind": "tent", "x": 18, "y": 4}, {"kind": "tent", "x": 22, "y": 4},
    {"kind": "bunker", "x": 50, "y": 14}, {"kind": "bunker", "x": 50, "y": 30}, {"kind": "hangar", "x": 52, "y": 4},
    {"kind": "tower", "x": 62, "y": 12}, {"kind": "tower", "x": 62, "y": 34}, {"kind": "derrick", "x": 55, "y": 43},
]

# ---- the pieces
units = []


def b(id_, owner, x, y):
    units.append({"id": f"adolence-{id_}", "owner": owner, "x": x, "y": y})


def u(id_, owner, x, y, a=None):
    units.append({"id": f"adolence-{id_}", "owner": owner, "x": x, "y": y, **({"a": a} if a is not None else {})})


# the police, seat 0: the precinct and its yards behind the west avenue, the line on the middle avenue
b("precinct", 0, 16, 14)
b("outpost", 0, 16, 18)
b("garage", 0, 21, 14)
b("helipad", 0, 21, 18)
b("solar", 0, 5, 14)
b("solar", 0, 5, 18)
b("supply-cache", 0, 8, 6)
b("supply-cache", 0, 8, 42)
for y in (13, 16, 19, 22, 27, 30, 33):
    b("mg-tower", 0, 27, y)
for y in range(12, 36, 1):
    if y % 3 != 1:
        b("barricade", 0, 29, y)
# the cruisers on the avenue, the officers two deep behind the barricades, the armour in the yard
for i, y in enumerate((13, 15, 17, 19, 27, 29, 31, 33)):
    u("cruiser" if i % 2 == 0 else "armoured-car", 0, 25, y, 0)
LINE = ("officer-rifle", "armed-police-rifle", "taskforce-rifleman", "guard-gunner", "swat-field", "taskforce-shotgunner",
        "officer-pistol", "traffic-officer", "military-police", "taskforce-rocketeer", "guard-rifleman", "army-marksman")
for y in range(12, 36):
    if y % 3 != 1:
        u(LINE[y % len(LINE)], 0, 28, y, 0)
    if y % 2 == 0 and not (24 <= y <= 25):
        u(LINE[(y + 5) % len(LINE)], 0, 27 if y % 3 == 1 else 26, y, 0)
u("light-tank", 0, 24, 21, 0)
u("light-tank-flame", 0, 24, 23, 0)
u("heavy-tank", 0, 23, 22, 0)
u("mortar", 0, 20, 22, 0)
u("mortar", 0, 20, 24, 0)
u("heavy-mg", 0, 26, 21, 0)
u("heavy-mg", 0, 26, 25, 0)
u("m1a2", 0, 18, 22, 0)
u("m1128", 0, 18, 26, 0)
u("heavy-gunship", 0, 22, 26, 0)
u("police-heli", 0, 22, 12, 0)
u("command-van", 0, 20, 26, 0)
u("scout-boat", 0, 8, 32, 0)

# the dead, seat 1: two nests in the rubble and the horde already on the avenue
b("sloth-nest", 1, 56, 6)
b("sloth-nest", 1, 56, 42)
horde = ["zombie"] * 5 + ["brute", "zombie", "rager", "zombie", "bloater", "zombie", "burster", "prisoner", "zombie", "imploder"]


def lcg(seed):
    """a small deterministic generator, so the file is the same every run"""
    s = seed
    while True:
        s = (s * 1103515245 + 12345) % (1 << 31)
        yield s / (1 << 31)


rnd = lcg(20260920)
taken = set()
# loose knots of the dead, thickest at the avenue's edge and thinning east, none on the roads
knots = [(35, 16, 4), (36, 31, 4), (38, 22, 5), (40, 14, 4), (40, 34, 4), (43, 19, 4), (43, 28, 4), (37, 40, 3), (45, 8, 3)]
k = 0
for cx, cy, r in knots:
    for _ in range(14):
        x = int(cx + (next(rnd) - 0.5) * 2 * r)
        y = int(cy + (next(rnd) - 0.5) * 2 * r)
        if not (33 <= x <= 47 and 3 <= y <= 45) or t[y][x] == ROAD or (x, y) in taken:
            continue
        taken.add((x, y))
        u(horde[k % len(horde)], 1, x, y, 180 + int((next(rnd) - 0.5) * 60))
        k += 1
for x, y in ((50, 8), (50, 20), (50, 34), (52, 16), (52, 28)):
    u("gorilla", 1, x, y, 180)
u("no-longer-human", 1, 48, 24, 180)
u("sin-of-wrath", 1, 54, 24, 180)
u("sin-of-gluttony", 1, 52, 10, 180)
u("road-rage", 1, 44, 26, 180)
u("road-rage", 1, 44, 22, 180)
u("acid-mass", 1, 46, 14, 180)
u("acid-mass", 1, 46, 34, 180)
for x, y in ((40, 6), (44, 8), (42, 40), (38, 42)):
    u("flying-husk", 1, x, y, 180)
for x, y in ((62, 20), (62, 28), (61, 44)):
    u("gloater", 1, x, y, 180)
for x, y in ((56, 12), (58, 36), (60, 18)):
    u("turned-officer", 1, x, y, 180)

assert len(units) <= 400, len(units)
data = {
    "format": "steel-tide-map",
    "v": 1,
    "name": "City of Sin",
    "description": "The west bank of Adolon: the police dug in along the middle avenue, the dead already across it, and two nests breeding more in the rubble. Hold the line, then take the blocks back.",
    "translations": {
        "zh": {"name": "罪恶之都", "description": "阿多隆西岸：警察沿中央大道据守，死者已经越过大道，废墟里两座巢穴还在繁殖。守住防线，再把街区夺回来。"},
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
print(f"wrote {os.path.relpath(OUT)}: {W}x{H}, {len(units)} pieces, {len(decor)} props, {len(text) / 1024:.0f} KB")
