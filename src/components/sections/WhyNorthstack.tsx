import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { NorthstackHeroGraphic } from "@/components/ui/NorthstackHeroGraphic";
import { whyFacts, whyReasons } from "@/data/whyNorthstack";

export function WhyNorthstack() {
  return (
    <section id="why-northstack" aria-labelledby="why-northstack-heading" className="relative isolate overflow-hidden bg-[#f4f5f7] py-20 text-zinc-950 xl:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute -right-20 top-0 text-[38rem] font-black leading-none tracking-[-0.15em] text-[#0033ff]/[0.025]">N</div>
      <svg aria-hidden="true" viewBox="0 0 600 640" fill="none" className="pointer-events-none absolute -bottom-24 -left-28 h-[640px] w-[600px] text-[#0033ff] opacity-[0.035]">
        <path d="M40 600V80h110l310 360V80h110v520H460L150 240v360H40Z" stroke="currentColor" strokeWidth="18" />
        <path d="M0 500h270M0 540h310M0 580h350M250 0v180M290 0v220M330 0v260" stroke="currentColor" strokeWidth="3" />
        <path d="M380 40h140M380 70h180M380 100h160" stroke="currentColor" strokeWidth="2" />
      </svg>
      <Container className="relative">
        <div className="flex flex-col gap-10 xl:flex-row xl:items-stretch xl:gap-10">
          <div className="xl:w-[71%] xl:min-w-0">
            <h2 id="why-northstack-heading" className="text-[2rem] font-semibold leading-tight tracking-[-0.05em] sm:text-[2.25rem] xl:text-[2.5rem]">Why Northstack</h2>
            <div className="mt-8 flex flex-wrap gap-3 sm:mt-9">
              {whyReasons.map((reason) => (
                <article key={reason.number} className="flex w-full flex-col border border-zinc-200 bg-white/75 px-5 py-4 sm:w-[calc(50%-0.375rem)] lg:w-[calc(33.333%-0.5rem)] lg:px-5">
                  <div className="flex items-center justify-between">
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-[#0033ff]"><path d={reason.icon} /></svg>
                    <span className="font-[family-name:var(--font-space-mono)] text-[10px] text-zinc-400">{reason.number}</span>
                  </div>
                  <h3 className="mt-3 text-[15px] font-semibold tracking-[-0.025em] uppercase">{reason.title}</h3>
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
          <aside aria-label="Northstack brand statement" className="flex flex-col overflow-hidden bg-[#081d68] text-white sm:mx-auto sm:w-full sm:max-w-[540px] xl:mx-0 xl:w-auto xl:max-w-none xl:min-w-0 xl:flex-1">
            <div className="flex min-h-[170px] items-center justify-center bg-[#102567] px-6 py-4 sm:min-h-[190px] xl:min-h-[170px]">
              <div className="w-36 sm:w-40 xl:w-full xl:max-w-44"><NorthstackHeroGraphic /></div>
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
