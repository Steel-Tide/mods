const STRINGS = {
  // ------------------------------------------------------------- app
  "app.title": ["Steel Tide", "钢铁浪潮", "스틸 타이드"],
  "app.gameTitle": ["{0} | {1} Players | Steel Tide", "{0} | {1} 名玩家 | 钢铁浪潮", "{0} | 플레이어 {1}명 | 스틸 타이드"],
  "boot.systems": ["Preparing command systems…", "正在准备指挥系统…", "지휘 시스템 준비 중…"],
  "boot.art": ["Generating unit artwork…", "正在生成单位图像…", "유닛 아트워크 생성 중…"],
  "boot.terrain": ["Building terrain textures…", "正在构建地形纹理…", "지형 텍스처 구성 중…"],
  "boot.sprites": ["Loading unit sprites…", "正在加载单位图像…", "유닛 스프라이트 불러오는 중…"],
  "boot.mods": ["Loading mods…", "正在加载模组…", "모드 불러오는 중…"],
  "boot.interface": ["Fitting interface panels…", "正在装载界面面板…", "인터페이스 패널 장착 중…"],
  "boot.ready": ["Opening command center…", "正在开启指挥中心…", "지휘 본부 여는 중…"],
  // the presenter's card before the loading screen: the tagline over the author's name
  "boot.presentedBy": ["Presented by", "出品", "제작"],
  // the loading screen's prompt once everything is in, by the way the player answers it
  "boot.pressAnyKey": ["Press any key to continue", "按任意键继续", "아무 키나 눌러 계속"],
  "boot.tapToContinue": ["Tap to continue", "点击继续", "탭하여 계속"],
  "boot.tipTitle": ["Did you know?", "你知道吗？", "알고 계셨나요?"],
  // ------------------------------------------------------------- boot tips
  // One of these is picked at random for the loading screen. They are read by
  // their `tip.` prefix (`showBootTip` in main.ts) rather than by name, so a
  // new fact is one line here and nothing else — and equally, a key scan for
  // `t('...')` will never find a call site for any of them.
  "tip.engine": [
    "The whole engine is hand-rolled. The game ships with zero runtime dependencies.",
    "整个引擎都是手写的，游戏没有任何运行时依赖。",
    "엔진 전체가 직접 만든 것입니다. 이 게임은 런타임 의존성이 하나도 없습니다."
  ],
  "tip.audio": [
    "Every sound effect has a synthesized twin. Pull the recordings and the game plays its chiptune self.",
    "每个音效都有一个合成的孪生版本：拿掉录音，游戏就用自己的芯片音色照常开打。",
    "모든 효과음에는 합성음 쌍둥이가 있습니다. 녹음 파일을 빼면 게임은 칩튠 사운드로 그대로 돌아갑니다."
  ],
  "tip.save": [
    "A save carries its own map, so improvements to the generator never shift an old battlefield.",
    "存档里包含了独立的地图信息，即使地图下架也可以继续游玩。",
    "저장 파일에는 지도가 통째로 들어 있어서, 생성기가 개선되어도 옛 전장은 그대로입니다."
  ],
  "tip.pwa": [
    "Steel Tide installs. Once the shell is cached it starts and plays a Conquest match with no network at all.",
    "钢铁浪潮可以装到桌面。游戏缓存之后，完全断网也能打一局征服对局。",
    "스틸 타이드는 설치할 수 있습니다. 한번 캐시되면 네트워크 없이도 실행되고 정복 대전을 할 수 있습니다."
  ],
  "tip.bot": [
    "A language model can take a seat. It plays through the same fog-filtered frames and the same orders you do.",
    "大语言模型也能参战：它和你一样只看得到被迷雾过滤的战场，也只能通过同一套指令下令。",
    "언어 모델도 한 자리를 맡을 수 있습니다. 당신과 똑같이 안개로 가려진 전장을 보고, 똑같은 명령으로 움직입니다."
  ],
  "tip.transport": [
    "Transports carry weight, not head count. A Mammoth takes four capacity; no helicopter will lift it.",
    "运输载具算的是重量，不是人头。猛犸占 4 点载重，直升机无法吊运。",
    "수송은 머릿수가 아니라 무게로 셉니다. 매머드는 4칸을 차지해서 헬기로는 들어 올릴 수 없습니다."
  ],
  "tip.cargoplane": [
    "The C-47 parks. An idle cargo plane puts its wheels down instead of circling, and passengers walk to it.",
    "C-47 会停下来：闲着的运输机是把轮子放到地上，而不是在天上盘旋，乘员自己走过去登机。",
    "C-47은 착륙합니다. 할 일 없는 수송기는 선회하는 대신 바퀴를 내리고, 탑승자가 걸어와 올라탑니다."
  ],
  "tip.intercept": [
    "The Missile Interrupter stops rockets, never shells, and never a nuclear warhead. That is a flying target: a veteran anti-air unit's job, or a SAM Site's.",
    "导弹拦截塔只拦火箭弹，从不拦炮弹，也不拦核弹头：核弹头是空中目标，归老兵级防空单位或防空导弹阵地管。",
    "미사일 요격탑은 로켓만 막고 포탄은 절대 막지 못하며, 핵탄두도 막지 못합니다. 핵탄두는 공중 표적으로, 베테랑 대공 유닛이나 대공 미사일 진지의 몫입니다."
  ],
  "tip.rockets": [
    "One rocket launcher never lands a rocket on a point-defended base. Two get through.",
    "一辆火箭炮永远打不穿有一座拦截器的基地，两辆就能。",
    "다연장 로켓포 한 대로는 요격 방어가 있는 기지에 로켓 한 발도 떨어뜨리지 못합니다. 두 대면 뚫립니다."
  ],
  "tip.terrain": [
    "Forest, mountains and every cliff face stop a ground vehicle. Aircraft ignore all three.",
    "森林、山地和所有崖面都挡住地面载具，飞机对这三样视若无睹。",
    "숲, 산지, 모든 절벽면은 지상 차량을 막습니다. 항공기는 셋 다 무시합니다."
  ],
  "tip.build": [
    "Grass, sand, snow and asphalt will hold a foundation. Mud, marsh and rubble are drivable, not buildable.",
    "草地、沙地、雪地和柏油路都能修建筑。泥地、沼泽和瓦砾能走，但不能建。",
    "풀밭, 모래, 눈, 아스팔트 위에는 건물을 지을 수 있습니다. 진흙, 습지, 잔해는 지나갈 수는 있지만 지을 수는 없습니다."
  ],
  "tip.startMetal": [
    "Work begins once you have 75% of the price in hand, and bills the rest as it goes.",
    "凑够所需金属的 75% 就能开工，剩下的边造边付。",
    "가격의 75%만 손에 있으면 공사가 시작되고, 나머지는 진행하면서 청구됩니다."
  ],
  "tip.slots": [
    "Units sent at the same target fan out along a firing ring instead of queueing behind whoever arrived first.",
    "攻击同一目标的部队会沿着射击环散开，而不是挤在先到者身后。",
    "같은 표적을 노리는 유닛들은 먼저 도착한 유닛 뒤에 줄을 서는 대신 사격 원을 따라 흩어집니다."
  ],
  "tip.wreck": [
    "Every wreck is sized to what died and lies on the heading it was facing. A flattened building collapses into its own ruin, and the burnt ground under it stays far longer.",
    "每具残骸的大小与死者相当，倒下的朝向就是它生前的朝向。被夷平的建筑会塌成自己的废墟，而它底下烧焦的土地会留存更久。",
    "모든 잔해는 죽은 것의 크기 그대로, 향하던 방향 그대로 남습니다. 무너진 건물은 자신의 폐허가 되고, 그 아래 그을린 땅은 훨씬 오래 남습니다."
  ],
  "tip.repair": [
    "A repair tower works on three damaged allies at once, worst hit first. Multiple towers repair a shared target faster.",
    "维修塔同时修三个受损友军，先修伤得最重的。多座塔同时维修同一个目标时，维修速度会叠加。",
    "수리탑은 손상된 아군 셋을 동시에, 가장 심하게 다친 쪽부터 수리합니다. 탑 여러 개가 같은 표적을 수리하면 더 빠릅니다."
  ],
  "tip.engineerRepair": [
    "An idle engineer repairs damaged buildings around it on its own, for metal. Hold position keeps it still. It cannot repair units.",
    "空闲的工程车会自动维修周围受损的建筑，并消耗金属。下达“原地驻守”命令可让它原地不动。它无法维修单位。",
    "할 일 없는 공병차는 주변의 손상된 건물을 금속을 써서 스스로 수리합니다. 위치 사수를 걸면 움직이지 않습니다. 유닛은 수리하지 못합니다."
  ],
  "tip.shift": [
    "Hold Shift to queue orders. On a touchscreen, a long press is an attack-move.",
    "按住 Shift 可以排队下令；在触屏上，长按就是攻击移动。",
    "Shift를 누른 채로 명령하면 명령이 대기열에 쌓입니다. 터치스크린에서는 길게 누르면 공격 이동입니다."
  ],
  "tip.route": [
    "Hold Ctrl (Cmd on a Mac) and right-click to lay a patrol: the unit walks the blue path for good, back and forth, or round and round if you close it on its first point.",
    "按住 Ctrl（Mac 上是 Cmd）右键点击可以铺设巡逻路线：单位会沿着这条蓝色路径往返巡逻；若终点回到起点，则绕圈巡逻。",
    "Ctrl(Mac에서는 Cmd)을 누른 채 오른쪽 클릭으로 순찰 경로를 놓습니다. 유닛은 파란 경로를 계속 오가며, 첫 지점에서 닫으면 빙빙 돕니다."
  ],
  "tip.console": [
    "The backquote key opens the admin console.",
    "按反引号键（`）打开管理员控制台。",
    "백쿼트(`) 키로 관리자 콘솔을 엽니다."
  ],
  "tip.spectate": [
    "Anyone in a lobby can sit in the stands instead of taking a seat, and watch the whole map.",
    "多人模式中，观战者可以看到整张地图。",
    "로비에 있는 누구나 자리를 맡는 대신 관중석에 앉아 지도 전체를 볼 수 있습니다."
  ],
  "mode.campaign": ["Campaign", "战役", "캠페인"],
  "mode.sandbox": ["Conquest", "征服", "정복"],
  "mode.breakthrough": ["Breakthrough", "突破", "돌파"],
  // ------------------------------------------------------------- menu
  "menu.campaign": ["Campaign", "战役", "캠페인"],
  "menu.sandbox": ["Conquest", "征服", "정복"],
  "menu.breakthrough": ["Breakthrough", "突破", "돌파"],
  "menu.singlePlayer": ["Single Player", "单人游戏", "싱글 플레이어"],
  "menu.multiplayer": ["Multiplayer", "多人游戏", "멀티플레이어"],
  "menu.load": ["Load Game", "载入存档", "게임 불러오기"],
  "menu.mapEditor": ["Map Editor", "地图编辑器", "맵 에디터"],
  "menu.settings": ["Settings", "设置", "설정"],
  // the corner tile to the players: the QQ group under a Chinese interface, the Discord under the rest
  "menu.discord": ["Join the Discord", "加入 Discord", "Discord 참여"],
  "menu.qq": ["Join the QQ group ({0})", "加入 QQ 群（{0}）", "QQ 그룹 참여 ({0})"],
  "menu.exit": ["Exit game", "退出游戏", "게임 종료"],
  "menu.continue": ["Continue", "继续游戏", "이어하기"],
  "menu.version": ["v{0}", "v{0}", "v{0}"],
  "dev.enabled": ["Developer mode on.", "已开启开发者模式。", "개발자 모드가 켜졌습니다."],
  // the developer tools (home menu, developer mode only)
  "menu.devTools": ["Developer Tools", "开发者工具", "개발자 도구"],
  "menu.cuts": ["Cuts", "过场镜头", "컷 장면"],
  "menu.replays": ["Replays", "回放", "리플레이"],
  // ---- the cuts viewer's own column. Each cut is named by what it shows, so
  // a recording session can be talked about; `cuts.<id>` matches `REEL`.
  "cuts.reel": ["Reel", "镜头列表", "릴"],
  "cuts.flank": ["Flank Assault", "侧翼突击", "측면 강습"],
  "cuts.sea": ["Sea Battle", "海战", "해전"],
  "cuts.rockets": ["Rocket Storm", "火箭洗地", "로켓 폭풍"],
  "cuts.home": ["Home Front", "大后方", "후방"],
  "cuts.nuke": ["Nuclear Strike", "核打击", "핵 공격"],
  "cuts.airlift": ["Airlift", "空运登陆", "공수 작전"],
  "cuts.raid": ["Air Raid", "空袭", "공습"],
  // ---- and the raster test's, under a card of their own (`RASTER_CUTS` in
  // rasterCuts.ts): named by what they are for, so each row says what is in it
  "cuts.raster": ["Raster test", "光栅测试", "래스터 테스트"],
  "cuts.pitched": ["Pitched Battle", "会战", "대회전"],
  "cuts.pitched.tip": [
    "Eight seats on the largest map the generator makes, every army already at the centre of it: some 1,200 entities, most of them in the frame, and every home rolling out more. A rainy midnight over it is the worst the renderer gets.",
    "生成器最大尺寸的地图上坐满八个席位，各方大军已在地图中央对峙：约 1200 个实体，大多在画面之内，各家基地还在源源不断出兵。再把天空调成雨夜，就是渲染器最重的负载。",
    "생성기가 만드는 가장 큰 지도에 여덟 자리를 모두 채우고 모든 군대를 한가운데에 세웠습니다. 약 1,200개의 개체가 대부분 화면 안에 있고, 각 기지는 계속 병력을 냅니다. 하늘을 비 내리는 자정으로 두면 렌더러에 가장 무겁습니다."
  ],
  "cuts.playback": ["Playback", "播放", "재생"],
  "cuts.autoPlay": ["Auto play", "自动播放", "자동 재생"],
  "cuts.autoPlayTip": [
    "Run the reel: each cut holds the screen for 13 seconds and the next one comes in through the dip. Off, the cut you pick stays up for as long as you leave it.",
    "自动放完整卷：每个镜头停留 13 秒，随后淡黑切到下一个。关闭后，你选中的镜头会一直停在画面上。",
    "릴을 돌립니다. 각 컷은 13초 동안 화면에 머물고 다음 컷이 암전을 거쳐 들어옵니다. 끄면 고른 컷이 그대로 머뭅니다."
  ],
  "cuts.prev": ["Previous cut", "上一个镜头", "이전 컷"],
  "cuts.next": ["Next cut", "下一个镜头", "다음 컷"],
  "cuts.pause": ["Hold the picture", "暂停画面", "화면 멈춤"],
  "cuts.resume": ["Let it run", "继续播放", "계속 재생"],
  "cuts.sky": ["Sky", "天空", "하늘"],
  "cuts.time": ["Hour", "时刻", "시각"],
  "cuts.timeTip": [
    "Where the sun is, from dawn through midnight. The sun is stopped while the viewer is open, so a cut stays under the light you framed it in.",
    "太阳的位置，从黎明到午夜。查看器里太阳不会自己走，镜头会一直停在你选定的光线下。",
    "새벽부터 자정까지 해의 위치입니다. 뷰어가 열려 있는 동안 해는 멈춰 있어서, 컷은 잡아 둔 빛 아래 그대로 머뭅니다."
  ],
  "cuts.hide": ["Hide the panel: nothing is drawn over the picture", "收起面板：画面上不再有任何遮挡", "패널 숨기기: 화면 위에 아무것도 그리지 않습니다"],
  "cuts.show": ["Show the panel", "展开面板", "패널 보이기"],
  "cuts.leave": ["Back to the developer tools", "返回开发者工具", "개발자 도구로 돌아가기"],
  // ---- the readout in the corner: this screen's own, not the match's fps tag
  "cuts.perf": ["Performance", "性能", "성능"],
  "cuts.readout": ["Readout", "性能读数", "측정값 표시"],
  "cuts.readoutTip": [
    "Frame, sim and render times, what is drawn and what is held, in the bottom right corner, read off the viewer's own loop twice a second. Independent of the fps indicator in the settings.",
    "在右下角显示帧时间、模拟与渲染耗时、绘制与缓存的数量，每半秒从查看器自己的循环里读一次。与设置里的帧率指示器无关。",
    "프레임, 시뮬레이션, 렌더 시간과 그려진 것, 보관 중인 것을 오른쪽 아래에 표시합니다. 뷰어 자체 루프에서 초당 두 번 읽으며, 설정의 fps 표시와는 별개입니다."
  ],
  // ---- a session: the same readings kept, and read out as text for a paste
  "cuts.record": ["Record", "录制", "기록"],
  "cuts.recordTip": [
    "Keep every reading from now on, with a mark for each cut, sky and hold, until Stop. Starting again drops the last session.",
    "从现在起保留每一次读数，并记下每次镜头、天空和暂停的变化，直到按下停止。再次开始会丢弃上一个会话。",
    "지금부터 모든 측정값을 컷, 하늘, 정지 표시와 함께 중지할 때까지 기록합니다. 다시 시작하면 이전 세션은 버립니다."
  ],
  "cuts.stop": ["Stop", "停止", "중지"],
  "cuts.stopTip": ["End the session; its report stays ready to copy", "结束会话，报告仍可随时复制", "세션을 끝냅니다. 보고서는 계속 복사할 수 있습니다"],
  "cuts.copyReport": ["Copy report", "复制报告", "보고서 복사"],
  "cuts.copyReportTip": [
    "The session as text: the setting it ran under, the whole, every half-second window, the marks, and what looks wrong",
    "会话的文字报告：运行环境、总体数据、每半秒一行、标记，以及可疑之处",
    "세션을 글로 정리한 것: 실행 환경, 전체 수치, 반초 단위의 각 구간, 표시, 의심스러운 점"
  ],
  "cuts.session": ["{0} s · {1} samples", "{0} 秒 · {1} 个样本", "{0}초 · 샘플 {1}개"],
  // ------------------------------------------------------------- common
  "common.back": ["Back", "返回", "뒤로"],
  "common.start": ["Start", "开始", "시작"],
  "common.cancel": ["Cancel", "取消", "취소"],
  "common.ok": ["OK", "确定", "확인"],
  "common.close": ["Close", "关闭", "닫기"],
  "common.done": ["Done", "完成", "완료"],
  "common.delete": ["Delete", "删除", "삭제"],
  "common.more": ["More", "更多", "더 보기"],
  "date.today": ["Today", "今天", "오늘"],
  "date.yesterday": ["Yesterday", "昨天", "어제"],
  "common.reset": ["Reset", "重置", "초기화"],
  "common.empty": ["Empty", "空", "비어 있음"],
  "common.on": ["On", "开", "켜짐"],
  "common.off": ["Off", "关", "꺼짐"],
  "common.player": ["Player", "玩家", "플레이어"],
  "common.confirmDelete": ["Delete this save?", "确定删除该存档？", "이 저장을 삭제할까요?"],
  "common.overwrite": ["Overwrite this slot?", "覆盖该存档位？", "이 슬롯을 덮어쓸까요?"],
  // ------------------------------------------------------------- save slots
  "save.auto": ["Autosave", "自动存档", "자동 저장"],
  "save.quick": ["Quicksave", "快速存档", "빠른 저장"],
  "save.slot": ["Slot {0}", "存档位 {0}", "슬롯 {0}"],
  // ------------------------------------------------------------- difficulty
  "diff.relaxed": ["Relaxed", "轻松", "여유"],
  "diff.standard": ["Standard", "标准", "표준"],
  "diff.veteran": ["Veteran", "老兵", "베테랑"],
  "diff.relaxed.desc": ["A calm opponent that attacks rarely.", "进攻节奏缓慢的温和对手。", "좀처럼 공격하지 않는 차분한 상대입니다."],
  "diff.standard.desc": ["A balanced opponent for most players.", "适合多数玩家的均衡对手。", "대부분의 플레이어에게 맞는 균형 잡힌 상대입니다."],
  "diff.veteran.desc": ["Aggressive, expands fast, counters your army.", "扩张迅速、针对性极强的凶猛对手。", "공격적이고, 빠르게 확장하며, 당신의 군대에 맞춰 대응합니다."],
  // ------------------------------------------------------------- sandbox setup
  "setup.title": ["Conquest", "征服", "정복"],
  // ---- the mode, the strip above the lobby's maps: the open match, or the front line
  "mode.sandbox.desc": [
    "Every faction opens with a headquarters and builds; the last side standing wins.",
    "每个阵营都从一座总部起步、自由建设，最后站着的一方获胜。",
    "모든 진영이 사령부 하나로 시작해 건설하고, 마지막까지 남는 쪽이 이깁니다."
  ],
  "mode.breakthrough.desc": [
    "One side attacks, one holds. The defenders build a base at every checkpoint; the attackers fight from a war chest with no base at all, and take the checkpoints in order. The attackers win at the last one, the defenders when the clock runs out or the chest is spent.",
    "一方进攻，一方防守。守方在每个检查点建立基地；攻方没有基地，只靠一笔战争基金作战，按顺序夺取检查点。攻下最后一个检查点则攻方胜；时间耗尽或基金花光则守方胜。",
    "한쪽은 공격하고 한쪽은 지킵니다. 수비측은 검문소마다 기지를 세우고, 공격측은 기지 없이 군자금만으로 싸우며 검문소를 차례로 점령합니다. 마지막 검문소가 떨어지면 공격측이, 시계가 다 돌거나 군자금이 바닥나면 수비측이 이깁니다."
  ],
  "setup.checkpoints": ["Checkpoints", "检查点", "검문소"],
  "setup.checkpoints.desc": [
    "Headquarters in the chain, front to rear. A map seats one fewer than its spawns.",
    "链条上的总部数量，从前到后。一张地图最多容纳“出生点数减一”个。",
    "사슬을 이루는 사령부 수, 앞에서 뒤로. 지도의 시작 지점 수보다 하나 적게까지 둘 수 있습니다."
  ],
  "setup.assaultChest": ["War chest", "战争基金", "군자금"],
  "setup.assaultChest.desc": [
    "The attackers’ metal at the whistle, ninety seconds in. No income after it; each checkpoint taken refills 4000.",
    "开场九十秒哨响时攻方拿到的金属。此后没有收入；每攻下一个检查点补充 4000。",
    "시작 90초 뒤 휘슬이 울릴 때 공격측이 받는 금속. 그 뒤로 수입은 없고, 검문소를 하나 점령할 때마다 4000이 채워집니다."
  ],
  "setup.clock": ["Clock", "倒计时", "시계"],
  "setup.clock.desc": [
    "What the defenders have to hold, from the whistle. Each checkpoint taken adds six minutes.",
    "守方从哨响起需要坚守的时间。每失守一个检查点，攻方多得六分钟。",
    "휘슬부터 수비측이 버텨야 하는 시간. 검문소가 하나 떨어질 때마다 6분이 더해집니다."
  ],
  "setup.mapNotInMode": ["This map is not played in this mode.", "这张地图不在此模式中。", "이 지도는 이 모드에서 플레이할 수 없습니다."],
  "setup.needSides": ["Breakthrough needs an attacker and a defender.", "突破模式需要一个进攻方和一个防守方。", "돌파에는 공격측과 수비측이 모두 있어야 합니다."],
  "setup.map": ["Map", "地图", "지도"],
  "setup.factions": ["Factions", "阵营", "진영"],
  "setup.rules": ["Game config", "对局设置", "게임 설정"],
  "setup.startMetal": ["Starting metal", "初始金属", "시작 금속"],
  "setup.fog": ["Fog of war", "战争迷雾", "전장의 안개"],
  // ---- weather. The name is a word, the sentence beneath it is the whole
  // rule: what it takes off sight, and what it takes off speed.
  "setup.weather": ["Weather", "天气", "날씨"],
  "weather.clear": ["Clear", "晴朗", "맑음"],
  "weather.rain": ["Rain", "雨天", "비"],
  "weather.snow": ["Snow", "雪天", "눈"],
  "weather.random": ["Random", "随机", "무작위"],
  "weather.clear.desc": ["Open sky. Every unit sees and moves as it was built to.", "天朗气清。所有单位的视野和速度都是默认值。", "맑은 하늘. 모든 유닛이 원래대로 보고 움직입니다."],
  "weather.rain.desc": [
    "Sight down 25% and everything on the ground 15% slower. Aircraft fly above it.",
    "视野下降 25%，地面与水面单位慢 15%。飞机不受影响。",
    "시야 25% 감소, 지상의 모든 것이 15% 느려집니다. 항공기는 그 위를 날아갑니다."
  ],
  "weather.snow.desc": [
    "You see it coming as clearly as ever, and everything on the ground crawls, 25% slower. Aircraft fly above it.",
    "你照样看得一清二楚，但地面与水面单位慢了 25%，救援总是迟一步。飞机不受影响。",
    "다가오는 것은 평소처럼 또렷이 보이지만, 지상의 모든 것이 25% 느리게 기어갑니다. 항공기는 그 위를 날아갑니다."
  ],
  "weather.random.desc": [
    "The sky will not settle: the match opens clear and turns every few minutes, and you are told each time it does.",
    "天气不会一成不变：开局晴朗，之后每隔几分钟变换一次，每次变换都会通报。",
    "하늘이 가만있지 않습니다. 맑게 시작해 몇 분마다 바뀌고, 바뀔 때마다 알려 줍니다."
  ],
  // the Time row: the sun turning, or held at one of three hours (`SKY_CHOICES`,
  // game/weather.ts); each choice has a sentence, the way each weather does
  "setup.time": ["Time", "时间", "시간대"],
  "sky.cycle": ["Day and night", "昼夜循环", "낮과 밤"],
  "sky.cycle.desc": [
    "The sun turns: 24 minutes to the full cycle, starting at dawn. At the bottom of the night every unit sees 40% less, the radar excepted, and the weather stacks on top.",
    "太阳会转：一个完整昼夜 24 分钟，从黎明开局。夜最深时所有单位视野缩减 40%（雷达站除外），并与天气叠加。",
    "해가 돕니다. 한 바퀴에 24분, 새벽에 시작합니다. 한밤중에는 모든 유닛의 시야가 40% 줄고(레이더 제외), 날씨가 그 위에 겹칩니다."
  ],
  "sky.dawn.desc": [
    "The sun is held at first light for the whole match: the amber sky of the opening minute, and every unit sees 15% less than at noon, the radar excepted.",
    "太阳停在破晓时分，整局不动：开局那一分钟的琥珀色天空，所有单位视野比正午少 15%（雷达站除外）。",
    "해가 동틀 녘에 멈춘 채 한 판을 치릅니다. 첫 1분의 호박빛 하늘이 이어지고, 모든 유닛의 시야가 정오보다 15% 줄어듭니다(레이더 제외)."
  ],
  "sky.noon.desc": [
    "The sun is held overhead: unending daylight, and one less variable.",
    "太阳停在头顶：全场保持白昼，少一个变数。",
    "해가 머리 위에 멈춥니다. 끝나지 않는 대낮, 변수 하나가 줄어듭니다."
  ],
  "sky.midnight.desc": [
    "The sun is held at the bottom of the night for the whole match: every unit sees 40% less, the radar excepted, and the weather stacks on top.",
    "太阳停在深夜，整局不动：所有单位视野缩减 40%（雷达站除外），并与天气叠加。",
    "해가 한밤중에 멈춘 채 한 판을 치릅니다. 모든 유닛의 시야가 40% 줄고(레이더 제외), 날씨가 그 위에 겹칩니다."
  ],
  // the hours the sky's clock is read back as (`skyTimeName`, game/weather.ts).
  // The console prints the word itself; anything a player reads is looked up.
  "sky.dawn": ["Dawn", "黎明", "새벽"],
  "sky.morning": ["Morning", "清晨", "아침"],
  "sky.noon": ["Noon", "正午", "정오"],
  "sky.afternoon": ["Afternoon", "午后", "오후"],
  "sky.dusk": ["Dusk", "黄昏", "황혼"],
  "sky.evening": ["Evening", "傍晚", "저녁"],
  "sky.night": ["Night", "夜晚", "밤"],
  "sky.midnight": ["Midnight", "午夜", "자정"],
  "setup.popCap": ["Unit cap", "人口上限", "유닛 상한"],
  "setup.you": ["You", "你", "당신"],
  "setup.seat": ["Your faction. It decides which spawn you start from.", "你的阵营，决定你从哪个出生点开局。", "당신의 진영. 어느 시작 지점에서 출발할지 정합니다."],
  "setup.playHere": ["Play this faction too", "你也操作此阵营", "이 진영도 직접 조종"],
  "setup.openSeat": ["Open faction {0} here", "在此开启阵营 {0}", "여기에 진영 {0} 열기"],
  "setup.addFaction": ["Add a faction", "添加阵营", "진영 추가"],
  "setup.staging": ["Staging ground: the attackers start here", "集结地：进攻方从这里出发", "집결지: 공격측이 여기서 시작합니다"],
  "setup.mapSize": ["Map size", "地图尺寸", "지도 크기"],
  "setup.symmetric": ["Mirrored map", "镜像地图", "대칭 지도"],
  "setup.symmetricTip": [
    "Both halves of a generated map are the same ground turned half a turn, so no homeland has better country than another. Turned off, the generator draws every corner on its own: livelier, and not a fair fight.",
    "生成的地图两半互为半圈旋转的同一片地形，任何家园都不会占到地利。关闭后生成器让各处自行成形：更有看头，但谈不上公平。",
    "생성된 지도의 두 절반은 같은 땅을 반 바퀴 돌린 것이라, 어느 본거지도 더 좋은 땅을 갖지 않습니다. 끄면 생성기가 구석구석을 제멋대로 그립니다. 더 생동감 있지만 공정한 싸움은 아닙니다."
  ],
  "setup.seed": ["Seed", "随机种子", "시드"],
  "setup.reseed": ["Roll a new seed", "重新生成种子", "새 시드 굴리기"],
  "setup.mapSize.s": ["Small", "小型", "소형"],
  "setup.mapSize.m": ["Medium", "中型", "중형"],
  "setup.mapSize.l": ["Large", "大型", "대형"],
  "setup.mapSize.xl": ["Huge", "巨型", "초대형"],
  "setup.players": ["{0} players", "{0} 人", "플레이어 {0}명"],
  "setup.slots": ["{0} slots", "{0} 席", "{0}자리"],
  "setup.slotsRange": ["{0}-{1} slots", "{0}-{1} 席", "{0}-{1}자리"],
  "setup.customMap": ["Custom map", "自定义地图", "사용자 지도"],
  "setup.uploadMap": ["Upload map…", "上传地图…", "지도 업로드…"],
  "setup.uploadMapTip": ["A map exported from the Map Editor (.steel-tide-map)", "从地图编辑器导出的地图（.steel-tide-map）", "맵 에디터에서 내보낸 지도(.steel-tide-map)"],
  "setup.dropMap": ["Drop the map file here", "把地图文件拖到这里", "지도 파일을 여기에 놓으세요"],
  "setup.deleteMap": ["Remove this map", "移除此地图", "이 지도 제거"],
  "setup.browseMaps": ["Community maps…", "社区地图…", "커뮤니티 지도…"],
  "setup.browseMapsTip": ["Maps other players have published to the registry", "其他玩家发布到地图仓库的地图", "다른 플레이어가 레지스트리에 공개한 지도"],
  "setup.mapInvalid": ["Could not read that map: {0}", "无法读取该地图：{0}", "지도를 읽을 수 없습니다: {0}"],
  "setup.mapLoaded": ["Map loaded: {0}", "已载入地图：{0}", "지도를 불러왔습니다: {0}"],
  "map.custom.style": ["Your own map, played exactly as it was painted in the editor.", "你自己的地图，与编辑器中绘制的完全一致。", "직접 만든 지도를 에디터에서 그린 그대로 플레이합니다."],
  "map.openRange": ["Open Range", "靶场", "사격장"],
  "map.openRange.style": [
    "A coastal proving ground that starts you with the whole army: a garrison, an airfield, a harbour, and a firing line looking downrange at the impact area.",
    "海边的靶场，开局就把全部部队交给你：营区、机场、军港，以及正对靶区的射击线。",
    "군대 전체를 갖추고 시작하는 해안의 시험장입니다. 주둔지, 비행장, 항구, 그리고 탄착 지역을 내려다보는 사선이 있습니다."
  ],
  // ------------------------------------------------------------- multiplayer
  "mp.title": ["Multiplayer", "多人游戏", "멀티플레이어"],
  "mp.server": ["Server IP or address", "服务器 IP 或地址", "서버 IP 또는 주소"],
  "mp.name": ["Commander name", "指挥官名称", "사령관 이름"],
  "mp.joinCode": ["Join code", "加入码", "참가 코드"],
  "mp.hostKey": ["Host key (host only)", "主机密钥（仅房主）", "호스트 키(호스트 전용)"],
  "mp.connect": ["Connect", "连接", "접속"],
  "mp.showKey": ["Show host key", "显示主机密钥", "호스트 키 보기"],
  "mp.hideKey": ["Hide host key", "隐藏主机密钥", "호스트 키 숨기기"],
  // the dice beside the name: one of `COMMANDER_NAMES`
  "mp.randomName": ["Random name", "随机名称", "무작위 이름"],
  "mp.connecting": ["Connecting…", "正在连接…", "접속 중…"],
  // read by a browser alone: an https page cannot open a plain socket, and the
  // server serves no page of its own to be sent to. The apps open the socket
  // natively and never reach it.
  "mp.needsTls": [
    "A browser can only reach a server with HTTPS (a domain name and a certificate). Ask the host for an https:// address, or join from the desktop or mobile app.",
    "浏览器只能连接启用了 HTTPS（有域名和证书）的服务器。请向房主索取 https:// 地址，或改用桌面版或手机版加入。",
    "브라우저는 HTTPS(도메인 이름과 인증서)가 있는 서버에만 접속할 수 있습니다. 호스트에게 https:// 주소를 요청하거나 데스크톱이나 모바일 앱으로 참가하세요."
  ],
  "mp.addressRequired": [
    "Enter the server's address.",
    "请输入服务器地址。",
    "서버 주소를 입력하세요."
  ],
  "mp.lobby": ["Server Lobby", "服务器大厅", "서버 로비"],
  "mp.waiting": ["Waiting for a human slot. The host or acting host assigns them.", "等待玩家席位，由房主或代理房主分配。", "플레이어 자리를 기다리는 중입니다. 호스트나 대리 호스트가 배정합니다."],
  // the roster's role tags: who runs the room. The acting host is the player
  // the host appointed, or the senior seated player standing in while no host
  // is connected (see `leaderId`)
  "mp.host": ["Host", "房主", "호스트"],
  "mp.actingHost": ["Acting host", "代理房主", "대리 호스트"],
  "mp.actingHostTip": [
    "Runs the lobby, appointed by the host or standing in while no host is connected: the map, the seats, Start, pause and the way back to the lobby.",
    "管理大厅（由房主指定，或在房主不在线时代为管理）：地图、席位、开始、暂停以及返回大厅。",
    "로비를 운영합니다 (호스트가 지정했거나, 호스트가 접속해 있지 않은 동안 대신 맡습니다): 지도, 자리, 시작, 일시 정지, 로비로 돌아가기."
  ],
  // the host's menu on a seated player: hand them the room, or take it back
  "mp.appoint": ["Make acting host", "设为代理房主", "대리 호스트로 지정"],
  "mp.withdrawActing": ["Withdraw acting host", "撤销代理房主", "대리 호스트 해제"],
  "mp.ready": ["Ready", "准备", "준비"],
  "mp.notReady": ["Not ready", "取消准备", "준비 해제"],
  "mp.human": ["Human", "玩家", "플레이어"],
  "mp.ai": ["AI", "AI", "AI"],
  "mp.closed": ["Closed", "关闭", "닫힘"],
  "mp.slot": ["Faction {0}", "阵营 {0}", "진영 {0}"],
  "mp.seatOpen": ["Open seat", "空位", "빈 자리"],
  "mp.spectator": ["Spectator", "观战者", "관전자"],
  "mp.spectators": ["Spectators", "观战者", "관전자"],
  "mp.rosterUnknown": ["This server does not report who else is here.", "此服务器不提供在场玩家列表。", "이 서버는 다른 참가자가 누구인지 알려 주지 않습니다."],
  "mp.watch": ["Spectate", "观战", "관전"],
  "mp.kick": ["Kick", "踢出", "추방"],
  "mp.kickConfirm": [
    "Remove {0} from the server? They can rejoin with the join code.",
    "将 {0} 移出服务器？他们可以凭加入码重新加入。",
    "{0}을(를) 서버에서 내보낼까요? 참가 코드로 다시 참가할 수 있습니다."
  ],
  "mp.takeSeat": ["Wait for a seat", "等待席位", "자리 기다리기"],
  "mp.youWatch": ["You will watch the match from the start, with the whole map in view.", "你将从一开始观战本局，并能看到整张地图。", "처음부터 지도 전체를 보며 대전을 관전합니다."],
  "mp.youWatchNow": ["Joining the match as a spectator…", "正在以观战者身份加入对局…", "관전자로 대전에 참가하는 중…"],
  // {0} is the team's callsign (`game/teams.ts`), never a number
  "mp.team": ["Team {0}", "{0}队", "{0} 팀"],
  "mp.loadSave": ["Load local save", "载入本地存档", "로컬 저장 불러오기"],
  "mp.gameSave": ["Game save", "游戏存档", "게임 저장"],
  "mp.selectSave": ["Select save…", "选择存档…", "저장 선택…"],
  "mp.clearSave": ["Clear", "清除", "지우기"],
  "mp.clearSaveTip": [
    "Drop the loaded save. The lobby goes back to a generated map, and the factions reset.",
    "移除已载入的存档。大厅将回到随机生成的地图，阵营重置。",
    "불러온 저장을 내립니다. 로비는 생성 지도로 돌아가고 진영은 초기화됩니다."
  ],
  "mp.uploadSave": ["Upload a file…", "上传文件…", "파일 업로드…"],
  "mp.tabJoin": ["Join", "加入", "참가"],
  "mp.tabHost": ["Host", "架设", "호스트"],
  "mp.hostIntro": [
    "Run this on any Linux machine with a public address and it becomes a Steel Tide server. It prints what the host and the players need to join.",
    "在任意一台有公网地址的 Linux 机器上运行这条命令，它就会变成一台钢铁浪潮服务器，并输出房主和玩家加入所需的信息。",
    "공인 주소가 있는 아무 Linux 머신에서 이 명령을 실행하면 스틸 타이드 서버가 됩니다. 호스트와 플레이어가 참가하는 데 필요한 정보를 출력합니다."
  ],
  "mp.hostNote": [
    "Open TCP port 28785 in the firewall. The guide covers TLS, updates and removal.",
    "请在防火墙中开放 TCP 端口 28785。指南中还有 TLS、更新与卸载的说明。",
    "방화벽에서 TCP 포트 28785를 열어 주세요. 안내서에 TLS, 업데이트, 제거 방법이 있습니다."
  ],
  // under the command, past a rule: the other way to host, which is the app's
  "mp.hostAppIntro": [
    "The app hosts a game on this device itself, no server needed.",
    "应用可直接在此设备上架设对局，无需服务器。",
    "앱은 서버 없이 이 기기에서 직접 게임을 호스팅합니다."
  ],
  "mp.serverGuide": ["How to set up a server", "如何架设服务器", "서버 설치 방법"],
  "mp.copyCommand": ["Copy command", "复制命令", "명령 복사"],
  "mp.startMatch": ["Start match", "开始对局", "대전 시작"],
  "mp.disconnect": ["Disconnect", "断开连接", "접속 끊기"],
  "mp.hostPaused": ["HOST PAUSED", "房主已暂停", "호스트가 일시 정지함"],
  "mp.unreachable": ["Could not reach {0}.", "无法连接到 {0}。", "{0}에 연결할 수 없습니다."],
  // the door's refusal over a name somebody on the server already holds; {0} is the name asked for
  "mp.nameTaken": [
    "A commander called {0} is already on this server. Choose another name.",
    "服务器上已有名为 {0} 的指挥官，请换一个名称。",
    "이 서버에 이미 {0}(이)라는 사령관이 있습니다. 다른 이름을 고르세요."
  ],
  "mp.checkPort": [
    "Check the address and port; a server listens on {0} unless it was changed.",
    "请检查地址与端口；除非另行更改，服务器监听 {0}。",
    "주소와 포트를 확인하세요. 서버는 바꾸지 않았다면 {0}에서 대기합니다."
  ],
  "mp.players": ["Players", "玩家", "플레이어"],
  "mp.ping": ["Ping", "延迟", "핑"],
  "mp.you": ["you", "你", "나"],
  "mp.defeated": ["Defeated", "已淘汰", "패배"],
  "mp.disconnected": ["Disconnected", "已断开", "접속 끊김"],
  "mp.measuring": ["measuring…", "测量中…", "측정 중…"],
  "mp.behind": ["behind", "滞后", "지연"],
  "mp.connectionLost": ["Connection lost", "连接已断开", "연결이 끊어졌습니다"],
  "mp.exportSave": ["Export", "导出", "내보내기"],
  "mp.downloadSave": ["Download server save", "下载服务器存档", "서버 저장 다운로드"],
  "mp.returnLobby": ["Return everyone to lobby", "所有人返回大厅", "모두 로비로 돌려보내기"],
  // pressed from the lobby screen while a match is on without us: it ends that match
  "mp.returnLobbyConfirm": [
    "End the match in progress and bring everyone back to the lobby?",
    "结束进行中的对局并让所有人返回大厅？",
    "진행 중인 대전을 끝내고 모두를 로비로 돌려보낼까요?"
  ],
  "mp.matchOn": [
    "A match is in progress. The lobby opens again when it ends.",
    "对局正在进行中。对局结束后大厅将重新开放。",
    "대전이 진행 중입니다. 대전이 끝나면 로비가 다시 열립니다."
  ],
  // the server settings plate, behind the gear in the lobby's title strip
  // (`ui/serverSettings.ts`): the mods the room requires, the leader's to
  // set between matches, and the invite section under it
  "mp.serverSettings": ["Server settings", "服务器设置", "서버 설정"],
  "mp.mods.title": ["Required mods", "所需模组", "필요한 모드"],
  "mp.mods.intro": [
    "Pick the mods this server plays with. Everyone who joins must have them installed.",
    "选择本服务器使用的模组。加入的玩家必须安装这些模组。",
    "이 서버에서 사용할 모드를 고르세요. 참가하는 모든 플레이어가 설치해야 합니다."
  ],
  "mp.mods.none": ["None", "无", "없음"],
  "mp.mods.noneInstalled": [
    "You have no mods installed. Install some from Settings first.",
    "你尚未安装任何模组。请先在设置中安装。",
    "설치된 모드가 없습니다. 먼저 설정에서 설치하세요."
  ],
  // a mod that did not come from the registry: a guest cannot fetch it on their own
  "mp.mods.notRegistry": [
    "Not in the registry: players must install it themselves.",
    "不在官方仓库中：玩家需要自行安装。",
    "레지스트리에 없는 모드입니다. 플레이어가 직접 설치해야 합니다."
  ],
  // the leader's copy is behind the registry's, which is the only version a guest can fetch
  "mp.mods.updateFirst": [
    "The registry has {0}: update your copy before requiring it.",
    "官方仓库已有 {0}：请先更新你的模组再设为必需。",
    "레지스트리에 {0} 버전이 있습니다. 필수로 지정하기 전에 먼저 업데이트하세요."
  ],
  "mp.mods.bounceNote": [
    "Players without these mods will be asked to install them and rejoin.",
    "没有这些模组的玩家将被要求安装后重新加入。",
    "이 모드가 없는 플레이어는 설치 후 다시 참가하라는 안내를 받습니다."
  ],
  "mp.mods.apply": ["Apply", "应用", "적용"],
  "mp.mods.applied.toast": ["Required mods updated", "所需模组已更新", "필요한 모드를 갱신했습니다"],
  "mp.mods.manage": ["Manage mods…", "管理模组…", "모드 관리…"],
  // the read-only row in the lobby's rules pane
  "mp.mods.row": ["Mods", "模组", "모드"],
  // the plate a player meets at the door of a server that requires mods (`ui/requiredMods.ts`)
  "mp.modsRequired.title": ["Mods required", "需要模组", "모드 필요"],
  "mp.modsRequired.intro": [
    "This server plays with mods you do not have. Install them to join.",
    "本服务器使用了你尚未安装的模组。安装后即可加入。",
    "이 서버는 아직 설치하지 않은 모드를 사용합니다. 설치하면 참가할 수 있습니다."
  ],
  "mp.modsRequired.status": ["This server requires mods.", "本服务器需要模组。", "이 서버는 모드가 필요합니다."],
  "mp.modsRequired.install": ["Install and join", "安装并加入", "설치 후 참가"],
  "mp.modsRequired.installing": ["Installing {0}…", "正在安装 {0}…", "{0} 설치 중…"],
  "mp.modsRequired.missing": ["Not installed", "未安装", "설치되지 않음"],
  "mp.modsRequired.otherVersion": ["You have {0}", "你已安装 {0}", "{0} 버전이 설치됨"],
  "mp.modsRequired.notInRegistry": [
    "Not in the registry: install it yourself from Settings, Mods.",
    "不在官方仓库中：请在“设置 > 模组”中自行安装。",
    "레지스트리에 없습니다. 설정의 모드에서 직접 설치하세요."
  ],
  "mp.modsRequired.registryVersion": [
    "The registry has {0}; ask the host to update.",
    "官方仓库的版本是 {0}，请房主更新。",
    "레지스트리에는 {0} 버전이 있습니다. 호스트에게 업데이트를 요청하세요."
  ],
  "mp.modsRequired.checking": ["Checking the registry…", "正在查询模组仓库…", "레지스트리 확인 중…"],
  // the LAN page's badge on a game that requires mods
  "mp.lanMods": ["{0} mods", "{0} 个模组", "모드 {0}개"],
  // the invite section of the server settings plate: everything somebody
  // needs to join this room, each line with its copy button, and the whole
  // of it as one text to share
  "mp.invite": ["Invite players", "邀请玩家", "플레이어 초대"],
  "mp.inviteIntro": [
    "Whoever is joining enters these on the Join page of the Multiplayer screen.",
    "要加入的人在多人游戏界面的“加入”页填入这些信息即可。",
    "참가할 사람은 멀티플레이어 화면의 참가 페이지에 이 정보를 입력하면 됩니다."
  ],
  "mp.inviteAddress": ["Server address", "服务器地址", "서버 주소"],
  // the addresses a host reports on its own network: good on that network alone
  "mp.inviteLan": ["Address on this network", "本网络中的地址", "이 네트워크에서의 주소"],
  "mp.inviteLink": ["Invite link", "邀请链接", "초대 링크"],
  "mp.inviteLinkHint": [
    "Opens the game in a browser, already dialled in.",
    "在浏览器中打开游戏并自动连接。",
    "브라우저에서 게임을 열고 바로 접속합니다."
  ],
  // the room asks for no code
  "mp.inviteNoCode": ["None needed", "无需加入码", "필요 없음"],
  // the room asks for one, and this member came in on the host key without it
  "mp.inviteCodeUnknown": [
    "Set on the server; the host key let you in without it.",
    "由服务器设置；主机密钥让你无需输入即可进入。",
    "서버에서 설정합니다. 호스트 키로는 코드 없이 들어왔습니다."
  ],
  "mp.inviteHeading": ["Join my Steel Tide match", "来加入我的钢铁浪潮对局", "내 스틸 타이드 대전에 참가하세요"],
  "mp.inviteCopy": ["Copy invite", "复制邀请", "초대 복사"],
  "mp.inviteShare": ["Share…", "分享…", "공유…"],
  // the platform's own friends list, where a shell offers one (Steam)
  "mp.inviteFriends": ["Invite friends", "邀请好友", "친구 초대"],
  "common.copy": ["Copy", "复制", "복사"],
  "mp.copied": ["Copied", "已复制", "복사됨"],
  "mp.chat": ["Lobby chat", "大厅聊天", "로비 채팅"],
  "mp.chatEmpty": ["Nobody has said anything yet.", "还没有人说话。", "아직 아무도 말하지 않았습니다."],
  "mp.chatPlaceholder": ["Say something… (/t for team only)", "说点什么…（/t 仅队伍可见）", "메시지 입력… (/t 는 팀에게만)"],
  "mp.chatSend": ["Send", "发送", "보내기"],
  "chat.teamTag": ["[Team]", "[队伍]", "[팀]"],
  "mp.spectating": ["SPECTATING", "观战中", "관전 중"],
  "mp.kicked": ["Removed from the match by the host.", "已被房主移出对局。", "호스트가 대전에서 내보냈습니다."],
  "mp.mapChosen": ["The host picks the map.", "由房主选择地图。", "지도는 호스트가 고릅니다."],
  "mp.tooManyFactions": ["This map holds {0} factions; close the rest.", "此地图最多 {0} 个阵营，请关闭其余席位。", "이 지도는 진영 {0}개까지입니다. 나머지를 닫으세요."],
  "mp.needFaction": ["Open at least one faction to play.", "至少开放一个阵营才能开局。", "플레이하려면 진영을 하나 이상 여세요."],
  "mp.needPlayer": [
    "Faction {0} has nobody in it; seat a player, or set it to AI or Closed.",
    "阵营 {0} 无人就座。请安排玩家，或将其改为 AI 或关闭。",
    "진영 {0}에 아무도 없습니다. 플레이어를 앉히거나 AI 또는 닫힘으로 바꾸세요."
  ],
  "mp.needReady": ["Waiting for {0} to press Ready.", "等待 {0} 点击准备。", "{0}이(가) 준비를 누르기를 기다리는 중입니다."],
  // the connect modal in a store shell: a game hosted on this device, and
  // the games announced on the local network
  "mp.tabLan": ["LAN", "局域网", "LAN"],
  // a browser sees the LAN page too, as a signpost: the network is the app's to see
  "mp.lanBrowserIntro": [
    "Games hosted on this network can only be found from the app. The desktop version scans for them and joins with one click, and hosts games of its own, as do the phone apps.",
    "本网络中架设的对局只能在应用内找到。桌面版会自动扫描并一键加入，也能自己架设对局，手机应用同样如此。",
    "이 네트워크에서 호스팅되는 게임은 앱에서만 찾을 수 있습니다. 데스크톱 버전은 자동으로 검색해 한 번의 클릭으로 참가하고 직접 게임을 열 수도 있습니다. 모바일 앱도 마찬가지입니다."
  ],
  "mp.getApp": ["Get the app", "获取应用", "앱 받기"],
  "mp.lanEmpty": ["Scanning… games hosted on this network appear here.", "正在扫描…本网络中架设的对局会显示在这里。", "검색 중… 이 네트워크에서 호스팅되는 게임이 여기에 나타납니다."],
  // the scan that finds nothing: a subnet, a guest network or a firewall
  // eating multicast, and the address form is the way through all three
  "mp.lanNotFound": [
    "Cannot find your game? Some networks hide the announcement; ask the host for their address and type it in.",
    "找不到你的对局？有些网络会屏蔽广播；向房主要地址后手动输入。",
    "게임이 안 보이나요? 일부 네트워크는 알림을 숨깁니다. 호스트에게 주소를 물어 직접 입력하세요."
  ],
  "mp.lanManual": ["Enter an address", "手动输入地址", "주소 입력"],
  "mp.lanPlayers": ["{0} players", "玩家 {0}", "플레이어 {0}명"],
  "mp.lanLocked": ["Needs a join code", "需要加入码", "참가 코드 필요"],
  "mp.lanVersion": [
    "A different game version; both copies must be updated to play together.",
    "游戏版本不同，双方都更新后才能一起游戏。",
    "게임 버전이 다릅니다. 함께 플레이하려면 양쪽 모두 업데이트해야 합니다."
  ],
  "mp.phase.lobby": ["In lobby", "大厅中", "로비"],
  "mp.phase.playing": ["Match in progress", "对局进行中", "대전 진행 중"],
  "mp.phase.paused": ["Paused", "已暂停", "일시 정지"],
  "mp.phase.ended": ["Match over", "对局结束", "대전 종료"],
  "mp.hostLanIntro": [
    "Host a game on this device. Players on your network find it under LAN; anyone else joins with the address the lobby shows.",
    "在此设备上架设对局。同一网络的玩家可在“局域网”页找到它；其他人用大厅中显示的地址加入。",
    "이 기기에서 게임을 호스팅합니다. 같은 네트워크의 플레이어는 LAN에서 찾고, 그 밖의 사람은 로비에 표시된 주소로 참가합니다."
  ],
  "mp.hostName": ["Server name", "服务器名称", "서버 이름"],
  "mp.hostNameDefault": ["{0}'s game", "{0} 的对局", "{0}의 게임"],
  "mp.hostJoinCode": ["Join code (optional)", "加入码（可选）", "참가 코드(선택)"],
  "mp.hostJoinCodeHint": ["Leave empty to let anyone on the network join", "留空则本网络中任何人都可加入", "비워 두면 네트워크의 누구나 참가할 수 있습니다"],
  "mp.hostVisible": ["Visible on this network", "在本网络中可见", "이 네트워크에 표시"],
  "mp.startHosting": ["Start hosting", "开始架设", "호스팅 시작"],
  "mp.starting": ["Starting the server…", "正在启动服务器…", "서버 시작 중…"],
  "mp.hostFailed": ["Could not start the server: {0}", "无法启动服务器：{0}", "서버를 시작할 수 없습니다: {0}"],
  // ------------------------------------------------------------- maps
  "map.greenfield": ["Greenfield", "绿野", "그린필드"],
  "map.greenfield.style": ["Open pasture with room to manoeuvre and few natural walls.", "开阔牧野，回旋余地充足，天然屏障稀少。", "기동할 여지가 넉넉하고 천연 장벽이 적은 탁 트인 목초지."],
  "map.twinBays": ["Twin Bays", "双子湾", "쌍둥이 만"],
  "map.twinBays.style": ["Two sheltered bays cut the land in half.", "两处避风海湾把陆地一分为二。", "아늑한 만 두 곳이 땅을 반으로 가릅니다."],
  "map.archipelago": ["Archipelago", "群岛", "군도"],
  "map.archipelago.style": [
    "Scattered islands and narrow straits; nothing crosses without a hull or a wing.",
    "岛屿零散、海峡狭窄，没有海空军便寸步难行。",
    "흩어진 섬과 좁은 해협. 선체나 날개 없이는 아무것도 건너지 못합니다."
  ],
  "map.riftValley": ["Rift Valley", "裂谷", "열곡"],
  "map.riftValley.style": ["Mountain ridges channel every advance into a handful of passes.", "山脊把每一次推进都逼进少数几处隘口。", "산줄기가 모든 진격을 몇 개의 고개로 몰아넣습니다."],
  "map.burnoutHighway": ["Burnout Highway", "燃速公路", "번아웃 하이웨이"],
  "map.burnoutHighway.style": [
    "A trunk road straight across open ground, with a ring road round it.",
    "一条笔直横穿旷野的干道，外面绕着一圈环路。",
    "탁 트인 땅을 곧게 가로지르는 간선 도로와, 그 둘레를 도는 순환 도로."
  ],
  "map.blackMarsh": ["Black Marsh", "黑泽", "검은 늪"],
  "map.blackMarsh.style": [
    "Two dry homelands in a marsh, a causeway between them, and two channels of open water cut across it.",
    "沼泽中的两座旱地家园，一条堤道相连，两道水道横切其间。",
    "습지 속의 마른 본거지 둘, 그 사이의 둑길, 그리고 그것을 가로지르는 물길 둘."
  ],
  "map.frostline": ["Frostline", "冻土战线", "프로스트라인"],
  "map.frostline.style": [
    "A frozen front: one long ridge with three passes through it, and long firing lanes over the snow.",
    "冻土战线：一道长长的山脊上开着三处隘口，雪地上射界开阔。",
    "얼어붙은 전선: 고개 셋이 뚫린 긴 능선 하나, 그리고 눈 위의 긴 사선."
  ],
  "map.shatteredCity": ["Shattered City", "破碎城区", "부서진 도시"],
  "map.shatteredCity.style": [
    "A ruined town on a tight street grid, rubble between the streets.",
    "一座废墟小城：紧凑的街道网格，街道之间尽是瓦砾。",
    "촘촘한 격자 도로 위의 폐허가 된 도시, 거리 사이는 잔해뿐입니다."
  ],
  "map.caldera": ["Caldera Crown", "火山王冠", "칼데라 크라운"],
  "map.caldera.style": [
    "A volcano on an ash plain: three walled terraces up to the crater rim, the ore round a lava lake inside it, and four lava flows down the flanks with a causeway over each.",
    "灰原上的一座火山：三层崖壁台地直上火口缘，火口内的熔岩湖周围有矿脉，四条熔岩流沿山坡而下，每条上各有一道堤道。",
    "잿빛 평원 위의 화산: 절벽으로 둘러싸인 세 단의 대지가 분화구 가장자리까지 오르고, 그 안 용암 호수 둘레에 광석이 있으며, 네 줄기 용암류가 산비탈을 타고 내려오고 그 위마다 둑길이 하나씩 놓여 있습니다."
  ],
  "map.leviathanStrait": ["Leviathan Strait", "巨舰海峡", "리바이어던 해협"],
  "map.leviathanStrait.style": [
    "Two narrow homelands across a strait, the ore on the islets between them, and reefs scattered through the water.",
    "海峡两岸各一座狭长家园，矿脉在其间的小岛上，礁石散布水中。",
    "해협을 사이에 둔 좁은 본거지 둘, 그 사이 작은 섬들의 광석, 바다 곳곳에 흩어진 암초."
  ],
  "map.sixCrowns": ["Six Crowns", "六冠", "여섯 왕관"],
  "map.sixCrowns.style": [
    "Six homelands ring a lake, a mountain spoke with a single pass between each pair of neighbours, and the ore on the shore.",
    "六座家园环绕中央湖泊，相邻两家之间各有一道仅留单一隘口的山脊，矿脉在湖岸上。",
    "여섯 본거지가 호수를 둘러싸고, 이웃한 두 곳 사이마다 고개 하나만 남긴 산줄기가 서 있으며, 광석은 호숫가에 있습니다."
  ],
  "map.solomonIslands": ["Solomon Islands", "所罗门群岛", "솔로몬 제도"],
  "map.solomonIslands.style": [
    "Three jungle islands in a row under an estuary: a harbour and a plantation on the western one, a village on the central one, a beach and a bunker ridge on the eastern one, and a swamp ford and a bridge between them.",
    "河口之下三座丛林岛屿一字排开：西岛有港口与种植园，中岛是村庄，东岛有海滩与碉堡山脊，岛与岛之间是沼泽浅滩和一座桥。",
    "하구 아래 나란히 늘어선 정글 섬 셋: 서쪽 섬에는 항구와 농장, 가운데 섬에는 마을, 동쪽 섬에는 해변과 벙커 능선, 그 사이에 늪 여울과 다리 하나."
  ],
  "map.saltboneReach": ["Saltbone Reach", "盐骨海域", "솔트본 리치"],
  "map.saltboneReach.style": [
    "Homelands on the rim of a drowned range, and most of the ore out in the water between them: thirty-odd islets, four islands with room for a base, and no bridge anywhere.",
    "家园环列于沉没山脉的边缘，大部分矿藏散落在其间的海面上：三十余座礁屿、四座能容下一座基地的岛屿，全图不见一座桥。",
    "가라앉은 산맥의 가장자리에 자리한 본거지들, 그리고 광석 대부분이 그 사이 바다에 있습니다. 서른 남짓한 암초 섬, 기지를 세울 자리가 있는 섬 넷, 다리는 어디에도 없습니다."
  ],
  "map.pacificStorm": ["Pacific Storm", "太平洋风暴", "퍼시픽 스톰"],
  "map.pacificStorm.style": [
    "An island chain: a mountain mainland across a strait, an airfield island off it with the strip up its spine, a knot of islands in the middle cut by shallow channels and a lagoon, and an anchorage among skerries in the open sea to the east.",
    "一条岛链：海峡对岸是山地大陆，机场岛卧在近海，跑道沿岛脊延伸；正中一簇岛屿被浅水航道和一片潟湖切开；东面的开阔海上有一处锚地和一串散落的礁屿。",
    "열도 하나: 해협 건너 산악 본토, 그 앞바다에 등줄기를 따라 활주로가 놓인 비행장 섬, 얕은 수로와 석호로 갈라진 한가운데의 섬 무리, 그리고 동쪽 먼바다의 흩어진 암초 섬 사이의 정박지."
  ],
  "map.iwoJima": ["Iwo Jima", "硫磺岛", "이오지마"],
  "map.iwoJima.style": [
    "A volcanic island: Suribachi walled at the south-western tip, the neck and the landing beaches, a terrace with the first airfield, and the Motoyama plateau on the head, falling into the sea from Kama Rock round Kitano Point and down the whole east coast, with the richest ore on the map up top.",
    "一座火山岛：西南端是崖壁环绕的折钵山，然后是岛颈和登陆海滩、带第一座机场的台地，岛头是元山高原，从釜岩绕北角直到整条东岸都直落入海，全图最富的矿藏就在高原之上。",
    "화산섬 하나: 남서쪽 끝의 절벽에 둘러싸인 스리바치산, 잘록한 목과 상륙 해변, 첫 비행장의 단구, 그리고 가마바위에서 기타노곶을 돌아 동해안 전체로 바다에 떨어지는 섬 머리의 모토야마 고원, 그 위에 지도에서 가장 부유한 광석."
  ],
  "map.wakeIsland": ["Wake Island", "威克岛", "웨이크섬"],
  "map.wakeIsland.style": [
    "An atoll: a wishbone of sand round a lagoon that opens through a reef, Wake with the airstrip along its southern leg, Wilkes the thin arm off its end, Peale off its northern tip, and a causeway onto each.",
    "一座环礁：一弯马蹄形沙洲环抱潟湖，礁盘开一道口，威克岛的跑道沿南臂延伸，威尔克斯是南臂尽头的细长小岛，皮尔岛在北臂顶端，各有一条堤道相连。",
    "환초 하나: 산호초 틈으로 열린 석호를 두른 말굽 모양의 모래섬, 남쪽 팔을 따라 활주로가 놓인 웨이크, 그 끝의 가느다란 윌크스, 북쪽 끝의 필, 그리고 각각으로 이어지는 둑길."
  ],
  "map.coastRoad": ["Coast Road", "海岸公路", "해안 도로"],
  "map.coastRoad.style": [
    "A desert strip between the Gulf and an escarpment, the coast road its whole length: a landing ground at the west end, an oasis, a town astride the road, an oilfield at the east end, and a wadi and a salt flat to cross between them.",
    "海湾与陡崖之间的一条沙漠地带，海岸公路贯穿全程：西端是登陆场，然后是绿洲、横跨公路的小镇，东端是油田，中间还有干河谷和盐滩要穿越。",
    "만과 절벽 사이의 사막 띠에 끝까지 이어진 해안 도로: 서쪽 끝의 상륙장, 오아시스, 길에 걸터앉은 마을, 동쪽 끝의 유전, 그리고 그 사이에 건너야 할 와디와 염전."
  ],
  "map.threeGates": ["Three Gates", "三重关", "세 관문"],
  "map.threeGates.style": [
    "A canyon north through the mountains with three plateaus across it, each gated by one road through its rim, and ore in the pockets off the road.",
    "一条穿山北去的峡谷，横卧着三座高地，每座只有一条穿过崖沿的道路作为关门，矿藏在公路两侧的口袋里。",
    "산맥을 뚫고 북으로 난 협곡에 고원 셋이 가로놓여 있고, 각각 절벽 테두리를 지나는 길 하나가 관문이며, 광석은 길에서 벗어난 주머니 지형에 있습니다."
  ],
  "map.random": ["Random Map", "随机地图", "무작위 지도"],
  "map.random.style": [
    "A fresh layout every match, with exactly as many homelands as there are players in the game.",
    "每局都是全新布局，家园数量与参战人数一致。",
    "매 대전마다 새 배치에, 본거지 수는 참가 플레이어 수와 정확히 같습니다."
  ],
  // the climates a generated map is drawn in (game/biomes.ts) — the name it is
  // announced under, and the promise of what the ground will be like
  "climate.heartland": ["Heartland", "腹地", "중심지"],
  "climate.taiga": ["Taiga", "泰加林", "타이가"],
  "climate.badlands": ["Badlands", "荒原", "황무지"],
  "climate.ashlands": ["Ashlands", "焦土", "잿더미 땅"],
  "climate.coastland": ["Coastland", "滨海", "해안 지대"],
  "climate.fenlands": ["Fenlands", "沼原", "늪지대"],
  "climate.frozenSea": ["Frozen Sea", "冰海", "얼어붙은 바다"],
  "climate.archipelago": ["Island Chain", "岛链", "열도"],
  // ------------------------------------------------------------- campaign
  "campaign.title": ["Campaign", "战役", "캠페인"],
  "campaign.mission": ["Mission {0}", "第 {0} 关", "임무 {0}"],
  "campaign.locked": ["Complete the previous mission to unlock.", "完成上一关后解锁。", "이전 임무를 완료하면 열립니다."],
  "campaign.completed": ["Completed", "已完成", "완료"],
  "campaign.replay": ["Replay", "重玩", "다시 하기"],
  "campaign.missions": ["Missions", "任务列表", "임무"],
  "campaign.brief": ["Briefing", "任务简报", "브리핑"],
  "campaign.objectives": ["Objectives", "任务目标", "목표"],
  "campaign.progress.reset": ["Reset progress", "重置进度", "진행 초기화"],
  "campaign.progress.resetConfirm": ["Reset all campaign progress?", "确定重置全部战役进度？", "캠페인 진행을 모두 초기화할까요?"],
  // ---- the campaign: the Gulf War of 1990–91 under other flags (docs/CAMPAIGN.md).
  // Each mission carries a name, a dateline, a background card (paragraphs
  // apart by a blank line, read in silence) and Command's orders (read by the
  // narrator: `briefing.mN` in core/voice.ts).
  "campaign.background": ["Background", "背景", "배경"],
  "campaign.orders": ["Orders", "命令", "명령"],
  "campaign.begin": ["Begin", "开始", "시작"],
  "m1.name": ["Desert Shield", "沙漠盾牌", "사막의 방패"],
  "m1.date": ["8 August 1990 · 0600 · Ras Hadar, the Kingdom", "1990 年 8 月 8 日 · 0600 · 拉斯哈达尔，王国", "1990년 8월 8일 · 0600 · 라스 하다르, 왕국"],
  "m1.background": [
    "On 2 August 1990, at two in the morning, the army of the Republic of Qarash crossed the border into the Emirate of Sarab. Four divisions of the Guard led. Sarab had sixteen thousand soldiers under arms; by the second evening it had none in the field, and its ruler was over the southern border in a convoy of cars.\n\nQarash now held a fifth of the world’s oil under one flag, and its columns had stopped on the Kingdom’s border, facing south.\n\nThirty-four nations answered. Under one command they took a name: the Concord. On 7 August its first aircraft landed at Ras Hadar on the Kingdom’s coast, three hundred kilometres from the border. What it needed next was ground, metal and a war factory.",
    "1990 年 8 月 2 日凌晨两点，卡拉什共和国的军队越过边境，进入萨拉布酋长国。近卫军的四个师打头阵。萨拉布有一万六千名武装士兵；到第二天傍晚，战场上一个也不剩，它的统治者已乘车队越过南面的边境。\n\n卡拉什如今把全世界五分之一的石油收在一面旗下，它的纵队停在王国的边境上，面朝南方。\n\n三十四个国家做出了回应。它们在一个指挥部之下取了一个名字：协约。8 月 7 日，协约的第一批飞机降落在王国海岸的拉斯哈达尔，距边境三百公里。接下来它需要的是土地、金属，和一座战车工厂。",
    "1990년 8월 2일 새벽 두 시, 카라시 공화국군이 국경을 넘어 사라브 토후국으로 들어갔다. 근위군 4개 사단이 앞장섰다. 사라브에는 무장 병력 1만 6천 명이 있었다. 둘째 날 저녁에는 전장에 한 명도 남지 않았고, 통치자는 승용차 행렬로 남쪽 국경을 넘어 있었다.\n\n카라시는 이제 세계 석유의 5분의 1을 한 깃발 아래 두었고, 그 종대는 왕국 국경에서 남쪽을 향한 채 멈춰 있었다.\n\n서른네 나라가 응답했다. 하나의 지휘 아래 그들은 이름을 택했다. 콩코드. 8월 7일, 첫 항공기가 왕국 해안의 라스 하다르에 내렸다. 국경에서 300킬로미터. 다음에 필요한 것은 땅과 금속, 그리고 전차 공장이었다."
  ],
  "m1.brief": [
    "Command online. We hold the port and nothing else. Raise extractors on the deposits along the coast road and put up a war factory. A Qarashi screening force has crossed the line to see what we have; it sits on the escarpment to the north. Build a column and clear it out. Command will walk you through the basics.",
    "指挥系统上线。我们只握着港口，别的什么都没有。在海岸公路沿线的矿脉上建起采矿场，再立一座战车工厂。一支卡拉什侦察部队越线来探我们的虚实，它盘踞在北面的陡崖上。组建一支纵队，把它清出去。指挥部会带你熟悉基础操作。",
    "지휘부 온라인. 우리가 쥔 것은 항구뿐입니다. 해안 도로를 따라 광맥에 채굴장을 세우고 전차 공장을 올리십시오. 카라시 정찰대가 우리 형편을 보러 선을 넘어왔습니다. 북쪽 절벽 위에 앉아 있습니다. 종대를 만들어 쓸어내십시오. 기본 조작은 지휘부가 안내합니다."
  ],
  "m2.name": ["Instant Thunder", "瞬间雷霆", "인스턴트 선더"],
  "m2.date": ["17 January 1991 · 0238 · The southern desert", "1991 年 1 月 17 日 · 0238 · 南部沙漠", "1991년 1월 17일 · 0238 · 남부 사막"],
  "m2.background": [
    "The Concord gave Qarash until 15 January to leave Sarab. Five months of the largest deployment since 1945 went into the desert behind that date: half a million soldiers, four thousand tanks, and an air fleet on every runway within reach.\n\nThe date passed. Qarash stayed. On the night of 16 January the first helicopters crossed the border low to take out the radar stations in the west, and behind them the sky filled.\n\nAt 0238 on the 17th the air war began. Its first targets were the eyes of the Qarashi air defence: the radars, the missile belts, then the airfields themselves. The first bomb fell on the capital at 0300, live on television.",
    "协约给卡拉什的期限是 1 月 15 日之前撤出萨拉布。这个日期背后，是五个月里 1945 年以来规模最大的部署：五十万士兵、四千辆坦克，以及触手可及的每一条跑道上停满的机群。\n\n期限过去了。卡拉什没有走。1 月 16 日夜里，第一批直升机贴地越过边境，摧毁西部的雷达站，它们身后，天空被填满了。\n\n17 日 0238，空战开始。第一批目标是卡拉什防空体系的眼睛：雷达、导弹阵地带，然后是机场本身。0300，第一枚炸弹落在首都，电视直播。",
    "콩코드는 카라시에 1월 15일까지 사라브에서 물러나라는 기한을 주었다. 그 날짜 뒤에는 다섯 달에 걸친 1945년 이래 최대 규모의 전개가 있었다. 병력 50만, 전차 4천 대, 닿는 모든 활주로를 채운 항공 전력.\n\n기한이 지났다. 카라시는 남았다. 1월 16일 밤, 첫 헬기들이 서부의 레이더 기지를 부수러 국경을 낮게 넘었고, 그 뒤로 하늘이 가득 찼다.\n\n17일 0238, 항공전이 시작됐다. 첫 표적은 카라시 방공의 눈이었다. 레이더, 미사일 벨트, 그리고 비행장 자체. 0300에 첫 폭탄이 수도에 떨어졌다. 텔레비전 생중계로."
  ],
  "m2.brief": [
    "Command online. The radars come first: two stations north of the ridge feed every missile battery in the sector, and while they stand our aircraft die. Put up an airbase, take the radars down, then the airfields behind them. Expect their bombers to hit us the whole time. Keep the headquarters standing.",
    "指挥系统上线。先打雷达：山脊以北的两座雷达站为这一区域的每一处导弹阵地提供引导，它们不倒，我们的飞机就会不断坠落。建一座空军基地，敲掉雷达，再敲掉它们身后的机场。整个过程中他们的轰炸机都会来袭。总部必须屹立不倒。",
    "지휘부 온라인. 레이더가 먼저입니다. 능선 북쪽의 기지 두 곳이 이 구역의 모든 미사일 포대를 먹여 살리고, 그것이 서 있는 한 우리 항공기는 죽습니다. 공군 기지를 세우고 레이더를 떨어뜨린 뒤, 그 뒤의 비행장을 치십시오. 내내 적 폭격기가 우리를 때릴 것입니다. 사령부를 지키십시오."
  ],
  "m3.name": ["Sarsar Hunt", "猎杀萨尔萨尔", "사르사르 사냥"],
  "m3.date": ["18 January 1991 · 0300 · The western desert", "1991 年 1 月 18 日 · 0300 · 西部沙漠", "1991년 1월 18일 · 0300 · 서부 사막"],
  "m3.background": [
    "On the second night of the air war Qarash answered with the one weapon that could reach past the front. Sarsar: a ballistic missile on a wheeled launcher, a ton of warhead, a range of six hundred kilometres. Seven fell on cities across the border that night. Over the next six weeks, eighty-eight.\n\nThey could not be aimed at anything smaller than a city, and that was the point. Every launch was a test of whether the Concord would hold together; every launch put a neighbour a night closer to entering the war and breaking it.\n\nFinding a launcher took an aircraft over it within minutes of the flash. The western desert had a thousand wadis to hide in. A third of the air war went into the hunt.",
    "空战的第二个夜晚，卡拉什用唯一一种能够越过前线的武器做出了回答。萨尔萨尔：装在轮式发射车上的弹道导弹，一吨重的弹头，六百公里射程。那一夜有七枚落在边境另一侧的城市里。此后六周，八十八枚。\n\n它们瞄不准比一座城市更小的东西，而这正是用意所在。每一次发射都是对协约能否维系的考验；每一次发射都让某个邻国离参战、离让协约瓦解更近一夜。\n\n要找到一辆发射车，必须在火光亮起后几分钟内让一架飞机飞到它头顶。西部沙漠有一千条干河谷可以藏身。三分之一的空战投进了这场猎杀。",
    "항공전 둘째 밤, 카라시는 전선 너머에 닿을 수 있는 유일한 무기로 응답했다. 사르사르. 차륜 발사대에 실린 탄도 미사일, 1톤짜리 탄두, 사거리 600킬로미터. 그날 밤 국경 너머 도시들에 일곱 발이 떨어졌다. 이후 여섯 주 동안 여든여덟 발.\n\n도시보다 작은 것은 겨눌 수 없었고, 바로 그것이 목적이었다. 발사 하나하나가 콩코드가 버틸 수 있는지에 대한 시험이었다. 발사 하나하나가 이웃 나라를 참전과 동맹의 파열에 하룻밤씩 더 가깝게 밀었다.\n\n발사대를 찾으려면 섬광 뒤 몇 분 안에 항공기가 그 위에 있어야 했다. 서부 사막에는 숨을 와디가 천 개 있었다. 항공전의 3분의 1이 그 사냥에 들어갔다."
  ],
  "m3.brief": [
    "Command online. Six launchers are in the wadis west of you, and each one that fires gives itself away for a moment: watch the map for the flash and go. You have a light column and the fuel for one night; there is no economy here worth the name. The eighth launch to land is one too many. Find them first.",
    "指挥系统上线。你西面的干河谷里藏着六辆发射车，每一辆一开火就会暴露片刻：盯住地图上的火光，然后冲过去。你手里有一支轻装纵队和一夜的油料；这里没有值得一提的经济。第八枚落地的导弹就是多出来的那一枚。抢在它之前找到它们。",
    "지휘부 온라인. 서쪽 와디에 발사대 여섯 대가 있고, 쏘는 순간마다 잠깐 제 위치를 드러냅니다. 지도의 섬광을 보고 달려가십시오. 가진 것은 경장 종대와 하룻밤치 연료뿐이고, 여기에 경제라 할 만한 것은 없습니다. 여덟 번째 착탄은 하나가 너무 많습니다. 먼저 찾아내십시오."
  ],
  "m4.name": ["Rasfa", "拉斯法", "라스파"],
  "m4.date": ["29 January 1991 · 2000 · Rasfa, the coast", "1991 年 1 月 29 日 · 2000 · 拉斯法，海岸", "1991년 1월 29일 · 2000 · 라스파, 해안"],
  "m4.background": [
    "Twelve days of bombing had not moved a Qarashi column. On the night of 29 January three of them moved themselves: south across the border into the Kingdom, toward the coastal town of Rasfa.\n\nRasfa had been emptied of civilians and was held by a screen of reconnaissance teams. The columns took the town in the dark. It was the first ground battle of the war, and the only one Qarash chose.\n\nTwo nights it was fought for, house by house and along the coast road under the guns of the ships offshore. The Concord’s Arab contingents retook it on the 31st. The columns that came south did not go back.",
    "十二天的轰炸没能让一支卡拉什纵队挪动分毫。1 月 29 日夜里，三支纵队自己动了：向南越过边境进入王国，直指海滨小镇拉斯法。\n\n拉斯法的平民早已撤空，守着它的只有一层薄薄的侦察小队。纵队在黑暗中拿下了小镇。这是这场战争的第一场地面战，也是卡拉什唯一一次主动选择的战斗。\n\n为它打了两夜，逐屋争夺，沿着海岸公路，在近海军舰的炮火之下。31 日，协约的阿拉伯部队将它夺回。南下的纵队没有回去。",
    "열이틀의 폭격도 카라시 종대 하나를 움직이지 못했다. 1월 29일 밤, 종대 셋이 스스로 움직였다. 남쪽으로 국경을 넘어 왕국으로, 해안 마을 라스파를 향해.\n\n라스파는 민간인이 비워진 채 정찰조의 얇은 막이 지키고 있었다. 종대는 어둠 속에서 마을을 차지했다. 이 전쟁의 첫 지상전이었고, 카라시가 택한 유일한 싸움이었다.\n\n이틀 밤을 두고 집집마다, 해안 도로를 따라, 앞바다 군함의 함포 아래에서 싸웠다. 31일, 콩코드의 아랍 부대가 마을을 되찾았다. 남쪽으로 내려온 종대는 돌아가지 못했다."
  ],
  "m4.brief": [
    "Command online. Rasfa is yours to hold: a headquarters in the town, two turrets, and what you can build before they arrive. The columns come down the coast road and across the salt flats from the north-west. Hold twelve minutes for the ships and the armour to come up. Then retake the town.",
    "指挥系统上线。拉斯法交给你守：镇里一座总部、两座炮塔，以及他们到来之前你能建起的一切。纵队会沿海岸公路南下，并从西北方穿过盐滩而来。坚守十二分钟，等军舰和装甲部队上来。然后夺回小镇。",
    "지휘부 온라인. 라스파는 당신이 지킵니다. 마을 안의 사령부 하나, 포탑 둘, 그리고 적이 오기 전에 지을 수 있는 것. 종대는 해안 도로를 타고 내려오고, 북서쪽 염전을 가로질러 옵니다. 함선과 장갑이 올라올 때까지 12분을 버티십시오. 그다음 마을을 되찾으십시오."
  ],
  "m5.name": ["Bayan Channel", "巴扬水道", "바얀 수로"],
  "m5.date": ["30 January 1991 · 0200 · The Bayan Channel", "1991 年 1 月 30 日 · 0200 · 巴扬水道", "1991년 1월 30일 · 0200 · 바얀 수로"],
  "m5.background": [
    "Qarash had a navy of missile boats and minelayers, and one use for it: to run north up the Bayan Channel to a port out of reach, and to sow the Gulf behind it with mines.\n\nOn 29 January the Concord’s aircraft caught the first of them in the channel. Over four days they sank or beached every ship that tried the run. Qarash never had a navy again.\n\nThe mines were another matter. Twelve hundred were laid. In February two warships struck them within three hours of each other, and the landing the Concord had rehearsed on Bayan Island became the feint it was always meant to be. The Guard kept six divisions on the beaches waiting for it.",
    "卡拉什有一支由导弹艇和布雷舰组成的海军，只有一个用途：沿巴扬水道向北突围，逃到一座够不着的港口，并在身后的海湾里布满水雷。\n\n1 月 29 日，协约的飞机在水道里逮住了第一批。四天之内，每一艘试图突围的船都被击沉或搁浅。卡拉什从此再没有海军。\n\n水雷则是另一回事。一共布了一千两百枚。二月，两艘军舰在三小时内先后触雷，协约在巴扬岛演练过的登陆，变成了它本来就该是的佯攻。近卫军把六个师留在海滩上等着它。",
    "카라시에는 미사일정과 기뢰부설함으로 이루어진 해군이 있었고, 쓸모는 하나였다. 바얀 수로를 타고 북쪽으로, 손이 닿지 않는 항구까지 달아나고, 그 뒤의 만에 기뢰를 뿌리는 것.\n\n1월 29일, 콩코드 항공기가 수로에서 첫 배들을 잡았다. 나흘에 걸쳐 그들은 돌파를 시도한 모든 배를 가라앉히거나 좌초시켰다. 카라시에 해군은 다시 없었다.\n\n기뢰는 다른 문제였다. 1,200개가 깔렸다. 2월에 군함 두 척이 세 시간 간격으로 기뢰를 밟았고, 콩코드가 바얀섬에 연습해 둔 상륙은 처음부터 그렇게 되기로 되어 있던 기만이 되었다. 근위군은 그것을 기다리며 6개 사단을 해변에 붙들어 두었다."
  ],
  "m5.brief": [
    "Command online. Their fleet runs tonight, in groups, up the channel past Bayan Island to the port at its head. Build a naval yard and sink them in the open; any that reach the port hide under its guns and you go in after them. Then take the island. Its command post is what holds those six divisions on the beaches.",
    "指挥系统上线。他们的舰队今夜分批突围，沿水道经过巴扬岛，逃往水道尽头的港口。建一座造船厂，在开阔水面上击沉它们；逃进港口的船会躲在岸炮之下，你得追进去。然后拿下这座岛。岛上的指挥所，就是把那六个师钉在海滩上的东西。",
    "지휘부 온라인. 오늘 밤 적 함대가 무리를 지어 바얀섬을 지나 수로 끝의 항구로 달아납니다. 조선소를 짓고 트인 바다에서 가라앉히십시오. 항구에 닿은 배는 그곳 포 아래 숨을 테니, 뒤따라 들어가야 합니다. 그다음 섬을 차지하십시오. 섬의 지휘소가 그 6개 사단을 해변에 붙들어 두고 있습니다."
  ],
  "m6.name": ["The Breach", "突破口", "돌파구"],
  "m6.date": ["24 February 1991 · 0400 · The Sarab border", "1991 年 2 月 24 日 · 0400 · 萨拉布边境", "1991년 2월 24일 · 0400 · 사라브 국경"],
  "m6.background": [
    "Six months of digging had made the border a line: a sand berm, then a ditch of oil with a pipe to light it, then wire, then half a million mines, then the trenches. Behind it stood the conscript divisions that had been bombed for thirty-eight days. Behind them, the Guard.\n\nAt 0400 on 24 February, in rain and low cloud, the ground war began. Ploughs on the front of tanks cut lanes through the mines; the berms were bulldozed; the fire ditches were bridged or filled. In the centre the breach was through in hours.\n\nFar to the west, out where the line was thin, the heaviest corps the Concord had was already across and turning east. Qarash was looking south.",
    "六个月的挖掘把边境变成了一道防线：一道沙堤，然后是一条能用管道点燃的油沟，然后是铁丝网，然后是五十万枚地雷，然后是战壕。防线后面，是已经被轰炸了三十八天的征召兵师。它们后面，是近卫军。\n\n2 月 24 日 0400，在雨和低云之中，地面战开始了。坦克前端的犁刀在雷区里犁出通道；沙堤被推平；火沟被架桥或填平。中央的突破口几小时内就打通了。\n\n遥远的西边，防线最薄弱的地方，协约最重的一个军已经越了过去，正在向东转向。卡拉什却在望着南方。",
    "여섯 달의 땅파기가 국경을 하나의 선으로 만들었다. 모래 둑, 그다음 불붙일 관이 달린 기름 도랑, 그다음 철조망, 그다음 지뢰 50만 개, 그다음 참호. 그 뒤에는 서른여드레 동안 폭격을 받은 징집 사단들이 서 있었다. 그 뒤에 근위군.\n\n2월 24일 0400, 비와 낮은 구름 속에서 지상전이 시작됐다. 전차 앞의 쟁기가 지뢰밭에 통로를 갈랐고, 둑은 불도저로 밀렸고, 불 도랑에는 다리가 놓이거나 메워졌다. 중앙의 돌파구는 몇 시간 만에 뚫렸다.\n\n저 멀리 서쪽, 선이 얇은 곳에서는 콩코드의 가장 무거운 군단이 이미 건너가 동쪽으로 돌고 있었다. 카라시는 남쪽을 보고 있었다."
  ],
  "m6.brief": [
    "Command online. The line runs east to west across your front: a berm, a fire trench, and the guns behind it. Two lanes have been cut, one at each end. Take engineers forward under artillery, silence the guns, and go through. The reserve division’s headquarters is behind the line; that is the objective. Rain until noon.",
    "指挥系统上线。防线横贯你的正面，东西向：一道沙堤、一条火沟、堤后的炮位。已经开出两条通道，两端各一条。在炮火掩护下把工程车推上去，压制炮位，穿过去。预备师的总部就在防线后面，那是目标。雨会下到中午。",
    "지휘부 온라인. 선은 정면을 동서로 가로지릅니다. 둑, 불 도랑, 그 뒤의 포. 통로 두 개가 뚫려 있고, 양 끝에 하나씩입니다. 포병 엄호 아래 공병을 앞으로 보내 포를 잠재우고 통과하십시오. 예비 사단의 사령부가 선 뒤에 있습니다. 그것이 목표입니다. 비는 정오까지입니다."
  ],
  "m7.name": ["73 Easting", "73 东线", "73 이스팅"],
  "m7.date": ["26 February 1991 · 1618 · The 73 Easting, Qarashi desert", "1991 年 2 月 26 日 · 1618 · 73 东线，卡拉什沙漠", "1991년 2월 26일 · 1618 · 73 이스팅, 카라시 사막"],
  "m7.background": [
    "The Guard was the army inside the army: the divisions that had taken Sarab, kept out of the line and out of the bombing, dug in behind it with the best of everything. Nasr, Saif, Hadid.\n\nOn 26 February a shamal came in off the desert: sand and rain together, visibility under a kilometre. The Concord’s western corps was driving east through it toward the Guard, on no map but a grid: north-south lines a kilometre apart, numbered by their easting.\n\nAt 1618 a cavalry troop crested a rise on the 73 Easting and found the Nasr Division dug in on the far side, a whole brigade of tanks in the storm, at nine hundred metres. The Guard’s war there lasted twenty-three minutes. It kept fighting into the night.",
    "近卫军是军队中的军队：攻下萨拉布的那几个师，被留在防线之外、轰炸之外，带着最好的一切在防线后面掘壕据守。纳斯尔、赛义夫、哈迪德。\n\n2 月 26 日，一场沙暴从沙漠上卷来：沙与雨一起，能见度不足一公里。协约的西部军正穿过它向东推进，直奔近卫军，手里没有地图，只有一张网格：一公里一条的南北线，按东向坐标编号。\n\n1618，一支骑兵分队冲上 73 东线上的一道坡顶，发现纳斯尔师就掘壕在坡的另一侧，整整一个旅的坦克，在风暴里，九百米外。近卫军在那里的战斗持续了二十三分钟。战斗一直打进了夜里。",
    "근위군은 군대 속의 군대였다. 사라브를 점령한 사단들, 전선 밖에 폭격 밖에 남겨져, 최고의 장비로 그 뒤에 파고든 자들. 나스르, 사이프, 하디드.\n\n2월 26일, 사막에서 샤말이 불어왔다. 모래와 비가 함께, 시계는 1킬로미터 아래. 콩코드의 서부 군단은 그것을 뚫고 동쪽으로 근위군을 향해 달리고 있었다. 지도는 없고 격자뿐이었다. 1킬로미터 간격의 남북선, 동경 좌표로 번호가 붙은.\n\n1618, 기병 부대 하나가 73 이스팅의 언덕마루에 올라섰고, 그 너머에 파고든 나스르 사단을 찾았다. 폭풍 속의 전차 1개 여단 전체, 900미터 거리. 그곳에서 근위군의 전쟁은 23분 걸렸다. 싸움은 밤까지 이어졌다."
  ],
  "m7.brief": [
    "Command online. Sight is under a kilometre in this and everything crawls. The Nasr Division is dug in on a north-south line ahead of you, turrets and tanks in pits, and it will not see you before you see it. You have a cavalry column and a staging post behind you; hold the post. Their reserve brigade will come down from the north when the shooting starts. Destroy the division.",
    "指挥系统上线。这种天气里视野不足一公里，一切都在爬行。纳斯尔师掘壕在你前方一条南北线上，炮塔和坦克都在掩体里，它不会比你先发现对方。你有一支骑兵纵队，身后有一处前进基地；守住基地。枪声一响，他们的预备旅就会从北面压下来。歼灭这个师。",
    "지휘부 온라인. 이 속에서는 시계가 1킬로미터가 안 되고 모든 것이 기어갑니다. 나스르 사단이 정면의 남북선에 파고들어 있습니다. 포탑과 전차가 참호 속에 있고, 당신이 먼저 보기 전에는 저들이 당신을 보지 못합니다. 기병 종대와 뒤쪽의 전진 기지가 있습니다. 기지를 지키십시오. 총성이 시작되면 적 예비 여단이 북쪽에서 내려옵니다. 사단을 격멸하십시오."
  ],
  "m8.name": ["Hadid Ridge", "哈迪德岭", "하디드 능선"],
  "m8.date": ["27 February 1991 · 1200 · Hadid Ridge", "1991 年 2 月 27 日 · 1200 · 哈迪德岭", "1991년 2월 27일 · 1200 · 하디드 능선"],
  "m8.background": [
    "By the morning of the 27th the Guard’s remaining armour had turned to face west, on the one piece of high ground between the Concord’s corps and the road home: a low ridge the Hadid Division, the Iron, had chosen in advance.\n\nIt was the reverse-slope defence of the manuals: tanks dug in below the crest, ranged on the ground in front, their artillery behind. Against it came a full armoured division on line, with the guns and the helicopters and the sky.\n\nThe tanks on the ridge could hit at two kilometres. The tanks coming at them could hit at three, and could see through the smoke of the burning oilfields. It was the largest tank battle of the war and it was over in forty minutes.",
    "到 27 日早晨，近卫军剩下的装甲部队已经转身面向西方，据守在协约各军与回家之路之间唯一的一处高地上：一道低矮的山岭，哈迪德师，“铁”师，早就选好了它。\n\n这是教科书上的反斜面防御：坦克掘壕在岭线之下，射界已经标定在前方的地面上，炮兵在后面。迎面而来的，是一整个展开成线的装甲师，带着火炮、直升机和整片天空。\n\n岭上的坦克能打两公里。压过来的坦克能打三公里，还能看穿燃烧油田的浓烟。这是这场战争中最大的一场坦克战，四十分钟就结束了。",
    "27일 아침, 근위군에 남은 장갑 부대는 서쪽을 향해 돌아서 있었다. 콩코드 군단과 귀로 사이의 유일한 고지, 하디드 사단, “철”의 사단이 미리 골라 둔 낮은 능선 위에.\n\n교범대로의 반사면 방어였다. 마루 아래 파고든 전차, 앞쪽 지형에 미리 맞춰 둔 사거리, 뒤에는 포병. 그 앞으로 온 것은 횡대로 전개한 장갑 사단 하나 전체, 포와 헬기와 하늘까지.\n\n능선 위의 전차는 2킬로미터에서 맞출 수 있었다. 밀고 오는 전차는 3킬로미터에서 맞출 수 있었고, 불타는 유전의 연기를 꿰뚫어 볼 수 있었다. 이 전쟁 최대의 전차전이었고, 40분 만에 끝났다."
  ],
  "m8.brief": [
    "Command online. This is the Guard’s last division on the field, dug in below the crest of a ridge across your whole front with its artillery behind it. Nothing subtle: bring everything. Tier-two armour is authorised; so is the air. Their command post is on the ridge. Take it, and the road north is open.",
    "指挥系统上线。这是近卫军留在战场上的最后一个师，掘壕在横贯你整个正面的一道山岭岭线之下，炮兵在它后面。不用玩花样：把所有家当都带上。二级装甲已获批准，空中力量也是。他们的指挥所就在岭上。拿下它，向北的路就通了。",
    "지휘부 온라인. 전장에 남은 근위군 마지막 사단입니다. 정면 전체를 가로지르는 능선 마루 아래 파고들었고, 포병이 그 뒤에 있습니다. 잔재주는 없습니다. 전부 데려가십시오. 2단계 장갑이 승인되었고, 항공도 마찬가지입니다. 적 지휘소는 능선 위에 있습니다. 그것을 잡으면 북쪽 길이 열립니다."
  ],
  "m9.name": ["The Hundred Hours", "一百小时", "백 시간"],
  "m9.date": ["27 February 1991 · 1800 · Sarab City", "1991 年 2 月 27 日 · 1800 · 萨拉布城", "1991년 2월 27일 · 1800 · 사라브 시"],
  "m9.background": [
    "Qarash had seven months to make Sarab its nineteenth province, and it left the way it came. On the 25th the order came to withdraw. The garrison of Sarab City took every vehicle it could start and went north on the one road out, Highway 80, through the night, as the wells behind them were set alight: six hundred of them.\n\nAircraft found the road on the night of the 26th. What was left of the column was still there in the morning, thirty kilometres of it.\n\nOn the 27th the Arab contingents of the Concord entered Sarab City through the smoke. The last of the occupation command held out in the ministry district by the port. At 0800 the next morning a ceasefire took effect: one hundred hours after the ground war began.",
    "卡拉什用七个月时间想把萨拉布变成它的第十九个省，最后却是怎么来的怎么走的。25 日，撤退的命令下达。萨拉布城的驻军开走了每一辆发得动的车，沿着唯一一条出城的路，80 号公路，连夜向北，身后的油井被点燃：六百口。\n\n26 日夜里，飞机找到了这条路。天亮时，纵队剩下的东西还在那里，绵延三十公里。\n\n27 日，协约的阿拉伯部队穿过浓烟进入萨拉布城。占领军指挥部的最后一批人守在港口边的部委区。第二天早晨 0800，停火生效：距地面战开始，整整一百小时。",
    "카라시는 일곱 달 동안 사라브를 열아홉 번째 주로 만들려 했고, 온 길로 떠났다. 25일에 철수 명령이 내려왔다. 사라브 시의 수비대는 시동이 걸리는 차량이란 차량은 다 끌고, 밖으로 나가는 유일한 길인 80번 고속도로를 타고 밤새 북으로 갔다. 그 뒤로 유정에 불이 붙었다. 600곳.\n\n26일 밤, 항공기가 그 길을 찾았다. 아침에도 종대의 잔해는 그대로 거기 있었다. 30킬로미터에 걸쳐.\n\n27일, 콩코드의 아랍 부대가 연기를 뚫고 사라브 시로 들어갔다. 점령군 사령부의 마지막 인원은 항구 옆 정부 청사 구역에서 버텼다. 이튿날 아침 0800, 정전이 발효됐다. 지상전이 시작된 지 꼭 백 시간 뒤였다."
  ],
  "m9.brief": [
    "Command online. The city is under a sky of oil smoke and the wells are burning on every side. The occupation command is dug into the ministry district by the port, and what is left of the garrison is running north on Highway 80 while it can. Take the command. Whatever you can catch on the road is yours. The ceasefire is at 0800: be finished.",
    "指挥系统上线。城市笼罩在油烟之下，四面八方的油井都在燃烧。占领军指挥部盘踞在港口边的部委区，残余的驻军正趁还来得及沿 80 号公路向北逃窜。拿下指挥部。路上能截住多少，都算你的。停火时间是 0800：在那之前结束。",
    "지휘부 온라인. 도시는 기름 연기의 하늘 아래 있고 사방의 유정이 타고 있습니다. 점령군 사령부는 항구 옆 청사 구역에 파고들었고, 남은 수비대는 아직 갈 수 있을 때 80번 고속도로로 북쪽으로 달아나고 있습니다. 사령부를 잡으십시오. 길에서 잡히는 것은 전부 당신 몫입니다. 정전은 0800입니다. 그 전에 끝내십시오."
  ],
  // ------------------------------------------------------------- objectives
  "obj.destroyEnemy": ["Destroy all enemy forces", "消灭所有敌军", "적군을 모두 파괴"],
  "obj.destroyHQ": ["Destroy the enemy headquarters", "摧毁敌方总部", "적 사령부 파괴"],
  "obj.protectHQ": ["Your HQ must survive", "保卫我方总部", "아군 사령부 사수"],
  "obj.survive": ["Survive for {0}", "坚守 {0}", "{0} 동안 버티기"],
  "obj.buildExtractors": ["Build {0} metal extractors", "建造 {0} 座采矿场", "금속 채굴장 {0}개 건설"],
  "obj.buildFactory": ["Build a war factory", "建造战车工厂", "전차 공장 건설"],
  "obj.trainArmy": ["Build {0} combat units", "生产 {0} 个战斗单位", "전투 유닛 {0}개 생산"],
  "obj.buildNavyard": ["Build a naval yard", "建造造船厂", "조선소 건설"],
  "obj.buildAirbase": ["Build an airbase", "建造空军基地", "공군 기지 건설"],
  "obj.destroyAirbases": ["Destroy the enemy airfields", "摧毁敌方机场", "적 비행장 파괴"],
  "obj.destroyOutpost": ["Destroy the border post", "摧毁边境哨所", "국경 초소 파괴"],
  "obj.destroyRadars": ["Destroy the two radar stations", "摧毁两座雷达站", "레이더 기지 두 곳 파괴"],
  "obj.destroyLaunchers": ["Destroy the six launchers ({0} of {1})", "摧毁六辆发射车（{0}/{1}）", "발사대 여섯 대 파괴 ({0}/{1})"],
  "obj.noEighthLaunch": ["The eighth launch must not land ({0} of {1} landed)", "第八枚导弹不得落地（已落地 {0}/{1}）", "여덟 번째 착탄을 막기 (착탄 {0}/{1})"],
  "obj.clearTown": ["Retake the town: destroy every enemy in it", "夺回小镇：消灭镇内所有敌军", "마을 탈환: 마을 안의 적을 모두 파괴"],
  "obj.sinkFleet": ["Sink the fleet: every enemy ship", "击沉舰队：所有敌舰", "함대 격침: 모든 적함"],
  "obj.breachLine": ["Breach the line: silence every gun on it", "突破防线：压制线上的所有炮位", "전선 돌파: 선 위의 모든 포를 침묵시키기"],
  "obj.destroyReserve": ["Destroy the reserve division’s headquarters", "摧毁预备师总部", "예비 사단 사령부 파괴"],
  "obj.destroyDivision": ["Destroy the Nasr Division", "歼灭纳斯尔师", "나스르 사단 격멸"],
  "obj.destroyCommand": ["Destroy the enemy command", "摧毁敌军指挥部", "적 지휘부 파괴"],
  "obj.cutHighway": ["Cut Highway 80: destroy {1} vehicles of the retreating column ({0} of {1})", "切断 80 号公路：摧毁撤退纵队的 {1} 辆车（{0}/{1}）", "80번 고속도로 차단: 퇴각 종대 차량 {1}대 파괴 ({0}/{1})"],
  // breakthrough, one line a side; both sides read both
  "obj.takeCheckpoints": ["Attackers: take every checkpoint in order ({0} of {1})", "进攻方：按顺序夺取全部检查点（{0}/{1}）", "공격측: 검문소를 차례로 모두 점령 ({0}/{1})"],
  "obj.holdUntil": ["Defenders: hold until the clock runs out ({0})", "防守方：坚守到倒计时结束（{0}）", "수비측: 시계가 다 돌 때까지 사수 ({0})"],
  // ------------------------------------------------------------- game HUD
  "hud.metal": ["Metal", "金属", "금속"],
  "hud.power": ["Power", "电力", "전력"],
  "hud.pop": ["Units", "单位", "유닛"],
  "hud.income": ["+{0}/s", "+{0}/秒", "+{0}/초"],
  // the economy strip's breakdown popover
  "hud.economy": ["Economy", "经济", "경제"],
  "hud.eco.hint": ["Hover for the full breakdown", "悬停查看详细收支", "마우스를 올리면 전체 내역이 보입니다"],
  "hud.eco.balance": ["Balance", "余额", "잔고"],
  "hud.eco.committed": ["Committed", "已承诺", "예약됨"],
  "hud.eco.available": ["Available", "可动用", "사용 가능"],
  "hud.eco.incomeTotal": ["Income", "收入", "수입"],
  "hud.eco.noIncome": ["No extractors standing", "没有正在运转的采矿设施", "가동 중인 채굴장이 없습니다"],
  "hud.eco.brownout": [
    "Low power: mining and work at {0}%, units move at {1}%",
    "电力不足：开采与作业降至 {0}%，单位移速降至 {1}%",
    "전력 부족: 채굴과 작업은 {0}%, 유닛 이동은 {1}%"
  ],
  "hud.eco.gridLoss": ["Grid losses", "电网损耗", "송전 손실"],
  "hud.eco.gridLossNote": [
    "The grid loses the square of its load: every unit and building costs a little more power than the last.",
    "电网损耗随负载的平方增长：每多一个单位或建筑，耗电都比上一个略多。",
    "전력망은 부하의 제곱만큼 잃습니다. 유닛과 건물 하나하나가 바로 앞 것보다 조금 더 많은 전력을 씁니다."
  ],
  "hud.eco.surplus": ["Surplus", "盈余", "잉여"],
  "hud.eco.deficit": ["Deficit", "缺口", "부족"],
  "hud.eco.noPower": ["Nothing generating or drawing power", "没有发电或耗电设施", "전력을 만들거나 쓰는 것이 없습니다"],
  "hud.eco.other": ["Other ×{0}", "其他 ×{0}", "기타 ×{0}"],
  "hud.eco.count": ["{0} ×{1}", "{0} ×{1}", "{0} ×{1}"],
  "hud.paused": ["PAUSED", "已暂停", "일시 정지"],
  "hud.speed": ["Speed ×{0}", "速度 ×{0}", "속도 ×{0}"],
  "hud.menu": ["Menu", "菜单", "메뉴"],
  "hud.objectives": ["Objectives", "任务目标", "목표"],
  // the breakthrough strip
  "hud.bt.whistle": ["Whistle in", "哨响倒计时", "휘슬까지"],
  "hud.bt.clock": ["Clock", "倒计时", "시계"],
  "hud.bt.checkpoints": ["Checkpoints", "检查点", "검문소"],
  "hud.bt.checkpoint": ["Checkpoint {0}", "检查点 {0}", "검문소 {0}"],
  "hud.bt.front": ["the front", "前线", "전선"],
  "hud.bt.fallen": ["fallen", "已失守", "함락"],
  "hud.bt.locked": ["locked until the one before it falls", "前一个失守后才会开放", "앞 검문소가 떨어져야 열립니다"],
  "hud.offGrid": ["off grid", "无需电力", "전력 불필요"],
  "hud.queue": ["Queue", "生产队列", "대기열"],
  "hud.queueEmpty": ["Queue is empty", "队列为空", "대기열이 비어 있습니다"],
  "hud.queueReorder": ["Drag to reorder", "拖动调整顺序", "끌어서 순서 변경"],
  "hud.kills": ["Kills: {0}", "击杀：{0}", "격파: {0}"],
  "hud.rank": ["Rank {0}: {1}", "等级 {0}：{1}", "계급 {0}: {1}"],
  "hud.highGround": ["High ground", "高地", "고지"],
  "hud.highGroundTip": [
    "High ground: unseen from below, and shots from below do {0}% less. Aircraft and radar see it all the same.",
    "高地：下方看不见它，来自下方的射击伤害减少 {0}%。飞机和雷达照常可见。",
    "고지: 아래에서는 보이지 않고, 아래에서 쏘는 공격은 피해가 {0}% 줄어듭니다. 항공기와 레이더는 그대로 봅니다."
  ],
  "rank.2": ["Veteran", "老兵", "베테랑"],
  "rank.3": ["Elite", "精英", "정예"],
  "hud.cargo": ["Cargo {0}/{1}", "载员 {0}/{1}", "적재 {0}/{1}"],
  "hud.hold": ["Cargo hold", "货舱", "적재함"],
  "hud.holdUnit": ["{0} (cargo weight {1})", "{0}（载重 {1}）", "{0} (적재 무게 {1})"],
  "hud.holdEmpty": ["Nothing carried", "未搭载任何单位", "실은 유닛이 없습니다"],
  "hud.warheads": ["Warheads {0}/{1}", "核弹头 {0}/{1}", "핵탄두 {0}/{1}"],
  "hud.rounds": ["Rounds {0}/{1}", "备弹 {0}/{1}", "탄약 {0}/{1}"],
  "hud.roundReady": ["Interceptor ready", "拦截弹已就绪", "요격 준비 완료"],
  "hud.roundReloading": ["Reloading", "装填中", "재장전 중"],
  "hud.nukeReady": ["Warhead ready", "核弹头已就绪", "핵탄두 준비 완료"],
  "hud.nukeFabricating": ["Fabricating warhead (click to cancel)", "正在制造核弹头（点击取消）", "핵탄두 제조 중 (클릭하면 취소)"],
  "hud.nukeEmpty": ["Empty warhead slot", "空核弹槽位", "빈 핵탄두 슬롯"],
  "hud.watchHint": ["Select a faction's HQ to watch its economy", "选择某阵营的指挥中心以查看其经济", "진영의 사령부를 선택하면 그 경제를 볼 수 있습니다"],
  "hud.tab.map": ["Overview", "总览", "개요"],
  "hud.battleMap": ["Battle map", "战场地图", "전장 지도"],
  "hud.mapRoster": ["Forces", "兵力", "병력"],
  "hud.mapRosterSearch": ["Search units…", "搜索单位…", "유닛 검색…"],
  "hud.mapRosterEmpty": ["Nothing in sight.", "视野内没有单位。", "시야에 아무것도 없습니다."],
  "hud.mapRosterNoMatch": ['No unit matches "{0}".', "没有匹配“{0}”的单位。", '"{0}"에 맞는 유닛이 없습니다.'],
  "hud.mapSpot": ["{0}: click to spot on the map, again to clear", "{0}：点击在地图上标出，再次点击取消", "{0}: 클릭하면 지도에 표시, 다시 클릭하면 해제"],
  // the battle map's legend: what each mark is (the headquarters' line is `unit.hq.name`)
  "hud.legendBuilding": ["Building", "建筑", "건물"],
  "hud.legendGround": ["Ground unit", "地面单位", "지상 유닛"],
  "hud.legendAir": ["Aircraft", "飞机", "항공기"],
  "hud.legendNaval": ["Ship", "舰船", "함선"],
  "hud.legendOre": ["Metal deposit", "金属矿脉", "금속 광맥"],
  "hud.legendAlarm": ["Under attack", "遭到攻击", "공격받는 중"],
  "hud.tab.command": ["Unit", "单位", "유닛"],
  "hud.chat": ["Chat", "聊天", "채팅"],
  "hud.chatEmpty": ["Press Enter to say something.", "按 Enter 发言。", "Enter를 눌러 말하세요."],
  "hud.chatPlaceholder": ["Message… (/t = team)", "输入消息…（/t = 队伍）", "메시지… (/t = 팀)"],
  "hud.groups": ["Army Groups", "编队", "부대 편성"],
  "hud.groupsAdd": ["Add to Group", "加入编队", "부대에 추가"],
  "hud.groupsHint": ["Select units, then put them in a group.", "选中单位后将其加入编队。", "유닛을 선택한 뒤 부대에 넣으세요."],
  "hud.groupSelect": [
    "Group {0}: {1} units. Click to select, again to jump there.",
    "编队 {0}：{1} 个单位。点击选中，再次点击跳转。",
    "부대 {0}: 유닛 {1}개. 클릭하면 선택, 다시 클릭하면 이동."
  ],
  "hud.groupDisband": ["Disband group {0}", "解散编队 {0}", "부대 {0} 해산"],
  "hud.groupAdd": ["Add the selection to group {0}", "将所选单位加入编队 {0}", "선택한 유닛을 부대 {0}에 추가"],
  "hud.groupRemove": ["Take the selection out of group {0}", "将所选单位移出编队 {0}", "선택한 유닛을 부대 {0}에서 제외"],
  // ------------------------------------------------------- quick selection
  "quick.title": ["Quick selection", "快速选择", "빠른 선택"],
  "quick.land": ["LAND", "陆军", "지상"],
  "quick.air": ["AIR", "空军", "공중"],
  "quick.sea": ["SEA", "海军", "해상"],
  "quick.engineers": ["ENGINEERS", "工程车", "공병차"],
  // the lines: every war factory, airbase or naval yard, at any level
  "quick.factories": ["FACTORIES", "战车工厂", "전차 공장"],
  "quick.airbases": ["AIRBASES", "空军基地", "공군 기지"],
  "quick.navyards": ["NAVAL YARDS", "造船厂", "조선소"],
  // a line slice with nothing behind it: the hub's reason under the greyed name
  "quick.none": ["None standing", "尚无此建筑", "건설된 것 없음"],
  // ------------------------------------------------------------- commands
  "cmd.repair": ["Repair", "维修", "수리"],
  "cmd.move": ["Move", "移动", "이동"],
  "cmd.attack": ["Attack", "攻击", "공격"],
  "cmd.attackMove": ["Attack-move", "攻击移动", "공격 이동"],
  "cmd.stop": ["Stop", "停止", "정지"],
  "cmd.hold": ["Hold position", "原地驻守", "위치 사수"],
  "cmd.direct": ["Take control", "直接操控", "직접 조종"],
  "cmd.build": ["Build", "建造", "건설"],
  "cmd.sell": ["Sell", "出售", "판매"],
  "cmd.upgrade": ["Upgrade", "升级", "업그레이드"],
  "cmd.fabricateNuke": ["Fabricate warhead", "制造核弹头", "핵탄두 제조"],
  "cmd.launchNuke": ["Launch nuke", "发射核弹", "핵 발사"],
  "cmd.resume": ["Resume construction", "继续建造", "건설 재개"],
  "cmd.unload": ["Unload all", "全部卸载", "모두 하차"],
  "cmd.sellRefund": ["Sell (+{0})", "出售 (+{0})", "판매 (+{0})"],
  // ------------------------------------------------------------- alerts
  "alert.underAttack": ["{0} under attack!", "{0} 遭到攻击！", "{0}이(가) 공격받고 있습니다!"],
  "alert.unitsUnderAttack": ["{0} under attack!", "{0} 遭到攻击！", "{0}이(가) 공격받고 있습니다!"],
  "alert.lowPower": ["Power shortage: work and movement slowed", "电力短缺：生产与移动减速", "전력 부족: 작업과 이동이 느려집니다"],
  "alert.powerRestored": ["Power restored", "电力已恢复", "전력 복구"],
  "alert.metalStalled": ["Out of metal: work paused", "金属耗尽：工程暂停", "금속 소진: 작업 중단"],
  "alert.noPop": ["Unit cap reached", "已达人口上限", "유닛 상한 도달"],
  "alert.unitReady": ["{0} ready", "{0} 就绪", "{0} 준비 완료"],
  "alert.constructionDone": ["{0} built", "{0} 建造完成", "{0} 건설 완료"],
  "alert.upgradeDone": ["Upgrade complete: {0}", "升级完成：{0}", "업그레이드 완료: {0}"],
  "alert.directMax": ["Direct control takes up to {0} units at a time", "直接操控一次最多 {0} 个单位", "직접 조종은 한 번에 최대 {0}개 유닛까지입니다"],
  "alert.sellConfirm": ["Press {0} again to sell {1} (+{2})", "再按一次 {0} 出售{1}（+{2}）", "{0}을(를) 한 번 더 누르면 {1}을(를) 판매 (+{2})"],
  "alert.sellConfirmMany": ["Press {0} again to sell {1} buildings (+{2})", "再按一次 {0} 出售 {1} 座建筑（+{2}）", "{0}을(를) 한 번 더 누르면 건물 {1}개를 판매 (+{2})"],
  // the touch bar's sell button asks the same way; {0} is the button's word
  "alert.sellConfirmTap": ["Tap {0} again to sell {1} (+{2})", "再点一次“{0}”出售{1}（+{2}）", "{0}을(를) 한 번 더 누르면 {1}을(를) 판매 (+{2})"],
  "alert.sellConfirmTapMany": ["Tap {0} again to sell {1} buildings (+{2})", "再点一次“{0}”出售 {1} 座建筑（+{2}）", "{0}을(를) 한 번 더 누르면 건물 {1}개를 판매 (+{2})"],
  "alert.nukeReady": ["Nuclear warhead ready", "核弹头已就绪", "핵탄두 준비 완료"],
  "alert.nukeLaunched": ["Nuclear launch detected", "检测到核弹发射", "핵 발사 감지"],
  "alert.nukeIntercepted": ["Nuclear warhead shot down", "核弹头已被击落", "핵탄두 격추됨"],
  "alert.promoted": ["{0} promoted to {1}", "{0} 晋升为{1}", "{0}이(가) {1}(으)로 진급"],
  "alert.respawned": ["{0} has been given a new headquarters", "{0} 获得了新的总部", "{0}이(가) 새 사령부를 받았습니다"],
  "alert.handover": ["{0} is now under AI command", "{0} 已交由 AI 指挥", "{0}이(가) 이제 AI 지휘를 받습니다"],
  "alert.kicked": ["{0} was removed by the host", "{0} 已被房主移出", "{0}이(가) 호스트에 의해 내보내졌습니다"],
  "alert.speed": ["Game speed set to ×{0}", "游戏速度设为 ×{0}", "게임 속도 ×{0}"],
  "alert.waveIncoming": ["Enemy attack wave incoming!", "敌军进攻波即将来袭！", "적 공격 파도 접근 중!"],
  // the campaign's own
  "alert.launch": ["Sarsar launch: {0} of {1}", "萨尔萨尔发射：{0}/{1}", "사르사르 발사: {0}/{1}"],
  "alert.fleetRun": ["Enemy ships running the channel", "敌舰正在突入水道", "적함이 수로를 돌파 중"],
  "alert.columnOut": ["A column is leaving the city on Highway 80", "一支纵队正沿 80 号公路撤出城市", "종대 하나가 80번 고속도로로 도시를 빠져나갑니다"],
  "alert.reliefShips": ["Gunboats are on station offshore", "炮艇已在近海就位", "포함이 앞바다에 배치되었습니다"],
  "alert.reliefLanded": ["The relief column has landed on the beach", "援军已在海滩登陆", "구원 종대가 해변에 상륙했습니다"],
  // breakthrough
  "alert.whistle": ["The whistle: the assault begins", "哨响：进攻开始", "휘슬: 공세 시작"],
  "alert.checkpointFell": ["Checkpoint {0} has fallen", "检查点 {0} 已失守", "검문소 {0} 함락"],
  "alert.linesMovedUp": ["The attackers’ lines have moved up", "进攻方的生产线已前移", "공격측 생산 라인이 전진했습니다"],
  "alert.chestLow": ["War chest nearly spent", "战争基金即将耗尽", "군자금이 거의 바닥났습니다"],
  "alert.clockLow": ["{0} left on the clock", "倒计时还剩 {0}", "시계에 {0} 남음"],
  "alert.playerDefeated": ["{0} has been eliminated", "{0} 已被消灭", "{0}이(가) 탈락했습니다"],
  "alert.playerSurrendered": ["{0} has surrendered", "{0} 已投降", "{0}이(가) 항복했습니다"],
  "alert.cannotBuildHere": ["Cannot build here", "无法在此建造", "여기에는 지을 수 없습니다"],
  "alert.farFromHq": ["Too far from a friendly Headquarters to build here", "离己方总部太远，无法在此建造", "아군 사령부에서 너무 멀어 여기에는 지을 수 없습니다"],
  "alert.buildUnreachable": ["Builder cannot reach that site", "工程车无法抵达该工地", "공병차가 그 부지에 닿을 수 없습니다"],
  "alert.unloadNoGround": ["{0} cannot unload here: no open ground within reach", "{0}无法在此卸载：附近没有可用的地面", "{0}이(가) 여기서 하차시킬 수 없습니다: 닿는 범위에 빈 지면이 없습니다"],
  "alert.notEnoughMetal": [
    "Not enough metal: three quarters of the price is needed to start",
    "金属不足：需备齐四分之三造价才能开工",
    "금속 부족: 시작하려면 가격의 4분의 3이 필요합니다"
  ],
  "alert.lastStand": ["No base left: your forces fight on for {0}s", "基地已失，部队将再坚持 {0} 秒", "기지가 없습니다. 부대는 {0}초 더 싸웁니다"],
  "alert.needsDeposit": ["Must be built on a metal deposit", "必须建在金属矿脉上", "금속 광맥 위에 지어야 합니다"],
  "alert.noProductionSlot": [
    "No free production slot: a Headquarters pays for three lines; build another for three more",
    "没有空余生产席位：每座总部提供三条生产线的席位，再建一座总部可多出三席",
    "빈 생산 슬롯이 없습니다. 사령부 하나가 생산 라인 셋을 감당합니다. 하나 더 지으면 셋이 늘어납니다"
  ],
  "alert.requiresTech": ["Requires: {0}", "需要：{0}", "필요: {0}"],
  "alert.saved": ["Game saved", "游戏已保存", "게임 저장됨"],
  "alert.autosaved": ["Autosaved", "已自动保存", "자동 저장됨"],
  // ------------------------------------------------------------- pause menu
  "pause.title": ["Paused", "暂停", "일시 정지"],
  "pause.resume": ["Resume", "继续", "계속"],
  "pause.save": ["Save game", "保存游戏", "게임 저장"],
  "pause.settings": ["Settings", "设置", "설정"],
  "pause.guide": ["Beginner guide", "新手指南", "초보자 안내"],
  "pause.restart": ["Restart", "重新开始", "다시 시작"],
  "pause.quit": ["Quit to menu", "退出到主菜单", "메뉴로 나가기"],
  "pause.restartConfirm": ["Restart this game? Unsaved progress is lost.", "重新开始？未保存的进度将丢失。", "이 게임을 다시 시작할까요? 저장하지 않은 진행은 사라집니다."],
  "pause.quitConfirm": ["Quit to menu? Unsaved progress is lost.", "退出到主菜单？未保存的进度将丢失。", "메뉴로 나갈까요? 저장하지 않은 진행은 사라집니다."],
  "pause.surrender": ["Surrender", "投降", "항복"],
  "pause.surrenderConfirm": [
    "Surrender the match? Everything you own is destroyed and you are out, though you can stay and watch.",
    "确定投降？你的一切都会被摧毁，你也随之出局，但可以留下来观战。",
    "대전에서 항복할까요? 가진 모든 것이 파괴되고 탈락합니다. 남아서 관전할 수는 있습니다."
  ],
  // ------------------------------------------------------------- the away notice
  // a browser tab on return: the battle waited, and the app would not have
  "away.title": ["Battle paused", "对局已暂停", "전투 일시 정지"],
  "away.body": [
    "The battle paused while you were away: a browser stops the game when its tab is in the background.",
    "你离开时对局已暂停：标签页切到后台后，浏览器会停止游戏。",
    "자리를 비운 동안 전투가 일시 정지되었습니다. 탭이 백그라운드로 가면 브라우저가 게임을 멈춥니다."
  ],
  "away.appIntro": [
    "The app keeps the battle running while you are away.",
    "应用可让对局在后台继续进行。",
    "앱은 자리를 비운 동안에도 전투를 계속 진행합니다."
  ],
  "away.dontRemind": ["Don't remind me again", "下次不再提醒", "다시 알리지 않기"],
  // ------------------------------------------------------------- victory / defeat
  "end.victory": ["VICTORY", "胜利", "승리"],
  "end.defeat": ["DEFEAT", "战败", "패배"],
  "end.time": ["Time", "用时", "시간"],
  "end.unitsBuilt": ["Units built", "生产单位", "생산한 유닛"],
  "end.unitsLost": ["Units lost", "损失单位", "잃은 유닛"],
  "end.unitsKilled": ["Units destroyed", "击毁单位", "파괴한 유닛"],
  "end.buildingsLost": ["Buildings lost", "损失建筑", "잃은 건물"],
  "end.buildingsKilled": ["Buildings destroyed", "摧毁建筑", "파괴한 건물"],
  "end.metalMined": ["Metal mined", "开采金属", "채굴한 금속"],
  "end.nextMission": ["Next mission", "下一关", "다음 임무"],
  "end.retry": ["Retry", "重试", "다시 시도"],
  "end.toMenu": ["Main menu", "主菜单", "메인 메뉴"],
  "end.continuePlay": ["Keep playing", "继续游玩", "계속 플레이"],
  "end.matchOver": ["MATCH OVER", "对局结束", "대전 종료"],
  "end.winner": ["{0} wins", "{0} 获胜", "{0} 승리"],
  "end.eliminated": ["ELIMINATED", "已淘汰", "탈락"],
  "end.eliminatedBody": [
    "Your faction is out of the fight. You can keep watching the match, or leave it.",
    "你的阵营已退出战斗。你可以继续观战，或离开对局。",
    "당신의 진영은 싸움에서 밀려났습니다. 대전을 계속 관전하거나 떠날 수 있습니다."
  ],
  "end.spectate": ["Keep watching", "继续观战", "계속 관전"],
  // --------------------------------------------------------- achievements
  "menu.achievements": ["Achievements", "成就", "업적"],
  "ach.title": ["Achievements", "成就", "업적"],
  "ach.list": ["Awards", "勋章", "훈장"],
  "ach.earned": ["Earned", "已获得", "획득"],
  "ach.secret": ["Classified. Earn it and the citation is written.", "机密。达成之后才会写下授勋词。", "기밀. 달성해야 공적서가 쓰입니다."],
  "ach.none": ["Nothing earned yet. Play a match.", "还没有获得任何成就。先打一局吧。", "아직 얻은 것이 없습니다. 대전을 한 판 하세요."],
  "ach.tier.bronze": ["Bronze", "铜", "동"],
  "ach.tier.steel": ["Steel", "钢", "강철"],
  "ach.tier.silver": ["Silver", "银", "은"],
  "ach.tier.gold": ["Gold", "金", "금"],
  "ach.tier.black": ["Blackened", "玄铁", "흑철"],
  "ach.unlocked": ["{0} unlocked", "解锁成就：{0}", "{0} 달성"],
  "ach.reset": ["Reset achievements", "重置成就", "업적 초기화"],
  "ach.resetConfirm": [
    "Reset every achievement? The service record goes with them: they are one record, and the medals are earned off its numbers.",
    "确定重置全部成就？服役记录也会一并清空：两者是同一份记录，勋章正是根据其中的数字发出的。",
    "업적을 모두 초기화할까요? 복무 기록도 함께 사라집니다. 둘은 하나의 기록이고, 훈장은 그 숫자로 받은 것입니다."
  ],
  // the record's four panes
  "stat.career": ["Service record", "服役记录", "복무 기록"],
  "stat.battle": ["Battle", "战斗", "전투"],
  "stat.economy": ["Economy", "经济", "경제"],
  "stat.victories": ["Victories", "胜场分布", "승리 내역"],
  "stat.matches": ["Matches played", "对局总数", "치른 대전"],
  "stat.wins": ["Victories", "胜利", "승리"],
  "stat.losses": ["Defeats", "失败", "패배"],
  "stat.winRate": ["Win rate", "胜率", "승률"],
  "stat.timePlayed": ["Time in command", "指挥时长", "지휘 시간"],
  "stat.longest": ["Longest match", "最长对局", "가장 긴 대전"],
  "stat.fastestWin": ["Fastest victory", "最快取胜", "가장 빠른 승리"],
  "stat.campaign": ["Campaign", "战役进度", "캠페인"],
  "stat.builtUnits": ["Units built", "生产单位", "생산한 유닛"],
  "stat.killedUnits": ["Units destroyed", "击毁单位", "파괴한 유닛"],
  "stat.lostUnits": ["Units lost", "损失单位", "잃은 유닛"],
  "stat.builtBuildings": ["Buildings raised", "建造建筑", "세운 건물"],
  "stat.killedBuildings": ["Buildings destroyed", "摧毁建筑", "파괴한 건물"],
  "stat.lostBuildings": ["Buildings lost", "损失建筑", "잃은 건물"],
  "stat.kd": ["Kill/loss ratio", "战损比", "격파/손실 비율"],
  "stat.bestKills": ["Best match (kills)", "单场最多击毁", "최고 기록(격파)"],
  "stat.metalMined": ["Metal mined", "开采金属", "채굴한 금속"],
  "stat.metalSpent": ["Metal spent", "消耗金属", "쓴 금속"],
  "stat.bestMined": ["Best match (mined)", "单场最多开采", "최고 기록(채굴)"],
  "stat.nukes": ["Warheads launched", "发射核弹头", "발사한 핵탄두"],
  "stat.elites": ["Units promoted to Elite", "晋升精英单位", "정예로 진급한 유닛"],
  "stat.sandbox": ["Conquest", "征服", "정복"],
  "stat.breakthrough": ["Breakthrough", "突破", "돌파"],
  "stat.multiplayer": ["Multiplayer", "多人对战", "멀티플레이어"],
  "stat.never": ["—", "—", "—"],
  // bronze
  "ach.first-blood.name": ["First Blood", "首杀", "첫 피"],
  "ach.first-blood.desc": ["Destroy an enemy unit.", "摧毁一个敌方单位。", "적 유닛을 파괴하세요."],
  "ach.first-command.name": ["First Command", "首战告捷", "첫 지휘"],
  "ach.first-command.desc": ["Win a match.", "赢下一场对局。", "대전에서 승리하세요."],
  "ach.prospector.name": ["Prospector", "探矿者", "탐광자"],
  "ach.prospector.desc": ["Mine 10,000 metal.", "累计开采 10,000 金属。", "금속 10,000을 채굴하세요."],
  "ach.assembly-line.name": ["Assembly Line", "流水线", "조립 라인"],
  "ach.assembly-line.desc": ["Build 50 units.", "累计生产 50 个单位。", "유닛 50개를 생산하세요."],
  "ach.demolition.name": ["Demolition", "拆迁", "철거"],
  "ach.demolition.desc": ["Destroy 10 buildings.", "累计摧毁 10 座建筑。", "건물 10개를 파괴하세요."],
  "ach.enlisted.name": ["Enlisted", "入伍", "입대"],
  "ach.enlisted.desc": ["Complete the first campaign mission.", "完成战役第一关。", "첫 캠페인 임무를 완료하세요."],
  "ach.contact.name": ["Contact", "接敌", "접촉"],
  "ach.contact.desc": ["Finish a multiplayer match.", "打完一场多人对局。", "멀티플레이어 대전을 끝까지 치르세요."],
  "ach.fallout.name": ["Fallout", "核尘", "낙진"],
  "ach.fallout.desc": ["Launch a nuclear warhead.", "发射一枚核弹头。", "핵탄두를 발사하세요."],
  // steel
  "ach.steel-rain.name": ["Steel Rain", "钢铁之雨", "강철의 비"],
  "ach.steel-rain.desc": ["Destroy 500 units.", "累计摧毁 500 个单位。", "유닛 500개를 파괴하세요."],
  "ach.wrecking-crew.name": ["Wrecking Crew", "拆除队", "철거반"],
  "ach.wrecking-crew.desc": ["Destroy 150 buildings.", "累计摧毁 150 座建筑。", "건물 150개를 파괴하세요."],
  "ach.war-machine.name": ["War Machine", "战争机器", "전쟁 기계"],
  "ach.war-machine.desc": ["Build 500 units.", "累计生产 500 个单位。", "유닛 500개를 생산하세요."],
  "ach.foundry.name": ["Foundry", "熔炉", "주조소"],
  "ach.foundry.desc": ["Mine 250,000 metal.", "累计开采 250,000 金属。", "금속 250,000을 채굴하세요."],
  "ach.field-officer.name": ["Field Officer", "校官", "야전 장교"],
  "ach.field-officer.desc": ["Win 10 matches.", "赢下 10 场对局。", "대전 10승을 거두세요."],
  "ach.long-service.name": ["Long Service", "久经沙场", "장기 복무"],
  "ach.long-service.desc": ["Spend ten hours in command.", "累计指挥十小时。", "열 시간 동안 지휘하세요."],
  "ach.hard-lessons.name": ["Hard Lessons", "血的教训", "뼈아픈 교훈"],
  "ach.hard-lessons.desc": [
    "Lose 250 units. The game teaches by taking things away.",
    "累计损失 250 个单位。这门课的学费由你的部队来付。",
    "유닛 250개를 잃으세요. 이 게임은 빼앗으면서 가르칩니다."
  ],
  "ach.cartographer.name": ["Cartographer", "制图师", "지도 제작자"],
  "ach.cartographer.desc": ["Finish a match on a map you drew yourself.", "在自己画的地图上打完一局。", "직접 그린 지도에서 대전을 끝까지 치르세요."],
  "ach.old-guard.name": ["Old Guard", "老近卫", "고참 근위대"],
  "ach.old-guard.desc": ["Promote a unit to Elite.", "让一个单位晋升到精英。", "유닛 하나를 정예로 진급시키세요."],
  // silver
  "ach.blitz.name": ["Blitz", "闪击", "전격전"],
  "ach.blitz.desc": ["Win a match in under five minutes.", "五分钟内赢下一场对局。", "5분 안에 대전에서 승리하세요."],
  "ach.flawless.name": ["Not a Scratch", "毫发无伤", "흠집 하나 없이"],
  "ach.flawless.desc": ["Win without losing a single unit.", "一个单位都没损失就取得胜利。", "유닛을 하나도 잃지 않고 승리하세요."],
  "ach.total-war.name": ["Total War", "总体战", "총력전"],
  "ach.total-war.desc": ["Destroy 200 units in a single match.", "单场摧毁 200 个单位。", "한 대전에서 유닛 200개를 파괴하세요."],
  "ach.outnumbered.name": ["Outnumbered", "寡不敌众", "중과부적"],
  "ach.outnumbered.desc": ["Win against three or more enemy factions.", "面对三个及以上敌方阵营取胜。", "적 진영 셋 이상을 상대로 승리하세요."],
  "ach.hard-won.name": ["Hard Won", "险胜", "힘겨운 승리"],
  "ach.hard-won.desc": ["Win a match with a Veteran opponent in it.", "在有老兵难度对手的对局中取胜。", "베테랑 상대가 있는 대전에서 승리하세요."],
  "ach.foul-weather.name": ["Foul Weather", "恶劣天候", "악천후"],
  "ach.foul-weather.desc": ["Win a match fought under rain or snow.", "在雨或雪的天气下赢得对局。", "비나 눈 아래에서 치른 대전에서 승리하세요."],
  "ach.admiral.name": ["Admiral", "海军上将", "제독"],
  "ach.admiral.desc": ["Win on Saltbone Reach.", "在盐骨海域取胜。", "솔트본 리치에서 승리하세요."],
  "ach.second-strike.name": ["Second Strike", "二次打击", "2차 타격"],
  "ach.second-strike.desc": ["Launch ten nuclear warheads.", "累计发射十枚核弹头。", "핵탄두 열 발을 발사하세요."],
  "ach.interception.name": ["Interception", "拦截", "요격"],
  "ach.interception.desc": ["Shoot a nuclear warhead out of the sky.", "在核弹头落地前将它击落。", "핵탄두를 하늘에서 떨어뜨리세요."],
  // gold
  "ach.iron-tide.name": ["Iron Tide", "钢铁浪潮", "강철의 파도"],
  "ach.iron-tide.desc": ["Destroy 2,500 units.", "累计摧毁 2,500 个单位。", "유닛 2,500개를 파괴하세요."],
  "ach.marshal.name": ["Marshal", "元帅", "원수"],
  "ach.marshal.desc": ["Win 50 matches.", "赢下 50 场对局。", "대전 50승을 거두세요."],
  "ach.war-economy.name": ["War Economy", "战时经济", "전시 경제"],
  "ach.war-economy.desc": ["Mine 1,000,000 metal.", "累计开采 1,000,000 金属。", "금속 1,000,000을 채굴하세요."],
  "ach.decorated.name": ["Decorated", "授勋", "서훈"],
  "ach.decorated.desc": ["Complete the campaign.", "通关全部战役。", "캠페인을 완료하세요."],
  // blackened \u2014 the two nobody arrives at by accident
  "ach.concrete-doctrine.name": ["Concrete Doctrine", "混凝土教条", "콘크리트 교리"],
  "ach.concrete-doctrine.desc": [
    "Win a Conquest match without producing a single unit.",
    "在征服对局中一个单位都不生产，并且取得胜利。",
    "유닛을 하나도 생산하지 않고 정복 대전에서 승리하세요."
  ],
  "ach.danger-close.name": ["Danger Close", "危险距离", "근접 위험"],
  "ach.danger-close.desc": ["Destroy one of your own buildings with your own nuclear warhead.", "用自己的核弹头摧毁自己的建筑。", "자신의 핵탄두로 자신의 건물을 파괴하세요."],
  // ------------------------------------------------------------- settings
  "settings.title": ["Settings", "设置", "설정"],
  "settings.language": ["Language", "语言 / Language", "언어 / Language"],
  "settings.lang.auto": ["Auto", "自动", "자동"],
  "settings.music": ["Music volume", "音乐音量", "음악 음량"],
  "settings.sfx": ["Sound effects", "音效音量", "효과음"],
  "settings.voice": ["Voice", "语音音量", "음성"],
  "settings.voiceLang": ["Narrator language", "语音播报语言", "내레이터 언어"],
  "settings.voiceLang.auto": ["Same as interface", "与界面语言一致", "인터페이스와 같게"],
  "settings.edgeScroll": ["Edge scrolling", "屏幕边缘滚动", "가장자리 스크롤"],
  "settings.healthBars": ["Always show health bars", "始终显示血条", "체력 바 항상 표시"],
  "settings.showFps": ["Show FPS", "显示帧率", "FPS 표시"],
  "settings.uiScale": ["UI scale", "界面缩放", "UI 크기"],
  "settings.section.graphics": ["Graphics", "画面", "그래픽"],
  "settings.touchUi": ["Touch controls", "触屏操作", "터치 조작"],
  "settings.touchUi.auto": ["Auto", "自动", "자동"],
  "settings.touchUi.desc": ["On-screen order buttons and tap-to-command.", "屏幕指令按钮与点触下令。", "화면 명령 버튼과 탭으로 명령하기."],
  "settings.portrait": ["Portrait play", "竖屏游玩", "세로 화면 플레이"],
  "settings.portrait.desc": ["Play with the phone held upright; the panels lie along the bottom.", "竖握手机游玩，面板排在屏幕底部。", "휴대폰을 세워 들고 플레이합니다. 패널은 화면 아래에 놓입니다."],
  "settings.sidebarSide": ["Sidebar position", "侧边栏位置", "사이드바 위치"],
  "settings.sidebarSide.left": ["Left", "左侧", "왼쪽"],
  "settings.sidebarSide.right": ["Right", "右侧", "오른쪽"],
  // the picture: a preset is one row of knobs (core/graphics.ts), and touching a knob makes it custom
  "settings.graphicsPreset": ["Quality preset", "画质预设", "품질 프리셋"],
  "settings.graphicsPreset.high": ["High", "高", "높음"],
  "settings.graphicsPreset.medium": ["Medium", "中", "중간"],
  "settings.graphicsPreset.low": ["Low", "低", "낮음"],
  "settings.graphicsPreset.custom": ["Custom", "自定义", "사용자 지정"],
  "settings.renderScale": ["Render sharpness", "渲染精度", "렌더링 선명도"],
  "settings.water": ["Water surface", "水面效果", "수면 효과"],
  "settings.water.full": ["Waves and light", "波浪与光影", "파도와 빛"],
  "settings.water.simple": ["Light only", "仅光影", "빛만"],
  "settings.water.off": ["Still", "静止", "정지"],
  "settings.lighting": ["Night lighting", "夜间光照", "야간 조명"],
  "settings.lighting.full": ["Full", "完整", "전체"],
  "settings.lighting.basic": ["Basic", "基础", "기본"],
  "settings.lighting.off": ["Off", "关闭", "끔"],
  "settings.terrainDetail": ["Terrain detail", "地形细节", "지형 디테일"],
  "settings.terrainDetail.full": ["Full", "完整", "전체"],
  "settings.terrainDetail.reduced": ["Reduced", "精简", "축소"],
  "settings.terrainDetail.plain": ["Plain", "平面", "단순"],
  "settings.precipitation": ["Rain and snow", "雨雪粒子", "비와 눈"],
  "settings.precipitation.full": ["Full", "完整", "전체"],
  "settings.precipitation.light": ["Light", "稀疏", "약하게"],
  "settings.precipitation.off": ["Off", "关闭", "끔"],
  "settings.groundMarks": ["Tracks and smoke trails", "车辙与烟迹", "바퀴 자국과 연기 궤적"],
  "settings.frameCap": ["Frame rate limit", "帧率上限", "프레임 상한"],
  "settings.frameCap.display": ["Display", "跟随屏幕", "디스플레이"],
  "settings.wetReflections": ["Wet ground reflections", "地面湿滑倒影", "젖은 땅 반사"],
  "settings.rainRipples": ["Rain on water", "雨打水面", "수면의 빗방울"],
  "settings.snowCover": ["Snow settles", "积雪", "쌓이는 눈"],
  "settings.cloudShadows": ["Cloud shadows", "云影", "구름 그림자"],
  "settings.chimneySmoke": ["Chimney smoke", "烟囱烟雾", "굴뚝 연기"],
  "settings.heatHaze": ["Heat haze over fire", "火焰热浪", "불길의 아지랑이"],
  "settings.lavaGlow": ["Lava glow", "熔岩辉光", "용암 불빛"],
  "settings.screenShake": ["Screen shake", "画面震动", "화면 흔들림"],
  "settings.keepAwake": ["Keep screen awake", "保持屏幕常亮", "화면 켜짐 유지"],
  "settings.autoFullscreen": ["Fullscreen", "全屏", "전체 화면"],
  "settings.haptics": ["Vibration feedback", "振动反馈", "진동 피드백"],
  // the campaign row (its title is `campaign.title`): what a reset throws away
  "settings.progress.desc": ["{0} of {1} missions completed.", "已完成 {0}/{1} 关。", "임무 {1}개 중 {0}개 완료."],
  "settings.career.desc": ["{0} of {1} earned, over {2} recorded matches.", "已获得 {0}/{1}，共记录 {2} 场对局。", "{1}개 중 {0}개 획득, 기록된 대전 {2}회."],
  "settings.section.dev": ["Developer", "开发者", "개발자"],
  // ------------------------------------------------------------- mods (ui/modsPage.ts)
  "mods.title": ["Mods", "模组", "모드"],
  "mods.pending": ["Changes take effect after this match.", "更改将在本场结束后生效。", "변경 사항은 이 대전이 끝난 뒤 적용됩니다."],
  "mods.installed": ["Installed", "已安装", "설치됨"],
  "mods.by": ["by {0}", "作者：{0}", "제작: {0}"],
  "mods.source.registry": ["from the registry", "来自官方仓库", "레지스트리에서"],
  "mods.source.url": ["from {0}", "来自 {0}", "{0}에서"],
  "mods.source.file": ["from {0}", "来自文件 {0}", "{0}에서"],
  "mods.source.folder": ["from the folder {0}", "来自文件夹 {0}", "폴더 {0}에서"],
  "mods.failed": ["Not loaded", "未加载", "불러오지 못함"],
  "mods.newerGame": ["Needs game {0} or newer", "需要游戏版本 {0} 或更新", "게임 {0} 이상 필요"],
  "mods.reload": ["Reload", "重新读取", "다시 읽기"],
  "mods.reloadTip": ["Read the mod again from where it came", "从来源重新读取模组", "모드를 원래 위치에서 다시 읽습니다"],
  "mods.update": ["Update to {0}", "更新到 {0}", "{0}(으)로 업데이트"],
  "mods.remove": ["Remove", "移除", "제거"],
  "mods.removeConfirm": [
    "Remove this mod? Saves that use it will not load until it is back.",
    "移除该模组？使用它的存档在重新安装前无法读取。",
    "이 모드를 제거할까요? 이 모드를 쓰는 저장은 다시 설치할 때까지 불러올 수 없습니다."
  ],
  "mods.registry": ["Official registry", "官方仓库", "공식 레지스트리"],
  "mods.registry.loading": ["Fetching the list…", "正在获取列表…", "목록 가져오는 중…"],
  "mods.registry.offline": ["The registry could not be reached.", "无法连接到模组仓库。", "레지스트리에 연결할 수 없습니다."],
  "mods.registry.empty": ["No mods published yet.", "尚无已发布的模组。", "아직 공개된 모드가 없습니다."],
  "mods.registry.browse": ["Browse on the website", "在官网浏览", "웹사이트에서 둘러보기"],
  "mods.search": ["Search", "搜索", "검색"],
  "mods.searchHint": ["Name, author, unit…", "名称、作者、单位…", "이름, 제작자, 유닛…"],
  "mods.searchNone": ['Nothing matches "{0}".', "没有匹配“{0}”的模组。", '"{0}"에 맞는 모드가 없습니다.'],
  "mods.install": ["Install", "安装", "설치"],
  "mods.installing": ["Installing…", "安装中…", "설치 중…"],
  "mods.installedMark": ["Installed", "已安装", "설치됨"],
  "mods.add": ["Add your own", "添加自制模组", "직접 만든 모드 추가"],
  "mods.add.file": ["Upload file…", "上传文件…", "파일 업로드…"],
  "mods.add.fileTip": ["A .steel-tide-mod file, or a zip of the mod folder", ".steel-tide-mod 文件，或模组文件夹的压缩包", ".steel-tide-mod 파일 또는 모드 폴더의 zip"],
  "mods.add.folder": ["Open folder…", "打开文件夹…", "폴더 열기…"],
  "mods.add.folderTip": [
    "Pick the mod folder itself; Chrome keeps it open so Reload re-reads your edits",
    "选择模组文件夹本身；Chrome 会记住它，修改后可点“重新读取”",
    "모드 폴더 자체를 고르세요. Chrome은 폴더를 열어 두어서 다시 읽기로 수정 내용을 다시 읽습니다"
  ],
  "mods.add.url": ["Add from URL…", "从网址添加…", "URL로 추가…"],
  "mods.add.urlPrompt": [
    "The address of a mod folder (where mod.json is) or of a .steel-tide-mod file",
    "模组文件夹（mod.json 所在处）或 .steel-tide-mod 文件的网址",
    "모드 폴더(mod.json이 있는 곳) 또는 .steel-tide-mod 파일의 주소"
  ],
  "mods.add.guide": ["How to make one", "如何制作", "만드는 방법"],
  "mods.installed.toast": ["{0} installed", "已安装 {0}", "{0} 설치됨"],
  "mods.updated.toast": ["{0} reloaded", "已重新读取 {0}", "{0} 다시 읽음"],
  "mods.error.title": ["The mod could not be loaded", "模组无法加载", "모드를 불러올 수 없습니다"],
  "mods.warnings": ["Notes", "提示", "참고"],
  "mods.enabled": ["Enabled", "启用", "사용"],
  "mods.badge": ["Mod", "模组", "모드"],
  // the mod's own plate (ui/modDetail.ts): the pictures, the facts, what it adds
  "mods.detailTip": ["Details", "详情", "상세 정보"],
  "mods.downloads": ["Downloads", "下载次数", "다운로드 횟수"],
  "mods.updatedOn": ["Updated {0}", "更新于 {0}", "{0} 업데이트"],
  "mods.screenshotOf": ["{0} in play", "{0} 游戏截图", "{0} 플레이 화면"],
  "mods.adds": ["Adds", "新增", "추가 항목"],
  "mods.units": ["Units", "单位", "유닛"],
  "mods.buildings": ["Buildings", "建筑", "건물"],
  "mods.tier": ["T{0}", "T{0}", "T{0}"],
  "mods.basedOn": ["based on {0}", "基于 {0}", "{0} 기반"],
  "mods.source": ["Source on GitHub", "GitHub 源码", "GitHub 소스"],
  "mods.homepage": ["Homepage", "主页", "홈페이지"],
  // ------------------------------------------------------------- the beginner guide (ui/guide.ts)
  "guide.title": ["Getting started", "新手上路", "시작하기"],
  "guide.metal": ["Claim metal", "占领矿点", "금속 확보"],
  "guide.metal.body": [
    "You start with two engineers, the only units that can build. Send one to the nearest deposit and place an extractor. Deposits are the only income there is, so an idle one is money left on the table.",
    "开局自带两辆工程车，只有它们能建造。派一辆去最近的矿点建一座采矿场。矿点是唯一的收入来源，空着的矿点就是白白流失的钱。",
    "공병차 두 대로 시작합니다. 건설할 수 있는 유일한 유닛입니다. 하나를 가장 가까운 광맥으로 보내 채굴장을 지으세요. 광맥은 유일한 수입원이라, 놀고 있는 광맥은 그냥 버려두는 돈입니다."
  ],
  "guide.power": ["Add power", "补充电力", "전력 추가"],
  "guide.power.body": [
    "The other engineer builds a power plant. The headquarters covers about one extractor by itself; after that every building you add needs power behind it.",
    "另一辆工程车建一座发电厂。总部自身的电力大约只够一座采矿场，之后每加一座建筑都要有电力支撑。",
    "다른 공병차로 발전소를 짓습니다. 사령부 혼자서는 채굴장 하나 정도만 감당하고, 그 뒤로는 건물을 하나 더할 때마다 뒤를 받칠 전력이 필요합니다."
  ],
  "guide.factory": ["A factory", "建造工厂", "공장"],
  "guide.factory.body": [
    "Place a war factory facing the enemy and set its rally point with a {0}. Build a buggy first and send it around the map to see what you are up against.",
    "把战车工厂建在面向敌人的一侧，用{0}设置集结点。先造一辆侦察车绕地图侦察，看看对手在做什么。",
    "적을 향해 전차 공장을 놓고 {0}으로 집결 지점을 정하세요. 먼저 버기 한 대를 만들어 지도를 한 바퀴 돌려 상대가 무얼 하는지 보세요."
  ],
  "guide.defense": ["Build defense", "修建防御", "방어 건설"],
  "guide.defense.body": [
    "An MG turret or two out by the extractors, which stand alone and are what a raid goes for; a cannon turret once tanks show up. Turrets draw power, so keep a plant ahead of them.",
    "在采矿场旁修一两座机枪塔；它们孤零零地立在外面，突袭首先冲着那里来；见到坦克再补加农炮塔。炮塔也耗电，发电要走在前面。",
    "채굴장 곁에 기관총 포탑 한두 개를 세우세요. 외따로 서 있어 기습이 먼저 노리는 곳입니다. 전차가 보이면 캐논 포탑을 더하세요. 포탑은 전력을 쓰니 발전소를 앞서 지으세요."
  ],
  "guide.fight": ["Fight your enemy", "出击迎敌", "적과 싸우기"],
  "guide.fight.body": [
    "Gather a group before you go; a handful of tanks beats a trickle. Attack-move ({1}) rather than move, so units engage on the way, and keep the factory queued while they fight.",
    "集结成群再出发；一小队坦克胜过零星添油。用攻击移动（{1}）而不是移动，单位会一路交战；打起来时也别让工厂闲着。",
    "떠나기 전에 무리를 모으세요. 전차 한 줌이 찔끔찔끔 보내는 것보다 낫습니다. 이동 대신 공격 이동({1})을 써서 가는 길에 교전하게 하고, 싸우는 동안에도 공장 대기열을 채워 두세요."
  ],
  "guide.learnMore": ["Learn more on the website", "在官网了解更多", "웹사이트에서 더 알아보기"],
  "guide.learnMore.sub": ["The full guide: the economy, the counter web, the tech tree.", "完整指南：经济与电力、克制关系、科技树。", "전체 안내서: 경제, 상성 관계, 기술 트리."],
  "settings.devMode": ["Developer mode", "开发者模式", "개발자 모드"],
  "settings.grid": ["Show grid", "显示网格", "격자 표시"],
  "settings.paths": ["Show paths", "显示寻路路径", "이동 경로 표시"],
  "hud.recording": ["Recording", "录制中", "녹화 중"],
  // ------------------------------------------------------------- match profiles (ui/profilesPage.ts)
  "settings.record": ["Record matches", "记录对局", "대전 기록"],
  "profiles.open": ["Open a file…", "打开文件…", "파일 열기…"],
  "profiles.notASave": ["That is not a Steel Tide save or recording.", "这不是钢铁浪潮的存档或录像。", "스틸 타이드 저장 파일이나 녹화가 아닙니다."],
  "profiles.admin": ["console used", "使用过控制台", "콘솔 사용됨"],
  "profiles.copyFailed": ["Could not reach the clipboard.", "无法访问剪贴板。", "클립보드에 접근할 수 없습니다."],
  "profiles.noReplay.loaded": [
    "This save was picked up from another save, so it cannot be replayed from its opening.",
    "该存档是从另一份存档续玩的，无法从开局回放。",
    "이 저장은 다른 저장에서 이어진 것이라 시작부터 다시 재생할 수 없습니다."
  ],
  "profiles.noReplay.legacy": ["This file has no replay record.", "该文件没有回放记录。", "이 파일에는 리플레이 기록이 없습니다."],
  "profiles.noReplay.truncated": [
    "The order log of this save was cut short, so it cannot be replayed.",
    "该存档的指令记录被截断，无法回放。",
    "이 저장의 명령 기록이 잘려 있어 다시 재생할 수 없습니다."
  ],
  "replay.recordings": ["Recordings", "录像", "녹화"],
  "replay.noRecordings": [
    "No recordings. With recording on, every match longer than a minute is kept here.",
    "还没有录像。开启记录后，每场超过一分钟的对局都会保存在这里。",
    "녹화가 없습니다. 녹화를 켜면 1분이 넘는 모든 대전이 여기에 보관됩니다."
  ],
  "replay.deleteConfirm": ["Delete this recording?", "确定删除该录像？", "이 녹화를 삭제할까요?"],
  "replay.won": ["Won", "获胜", "승리"],
  "replay.lost": ["Lost", "战败", "패배"],
  "replay.teamWon": ["Team {0} won", "{0}队获胜", "{0} 팀 승리"],
  "replay.unfinished": ["Unfinished", "未完成", "미완료"],
  "replay.match": ["Match", "对局", "대전"],
  "replay.orders": ["orders", "条指令", "개 명령"],
  "replay.copy": ["Copy profile", "复制记录", "프로필 복사"],
  "replay.copyTip": ["The match profile as JSON, to paste for analysis", "对局记录 JSON，可粘贴用于分析", "분석용으로 붙여 넣을 대전 프로필 JSON"],
  "replay.restart": ["From the opening", "从开局", "처음부터"],
  "replay.toEnd": ["To the end of the record", "跳到记录末尾", "기록 끝으로"],
  "replay.play": ["Play", "播放", "재생"],
  "replay.pause": ["Pause", "暂停", "일시 정지"],
  "replay.progress": ["Progress", "进度", "진행"],
  "replay.otherBuild": [
    "Recorded on build {0}; this is {1}. Under different rules the match may go differently.",
    "录制于版本 {0}，当前为 {1}。规则不同，对局可能走向不同。",
    "빌드 {0}에서 기록됨, 현재는 {1}입니다. 규칙이 다르면 대전이 다르게 흘러갈 수 있습니다."
  ],
  "replay.keyframes": ["keyframes", "个关键帧", "개 키프레임"],
  "replay.storage": ["{0} MB of {1} MB kept; past that the oldest go", "已用 {0} MB / {1} MB，超出后最旧的先删", "{0} MB / {1} MB 사용, 넘으면 오래된 것부터 삭제"],
  "replay.storageQuota": ["the browser allows {0} MB here", "浏览器此处允许 {0} MB", "브라우저 허용량 {0} MB"],
  "rec.evicted": [
    "{0} oldest recording(s) dropped to make room. Export the ones to keep under Developer Tools → Replays.",
    "为腾出空间已删除最旧的 {0} 段录像。请到 开发者工具 → 回放 导出想保留的。",
    "공간을 위해 가장 오래된 녹화 {0}개를 삭제했습니다. 남길 것은 개발자 도구 → 리플레이에서 내보내세요."
  ],
  "rec.notKept": [
    "The recording could not be stored: the browser refused the space. It is kept only until this page closes: export it under Developer Tools → Replays.",
    "录像无法保存：浏览器拒绝分配空间。它只保留到本页关闭：请到 开发者工具 → 回放 导出。",
    "녹화를 저장할 수 없습니다. 브라우저가 공간을 거부했습니다. 이 페이지가 닫힐 때까지만 남으니 개발자 도구 → 리플레이에서 내보내세요."
  ],
  "replay.copyReport": ["Copy report", "复制报告", "보고서 복사"],
  "replay.drag": ["Drag to move", "拖动移动", "드래그하여 이동"],
  "replay.copyReportTip": ["The match read out as text: economy, tech, guns, matchups, what looks wrong", "对局文字解读：经济、科技、武器、对位、可疑之处", "대전을 글로 읽어낸 것: 경제, 테크, 무기, 상성, 의심스러운 점"],
  "replay.exportVideo": ["Export as video", "导出为视频", "동영상으로 내보내기"],
  "replay.exportVideoFormat": ["The whole map, {0}×{1} at {2} fps, WebM ({3}), picture only", "整张地图，{0}×{1}，{2} fps，WebM（{3}），仅画面", "전체 지도, {0}×{1}, {2} fps, WebM ({3}), 화면만"],
  "replay.exportVideoSpeed": ["Playback speed", "播放速度", "재생 속도"],
  "replay.exportVideoLength": ["{0} of match at {1}× makes {2} of video", "{0} 的对局以 {1}× 导出为 {2} 的视频", "{0} 길이의 대전을 {1}×로 내보내면 {2} 길이의 동영상"],
  "replay.exportVideoLeft": ["about {0} left", "剩余约 {0}", "약 {0} 남음"],
  "replay.exportVideoDone": ["Video saved as {0}", "视频已保存为 {0}", "동영상을 {0}(으)로 저장했습니다"],
  "replay.exportVideoUnsupported": [
    "This browser has no video encoder (WebCodecs); the export needs one.",
    "此浏览器没有视频编码器（WebCodecs），无法导出。",
    "이 브라우저에는 동영상 인코더(WebCodecs)가 없어 내보낼 수 없습니다."
  ],
  "replay.exportVideoFailed": ["The video export failed: {0}", "视频导出失败：{0}", "동영상 내보내기 실패: {0}"],
  // ------------------------------------------------------------- controller
  "settings.tab.general": ["General", "常规", "일반"],
  "settings.tab.audio": ["Audio", "音频", "오디오"],
  "settings.section.pad": ["Controller", "手柄", "컨트롤러"],
  "settings.padGlyphs": ["Button glyphs", "按键图标", "버튼 아이콘"],
  "settings.padGlyphs.auto": ["Auto", "自动", "자동"],
  "settings.padGlyphs.desc": [
    "Steam Input presents every pad as an Xbox one; choose your own here.",
    "Steam 输入会把所有手柄都当作 Xbox 手柄，可在此手动指定。",
    "Steam 입력은 모든 패드를 Xbox 패드로 보여 줍니다. 여기서 직접 고르세요."
  ],
  "settings.padStickSpeed": ["Stick pan speed", "摇杆平移速度", "스틱 이동 속도"],
  "settings.padRumble": ["Vibration", "手柄震动", "진동"],
  "pause.speed": ["Game speed", "游戏速度", "게임 속도"],
  // the bindings (core/controls.ts, settingsUi.ts)
  "settings.tab.keys": ["Controls", "按键", "조작"],
  "settings.keys.keyboard": ["Keyboard", "键盘", "키보드"],
  "settings.keys.layout": ["Layout", "键位方案", "키 배치"],
  "settings.keys.layout.wasd": ["WASD", "WASD", "WASD"],
  "settings.keys.layout.classic": ["Classic", "经典", "클래식"],
  "settings.keys.layout.wasd.desc": [
    "WASD pans the camera; F attack-moves, R stops.",
    "WASD 平移视角；F 攻击移动，R 停止。",
    "WASD로 화면을 이동합니다. F는 공격 이동, R은 정지입니다."
  ],
  "settings.keys.layout.classic.desc": [
    "The arrow keys and the screen edge pan; A attack-moves, S stops.",
    "方向键与屏幕边缘平移视角；A 攻击移动，S 停止。",
    "방향키와 화면 가장자리로 이동합니다. A는 공격 이동, S는 정지입니다."
  ],
  "settings.keys.mouse": ["Mouse", "鼠标", "마우스"],
  "settings.keys.pad": ["Buttons", "按键", "버튼"],
  "settings.keys.group.orders": ["Orders", "指令", "명령"],
  "settings.keys.group.direct": ["Direct control", "直接操控", "직접 조종"],
  "settings.keys.group.camera": ["Camera and view", "视角", "카메라와 시점"],
  "settings.keys.group.game": ["Game", "游戏", "게임"],
  "settings.keys.reset": ["Reset to default", "恢复默认", "기본값으로"],
  "settings.keys.press": ["Press a key…", "请按键…", "키를 누르세요…"],
  "settings.keys.pressPad": ["Press a button…", "请按手柄键…", "버튼을 누르세요…"],
  "settings.keys.clear": ["Clear", "清除", "지우기"],
  "settings.keys.hint": [
    "Click a key to change it; a key may serve more than one action. Escape and the number row are fixed.",
    "点击按键即可更改；一个键可用于多个操作。Esc 与数字行固定不变。",
    "키를 클릭해 바꾸세요. 한 키가 여러 동작을 맡을 수 있습니다. Esc와 숫자 줄은 고정입니다."
  ],
  "settings.mouse.command": ["Command button", "指令键", "명령 버튼"],
  "settings.mouse.command.desc": ["Gives orders; the other button selects.", "用于下令，另一键用于选择。", "명령을 내립니다. 다른 버튼은 선택합니다."],
  "settings.mouse.right": ["Right", "右键", "오른쪽"],
  "settings.mouse.left": ["Left", "左键", "왼쪽"],
  "settings.mouse.panDrag": ["Pan by dragging", "拖动平移", "드래그로 화면 이동"],
  "settings.mouse.panDrag.desc": ["With the command button, a click still gives the order.", "选指令键时，单击仍为下令。", "명령 버튼으로 드래그해도 클릭은 여전히 명령입니다."],
  "settings.mouse.middle": ["Middle button", "中键", "가운데 버튼"],
  "settings.mouse.commandBtn": ["Command button", "指令键", "명령 버튼"],
  "settings.mouse.none": ["Off", "关", "끔"],
  "settings.mouse.invertZoom": ["Invert zoom", "反转缩放", "줌 반전"],
  "bind.attackMove": ["Attack-move", "攻击移动", "공격 이동"],
  "bind.move": ["Move, ignoring targets", "移动（忽略目标）", "이동(표적 무시)"],
  "bind.stop": ["Stop", "停止", "정지"],
  "bind.hold": ["Hold position", "原地待命", "위치 사수"],
  "bind.unload": ["Unload", "卸载", "하차"],
  "bind.upgrade": ["Upgrade the building", "升级建筑", "건물 업그레이드"],
  "bind.sell": ["Sell the building (twice)", "出售建筑（按两次）", "건물 판매(두 번)"],
  "bind.launch": ["Launch warhead", "发射核弹", "핵탄두 발사"],
  "bind.selfDestruct": ["Self-destruct", "自毁", "자폭"],
  "bind.quickSelect": ["Quick select (hold)", "快速选择（按住）", "빠른 선택(누르고 있기)"],
  "bind.direct": ["Take control of the selection", "直接操控所选单位", "선택 유닛 직접 조종"],
  "bind.steerUp": ["Steer up", "向上驾驶", "위로 조종"],
  "bind.steerDown": ["Steer down", "向下驾驶", "아래로 조종"],
  "bind.steerLeft": ["Steer left", "向左驾驶", "왼쪽으로 조종"],
  "bind.steerRight": ["Steer right", "向右驾驶", "오른쪽으로 조종"],
  "bind.panUp": ["Pan up", "视角上移", "위로 이동"],
  "bind.panDown": ["Pan down", "视角下移", "아래로 이동"],
  "bind.panLeft": ["Pan left", "视角左移", "왼쪽으로 이동"],
  "bind.panRight": ["Pan right", "视角右移", "오른쪽으로 이동"],
  "bind.jumpHq": ["Jump to headquarters", "跳转到总部", "사령부로 이동"],
  "bind.follow": ["Follow the selection", "跟随所选单位", "선택 유닛 따라가기"],
  "bind.map": ["Battle map (hold to peek)", "战场地图（按住查看）", "전장 지도(누르면 잠깐 보기)"],
  "bind.sidebar": ["Toggle the sidebar", "展开 / 收起侧边栏", "사이드바 전환"],
  "bind.xray": ["Health bars and see-through (hold)", "血条与透视（按住）", "체력 바와 투시(누르고 있기)"],
  "bind.pause": ["Pause", "暂停", "일시 정지"],
  "bind.speedDown": ["Slower", "减速", "느리게"],
  "bind.speedUp": ["Faster", "加速", "빠르게"],
  "bind.quickSave": ["Quick save", "快速保存", "빠른 저장"],
  "bind.quickLoad": ["Quick load", "快速读取", "빠른 불러오기"],
  "bind.help": ["Beginner guide", "新手指南", "초보자 안내"],
  "bind.scoreboard": ["Player list (hold)", "玩家列表（按住）", "플레이어 목록(누르고 있기)"],
  "bind.chat": ["Chat", "聊天", "채팅"],
  "bind.console": ["Admin console", "管理控制台", "관리자 콘솔"],
  "bind.pad.confirm": ["Select / confirm", "选择 / 确认", "선택 / 확인"],
  "bind.pad.cancel": ["Cancel / back", "取消 / 返回", "취소 / 뒤로"],
  "bind.pad.command": ["Command", "下令", "명령"],
  "bind.pad.attackMove": ["Attack-move", "攻击移动", "공격 이동"],
  "bind.pad.modifier": ["Modifier (hold: queue, add)", "修饰键（按住：排队、加选）", "보조 키(누르고 있기: 대기열, 추가 선택)"],
  "bind.pad.wheel": ["Command wheel (hold)", "指令轮盘（按住）", "명령 휠(누르고 있기)"],
  "bind.pad.quickSelect": ["Quick select (hold)", "快速选择（按住）", "빠른 선택(누르고 있기)"],
  "bind.pad.focus": ["Camera to the selection", "视角跳转到所选", "선택 유닛으로 카메라"],
  "bind.pad.map": ["Battle map", "战场地图", "전장 지도"],
  "bind.pad.menu": ["Pause menu", "暂停菜单", "일시 정지 메뉴"],
  "bind.pad.hq": ["Jump to headquarters", "跳转到总部", "사령부로 이동"],
  "bind.pad.sidebar": ["Sidebar focus", "操作侧边栏", "사이드바 포커스"],
  "help.leftClickShort": ["left click", "左键", "왼쪽 클릭"],
  "help.rightClickShort": ["right click", "右键", "오른쪽 클릭"],
  "pad.more": ["More…", "更多…", "더 보기…"],
  "pad.hint.select": ["Select", "选择", "선택"],
  "pad.hint.boxSelect": ["Hold: box-select", "按住：框选", "누르고 있기: 범위 선택"],
  "pad.hint.boxRelease": ["Release to select", "松开完成选择", "놓으면 선택"],
  "pad.hint.quickSelect": ["Quick select", "快速选择", "빠른 선택"],
  "pad.hint.groups": ["Groups", "编队", "부대"],
  "pad.hint.map": ["Battle map", "战场地图", "전장 지도"],
  "pad.hint.menu": ["Menu", "菜单", "메뉴"],
  "pad.hint.orders": ["Orders", "指令", "명령"],
  "pad.hint.build": ["Build", "建造", "건설"],
  "pad.hint.produce": ["Produce", "生产", "생산"],
  "pad.hint.deselect": ["Deselect", "取消选择", "선택 해제"],
  // direct control on the pad: the left stick drives, the right stick aims
  "pad.hint.steer": ["Steer", "驾驶", "조종"],
  "pad.hint.aimGuns": ["Aim", "瞄准", "조준"],
  "pad.hint.fire": ["Fire", "开火", "발사"],
  "pad.hint.orderAt": ["Order here", "在此下令", "여기에 명령"],
  "pad.hint.zoom": ["Zoom", "缩放", "확대/축소"],
  "pad.hint.letGo": ["Let go", "结束操控", "조종 해제"],
  "pad.hint.place": ["Place", "放置", "놓기"],
  "pad.hint.keepPlacing": ["Hold: keep placing", "按住：连续放置", "누르고 있기: 계속 놓기"],
  "pad.hint.nudge": ["Nudge", "微调", "미세 조정"],
  "pad.hint.cancel": ["Cancel", "取消", "취소"],
  "pad.hint.confirm": ["Confirm", "确认", "확인"],
  "pad.hint.choose": ["Choose", "选取", "고르기"],
  "pad.hint.release": ["Release to confirm", "松开确认", "놓으면 확인"],
  "pad.hint.page": ["Next page", "下一页", "다음 페이지"],
  "pad.hint.aim": ["Aim", "瞄准", "조준"],
  "pad.hint.look": ["Look there", "跳转视角", "그곳 보기"],
  "pad.hint.orderHere": ["Order here", "在此下令", "여기에 명령"],
  "pad.hint.close": ["Close", "关闭", "닫기"],
  "pad.hint.move": ["Navigate", "导航", "탐색"],
  "pad.hint.back": ["Back", "返回", "뒤로"],
  "pad.hint.tabs": ["Tabs", "切换页签", "탭"],
  "pad.verb.rally": ["Set rally point", "设置集结点", "집결 지점 설정"],
  "pad.verb.attack": ["Attack", "攻击", "공격"],
  "pad.verb.assist": ["Help build", "协助建造", "건설 돕기"],
  "pad.verb.board": ["Board", "登乘", "탑승"],
  "pad.verb.pickup": ["Pick up", "接载", "태우기"],
  // ------------------------------------------------------------- PWA updates
  "pwa.updateReady": ["A new version is ready.", "新版本已就绪。", "새 버전이 준비되었습니다."],
  "pwa.reload": ["Reload", "重新载入", "다시 불러오기"],
  // ------------------------------------------------------------- touch play
  "touch.boxSelect": ["Box select", "框选", "범위 선택"],
  "touch.selectArmy": ["Select army", "选择全军", "전군 선택"],
  "touch.deselect": ["Deselect", "取消选择", "선택 해제"],
  "touch.confirm": ["Place", "放置", "놓기"],
  "touch.cancel": ["Cancel", "取消", "취소"],
  "touch.rotateTitle": ["Rotate your device", "请横屏游玩", "기기를 돌려 주세요"],
  "touch.rotateBody": ["Steel Tide is played in landscape.", "钢铁浪潮需要横屏操作。", "스틸 타이드는 가로 화면으로 플레이합니다."],
  "touch.keepPortrait": ["Keep portrait", "保持竖屏", "세로 화면 유지"],
  "touch.hintPlace": ["Drag to aim, then confirm", "拖动定位，然后确认", "끌어서 위치를 잡은 뒤 확인"],
  "touch.hintBox": ["Drag to select · tap ▣ again to pan", "拖动框选 · 再次点击 ▣ 恢复平移", "끌어서 선택 · ▣를 다시 탭하면 화면 이동"],
  "touch.hintRepair": ["Tap a friendly building to repair or finish construction", "点击友军建筑以维修或继续建造", "아군 건물을 탭하면 수리하거나 건설을 마칩니다"],
  "touch.hintMove": ["Tap where to move", "点击移动目的地", "이동할 곳을 탭"],
  "touch.hintAttackMove": ["Tap where to attack-move", "点击攻击移动目的地", "공격 이동할 곳을 탭"],
  "touch.hintNuke": ["Tap the map to choose the nuclear target", "点击地图选择核打击目标", "지도를 탭해 핵 표적을 고르세요"],
  // ------------------------------------------------------------- about (the settings' last page) / help
  "about.title": ["About", "关于", "정보"],
  "about.website": ["Official website", "官方网站", "공식 웹사이트"],
  "about.libs": ["Open source", "开源组件", "오픈 소스"],
  "about.libsIntro": [
    "The engine has no runtime dependencies; these build it and dress it.",
    "引擎没有运行时依赖，以下是构建与界面所用的开源组件。",
    "엔진에는 런타임 의존성이 없습니다. 이것들이 엔진을 빌드하고 꾸밉니다."
  ],
  "about.author": ["About the author", "关于作者", "제작자 소개"],
  "about.authorBody": ["Steel Tide is made by {0}.", "《钢铁浪潮》由 {0} 制作。", "스틸 타이드는 {0}이 만들었습니다."],
  "help.shiftDesc": ["Queue orders · add to selection", "排队指令 · 加选单位", "명령 대기열 · 선택에 추가"],
  // ------------------------------------------------------------- stats labels (tooltips)
  "stat.cost": ["Cost", "造价", "가격"],
  "stat.time": ["Build time", "建造时间", "건설 시간"],
  "stat.hp": ["HP", "耐久", "체력"],
  "stat.dps": ["DPS", "每秒伤害", "DPS"],
  "stat.range": ["Range", "射程", "사거리"],
  "stat.repair": ["Repair", "维修", "수리"],
  "stat.speed": ["Speed", "速度", "속도"],
  "stat.pop": ["Unit cap", "人口", "유닛 상한"],
  "stat.power": ["Power", "电力", "전력"],
  "stat.productionSlots": ["Production slots: {0} of {1} in use", "生产席位：已用 {0} / 共 {1}", "생산 슬롯: {1}개 중 {0}개 사용 중"],
  "hud.slotsFull": [
    "Production slots {0}/{1}; build another Headquarters for three more",
    "生产席位 {0}/{1}，再建一座总部可多出三席",
    "생산 슬롯 {0}/{1}. 사령부를 하나 더 지으면 셋이 늘어납니다"
  ],
  "stat.metalRate": ["+{0} metal/s", "+{0} 金属/秒", "+{0} 금속/초"],
  "stat.strongVs": ["Strong vs", "克制", "강함"],
  "stat.weakVs": ["Weak vs", "被克制", "약함"],
  "stat.cargo": ["Transport capacity: {0}", "运载量：{0}", "수송 용량: {0}"],
  "stat.underwater": ["Submerged; only sonar reveals it", "潜航，仅声呐可发现", "잠항. 소나로만 드러납니다"],
  "stat.sonar": ["Sonar: reveals submarines", "声呐：可发现潜艇", "소나: 잠수함을 드러냅니다"],
  "stat.stealth": [
    "Stealth: the enemy sees it only within {0} tiles, or {1} of a Radar Station",
    "隐形：敌人仅在 {0} 格内可见，雷达站为 {1} 格",
    "스텔스: 적은 {0}칸 안에서만, 레이더 기지는 {1}칸 안에서만 봅니다"
  ],
  "stat.detect": ["Reveals stealth aircraft within {0} tiles", "可发现 {0} 格内的隐形飞行器", "{0}칸 안의 스텔스 항공기를 드러냅니다"],
  "stat.friendlyFire": ["Friendly fire: the blast harms your own units too", "误伤：爆炸同样会伤及己方单位", "아군 오사: 폭발이 아군 유닛도 해칩니다"],
  "stat.armor.light": ["Light", "轻甲", "경장갑"],
  "stat.armor.medium": ["Medium", "中甲", "중형 장갑"],
  "stat.armor.heavy": ["Heavy", "重甲", "중장갑"],
  "stat.armor.ship": ["Ship", "舰船", "함선"],
  "stat.armor.sub": ["Submarine", "潜艇", "잠수함"],
  "stat.armor.air": ["Aircraft", "飞行器", "항공기"],
  "stat.armor.structure": ["Structure", "建筑", "건물"],
  // ------------------------------------------------------------- teams
  "team.blue": ["Blue", "蓝方", "파랑"],
  "team.red": ["Red", "红方", "빨강"],
  "team.green": ["Green", "绿方", "초록"],
  "team.purple": ["Purple", "紫方", "보라"],
  "team.orange": ["Orange", "橙方", "주황"],
  "team.cyan": ["Cyan", "青方", "청록"],
  "team.yellow": ["Yellow", "黄方", "노랑"],
  "team.white": ["White", "白方", "하양"],
  // a team's callsign (`game/teams.ts`): the phonetic alphabet in English,
  // animals in Chinese, the alphabet transliterated in Korean
  "team.alpha": ["Alpha", "战狼", "알파"],
  "team.bravo": ["Bravo", "鲨鱼", "브라보"],
  "team.charlie": ["Charlie", "猛虎", "찰리"],
  "team.delta": ["Delta", "雄鹰", "델타"],
  "team.echo": ["Echo", "猎豹", "에코"],
  "team.foxtrot": ["Foxtrot", "毒蛇", "폭스트롯"],
  "team.golf": ["Golf", "黑熊", "골프"],
  "team.hotel": ["Hotel", "蛟龙", "호텔"],
  // breakthrough: a seat's team is a side
  "team.attackers": ["Attackers", "进攻方", "공격측"],
  "team.defenders": ["Defenders", "防守方", "수비측"],
  // ------------------------------------------------------------- admin console
  "console.title": ["Console", "控制台", "콘솔"],
  "console.placeholder": ["type help for the commands", "输入 help 查看命令", "help를 입력하면 명령 목록"],
  "console.hostOnly": ["Only the host can run commands.", "只有房主可以执行命令。", "호스트만 명령을 실행할 수 있습니다."],
  "console.noKick": ["There is nobody to remove in a local game.", "本地对局中没有可移出的玩家。", "로컬 게임에는 내보낼 사람이 없습니다."],
  "console.speedSet": ["Game speed ×{0}", "游戏速度 ×{0}", "게임 속도 ×{0}"],
  "console.noControl": ["The server decides which faction you command.", "你操作哪个阵营由服务器决定。", "어느 진영을 지휘할지는 서버가 정합니다."],
  "console.commanding": ["Now commanding {0}.", "现在操作{0}。", "이제 {0}을(를) 지휘합니다."],
  "console.handedOver": [
    'An AI is driving your faction now. Watch, or take it back with "play {0}".',
    'AI 正在指挥你的阵营。你可以旁观，或用 "play {0}" 收回指挥权。',
    'AI가 당신의 진영을 몰고 있습니다. 지켜보거나 "play {0}"으로 되찾으세요.'
  ],
  // ------------------------------------------------------------- units: land
  "unit.engineer.name": ["Engineer", "工程车", "공병차"],
  "unit.engineer.desc": ["Constructs and repairs buildings. The backbone of any base.", "建造并维修建筑，基地运转的基石。", "건물을 짓고 수리합니다. 모든 기지의 중추입니다."],
  "unit.buggy.name": ["Recon Buggy", "侦察车", "정찰 버기"],
  "unit.buggy.desc": ["Fast scout with a light machine gun. Great eyes, thin skin.", "装备轻机枪的高速侦察车。眼观六路，皮薄馅大。", "경기관총을 단 빠른 정찰차. 눈은 좋고 살갗은 얇습니다."],
  "unit.ltank.name": ["Wolf Light Tank", "野狼轻型坦克", "울프 경전차"],
  "unit.ltank.desc": ["Cheap autocannon tank. Shreds light vehicles.", "廉价机炮坦克，专撕轻型载具。", "값싼 기관포 전차. 경차량을 찢어 놓습니다."],
  "unit.mbt.name": ["Bison Battle Tank", "野牛主战坦克", "바이슨 주력 전차"],
  "unit.mbt.desc": ["Reliable main battle tank. The core of any armored push.", "可靠的主战坦克，装甲推进的中坚。", "믿을 만한 주력 전차. 모든 장갑 돌격의 핵심입니다."],
  "unit.htank.name": ["Mammoth Heavy Tank", "猛犸重型坦克", "매머드 중전차"],
  "unit.htank.desc": [
    "Twin cannons, massive armor. Slow, but it arrives like a verdict.",
    "双联主炮、超厚装甲。行如判决，缓慢而不可阻挡。",
    "쌍포와 육중한 장갑. 느리지만, 판결처럼 도착합니다."
  ],
  "unit.td.name": ["Viper Tank Destroyer", "蝰蛇反坦克车", "바이퍼 구축전차"],
  "unit.td.desc": [
    "Long-range guided anti-tank missiles. Melts heavy armor, hates being rushed.",
    "远程反坦克导弹，融化重甲，惧怕近身。",
    "장거리 유도 대전차 미사일. 중장갑을 녹이지만 달려드는 건 질색합니다."
  ],
  "unit.flak.name": ["Flak Track", "防空炮车", "대공 장갑차"],
  "unit.flak.desc": ["Mobile flak cannon. Cheap insurance against aircraft.", "机动高射炮，对抗空军的廉价保险。", "기동 대공포. 항공기에 대비한 값싼 보험입니다."],
  "unit.sam.name": ["Hawk SAM Launcher", "猎鹰防空导弹车", "호크 대공 미사일 차량"],
  "unit.sam.desc": ["Long-range surface-to-air missiles. Owns the sky above your army.", "远程防空导弹，掌控大军头顶的天空。", "장거리 지대공 미사일. 아군 머리 위 하늘을 장악합니다."],
  "unit.arty.name": ["Thunder Howitzer", "雷霆榴弹炮", "선더 곡사포"],
  "unit.arty.desc": [
    "Long-range artillery. Cracks turtled defenses from beyond retaliation.",
    "远程榴弹炮，在敌方还击范围之外敲开乌龟壳。",
    "장거리 포병. 보복이 닿지 않는 곳에서 웅크린 방어를 깨뜨립니다."
  ],
  "unit.mlrs.name": ["Tempest MLRS", "暴风雨火箭炮", "템페스트 다연장 로켓포"],
  "unit.mlrs.desc": [
    "Eight-rocket saturation barrage. Erases fortified positions and clumped armies.",
    "八联饱和火箭覆盖，抹平堡垒与扎堆的军队。",
    "로켓 여덟 발의 포화 사격. 요새화된 진지와 뭉친 군대를 지워 버립니다."
  ],
  "unit.radarcar.name": ["Owl Radar Car", "夜枭雷达车", "아울 레이더 차량"],
  "unit.radarcar.desc": [
    "A radar on wheels: sees far by radio, through night and rain, and finds what hides. Unarmed, thin and slow.",
    "车载雷达：靠无线电看得很远，无惧黑夜与雨雪，还能揪出隐形的东西。无武装、装甲薄、速度慢。",
    "바퀴 달린 레이더: 밤과 비를 뚫고 전파로 멀리 보고, 숨은 것을 찾아냅니다. 비무장에 얇고 느립니다."
  ],
  "unit.salamander.name": ["Salamander Thermobaric Mortar", "火蜥蜴温压炮车", "샐러맨더 열압력 박격포"],
  "unit.salamander.desc": [
    "Lobs thermobaric shells: a wide blast that point defence cannot stop, and that burns your own units too.",
    "投掷温压弹：大范围的爆炸无法被拦截塔阻挡，但也会烧伤己方单位。",
    "열압력탄을 던집니다. 넓은 폭발은 요격 방어로 막을 수 없고, 아군 유닛도 태웁니다."
  ],
  "unit.bulwark.name": ["Bulwark Mobile Interrupter", "壁垒机动拦截车", "불워크 기동 요격차"],
  "unit.bulwark.desc": [
    "Point defence on tracks: shoots down rockets and guided missiles over the column it rides with. No gun of its own.",
    "履带式点防御：为同行的纵队击落来袭的火箭弹与制导导弹。自身没有武器。",
    "궤도 위의 요격 방어: 함께 움직이는 종대 위로 날아드는 로켓과 유도 미사일을 격추합니다. 자체 무기는 없습니다."
  ],
  "unit.drake.name": ["Drake Flame Tank", "火龙喷火坦克", "드레이크 화염 전차"],
  "unit.drake.desc": [
    "Pours fire in bursts, and the ground it washes over keeps burning under friend and foe alike. Paper-thin and short-armed: it is meant to be spent.",
    "一阵阵喷射火焰，被它浇过的地面会持续燃烧，敌我不分。装甲薄如纸、射程短：它本来就是消耗品。",
    "불을 한바탕씩 쏟아붓고, 불이 휩쓴 땅은 피아를 가리지 않고 계속 탑니다. 종잇장 장갑에 짧은 팔: 소모품으로 만들어졌습니다."
  ],
  // ------------------------------------------------------------- units: sea
  "unit.gunboat.name": ["Gunboat", "炮艇", "포함"],
  "unit.gunboat.desc": ["Fast patrol boat with an autocannon. Cheap naval eyes.", "装备机炮的高速巡逻艇，海上的廉价耳目。", "기관포를 단 빠른 초계정. 값싼 바다의 눈입니다."],
  "unit.mboat.name": ["Missile Boat", "导弹艇", "미사일정"],
  "unit.mboat.desc": ["Anti-ship missiles on a small hull. Punches far above its weight.", "小艇扛重锤，反舰导弹一击致命。", "작은 선체에 대함 미사일. 체급을 훌쩍 넘는 한 방입니다."],
  "unit.frigate.name": ["Aegis Frigate", "神盾护卫舰", "이지스 호위함"],
  "unit.frigate.desc": ["Fleet air-defense screen with rapid SAMs and a deck gun.", "舰队防空屏障，快速防空导弹加舰炮。", "속사 대공 미사일과 함포를 갖춘 함대 방공 방패입니다."],
  "unit.destroyer.name": ["Orca Destroyer", "虎鲸驱逐舰", "오르카 구축함"],
  "unit.destroyer.desc": ["Naval gun, sonar and anti-submarine torpedoes: the submarine hunter.", "舰炮、声呐加反潜鱼雷：潜艇猎手。", "함포와 소나, 그리고 대잠 어뢰. 잠수함 사냥꾼입니다."],
  "unit.sub.name": ["Barracuda Submarine", "梭鱼潜艇", "바라쿠다 잠수함"],
  "unit.sub.desc": [
    "Submerged torpedo ambusher, invisible except to sonar. With a Nuclear Reactor standing it can arm one warhead of its own and launch it from under the water.",
    "潜航鱼雷伏击者，除声呐外无人可见。拥有核反应堆后，可自行装备一枚核弹头并从水下发射。",
    "잠항 어뢰 매복자. 소나 말고는 볼 수 없습니다. 원자로가 서 있으면 핵탄두 하나를 직접 갖춰 물속에서 발사할 수 있습니다."
  ],
  "unit.btlship.name": ["Sovereign Battleship", "君王战列舰", "소버린 전함"],
  "unit.btlship.desc": ["Triple heavy guns bombard land and sea from extreme range.", "三联重炮超远程轰击海陆目标。", "3연장 중포가 극한의 사거리에서 육지와 바다를 포격합니다."],
  "unit.seatrans.name": ["Landing Craft", "登陆艇", "상륙정"],
  "unit.seatrans.desc": ["Ferries units across water.", "渡海运输单位。", "유닛을 싣고 물을 건넙니다."],
  "unit.engboat.name": ["Engineer Boat", "工程船", "공병정"],
  "unit.engboat.desc": [
    "Builds and repairs from the water, anything within reach of the shore. No gun.",
    "从水上建造与维修岸边触手可及的一切。没有武器。",
    "물 위에서 해안 가까이의 무엇이든 짓고 수리합니다. 무기는 없습니다."
  ],
  "unit.kraken.name": ["Kraken Cruise-Missile Submarine", "海妖巡航导弹潜艇", "크라켄 순항 미사일 잠수함"],
  "unit.kraken.desc": [
    "Fires cruise missiles at the land from under the water, far beyond its own sight. Nothing for ships.",
    "从水下向陆地发射巡航导弹，射程远超自身视野。无法攻击舰船。",
    "물속에서 지상으로 순항 미사일을 쏩니다. 자기 시야보다 훨씬 멀리요. 함선은 노릴 수 없습니다."
  ],
  "unit.moray.name": ["Moray Infiltration Submarine", "海鳗渗透潜艇", "모레이 침투 잠수함"],
  "unit.moray.desc": ["A submerged transport: unarmed, and invisible except to sonar.", "潜航运输艇：无武装，除声呐外无人可见。", "잠항 수송함: 비무장이고, 소나 말고는 볼 수 없습니다."],
  // ------------------------------------------------------------- units: air
  "unit.drone.name": ["Scout Drone", "侦察无人机", "정찰 드론"],
  "unit.drone.desc": ["Unarmed, expendable, sees everything.", "无武装、可消耗，但看得见一切。", "비무장, 소모품, 모든 것을 봅니다."],
  "unit.fighter.name": ["Falcon Fighter", "猎隼战斗机", "팔콘 전투기"],
  "unit.fighter.desc": ["Air-superiority fighter. Only targets aircraft, and deletes them.", "制空战斗机，只打飞机，且一打一个准。", "제공 전투기. 항공기만 노리고, 지워 버립니다."],
  "unit.heli.name": ["Cobra Attack Helicopter", "眼镜蛇武装直升机", "코브라 공격 헬기"],
  "unit.heli.desc": ["Hovering anti-tank missile platform. Terror of slow armor.", "悬停反坦克导弹平台，重甲的噩梦。", "제자리 비행하는 대전차 미사일 발사대. 느린 장갑의 공포입니다."],
  "unit.jet.name": ["Thunderbolt Strike Jet", "霹雳攻击机", "선더볼트 공격기"],
  "unit.jet.desc": ["Rocket strafing runs against vehicles and light targets.", "火箭弹俯冲扫射，专欺负地面载具。", "차량과 경표적을 향한 로켓 기총 소사입니다."],
  "unit.mjet.name": ["Albatross Naval Striker", "信天翁反舰攻击机", "알바트로스 대함 공격기"],
  "unit.mjet.desc": ["Sea-skimming anti-ship missiles. Warships fear the horizon.", "掠海反舰导弹，让军舰恐惧地平线。", "해면을 스치는 대함 미사일. 군함이 수평선을 두려워하게 됩니다."],
  "unit.bomber.name": ["Vulture Bomber", "秃鹫轰炸机", "벌처 폭격기"],
  "unit.bomber.desc": ["Carpet bombs that level buildings and dug-in positions.", "地毯式轰炸，夷平建筑与坚固阵地。", "건물과 파고든 진지를 평평하게 만드는 융단 폭격입니다."],
  "unit.theli.name": ["Pelican Transport Helicopter", "鹈鹕运输直升机", "펠리컨 수송 헬기"],
  "unit.theli.desc": ["Airlifts a light load anywhere.", "轻载空运，全图直达。", "가벼운 짐을 어디든 공수합니다."],
  "unit.c47.name": ["C-47 Skytrain", "C-47 空中列车", "C-47 스카이트레인"],
  "unit.c47.desc": [
    "Heavy air transport. It lands to load and unload, and is a ground target while it is down.",
    "重型运输机。装卸时会降落，停在地面时会像车辆一样挨打。",
    "대형 수송기. 싣고 내릴 때 착륙하며, 내려앉은 동안에는 지상 표적이 됩니다."
  ],
  "unit.gunship.name": ["Spectre Gunship", "幽灵炮艇机", "스펙터 건십"],
  "unit.gunship.desc": ["Circling heavy gunship raining sustained cannon fire.", "盘旋重型炮艇机，倾泻持续炮火。", "선회하며 기관포 사격을 끊임없이 퍼붓는 대형 건십입니다."],
  "unit.wraith.name": ["Wraith Stealth Bomber", "幽魂隐形轰炸机", "레이스 스텔스 폭격기"],
  "unit.wraith.desc": [
    "Two heavy bombs on a hull no radar sees until it is nearly overhead.",
    "两枚重型炸弹，机身在逼近头顶之前不会出现在任何雷达上。",
    "중폭탄 두 발. 거의 머리 위에 올 때까지 어떤 레이더에도 잡히지 않는 기체입니다."
  ],
  "unit.cormorant.name": ["Cormorant ASW Helicopter", "鸬鹚反潜直升机", "코모란트 대잠 헬기"],
  "unit.cormorant.desc": [
    "Dipping sonar and homing torpedoes: the aircraft that hunts submarines.",
    "吊放声呐加自导鱼雷，专门猎杀潜艇的飞行器。",
    "디핑 소나와 유도 어뢰: 잠수함을 사냥하는 항공기입니다."
  ],
  // ------------------------------------------------------------- buildings
  "unit.hq.name": ["Headquarters", "总部", "사령부"],
  "unit.hq.desc": [
    "Command center. Produces engineers and pays for three production lines: factories, airbases or naval yards, in any mix.",
    "指挥中枢。生产工程车，并提供三条生产线的席位：战车工厂、空军基地或造船厂，任意搭配。",
    "지휘 중추. 공병차를 생산하고 생산 라인 셋을 감당합니다. 전차 공장, 공군 기지, 조선소를 어떻게 섞어도 됩니다."
  ],
  "unit.extractor.name": ["Metal Extractor", "采矿场", "금속 채굴장"],
  "unit.extractor.desc": ["Mines metal from a deposit. Your economy lives here.", "在矿脉上开采金属，经济命脉所在。", "광맥에서 금속을 캡니다. 경제가 여기서 삽니다."],
  "unit.extractor2.name": ["Advanced Extractor", "高级采矿场", "고급 채굴장"],
  "unit.extractor2.desc": ["Twin drills double the yield of the same deposit.", "双钻头并进，同一矿脉双倍产出。", "쌍 드릴이 같은 광맥의 산출을 두 배로 늘립니다."],
  "unit.extractor3.name": ["Deep-Core Extractor", "深层采矿场", "심층 채굴장"],
  "unit.extractor3.desc": ["A deep-core bore yields far more metal from the same deposit.", "深层钻机从同一矿脉中开采出远超以往的金属。", "심층 시추가 같은 광맥에서 훨씬 많은 금속을 냅니다."],
  "unit.power.name": ["Power Plant", "发电厂", "발전소"],
  "unit.power.desc": ["Generates power. Low power slows production and defenses.", "产生电力。电力不足会拖慢生产与防御。", "전력을 만듭니다. 전력이 부족하면 생산과 방어가 느려집니다."],
  "unit.power2.name": ["Advanced Power Plant", "高级发电厂", "고급 발전소"],
  "unit.power2.desc": ["Two and a half times the output from the same footprint.", "同样占地，两倍半出力。", "같은 자리에서 두 배 반의 출력."],
  "unit.power3.name": ["Singularity Power Plant", "奇点发电厂", "특이점 발전소"],
  "unit.power3.desc": ["A contained core triples the Advanced Plant's output.", "受控核心的出力是高级发电厂的三倍。", "봉인된 코어가 고급 발전소 출력의 세 배를 냅니다."],
  "unit.factory.name": ["War Factory", "战车工厂", "전차 공장"],
  "unit.factory.desc": ["Produces engineers and ground vehicles.", "生产工程车与地面载具。", "공병차와 지상 차량을 생산합니다."],
  "unit.factory2.name": ["Advanced War Factory", "高级战车工厂", "고급 전차 공장"],
  "unit.factory2.desc": ["Unlocks advanced ground vehicles.", "解锁高级地面载具。", "고급 지상 차량을 해금합니다."],
  "unit.factory3.name": ["Arsenal", "兵工厂", "병기창"],
  "unit.factory3.desc": [
    "The Level-3 war factory: adds the Tempest, the Salamander and the Bulwark.",
    "三级战车工厂：新增暴风雨火箭炮、火蜥蜴与壁垒。",
    "3단계 전차 공장: 템페스트, 샐러맨더, 불워크가 추가됩니다."
  ],
  "unit.airbase.name": ["Airbase", "空军基地", "공군 기지"],
  "unit.airbase.desc": ["Produces aircraft.", "生产飞行器。", "항공기를 생산합니다."],
  "unit.airbase2.name": ["Advanced Airbase", "高级空军基地", "고급 공군 기지"],
  "unit.airbase2.desc": ["Unlocks advanced aircraft.", "解锁高级飞行器。", "고급 항공기를 해금합니다."],
  "unit.airbase3.name": ["Strategic Airbase", "战略空军基地", "전략 공군 기지"],
  "unit.airbase3.desc": ["The Level-3 airbase: adds the Wraith and the Cormorant.", "三级空军基地：新增幽魂与鸬鹚。", "3단계 공군 기지: 레이스와 코모란트가 추가됩니다."],
  "unit.navyard.name": ["Naval Yard", "造船厂", "조선소"],
  "unit.navyard.desc": ["Builds warships from the shoreline.", "在海岸线上建造舰船。", "해안선에서 군함을 건조합니다."],
  "unit.navyard2.name": ["Advanced Naval Yard", "高级造船厂", "고급 조선소"],
  "unit.navyard2.desc": ["Unlocks advanced warships.", "解锁高级舰船。", "고급 군함을 해금합니다."],
  "unit.navyard3.name": ["Deepwater Yard", "深水船坞", "심해 조선소"],
  "unit.navyard3.desc": ["The Level-3 naval yard: adds the Kraken and the Moray.", "三级造船厂：新增海妖与海鳗。", "3단계 조선소: 크라켄과 모레이가 추가됩니다."],
  "unit.mgturret.name": ["MG Turret", "机枪塔", "기관총 포탑"],
  "unit.mgturret.desc": ["Rapid-fire defense against light vehicles and aircraft.", "速射防御塔，克制轻型载具与飞行器。", "경차량과 항공기를 상대하는 속사 방어입니다."],
  "unit.gatling.name": ["Gatling Turret", "加特林炮塔", "개틀링 포탑"],
  "unit.gatling.desc": ["A wall of lead. Triple the firepower.", "弹幕如墙，三倍火力。", "납의 벽. 화력 세 배."],
  "unit.cannonturret.name": ["Cannon Turret", "加农炮塔", "캐논 포탑"],
  "unit.cannonturret.desc": ["Anti-armor cannon emplacement.", "反装甲加农炮阵地。", "대장갑 캐논 진지입니다."],
  "unit.cannonturret2.name": ["Bastion Cannon", "要塞重炮", "요새 캐논"],
  "unit.cannonturret2.desc": ["Heavy twin cannons with extended range.", "双联重炮，射程更远。", "사거리가 늘어난 쌍열 중포입니다."],
  "unit.aaturret.name": ["AA Turret", "防空炮塔", "대공 포탑"],
  "unit.aaturret.desc": ["Flak battery. Air-only.", "高射炮组，仅对空。", "대공포 진지. 공중 전용입니다."],
  "unit.samsite.name": ["SAM Site", "防空导弹阵地", "대공 미사일 진지"],
  "unit.samsite.desc": [
    "Long-range missiles that own the local airspace, and they will fire on a nuclear warhead.",
    "远程防空导弹，掌控周边空域，也会向核弹头开火。",
    "주변 공역을 장악하는 장거리 미사일. 핵탄두에도 불을 뿜습니다."
  ],
  "unit.interceptor.name": ["Missile Interrupter", "导弹拦截塔", "미사일 요격탑"],
  "unit.interceptor.desc": [
    "Point defence: shoots down incoming rockets and guided missiles. Nothing for shells, warheads or the ground.",
    "点防御设施：击落来袭的火箭弹与制导导弹。对炮弹、核弹头和地面目标无能为力。",
    "요격 방어: 날아드는 로켓과 유도 미사일을 격추합니다. 포탄, 핵탄두, 지상 표적에는 손쓰지 못합니다."
  ],
  "unit.interceptor2.name": ["Strategic Interrupter", "战略拦截塔", "전략 요격탑"],
  "unit.interceptor2.desc": [
    "Point defence with a longer reach, a deeper magazine and thicker walls.",
    "射程更远、备弹更多、装甲更厚的点防御设施。",
    "더 긴 사거리, 더 깊은 탄창, 더 두꺼운 벽을 가진 요격 방어입니다."
  ],
  "unit.repairtower.name": ["Repair Tower", "维修塔", "수리탑"],
  "unit.repairtower.desc": [
    "Mends damaged allies in range, worst hit first. Repairs cost metal.",
    "维修范围内的受损友军，优先最重伤者。维修消耗金属。",
    "사거리 안의 손상된 아군을 가장 심하게 다친 쪽부터 수리합니다. 수리에는 금속이 듭니다."
  ],
  "unit.radar.name": ["Radar Station", "雷达站", "레이더 기지"],
  "unit.radar.desc": [
    "Lifts the fog far around it, through night and rain, and unlocks the top tier of weapons.",
    "驱散周围大片战争迷雾，无惧黑夜与雨雪，并解锁顶级武器科技。",
    "밤과 비를 뚫고 주위의 안개를 멀리까지 걷어 내며, 최상위 무기 기술을 해금합니다."
  ],
  "unit.nukesilo.name": ["Nuclear Silo", "核弹发射井", "핵 사일로"],
  "unit.nukesilo.desc": [
    "Fabricates and stores nuclear warheads, and launches one only where you point it.",
    "制造并储存核弹头，只向你指定的目标发射。",
    "핵탄두를 제조하고 보관하며, 당신이 가리킨 곳에만 발사합니다."
  ],
  "unit.reactor.name": ["Nuclear Reactor", "核反应堆", "원자로"],
  "unit.reactor.desc": [
    "Breeds the cores that arm a warhead. Feeds the grid as well.",
    "培育装配核弹头所需的裂变核心。同时为电网供电。",
    "탄두를 무장시키는 코어를 증식합니다. 전력망에도 전력을 공급합니다."
  ],
  "unit.warhead.name": ["Nuclear Warhead", "核弹头", "핵탄두"],
  "unit.warhead.desc": [
    "A warhead in flight: no gun, no orders, a straight line to the point it was sent to.",
    "飞行中的核弹头：没有武器、不接受指令，直线飞向目标点。",
    "비행 중인 탄두: 무기도 명령도 없이 보내진 지점으로 직선 비행합니다."
  ],
  // ------------------------------------------------------------- terrain
  // the map's props (`game/decor.ts`), named on the editor's palette
  "decor.pole": ["Telegraph pole", "电线杆", "전신주"],
  "decor.tower": ["Water tower", "水塔", "급수탑"],
  "decor.palm": ["Date palm", "椰枣树", "대추야자"],
  "decor.tent": ["Field tent", "野战帐篷", "야전 천막"],
  "decor.hangar": ["Aircraft shelter", "机堡", "항공기 격납고"],
  "decor.bunker": ["Bunker", "碉堡", "벙커"],
  "decor.derrick": ["Pumpjack", "抽油机", "펌프잭"],
  "decor.freighter": ["Sinking freighter, north to south", "沉没的货轮（南北向）", "침몰하는 화물선 (남북 방향)"],
  "decor.freighter2": ["Sinking freighter, east to west", "沉没的货轮（东西向）", "침몰하는 화물선 (동서 방향)"],
  "terrain.0": ["Deep water", "深水", "깊은 물"],
  "terrain.1": ["Shallow water", "浅水", "얕은 물"],
  "terrain.2": ["Sand", "沙地", "모래"],
  "terrain.3": ["Grass", "草地", "풀밭"],
  "terrain.4": ["Forest", "森林", "숲"],
  "terrain.5": ["Mountain", "山地", "산지"],
  "terrain.6": ["Road", "道路", "도로"],
  "terrain.7": ["Mud", "泥地", "진흙"],
  "terrain.8": ["Marsh", "沼泽", "습지"],
  "terrain.9": ["Snow", "雪地", "눈"],
  "terrain.10": ["Rubble", "废墟", "잔해"],
  "terrain.11": ["Lava", "熔岩", "용암"],
  "terrain.12": ["Cliff, facing north", "悬崖（面朝北）", "절벽(북향)"],
  "terrain.13": ["Cliff, facing east", "悬崖（面朝东）", "절벽(동향)"],
  "terrain.14": ["Cliff, facing south", "悬崖（面朝南）", "절벽(남향)"],
  "terrain.15": ["Cliff, facing west", "悬崖（面朝西）", "절벽(서향)"],
  // ------------------------------------------------------------- community maps
  "community.title": ["Community maps", "社区地图", "커뮤니티 지도"],
  "community.searchHint": ["Name, author, description…", "名称、作者、简介…", "이름, 제작자, 설명…"],
  "community.loading": ["Fetching the list…", "正在获取列表…", "목록 가져오는 중…"],
  "community.offline": ["The map registry could not be reached.", "无法连接到地图仓库。", "지도 레지스트리에 연결할 수 없습니다."],
  "community.empty": ["No maps published yet. Yours could be the first: Publish from the Map Editor.", "尚无已发布的地图。你的可以是第一张：在地图编辑器中发布。", "아직 공개된 지도가 없습니다. 맵 에디터에서 공개하면 첫 지도가 됩니다."],
  "community.none": ['Nothing matches "{0}".', "没有匹配“{0}”的地图。", '"{0}"에 맞는 지도가 없습니다.'],
  "community.page": ["{0} / {1}", "{0} / {1}", "{0} / {1}"],
  "community.prev": ["Previous page", "上一页", "이전 페이지"],
  "community.next": ["Next page", "下一页", "다음 페이지"],
  "community.by": ["by {0}", "作者：{0}", "제작: {0}"],
  "community.downloads": ["Times taken", "下载次数", "다운로드 횟수"],
  "community.taking": ["Fetching {0}…", "正在获取 {0}…", "{0} 가져오는 중…"],
  "community.takeFailed": ["Could not fetch that map: {0}", "无法获取该地图：{0}", "지도를 가져올 수 없습니다: {0}"],
  "community.openRegistry": ["The registry on GitHub", "GitHub 上的地图仓库", "GitHub의 레지스트리"],
  // ------------------------------------------------------------- map editor
  "editor.title": ["Map Editor", "地图编辑器", "맵 에디터"],
  "editor.terrain": ["Terrain", "地形", "지형"],
  "editor.decor": ["Props", "装饰物", "장식물"],
  "editor.map": ["Map", "地图", "지도"],
  "editor.brush": ["Brush", "笔刷", "브러시"],
  "editor.eraser": ["Eraser", "橡皮擦", "지우개"],
  "editor.tool.deposit": ["Metal deposit", "金属矿脉", "금속 광맥"],
  "editor.tool.spawn": ["Spawn point", "出生点", "시작 지점"],
  "editor.tool.erase": ["Erase deposit, spawn or prop", "清除矿脉、出生点或装饰物", "광맥, 시작 지점, 장식물 지우기"],
  "editor.name": ["Name", "名称", "이름"],
  "editor.description": ["Description", "简介", "설명"],
  "editor.descriptionHint": [
    "A line or two about the map, shown beside it on the setup screen.",
    "关于地图的一两句话，会显示在设置界面的地图旁边。",
    "지도에 대한 한두 줄. 설정 화면에서 지도 옆에 표시됩니다."
  ],
  "editor.translations": ["Translations", "翻译", "번역"],
  "editor.translationAdd": ["Add the name and description in {0}", "添加{0}的名称与简介", "{0} 이름과 설명 추가"],
  "editor.translationRemove": ["Remove this translation", "删除此翻译", "이 번역 삭제"],
  "editor.autosaveFailed": [
    "The draft could not be kept: storage is full or unavailable. Export the map to keep it.",
    "无法保存草稿：存储空间已满或不可用。请导出地图以保留它。",
    "초안을 저장하지 못했습니다: 저장 공간이 가득 찼거나 사용할 수 없습니다. 지도를 내보내 보관하세요."
  ],
  "editor.new": ["New map…", "新建地图…", "새 지도…"],
  "editor.newTitle": ["New map", "新建地图", "새 지도"],
  "editor.fill": ["Fill with", "填充", "채우기"],
  "editor.create": ["Create", "创建", "만들기"],
  "editor.confirmReplace": [
    "Replace the map you are editing? Anything not exported is lost.",
    "替换正在编辑的地图？未导出的内容将丢失。",
    "편집 중인 지도를 바꿀까요? 내보내지 않은 것은 사라집니다."
  ],
  "editor.shorelines": ["Tidy shorelines", "整理海岸线", "해안선 정리"],
  "editor.shorelinesTip": [
    "Sand beside water and shallows beside land, the way the generators finish a map.",
    "临水铺沙、临岸变浅，与生成器收尾时一致。",
    "물가에는 모래, 뭍가에는 얕은 물. 생성기가 지도를 마무리하는 방식입니다."
  ],
  "editor.grid": ["Grid", "网格", "격자"],
  "editor.levels": ["High ground", "高地", "고지"],
  "editor.levelsTip": [
    "Shade the ground by the level the cliffs put it at: the plateau behind a face a step above the ground before it, a gate the slope between.",
    "按悬崖形成的高度给地面着色：崖面后方的高原比崖面前方的地面高一级，缺口是二者之间的坡道。",
    "절벽이 만드는 높이에 따라 지면을 음영으로 표시합니다. 절벽면 뒤의 고원은 앞의 땅보다 한 단계 높고, 틈은 그 사이의 비탈입니다."
  ],
  "editor.undo": ["Undo", "撤销", "실행 취소"],
  "editor.import": ["Import", "导入", "가져오기"],
  "editor.export": ["Export", "导出", "내보내기"],
  "editor.publish": ["Publish", "发布", "공개"],
  "editor.publishTip": ["Propose the map to the community registry", "将地图提交到社区地图仓库", "커뮤니티 레지스트리에 지도 제안"],
  "editor.publishTitle": ["Publish to the community", "发布到社区", "커뮤니티에 공개"],
  "editor.publishIntro": [
    "Community maps live in a public GitHub repository, and publishing is a pull request there, which takes a GitHub account. Nothing leaves the game until you open it.",
    "社区地图存放在一个公开的 GitHub 仓库中，发布就是在那里提交一个拉取请求，需要一个 GitHub 账号。在你打开它之前，什么都不会离开游戏。",
    "커뮤니티 지도는 공개 GitHub 저장소에 있고, 공개는 그곳에 풀 리퀘스트를 여는 것이라 GitHub 계정이 필요합니다. 열기 전까지는 게임 밖으로 아무것도 나가지 않습니다."
  ],
  "editor.publishFile": ["File", "文件", "파일"],
  "editor.publishStep1": ["The file goes on your clipboard.", "文件会复制到剪贴板。", "파일이 클립보드에 복사됩니다."],
  "editor.publishStep2": [
    "GitHub opens a new file in the registry with the name filled in (sign in if asked). If the contents are not already there, paste them.",
    "GitHub 会在地图仓库中打开一个新文件，文件名已填好（如有需要请先登录）。如果内容不在，请粘贴进去。",
    "GitHub에서 이름이 채워진 새 파일이 레지스트리에 열립니다(로그인을 요구하면 로그인하세요). 내용이 없으면 붙여넣으세요."
  ],
  "editor.publishStep3": [
    "Choose Propose new file, then Create pull request. Once it is merged, the map is in Community maps for everyone.",
    "选择 Propose new file，再选择 Create pull request。合并后，地图会出现在所有人的社区地图中。",
    "Propose new file를 누른 뒤 Create pull request를 누르세요. 병합되면 모두의 커뮤니티 지도에 실립니다."
  ],
  "editor.publishGo": ["Copy and open GitHub", "复制并打开 GitHub", "복사하고 GitHub 열기"],
  "editor.publishOpened": ["The file is on your clipboard; GitHub is open in a new tab.", "文件已复制到剪贴板；GitHub 已在新标签页中打开。", "파일이 클립보드에 복사되었고 GitHub가 새 탭에서 열렸습니다."],
  "editor.publishCopyFailed": ["Could not copy; the file was downloaded instead. Upload it on the page that opened.", "无法复制，已改为下载文件。请在打开的页面中上传它。", "복사하지 못해 파일을 대신 다운로드했습니다. 열린 페이지에서 업로드하세요."],
  "editor.publish.needName": ["Give the map a name of its own first.", "请先给地图起一个名字。", "먼저 지도에 이름을 지어 주세요."],
  "editor.publish.needDescription": ["Write a description first: a line or two on what kind of fight it is.", "请先写一段简介：一两句话说明这是怎样的战斗。", "먼저 설명을 써 주세요: 어떤 싸움인지 한두 줄."],
  "editor.publish.needSpawns": ["A map needs at least two spawn points to be published.", "地图至少需要两个出生点才能发布。", "공개하려면 시작 지점이 최소 두 개 필요합니다."],
  "editor.publish.blocked": ["Not ready to publish: {0}", "尚不能发布：{0}", "아직 공개할 수 없습니다: {0}"],
  "editor.warn.noSpawn": ["No spawn point yet; the map cannot be played.", "尚无出生点，地图无法游玩。", "시작 지점이 아직 없습니다. 이 지도는 플레이할 수 없습니다."],
  "editor.warn.spawnGround": [
    "Spawn {0} is not on open grass or sand: the headquarters needs it.",
    "出生点 {0} 不在开阔的草地或沙地上：总部需要这样的地面。",
    "시작 지점 {0}이(가) 탁 트인 풀밭이나 모래 위에 있지 않습니다. 사령부에는 그런 땅이 필요합니다."
  ],
  "editor.warn.cliffLevel": [
    "{0} cliff faces contradict the rest: the ground behind them did not come out a step above the ground before them.",
    "{0} 个悬崖面与其余部分矛盾：其后方的地面没有比前方高出一级。",
    "절벽면 {0}개가 나머지와 모순됩니다. 그 뒤의 땅이 앞의 땅보다 한 단계 높게 나오지 않았습니다."
  ],
  "editor.warn.cliffStub": [
    "{0} isolated cliff tiles; a lone cliff draws as a stub.",
    "{0} 个孤立的悬崖格，孤立悬崖会显示为残桩。",
    "고립된 절벽 타일 {0}개. 외따로 선 절벽은 그루터기로 그려집니다."
  ],
  "editor.warn.decorGround": [
    "{0} props stand on the wrong ground: water, cliffs, roads or obstacles, or a wreck out of deep water.",
    "{0} 个装饰物立在不合适的地面上：水面、悬崖、道路或障碍物，或者沉船不在深水中。",
    "장식물 {0}개가 잘못된 지면에 서 있습니다: 물, 절벽, 도로, 장애물이거나 난파선이 깊은 물 밖에 있습니다."
  ],
  "editor.warn.decorSpawn": [
    "A prop stands where spawn {0}'s headquarters goes; the headquarters is built over it.",
    "装饰物占据了出生点 {0} 的总部位置；总部会盖在它上面。",
    "시작 지점 {0}의 사령부 자리에 장식물이 있습니다. 사령부가 그 위에 지어집니다."
  ],
  "editor.warn.spawnsFull": ["A map seats at most {0} factions.", "一张地图最多容纳 {0} 个阵营。", "지도 하나에는 진영 {0}개까지 앉을 수 있습니다."],
  "editor.importFailed": ["Could not read that map: {0}", "无法读取该地图：{0}", "지도를 읽을 수 없습니다: {0}"],
  "editor.imported": ["Map loaded: {0}", "已载入地图：{0}", "지도를 불러왔습니다: {0}"],
  // ------------------------------------------------------------- misc gameplay
  "game.constructing": ["Constructing…", "建造中…", "건설 중…"],
  "game.upgrading": ["Upgrading…", "升级中…", "업그레이드 중…"],
  // ------------------------------------------------------------- voice
  // What Command says over the radio (core/voice.ts lists when). Recorded by
  // `pnpm voice` from these lines, so a change here is a re-take, not a retitle.
  "voice.match.start": [
    "Command online. Base established. The field is yours, commander.",
    "指挥系统上线。基地已建立。战场交给你了，指挥官。",
    "지휘부 온라인. 기지 구축 완료. 전장은 사령관님의 것입니다."
  ],
  "voice.objective.done": ["Objective complete.", "目标已完成。", "목표 완료."],
  "voice.objective.new": ["New objective received.", "收到新目标。", "새 목표 수신."],
  "voice.victory": ["Victory. The enemy has been broken. Well fought, commander.", "胜利。敌军已被击溃。打得漂亮，指挥官。", "승리. 적은 무너졌습니다. 훌륭한 싸움이었습니다, 사령관님."],
  "voice.defeat": ["Our forces have been overrun. Command is going dark.", "我军已被击溃。指挥系统即将关闭。", "아군이 유린당했습니다. 지휘부 통신을 끊습니다."],
  "voice.lastStand": [
    "Headquarters lost. No way to rebuild. Hold out, this is our last stand.",
    "总部已失守，无法重建。坚持住，这是最后一战。",
    "사령부 상실. 재건 불가. 버티십시오, 이것이 마지막 저항입니다."
  ],
  "voice.faction.enemyOut": ["Enemy faction eliminated.", "敌方阵营已被消灭。", "적 진영 제거."],
  "voice.faction.allyOut": ["An allied faction has fallen.", "友军阵营已陷落。", "아군 진영이 무너졌습니다."],
  "voice.built": ["Construction complete.", "建造完成。", "건설 완료."],
  "voice.unit.ready.1": ["Unit ready.", "单位就绪。", "유닛 준비 완료."],
  "voice.unit.ready.2": ["New unit rolling out.", "新单位已出厂。", "새 유닛 출고."],
  "voice.unit.ready.3": ["Reinforcements ready.", "增援就绪。", "증원 준비 완료."],
  "voice.upgrade.done": ["Upgrade complete.", "升级完成。", "업그레이드 완료."],
  "voice.power.low": ["Power shortage. Production is slowing.", "电力短缺，生产减速。", "전력 부족. 생산이 느려집니다."],
  "voice.power.restored": ["Power restored.", "电力已恢复。", "전력 복구."],
  "voice.metal.out": ["Out of metal. Work has stalled.", "金属耗尽，工程暂停。", "금속 소진. 작업이 멈췄습니다."],
  "voice.pop.cap": ["Unit cap reached.", "已达人口上限。", "유닛 상한 도달."],
  "voice.place.blocked": ["Cannot build there.", "无法在此建造。", "거기에는 지을 수 없습니다."],
  "voice.place.deposit": ["Extractors must stand on a deposit.", "采矿场必须建在矿脉上。", "채굴장은 광맥 위에 세워야 합니다."],
  "voice.place.metal": ["Insufficient metal.", "金属不足。", "금속이 부족합니다."],
  "voice.place.ok": ["Building.", "开始建造。", "건설 시작."],
  "voice.sold": ["Structure sold.", "建筑已出售。", "건물 판매 완료."],
  "voice.attack.base": ["Our base is under attack.", "我方基地遭到攻击。", "아군 기지가 공격받고 있습니다."],
  "voice.attack.hq": ["Headquarters under attack!", "总部遭到攻击！", "사령부가 공격받고 있습니다!"],
  "voice.attack.units": ["Our forces are under attack.", "我方部队遭到攻击。", "아군 부대가 공격받고 있습니다."],
  "voice.wave.incoming": ["Enemy attack wave inbound.", "敌军进攻波来袭。", "적 공격 파도 접근 중."],
  "voice.launch.detected": ["Sarsar launch detected. Impact in five seconds.", "检测到萨尔萨尔发射。五秒后落地。", "사르사르 발사 감지. 5초 후 착탄."],
  "voice.fleet.run": ["Enemy ships in the channel. Intercept them.", "敌舰进入水道。拦截它们。", "수로에 적함. 요격하십시오."],
  "voice.column.out": ["A column is on the highway. Cut it off.", "一支纵队上了公路。截住它。", "종대가 고속도로에 올랐습니다. 차단하십시오."],
  "voice.relief": ["Reinforcements have arrived.", "援军已到。", "증원이 도착했습니다."],
  "voice.checkpoint.fell": ["Checkpoint lost. The front has moved.", "检查点失守。前线已经移动。", "검문소 상실. 전선이 이동했습니다."],
  "voice.whistle": ["The assault begins. Hold the line.", "进攻开始。守住防线。", "공세 시작. 전선을 사수하십시오."],
  "voice.enemy.sighted": ["Enemy sighted.", "发现敌军。", "적 발견."],
  "voice.unit.lost": ["Unit lost.", "单位损失。", "유닛 손실."],
  "voice.structure.lost": ["Structure destroyed.", "建筑被摧毁。", "건물 파괴됨."],
  "voice.promoted": ["Unit promoted.", "单位晋升。", "유닛 진급."],
  "voice.nuke.ready": ["Nuclear warhead ready.", "核弹头已就绪。", "핵탄두 준비 완료."],
  "voice.nuke.launch": ["Warning. Nuclear launch detected.", "警告，检测到核弹发射。", "경고. 핵 발사 감지."],
  "voice.nuke.intercepted": ["Warhead intercepted.", "核弹头已被拦截。", "핵탄두 요격."],
  "voice.nuke.shotDown": ["Our warhead has been shot down.", "我方核弹头被击落。", "아군 핵탄두가 격추되었습니다."],
  "voice.nuke.impact": ["Nuclear detonation confirmed.", "核爆已确认。", "핵폭발 확인."],
  "voice.ack.move.1": ["Moving out.", "出发。", "이동합니다."],
  "voice.ack.move.2": ["On our way.", "正在前往。", "가는 중입니다."],
  "voice.ack.attack.1": ["Engaging.", "开始交战。", "교전 개시."],
  "voice.ack.attack.2": ["Target acquired.", "已锁定目标。", "표적 포착."],
  "voice.ack.fireMission": ["Fire mission received.", "收到火力任务。", "화력 임무 수신."],
  "voice.ack.hold": ["Holding position.", "原地待命。", "위치 사수."],
  "voice.ack.load": ["Loading up.", "正在装载。", "탑승 중."],
  "voice.ack.unload": ["Unloading.", "正在卸载。", "하차 중."],
  "voice.saved": ["Game saved.", "游戏已保存。", "게임 저장 완료."]
};
const LANGS = ["en", "zh", "ko"];
let lang = "en";
function langIndex(l) {
  return LANGS.indexOf(l);
}
function pick(entry, l = lang) {
  return entry[langIndex(l)] ?? entry[0] ?? "";
}
const ARMOR_MATRIX = {
  // rapid-fire small arms: shred soft skins, ping off armor plate
  mg: { light: 1.5, medium: 0.8, heavy: 0.4, structure: 0.35, ship: 0.5, air: 0.7 },
  // light autocannons: soft skins and light armor, poor against heavy plate
  autocannon: { light: 1.5, medium: 1, heavy: 0.5, structure: 0.5, ship: 0.7 },
  // tank guns: built for armored duels, over-penetrate soft targets
  cannon: { light: 0.6, medium: 1.3, heavy: 1, structure: 0.8, ship: 0.9 },
  // shaped-charge guided missiles: heavy armor only, wasted on light vehicles
  at: { light: 0.4, medium: 1.1, heavy: 1.8, structure: 0.7, ship: 1 },
  // high explosive: blast shreds soft targets and buildings, heavy plate shrugs
  he: { light: 1.2, medium: 1, heavy: 0.75, structure: 1.6, ship: 1 },
  // unguided rocket pods: vehicles of any weight, poor against bunkers
  rocket: { light: 1.4, medium: 1.4, heavy: 0.9, structure: 0.7, ship: 0.9 },
  // naval guns: general-purpose bombardment of shore and ship
  navgun: { light: 1, medium: 1, heavy: 0.75, structure: 0.75, ship: 1 },
  ashm: { ship: 1.6 },
  torpedo: { ship: 1.3, sub: 1.2 },
  aa: { air: 1 }
};
const w = (def) => ({ ...def, mult: { ...ARMOR_MATRIX[def.cls], ...def.mult } });
const BROADSIDE = 150 * Math.PI / 180;
const resolveWeapon = w;
const MG = w({
  id: "mg",
  cls: "mg",
  dmg: 7,
  reload: 0.4,
  range: 3.6,
  projectile: "bullet",
  speed: 500,
  targets: ["ground"],
  turret: true,
  muzzleOffset: 9.5,
  sound: "mg"
});
const DEFS = {
  // ================================================================= LAND
  //
  // Every hull carries a `body` — the capsule `separation()` parts units by,
  // measured off the drawn silhouette. Land is mostly a question of *size*
  // rather than shape: a tank is only about 1.6 times as long as it is wide,
  // so its capsule is a short segment inside a much bigger circle than the
  // one it replaced (`radius` was around 60% of the drawn width). Aircraft
  // are the exception and keep their circles: a wing's widest span is across
  // the heading, which is the one shape a capsule along it cannot say, and
  // nothing in the air jams anyway.
  engineer: {
    id: "engineer",
    kind: "unit",
    aliases: ["eng", "builder"],
    domain: "ground",
    tier: 1,
    cost: 200,
    buildTime: 8,
    pop: 1,
    power: -1,
    hp: 200,
    armor: "light",
    speed: 70,
    turnRate: 5,
    vision: 7,
    radius: 8,
    weapons: [],
    body: { r: 8, len: 12 },
    builds: ["extractor", "power", "factory", "airbase", "navyard", "mgturret", "cannonturret", "aaturret", "interceptor", "repairtower", "radar", "reactor", "nukesilo", "hq"],
    buildRate: 30,
    trail: "tread",
    sprite: "u.engineer"
  },
  buggy: {
    id: "buggy",
    kind: "unit",
    aliases: ["recon", "jeep"],
    domain: "ground",
    tier: 1,
    cost: 60,
    buildTime: 5,
    pop: 1,
    power: -1,
    hp: 150,
    armor: "light",
    speed: 120,
    turnRate: 6,
    vision: 10,
    radius: 7,
    body: { r: 10, len: 10 },
    weapons: [{ ...MG, sound: "mg" }],
    trail: "tire",
    sprite: "u.buggy"
  },
  ltank: {
    id: "ltank",
    kind: "unit",
    aliases: ["wolf", "light"],
    domain: "ground",
    tier: 1,
    cost: 120,
    buildTime: 9,
    pop: 1,
    power: -1,
    hp: 300,
    armor: "medium",
    speed: 75,
    turnRate: 4.5,
    vision: 7,
    radius: 9,
    fireOnMove: true,
    body: { r: 10, len: 10 },
    weapons: [w({
      id: "autocannon",
      cls: "autocannon",
      dmg: 18,
      reload: 0.55,
      range: 4,
      projectile: "bullet",
      speed: 520,
      targets: ["ground", "ship"],
      turret: true,
      muzzleOffset: 20.5,
      sound: "autocannon"
    })],
    trail: "tread",
    sprite: "u.ltank",
    turretSprite: "tur.ltank"
  },
  mbt: {
    id: "mbt",
    kind: "unit",
    aliases: ["bison", "tank"],
    domain: "ground",
    tier: 2,
    cost: 280,
    buildTime: 18,
    pop: 2,
    power: -2,
    hp: 620,
    armor: "heavy",
    speed: 60,
    turnRate: 3.6,
    vision: 7,
    radius: 10,
    fireOnMove: true,
    body: { r: 13, len: 12 },
    weapons: [w({
      id: "cannon",
      cls: "cannon",
      dmg: 60,
      reload: 1.8,
      range: 4.6,
      projectile: "shell",
      speed: 420,
      targets: ["ground", "ship"],
      turret: true,
      muzzleOffset: 35.7,
      splash: 12,
      sound: "cannon"
    })],
    trail: "tread",
    sprite: "u.mbt",
    turretSprite: "tur.mbt"
  },
  htank: {
    id: "htank",
    kind: "unit",
    aliases: ["mammoth", "heavy"],
    domain: "ground",
    tier: 3,
    cost: 900,
    buildTime: 45,
    pop: 4,
    power: -4,
    hp: 1900,
    armor: "heavy",
    speed: 42,
    turnRate: 2.6,
    vision: 7,
    radius: 12,
    requires: ["radar"],
    cargoWeight: 4,
    body: { r: 21, len: 8 },
    weapons: [w({
      id: "twincannon",
      cls: "cannon",
      dmg: 55,
      reload: 1.8,
      range: 5.2,
      projectile: "shell",
      speed: 420,
      targets: ["ground", "ship"],
      mult: { heavy: 1.1, structure: 1 },
      turret: true,
      muzzleOffset: 41.3,
      bores: 2,
      boreSpacing: 10.56,
      splash: 14,
      burst: 2,
      burstDelay: 0.18,
      sound: "cannon"
    })],
    trail: "tread",
    sprite: "u.htank",
    turretSprite: "tur.htank"
  },
  td: {
    id: "td",
    kind: "unit",
    aliases: ["viper", "at"],
    domain: "ground",
    tier: 2,
    cost: 320,
    buildTime: 20,
    pop: 2,
    power: -2,
    hp: 340,
    armor: "medium",
    speed: 65,
    turnRate: 4,
    vision: 8,
    radius: 9,
    fireOnMove: true,
    body: { r: 16, len: 9 },
    weapons: [w({
      id: "atgm",
      cls: "at",
      dmg: 120,
      reload: 2.8,
      range: 7,
      projectile: "missile",
      speed: 300,
      targets: ["ground", "ship"],
      turret: true,
      muzzleOffset: 12.6,
      homing: true,
      interceptable: true,
      sound: "missile"
    })],
    trail: "tire",
    sprite: "u.td",
    turretSprite: "tur.td"
  },
  flak: {
    id: "flak",
    kind: "unit",
    aliases: ["flaktrack", "aa"],
    domain: "ground",
    tier: 1,
    cost: 170,
    buildTime: 12,
    pop: 1,
    power: -1,
    hp: 280,
    armor: "medium",
    speed: 70,
    turnRate: 4.5,
    vision: 9,
    radius: 9,
    body: { r: 14, len: 5 },
    weapons: [w({
      id: "flakgun",
      cls: "aa",
      dmg: 24,
      reload: 0.7,
      range: 5.5,
      projectile: "flak",
      speed: 460,
      targets: ["air"],
      turret: true,
      muzzleOffset: 19.3,
      sound: "flak"
    })],
    trail: "tread",
    sprite: "u.flak",
    turretSprite: "tur.flak"
  },
  sam: {
    id: "sam",
    kind: "unit",
    aliases: ["hawk", "aalauncher"],
    domain: "ground",
    tier: 2,
    cost: 400,
    buildTime: 22,
    pop: 2,
    power: -2,
    hp: 240,
    armor: "medium",
    speed: 60,
    turnRate: 4,
    vision: 10,
    radius: 9,
    body: { r: 13, len: 11 },
    // the blast is air-only, like every splash: it catches the flight round
    // the target and nothing under it (sam.test.ts). 125 dmg at 10 tiles since
    // 2026-09-17 (130 at 11.25 before): level with the SAM Site now, and still
    // two tiles past the longest thing in the air, the Albatross's missile
    weapons: [w({
      id: "sam",
      cls: "aa",
      dmg: 125,
      reload: 2.5,
      range: 10,
      projectile: "missile",
      speed: 420,
      targets: ["air"],
      turret: true,
      muzzleOffset: 21.7,
      bores: 2,
      boreSpacing: 7.44,
      splash: 24,
      homing: true,
      sound: "missile"
    })],
    trail: "tire",
    sprite: "u.sam",
    turretSprite: "tur.sam"
  },
  arty: {
    id: "arty",
    kind: "unit",
    aliases: ["thunder", "howitzer"],
    domain: "ground",
    tier: 2,
    cost: 420,
    buildTime: 24,
    pop: 2,
    power: -2,
    hp: 220,
    armor: "light",
    speed: 48,
    turnRate: 3,
    vision: 8,
    radius: 10,
    body: { r: 18, len: 17 },
    weapons: [w({
      id: "howitzer",
      cls: "he",
      dmg: 110,
      reload: 5,
      range: 11,
      minRange: 3,
      projectile: "shell",
      speed: 260,
      targets: ["ground", "ship"],
      muzzleOffset: 17,
      splash: 48,
      arc: true,
      spread: 26,
      sound: "arty"
    })],
    trail: "tread",
    sprite: "u.arty"
  },
  mlrs: {
    id: "mlrs",
    kind: "unit",
    aliases: ["tempest", "rockets"],
    domain: "ground",
    tier: 3,
    cost: 760,
    buildTime: 40,
    pop: 3,
    power: -3,
    hp: 380,
    armor: "medium",
    speed: 45,
    turnRate: 2.8,
    vision: 8,
    radius: 11,
    requires: ["radar"],
    cargoWeight: 4,
    body: { r: 20, len: 7 },
    weapons: [w({
      id: "rockets",
      cls: "he",
      dmg: 54,
      reload: 8,
      range: 13,
      minRange: 4,
      projectile: "rocket",
      speed: 300,
      targets: ["ground", "ship"],
      muzzleOffset: 23.4,
      splash: 48,
      arc: true,
      burst: 8,
      burstDelay: 0.16,
      spread: 36,
      turret: true,
      sound: "rocket"
    })],
    trail: "tread",
    sprite: "u.mlrs",
    turretSprite: "tur.mlrs"
  },
  /**
   * The radar station's circle on wheels — smaller (16 tiles to its 24) but
   * the same kind of circle: it sees by radio (`radar`), so neither the night
   * nor the rain shrinks it and a stealth aircraft shows inside `detect`, and
   * every gun standing in it fires at its full reach. That is the unit: a
   * Tempest sees 8 tiles and throws 13, and beside an Owl the other five are
   * a siege that sees. It pays with everything else — no gun, thin plate,
   * and slow, so it is where the column is and not out ahead of it, and
   * killing it is the answer to the column. Level 2 factory and a radar;
   * the AI never fields it.
   */
  radarcar: {
    id: "radarcar",
    kind: "unit",
    aliases: ["owl", "sensor"],
    domain: "ground",
    tier: 3,
    cost: 480,
    buildTime: 26,
    pop: 2,
    power: -2,
    hp: 260,
    armor: "light",
    speed: 32,
    turnRate: 2.6,
    vision: 16,
    radius: 10,
    requires: ["radar"],
    radar: true,
    detect: 6,
    body: { r: 16, len: 10 },
    weapons: [],
    trail: "tread",
    sprite: "u.radarcar",
    turretSprite: "tur.radarcar",
    turretSpins: true
  },
  /**
   * Level 3 of the war factory. The Salamander is the siege piece for the
   * turtle Tier 3 builds — Bastions behind Interrupters, where the Tempest's
   * rockets are shot out of the sky: its round is a *shell*, which point
   * defence never touches, with a blast two tiles across that hits everything
   * in it at full value. The blast does not know whose side it is on
   * (`friendlyFire`): the Mammoths escorting it burn if they stand in the
   * footprint, and its minimum range is what keeps it from catching itself.
   * It reaches 6.5 tiles (4.5 until 2026-09-17: nobody built the Interrupter
   * turtle it was made for, and in the sieges people did fight it walked into
   * Cannon Turret range a tile and a half before it could answer, so nobody
   * built it either), past the Cannon Turret, the Gatling and the MG turret
   * and still under the Bastion, the HQ gun, the Viper and every artillery
   * piece, so it earns its price against clusters and only with something in
   * front of it (salamander.test.ts).
   */
  salamander: {
    id: "salamander",
    kind: "unit",
    aliases: ["sala", "mortar"],
    domain: "ground",
    tier: 3,
    cost: 800,
    buildTime: 42,
    pop: 3,
    power: -3,
    hp: 850,
    armor: "heavy",
    speed: 45,
    turnRate: 2.8,
    vision: 7,
    radius: 11,
    requires: ["radar"],
    body: { r: 19, len: 7 },
    weapons: [w({
      id: "thermobaric",
      cls: "he",
      dmg: 260,
      reload: 4,
      range: 6.5,
      minRange: 3,
      projectile: "shell",
      speed: 240,
      targets: ["ground", "ship"],
      mult: { heavy: 0.6 },
      // 72 and not the 77 the splash pass would give it: the nearest its own
      // round can land, less its hull, was 74 px away at the 4.5 tiles it
      // launched with, and is 78 now the spread scales over a longer reach
      // (`salamander.test.ts`)
      turret: true,
      muzzleOffset: 16,
      splash: 72,
      arc: true,
      spread: 16,
      friendlyFire: true,
      sound: "arty"
    })],
    trail: "tread",
    sprite: "u.salamander",
    turretSprite: "tur.salamander",
    // the ring its sheet paints, forward of the hull's centre. A body
    // whose turret *fires* declares it here rather than in the sprite
    // manifest: the manifest moves the drawing and the sim cannot read a
    // sheet, so a ring named only there put the round out of the barrel.
    turretMounts: [{ x: 0, y: -1 }]
  },
  /**
   * Point defence on tracks: the Interrupter's magazine on a hull and no gun
   * at all. Weaker than the tower on purpose — six rounds and one back every
   * 1.5 s against the tower's eight and one every 0.75 s — so one Bulwark
   * thins a Tempest's salvo (most of it down, never all of it: a rocket is
   * inside its ring for under a second, and the reload cannot make up two)
   * and two blank it; it never turns a bad fight into a good one alone
   * (bulwark.test.ts). Shells still land.
   */
  bulwark: {
    id: "bulwark",
    kind: "unit",
    aliases: ["interrupter", "pd"],
    domain: "ground",
    tier: 3,
    cost: 650,
    buildTime: 32,
    pop: 2,
    power: -2,
    hp: 520,
    armor: "medium",
    speed: 60,
    turnRate: 4,
    vision: 9,
    radius: 10,
    requires: ["radar"],
    body: { r: 9, len: 9 },
    weapons: [],
    interceptRange: 5,
    interceptMag: 6,
    interceptReload: 1.5,
    interceptMuzzleOffset: 12,
    trail: "tread",
    sprite: "u.bulwark",
    turretSprite: "tur.bulwark"
  },
  /**
   * The fire curtain, and the glass cannon that lays it. The Drake's weapon
   * does not fire, it *pours*: a glob of burning fuel every tick for a full
   * second, sprayed across an arc and falling short of the aim by up to half,
   * so what leaves the nozzle is one continuous tongue of flame — and the
   * ground it washes over keeps burning for eight seconds afterwards. It is
   * the only unit that denies ground rather than killing what stands on it,
   * and the only weapon whose damage goes on after the trigger is let go.
   *
   * That second is the whole unit, and everything else about it is what the
   * second costs:
   *
   * - **A cooldown, not a reload.** The bottles come back up to pressure over
   *   2.6 s, so for two thirds of every engagement the Drake is a tank with
   *   no gun standing three tiles from something that still has one. What it
   *   set alight is what fights while it waits.
   * - **A light tank's reach.** 4 tiles (3.4 until 2026-09-16, a quarter
   *   more since, floored): level with the Wolf, a hair past the Buggy's
   *   machine gun, and out-ranged by every heavier tank, every turret and
   *   every artillery piece there is, so it still has to be walked in behind
   *   something that can take the crossing.
   * - **Thin skin over a full fuel tank.** 260 hit points of *medium* armour
   *   at Tier 2 — less than the Tier-1 Wolf it is built to burn. A Bison's
   *   gun opens it in six seconds and it rarely sees a second cooldown out.
   *   It is priced to be spent — cheaper than the Viper it eats, though
   *   300 metal since 2026-09-19 (280 before) — and it is meant to be.
   * - **Nothing for aircraft**, and a hull in the water does not burn.
   * - **The fire is nobody's friend.** A curtain a column could walk through
   *   unharmed would not be a curtain, so `force` rides on every patch and
   *   the Drake's own side burns in it exactly as the enemy does. The Drake
   *   itself burns at half (`burnMult`): it is built to work in its own
   *   fire, so driving forward into what it just laid costs it, but not
   *   what it costs the tanks beside it.
   *
   * What that buys is a raider, not a line unit. Against equal metal it eats
   * artillery, air defence, engineers' work and swarms — the things that sit
   * still or cannot answer at four tiles — and it is beaten by anything with
   * a tank gun and the reach to use it: two Bisons take four Drakes for a
   * quarter of their price. The AI does not field it, for the reason it does
   * not field the Salamander: keeping a line out of one's own fire is micro,
   * and it has none.
   *
   * Level 2 of the war factory, no radar, since 2026-09-17 (the Arsenal's
   * third unit before, behind the radar): a raider's prey — howitzers, air
   * defence, an engineer's camp — is a minute-5 thing, and by the time an
   * Arsenal stood it met Cannon Turrets and the HQ gun instead, so nobody
   * built one. The Tempest went the other way, to the Arsenal.
   */
  drake: {
    id: "drake",
    kind: "unit",
    aliases: ["flametank", "flamer"],
    domain: "ground",
    tier: 2,
    cost: 300,
    buildTime: 16,
    pop: 2,
    power: -2,
    hp: 260,
    armor: "medium",
    speed: 84,
    turnRate: 4.8,
    vision: 6,
    radius: 10,
    fireOnMove: true,
    burnMult: 0.5,
    body: { r: 15, len: 14 },
    weapons: [w({
      // `burst` is not a salvo here: a glob every tick for a full second, and
      // then the tank is empty. The reload is a **cooldown** — pressure back
      // in the bottles — and it is more than twice the pour, so two thirds of
      // the Drake's life is spent at four tiles from something it cannot
      // touch. The fire it left is what fights for it meanwhile. 7.8 a glob
      // since 2026-09-19 (9 before): 90 dps over the cycle, down from 104.
      id: "flamejet",
      cls: "he",
      dmg: 7.8,
      reload: 2.6,
      range: 4,
      projectile: "flame",
      speed: 260,
      targets: ["ground", "ship"],
      mult: { light: 1.5, medium: 1.1, heavy: 0.45, ship: 0.5, structure: 1.3 },
      turret: true,
      muzzleOffset: 18.5,
      splash: 38,
      burst: 30,
      burstDelay: 0.03,
      fan: 0.22,
      burn: 14,
      burnLife: 8,
      sound: "flame"
    })],
    trail: "tread",
    sprite: "u.drake",
    turretSprite: "tur.drake",
    turretMounts: [{ x: 0, y: -5 }]
  },
  // ================================================================== SEA
  //
  // Every hull carries a `body`: the capsule `separation()` parts ships by,
  // measured off the drawn silhouette. A circle cannot say "long and thin" —
  // the battleship's was 1.8x its own beam and 41% of its length, so a line
  // of them telescoped bow-to-stern while holding each other twice too far
  // apart abeam. `radius` is untouched and still the combat yardstick.
  gunboat: {
    id: "gunboat",
    kind: "unit",
    aliases: ["patrol", "boat"],
    domain: "ship",
    tier: 1,
    cost: 130,
    buildTime: 10,
    pop: 1,
    power: -1,
    hp: 260,
    armor: "ship",
    speed: 90,
    turnRate: 3.4,
    vision: 9,
    radius: 9,
    body: { r: 6, len: 20 },
    weapons: [w({
      id: "autocannon",
      cls: "autocannon",
      dmg: 16,
      reload: 0.5,
      range: 4.2,
      projectile: "bullet",
      speed: 520,
      targets: ["ground", "ship"],
      mult: { ship: 0.8 },
      turret: true,
      muzzleOffset: 10.4,
      sound: "autocannon"
    })],
    trail: "wake",
    sprite: "u.gunboat",
    turretSprite: "tur.gunboat",
    turretMounts: [{ x: 0, y: -2 }]
  },
  mboat: {
    id: "mboat",
    kind: "unit",
    aliases: ["missileboat", "corvette"],
    domain: "ship",
    tier: 1,
    cost: 280,
    buildTime: 18,
    pop: 2,
    power: -2,
    hp: 300,
    armor: "ship",
    speed: 80,
    turnRate: 3,
    vision: 9,
    radius: 10,
    body: { r: 8, len: 29 },
    weapons: [w({
      id: "ashm",
      cls: "ashm",
      dmg: 170,
      reload: 3.5,
      range: 8,
      projectile: "missile",
      speed: 320,
      targets: ["ship"],
      homing: true,
      turret: true,
      sound: "missile"
    })],
    trail: "wake",
    sprite: "u.mboat"
  },
  frigate: {
    id: "frigate",
    kind: "unit",
    aliases: ["aegis", "escort"],
    domain: "ship",
    tier: 2,
    cost: 600,
    buildTime: 30,
    pop: 2,
    power: -2,
    hp: 900,
    armor: "ship",
    speed: 65,
    turnRate: 2.6,
    vision: 10,
    radius: 13,
    body: { r: 14, len: 45 },
    weapons: [
      w({
        id: "navgun",
        cls: "navgun",
        dmg: 40,
        reload: 1.5,
        range: 5.5,
        projectile: "shell",
        speed: 420,
        targets: ["ground", "ship"],
        turret: true,
        muzzleOffset: 15.75,
        splash: 10,
        sound: "cannon"
      }),
      w({
        id: "navsam",
        cls: "aa",
        dmg: 80,
        reload: 2,
        range: 8.5,
        projectile: "missile",
        speed: 430,
        targets: ["air"],
        homing: true,
        sound: "missile"
      })
    ],
    trail: "wake",
    sprite: "u.frigate",
    turretSprite: "tur.frigate"
  },
  destroyer: {
    id: "destroyer",
    kind: "unit",
    aliases: ["orca", "dd"],
    domain: "ship",
    tier: 2,
    cost: 700,
    buildTime: 34,
    pop: 3,
    power: -3,
    hp: 1300,
    armor: "ship",
    speed: 60,
    turnRate: 2.4,
    vision: 10,
    sonar: 9,
    radius: 15,
    body: { r: 16, len: 42 },
    weapons: [
      w({
        id: "navgun",
        cls: "navgun",
        dmg: 70,
        reload: 1.8,
        range: 6.2,
        projectile: "shell",
        speed: 420,
        targets: ["ground", "ship"],
        mult: { medium: 1.1, heavy: 0.8, structure: 0.8 },
        turret: true,
        muzzleOffset: 22.5,
        splash: 12,
        sound: "cannon"
      }),
      w({
        // anti-submarine torpedoes: out-range the sub's own, bite hardest below
        id: "torpedo",
        cls: "torpedo",
        dmg: 160,
        reload: 3.2,
        range: 7,
        projectile: "torpedo",
        speed: 150,
        targets: ["ship", "sub"],
        mult: { ship: 1, sub: 1.9 },
        homing: true,
        sound: "torpedo"
      })
    ],
    trail: "wake",
    sprite: "u.destroyer",
    turretSprite: "tur.destroyer",
    turretMounts: [{ x: 0, y: -5 }]
  },
  /**
   * The Barracuda is the second launcher: with a radar and a reactor standing
   * it fabricates one warhead of its own, at the silo's price and pace, and
   * fires it from wherever it is lying — the strike nobody can see coming.
   */
  sub: {
    id: "sub",
    kind: "unit",
    aliases: ["barracuda", "submarine"],
    domain: "ship",
    tier: 2,
    cost: 480,
    buildTime: 26,
    pop: 2,
    power: -2,
    hp: 550,
    armor: "sub",
    speed: 55,
    turnRate: 2.6,
    vision: 8,
    sonar: 8,
    radius: 12,
    underwater: true,
    body: { r: 7, len: 38 },
    nukeCapacity: 1,
    nukeCost: 2500,
    nukeTime: 180,
    weapons: [w({
      id: "torpedo",
      cls: "torpedo",
      dmg: 160,
      reload: 3.5,
      range: 6.5,
      projectile: "torpedo",
      speed: 150,
      targets: ["ship", "sub"],
      homing: true,
      sound: "torpedo"
    })],
    sprite: "u.sub"
  },
  /**
   * The Sovereign: three turrets on a long, narrow hull rather than one
   * enormous mounting amidships.
   *
   * `turretMounts` is the whole of it — A and B stepped up over the bow, X
   * abaft the superstructure — and the three-round burst it always fired now
   * walks them, so a salvo is three guns speaking a quarter of a second
   * apart. Each trains only within its own arc, which is why X sits round at
   * its stop while the forward pair are on something over the bow. Nothing
   * about the ship's numbers moved with the mounts: the reach and the shell
   * are what they were, and `radius` is still the collision circle rather
   * than the beam, so the fleet packs and closes exactly as it did. The
   * reload went 5 → 7 s afterwards, on its own: a salvo every seven seconds
   * is the pace of a ship that levels a base rather than one that fights a
   * fleet, and at 5 it was doing both.
   */
  btlship: {
    id: "btlship",
    kind: "unit",
    aliases: ["sovereign", "battleship"],
    domain: "ship",
    tier: 3,
    cost: 1700,
    buildTime: 70,
    pop: 5,
    power: -5,
    hp: 2500,
    armor: "ship",
    speed: 45,
    turnRate: 1.6,
    vision: 10,
    radius: 20,
    requires: ["radar"],
    // the hull is drawn at its own display scale (core/metrics.ts), and the
    // capsule is measured off the drawing at that scale
    body: { r: 11, len: 96 },
    weapons: [w({
      id: "bigguns",
      cls: "he",
      dmg: 120,
      reload: 7,
      range: 14,
      minRange: 2.5,
      projectile: "shell",
      speed: 300,
      targets: ["ground", "ship"],
      mult: { heavy: 1, ship: 1.2 },
      // measured from the ring the gun turns on, not the hull's centre, at the
      // display scale the gun is drawn at
      turret: true,
      muzzleOffset: 16.8,
      bores: 2,
      boreSpacing: 3.3,
      splash: 54,
      arc: true,
      burst: 3,
      burstDelay: 0.25,
      spread: 40,
      sound: "arty"
    })],
    trail: "wake",
    sprite: "u.btlship",
    turretSprite: "tur.btlship",
    // measured off the barbettes painted on `u.btlship`, which the code-drawn
    // hull in gfx/art/ships.ts puts at the same three rows
    turretMounts: [
      { x: 0, y: -17, arc: BROADSIDE },
      // A, over the bow
      { x: 0, y: -11, arc: BROADSIDE },
      // B, superfiring behind A
      { x: 0, y: 14, rest: Math.PI, arc: BROADSIDE }
      // X, abaft the bridge
    ]
  },
  seatrans: {
    id: "seatrans",
    kind: "unit",
    aliases: ["landingcraft", "lst"],
    domain: "ship",
    tier: 1,
    cost: 220,
    buildTime: 14,
    pop: 1,
    power: -1,
    hp: 500,
    armor: "ship",
    speed: 70,
    turnRate: 2.8,
    vision: 8,
    radius: 13,
    transportCap: 4,
    // a ramp against a beach has more give than a hoist: a tenth more reach
    // to board it, collect with it, and come to the shore it unloads on
    cargoReach: 1.1,
    body: { r: 10, len: 29 },
    weapons: [],
    trail: "wake",
    sprite: "u.seatrans"
  },
  /**
   * The engineer that works from the water. It builds and mends the same
   * things an engineer does, but only what stands within its arms of the
   * sea — which on a naval map is the ore: two thirds of Saltbone Reach's
   * deposits are on islets no engineer can drive to. Its `reach` is longer
   * than the engineer's, because the hull stops at the shoreline and the
   * site stands on the beach beyond it; long enough for one tile of beach
   * between the two, not for a deposit inland. Unarmed, and a builder for
   * `canRebuild` like any other pair of hands.
   */
  engboat: {
    id: "engboat",
    kind: "unit",
    aliases: ["workboat", "seabuilder"],
    domain: "ship",
    tier: 1,
    cost: 200,
    buildTime: 10,
    pop: 1,
    power: -1,
    hp: 260,
    armor: "ship",
    speed: 75,
    turnRate: 3.2,
    vision: 7,
    radius: 9,
    weapons: [],
    body: { r: 6, len: 18 },
    builds: ["extractor", "power", "factory", "airbase", "navyard", "mgturret", "cannonturret", "aaturret", "interceptor", "repairtower", "radar", "reactor", "nukesilo", "hq"],
    buildRate: 30,
    reach: 64,
    trail: "wake",
    sprite: "u.engboat"
  },
  /**
   * Level 3 of the naval yard. The Kraken shells the shore from under the
   * water — two cruise missiles every six seconds at ground targets only, no
   * torpedo, nothing to fight a ship with. Vision 6 against range 13: it
   * shoots at what the team can see, or force-fires at a point the player
   * remembers. Every missile is `interceptable`, so an Interrupter over the
   * target blanks it the way it blanks a Tempest (kraken.test.ts).
   *
   * Priced as the naval Tempest with a stealth premium since 2026-09-17
   * (1500 · 60 s · pop 4 · range 12 before): sold beside the Sovereign at 88%
   * of its price, with a quarter of its hull and two tiles less reach, it was
   * never bought.
   */
  kraken: {
    id: "kraken",
    kind: "unit",
    aliases: ["cruisesub", "missilesub"],
    domain: "ship",
    tier: 3,
    cost: 1e3,
    buildTime: 45,
    pop: 3,
    power: -3,
    hp: 620,
    armor: "sub",
    speed: 50,
    turnRate: 2.4,
    vision: 6,
    sonar: 6,
    radius: 13,
    underwater: true,
    requires: ["radar"],
    body: { r: 11, len: 44 },
    weapons: [w({
      id: "cruise",
      cls: "he",
      dmg: 150,
      reload: 6,
      range: 13,
      minRange: 3,
      projectile: "missile",
      speed: 260,
      targets: ["ground"],
      homing: true,
      interceptable: true,
      splash: 43,
      burst: 2,
      burstDelay: 0.6,
      sound: "missile"
    })],
    sprite: "u.kraken"
  },
  /**
   * A transport that nobody without sonar can see: a hold of 4 — one
   * Mammoth, two Vipers, four engineers. The beach is the only door: boarding
   * is walking to it, and a ship unloads only onto the tile beside its hull,
   * so it has to nose right up to a shore. Unarmed, and its cargo dies with
   * it (moray.test.ts).
   */
  moray: {
    id: "moray",
    kind: "unit",
    aliases: ["spysub", "infiltrator"],
    domain: "ship",
    tier: 3,
    cost: 700,
    buildTime: 34,
    pop: 2,
    power: -2,
    hp: 450,
    armor: "sub",
    speed: 62,
    turnRate: 2.8,
    vision: 6,
    sonar: 5,
    radius: 12,
    underwater: true,
    transportCap: 4,
    requires: ["radar"],
    // the landing craft's give at the beach, for the same reason
    cargoReach: 1.1,
    body: { r: 8, len: 33 },
    weapons: [],
    sprite: "u.moray"
  },
  // ================================================================== AIR
  drone: {
    id: "drone",
    kind: "unit",
    aliases: ["scout", "uav"],
    domain: "air",
    tier: 1,
    cost: 40,
    buildTime: 4,
    pop: 1,
    power: -1,
    hp: 90,
    armor: "air",
    // a fixed wing: it cannot hover, so it loiters the way every other plane
    // does, circling the spot it was sent to
    speed: 130,
    turnRate: 3.2,
    vision: 12,
    radius: 8,
    altitude: 12,
    weapons: [],
    sprite: "u.drone"
  },
  fighter: {
    id: "fighter",
    kind: "unit",
    aliases: ["falcon", "cap"],
    domain: "air",
    tier: 2,
    cost: 380,
    buildTime: 22,
    pop: 2,
    power: -2,
    hp: 320,
    armor: "air",
    speed: 190,
    turnRate: 2.8,
    vision: 11,
    radius: 9,
    altitude: 14,
    weapons: [w({
      id: "aam",
      cls: "aa",
      dmg: 100,
      reload: 2.2,
      range: 6,
      projectile: "missile",
      speed: 480,
      targets: ["air"],
      homing: true,
      sound: "missile"
    })],
    sprite: "u.fighter"
  },
  heli: {
    id: "heli",
    kind: "unit",
    aliases: ["cobra", "attackheli"],
    domain: "air",
    tier: 1,
    cost: 340,
    buildTime: 20,
    pop: 2,
    power: -2,
    hp: 300,
    armor: "air",
    speed: 95,
    turnRate: 3.4,
    vision: 9,
    radius: 9,
    altitude: 11,
    hovers: true,
    weapons: [w({
      // a raider as much as a tank hunter: keeps some bite against soft targets
      id: "atgm",
      cls: "at",
      dmg: 90,
      reload: 2.6,
      range: 5.5,
      projectile: "missile",
      speed: 300,
      targets: ["ground", "ship"],
      mult: { light: 0.6, structure: 0.8 },
      homing: true,
      sound: "missile"
    })],
    sprite: "u.heli"
  },
  jet: {
    id: "jet",
    kind: "unit",
    aliases: ["thunderbolt", "strikejet"],
    domain: "air",
    tier: 2,
    cost: 400,
    buildTime: 25,
    pop: 2,
    power: -2,
    hp: 360,
    armor: "air",
    speed: 160,
    turnRate: 2.4,
    vision: 10,
    radius: 10,
    altitude: 14,
    weapons: [w({
      id: "rockets",
      cls: "rocket",
      dmg: 24,
      reload: 2.4,
      range: 4.5,
      projectile: "rocket",
      speed: 340,
      targets: ["ground", "ship"],
      burst: 4,
      burstDelay: 0.1,
      splash: 22,
      spread: 18,
      sound: "rocket"
    })],
    sprite: "u.jet"
  },
  mjet: {
    id: "mjet",
    kind: "unit",
    aliases: ["albatross", "antiship"],
    domain: "air",
    tier: 2,
    cost: 520,
    buildTime: 28,
    pop: 2,
    power: -2,
    hp: 380,
    armor: "air",
    speed: 150,
    turnRate: 2.2,
    vision: 11,
    radius: 10,
    altitude: 14,
    weapons: [w({
      id: "ashm",
      cls: "ashm",
      dmg: 170,
      reload: 4.5,
      range: 8,
      projectile: "missile",
      speed: 340,
      targets: ["ship"],
      mult: { ship: 1.7 },
      homing: true,
      sound: "missile"
    })],
    sprite: "u.mjet"
  },
  bomber: {
    id: "bomber",
    kind: "unit",
    aliases: ["vulture", "levelbomber"],
    domain: "air",
    tier: 2,
    // siege from the air is the strongest thing an airbase makes, and it is
    // priced and armoured so a SAM site is a real answer to it
    cost: 1e3,
    buildTime: 40,
    pop: 3,
    power: -3,
    hp: 560,
    armor: "air",
    speed: 110,
    turnRate: 1.8,
    vision: 9,
    radius: 12,
    altitude: 16,
    weapons: [w({
      // heavy bombs: nothing on the ground shrugs them off
      id: "bombs",
      cls: "he",
      dmg: 70,
      reload: 6,
      range: 2.4,
      projectile: "bomb",
      speed: 120,
      targets: ["ground", "ship"],
      mult: { medium: 1.2, heavy: 1, ship: 1.1 },
      burst: 5,
      burstDelay: 0.14,
      splash: 42,
      spread: 20,
      sound: "bomb"
    })],
    sprite: "u.bomber"
  },
  theli: {
    id: "theli",
    kind: "unit",
    aliases: ["pelican", "transportheli"],
    domain: "air",
    tier: 1,
    cost: 280,
    buildTime: 16,
    pop: 1,
    power: -1,
    hp: 380,
    armor: "air",
    speed: 100,
    turnRate: 3,
    vision: 8,
    radius: 11,
    altitude: 12,
    transportCap: 2,
    hovers: true,
    weapons: [],
    sprite: "u.theli"
  },
  c47: {
    id: "c47",
    kind: "unit",
    aliases: ["skytrain", "dakota"],
    domain: "air",
    tier: 2,
    cost: 650,
    buildTime: 34,
    pop: 3,
    power: -3,
    hp: 720,
    armor: "air",
    speed: 120,
    turnRate: 1.9,
    vision: 9,
    radius: 15,
    altitude: 16,
    transportCap: 5,
    landsForCargo: true,
    weapons: [],
    sprite: "u.c47"
  },
  gunship: {
    id: "gunship",
    kind: "unit",
    aliases: ["spectre", "ac130"],
    domain: "air",
    tier: 3,
    cost: 1600,
    buildTime: 60,
    pop: 5,
    power: -5,
    hp: 1500,
    armor: "air",
    speed: 90,
    turnRate: 1.6,
    vision: 10,
    radius: 12,
    altitude: 16,
    requires: ["radar"],
    weapons: [w({
      // the T3 generalist: pays for a cannon that has no bad matchup
      id: "gatcannon",
      cls: "autocannon",
      dmg: 35,
      reload: 0.45,
      range: 5.5,
      projectile: "shell",
      speed: 480,
      targets: ["ground", "ship"],
      mult: { light: 1.2, medium: 1.2, heavy: 1.1, structure: 1, ship: 1 },
      // side-firing: the gunship shoots out of its orbit instead of nose-on
      turret: true,
      splash: 10,
      sound: "autocannon"
    })],
    sprite: "u.gunship"
  },
  /**
   * Level 3 of the airbase. The Wraith carries two heavy bombs instead of
   * the Vulture's five: one pass puts 832 onto a building, which is a Radar
   * Station, a SAM Site or an Interrupter in a single run. Its `stealth` is
   * a range: an enemy sees it only within 4 tiles of one of their units or
   * buildings, or 8 of their radar (`detect`), so AA elsewhere in the base
   * never joins in and whatever stands at the target gets its shots late.
   * The counters are the cheap ones — flak and gatlings beside the things
   * worth keeping — and a Falcon patrol over them (wraith.test.ts).
   */
  wraith: {
    id: "wraith",
    kind: "unit",
    aliases: ["stealth", "stealthbomber"],
    domain: "air",
    tier: 3,
    cost: 1400,
    buildTime: 55,
    pop: 4,
    power: -4,
    hp: 450,
    armor: "air",
    speed: 135,
    turnRate: 2,
    vision: 9,
    radius: 11,
    altitude: 16,
    stealth: 4,
    requires: ["radar"],
    weapons: [w({
      id: "heavybombs",
      cls: "he",
      dmg: 260,
      reload: 8,
      range: 2.4,
      projectile: "bomb",
      speed: 120,
      targets: ["ground", "ship"],
      mult: { light: 1, medium: 0.9, heavy: 0.6 },
      burst: 2,
      burstDelay: 0.2,
      splash: 43,
      spread: 10,
      sound: "bomb"
    })],
    sprite: "u.wraith"
  },
  /**
   * The first aircraft that can find a submarine: dipping sonar and homing
   * torpedoes that bite hardest below. A torpedo dropped over land fizzles on
   * the spot — the engine does that to every torpedo — so the Cormorant
   * attacks from over the sea, and its reach (5) is inside the Aegis
   * frigate's missiles (8.5), so a screened fleet is closed to it
   * (cormorant.test.ts).
   */
  cormorant: {
    id: "cormorant",
    kind: "unit",
    aliases: ["asw", "aswheli"],
    domain: "air",
    tier: 3,
    cost: 700,
    buildTime: 34,
    pop: 2,
    power: -2,
    hp: 340,
    armor: "air",
    // the longest sonar in the game — a tile past the Orca's, so it is the
    // one thing that hears a submarine before the submarine's escort hears it
    speed: 92,
    turnRate: 3.2,
    vision: 9,
    sonar: 10,
    radius: 10,
    altitude: 11,
    hovers: true,
    requires: ["radar"],
    weapons: [w({
      id: "airtorpedo",
      cls: "torpedo",
      dmg: 140,
      reload: 4,
      range: 5,
      projectile: "torpedo",
      speed: 150,
      targets: ["ship", "sub"],
      mult: { ship: 0.9, sub: 1.8 },
      homing: true,
      sound: "torpedo"
    })],
    sprite: "u.cormorant"
  },
  /**
   * The nuclear warhead in flight. Not built at any factory: a silo or an
   * armed submarine launches one, and from then on it is an aircraft with no
   * gun and no orders, flying a straight line at the point it was sent to
   * (`Game.tickWarhead`). Two things may shoot it down: a *veteran* — a unit
   * of rank 2 or better whose weapons reach the sky (`canEngage` in
   * combat.ts, `WARHEAD_MIN_RANK`) — and the SAM Site, the one emplacement a
   * def flag clears for the job (`antiWarhead`). A green unit and every other
   * building cannot lock on to it, fire at it or scratch it with a stray
   * burst. The hit points are the balance among those who can: one veteran
   * Hawk under its path is not enough and a row of them is, and the same goes
   * for a pair of SAM Sites under the line versus a cluster over the target
   * (nuke.test.ts pins all of it). They move with the SAM Site's damage —
   * raise its missile and this goes up in step, or one site alone gets the
   * vote the pair was meant to have.
   * Its `requires` is what every launcher needs to fabricate or fire one.
   */
  warhead: {
    id: "warhead",
    kind: "unit",
    aliases: ["nuke", "nuclear"],
    domain: "air",
    tier: 3,
    warhead: true,
    cost: 0,
    buildTime: 0,
    pop: 0,
    hp: 700,
    armor: "air",
    speed: 96,
    turnRate: 0,
    vision: 0,
    radius: 7,
    altitude: 36,
    weapons: [],
    requires: ["radar", "reactor"],
    sprite: "u.warhead"
  },
  // ============================================================ BUILDINGS
  /**
   * The one footprint that is not square: the sheet's ground is four tiles
   * wide and three deep, and a fourth row only put a strip of walkable
   * ground under the south wall. `spawnFootprint` (game/state.ts) settles
   * the odd height against the spawn point.
   */
  /**
   * The headquarters defends itself, the way a tower does in a lane game:
   * a twin heavy machine gun on the roof ring where the helipad was, a
   * shade stronger than the Gatling (79 dps to its 71) and reaching two
   * tiles past it (7 tiles, measured from a centre that is already two
   * tiles from the wall, so five past it), so a buggy, a light tank, a
   * gunship or a machine-gun turret that comes for it pays while a howitzer
   * or a launcher standing off still outranges it. It was the Gatling's 5
   * until the recorded matches of 15 September 2026: a gunship at 5.5 hit
   * it for free, and an engineer flown in stood turrets 7 tiles out that
   * shot every engineer it made; the ground a side may build on is its
   * headquarters' (`hqGroundTiles` in `game/orders.ts`), which is what
   * answers that drop. The ring is the pad's centre on the sheet (`mount`
   * in the manifest is the same point, for the placement ghost); the muzzle
   * and the bore spacing are measured across `tur.hq`.
   */
  hq: {
    id: "hq",
    kind: "building",
    domain: "none",
    tier: 1,
    isHQ: true,
    cost: 2500,
    buildTime: 60,
    pop: 0,
    hp: 4e3,
    armor: "structure",
    speed: 0,
    turnRate: 0,
    vision: 10,
    radius: 60,
    fw: 4,
    fh: 3,
    weapons: [w({
      id: "hqgun",
      cls: "mg",
      dmg: 11,
      reload: 0.14,
      range: 7,
      projectile: "bullet",
      speed: 520,
      targets: ["ground", "ship", "air"],
      mult: { medium: 0.9, heavy: 0.5, air: 0.8, ship: 0.7, structure: 0.3 },
      turret: true,
      muzzleOffset: 35,
      bores: 2,
      boreSpacing: 5.7,
      sound: "mg"
    })],
    produces: ["engineer"],
    power: 10,
    sprite: "u.hq",
    turretSprite: "tur.hq",
    turretMounts: [{ x: 26, y: -36 }]
  },
  extractor: {
    id: "extractor",
    kind: "building",
    domain: "none",
    tier: 1,
    cost: 120,
    buildTime: 10,
    pop: 0,
    hp: 600,
    armor: "structure",
    speed: 0,
    turnRate: 0,
    vision: 5,
    radius: 30,
    fw: 2,
    fh: 2,
    weapons: [],
    metalRate: 1.4,
    needsDeposit: true,
    power: -4,
    upgradesTo: "extractor2",
    upgradeCost: 190,
    upgradeTime: 16,
    sprite: "u.extractor"
  },
  extractor2: {
    id: "extractor2",
    kind: "building",
    domain: "none",
    tier: 2,
    upgradeOnly: true,
    cost: 310,
    buildTime: 26,
    pop: 0,
    hp: 950,
    armor: "structure",
    speed: 0,
    turnRate: 0,
    vision: 5,
    radius: 30,
    fw: 2,
    fh: 2,
    weapons: [],
    metalRate: 3,
    needsDeposit: true,
    power: -8,
    upgradesTo: "extractor3",
    upgradeCost: 500,
    upgradeTime: 30,
    sprite: "u.extractor2"
  },
  extractor3: {
    id: "extractor3",
    kind: "building",
    domain: "none",
    tier: 3,
    upgradeOnly: true,
    cost: 810,
    buildTime: 56,
    pop: 0,
    hp: 1700,
    armor: "structure",
    speed: 0,
    turnRate: 0,
    vision: 6,
    radius: 30,
    fw: 2,
    fh: 2,
    weapons: [],
    metalRate: 8,
    needsDeposit: true,
    power: -15,
    sprite: "u.extractor3"
  },
  /**
   * The plant line is 20 / 50 / 150: each level a shade dearer per unit of
   * power than a fresh plant (7, 8 and 7.3 metal a point), so an upgrade is
   * bought for the ground it gives back and the fewer targets it leaves,
   * never because it is the cheaper power. It was 20 / 60 / 210, and the
   * core at 5.2 a point was the best bargain on the map: every base went
   * there and the Reactor was never built for its output.
   */
  power: {
    id: "power",
    kind: "building",
    domain: "none",
    tier: 1,
    cost: 140,
    buildTime: 12,
    pop: 0,
    hp: 500,
    armor: "structure",
    speed: 0,
    turnRate: 0,
    vision: 5,
    radius: 30,
    fw: 2,
    fh: 2,
    weapons: [],
    power: 20,
    upgradesTo: "power2",
    upgradeCost: 260,
    upgradeTime: 18,
    sprite: "u.power"
  },
  power2: {
    id: "power2",
    kind: "building",
    domain: "none",
    tier: 2,
    upgradeOnly: true,
    cost: 400,
    buildTime: 30,
    pop: 0,
    hp: 900,
    armor: "structure",
    speed: 0,
    turnRate: 0,
    vision: 5,
    radius: 30,
    fw: 2,
    fh: 2,
    weapons: [],
    power: 50,
    upgradesTo: "power3",
    upgradeCost: 700,
    upgradeTime: 36,
    sprite: "u.power2",
    sound: "bld-power"
  },
  power3: {
    id: "power3",
    kind: "building",
    domain: "none",
    tier: 3,
    upgradeOnly: true,
    cost: 1100,
    buildTime: 66,
    pop: 0,
    hp: 1800,
    armor: "structure",
    speed: 0,
    turnRate: 0,
    vision: 6,
    radius: 30,
    fw: 2,
    fh: 2,
    weapons: [],
    power: 150,
    sprite: "u.power3",
    sound: "bld-power"
  },
  factory: {
    id: "factory",
    kind: "building",
    domain: "none",
    tier: 1,
    cost: 320,
    buildTime: 20,
    pop: 0,
    hp: 1500,
    armor: "structure",
    speed: 0,
    turnRate: 0,
    vision: 6,
    radius: 45,
    fw: 3,
    fh: 3,
    weapons: [],
    power: -8,
    produces: ["engineer", "buggy", "ltank", "flak"],
    upgradesTo: "factory2",
    upgradeCost: 420,
    upgradeTime: 25,
    sprite: "u.factory",
    sound: "bld-extractor2"
  },
  factory2: {
    id: "factory2",
    kind: "building",
    domain: "none",
    tier: 2,
    upgradeOnly: true,
    cost: 740,
    buildTime: 45,
    pop: 0,
    hp: 2200,
    armor: "structure",
    speed: 0,
    turnRate: 0,
    vision: 6,
    radius: 45,
    fw: 3,
    fh: 3,
    weapons: [],
    power: -12,
    produces: ["engineer", "buggy", "ltank", "flak", "mbt", "td", "sam", "arty", "drake", "htank", "radarcar"],
    upgradesTo: "factory3",
    upgradeCost: 900,
    upgradeTime: 45,
    sprite: "u.factory2",
    sound: "bld-extractor2"
  },
  /**
   * Level 3. Each production line upgrades once more, in place, and the
   * upgrade needs a Radar Station (`requires`, checked by `cmdUpgrade` on the
   * target def) — the one gate Tier 3 has always had. The line produces
   * nothing while it upgrades, and 45–48 s at this stage is a wave: that
   * downtime is the real price. `cost` is cumulative, as on every upgraded
   * def, because the sell refund reads it.
   *
   * The Tempest is the Arsenal's since 2026-09-17, and the Drake the level
   * below's: the third level sold three specialists nobody bought while the
   * level under it sold the siege piece that took 22% of all value in the
   * first human records, so nobody upgraded. Now the line's second upgrade
   * is what the rocket artillery costs.
   */
  factory3: {
    id: "factory3",
    kind: "building",
    domain: "none",
    tier: 3,
    upgradeOnly: true,
    cost: 1640,
    buildTime: 90,
    pop: 0,
    hp: 3e3,
    armor: "structure",
    speed: 0,
    turnRate: 0,
    vision: 7,
    radius: 45,
    fw: 3,
    fh: 3,
    weapons: [],
    power: -20,
    requires: ["radar"],
    produces: ["engineer", "buggy", "ltank", "flak", "mbt", "td", "sam", "arty", "drake", "htank", "radarcar", "mlrs", "salamander", "bulwark"],
    sprite: "u.factory3",
    sound: "bld-extractor2"
  },
  airbase: {
    id: "airbase",
    kind: "building",
    domain: "none",
    tier: 1,
    cost: 350,
    buildTime: 24,
    pop: 0,
    hp: 1400,
    armor: "structure",
    speed: 0,
    turnRate: 0,
    vision: 6,
    radius: 60,
    fw: 4,
    fh: 4,
    weapons: [],
    power: -8,
    produces: ["drone", "heli", "theli"],
    upgradesTo: "airbase2",
    upgradeCost: 450,
    upgradeTime: 26,
    sprite: "u.airbase"
  },
  airbase2: {
    id: "airbase2",
    kind: "building",
    domain: "none",
    tier: 2,
    upgradeOnly: true,
    cost: 830,
    buildTime: 50,
    pop: 0,
    hp: 2e3,
    armor: "structure",
    speed: 0,
    turnRate: 0,
    vision: 6,
    radius: 60,
    fw: 4,
    fh: 4,
    weapons: [],
    power: -12,
    produces: ["drone", "heli", "theli", "fighter", "jet", "mjet", "bomber", "c47", "gunship"],
    upgradesTo: "airbase3",
    upgradeCost: 950,
    upgradeTime: 48,
    sprite: "u.airbase2"
  },
  airbase3: {
    id: "airbase3",
    kind: "building",
    domain: "none",
    tier: 3,
    upgradeOnly: true,
    cost: 1780,
    buildTime: 96,
    pop: 0,
    hp: 2700,
    armor: "structure",
    speed: 0,
    turnRate: 0,
    vision: 7,
    radius: 60,
    fw: 4,
    fh: 4,
    weapons: [],
    power: -20,
    requires: ["radar"],
    produces: ["drone", "heli", "theli", "fighter", "jet", "mjet", "bomber", "c47", "gunship", "wraith", "cormorant"],
    sprite: "u.airbase3"
  },
  navyard: {
    id: "navyard",
    kind: "building",
    domain: "none",
    tier: 1,
    cost: 380,
    buildTime: 22,
    pop: 0,
    hp: 1500,
    armor: "structure",
    speed: 0,
    turnRate: 0,
    vision: 6,
    radius: 45,
    fw: 3,
    fh: 3,
    weapons: [],
    power: -8,
    produces: ["engboat", "gunboat", "mboat", "seatrans"],
    upgradesTo: "navyard2",
    upgradeCost: 450,
    upgradeTime: 26,
    sprite: "u.navyard",
    sound: "unit-ship"
  },
  navyard2: {
    id: "navyard2",
    kind: "building",
    domain: "none",
    tier: 2,
    upgradeOnly: true,
    cost: 800,
    buildTime: 48,
    pop: 0,
    hp: 2200,
    armor: "structure",
    speed: 0,
    turnRate: 0,
    vision: 6,
    radius: 45,
    fw: 3,
    fh: 3,
    weapons: [],
    power: -12,
    produces: ["engboat", "gunboat", "mboat", "seatrans", "frigate", "destroyer", "sub", "btlship"],
    upgradesTo: "navyard3",
    upgradeCost: 950,
    upgradeTime: 48,
    sprite: "u.navyard2",
    sound: "unit-ship"
  },
  navyard3: {
    id: "navyard3",
    kind: "building",
    domain: "none",
    tier: 3,
    upgradeOnly: true,
    cost: 1750,
    buildTime: 96,
    pop: 0,
    hp: 3e3,
    armor: "structure",
    speed: 0,
    turnRate: 0,
    vision: 7,
    radius: 45,
    fw: 3,
    fh: 3,
    weapons: [],
    power: -20,
    requires: ["radar"],
    produces: ["engboat", "gunboat", "mboat", "seatrans", "frigate", "destroyer", "sub", "btlship", "kraken", "moray"],
    sprite: "u.navyard3",
    sound: "unit-ship"
  },
  /**
   * The MG Turret: a twin mount, and now firing like one.
   *
   * Both barrels were painted and only the middle of the gun ever shot, so
   * `bores` alternates them — `boreSpacing` is measured off `tur.mg`'s own
   * art, and a building is drawn 1:1 so that measurement is world px as it
   * stands. The cyclic rate went up with it (0.35 → 0.25 s, about a third
   * more damage a second): a gun feeding two barrels in turn is faster than
   * one feeding a single barrel, and the pad wanted the help. It stops short
   * of the Gatling it upgrades into, which reloads in 0.14 and has to stay
   * worth the 260 metal.
   */
  mgturret: {
    id: "mgturret",
    kind: "building",
    domain: "none",
    tier: 1,
    cost: 130,
    buildTime: 10,
    pop: 0,
    hp: 400,
    armor: "structure",
    speed: 0,
    turnRate: 0,
    vision: 8,
    radius: 14,
    fw: 1,
    fh: 1,
    power: -2,
    weapons: [w({
      id: "turretmg",
      cls: "mg",
      dmg: 10,
      reload: 0.25,
      range: 5,
      projectile: "bullet",
      speed: 500,
      targets: ["ground", "ship", "air"],
      mult: { ship: 0.6, structure: 0.3 },
      turret: true,
      muzzleOffset: 24.7,
      bores: 2,
      boreSpacing: 5.75,
      sound: "mg"
    })],
    upgradesTo: "gatling",
    upgradeCost: 260,
    upgradeTime: 16,
    sprite: "u.mgturret",
    turretSprite: "tur.mg",
    sound: "bld-cannonturret",
    turretMounts: [{ x: 0, y: -4 }]
  },
  gatling: {
    id: "gatling",
    kind: "building",
    domain: "none",
    tier: 2,
    upgradeOnly: true,
    cost: 390,
    buildTime: 26,
    pop: 0,
    hp: 700,
    armor: "structure",
    speed: 0,
    turnRate: 0,
    vision: 8,
    radius: 14,
    fw: 1,
    fh: 1,
    power: -4,
    weapons: [w({
      id: "gatling",
      cls: "mg",
      dmg: 10,
      reload: 0.14,
      range: 5,
      projectile: "bullet",
      speed: 520,
      targets: ["ground", "ship", "air"],
      mult: { medium: 0.9, heavy: 0.5, air: 0.8, ship: 0.7, structure: 0.3 },
      turret: true,
      muzzleOffset: 27.2,
      sound: "mg"
    })],
    sprite: "u.gatling",
    turretSprite: "tur.gatling",
    sound: "bld-cannonturret",
    turretMounts: [{ x: 0, y: -5 }]
  },
  cannonturret: {
    id: "cannonturret",
    kind: "building",
    domain: "none",
    tier: 1,
    cost: 320,
    buildTime: 18,
    pop: 0,
    hp: 700,
    armor: "structure",
    speed: 0,
    turnRate: 0,
    vision: 8,
    radius: 14,
    fw: 1,
    fh: 1,
    power: -3,
    weapons: [w({
      // static guns hit buildings softer than tanks do — no turret creep
      id: "cannon",
      cls: "cannon",
      dmg: 65,
      reload: 1.9,
      range: 6,
      projectile: "shell",
      speed: 420,
      targets: ["ground", "ship"],
      mult: { heavy: 1.1, structure: 0.6, ship: 1 },
      turret: true,
      muzzleOffset: 29,
      splash: 12,
      sound: "cannon"
    })],
    upgradesTo: "cannonturret2",
    upgradeCost: 420,
    upgradeTime: 22,
    sprite: "u.cannonturret",
    turretSprite: "tur.cannon"
  },
  cannonturret2: {
    id: "cannonturret2",
    kind: "building",
    domain: "none",
    tier: 2,
    upgradeOnly: true,
    cost: 740,
    buildTime: 40,
    pop: 0,
    hp: 1200,
    armor: "structure",
    speed: 0,
    turnRate: 0,
    vision: 9,
    radius: 14,
    fw: 1,
    fh: 1,
    power: -5,
    weapons: [w({
      id: "twincannon",
      cls: "cannon",
      dmg: 60,
      reload: 2,
      range: 7.5,
      projectile: "shell",
      speed: 420,
      targets: ["ground", "ship"],
      mult: { heavy: 1.2, structure: 0.6, ship: 1.1 },
      turret: true,
      muzzleOffset: 40,
      bores: 2,
      boreSpacing: 7,
      splash: 14,
      burst: 2,
      burstDelay: 0.2,
      sound: "cannon"
    })],
    sprite: "u.cannonturret2",
    turretSprite: "tur.cannon2"
  },
  aaturret: {
    id: "aaturret",
    kind: "building",
    domain: "none",
    tier: 1,
    cost: 240,
    buildTime: 14,
    pop: 0,
    hp: 600,
    armor: "structure",
    speed: 0,
    turnRate: 0,
    vision: 9,
    radius: 14,
    fw: 1,
    fh: 1,
    power: -3,
    weapons: [w({
      id: "aaflak",
      cls: "aa",
      dmg: 33,
      reload: 0.8,
      range: 8,
      projectile: "flak",
      speed: 480,
      targets: ["air"],
      turret: true,
      muzzleOffset: 27.4,
      sound: "flak"
    })],
    upgradesTo: "samsite",
    upgradeCost: 320,
    upgradeTime: 20,
    sprite: "u.aaturret",
    turretSprite: "tur.aa",
    sound: "bld-cannonturret"
  },
  /**
   * The upgraded flak tower, and the one emplacement a nuclear warhead has to
   * answer to: `antiWarhead` lifts the rank gate that keeps every building
   * off one (`canEngageWarhead` in combat.ts), so a base that paid for its
   * strategic air defence gets a vote on the strike without a veteran Hawk
   * standing under the path. Its damage is what sets the price of that vote —
   * see nuke.test.ts for how many sites it takes.
   */
  samsite: {
    id: "samsite",
    kind: "building",
    domain: "none",
    tier: 2,
    upgradeOnly: true,
    cost: 560,
    buildTime: 34,
    pop: 0,
    hp: 800,
    armor: "structure",
    speed: 0,
    turnRate: 0,
    vision: 11,
    radius: 14,
    fw: 1,
    fh: 1,
    power: -6,
    antiWarhead: true,
    weapons: [w({
      id: "samsite",
      cls: "aa",
      dmg: 170,
      reload: 2.6,
      range: 10,
      projectile: "missile",
      speed: 460,
      targets: ["air"],
      turret: true,
      muzzleOffset: 20.5,
      bores: 4,
      boreSpacing: 3.5,
      splash: 29,
      homing: true,
      sound: "missile"
    })],
    sprite: "u.samsite",
    turretSprite: "tur.samsite",
    sound: "bld-cannonturret"
  },
  /**
   * Point defence. It cannot shoot at anything on the ground: its rounds are
   * spent on incoming rockets and Viper missiles, one round per round shot
   * down. A nuclear warhead is not its business at either tier — that is an
   * aircraft, and anti-air (a veteran, or a SAM Site) shoots it down or
   * nothing does.
   * The magazine is one Tempest salvo (8 rockets) so a barrage is absorbed
   * whole, and the reload is what sets the duel: one launcher throws 8
   * rockets every 8s (1/s) and one tower replaces 1.33 rounds a second,
   * so a single Tempest never lands a rocket and a second one breaks
   * through. Anything faster here makes the tower unanswerable; anything
   * slower and one launcher grinds it down alone. See interceptor.test.ts.
   */
  interceptor: {
    id: "interceptor",
    kind: "building",
    domain: "none",
    tier: 2,
    cost: 450,
    buildTime: 24,
    pop: 0,
    hp: 600,
    armor: "structure",
    speed: 0,
    turnRate: 0,
    vision: 9,
    radius: 14,
    fw: 1,
    fh: 1,
    power: -8,
    weapons: [],
    interceptRange: 7,
    interceptMag: 8,
    interceptReload: 0.75,
    interceptMuzzleOffset: 19,
    upgradesTo: "interceptor2",
    upgradeCost: 650,
    upgradeTime: 36,
    sprite: "u.interceptor",
    turretSprite: "tur.interceptor",
    sound: "bld-cannonturret"
  },
  interceptor2: {
    id: "interceptor2",
    kind: "building",
    domain: "none",
    tier: 3,
    upgradeOnly: true,
    cost: 1100,
    buildTime: 60,
    pop: 0,
    hp: 900,
    armor: "structure",
    speed: 0,
    turnRate: 0,
    vision: 11,
    radius: 14,
    fw: 1,
    fh: 1,
    power: -12,
    weapons: [],
    interceptRange: 9,
    interceptMag: 12,
    interceptReload: 0.75,
    interceptMuzzleOffset: 21.5,
    sprite: "u.interceptor2",
    turretSprite: "tur.interceptor2",
    sound: "bld-cannonturret"
  },
  /**
   * One tile, like a gun pad: a base wants it beside the turret line and at
   * the staging point, and a 2×2 was a footprint that did not fit either.
   */
  repairtower: {
    id: "repairtower",
    kind: "building",
    domain: "none",
    tier: 1,
    cost: 360,
    buildTime: 20,
    pop: 0,
    hp: 750,
    armor: "structure",
    speed: 0,
    turnRate: 0,
    vision: 7,
    radius: 14,
    fw: 1,
    fh: 1,
    weapons: [],
    power: -8,
    repairRange: 5.5,
    repairRate: 20,
    repairTargets: 3,
    sprite: "u.repairtower"
  },
  /**
   * The radar lifts the fog for 24 tiles round it — three times a turret's
   * sight and the largest circle in the game, so one in the base shows the
   * whole approach and every gun and battery inside the circle fires at
   * what it could never see for itself. Short of power it falls back to a
   * turret's sight (`updateFog`).
   */
  radar: {
    id: "radar",
    kind: "building",
    domain: "none",
    tier: 2,
    cost: 400,
    buildTime: 20,
    pop: 0,
    hp: 800,
    armor: "structure",
    speed: 0,
    turnRate: 0,
    vision: 24,
    radius: 30,
    fw: 2,
    fh: 2,
    // and it sees through stealth: a Wraith is visible within 8 tiles of it
    weapons: [],
    power: -8,
    detect: 8,
    radar: true,
    sprite: "u.radar",
    turretSprite: "tur.radar",
    turretSpins: true
  },
  /**
   * The reactor breeds the cores a warhead is built round: with a radar it is
   * what a silo needs to be built, and what a silo or a submarine needs to
   * fabricate and fire. It feeds the grid as well, though dearer per unit of
   * power than the plant line, which it does not replace.
   */
  reactor: {
    id: "reactor",
    kind: "building",
    domain: "none",
    tier: 3,
    cost: 1400,
    buildTime: 60,
    pop: 0,
    hp: 2200,
    armor: "structure",
    speed: 0,
    turnRate: 0,
    vision: 6,
    radius: 44,
    fw: 3,
    fh: 3,
    weapons: [],
    power: 100,
    requires: ["radar"],
    sprite: "u.reactor",
    sound: "bld-extractor2"
  },
  /**
   * A silo the way one is in the ground: two tiles of concrete over one
   * shaft, a hatch that takes `hatch` seconds to slide open before the
   * warhead leaves (`Game.tickHatch`), and three warheads in the magazine.
   */
  nukesilo: {
    id: "nukesilo",
    kind: "building",
    domain: "none",
    tier: 3,
    cost: 1800,
    buildTime: 75,
    pop: 0,
    hp: 1800,
    armor: "structure",
    speed: 0,
    turnRate: 0,
    vision: 7,
    radius: 30,
    fw: 2,
    fh: 2,
    weapons: [],
    power: -40,
    requires: ["radar", "reactor"],
    nukeCapacity: 3,
    nukeCost: 2500,
    nukeTime: 180,
    hatch: 1.2,
    sprite: "u.nukesilo",
    sound: "bld-extractor2"
  }
};
const ALL_DEF_IDS = Object.keys(DEFS);
const MOD_FORMAT = "steel-tide-mod";
const MOD_FORMAT_VERSION = 1;
const MOD_FILE_EXT = ".steel-tide-mod";
const MOD_MANIFEST_NAME = "mod.json";
const MOD_REGISTRY_REPO = "steel-tide/mods";
const MOD_REGISTRY_URL = `https://raw.githubusercontent.com/${MOD_REGISTRY_REPO}/main/index.json`;
const MOD_REGISTRY_WEB = `https://github.com/${MOD_REGISTRY_REPO}`;
function modRegistryBase(id) {
  return `https://raw.githubusercontent.com/${MOD_REGISTRY_REPO}/main/mods/${id}/`;
}
const MOD_REGISTRY_RELEASE = "registry";
const MOD_REGISTRY_COUNTS_URL = `https://api.github.com/repos/${MOD_REGISTRY_REPO}/releases/tags/${MOD_REGISTRY_RELEASE}`;
function modCountUrl(id) {
  return `${MOD_REGISTRY_WEB}/releases/download/${MOD_REGISTRY_RELEASE}/${id}${MOD_FILE_EXT}`;
}
const MAX_MOD_DEFS = 200;
const MAX_MOD_SPRITES = 120;
const MAX_MOD_SOUNDS = 60;
const MAX_MOD_SCREENSHOTS = 8;
const MIN_SCREENSHOT_WIDTH = 640;
const MAX_SCREENSHOT_BYTES = 2 * 1024 * 1024;
const SCREENSHOT_ASPECT = 4 / 3;
const SCREENSHOT_ASPECT_TOLERANCE = 0.01;
const SOUND_KEY_RE = /^[a-z0-9][a-z0-9-]{1,59}$/;
const MAX_MANIFEST_BYTES = 1024 * 1024;
const MAX_MOD_FILES_BYTES = 24 * 1024 * 1024;
const ID_RE = /^[a-z0-9][a-z0-9_-]{1,39}$/;
const ATLAS_KEY_RE = /^(u|tur)\.[a-z0-9][a-z0-9_-]{1,39}$/;
const FILE_RE = /^(?!\/)(?!.*\.\.)[A-Za-z0-9_./-]{1,120}$/;
const IMAGE_FILE_RE = /\.(png|jpe?g|webp)$/i;
const ARMOR_CLASSES = ["light", "medium", "heavy", "ship", "sub", "air", "structure"];
const TARGET_DOMAINS = ["ground", "ship", "sub", "air"];
const WEAPON_CLASSES = ["mg", "autocannon", "cannon", "at", "he", "rocket", "navgun", "ashm", "torpedo", "aa"];
const PROJECTILES = ["bullet", "shell", "missile", "rocket", "bomb", "torpedo", "flak", "flame"];
const UNIT_DOMAINS = ["ground", "ship", "air"];
const TRAILS = ["tread", "tire", "wake"];
const WEAPON_SOUNDS = ["mg", "autocannon", "cannon", "missile", "flak", "arty", "rocket", "torpedo", "bomb", "flame"];
const MANIFEST_SPECS = [
  { name: "format", type: "string", required: true, doc: [`always "${MOD_FORMAT}"`, `固定为 "${MOD_FORMAT}"`] },
  { name: "v", type: "int", required: true, min: 1, max: 1, doc: [`format version, ${MOD_FORMAT_VERSION}`, `格式版本，${MOD_FORMAT_VERSION}`] },
  { name: "id", type: "id", required: true, doc: ["the mod's id: lower case, letters, digits, `-`; also its folder in the registry", "模组 id：小写字母、数字和 `-`，也是它在仓库中的文件夹名"] },
  { name: "name", type: "text", required: true, doc: ["the name shown in the mod list", "模组列表中显示的名称"] },
  { name: "version", type: "string", required: true, max: 32, doc: ["e.g. `1.0.0`; the game offers an update when the registry's is newer", "如 `1.0.0`；仓库版本更新时游戏会提示更新"] },
  { name: "author", type: "string", max: 80, doc: ["who made it", "作者"] },
  { name: "description", type: "text", doc: ["one or two sentences for the list", "一两句话的介绍"] },
  { name: "homepage", type: "string", max: 200, doc: ["a link: a repository, a thread", "主页链接"] },
  { name: "license", type: "string", max: 80, def: "CC-BY-4.0", doc: ["the mod's licence (SPDX id)", "模组许可证（SPDX 标识）"] },
  { name: "minGame", type: "string", max: 32, doc: ["the oldest game version it is written for", "所需的最低游戏版本"] },
  { name: "defs", type: "defs", required: true, doc: ["the units, buildings and upgrade levels", "单位、建筑与升级等级"] },
  { name: "sprites", type: "sprites", doc: ["the sheets the defs draw with (see below)", "各定义使用的精灵图（见下）"] },
  { name: "sounds", type: "sounds", doc: ["the recordings the weapons fire with (see below)", "武器开火时播放的录音（见下）"] },
  { name: "screenshots", type: "images", doc: [`pictures of the mod in play, relative to mod.json (\`screenshots/1.png\`): 4:3, at least ${MIN_SCREENSHOT_WIDTH} px wide, under ${MAX_SCREENSHOT_BYTES / 1048576} MB each, up to ${MAX_MOD_SCREENSHOTS}. The registry asks for at least one and shows them on the mod's page`, `模组游玩截图，路径相对 mod.json（\`screenshots/1.png\`）：4:3，宽至少 ${MIN_SCREENSHOT_WIDTH} 像素，每张不超过 ${MAX_SCREENSHOT_BYTES / 1048576} MB，最多 ${MAX_MOD_SCREENSHOTS} 张。仓库要求至少一张，并展示在模组页面上`] },
  { name: "files", type: "files", doc: ["single-file form only: the sheets and sounds, embedded as data URLs by path", "仅单文件形式：按路径内嵌的图片与音频（data URL）"] }
];
const DEF_SPECS = [
  { name: "id", type: "id", required: true, doc: ["unique across every mod and the vanilla roster; prefix a generic word with your mod's id", "在所有模组和原版中唯一；通用名字前加上模组 id 前缀"] },
  { name: "name", type: "text", required: true, doc: ["as the HUD shows it", "HUD 中显示的名称"] },
  { name: "desc", type: "text", def: '""', doc: ["the tooltip line", "提示中的描述"] },
  { name: "extends", type: "id", doc: ["a vanilla def id (or an earlier def of this mod) to copy, then override field by field; inherits its art and where it is built", "要复制的原版定义 id（或本模组中前面的定义），再逐字段覆盖；继承其图像和生产位置"] },
  { name: "kind", type: "enum", values: ["unit", "building"], required: true, doc: ["a unit or a building (required unless `extends` says)", "单位或建筑（除非 `extends` 已说明，否则必填）"] },
  { name: "domain", type: "enum", values: UNIT_DOMAINS, only: "unit", def: "ground", doc: ["where it moves; a submarine is a `ship` with `underwater`", "移动域；潜艇是带 `underwater` 的 `ship`"] },
  { name: "tier", type: "int", min: 1, max: 3, def: "1", doc: ["the factory level it appears at, and the badge", "出现的工厂等级与徽标"] },
  { name: "cost", type: "number", required: true, min: 0, max: 99999, doc: ["metal", "金属造价"] },
  { name: "buildTime", type: "number", min: 0, max: 3600, def: "cost ÷ 14", doc: ["seconds at full power", "满电力下的建造秒数"] },
  { name: "pop", type: "int", min: 0, max: 50, def: "1 for a unit, 0 for a building", doc: ["population it counts for", "占用人口"] },
  { name: "hp", type: "number", required: true, min: 1, max: 1e6, doc: ["hit points", "生命值"] },
  { name: "armor", type: "enum", values: ARMOR_CLASSES, def: "by domain", doc: ["the armour class weapons are multiplied against", "武器倍率所针对的装甲类型"] },
  { name: "speed", type: "number", only: "unit", min: 0, max: 1e3, def: "60", doc: ["world px/s (a tile is 32)", "世界像素/秒（一格 32）"] },
  { name: "turnRate", type: "number", only: "unit", min: 0, max: 50, def: "3.5", doc: ["rad/s", "弧度/秒"] },
  { name: "vision", type: "number", min: 0, max: 64, def: "8", doc: ["sight, in tiles", "视野（格）"] },
  { name: "radius", type: "number", min: 1, max: 200, def: "9, or the footprint", doc: ["collision radius, world px, and the *combat* yardstick: range, splash and hits are measured to it", "碰撞半径（世界像素），也是*战斗*基准：射程、溅射与命中都以它为准"] },
  { name: "body", type: "body", only: "unit", def: "the circle of `radius`", doc: ["the room the hull takes up when units push each other apart, world px: `r` its half-width, `len` its length less the two round ends. A long hull is what a circle cannot say", "单位互相推挤时所占的形状（世界像素）：`r` 为半宽，`len` 为去掉两端半圆后的长度。圆形无法表达细长的船体"] },
  { name: "weapons", type: "weapons", def: "[]", doc: ["the weapons (see below); an empty list is unarmed", "武器列表（见下）；空列表即无武装"] },
  { name: "fw", type: "int", only: "building", min: 1, max: 8, def: "2", doc: ["footprint width, tiles", "占地宽度（格）"] },
  { name: "fh", type: "int", only: "building", min: 1, max: 8, def: "2", doc: ["footprint height, tiles", "占地高度（格）"] },
  { name: "producedBy", type: "ids", only: "unit", def: "the line for its domain, from its tier up", doc: ["the buildings whose production list it joins (vanilla or this mod's)", "加入哪些建筑的生产列表（原版或本模组的）"] },
  { name: "produces", type: "ids", only: "building", doc: ["a factory: the units it builds", "工厂：可生产的单位"] },
  { name: "builtBy", type: "ids", only: "building", def: '["engineer"]', doc: ["the builder units that may place it", "可建造它的工程单位"] },
  { name: "builds", type: "ids", only: "unit", doc: ["a builder unit: the buildings it can construct", "工程单位：可建造的建筑"] },
  { name: "buildRate", type: "number", only: "unit", min: 0, max: 1e4, doc: ["a builder unit: hp of work per second", "工程单位：每秒建造量"] },
  { name: "reach", type: "number", only: "unit", min: 0, max: 256, doc: ["a builder unit: how far past a target's radius it works from, world px (the engineer's 46 when unset; the engineer boat's 64)", "工程单位：超出目标半径多远即可施工（世界像素；默认工程车的 46，工程船为 64）"] },
  { name: "power", type: "number", min: -1e4, max: 1e4, def: "−pop for a unit, 0 for a building", doc: ["positive produces, negative draws; every unit draws its population", "正为发电，负为耗电；单位默认耗电等于其人口"] },
  { name: "metalRate", type: "number", only: "building", min: 0, max: 1e3, doc: ["metal per second (an extractor)", "每秒金属（采矿场）"] },
  { name: "needsDeposit", type: "bool", only: "building", doc: ["must stand on a deposit", "必须建在矿点上"] },
  { name: "repairRange", type: "number", only: "building", min: 0, max: 64, doc: ["a repair aura, tiles", "维修光环范围（格）"] },
  { name: "repairRate", type: "number", only: "building", min: 0, max: 1e4, doc: ["hp per second per target", "每目标每秒维修量"] },
  { name: "repairTargets", type: "int", only: "building", min: 1, max: 50, doc: ["targets served at once", "同时维修的目标数"] },
  { name: "upgradeOf", type: "id", only: "building", doc: ["the building this is the next level of; that one gains the upgrade button", "作为哪座建筑的下一等级；那座建筑获得升级按钮"] },
  { name: "upgradeCost", type: "number", only: "building", min: 0, max: 99999, def: "cost − the source's cost", doc: ["with `upgradeOf`: the upgrade's price", "配合 `upgradeOf`：升级价格"] },
  { name: "upgradeTime", type: "number", only: "building", min: 0, max: 3600, def: "buildTime", doc: ["with `upgradeOf`: seconds", "配合 `upgradeOf`：升级秒数"] },
  { name: "requires", type: "ids", doc: ["building ids that must stand before it can be built", "建造前必须存在的建筑 id"] },
  { name: "nukeCapacity", type: "int", min: 0, max: 10, doc: ["a launcher: warheads it holds", "发射器：可储存的弹头数"] },
  { name: "nukeCost", type: "number", min: 0, max: 99999, doc: ["a launcher: metal per warhead", "发射器：每枚弹头的金属"] },
  { name: "nukeTime", type: "number", min: 0, max: 3600, doc: ["a launcher: seconds per warhead", "发射器：每枚弹头的秒数"] },
  { name: "hatch", type: "number", min: 0, max: 30, doc: ["a launcher: seconds its doors take to open before the warhead leaves, and to close after; none fires on the spot", "发射器：发射前舱门打开所需秒数，发射后关闭亦然；不填则即刻发射"] },
  { name: "antiWarhead", type: "bool", doc: ["its anti-air may fire on a nuclear warhead without a veteran's rank", "其防空武器无需老兵等级即可攻击核弹头"] },
  { name: "interceptRange", type: "number", min: 0, max: 64, doc: ["point defence: reach in tiles", "拦截：范围（格）"] },
  { name: "interceptMag", type: "int", min: 1, max: 200, doc: ["point defence: rounds ready", "拦截：备弹数"] },
  { name: "interceptReload", type: "number", min: 0.05, max: 600, doc: ["point defence: seconds per round replaced", "拦截：每发补充秒数"] },
  { name: "interceptMuzzleOffset", type: "number", min: 0, max: 200, doc: ["point defence: launcher length, world px", "拦截：发射器长度（世界像素）"] },
  { name: "transportCap", type: "int", only: "unit", min: 1, max: 50, doc: ["a transport: hold, in cargo weight", "运输载具：载重"] },
  { name: "cargoReach", type: "number", only: "unit", min: 0.5, max: 4, def: "1", doc: ["a transport: how far its load and unload distances stretch, as a multiple of the default (the landing craft's and the Moray's 1.1)", "运输载具：装卸距离相对默认值的倍率（登陆艇与海鳗为 1.1）"] },
  { name: "landsForCargo", type: "bool", only: "unit", doc: ["a cargo plane that touches down to load", "装卸时降落的运输机"] },
  { name: "cargoWeight", type: "number", only: "unit", min: 0, max: 50, def: "pop", doc: ["how much of a hold it takes", "占用的载重"] },
  { name: "underwater", type: "bool", only: "unit", doc: ["a submarine: seen only by sonar", "潜艇：仅声呐可见"] },
  { name: "sonar", type: "number", only: "unit", min: 0, max: 64, doc: ["sonar range, tiles", "声呐范围（格）"] },
  { name: "stealth", type: "number", only: "unit", min: 0, max: 64, doc: ["seen only within this many tiles of an enemy", "仅在敌方此距离内可见"] },
  { name: "detect", type: "number", min: 0, max: 64, doc: ["reveals stealth within this many tiles", "在此范围内揭示隐形"] },
  { name: "radar", type: "bool", doc: ["sees by radio: the sight circle ignores weather and the hour, and drops to 7 tiles when short of power", "靠无线电观测：视野不受天气与昼夜影响，电力不足时缩至 7 格"] },
  { name: "hovers", type: "bool", only: "unit", doc: ["an aircraft that hovers instead of orbiting", "悬停而非盘旋的飞行器"] },
  { name: "altitude", type: "number", only: "unit", min: 0, max: 64, def: "12", doc: ["an aircraft's drawn height, px", "飞行器的绘制高度（像素）"] },
  { name: "fireOnMove", type: "bool", only: "unit", doc: ["keeps shooting on a plain move", "移动时持续开火"] },
  { name: "burnMult", type: "number", only: "unit", min: 0, max: 4, def: "1", doc: ["what fire on the ground does to it, as a multiplier (the Drake's 0.5)", "地面火焰对它的伤害倍率（火龙为 0.5）"] },
  { name: "trail", type: "enum", values: TRAILS, only: "unit", def: "by domain", doc: ["the mark it leaves", "留下的痕迹"] },
  { name: "sprite", type: "string", max: 48, def: "this mod's u.<id> sheet, else the base's art", doc: ["the body's atlas key: one of this mod's sheets, or a vanilla key to borrow its art", "主体图像键：本模组的精灵图，或借用原版的键"] },
  { name: "turretSprite", type: "string", max: 48, def: "this mod's tur.<id> sheet, else the base's (when its art is kept)", doc: ["the rotating part's key, if any", "旋转部件的图像键（若有）"] },
  { name: "aliases", type: "strings", doc: ["other names the console's `give` accepts", "控制台 `give` 接受的别名"] },
  { name: "aiWeight", type: "number", only: "unit", min: 0, max: 10, def: "0", doc: ["how readily the AI builds it: a Bison is 3, a scout car 1; 0 never", "AI 生产它的倾向：野牛是 3，侦察车 1；0 为从不"] }
];
const WEAPON_SPECS = [
  { name: "id", type: "string", max: 32, def: "w1, w2…", doc: ["a name for the weapon", "武器名"] },
  { name: "cls", type: "enum", values: WEAPON_CLASSES, required: true, doc: ["what it was built to kill; picks its row of the armour matrix", "设计用途，决定装甲倍率表中的行"] },
  { name: "dmg", type: "number", required: true, min: 0, max: 1e5, doc: ["damage per hit", "每次命中伤害"] },
  { name: "reload", type: "number", required: true, min: 0.05, max: 600, doc: ["seconds between shots or bursts", "两次射击/齐射间隔秒数"] },
  { name: "range", type: "number", required: true, min: 0.5, max: 64, doc: ["tiles", "射程（格）"] },
  { name: "minRange", type: "number", min: 0, max: 64, doc: ["tiles it cannot fire inside", "最小射程（格）"] },
  { name: "projectile", type: "enum", values: PROJECTILES, def: "by class", doc: ["the round drawn", "弹药样式"] },
  { name: "speed", type: "number", min: 1, max: 5e3, def: "by projectile", doc: ["round speed, world px/s", "弹速（世界像素/秒）"] },
  { name: "targets", type: "targets", def: "by class", doc: ["what it may fire at: ground, ship, sub, air", "可攻击目标：ground、ship、sub、air"] },
  { name: "mult", type: "mult", doc: ["overrides of the class row, by armour class", "按装甲类型覆盖倍率"] },
  { name: "splash", type: "number", min: 0, max: 500, doc: ["blast radius, world px", "溅射半径（世界像素）"] },
  { name: "burst", type: "int", min: 1, max: 32, doc: ["shots per burst", "每次齐射发数"] },
  { name: "burstDelay", type: "number", min: 0, max: 5, doc: ["seconds between the shots of a burst", "齐射内各发间隔秒数"] },
  { name: "homing", type: "bool", doc: ["the round tracks its target", "弹药追踪目标"] },
  { name: "interceptable", type: "bool", doc: ["point defence may shoot it down", "可被拦截"] },
  { name: "arc", type: "bool", doc: ["a ballistic arc (artillery)", "抛物线弹道（火炮）"] },
  { name: "turret", type: "bool", def: "true when the def has a turretSprite", doc: ["fired from the rotating part", "由旋转部件发射"] },
  { name: "muzzleOffset", type: "number", min: 0, max: 200, doc: ["pivot to muzzle, world px; a unit's art is drawn 1.5625×, so measure on the sheet and multiply", "枢轴到炮口距离（世界像素）；单位美术按 1.5625 倍绘制，量图后需乘以该倍数"] },
  { name: "bores", type: "int", min: 1, max: 8, def: "1", doc: ["barrels, fired one after another", "炮管数，逐根轮流开火"] },
  { name: "boreSpacing", type: "number", min: 0, max: 60, doc: ["gap between adjacent barrels, world px", "相邻炮管间距（世界像素）"] },
  { name: "spread", type: "number", min: 0, max: 200, doc: ["inaccuracy at full range, world px", "最大射程处的散布（世界像素）"] },
  { name: "friendlyFire", type: "bool", doc: ["the blast hurts your own side too", "溅射也会伤及己方"] },
  { name: "fan", type: "number", min: 0, max: 1.5, doc: ["a `flame` jet: the half-angle it is sprayed across, radians", "`flame` 喷流：喷射张角的一半（弧度）"] },
  { name: "burn", type: "number", min: 0, max: 1e3, doc: ["a `flame` jet: damage a second the fire it leaves does, to both sides", "`flame` 喷流：残留火焰每秒伤害，敌我通吃"] },
  { name: "burnLife", type: "number", min: 0, max: 120, doc: ["a `flame` jet: seconds that fire keeps burning", "`flame` 喷流：火焰持续秒数"] },
  { name: "sound", type: "string", max: 64, def: "by class", doc: [`the firing sound: ${WEAPON_SOUNDS.join(", ")}, or the key of one of this mod's \`sounds\``, `开火音效：${WEAPON_SOUNDS.join("、")}，或本模组 \`sounds\` 中的一个键`] }
];
const SOUND_SPECS = [
  { name: "key", type: "string", max: 60, required: true, doc: ["`<mod id>-<name>`, lower case; what a weapon's `sound` names", "`<模组 id>-<名字>`，小写；武器 `sound` 引用的键"] },
  { name: "file", type: "string", max: 120, required: true, doc: ["the recording, relative to mod.json. An MP3 plays everywhere; WAV works, OGG not on Safari. Dry, close, under a second", "录音路径，相对 mod.json。MP3 处处可播；WAV 可用，OGG 在 Safari 上不行。干声、近距、一秒以内"] }
];
const SPRITE_SPECS = [
  { name: "key", type: "string", max: 48, required: true, doc: ["`u.<id>` for a body, `tur.<id>` for a rotating part; never a vanilla key", "主体用 `u.<id>`，旋转部件用 `tur.<id>`；不可与原版键重名"] },
  { name: "file", type: "string", max: 120, required: true, doc: ["the image, relative to mod.json (PNG, WebP or JPEG)", "图片路径，相对 mod.json（PNG、WebP 或 JPEG）"] },
  { name: "frames", type: "int", min: 1, max: 64, def: "1", doc: ["animation frames, left to right in one strip", "动画帧数，横向排列"] },
  { name: "fw", type: "number", min: 4, max: 512, def: "the footprint (a building) or the image", doc: ["in-game frame width, world px", "游戏内帧宽（世界像素）"] },
  { name: "fh", type: "number", min: 4, max: 512, doc: ["in-game frame height, world px", "游戏内帧高（世界像素）"] },
  { name: "rotated", type: "bool", doc: ["one up-facing image; the game bakes the 24 headings (hulls, turrets)", "一张朝上的图；游戏烘焙 24 个朝向（车体、炮塔）"] },
  { name: "pivotX", type: "number", min: 0, max: 1, def: "0.5", doc: ["rotation pivot, as a fraction of the frame", "旋转枢轴（帧宽比例）"] },
  { name: "pivotY", type: "number", min: 0, max: 1, def: "0.5", doc: ["rotation pivot, as a fraction of the frame", "旋转枢轴（帧高比例）"] },
  { name: "anchorY", type: "number", min: 0, max: 512, doc: ["px from the top to the footprint centre (tall buildings)", "顶部到占地中心的像素（高建筑）"] },
  { name: "mount", type: "pair", doc: ["a body: where its turret sits (or, with a repair aura, where the beam leaves), as `[fx, fy]`", "主体：炮塔安装位置（带维修光环时则是光束的起点），写作 `[fx, fy]`"] },
  { name: "fps", type: "number", min: 0, max: 60, doc: ["animation speed", "动画速度"] },
  { name: "teams", type: "bool", def: "true", doc: ["recolour magenta per faction", "按阵营重着色品红部分"] },
  { name: "ss", type: "int", min: 1, max: 4, doc: ["supersample factor; omit to let the game choose", "超采样倍率；留空由游戏决定"] },
  { name: "fitFootprint", type: "bool", doc: ["scale the drawn content to fill the frame", "缩放内容以填满帧"] },
  { name: "animRegion", type: "quad", doc: ["where the animation lives, `[x0, y0, x1, y1]` fractions; the rest is frozen", "动画所在区域 `[x0, y0, x1, y1]`（比例）；其余部分冻结"] },
  { name: "stabilize", type: "bool", def: "true", doc: ["re-align drifting frames", "对齐漂移的帧"] },
  { name: "freezeStatic", type: "bool", doc: ["median-freeze pixels that barely change", "冻结几乎不变的像素"] },
  { name: "stripBg", type: "bool", doc: ["force background removal on or off", "强制开启/关闭背景去除"] },
  { name: "bgMinLuma", type: "number", min: 0, max: 255, doc: ["lightest colour still taken as background", "仍视为背景的最亮颜色"] },
  { name: "artifactCleanup", type: "bool", doc: ["sweep specks left by background removal", "清理背景去除后的杂点"] }
];
const FIELD_SPECS = { manifest: MANIFEST_SPECS, def: DEF_SPECS, weapon: WEAPON_SPECS, sprite: SPRITE_SPECS, sound: SOUND_SPECS };
function cloneTable(table) {
  return structuredClone(table);
}
const VANILLA = cloneTable(DEFS);
const VANILLA_IDS = new Set(Object.keys(VANILLA));
function aliasesOf(table) {
  const out = /* @__PURE__ */ new Set();
  for (const d of Object.values(table)) for (const a of d.aliases ?? []) out.add(a);
  return out;
}
function spriteKeysOf(table) {
  const out = /* @__PURE__ */ new Set();
  for (const d of Object.values(table)) {
    out.add(d.sprite);
    if (d.turretSprite) out.add(d.turretSprite);
  }
  return out;
}
const VANILLA_SPRITE_KEYS = spriteKeysOf(VANILLA);
const LINES = {
  ground: ["factory", "factory2", "factory3"],
  ship: ["navyard", "navyard2", "navyard3"],
  air: ["airbase", "airbase2", "airbase3"]
};
function defaultProducers(domain, tier) {
  const line = LINES[domain] ?? LINES.ground;
  return line.slice(Math.max(0, Math.min(2, tier - 1)));
}
const SOUND_BY_CLASS = {
  mg: "mg",
  autocannon: "autocannon",
  cannon: "cannon",
  at: "missile",
  he: "arty",
  rocket: "rocket",
  navgun: "cannon",
  ashm: "missile",
  torpedo: "torpedo",
  aa: "flak"
};
const PROJECTILE_BY_CLASS = {
  mg: "bullet",
  autocannon: "bullet",
  cannon: "shell",
  at: "missile",
  he: "shell",
  rocket: "rocket",
  navgun: "shell",
  ashm: "missile",
  torpedo: "torpedo",
  aa: "flak"
};
const SPEED_BY_PROJECTILE = {
  bullet: 500,
  shell: 420,
  missile: 320,
  rocket: 300,
  bomb: 120,
  torpedo: 150,
  flak: 460,
  nuke: 96,
  flame: 200,
  fire: 0
};
const TARGETS_BY_CLASS = {
  aa: ["air"],
  torpedo: ["ship", "sub"],
  ashm: ["ship"]
};
function modText(v, fallback = "") {
  const given = (lang2) => {
    if (typeof v === "string") return v;
    if (Array.isArray(v)) return v[langIndex(lang2)];
    if (v && typeof v === "object") return v[lang2];
    return void 0;
  };
  const en = typeof given("en") === "string" ? given("en") : fallback;
  return LANGS.map((lang2) => typeof given(lang2) === "string" ? given(lang2) : en);
}
function modName(mod, lang2 = "en") {
  return pick(modText(mod.name, mod.id), lang2) || mod.id;
}
function compareVersions(a, b) {
  const pa = String(a).split(/[.+-]/).map((n) => Number.parseInt(n, 10) || 0);
  const pb = String(b).split(/[.+-]/).map((n) => Number.parseInt(n, 10) || 0);
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    const d = (pa[i] ?? 0) - (pb[i] ?? 0);
    if (d !== 0) return d;
  }
  return 0;
}
function isPlainObject(v) {
  return !!v && typeof v === "object" && !Array.isArray(v);
}
function isText(v) {
  if (typeof v === "string") return v.length <= 400;
  if (Array.isArray(v)) return v.length >= 1 && v.length <= LANGS.length && v.every((x) => typeof x === "string" && x.length <= 400);
  if (isPlainObject(v)) return typeof v.en === "string" && LANGS.every((lang2) => v[lang2] === void 0 || typeof v[lang2] === "string");
  return false;
}
function checkField(spec, value, path, issues) {
  const bad = (message) => {
    issues.push({ path, message });
    return false;
  };
  const min = spec.min ?? -Infinity, max = spec.max ?? Infinity;
  switch (spec.type) {
    case "string":
      if (typeof value !== "string") return bad("must be a string");
      if (value.length === 0) return bad("must not be empty");
      if (value.length > (spec.max ?? 200)) return bad(`must be at most ${spec.max ?? 200} characters`);
      return true;
    case "text":
      return isText(value) || bad(`must be a string, [${LANGS.join(", ")}] or { ${LANGS.join(", ")} }`);
    case "number":
      if (typeof value !== "number" || !Number.isFinite(value)) return bad("must be a number");
      if (value < min || value > max) return bad(`must be between ${min} and ${max}`);
      return true;
    case "int":
      if (!Number.isInteger(value)) return bad("must be a whole number");
      if (value < min || value > max) return bad(`must be between ${min} and ${max}`);
      return true;
    case "bool":
      return typeof value === "boolean" || bad("must be true or false");
    case "enum":
      return typeof value === "string" && spec.values.includes(value) || bad(`must be one of ${spec.values.join(", ")}`);
    case "id":
      return typeof value === "string" && ID_RE.test(value) || bad("must be an id: lower case letters, digits, - or _, 2–40 characters");
    case "ids":
      if (!Array.isArray(value) || value.length > 64) return bad("must be a list of ids");
      for (const x of value) if (typeof x !== "string" || !ID_RE.test(x)) return bad(`"${String(x)}" is not an id`);
      return true;
    case "strings":
      if (!Array.isArray(value) || value.length > 32) return bad("must be a list of strings");
      for (const x of value) if (typeof x !== "string" || x.length === 0 || x.length > 40) return bad("every entry must be a short string");
      return true;
    case "images":
      if (!Array.isArray(value) || value.length > MAX_MOD_SCREENSHOTS) return bad(`must be a list of up to ${MAX_MOD_SCREENSHOTS} image paths`);
      for (const x of value) {
        if (typeof x !== "string" || !FILE_RE.test(x)) return bad(`"${String(x)}" is not a relative path inside the mod`);
        if (!IMAGE_FILE_RE.test(x)) return bad(`${x} is not a PNG, JPEG or WebP`);
      }
      return true;
    case "targets":
      if (!Array.isArray(value) || value.length === 0 || value.length > 4) return bad("must list one to four of ground, ship, sub, air");
      for (const x of value) if (!TARGET_DOMAINS.includes(x)) return bad(`"${String(x)}" is not a target domain`);
      return true;
    case "mult":
      if (!isPlainObject(value)) return bad("must be an object keyed by armour class");
      for (const [k, v] of Object.entries(value)) {
        if (!ARMOR_CLASSES.includes(k)) return bad(`"${k}" is not an armour class`);
        if (typeof v !== "number" || !Number.isFinite(v) || v < 0 || v > 10) return bad(`${k} must be a number between 0 and 10`);
      }
      return true;
    case "body": {
      if (!isPlainObject(value)) return bad('must be { "r": half-width, "len": length }, world px');
      for (const k of Object.keys(value)) if (k !== "r" && k !== "len") return bad(`"${k}" is not a field of a body`);
      const r = value.r, len = value.len;
      if (typeof r !== "number" || !Number.isFinite(r) || r < 1 || r > 200) return bad("r must be a number between 1 and 200");
      if (typeof len !== "number" || !Number.isFinite(len) || len < 0 || len > 400) return bad("len must be a number between 0 and 400");
      return true;
    }
    case "pair":
      return Array.isArray(value) && value.length === 2 && value.every((n) => typeof n === "number" && n >= 0 && n <= 1) || bad("must be [x, y] fractions between 0 and 1");
    case "quad":
      return Array.isArray(value) && value.length === 4 && value.every((n) => typeof n === "number" && n >= 0 && n <= 1) || bad("must be [x0, y0, x1, y1] fractions between 0 and 1");
    case "weapons":
    case "defs":
    case "sprites":
    case "sounds":
      return Array.isArray(value) || bad("must be a list");
    case "files":
      return isPlainObject(value) || bad("must be an object of path → data URL");
  }
}
function checkObject(raw, specs, path, issues, warnings, opts = {}) {
  const out = {};
  const known = new Set(specs.map((s) => s.name));
  for (const key of Object.keys(raw)) {
    if (!known.has(key)) warnings.push({ path: `${path}.${key}`, message: "unknown field, ignored" });
  }
  for (const spec of specs) {
    const value = raw[spec.name];
    if (value === void 0 || value === null) {
      const needed = spec.required === true || spec.required && spec.required === opts.kind;
      if (needed && !opts.skipRequired?.has(spec.name)) issues.push({ path: `${path}.${spec.name}`, message: "is required" });
      continue;
    }
    if (spec.only && opts.kind && spec.only !== opts.kind) {
      warnings.push({ path: `${path}.${spec.name}`, message: `only applies to a ${spec.only}, ignored` });
      continue;
    }
    if (checkField(spec, value, `${path}.${spec.name}`, issues)) out[spec.name] = value;
  }
  return out;
}
function parseMod(input) {
  let raw = input;
  if (typeof input === "string") {
    if (input.length > MAX_MANIFEST_BYTES) return { ok: false, errors: [{ path: "", message: "the manifest is too large" }], warnings: [] };
    try {
      raw = JSON.parse(input);
    } catch {
      return { ok: false, errors: [{ path: "", message: "not valid JSON" }], warnings: [] };
    }
  }
  if (!isPlainObject(raw)) return { ok: false, errors: [{ path: "", message: "not a mod manifest" }], warnings: [] };
  if (raw.format !== MOD_FORMAT) return { ok: false, errors: [{ path: "format", message: `must be "${MOD_FORMAT}"` }], warnings: [] };
  if (raw.v !== MOD_FORMAT_VERSION) return { ok: false, errors: [{ path: "v", message: `unsupported format version ${String(raw.v)} (this game reads ${MOD_FORMAT_VERSION})` }], warnings: [] };
  const errors = [];
  const warnings = [];
  const head = checkObject(raw, MANIFEST_SPECS, "mod", errors, warnings);
  if (errors.length > 0) return { ok: false, errors, warnings };
  const defs = head.defs;
  if (defs.length === 0) errors.push({ path: "mod.defs", message: "a mod needs at least one def" });
  if (defs.length > MAX_MOD_DEFS) errors.push({ path: "mod.defs", message: `at most ${MAX_MOD_DEFS} defs` });
  const sprites = head.sprites ?? [];
  if (sprites.length > MAX_MOD_SPRITES) errors.push({ path: "mod.sprites", message: `at most ${MAX_MOD_SPRITES} sheets` });
  const sounds = head.sounds ?? [];
  if (sounds.length > MAX_MOD_SOUNDS) errors.push({ path: "mod.sounds", message: `at most ${MAX_MOD_SOUNDS} sounds` });
  if (errors.length > 0) return { ok: false, errors, warnings };
  const files = head.files;
  if (files) {
    for (const [k, v] of Object.entries(files)) {
      if (typeof v !== "string" || !v.startsWith("data:")) errors.push({ path: `mod.files.${k}`, message: "must be a data URL" });
    }
  }
  const mod = {
    ...head,
    defs,
    sprites,
    sounds,
    ...files ? { files } : {}
  };
  const resolved = resolveMod(mod, VANILLA);
  errors.push(...resolved.errors);
  warnings.push(...resolved.warnings);
  return errors.length > 0 ? { ok: false, errors, warnings } : { ok: true, mod, warnings };
}
function resolveMod(mod, table = VANILLA) {
  const errors = [];
  const warnings = [];
  const defs = [];
  const patches = [];
  const strings = {};
  const placeholders = [];
  const built = /* @__PURE__ */ new Map();
  const aliases = aliasesOf(table);
  const tableSprites = spriteKeysOf(table);
  const sheetKeys = /* @__PURE__ */ new Set();
  const cleanSprites = [];
  (mod.sprites ?? []).forEach((raw, i) => {
    const path = `sprites[${i}]`;
    if (!isPlainObject(raw)) {
      errors.push({ path, message: "must be an object" });
      return;
    }
    const clean = checkObject(raw, SPRITE_SPECS, path, errors, warnings);
    if (typeof clean.key !== "string" || typeof clean.file !== "string") return;
    if (!ATLAS_KEY_RE.test(clean.key)) {
      errors.push({ path: `${path}.key`, message: "must be u.<id> or tur.<id>" });
      return;
    }
    if (VANILLA_SPRITE_KEYS.has(clean.key) || tableSprites.has(clean.key) && !sheetKeys.has(clean.key) && !mod.defs.some((d) => d && (d.sprite === clean.key || d.turretSprite === clean.key || `u.${d.id}` === clean.key || `tur.${d.id}` === clean.key))) {
      errors.push({ path: `${path}.key`, message: `"${clean.key}" is art the game already has; a mod adds art, it does not replace it` });
      return;
    }
    if (!FILE_RE.test(clean.file)) {
      errors.push({ path: `${path}.file`, message: "must be a relative path inside the mod" });
      return;
    }
    if (sheetKeys.has(clean.key)) {
      errors.push({ path: `${path}.key`, message: `"${clean.key}" is listed twice` });
      return;
    }
    if (mod.files && !(clean.file in mod.files)) errors.push({ path: `${path}.file`, message: `"${clean.file}" is not among the embedded files` });
    sheetKeys.add(clean.key);
    cleanSprites.push({ ...clean, frames: clean.frames ?? 1 });
  });
  mod.sprites = cleanSprites;
  const soundKeys = /* @__PURE__ */ new Set();
  const cleanSounds = [];
  (mod.sounds ?? []).forEach((raw, i) => {
    const path = `sounds[${i}]`;
    if (!isPlainObject(raw)) {
      errors.push({ path, message: "must be an object" });
      return;
    }
    const clean = checkObject(raw, SOUND_SPECS, path, errors, warnings);
    if (typeof clean.key !== "string" || typeof clean.file !== "string") return;
    if (!SOUND_KEY_RE.test(clean.key) || !clean.key.startsWith(`${mod.id}-`)) {
      errors.push({ path: `${path}.key`, message: `must be "${mod.id}-<name>", lower case` });
      return;
    }
    if (!FILE_RE.test(clean.file)) {
      errors.push({ path: `${path}.file`, message: "must be a relative path inside the mod" });
      return;
    }
    if (soundKeys.has(clean.key)) {
      errors.push({ path: `${path}.key`, message: `"${clean.key}" is listed twice` });
      return;
    }
    if (mod.files && !(clean.file in mod.files)) errors.push({ path: `${path}.file`, message: `"${clean.file}" is not among the embedded files` });
    soundKeys.add(clean.key);
    cleanSounds.push({ key: clean.key, file: clean.file });
  });
  mod.sounds = cleanSounds;
  mod.defs.forEach((raw, i) => {
    const path = `defs[${i}]`;
    if (!isPlainObject(raw)) {
      errors.push({ path, message: "must be an object" });
      return;
    }
    const id = raw.id;
    if (typeof id !== "string" || !ID_RE.test(id)) {
      errors.push({ path: `${path}.id`, message: "must be an id: lower case letters, digits, - or _, 2–40 characters" });
      return;
    }
    if (table[id]) {
      errors.push({ path: `${path}.id`, message: `"${id}" is already a def${VANILLA_IDS.has(id) ? " of the game" : ` (mod ${table[id].mod ?? "?"})`}` });
      return;
    }
    if (built.has(id)) {
      errors.push({ path: `${path}.id`, message: `"${id}" is defined twice` });
      return;
    }
    if (aliases.has(id)) {
      errors.push({ path: `${path}.id`, message: `"${id}" is an alias of a def of the game` });
      return;
    }
    let base;
    if (raw.extends !== void 0) {
      if (typeof raw.extends !== "string" || !(table[raw.extends] ?? built.get(raw.extends))) {
        errors.push({ path: `${path}.extends`, message: `"${String(raw.extends)}" is not a def it can extend` });
        return;
      }
      base = table[raw.extends] ?? built.get(raw.extends);
      if (base.warhead || base.isHQ) {
        errors.push({ path: `${path}.extends`, message: `"${raw.extends}" cannot be extended` });
        return;
      }
    }
    const kind = raw.kind ?? base?.kind;
    if (kind !== "unit" && kind !== "building") {
      errors.push({ path: `${path}.kind`, message: 'must be "unit" or "building"' });
      return;
    }
    const clean = checkObject(raw, DEF_SPECS, path, errors, warnings, {
      kind,
      // the base supplies what a fresh def would have to state
      skipRequired: base ? /* @__PURE__ */ new Set(["kind", "cost", "hp"]) : void 0
    });
    const own = clean;
    if (own.name === void 0) return;
    if (own.kind === void 0) own.kind = kind;
    const def = buildDef(own, kind, base, mod.id, soundKeys, path, errors, warnings);
    if (!def) return;
    const ownSheet = sheetKeys.has(`u.${id}`);
    const bodyKey = own.sprite ?? (ownSheet ? `u.${id}` : base?.sprite ?? `u.${id}`);
    if (!sheetKeys.has(bodyKey) && !tableSprites.has(bodyKey)) {
      if (own.sprite) errors.push({ path: `${path}.sprite`, message: `"${bodyKey}" is neither a sheet of this mod nor art the game has` });
      else {
        warnings.push({ path: `${path}.sprite`, message: `no sheet u.${id}: a placeholder is drawn until one is added` });
        placeholders.push(bodyKey);
      }
    }
    def.sprite = bodyKey;
    const ownTurret = sheetKeys.has(`tur.${id}`);
    const turretKey = own.turretSprite ?? (ownTurret ? `tur.${id}` : own.sprite !== void 0 || ownSheet ? void 0 : base?.turretSprite);
    if (turretKey !== void 0) {
      if (!sheetKeys.has(turretKey) && !tableSprites.has(turretKey)) {
        errors.push({ path: `${path}.turretSprite`, message: `"${turretKey}" is neither a sheet of this mod nor art the game has` });
      } else def.turretSprite = turretKey;
    } else delete def.turretSprite;
    for (const wp of def.weapons) if (wp.turret === void 0) wp.turret = !!def.turretSprite;
    for (const a of def.aliases ?? []) {
      if (aliases.has(a) || table[a] || built.has(a)) errors.push({ path: `${path}.aliases`, message: `"${a}" is already a name of another def` });
      aliases.add(a);
    }
    built.set(id, def);
    defs.push(def);
    strings[`unit.${id}.name`] = modText(own.name, id);
    strings[`unit.${id}.desc`] = modText(own.desc, "");
  });
  const find = (id) => table[id] ?? built.get(id);
  mod.defs.forEach((raw, i) => {
    if (!isPlainObject(raw) || typeof raw.id !== "string") return;
    const def = built.get(raw.id);
    if (!def) return;
    const own = raw;
    const base = own.extends ? find(own.extends) : void 0;
    const path = `defs[${i}]`;
    const ids = (list, field, want) => {
      if (!Array.isArray(list)) return [];
      const out = [];
      for (const ref of list) {
        const other = find(ref);
        if (!other) errors.push({ path: `${path}.${field}`, message: `"${ref}" is not a def` });
        else if (other.kind !== want) errors.push({ path: `${path}.${field}`, message: `"${ref}" is not a ${want}` });
        else if (want === "unit" && other.warhead) errors.push({ path: `${path}.${field}`, message: `"${ref}" cannot be produced` });
        else out.push(ref);
      }
      return out;
    };
    def.requires = ids(def.requires, "requires", "building");
    if (def.requires.length === 0) delete def.requires;
    if (def.kind === "building") {
      if (def.produces) def.produces = ids(def.produces, "produces", "unit");
      if (own.upgradeOf !== void 0) {
        const src = find(own.upgradeOf);
        if (!src || src.kind !== "building") errors.push({ path: `${path}.upgradeOf`, message: `"${own.upgradeOf}" is not a building` });
        else if (src.upgradesTo || patches.some((p) => p.kind === "upgrade" && p.target === src.id)) {
          errors.push({ path: `${path}.upgradeOf`, message: `"${own.upgradeOf}" already upgrades to ${src.upgradesTo ?? "another def of this mod"}` });
        } else if (own.upgradeOf === def.id) errors.push({ path: `${path}.upgradeOf`, message: "a building cannot upgrade to itself" });
        else {
          def.upgradeOnly = true;
          patches.push({
            kind: "upgrade",
            target: src.id,
            id: def.id,
            cost: own.upgradeCost ?? Math.max(0, def.cost - src.cost),
            time: own.upgradeTime ?? def.buildTime
          });
        }
      } else {
        const builders = own.builtBy !== void 0 ? ids(own.builtBy, "builtBy", "unit") : base ? Object.values({ ...table, ...Object.fromEntries(built) }).filter((d) => d.builds?.includes(base.id)).map((d) => d.id) : ["engineer"];
        for (const b of builders) {
          const unit = find(b);
          if (!unit.builds) {
            errors.push({ path: `${path}.builtBy`, message: `"${b}" is not a builder unit` });
            continue;
          }
          patches.push({ kind: "builds", target: b, id: def.id });
        }
        if (builders.length === 0) warnings.push({ path: `${path}.builtBy`, message: "nothing can build it" });
      }
    } else {
      if (def.builds) def.builds = ids(def.builds, "builds", "building");
      const producers = own.producedBy !== void 0 ? ids(own.producedBy, "producedBy", "building") : base ? Object.values({ ...table, ...Object.fromEntries(built) }).filter((d) => d.produces?.includes(base.id)).map((d) => d.id) : defaultProducers(def.domain, def.tier).filter((b) => !!find(b));
      for (const b of producers) {
        const line = find(b);
        if (!line.produces && line.id !== def.id) {
          warnings.push({ path: `${path}.producedBy`, message: `"${b}" was not a factory; it becomes one` });
        }
        patches.push({ kind: "produces", target: b, id: def.id });
      }
      if (producers.length === 0 && !mod.defs.some((d) => isPlainObject(d) && Array.isArray(d.produces) && d.produces.includes(def.id))) {
        warnings.push({ path: `${path}.producedBy`, message: "nothing produces it" });
      }
    }
  });
  return { ok: errors.length === 0, mod, defs, patches, strings, placeholders, errors, warnings };
}
function buildDef(own, kind, base, modId, soundKeys, path, errors, warnings) {
  const inherited = base ? structuredClone(base) : {};
  delete inherited.id;
  delete inherited.aliases;
  delete inherited.mod;
  delete inherited.upgradesTo;
  delete inherited.upgradeCost;
  delete inherited.upgradeTime;
  delete inherited.upgradeOnly;
  delete inherited.isHQ;
  delete inherited.warhead;
  delete inherited.aiWeight;
  if (base && base.kind !== kind) {
    errors.push({ path: `${path}.kind`, message: `a ${kind} cannot extend a ${base.kind}` });
    return null;
  }
  const domain = kind === "building" ? "none" : own.domain ?? inherited.domain ?? "ground";
  const fw = kind === "building" ? own.fw ?? inherited.fw ?? 2 : void 0;
  const fh = kind === "building" ? own.fh ?? inherited.fh ?? fw : void 0;
  const cost = own.cost ?? inherited.cost;
  const hp = own.hp ?? inherited.hp;
  if (cost === void 0 || hp === void 0) return null;
  const armor = own.armor ?? inherited.armor ?? (kind === "building" ? "structure" : domain === "air" ? "air" : domain === "ship" ? own.underwater ?? inherited.underwater ? "sub" : "ship" : "medium");
  const def = {
    ...inherited,
    ...stripModOnly(own),
    id: own.id,
    kind,
    domain,
    tier: own.tier ?? inherited.tier ?? 1,
    cost,
    buildTime: own.buildTime ?? inherited.buildTime ?? Math.max(2, Math.round(cost / 14)),
    pop: own.pop ?? inherited.pop ?? (kind === "unit" ? 1 : 0),
    hp,
    armor,
    speed: kind === "building" ? 0 : own.speed ?? inherited.speed ?? 60,
    turnRate: kind === "building" ? 0 : own.turnRate ?? inherited.turnRate ?? 3.5,
    vision: own.vision ?? inherited.vision ?? 8,
    radius: own.radius ?? inherited.radius ?? (kind === "building" ? Math.max(fw, fh) * 15 : 9),
    weapons: [],
    sprite: "",
    mod: modId
  };
  if (kind === "building") {
    def.fw = fw;
    def.fh = fh;
    if (def.power === void 0) def.power = 0;
  } else {
    if (def.power === void 0) def.power = -def.pop;
    if (own.trail === void 0 && inherited.trail === void 0) {
      if (domain === "ground") def.trail = "tread";
      else if (domain === "ship" && !def.underwater) def.trail = "wake";
    }
  }
  if (def.aliases) def.aliases = def.aliases.map((a) => a.toLowerCase());
  const rawWeapons = own.weapons ?? (base ? inherited.weapons : []) ?? [];
  const hasTurret = !!(own.turretSprite ?? (own.sprite ? void 0 : inherited.turretSprite));
  rawWeapons.forEach((raw, i) => {
    const wpath = `${path}.weapons[${i}]`;
    if (!isPlainObject(raw)) {
      errors.push({ path: wpath, message: "must be an object" });
      return;
    }
    const clean = checkObject(raw, WEAPON_SPECS, wpath, errors, warnings);
    if (!clean.cls || clean.dmg === void 0 || clean.reload === void 0 || clean.range === void 0) return;
    if (clean.sound !== void 0 && !WEAPON_SOUNDS.includes(clean.sound) && !soundKeys.has(clean.sound)) {
      errors.push({ path: `${wpath}.sound`, message: `"${clean.sound}" is neither a game sound (${WEAPON_SOUNDS.join(", ")}) nor one of this mod's sounds` });
      return;
    }
    const projectile = clean.projectile ?? PROJECTILE_BY_CLASS[clean.cls];
    const wp = {
      ...clean,
      id: clean.id ?? `w${i + 1}`,
      cls: clean.cls,
      dmg: clean.dmg,
      reload: clean.reload,
      range: clean.range,
      projectile,
      speed: clean.speed ?? SPEED_BY_PROJECTILE[projectile] ?? 400,
      targets: clean.targets ?? TARGETS_BY_CLASS[clean.cls] ?? ["ground", "ship"],
      sound: clean.sound ?? SOUND_BY_CLASS[clean.cls]
    };
    if (clean.turret === void 0 && hasTurret) wp.turret = true;
    if (wp.minRange !== void 0 && wp.minRange >= wp.range) {
      errors.push({ path: `${wpath}.minRange`, message: "must be less than range" });
      return;
    }
    def.weapons.push(resolveWeapon(wp));
  });
  if (def.weapons.length > 8) {
    errors.push({ path: `${path}.weapons`, message: "at most 8 weapons" });
    return null;
  }
  return def;
}
function stripModOnly(own) {
  const { name: _n, desc: _d, extends: _e, weapons: _w, producedBy: _p, builtBy: _b, upgradeOf: _u, sprite: _s, turretSprite: _t, ...rest } = own;
  return rest;
}
let active = [];
const injected = /* @__PURE__ */ new Set();
const listeners = /* @__PURE__ */ new Set();
function applyMods(mods) {
  const table = cloneTable(VANILLA);
  const strings = {};
  const report = { active: [], rejected: [], warnings: [], placeholders: [] };
  for (const mod of mods) {
    const r = resolveMod(mod, table);
    if (!r.ok) {
      report.rejected.push({ id: mod.id, errors: r.errors });
      continue;
    }
    if (r.warnings.length > 0) report.warnings.push({ id: mod.id, warnings: r.warnings });
    for (const d of r.defs) table[d.id] = d;
    applyPatches(table, r.patches);
    Object.assign(strings, r.strings);
    report.placeholders.push(...r.placeholders);
    report.active.push(mod);
  }
  for (const k of Object.keys(DEFS)) delete DEFS[k];
  Object.assign(DEFS, table);
  ALL_DEF_IDS.length = 0;
  ALL_DEF_IDS.push(...Object.keys(table));
  for (const k of injected) delete STRINGS[k];
  injected.clear();
  for (const [k, v] of Object.entries(strings)) {
    STRINGS[k] = v;
    injected.add(k);
  }
  active = report.active;
  for (const fn of listeners) fn();
  return report;
}
function applyPatches(table, patches) {
  for (const p of patches) {
    const target = table[p.target];
    if (!target) continue;
    if (p.kind === "produces") {
      target.produces = target.produces ?? [];
      if (!target.produces.includes(p.id)) target.produces.push(p.id);
    } else if (p.kind === "builds") {
      target.builds = target.builds ?? [];
      if (!target.builds.includes(p.id)) target.builds.push(p.id);
    } else {
      target.upgradesTo = p.id;
      target.upgradeCost = p.cost;
      target.upgradeTime = p.time;
    }
  }
}
function activeMods() {
  return active;
}
function activeModStamps() {
  return active.map((m) => ({ id: m.id, version: m.version }));
}
const MAX_REQUIRED_MODS = 16;
const MAX_HELLO_MODS = 64;
const VERSION_MAX = 32;
function stampOf(mod) {
  return { id: mod.id, version: mod.version };
}
function requiredModOf(mod) {
  return { id: mod.id, version: mod.version, name: mod.name };
}
function isModStamp(value) {
  return isPlainObject(value) && typeof value.id === "string" && ID_RE.test(value.id) && typeof value.version === "string" && value.version.length > 0 && value.version.length <= VERSION_MAX;
}
function sameStamps(a, b) {
  return a.length === b.length && a.every((s, i) => s.id === b[i].id && s.version === b[i].version);
}
function missingMods(required, have) {
  return required.filter((r) => !(have ?? []).some((h) => h.id === r.id && h.version === r.version));
}
function onModsChanged(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}
function modOfDef(id) {
  const modId = DEFS[id]?.mod;
  return modId ? active.find((m) => m.id === modId) : void 0;
}
function countDefs(mod) {
  let units = 0, buildings = 0;
  for (const d of mod.defs) {
    if (!isPlainObject(d)) continue;
    const kind = d.kind ?? (typeof d.extends === "string" ? VANILLA[d.extends]?.kind : void 0);
    if (kind === "building") buildings++;
    else units++;
  }
  return { units, buildings };
}
function imageSize(bytes) {
  const u32 = (i) => (bytes[i] << 24 | bytes[i + 1] << 16 | bytes[i + 2] << 8 | bytes[i + 3]) >>> 0;
  const u16 = (i) => bytes[i] << 8 | bytes[i + 1];
  const u24le = (i) => bytes[i] | bytes[i + 1] << 8 | bytes[i + 2] << 16;
  const u16le = (i) => bytes[i] | bytes[i + 1] << 8;
  if (bytes.length >= 24 && bytes[0] === 137 && bytes[1] === 80 && bytes[2] === 78 && bytes[3] === 71) {
    return { w: u32(16), h: u32(20) };
  }
  if (bytes.length >= 4 && bytes[0] === 255 && bytes[1] === 216) {
    let i = 2;
    while (i + 9 < bytes.length) {
      if (bytes[i] !== 255) return null;
      const marker = bytes[i + 1];
      if (marker === 216 || marker >= 208 && marker <= 215 || marker === 1 || marker === 255) {
        i += marker === 255 ? 1 : 2;
        continue;
      }
      const len = u16(i + 2);
      if (marker >= 192 && marker <= 207 && marker !== 196 && marker !== 200 && marker !== 204) {
        return { h: u16(i + 5), w: u16(i + 7) };
      }
      if (marker === 217 || marker === 218) return null;
      i += 2 + len;
    }
    return null;
  }
  if (bytes.length >= 30 && bytes[0] === 82 && bytes[1] === 73 && bytes[2] === 70 && bytes[3] === 70 && bytes[8] === 87 && bytes[9] === 69 && bytes[10] === 66 && bytes[11] === 80) {
    const chunk = String.fromCharCode(bytes[12], bytes[13], bytes[14], bytes[15]);
    if (chunk === "VP8 ") return { w: u16le(26) & 16383, h: u16le(28) & 16383 };
    if (chunk === "VP8L") {
      const bits = bytes[21] | bytes[22] << 8 | bytes[23] << 16 | bytes[24] << 24;
      return { w: (bits & 16383) + 1, h: (bits >>> 14 & 16383) + 1 };
    }
    if (chunk === "VP8X") return { w: u24le(24) + 1, h: u24le(27) + 1 };
  }
  return null;
}
function checkScreenshot(size, byteLength) {
  if (!size) return "is not a PNG, JPEG or WebP";
  if (byteLength > MAX_SCREENSHOT_BYTES) return `is ${(byteLength / 1048576).toFixed(1)} MB; keep a screenshot under ${MAX_SCREENSHOT_BYTES / 1048576}`;
  if (size.w < MIN_SCREENSHOT_WIDTH) return `is ${size.w} px wide; a screenshot is at least ${MIN_SCREENSHOT_WIDTH}`;
  if (Math.abs(size.w / size.h - SCREENSHOT_ASPECT) > SCREENSHOT_ASPECT * SCREENSHOT_ASPECT_TOLERANCE) return `is ${size.w} × ${size.h}; a screenshot is 4:3 (${size.w} × ${Math.round(size.w / SCREENSHOT_ASPECT)}, say)`;
  return null;
}
function modFileUrl(entry, file) {
  const base = entry.base || modRegistryBase(entry.id);
  return (base.endsWith("/") ? base : base + "/") + file;
}
function indexEntryFor(mod, path, base, extra = {}) {
  const r = resolveMod(mod, VANILLA);
  const sizes = extra.sizes ?? {};
  const screenshots = (mod.screenshots ?? []).filter((f) => sizes[f]).map((f) => ({ file: f, w: sizes[f].w, h: sizes[f].h }));
  return {
    id: mod.id,
    name: modText(mod.name, mod.id),
    version: mod.version,
    ...mod.author ? { author: mod.author } : {},
    description: modText(mod.description, ""),
    ...mod.license ? { license: mod.license } : {},
    ...mod.homepage ? { homepage: mod.homepage } : {},
    ...mod.minGame ? { minGame: mod.minGame } : {},
    path,
    base,
    ...extra.updated ? { updated: extra.updated } : {},
    ...extra.downloads !== void 0 ? { downloads: extra.downloads } : {},
    ...screenshots.length > 0 ? { screenshots } : {},
    defs: r.defs.map((d) => {
      const own = mod.defs.find((x) => x.id === d.id);
      return {
        id: d.id,
        kind: d.kind,
        domain: d.domain,
        tier: d.tier,
        cost: d.cost,
        name: modText(own?.name, d.id),
        sprite: d.sprite,
        ...d.turretSprite ? { turretSprite: d.turretSprite } : {},
        ...own?.extends ? { extends: own.extends } : {}
      };
    }),
    sprites: (mod.sprites ?? []).map((s) => ({
      key: s.key,
      file: s.file,
      frames: s.frames ?? 1,
      ...s.rotated ? { rotated: true } : {},
      ...sizes[s.file] ? { w: sizes[s.file].w, h: sizes[s.file].h } : {}
    })),
    ...mod.sounds?.length ? { sounds: mod.sounds.map((s) => ({ key: s.key, file: s.file })) } : {}
  };
}
function parseModIndex(json) {
  let raw = json;
  if (typeof json === "string") {
    try {
      raw = JSON.parse(json);
    } catch {
      return null;
    }
  }
  if (!isPlainObject(raw) || raw.format !== "steel-tide-mod-index" || !Array.isArray(raw.mods)) return null;
  const mods = [];
  for (const m of raw.mods) {
    if (!isPlainObject(m) || typeof m.id !== "string" || !ID_RE.test(m.id) || typeof m.version !== "string" || typeof m.base !== "string") continue;
    mods.push({
      id: m.id,
      name: modText(m.name, m.id),
      version: m.version,
      ...typeof m.author === "string" ? { author: m.author } : {},
      description: modText(m.description, ""),
      ...typeof m.license === "string" ? { license: m.license } : {},
      ...typeof m.homepage === "string" ? { homepage: m.homepage } : {},
      ...typeof m.minGame === "string" ? { minGame: m.minGame } : {},
      path: typeof m.path === "string" ? m.path : `mods/${m.id}`,
      base: m.base,
      ...typeof m.updated === "string" ? { updated: m.updated } : {},
      ...typeof m.downloads === "number" && m.downloads >= 0 ? { downloads: Math.floor(m.downloads) } : {},
      ...Array.isArray(m.screenshots) ? {
        screenshots: m.screenshots.filter((x) => isPlainObject(x) && typeof x.file === "string" && typeof x.w === "number" && typeof x.h === "number" && x.w > 0 && x.h > 0)
      } : {},
      defs: Array.isArray(m.defs) ? m.defs.filter((d) => isPlainObject(d) && typeof d.id === "string") : [],
      sprites: Array.isArray(m.sprites) ? m.sprites.filter((s) => isPlainObject(s) && typeof s.key === "string") : [],
      ...Array.isArray(m.sounds) ? { sounds: m.sounds.filter((s) => isPlainObject(s) && typeof s.key === "string" && typeof s.file === "string") } : {}
    });
  }
  return { format: "steel-tide-mod-index", v: 1, generated: typeof raw.generated === "string" ? raw.generated : "", mods };
}
const VANILLA_DEFS = DEFS;
function typeLabel(spec) {
  switch (spec.type) {
    case "enum":
      return spec.values.join(" | ");
    case "text":
      return "text";
    case "number":
    case "int": {
      const range = spec.min !== void 0 || spec.max !== void 0 ? ` ${spec.min ?? ""}–${spec.max ?? ""}` : "";
      return (spec.type === "int" ? "integer" : "number") + range;
    }
    case "id":
      return "id";
    case "ids":
      return "id[]";
    case "strings":
      return "string[]";
    case "images":
      return "path[]";
    case "targets":
      return "(ground | ship | sub | air)[]";
    case "mult":
      return "{ armour: number }";
    case "body":
      return "{ r, len }";
    case "pair":
      return "[x, y]";
    case "quad":
      return "[x0, y0, x1, y1]";
    case "bool":
      return "boolean";
    case "weapons":
      return "weapon[]";
    case "defs":
      return "def[]";
    case "sprites":
      return "sheet[]";
    case "files":
      return "{ path: dataURL }";
    default:
      return "string";
  }
}
function fieldRows(table, lang2 = "en") {
  const i = lang2 === "zh" ? 1 : 0;
  return FIELD_SPECS[table].map((spec) => ({
    name: spec.name,
    type: typeLabel(spec),
    required: spec.required === true ? lang2 === "zh" ? "必填" : "yes" : spec.required ? lang2 === "zh" ? `${spec.required === "unit" ? "单位" : "建筑"}必填` : `${spec.required}s` : spec.only ? lang2 === "zh" ? `仅${spec.only === "unit" ? "单位" : "建筑"}` : `${spec.only}s only` : "",
    default: spec.def ?? "",
    doc: spec.doc[i]
  }));
}
function markdownTable(rows) {
  const esc = (s) => s.replace(/\|/g, "\\|");
  const lines = ["| field | type | required | default | meaning |", "| --- | --- | --- | --- | --- |"];
  for (const r of rows) lines.push(`| \`${r.name}\` | ${esc(r.type)} | ${esc(r.required)} | ${esc(r.default)} | ${esc(r.doc)} |`);
  return lines.join("\n");
}
function rosterLines() {
  const out = [];
  const by = (kind, domain) => Object.values(DEFS).filter((d) => d.kind === kind && (domain === void 0 || d.domain === domain) && !d.warhead).map((d) => `${d.id} (T${d.tier}, ${d.cost}${d.upgradeOnly ? ", upgrade level" : ""})`);
  out.push(`ground units: ${by("unit", "ground").join(", ")}`);
  out.push(`ships: ${by("unit", "ship").join(", ")}`);
  out.push(`aircraft: ${by("unit", "air").join(", ")}`);
  out.push(`buildings: ${by("building").join(", ")}`);
  return out;
}
function exampleMinimal() {
  return {
    format: MOD_FORMAT,
    v: MOD_FORMAT_VERSION,
    id: "bison-ii",
    name: ["Bison II", "野牛 II"],
    version: "1.0.0",
    author: "you",
    description: ["A heavier Bison for the late game.", "后期用的重型野牛。"],
    defs: [
      {
        id: "bison2",
        extends: "mbt",
        name: ["Bison II", "野牛 II"],
        desc: ["Thicker plate, a bigger gun, and a bigger bill.", "更厚的装甲、更大的炮，也更贵。"],
        tier: 3,
        cost: 520,
        hp: 1100,
        speed: 52,
        requires: ["radar"],
        weapons: [{ id: "cannon", cls: "cannon", dmg: 90, reload: 2, range: 5, splash: 12, turret: true, muzzleOffset: 23 }],
        aiWeight: 2
      }
    ]
  };
}
function exampleFull() {
  return {
    format: MOD_FORMAT,
    v: MOD_FORMAT_VERSION,
    id: "ironworks",
    name: ["Ironworks", "铁工厂"],
    version: "1.0.0",
    author: "you",
    description: ["A hover tank, a bunker and a fusion plant.", "一辆悬浮坦克、一座碉堡和一座聚变电站。"],
    license: "CC-BY-4.0",
    defs: [
      {
        id: "ironworks-hover",
        name: ["Skimmer Hover Tank", "掠行悬浮坦克"],
        desc: ["Fast, thin-skinned, rockets.", "快、皮薄、打火箭。"],
        kind: "unit",
        domain: "ground",
        tier: 2,
        cost: 260,
        hp: 320,
        armor: "light",
        speed: 110,
        turnRate: 5,
        radius: 9,
        body: { r: 10, len: 10 },
        trail: "tire",
        weapons: [{ id: "pods", cls: "rocket", dmg: 16, reload: 2.2, range: 4.5, burst: 4, burstDelay: 0.1, splash: 10, spread: 14 }],
        producedBy: ["factory2", "factory3"],
        aiWeight: 1
      },
      {
        id: "ironworks-bunker",
        name: ["Bunker", "碉堡"],
        desc: ["A gun pit that takes a beating.", "扛打的火力点。"],
        kind: "building",
        cost: 380,
        hp: 1600,
        fw: 2,
        fh: 2,
        power: -3,
        vision: 8,
        weapons: [{ id: "gun", cls: "autocannon", dmg: 22, reload: 0.5, range: 5, turret: false, targets: ["ground", "ship"] }]
      },
      {
        id: "ironworks-fusion",
        name: ["Fusion Plant", "聚变电站"],
        desc: ["The plant line's fourth level.", "发电厂线的第四级。"],
        extends: "power3",
        upgradeOf: "power3",
        cost: 2200,
        hp: 2600,
        power: 500,
        upgradeCost: 1100,
        upgradeTime: 60,
        requires: ["radar", "reactor"]
      }
    ],
    sprites: [
      { key: "u.ironworks-hover", file: "sprites/u.ironworks-hover.png", frames: 1, rotated: true, fw: 24, fh: 26 },
      { key: "u.ironworks-bunker", file: "sprites/u.ironworks-bunker.png", frames: 1 }
    ],
    screenshots: ["screenshots/skimmers.png"]
  };
}
function agentPrompt() {
  const lines = [];
  const p = (s = "") => {
    lines.push(s);
  };
  p("# Making a Steel Tide mod: a brief for a coding agent");
  p();
  p("You are helping make a mod for Steel Tide (https://steelti.de), a browser real-time strategy game.");
  p("A mod adds units, buildings and upgrade levels. It cannot change the game's rules, its interface, or an existing unit or building: it only adds, and everything it adds is switched off with it.");
  p("Read this whole brief once, then work from the tables. When in doubt, prefer the smallest mod that plays.");
  p();
  p("## What a mod is");
  p();
  p("A folder:");
  p();
  p("```");
  p("my-mod/");
  p("  mod.json          the manifest: the mod's identity, its defs, and the sheets they draw with");
  p("  sprites/*.png     optional art (a def without any is drawn as a plain placeholder)");
  p("  screenshots/*.png the mod in play, 4:3 (the registry asks for at least one; see Publish)");
  p("  README.md         optional");
  p("```");
  p();
  p(`Published mods live in ${MOD_REGISTRY_WEB} under \`mods/<id>/\`; the game lists that registry under Settings → Mods, and the website at https://steelti.de/mods.`);
  p();
  p("## The manifest, minimal");
  p();
  p("One vanilla unit copied and re-tuned. `extends` inherits everything (art, weapons, where it is built) and every field you name overrides it:");
  p();
  p("```json");
  p(JSON.stringify(exampleMinimal(), null, 2));
  p("```");
  p();
  p("## The manifest, deeper");
  p();
  p("Own art, a defended building, and a fourth level for a vanilla building line:");
  p();
  p("```json");
  p(JSON.stringify(exampleFull(), null, 2));
  p("```");
  p();
  p("## Fields");
  p();
  p("Anything not in these tables is ignored with a warning. Numbers outside the stated range are errors.");
  p();
  p("### mod.json (top level)");
  p();
  p(markdownTable(fieldRows("manifest")));
  p();
  p(`\`name\`, \`description\` and every \`desc\`/\`name\` on a def are *text*: a string (used for every language), \`["English", "中文", "한국어"]\` in that order, or \`{ ${LANGS.map((l) => `"${l}": "…"`).join(", ")} }\`. Only English is required; a language left out reads as English.`);
  p();
  p("### A def (`defs[]`)");
  p();
  p(markdownTable(fieldRows("def")));
  p();
  p('Defaults when `extends` is absent: a unit is `domain: "ground"`, `tier: 1`, `pop: 1`, `speed: 60`, `turnRate: 3.5`, `vision: 8`, `radius: 9`, no `body` (units part on the circle of `radius`), armour by domain (ground `medium`, ship `ship`, air `air`), a tread trail on land and a wake at sea; a building is `fw: 2, fh: 2`, `armor: "structure"`, `power: 0`, `pop: 0`. `buildTime` defaults to cost ÷ 14 seconds.');
  p("Where a unit is built when `producedBy` is absent: its domain's line from its tier up (" + ["ground", "ship", "air"].map((d) => `${d}: ${[1, 2, 3].map((t) => `T${t} → ${defaultProducers(d, t).join("+")}`).join(", ")}`).join("; ") + ").");
  p("An `upgradeOf` def becomes upgrade-only (never placed directly): the named building gains an Upgrade button that turns it into this def, at `upgradeCost` over `upgradeTime`. A building may have only one next level, so `upgradeOf` can name a vanilla building at the end of its line (`power3`, `factory3`, `extractor3`, `gatling`, `cannonturret2`, `samsite`, `interceptor2`, `radar`, `repairtower`, `reactor`, `nukesilo`) or one of this mod's.");
  p();
  p("### A weapon (`defs[].weapons[]`)");
  p();
  p(markdownTable(fieldRows("weapon")));
  p();
  p("The damage a weapon does is `dmg × the armour matrix cell for (cls, target armour)`, with `mult` overriding single cells. The matrix:");
  p();
  p("```");
  for (const [cls, row] of Object.entries(ARMOR_MATRIX)) p(`${cls.padEnd(11)} ${Object.entries(row).map(([a, m]) => `${a} ×${m}`).join("  ")}`);
  p("```");
  p();
  p("### A sheet (`sprites[]`)");
  p();
  p(markdownTable(fieldRows("sprite")));
  p();
  p("### A sound (`sounds[]`)");
  p();
  p(markdownTable(fieldRows("sound")));
  p();
  p("A weapon fires with the game's sound for its class unless its `sound` names one of these keys. A recording is a dry, close-miked one-shot under a second with no reverb tail; the engine attenuates and pans it by distance, and forty overlapping echoes turn to mud. Mono MP3 is the safe format.");
  p();
  p("## Units of measure");
  p();
  p("- A tile is 32 world pixels. `speed` and projectile `speed` are world px/s; `range`, `minRange`, `vision`, `sonar`, `stealth`, `detect`, `repairRange` and `interceptRange` are tiles; `radius`, `body.r`, `body.len`, `splash`, `spread`, `muzzleOffset` are world px.");
  p("- Times are seconds: `buildTime`, `reload`, `burstDelay`, `upgradeTime`, `interceptReload`, `nukeTime`.");
  p("- For scale: the Bison main battle tank is cost 280, hp 620, speed 60, radius 10, body `{ r: 13, len: 12 }`, a cannon of dmg 60 every 1.8 s at range 4.6; a scout car is cost 60, hp 150, speed 120; a war factory is 3×3 tiles, hp 1500, power −8.");
  p();
  p("## Art");
  p();
  p('- Keys: a def\'s body is `u.<id>`, a rotating turret `tur.<id>`. A def with no sheet of its own may borrow vanilla art by naming a vanilla key in `sprite` (e.g. `"sprite": "u.mbt", "turretSprite": "tur.mbt"`); with `extends` it inherits the base\'s art. A mod may not replace vanilla art.');
  p("- A sheet is one PNG (WebP and JPEG are accepted): `frames` animation frames left to right in one horizontal strip, evenly spaced, no gaps, no borders.");
  p('- Hulls, turrets and everything that turns: draw ONE image facing UP and set `"rotated": true`; the game bakes the 24 headings. `fw`/`fh` are the in-game size of that up-facing image in world px (a tank hull is about 24×24; the image itself may be any resolution, 2–4× is best). `pivotX`/`pivotY` put the pivot on the turret ring (default centre).');
  p("- Buildings: one strip of frames, not rotated, drawn with a slight top-down southern tilt. The footprint is the bottom `fw×32` by `fh×32` px of the frame; anything above overhangs the terrain behind (towers, masts). Width, height and anchor are sized from the def's footprint automatically.");
  p('- A building with a gun that turns is two sheets like a hull and turret: the body with an empty ring and `"mount": [fx, fy]` saying where the ring sits as fractions of the frame, and a `tur.<id>` sheet for the gun; its weapons carry `"turret": true`.');
  p("- Faction colour: paint team-coloured parts in pure magenta (highlight #FF66FF, base #FF00FF, shadow #990099) and use magenta nowhere else; the game recolours it per player.");
  p("- Style: crisp pixel art, hard edges, no anti-aliasing, a muted military palette (DawnBringer-32), dark #222034 outlines. Generated sheets are cleaned automatically (background removal, frame registration), but a transparent background is best.");
  p();
  p("## The vanilla roster (ids you may `extends`, name in `producedBy`/`builtBy`/`requires`/`upgradeOf`, or borrow art from)");
  p();
  for (const line of rosterLines()) p(`- ${line}`);
  p();
  p("## Test");
  p();
  p("1. Validate: in a clone of the registry, `node tools/check.mjs path/to/my-mod` prints every error with its path into mod.json. (No clone? The game says the same things when the mod is loaded.)");
  p("2. Load it in the game: Settings → Mods → *Open folder…* (Chrome keeps the folder open, so *Reload* re-reads your edits) or *Upload file…* (a zip of the folder, or a `.steel-tide-mod` file). Errors are listed on the spot; a loaded mod says how many units and buildings it added.");
  p("3. Play: start a Conquest match. Your units are in the factory's production list from the level you gave them; buildings are in the engineer's build menu; an upgrade level is on its building's Upgrade button. The console (backquote) has `give <id>` for anything. Mods apply to Conquest and the campaign; a networked match is always unmodded.");
  p("4. From a static server: `npx serve --cors path/to/my-mod` then open `https://play.steelti.de/?mod=http://localhost:3000/` — the mod is fetched at every boot, so a page reload picks up an edit.");
  p();
  p("## Publish");
  p();
  p(`1. Fork ${MOD_REGISTRY_WEB}, add your folder as \`mods/<id>/\` (the folder name is the mod's \`id\`), run \`node tools/check.mjs mods/<id>\`, open a pull request.`);
  p(`2. A published mod carries at least one screenshot of it in play, named under \`screenshots\` in mod.json: 4:3 (1600×1200 is a good size), at least ${MIN_SCREENSHOT_WIDTH} px wide, PNG, JPEG or WebP under ${MAX_SCREENSHOT_BYTES / 1048576} MB, up to ${MAX_MOD_SCREENSHOTS} of them. The game's Settings → Mods page and https://steelti.de/mods show them; the first is the mod's card. Take them in a match with the mod's units on screen (the console's \`give\` puts them there) and crop to 4:3.`);
  p("3. CI runs the same check on the whole registry: ids must be unique across every published mod, so prefix a generic word with your mod's id (`ironworks-bunker`, not `bunker`).");
  p("4. Once merged, the index is rebuilt and the mod appears in the game's registry list and at https://steelti.de/mods, where its installs are counted. Bump `version` for every change; the game offers the update.");
  p();
  p("## Rules");
  p();
  p("- A mod adds; it does not change vanilla defs, art, rules or interface. Do not try to override a vanilla id or key; the validator refuses it.");
  p("- Keep it honest: a unit needs a counter. The armour matrix is how the game makes one; give a new weapon a class it belongs to rather than an override on every cell.");
  p("- A mod is published under the licence its manifest names (default CC-BY-4.0). Only ship art you have the right to.");
  return lines.join("\n") + "\n";
}
function agentPromptFor(dir) {
  return `${agentPrompt()}
Work in \`${dir}\`. Write \`mod.json\` there, add any sheets under \`sprites/\`, and finish by running the check above.
`;
}
const REGISTRY = { repo: MOD_REGISTRY_REPO, web: MOD_REGISTRY_WEB };
function modTitle(mod, lang2 = "en") {
  return `${pick(modText(mod.name, mod.id), lang2)} ${mod.version}`;
}
export {
  ARMOR_CLASSES,
  ARMOR_MATRIX,
  FIELD_SPECS,
  ID_RE,
  MAX_HELLO_MODS,
  MAX_MANIFEST_BYTES,
  MAX_MOD_DEFS,
  MAX_MOD_FILES_BYTES,
  MAX_MOD_SCREENSHOTS,
  MAX_MOD_SOUNDS,
  MAX_MOD_SPRITES,
  MAX_REQUIRED_MODS,
  MAX_SCREENSHOT_BYTES,
  MIN_SCREENSHOT_WIDTH,
  MOD_FILE_EXT,
  MOD_FORMAT,
  MOD_FORMAT_VERSION,
  MOD_MANIFEST_NAME,
  MOD_REGISTRY_COUNTS_URL,
  MOD_REGISTRY_RELEASE,
  MOD_REGISTRY_REPO,
  MOD_REGISTRY_URL,
  MOD_REGISTRY_WEB,
  PROJECTILES,
  REGISTRY,
  SCREENSHOT_ASPECT,
  SCREENSHOT_ASPECT_TOLERANCE,
  SOUND_KEY_RE,
  TARGET_DOMAINS,
  TRAILS,
  UNIT_DOMAINS,
  VANILLA_DEFS,
  VANILLA_IDS,
  VANILLA_SPRITE_KEYS,
  WEAPON_CLASSES,
  WEAPON_SOUNDS,
  activeModStamps,
  activeMods,
  agentPrompt,
  agentPromptFor,
  applyMods,
  checkScreenshot,
  compareVersions,
  countDefs,
  defaultProducers,
  exampleFull,
  exampleMinimal,
  fieldRows,
  imageSize,
  indexEntryFor,
  isModStamp,
  missingMods,
  modCountUrl,
  modFileUrl,
  modName,
  modOfDef,
  modRegistryBase,
  modText,
  modTitle,
  onModsChanged,
  parseMod,
  parseModIndex,
  requiredModOf,
  resolveMod,
  rosterLines,
  sameStamps,
  stampOf
};
