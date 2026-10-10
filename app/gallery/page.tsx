import type { Metadata } from "next";
import { gallery } from "@/lib/data";
import Placeholder from "@/components/Placeholder";

export const metadata: Metadata = { title: "图集" };

export default function GalleryPage() {
  return (
    <>
    <div className="page-title"><div className="container"><p className="eyebrow">影</p><h1>图集</h1><p className="muted">当前为示意图，上线前替换为实拍照片。</p></div></div>
    <div className="container section">
      <div className="grid grid-3 gallery">
        {gallery.map((g) => (
          <Placeholder key={g.id} hue={g.hue} label={g.caption} slot={`gallery-${g.id + 1}`} className="g-item" />
        ))}
      </div>
    </div>
    </>
  );
}
