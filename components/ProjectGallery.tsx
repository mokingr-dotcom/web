import { findGallery, findImage } from "@/lib/images";
import Lightbox from "./Lightbox";

// 项目图集：封面 + <prefix>-1…N，点击放大查看。没有照片时给出提示。
export default function ProjectGallery({
  prefix,
  title,
  min = 1,
  showEmpty = true,
}: {
  prefix: string;
  title: string;
  min?: number;
  showEmpty?: boolean;
}) {
  const cover = findImage(prefix);
  const srcs = [cover, ...findGallery(prefix)].filter((s): s is string => !!s);
  if (srcs.length < min) {
    if (!showEmpty) return null;
    return (
      <section className="proj-gallery">
        <h2 className="center">图集</h2>
        <p className="notice">项目照片即将上线。</p>
      </section>
    );
  }
  return (
    <section className="proj-gallery">
      <h2 className="center">图集</h2>
      <p className="center muted gal-hint">点击图片放大查看</p>
      <Lightbox items={srcs.map((src, i) => ({ src, caption: `${title} · ${i + 1}`, hue: 30 }))} />
    </section>
  );
}
