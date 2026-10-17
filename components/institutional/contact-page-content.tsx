"use client";
import Link from "next/link";
import { Instagram, Mail, Music2 } from "lucide-react";
import { useLanguage } from "@/components/i18n/language-provider";
import { institutionalTranslations } from "@/lib/institutional-i18n";
const email = "infomrsvenezuela@gmail.com";

export function ContactPageContent() {
  const { language } = useLanguage(); const copy = institutionalTranslations[language].contact;
  return <main className="overflow-x-hidden bg-[#f7f4ec] pb-24 pt-36 md:pb-32 md:pt-44">
    <section className="container-page"><div className="max-w-3xl"><p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#247c8f]">{copy.eyebrow}</p><h1 className="mt-5 font-[family-name:var(--font-display)] text-6xl font-semibold leading-none text-[#17201b] md:text-7xl">{copy.title}</h1><div className="mt-8 max-w-2xl space-y-2 text-lg leading-8 text-[#59675f]"><p>{copy.intro}</p><p>{copy.introClosing}</p></div><div className="mt-10 border-t border-[#d9d0c1] pt-8"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8e7950]">{copy.emailLabel}</p><Link href={`mailto:${email}`} className="mt-3 inline-flex max-w-full items-center gap-3 break-all font-[family-name:var(--font-display)] text-2xl font-semibold text-[#0f3d2e] transition-opacity hover:opacity-65 sm:text-3xl"><Mail size={20} strokeWidth={1.5} className="shrink-0" />{email}</Link></div></div></section>
    <section className="mt-24 border-y border-[#d9d0c1] bg-[#f1eadc] py-16 md:mt-32 md:py-24">
      <div className="container-page grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <div>
          <div className="mb-7 h-px w-14 bg-[#b8954f]" />
          <h2 className="max-w-md font-[family-name:var(--font-display)] text-4xl font-semibold leading-[1.05] text-[#17201b] md:text-5xl">{copy.collaborationsTitle}</h2>
        </div>
        <div className="max-w-2xl">
          <div className="space-y-6 text-lg leading-8 text-[#59675f]">{copy.collaborationsParagraphs.map((p) => <p key={p}>{p}</p>)}</div>
          <div className="mt-10 border-t border-[#cfc3ad] pt-7">
            <Link href={`mailto:${email}`} className="group inline-flex max-w-full items-center gap-3 break-all font-[family-name:var(--font-display)] text-xl font-semibold text-[#0f3d2e] transition-colors hover:text-[#247c8f] sm:text-2xl">
              <Mail size={19} strokeWidth={1.5} className="shrink-0 transition-transform group-hover:-translate-y-0.5" />
              {email}
            </Link>
          </div>
        </div>
      </div>
    </section>
    <section className="container-page pt-16 md:pt-20"><h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-[#17201b]">{copy.followTitle}</h2><div className="mt-6 flex gap-4"><Link href="https://www.instagram.com/mrsvenezuela_1/" target="_blank" rel="noreferrer" aria-label="Instagram" className="flex h-11 w-11 items-center justify-center rounded-full border border-[#bfb5a4] text-[#0f3d2e] transition hover:border-[#0f3d2e] hover:bg-[#0f3d2e] hover:text-[#f7f4ec]"><Instagram size={19} strokeWidth={1.5} /></Link><Link href="https://www.tiktok.com/@mrsvenezuela1" target="_blank" rel="noreferrer" aria-label="TikTok" className="flex h-11 w-11 items-center justify-center rounded-full border border-[#bfb5a4] text-[#0f3d2e] transition hover:border-[#0f3d2e] hover:bg-[#0f3d2e] hover:text-[#f7f4ec]"><Music2 size={19} strokeWidth={1.5} /></Link></div></section>
  </main>;
}
