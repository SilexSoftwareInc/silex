import { describe, it, expect } from "vitest";
import { checkRateLimit, parseCookie } from "@/lib/rateLimit";

describe("parseCookie", () => {
  it("parses key=value pairs and decodes values", () => {
    const out = parseCookie("a=1; b=hello%20world; c=");
    expect(out.a).toBe("1");
    expect(out.b).toBe("hello world");
    expect(out.c).toBe("");
  });

  it("returns an empty object for null", () => {
    expect(parseCookie(null)).toEqual({});
  });
});

describe("checkRateLimit", () => {
  it("allows up to the limit then blocks", () => {
    let cookie: string | undefined;
    for (let i = 0; i < 5; i++) {
      const r = checkRateLimit(cookie);
      expect(r.limited).toBe(false);
      cookie = r.cookie;
    }
    const blocked = checkRateLimit(cookie);
    expect(blocked.limited).toBe(true);
  });

  it("rejects a tampered cookie", () => {
    const r = checkRateLimit("Zm9v.YmFy");
    // Tampered/invalid signature yields an empty hit list, so not limited,
    // but the returned cookie is freshly signed (cannot replay attacker value).
    expect(r.cookie).toBeTruthy();
    expect(r.cookie).not.toBe("Zm9v.YmFy");
  });
});
