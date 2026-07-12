import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 flex items-center justify-between h-16">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-lg tracking-tight font-bold"
        >
          SILEX
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
