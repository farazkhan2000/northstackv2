import Image from "next/image";
import Link from "next/link";
import { secondaryMenus } from "@/data/navigation";
import { Container } from "@/components/ui/Container";

type MenuKey = keyof typeof secondaryMenus;

export function NavigationDropdown({ menu, onNavigate }: { menu: MenuKey; onNavigate: () => void }) {
  const isWhy = menu === "why";
  const hasMedia = isWhy || menu === "company";

  return (
    <div id={`menu-${menu}`} className="absolute inset-x-0 top-full z-40 border-b border-zinc-200 bg-white shadow-lg shadow-black/5">
      <Container className={`flex py-8 ${hasMedia ? "gap-10" : "justify-end"}`}>
        {hasMedia && (
          <div className="relative min-h-72 w-[44%] overflow-hidden bg-zinc-950">
            <Image src={isWhy ? "/images/people/developer-collaboration.jpg" : "/images/people/app-design-workshop.jpg"} alt={isWhy ? "Developers reviewing code together" : "Colleagues discussing an application design"} fill sizes="(min-width: 1280px) 600px, 45vw" className="object-cover" />
          </div>
        )}
        <div className={`flex flex-col ${hasMedia ? "flex-1" : "w-80"}`}>
          <p className="mb-5 font-[family-name:var(--font-space-mono)] text-[11px] uppercase tracking-[0.18em] text-zinc-500">{menu === "why" ? "The Northstack approach" : menu === "insights" ? "Ideas & perspectives" : "Get to know us"}</p>
          {isWhy && <p className="mb-5 max-w-md text-xl font-semibold leading-snug tracking-tight text-zinc-950">Thoughtful engineering. Clear thinking. Long-term partnership.</p>}
          <div className="flex flex-col">
            {secondaryMenus[menu].map((item) => (
              <Link key={item.href} href={item.href} onClick={onNavigate} className="flex min-h-11 items-center justify-between border-t border-zinc-100 py-2 font-[family-name:var(--font-space-mono)] text-xs font-bold text-zinc-800 transition-colors hover:text-[#0033ff] focus-visible:outline-2 focus-visible:outline-[#0033ff]">
                {item.label}<span aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
