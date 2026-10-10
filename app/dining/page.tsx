import type { Metadata } from "next";
import { diningSpots } from "@/lib/data";
import SpotGrid from "@/components/SpotGrid";

export const metadata: Metadata = { title: "餐饮" };

export default function DiningPage() {
  return (
    <div className="container section">
      <h1>餐饮</h1>
      <p className="muted">菜单、营业时间与订座方式待确认。</p>
      <SpotGrid spots={diningSpots} />
    </div>
  );
}
