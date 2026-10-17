"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { gallery } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/i18n/language-provider";

export function Gallery() {
  const [active, setActive] = useState<(typeof gallery)[number] | null>(null);
  const { dictionary } = useLanguage();

  return (
    <section id="galeria" className="container-page py-28">
      <div className="mb-12 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#247c8f]">{dictionary.gallery.eyebrow}</p>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-5xl font-semibold leading-none md:text-7xl">
          {dictionary.gallery.title}
        </h2>
      </div>
      <div className="masonry">
        {gallery.map((image) => (
          <button
            key={image.src}
            onClick={() => setActive(image)}
            className="group relative w-full overflow-hidden rounded-[30px] bg-[#0f3d2e] text-left shadow-[0_20px_60px_rgba(23,32,27,0.09)]"
            style={{ height: image.height }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              loading="lazy"
              sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-lg font-semibold text-white">
              {image.alt}
            </span>
          </button>
        ))}
      </div>
      {active ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/84 p-5 backdrop-blur-md">
          <Button
            variant="secondary"
            size="icon"
            onClick={() => setActive(null)}
            aria-label={dictionary.gallery.close}
            className="absolute right-5 top-5"
          >
            <X size={19} />
          </Button>
          <div className="relative h-[82vh] w-full max-w-6xl overflow-hidden rounded-[30px]">
            <Image src={active.src} alt={active.alt} fill sizes="100vw" className="object-cover" />
          </div>
        </div>
      ) : null}
    </section>
  );
}
