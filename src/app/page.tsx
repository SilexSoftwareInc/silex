import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDivider } from "@/components/SectionDivider";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { BelowFoldSections } from "@/components/BelowFoldSections";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionDivider />
      <Services />
      <BelowFoldSections />

      {/* Final CTA */}
      <section className="relative bg-[var(--color-foreground)] text-[var(--color-background)] py-24 md:py-32 lg:py-40 overflow-hidden">
        <div className="texture-radial absolute inset-0 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 md:px-8 lg:px-12 text-center">
          <ScrollReveal>
            <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-mutedInverted)] mb-8">
              Let&apos;s Build Something
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl lg:text-7xl tracking-tight mb-6">
              Ready to Start?
            </h2>
            <div className="w-full h-[4px] bg-[var(--color-background)] mb-8 mx-auto max-w-[4rem]" />
            <p className="font-[family-name:var(--font-body)] text-lg text-[var(--color-mutedInverted)] max-w-xl mx-auto leading-relaxed mb-12">
              Tell us about your project. We&apos;ll respond within 24 hours
              with an honest assessment and next steps.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[var(--color-background)] text-[var(--color-foreground)] px-10 py-5 text-sm font-[family-name:var(--font-mono)] uppercase tracking-widest hover:bg-transparent hover:text-[var(--color-background)] hover:border-2 hover:border-[var(--color-background)] transition-all duration-100"
            >
              Get in Touch
              <ArrowRight size={16} strokeWidth={1.5} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
