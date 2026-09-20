"""Cut the reference frames the PROMPTS.md sheets are painted from.

Run from the registry root with the unzipped Rusted Warfare package at
`rusted-warfare/` (git-ignored):  python3 mods/rusted-expansion/import-rw.py --refs

For each sheet it takes the first frame of the Rusted Warfare strip, drops the
near-invisible alpha, crops to the drawing and blows it up nearest-neighbour to
about 768 px on the long side, into `rusted-warfare/refs/` (git-ignored too).
The generator hands that picture to the model with the prompt, so the painted
sheet keeps the original's silhouette and layout; the picture itself never
ships with the mod.
"""
import os, sys
from PIL import Image

RW = "rusted-warfare/"
D = RW + "res/drawable/"
U = RW + "assets/units/"
OUT = RW + "refs/"

# reference name -> (source, frames in the strip)
SRC = {
    "tank-hull": (U + "tanks/tank.png", 3),
    "tank-turret": (U + "tanks/tank_turret.png", 1),
    "heavy-tank-hull": (D + "heavy_tank.png", 3),
    "heavy-tank-turret": (D + "heavy_tank_turret.png", 1),
    "helicopter": (U + "helicopter/helicopter.png", 1),
    "bomber": (U + "bomber/base.png", 1),
    "gun-boat-hull": (D + "gun_boat.png", 1),
    "gun-boat-turret": (D + "ship_scout_turret.png", 1),
    "battle-ship-hull": (D + "battle_ship2.png", 1),
    "battle-ship-turret": (D + "battle_ship2_turret.png", 1),
}

if "--refs" not in sys.argv:
    print(__doc__); sys.exit(2)
os.makedirs(OUT, exist_ok=True)
for name, (path, frames) in SRC.items():
    im = Image.open(path).convert("RGBA")
    fw = im.width // frames
    fr = im.crop((0, 0, fw, im.height))
    px = fr.load()
    for y in range(fr.height):
        for x in range(fr.width):
            if px[x, y][3] < 32: px[x, y] = (0, 0, 0, 0)
    fr = fr.crop(fr.getbbox())
    k = max(1, 768 // max(fr.size))
    big = fr.resize((fr.width * k, fr.height * k), Image.NEAREST)
    big.save(f"{OUT}{name}.png")
    print(f"{name:20s} {fr.size[0]}x{fr.size[1]} ×{k} -> {big.size[0]}x{big.size[1]}")
