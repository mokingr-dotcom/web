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
          <p>地址：{site.address}</p>
        </div>
        <div>
          <Link href="/dining">餐饮</Link>
          <Link href="/rooms">住宿</Link>
          <Link href="/play">游玩</Link>
          <Link href="/shop">田园好物</Link>
        </div>
      </div>
      <p className="copy">© {new Date().getFullYear()} {site.name}</p>
    </footer>
  );
}
