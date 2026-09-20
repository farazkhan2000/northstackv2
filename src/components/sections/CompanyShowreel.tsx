import Image from "next/image";

export function CompanyShowreel() {
  return (
    <section aria-label="Company showreel" className="relative h-[75svh] min-h-[500px] overflow-hidden border-y border-zinc-200 bg-[#202124] lg:h-screen lg:min-h-0">
      <Image src="/videos/northstack-showreel-poster.jpg" alt="" fill sizes="100vw" className="object-cover" />
      {/* TEMPORARY PEXELS VIDEO — REPLACE WITH OFFICIAL NORTHSTACK SHOWREEL BEFORE PRODUCTION. */}
      <video autoPlay muted loop playsInline preload="metadata" poster="/videos/northstack-showreel-poster.jpg" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden">
        <source src="/videos/northstack-showreel-placeholder.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
