import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { partners } from "@/data/partners";

export function Partners() {
  return (
    <section aria-labelledby="partners-heading" className="border-t border-zinc-200 bg-white py-16 text-zinc-950 sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="partners-heading" className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">Delivery Partners</h2>
          <p className="mt-4 text-sm leading-6 text-zinc-600 sm:text-base sm:leading-7">We collaborate with trusted software teams when projects benefit from additional expertise, capacity, or shared delivery.</p>
        </div>
        <ul className="mt-10 flex flex-col border border-zinc-200 sm:flex-row">
          {partners.map((partner) => (
            <li key={partner.id} className="flex h-32 min-w-0 flex-none items-center justify-center border-b border-zinc-200 last:border-b-0 sm:h-40 sm:flex-1 sm:border-b-0 sm:border-r sm:last:border-r-0">
              {partner.status === "verified" && partner.logo ? (
                <Image src={partner.logo} alt={partner.name} width={160} height={64} className="max-h-16 w-auto max-w-[70%] object-contain" />
              ) : (
                <svg aria-hidden="true" viewBox="0 0 64 64" fill="currentColor" className="h-14 w-14 text-zinc-400"><path d={partner.mark} /></svg>
              )}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
