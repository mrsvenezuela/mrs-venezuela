"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { heroSlides } from "@/lib/content";
import { useLanguage } from "@/components/i18n/language-provider";

function VenezuelaFlag({ label }: { label: string }) {
  const stars = [
    { x: 42, y: 28, rotate: -26 },
    { x: 49, y: 23, rotate: -18 },
    { x: 57, y: 20, rotate: -9 },
    { x: 65, y: 19, rotate: 0 },
    { x: 73, y: 19, rotate: 0 },
    { x: 81, y: 20, rotate: 9 },
    { x: 89, y: 23, rotate: 18 },
    { x: 96, y: 28, rotate: 26 },
  ];

  return (
    <svg
      viewBox="0 0 138 84"
      role="img"
      aria-label={label}
      className="h-10 w-[66px] overflow-hidden rounded-[6px] shadow-[0_12px_34px_rgba(0,0,0,0.24)] ring-1 ring-white/35"
    >
      <rect width="138" height="28" fill="#F5D547" />
      <rect y="28" width="138" height="28" fill="#2855A3" />
      <rect y="56" width="138" height="28" fill="#B82434" />
      <defs>
        <polygon
          id="flag-star"
          points="0,-4 1.1,-1.3 4,-1.3 1.7,0.55 2.55,3.35 0,1.7 -2.55,3.35 -1.7,0.55 -4,-1.3 -1.1,-1.3"
          fill="white"
        />
      </defs>
      {stars.map((star, index) => (
        <use key={index} href="#flag-star" transform={`translate(${star.x} ${star.y + 18}) rotate(${star.rotate})`} />
      ))}
    </svg>
  );
}

export function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [loadedSlides, setLoadedSlides] = useState<number[]>([]);
  const [preparedSlide, setPreparedSlide] = useState<number | null>(null);
  const { dictionary } = useLanguage();

  useEffect(() => {
    const next = (active + 1) % heroSlides.length;
    if (paused || !loadedSlides.includes(active) || !loadedSlides.includes(next)) return;

    const timer = window.setTimeout(() => {
      setActive(next);
    }, 5200);

    return () => window.clearTimeout(timer);
  }, [active, loadedSlides, paused]);

  // Respeta la preferencia del sistema: sin movimiento, sin rotación automática.
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) setPaused(true);
  }, []);

  // Fetch the next photograph only after the visible one has finished loading.
  useEffect(() => {
    if (paused || !loadedSlides.includes(active)) return;
    const timer = window.setTimeout(() => setPreparedSlide((active + 1) % heroSlides.length), 1500);
    return () => window.clearTimeout(timer);
  }, [active, loadedSlides, paused]);

  const activeSlide = heroSlides[active];

  return (
    <section className="relative overflow-hidden bg-[#0f3d2e] text-white">
      {heroSlides.map((slide, index) => {
        /*
         * Solo el slide visible y el siguiente se montan: los cinco a la vez pesaban
         * 7,5 MB y, al estar superpuestos en el viewport, loading="lazy" no los frenaba.
         */
        const isActive = index === active;
        const isNext = !paused && index === preparedSlide;
        if (!isActive && !isNext) return null;

        return (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            priority={index === 0}
            quality={70}
            onLoad={() => setLoadedSlides(current => current.includes(index) ? current : [...current, index])}
            sizes="100vw"
            className={`object-cover transition-all duration-[1400ms] ease-out ${
              isActive ? "scale-100 opacity-100" : "scale-[1.035] opacity-0"
            }`}
          />
        );
      })}

      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-[#0f3d2e]/70" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f7f4ec] to-transparent" />

      {/* Let wrapped mobile copy grow below the header instead of pushing the flag behind it. */}
      <div className="container-page relative z-10 flex min-h-[30rem] flex-col justify-end pb-20 pt-28 sm:pb-12 sm:pt-32 md:min-h-[37.5rem]">
        <div className="mb-5 flex shrink-0 justify-end sm:mb-6">
          <VenezuelaFlag label={dictionary.hero.flag} />
        </div>

        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/85 sm:text-sm">
            {dictionary.hero.badge}
          </p>
          <h1 className="mt-4 text-balance font-[family-name:var(--font-display)] text-[2.75rem] font-semibold leading-[1.02] sm:text-6xl sm:leading-[0.9] md:text-7xl lg:text-8xl">
            {dictionary.hero.title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/88 md:text-lg md:leading-8">
            {dictionary.hero.subtitle}
          </p>
        </div>

        <p className="mt-7 text-xs font-medium text-white/70">
          {activeSlide.label} · {activeSlide.location}
        </p>

      </div>
    </section>
  );
}
