"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE = "a, button, [role='button'], select, input, textarea, label[for]";

// Varied grays for a natural, smoky fluid look
const GRAYS = [
  "rgba(26, 26, 26, 0.7)",
  "rgba(64, 64, 64, 0.6)",
  "rgba(100, 100, 100, 0.5)",
  "rgba(160, 160, 160, 0.4)",
  "rgba(200, 200, 200, 0.3)",
];

class Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  angle: number;

  constructor(width: number, height: number) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.vx = (Math.random() - 0.5) * 2;
    this.vy = (Math.random() - 0.5) * 2;
    this.size = Math.random() * 2.5 + 1;
    this.color = GRAYS[Math.floor(Math.random() * GRAYS.length)]!;
    this.angle = Math.random() * Math.PI * 2;
  }

  update(width: number, height: number, mx: number, my: number) {
    // 1. Natural Drift (Fluidity)
    this.angle += (Math.random() - 0.8) * 0.1;
    this.vx += Math.cos(this.angle) * 0.08;
    this.vy += Math.sin(this.angle) * 0.08;

    if (mx !== -9999) {
      const dx = mx - this.x;
      const dy = my - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      const spotlightRadius = 300; // How far the "spotlight" reaches
      const innerBuffer = 50;     // The "no-go" zone around the cursor tip

      if (dist > spotlightRadius) {
        // Outside spotlight: Pull back in
        this.vx += (dx / dist) * 0.2;
        this.vy += (dy / dist) * 0.2;
      } else if (dist < innerBuffer) {
        // Too close: Push away to avoid "sucking in"
        const force = (innerBuffer - dist) / innerBuffer;
        this.vx -= (dx / dist) * force * 0.6;
        this.vy -= (dy / dist) * force * 0.6;
      } else {
        // Inside spotlight: Fluid orbit/swirl motion
        // This makes them flow around the cursor rather than just sitting there
        this.vx += (dy / dist) * 0.1;
        this.vy -= (dx / dist) * 0.1;
        
        // Gentle attraction to keep them loosely grouped
        this.vx += (dx / dist) * 0.02;
        this.vy += (dy / dist) * 0.02;
      }
    }

    // 2. Friction (keeps it from becoming chaotic)
    this.vx *= 0.94;
    this.vy *= 0.94;
    
    this.x += this.vx;
    this.y += this.vy;

    // 3. Screen Wrap
    if (this.x < -20) this.x = width + 20;
    if (this.x > width + 20) this.x = -20;
    if (this.y < -20) this.y = height + 20;
    if (this.y > height + 20) this.y = -20;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

export function MouseTracker() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const mouse = useRef({ x: -9999, y: -9999 });
  const ringPos = useRef({ x: -9999, y: -9999 });
  const isHovering = useRef(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Particle density - high enough to feel like a "cloud"
    const particleCount = 180;
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(width, height));
    }

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      const mx = mouse.current.x;
      const my = mouse.current.y;

      ringPos.current.x = lerp(ringPos.current.x, mx, 0.15);
      ringPos.current.y = lerp(ringPos.current.y, my, 0.15);

      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.update(width, height, mx, my);
        p.draw(ctx);
      }

      // Cursor Visuals
      const dot = dotRef.current;
      if (dot) {
        dot.style.transform = `translate(calc(${mx}px - 50%), calc(${my}px - 50%)) scale(${isHovering.current ? 2 : 1})`;
        dot.style.opacity = mx === -9999 ? "0" : "1";
      }

      const ring = ringRef.current;
      if (ring) {
        ring.style.transform = `translate(calc(${ringPos.current.x}px - 50%), calc(${ringPos.current.y}px - 50%)) scale(${isHovering.current ? 1.8 : 1})`;
        ring.style.opacity = mx === -9999 ? "0" : isHovering.current ? "0.15" : "0.35";
      }

      document.documentElement.style.setProperty("--mouse-x", `${mx}px`);
      document.documentElement.style.setProperty("--mouse-y", `${my}px`);

      rafRef.current = requestAnimationFrame(tick);
    };

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const onOver = (e: MouseEvent) => {
      if ((e.target as Element).closest(INTERACTIVE)) isHovering.current = true;
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as Element).closest(INTERACTIVE)) isHovering.current = false;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mouseout", onOut, { passive: true });
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* Particle Canvas replaces the old Spotlight div */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-[53] opacity-70"
        style={{ mixBlendMode: 'multiply' }} 
      />

      <div ref={dotRef} className="cursor-dot" style={{ opacity: 0 }} />
      <div ref={ringRef} className="cursor-ring" style={{ opacity: 0 }} />
    </>
  );
}