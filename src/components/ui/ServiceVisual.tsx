import Image from "next/image";
import type { ServiceVisualKind } from "@/types/service";

const photoMedia: Partial<Record<ServiceVisualKind, { src: string; alt: string }>> = {
  architecture: { src: "/images/services/software-developer.jpg", alt: "Software developer working with code and product documents" },
  intelligence: { src: "/images/services/code-closeup.jpg", alt: "Source code on a developer screen" },
  product: { src: "/images/people/app-design-workshop.jpg", alt: "Colleagues reviewing an application design in a workshop" },
  cloud: { src: "/images/services/operations-workspace.jpg", alt: "Engineer working across code and operations screens" },
  advisory: { src: "/images/people/developer-collaboration.jpg", alt: "Developers discussing code together at a screen" },
};

export function ServiceVisual({ kind }: { kind: ServiceVisualKind }) {
  const media = photoMedia[kind];
  if (kind === "data") return <DataVisual />;
  if (!media) return null;

  return (
    <div className="relative h-[260px] overflow-hidden bg-[#15202e] sm:h-[360px] xl:h-[430px] 2xl:h-[480px]">
      <Image src={media.src} alt={media.alt} fill sizes="(min-width: 1280px) 52vw, 100vw" className="object-cover" />
      {kind === "architecture" && <div aria-hidden="true" className="absolute bottom-5 left-5 right-5 flex items-center gap-4 bg-[#080b12]/90 px-5 py-4 text-white sm:bottom-8 sm:left-8 sm:right-auto sm:min-w-64"><span className="h-2 w-2 bg-emerald-400" /><div><p className="text-xs font-semibold">Software in progress</p><p className="mt-1 font-[family-name:var(--font-space-mono)] text-[9px] text-slate-300">WEB / API / BACKEND</p></div></div>}
      {kind === "intelligence" && <div aria-hidden="true" className="absolute bottom-5 left-5 right-5 max-w-sm border-l-4 border-[#0033ff] bg-white px-5 py-4 text-slate-900 sm:bottom-8 sm:left-8"><p className="font-[family-name:var(--font-space-mono)] text-[9px] font-bold text-[#0033ff]">AI-ASSISTED WORKFLOW</p><p className="mt-2 text-sm font-semibold">Input → Review → Useful output</p></div>}
      {kind === "product" && <div aria-hidden="true" className="absolute bottom-5 left-5 right-5 bg-white/95 px-5 py-4 text-slate-900 sm:bottom-8 sm:left-8 sm:right-auto sm:min-w-72"><p className="text-sm font-semibold">From problem to product</p><p className="mt-1 text-xs text-slate-600">Discovery · Design · Delivery</p></div>}
      {kind === "cloud" && <div aria-hidden="true" className="absolute bottom-5 left-5 right-5 bg-[#0b1625]/95 px-5 py-4 text-white sm:bottom-8 sm:left-8 sm:right-auto sm:min-w-72"><p className="font-[family-name:var(--font-space-mono)] text-[9px] text-[#a9b9ff]">DELIVERY PIPELINE</p><div className="mt-2 flex items-center gap-3 text-xs"><span>Build passed</span><span className="text-emerald-300">✓</span><span>Deployment ready</span></div></div>}
      {kind === "advisory" && <div aria-hidden="true" className="absolute bottom-5 left-5 right-5 bg-[#080b12]/90 px-5 py-4 text-white sm:bottom-8 sm:left-8 sm:right-auto sm:min-w-72"><p className="text-sm font-semibold">Better decisions, together.</p><p className="mt-1 text-xs text-slate-300">Architecture · Direction · Delivery</p></div>}
    </div>
  );
}

function DataVisual() {
  return (
    <div role="img" aria-label="Illustration of source systems connected through an integration layer to a product data platform" className="relative flex h-[260px] flex-col justify-center overflow-hidden bg-[#122035] px-[6%] text-white sm:h-[360px] xl:h-[430px] 2xl:h-[480px]">
      <p className="mb-8 font-[family-name:var(--font-space-mono)] text-[10px] text-[#a9b9ff]">CONNECTED DATA / INTEGRATION ARCHITECTURE</p>
      <div className="flex items-center gap-[3%] text-[8px] sm:text-xs"><div className="flex flex-1 flex-col gap-3"><span className="border border-white/25 bg-white/[0.06] p-[10%]">Commerce API</span><span className="border border-white/25 bg-white/[0.06] p-[10%]">CRM</span></div><span className="h-px w-[7%] bg-[#91a7ff]" /><div className="flex-[1.2] border border-[#91a7ff] bg-[#0033ff] p-[6%] text-center">Integration layer<br /><span className="mt-2 block text-[7px] text-white/80 sm:text-[10px]">Validate · Transform</span></div><span className="h-px w-[7%] bg-[#91a7ff]" /><div className="flex-1 border border-white/25 bg-white/[0.06] p-[8%] text-center">Product data</div></div>
      <p className="mt-8 border-t border-white/20 pt-5 font-[family-name:var(--font-space-mono)] text-[9px] text-slate-400">CLEAR CONNECTIONS BETWEEN REAL SYSTEMS</p>
    </div>
  );
}
