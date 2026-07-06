import type { Metadata, Viewport } from "next";
import { Playfair_Display, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { ScrollProgress } from "@/components/ScrollProgress";
import { MouseTracker } from "@/components/MouseTracker";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://silex.software"),
  title: {
    default: "Silex Software Inc — Enterprise Software. Built Right.",
    template: "%s | Silex Software Inc",
  },
  description:
    "Silex Software Inc is a technology company specializing in enterprise-grade applications for organizations across government and private sectors.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Silex Software Inc",
    title: "Silex Software Inc — Enterprise Software. Built Right.",
    description:
      "Enterprise-grade applications for organizations across government and private sectors. Custom software, web platforms, AI integration, and DevOps.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Silex Software Inc — Enterprise Software. Built Right.",
    description:
      "Enterprise-grade applications for organizations across government and private sectors.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${sourceSerif.variable} ${jetbrains.variable}`}
    >
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-[var(--color-foreground)] focus:text-[var(--color-background)] focus:px-4 focus:py-2 focus:text-sm focus:font-[family-name:var(--font-mono)]"
        >
          Skip to main content
        </a>

        <MouseTracker />
        <ScrollProgress />
        <Header />

        <main id="main" className="animate-page-enter">
          {children}
        </main>

        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
