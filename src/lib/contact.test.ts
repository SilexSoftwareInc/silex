import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("nodemailer", () => ({
  default: {
    createTransport: vi.fn(() => ({
      sendMail: vi.fn(async () => ({ messageId: "test" })),
    })),
  },
}));

import nodemailer from "nodemailer";
import { validateContact, sendContactEmail } from "@/lib/contact";

describe("validateContact", () => {
  it("rejects a non-object body", () => {
    expect(validateContact(null).ok).toBe(false);
    expect(validateContact("nope").ok).toBe(false);
  });

  it("requires a name, valid email, and message", () => {
    expect(validateContact({ email: "a@b.com", message: "hi" }).ok).toBe(false);
    expect(validateContact({ name: "A", message: "hi" }).ok).toBe(false);
    expect(
      validateContact({ name: "A", email: "not-an-email", message: "hi" }).ok
    ).toBe(false);
  });

  it("accepts a valid payload and trims fields", () => {
    const res = validateContact({
      name: "  Jane  ",
      email: "JANE@EXAMPLE.COM",
      company: "Acme",
      service: "web",
      message: "Hello there",
    });
    expect(res.ok).toBe(true);
    if (res.ok) {
      expect(res.data.name).toBe("Jane");
      expect(res.data.email).toBe("JANE@EXAMPLE.COM");
      expect(res.data.company).toBe("Acme");
    }
  });

  it("omits optional blank fields", () => {
    const res = validateContact({
      name: "Jane",
      email: "jane@example.com",
      company: "   ",
      message: "Hello",
    });
    expect(res.ok).toBe(true);
    if (res.ok) expect(res.data.company).toBeUndefined();
  });

  it("rejects overly long fields", () => {
    expect(
      validateContact({
        name: "x".repeat(200),
        email: "jane@example.com",
        message: "hi",
      }).ok
    ).toBe(false);
    expect(
      validateContact({
        name: "Jane",
        email: "jane@example.com",
        message: "x".repeat(6000),
      }).ok
    ).toBe(false);
  });
});

describe("sendContactEmail", () => {
  const sendMail = vi.fn(async (opts: unknown) => {
    void opts;
    return { messageId: "test" };
  });

  beforeEach(() => {
    vi.clearAllMocks();
    (
      nodemailer.createTransport as unknown as ReturnType<typeof vi.fn>
    ).mockReturnValue({ sendMail });
    process.env.SMTP_HOST = "";
    process.env.CONTACT_EMAIL = "";
  });

  it("skips delivery when SMTP is not configured", async () => {
    await sendContactEmail({
      name: "Jane",
      email: "jane@example.com",
      message: "Hi",
    });
    expect(sendMail).not.toHaveBeenCalled();
  });

  it("sends an email when SMTP is configured", async () => {
    process.env.SMTP_HOST = "smtp.example.com";
    process.env.SMTP_PORT = "587";
    process.env.CONTACT_EMAIL = "owner@example.com";
    process.env.SMTP_FROM = "noreply@example.com";

    await sendContactEmail({
      name: "Jane",
      email: "jane@example.com",
      company: "Acme",
      service: "web",
      message: "Hello",
    });

    expect(sendMail).toHaveBeenCalledOnce();
    const call = sendMail.mock.calls[0];
    expect(call).toBeDefined();
    const opts = call![0] as { to: string; replyTo: string; text: string };
    expect(opts.to).toBe("owner@example.com");
    expect(opts.replyTo).toBe("jane@example.com");
    expect(opts.text).toContain("Company: Acme");
  });
});
