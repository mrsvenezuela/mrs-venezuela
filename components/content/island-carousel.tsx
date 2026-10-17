"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronUp } from "lucide-react";

export type IslandSlide = {
  name: string;
  image: string;
  description: string;
};

export function IslandExplorer({ islands }: { islands: IslandSlide[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="grid gap-5 md:grid-cols-2">
      {islands.map((entry, index) => {
        const isOpen = activeIndex === index;

        return (
          <article
            key={entry.name}
            className={`relative h-52 overflow-hidden rounded-[26px] bg-white text-left shadow-[0_18px_55px_rgba(23,32,27,0.07)] transition ${isOpen ? "ring-2 ring-[#247c8f] ring-offset-4" : "hover:-translate-y-1"}`}
          >
            {isOpen ? (
              <section className="absolute inset-0 flex flex-col justify-center bg-[#f3f8f5] px-5 py-4" aria-label={`Información sobre ${entry.name}`}>
                <button
                  type="button"
                  onClick={() => setActiveIndex(null)}
                  aria-label={`Volver a la foto de ${entry.name}`}
                  title="Volver a la foto"
                  className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#0f3d2e] shadow-[0_8px_20px_rgba(23,32,27,0.08)] transition hover:scale-105"
                >
                  <ChevronUp size={18} />
                </button>
                <h3 className="pr-10 font-[family-name:var(--font-display)] text-2xl font-semibold leading-tight text-[#17201b]">{entry.name}</h3>
                <p className="mt-2 text-sm leading-5 text-[#52635b]">{entry.description}</p>
              </section>
            ) : (
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-expanded={false}
                className="group absolute inset-0 block w-full text-left"
              >
                <Image
                  src={entry.image}
                  alt={`${entry.name}, Los Roques`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                  unoptimized={entry.image.startsWith("http")}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <h3 className="absolute bottom-0 left-0 p-5 font-[family-name:var(--font-display)] text-4xl font-semibold text-white">{entry.name}</h3>
              </button>
            )}
          </article>
        );
      })}
    </div>
  );
}
