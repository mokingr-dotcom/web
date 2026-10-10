import type { Metadata } from "next";
import { history } from "@/lib/data";

export const metadata: Metadata = { title: "千帆故事" };

export default function StoryPage() {
  return (
    <div className="container section narrow">
      <h1>{history.title}</h1>
      {history.body.map((p) => <p key={p}>{p}</p>)}
    </div>
  );
}
