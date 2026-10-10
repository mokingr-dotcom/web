import type { Metadata } from "next";
import { history, site } from "@/lib/data";
import Placeholder from "@/components/Placeholder";

export const metadata: Metadata = { title: "千帆故事" };

export default function StoryPage() {
  return (
    <>
      <div className="page-title"><div className="container"><p className="eyebrow">STORY · 千帆故事</p><h1>{history.title}</h1><p className="muted">{site.slogan}</p></div></div>
      <div className="container section">
        <div className="detail">
          <div>
            {history.body.map((p) => <p key={p} className="lead">{p}</p>)}
          </div>
          <Placeholder hue={30} label="千帆集园区大门" slot="story-gate" className="detail-img" />
        </div>
        <h2 className="sub">核心亮点</h2>
        <div className="grid grid-3">
          {history.points.map((p) => (
            <div key={p.title} className="highlight"><h3>{p.title}</h3><p className="muted">{p.desc}</p></div>
          ))}
        </div>
      </div>
    </>
  );
}
