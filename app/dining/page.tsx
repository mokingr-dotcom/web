import type { Metadata } from "next";
import { diningSpots } from "@/lib/data";
import SpotGrid from "@/components/SpotGrid";

export const metadata: Metadata = { title: "餐饮" };

export default function DiningPage() {
  return (
    <>
    <div className="page-title"><div className="container"><p className="eyebrow">吃</p><h1>餐饮</h1><p className="muted">菜单、营业时间与订座方式待确认。</p></div></div>
    <div className="container section"><SpotGrid spots={diningSpots} /></div>
    </>
  );
}
