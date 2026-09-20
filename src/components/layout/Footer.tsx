import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { company, companyLinks, exploreLinks } from "@/data/company";
import { services } from "@/data/services";

const footerLinkClass = "w-fit text-sm leading-6 text-slate-300 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#91a7ff]";

export function Footer() {
  return (
    <footer className="border-t border-white/15 bg-[#080b12] py-16 text-white sm:py-20 xl:pt-24">
      <Container>
        <div className="flex flex-col gap-8 border-b border-white/20 pb-14 sm:flex-row sm:items-start sm:justify-between lg:pb-20">
          <div>
            <p className="text-[clamp(2.75rem,5vw,5rem)] font-semibold leading-none tracking-[-0.06em]">{company.name}<span className="text-[#91a7ff]">.</span></p>
            <p className="mt-5 max-w-xs text-base leading-7 text-slate-300">{company.tagline}</p>
          </div>
          <p className="font-[family-name:var(--font-space-mono)] text-[11px] font-bold tracking-[0.14em] text-[#a9b9ff] uppercase sm:pt-3">Helsinki / Finland</p>
        </div>

        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-8 gap-y-12 py-14 sm:gap-y-16 lg:gap-x-12 lg:py-20">
          <div className="flex w-full flex-col gap-3 min-[420px]:w-[calc(50%-1rem)] lg:w-auto lg:flex-[1.5]">
            <h2 className="mb-3 font-[family-name:var(--font-space-mono)] text-[11px] font-bold tracking-[0.14em] text-[#a9b9ff] uppercase">Services</h2>
            {services.map((service) => <Link key={service.id} href={service.href} className={footerLinkClass}>{service.title}</Link>)}
          </div>
          <div className="flex w-full flex-col gap-3 min-[420px]:w-[calc(50%-1rem)] lg:w-auto lg:flex-1">
            <h2 className="mb-3 font-[family-name:var(--font-space-mono)] text-[11px] font-bold tracking-[0.14em] text-[#a9b9ff] uppercase">Company</h2>
            {companyLinks.map((link) => <Link key={link.href} href={link.href} className={footerLinkClass}>{link.label}</Link>)}
          </div>
          <div className="flex w-full flex-col gap-3 min-[420px]:w-[calc(50%-1rem)] lg:w-auto lg:flex-1">
            <h2 className="mb-3 font-[family-name:var(--font-space-mono)] text-[11px] font-bold tracking-[0.14em] text-[#a9b9ff] uppercase">Explore</h2>
            {exploreLinks.map((link) => <Link key={link.href} href={link.href} className={footerLinkClass}>{link.label}</Link>)}
          </div>
          <div className="flex w-full flex-col gap-3 min-[420px]:w-[calc(50%-1rem)] lg:w-auto lg:flex-1">
            <h2 className="mb-3 font-[family-name:var(--font-space-mono)] text-[11px] font-bold tracking-[0.14em] text-[#a9b9ff] uppercase">Contact</h2>
            <a href={`mailto:${company.email}`} className={`${footerLinkClass} break-all`}>{company.email}</a>
            <p className="text-sm leading-6 text-slate-300">{company.location}</p>
          </div>
        </nav>

        <div className="flex flex-col gap-6 border-t border-white/20 pt-7 font-[family-name:var(--font-space-mono)] text-[10px] leading-5 tracking-[0.04em] text-slate-400 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link href="/privacy" className="hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#91a7ff]">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#91a7ff]">Terms</Link>
            <a href="#top" className="text-[#a9b9ff] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#91a7ff]">Back to top <span aria-hidden="true">↑</span></a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
