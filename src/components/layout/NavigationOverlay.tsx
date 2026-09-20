"use client";

import { useEffect, useRef, type KeyboardEvent } from "react";
import Link from "next/link";
import { navigationItems, secondaryMenus, serviceCategories } from "@/data/navigation";
import type { DropdownKey } from "@/types/navigation";

type Props = {
  expanded: DropdownKey | null;
  onToggle: (key: DropdownKey) => void;
  onClose: () => void;
  onNavigate: () => void;
};

export function NavigationOverlay({ expanded, onToggle, onClose, onNavigate }: Props) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.documentElement.classList.add("overflow-hidden");
    document.body.classList.add("overflow-hidden");
    closeRef.current?.focus();
    return () => {
      document.documentElement.classList.remove("overflow-hidden");
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  function trapFocus(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "Tab" || !panelRef.current) return;
    const focusable = Array.from(panelRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"));
    const first = focusable[0];
    const last = focusable.at(-1);
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  }

  return (
    <div ref={panelRef} id="site-navigation-overlay" role="dialog" aria-modal="true" aria-label="Site navigation" onKeyDown={trapFocus} className="fixed inset-0 z-[100] flex min-h-dvh flex-col overflow-y-auto bg-[#f6f6f3] text-[#202124]">
      <div className="sticky top-0 z-10 flex min-h-[72px] items-center justify-between border-b border-zinc-300 bg-[#f6f6f3] px-7 sm:px-12 xl:min-h-20 xl:px-16">
        <Link href="/" onClick={onNavigate} aria-label="Northstack home" className="text-[23px] font-extrabold tracking-[-0.065em] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0033ff]">Northstack<span className="text-[#0033ff]">.</span></Link>
        <button ref={closeRef} type="button" onClick={onClose} className="flex min-h-11 items-center gap-4 font-[family-name:var(--font-space-mono)] text-xs font-bold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0033ff]">Close <span aria-hidden="true" className="text-2xl font-normal">×</span></button>
      </div>

      <div className="flex w-full flex-1 flex-col gap-12 px-7 py-8 sm:px-12 sm:py-12 xl:flex-row xl:gap-20 xl:px-16 xl:py-14">
        <nav aria-label="Full site navigation" className="flex w-full flex-col border-t border-zinc-300 xl:w-[62%]">
          {navigationItems.map((item, index) => (
            <div key={item.label} className="border-b border-zinc-300">
              {item.key ? (
                <button type="button" aria-expanded={expanded === item.key} aria-controls={expanded === item.key ? `overlay-group-${item.key}` : undefined} onClick={() => onToggle(item.key!)} className="group flex min-h-[76px] w-full items-center gap-5 text-left text-[#202124] transition-colors hover:text-[#0033ff] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#0033ff] sm:min-h-[88px]">
                  <span className="w-6 shrink-0 font-[family-name:var(--font-space-mono)] text-[10px] text-zinc-500">0{index + 1}</span>
                  <span className="min-w-0 flex-1 text-[clamp(1.65rem,3.2vw,3.25rem)] font-medium leading-none tracking-[-0.055em] uppercase">{item.label}</span>
                  <span aria-hidden="true" className="text-3xl font-light leading-none">{expanded === item.key ? "−" : "+"}</span>
                </button>
              ) : (
                <Link href={item.href} onClick={onNavigate} className="flex min-h-[76px] items-center gap-5 text-[#202124] transition-colors hover:text-[#0033ff] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#0033ff] sm:min-h-[88px]">
                  <span className="w-6 shrink-0 font-[family-name:var(--font-space-mono)] text-[10px] text-zinc-500">0{index + 1}</span>
                  <span className="min-w-0 flex-1 text-[clamp(1.65rem,3.2vw,3.25rem)] font-medium leading-none tracking-[-0.055em] uppercase">{item.label}</span>
                  <span aria-hidden="true" className="text-2xl font-light">↗</span>
                </Link>
              )}
              {item.key && expanded === item.key && (
                <div id={`overlay-group-${item.key}`} className="flex flex-wrap gap-x-8 gap-y-7 border-t border-zinc-200 pb-9 pt-7 pl-11">
                  {item.key === "services" ? serviceCategories.map((category) => (
                    <div key={category.href} className="flex w-full flex-col gap-2 sm:w-[calc(50%-1rem)] 2xl:w-[calc(33.333%-1.4rem)]">
                      <Link href={category.href} onClick={onNavigate} className="text-sm font-semibold text-[#0033ff] hover:underline focus-visible:outline-2 focus-visible:outline-[#0033ff]">{category.title} ↗</Link>
                      {category.services.map((service) => <Link key={service.href} href={service.href} onClick={onNavigate} className="text-xs leading-5 text-zinc-600 transition-colors hover:text-[#0033ff] focus-visible:outline-2 focus-visible:outline-[#0033ff]">{service.label}</Link>)}
                    </div>
                  )) : secondaryMenus[item.key].map((link) => (
                    <Link key={link.href} href={link.href} onClick={onNavigate} className="flex min-h-9 w-full items-center border-b border-zinc-200 text-sm font-medium text-zinc-700 transition-colors hover:text-[#0033ff] focus-visible:outline-2 focus-visible:outline-[#0033ff] sm:w-[calc(50%-1rem)]">{link.label} <span aria-hidden="true" className="ml-auto">↗</span></Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="flex flex-col justify-between gap-10 border-t border-zinc-300 pt-6 xl:flex-1">
          <p className="max-w-sm text-[clamp(1.4rem,2vw,2.4rem)] font-medium leading-[1.15] tracking-[-0.04em]">Software engineering for products built to move forward.</p>
          <p className="font-[family-name:var(--font-space-mono)] text-[10px] leading-5 tracking-[0.12em] text-zinc-500 uppercase">Software Engineering<br />AI Systems<br />Digital Products</p>
        </div>
      </div>

      <div className="sticky bottom-0 z-10 flex items-center justify-between gap-5 border-t border-zinc-300 bg-[#f6f6f3] px-7 py-4 sm:px-12 xl:px-16">
        <span className="hidden font-[family-name:var(--font-space-mono)] text-[10px] tracking-[0.12em] text-zinc-500 uppercase sm:block">Northstack / Helsinki, Finland</span>
        <Link href="/contact" onClick={onNavigate} className="inline-flex min-h-12 items-center gap-8 bg-[#202124] px-5 font-[family-name:var(--font-space-mono)] text-xs font-bold text-white transition-colors hover:bg-[#0033ff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0033ff]">Contact Us <span aria-hidden="true">↗</span></Link>
      </div>
    </div>
  );
}
