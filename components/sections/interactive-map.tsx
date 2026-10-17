"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { states } from "@/lib/content";
import { useLanguage } from "@/components/i18n/language-provider";

type CapitalHotspot = {
  slug: string;
  name: string;
  capital: string;
  x: number;
  y: number;
  image: string;
  phrase: string;
};

const capitalHotspots: CapitalHotspot[] = [
  { slug: "zulia", name: "Zulia", capital: "Maracaibo", x: 12.4, y: 26.1, image: "/images/states/zulia.jpg", phrase: "Lago, identidad marabina y atardeceres del occidente." },
  { slug: "falcon", name: "Falcón", capital: "Coro", x: 26.0, y: 18.2, image: "/images/states/falcon.jpg", phrase: "Médanos, patrimonio colonial y costa seca del Caribe." },
  { slug: "lara", name: "Lara", capital: "Barquisimeto", x: 29.2, y: 25.4, image: "/images/states/lara.jpg", phrase: "Música, crepúsculos y cultura en el centro-occidente." },
  { slug: "trujillo", name: "Trujillo", capital: "Trujillo", x: 20.5, y: 32.0, image: "/images/states/trujillo.jpg", phrase: "Montañas andinas, pueblos altos y memoria religiosa." },
  { slug: "merida", name: "Mérida", capital: "Mérida", x: 16.1, y: 38.6, image: "/images/states/merida.jpg", phrase: "Páramos, teleférico y la altura más icónica del país." },
  { slug: "tachira", name: "Táchira", capital: "San Cristóbal", x: 9.4, y: 46.7, image: "/images/states/tachira.jpg", phrase: "Andes fronterizos, neblina y rutas de montaña." },
  { slug: "portuguesa", name: "Portuguesa", capital: "Guanare", x: 24.6, y: 34.0, image: "/images/states/portuguesa.jpg", phrase: "Llanos verdes, devoción y paisajes agroproductivos." },
  { slug: "barinas", name: "Barinas", capital: "Barinas", x: 21.6, y: 38.3, image: "/images/states/barinas.jpg", phrase: "Puerta de los llanos con montañas al horizonte." },
  { slug: "apure", name: "Apure", capital: "San Fernando de Apure", x: 43.4, y: 41.8, image: "/images/states/apure.jpg", phrase: "Hatos, sabanas inundables y vida llanera." },
  { slug: "amazonas", name: "Amazonas", capital: "Puerto Ayacucho", x: 44.2, y: 60.5, image: "/images/states/amazonas.jpg", phrase: "Selva, ríos sagrados y culturas originarias." },
  { slug: "bolivar", name: "Bolívar", capital: "Ciudad Bolívar", x: 71.6, y: 38.2, image: "/images/states/bolivar.jpg", phrase: "Tierra de tepuyes, ríos inmensos y Salto Ángel." },
  { slug: "anzoategui", name: "Anzoátegui", capital: "Barcelona", x: 59.9, y: 24.9, image: "/images/states/anzoategui.jpg", phrase: "Costa oriental, ciudades marinas y rutas caribeñas." },
  { slug: "sucre", name: "Sucre", capital: "Cumaná", x: 64.0, y: 18.5, image: "/images/states/sucre.jpg", phrase: "Mochima, penínsulas verdes y mar profundo." },
  { slug: "nueva-esparta", name: "Nueva Esparta", capital: "La Asunción", x: 71.4, y: 11.8, image: "/images/states/nueva-esparta.jpg", phrase: "Islas, playas luminosas y energía margariteña." },
  { slug: "monagas", name: "Monagas", capital: "Maturín", x: 71.6, y: 21.8, image: "/images/states/monagas.jpg", phrase: "Cavernas, ríos y naturaleza del oriente interior." },
  { slug: "delta-amacuro", name: "Delta Amacuro", capital: "Tucupita", x: 83.0, y: 31.4, image: "/images/states/delta-amacuro.jpg", phrase: "Canales del Orinoco, manglares y vida warao." },
  { slug: "yaracuy", name: "Yaracuy", capital: "San Felipe", x: 26.9, y: 23.2, image: "/images/states/yaracuy.jpg", phrase: "Montañas verdes, ríos y naturaleza cercana." },
  { slug: "carabobo", name: "Carabobo", capital: "Valencia", x: 34.7, y: 24.6, image: "/images/states/carabobo.jpg", phrase: "Puerto Cabello, historia republicana y costa central." },
  { slug: "aragua", name: "Aragua", capital: "Maracay", x: 38.7, y: 23.4, image: "/images/states/aragua.jpg", phrase: "Henri Pittier, bahías escondidas y valles tropicales." },
  { slug: "la-guaira", name: "La Guaira", capital: "La Guaira", x: 44.8, y: 16.3, image: "/images/states/la-guaira.jpg", phrase: "Costa caraqueña, malecones y montaña junto al mar." },
  { slug: "distrito-capital", name: "Distrito Capital", capital: "Caracas", x: 45.2, y: 19.7, image: "/images/states/distrito-capital.jpg", phrase: "Caracas entre El Ávila, cultura urbana y miradores." },
  { slug: "miranda", name: "Miranda", capital: "Los Teques", x: 42.2, y: 21.0, image: "/images/states/miranda.jpg", phrase: "Playas, valles y pueblos cerca de la capital." },
  { slug: "cojedes", name: "Cojedes", capital: "San Carlos", x: 31.7, y: 31.1, image: "/images/states/cojedes.jpg", phrase: "Llanos centrales, ríos tranquilos y rutas rurales." },
  { slug: "guarico", name: "Guárico", capital: "San Juan de los Morros", x: 41.1, y: 26.5, image: "/images/states/guarico.jpg", phrase: "Morros, hatos y el corazón del llano central." },
];

