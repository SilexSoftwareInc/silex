export interface Project {
  title: string;
  category: string;
  description: string;
  metric: string;
}

export const projects: Project[] = [
  {
    title: "National Permit Platform",
    category: "Government",
    description:
      "A mission-critical permitting system handling high-volume public applications with audit-grade security and zero planned downtime.",
    metric: "2M+ transactions / day",
  },
  {
    title: "Healthcare Data Hub",
    category: "Healthcare",
    description:
      "A unified records platform connecting disparate hospital systems with compliant, real-time data exchange for care teams.",
    metric: "99.99% uptime",
  },
  {
    title: "Treasury Operations Suite",
    category: "Finance",
    description:
      "An internal trading and reconciliation workspace built for speed, accuracy, and strict regulatory reporting.",
    metric: "40% faster close",
  },
  {
    title: "Logistics Control Tower",
    category: "Enterprise",
    description:
      "A live operations dashboard aggregating fleet, inventory, and order data into a single source of truth.",
    metric: "12 regions live",
  },
  {
    title: "AI Document Intelligence",
    category: "AI / ML",
    description:
      "An intelligent processing pipeline that classifies, extracts, and routes millions of documents without human triage.",
    metric: "1.4M docs / mo",
  },
  {
    title: "Citizen Services Portal",
    category: "Government",
    description:
      "A public self-service portal unifying dozens of agency services behind one accessible, mobile-first experience.",
    metric: "300K users",
  },
];
