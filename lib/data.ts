// 站点内容集中在这里。标注“待确认”的是占位，请用园区真实信息替换。
export const site = {
  name: "千帆集文化共创园",
  short: "千帆集",
  tagline: "日过千帆不绝影",
  description:
    "千帆集文化共创园位于北京通州漷县镇马头村，2000 亩农文商旅综合体，集吃、住、玩、逛、乐、购于一体，运河古村与田园风光里的近郊度假地。",
  phone: "待确认",
  email: "待确认",
  address: "北京市通州区漷县镇马头村（榆林庄村）",
  wechat: "待确认",
  hours: "营业时间待确认",
  openedAt: "2026 年 4 月 27 日",
  area: "2000 亩",
};

export const zones = [
  { key: "eat", icon: "吃", title: "餐饮", desc: "码头鱼馆、乡村咖啡馆、围炉煮茶。", href: "/dining" },
  { key: "stay", icon: "住", title: "住宿", desc: "徽派民宿，推窗见田园。", href: "/rooms" },
  { key: "play", icon: "玩", title: "游玩", desc: "彩虹滑道、小火车、研学与观星。", href: "/play" },
  { key: "stroll", icon: "逛", title: "古村漫步", desc: "古村 + 运河 + 田园，慢慢逛。", href: "/story" },
  { key: "fun", icon: "乐", title: "活动演出", desc: "露天电影院、非遗市集与节庆。", href: "/play#events" },
  { key: "shop", icon: "购", title: "田园好物", desc: "农产品与会员套餐，筹备中。", href: "/shop" },
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

// 房型为占位示例，请按园区真实房型替换。
export const rooms: Room[] = [
  {
    slug: "huipai-courtyard",
    name: "徽派独栋小院",
    type: "民宿",
    guests: 6,
    bed: "多卧室",
    summary: "白墙黛瓦的徽派院落，适合家庭与朋友聚会。",
    features: ["徽派建筑", "独立庭院", "围炉煮茶", "待确认"],
    hue: 30,
  },
  {
    slug: "huipai-double",
    name: "徽派双人间",
    type: "民宿",
    guests: 2,
    bed: "大床",
    summary: "木格窗、青砖地，情侣周末的安静去处。",
    features: ["徽派风格", "田园景观", "含早餐（待确认）"],
    hue: 90,
  },
  {
    slug: "family-room",
    name: "亲子家庭房",
    type: "民宿",
    guests: 4,
    bed: "大床 + 双人床",
    summary: "离彩虹滑道与小火车站点近，带娃出行方便。",
    features: ["亲子友好", "近游乐区", "待确认"],
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
  { slug: "rainbow-slide", title: "彩虹滑道", desc: "色彩缤纷的长滑道，孩子和大人都爱玩。", tag: "游玩", hue: 340 },
  { slug: "mini-train", title: "小火车", desc: "绕园区缓缓而行，边坐边看田园风光。", tag: "游玩", hue: 200 },
  { slug: "open-air-cinema", title: "露天电影院", desc: "夜晚星空下的露天影音，坐在草地上看一场电影。", tag: "夜游", hue: 260 },
  { slug: "stargazing", title: "观星", desc: "低光污染、视野开阔，是北京近郊的观星点位，曾举办梅西耶天体马拉松观测活动。", tag: "夜游", hue: 235 },
  { slug: "study-tour", title: "科普研学", desc: "围绕古村、运河与田园的科普研学活动，适合学校和亲子团队。", tag: "体验", hue: 140 },
];

export const diningSpots: Spot[] = [
  { slug: "wharf-fish", title: "码头鱼馆", desc: "以码头文化为主题，主打鲜鱼与运河风味。", tag: "餐饮", hue: 200 },
  { slug: "village-cafe", title: "乡村咖啡馆", desc: "田园边的一杯咖啡，适合下午慢坐。", tag: "餐饮", hue: 25 },
  { slug: "tea-fire", title: "围炉煮茶", desc: "冬暖夏凉都合适的围炉体验，三五好友闲聊。", tag: "体验", hue: 15 },
];

export const events = [
  { time: "2026-04-27 起", title: "千帆启航·云京非遗汇", desc: "开园同期举办，为期 10 天的非遗展演与体验。" },
  { time: "持续举办", title: "天文观测活动", desc: "曾举办梅西耶天体马拉松观测，后续活动以公告为准。" },
  { time: "持续举办", title: "科普研学", desc: "古村、运河、田园主题研学课程。" },
];

export const history = {
  title: "日过千帆不绝影",
  body: [
    "马头村，因运河码头而得名。“日过千帆不绝影”，描述的正是当年运河上帆影不断、商旅往来的景象。",
    "千帆集文化共创园就落在这片古村与运河之间，于 2026 年 4 月 27 日世界运河古镇合作机制会议期间正式开园，规划面积约 2000 亩。",
    "园区以码头文化与田园休闲为核心，把古村、运河和田园串在一起，让人在这里吃、住、玩、逛、乐、购。",
  ],
};

export const gallery = Array.from({ length: 9 }, (_, i) => ({
  id: i,
  caption: ["徽派民宿", "码头鱼馆", "彩虹滑道", "小火车", "露天电影", "围炉煮茶", "田园", "观星", "运河"][i],
  hue: (i * 40 + 150) % 360,
}));

// 二期：农产品与会员套餐，目前仅作展示预告。
export const shopPreview = {
  products: ["时令蔬果", "农家杂粮", "运河鲜鱼", "园区伴手礼"],
  plans: [
    { name: "田园季卡", desc: "按季配送时令蔬果，含游玩项目优惠。" },
    { name: "千帆年卡", desc: "全年住宿折扣、游玩项目次数与农产品权益。" },
    { name: "认养一亩田", desc: "认养一块地，收获季到园体验并带走农产品。" },
  ],
};
