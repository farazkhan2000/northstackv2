import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { NorthstackHeroGraphic } from "@/components/ui/NorthstackHeroGraphic";
import { trustedByDemoMarks } from "@/data/trustedBy";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-[#11151c] text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 -top-20 h-64 w-72 bg-[#1a202b] sm:h-96 sm:w-[30rem]" />
        <div className="absolute left-[20%] top-[14%] hidden h-48 w-56 bg-[#171d29] md:block" />
        <div className="absolute right-[8%] top-0 h-48 w-[28%] bg-[#181e2b] sm:h-64" />
        <div className="absolute -right-20 top-[32%] h-64 w-72 bg-[#151d2b] md:w-[32%]" />
        <div className="absolute bottom-0 left-[6%] hidden h-48 w-[24%] bg-[#161d2a] lg:block" />
        <div className="absolute bottom-[7%] left-[35%] h-40 w-[42%] bg-[#17203a]/70" />
        <div className="absolute -bottom-52 left-[22%] h-80 w-[80%] rounded-full bg-[#0033ff]/25 blur-[100px] md:-bottom-64 md:h-[30rem] md:blur-[130px]" />
        <div className="absolute bottom-[10%] right-[10%] h-48 w-64 rounded-full bg-[#0033ff]/15 blur-[80px] md:h-80 md:w-[30rem]" />
      </div>

      <Container className="relative flex min-h-screen flex-col justify-center gap-10 pb-20 pt-32 sm:gap-12 sm:pb-20 lg:pb-24 xl:flex-row xl:items-center xl:gap-8 xl:py-28">
        <div className="relative z-10 flex w-full flex-col items-start xl:w-[52%] xl:shrink-0">
          <h1 id="hero-title" className="max-w-[710px] text-[clamp(2.625rem,5.4vw,4.25rem)] font-semibold leading-[1.04] tracking-[-0.055em]">
            Build What&apos;s Next<br />with <span className="text-[#91b7ff]">Better Software.</span>
          </h1>
          <p className="mt-7 max-w-[590px] text-base leading-[1.7] text-[#c3cad7] sm:mt-8 sm:text-lg">
            From digital products to intelligent systems, Northstack designs and engineers software built around real business goals.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 sm:mt-10">
            <Link href="/contact" className="group inline-flex min-h-14 items-center gap-7 rounded-[2px] bg-[#0033ff] px-6 font-[family-name:var(--font-space-mono)] text-xs font-bold text-white transition-colors hover:bg-[#2452ff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              Start a Project <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link href="/portfolio" className="inline-flex min-h-11 items-center gap-2 font-[family-name:var(--font-space-mono)] text-xs text-[#b7c1d2] transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              Explore Our Work <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="mt-11 w-full max-w-[590px] border-t border-white/20 pt-5 sm:mt-12">
            <p className="font-[family-name:var(--font-space-mono)] text-[10px] tracking-[0.18em] text-[#8f9bb0] uppercase">Trusted by</p>
            <ul aria-hidden="true" className="mt-5 flex flex-wrap items-center gap-x-9 gap-y-5 sm:gap-x-12">
              {trustedByDemoMarks.map((mark) => (
                <li key={mark.id} className="text-[#b4bfd0]"><svg viewBox="0 0 48 48" fill="currentColor" className="h-7 w-7 opacity-80 sm:h-8 sm:w-8"><path d={mark.path} /></svg></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[350px] shrink-0 sm:max-w-[450px] xl:mx-0 xl:w-[48%] xl:max-w-[550px]">
          <NorthstackHeroGraphic />
        </div>
      </Container>

      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-9 border-b border-white/15">
        <div className="mx-auto flex h-full w-full max-w-[1600px] items-end gap-3 px-5 sm:px-8 xl:px-12 2xl:px-16">
          <span className="h-px w-12 bg-[#83a6ff]/70" />
          <span className="mb-[-3px] h-[7px] w-[7px] rounded-full bg-[#83a6ff]" />
          <span className="h-px w-24 bg-white/20" />
          <span className="mb-[-2px] h-[5px] w-[5px] rounded-full bg-white/40" />
          <span className="h-px flex-1 bg-white/10" />
        </div>
      </div>
    </section>
  );
}