const politicalMapImage = "/images/venezuela-political-map.jpg";

function getCardPlacement(x: number, y: number) {
  if (x > 60) return { right: `${100 - x + 3}%`, top: `${Math.max(4, y - 12)}%` };
  if (x < 24) return { left: `${x + 3}%`, top: `${Math.max(4, y - 12)}%` };
  if (y < 26) return { left: `${x}%`, top: `${y + 4}%`, transform: "translateX(-50%)" };
  return { left: `${x + 3}%`, top: `${Math.max(4, y - 12)}%` };
}

type ActiveHotspot = CapitalHotspot & { places: number };
type Dictionary = ReturnType<typeof useLanguage>["dictionary"];

/** Contenido de la ficha del mapa, compartido por la variante móvil y la de escritorio. */
function MapCard({
  active,
  dictionary,
  language,
  onClose,
}: {
  active: ActiveHotspot;
  dictionary: Dictionary;
  language: string;
  onClose: (() => void) | null;
}) {
  return (
    <>
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className="absolute right-2 top-2 flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold text-[#17201b] transition hover:bg-[#f6f2e9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#247c8f]"
          aria-label={dictionary.map.close}
        >
          <X size={16} strokeWidth={2.4} aria-hidden="true" />
        </button>
      )}
      <p className="pr-10 text-xs font-semibold uppercase tracking-[0.16em] text-[#247c8f]">{dictionary.map.capital}</p>
      <h3 className="mt-1 pr-10 font-[family-name:var(--font-display)] text-2xl font-semibold text-[#17201b]">{active.name}</h3>
      <p className="mt-1 text-sm font-semibold text-[#234B39]">{active.capital}</p>
      <p className="mt-3 text-sm leading-5 text-[#68726d]">
        {language === "es" ? active.phrase : dictionary.map.statePhrase}
      </p>
      <Link
        href={`/estado/${active.slug}`}
        className="mt-4 inline-flex h-12 w-full items-center justify-center rounded-full bg-[#234B39] px-4 text-sm font-semibold text-white transition hover:bg-[#193729] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#247c8f] focus-visible:ring-offset-2"
      >
        {dictionary.map.explore}
      </Link>
    </>
  );
}

