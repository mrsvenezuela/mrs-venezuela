"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/i18n/language-provider";
import type { StateRegion } from "@/lib/states/regions";

export type StripCard = {
  slug: string;
  name: string;
  region: StateRegion;
  /** Foto verificada del estado; null = fondo liso. */
  image: string | null;
  tagline: string | null;
};

/*
 * La sustancia del sitio son las guías de estado. Antes solo se llegaba a ellas
 * por los marcadores del mapa; ahora aparecen en la portada, encima del pliegue
 * de las secciones editoriales.
 */
export function StatesStrip({ cards }: { cards: StripCard[] }) {
  const { dictionary } = useLanguage();
  const copy = dictionary.states;

  return (
    <section className="container-page pt-20 md:pt-28">
      <div className="mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#247c8f]">{copy.stripEyebrow}</p>
          <h2 className="mt-3 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-semibold leading-none md:text-6xl">
            {copy.stripTitle}
          </h2>
        </div>
        <Link
          href="/estados"
          className="inline-flex h-12 shrink-0 items-center gap-2 rounded-full bg-[#0f3d2e] px-6 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(15,61,46,0.22)] transition hover:bg-[#14513d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#247c8f] focus-visible:ring-offset-2"
        >
          {copy.viewAll}
          <ArrowRight size={17} aria-hidden="true" />
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <Link key={card.slug} href={`/estado/${card.slug}`} className="group">
            <article className="relative h-56 overflow-hidden rounded-[26px] bg-[#0f3d2e]">
              {/* Decorativa: el nombre ya está en el título. Sin foto verificada, fondo liso. */}
              {card.image ? (
                <Image
                  src={card.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              ) : null}
              <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/12 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-white/78">{card.region}</p>
                <h3 className="mt-1 font-[family-name:var(--font-display)] text-3xl font-semibold leading-none">{card.name}</h3>
                {card.tagline ? (
                  <p className="mt-1.5 line-clamp-2 text-xs leading-5 text-white/82">{card.tagline}</p>
                ) : null}
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
