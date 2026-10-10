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
    <div className="container section narrow">
      <h1>在线预订 / 询价</h1>
      <p className="muted">提交后我们会在 24 小时内与您确认房态和价格，暂不在线支付。</p>
      <BookingForm
        rooms={rooms.map((r) => ({ slug: r.slug, name: r.name }))}
        defaultRoom={room}
      />
    </div>
  );
}
