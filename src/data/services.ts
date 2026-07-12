import { Layers, Globe, Brain, Server, GitBranch, Link2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export const services: Service[] = [
  {
    icon: Layers,
    title: "Custom Enterprise Applications",
    description:
      "Tailored software solutions for complex organizational needs. Built for scale, security, and reliability from day one.",
    features: [
      "Requirements analysis & architecture",
      "Domain-driven design",
      "Microservices or monolith as appropriate",
      "Performance optimization",
      "Security-first development",
    ],
  },
  {
    icon: Globe,
    title: "Web Applications",
    description:
      "Modern, responsive, full-stack web platforms using cutting-edge frameworks and patterns.",
    features: [
      "React / Next.js frontends",
      "Progressive Web App capabilities",
      "Responsive design systems",
      "SEO optimization",
      "Accessibility compliance",
    ],
  },
  {
    icon: Brain,
    title: "AI Integration",
    description:
      "Intelligent features: automation, data processing, smart decision-making. Software that's intelligent, not just functional.",
    features: [
      "LLM integration & fine-tuning",
      "Automated data processing pipelines",
      "Intelligent document processing",
      "Predictive analytics",
      "Natural language interfaces",
    ],
  },
  {
    icon: Server,
    title: "DevOps & Infrastructure",
    description:
      "CI/CD pipelines, containerization, cloud deployment. Modern tooling, not legacy approaches.",
    features: [
      "CI/CD pipeline design & implementation",
      "Docker & Kubernetes orchestration",
      "Infrastructure as Code (Terraform, Pulumi)",
      "Cloud architecture (AWS, Azure, GCP)",
      "Monitoring & alerting systems",
    ],
  },
  {
    icon: GitBranch,
    title: "System Integration",
    description:
      "Connecting existing systems, APIs, and data sources into cohesive, maintainable architectures.",
    features: [
      "API gateway design",
      "Legacy system modernization",
      "Data migration strategies",
      "Event-driven architecture",
      "Message queue implementation",
    ],
  },
  {
    icon: Link2,
    title: "API Development",
    description:
      "RESTful and GraphQL APIs built with performance, documentation, and developer experience in mind.",
    features: [
      "RESTful API design",
      "GraphQL schema design",
      "API versioning strategies",
      "Rate limiting & authentication",
      "OpenAPI documentation",
    ],
  },
];

export const servicesSummary = services.map(({ icon, title, description }) => ({
  icon,
  title,
  description,
}));
