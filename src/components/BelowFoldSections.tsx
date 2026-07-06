"use client";

import dynamic from "next/dynamic";

const Stats = dynamic(
  () => import("@/components/Stats").then((m) => m.Stats),
  { ssr: false }
);
const Process = dynamic(
  () => import("@/components/Process").then((m) => m.Process),
  { ssr: false }
);
const Testimonials = dynamic(
  () => import("@/components/Testimonials").then((m) => m.Testimonials),
  { ssr: false }
);
const Pricing = dynamic(
  () => import("@/components/Pricing").then((m) => m.Pricing),
  { ssr: false }
);

export function BelowFoldSections() {
  return (
    <>
      <Stats />
      <Process />
      <SectionDividerForClient />
      <Testimonials />
      <SectionDividerForClient />
      <Pricing />
    </>
  );
}

function SectionDividerForClient() {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
      <div className="w-full h-[4px] bg-[var(--color-foreground)]" />
    </div>
  );
}
