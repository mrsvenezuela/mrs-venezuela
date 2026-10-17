"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PhotoCredits } from "@/components/content/photo-credits";
import { useLanguage } from "@/components/i18n/language-provider";
import { discoverCards, type DiscoverCard } from "@/lib/home/discover";
import { beachComparisonCopy } from "@/lib/home/beach-comparison";

const visibleCards = discoverCards.filter((card) => card.image);

/*
 * «Descubre más de Venezuela»: tres tarjetas de contenido especial al final de la
 * portada (ver lib/home/discover.ts). Mismo lenguaje que el resto de la portada:
 * ruta protagonista y dos accesos compactos a naturaleza e historias.
 * Una tarjeta sin página todavía se ve, pero no enlaza.
 *
 * El id «articulos» se conserva: el pie de página enlaza a /#articulos.
 */
export function Articles() {
  const { dictionary, language } = useLanguage();
  const copy = dictionary.articles;
  const discovery = beachComparisonCopy[language];

  return (
    // data-translated: todo llega traducido desde el diccionario; el traductor de DOM no debe tocarlo.
    <section id="articulos" data-translated="true" className="container-page scroll-mt-28 py-20 md:py-24">
      <div className="mb-10 max-w-3xl md:mb-12">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#247c8f]">{discovery.discoverEyebrow}</p>
        <h2 className="font-[family-name:var(--font-display)] text-4xl font-semibold leading-tight md:text-5xl">{copy.title}</h2>
        <p className="mt-4 text-base leading-7 text-[#68726d] md:text-lg">{discovery.discoverText}</p>
      </div>
      <div className="grid gap-5 lg:grid-cols-[1.05fr_1fr] lg:grid-rows-2">
        {visibleCards.map((card, index) => (
          <DiscoverTile key={card.id} card={card} featured={index === 0} copy={{ ...copy.cards[card.id], description: discovery.descriptions[index] }} soon={copy.soon} />
        ))}
      </div>
      {/* Créditos de las fotos (Wikimedia Commons), plegados como en el resto del sitio. */}
      <PhotoCredits credits={visibleCards.flatMap((card) => card.credits)} className="mt-8" />
    </section>
  );
}

function DiscoverTile({ card, featured, copy, soon }: {
  card: DiscoverCard;
  featured: boolean;
  copy: { label: string; title: string; description: string; cta: string; alt: string };
  soon: string;
}) {
  const body = (
    <article className={`h-full overflow-hidden rounded-3xl transition duration-300 group-hover:shadow-[0_14px_40px_rgba(23,32,27,0.08)] ${featured ? "flex flex-col bg-[#eee8db]" : `grid sm:grid-cols-[0.4fr_0.6fr] ${card.id === "naturaleza" ? "bg-[#eaf0e6]" : "bg-[#f0e6dc]"}`}`}>
      <div className={`relative overflow-hidden ${featured ? "aspect-[3/2] lg:min-h-64 lg:flex-1" : "aspect-[16/9] sm:aspect-auto sm:min-h-60"}`}>
        <Image
          src={card.image}
          alt={copy.alt}
          fill
          sizes={featured ? "(min-width:1024px) 590px, 100vw" : "(min-width:1024px) 230px, (min-width:640px) 40vw, 100vw"}
          className="object-cover transition duration-700 group-hover:scale-105"
          style={{ objectPosition: card.position ?? "center" }}
        />
      </div>
      <div className={`flex flex-col ${featured ? "p-6 md:p-8" : "flex-1 p-6"}`}>
        <p className="text-[0.65rem] font-semibold uppercase leading-5 tracking-[0.14em] text-[#456557]">
          {/* Espacio duro antes de cada «·» para que ninguna línea empiece por el punto. */}
          {copy.label.replaceAll(" · ", "\u00a0· ")}
        </p>
        <h3 className={`mt-3 text-balance font-[family-name:var(--font-display)] font-semibold leading-tight ${featured ? "text-3xl md:text-4xl" : "text-2xl xl:text-3xl"}`}>{copy.title}</h3>
        <p className="mt-3 text-sm leading-6 text-[#536158]">{copy.description}</p>
        <p className="mt-auto pt-5 text-sm font-semibold">
          {card.available ? (
            <span className={`inline-flex min-h-11 items-center gap-2 ${featured ? "rounded-xl bg-[#0f3d2e] px-5 py-3 text-white" : "text-[#0f3d2e]"}`}>
              {copy.cta}
              <ArrowRight size={15} aria-hidden="true" className="transition group-hover:translate-x-0.5" />
            </span>
          ) : (
            <span className="inline-flex rounded-full border border-[#e6dfd2] px-3 py-1 text-xs uppercase tracking-[0.16em] text-[#68726d]">{soon}</span>
          )}
        </p>
      </div>
    </article>
  );

  if (!card.available) return <div className={`h-full ${featured ? "lg:row-span-2" : ""}`}>{body}</div>;

  return (
    <Link
      href={card.href}
      aria-label={copy.title}
      className={`group block h-full min-w-0 rounded-3xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0f3d2e] ${featured ? "lg:row-span-2" : ""}`}
    >
      {body}
    </Link>
  );
}
