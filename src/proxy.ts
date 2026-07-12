import { NextResponse, type NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  // Strip any inbound CSP headers so a crafted request cannot influence the
  // nonce Next.js applies to its framework scripts (CSP2XSS / CVE-2026-44581).
  // Our CSP is set authoritatively via next.config.ts response headers.
  requestHeaders.delete("content-security-policy");
  requestHeaders.delete("content-security-policy-report-only");

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
