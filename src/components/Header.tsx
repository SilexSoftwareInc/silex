"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobile();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mobileOpen, closeMobile]);

  const isActive = (href: string) => pathname === href;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-background)] border-b border-[var(--color-border)]"
          : "bg-[var(--color-background)]"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 flex items-center justify-between h-16">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-lg tracking-tight font-bold"
        >
          SILEX
        </Link>

        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`text-sm font-[family-name:var(--font-mono)] uppercase tracking-widest transition-colors duration-100 ${
                isActive(link.href)
                  ? "text-[var(--color-foreground)]"
                  : "text-[var(--color-mutedForeground)] hover:text-[var(--color-foreground)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-[var(--color-foreground)] text-[var(--color-background)] px-6 py-2.5 text-sm font-[family-name:var(--font-mono)] uppercase tracking-widest hover:bg-[var(--color-background)] hover:text-[var(--color-foreground)] hover:border-2 hover:border-[var(--color-foreground)] transition-all duration-100"
          >
            Get Started
          </Link>
        </nav>

        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? (
            <X size={24} strokeWidth={1.5} />
          ) : (
            <Menu size={24} strokeWidth={1.5} />
          )}
        </button>
      </div>

      <div
        id="mobile-menu"
        role="region"
        aria-label="Mobile navigation"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-96 border-t border-[var(--color-border)]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-6 gap-4 bg-[var(--color-background)]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMobile}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`text-sm font-[family-name:var(--font-mono)] uppercase tracking-widest transition-colors duration-100 ${
                isActive(link.href)
                  ? "text-[var(--color-foreground)]"
                  : "text-[var(--color-mutedForeground)] hover:text-[var(--color-foreground)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={closeMobile}
            className="bg-[var(--color-foreground)] text-[var(--color-background)] px-6 py-3 text-sm font-[family-name:var(--font-mono)] uppercase tracking-widest text-center mt-2 hover:bg-[var(--color-background)] hover:text-[var(--color-foreground)] hover:border-2 hover:border-[var(--color-foreground)] transition-all duration-100"
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}
