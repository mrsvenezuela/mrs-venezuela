"use client";

import { commonsImage as commons } from "@/lib/commons-image";
import { PhotoCredits } from "@/components/content/photo-credits";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calendar,
  Camera,
  Car,
  CarFront,
  Compass,
  Droplets,
  Footprints,
  Glasses,
  Leaf,
  Map,
  MapPin,
  Mountain,
  Navigation,
  Route,
  ShieldCheck,
  Shirt,
  Smartphone,
  Sparkles,
  Sun,
  Sunrise,
  Trash2,
  Umbrella,
  Wind,
  type LucideIcon,
} from "lucide-react";
import type { DiscoverItem } from "@/lib/content";
import { EditorialSectionHeading } from "@/components/content/editorial-section-heading";

/*
 * Guía editorial de Los Médanos de Coro.
 * Fotografías de Wikimedia Commons con licencias Creative Commons (ver `credits`),
 * enlazadas del mismo modo que el resto de guías del sitio. Cada foto aparece una sola vez.
 */
const commonsPage = (file: string) => `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file)}`;

const photos = {
  sierra: commons("Medanos3.jpg"),
  panorama: commons("Medanos.jpg"),
  hondonada: commons("Medanos de coro - Vista del parque.jpg"),
  cresta: commons("Medanos6.jpg"),
  carretera: commons("Gran duna en los Medanos de Coro.JPG"),
  subida: commons("Medanos8.jpg"),
  oasis: commons("Casi un Oasis.JPG"),
  entrada: commons("Entrada al Parque Nacional Medanos de Coro..JPG"),
  atardecer: commons("Medanos de Coro. Estado, Falcon..jpg"),
  huellas: commons("PASOS EN LOS MEDANOS DE CORO.jpg"),
};

const credits = [
  { file: "Medanos3.jpg", title: "Dunas y sierra", author: "Guanjarcia", license: "CC BY-SA 3.0" },
  { file: "Medanos.jpg", title: "Panorámica de dunas", author: "Guanjarcia", license: "CC BY-SA 3.0" },
  { file: "Medanos de coro - Vista del parque.jpg", title: "Hondonada modelada por el viento", author: "Nehe009", license: "CC BY-SA 4.0" },
  { file: "Medanos6.jpg", title: "Cresta de duna", author: "Guanjarcia", license: "CC BY-SA 3.0" },
  { file: "Gran duna en los Medanos de Coro.JPG", title: "Dunas desde la carretera", author: "Juan Carlo Castillo Ortega", license: "CC BY-SA 3.0" },
  { file: "Medanos8.jpg", title: "Subiendo una duna", author: "Guanjarcia", license: "CC BY-SA 3.0" },
  { file: "Casi un Oasis.JPG", title: "Casi un oasis", author: "Ojza", license: "CC BY-SA 3.0" },
  { file: "Entrada al Parque Nacional Medanos de Coro..JPG", title: "Entrada al parque", author: "Carlos E. Perez S.L", license: "CC BY-SA 4.0" },
  { file: "Medanos de Coro. Estado, Falcon..jpg", title: "Atardecer en los Médanos", author: "David A. Arroyo C.", license: "CC BY-SA 3.0" },
  { file: "PASOS EN LOS MEDANOS DE CORO.jpg", title: "Huellas en la arena", author: "Jhonny Catanho", license: "CC BY-SA 3.0" },
];

const historyParagraphs = [
  "Los Médanos de Coro se levantan sobre el istmo que une la tierra firme con la península de Paraguaná, justo al norte de Santa Ana de Coro. Es el paisaje de dunas más extenso de Venezuela y una rareza en el Caribe: arena dorada a pocos kilómetros del mar.",
  "La arena procede de la costa. Los vientos alisios, que soplan desde el este con gran constancia, recogen los sedimentos que el mar deja en el istmo y los acumulan en dunas que alcanzan alrededor de 30 metros de altura.",
  "Por eso el paisaje nunca está quieto. El clima árido y la escasa vegetación permiten que la arena avance sin freno: las dunas se desplazan, se deshacen y vuelven a formarse con el paso del viento.",
  "Para proteger este ecosistema frágil, en 1974 se creó el Parque Nacional Médanos de Coro, con más de 91.000 hectáreas que abarcan dunas, costa y vegetación seca.",
  "A un paso está Coro, cuyo centro histórico fue declarado Patrimonio de la Humanidad por la UNESCO en 1993. Pocas ciudades tienen un desierto en su puerta: esa cercanía convierte a los Médanos en un paisaje singular dentro de Venezuela.",
];

