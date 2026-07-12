export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: "What kind of organizations do you work with?",
    answer:
      "We partner with government agencies, enterprises, and scaling startups that need software built to a higher standard. If reliability, security, and longevity matter to your mission, we're a fit.",
  },
  {
    question: "How do you approach security?",
    answer:
      "Security is foundational, not an afterthought. We bake threat modeling, secure defaults, and review into every phase of the build — and we're happy to execute NDAs before any discovery session.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "We choose the right stack for the problem, not the trend of the week. Our work spans React/Next.js, Node, Python, PostgreSQL, GraphQL, Docker, Kubernetes, Terraform, and modern AI/ML tooling.",
  },
  {
    question: "How long does a typical engagement take?",
    answer:
      "Most projects run from three to twelve months depending on complexity. We provide detailed timelines during the design phase and maintain transparent milestone tracking throughout.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. Every engagement includes a handover, and our Enterprise and Partnership tiers add ongoing maintenance so your software stays secure, updated, and performing at its best.",
  },
  {
    question: "How do we get started?",
    answer:
      "Tell us about your project through our contact form. We'll respond within 24 hours with an honest assessment and clear next steps — no obligation, no pressure.",
  },
];
