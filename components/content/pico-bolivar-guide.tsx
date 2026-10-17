"use client";

import { commonsImage as commons } from "@/lib/commons-image";
import { PhotoCredits } from "@/components/content/photo-credits";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Backpack,
  CableCar,
  Compass,
  Droplets,
  Eye,
  Footprints,
  Leaf,
  Mountain,
  ShieldCheck,
  Snowflake,
  Sun,
  type LucideIcon,
} from "lucide-react";
import type { DiscoverItem } from "@/lib/content";
import { EditorialSectionHeading } from "@/components/content/editorial-section-heading";

/*
 * Guía editorial del Pico Bolívar.
 * Usa únicamente fotografías que ya existían en el proyecto: las de Wikimedia Commons
 * acreditadas al final y dos imágenes locales de Pico Espejo y de la cumbre.
 */
const commonsPage = (file: string) => `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file)}`;

const photos = {
  cumbre: commons("PicoBolivarMerida.JPG"),
  valle: commons("Pico Bolívar, Mérida.JPG"),
  teleferico: commons("Teleférico del Pico Espejo.JPG"),
  picoEspejo: "/images/merida-pico-espejo.png",
  nubeLenticular: "/images/pico-bolivar.jpg",
};

const credits = [
  { file: "Pico Bolívar al desnudo en día soleado y despejado.jpg", title: "Pico Bolívar en un día despejado", author: "ALJB", license: "CC BY-SA 3.0" },
  { file: "PicoBolivarMerida.JPG", title: "Pico Bolívar desde Pico Espejo", author: "Fernando Cuartero", license: "CC BY-SA 2.5" },
  { file: "Pico Bolívar, Mérida.JPG", title: "Pico Bolívar desde el valle de Mérida", author: "Gerson Márquez", license: "CC BY-SA 3.0" },
  { file: "Teleférico del Pico Espejo.JPG", title: "Teleférico del Pico Espejo", author: "Ivan Carvajal", license: "CC BY-SA 3.0" },
];

const introParagraphs = [
  "El Pico Bolívar es la cumbre más alta de Venezuela: alcanza 4.978 metros sobre el nivel del mar en la Sierra Nevada de Mérida. Su perfil de roca, páramo y nubes representa uno de los paisajes de alta montaña más impresionantes del país.",
  "Forma parte de la Sierra Nevada de Mérida, la cadena más alta de los Andes venezolanos, y es la referencia que da escala a todo el paisaje andino del país.",
  "Más que un mirador, es una montaña técnica y un referente del montañismo venezolano. Conocerla significa entender la escala de los Andes de Mérida, sus cambios de clima y la historia natural de una cordillera tropical.",
];

const introFacts = [
  { label: "Cordillera", value: "Sierra Nevada de Mérida, Andes venezolanos" },
  { label: "Área protegida", value: "Parque Nacional Sierra Nevada" },
  { label: "Mirador más cercano", value: "Pico Espejo, a 4.765 metros, estación final del teleférico Mukumbarí" },
];

const historyParagraphs = [
  "Durante el siglo XIX la cumbre era conocida como La Columna, por la silueta vertical que domina la Sierra Nevada. En 1925 recibió oficialmente el nombre de Pico Bolívar, en homenaje a Simón Bolívar, por iniciativa del escritor merideño Tulio Febres Cordero.",
  "La primera ascensión documentada se realizó en 1935, cuando un grupo de montañistas merideños, entre ellos Enrique Bourgoin y Domingo Peña, alcanzó la cumbre. Desde entonces la montaña se convirtió en la gran referencia del montañismo venezolano.",
  "En la cima se colocó un busto de Bolívar que, desde mediados del siglo XX, acompaña a quienes completan el ascenso. No es una biografía lo que guarda la montaña, sino un símbolo: el nombre del país en su punto más alto.",
  "Incluso su altura ha cambiado con el conocimiento. Durante décadas se citaron 5.007 metros; mediciones modernas con GPS fijaron la cifra actual de 4.978 metros, la que hoy se reconoce oficialmente.",
];

