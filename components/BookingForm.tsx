"use client";
import { useState } from "react";

type Props = { rooms: { slug: string; name: string }[]; defaultRoom?: string };

export default function BookingForm({ rooms, defaultRoom }: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [msg, setMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "提交失败");
      setStatus("ok");
    } catch (err) {
      setStatus("error");
      setMsg(err instanceof Error ? err.message : "提交失败，请稍后重试");
    }
  }

  if (status === "ok") {
    return <div className="panel ok">已收到您的预订信息，我们会尽快联系您。谢谢！</div>;
  }

  const today = new Date().toISOString().slice(0, 10);

  return (
    <form className="form" onSubmit={onSubmit}>
      <label>姓名<input name="name" required maxLength={30} /></label>
      <label>手机号<input name="phone" required pattern="1[3-9]\d{9}" title="请输入 11 位手机号" inputMode="numeric" /></label>
      <label>咨询房型
        <select name="room" defaultValue={defaultRoom ?? rooms[0].slug}>
          {rooms.map((r) => <option key={r.slug} value={r.slug}>{r.name}</option>)}
        </select>
      </label>
      <div className="row">
        <label>入住日期<input type="date" name="checkIn" required min={today} /></label>
        <label>离店日期<input type="date" name="checkOut" required min={today} /></label>
      </div>
      <label>入住人数<input type="number" name="guests" min={1} max={12} defaultValue={2} required /></label>
      <label>备注<textarea name="note" rows={3} maxLength={500} placeholder="如：需要接送、儿童床、庆生布置等" /></label>
      {status === "error" && <p className="err">{msg}</p>}
      <button className="btn" disabled={status === "sending"}>
        {status === "sending" ? "提交中…" : "提交预订"}
      </button>
    </form>
  );
}
