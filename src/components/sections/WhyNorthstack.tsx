import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { HeroFlowArtwork } from "@/components/ui/HeroFlowArtwork";
import { whyFacts, whyReasons } from "@/data/whyNorthstack";

export function WhyNorthstack() {
  return (
    <section id="why-northstack" aria-labelledby="why-northstack-heading" className="border-t border-zinc-200 bg-[#f6f6f3] py-20 text-zinc-950 xl:py-28">
      <Container className="relative">
        <div className="flex flex-col gap-10 xl:flex-row xl:items-stretch xl:gap-10">
          <div className="xl:w-[71%] xl:min-w-0">
            <h2 id="why-northstack-heading" className="text-4xl font-medium leading-tight tracking-[-0.05em] sm:text-5xl">Why Northstack</h2>
            <div className="mt-8 flex flex-wrap gap-3 sm:mt-9">
              {whyReasons.map((reason) => (
                <article key={reason.number} className="flex w-full flex-col border border-zinc-200 bg-white px-5 py-5 sm:w-[calc(50%-0.375rem)] lg:w-[calc(33.333%-0.5rem)] lg:px-5">
                  <div className="flex items-center justify-between">
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-[#0033ff]"><path d={reason.icon} /></svg>
                    <span className="font-[family-name:var(--font-space-mono)] text-[10px] text-zinc-400">{reason.number}</span>
                  </div>
                  <h3 className="mt-4 text-[15px] font-medium tracking-[-0.025em] uppercase">{reason.title}</h3>
                  <p className="mt-1 text-[13px] leading-5 text-zinc-600">{reason.description}</p>
                </article>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap border-t border-zinc-300">
              {whyFacts.map((fact) => (
                <div key={fact.title} className="w-full border-b border-zinc-300 py-5 sm:w-1/2 sm:pr-6 lg:w-1/4 lg:flex-1 lg:border-r lg:px-4 lg:first:pl-0 lg:last:border-r-0">
                  <h3 className="text-xl font-semibold tracking-[-0.045em] text-[#0033ff] sm:text-[22px] xl:text-[23px]">{fact.title}</h3>
                  <p className="mt-2 text-[13px] leading-5 text-zinc-600">{fact.description}</p>
                </div>
              ))}
            </div>
          </div>
          <aside aria-label="Northstack brand statement" className="flex flex-col overflow-hidden bg-[#0033ff] text-white sm:mx-auto sm:w-full sm:max-w-[540px] xl:mx-0 xl:w-auto xl:max-w-none xl:min-w-0 xl:flex-1">
            <div className="h-[170px] overflow-hidden bg-[#d9dad7] sm:h-[190px] xl:h-[170px]">
              <HeroFlowArtwork variant="main" />
            </div>
            <div className="flex flex-1 flex-col justify-between gap-6 bg-[#0033ff] p-7 xl:p-7">
              <div>
                <p className="font-[family-name:var(--font-space-mono)] text-[10px] font-bold tracking-[0.16em] uppercase">Northstack</p>
                <p className="mt-6 text-[clamp(2rem,2.4vw,2.6rem)] font-bold leading-[0.98] tracking-[-0.065em] uppercase">Engineering<br />for what&apos;s<br />next.</p>
              </div>
              <div className="flex flex-wrap justify-between gap-5 border-t border-white/40 pt-5 font-[family-name:var(--font-space-mono)] text-[10px] font-bold leading-5 tracking-[0.12em] uppercase">
                <span>Helsinki<br />Finland</span><span>Software / AI<br />Products</span>
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-10 flex flex-col gap-5 bg-[#0033ff] px-6 py-7 text-white sm:flex-row sm:items-center sm:justify-between sm:px-9 xl:mt-12 xl:px-11">
          <p className="text-2xl font-semibold tracking-[-0.045em] sm:text-3xl">Let&apos;s work on something new.</p>
          <Link href="/contact" className="inline-flex min-h-12 w-fit items-center gap-6 bg-white px-5 font-[family-name:var(--font-space-mono)] text-xs font-bold text-[#0033ff] transition-colors hover:bg-blue-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Start a Project <span aria-hidden="true">→</span></Link>
        </div>
      </Container>
    </section>
  );
}
