"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/data/navigation";
import type { DropdownKey } from "@/types/navigation";
import { Container } from "@/components/ui/Container";
import { MobileNavigation } from "./MobileNavigation";
import { NavigationDropdown } from "./NavigationDropdown";
import { ServicesMegaMenu } from "./ServicesMegaMenu";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<DropdownKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<DropdownKey | null>(null);
  const [activeCategory, setActiveCategory] = useState(0);
  const headerRef = useRef<HTMLElement>(null);
  const openMenuRef = useRef<DropdownKey | null>(null);
  const mobileOpenRef = useRef(false);
  const overHero = isHome && !scrolled;

  useEffect(() => {
    if (!isHome) return;
    const updateScroll = () => setScrolled(window.scrollY > 32);
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, [isHome]);

  useEffect(() => {
    openMenuRef.current = openMenu;
    mobileOpenRef.current = mobileOpen;
  }, [openMenu, mobileOpen]);

  useEffect(() => {
    function onPointerDown(event: PointerEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        if (openMenuRef.current) {
          headerRef.current?.querySelector<HTMLButtonElement>(`[data-menu-trigger="${openMenuRef.current}"]`)?.focus();
        } else if (mobileOpenRef.current) {
          headerRef.current?.querySelector<HTMLButtonElement>("[data-mobile-trigger]")?.focus();
        }
        setOpenMenu(null);
        setMobileOpen(false);
        setMobileExpanded(null);
      }
    }

    function onBreakpointChange() {
      setOpenMenu(null);
      setMobileOpen(false);
    }

    const breakpoint = window.matchMedia("(min-width: 1280px)");

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    breakpoint.addEventListener("change", onBreakpointChange);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
      breakpoint.removeEventListener("change", onBreakpointChange);
    };
  }, []);

  function closeMenus() {
    setOpenMenu(null);
    setMobileOpen(false);
    setMobileExpanded(null);
  }

  return (
    <header ref={headerRef} className={`z-50 h-[72px] border-b transition-colors duration-200 xl:h-20 ${isHome ? "fixed inset-x-0 top-0" : "relative"} ${overHero ? "border-transparent bg-transparent text-white" : "border-zinc-200 bg-white text-zinc-950"}`}>
      <Container className="flex h-full items-center justify-between gap-5">
        <Link href="/" onClick={closeMenus} className="shrink-0 text-[23px] font-extrabold tracking-[-0.065em] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0033ff]" aria-label="Northstack home">Northstack<span className="text-[#0033ff]">.</span></Link>

        <nav aria-label="Primary navigation" className="hidden h-full items-center gap-1 font-[family-name:var(--font-space-mono)] xl:flex 2xl:gap-3">
          {navigationItems.map((item) => item.key ? (
            <button key={item.key} data-menu-trigger={item.key} type="button" aria-expanded={openMenu === item.key} aria-controls={openMenu === item.key ? `menu-${item.key}` : undefined} onClick={() => { setOpenMenu(openMenu === item.key ? null : item.key); setActiveCategory(0); }} className={`flex h-full items-center gap-2 border-b-2 px-3 pt-0.5 text-[13px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-8px] focus-visible:outline-[#0033ff] 2xl:px-4 ${openMenu === item.key ? "border-[#0033ff]" : "border-transparent"} ${overHero ? "hover:text-white/70" : "hover:text-[#0033ff]"} ${openMenu === item.key && !overHero ? "text-[#0033ff]" : ""}`}>
              {item.label}
              <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" className={`h-3 w-3 transition-transform duration-150 ${openMenu === item.key ? "rotate-180" : ""}`}><path d="m3.5 6 4.5 4 4.5-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          ) : (
            <Link key={item.label} href={item.href} onClick={closeMenus} className={`flex h-full items-center px-3 text-[13px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-8px] focus-visible:outline-[#0033ff] 2xl:px-4 ${overHero ? "hover:text-white/70" : "hover:text-[#0033ff]"}`}>{item.label}</Link>
          ))}
        </nav>

        <Link href="/contact" onClick={closeMenus} className="hidden min-h-11 shrink-0 items-center gap-5 bg-[#0033ff] px-5 font-[family-name:var(--font-space-mono)] text-xs font-bold text-white transition-colors hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0033ff] xl:flex">Contact Us <span aria-hidden="true">↗</span></Link>

        <button data-mobile-trigger type="button" aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen} aria-controls={mobileOpen ? "mobile-navigation" : undefined} onClick={() => { setMobileOpen(!mobileOpen); setMobileExpanded(null); }} className="flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-1.5 focus-visible:outline-2 focus-visible:outline-[#0033ff] xl:hidden">
          <span className={`h-0.5 w-6 bg-current transition-transform duration-150 ${mobileOpen ? "translate-y-1 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-current transition-transform duration-150 ${mobileOpen ? "-translate-y-1 -rotate-45" : ""}`} />
        </button>
      </Container>

      {openMenu === "services" && <ServicesMegaMenu activeCategory={activeCategory} onCategoryChange={setActiveCategory} onNavigate={closeMenus} />}
      {openMenu && openMenu !== "services" && <NavigationDropdown menu={openMenu} onNavigate={closeMenus} />}
      {mobileOpen && <MobileNavigation expanded={mobileExpanded} onToggle={(key) => setMobileExpanded(mobileExpanded === key ? null : key)} onNavigate={closeMenus} />}
    </header>
  );
}
