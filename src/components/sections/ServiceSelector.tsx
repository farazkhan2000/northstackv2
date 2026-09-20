"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { services } from "@/data/services";
import type { Service } from "@/types/service";
import { ServiceVisual } from "@/components/ui/ServiceVisual";

export function ServiceSelector() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const activeService = services[activeIndex];

  function onTabKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex: number;
    switch (event.key) {
      case "ArrowDown":
        nextIndex = (index + 1) % services.length;
        break;
      case "ArrowUp":
        nextIndex = (index - 1 + services.length) % services.length;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = services.length - 1;
        break;
      default:
        return;
    }
    event.preventDefault();
    setActiveIndex(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  }

  return (
    <div className="mt-12 sm:mt-14 xl:mt-16">
      <div className="hidden items-start gap-10 xl:flex 2xl:gap-16">
        <div role="tablist" aria-label="Northstack services" aria-orientation="vertical" className="flex w-[42%] shrink-0 flex-col border-t border-zinc-200">
          {services.map((service, index) => (
            <button
              key={service.id}
              ref={(element) => { tabRefs.current[index] = element; }}
              id={`service-tab-${service.id}`}
              type="button"
              role="tab"
              aria-selected={activeIndex === index}
              aria-controls="service-panel"
              tabIndex={activeIndex === index ? 0 : -1}
              onClick={() => setActiveIndex(index)}
              onKeyDown={(event) => onTabKeyDown(event, index)}
              className={`flex min-h-[82px] w-full items-center gap-5 border-b border-l-2 border-b-zinc-200 px-5 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#0033ff] ${activeIndex === index ? "border-l-[#0033ff] bg-blue-50/50 text-[#0033ff]" : "border-l-transparent text-zinc-600 hover:bg-zinc-50 hover:text-zinc-950"}`}
            >
              <span className="font-[family-name:var(--font-space-mono)] text-xs font-bold">{service.number}</span>
              <span className="min-w-0 flex-1 text-lg font-semibold tracking-tight 2xl:text-xl">{service.title}</span>
              <span aria-hidden="true" className={`text-xl transition-transform ${activeIndex === index ? "translate-x-1" : ""}`}>↗</span>
            </button>
          ))}
        </div>
        <div id="service-panel" role="tabpanel" aria-labelledby={`service-tab-${activeService.id}`} tabIndex={0} className="min-w-0 flex-1 focus-visible:outline-2 focus-visible:outline-[#0033ff]">
          <ServicePresentation service={activeService} />
        </div>
      </div>

      <div className="border-t border-zinc-200 xl:hidden">
        {services.map((service, index) => {
          const expanded = expandedIndex === index;
          return (
            <div key={service.id} className="border-b border-zinc-200">
              <h3>
                <button
                  type="button"
                  aria-expanded={expanded}
                  aria-controls={expanded ? `service-mobile-${service.id}` : undefined}
                  onClick={() => setExpandedIndex(expanded ? null : index)}
                  className={`flex min-h-20 w-full items-center gap-4 py-4 text-left focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#0033ff] ${expanded ? "text-[#0033ff]" : "text-zinc-950"}`}
                >
                  <span className="font-[family-name:var(--font-space-mono)] text-xs font-bold">{service.number}</span>
                  <span className="min-w-0 flex-1 text-lg font-semibold tracking-tight sm:text-xl">{service.title}</span>
                  <span aria-hidden="true" className="font-[family-name:var(--font-space-mono)] text-2xl font-normal">{expanded ? "−" : "+"}</span>
                </button>
              </h3>
              {expanded && (
                <div id={`service-mobile-${service.id}`} className="pb-6">
                  <ServicePresentation service={service} compact />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ServicePresentation({ service, compact = false }: { service: Service; compact?: boolean }) {
  return (
    <div className={`flex flex-col ${compact ? "" : "border border-zinc-200"}`}>
      <div className={compact ? "order-2 mt-6" : "order-1"}><ServiceVisual kind={service.visual} /></div>
      <div className={`${compact ? "order-1" : "order-2 px-7 pt-7 2xl:px-9"}`}>
        <p className="font-[family-name:var(--font-space-mono)] text-[10px] font-bold tracking-[0.15em] text-[#0033ff] uppercase">Service / {service.number}</p>
        <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.035em] text-zinc-950 sm:text-[1.7rem]">{service.title}</h3>
        <p className="mt-2 text-sm font-medium leading-6 text-zinc-800">{service.shortDescription}</p>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-600">{service.description}</p>
        <ul aria-label="Capabilities" className="mt-5 flex flex-wrap gap-2">
          {service.capabilities.map((capability) => (
            <li key={capability} className="border border-zinc-200 px-2.5 py-1.5 font-[family-name:var(--font-space-mono)] text-[10px] text-zinc-600">{capability}</li>
          ))}
        </ul>
      </div>
      <Link href={service.href} className={`order-3 flex min-h-12 w-fit items-center gap-3 font-[family-name:var(--font-space-mono)] text-xs font-bold text-[#0033ff] underline decoration-[#0033ff] underline-offset-8 transition-colors hover:text-blue-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0033ff] ${compact ? "mt-5" : "mx-7 mb-7 mt-6 2xl:mx-9"}`}>
        Explore Service <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}
