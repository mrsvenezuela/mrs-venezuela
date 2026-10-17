"use client";
import Image from "next/image";
import { useLanguage } from "@/components/i18n/language-provider";
import { institutionalTranslations } from "@/lib/institutional-i18n";

export function AboutPageContent() {
  const { language } = useLanguage();
  const copy = institutionalTranslations[language].about;
  return <main className="overflow-x-hidden bg-[#f7f4ec]">
    <section className="relative min-h-[68vh] overflow-hidden text-white md:min-h-[74vh]">
      <Image src="/images/opengraph-venezuela.jpg" alt="Venezuela" fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-[#071c16]/48" /><div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#071c16]/80 to-transparent" />
      <div className="container-page relative z-10 flex min-h-[68vh] items-end pb-14 pt-36 md:min-h-[74vh] md:pb-20"><div className="max-w-3xl"><p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/72">{copy.eyebrow}</p><h1 className="mt-5 text-balance font-[family-name:var(--font-display)] text-5xl font-semibold leading-[0.96] sm:text-6xl md:text-7xl">{copy.title}</h1></div></div>
    </section>
    <section className="container-page py-20 md:py-28">
      <div className="max-w-3xl"><p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#247c8f]">{copy.historyLabel}</p><h2 className="mt-5 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.04] text-[#17201b] md:text-5xl">{copy.historyLead}</h2><div className="mt-8 max-w-2xl space-y-6 text-lg leading-8 text-[#59675f]">{copy.historyParagraphs.map((p) => <p key={p}>{p}</p>)}</div></div>
    </section>
    <section className="relative overflow-hidden bg-[#0b3026] py-20 text-[#f7f4ec] md:py-28">
      <div aria-hidden="true" className="absolute inset-y-0 right-0 w-1/3 bg-[radial-gradient(circle_at_center,rgba(201,168,92,0.08),transparent_70%)]" />
      <div className="container-page relative grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <div>
          <div className="mb-8 h-px w-16 bg-[#c9a85c]" />
          <h2 className="max-w-md font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.02] text-[#f7f4ec] md:text-5xl">{copy.distanceTitle}</h2>
        </div>
        <div className="max-w-2xl space-y-6 text-lg leading-8 text-[#d7ddd7]">
          {copy.distanceParagraphs.map((p, index) => (
            <p key={p} className={index === 0 ? "text-[#f7f4ec]" : undefined}>{p}</p>
          ))}
          <div className="pt-6">
            <div className="mb-8 h-px w-full bg-[#c9a85c]/45" />
            <p className="font-[family-name:var(--font-display)] text-2xl italic tracking-[0.01em] text-[#e8d7aa] md:text-3xl">{copy.signature}</p>
          </div>
        </div>
      </div>
    </section>
  </main>;
}