const quickFacts: Array<{ icon: LucideIcon; label: string; value: string }> = [
  { icon: MapPin, label: "Ubicación", value: "Istmo de Médanos, al norte de Santa Ana de Coro" },
  { icon: Map, label: "Estado", value: "Falcón" },
  { icon: Mountain, label: "Tipo de destino", value: "Parque nacional de dunas y paisaje desértico" },
  { icon: Sparkles, label: "Principal atractivo", value: "Dunas de arena dorada que cambian con el viento" },
  { icon: Sunrise, label: "Mejor momento para visitar", value: "Primeras horas de la mañana y final de la tarde" },
  { icon: CarFront, label: "Forma de acceso", value: "Por carretera desde Coro, en la vía hacia Paraguaná" },
];

const landscape = [
  {
    title: "Un desierto que camina",
    paragraphs: [
      "Los vientos alisios desplazan continuamente la arena y modifican el perfil de las dunas. Por eso cada visita puede mostrar un paisaje distinto, incluso en zonas conocidas del parque.",
      "La arena sube por la cara suave de cada duna y cae por la ladera empinada. Grano a grano, la cresta se traslada en la dirección del viento.",
    ],
    image: photos.hondonada,
    alt: "Hondonada de arena modelada por el viento en el Parque Nacional Médanos de Coro",
    position: "center 60%",
  },
  {
    title: "Montañas de arena",
    paragraphs: [
      "Las dunas nacen de la acumulación de sedimentos movidos por el viento y las corrientes marinas. Algunas alcanzan alrededor de 30 metros, y al final de la tarde la luz transforma la arena en tonos dorados, anaranjados y rojizos.",
      "Vistas desde arriba, las crestas se suceden como olas detenidas. Entre ellas aparecen hondonadas de arena lisa donde el viento borra las huellas en pocas horas.",
    ],
    image: photos.cresta,
    alt: "Cresta de una gran duna contra el cielo azul en los Médanos de Coro",
    position: "center 62%",
  },
  {
    title: "La carretera entre las dunas",
    paragraphs: [
      "El parque es atravesado por la vía hacia Paraguaná. La arena puede invadir sus márgenes y recuerda que este no es un paisaje fijo, sino un territorio modelado por el viento.",
      "Desde el asfalto, las dunas aparecen a ambos lados como un mar de arena que cambia de forma con cada ráfaga.",
    ],
    image: photos.carretera,
    alt: "Dunas vistas desde la carretera que atraviesa el Parque Nacional Médanos de Coro",
    position: "center 72%",
  },
];

const landscapeData: Array<{ icon: LucideIcon; label: string; value: string }> = [
  { icon: Wind, label: "Viento", value: "Alisios del este, constantes y secos" },
  { icon: Mountain, label: "Altura", value: "Dunas de alrededor de 30 metros" },
  { icon: Footprints, label: "Movimiento", value: "Continuo: la arena avanza y borra las huellas" },
];

const experiences = [
  {
    title: "Subir una duna",
    text: "Desde arriba, la arena y el horizonte se extienden sin una forma fija: cada cresta deja ver otra parte del parque. Es la manera más simple de entender la escala del lugar.",
  },
  {
    title: "Caminar entre las dunas",
    text: "Caminar descalzo por la arena fina, bajar por las laderas y seguir las líneas que deja el viento forma parte de la experiencia. Las actividades de arena dependen de las condiciones del día y de los operadores autorizados.",
  },
  {
    title: "Mirar cómo trabaja el viento",
    text: "Las ráfagas dibujan líneas nuevas, desplazan arena fina y cambian lentamente los perfiles que se ven a lo lejos. Basta detenerse unos minutos para verlo.",
  },
  {
    title: "Fotografiar el paisaje",
    text: "Las sombras del relieve, las crestas afiladas y el contraste con el cielo hacen de los Médanos uno de los paisajes más fotogénicos del país. La luz rasante de la mañana y de la tarde marca cada textura.",
  },
  {
    title: "Esperar el amanecer o el final de la tarde",
    text: "Cuando baja el sol, las dunas ganan contraste y pasan de dorado suave a tonos más intensos. Al amanecer, la arena todavía está fresca y el parque se siente en silencio.",
  },
];

