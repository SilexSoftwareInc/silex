"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const [index, setIndex] = useState(0);
  const count = testimonials.length;
  const go = (dir: number) => setIndex((i) => (i + dir + count) % count);

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

        <ScrollReveal delay={100}>
          <div
            className="relative"
            role="group"
            aria-roledescription="carousel"
            aria-label="Client testimonials"
          >
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {testimonials.map((t, i) => (
                  <figure
                    key={i}
                    aria-hidden={i !== index}
                    className="w-full shrink-0 px-1 md:px-2"
                  >
                    <div className="group border border-[var(--color-border)] p-8 md:p-12 flex flex-col hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)] transition-colors duration-100 h-full m-0">
                      <span
                        className="font-[family-name:var(--font-display)] text-6xl md:text-7xl leading-none opacity-10 group-hover:opacity-20 transition-opacity duration-100 mb-4"
                        aria-hidden="true"
                      >
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
                    </div>
                  </figure>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center gap-6 mt-10">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
                className="flex items-center justify-center w-11 h-11 border border-[var(--color-border)] hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)] transition-colors duration-100"
              >
                <ChevronLeft size={18} strokeWidth={1.5} />
              </button>

              <div className="flex items-center gap-2" role="tablist" aria-label="Select testimonial">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Go to testimonial ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors duration-100 ${
                      i === index
                        ? "bg-[var(--color-foreground)]"
                        : "bg-[var(--color-border)] hover:bg-[var(--color-mutedForeground)]"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next testimonial"
                className="flex items-center justify-center w-11 h-11 border border-[var(--color-border)] hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)] transition-colors duration-100"
              >
                <ChevronRight size={18} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
