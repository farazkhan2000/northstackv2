"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ProjectVisual } from "@/components/ui/ProjectVisual";
import { projects } from "@/data/projects";

export function SelectedWork() {
  const [activeIndex, setActiveIndex] = useState(0);
  const project = projects[activeIndex];

  function move(direction: -1 | 1) {
    setActiveIndex((current) => (current + direction + projects.length) % projects.length);
  }

  return (
    <section id="selected-work" aria-labelledby="selected-work-heading" className="border-t border-zinc-200 bg-white py-20 text-zinc-950 xl:py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 id="selected-work-heading" className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">Selected Work</h2>
          <div className="flex items-center gap-2">
            <Link href="/portfolio" className="inline-flex min-h-11 items-center border border-zinc-300 px-4 font-[family-name:var(--font-space-mono)] text-xs font-bold text-zinc-900 transition-colors hover:border-[#0033ff] hover:text-[#0033ff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0033ff]">View All <span aria-hidden="true" className="ml-4">↗</span></Link>
            <button type="button" onClick={() => move(-1)} aria-label="Previous project" className="flex h-11 w-11 items-center justify-center border border-zinc-300 text-xl transition-colors hover:border-[#0033ff] hover:text-[#0033ff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0033ff]">←</button>
            <button type="button" onClick={() => move(1)} aria-label="Next project" className="flex h-11 w-11 items-center justify-center border border-zinc-300 text-xl transition-colors hover:border-[#0033ff] hover:text-[#0033ff] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0033ff]">→</button>
          </div>
        </div>

        <article aria-labelledby="featured-project-title" className="mt-10 flex flex-col border border-zinc-200 lg:h-[620px] lg:flex-row">
          <div className="h-[340px] min-w-0 bg-slate-100 sm:h-[440px] lg:h-full lg:w-[38%] lg:shrink-0">
            <ProjectVisual key={project.slug} project={project} />
          </div>
          <div className="flex min-w-0 flex-1 flex-col bg-[#f5f6f8] px-6 py-8 sm:px-10 lg:px-11 lg:py-10 xl:px-14">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <p className="font-[family-name:var(--font-space-mono)] text-[11px] font-bold tracking-[0.14em] text-[#0033ff] uppercase">Project / {project.number}</p>
              <span className="border border-zinc-300 px-2.5 py-1 font-[family-name:var(--font-space-mono)] text-[10px] font-bold tracking-[0.07em] text-zinc-600 uppercase">{project.category}</span>
            </div>
            <h3 id="featured-project-title" aria-live="polite" className="mt-6 text-[clamp(2.25rem,4vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.055em]">{project.title}</h3>
            <p className="mt-4 max-w-[720px] text-sm leading-6 text-zinc-600 sm:text-base sm:leading-7">{project.description}</p>
            <ul aria-label="Project capabilities" className="mt-6 flex flex-wrap gap-2">
              {project.capabilities.map((capability) => <li key={capability} className="border border-zinc-300 px-2.5 py-1.5 font-[family-name:var(--font-space-mono)] text-[10px] text-zinc-700">{capability}</li>)}
            </ul>
            {project.technologies && (
              <p className="mt-4 text-xs leading-5 text-zinc-500"><span className="mr-3 font-[family-name:var(--font-space-mono)] text-[10px] font-bold tracking-[0.08em] uppercase">Technology</span>{project.technologies.join(" / ")}</p>
            )}

            <div className="mt-8 lg:mt-auto lg:pt-5">
              <dl className="flex flex-wrap border-t border-zinc-300">
                {project.attributes.map((attribute) => (
                  <div key={attribute.label} className="w-full border-b border-zinc-300 py-4 sm:w-1/3 sm:border-r sm:px-4 sm:first:pl-0 sm:last:border-r-0">
                    <dt className="text-base font-semibold tracking-[-0.035em] text-[#0033ff] sm:text-lg">{attribute.label}</dt>
                    <dd className="mt-1 text-xs leading-5 text-zinc-600">{attribute.description}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 flex flex-wrap items-end justify-between gap-5">
                <Link href={project.href} prefetch={false} className="inline-flex min-h-11 items-center gap-3 font-[family-name:var(--font-space-mono)] text-xs font-bold text-[#0033ff] underline underline-offset-8 transition-colors hover:text-blue-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0033ff]">View Case Study <span aria-hidden="true">→</span></Link>
                <p aria-hidden="true" className="max-w-[220px] text-right text-xl font-extrabold leading-none tracking-[-0.055em] text-zinc-300 uppercase sm:text-2xl">{project.title}</p>
              </div>
            </div>
          </div>
        </article>

        <div className="mt-6 flex items-center justify-between gap-6">
          <p className="font-[family-name:var(--font-space-mono)] text-xs font-bold tracking-[0.1em] text-zinc-500" aria-live="polite">{String(activeIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</p>
          <div className="flex items-center gap-2" aria-label="Select featured project">
            {projects.map((item, index) => (
              <button key={item.slug} type="button" onClick={() => setActiveIndex(index)} aria-label={`Show ${item.title}`} aria-current={activeIndex === index ? "true" : undefined} className={`h-2 transition-all focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0033ff] ${activeIndex === index ? "w-12 bg-[#0033ff]" : "w-6 bg-zinc-300 hover:bg-zinc-500"}`} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
