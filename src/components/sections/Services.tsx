import { Container } from "@/components/ui/Container";
import { ServiceSelector } from "./ServiceSelector";

export function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="bg-white py-20 text-zinc-950 xl:py-24">
      <Container>
        <div className="mx-auto flex max-w-[1000px] flex-col items-center text-center">
          <p className="font-[family-name:var(--font-space-mono)] text-[11px] font-bold tracking-[0.18em] text-[#0033ff] uppercase">What we engineer</p>
          <h2 id="services-heading" className="mt-4 max-w-[980px] text-4xl font-semibold leading-[1.12] tracking-[-0.045em] sm:text-5xl xl:text-[3.5rem]">
            Software built<br className="hidden sm:block" /> around your business.
          </h2>
          <p className="mt-5 max-w-[920px] text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
            From digital products and AI to cloud, integrations, and custom software, we bring the engineering capabilities needed to turn ideas into reliable products.
          </p>
        </div>
        <ServiceSelector />
      </Container>
    </section>
  );
}
