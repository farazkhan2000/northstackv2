import Link from "next/link";
import { HeroFlowArtwork } from "@/components/ui/HeroFlowArtwork";
import { HeroOrb } from "@/components/ui/HeroOrb";

const capabilities = [
  { label: "Custom Software", href: "/services/custom-software-development" },
  { label: "AI & Automation", href: "/services/ai-automation" },
  { label: "Digital Products", href: "/services/digital-products" },
  { label: "Cloud & Integrations", href: "/services/cloud-devops" },
];

export function Hero() {
  return (
    <section id="homepage-hero" aria-labelledby="hero-title" className="min-h-screen bg-white">
      <div className="relative flex w-full flex-col bg-white xl:h-[max(100vh,720px)] xl:flex-row">
        <div className="flex min-h-[640px] w-full flex-col justify-between px-7 pb-10 pt-40 sm:min-h-[600px] sm:px-12 sm:pb-12 sm:pt-44 xl:h-full xl:min-h-0 xl:w-1/2 xl:border-r xl:border-[#e8e8e6] xl:px-16 xl:pb-14 xl:pt-[clamp(175px,21vh,245px)]">
          <div>
            <h1 id="hero-title" className="max-w-[690px] text-[clamp(2.5rem,4.1vw,4.5rem)] font-medium leading-[1.02] tracking-[-0.055em] text-[#1c1d20] uppercase">
              Software Built<br />For What&apos;s Next.
            </h1>
            <Link href="/contact" className="group mt-10 inline-flex min-h-12 items-stretch font-[family-name:var(--font-space-mono)] text-xs font-bold text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0033ff] sm:mt-12">
              <span className="flex items-center bg-[#202124] px-5 transition-colors group-hover:bg-[#0033ff]">Start a Project</span>
              <span aria-hidden="true" className="flex w-12 items-center justify-center border-l border-white/25 bg-[#202124] text-lg font-normal transition-colors group-hover:bg-[#0033ff]">→</span>
            </Link>
          </div>

          <div className="flex flex-wrap items-end justify-between gap-8">
            <p className="max-w-[330px] text-base leading-[1.55] text-[#666a70] sm:text-lg">
              We design and engineer digital products, custom software, AI systems, and scalable platforms built around real business goals.
            </p>
            <div className="flex flex-col gap-1 border-l border-[#c9cdd2] pl-3 font-[family-name:var(--font-space-mono)] text-[10px] leading-[1.5] tracking-[0.08em] text-[#666a70] uppercase">
              <span>Software Engineering</span>
              <span>AI</span>
              <span>Digital Products</span>
            </div>
          </div>
        </div>

        <div className="relative flex w-full flex-col xl:h-full xl:w-1/2">
          <div className="relative h-[420px] overflow-hidden border-b border-white/70 bg-[#d9dad7] sm:h-[490px] xl:h-[58%]">
            <HeroFlowArtwork variant="main" />
            <p className="absolute bottom-7 right-7 z-10 max-w-[220px] text-right text-[clamp(1.5rem,2.2vw,2.3rem)] font-medium leading-[1.02] tracking-[-0.045em] text-[#272a30] uppercase sm:bottom-9 sm:right-10">
              From Idea<br />To Production.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row xl:min-h-0 xl:flex-1">
            <div className="relative h-[360px] overflow-hidden border-b border-white/70 bg-[#bd92d5] sm:h-[390px] sm:w-1/2 sm:border-b-0 sm:border-r xl:h-full">
              <HeroFlowArtwork variant="violet" />
            </div>
            <div className="relative flex h-[390px] flex-col justify-end overflow-hidden bg-[#ad513b] px-7 pb-7 sm:w-1/2 sm:px-8 xl:h-full xl:pb-8">
              <div className="absolute inset-0 opacity-85"><HeroFlowArtwork variant="orange" /></div>
              <div className="relative z-10 flex flex-col">
                {capabilities.map((capability) => (
                  <Link key={capability.label} href={capability.href} className="flex min-h-10 items-center justify-between gap-3 border-t border-white/65 py-2 text-[15px] font-medium leading-tight text-white transition-colors hover:text-[#ffe3c6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-base">
                    {capability.label}<span aria-hidden="true">↗</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute left-1/2 top-[420px] z-20 h-36 w-36 -translate-x-1/2 -translate-y-1/2 sm:top-[490px] sm:h-44 sm:w-44 xl:left-0 xl:top-[58%] xl:h-48 xl:w-48">
            <div className="h-full w-full motion-safe:animate-[northstack-orb-float_9s_ease-in-out_infinite] motion-reduce:animate-none"><HeroOrb /></div>
          </div>
        </div>
      </div>
    </section>
  );
}
