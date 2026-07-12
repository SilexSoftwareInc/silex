"use client";

import Link from "next/link";
import { useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import {
  Home,
  Users,
  Layers,
  Workflow,
  CircleDollarSign,
  Mail,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { useMediaQuery } from "@/lib/useMediaQuery";

type DockItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  cta?: boolean;
};

const dockItems: DockItem[] = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about", icon: Users },
  { label: "Services", href: "/services", icon: Layers },
  { label: "Process", href: "/process", icon: Workflow },
  { label: "Pricing", href: "/pricing", icon: CircleDollarSign },
  { label: "Contact", href: "/contact", icon: Mail },
];

const ctaItem: DockItem = {
  label: "Get Started",
  href: "/contact",
  icon: ArrowUpRight,
  cta: true,
};

const MAGNIFY_RADIUS = 140;
const MAX_SCALE = 1.6;

export function Dock() {
  const dockRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const mouseX = useRef<number | null>(null);
  const frame = useRef<number | null>(null);
  const reduced = useMediaQuery("(prefers-reduced-motion: reduce)");
  const coarse = useMediaQuery("(pointer: coarse)");
  const pathname = usePathname();

  const applyTransforms = useCallback(() => {
    frame.current = null;
    const mx = mouseX.current;
    itemRefs.current.forEach((el) => {
      if (!el) return;
      if (mx === null) {
        el.style.transform = "";
        return;
      }
      const rect = el.getBoundingClientRect();
      const center = rect.left + rect.width / 2;
      const dist = Math.abs(mx - center);
      const scale =
        1 + (MAX_SCALE - 1) * Math.max(0, 1 - dist / MAGNIFY_RADIUS);
      const lift = (scale - 1) * 14;
      el.style.transform = `scale(${scale}) translateY(${-lift}px)`;
    });
  }, []);

  const schedule = useCallback(() => {
    if (frame.current === null) {
      frame.current = requestAnimationFrame(applyTransforms);
    }
  }, [applyTransforms]);

  const handleMove = (e: React.PointerEvent) => {
    if (reduced || coarse) return;
    mouseX.current = e.clientX;
    schedule();
  };

  const handleLeave = () => {
    mouseX.current = null;
    if (frame.current !== null) {
      cancelAnimationFrame(frame.current);
      frame.current = null;
    }
    itemRefs.current.forEach((el) => el && (el.style.transform = ""));
  };

  const handleFocus = (index: number) => {
    if (reduced || coarse) return;
    const el = itemRefs.current[index];
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mouseX.current = rect.left + rect.width / 2;
    schedule();
  };

  const allItems = [...dockItems, ctaItem];

  return (
    <nav
      ref={dockRef}
      aria-label="Primary"
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className="no-scrollbar fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex max-w-[calc(100vw-1rem)] items-end gap-0.5 sm:gap-1.5 max-sm:overflow-x-auto rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-background)]/70 px-2.5 sm:px-3 py-2 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
    >
      {allItems.map((item, i) => {
        const Icon = item.icon;
        const isActive =
          item.href === "/"
            ? pathname === "/"
            : pathname === item.href || pathname.startsWith(item.href + "/");
        return (
          <Link
            key={item.label}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            href={item.href}
            aria-label={item.label}
            aria-current={isActive ? "page" : undefined}
            onFocus={() => handleFocus(i)}
            onBlur={handleLeave}
            className={`group relative flex shrink-0 origin-bottom items-center justify-center rounded-2xl transition-transform duration-150 ease-out will-change-transform max-sm:w-10 max-sm:h-10 ${
              item.cta
                ? "w-11 h-11 sm:w-12 sm:h-12 bg-[var(--color-foreground)] text-[var(--color-background)]"
                : "w-11 h-11 sm:w-12 sm:h-12 text-[var(--color-foreground)] hover:bg-[var(--color-muted)]"
            }`}
          >
            <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
            <span
              aria-hidden="true"
              className={`pointer-events-none absolute bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full transition-opacity duration-150 ${
                isActive ? "opacity-100" : "opacity-0"
              } ${item.cta ? "bg-[var(--color-background)]" : "bg-[var(--color-foreground)]"}`}
            />
            <span
              className="pointer-events-none absolute bottom-full mb-3 hidden whitespace-nowrap rounded-md bg-[var(--color-foreground)] px-2 py-1 text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-widest text-[var(--color-background)] transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100 sm:block sm:opacity-0"
            >
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
