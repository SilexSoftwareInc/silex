"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface MagneticLayerProps {
  children: ReactNode;
  /** How strongly the layer responds to mouse — higher = more movement */
  strength?: number;
  className?: string;
}

/**
 * MagneticLayer
 * Wraps its children and applies a subtle parallax translate based on the
 * global --mouse-x / --mouse-y CSS vars (set by MouseTracker).
 * Uses a RAF loop for smooth lerp — no scroll-linked jank.
 */
export function MagneticLayer({
  children,
  strength = 12,
  className = "",
}: MagneticLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const center = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    // Cache the element's center; it only changes on scroll/resize, so we
    // avoid forcing a layout (getBoundingClientRect) on every animation frame.
    const measure = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      center.current.x = rect.left + rect.width / 2;
      center.current.y = rect.top + rect.height / 2;
    };

    measure();
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);

    const tick = () => {
      const el = ref.current;

      // Get current mouse position from CSS vars (written by MouseTracker)
      const root = document.documentElement;
      const mx = parseFloat(root.style.getPropertyValue("--mouse-x") || "-9999");
      const my = parseFloat(root.style.getPropertyValue("--mouse-y") || "-9999");

      if (el && mx !== -9999 && my !== -9999) {
        // Normalise offset from center of the section (-0.5 to 0.5)
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const nx = (mx - center.current.x) / vw;
        const ny = (my - center.current.y) / vh;

        target.current.x = nx * strength;
        target.current.y = ny * strength;
      }

      current.current.x = lerp(current.current.x, target.current.x, 0.06);
      current.current.y = lerp(current.current.y, target.current.y, 0.06);

      if (el) {
        el.style.transform = `translate(${current.current.x}px, ${current.current.y}px)`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [strength]);

  return (
    <div ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}
