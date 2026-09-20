export type ServiceVisualKind =
  | "architecture"
  | "intelligence"
  | "product"
  | "cloud"
  | "data"
  | "advisory";

export type Service = {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  description: string;
  capabilities: string[];
  visual: ServiceVisualKind;
  href: string;
};
