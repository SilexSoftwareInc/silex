import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDivider } from "@/components/SectionDivider";
import { services } from "@/data/services";
import { techStack } from "@/data/services";
import { createMetadata } from "@/lib/metadata";
import { ArrowRight, Check } from "lucide-react";

export const metadata: Metadata = createMetadata(
  "Services",
  "Custom enterprise applications, web platforms, AI integration, DevOps, and system integration — built for scale and security."
);

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="What We Do"
        title="Services"
        description="Enterprise-grade solutions built with precision. Every engagement is tailored to your specific challenges."
      />

      <SectionDivider />

      <section className="relative py-24 md:py-32 lg:py-40">
        <div className="texture-grid absolute inset-0 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="space-y-0">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 60}>
                <div className="group border border-[var(--color-border)] p-8 md:p-12 transition-colors duration-100 hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)]">
                  <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                    <div className="lg:w-1/3">
                      <service.icon
                        size={32}
                        strokeWidth={1.5}
                        className="mb-6"
                      />
                      <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl tracking-tight mb-4">
                        {service.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-[var(--color-mutedForeground)]">
                        {service.description}
                      </p>
                    </div>
                    <div className="lg:w-2/3">
                      <div className="w-full h-[2px] bg-current mb-8 opacity-20" />
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-3 text-sm"
                          >
                            <Check
                              size={16}
                              strokeWidth={1.5}
                              className="shrink-0 mt-0.5"
                            />
                            <span>{feature}</span>
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
        <div className="texture-vertical-lines absolute inset-0 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <ScrollReveal>
            <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-mutedInverted)] mb-4">
              Our Stack
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl tracking-tight mb-4">
              Technologies
            </h2>
            <div className="w-full h-[2px] bg-[var(--color-background)] mb-16 max-w-[4rem]" />
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {techStack.map((tech, i) => (
              <ScrollReveal key={tech} delay={i * 40}>
                <div className="border border-[var(--color-borderInverted)] p-6 text-center">
                  <p className="font-[family-name:var(--font-mono)] text-sm uppercase tracking-widest">
                    {tech}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="texture-noise absolute inset-0 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 md:px-8 lg:px-12 text-center">
          <ScrollReveal>
            <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-mutedForeground)] mb-8">
              Ready to Begin?
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl tracking-tight mb-6">
              Let&apos;s Discuss Your Project
            </h2>
            <div className="w-full h-[4px] bg-[var(--color-foreground)] mb-8 mx-auto max-w-[4rem]" />
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[var(--color-foreground)] text-[var(--color-background)] px-10 py-5 text-sm font-[family-name:var(--font-mono)] uppercase tracking-widest hover:bg-[var(--color-background)] hover:text-[var(--color-foreground)] hover:border-2 hover:border-[var(--color-foreground)] transition-all duration-100"
            >
              Start a Conversation
              <ArrowRight size={16} strokeWidth={1.5} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
