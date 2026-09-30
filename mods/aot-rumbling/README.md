# Attack on Titan: The Rumbling (进击の巨人『地鸣』)

A port of *进击の巨人『地鸣』* 1.443, a Rusted Warfare mod by 辣条QWQ, first
made by Mirka. Three sides and the Titans: Paradis behind its Walls with
the Survey Corps on their omni-directional mobility gear, Marley with its army,
air fleet, airships and navy and the Warriors who inherit the Nine Titans, and
the Middle-East Allied Forces.

What comes across is the roster, the art, and what the game's mod rules can
carry of the original's scripting: soldiers who fly on their gear, squads that
arrive whole, shifters who take their Titan forms and are given back when the
Titan falls, Eldians who turn into mindless Titans at the Beast Titan's roar,
the Colossal's blast and the Rumbling. What stays behind is the rest of it: the
original's three currencies and research tree, weather and day, story events,
the wall cannons that need a crew, the barrel launcher, the armoured train and
its rails, the emoji system.

## How a side starts

Each side has a command building the game's engineer places: **Paradis
Headquarters**, the **Marleyan Administration** and the **Middle-East
Administration**. Each trains its side's builder — the Garrison soldier, the
Marleyan engineer, the Middle-East engineer — and the builder places the rest.

- **Paradis** — the ODM Training Camp trains the Survey Corps, the Military
  Police and the Anti-Personnel troops a squad at a time, and the heroes:
  Erwin, Mikasa, Levi, Floch and Kenny, and at its second level Eren, Armin,
  Grisha, Zeke, the thunder spears, the Eldians and Rod Reiss's Titan. The
  Military Academy is what that second level asks for. Around them: houses and
  giant trees for metal, the bell tower, the stable for horses and carriages,
  wall cannons, and the Wall itself — its sections and its gate.
- **Marley** — the army factory's squads, trucks, armoured cars, tanks and
  heavy anti-Titan guns; the super-heavy tank; fighters and heavy bombers;
  combat and strategic airships; landing craft, frigates, ironclads and the
  Allied battleship; and the Warrior Training Ground's Warriors: Gabi, Porco,
  Falco, Pieck, Lara Tybur, Annie, Reiner, Bertholdt and Zeke. The Weapons
  Institute unlocks the heavy arms, the air force and the coastal gun.
- **The Middle East** — riflemen and sappers by the squad, heavy machine-gun
  and mortar teams, trucks, light and super-heavy tanks, anti-Titan field guns
  and howitzers; walls, a blockhouse, bunkers and a heavy mortar emplacement.

