import Link from "next/link";

const footerLinks = {
  Services: [
    { label: "Custom Applications", href: "/services" },
    { label: "Web Applications", href: "/services" },
    { label: "AI Integration", href: "/services" },
    { label: "DevOps & Infrastructure", href: "/services" },
    { label: "System Integration", href: "/services" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Process", href: "/process" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <Link
              href="/"
              className="font-[family-name:var(--font-display)] text-xl tracking-tight font-bold block mb-4"
            >
              SILEX
            </Link>
            <p className="text-sm text-[var(--color-mutedForeground)] leading-relaxed max-w-xs">
              Enterprise software. Built right.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.15em] text-[var(--color-mutedForeground)] mb-4">
                {category}
              </p>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--color-mutedForeground)] hover:text-[var(--color-foreground)] transition-colors duration-100 underline-offset-4 hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="w-full h-[2px] bg-[var(--color-border)] mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-mutedForeground)]">
            &copy; {new Date().getFullYear()} Silex Software Inc. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
