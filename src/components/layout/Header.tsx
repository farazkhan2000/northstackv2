"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { DropdownKey } from "@/types/navigation";
import { NavigationOverlay } from "./NavigationOverlay";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [overlayExpanded, setOverlayExpanded] = useState<DropdownKey | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isHome) return;
    const updateScroll = () => setScrolled(window.scrollY > 24);
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, [isHome]);

  useEffect(() => {
    if (!overlayOpen) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOverlayOpen(false);
        setOverlayExpanded(null);
        menuButtonRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [overlayOpen]);

  function closeOverlay() {
    setOverlayOpen(false);
    setOverlayExpanded(null);
    menuButtonRef.current?.focus();
  }

  function closeOnNavigate() {
    setOverlayOpen(false);
    setOverlayExpanded(null);
  }

  const transparent = isHome && !scrolled;

  return (
    <header className={`z-50 h-[72px] border-b text-zinc-950 transition-[background-color,border-color,box-shadow] duration-300 xl:h-20 ${isHome ? "fixed inset-x-0 top-0" : "relative"} ${transparent ? "border-transparent bg-transparent" : "border-zinc-200 bg-white shadow-[0_1px_12px_rgba(0,0,0,0.04)]"}`}>
      <div className="flex h-full w-full items-center justify-between px-7 sm:px-12 xl:px-16">
        <Link href="/" onClick={closeOnNavigate} className="shrink-0 text-[23px] font-extrabold tracking-[-0.065em] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0033ff]" aria-label="Northstack home">Northstack<span className="text-[#0033ff]">.</span></Link>

        <button ref={menuButtonRef} type="button" aria-label={overlayOpen ? "Close menu" : "Open menu"} aria-expanded={overlayOpen} aria-controls="site-navigation-overlay" onClick={() => { setOverlayOpen((open) => !open); setOverlayExpanded(null); }} className="flex min-h-11 shrink-0 items-center justify-center gap-3 font-[family-name:var(--font-space-mono)] text-xs font-bold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0033ff]">
          <span aria-hidden="true" className="flex flex-col gap-1.5">
            <span className="h-0.5 w-6 bg-current" />
            <span className="h-0.5 w-6 bg-current" />
          </span>
          <span className="max-[420px]:sr-only">Menu</span>
        </button>
      </div>

      {overlayOpen && <NavigationOverlay expanded={overlayExpanded} onToggle={(key) => setOverlayExpanded(overlayExpanded === key ? null : key)} onClose={closeOverlay} onNavigate={closeOnNavigate} />}
    </header>
  );
}
