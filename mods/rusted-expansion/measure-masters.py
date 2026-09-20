"""Measure the painted masters and write what the manifest needs.

For every `tur.*` sheet: where the body actually sits (its pivot, as a
fraction of the height), how far the muzzle reaches above it (`muzzleOffset`,
in world px: sheet px × 1.5625) and, for two barrels, how far apart they are
(`boreSpacing`). For every hull with a turret: where the mounting ring is
(`mount`, as frame fractions). Prints the findings; `--apply` writes them into
mod.json. Run from anywhere:  python3 mods/rusted-expansion/measure-masters.py [--apply]
"""
import json, os, sys
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
DISPLAY = 1.5625
TURRETS = {"tur.rusted-tank": "rusted-tank", "tur.rusted-heavy-tank": "rusted-heavy-tank",
           "tur.rusted-gun-boat": "rusted-gun-boat", "tur.rusted-battle-ship": "rusted-battle-ship"}
HULLS = {"u.rusted-tank", "u.rusted-heavy-tank", "u.rusted-gun-boat", "u.rusted-battle-ship"}

def alpha_rows(im):
    a = im.split()[3]; w, h = im.size; px = a.load()
    rows = []
    for y in range(h):
        xs = [x for x in range(w) if px[x, y] > 24]
        rows.append((xs[0], xs[-1]) if xs else None)
    return rows

def measure_turret(im):
    rows = alpha_rows(im); w, h = im.size
    widths = [(r[1] - r[0] + 1) if r else 0 for r in rows]
    top = next(y for y, r in enumerate(rows) if r)
    wmax = max(widths)
    body = [y for y, wd in enumerate(widths) if wd >= 0.6 * wmax]
    pivot_y = (body[0] + body[-1]) / 2
    # barrels: opaque runs on a row a little below the muzzle
    y = min(h - 1, top + int(0.06 * h)); a = im.split()[3].load()
    runs = []; x = 0
    while x < w:
        if a[x, y] > 24:
            x0 = x
            while x < w and a[x, y] > 24: x += 1
            runs.append(((x0 + x - 1) / 2, x - x0))
        else: x += 1
    runs = [r for r in runs if r[1] >= 0.01 * w]
    spacing = (runs[-1][0] - runs[0][0]) if len(runs) >= 2 else 0
    return {"pivotY": round(pivot_y / h, 3), "muzzleFrac": (pivot_y - top) / h, "barrels": len(runs), "spacingFrac": spacing / w,
            "bodyWidthFrac": wmax / w}

def _measure_ring_any(im):
    """the biggest very dark blob in the middle of the hull (unused: the centreline one below is what the manifest takes)"""
    w, h = im.size; px = im.convert("RGBA").load()
    dark = {(x, y) for y in range(int(h * 0.2), int(h * 0.8)) for x in range(int(w * 0.2), int(w * 0.8))
            if px[x, y][3] > 200 and max(px[x, y][:3]) < 48}
    best = set()
    seen = set()
    for p in dark:
        if p in seen: continue
        comp = set(); stack = [p]
        while stack:
            q = stack.pop()
            if q in seen or q not in dark: continue
            seen.add(q); comp.add(q)
            x, y = q; stack += [(x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)]
        if len(comp) > len(best): best = comp
    if not best: return None
    cx = sum(x for x, _ in best) / len(best); cy = sum(y for _, y in best) / len(best)
    return [round(cx / w, 3), round(cy / h, 3)]

def measure_ring(im):
    """the mounting ring: the biggest very dark, roundish blob on the hull's centreline"""
    w, h = im.size; px = im.convert("RGBA").load()
    dark = {(x, y) for y in range(int(h * 0.2), int(h * 0.8)) for x in range(int(w * 0.2), int(w * 0.8))
            if px[x, y][3] > 200 and max(px[x, y][:3]) < 48}
    seen = set(); comps = []
    for p in dark:
        if p in seen: continue
        comp = set(); stack = [p]
        while stack:
            q = stack.pop()
            if q in seen or q not in dark: continue
            seen.add(q); comp.add(q)
            x, y = q; stack += [(x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)]
        xs = [x for x, _ in comp]; ys = [y for _, y in comp]
        cx = sum(xs) / len(comp); cy = sum(ys) / len(comp)
        bw = max(xs) - min(xs) + 1; bh = max(ys) - min(ys) + 1
        if abs(cx / w - 0.5) < 0.08 and 0.6 < bw / bh < 1.6: comps.append((len(comp), cx, cy))
    if not comps: return None
    _, cx, cy = max(comps)
    return [round(cx / w, 3), round(cy / h, 3)]

mod = json.load(open(os.path.join(HERE, "mod.json")))
sheets = {s["key"]: s for s in mod["sprites"]}
defs = {d["id"]: d for d in mod["defs"]}
for key, sheet in sheets.items():
    path = os.path.join(HERE, sheet["file"])
    if not os.path.exists(path): print(f"{key}: no master yet"); continue
    im = Image.open(path).convert("RGBA")
    if key in TURRETS:
        m = measure_turret(im)
        d = defs[TURRETS[key]]; fw, fh = sheet["fw"], sheet["fh"]
        muzzle = round(m["muzzleFrac"] * fh * DISPLAY, 1)
        spacing = round(m["spacingFrac"] * fw * DISPLAY, 1) if m["barrels"] >= 2 else None
        print(f"{key}: pivotY {m['pivotY']}  muzzleOffset {muzzle}  barrels {m['barrels']}" + (f"  boreSpacing {spacing}" if spacing else "") + f"  body {m['bodyWidthFrac']:.2f} of width")
        if "--apply" in sys.argv:
            sheet["pivotY"] = m["pivotY"]
            for wpn in d["weapons"]:
                if wpn.get("turret") and wpn["cls"] in ("cannon", "navgun", "autocannon"):
                    wpn["muzzleOffset"] = muzzle
                    if spacing and wpn.get("bores", 1) >= 2: wpn["boreSpacing"] = spacing
    elif key in HULLS:
        ring = measure_ring(im)
        print(f"{key}: ring at {ring}")
        if "--apply" in sys.argv and ring: sheet["mount"] = ring
if "--apply" in sys.argv:
    json.dump(mod, open(os.path.join(HERE, "mod.json"), "w"), ensure_ascii=False, indent=2); open(os.path.join(HERE, "mod.json"), "a").write("\n")
    print("mod.json updated")
