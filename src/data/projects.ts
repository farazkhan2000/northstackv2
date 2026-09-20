import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "everest-ravintola",
    number: "01",
    title: "Everest Ravintola",
    category: "Restaurant Digital Experience",
    description: "A modern restaurant website designed to make discovering the menu, location, opening hours, and ordering options simple across devices.",
    capabilities: ["Web Development", "UX Engineering", "Content Experience"],
    technologies: ["Next.js", "React", "Tailwind CSS"],
    attributes: [
      { label: "Responsive", description: "Built for desktop and mobile" },
      { label: "Content", description: "Menu, hours and location" },
      { label: "Ordering", description: "Clear paths to ordering options" },
    ],
    href: "/portfolio/everest-ravintola",
    visual: "everest",
    image: {
      src: "/images/projects/everest-restaurant-interior.jpg",
      alt: "Warm, contemporary restaurant dining room used as representative imagery for Everest Ravintola",
    },
  },
  {
    slug: "mantra-ravintola",
    number: "02",
    title: "Mantra Ravintola",
    category: "Restaurant Platform",
    description: "A responsive restaurant experience combining multilingual content, dynamic opening information, menu presentation, and customer-facing announcements in one maintainable platform.",
    capabilities: ["Web Application", "Multilingual UX", "Content Systems"],
    technologies: ["Next.js", "React", "Tailwind CSS", "Supabase"],
    attributes: [
      { label: "Multilingual", description: "Content across supported languages" },
      { label: "Dynamic hours", description: "Opening information can be updated" },
      { label: "Announcements", description: "Customer-facing updates" },
    ],
    href: "/portfolio/mantra-ravintola",
    visual: "mantra",
    image: {
      src: "/images/projects/mantra-restaurant-dining.jpg",
      alt: "Restaurant dining table with plated food used as representative imagery for Mantra Ravintola",
    },
  },
  {
    slug: "ascendra",
    number: "03",
    title: "Ascendra",
    category: "AI Product",
    description: "An AI-powered career platform exploring how intelligent tools can help people create stronger application materials and navigate the job search more effectively.",
    capabilities: ["AI Product Development", "Product Engineering", "Application Development"],
    attributes: [
      { label: "AI-assisted", description: "Intelligent career workflows" },
      { label: "Documents", description: "Application material experience" },
      { label: "Product", description: "Designed as a digital platform" },
    ],
    href: "/portfolio/ascendra",
    visual: "ascendra",
  },
];