const curiosities = [
  {
    tag: "Relato popular",
    title: "El cují",
    text: "En las zonas bajas crecen cujíes con ramas moldeadas por el viento. Según la tradición oral de la región, sus raíces conocen el camino hacia la humedad escondida bajo la arena.",
  },
  {
    tag: "Detalle",
    title: "Arena y luz",
    text: "La textura fina de la arena hace que el recorrido se sienta diferente según la hora. Temprano y al final de la tarde, la luz rasante dibuja cada ondulación del terreno.",
  },
  {
    tag: "Geografía",
    title: "Un desierto junto al mar",
    text: "A pocos kilómetros de las dunas está el Caribe. Esa cercanía explica el origen de la arena y la constancia del viento que la mueve.",
  },
];

const routes: Array<{ icon: LucideIcon; title: string; text: string }> = [
  {
    icon: MapPin,
    title: "Desde Coro",
    text: "La ciudad concentra hospedaje y servicios. Desde el centro, las dunas quedan a pocos minutos hacia el norte, siguiendo la salida hacia Paraguaná.",
  },
  {
    icon: CarFront,
    title: "Vehículo particular",
    text: "Se toma la vía que cruza el istmo hacia la península. La entrada habitual al parque está a un lado de la carretera, en la zona de dunas más cercana a la ciudad.",
  },
  {
    icon: Car,
    title: "Taxi",
    text: "Una opción cómoda para un recorrido corto. Conviene acordar la espera o la hora de regreso antes de salir.",
  },
  {
    icon: Compass,
    title: "Excursión organizada",
    text: "Operadores locales ofrecen recorridos guiados que combinan las dunas con el centro histórico de Coro o con la península de Paraguaná.",
  },
  {
    icon: Route,
    title: "La vía hacia Paraguaná",
    text: "La carretera que atraviesa el parque es la misma que conecta Coro con Paraguaná. Quien viaja hacia la península cruza los Médanos de camino.",
  },
];

const conditions: Array<{ icon: LucideIcon; label: string; text: string }> = [
  {
    icon: Sun,
    label: "Sol",
    text: "A mediodía cae vertical y la arena refleja la luz. Es el tramo más duro para caminar y el menos favorable para fotografiar.",
  },
  {
    icon: Wind,
    label: "Viento",
    text: "Sopla con constancia y levanta arena muy fina. Protege los ojos, el teléfono y la cámara.",
  },
  {
    icon: Footprints,
    label: "Arena",
    text: "Se calienta rápido con el sol. Temprano y al atardecer se camina mejor, incluso descalzo.",
  },
];

const tips: Array<{ icon: LucideIcon; title: string; text: string }> = [
  { icon: Shirt, title: "Ropa ligera", text: "Tejidos frescos y de manga larga ayudan con el sol y con el viento." },
  { icon: Droplets, title: "Agua", text: "Lleva más de la que crees necesitar. En las dunas no hay sombra." },
  { icon: Sun, title: "Protector solar", text: "Aplícalo antes de entrar y repítelo durante la visita: la arena refleja la luz." },
  { icon: Glasses, title: "Lentes de sol", text: "Protegen del reflejo y de la arena fina que levanta el viento." },
  { icon: Umbrella, title: "Sombrero", text: "Una gorra o un sombrero con ala marca la diferencia a mediodía." },
  { icon: Smartphone, title: "Protege teléfono y cámara", text: "Guárdalos en una bolsa hermética o funda cerrada cuando no los uses." },
  { icon: Leaf, title: "Respeta la vegetación", text: "Los cujíes y la vegetación baja fijan la arena. Camina alrededor, no por encima." },
  { icon: Trash2, title: "No dejes residuos", text: "Todo lo que entra sale contigo. El viento dispersa cualquier cosa que quede." },
];

