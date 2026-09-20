import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function DevelopmentCTA() {
  return (
    <section aria-label="AI-assisted development" className="bg-white pb-16 xl:pb-20">
      <Container>
        <div className="relative isolate overflow-hidden bg-linear-to-r from-[#080b12] via-[#101b37] to-[#0033ff] text-white">
          <svg aria-hidden="true" viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute inset-0 h-full w-full opacity-25">
            <g fill="none" stroke="#a9c6ff" strokeWidth="1"><path d="M0 24h95l35 30h132l30-24h92M0 99h72l46-38h98l28 23h130M25 0v24m105 30v66M1065 0v42l-45 30h-126m306 26h-91l-42-26h-84m167-72v98M960 0l65 72" /><path d="M317 0v30m-99 54v36m738-48v48M1040 42h160" strokeDasharray="5 8" /></g>
            <g fill="#b5d2ff"><circle cx="130" cy="54" r="3" /><circle cx="118" cy="61" r="2" /><circle cx="1020" cy="72" r="3" /><circle cx="1065" cy="42" r="3" /></g>
          </svg>
          <div className="relative flex flex-col gap-5 px-6 py-6 sm:px-9 lg:min-h-[104px] lg:flex-row lg:items-center lg:gap-0 lg:px-8 lg:py-4 xl:px-10">
            <div className="lg:w-[29%] lg:pr-6">
              <h2 className="text-lg font-semibold leading-[1.12] tracking-[-0.025em] uppercase">AI-Assisted<br />Development</h2>
              <p className="mt-1.5 text-xs leading-5 text-white/75">Move from idea to software faster.</p>
            </div>
            <div className="border-t border-white/25 pt-4 lg:w-[22%] lg:border-l lg:border-t-0 lg:py-1 lg:pl-6">
              <p className="font-[family-name:var(--font-space-mono)] text-[10px] font-bold tracking-[0.12em] uppercase">Smarter delivery</p>
              <p className="mt-1 text-xs leading-5 text-white/75">AI-supported engineering workflows</p>
            </div>
            <div className="border-t border-white/25 pt-4 lg:w-[24%] lg:border-l lg:border-t-0 lg:py-1 lg:pl-6">
              <p className="font-[family-name:var(--font-space-mono)] text-[10px] font-bold tracking-[0.12em] uppercase">End-to-end</p>
              <p className="mt-1 text-xs leading-5 text-white/75">Product thinking to production</p>
            </div>
            <Link href="/contact" className="inline-flex min-h-11 w-fit items-center justify-center gap-5 bg-white px-5 font-[family-name:var(--font-space-mono)] text-xs font-bold text-[#071744] transition-colors hover:bg-blue-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white lg:ml-auto">Start a Project <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
