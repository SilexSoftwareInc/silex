import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDivider } from "@/components/SectionDivider";
import { Pricing } from "@/components/Pricing";
import { Faq } from "@/components/Faq";
import { createMetadata } from "@/lib/metadata";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = createMetadata({
  title: "Pricing",
  description:
    "Transparent pricing for enterprise software engagement. Starter, Enterprise, and Partnership tiers.",
  path: "/pricing",
  keywords: [
    "software pricing",
    "enterprise software cost",
    "custom software quote",
    "software development retainer",
  ],
});

const faqs = [
  {
    question: "How do you estimate project costs?",
    answer:
      "Every project is unique. We provide custom estimates after a thorough discovery phase where we understand your requirements, complexity, and timeline. There are no hidden fees.",
  },
  {
    question: "What's your typical project timeline?",
    answer:
      "Most projects range from 3 to 12 months depending on complexity. We provide detailed timelines during the design phase and maintain transparent milestone tracking throughout.",
  },
  {
    question: "Do you work with fixed-price or time-and-materials?",
    answer:
      "We offer both models depending on the project. Fixed-price works well for well-defined scopes; time-and-materials is better for evolving requirements. We'll recommend the best approach.",
  },
  {
    question: "What happens after launch?",
    answer:
      "Enterprise and Partnership tiers include post-launch maintenance. We also offer standalone support contracts. Your software stays secure, updated, and performing at its best.",
  },
  {
    question: "Do you sign NDAs?",
    answer:
      "Absolutely. We understand the sensitivity of enterprise projects and are happy to execute NDAs before any discovery sessions.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        label="Investment"
        title="Pricing"
        description="Transparent pricing for enterprise-grade software. Every engagement is scoped to your specific needs."
      />

      <SectionDivider />

      <Pricing />

      <SectionDivider />

      <section className="relative py-24 md:py-32 lg:py-40">
        <div className="texture-noise absolute inset-0 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <ScrollReveal>
            <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-mutedForeground)] mb-4">
              Questions
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl tracking-tight mb-4">
              FAQ
            </h2>
            <div className="w-full h-[2px] bg-[var(--color-foreground)] mb-16 max-w-[4rem]" />
          </ScrollReveal>

          <Faq items={faqs} />
        </div>
      </section>

      <section className="relative bg-[var(--color-foreground)] text-[var(--color-background)] py-24 md:py-32 overflow-hidden">
        <div className="texture-radial absolute inset-0 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 md:px-8 lg:px-12 text-center">
          <ScrollReveal>
            <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-mutedInverted)] mb-8">
              Let&apos;s Talk
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl tracking-tight mb-6">
              Get a Custom Quote
            </h2>
            <div className="w-full h-[4px] bg-[var(--color-background)] mb-8 mx-auto max-w-[4rem]" />
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[var(--color-background)] text-[var(--color-foreground)] px-10 py-5 text-sm font-[family-name:var(--font-mono)] uppercase tracking-widest hover:bg-transparent hover:text-[var(--color-background)] hover:border-2 hover:border-[var(--color-background)] transition-all duration-100"
            >
              Request a Quote
              <ArrowRight size={16} strokeWidth={1.5} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
