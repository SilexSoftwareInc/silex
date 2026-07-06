import { ScrollReveal } from "@/components/ScrollReveal";

const testimonials = [
  {
    quote:
      "Silex delivered a mission-critical platform that handles millions of transactions daily. Their engineering discipline is exceptional.",
    author: "Director of Technology",
    org: "Federal Agency",
  },
  {
    quote:
      "The team understood our complexity and built exactly what we needed — no bloat, no compromise. Enterprise software done right.",
    author: "CTO",
    org: "Fortune 500 Company",
  },
  {
    quote:
      "From discovery to deployment, the process was transparent and professional. We finally have a technology partner we trust.",
    author: "VP of Engineering",
    org: "Healthcare Organization",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40">
      <div className="texture-noise absolute inset-0 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        <ScrollReveal>
          <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-mutedForeground)] mb-4">
            Client Voices
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4">
            Testimonials
          </h2>
          <div className="w-full h-[2px] bg-[var(--color-foreground)] mb-16 max-w-[4rem]" />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <figure className="group border border-[var(--color-border)] p-8 md:p-10 flex flex-col hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)] transition-colors duration-100 h-full m-0">
                <span className="font-[family-name:var(--font-display)] text-6xl md:text-7xl leading-none opacity-10 group-hover:opacity-20 transition-opacity duration-100 mb-4" aria-hidden="true">
                  &ldquo;
                </span>
                <blockquote className="font-[family-name:var(--font-display)] text-lg md:text-xl italic leading-relaxed flex-1 mb-8">
                  {t.quote}
                </blockquote>
                <figcaption className="border-t border-[var(--color-border)] group-hover:border-[var(--color-borderInverted)] pt-6 transition-all duration-100 group-hover:border-t-[3px]">
                  <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.15em] text-[var(--color-mutedForeground)] group-hover:text-[var(--color-mutedInverted)]">
                    {t.author}
                  </p>
                  <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.1em] text-[var(--color-mutedForeground)] group-hover:text-[var(--color-secondaryInverted)] mt-1">
                    {t.org}
                  </p>
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
