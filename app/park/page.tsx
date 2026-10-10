import type { Metadata } from "next";
import { attractions, activities } from "@/lib/data";
import Placeholder from "@/components/Placeholder";

export const metadata: Metadata = { title: "园区游玩" };

export default function ParkPage() {
  return (
    <div className="container section">
      <h1>园区游玩</h1>
      <p className="muted">住在园区，玩在园区。以下项目住客可享优惠，详情以现场公告为准。</p>
      <div className="grid grid-3">
        {attractions.map((a) => (
          <div key={a.title} className="card">
            <Placeholder hue={a.hue} label={a.tag} className="card-img" />
            <div className="card-body">
              <h3>{a.title}</h3>
              <p className="muted">{a.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <h2 className="sub">活动安排</h2>
      <ul className="activities">
        {activities.map((a) => (
          <li key={a.title}><span>{a.time}</span><strong>{a.title}</strong></li>
        ))}
      </ul>
    </div>
  );
}
