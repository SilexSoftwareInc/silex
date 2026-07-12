const TECH = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "GraphQL",
  "Docker",
  "Kubernetes",
  "Terraform",
  "AWS",
  "AI / ML",
];

export function TechMarquee() {
  const loop = [...TECH, ...TECH];

  return (
    <section
      aria-label="Technologies we build with"
      className="relative overflow-hidden border-y border-[var(--color-border)] bg-[var(--color-background)] py-6"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[var(--color-background)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[var(--color-background)] to-transparent" />
      <div className="marquee-track flex w-max items-center">
        {loop.map((tech, i) => (
          <span
            key={i}
            aria-hidden={i >= TECH.length}
            className="flex items-center gap-8 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-mutedForeground)]"
          >
            <span>{tech}</span>
            <span className="text-[var(--color-border)]">/</span>
          </span>
        ))}
      </div>
    </section>
  );
}
