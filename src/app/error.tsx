"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="texture-horizontal-lines absolute inset-0 pointer-events-none" />

      <div className="relative text-center px-6">
        <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-mutedForeground)] mb-6">
          Something went wrong
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-6xl md:text-8xl leading-[0.9] tracking-tighter mb-8">
          Error
        </h1>
        <div className="w-full h-[4px] bg-[var(--color-foreground)] mb-8 mx-auto max-w-[4rem]" />
        <p className="font-[family-name:var(--font-body)] text-lg text-[var(--color-mutedForeground)] max-w-md mx-auto leading-relaxed mb-12">
          An unexpected error occurred. Please try again.
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center gap-3 bg-[var(--color-foreground)] text-[var(--color-background)] px-8 py-4 text-sm font-[family-name:var(--font-mono)] uppercase tracking-widest hover:bg-[var(--color-background)] hover:text-[var(--color-foreground)] hover:border-2 hover:border-[var(--color-foreground)] transition-all duration-100"
        >
          Try Again
        </button>
      </div>
    </section>
  );
}
