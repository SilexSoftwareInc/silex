"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ThemeToggle";
import { navItems, ctaItem } from "@/data/nav";

export function Header() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-background)]/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-lg tracking-tight font-bold"
        >
          SILEX
        </Link>

        <nav aria-label="Primary" className="hidden sm:flex items-center gap-8">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.15em] transition-colors duration-100 hover:text-[var(--color-foreground)] ${
                  active ? "text-[var(--color-foreground)]" : "text-[var(--color-mutedForeground)]"
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute -bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[var(--color-foreground)] transition-opacity duration-150 ${
                    active ? "opacity-100" : "opacity-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            href={ctaItem.href}
            className="hidden sm:inline-flex items-center gap-2 bg-[var(--color-foreground)] text-[var(--color-background)] px-5 py-2.5 text-xs font-[family-name:var(--font-mono)] uppercase tracking-[0.15em] transition-all duration-100 hover:bg-[var(--color-background)] hover:text-[var(--color-foreground)] hover:border-2 hover:border-[var(--color-foreground)]"
          >
            {ctaItem.label}
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
