export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "Custom",
    description: "For focused projects with clear scope",
    features: [
      "Single-platform application",
      "Standard deployment",
      "3-month timeline",
      "Email support",
      "Basic documentation",
    ],
    cta: "Discuss Project",
    highlighted: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For complex, mission-critical systems",
    features: [
      "Multi-platform architecture",
      "Custom infrastructure setup",
      "Dedicated engineering team",
      "Priority support & SLA",
      "Full technical documentation",
      "Security audit & compliance",
      "Post-launch maintenance",
    ],
    cta: "Start Consultation",
    highlighted: true,
  },
  {
    name: "Partnership",
    price: "Ongoing",
    description: "For long-term technology partnerships",
    features: [
      "Dedicated team allocation",
      "Continuous development",
      "Strategic technology advisory",
      "24/7 support & monitoring",
      "Quarterly architecture reviews",
    ],
    cta: "Explore Partnership",
    highlighted: false,
  },
];
