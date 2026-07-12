interface PageHeroProps {
  label: string;
  title: string;
  description?: string;
}

export function PageHero({ label, title, description }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="texture-horizontal-lines absolute inset-0 pointer-events-none" />
      <div className="texture-noise absolute inset-0 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-mutedForeground)] mb-6 animate-slide-down">
          {label}
        </p>

        <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter mb-6 animate-slide-up">
          {title}
        </h1>

        <div className="w-full h-[4px] bg-[var(--color-foreground)] mb-8 max-w-xs animate-slide-up stagger-2" style={{ animationFillMode: "both" }} />

        {description && (
          <p className="font-[family-name:var(--font-body)] text-lg md:text-xl text-[var(--color-mutedForeground)] max-w-xl leading-relaxed animate-slide-up stagger-3" style={{ animationFillMode: "both" }}>
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
