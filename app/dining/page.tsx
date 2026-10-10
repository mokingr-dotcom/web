import type { Metadata } from "next";
import { diningSpots, diningGallery } from "@/lib/data";
import { findImage } from "@/lib/images";
import FeatureRow from "@/components/FeatureRow";
import IndexList from "@/components/IndexList";
import Placeholder from "@/components/Placeholder";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = { title: "餐饮" };

export default function DiningPage() {
  const withPhoto = diningSpots.filter((s) => findImage(`spot-${s.slug}`));
  const without = diningSpots.filter((s) => !findImage(`spot-${s.slug}`));
  return (
    <>
      <div className="page-title"><div className="container"><p className="eyebrow">吃</p><h1>餐饮</h1><p className="muted">菜单、营业时间与订座方式待确认。</p></div></div>
      <div className="container section feature-list">
        {withPhoto.map((s, i) => (
          <FeatureRow key={s.slug} index={i} slot={`spot-${s.slug}`} label={s.title} eyebrow={s.tag} title={s.title} desc={s.desc} />
        ))}
        {without.length > 0 && (
          <>
            <h2 className="sub">更多体验</h2>
            <IndexList spots={without} />
          </>
        )}
        <h2 className="sub">用餐空间</h2>
        <div className="bento">
          {diningGallery.map((g) => (
            <Reveal key={g.id} className={`bento-i b${g.id}`} wipe>
              <Placeholder label={g.caption} slot={`dining-${g.id}`} className="cover" />
              <span className="bento-cap">{g.caption}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
