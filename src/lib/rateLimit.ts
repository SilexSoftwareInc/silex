import crypto from "node:crypto";

// Cookie-based sliding-window limiter. Storing the counter in a signed,
// HttpOnly cookie makes the limit travel with the client, so it survives
// serverless instance restarts (unlike an in-memory Map) and works on Vercel.

const SECRET = process.env.RATE_LIMIT_SECRET ?? "change-me-in-production";
const WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX = 5;
export const RATE_LIMIT_COOKIE = "silex_rl";

function sign(payload: string): string {
  return crypto.createHmac("sha256", SECRET).update(payload).digest("base64url");
}

function encode(hits: number[]): string {
  const payload = Buffer.from(JSON.stringify(hits)).toString("base64url");
  return `${payload}.${sign(payload)}`;
}

function decode(cookie: string | undefined): number[] {
  if (!cookie) return [];
  const dot = cookie.indexOf(".");
  if (dot < 0) return [];
  const payload = cookie.slice(0, dot);
  const sig = cookie.slice(dot + 1);
  if (sig !== sign(payload)) return [];
  try {
    const data = JSON.parse(Buffer.from(payload, "base64url").toString());
    return Array.isArray(data) ? data.filter((n) => typeof n === "number") : [];
  } catch {
    return [];
  }
}

export interface RateResult {
  limited: boolean;
  cookie: string;
  name: string;
  maxAge: number;
}

export function checkRateLimit(cookie: string | undefined): RateResult {
  const now = Date.now();
  const hits = decode(cookie).filter((t) => now - t < WINDOW_MS);
  const maxAge = Math.ceil(WINDOW_MS / 1000);

  if (hits.length >= MAX) {
    return { limited: true, cookie: encode(hits), name: RATE_LIMIT_COOKIE, maxAge };
  }

  hits.push(now);
  return {
    limited: false,
    cookie: encode(hits.slice(-MAX)),
    name: RATE_LIMIT_COOKIE,
    maxAge,
  };
}

export function parseCookie(header: string | null): Record<string, string> {
  const out: Record<string, string> = {};
  if (!header) return out;
  for (const part of header.split(";")) {
    const idx = part.indexOf("=");
    if (idx < 0) continue;
    const k = part.slice(0, idx).trim();
    const v = part.slice(idx + 1).trim();
    if (k) out[k] = decodeURIComponent(v);
  }
  return out;
}
