import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { servicesSummary } from "@/data/services";

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 lg:py-40">
      <div className="texture-grid absolute inset-0 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        <ScrollReveal>
          <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-mutedForeground)] mb-4">
            What We Do
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4">
            Services
          </h2>
          <div className="w-full h-[2px] bg-[var(--color-foreground)] mb-16 max-w-[4rem]" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-border)]">
          {servicesSummary.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 60}>
              <Link href="/services" className="block h-full">
                <div className="group bg-[var(--color-background)] p-8 h-full transition-colors duration-100 hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)]">
                  <service.icon size={24} strokeWidth={1.5} className="mb-6" />
                  <h3 className="font-[family-name:var(--font-display)] text-xl tracking-tight mb-4">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--color-mutedForeground)]">
                    {service.description}
                  </p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
