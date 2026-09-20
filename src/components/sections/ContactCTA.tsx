import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";

export function ContactCTA() {
  return (
    <section aria-labelledby="contact-cta-heading" className="bg-[#0033ff] py-20 text-white sm:py-24 xl:py-28 2xl:py-32">
      <Container>
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:gap-16">
          <div className="min-w-0 lg:basis-[63%]">
            <p className="font-[family-name:var(--font-space-mono)] text-[11px] font-bold tracking-[0.18em] uppercase">Have a project?</p>
            <h2 id="contact-cta-heading" className="mt-8 max-w-5xl text-[clamp(2.7rem,5.5vw,6rem)] font-semibold leading-[1.05] tracking-[-0.055em]">
              Let&apos;s build something that moves your business forward.
            </h2>
            <p className="mt-8 max-w-xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
              Tell us what you&apos;re building, improving, or trying to solve. We&apos;ll help you turn the idea into a practical path forward.
            </p>
          </div>
          <div className="flex min-w-0 flex-col items-start lg:basis-[37%] lg:items-end lg:pb-1">
            <Link href="/contact" className="inline-flex min-h-16 w-full items-center justify-between gap-8 bg-white px-6 font-[family-name:var(--font-space-mono)] text-sm font-bold text-[#080b12] transition-colors hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:max-w-sm sm:px-8">
              Start a Project <span aria-hidden="true" className="text-xl font-normal">→</span>
            </Link>
            <div className="mt-8 flex w-full flex-col items-start gap-2 border-t border-white/30 pt-6 sm:max-w-sm lg:items-end">
              <p className="font-[family-name:var(--font-space-mono)] text-[10px] font-bold tracking-[0.13em] text-white/75 uppercase">Prefer email?</p>
              <a href={`mailto:${company.email}`} className="break-all text-base font-medium underline decoration-white/60 underline-offset-5 hover:decoration-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">{company.email}</a>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="mt-20 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/30 pt-5 font-[family-name:var(--font-space-mono)] text-[10px] font-bold tracking-[0.14em] text-white/75 uppercase lg:mt-28">
          <span>Project</span><span>/</span><span>Product</span><span>/</span><span>Engineering</span>
        </div>
      </Container>
    </section>
  );
}
