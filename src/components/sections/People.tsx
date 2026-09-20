import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { peopleImages, peopleValues } from "@/data/people";

export function People() {
  return (
    <section id="people" aria-labelledby="people-heading" className="bg-[#f5f3ef] py-20 text-zinc-950 xl:py-28">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl"><p className="text-xs font-semibold tracking-[0.08em] text-[#0033ff] uppercase">The people behind the work</p><h2 id="people-heading" className="mt-6 text-[clamp(2.9rem,5vw,5rem)] font-semibold leading-[1.04] tracking-[-0.055em]">Software is built<br />by people.</h2></div>
          <div className="max-w-md"><p className="text-base leading-7 text-zinc-700 sm:text-lg sm:leading-8">Good technology starts with people who understand the problem, care about the details, and take ownership of what they build.</p><Link href="/team" className="mt-6 inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-[#0033ff] underline underline-offset-8 hover:text-blue-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0033ff]">Meet Northstack <span aria-hidden="true">→</span></Link></div>
        </div>

        <div className="mt-14 flex flex-col gap-4 sm:flex-row lg:mt-16 lg:gap-5">
          <div className="relative h-[330px] min-w-0 overflow-hidden bg-zinc-200 sm:h-[530px] sm:basis-[60%] lg:h-[610px]"><Image src={peopleImages[0].src} alt={peopleImages[0].alt} fill sizes="(min-width: 1280px) 60vw, (min-width: 640px) 60vw, 100vw" className="object-cover transition-transform duration-500 motion-reduce:transition-none hover:scale-[1.025]" /></div>
          <div className="flex min-w-0 flex-col gap-4 sm:basis-[40%] lg:gap-5"><div className="relative h-[220px] overflow-hidden bg-zinc-200 sm:h-auto sm:flex-1"><Image src={peopleImages[1].src} alt={peopleImages[1].alt} fill sizes="(min-width: 1280px) 40vw, (min-width: 640px) 40vw, 100vw" className="object-cover" /></div><div className="relative h-[220px] overflow-hidden bg-zinc-200 sm:h-auto sm:flex-1"><Image src={peopleImages[2].src} alt={peopleImages[2].alt} fill sizes="(min-width: 1280px) 40vw, (min-width: 640px) 40vw, 100vw" className="object-cover" /></div></div>
        </div>

        <ul className="mt-14 flex flex-col gap-8 border-t border-zinc-300 pt-8 md:flex-row md:gap-10 lg:mt-16">
          {peopleValues.map((value) => <li key={value.title} className="min-w-0 border-b border-zinc-300 pb-7 md:flex-1 md:border-b-0"><h3 className="text-lg font-semibold tracking-tight">{value.title}</h3><p className="mt-3 max-w-sm text-sm leading-6 text-zinc-600">{value.description}</p></li>)}
        </ul>
      </Container>
    </section>
  );
}
