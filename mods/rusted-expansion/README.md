# Rusted Expansion

An official tribute to [Rusted Warfare](https://store.steampowered.com/app/370390/Rusted_Warfare__RTS/),
the game a lot of us played before this one. Six classic units, drawn with
Rusted Warfare's own sprites and firing with its own sounds, with their names
and their numbers brought across as near as the counter web allows:

| Rusted Warfare | here | line |
| --- | --- | --- |
| Tank ($350, 210 hp) | Tank — 280 metal, 610 hp | war factory, level 2 |
| Heavy Tank ($800, 600 hp) | Heavy Tank — 640, 1740, a twin gun and an air missile | war factory, level 3 |
| Helicopter ($700, 150 hp) | Helicopter — 560, 435, hits ground and air | airbase |
| Bomber ($4000, 3000 hp) | Bomber — 3200, 3000, three bombs then a long rearm | airbase, level 3 |
| Gun Boat ($300, 170 hp) | Gun Boat — 240, 490 | naval yard |
| Battle Ship ($1500, 1200 hp) | Battle Ship — 1200, 3480, a twin turret | naval yard, level 3 |

The numbers are Rusted Warfare 1.15's, run through the same calibration the
[converter](https://steelti.de/mods/convert) uses: prices ×0.8, hit points
×2.9, ranges in tiles ×0.7 and damage ×1.6, so that its Tank lands beside the
Bison — except the Bomber, whose 3000 hit points are kept as they stand,
because there they were already a battleship's. Rusted Warfare's two tiers
sit on this game's three: T1 stays T1, T2 needs a Radar Station.

## The art and the sounds

The sheets and the sounds are generated with the game's own pipeline, and
nothing of Rusted Warfare's ships with the mod. What carries over is the look:
each sheet was painted from a prompt that had one frame of the corresponding
Rusted Warfare sprite, blown up pixel for pixel, beside it as a reference, and
asked for an original, more detailed interpretation that keeps the silhouette,
the proportions, the layout of features and the places the faction colour
sits — the boxy tank with its rear pads, the slab-sided heavy tank with the
twin gun and the red missile pods, the stubby helicopter, the swept-wing
bomber, the teardrop gun boat, the long dark battleship with one big turret
amidships. The sizes keep Rusted Warfare's proportions between the units, at
0.8 of its scale in this game, so the Tank sits a step under the Bison.

The firing sounds were prompted from measurements of Rusted Warfare's
recordings — the tank's deep bass thud, the bright cracks of the heavy and
naval guns, the thin snap of the gun boat's — and cut the way the game's own
are. The Bomber drops with this game's bomb sound.

`PROMPTS.md` holds every prompt and the commands; `import-rw.py` cuts the
reference frames from the game's package, which is not part of this
repository; `measure-masters.py` reads the muzzle offsets and mounting rings
off the painted masters. Rusted Warfare is a trademark of Corroding Games;
this mod is a fan tribute and is not affiliated with them.
