import { NextResponse } from "next/server";

/**
 * Discovery meeting form handler.
 * Sends an email notification through Resend when RESEND_API_KEY is set.
 * Env vars: RESEND_API_KEY, BOOK_NOTIFY_TO (comma separated), BOOK_NOTIFY_FROM.
 */
export async function POST(req: Request) {
  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // Honeypot: bots fill hidden fields.
  if (body.company) return NextResponse.json({ ok: true });

  const firstName = (body.firstName ?? "").trim();
  const lastName = (body.lastName ?? "").trim();
  const email = (body.email ?? "").trim();
  const phone = (body.phone ?? "").trim();
  const message = (body.message ?? "").trim();
  if (!firstName || !lastName || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ ok: false }, { status: 422 });
  }

  const key = process.env.RESEND_API_KEY;
  const to = (process.env.BOOK_NOTIFY_TO ?? "").split(",").map((s) => s.trim()).filter(Boolean);
  const from = process.env.BOOK_NOTIFY_FROM ?? "NovoTime Website <onboarding@resend.dev>";

  if (!key || to.length === 0) {
    console.warn("[book] RESEND_API_KEY or BOOK_NOTIFY_TO not set; submission not emailed", { firstName, lastName, email });
    return NextResponse.json({ ok: true, delivered: false });
  }

  const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);
  const html = `<h2>New Discovery Meeting Request</h2>
    <p><b>Name:</b> ${esc(firstName)} ${esc(lastName)}<br/><b>Email:</b> ${esc(email)}<br/><b>Phone:</b> ${esc(phone || "Not provided")}</p>
    <p><b>What prompted them to reach out:</b><br/>${esc(message || "Not provided").replace(/\n/g, "<br/>")}</p>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from, to, reply_to: email, subject: `Discovery meeting request: ${firstName} ${lastName}`, html }),
  });

  if (!res.ok) {
    console.error("[book] Resend error", res.status, await res.text());
    return NextResponse.json({ ok: false }, { status: 502 });
  }
  return NextResponse.json({ ok: true, delivered: true });
}
