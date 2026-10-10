import type { Metadata } from "next";
import { site } from "@/lib/data";
import Placeholder from "@/components/Placeholder";

export const metadata: Metadata = { title: "联系我们" };

export default function ContactPage() {
  return (
    <>
    <div className="page-title"><div className="container"><p className="eyebrow">CONTACT · 联系</p><h1>联系我们</h1></div></div>
    <div className="container section">
      <div className="grid grid-2">
        <div className="panel">
          <div className="contact-photo"><Placeholder hue={30} label="千帆集园区大门" slot="story-gate" /></div>
          <p><strong>电话</strong>　{site.phone}</p>
          <p><strong>邮箱</strong>　{site.email}</p>
          <p><strong>微信</strong>　{site.wechat}</p>
          <p><strong>运营主体</strong>　{site.company}</p>
          <p><strong>地址</strong>　{site.address}</p>
          <p><strong>服务时间</strong>　{site.hours}</p>
          <h3>交通指引</h3>
          <p className="muted">导航搜索“{site.name}”或“马头村”。停车与公共交通方式待确认。</p>
        </div>
        <div className="map" role="img" aria-label="地图占位">
          地图占位
          <small>接入高德 / 百度地图 JS API 后替换此区域</small>
        </div>
      </div>
    </div>
    </>
  );
}
