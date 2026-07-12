import nodemailer from "nodemailer";

export interface ContactInput {
  name: string;
  email: string;
  company?: string;
  service?: string;
  message: string;
}

export type ValidationResult =
  | { ok: true; data: ContactInput }
  | { ok: false; error: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Upper bounds to keep payloads small (DoS/abuse) and bound the email subject.
const LIMITS = {
  name: 120,
  email: 320,
  company: 160,
  service: 80,
  message: 5000,
} as const;

export function validateContact(input: unknown): ValidationResult {
  if (typeof input !== "object" || input === null) {
    return { ok: false, error: "Invalid request body." };
  }

  const { name, email, company, service, message } = input as Record<
    string,
    unknown
  >;

  if (typeof name !== "string" || name.trim().length === 0) {
    return { ok: false, error: "Name is required." };
  }
  if (name.length > LIMITS.name) {
    return { ok: false, error: "Name is too long." };
  }
  if (typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
    return { ok: false, error: "A valid email is required." };
  }
  if (email.length > LIMITS.email) {
    return { ok: false, error: "Email is too long." };
  }
  if (typeof message !== "string" || message.trim().length === 0) {
    return { ok: false, error: "Message is required." };
  }
  if (message.length > LIMITS.message) {
    return { ok: false, error: "Message is too long." };
  }
  if (typeof company === "string" && company.length > LIMITS.company) {
    return { ok: false, error: "Company is too long." };
  }
  if (typeof service === "string" && service.length > LIMITS.service) {
    return { ok: false, error: "Service is too long." };
  }

  const companyStr = typeof company === "string" ? company.trim() : "";
  const serviceStr = typeof service === "string" ? service.trim() : "";

  return {
    ok: true,
    data: {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      ...(companyStr ? { company: companyStr } : {}),
      ...(serviceStr ? { service: serviceStr } : {}),
    },
  };
}

// ─── Email delivery ─────────────────────────────────────────────────────────

export async function sendContactEmail(data: ContactInput): Promise<void> {
  const host = process.env.SMTP_HOST;
  const to = process.env.CONTACT_EMAIL;

  if (!host || !to) {
    // No SMTP configured (e.g. local dev). Skip delivery rather than failing.
    console.warn("Contact form: SMTP not configured — skipping email delivery.");
    return;
  }

  const transport = nodemailer.createTransport({
    host,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: Number(process.env.SMTP_PORT ?? 587) === 465,
    auth:
      process.env.SMTP_USER && process.env.SMTP_PASS
        ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
        : undefined,
  });

  const serviceLine = data.service ? `Service interest: ${data.service}\n` : "";
  const companyLine = data.company ? `Company: ${data.company}\n` : "";

  await transport.sendMail({
    from: process.env.SMTP_FROM ?? to,
    to,
    replyTo: data.email,
    subject: `New contact enquiry from ${data.name}`,
    text:
      `Name: ${data.name}\n` +
      `Email: ${data.email}\n` +
      companyLine +
      serviceLine +
      `\nMessage:\n${data.message}`,
  });
}
