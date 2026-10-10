// 站点内容集中在这里，替换成真实的名称、价格、文案即可。
export const site = {
  name: "山水云舍",
  tagline: "山间一隅，自在栖居",
  description: "山水云舍度假园区：精品酒店、特色民宿与休闲游玩，一站式享受山野慢生活。",
  phone: "400-000-0000",
  email: "hello@example.com",
  address: "某省某市某县山水路 88 号（请替换为真实地址）",
  wechat: "shanshuiyunshe",
  hours: "前台 24 小时服务 · 园区 08:00–22:00",
};

export type Room = {
  slug: string;
  name: string;
  type: "酒店" | "民宿";
  price: number;
  size: number;
  guests: number;
  bed: string;
  summary: string;
  features: string[];
  hue: number;
};

export const rooms: Room[] = [
  {
    slug: "mountain-view-suite",
    name: "云岭山景套房",
    type: "酒店",
    price: 688,
    size: 48,
    guests: 3,
    bed: "1.8m 大床 + 沙发床",
    summary: "整面落地窗直面群山，晨起即见云海。",
    features: ["落地窗山景", "独立浴缸", "智能客控", "含双人早餐"],
    hue: 160,
  },
  {
    slug: "deluxe-king",
    name: "悦居大床房",
    type: "酒店",
    price: 428,
    size: 32,
    guests: 2,
    bed: "1.8m 大床",
    summary: "简约舒适，适合情侣与商务出行。",
    features: ["高速 WiFi", "雨淋花洒", "香氛洗护", "含早餐"],
    hue: 200,
  },
  {
    slug: "courtyard-villa",
    name: "竹影独栋小院",
    type: "民宿",
    price: 1288,
    size: 120,
    guests: 6,
    bed: "2 卧 · 1.8m 大床 ×2",
    summary: "独栋带庭院，可烧烤、围炉煮茶，适合家庭与朋友聚会。",
    features: ["私家庭院", "全套厨房", "烧烤区", "茶室"],
    hue: 90,
  },
  {
    slug: "lakeside-cabin",
    name: "湖畔木屋",
    type: "民宿",
    price: 868,
    size: 56,
    guests: 4,
    bed: "1.8m 大床 + 双层床",
    summary: "木质结构临湖而建，阳台看日落、听水声。",
    features: ["临湖阳台", "壁炉", "露台浴缸", "亲子友好"],
    hue: 30,
  },
];

export type Attraction = {
  title: string;
  desc: string;
  tag: string;
  hue: number;
};

export const attractions: Attraction[] = [
  { title: "云海观景台", desc: "海拔 800 米的日出与云海机位，步行 15 分钟可达。", tag: "景观", hue: 210 },
  { title: "森林栈道", desc: "全长 3 公里的负氧离子步道，适合晨跑与亲子徒步。", tag: "户外", hue: 140 },
  { title: "湖心泛舟", desc: "皮划艇、脚踏船与桨板，教练全程陪同。", tag: "水上", hue: 190 },
  { title: "儿童乐园", desc: "沙池、攀岩墙与小动物互动区，家长可在咖啡角休息。", tag: "亲子", hue: 50 },
  { title: "山野餐厅", desc: "本地时令食材，主打农家菜与山珍火锅。", tag: "美食", hue: 15 },
  { title: "夜间篝火", desc: "周末夜晚篝火晚会、露天电影与星空观测。", tag: "夜游", hue: 270 },
];

export const activities = [
  { time: "周五–周日 19:30", title: "篝火音乐会" },
  { time: "每日 09:00", title: "晨间瑜伽" },
  { time: "每日 15:00", title: "手作茶点体验" },
  { time: "节假日", title: "亲子农场采摘" },
];

export const highlights = [
  { title: "自然疗愈", desc: "群山环绕，远离喧嚣。" },
  { title: "舒适住宿", desc: "酒店与民宿多种选择。" },
  { title: "丰富玩乐", desc: "一站式园区，老少皆宜。" },
  { title: "贴心服务", desc: "接送、烧烤、包车一键安排。" },
];

export const gallery = Array.from({ length: 9 }, (_, i) => ({
  id: i,
  caption: ["日出山景", "大堂", "套房", "小院", "湖景", "餐厅", "步道", "篝火", "星空"][i],
  hue: (i * 40 + 150) % 360,
}));
