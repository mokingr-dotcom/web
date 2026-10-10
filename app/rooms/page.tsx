import type { Metadata } from "next";
import { rooms } from "@/lib/data";
import Gallery3 from "@/components/Gallery3";

export const metadata: Metadata = { title: "住宿" };

export default function RoomsPage() {
  return (
    <>
      <div className="page-title"><div className="container"><p className="eyebrow">STAY · 住</p><h1>徽派民宿</h1><p className="muted">房型与价格待确认，以下为示例。</p></div></div>
      <div className="container section">
        <Gallery3
          items={rooms.map((r) => ({
            slot: `room-${r.slug}`,
            label: r.name,
            eyebrow: `${r.type} · 宜住 ${r.guests} 人`,
            title: r.name,
            desc: r.summary,
            href: `/rooms/${r.slug}`,
          }))}
        />
      </div>
    </>
  );
}
