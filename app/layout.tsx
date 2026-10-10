import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: { default: `${site.name} · ${site.tagline}`, template: `%s | ${site.name}` },
  description: site.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <div className="mobile-cta"><a href="/booking">预订咨询</a><a href="/contact">到访路线</a></div>
      </body>
    </html>
  );
}