const faqs: Array<{ icon: LucideIcon; question: string; answer: string }> = [
  {
    icon: Navigation,
    question: "¿Cómo se llega a los Médanos de Coro?",
    answer: "Santa Ana de Coro funciona como la base más práctica. Desde la ciudad se puede llegar en vehículo particular, taxi o con un recorrido organizado, según el plan de visita.",
  },
  {
    icon: MapPin,
    question: "¿Está lejos de Santa Ana de Coro?",
    answer: "No. El parque comienza en el borde norte de la ciudad, junto a la vía hacia Paraguaná, por lo que la visita puede resolverse en pocas horas.",
  },
  {
    icon: Calendar,
    question: "¿Cuál es el mejor momento para visitarlos?",
    answer: "Las primeras horas de la mañana y el final de la tarde suelen ser más agradables por la luz y por una temperatura menos intensa sobre la arena.",
  },
  {
    icon: Camera,
    question: "¿Cómo proteger el teléfono o la cámara?",
    answer: "El viento puede levantar arena muy fina. Cuando no los uses, guarda teléfono, cámara y lentes en una bolsa hermética o funda cerrada para reducir el riesgo de rayones.",
  },
  {
    icon: ShieldCheck,
    question: "¿Qué conviene llevar?",
    answer: "Ropa ligera, agua, protección solar, lentes de sol y sombrero. Camina con respeto por las dunas y sus zonas de vegetación, y evita dejar residuos.",
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
    <figure className={`relative overflow-hidden rounded-[28px] bg-[#efe5d0] ${className}`}>
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

export function MedanosGuide({ item }: { item: DiscoverItem }) {
  return (
    <main className="bg-[#f7f4ec]">
      {/* Hero (sin cambios respecto a la versión anterior de la página) */}
      <section className="relative min-h-[78vh] overflow-hidden text-white">
        <Image
          src={item.image}
          alt={item.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center" }}
          unoptimized={item.image.startsWith("http")}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/24 to-black/18" />
        <div className="container-page relative z-10 flex min-h-[78vh] items-end pb-20 pt-28">
          <div className="max-w-4xl">
            <Link href="/" className="mb-8 inline-flex rounded-full bg-white/14 px-4 py-2 text-sm font-semibold backdrop-blur-md">
              Descubre Venezuela
            </Link>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/76">{item.kicker}</p>
            <h1 className="mt-4 font-[family-name:var(--font-display)] text-6xl font-semibold leading-[0.9] md:text-8xl">{item.name}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/86">{item.description}</p>
          </div>
        </div>
      </section>

      {/* 01 — Historia y origen */}
      <section className="container-page py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-20">
          <Reveal className="max-w-3xl">
            <EditorialSectionHeading number="01" title="HISTORIA Y ORIGEN" description="Un paisaje escrito por el viento." />
            <div className="mt-9 space-y-5 text-lg leading-8 text-[#59675f]">
              {historyParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
          <Reveal className="lg:pt-12">
            <Photo
              src={photos.sierra}
              alt="Dunas, ondas de arena y la sierra al fondo en los Médanos de Coro"
              position="center 55%"
              className="aspect-[4/3] lg:aspect-[4/5]"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
            <aside className="mt-8 border-l border-[#d9cdb3] pl-6 md:pl-7">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#247c8f]">En el mapa</p>
              <p className="mt-4 font-[family-name:var(--font-display)] text-2xl font-semibold leading-tight text-[#0f3d2e] md:text-3xl">
                El parque ocupa el istmo de Médanos, la franja de tierra que conecta Coro con la península de Paraguaná.
              </p>
            </aside>
          </Reveal>
        </div>
      </section>

      {/* 02 — Información rápida */}
      <section className="border-y border-[#e3d9c4] bg-[#efe5d0]/45">
        <div className="container-page py-16 md:py-20">
          <Reveal className="grid gap-10 lg:grid-cols-[0.62fr_1.38fr] lg:gap-16">
            <EditorialSectionHeading number="02" title="INFORMACIÓN RÁPIDA" description="Lo esencial antes de pisar la arena." className="max-w-sm" />
            <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              {quickFacts.map(({ icon: Icon, label, value }) => (
                <div key={label} className="border-t border-[#d9cdb3] pt-5">
                  <div className="flex items-center gap-3">
                    <Icon size={18} className="shrink-0 text-[#247c8f]" />
                    <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-[#247c8f]">{label}</dt>
                  </div>
                  <dd className="mt-3 font-[family-name:var(--font-display)] text-2xl font-semibold leading-tight text-[#17201b]">{value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* 03 — El paisaje de los Médanos */}
      <section className="container-page pt-20 md:pt-28">
        <Reveal className="max-w-3xl">
          <EditorialSectionHeading number="03" title="EL PAISAJE DE LOS MÉDANOS" description="Un territorio que cambia con el viento." />
        </Reveal>
        <Reveal className="mt-12 md:mt-14">
          <Photo
            src={photos.panorama}
            alt="Panorámica de dunas doradas bajo un cielo con nubes en los Médanos de Coro"
            position="center 62%"
            className="aspect-[16/10] rounded-[32px] md:aspect-[21/9]"
            sizes="100vw"
          />
          <p className="mt-4 max-w-2xl px-1 text-sm leading-6 text-[#7b837f]">
            Las crestas cambian de forma de un día a otro: ninguna visita repite el mismo paisaje.
          </p>
        </Reveal>

        <div className="mt-16 space-y-16 md:mt-24 md:space-y-24">
          {landscape.map((block, index) => {
            const reverse = index % 2 === 1;
            return (
              <Reveal key={block.title}>
                <article className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
                  <div className={reverse ? "lg:order-2" : undefined}>
                    <Photo
                      src={block.image}
                      alt={block.alt}
                      position={block.position}
                      className="aspect-[4/3]"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <div className={`max-w-xl ${reverse ? "lg:order-1 lg:justify-self-end" : ""}`}>
                    <h3 className="font-[family-name:var(--font-display)] text-4xl font-semibold leading-[0.96] text-[#17201b] md:text-5xl">{block.title}</h3>
                    <div className="mt-6 space-y-4 text-lg leading-8 text-[#59675f]">
                      {block.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}

          <Reveal>
            <dl className="grid gap-px overflow-hidden rounded-[28px] border border-[#e3d9c4] bg-[#e3d9c4] md:grid-cols-3">
              {landscapeData.map(({ icon: Icon, label, value }) => (
                <div key={label} className="bg-[#fbf8f1] p-6 md:p-8">
                  <Icon size={20} className="text-[#247c8f]" />
                  <dt className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#247c8f]">{label}</dt>
                  <dd className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold leading-tight text-[#17201b]">{value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* 04 — Experiencias */}
      <section className="container-page py-20 md:py-28">
        <Reveal className="max-w-3xl">
          <EditorialSectionHeading number="04" title="EXPERIENCIAS" description="Cinco maneras de vivir las dunas." />
        </Reveal>
        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <Photo
              src={photos.subida}
              alt="Dos personas suben una duna dejando huellas en los Médanos de Coro"
              position="center 45%"
              className="aspect-[4/3] lg:aspect-[4/5]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </Reveal>
          <Reveal>
            <ol className="divide-y divide-[#e3d9c4] border-y border-[#e3d9c4]">
              {experiences.map(({ title, text }, index) => (
                <li key={title} className="grid gap-3 py-7 md:grid-cols-[3.5rem_1fr] md:gap-4">
                  <span className="font-[family-name:var(--font-display)] text-2xl font-semibold leading-none text-[#247c8f]">0{index + 1}</span>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-3xl font-semibold leading-[0.96] text-[#17201b] md:text-4xl">{title}</h3>
                    <p className="mt-3 max-w-xl leading-7 text-[#68726d]">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* 05 — Curiosidades (menor protagonismo) */}
      <section className="border-y border-[#e3d9c4] bg-[#efe5d0]/45 py-16 md:py-20">
        <Reveal className="container-page grid gap-10 lg:grid-cols-[0.55fr_1.45fr] lg:gap-16">
          <div className="max-w-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#247c8f] md:text-sm">05</p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(1.9rem,3vw,2.9rem)] font-semibold leading-[0.96] text-[#17201b]">CURIOSIDADES DE LAS DUNAS</h2>
            <p className="mt-4 text-base leading-7 text-[#68726d]">Pequeños detalles que se descubren caminando.</p>
            <Photo
              src={photos.oasis}
              alt="Pequeña laguna entre dunas y vegetación en los Médanos de Coro"
              position="center 55%"
              className="mt-8 aspect-[3/2] rounded-[24px]"
              sizes="(max-width: 1024px) 100vw, 28vw"
            />
          </div>
          <div className="grid gap-x-10 gap-y-8 md:grid-cols-3">
            {curiosities.map(({ tag, title, text }) => (
              <article key={title} className="border-t border-[#d9cdb3] pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#247c8f]">{tag}</p>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-semibold leading-tight text-[#17201b] md:text-[1.75rem]">{title}</h3>
                <p className="mt-3 text-[0.96rem] leading-7 text-[#68726d]">{text}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 06 — Cómo llegar */}
      <section className="container-page py-20 md:py-28">
        <Reveal className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <div>
            <EditorialSectionHeading number="06" title="CÓMO LLEGAR" description="Santa Ana de Coro es el punto de partida." />
            <p className="mt-8 max-w-md text-lg leading-8 text-[#59675f]">
              Santa Ana de Coro funciona como la base más práctica. El parque comienza en el borde norte de la ciudad, así que la visita puede organizarse en unas horas, sin grandes traslados.
            </p>
            <Photo
              src={photos.entrada}
              alt="Sendero de arena entre cujíes en la entrada del Parque Nacional Médanos de Coro"
              position="center 60%"
              className="mt-10 aspect-[4/3]"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
          <div className="divide-y divide-[#e3d9c4] border-y border-[#e3d9c4] lg:self-start">
            {routes.map(({ icon: Icon, title, text }) => (
              <div key={title} className="grid gap-3 py-6 sm:grid-cols-[2.75rem_1fr] sm:gap-4">
                <Icon size={20} className="mt-1 text-[#247c8f]" />
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold leading-tight text-[#17201b] md:text-3xl">{title}</h3>
                  <p className="mt-2 max-w-xl leading-7 text-[#68726d]">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 07 — Mejor época para visitar (banda de luz sobre fotografía de atardecer) */}
      <section className="relative overflow-hidden text-white">
        <Image
          src={photos.atardecer}
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 45%" }}
          unoptimized
        />
        <div className="absolute inset-0 bg-[#1c120a]/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1c120a]/85 via-[#1c120a]/45 to-[#1c120a]/20" />
        <div className="container-page relative z-10 py-20 md:py-28">
          <Reveal className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#eedcb4] md:text-sm">07</p>
              <h2 className="mt-4 max-w-4xl font-[family-name:var(--font-display)] text-[clamp(2.3rem,4.4vw,4.5rem)] font-semibold leading-[0.96]">MEJOR ÉPOCA PARA VISITAR</h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/72 md:text-lg md:leading-8">No depende del mes, sino de la hora.</p>
              <p className="mt-8 max-w-xl text-lg leading-8 text-white/88">
                Las primeras horas de la mañana y el final de la tarde suelen ser más agradables por la luz y por una temperatura menos intensa sobre la arena. A mediodía el desierto se vive de otra manera: más duro, más brillante y sin sombra.
              </p>
              <p className="mt-5 max-w-xl leading-7 text-white/70">Antes de salir, revisa el pronóstico del día y lleva agua suficiente.</p>
            </div>
            <dl className="grid gap-px overflow-hidden rounded-[28px] border border-white/15 bg-white/15 sm:grid-cols-3 lg:grid-cols-1">
              {conditions.map(({ icon: Icon, label, text }) => (
                <div key={label} className="bg-[#1c120a]/60 p-6 backdrop-blur-sm md:p-7">
                  <Icon size={20} className="text-[#eedcb4]" />
                  <dt className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#eedcb4]">{label}</dt>
                  <dd className="mt-2 leading-7 text-white/82">{text}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* 08 — Consejos para viajeros */}
      <section className="container-page py-20 md:py-28">
        <Reveal className="max-w-3xl">
          <EditorialSectionHeading number="08" title="CONSEJOS PARA VIAJEROS" description="Preparar bien una visita al desierto." />
        </Reveal>
        <Reveal className="mt-12">
          <Photo
            src={photos.huellas}
            alt="Huellas sobre la arena de una duna en los Médanos de Coro"
            position="center 50%"
            className="aspect-[16/10] md:aspect-[21/9]"
            sizes="100vw"
          />
        </Reveal>
        <Reveal className="mt-12 grid gap-x-12 gap-y-8 md:grid-cols-2">
          {tips.map(({ icon: Icon, title, text }) => (
            <article key={title} className="flex gap-5 border-t border-[#e3d9c4] pt-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#efe5d0] text-[#247c8f]">
                <Icon size={18} />
              </span>
              <div>
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold leading-tight text-[#17201b] md:text-[1.75rem]">{title}</h3>
                <p className="mt-2 max-w-md leading-7 text-[#68726d]">{text}</p>
              </div>
            </article>
          ))}
        </Reveal>
      </section>

      {/* 09 — Preguntas frecuentes */}
      <section className="container-page pb-24 md:pb-32">
        <Reveal className="max-w-4xl">
          <EditorialSectionHeading number="09" title="PREGUNTAS FRECUENTES" description="Antes de salir hacia las dunas." />
          <div className="mt-10 divide-y divide-[#e3d9c4] border-y border-[#e3d9c4]">
            {faqs.map(({ icon: Icon, question, answer }) => (
              <details key={question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center gap-4 text-[#17201b] [&::-webkit-details-marker]:hidden">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#efe5d0] text-[#247c8f]">
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
