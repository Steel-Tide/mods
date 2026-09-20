# Rusted Expansion — the sheets and the sounds

Everything here is generated with the game's own pipeline from the prompts in
`PROMPTS.md`; that file says how. This one is the record of what came out.

## The sheets

Each was painted by `openai/gpt-image-2` with one frame of the corresponding
Rusted Warfare sprite as a reference — cut by `import-rw.py --refs` from the
unzipped game package into `rusted-warfare/refs/`, both git-ignored, neither
part of the mod — and a prompt asking for an original interpretation that
keeps the silhouette, the proportions, the layout and the places the faction
colour sits. The reference frames are Corroding Games'; the paintings are new.

| sheet | painted from | `fw`×`fh` | measured | what carried over |
| --- | --- | --- | --- | --- |
| `u.rusted-tank` | tank hull | 10×18 | ring at [0.499, 0.441] | two rear deck pads carry the faction colour |
| `tur.rusted-tank` | tank turret | 13×26 | pivot 0.728 | a small dome and one long thin gun |
| `u.rusted-heavy-tank` | heavy tank hull | 18×27 | ring at [0.499, 0.498] | four track-guard blocks carry the colour |
| `tur.rusted-heavy-tank` | heavy tank turret | 17×34 | pivot 0.735 | twin barrels, the red missile pods kept red |
| `u.rusted-helicopter` | helicopter | 16×28 | — | painted without its rotor; the engine spins one 2 px ahead of the centre |
| `u.rusted-bomber` | bomber | 37×37 | — | the band across the fuselage, the wing tips and the tail carry the colour |
| `u.rusted-gun-boat` | gun boat hull | 12×21 | ring at [0.499, 0.479] | a chevron at the bow and a band aft of the ring |
| `tur.rusted-gun-boat` | gun boat gun | 10×20 | pivot 0.664 | the scout ship's pedestal gun, small |
| `u.rusted-battle-ship` | battleship hull | 17×51 | ring at [0.5, 0.559] | the barbette ring and the quarterdeck stripes carry the colour |
| `tur.rusted-battle-ship` | battleship turret | 13×26 | pivot 0.484 | a squat gunhouse with two long barrels |

Sizes keep Rusted Warfare's proportions between the units at 0.8 of its tile
scale in this game (its 20 px tile against this game's 32, and this game's
1.5625× unit draw, would make one of its pixels one sheet pixel; the mod
draws at 0.8 of that after the units were found heavy beside their vanilla
neighbours). Each sheet's ratio is the one the model painted at, and every
size is a whole pixel — a fractional `fw` made the loader's resampler run
past the row end and the hull came out a streaked ghost. `measure-masters.py
--apply` reads off each master where the turret body sits (`pivotY`), where
a hull's mounting ring is (`mount`) and how far the muzzle reaches, and
writes them into mod.json:

| unit | gun | `muzzleOffset` (world px) | `boreSpacing` |
| --- | --- | --- | --- |
| Tank | `cannon` | 28.7 | — |
| Heavy Tank | `gun` | 39.1 | 6.6 |
| Heavy Tank | `aamissile` | 8.0 | — |
| Gun Boat | `gun` | 19.8 | — |
| Battle Ship | `guns` | 19.6 | 7.6 |

The Helicopter's gun fires 15.2 world px ahead of its centre; the Bomber's
bombs drop from it.

## The sounds

Recorded by ElevenLabs from the prompts in `PROMPTS.md`, two takes a slot,
and cut with the game's own cutter (`pnpm sfx --src … --out …`: trimmed to
the transient, one peak, mono 96 kbps). The prompts describe measurements of
Rusted Warfare's recordings rather than the recordings — the tank's shot has
a spectral centroid near 360 Hz, the heavy and naval guns near 1.4 kHz, the
gun boat's near 1.9 kHz, the missile near 900 Hz — and the take kept per slot
is the one whose centroid lands nearest that figure, provided it peaks above
−12 dBFS and lasts 0.15 s. The missile came out brighter than its model (a
5 kHz hiss against a 900 Hz whoosh); the rest land within a third of an
octave. The Bomber keeps the game's own bomb sound.

| key | fires | kept take |
| --- | --- | --- |
| `rusted-expansion-tank-gun` | Tank | 1 |
| `rusted-expansion-heavy-gun` | Heavy Tank gun | 1 |
| `rusted-expansion-heavy-missile` | Heavy Tank missile | 1 |
| `rusted-expansion-heli-gun` | Helicopter | 1 |
| `rusted-expansion-boat-gun` | Gun Boat | 2 (take 1 came back near silent) |
| `rusted-expansion-ship-gun` | Battle Ship | 1 |

## Licence

The paintings and recordings are the mod's own and go out under its
CC-BY-4.0. Rusted Warfare is a trademark of Corroding Games; the mod is a fan
tribute and is not affiliated with them.
