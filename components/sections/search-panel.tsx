"use client";

import Link from "next/link";
import { Building2, Landmark, Mountain, Search, Trees, Utensils, Waves } from "lucide-react";
import { openSearch } from "@/components/sections/search-overlay";
import { useLanguage } from "@/components/i18n/language-provider";

/*
 * Entrada por intención en vez de diez categorías equivalentes: quien llega sabe
 * qué tipo de viaje quiere mucho antes que el nombre del estado. Cada destino es
 * una página que ya existe; ninguna tarjeta lleva a una ruta vacía.
 */
const intents = [
  // La historia abre la fila: es por donde quiere que empiece el recorrido.
  { key: "hist", href: "/historia", icon: Landmark },
  { key: "i1", href: "/caribe-y-playa", icon: Waves },
  { key: "i2", href: "/montana-y-paramo", icon: Mountain },
  { key: "i3", href: "/selva-y-rios", icon: Trees },
  { key: "i4", href: "/ciudades-y-cultura", icon: Building2 },
  { key: "i5", href: "/sabores", icon: Utensils },
] as const;

export function SearchPanel() {
  const { dictionary } = useLanguage();
  const copy = dictionary.states;

  return (
    <section id="busqueda" className="container-page relative z-20 -mt-8 sm:-mt-24">
      <div
        className="rounded-[28px] border border-white/70 bg-white/94 p-4 shadow-[0_28px_90px_rgba(23,32,27,0.18)] backdrop-blur-xl sm:rounded-[34px] sm:p-5 md:p-6"
      >
        <button
          type="button"
          onClick={openSearch}
          aria-label={dictionary.search.placeholder}
          className="group flex h-16 w-full items-center gap-4 rounded-full border border-[#e6dfd2] bg-[#f9faf8] px-6 text-left transition hover:border-[#247c8f] hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#247c8f] md:h-[4.5rem] md:gap-5 md:px-8"
        >
          <Search
            className="shrink-0 text-[#247c8f] transition group-hover:scale-105"
            size={24}
            strokeWidth={2.2}
            aria-hidden="true"
          />
          <span className="min-w-0 flex-1 text-base leading-6 text-[#68726d] md:text-xl">
            <span className="sm:hidden">{dictionary.search.mobilePlaceholder}</span>
            <span className="hidden sm:block">{dictionary.search.placeholder}</span>
          </span>
          <span className="hidden shrink-0 rounded-lg bg-[#f0ebe0] px-2.5 py-1.5 text-xs font-bold text-[#68726d] sm:block">
            /
          </span>
        </button>

        <div className="mt-6 flex items-center gap-3">
          <span className="shrink-0 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#9aa39d]">
            {copy.startBy}
          </span>
          <span className="h-px flex-1 bg-[#eee7db]" aria-hidden="true" />
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {intents.map(({ key, href, icon: Icon }) => {
            const [title, text] = copy[key];

            return (
              <Link
                key={key}
                href={href}
                className="group flex min-h-22 items-center gap-3 rounded-[20px] border border-[#e6dfd2] bg-white p-4 transition duration-300 hover:-translate-y-1 hover:border-[#247c8f] hover:shadow-[0_20px_50px_rgba(23,32,27,0.10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#247c8f] sm:min-h-[8.5rem] sm:flex-col sm:items-start sm:rounded-[24px] sm:p-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#dce8df] text-[#0f3d2e] transition group-hover:bg-[#247c8f] group-hover:text-white">
                  <Icon size={20} strokeWidth={2} aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block font-[family-name:var(--font-display)] text-2xl font-semibold leading-none text-[#17201b]">
                    {title}
                  </span>
                  <span className="mt-1.5 block text-sm leading-5 text-[#68726d] sm:mt-2 sm:text-[0.8rem]">{text}</span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
