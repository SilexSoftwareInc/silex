import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { projects } from "@/data/projects";

export function HallOfFame() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
      <div className="texture-grid absolute inset-0 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        <ScrollReveal>
          <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-mutedForeground)] mb-4">
            Hall of Fame
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4">
            Selected Work
          </h2>
          <div className="w-full h-[2px] bg-[var(--color-foreground)] mb-16 max-w-[4rem]" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-border)]">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 60}>
              <Link href="/contact" className="group block h-full">
                <div className="flex h-full flex-col bg-[var(--color-background)] p-8 transition-colors duration-100 hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)]">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.15em] text-[var(--color-mutedForeground)] group-hover:text-[var(--color-mutedInverted)]">
                      {project.category}
                    </span>
                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.5}
                      aria-hidden="true"
                      className="opacity-0 -translate-x-1 translate-y-1 transition-all duration-150 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0"
                    />
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl tracking-tight mb-4">
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--color-mutedForeground)] group-hover:text-[var(--color-mutedInverted)] flex-1">
                    {project.description}
                  </p>
                  <p className="mt-8 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.15em] text-[var(--color-foreground)] group-hover:text-[var(--color-background)]">
                    {project.metric}
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
