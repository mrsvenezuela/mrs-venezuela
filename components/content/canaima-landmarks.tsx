"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { EditorialSectionHeading } from "@/components/content/editorial-section-heading";

const landmarks = [
  {
    title: "La zona de Canaima y el Salto Ángel",
    slides: [
      {
        image: "/images/commons/salto-angel-canon-del-diablo.jpg",
        alt: "Salto Ángel descendiendo desde el Auyantepuy",
      },
    ],
    paragraphs: [
      "La laguna, los saltos cercanos y el Auyantepuy forman la zona más conocida del parque. Aquí el agua marca el ritmo del viaje y revela una cara más selvática de Canaima.",
      "Desde el Auyantepuy desciende el Kerepakupai Vená, conocido mundialmente como Salto Ángel y considerado la cascada más alta del mundo. Llegar hasta él suele combinar vuelos panorámicos, navegación en curiara y caminatas guiadas; el caudal, la niebla y el clima hacen que cada visita sea distinta.",
    ],
  },
  {
    title: "La Gran Sabana",
    slides: [
      {
        image: "/images/canaima/gran-sabana-sendero-roraima.jpg",
        alt: "Senderistas caminando hacia los tepuyes de la Gran Sabana",
      },
      {
        image: "/images/commons/mount-roraima-venezuela-12372404495.jpg",
        alt: "Monte Roraima sobre el paisaje de la Gran Sabana",
      },
      {
        image: "/images/commons/kama-falls-salto-kama-23495860840.jpg",
        alt: "Salto Kamá entre la vegetación de la Gran Sabana",
      },
      {
        image: "/images/commons/la-gran-sabana.jpg",
        alt: "Panorámica de La Gran Sabana venezolana",
      },
      {
        image: "/images/commons/yuruani-tepuy-y-rio-gran-sabana.jpg",
        alt: "Río Yuruaní con un tepuy al fondo en la Gran Sabana",
      },
      {
        image: "/images/commons/arapan-meru.jpg",
        alt: "Vista panorámica del Salto Pacheco y su cauce en la Gran Sabana",
      },
      {
        image: "/images/commons/gran-sabana-quebrada-de-jaspe-i-1.jpg",
        alt: "Aguas de la Quebrada de Jaspe en la Gran Sabana",
      },
    ],
    paragraphs: [
      "Hacia el este, Canaima se abre a La Gran Sabana: un horizonte de sabanas, tepuyes, ríos claros y cascadas que cambia de escala a cada kilómetro.",
      "Es la puerta de entrada al Monte Roraima y a otros tepuyes emblemáticos. A diferencia de la zona de la laguna, aquí el viaje se descubre por carretera, enlazando paisajes abiertos y múltiples rutas naturales.",
    ],
  },
];

type LandmarkSlide = {
  image: string;
  alt: string;
};

function LandmarkImage({ slides }: { slides: LandmarkSlide[] }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const changeSlide = (direction: 1 | -1) => {
    setActiveSlide((current) => (current + direction + slides.length) % slides.length);
  };

  useEffect(() => {
    if (slides.length < 2) return;

    const nextSlide = slides[(activeSlide + 1) % slides.length];
    const preload = new window.Image();
    preload.src = nextSlide.image;
  }, [activeSlide, slides]);

  const slide = slides[activeSlide];

  return (
    <figure className="group overflow-hidden rounded-[28px] bg-[#e9eee9]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.image}
            initial={{ opacity: 0.25, scale: 1.025 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.25, scale: 1.01 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            drag={slides.length > 1 ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.12}
            onDragEnd={(_, info) => {
              if (info.offset.x < -45) changeSlide(1);
              if (info.offset.x > 45) changeSlide(-1);
            }}
            className="absolute inset-0 cursor-grab touch-pan-y active:cursor-grabbing"
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              loading={activeSlide === 0 ? "eager" : "lazy"}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition duration-500 ease-out group-hover:scale-[1.02]"
              unoptimized
            />
          </motion.div>
        </AnimatePresence>

        {slides.length > 1 && (
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
            {slides.map((item, index) => (
              <button
                key={item.image}
                type="button"
                aria-label={`Ver imagen ${index + 1} de La Gran Sabana`}
                onClick={() => setActiveSlide(index)}
                className={`h-1.5 rounded-full transition-all ${index === activeSlide ? "w-6 bg-white" : "w-1.5 bg-white/55 hover:bg-white/80"}`}
              />
            ))}
          </div>
        )}
      </div>
    </figure>
  );
}

export function CanaimaLandmarks() {
  return (
    <section className="container-page py-2">
      <EditorialSectionHeading
        title="PARQUE NACIONAL CANAIMA"
        description="Los grandes paisajes de Canaima"
        className="max-w-3xl"
      />
      <p className="mt-8 max-w-2xl text-lg leading-8 text-[#68726d]">
        Canaima es uno de los territorios naturales más espectaculares de Venezuela. Su inmensidad reúne dos experiencias muy distintas: la zona húmeda de la laguna y el Salto Ángel, y el horizonte abierto de La Gran Sabana.
      </p>

      <div className="mt-14 space-y-20">
        {landmarks.map((landmark, index) => (
          <motion.article
            key={landmark.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="grid items-center gap-9 lg:grid-cols-2 lg:gap-16"
          >
            <div className={index === 1 ? "lg:order-2" : ""}>
              <h3 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-[#17201b]">{landmark.title}</h3>
              <div className="mt-5 space-y-5 text-lg leading-8 text-[#68726d]">
                {landmark.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </div>
            <div className={index === 1 ? "lg:order-1" : ""}>
              <LandmarkImage slides={landmark.slides} />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
