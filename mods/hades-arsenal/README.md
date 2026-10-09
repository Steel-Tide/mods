# Hades Arsenal · 冥府军械

By 11的沧斯拉. Three starships and a missile battery from the underworld's
armoury, joined in version 1.1.0 by the seven-piece Hades Fleet · 冥犬舰队.

| piece | where | what it does | what beats it |
| --- | --- | --- | --- |
| **Hades Star Battleship** (Hades Star 5级战斗舰) | naval yard 3, radar | a heavily armoured hull (5,200 hp); a triple spike cannon that fires on any bearing out to 10 tiles | no air defence: anti-ship jets, torpedoes, a Sovereign that keeps its distance |
| **Ceasefire-class Siege Battleship** (止战级攻坚战列舰) | naval yard 3, radar | a heavy siege gun that shells the shore from 16 tiles; rocket pods and an autocannon for anything that closes | no air defence; destroyers' torpedoes |
| **Hades Hound Storm Fighter** (冥犬风暴舰) | air base 2 and 3 | hovers over the fight; a guided six-rocket salvo on ground, sea and air targets alike | fighters, which it cannot outfly, and massed flak |
| **Strategic Strike Missile Tower** (战略打击导弹塔) | engineer, radar | a 2×2 battery: thirty-two rockets a salvo every 30 s on ground and sea targets 6 to 24 tiles out, as far as a radar sees | the salvo scatters wide and point defence can thin it; nothing to shoot back at aircraft |

The main guns, the Hound's rockets and the tower's salvo fire with the mod's
own recording. The Hound and the tower wear their faction's colour.

作者：11的沧斯拉。三艘星舰与一座导弹阵列，都是后期单位，价格与克制关系都已按原版平衡。
Hades Star 战斗舰与止战级无法对空，冥犬风暴舰怕战斗机，导弹塔的火箭散布大、可被点防御拦截。

The Hades Fleet uses a separate production chain. An engineer or engineer
boat builds the mothership on water beside a shore. The mothership produces
frigates and dreadnoughts; a frigate builds the research institute along the
shore, which produces sentry ships, bombers and shadow destroyers.

| piece | where | what it does | what beats it |
| --- | --- | --- | --- |
| **Hades Mothership** (冥犬母舰) | engineer or engineer boat, shore | an immobile 3×3 shipyard with 14,000 hp and powerful anti-air guns | cannot move or shoot ground and naval attackers |
| **Hades Frigate** (冥犬护卫舰) | mothership | a light gunship and the fleet's research-institute builder | heavy ships, submarines and aircraft |
| **Hades Institute** (冥犬研究所) | Hades frigate, shore | a 2×2 shipyard with 2,000 hp; unlocks the rest of the fleet | unarmed and immobile |
| **Hades Sentry Ship** (冥犬哨兵舰) | institute | a cheap, fast patrol ship with a cannon and burst anti-air gun | heavy ships and submarines |
| **Hades Dreadnought** (冥犬巨型舰) | mothership | 10,000 hp and eight orange laser weapons reaching 13 tiles | slow; cannot shoot aircraft or submerged submarines |
| **Hades Bomber** (冥犬轰炸舰) | institute | a 20,000-hp ship with two homing missile weapons reaching 21 tiles; the second also targets aircraft | very slow; missiles have a five-tile minimum range and can be intercepted; no anti-submarine weapon |
| **Hades Shadow Destroyer** (暗歼灭舰) | institute | lightning gun; a seven-tile blast every seven seconds near enemies; below 10% hp, self-destructs if an enemy is within ten tiles | only 800 hp; outrange its gun and blasts |

新增冥犬舰队沿独立生产链建造：工程师或工程船在沿岸建造母舰，母舰生产护卫舰和巨型舰；
护卫舰沿岸建造研究所，研究所生产哨兵舰、轰炸舰与暗歼灭舰。
暗歼灭舰附近有敌人时每7秒释放7格范围爆炸；生命值低于10%且10格内有敌人时自爆。

The update uses the author's finished `mod.json`, including its combat and
cost values, rather than the older `hades_raw.json` or conversion scripts.
Def ids, sprite keys and the laser sound are namespaced under `hades-arsenal`.
Ship sprites rotate and have explicit draw sizes; missiles use the supplied
projectile art. The institute is built only by the Hades frigate. Unsupported
fields were removed, and laser impacts use `none` as the pack's notes request.
The shadow destroyer's unset cooldown flag was replaced with a seven-second
timer, and its blast radii were converted from the indicated seven and ten
tiles to 224 and 320 world pixels. Unreferenced `fx1.png`–`fx8.png` were omitted.

*Hades' Star* is a game by Parallel Space; the battleship is a fan tribute to it.
