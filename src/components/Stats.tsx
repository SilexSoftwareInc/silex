"use client";

import { useEffect, useRef, useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";

const stats = [
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 99.9, suffix: "%", label: "Uptime SLA" },
  { value: 12, suffix: "", label: "Years in Business" },
  { value: 40, suffix: "+", label: "Enterprise Clients" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          if (reduce) {
            setCount(value);
            return;
          }
          const duration = 1500;
          const start = performance.now();
          const isFloat = value % 1 !== 0;

          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = eased * value;
            const display = isFloat ? parseFloat(current.toFixed(1)) : Math.floor(current);
            // Clamp so a float value (e.g. 99.9) never rounds up past its target
            // and flickers to 100.0 before settling back to 99.9.
            setCount(Math.min(display, value));
            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative bg-[var(--color-foreground)] text-[var(--color-background)] py-24 md:py-32 lg:py-40 overflow-hidden">
      <div className="texture-vertical-lines absolute inset-0 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--color-borderInverted)]">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 100}>
              <div className="bg-[var(--color-foreground)] p-8 md:p-12 text-center h-full">
                <p className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl tracking-tighter mb-4">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <dt className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.15em] text-[var(--color-mutedInverted)]">
                  {stat.label}
                </dt>
              </div>
            </ScrollReveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
