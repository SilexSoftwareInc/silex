export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-[2px] bg-[var(--color-foreground)] mx-auto mb-4 animate-pulse-subtle" />
        <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-mutedForeground)] animate-pulse-subtle">
          Loading
        </p>
      </div>
    </div>
  );
}
