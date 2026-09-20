"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { insights } from "@/data/insights";

export function Insights() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleInsights = Array.from({ length: 3 }, (_, offset) => insights[(startIndex + offset) % insights.length]);

  function move(direction: -1 | 1) {
    setStartIndex((current) => (current + direction + insights.length) % insights.length);
  }

  return (
    <section id="insights" aria-labelledby="insights-heading" className="border-t border-zinc-200 bg-white py-20 text-zinc-950 xl:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 id="insights-heading" className="text-4xl font-medium tracking-[-0.05em] sm:text-5xl">Insights from Northstack</h2>
          <div className="flex items-center gap-2">
            <button type="button" onClick={() => move(-1)} aria-label="Previous insights" className="flex h-11 w-11 items-center justify-center border border-zinc-300 text-xl transition-colors hover:border-[#0033ff] hover:text-[#0033ff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0033ff]">←</button>
            <button type="button" onClick={() => move(1)} aria-label="Next insights" className="flex h-11 w-11 items-center justify-center border border-zinc-300 text-xl transition-colors hover:border-[#0033ff] hover:text-[#0033ff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0033ff]">→</button>
          </div>
        </div>
        <div className="mt-12 flex gap-5 lg:gap-7">
          {visibleInsights.map((insight, index) => (
            <article key={insight.id} data-insight-card className={`min-w-0 flex-1 flex-col border-b border-zinc-200 ${index === 0 ? "flex" : index === 1 ? "hidden md:flex" : "hidden lg:flex"}`}>
              <div className="relative h-[250px] overflow-hidden bg-zinc-100 sm:h-[290px] lg:h-[320px]">
                <Image src={insight.image} alt="" fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col pb-7 pt-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="border-b border-[#0033ff] pb-1 font-[family-name:var(--font-space-mono)] text-[10px] font-bold tracking-[0.08em] text-zinc-700 uppercase">{insight.category}</span>
                  {insight.status === "planned" && <span className="font-[family-name:var(--font-space-mono)] text-[10px] font-bold tracking-[0.08em] text-[#0033ff] uppercase">Coming soon</span>}
                </div>
                <h3 className="mt-6 text-xl font-medium leading-[1.2] tracking-[-0.035em] sm:text-2xl">
                  {insight.status === "published" ? <Link href={insight.href} className="hover:text-[#0033ff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0033ff]">{insight.title}</Link> : insight.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">{insight.description}</p>
                <p className="mt-auto pt-6 font-[family-name:var(--font-space-mono)] text-[10px] font-bold tracking-[0.08em] text-zinc-500 uppercase">{insight.readTime}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-5 font-[family-name:var(--font-space-mono)] text-[10px] tracking-[0.08em] text-zinc-500" aria-live="polite">{String(startIndex + 1).padStart(2, "0")} / {String(insights.length).padStart(2, "0")}</p>
      </Container>
    </section>
  );
}
