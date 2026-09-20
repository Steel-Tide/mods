# Adolence: City of Sin

A port of *Adolence-罪恶之都* (City of Sin), the Rusted Warfare total conversion
by 自然常数也有人用? and the Adolence team (art: 潘子慕, 逆模因部成员, 橘子; code:
Sky_Fall乄神域), made with the lead author's permission. The package ported is
release Q3.6.0 of the V3.0 line.

The original is a scenario: a city's police against the SPK strain and the dead
it makes, with three currencies, a day-night cycle, scripted supply drops and a
faction picker. Steel Tide mods add units and buildings and nothing else, so
what comes across is the roster and the art: the police, the troops that come
to their aid, their vehicles, aircraft and boats, and the dead. The systems stay
behind.

## What is in it

Fourteen buildings, all placed by the engineer (the original's coast guard
base is left out: the game puts a naval yard on the shore by its id, so a
mod's shipyard would launch its boats onto grass; the scout boat and the
carrier come from the vanilla naval yard instead):

| building | line | what it does |
| --- | --- | --- |
| Joint Precinct → VD Joint Precinct | command | trains the basic police kit; the VD stage has the whole garrison on call |
| Police Outpost | infantry | every foot unit, from patrol officers to the task force; the Zhongzhou squad once an arsenal stands |
| Police Garage → Police Arsenal | vehicles | cruisers and armoured cars; the arsenal adds the military vehicles, the black-steel tanks, the Abrams and the Stryker |
| Police Helipad → Military Airfield | air | the police helicopter; then gunships, fighters, bomber and transport |
| Solar Array → T2 | power | +25, then +75 |
| Supply Cache → II | metal | an extractor on a deposit, 1.4 then 3.0 a second |
| MG Tower | defence | a machine gun on a street mount, fires at aircraft |
| Barricade | defence | a 1×1 block of steel to funnel the horde |
| Sin of Sloth | the dead | a nest on a deposit; it trains every zombie |

Eighty-one units: 22 kinds of infantry, 33 vehicles, 7 aircraft, 2 boats and
17 of the dead. The dead were a spawned enemy in the original; here anyone can
raise them from a nest, which is the only way a mod can put them on a map.

## The map

The mod carries a map, *City of Sin* (`maps/city-of-sin.steel-tide-map`): the
west bank of Adolon, a road grid with the police dug in along the middle
avenue, a pond behind their yards, the dead already across the avenue and two
nests breeding more in the rubble.
Seat one opens on the west and gets the police, seat two on the east and gets
the dead. With the mod on, the map is a card in the Conquest setup and the
lobby beside your own map; pick it and it plays exactly as laid. It is drawn by
`make-map.py` rather than in the Map Editor, so it can be regenerated with the
roster; the editor opens it like any map, and with the mod on, the mod's units
are in its forces palette.

## How the numbers were made

The package prices things in credits, 柴油 (diesel) and 补给 (supply); this game
has one metal. The three are folded into one figure (a diesel is worth ten
credits, a supply five, from the ratio the buildings generate them in), then
compressed with a power law, `metal = 0.287 × price^0.763`, anchored so a police
cruiser lands near a scout car and a black-steel light tank near a heavy tank,
and kept within a quarter to two and a half times the unit's hit points.
Buildings are a plain tenth of their price. The dead, priced at nothing in the
original, are priced by what they take to kill.

Hit points are 0.35× the original's. Damage is 0.14×, not 0.35×, because the
package kills about three times faster between equals than this game does;
the original's energy magazines are averaged into the reload. Ranges are 0.55
of a tile per 20 original px, speeds 0.55 of the original's px per tick in px
per second, and infantry a step quicker than that so they are not calibrated
as tanks. Every conversion rule is in `port-rw.py`, with a hand-written
weapon set for the Abrams family, the Stryker, the bomber and the carrier,
whose original guns are scripted.

## The art and the sounds

The sheets are the package's own sprites, laid out for this game: hull and
turret parts composited at their offsets, a building's back and top layers
merged, sizes at 0.82 sheet px per original px with the long ones (the
Abrams is 150 px in the original) compressed so nothing is longer than a
battleship. The package disables team colouring. The sheets keep the game's
recolouring switched on, because a sheet without it does not draw at all, but
the converter nudges any pixel the magenta test would catch (the pinks of the
dead, mostly) just out of its reach, so nothing changes colour: your police
and the enemy's look the same, as they did there. Helicopter rotors and the
husk's wings, spinning arms in the original, are painted onto the bodies.

The original draws much of a vehicle with decals: pictures laid on the body or
on a turret besides their own images. The still ones are painted into the
sheets in the order the original draws them — the hull's outline and the
driver's hatch on the hull; on the Abrams' turret the vents, sights, stowage
and crates, the crew hatches with their machine guns at rest, the Stryker's
gun and its shadow. The rest are the game's own decals (`decals` on the def),
because a sheet cannot hold them: the outline a turret carries *under* the
hull, showing where the gun overhangs it; the headlights of every
vehicle and the torches of the infantry, which come on at dusk and are laid
over the dark like lamps; the ambush car's brake lights when it stands; and
the barrels of the machine-gun tower and the MG tanks, which turn while the
gun fires. The interface decals — selection rings, waypoints, ammunition
counters, preview icons — and the ones a script drives are left out. So are
the original's shadow decals: it casts an offset silhouette under every
vehicle and its turret, and so does this game now, hull and turret each,
from the art itself — the same look without a sheet for it.

The firing sounds are the package's recordings, cut to dry mono one-shots
under a second. The Abrams and the Stryker fire the 120 mm and 105 mm
recordings; small arms fire the calibre recordings the original assigned them.

## Licence and credit

The art and the sounds are the Adolence team's, used with permission; they are
not offered under CC-BY, and the manifest says `LicenseRef-Adolence`. Do not
lift them for another mod. The conversion script and the manifest are the
port's own. The original's authors asked that anyone using their work be
credited in the contributors list, and the author field and this file do that.
The package itself (`rusted-warfare-mods/`) is not part of this repository.
