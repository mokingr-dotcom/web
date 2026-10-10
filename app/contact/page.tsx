import type { Metadata } from "next";
import { site } from "@/lib/data";

export const metadata: Metadata = { title: "联系我们" };

export default function ContactPage() {
  return (
    <div className="container section">
      <h1>联系我们</h1>
      <div className="grid grid-2">
        <div className="panel">
          <p><strong>电话</strong>　{site.phone}</p>
          <p><strong>邮箱</strong>　{site.email}</p>
          <p><strong>微信</strong>　{site.wechat}</p>
          <p><strong>地址</strong>　{site.address}</p>
          <p><strong>服务时间</strong>　{site.hours}</p>
          <h3>交通指引</h3>
          <p className="muted">自驾：导航搜索“{site.name}”，园区设有免费停车场。公共交通与接送服务请电话咨询。</p>
        </div>
        <div className="map" role="img" aria-label="地图占位">
          地图占位
          <small>接入高德 / 百度地图 JS API 后替换此区域</small>
        </div>
      </div>
    </div>
  );
}
