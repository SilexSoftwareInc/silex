import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDivider } from "@/components/SectionDivider";
import { createMetadata } from "@/lib/metadata";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "Learn about Silex Software Inc — our mission, values, and the team behind enterprise-grade software.",
  path: "/about",
  keywords: [
    "about silex",
    "software company Accra",
    "enterprise software team",
    "software engineering values",
  ],
});

const values = [
  {
    number: "01",
    title: "Enterprise-Grade",
    description:
      "Built for scale, security, and reliability from day one. We never cut corners on engineering discipline.",
  },
  {
    number: "02",
    title: "Full Stack",
    description:
      "Frontend to backend to AI to DevOps — one team, one vision. No gaps, no handoff friction.",
  },
  {
    number: "03",
    title: "Modern Tooling",
    description:
      "Current best practices, not legacy approaches. We invest in the tools and patterns that produce superior outcomes.",
  },
  {
    number: "04",
    title: "Transparent",
    description:
      "Open communication, clear milestones, honest reporting. No surprises, no black boxes.",
  },
  {
    number: "05",
    title: "AI-Ready",
    description:
      "Software that's intelligent, not just functional. We build AI capabilities into the foundation.",
  },
  {
    number: "06",
    title: "Uncompromising",
    description:
      "We hold ourselves to the highest standards. Every line of code, every architecture decision, every deployment.",
  },
];

const team = [
  {
    name: "Engineering Leadership",
    role: "Architecture & Delivery",
    description:
      "Senior engineers with decades of combined experience building systems that run at scale.",
  },
  {
    name: "Product & Design",
    role: "Strategy & Experience",
    description:
      "User-centered designers and product strategists who translate complexity into clarity.",
  },
  {
    name: "DevOps & Security",
    role: "Infrastructure & Compliance",
    description:
      "Infrastructure specialists who build and maintain secure, reliable deployment pipelines.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Us"
        title="Built Right"
        description="Silex Software Inc is a technology company specializing in enterprise-grade applications for organizations across government and private sectors."
      />

      <SectionDivider />

      {/* Mission */}
      <section className="relative py-24 md:py-32 lg:py-40">
        <div className="texture-grid absolute inset-0 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-mutedForeground)] mb-4">
                Our Mission
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl tracking-tight mb-6">
                Software That
                <br />
                <span className="italic">Solves Real Problems</span>
              </h2>
              <div className="w-full h-[2px] bg-[var(--color-foreground)] mb-8 max-w-[4rem]" />
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <p className="text-lg leading-relaxed text-[var(--color-mutedForeground)] mb-6">
                We founded Silex on a simple conviction: enterprise software
                doesn&apos;t have to be bad. That the organizations solving our
                most important problems — in government, healthcare, finance,
                and beyond — deserve technology that matches their ambition.
              </p>
              <p className="text-lg leading-relaxed text-[var(--color-mutedForeground)]">
                Every system we build is engineered for the long term. Secure.
                Scalable. Maintainable. Because the software that matters most
                is the software that endures.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Values */}
      <section className="relative py-24 md:py-32 lg:py-40">
        <div className="texture-noise absolute inset-0 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <ScrollReveal>
            <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-mutedForeground)] mb-4">
              Our Values
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4">
              Principles
            </h2>
            <div className="w-full h-[2px] bg-[var(--color-foreground)] mb-16 max-w-[4rem]" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-border)]">
            {values.map((value, i) => (
              <ScrollReveal key={value.number} delay={i * 80}>
                <div className="group bg-[var(--color-background)] p-8 transition-colors duration-100 hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)] h-full">
                  <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-mutedForeground)] block mb-4">
                    {value.number}
                  </span>
                  <h3 className="font-[family-name:var(--font-display)] text-xl tracking-tight mb-4">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--color-mutedForeground)]">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Team */}
      <section className="relative py-24 md:py-32 lg:py-40">
        <div className="texture-diagonal absolute inset-0 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <ScrollReveal>
            <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-mutedForeground)] mb-4">
              Our Team
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4">
              Who We Are
            </h2>
            <div className="w-full h-[2px] bg-[var(--color-foreground)] mb-16 max-w-[4rem]" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--color-border)]">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 100}>
                <div className="bg-[var(--color-background)] p-8 md:p-10 h-full">
                  <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.15em] text-[var(--color-mutedForeground)] mb-6">
                    {member.role}
                  </p>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl tracking-tight mb-4">
                    {member.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--color-mutedForeground)]">
                    {member.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-[var(--color-foreground)] text-[var(--color-background)] py-24 md:py-32 overflow-hidden">
        <div className="texture-radial absolute inset-0 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 md:px-8 lg:px-12 text-center">
          <ScrollReveal>
            <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-mutedInverted)] mb-8">
              Work With Us
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl tracking-tight mb-6">
              Let&apos;s Build Together
            </h2>
            <div className="w-full h-[4px] bg-[var(--color-background)] mb-8 mx-auto max-w-[4rem]" />
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-[var(--color-background)] text-[var(--color-foreground)] px-10 py-5 text-sm font-[family-name:var(--font-mono)] uppercase tracking-widest hover:bg-transparent hover:text-[var(--color-background)] hover:border-2 hover:border-[var(--color-background)] transition-all duration-100"
            >
              Get in Touch
              <ArrowRight size={16} strokeWidth={1.5} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
