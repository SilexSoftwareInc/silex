import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDivider } from "@/components/SectionDivider";
import { ContactForm } from "@/components/ContactForm";
import { createMetadata } from "@/lib/metadata";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Get in touch with Silex Software Inc. Tell us about your project and we'll respond within 24 hours.",
  path: "/contact",
  keywords: [
    "contact silex",
    "enterprise software quote",
    "software development Accra",
    "start a software project",
  ],
});

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "silexsoftwareinc@gmail.com",
    href: "mailto:silexsoftwareinc@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+233 50 735 4179",
    href: "tel:+233507354179",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Accra, Ghana",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Get in Touch"
        title="Contact"
        description="Tell us about your project. We'll respond within 24 hours with an honest assessment and next steps."
      />

      <SectionDivider />

      <section className="relative py-24 md:py-32 lg:py-40">
        <div className="texture-grid absolute inset-0 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <ScrollReveal>
              <div>
                <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-mutedForeground)] mb-4">
                  Reach Out
                </p>
                <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl tracking-tight mb-8">
                  Let&apos;s Start a
                  <br />
                  <span className="italic">Conversation</span>
                </h2>
                <div className="w-full h-[2px] bg-[var(--color-foreground)] mb-8 max-w-[4rem]" />

                <div className="space-y-8 mb-12">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-start gap-4">
                      <info.icon
                        size={20}
                        strokeWidth={1.5}
                        className="mt-1 shrink-0"
                      />
                      <div>
                        <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.15em] text-[var(--color-mutedForeground)] mb-1">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-sm underline-offset-4 hover:underline"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-sm">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="w-full h-[1px] bg-[var(--color-borderLight)] mb-8" />

                <p className="text-sm text-[var(--color-mutedForeground)] leading-relaxed">
                  Whether you have a detailed specification or just an initial
                  idea, we&apos;re happy to discuss how Silex can help. All
                  conversations are confidential.
                </p>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal delay={150}>
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
