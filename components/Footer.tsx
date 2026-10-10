import Link from "next/link";
import { site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-in">
        <div>
          <strong>{site.name}</strong>
          <p>{site.tagline}</p>
        </div>
        <div>
          <p>电话：{site.phone}</p>
          <p>邮箱：{site.email}</p>
          <p>{site.address}</p>
        </div>
        <div>
          <Link href="/rooms">客房民宿</Link>
          <Link href="/park">园区游玩</Link>
          <Link href="/booking">在线预订</Link>
        </div>
      </div>
      <p className="copy">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
    </footer>
  );
}
