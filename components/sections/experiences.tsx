"use client";

import Image from "next/image";
import { heroImage } from "@/lib/content";
import { useLanguage } from "@/components/i18n/language-provider";

export function Experiences() {
  const { dictionary } = useLanguage();

  return (
    <section id="experiencias" className="relative min-h-[92vh] overflow-hidden">
      <Image
        src={heroImage}
        alt={dictionary.experiences.alt}
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/68 via-black/26 to-transparent" />
      <div className="container-page relative z-10 flex min-h-[92vh] items-center">
        <div className="max-w-3xl text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/78">{dictionary.experiences.eyebrow}</p>
          <h2 className="mt-5 font-[family-name:var(--font-display)] text-6xl font-semibold leading-[0.96] md:text-8xl">
            {dictionary.experiences.title}
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-8 text-white/82">{dictionary.experiences.text}</p>
        </div>
      </div>
    </section>
  );
}
