import Link from "next/link";
import { site } from "@/lib/data";
import Seal from "./Seal";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-in">
        <div>
          <div className="footer-brand"><Seal size={44} /><strong>{site.name}</strong></div>
          <p className="footer-slogan">{site.tagline}</p>
        </div>
        <div>
          <h4>到访</h4>
          <p>{site.address}</p>
          <p>电话：{site.phone}</p>
          <p>{site.hours}</p>
        </div>
        <div>
          <h4>探索</h4>
          <Link href="/dining">餐饮</Link>
          <Link href="/rooms">住宿</Link>
          <Link href="/play">游玩</Link>
          <Link href="/shop">田园好物</Link>
        </div>
      </div>
      <p className="copy">© {new Date().getFullYear()} {site.name} · 古村 · 运河 · 田园</p>
    </footer>
  );
}
