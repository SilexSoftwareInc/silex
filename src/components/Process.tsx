import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { processStepsSummary } from "@/data/process";

export function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
      <div className="texture-diagonal absolute inset-0 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        <ScrollReveal>
          <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-mutedForeground)] mb-4">
            How We Work
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4">
            Process
          </h2>
          <div className="w-full h-[2px] bg-[var(--color-foreground)] mb-16 max-w-[4rem]" />
        </ScrollReveal>

        <div className="space-y-0">
          {processStepsSummary.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 60}>
              <Link href="/process">
                <div className="group flex gap-8 md:gap-12 py-10 border-t border-[var(--color-border)] last:border-b hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)] transition-colors duration-100 px-4 md:px-8">
                  <span className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-mutedForeground)] shrink-0 pt-1">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl tracking-tight mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[var(--color-mutedForeground)] max-w-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
