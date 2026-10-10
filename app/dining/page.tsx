import type { Metadata } from "next";
import { diningSpots, diningGallery } from "@/lib/data";
import SpotGrid from "@/components/SpotGrid";
import Placeholder from "@/components/Placeholder";

export const metadata: Metadata = { title: "餐饮" };

export default function DiningPage() {
  return (
    <>
      <div className="page-title"><div className="container"><p className="eyebrow">吃</p><h1>餐饮</h1><p className="muted">菜单、营业时间与订座方式待确认。</p></div></div>
      <div className="container section">
        <SpotGrid spots={diningSpots} cols={2} />
        <h2 className="sub">用餐空间</h2>
        <div className="gallery-strip">
          {diningGallery.map((g) => (
            <figure key={g.id}>
              <Placeholder hue={30 + g.id * 30} label={g.caption} slot={`dining-${g.id}`} className="g-item r-leaf" />
              <figcaption>{g.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </>
  );
}
