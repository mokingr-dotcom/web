import type { Metadata } from "next";
import Link from "next/link";
import { teamPrograms, site } from "@/lib/data";
import IndexList from "@/components/IndexList";

export const metadata: Metadata = { title: "团建活动" };

export default function TeamPage() {
  return (
    <>
      <div className="page-title">
        <div className="container">
          <p className="eyebrow">TEAM · 团建</p>
          <h1>企业团建 · 定制专家</h1>
          <p className="muted">年会、部门团建、新品发布、亲子家庭日，一站式落地。</p>
        </div>
      </div>
      <div className="container section">
        <h2 className="center">为什么选择千帆集</h2>
        <p className="lead center" style={{ margin: "0 auto" }}>
          园区占地 {site.area}，坐落于大运河马头村，集吃、住、玩、乐、购于一体。业态丰富完备，涵盖运河徽派精品民宿、码头鱼馆特色餐饮、Sharklāka 咖啡厅、龅牙薯 IP 文创、路亚垂钓、露天星空影院、露营团建、亲子研学、田园采摘等多元体验，能够满足团建、家庭出游、研学活动、商务接待等各类需求。
        </p>
        <h2 className="sub center">团建项目推荐</h2>
        <IndexList spots={teamPrograms} base="/team" />
        <p className="center" style={{ marginTop: 56 }}><Link href="/booking" className="btn">咨询团建方案</Link></p>
      </div>
    </>
  );
}
