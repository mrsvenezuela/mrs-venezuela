"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/components/i18n/language-provider";
import { EditorialSectionHeading } from "@/components/content/editorial-section-heading";
import { PhotoCredits } from "@/components/content/photo-credits";
import { natureCopy } from "@/lib/nature/copy";
import { natureDetails, curiositySources } from "@/lib/nature/details";
import { NatureCuriosity } from "@/components/content/nature-curiosity";
import photos from "@/lib/nature/photos.json";
import { natureGroups, natureSources, scientificNames } from "@/lib/nature/species";
import type { NatureCopy, SpeciesId } from "@/lib/nature/types";

function SpeciesPhoto({ id, copy, className = "aspect-[4/3]", priority = false }: {
  id: SpeciesId; copy: NatureCopy; className?: string; priority?: boolean;
}) {
  return <div className={`relative overflow-hidden rounded-[18px] bg-[#e3e8df] ${className}`}>
    <Image src={photos[id].src} alt={`${copy.species[id].name} · ${scientificNames[id]}`} fill priority={priority}
      sizes="(min-width: 1024px) 560px, (min-width: 640px) 48vw, 100vw" className="object-cover"
      style={{ objectPosition: id === "ibis" ? "68% center" : id === "ceiba" ? "center 25%" : id === "dolphin" ? "right center" : "center" }} />
  </div>;
}

export function NaturePage() {
  const { language } = useLanguage();
  const copy = natureCopy[language];
  const details = natureDetails[language];
  const credits = Object.entries(photos).map(([id, photo]) => ({ ...photo, title: copy.species[id as SpeciesId].name }));
  return <main data-translated="true" className="bg-[#f7f4ec] text-[#17201b]">
    <section className="container-page pt-44 md:pt-40">
      <Link href="/" className="inline-flex min-h-11 items-center gap-2 text-sm text-[#0f3d2e] underline-offset-4 hover:underline"><ArrowLeft size={16} aria-hidden="true" />{copy.back}</Link>
      <div className="mt-7 grid items-center gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#91764d]">{copy.eyebrow}</p>
          <h1 className="mt-5 max-w-[12ch] text-balance font-[family-name:var(--font-display)] text-[clamp(2.8rem,5.8vw,5rem)] font-semibold leading-[0.97]">{copy.title}</h1>
          <p className="mt-6 max-w-md text-base leading-7 text-[#59675f] md:text-lg md:leading-8">{copy.intro}</p>
        </div>
        <div className="grid grid-cols-2 gap-3" aria-label={copy.eyebrow}>
          <SpeciesPhoto id="ibis" copy={copy} className="col-span-2 aspect-[2/1]" priority />
          <SpeciesPhoto id="orchid" copy={copy} className="aspect-[8/5]" />
          <SpeciesPhoto id="araguaney" copy={copy} className="aspect-[8/5]" />
        </div>
      </div>
      <nav aria-label={copy.index} className="mt-8 flex flex-wrap gap-x-7 gap-y-1 pb-2">
        {natureGroups.map((group, i) => <a key={group.id} href={`#naturaleza-${group.id}`} className="inline-flex min-h-11 items-center gap-2 text-sm text-[#59675f] underline-offset-4 hover:text-[#0f3d2e] hover:underline"><span className="text-[#91764d]">0{i + 1}</span>{copy.sections[i]}</a>)}
      </nav>
    </section>

    {natureGroups.map((group, i) => <section key={group.id} id={`naturaleza-${group.id}`}
      className={`scroll-mt-8 py-12 md:py-16 ${group.id === "flores" ? "my-4 bg-[#f0ebe8] md:my-6" : group.id === "agua" ? "bg-[#eaf0ee]" : ""}`}>
      <div className="container-page">
        <EditorialSectionHeading number={`0${i + 1}`} title={copy.sections[i]} description={copy.descriptions[i]} wide className="mb-8 md:mb-10" />
        <div className={`grid gap-x-6 gap-y-9 sm:grid-cols-2 ${group.species.length === 4 ? "lg:grid-cols-4" : ""}`}>
          {group.species.map(id => <article key={id} className="min-w-0">
            <SpeciesPhoto id={id} copy={copy} className={group.id === "arboles" ? "aspect-[4/5]" : "aspect-[4/3]"} />
            <p className="mt-4 flex items-start gap-2 text-[11px] font-medium uppercase leading-5 tracking-[0.08em] text-[#65734f]">
              <span aria-hidden="true" className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#95a578]" />
              <span><span className="sr-only">{details.habitatLabel}: </span>{details.habitats[id]}</span>
            </p>
            <h3 className="mt-2 text-balance font-[family-name:var(--font-display)] text-3xl font-semibold leading-[1.08]">{copy.species[id].name}</h3>
            <p className="mt-2 break-words text-xs italic leading-5 text-[#68726d]">{scientificNames[id]}</p>
            <p className="mt-3 max-w-prose text-[15px] leading-7 text-[#59675f]">{copy.species[id].text}</p>
          </article>)}
        </div>
        {(group.id === "fauna" || group.id === "arboles" || group.id === "agua") &&
          <NatureCuriosity label={details.didYouKnow} {...details.facts[group.id]} />}
      </div>
    </section>)}

    <section className="mt-4 bg-[#e4e9dd] py-12 md:py-16">
      <div className="container-page grid gap-6 md:grid-cols-2 md:items-center md:gap-16">
        <div><p className="text-xs font-semibold tracking-[0.2em] text-[#91764d]">{String(natureGroups.length + 1).padStart(2, "0")}</p><h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-semibold leading-none md:text-5xl">{copy.careTitle}</h2></div>
        <p className="max-w-xl text-base leading-8 text-[#49604e]">{copy.care}</p>
      </div>
    </section>
    <div className="container-page py-7 md:py-9">
      <PhotoCredits credits={credits}>
        <p className="mt-5 max-w-3xl">{copy.photoNote}</p>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2" aria-label={copy.licenses}>
          {[...new Map(Object.values(photos).map(p => [p.license, p.licenseUrl])).entries()].map(([license, href]) => <a key={license} href={href} target="_blank" rel="noreferrer" className="underline underline-offset-2">{license}</a>)}
        </div>
      </PhotoCredits>
      <details className="mt-1 text-xs leading-6 text-[#59675f]">
        <summary className="w-fit cursor-pointer py-3">{copy.sources}</summary>
        <ul className="grid gap-x-8 gap-y-2 pb-3 sm:grid-cols-2">{[...natureSources, ...curiositySources].map(source => <li key={source.href}><a href={source.href} target="_blank" rel="noreferrer" className="underline underline-offset-2">{source.label}</a></li>)}</ul>
      </details>
    </div>
  </main>;
}
