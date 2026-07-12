import {
  Home,
  User,
  Briefcase,
  Workflow,
  DollarSign,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
  cta?: boolean;
}

export const navItems: NavItem[] = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/services", label: "Services", icon: Briefcase },
  { href: "/process", label: "Process", icon: Workflow },
  { href: "/pricing", label: "Pricing", icon: DollarSign },
  { href: "/contact", label: "Contact", icon: Mail },
];

export const ctaItem: NavItem = {
  href: "/contact",
  label: "Get Started",
  icon: ArrowUpRight,
  cta: true,
};
