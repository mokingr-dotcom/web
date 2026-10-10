import type { Metadata } from "next";
import { gallery } from "@/lib/data";
import Placeholder from "@/components/Placeholder";

export const metadata: Metadata = { title: "图集" };

export default function GalleryPage() {
  return (
    <div className="container section">
      <h1>图集</h1>
      <p className="muted">当前为占位图，上线前替换为实拍照片。</p>
      <div className="grid grid-3 gallery">
        {gallery.map((g) => (
          <Placeholder key={g.id} hue={g.hue} label={g.caption} slot={`gallery-${g.id + 1}`} className="g-item" />
        ))}
      </div>
    </div>
  );
}
