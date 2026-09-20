import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function DevelopmentCTA() {
  return (
    <section aria-label="AI-assisted development" className="bg-white pb-20 xl:pb-28">
      <Container>
        <div className="border-t-2 border-[#0033ff] bg-[#202124] text-white">
          <div className="flex flex-col gap-8 px-6 py-8 sm:px-9 sm:py-10 lg:flex-row lg:items-end lg:gap-10 xl:px-12">
            <div className="lg:w-[42%]">
              <p className="font-[family-name:var(--font-space-mono)] text-[10px] tracking-[0.16em] text-[#a9bdff] uppercase">Engineering / AI</p>
              <h2 className="mt-3 text-[clamp(1.75rem,2.8vw,2.75rem)] font-medium leading-[1.05] tracking-[-0.045em] uppercase">AI-Assisted<br />Development</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-300">Move from idea to software faster.</p>
            </div>
            <div className="flex flex-col gap-5 border-t border-white/25 pt-6 sm:flex-row sm:gap-8 lg:min-w-0 lg:flex-1 lg:border-l lg:border-t-0 lg:pb-1 lg:pl-8 lg:pt-0">
              <div className="sm:w-1/2">
                <p className="text-sm font-medium">Smarter delivery</p>
                <p className="mt-1 text-sm leading-6 text-zinc-400">AI-supported engineering workflows</p>
              </div>
              <div className="sm:w-1/2">
                <p className="text-sm font-medium">End-to-end</p>
                <p className="mt-1 text-sm leading-6 text-zinc-400">Product thinking to production</p>
              </div>
            </div>
            <Link href="/contact" className="inline-flex min-h-12 w-fit shrink-0 items-center gap-7 bg-white px-5 font-[family-name:var(--font-space-mono)] text-xs font-bold text-[#202124] transition-colors hover:bg-[#dce6ff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Start a Project <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
