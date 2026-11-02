import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AIGC 资料库",
  description: "AIGC 影视创作资料库、翻车急救与提示词体检。",
};

export default function AigcLibraryPage() {
  return (
    <section className="aigc-library-page">
      <h1 className="sr-only">AIGC 资料库</h1>
      <iframe
        className="aigc-library-frame"
        src="https://library.zencolor.cn/library.html"
        allow="clipboard-write"
        title="AIGC 资料库"
      />
    </section>
  );
}
