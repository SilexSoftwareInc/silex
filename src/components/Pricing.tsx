import Link from "next/link";
import { Check } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { pricingPlans } from "@/data/pricing";

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
      <div className="texture-grid absolute inset-0 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        <ScrollReveal>
          <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-mutedForeground)] mb-4">
            Investment
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4">
            Pricing
          </h2>
          <div className="w-full h-[2px] bg-[var(--color-foreground)] mb-16 max-w-[4rem]" />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 items-start">
          {pricingPlans.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 100}>
              <div
                className={`border p-8 md:p-10 transition-colors duration-100 ${
                  plan.highlighted
                    ? "bg-[var(--color-foreground)] text-[var(--color-background)] border-[var(--color-foreground)] lg:-mt-6 lg:-mb-6 relative z-10"
                    : "border-[var(--color-border)] hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)]"
                }`}
              >
                <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.15em] text-[var(--color-mutedForeground)] mb-6">
                  {plan.name}
                </p>
                <p className="font-[family-name:var(--font-display)] text-4xl md:text-5xl tracking-tighter mb-2">
                  {plan.price}
                </p>
                <p className="text-sm text-[var(--color-mutedForeground)] mb-8">
                  {plan.description}
                </p>
                <div className="w-full h-[2px] bg-current mb-8" />
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check
                        size={16}
                        strokeWidth={1.5}
                        className="shrink-0 mt-0.5"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block text-center py-4 text-sm font-[family-name:var(--font-mono)] uppercase tracking-widest transition-all duration-100 ${
                    plan.highlighted
                      ? "bg-[var(--color-background)] text-[var(--color-foreground)] hover:bg-transparent hover:text-[var(--color-background)] hover:border-2 hover:border-[var(--color-background)]"
                      : "border-2 border-[var(--color-foreground)] hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)]"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
