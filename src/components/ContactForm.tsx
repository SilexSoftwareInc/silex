"use client";

import { useState } from "react";
import { Send, Loader2 } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          company: data.get("company"),
          service: data.get("service"),
          message: data.get("message"),
        }),
      });

      if (!res.ok) throw new Error("Failed to send");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div role="status" aria-live="polite" className="border border-[var(--color-border)] p-8 md:p-12 text-center animate-scale-in">
        <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.15em] text-[var(--color-mutedForeground)] mb-4">
          Thank You
        </p>
        <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl tracking-tight mb-4">
          Message Received
        </h3>
        <p className="text-sm text-[var(--color-mutedForeground)] leading-relaxed">
          We&apos;ll review your inquiry and respond within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-0" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
        <div className="border border-[var(--color-border)] p-4">
          <label
            htmlFor="name"
            className="block font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.15em] text-[var(--color-mutedForeground)] mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full bg-transparent border-b-2 border-[var(--color-border)] py-2 text-sm focus:border-b-4 focus:outline-none focus-visible:border-b-4 font-[family-name:var(--font-body)] placeholder:text-[var(--color-mutedForeground)] placeholder:italic"
            placeholder="Your name"
          />
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />
        </div>
        <div className="border border-[var(--color-border)] border-l-0 max-sm:border-t-0 p-4">
          <label
            htmlFor="email"
            className="block font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.15em] text-[var(--color-mutedForeground)] mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full bg-transparent border-b-2 border-[var(--color-border)] py-2 text-sm focus:border-b-4 focus:outline-none focus-visible:border-b-4 font-[family-name:var(--font-body)] placeholder:text-[var(--color-mutedForeground)] placeholder:italic"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="border border-[var(--color-border)] border-t-0 p-4">
        <label
          htmlFor="company"
          className="block font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.15em] text-[var(--color-mutedForeground)] mb-2"
        >
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className="w-full bg-transparent border-b-2 border-[var(--color-border)] py-2 text-sm focus:border-b-4 focus:outline-none focus-visible:border-b-4 font-[family-name:var(--font-body)] placeholder:text-[var(--color-mutedForeground)] placeholder:italic"
          placeholder="Your company (optional)"
        />
      </div>

      <div className="border border-[var(--color-border)] border-t-0 p-4">
        <label
          htmlFor="service"
          className="block font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.15em] text-[var(--color-mutedForeground)] mb-2"
        >
          Service Interest
        </label>
        <select
          id="service"
          name="service"
          className="w-full bg-transparent border-b-2 border-[var(--color-border)] py-2 text-sm focus:border-b-4 focus:outline-none focus-visible:border-b-4 font-[family-name:var(--font-body)] text-[var(--color-foreground)] appearance-none cursor-pointer"
          defaultValue=""
        >
          <option value="" disabled>
            Select a service
          </option>
          <option value="custom">Custom Enterprise Applications</option>
          <option value="web">Web Applications</option>
          <option value="ai">AI Integration</option>
          <option value="devops">DevOps & Infrastructure</option>
          <option value="integration">System Integration</option>
          <option value="other">Other / Not Sure</option>
        </select>
      </div>

      <div className="border border-[var(--color-border)] border-t-0 p-4">
        <label
          htmlFor="message"
          className="block font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.15em] text-[var(--color-mutedForeground)] mb-2"
        >
          Project Details
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full bg-transparent border-b-2 border-[var(--color-border)] py-2 text-sm focus:border-b-4 focus:outline-none focus-visible:border-b-4 font-[family-name:var(--font-body)] resize-none placeholder:text-[var(--color-mutedForeground)] placeholder:italic"
          placeholder="Tell us about your project, timeline, and any specific requirements..."
        />
      </div>

      {error && (
        <p role="alert" className="text-sm text-[var(--color-foreground)] px-4 py-2 border border-[var(--color-border)]">
          {error}
        </p>
      )}

      <div className="border border-[var(--color-border)] border-t-0 p-4">
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[var(--color-foreground)] text-[var(--color-background)] py-4 text-sm font-[family-name:var(--font-mono)] uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-[var(--color-background)] hover:text-[var(--color-foreground)] hover:border-2 hover:border-[var(--color-foreground)] transition-all duration-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <Loader2 size={16} strokeWidth={1.5} className="animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send size={16} strokeWidth={1.5} />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
