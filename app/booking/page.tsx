import type { Metadata } from "next";
import { rooms } from "@/lib/data";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = { title: "在线预订" };

export default async function BookingPage({
  searchParams,
}: {
  searchParams: Promise<{ room?: string }>;
}) {
  const { room } = await searchParams;
  return (
    <>
    <div className="page-title"><div className="container"><p className="eyebrow">预订</p><h1>预订咨询</h1></div></div>
    <div className="container section narrow">
      <p className="muted">提交后我们会尽快与您确认房态和价格，暂不在线支付。</p>
      <BookingForm
        rooms={rooms.map((r) => ({ slug: r.slug, name: r.name }))}
        defaultRoom={room}
      />
    </div>
    </>
  );
}
