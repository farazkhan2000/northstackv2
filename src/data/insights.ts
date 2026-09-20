import type { Insight } from "@/types/insight";

export const featuredInsight: Insight = {
  id: "ai-code-engineering-judgment",
  slug: "ai-code-engineering-judgment",
  category: "AI & Software Engineering",
  title: "AI can write code. Engineering still requires judgment.",
  description:
    "AI-assisted development is changing how software gets built, but speed alone does not create good systems. Architecture, security, maintainability, context, and technical judgment still determine whether software survives beyond the first release.",
  image: "/images/insights/developer-reviewing-code.jpg",
  readTime: "8 min read",
  status: "planned",
  featured: true,
  href: "/insights/ai-code-engineering-judgment",
  topic: "Engineering",
  visualType: "engineering-review",
};

export const secondaryInsights: Insight[] = [
  {
    id: "software-difficult-to-change",
    slug: "software-difficult-to-change",
    category: "Software Engineering",
    title: "The hidden cost of software that's difficult to change",
    description: "Why maintainability matters long after the first version ships.",
    image: "/images/insights/code-detail.jpg",
    readTime: "6 min read",
    status: "planned",
    featured: false,
    href: "/insights/software-difficult-to-change",
  },
  {
    id: "mvp-without-dead-end",
    slug: "mvp-without-dead-end",
    category: "Product Engineering",
    title: "Building an MVP without building a dead end",
    description:
      "How early technical decisions can support speed without making future development unnecessarily expensive.",
    image: "/images/services/product-workshop.jpg",
    readTime: "7 min read",
    status: "planned",
    featured: false,
    href: "/insights/mvp-without-dead-end",
  },
  {
    id: "ai-agents-software-products",
    slug: "ai-agents-software-products",
    category: "AI",
    title: "Where AI agents actually fit in software products",
    description:
      "A practical look at when agentic systems create value and when simpler software may be the better choice.",
    image: "/images/services/operations-workspace.jpg",
    readTime: "8 min read",
    status: "planned",
    featured: false,
    href: "/insights/ai-agents-software-products",
  },
];

export const insights: Insight[] = [featuredInsight, ...secondaryInsights];
