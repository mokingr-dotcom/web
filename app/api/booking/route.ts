import { NextResponse } from "next/server";
import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { rooms } from "@/lib/data";

export const runtime = "nodejs";

const str = (v: unknown, max: number) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "请求格式错误" }, { status: 400 });
  }

  const record = {
    name: str(body.name, 30),
    phone: str(body.phone, 11),
    room: str(body.room, 60),
    checkIn: str(body.checkIn, 10),
    checkOut: str(body.checkOut, 10),
    guests: Number(body.guests),
    note: str(body.note, 500),
    createdAt: new Date().toISOString(),
  };

  if (!record.name) return NextResponse.json({ error: "请填写姓名" }, { status: 400 });
  if (!/^1[3-9]\d{9}$/.test(record.phone))
    return NextResponse.json({ error: "手机号格式不正确" }, { status: 400 });
  if (!rooms.some((r) => r.slug === record.room))
    return NextResponse.json({ error: "房型无效" }, { status: 400 });
  if (!/^\d{4}-\d{2}-\d{2}$/.test(record.checkIn) || !/^\d{4}-\d{2}-\d{2}$/.test(record.checkOut))
    return NextResponse.json({ error: "日期格式不正确" }, { status: 400 });
  if (record.checkOut <= record.checkIn)
    return NextResponse.json({ error: "离店日期需晚于入住日期" }, { status: 400 });
  if (!Number.isInteger(record.guests) || record.guests < 1 || record.guests > 12)
    return NextResponse.json({ error: "入住人数不正确" }, { status: 400 });

  // 先落地到本地文件；上线时替换为数据库 / 邮件 / 企业微信通知。
  const dir = path.join(process.cwd(), "data");
  await mkdir(dir, { recursive: true });
  await appendFile(path.join(dir, "bookings.jsonl"), JSON.stringify(record) + "\n");

  return NextResponse.json({ ok: true });
}
