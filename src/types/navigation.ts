export type NavigationLink = {
  label: string;
  href: string;
  description?: string;
};

export type ServiceCategory = {
  title: string;
  href: string;
  summary: string;
  services: NavigationLink[];
};

export type DropdownKey = "services" | "why" | "insights" | "company";

export type NavigationItem =
  | { label: string; href: string; key?: never }
  | { label: string; key: DropdownKey; href?: never };
