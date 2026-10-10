import type { Metadata } from "next";
import { history } from "@/lib/data";

export const metadata: Metadata = { title: "千帆故事" };

export default function StoryPage() {
  return (
    <>
    <div className="page-title"><div className="container"><p className="eyebrow">千帆故事</p><h1>{history.title}</h1></div></div>
    <div className="container section narrow">
      {history.body.map((p) => <p key={p} style={{ fontSize: "1.1rem" }}>{p}</p>)}
    </div>
    </>
  );
}
