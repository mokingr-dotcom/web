import type { Metadata } from "next";
import { playSpots, events } from "@/lib/data";
import SpotGrid from "@/components/SpotGrid";

export const metadata: Metadata = { title: "游玩" };

export default function PlayPage() {
  return (
    <>
    <div className="page-title"><div className="container"><p className="eyebrow">玩</p><h1>游玩项目</h1><p className="muted">项目开放时间、票价以园区现场公告为准（待确认）。</p></div></div>
    <div className="container section">
      <SpotGrid spots={playSpots} />
      <h2 className="sub" id="events">活动</h2>
      <ul className="activities">
        {events.map((e) => (
          <li key={e.title}><span>{e.time}</span><div><strong>{e.title}</strong><p className="muted">{e.desc}</p></div></li>
        ))}
      </ul>
    </div>
    </>
  );
}
