import fs from "node:fs";
import path from "node:path";

const EXTS = ["jpg", "jpeg", "png", "webp"];

// 在 public/images/ 下找 <slot>.jpg|jpeg|png|webp，找不到返回 null。
export function findImage(slot?: string) {
  if (!slot) return null;
  for (const ext of EXTS) {
    const file = `${slot}.${ext}`;
    if (fs.existsSync(path.join(process.cwd(), "public", "images", file))) {
      return `/images/${file}`;
    }
  }
  return null;
}

// 项目图集：<prefix>-1, <prefix>-2 … 依次查找，遇到缺号就停止（最多 24 张）。
export function findGallery(prefix: string, max = 24) {
  const out: string[] = [];
  for (let i = 1; i <= max; i++) {
    const src = findImage(`${prefix}-${i}`);
    if (!src) break;
    out.push(src);
  }
  return out;
}
