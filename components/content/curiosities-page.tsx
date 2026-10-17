"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/components/i18n/language-provider";
import { PhotoCredits } from "@/components/content/photo-credits";
import { curiosityCopy } from "@/lib/curiosities/content";
import { editorialCopy } from "@/lib/curiosities/editorial";
import { topCopy, topStoryIds, topSources, storyAnchor, type TopStoryId } from "@/lib/curiosities/top";
import photos from "@/lib/curiosities/photos.json";
import styles from "./curiosities-editorial.module.css";

const positions: Partial<Record<TopStoryId | "dayana", string>> = {
  moran: "center top", carreno: "center 25%", herrera: "center 38%",
  cabrera: "center 15%", miss: "55% 30%", dayana: "center 25%",
  yulimar: "center top",
};
const subjects: Record<TopStoryId, string> = {
  moran: "Humberto Fernández-Morán", coromoto: "Mérida", yulimar: "Yulimar Rojas",
  catatumbo: "Catatumbo", miss: "Miss Universe", cabrera: "Miguel Cabrera",
  carreno: "Teresa Carreño", orchestra: "El Sistema", herrera: "Carolina Herrera", casabe: "Casabe",
};

export function CuriositiesPage() {
  const { language } = useLanguage();
  const copy = topCopy[language];
  const archive = curiosityCopy[language];
  const editorial = editorialCopy[language];
  function caption(id: TopStoryId | "dayana") {
    if (id === "dayana") return "Dayana Mendoza · Miss Universe 2008";
    if (id === "miss") return "Stefanía Fernández · Miss Universe 2009";
    return id in editorial.captions
      ? editorial.captions[id as keyof typeof editorial.captions]
      : archive.stories[id].caption ?? copy.stories[id].title;
  }
  function Photo({ id, priority = false }: { id: TopStoryId | "dayana"; priority?: boolean }) {
    return <Image src={photos[id].src} alt={caption(id)} fill priority={priority}
      sizes={id === "catatumbo" ? "(min-width:1200px) 1100px, 94vw" : id === "miss" || id === "dayana" ? "(min-width:1200px) 270px, (min-width:768px) 23vw, 46vw" : "(min-width:1200px) 600px, (min-width:768px) 46vw, 94vw"}
      className="object-cover" style={{objectPosition:positions[id] ?? "center"}} />;
  }
  const credits = [...topStoryIds, "dayana" as const].map(id => ({...photos[id],title:caption(id)}));

  return <main id="curiosidades-inicio" data-translated="true" data-curiosities-top className={styles.page}>
    <header className={`container-page ${styles.header}`}>
      <Link href="/" className="inline-flex min-h-11 items-center gap-2 text-sm hover:underline"><ArrowLeft size={16} aria-hidden="true" />{archive.back}</Link>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>{copy.eyebrow}</p>
          <h1 className={styles.title}>{copy.title}</h1>
          <p className={styles.description}>{copy.intro}</p>
        </div>
    </header>

    <section id="talento" aria-label={copy.title} className={`container-page scroll-mt-28 ${styles.content}`}>
      <div className={styles.grid}>
        {topStoryIds.map((id,index) => {
          const story = copy.stories[id];
          const source = topSources[id];
          const layout = id === "catatumbo" ? "panorama" : id === "carreno" ? "reverse" : id === "moran" || id === "casabe" ? "wide" : "paired";
          return <article id={storyAnchor(id)} key={id} data-story={id} data-layout={layout} aria-labelledby={`title-${id}`} className={`${styles.story} ${styles[layout]}`}>
            {id === "yulimar" && <span id="records" className="scroll-mt-28" />}
            {id === "coromoto" && <span id="historias" className="scroll-mt-28" />}
            {id === "casabe" && <span id="tradiciones" className="scroll-mt-28" />}
            <div className={styles.visual}>
              {id === "miss" ? <div className={styles.portraits} data-miss-portraits>
                <div className="relative"><Photo id="dayana" /></div>
                <div className="relative"><Photo id="miss" /></div>
              </div> : <Photo id={id} priority={index === 0} />}
            </div>
            <div className={styles.storyBody}>
              <div className={styles.heading}>
                <p className={styles.meta}><span className={styles.number}>{String(index+1).padStart(2,"0")}</span>{subjects[id]}</p>
                <h2 id={`title-${id}`}>{story.title}</h2>
              </div>
              <div className={styles.explanation}>
              <p data-fact-text className={styles.fact}>{story.text}</p>
              {(id === "yulimar" || id === "orchestra") && <p className={styles.caption}>{caption(id)}</p>}
              {id === "miss" && <p className={styles.caption}>Dayana Mendoza · 2008 / Stefanía Fernández · 2009</p>}
              <a href={source.href} target="_blank" rel="noreferrer" className={styles.source}>{copy.source}<ArrowUpRight size={13} aria-hidden="true" /><span className="sr-only">: {source.label}</span></a>
              </div>
            </div>
          </article>;
        })}
      </div>
    </section>
    <div className={`container-page pb-12 ${styles.credits}`}>
      <PhotoCredits credits={credits}>
        <p className="mt-3 max-w-3xl">{archive.photoNote}</p>
        <p className="mt-3"><a href="https://www.christopherpeterson.com/" target="_blank" rel="noreferrer" className="underline">Photograph by Christopher Peterson.</a> · Carolina Herrera</p>
        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">{[...new Map(credits.map(p=>[p.license,p.licenseUrl])).entries()].map(([license,url])=><a key={license} href={url} target="_blank" rel="noreferrer" className="underline">{license}</a>)}</div>
      </PhotoCredits>
    </div>
  </main>;
}
