import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDivider } from "@/components/SectionDivider";
import { Stats } from "@/components/Stats";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { HallOfFame } from "@/components/HallOfFame";
import { Pricing } from "@/components/Pricing";
import { Faq } from "@/components/Faq";
import { faqs } from "@/data/faq";

export function BelowFoldSections() {
  return (
    <>
      <Stats />
      <Process />
      <SectionDivider />
      <Testimonials />
      <HallOfFame />
      <SectionDivider />
      <Pricing />

      <section className="relative py-24 md:py-32 lg:py-40">
        <div className="texture-noise absolute inset-0 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <ScrollReveal>
            <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-mutedForeground)] mb-4">
              Common Questions
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4">
              FAQ
            </h2>
            <div className="w-full h-[2px] bg-[var(--color-foreground)] mb-16 max-w-[4rem]" />
          </ScrollReveal>

          <Faq items={faqs} />
        </div>
      </section>
    </>
  );
}
