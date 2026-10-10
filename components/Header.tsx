"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/lib/data";

const nav = [
  { href: "/dining", label: "餐饮" },
  { href: "/rooms", label: "住宿" },
  { href: "/play", label: "游玩" },
  { href: "/team", label: "团建活动" },
  { href: "/story", label: "千帆故事" },
  { href: "/shop", label: "田园好物" },
  { href: "/contact", label: "联系" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const clear = pathname === "/" && !scrolled && !open;

  return (
    <header className={`header ${clear ? "clear" : "solid"}${open ? " menu-open" : ""}`}>
      <div className="container header-in">
        <Link href="/" className="logo" aria-label={site.name}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={clear || open ? "/brand/logo-light.png" : "/brand/logo-dark.png"} alt={site.short} height={46} />
        </Link>
        <button type="button" className={`burger ${open ? "on" : ""}`} onClick={() => setOpen(!open)} aria-label="菜单" aria-expanded={open}>
          <span /><span />
        </button>
        <nav className={`nav ${open ? "open" : ""}`} aria-label="主导航">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className={pathname === n.href ? "cur" : ""}>{n.label}</Link>
          ))}
          <Link href="/booking" className="btn btn-sm">预订咨询</Link>
        </nav>
      </div>
    </header>
  );
}
