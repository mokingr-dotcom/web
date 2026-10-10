// 站点内容集中在这里。标注“待确认”的是占位，请用园区真实信息替换。
export const site = {
  name: "千帆集文化艺术共创园",
  short: "千帆集",
  tagline: "千帆竞渡　心归于此",
  slogan: "日过千帆不绝影",
  description:
    "千帆集文化艺术共创园位于北京通州大运河畔马头村，2000 余亩徽派京郊微度假目的地，集吃、住、玩、乐、购于一体，家庭亲子、情侣出行、企业团建皆宜。",
  company: "北京百草虫旅游文化发展有限公司",
  phone: "待确认",
  email: "待确认",
  address: "北京市通州区漷县镇马头村（榆林庄村）· 大运河畔",
  wechat: "待确认",
  hours: "营业时间待确认",
  openedAt: "2026 年 4 月 27 日",
  area: "2000 余亩",
};

export const zones = [
  { key: "eat", icon: "吃", title: "餐饮", desc: "码头鱼馆、Sharklāka 咖啡厅、“渡”牌啤酒。", href: "/dining" },
  { key: "stay", icon: "住", title: "住宿", desc: "运河徽派庭院民宿，马头墙与青砖黛瓦。", href: "/rooms" },
  { key: "play", icon: "玩", title: "游玩", desc: "萌宠乐园、彩虹滑道、森林部落、路亚垂钓。", href: "/play" },
  { key: "team", icon: "团", title: "团建活动", desc: "拓展、铁锅炖大赛、露营音乐会，定制团建。", href: "/team" },
  { key: "fun", icon: "乐", title: "星空与夜游", desc: "露天星空巨幕、篝火与观星。", href: "/play#events" },
  { key: "shop", icon: "购", title: "田园好物", desc: "龅牙薯文创、农产品，筹备中。", href: "/shop" },
];

export type Room = {
  slug: string;
  name: string;
  type: "民宿" | "酒店";
  price?: number; // 待确认；不填则显示“价格咨询”
  size?: number;
  guests: number;
  bed: string;
  summary: string;
  features: string[];
  hue: number;
};

// 房型名称、人数、价格为示例，请按园区真实房型替换。
export const rooms: Room[] = [
  {
    slug: "huipai-courtyard",
    name: "运河徽派庭院",
    type: "民宿",
    guests: 6,
    bed: "多卧室（待确认）",
    summary: "保留马头墙与青砖黛瓦，内部是现代舒适的居住体验。",
    features: ["徽派建筑", "独立庭院", "待确认"],
    hue: 30,
  },
  {
    slug: "huipai-double",
    name: "徽派双床房",
    type: "民宿",
    guests: 2,
    bed: "双床",
    summary: "木色与米白，安静舒适，适合朋友同行。",
    features: ["徽派风格", "独立卫浴", "待确认"],
    hue: 90,
  },
  {
    slug: "family-room",
    name: "亲子阁楼房",
    type: "民宿",
    guests: 4,
    bed: "大床 + 阁楼床",
    summary: "木质吊顶与小阁楼，孩子的秘密基地。",
    features: ["亲子友好", "阁楼", "待确认"],
    hue: 190,
  },
];

export type Spot = {
  slug: string;
  title: string;
  desc: string;
  tag: "游玩" | "餐饮" | "体验" | "夜游";
  hue: number;
};

export const playSpots: Spot[] = [
  { slug: "pet-park", title: "萌宠乐园 · 手工坊", desc: "与梅花鹿、羊驼、豚鼠亲密互动，在手工坊体验非遗与创意手作，亲子首选。", tag: "游玩", hue: 40 },
  { slug: "rainbow-slide", title: "彩虹滑道", desc: "春夏季高山滑草与彩虹滑道，风驰电掣；冬季变身冰雪乐园，滑冰滑雪。", tag: "游玩", hue: 340 },
  { slug: "forest-camp", title: "森林部落", desc: "300 亩原始森林基底，沉浸式露营，驾驶沙滩摩托在林间驰骋。", tag: "体验", hue: 140 },
  { slug: "lure-fishing", title: "路亚垂钓", desc: "专业路亚场地，渔获丰富，适合切磋技艺、静享渔趣。", tag: "体验", hue: 200 },
  { slug: "mini-train", title: "小火车", desc: "绕园区缓缓而行，边坐边看田园风光。", tag: "游玩", hue: 210 },
  { slug: "shared-farm", title: "共享菜园 · 铁锅烟火", desc: "认领一块菜园，做一日“农夫”；或在户外架起铁锅，柴火烹饪新鲜食材。", tag: "体验", hue: 90 },
  { slug: "open-air-cinema", title: "露天星空巨幕", desc: "夜幕降临，在星空下看一场露天电影，微风拂面，星光点点。", tag: "夜游", hue: 260 },
  { slug: "stargazing", title: "观星", desc: "低光污染、视野开阔，是北京近郊的观星点位，曾举办梅西耶天体马拉松观测活动。", tag: "夜游", hue: 235 },
  { slug: "study-tour", title: "科普研学", desc: "围绕古村、运河与田园的科普研学活动，适合学校和亲子团队。", tag: "体验", hue: 150 },
];

