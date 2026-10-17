"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { CanaimaExperienceCarousel } from "@/components/content/canaima-experience-carousel";

type CanaimaExperienceCardProps = {
  title: string;
  description: string;
  image: string;
  alt: string;
  secondaryImage?: string;
  secondaryAlt?: string;
};

export function CanaimaExperienceCard({
  title,
  description,
  image,
  alt,
  secondaryImage,
  secondaryAlt,
}: CanaimaExperienceCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="overflow-hidden rounded-[28px] bg-white shadow-[0_18px_55px_rgba(23,32,27,0.07)]">
      {secondaryImage && secondaryAlt ? (
        <CanaimaExperienceCarousel
          slides={[
            { image, alt },
            { image: secondaryImage, alt: secondaryAlt },
          ]}
        />
      ) : (
        <div className="relative aspect-[16/10] bg-[#e9eee9]">
          <Image src={image} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" unoptimized={image.startsWith("http")} />
        </div>
      )}

      <div className="p-6">
        <div className="flex items-start gap-4">
          <h3 className="font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight text-[#17201b]">{title}</h3>
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? `Ocultar información sobre ${title}` : `Mostrar información sobre ${title}`}
            aria-expanded={isOpen}
            className={`ml-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eef7f4] text-[#247c8f] transition duration-200 hover:scale-105 ${isOpen ? "rotate-180" : ""}`}
          >
            <ChevronDown size={20} />
          </button>
        </div>
        {isOpen && <p className="mt-4 leading-7 text-[#68726d]">{description}</p>}
      </div>
    </article>
  );
}
