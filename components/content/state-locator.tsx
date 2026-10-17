"use client";

import Image from "next/image";
import { getStateLocation } from "@/lib/states/regions";
import { useLanguage } from "@/components/i18n/language-provider";

/*
 * Mapa pequeño con un solo punto: dónde queda este estado dentro del país.
 * No es navegación —para eso está /estados— sino el dato que faltaba: se leían
 * 2.200 palabras sobre un estado sin saber en qué parte de Venezuela está.
 */
export function StateLocator({ slug, name }: { slug: string; name: string }) {
  const { dictionary } = useLanguage();
  const location = getStateLocation(slug);

  if (!location) return null;

  return (
    <figure className="m-0 flex flex-col gap-3 px-6 py-5">
      <figcaption className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[#9aa39d]">
        {dictionary.states.whereIs}
      </figcaption>

      <div className="relative w-full overflow-hidden rounded-[16px] border border-[#eee7db] bg-[#f9faf8]">
        <Image
          src="/images/venezuela-political-map.jpg"
          alt={`Mapa de Venezuela con la ubicación de ${name}`}
          width={520}
          height={423}
          sizes="(max-width: 1024px) 90vw, 260px"
          loading="lazy"
          className="h-auto w-full opacity-90"
        />
        <span
          className="absolute flex h-4 w-4 -translate-x-1/2 -translate-y-1/2 items-center justify-center"
          style={{ left: `${location.x}%`, top: `${location.y}%` }}
          aria-hidden="true"
        >
          <span className="block h-4 w-4 rounded-full border-[2.5px] border-white bg-[#b8574e] shadow-[0_0_0_6px_rgba(184,87,78,0.25),0_5px_12px_rgba(23,32,27,0.35)]" />
        </span>
      </div>

      <p className="text-xs leading-5 text-[#68726d]">
        {location.region} · {location.capital}
      </p>
    </figure>
  );
}
