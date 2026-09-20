export type Insight = {
  id: string;
  slug: string;
  category: string;
  title: string;
  description: string;
  image: string;
  readTime: string;
  status: "planned" | "published";
  featured: boolean;
  href: string;
  topic?: string;
  visualType?: "engineering-review";
};