const giantBlocks = {
  roof: [
    "Su altura lo convierte en el punto geográfico más elevado de Venezuela. Se levanta dentro del Parque Nacional Sierra Nevada, entre picos, lagunas y páramos de Mérida.",
    "A su alrededor, el páramo andino, con frailejones, lagunas de origen glaciar y rocas desnudas, va cediendo altura hasta las cumbres, donde solo queda la piedra.",
  ],
  pyramid:
    "A diferencia de las lomas redondeadas del páramo, el Bolívar presenta una silueta escarpada de roca compacta. Alcanzar su cima es una actividad de montañismo técnico, reservada para personas con experiencia, preparación y acompañamiento profesional.",
  snow:
    "Durante décadas, el Pico Bolívar conservó hielo glaciar y fue uno de los símbolos de las nieves tropicales venezolanas. Ese hielo desapareció con el retroceso acelerado de los glaciares; hoy el paisaje permite leer de cerca uno de los cambios ambientales más profundos de la cordillera.",
};

const cableCarParagraphs = [
  "El Sistema Teleférico Mukumbarí parte desde la ciudad de Mérida y asciende por etapas hasta Pico Espejo, a 4.765 metros, una de las estaciones de teleférico más altas del mundo. Sus estaciones, Barinitas, La Montaña, La Aguada, Loma Redonda y Pico Espejo, marcan el paso del valle al páramo y de allí a la alta montaña.",
  "En un solo recorrido, el viajero pasa del clima de la ciudad al frío de las cumbres: el paisaje cambia de bosque a páramo y de páramo a roca, mientras la temperatura baja con cada estación.",
  "No hace falta escalar hasta la cumbre para acercarse al paisaje andino. Desde Pico Espejo se contempla el Pico Bolívar y el conjunto de la Sierra Nevada desde una altura extraordinaria. Es un mirador de alta montaña, no una ruta directa a la cima.",
];

const experienceBlocks = [
  {
    title: "El páramo",
    text: "Entre las estaciones intermedias aparece el páramo: frailejones, lagunas frías y una luz limpia que cambia con las nubes. Es el paisaje andino más reconocible de Mérida y se recorre con calma, a paso lento.",
  },
  {
    title: "Las alturas",
    text: "En Pico Espejo el aire es más fino y el frío se siente de inmediato. Muchas personas notan la altura: conviene moverse despacio, abrigarse y dar tiempo al cuerpo. Junto a la estación se encuentra la imagen de la Virgen de las Nieves, un punto de referencia para quienes llegan.",
  },
  {
    title: "El paisaje",
    text: "Nubes que pasan por debajo de los pies, cumbres de roca, nieve ocasional y la sierra abriéndose en todas direcciones, con el Pico Bolívar de frente. Es un lugar para fotografiar, pero sobre todo para mirar.",
  },
];

const routeSteps = [
  { name: "Venezuela", text: "El punto de partida: llegar a Mérida por carretera desde el resto del país o por vía aérea a la región, según disponibilidad." },
  { name: "Mérida", text: "La ciudad andina es la base de la visita: hospedaje, servicios y la estación de salida del teleférico." },
  { name: "Sistema Mukumbarí", text: "Ascenso por etapas desde la ciudad, con estaciones intermedias que atraviesan bosque y páramo." },
  { name: "Pico Espejo", text: "Estación final del sistema, frente al Pico Bolívar. Aquí termina la visita para la mayoría de los viajeros." },
];

const tips: Array<{ icon: LucideIcon; title: string; text: string }> = [
  { icon: Snowflake, title: "Ropa para el frío", text: "El clima puede cambiar considerablemente a medida que aumenta la altitud. Lleva abrigo en capas y algo impermeable." },
  { icon: Sun, title: "Protección solar", text: "La radiación solar puede ser intensa en zonas de alta montaña, incluso con nubes o frío." },
  { icon: Droplets, title: "Agua", text: "Mantén una hidratación adecuada durante toda la visita; la altura y el aire seco la hacen más necesaria." },
  { icon: Footprints, title: "Calzado adecuado", text: "Especialmente si se realizarán caminatas: suela con buen agarre y tobillo protegido." },
  { icon: Mountain, title: "Altitud", text: "Tómate el tiempo necesario para adaptarte y evita esfuerzos innecesarios si aparecen molestias relacionadas con la altura." },
  { icon: Leaf, title: "Respeta el entorno", text: "No dejes residuos y sigue las indicaciones de guías y autoridades del parque." },
];

