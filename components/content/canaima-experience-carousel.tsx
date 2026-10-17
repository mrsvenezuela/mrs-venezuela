"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

type Slide = {
  image: string;
  alt: string;
};

export function CanaimaExperienceCarousel({ slides }: { slides: Slide[] }) {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  const slide = slides[activeSlide];

  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-[#e9eee9]">
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.image}
          initial={{ opacity: 0.25, scale: 1.025 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0.25, scale: 1.01 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
            unoptimized
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
        {slides.map((item, index) => (
          <button
            key={item.image}
            type="button"
            aria-label={`Ver foto ${index + 1} de Salto El Sapo`}
            onClick={() => setActiveSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${index === activeSlide ? "w-6 bg-white" : "w-1.5 bg-white/60 hover:bg-white"}`}
          />
        ))}
      </div>
    </div>
  );
}
