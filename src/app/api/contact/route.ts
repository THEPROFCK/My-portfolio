import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limiter (good for portfolios)
const RATE_LIMIT = 5;
const WINDOW_MS = 15 * 60 * 1000;
const requests = new Map<string, { count: number; time: number }>();

function rateLimit(ip: string) {
  const now = Date.now();
  const entry = requests.get(ip);

  if (!entry || now - entry.time > WINDOW_MS) {
    requests.set(ip, { count: 1, time: now });
    return false;
  }

  if (entry.count >= RATE_LIMIT) return true;

  entry.count++;
  return false;
}

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0] ||
    "unknown";

  // 🚫 Rate limit
  if (rateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many requests" },
      { status: 429 }
    );
  }

  const { name, email, message, company } = await req.json();

  // 🕵️ Honeypot check
  if (company) {
    return NextResponse.json({ success: true });
  }

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Missing fields" },
      { status: 400 }
    );
  }

  try {
    console.log("Attempting to send email via Resend...");
    console.log("API Key present:", !!process.env.RESEND_API_KEY);
    console.log("Contact Email:", process.env.CONTACT_EMAIL);

    const data = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL!],
      subject: `New message from ${name}`,
      replyTo: email,
      html: `
        <h3>New Portfolio Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log("Email sent successfully:", data);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Email failed", details: String(error) },
      { status: 500 }
    );
  }
}
