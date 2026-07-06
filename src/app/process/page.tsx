import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDivider } from "@/components/SectionDivider";
import { processSteps } from "@/data/process";
import { createMetadata } from "@/lib/metadata";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = createMetadata(
  "Process",
  "Our proven six-phase process: Discovery, Design, Build, Test, Deploy, Support. Transparent, disciplined, effective."
);

export default function ProcessPage() {
  return (
    <>
      <PageHero
        label="How We Work"
        title="Process"
        description="A disciplined, transparent methodology refined over 12 years and 150+ projects."
      />

      <SectionDivider />

      <section className="relative py-24 md:py-32 lg:py-40">
        <div className="texture-diagonal absolute inset-0 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="space-y-0">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 80}>
                <div className="group border-t border-[var(--color-border)] last:border-b py-12 md:py-16 px-4 md:px-8 transition-colors duration-100 hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)]">
                  <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                    <div className="lg:w-1/4">
                      <span className="font-[family-name:var(--font-mono)] text-5xl md:text-6xl font-bold tracking-tighter opacity-10 group-hover:opacity-20 transition-opacity duration-100">
                        {step.number}
                      </span>
                      <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.15em] text-[var(--color-mutedForeground)] mt-4">
                        {step.duration}
                      </p>
                    </div>
                    <div className="lg:w-3/4">
                      <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.15em] text-[var(--color-mutedForeground)] mb-2">
                        {step.subtitle}
                      </p>
                      <h3 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl tracking-tight mb-4">
                        {step.title}
                      </h3>
                      <p className="text-base leading-relaxed text-[var(--color-mutedForeground)] mb-8 max-w-2xl">
                        {step.description}
                      </p>
                      <div className="w-full h-[1px] bg-current opacity-20 mb-8" />
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {step.details.map((detail) => (
                          <li
                            key={detail}
                            className="flex items-center gap-3 text-sm text-[var(--color-mutedForeground)]"
                          >
                            <span className="w-1.5 h-1.5 bg-current shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-[var(--color-foreground)] text-[var(--color-background)] py-24 md:py-32 overflow-hidden">
        <div className="texture-radial absolute inset-0 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 md:px-8 lg:px-12 text-center">
          <ScrollReveal>
            <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-mutedInverted)] mb-8">
              Ready to Begin?
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl tracking-tight mb-6">
              Start With Discovery
            </h2>
            <div className="w-full h-[4px] bg-[var(--color-background)] mb-8 mx-auto max-w-[4rem]" />
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[var(--color-background)] text-[var(--color-foreground)] px-10 py-5 text-sm font-[family-name:var(--font-mono)] uppercase tracking-widest hover:bg-transparent hover:text-[var(--color-background)] hover:border-2 hover:border-[var(--color-background)] transition-all duration-100"
            >
              Schedule a Call
              <ArrowRight size={16} strokeWidth={1.5} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
