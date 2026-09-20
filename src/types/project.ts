export type ProjectVisualKind = "everest" | "mantra" | "ascendra";

export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  description: string;
  capabilities: string[];
  technologies?: string[];
  attributes: { label: string; description: string }[];
  href: string;
  visual: ProjectVisualKind;
  image?: {
    src: string;
    alt: string;
  };
  screenshot?: string;
  externalUrl?: string;
};
