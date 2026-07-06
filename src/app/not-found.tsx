import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="texture-horizontal-lines absolute inset-0 pointer-events-none" />
      <div className="texture-noise absolute inset-0 pointer-events-none" />

      <div className="relative text-center px-6">
        <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-mutedForeground)] mb-6 animate-slide-down">
          Error 404
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-7xl md:text-9xl leading-[0.9] tracking-tighter mb-8 animate-slide-up">
          Lost
        </h1>
        <div className="w-full h-[4px] bg-[var(--color-foreground)] mb-8 mx-auto max-w-[4rem] animate-slide-up stagger-2" style={{ animationFillMode: "both" }} />
        <p className="font-[family-name:var(--font-body)] text-lg text-[var(--color-mutedForeground)] max-w-md mx-auto leading-relaxed mb-12 animate-slide-up stagger-3" style={{ animationFillMode: "both" }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-3 bg-[var(--color-foreground)] text-[var(--color-background)] px-8 py-4 text-sm font-[family-name:var(--font-mono)] uppercase tracking-widest hover:bg-[var(--color-background)] hover:text-[var(--color-foreground)] hover:border-2 hover:border-[var(--color-foreground)] transition-all duration-100 animate-slide-up stagger-4"
          style={{ animationFillMode: "both" }}
        >
          Return Home
        </Link>
      </div>
    </section>
  );
}
