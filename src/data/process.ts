export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  duration: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    subtitle: "Understanding the problem",
    description:
      "We listen. Deep-dive sessions to understand your challenges, constraints, and goals before writing a single line of code.",
    details: [
      "Stakeholder interviews",
      "Technical landscape analysis",
      "Requirements documentation",
      "Risk assessment",
      "Project roadmap creation",
    ],
    duration: "1-2 weeks",
  },
  {
    number: "02",
    title: "Design",
    subtitle: "Blueprint before building",
    description:
      "Architecture, UX, and technical blueprints. Clear specifications that align stakeholders and reduce risk.",
    details: [
      "System architecture design",
      "Database schema modeling",
      "API contract definition",
      "UI/UX wireframes and prototypes",
      "Technology selection",
    ],
    duration: "2-4 weeks",
  },
  {
    number: "03",
    title: "Build",
    subtitle: "Iterative development",
    description:
      "Iterative development with transparent milestones. Working software delivered in focused sprints.",
    details: [
      "Sprint-based development",
      "Daily progress visibility",
      "Code review discipline",
      "Automated testing",
      "Continuous integration",
    ],
    duration: "8-16 weeks",
  },
  {
    number: "04",
    title: "Test",
    subtitle: "No surprises in production",
    description:
      "Rigorous QA, security audits, and performance validation. No surprises in production.",
    details: [
      "End-to-end testing",
      "Security penetration testing",
      "Performance load testing",
      "User acceptance testing",
      "Regression testing",
    ],
    duration: "2-4 weeks",
  },
  {
    number: "05",
    title: "Deploy",
    subtitle: "Zero-downtime launch",
    description:
      "Zero-downtime deployments with CI/CD pipelines. Infrastructure as code. Automated everything.",
    details: [
      "Production environment setup",
      "CI/CD pipeline configuration",
      "Database migration execution",
      "Monitoring & alerting setup",
      "Launch coordination",
    ],
    duration: "1-2 weeks",
  },
  {
    number: "06",
    title: "Support",
    subtitle: "Long-term partnership",
    description:
      "Ongoing maintenance, monitoring, and evolution. Your software stays secure and current.",
    details: [
      "24/7 monitoring",
      "Bug fixes & patches",
      "Performance optimization",
      "Security updates",
      "Feature evolution",
    ],
    duration: "Ongoing",
  },
];

export const processStepsSummary = processSteps.map(({ number, title, description }) => ({
  number,
  title,
  description,
}));
