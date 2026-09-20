import Image from "next/image";
import Link from "next/link";
import { serviceCategories } from "@/data/navigation";
import { Container } from "@/components/ui/Container";

type Props = {
  activeCategory: number;
  onCategoryChange: (index: number) => void;
  onNavigate: () => void;
};

export function ServicesMegaMenu({ activeCategory, onCategoryChange, onNavigate }: Props) {
  const category = serviceCategories[activeCategory];

  return (
    <div id="menu-services" className="absolute inset-x-0 top-full z-40 border-b border-zinc-200 bg-white shadow-lg shadow-black/5">
      <Container className="flex min-h-[470px] py-8">
        <div className="flex w-[29%] shrink-0 flex-col border-r border-zinc-200 pr-6">
          <p className="mb-5 font-[family-name:var(--font-space-mono)] text-[11px] uppercase tracking-[0.18em] text-zinc-500">What we do</p>
          {serviceCategories.map((item, index) => (
            <button
              key={item.title}
              type="button"
              className={`flex min-h-12 items-center justify-between border-b border-zinc-100 px-3 font-[family-name:var(--font-space-mono)] text-left text-xs font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#0033ff] ${index === activeCategory ? "bg-blue-50 text-[#0033ff]" : "text-zinc-800 hover:bg-zinc-50 hover:text-[#0033ff]"}`}
              onMouseEnter={() => onCategoryChange(index)}
              onFocus={() => onCategoryChange(index)}
              onClick={() => onCategoryChange(index)}
              aria-current={index === activeCategory ? "true" : undefined}
            >
              <span className="flex items-center gap-3"><span aria-hidden="true" className={`h-1.5 w-1.5 rotate-45 ${index === activeCategory ? "bg-[#0033ff]" : "bg-zinc-400"}`} />{item.title}</span>
              <span aria-hidden="true">↗</span>
            </button>
          ))}
        </div>

        <div className="flex min-w-0 flex-1 flex-col px-8 xl:px-10">
          <p className="mb-5 font-[family-name:var(--font-space-mono)] text-[11px] uppercase tracking-[0.18em] text-zinc-500">Explore services</p>
          <Link href={category.href} onClick={onNavigate} className="mb-2 w-fit text-xl font-semibold tracking-tight text-zinc-950 hover:text-[#0033ff] focus-visible:outline-2 focus-visible:outline-[#0033ff]">{category.title} <span aria-hidden="true">↗</span></Link>
          <p className="mb-5 text-sm text-zinc-500">{category.summary}</p>
          <div className="flex flex-col">
            {category.services.map((service) => (
              <Link key={service.href} href={service.href} onClick={onNavigate} className="group border-t border-zinc-100 py-2.5 focus-visible:outline-2 focus-visible:outline-[#0033ff]">
                <span className="font-[family-name:var(--font-space-mono)] text-xs font-bold text-zinc-800 transition-colors group-hover:text-[#0033ff]">{service.label}</span>
                {service.description && <span className="mt-0.5 block text-xs text-zinc-500">{service.description}</span>}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex w-[29%] shrink-0 flex-col bg-zinc-950 text-white">
          <div className="relative h-52 w-full overflow-hidden">
            <Image src="/images/services/software-developer.jpg" alt="Software developer working at code and product documentation" fill sizes="(min-width: 1280px) 400px, 30vw" className="object-cover" />
          </div>
          <div className="flex flex-1 flex-col p-6">
            <p className="mb-3 font-[family-name:var(--font-space-mono)] text-[10px] uppercase tracking-[0.18em] text-blue-300">Northstack / Engineering</p>
            <p className="text-xl font-semibold leading-snug tracking-tight">Building software that moves businesses forward.</p>
            <p className="mt-3 text-sm leading-6 text-zinc-300">We engineer reliable digital products for the people and businesses that depend on them.</p>
            <Link href="/portfolio" onClick={onNavigate} className="mt-auto pt-6 text-sm font-semibold text-white underline decoration-[#0033ff] decoration-2 underline-offset-8 focus-visible:outline-2 focus-visible:outline-white">Explore our work <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
