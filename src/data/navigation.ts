import type {
  NavigationItem,
  NavigationLink,
  ServiceCategory,
} from "@/types/navigation";

export const navigationItems: NavigationItem[] = [
  { label: "Services", key: "services" },
  { label: "Why Northstack", key: "why" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Insights", key: "insights" },
  { label: "Company", key: "company" },
];

export const serviceCategories: ServiceCategory[] = [
  {
    title: "Software Engineering",
    href: "/services/software-engineering",
    summary: "Resilient software, built for the complexity of real business.",
    services: [
      { label: "Custom Software Development", href: "/services/custom-software-development", description: "Purpose-built systems for evolving needs." },
      { label: "Web Application Development", href: "/services/web-application-development", description: "Fast, reliable web platforms at scale." },
      { label: "API & Backend Development", href: "/services/api-backend-development", description: "Strong foundations for connected products." },
      { label: "Software Modernization", href: "/services/software-modernization", description: "Make existing systems ready for what is next." },
      { label: "Quality Engineering", href: "/services/quality-engineering", description: "Confidence at every stage of delivery." },
    ],
  },
  {
    title: "AI & Automation",
    href: "/services/ai-automation",
    summary: "Practical intelligence integrated into everyday work.",
    services: [
      { label: "AI-Powered Applications", href: "/services/ai-powered-applications" },
      { label: "Generative AI Integration", href: "/services/generative-ai-integration" },
      { label: "Intelligent Automation", href: "/services/intelligent-automation" },
      { label: "AI Assistants & Agents", href: "/services/ai-assistants-agents" },
      { label: "AI Strategy & Prototyping", href: "/services/ai-strategy-prototyping" },
    ],
  },
  {
    title: "Cloud & DevOps",
    href: "/services/cloud-devops",
    summary: "Infrastructure and delivery systems made to adapt.",
    services: [
      { label: "Cloud Architecture", href: "/services/cloud-architecture" },
      { label: "Application Deployment", href: "/services/application-deployment" },
      { label: "CI/CD Engineering", href: "/services/cicd-engineering" },
      { label: "Infrastructure & Scaling", href: "/services/infrastructure-scaling" },
      { label: "Monitoring & Reliability", href: "/services/monitoring-reliability" },
    ],
  },
  {
    title: "Digital Products",
    href: "/services/digital-products",
    summary: "From ambitious ideas to products people depend on.",
    services: [
      { label: "Product Discovery", href: "/services/product-discovery" },
      { label: "MVP Development", href: "/services/mvp-development" },
      { label: "SaaS Development", href: "/services/saas-development" },
      { label: "Product Engineering", href: "/services/product-engineering" },
      { label: "UX Engineering", href: "/services/ux-engineering" },
    ],
  },
  {
    title: "Data & Integrations",
    href: "/services/data-integrations",
    summary: "Connect systems and turn complex data into useful insight.",
    services: [
      { label: "API Integrations", href: "/services/api-integrations" },
      { label: "Data Platforms", href: "/services/data-platforms" },
      { label: "System Integration", href: "/services/system-integration" },
      { label: "Analytics Solutions", href: "/services/analytics-solutions" },
      { label: "Database Engineering", href: "/services/database-engineering" },
    ],
  },
  {
    title: "Technology Consulting",
    href: "/services/technology-consulting",
    summary: "Clear technical direction for consequential decisions.",
    services: [
      { label: "Technical Architecture", href: "/services/technical-architecture" },
      { label: "Technology Strategy", href: "/services/technology-strategy" },
      { label: "System Audits", href: "/services/system-audits" },
      { label: "Performance Optimization", href: "/services/performance-optimization" },
      { label: "Engineering Advisory", href: "/services/engineering-advisory" },
    ],
  },
];

export const secondaryMenus: Record<"why" | "insights" | "company", NavigationLink[]> = {
  why: [
    { label: "Our Story", href: "/why-northstack/our-story" },
    { label: "Why Northstack", href: "/why-northstack" },
    { label: "How We Work", href: "/why-northstack/how-we-work" },
    { label: "Engineering Principles", href: "/why-northstack/engineering-principles" },
    { label: "Team", href: "/why-northstack/team" },
  ],
  insights: [
    { label: "Articles", href: "/insights" },
    { label: "Engineering", href: "/insights/engineering" },
    { label: "AI", href: "/insights/ai" },
    { label: "Product", href: "/insights/product" },
    { label: "Company News", href: "/insights/company-news" },
  ],
  company: [
    { label: "About", href: "/company/about" },
    { label: "Careers", href: "/company/careers" },
    { label: "Contact", href: "/contact" },
  ],
};