146 defs: 35 buildings and 111 units, of which 14 are a soldier or a hero on the
gear (the same unit's airborne form), 2 are the horse ridden, 12 are squads, and
26 are Titans.

## What they do

- **The gear.** A Survey Corps soldier walks and fights with its blades on
  foot. Moving with a building or a Titan within a few tiles, it takes to the
  air on its gear (`near`): it flies over walls and water, reaches flyers, and
  cuts at a Titan's nape for far more than it can on foot. It comes down when
  there is nothing left to hook onto or its gas has run out, and rests a few
  seconds before it lifts again. The heroes do the same.
- **Squads.** Squads are trained whole and put down as their soldiers the
  moment they roll out: six riflemen, six Survey Corps, five sappers.
- **Shifters.** A shifter's card has a button for its Titan: Eren the Attack
  Titan, Armin and Bertholdt the Colossal, Reiner the Armored, Annie the
  Female, Zeke the Beast, Porco the Jaw, Falco its winged form, Pieck the Cart,
  Lara the War Hammer, Grisha the Attack Titan before Eren. Badly wounded, a
  shifter takes its Titan of itself. The Titan stands up at full strength and
  lasts as long as the original's shifter could hold it, then the human steps
  out; when the Titan falls the human is cut free. A shifter rests twenty
  seconds between forms.
- **The Titans' gifts.** The Attack Titan hardens, the Female Titan guards
  her nape, the Armored Titan sheds its armour and runs when nearly beaten,
  the Cart Titan takes on and puts down Marley's cannon, and the Colossal is
  born in a blast that levels everything around it. The Beast Titan hurls
  boulders across the field.
- **Eldians.** At the Beast Titan's roar — within fourteen tiles of one of its
  own side — an Eldian soldier becomes a mindless Titan, of any kind, at the
  original's odds. Its own button does the same for the price of the fluid.
  The mindless heal a little on every kill.
- **Heroes.** The Survey Corps beside Erwin give their hearts: they strike
  faster and take less harm. The Anti-Personnel troopers beside Floch hit
  harder. Levi's card has his spinning strike. Eren holds out longer beside
  Mikasa.
- **The Rumbling.** Eren's second button, with the Academy and the second camp
  standing, makes him the Founding Titan. The Founder calls up Wall Titans as
  it goes, and every Wall section it comes near crumbles into them. A Wall
  Titan and the Founder crush what is underfoot as they walk; both, and the
  Colossal, wade through the sea.

## The map

*The Rumbling* (地鸣, `maps/the-rumbling.steel-tide-map`) stands the whole mod
on one 128×96 field, 187 pieces. Paradis (seat 0) holds the south-west behind
its Walls with the Survey Corps in the streets and its Titans at the gate; the
Founder stands among the Wall Titans to the north. The world (seat 1) holds
the east: Marley's base above its harbour and fleet, the Middle-East Allied
Forces to the north, and the Warriors' Titans and the mindless out in the field
before the Walls. `make-map.py` writes it from the roster and fails if a def is
missing (other than the airborne forms and the squads), a piece would overlap
another or stand on the wrong ground, or the Founder stands near enough to the
Walls to wake them.

## The numbers

The original's credits run about ten times Rusted Warfare's stock prices and
its hit points about three times; they come down as metal at a hundredth to
40 000 credits and more gently above, and as hit points at 0.22 to 3000 and
more gently above. Squads cost about twice the original's price for the lot. Damage
is scaled like hit points, so a fight lasts as long as it did, and every unit's
damage a second is kept within sight of its price. Ranges are pressed in at the
long end: a rifle's 350 px is six tiles, a coastal gun's 1100 ten and a half.

Weapons written in the original as scripts rather than guns — the soldiers'
blades and nape cuts, pistols, muskets and thunder spears, the Beast Titan's
boulder, the Founder's and the Wall Titans' weight — are written out in the
converter from the original's numbers.

## The art

A Titan in the original is not a picture but a body of parts — torso,
shoulders, arms, legs and feet, head — posed by keyframed animations. The
converter draws each Titan from its parts at those keyframes: standing, eight
frames of its walk and six of its strike, so the Titans stride and swing in the
game. Soldiers keep their own strips: walking, standing, and the frames of a
cut.

Every part is drawn at the scale and in the order Rusted Warfare draws it:
limbs at the body's scale, heads and guns at the turrets' (`scaleTurretImagesTo`
against the unit's `image_turret`), decals on their layers — the Jaw Titan's
head, the banners on Marley's administration, the training fields under the
camps, the howitzer's crew — and attached units on theirs, so the stable's yard
lies under it and its fences over it. A decal the original shows only on a
condition (a fire, a shield, a health bar, a selection) is left out. The Wall is
the package's current one (`新城墙`), not the older sections it still carries,
and its sections, its gate and its north–south run are drawn at one scale, so the
gate stands as tall as the Wall it is set in.

A unit's main gun turns: the chain of turrets that fires hardest, even when it
hangs from a ring with no picture of its own (the tanks) or is a unit bolted on
(the super-heavy tank's main turret, the battleship's main guns). Guns alike each
turn on a ring of their own (`turretMounts`): the frigate's and the ironclad's
three turrets, the battleship's two, the airships' broadside guns. A towed gun —
the field and wheeled cannons, the anti-Titan guns, the howitzer — is laid by
turning the whole gun, so its barrel never swings off its carriage. A horse
carries two, and shows them in the saddle as it does.

Pictures in the package that are stills from the anime (the portraits, the
icon) are not used.

## Rebuilding

```bash
python3 mods/aot-rumbling/port-aot.py
```

```bash
python3 mods/aot-rumbling/make-map.py
```

The first reads the unpacked package at `rusted-warfare-mods/进击の巨人『地鸣』1.443【公测】`
(not in this repository) and writes `mod.json`, the sheets and the sounds;
`--dry` prints the table, `--dry --art` where each picture came from, and
`--dump <name>` a unit's merged ini. The second writes the map from `mod.json`.
