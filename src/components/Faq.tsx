import { ScrollReveal } from "@/components/ScrollReveal";
import type { FaqItem } from "@/data/faq";

export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="space-y-0">
      {items.map((faq, i) => (
        <ScrollReveal key={faq.question} delay={i * 60}>
          <details className="faq group border-t border-[var(--color-border)] px-4 py-6 md:px-8 last:border-b">
            <summary className="flex list-none cursor-pointer items-center justify-between gap-6 font-[family-name:var(--font-display)] text-lg md:text-xl tracking-tight marker:hidden">
              <span>{faq.question}</span>
              <span
                aria-hidden="true"
                className="faq-icon relative h-4 w-4 shrink-0 transition-transform duration-200"
              >
                <span className="absolute left-1/2 top-1/2 h-px w-3 -translate-x-1/2 -translate-y-1/2 bg-[var(--color-foreground)]" />
                <span className="absolute left-1/2 top-1/2 h-3 w-px -translate-x-1/2 -translate-y-1/2 bg-[var(--color-foreground)]" />
              </span>
            </summary>
            <div className="faq-panel grid transition-[grid-template-rows] duration-300 ease-out">
              <div className="overflow-hidden">
                <p className="max-w-3xl pt-6 text-sm leading-relaxed text-[var(--color-mutedForeground)]">
                  {faq.answer}
                </p>
              </div>
            </div>
          </details>
        </ScrollReveal>
      ))}
    </div>
  );
}
