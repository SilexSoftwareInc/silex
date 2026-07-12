import { describe, it, expect } from "vitest";
import { POST } from "@/app/api/contact/route";

async function post(body: unknown, cookie?: string) {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  if (cookie) headers["cookie"] = cookie;
  const res = await POST(
    new Request("http://localhost/api/contact", {
      method: "POST",
      headers,
      body: typeof body === "string" ? body : JSON.stringify(body),
    })
  );
  const setCookie = res.headers.get("set-cookie");
  return {
    status: res.status,
    json: (await res.json()) as Record<string, unknown>,
    cookie: setCookie?.split(";")[0],
  };
}

describe("POST /api/contact", () => {
  it("rejects an invalid JSON body", async () => {
    const res = await post("{not json");
    expect(res.status).toBe(400);
  });

  it("rejects missing required fields", async () => {
    const res = await post({ email: "a@b.com", message: "hi" });
    expect(res.status).toBe(400);
    expect(res.json.error).toBeTruthy();
  });

  it("rejects an invalid email", async () => {
    const res = await post({ name: "Jane", email: "nope", message: "hi" });
    expect(res.status).toBe(400);
  });

  it("rejects a filled honeypot field", async () => {
    const res = await post({
      name: "Jane",
      email: "jane@example.com",
      message: "Hello",
      website: "spam.example",
    });
    expect(res.status).toBe(400);
  });

  it("accepts a valid submission and sets a rate-limit cookie", async () => {
    const res = await post({
      name: "Jane",
      email: "jane@example.com",
      message: "Hello",
    });
    expect(res.status).toBe(200);
    expect(res.json.success).toBe(true);
    expect(res.cookie).toBeTruthy();
  });

  it("rate-limits repeat submissions that carry the cookie", async () => {
    let cookie: string | undefined;
    let last = 200;
    for (let i = 0; i < 6; i++) {
      const res = await post(
        { name: "Jane", email: "jane@example.com", message: "Hello" },
        cookie
      );
      last = res.status;
      cookie = res.cookie ?? cookie;
    }
    expect(last).toBe(429);
  });
});
