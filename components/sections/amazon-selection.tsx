"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, X } from "lucide-react";
import { useLanguage } from "@/components/i18n/language-provider";
import { PhotoCredits } from "@/components/content/photo-credits";
import { amazonSelectionCopy, type SelectionCategory } from "@/lib/amazon-selection";
import styles from "./amazon-selection.module.css";

const categories = [
  { id: "kitchen", image: "/images/arepa.jpg" },
  { id: "art", image: "/images/commons/bandera-venezuela-ondeando.jpg" },
  { id: "clothing", image: null },
] as const;

/** Category preview only. No products or affiliate links until the US selection is approved. */
export function AmazonSelection() {
  const { language } = useLanguage();
  const copy = amazonSelectionCopy[language];
  const [active, setActive] = useState<SelectionCategory | null>(null);
  const panel = useRef<HTMLDivElement>(null);
  const triggers = useRef<Partial<Record<SelectionCategory, HTMLButtonElement | null>>>({});
  function openCategory(id: SelectionCategory) {
    if (active === id) { setActive(null); return; }
    setActive(id);
    requestAnimationFrame(() => panel.current?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "nearest" }));
  }
  function closeCategory() {
    if (active) triggers.current[active]?.focus({ preventScroll: true });
    setActive(null);
  }

  return (
    <section id="seleccion-amazon" data-translated="true" aria-labelledby="amazon-selection-title" className="bg-[#f2eee4] py-16 text-[#0f3d2e] md:py-24">
      <div className="container-page">
        <header className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#886044]">{copy.eyebrow}</p>
            <h2 id="amazon-selection-title" className="mt-4 max-w-xl text-balance font-[family-name:var(--font-display)] text-4xl font-semibold leading-tight md:text-5xl">{copy.title}</h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-[#59675f] md:text-lg md:leading-8">{copy.intro}</p>
        </header>

        <div className={styles.grid}>
          {categories.map(({ id, image }, index) => (
            <button key={id} ref={element => { triggers.current[id] = element; }} id={`amazon-category-${id}`} type="button" aria-labelledby={`amazon-category-title-${id}`} aria-expanded={active === id} aria-controls="amazon-category-panel" onClick={() => openCategory(id)} className={`${styles.card} ${styles[id]}`}>
              {image ? <span className={styles.picture} aria-hidden="true"><Image src={image} alt="" fill sizes={id === "kitchen" ? "(max-width: 767px) 100vw, 55vw" : "(max-width: 767px) 40vw, 20vw"} className={styles.photo} /></span> : <span className={styles.monogram} aria-hidden="true"><span>VZLA</span><span className={styles.stars}>✦ ✦ ✦</span></span>}
              <span className={styles.body}>
                <span className={styles.number} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <span id={`amazon-category-title-${id}`} className={styles.title}>{copy.categories[id].title}</span>
                <span className={styles.description}>{copy.categories[id].text}</span>
                <span className={styles.action}>{active === id ? copy.close : copy.explore}<span className={styles.arrow} aria-hidden="true">{active === id ? <ArrowDown size={18} /> : <ArrowUpRight size={18} />}</span></span>
              </span>
            </button>
          ))}
        </div>
        <div id="amazon-category-panel" ref={panel} hidden={!active} role="region" aria-labelledby={active ? `amazon-category-title-${active}` : undefined} className="scroll-mt-24">
          {active && <div className="relative mt-5 rounded-2xl border border-[#deded0] bg-[#f9f7f1] p-6 sm:p-8" onKeyDown={event => { if (event.key === "Escape") closeCategory(); }}>
            <button type="button" onClick={closeCategory} aria-label={copy.close} className="absolute right-3 top-3 grid h-11 w-11 place-items-center rounded-full text-[#59675f] hover:bg-[#e9ecdf] focus-visible:outline-2 focus-visible:outline-[#0f3d2e]"><X size={20} /></button>
            <p className="pr-10 text-xs font-semibold uppercase tracking-[0.14em] text-[#886044]">Amazon USA</p>
            <h3 className="mt-3 pr-10 font-[family-name:var(--font-display)] text-3xl font-semibold">{copy.categories[active].title}</h3>
            <p className="mt-3 max-w-xl text-sm leading-6 text-[#59675f]">{copy.empty}</p>
          </div>}
        </div>
        <div className="mt-5 flex flex-wrap items-start justify-between gap-x-8 gap-y-1">
          <div className="max-w-md">
            <p className="flex min-h-11 items-center gap-2 text-xs tracking-wide text-[#59675f]"><span className="h-1.5 w-1.5 rounded-full bg-[#a47a4f]" aria-hidden="true" />{copy.status}</p>
            <p data-translated="true" className="text-xs leading-5 text-[#59675f]">{copy.affiliateNote}</p>
          </div>
          <PhotoCredits className="max-w-xl" credits={[
            { author: "Steven Depolo", license: "CC BY 2.0", href: "https://commons.wikimedia.org/wiki/File:Arepitas_Food_Macro.jpg" },
            { author: "Jorge Andrés Paparoni Bruzual", license: "CC BY-SA 2.0", href: "https://commons.wikimedia.org/wiki/File:Bandera_de_Venezuela_en_movimiento.jpg" },
          ]}>
            <p className="mt-2"><a href="https://creativecommons.org/licenses/by/2.0/" target="_blank" rel="noreferrer" className="underline">CC BY 2.0</a> · <a href="https://creativecommons.org/licenses/by-sa/2.0/" target="_blank" rel="noreferrer" className="underline">CC BY-SA 2.0</a> · {({ es: "Fotografías recortadas para esta composición.", en: "Photographs cropped for this layout.", de: "Fotos für dieses Layout zugeschnitten.", fr: "Photographies recadrées pour cette mise en page.", zh: "照片已为此布局裁剪。" })[language]}</p>
          </PhotoCredits>
        </div>
      </div>
    </section>
  );
}
