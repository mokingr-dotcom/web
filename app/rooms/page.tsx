import type { Metadata } from "next";
import { rooms } from "@/lib/data";
import FeatureRow from "@/components/FeatureRow";

export const metadata: Metadata = { title: "住宿" };

export default function RoomsPage() {
  return (
    <>
      <div className="page-title"><div className="container"><p className="eyebrow">住</p><h1>徽派民宿</h1><p className="muted">房型与价格待确认，以下为示例。</p></div></div>
      <div className="container section feature-list">
        {rooms.map((r, i) => (
          <FeatureRow
            key={r.slug}
            index={i}
            slot={`room-${r.slug}`}
            label={r.name}
            eyebrow={`${r.type} · 宜住 ${r.guests} 人`}
            title={r.name}
            desc={r.summary}
            meta={r.price ? `¥${r.price} 起 / 晚` : "价格请咨询"}
            href={`/rooms/${r.slug}`}
          />
        ))}
      </div>
    </>
  );
}
