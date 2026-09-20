import Image from "next/image";
import type { Project } from "@/types/project";

export function ProjectVisual({ project }: { project: Project }) {
  if (project.screenshot) {
    return <div className="relative h-full overflow-hidden bg-slate-100"><Image src={project.screenshot} alt={`${project.title} website screenshot`} fill sizes="(min-width: 1280px) 60vw, 100vw" className="object-cover" /></div>;
  }

  if (project.visual === "ascendra") return <AscendraVisual />;
  if (!project.image) return null;
  return <RestaurantVisual project={project} image={project.image} />;
}

function RestaurantVisual({ project, image }: { project: Project; image: NonNullable<Project["image"]> }) {
  const everest = project.visual === "everest";
  return (
    <div role="img" aria-label={`Illustrative website preview for ${project.title}, using representative restaurant photography`} className={`relative h-full overflow-hidden p-[6%] ${everest ? "bg-[#18232b]" : "bg-[#e9e5df]"}`}>
      <div className="absolute inset-x-[6%] top-[6%] bottom-[15%] flex flex-col overflow-hidden border border-black/10 bg-white shadow-2xl shadow-black/20">
        <div className="flex h-[10%] min-h-6 items-center gap-1.5 border-b border-zinc-200 bg-[#f8f8f7] px-[3%]"><span className="h-1.5 w-1.5 rounded-full bg-zinc-300" /><span className="h-1.5 w-1.5 rounded-full bg-zinc-300" /><span className="h-1.5 w-1.5 rounded-full bg-zinc-300" /><span className="ml-3 font-[family-name:var(--font-space-mono)] text-[7px] text-zinc-500 sm:text-[9px]">Website preview / {project.slug}</span></div>
        <div className={`flex h-[12%] items-center justify-between px-[5%] ${everest ? "bg-[#13251f] text-white" : "bg-[#f7f2e9] text-[#352b25]"}`}><span className="text-[10px] font-semibold tracking-tight sm:text-base">{project.title}</span><span className="text-[7px] sm:text-[10px]">Menu　 About　 Contact</span></div>
        <div className="relative flex-1 overflow-hidden"><Image src={image.src} alt="" fill sizes="(min-width: 1280px) 60vw, 100vw" className="object-cover" /><div className={`absolute bottom-[8%] left-[5%] max-w-[55%] px-[4%] py-[3%] ${everest ? "bg-[#13251f]/95 text-white" : "bg-[#f7f2e9]/95 text-[#352b25]"}`}><p className="text-[9px] font-semibold leading-tight sm:text-lg">Restaurant website</p><span className="mt-1 block text-[7px] sm:text-[10px]">Menu · Location · Hours</span></div></div>
        <div className={`flex h-[13%] items-center gap-[4%] px-[5%] text-[7px] sm:text-[10px] ${everest ? "bg-[#f0f1eb] text-[#26352b]" : "bg-[#f7f2e9] text-[#352b25]"}`}><span>Menu</span><span className="h-px flex-1 bg-current opacity-20" /><span>Opening hours</span><span className="h-px flex-1 bg-current opacity-20" /><span>Visit us</span></div>
      </div>
      <div aria-hidden="true" className={`absolute bottom-[8%] right-[5%] flex h-[43%] w-[28%] flex-col overflow-hidden border-[5px] border-zinc-950 bg-white shadow-xl shadow-black/25 sm:border-[7px] ${everest ? "text-[#26352b]" : "text-[#352b25]"}`}><div className="h-[13%] bg-zinc-950" /><div className="relative flex-1"><Image src={image.src} alt="" fill sizes="(min-width: 1280px) 20vw, 30vw" className="object-cover" /></div><div className="flex h-[30%] flex-col justify-center px-[8%]"><span className="text-[7px] font-semibold sm:text-[10px]">{project.title}</span><span className="mt-1 h-px w-3/4 bg-zinc-300" /><span className="mt-1 h-px w-1/2 bg-zinc-200" /></div></div>
      <p className={`absolute bottom-[3%] left-[6%] font-[family-name:var(--font-space-mono)] text-[8px] tracking-[0.07em] sm:text-[10px] ${everest ? "text-slate-300" : "text-zinc-600"}`}>REPRESENTATIVE WEBSITE PREVIEW</p>
    </div>
  );
}

function AscendraVisual() {
  return (
    <div role="img" aria-label="Illustrative Ascendra career product interface preview" className="relative h-full overflow-hidden bg-[#dfe7f5] p-[6%]">
      <div className="flex h-full overflow-hidden border border-slate-300 bg-white shadow-2xl shadow-slate-900/15">
        <div className="flex w-[22%] shrink-0 flex-col gap-[7%] bg-[#101c35] px-[4%] py-[6%] text-[8px] text-slate-300 sm:text-[11px]"><span className="mb-[8%] text-sm font-semibold tracking-tight text-white sm:text-lg">ascendra<span className="text-[#91a7ff]">.</span></span><span className="text-[#a9b9ff]">Overview</span><span>My resume</span><span>Job matches</span><span>AI review</span></div>
        <div className="min-w-0 flex-1 px-[5%] py-[5%]"><div className="flex items-center justify-between border-b border-slate-200 pb-[4%]"><div><p className="text-[12px] font-semibold sm:text-xl">Career workspace</p><p className="mt-1 text-[7px] text-slate-500 sm:text-[10px]">Review your profile and next steps.</p></div><span className="hidden bg-blue-50 px-2 py-1 text-[8px] font-medium text-[#0033ff] sm:block">PROFILE DRAFT</span></div><div className="mt-[5%] flex h-[70%] gap-[4%]"><div className="flex-[1.3] border border-slate-200 p-[5%]"><p className="text-[9px] font-semibold sm:text-sm">Resume</p><div className="mt-[7%] h-px bg-slate-200" /><p className="mt-[7%] text-[8px] font-medium sm:text-[11px]">Experience</p><div className="mt-[7%] space-y-2"><div className="h-1.5 w-full bg-slate-200" /><div className="h-1.5 w-4/5 bg-slate-200" /><div className="h-1.5 w-3/5 bg-slate-200" /></div><p className="mt-[9%] text-[8px] font-medium sm:text-[11px]">Skills</p><div className="mt-[5%] flex flex-wrap gap-1"><span className="bg-slate-100 px-2 py-1 text-[7px] sm:text-[9px]">Product</span><span className="bg-slate-100 px-2 py-1 text-[7px] sm:text-[9px]">Engineering</span></div></div><div className="flex-1 border border-blue-200 bg-[#eff3ff] p-[5%]"><p className="text-[9px] font-semibold text-[#0033ff] sm:text-sm">AI review</p><p className="mt-[8%] text-[7px] leading-3 text-slate-600 sm:text-[10px] sm:leading-4">Review suggestions for a clearer application.</p><div className="mt-[10%] border-l-2 border-[#0033ff] bg-white p-[6%] text-[7px] text-slate-700 sm:text-[9px]">Highlight relevant work for this role.</div><p className="mt-[10%] text-[7px] text-slate-500 sm:text-[9px]">Job match / Draft</p></div></div></div>
      </div>
      <p className="absolute bottom-[2%] right-[6%] font-[family-name:var(--font-space-mono)] text-[8px] text-slate-600 sm:text-[10px]">ILLUSTRATIVE PRODUCT PREVIEW</p>
    </div>
  );
}
