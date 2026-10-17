"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

type ManualCarouselSlide = {
  image: string;
  alt: string;
  label: string;
};

export function ManualImageCarousel({ slides }: { slides: ManualCarouselSlide[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];

  const move = (direction: 1 | -1) => {
    setActiveIndex((current) => (current + direction + slides.length) % slides.length);
  };

  useEffect(() => {
    if (slides.length < 2) return;

    const nextImage = new window.Image();
    nextImage.src = slides[(activeIndex + 1) % slides.length].image;
  }, [activeIndex, slides]);

  return (
    <div className="group relative aspect-[16/9] overflow-hidden bg-[#e9eee9]">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide.image}
          initial={{ opacity: 0.25, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0.25, scale: 1.01 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          drag={slides.length > 1 ? "x" : false}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.12}
          onDragEnd={(_, info) => {
            if (info.offset.x < -45) move(1);
            if (info.offset.x > 45) move(-1);
          }}
          className="absolute inset-0 cursor-grab touch-pan-y active:cursor-grabbing"
        >
          <Image
            src={activeSlide.image}
            alt={activeSlide.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 72vw"
            className="object-cover transition duration-500 group-hover:scale-[1.02]"
            unoptimized
          />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/45 to-transparent" />
          <span className="absolute bottom-5 left-6 text-xl font-semibold text-white">{activeSlide.label}</span>
        </motion.div>
      </AnimatePresence>

      {slides.length > 1 && (
        <div className="absolute bottom-5 right-6 flex gap-1.5">
          {slides.map((slide, index) => (
            <button
              key={slide.image}
              type="button"
              aria-label={`Ver foto ${index + 1}: ${slide.label}`}
              onClick={() => setActiveIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-200 ${index === activeIndex ? "w-6 bg-white" : "w-1.5 bg-white/60 hover:bg-white"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