const faqs: Array<{ icon: LucideIcon; question: string; answer: string }> = [
  {
    icon: CableCar,
    question: "¿El teleférico llega al Pico Bolívar?",
    answer: "No. El Sistema Mukumbarí llega a Pico Espejo, un mirador de alta montaña. La cumbre del Pico Bolívar requiere una ruta de montañismo distinta.",
  },
  {
    icon: Eye,
    question: "¿Puedo visitar la zona sin escalar el Pico Bolívar?",
    answer: "Sí. La mayoría de los visitantes sube en teleférico hasta Pico Espejo, recorre el páramo en las estaciones intermedias y contempla el Pico Bolívar desde el mirador, sin ningún ascenso técnico.",
  },
  {
    icon: Snowflake,
    question: "¿Hace frío en Pico Espejo?",
    answer: "Sí. A casi 4.800 metros, la temperatura es mucho más baja que en la ciudad de Mérida y puede cambiar en minutos con el viento y la niebla. Conviene subir abrigado aunque el día empiece soleado.",
  },
  {
    icon: Compass,
    question: "¿Necesito guía para subir al Pico Bolívar?",
    answer: "Para visitar Pico Espejo no hace falta. Para ascender al Pico Bolívar, sí: es una actividad de alta montaña que exige experiencia, preparación y, normalmente, guías especializados y equipo adecuado.",
  },
  {
    icon: Backpack,
    question: "¿Qué debo llevar para visitar la zona?",
    answer: "Ropa de abrigo en capas, algo impermeable, calzado cómodo con buen agarre, protección solar y agua. Para una ruta técnica se requiere guía certificado y equipo especializado.",
  },
  {
    icon: ShieldCheck,
    question: "¿Qué es el mal de páramo?",
    answer: "La altura extrema puede causar dolor de cabeza, cansancio o mareos. Una aclimatación gradual en Mérida y el acompañamiento de un guía ayudan a reconocer cuándo conviene detenerse.",
  },
];

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Photo({
  src,
  alt,
  position = "center",
  className = "",
  sizes,
}: {
  src: string;
  alt: string;
  position?: string;
  className?: string;
  sizes: string;
}) {
  return (
    <figure className={`relative overflow-hidden rounded-[28px] bg-[#e4ebe6] ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover"
        style={{ objectPosition: position }}
        unoptimized={src.startsWith("http")}
      />
    </figure>
  );
}

function DarkHeading({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#b9d9d6] md:text-sm">{number}</p>
      <h2 className="mt-4 max-w-4xl font-[family-name:var(--font-display)] text-[clamp(2.3rem,4.4vw,4.5rem)] font-semibold leading-[0.96] text-white">{title}</h2>
      <p className="mt-5 max-w-2xl text-base leading-7 text-white/72 md:text-lg md:leading-8">{description}</p>
    </div>
  );
}

export function PicoBolivarGuide({ item }: { item: DiscoverItem }) {
  return (
    <main className="bg-[#f7f4ec]">
      {/* Hero: mismo concepto que el actual, con la fotografía como protagonista */}
      <section className="relative min-h-[78vh] overflow-hidden text-white">
        <Image
          src={item.image}
          alt={item.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 40%" }}
          unoptimized={item.image.startsWith("http")}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/24 to-black/18" />
        <div className="container-page relative z-10 flex min-h-[78vh] items-end pb-20 pt-28">
          <div className="max-w-4xl">
            <Link href="/" className="mb-8 inline-flex rounded-full bg-white/14 px-4 py-2 text-sm font-semibold backdrop-blur-md">
              Descubre Venezuela
            </Link>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/76">Mérida · Venezuela</p>
            <h1 className="mt-4 font-[family-name:var(--font-display)] text-6xl font-semibold leading-[0.9] md:text-8xl">{item.name}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/86">{item.description}</p>
          </div>
        </div>
      </section>

      {/* Introducción: 60 % texto · 40 % dato destacado */}
      <section className="container-page pt-20 md:pt-28">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#247c8f] md:text-sm">Sierra Nevada de Mérida</p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(2.3rem,4.4vw,4.5rem)] font-semibold leading-[0.96] text-[#17201b]">El techo de Venezuela.</h2>
            <div className="mt-8 space-y-5 text-lg leading-8 text-[#59675f]">
              {introParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
          <Reveal className="lg:pt-16">
            <aside className="border-l border-[#d9d3c7] pl-7 md:pl-9">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#247c8f]">Altitud</p>
              <p className="mt-3 font-[family-name:var(--font-display)] text-[clamp(3.6rem,7vw,6.5rem)] font-semibold leading-none text-[#17201b]">4.978 m</p>
              <p className="mt-4 font-[family-name:var(--font-display)] text-2xl font-semibold leading-tight text-[#0f3d2e] md:text-3xl">Punto más alto de Venezuela</p>
              <dl className="mt-8 space-y-5 border-t border-[#d9d3c7] pt-7">
                {introFacts.map(({ label, value }) => (
                  <div key={label}>
                    <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-[#247c8f]">{label}</dt>
                    <dd className="mt-1.5 leading-7 text-[#59675f]">{value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </Reveal>
        </div>
      </section>

      {/* 01 — Historia y origen: texto + fotografía vertical */}
      <section className="container-page py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
          <Reveal className="order-2 max-w-2xl lg:order-1">
            <EditorialSectionHeading number="01" title="HISTORIA Y ORIGEN" description="Una montaña que forma parte de la identidad de los Andes venezolanos." />
            <div className="mt-9 space-y-5 text-lg leading-8 text-[#59675f]">
              {historyParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
          <Reveal className="order-1 lg:order-2">
            <Photo
              src={photos.cumbre}
              alt="La cumbre de roca del Pico Bolívar vista desde Pico Espejo"
              position="center 38%"
              className="aspect-[4/3] lg:aspect-[4/5]"
              sizes="(max-width: 1024px) 100vw, 46vw"
            />
          </Reveal>
        </div>
      </section>

      {/* 02 — El gigante de los Andes: panorámica + narrativa en bloques */}
      <section className="border-y border-[#e8e1d5] bg-white/75 py-20 md:py-28">
        <div className="container-page">
          <Reveal className="max-w-3xl">
            <EditorialSectionHeading number="02" title="EL GIGANTE DE LOS ANDES" description="Roca, páramo y altura en la Sierra Nevada." />
          </Reveal>
          <Reveal className="mt-12 md:mt-14">
            <Photo
              src={photos.valle}
              alt="La Sierra Nevada y el Pico Bolívar por encima de los bosques del valle de Mérida"
              position="center 32%"
              className="aspect-[16/10] rounded-[32px] md:aspect-[21/9]"
              sizes="100vw"
            />
            <p className="mt-4 max-w-2xl px-1 text-sm leading-6 text-[#7b837f]">
              Desde el valle de Mérida, la sierra se levanta por encima del bosque hasta la roca desnuda.
            </p>
          </Reveal>

          <Reveal className="mt-16 grid gap-6 border-t border-[#ddd6ca] pt-10 md:mt-20 lg:grid-cols-[0.42fr_1fr] lg:gap-16">
            <h3 className="font-[family-name:var(--font-display)] text-3xl font-semibold leading-[0.98] text-[#17201b] md:text-4xl">El techo del país</h3>
            <div className="max-w-2xl space-y-4 text-lg leading-8 text-[#59675f]">
              {giantBlocks.roof.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-16 grid gap-8 md:mt-24 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="max-w-xl">
              <h3 className="font-[family-name:var(--font-display)] text-3xl font-semibold leading-[0.98] text-[#17201b] md:text-4xl">Una pirámide de roca</h3>
              <p className="mt-5 text-lg leading-8 text-[#59675f]">{giantBlocks.pyramid}</p>
            </div>
            <Photo
              src={item.image}
              alt="El macizo del Pico Bolívar con restos de nieve entre las nubes"
              position="center 55%"
              className="aspect-[4/3]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </Reveal>

          <Reveal className="mt-16 grid gap-8 md:mt-24 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
            <Photo
              src={photos.nubeLenticular}
              alt="Nube lenticular sobre la cumbre nevada del Pico Bolívar"
              className="aspect-[3/2] w-full max-w-md"
              sizes="(max-width: 1024px) 100vw, 36vw"
            />
            <div className="max-w-xl">
              <h3 className="font-[family-name:var(--font-display)] text-3xl font-semibold leading-[0.98] text-[#17201b] md:text-4xl">Nieves que cambiaron el paisaje</h3>
              <p className="mt-5 text-lg leading-8 text-[#59675f]">{giantBlocks.snow}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 03 — Mukumbarí y Pico Espejo: 50 % fotografía · 50 % texto */}
      <section className="container-page py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <Photo
              src={photos.teleferico}
              alt="Cabina del teleférico Mukumbarí sobre el páramo, con la Sierra Nevada al fondo"
              position="center 45%"
              className="aspect-[4/3] lg:aspect-[5/6]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </Reveal>
          <Reveal>
            <EditorialSectionHeading number="03" title="MUKUMBARÍ Y PICO ESPEJO" description="Una puerta de entrada a las alturas de la Sierra Nevada." />
            <div className="mt-8 space-y-5 text-lg leading-8 text-[#59675f]">
              {cableCarParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 border-l-2 border-[#247c8f] pl-5 md:pl-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#247c8f]">Importante</p>
              <p className="mt-2 leading-7 text-[#17201b]">
                El teleférico no lleva a la cumbre del Pico Bolívar. Pico Espejo permite acercarse y contemplar el entorno de alta montaña; alcanzar la cima del Pico Bolívar es una actividad de montañismo distinta, que requiere preparación y acompañamiento especializado.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 04 — La experiencia andina: panorámica + tres conceptos */}
      <section className="border-y border-[#dfe8e2] bg-[#eaf2ed] py-20 md:py-28">
        <div className="container-page">
          <Reveal className="max-w-3xl">
            <EditorialSectionHeading number="04" title="LA EXPERIENCIA ANDINA" description="Lo que se vive en las alturas, sin necesidad de escalar." />
          </Reveal>
          <Reveal className="mt-12 md:mt-14">
            <Photo
              src={photos.picoEspejo}
              alt="Visitantes en la estación de Pico Espejo, por encima de un mar de nubes"
              position="center 58%"
              className="aspect-[16/10] rounded-[32px] md:aspect-[21/9]"
              sizes="100vw"
            />
          </Reveal>
          <Reveal className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-3">
            {experienceBlocks.map(({ title, text }, index) => (
              <article key={title} className="border-t border-[#c9d8cf] pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#247c8f]">0{index + 1}</p>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight text-[#17201b]">{title}</h3>
                <p className="mt-4 leading-7 text-[#59675f]">{text}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 05 — Cómo llegar: texto + ruta visual */}
      <section className="bg-[#0f3d2e] py-20 text-white md:py-28">
        <div className="container-page grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <Reveal>
            <DarkHeading number="05" title="CÓMO LLEGAR" description="Del valle a la alta montaña, por etapas." />
            <p className="mt-8 max-w-xl text-lg leading-8 text-white/80">
              La ruta general es sencilla de entender: se llega a Mérida, se sube con el teleférico Mukumbarí y se termina en Pico Espejo. Lo que viene después, la cumbre, es otra historia.
            </p>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <div className="border-t border-white/20 pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b9d9d6]">Visitar la zona</p>
                <p className="mt-3 leading-7 text-white/78">
                  Mérida está conectada por carretera con el resto del país. Desde la ciudad, el acceso habitual a las alturas es el Sistema Teleférico Mukumbarí, cuya estación de salida está en la propia ciudad. La operación, los horarios y la disponibilidad del servicio pueden cambiar: conviene confirmarlos antes del viaje.
                </p>
              </div>
              <div className="border-t border-white/20 pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b9d9d6]">Ascender al Pico Bolívar</p>
                <p className="mt-3 leading-7 text-white/78">
                  La cumbre es una actividad de alta montaña: exige preparación física, aclimatación, equipo adecuado y, normalmente, acompañamiento de guías especializados. No es una caminata que se improvise desde Pico Espejo.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal className="lg:pt-14">
            <ol className="border-l border-white/25 pl-8 md:pl-10">
              {routeSteps.map(({ name, text }, index) => (
                <li key={name} className="relative pb-10 last:pb-0">
                  <span className="absolute -left-[calc(2rem+6px)] top-2 h-2.5 w-2.5 rounded-full bg-[#b9d9d6] md:-left-[calc(2.5rem+6px)]" aria-hidden="true" />
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b9d9d6]">
                    <span>Etapa</span> <span>{String(index + 1).padStart(2, "0")}</span>
                  </p>
                  <h3 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight md:text-4xl">{name}</h3>
                  <p className="mt-2 max-w-sm leading-7 text-white/72">{text}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* 06 — Cuándo visitar: composición abierta */}
      <section className="container-page py-20 md:py-28">
        <Reveal className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <EditorialSectionHeading number="06" title="CUÁNDO VISITAR" description="El clima de alta montaña marca las reglas." className="max-w-md" />
          <div className="grid gap-10 md:grid-cols-2">
            <article className="border-t border-[#ddd6ca] pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#247c8f]">Mérida y Pico Espejo</p>
              <h3 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight text-[#17201b]">Cualquier época, con margen</h3>
              <p className="mt-4 leading-7 text-[#59675f]">
                La visita al teleférico puede hacerse a lo largo del año, siempre que el sistema esté operativo. En alta montaña el clima cambia rápidamente: una mañana despejada puede cubrirse de niebla en poco tiempo, así que conviene consultar el pronóstico y el estado del servicio antes de subir.
              </p>
            </article>
            <article className="border-t border-[#ddd6ca] pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#247c8f]">Intentar un ascenso</p>
              <h3 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight text-[#17201b]">Los meses más secos</h3>
              <p className="mt-4 leading-7 text-[#59675f]">
                Los meses más secos, entre enero y marzo, suelen ofrecer mejores ventanas de visibilidad. Aun así, el clima de alta montaña puede cambiar rápidamente, por lo que el plan siempre debe confirmarse con el guía.
              </p>
            </article>
            <p className="border-t border-[#ddd6ca] pt-6 text-lg leading-8 text-[#59675f] md:col-span-2">
              En cualquier caso, la regla es la misma: abrigo, aclimatación y margen de tiempo. Las condiciones de alta montaña no se planifican al minuto.
            </p>
          </div>
        </Reveal>
      </section>

      {/* 07 — Consejos para viajeros */}
      <section className="border-y border-[#e8e1d5] bg-white/75 py-20 md:py-28">
        <div className="container-page">
          <Reveal className="max-w-3xl">
            <EditorialSectionHeading number="07" title="CONSEJOS PARA VIAJEROS" description="La altura cambia el viaje. Prepárate para ella." />
          </Reveal>
          <Reveal className="mt-12 grid gap-x-12 gap-y-9 md:grid-cols-2 lg:grid-cols-3">
            {tips.map(({ icon: Icon, title, text }) => (
              <article key={title} className="flex gap-5 border-t border-[#ddd6ca] pt-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eaf2ed] text-[#247c8f]">
                  <Icon size={18} />
                </span>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold leading-tight text-[#17201b] md:text-[1.75rem]">{title}</h3>
                  <p className="mt-2 max-w-md leading-7 text-[#68726d]">{text}</p>
                </div>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 08 — Preguntas frecuentes */}
      <section className="container-page py-20 md:py-28">
        <Reveal className="max-w-4xl">
          <EditorialSectionHeading number="08" title="PREGUNTAS FRECUENTES" description="Lo que suele preguntarse antes de subir." />
          <div className="mt-10 divide-y divide-[#ddd6ca] border-y border-[#ddd6ca]">
            {faqs.map(({ icon: Icon, question, answer }) => (
              <details key={question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center gap-4 text-[#17201b] [&::-webkit-details-marker]:hidden">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eaf2ed] text-[#247c8f]">
                    <Icon size={18} />
                  </span>
                  <span className="font-[family-name:var(--font-display)] text-2xl font-semibold leading-[0.95] md:text-3xl">{question}</span>
                  <span className="ml-auto text-2xl leading-none text-[#247c8f] transition-transform duration-200 group-open:rotate-45">+</span>
                </summary>
                <p className="ml-[3.25rem] mt-4 max-w-2xl text-[0.98rem] leading-7 text-[#68726d]">{answer}</p>
              </details>
            ))}
          </div>
          <PhotoCredits credits={credits.map(({ file, ...credit }) => ({ ...credit, href: commonsPage(file) }))} className="mt-8" />
        </Reveal>
      </section>
    </main>
  );
}
