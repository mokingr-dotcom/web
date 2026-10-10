import type { Metadata } from "next";
import { gallery } from "@/lib/data";
import { findImage } from "@/lib/images";
import Lightbox from "@/components/Lightbox";

export const metadata: Metadata = { title: "图集" };

export default function GalleryPage() {
  const items = gallery.map((g) => ({
    src: findImage(`gallery-${g.id + 1}`),
    caption: g.caption,
    hue: g.hue,
  }));
  return (
    <>
      <div className="page-title"><div className="container"><p className="eyebrow">影</p><h1>图集</h1><p className="muted">园区实景，点击图片查看大图。</p></div></div>
      <div className="container section">
        <Lightbox items={items} />
      </div>
    </>
  );
}
