"use client";

import { useState, type FormEvent } from "react";
import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";

const fieldClass = "mt-2 w-full border-b border-white/35 bg-transparent px-0 py-3 text-base text-white outline-none transition-colors focus:border-[#a9bdff]";
const labelClass = "font-[family-name:var(--font-space-mono)] text-[10px] font-bold tracking-[0.12em] text-zinc-300 uppercase";

export function ContactForm() {
  const [notice, setNotice] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: Connect a verified delivery endpoint before enabling real submission.
    // Keep entered values in place so visitors can copy their message into an email.
    setNotice(`Online submissions are not available yet. Please email your message to ${company.email}.`);
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className="border-t border-zinc-300 bg-[#202124] py-20 text-white xl:py-28">
      <Container className="flex flex-col gap-12 lg:flex-row lg:gap-16">
        <div className="lg:w-[38%]">
          <p className="font-[family-name:var(--font-space-mono)] text-[11px] font-bold tracking-[0.16em] text-[#91a7ff] uppercase">Start a conversation</p>
          <h2 id="contact-heading" className="mt-5 max-w-[470px] text-4xl font-medium leading-[1.08] tracking-[-0.05em] sm:text-5xl xl:text-[3.5rem]">Let&apos;s build<br />something useful.</h2>
          <p className="mt-6 max-w-[420px] text-base leading-7 text-zinc-300">Tell us what you&apos;re working on, what needs improving, or where you&apos;re stuck. We&apos;ll get back to you to discuss the next step.</p>
          <a href={`mailto:${company.email}`} className="mt-8 inline-block text-lg font-medium text-white underline decoration-[#91a7ff] underline-offset-8 hover:text-[#91a7ff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#91a7ff]">{company.email}</a>
        </div>

        <form onSubmit={handleSubmit} className="min-w-0 flex-1" aria-label="Project inquiry">
          <div className="flex flex-wrap gap-x-8 gap-y-7">
            <label className={`w-full sm:w-[calc(50%-1rem)] ${labelClass}`}>Name <span aria-hidden="true">*</span><input name="name" type="text" autoComplete="name" required className={fieldClass} /></label>
            <label className={`w-full sm:w-[calc(50%-1rem)] ${labelClass}`}>Email <span aria-hidden="true">*</span><input name="email" type="email" autoComplete="email" required className={fieldClass} /></label>
            <label className={`w-full sm:w-[calc(50%-1rem)] ${labelClass}`}>Company<input name="company" type="text" autoComplete="organization" className={fieldClass} /></label>
            <label className={`w-full sm:w-[calc(50%-1rem)] ${labelClass}`}>Phone<input name="phone" type="tel" autoComplete="tel" className={fieldClass} /></label>
            <label className={`w-full ${labelClass}`}>Message <span aria-hidden="true">*</span><textarea name="message" rows={4} required className={`${fieldClass} resize-y`} /></label>
          </div>
          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
            <button type="submit" className="inline-flex min-h-12 items-center gap-7 bg-[#0033ff] px-6 font-[family-name:var(--font-space-mono)] text-xs font-bold text-white transition-colors hover:bg-[#2452ff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Send Message <span aria-hidden="true">→</span></button>
            <p className="max-w-[310px] text-xs leading-5 text-zinc-400">Online submissions are not active yet. Please email us directly.</p>
          </div>
          <p role="status" aria-live="polite" className="mt-4 text-sm text-[#a9b9ff]">{notice}</p>
        </form>
      </Container>
    </section>
  );
}
