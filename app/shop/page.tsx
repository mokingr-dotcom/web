import type { Metadata } from "next";
import Link from "next/link";
import { shopPreview } from "@/lib/data";

export const metadata: Metadata = { title: "田园好物" };

export default function ShopPage() {
  return (
    <>
    <div className="page-title"><div className="container"><p className="eyebrow">购</p><h1>田园好物</h1><p className="muted">农产品商城与会员套餐正在筹备中，敬请期待。</p></div></div>
    <div className="container section">
      <h2 className="sub">即将上线</h2>
      <div className="grid grid-4">
        {shopPreview.products.map((p) => <div key={p} className="highlight"><h3>{p}</h3></div>)}
      </div>
      <h2 className="sub">会员套餐（规划中）</h2>
      <div className="grid grid-3">
        {shopPreview.plans.map((p) => (
          <div key={p.name} className="highlight"><h3>{p.name}</h3><p className="muted">{p.desc}</p></div>
        ))}
      </div>
      <p style={{ marginTop: 32 }}><Link href="/booking" className="btn">先留言咨询</Link></p>
    </div>
    </>
  );
}
