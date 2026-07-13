import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { projects } from "@/data/projects";

export function HallOfFame() {
  const featured = projects[0];
  const rest = projects.slice(1);
  if (!featured) return null;

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

        <div className="grid grid-cols-1 gap-px bg-[var(--color-border)] md:grid-cols-2 lg:grid-cols-3">
          <ScrollReveal threshold={0} className="md:col-span-2 lg:col-span-3">
            <Link href="/contact" className="group block h-full">
              <div className="flex h-full flex-col gap-8 bg-[var(--color-foreground)] p-8 text-[var(--color-background)] md:p-12 lg:p-16">
                <div className="flex items-center justify-between">
                  <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.15em] text-[var(--color-mutedInverted)]">
                    Featured &middot; {featured.category}
                  </span>
                  <ArrowUpRight
                    size={22}
                    strokeWidth={1.5}
                    aria-hidden="true"
                    className="text-[var(--color-background)] transition-transform duration-150 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-4xl tracking-tight md:text-5xl lg:text-6xl">
                  {featured.title}
                </h3>
                <p className="max-w-2xl text-[var(--color-mutedInverted)] leading-relaxed">
                  {featured.description}
                </p>
                <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.15em] text-[var(--color-background)]">
                  {featured.metric}
                </p>
              </div>
            </Link>
          </ScrollReveal>

          {rest.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 60} className="h-full">
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
                      className="opacity-0 -translate-x-1 translate-y-1 transition-all duration-150 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                    />
                  </div>
                  <h3 className="mb-4 font-[family-name:var(--font-display)] text-2xl tracking-tight">
                    {project.title}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-[var(--color-mutedForeground)] group-hover:text-[var(--color-mutedInverted)]">
                    {project.description}
                  </p>
                  <p className="mt-8 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.15em] text-[var(--color-foreground)] group-hover:text-[var(--color-background)]">
                    {project.metric}
                  </p>
                </div>
              </Link>
            </ScrollReveal>
          ))}

          <ScrollReveal key="cta" delay={rest.length * 60} className="h-full">
            <Link
              href="/contact"
              className="group flex h-full flex-col justify-center bg-[var(--color-foreground)] p-8 text-[var(--color-background)] transition-colors duration-100 hover:border-2 hover:border-[var(--color-foreground)] hover:bg-[var(--color-background)] hover:text-[var(--color-foreground)]"
            >
              <h3 className="mb-4 font-[family-name:var(--font-display)] text-2xl tracking-tight">
                Have a project in mind?
              </h3>
              <span className="inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.15em]">
                Start a Project
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="transition-transform duration-150 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </span>
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
