import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { MagneticLayer } from "@/components/MagneticLayer";

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40 overflow-hidden">
      <div className="texture-horizontal-lines absolute inset-0 pointer-events-none" />
      <div className="texture-noise absolute inset-0 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        <ScrollReveal>
          <MagneticLayer strength={4}>
            <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-mutedForeground)] mb-8">
              Enterprise Software. Built Right.
            </p>
          </MagneticLayer>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          {/* Headline gets the strongest magnetic pull — the "hero" of the effect */}
          <MagneticLayer strength={18}>
            <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-[8rem] leading-[0.9] tracking-tighter mb-8">
              Software
              <br />
              That{" "}
              <span className="italic">Scales</span>
            </h1>
          </MagneticLayer>
        </ScrollReveal>

        <ScrollReveal delay={160}>
          <MagneticLayer strength={10}>
            <div className="w-full h-[4px] bg-[var(--color-foreground)] mb-8 max-w-xs" />
          </MagneticLayer>
        </ScrollReveal>

        <ScrollReveal delay={240}>
          <MagneticLayer strength={6}>
            <p className="font-[family-name:var(--font-body)] text-lg md:text-xl text-[var(--color-mutedForeground)] max-w-xl leading-relaxed mb-12">
              We build secure, scalable, and intelligent software that solves
              real problems for government and enterprise organizations.
            </p>
          </MagneticLayer>
        </ScrollReveal>

        <ScrollReveal delay={320}>
          <MagneticLayer strength={4}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-[var(--color-foreground)] text-[var(--color-background)] px-8 py-4 text-sm font-[family-name:var(--font-mono)] uppercase tracking-widest hover:bg-[var(--color-background)] hover:text-[var(--color-foreground)] hover:border-2 hover:border-[var(--color-foreground)] transition-all duration-100"
              >
                Start a Project
                <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-3 border-2 border-[var(--color-foreground)] text-[var(--color-foreground)] px-8 py-4 text-sm font-[family-name:var(--font-mono)] uppercase tracking-widest hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)] transition-all duration-100"
              >
                Our Services
              </Link>
            </div>
          </MagneticLayer>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <MagneticLayer strength={3}>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center text-sm text-[var(--color-mutedForeground)]">
              <span className="inline-flex items-center gap-2 font-[family-name:var(--font-mono)] uppercase tracking-[0.15em] text-xs">
                <span
                  className="h-2 w-2 rounded-full bg-[var(--color-foreground)] animate-pulse-subtle"
                  aria-hidden="true"
                />
                Accepting new projects
              </span>
              <span
                className="hidden h-4 w-px bg-[var(--color-border)] sm:block"
                aria-hidden="true"
              />
              <span className="font-[family-name:var(--font-body)]">
                Trusted by government &amp; enterprise teams
              </span>
            </div>
          </MagneticLayer>
        </ScrollReveal>
      </div>
    </section>
  );
}
