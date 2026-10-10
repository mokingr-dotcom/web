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