export const diningSpots: Spot[] = [
  { slug: "wharf-fish", title: "码头鱼馆", desc: "靠水吃水，鲜味当头。主打运河铁锅炖、特色砂锅及墨脱石锅菜，选用运河活鱼小火慢炖，是地道的京郊烟火气。", tag: "餐饮", hue: 200 },
  { slug: "village-cafe", title: "Sharklāka 咖啡厅", desc: "原木基底融合徽派院落美学，暖光卡座，户外露台直面庭院。咖啡、茶饮与特色轻食，可会客、闲谈、小坐。", tag: "餐饮", hue: 25 },
  { slug: "tea-fire", title: "围炉煮茶", desc: "三五好友围炉而坐，慢慢煮一壶茶。", tag: "体验", hue: 15 },
  { slug: "beer", title: "“渡”牌啤酒", desc: "夜晚的微醺时刻，年轻人的社交场，也是旅人的能量补给站。", tag: "餐饮", hue: 45 },
];

export const diningGallery = [
  { id: 1, caption: "宴客长桌包间" },
  { id: 2, caption: "圆桌包间" },
  { id: 3, caption: "鱼馆大厅" },
  { id: 4, caption: "咖啡厅" },
  { id: 5, caption: "咖啡厅吧台" },
];

export const events = [
  { time: "2026-04-27 起", title: "千帆启航·云京非遗汇", desc: "开园同期举办，为期 10 天的非遗展演与体验。" },
  { time: "持续举办", title: "露营音乐会", desc: "星空、篝火、音乐，打造最难忘的夜晚。" },
  { time: "持续举办", title: "天文观测活动", desc: "曾举办梅西耶天体马拉松观测，后续活动以公告为准。" },
  { time: "持续举办", title: "科普研学", desc: "古村、运河、田园主题研学课程。" },
];

export const teamPrograms = [
  { title: "户外拓展", desc: "依托森林与草地，定制专业拓展课程，熔炼团队。" },
  { title: "铁锅炖大赛 / 烧烤派对", desc: "分组协作，生火做饭，在烟火气中拉近同事距离。" },
  { title: "麦香林趣 / 农耕体验", desc: "走进麦田，体验丰收，感悟“一分耕耘一分收获”。" },
  { title: "露营音乐会", desc: "星空、篝火、音乐，打造最难忘的团队之夜。" },
];

export const history = {
  title: "千帆竞渡　心归于此",
  body: [
    "千帆集文化艺术共创园，由北京百草虫旅游文化发展有限公司倾力打造，坐拥 2000 余亩广袤土地，是大运河畔一颗璀璨的文旅明珠。",
    "马头村因运河码头而得名，“日过千帆不绝影”，说的正是当年运河上帆影不断、商旅往来的景象。园区于 2026 年 4 月 27 日世界运河古镇合作机制会议期间正式开园。",
    "我们把徽派建筑的典雅与京郊田园的野趣融合在一起：白墙黑瓦的诗意居住，吃喝玩乐购的一站式体验。无论家庭亲子、情侣约会，还是企业团建，都是逃离城市喧嚣、回归自然本真的好去处。",
  ],
  points: [
    { title: "徽派美学", desc: "移步换景，仿佛置身水墨江南。" },
    { title: "超大空间", desc: "2000 余亩沉浸式游玩区，拒绝拥挤，拥抱自然。" },
    { title: "业态齐全", desc: "从垂髫小儿到耄耋老人，都能找到专属乐趣。" },
  ],
};

export const gallery = [
  "徽派院落航拍", "宴客长桌", "Sharklāka 咖啡厅", "亲子阁楼房", "民宿双床房",
  "墨脱石锅菜", "接待中心", "庭院一角", "民宿客厅",
].map((caption, i) => ({ id: i, caption, hue: (i * 40 + 150) % 360 }));

// 二期：农产品与会员套餐，目前仅作展示预告。
export const shopPreview = {
  products: ["龅牙薯文创", "时令蔬果", "农家杂粮", "园区伴手礼"],
  ip: {
    name: "龅牙薯",
    desc: "千帆集本土原创卡通 IP，根植于马头村大运河漕运乡土文化，形象活泼呆萌。已开发手办、帆布包、钥匙扣、书签、徽章、明信片、主题摆件等文创系列。",
  },
  plans: [
    { name: "田园季卡", desc: "按季配送时令蔬果，含游玩项目优惠。" },
    { name: "千帆年卡", desc: "全年住宿折扣、游玩项目次数与农产品权益。" },
    { name: "认养一亩田", desc: "认养一块地，收获季到园体验并带走农产品。" },
  ],
};
