import nodemailer from "nodemailer";

export const runtime = "nodejs";

const FIELDS = [
  ["name", "Full name"],
  ["phone", "Phone"],
  ["mc", "MC number"],
  ["email", "Email"],
  ["message", "Message"],
] as const;

const esc = (v: string) =>
  v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: bots fill this hidden field. Pretend success and drop it.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return Response.json({ ok: true });
  }

  const data: Record<string, string> = {};
  for (const [key] of FIELDS) {
    const v = body[key];
    data[key] = typeof v === "string" ? v.trim().slice(0, key === "message" ? 2000 : 500) : "";
  }

  if (!data.name || !data.phone || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return Response.json({ ok: false, error: "Name, phone and a valid email are required" }, { status: 400 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, MAIL_FROM, MAIL_TO } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !MAIL_FROM || !MAIL_TO) {
    console.error("[lead] SMTP env vars are not configured");
    return Response.json({ ok: false, error: "Server not configured" }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 465,
    secure: SMTP_SECURE === "true",
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const text = FIELDS.map(([k, label]) => `${label}: ${data[k] || "-"}`).join("\n");
  const html = `<table cellpadding="6">${FIELDS.map(
    ([k, label]) => `<tr><td><b>${label}</b></td><td>${esc(data[k]) || "-"}</td></tr>`,
  ).join("")}</table>`;

  try {
    await transporter.sendMail({
      from: MAIL_FROM,
      to: MAIL_TO,
      replyTo: data.email,
      subject: `New carrier lead: ${data.name.replace(/[\r\n]+/g, " ")}`,
      text,
      html,
    });
    return Response.json({ ok: true });
  } catch (err) {
    console.error("[lead] send failed", err);
    return Response.json({ ok: false, error: "Could not send" }, { status: 502 });
  }
}
