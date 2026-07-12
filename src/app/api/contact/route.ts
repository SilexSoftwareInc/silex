import { NextResponse } from "next/server";
import { validateContact, sendContactEmail } from "@/lib/contact";
import { checkRateLimit, parseCookie, RATE_LIMIT_COOKIE } from "@/lib/rateLimit";

export async function POST(request: Request) {
  // Cookie-based limiter (instance-independent; survives serverless restarts).
  const cookies = parseCookie(request.headers.get("cookie"));
  const rate = checkRateLimit(cookies[RATE_LIMIT_COOKIE]);
  if (rate.limited) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  // Honeypot: real users never see/fill this field; bots usually do.
  const raw = body as Record<string, unknown>;
  if (typeof raw.website === "string" && raw.website.length > 0) {
    return NextResponse.json({ error: "Submission rejected." }, { status: 400 });
  }

  const result = validateContact(body);
  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }

  try {
    await sendContactEmail(result.data);
  } catch {
    return NextResponse.json(
      { error: "Unable to send message. Please try again later." },
      { status: 500 }
    );
  }

  const res = NextResponse.json({ success: true });
  res.cookies.set(rate.name, rate.cookie, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: rate.maxAge,
  });
  return res;
}
