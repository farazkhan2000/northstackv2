import Link from "next/link";
import { navigationItems, secondaryMenus, serviceCategories } from "@/data/navigation";
import type { DropdownKey } from "@/types/navigation";

type Props = {
  expanded: DropdownKey | null;
  onToggle: (key: DropdownKey) => void;
  onNavigate: () => void;
};

export function MobileNavigation({ expanded, onToggle, onNavigate }: Props) {
  return (
    <nav id="mobile-navigation" aria-label="Mobile navigation" className="absolute inset-x-0 top-full z-40 max-h-[calc(100dvh-72px)] overflow-y-auto overscroll-contain border-b border-zinc-200 bg-white shadow-lg shadow-black/5 xl:hidden">
      <div className="flex flex-col px-5 pb-8 pt-2 sm:px-8">
        {navigationItems.map((item) => item.key ? (
          <div key={item.key} className="border-b border-zinc-200">
            <button type="button" aria-expanded={expanded === item.key} aria-controls={expanded === item.key ? `mobile-group-${item.key}` : undefined} onClick={() => onToggle(item.key)} className="flex min-h-14 w-full items-center justify-between font-[family-name:var(--font-space-mono)] text-left text-sm font-bold text-zinc-950 focus-visible:outline-2 focus-visible:outline-[#0033ff]">
              {item.label}
              <span aria-hidden="true" className={`text-xl font-light transition-transform duration-150 ${expanded === item.key ? "rotate-45 text-[#0033ff]" : ""}`}>+</span>
            </button>
            {expanded === item.key && (
              <div id={`mobile-group-${item.key}`} className="flex flex-col pb-4">
                {item.key === "services" ? serviceCategories.map((category) => (
                  <div key={category.href} className="flex flex-col border-t border-zinc-100 py-3">
                    <Link href={category.href} onClick={onNavigate} className="py-1 font-[family-name:var(--font-space-mono)] text-xs font-bold text-[#0033ff] focus-visible:outline-2 focus-visible:outline-[#0033ff]">{category.title} <span aria-hidden="true">↗</span></Link>
                    {category.services.map((service) => (
                      <Link key={service.href} href={service.href} onClick={onNavigate} className="py-2 pl-3 font-[family-name:var(--font-space-mono)] text-xs text-zinc-700 focus-visible:outline-2 focus-visible:outline-[#0033ff]">{service.label}</Link>
                    ))}
                  </div>
                )) : secondaryMenus[item.key].map((link) => (
                  <Link key={link.href} href={link.href} onClick={onNavigate} className="min-h-11 border-t border-zinc-100 py-3 font-[family-name:var(--font-space-mono)] text-xs text-zinc-700 focus-visible:outline-2 focus-visible:outline-[#0033ff]">{link.label}</Link>
                ))}
              </div>
            )}
          </div>
        ) : (
          <Link key={item.label} href={item.href} onClick={onNavigate} className="flex min-h-14 items-center border-b border-zinc-200 font-[family-name:var(--font-space-mono)] text-sm font-bold text-zinc-950 focus-visible:outline-2 focus-visible:outline-[#0033ff]">{item.label}</Link>
        ))}
        <Link href="/contact" onClick={onNavigate} className="mt-7 flex min-h-12 items-center justify-center bg-[#0033ff] px-5 font-[family-name:var(--font-space-mono)] text-xs font-bold text-white transition-colors hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0033ff]">Contact Us <span aria-hidden="true" className="ml-2">↗</span></Link>
      </div>
    </nav>
  );
}