export function InteractiveMap() {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const { language, dictionary } = useLanguage();

  const hotspots = useMemo(
    () =>
      capitalHotspots.map((hotspot) => ({
        ...hotspot,
        places: states.find((state) => state.slug === hotspot.slug)?.places ?? 20,
      })),
    [],
  );

  const active =
    hotspots.find((hotspot) => hotspot.slug === selectedSlug) ??
    hotspots.find((hotspot) => hotspot.slug === hoveredSlug);

  return (
    <section id="mapa" className="bg-[#f9faf8] py-28">
      <div className="container-page">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#247c8f]">{dictionary.map.eyebrow}</p>
            <h2 className="mt-3 max-w-4xl font-[family-name:var(--font-display)] text-5xl font-semibold leading-none md:text-7xl">
              {dictionary.map.title}
            </h2>
          </div>
          <p className="max-w-sm text-base leading-7 text-[#68726d]">{dictionary.map.text}</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[38px] border border-[#e6dfd2] bg-[#efe5d0] p-3 shadow-[0_30px_80px_rgba(23,32,27,0.08)] md:p-5"
        >
          <div className="relative mx-auto aspect-[2000/1625] w-full max-w-[1120px] overflow-hidden rounded-[30px] bg-white">
            <Image
              src={politicalMapImage}
              alt={dictionary.map.alt}
              fill
              sizes="(max-width: 1280px) 100vw, 1120px"
              className="rounded-[30px] object-cover"
              priority={false}
            />

            {hotspots.map((hotspot) => {
              const isActive = active?.slug === hotspot.slug;

              return (
                <button
                  key={hotspot.slug}
                  type="button"
                  aria-label={`Seleccionar ${hotspot.name}`}
                  onMouseEnter={() => setHoveredSlug(hotspot.slug)}
                  onMouseLeave={() => setHoveredSlug(null)}
                  onFocus={() => setHoveredSlug(hotspot.slug)}
                  onBlur={() => setHoveredSlug(null)}
                  onClick={() => setSelectedSlug((current) => (current === hotspot.slug ? null : hotspot.slug))}
                  /* 44 px de área táctil: el punto visible sigue midiendo 12 px. */
                  className="group absolute z-20 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#247c8f]"
                  style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                >
                  <motion.span
                    animate={isActive ? { scale: 1.18 } : { scale: 1 }}
                    whileHover={{ scale: 1.12 }}
                    transition={{ duration: 0.18 }}
                    className={`relative h-3 w-3 rounded-full border transition duration-200 ${
                      isActive
                        ? "border-white bg-[#234B39] shadow-[0_0_0_3px_rgba(35,75,57,0.14),0_6px_14px_rgba(23,32,27,0.18)]"
                        : "border-white bg-[#234B39]/65 shadow-[0_3px_8px_rgba(23,32,27,0.14)] group-hover:bg-[#234B39]"
                    }`}
                  >
                    <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
                  </motion.span>
                </button>
              );
            })}

            {active && (
              <>
                {/*
                 * Móvil: ficha anclada al borde inferior y a todo el ancho del mapa.
                 * La variante posicionada por porcentaje medía 272 px fijos dentro de
                 * un contenedor de ~323 px con overflow-hidden, así que en la mayoría
                 * de los estados se recortaba y con ella el enlace "Explorar estado".
                 */}
                <div
                  key={`${active.slug}-movil`}
                  className="absolute inset-x-2 bottom-2 z-30 rounded-[24px] border border-white/80 bg-white/97 p-4 shadow-[0_24px_70px_rgba(23,32,27,0.18)] backdrop-blur md:hidden"
                >
                  <MapCard
                    active={active}
                    dictionary={dictionary}
                    language={language}
                    onClose={selectedSlug === active.slug ? () => setSelectedSlug(null) : null}
                  />
                </div>

                <motion.div
                  key={active.slug}
                  initial={{ opacity: 0, scale: 0.96, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.18 }}
                  className="absolute z-30 hidden w-[17rem] rounded-[24px] border border-white/80 bg-white/95 p-4 shadow-[0_24px_70px_rgba(23,32,27,0.18)] backdrop-blur md:block"
                  style={getCardPlacement(active.x, active.y)}
                >
                  <MapCard
                    active={active}
                    dictionary={dictionary}
                    language={language}
                    onClose={selectedSlug === active.slug ? () => setSelectedSlug(null) : null}
                  />
                </motion.div>
              </>
            )}
          </div>
          <p className="px-3 pt-3 text-center text-xs text-[#68726d]">
            {dictionary.map.baseMap}{" "}
            <a
              href="https://www.guideoftheworld.com/venezuela-map.html"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-[#234B39]/30 underline-offset-4 transition hover:text-[#234B39]"
            >
              Guide of the World
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
