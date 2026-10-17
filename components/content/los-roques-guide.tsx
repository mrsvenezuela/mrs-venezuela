import Image from "next/image";
import Link from "next/link";
import { Compass, Plane, ShieldCheck, Sun, Waves } from "lucide-react";
import type { DiscoverItem } from "@/lib/content";
import type { LanguageCode } from "@/lib/i18n";
import { EditorialSectionHeading } from "@/components/content/editorial-section-heading";

const cays = [
  {
    name: "Cayo de Agua",
    image: "/images/cayo-de-agua.jpg",
    paragraphs: [
      "Su banco de arena y sus dos franjas de agua turquesa lo han convertido en una de las imágenes más reconocibles del archipiélago.",
      "La visita suele ser una excursión de día desde Gran Roque. Cuando el istmo está visible, permite caminar entre dos lados del mar en un paisaje abierto y luminoso.",
    ],
  },
  {
    name: "Madrisquí y Francisquí",
    image: "/images/commons/francisqui-lancha.jpg",
    paragraphs: [
      "Son cayos cercanos a Gran Roque y fáciles de incluir en rutas cortas. Sus orillas bajas y aguas claras acompañan jornadas de baño, navegación y descanso.",
      "Francisquí es conocido por su Piscina Natural, una laguna de aguas poco profundas protegida por una barrera de coral.",
    ],
  },
  {
    name: "Crasquí",
    image: "/images/commons/cayo-crasqui-los-roques-archipelago-venezuela.jpg",
    paragraphs: [
      "Una isla alargada de arena clara y agua tranquila, elegida con frecuencia para pasar el día sin prisa.",
      "Sus vientos y su costa forman parte de las rutas asociadas al windsurf y al kitesurf. En la orilla, la experiencia se completa con pausas largas frente al mar.",
    ],
  },
] as const;

const experiences = [
  {
    title: "Esnórquel y buceo",
    text: "Las aguas poco profundas y los arrecifes son parte central de la experiencia marina. Hazlo con operadores autorizados y siguiendo las normas del parque.",
  },
  {
    title: "Navegar entre cayos",
    text: "Las lanchas conectan Gran Roque con las playas. El estado del mar, el clima y la ruta elegida definen cada salida.",
  },
  {
    title: "Kayak y mar abierto",
    text: "En condiciones adecuadas, el kayak permite acercarse a las lagunas y a la escala tranquila del archipiélago.",
  },
  {
    title: "Viento y tabla",
    text: "Crasquí y otras zonas forman parte de las rutas buscadas por quienes practican windsurf o kitesurf.",
  },
] as const;

const tips = [
  {
    title: "Organiza con tiempo",
    text: "Coordina vuelos, alojamiento y lanchas desde Gran Roque antes del viaje.",
  },
  {
    title: "Protección y agua",
    text: "Lleva agua reutilizable, protección solar, gorra y una bolsa seca para lo esencial.",
  },
  {
    title: "Cuida el ecosistema",
    text: "No dejes residuos, no extraigas coral ni conchas y evita tocar la fauna marina.",
  },
  {
    title: "Escucha a los guías",
    text: "Pregunta qué cayos son recomendables según el estado del mar ese día.",
  },
] as const;

const faqs = [
  {
    question: "¿Qué conviene llevar a los cayos?",
    answer: "Agua reutilizable, protección solar, gorra, traje de baño, una camisa ligera y una bolsa seca para proteger teléfono, documentos y cámara.",
  },
  {
    question: "¿Se puede hacer esnórquel o buceo?",
    answer: "Sí. Las aguas poco profundas y los arrecifes hacen del archipiélago un destino buscado para estas actividades. Conviene hacerlo con operadores autorizados.",
  },
  {
    question: "¿Dónde se hospeda la gente?",
    answer: "Gran Roque es la base de alojamiento y desde allí salen las lanchas hacia los cayos.",
  },
] as const;

function CayoImage({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="relative aspect-[4/3] overflow-hidden rounded-[28px] bg-[#eaf2ed]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 46vw"
        className="object-cover"
        unoptimized={src.startsWith("http")}
      />
    </figure>
  );
}

export function LosRoquesGuide({
  item,
  language,
}: {
  item: DiscoverItem;
  language: LanguageCode;
}) {
  return (
    <main className="bg-[#f7f4ec]">
      <section className="relative min-h-[78vh] overflow-hidden text-white">
        <Image src={item.image} alt={item.name} fill priority sizes="100vw" className="object-cover" unoptimized={item.image.startsWith("http")} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/24 to-black/18" />
        <div className="container-page relative z-10 flex min-h-[78vh] items-end pb-20 pt-28">
          <div className="max-w-4xl">
            <Link href="/" className="mb-8 inline-flex rounded-full bg-white/14 px-4 py-2 text-sm font-semibold backdrop-blur-md">Descubre Venezuela</Link>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/76">Archipiélago de Los Roques</p>
            <h1 className="mt-4 font-[family-name:var(--font-display)] text-6xl font-semibold leading-[0.9] md:text-8xl">{item.name}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/86">Un parque marino de cayos, arrecifes y aguas transparentes en el Caribe venezolano.</p>
          </div>
        </div>
      </section>

      <section className="container-page py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="max-w-3xl">
            <EditorialSectionHeading
              number="01"
              title="EL ARCHIPIÉLAGO"
              description="Los Roques: el paraíso coralino del Caribe."
            />
            <div className="mt-8 space-y-5 text-lg leading-8 text-[#59675f]">
              <p>A unos 160 kilómetros al norte de la costa central de Venezuela, Los Roques reúne cayos, bancos de arena y arrecifes dentro de un paisaje donde el mar cambia de tono a cada tramo de navegación.</p>
              <p>Declarado Parque Nacional en 1972, el archipiélago se recorre desde Gran Roque, la isla habitada desde la que salen las lanchas hacia playas abiertas, lagunas bajas y rincones de arrecife.</p>
            </div>
          </div>
          <aside className="border-l border-[#d9d3c7] pl-7 md:pl-9">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#247c8f]">EN EL MAPA</p>
            <p className="mt-5 font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight text-[#0f3d2e]">Más de 50 cayos y alrededor de 300 bancos de arena forman parte de este parque marino.</p>
          </aside>
        </div>
      </section>

      <section className="border-y border-[#e8e1d5] bg-white/75 py-20 md:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <EditorialSectionHeading
              number="02"
              title="HISTORIA Y ORIGEN"
              description="Un paisaje construido por coral, arena y tiempo."
            />
          </div>
          <div className="max-w-3xl space-y-5 text-lg leading-8 text-[#59675f]">
            <p>La forma de Los Roques nace de un sistema de arrecifes, lagunas y sedimentos que protege buena parte de sus aguas interiores. Esa geografía hace que cada cayo tenga una relación distinta con el viento, el mar y la arena.</p>
            <p>Su declaración como Parque Nacional en 1972 consolidó la conservación de un ecosistema marino donde arrecifes, fauna y navegación comparten el mismo espacio. Visitarlo también implica seguir las normas que protegen ese equilibrio.</p>
          </div>
        </div>
      </section>

      <section className="container-page py-20 md:py-28">
        <div className="max-w-3xl">
          <EditorialSectionHeading
            number="03"
            title="CAYOS QUE DEBES CONOCER"
            description="Cada cayo propone una forma distinta de estar en el mar."
          />
          <p className="mt-6 text-lg leading-8 text-[#59675f]">Estos lugares ya forman parte de la guía y ayudan a construir una primera ruta desde Gran Roque.</p>
        </div>
        <div className="mt-14 space-y-16 md:mt-16 md:space-y-24">
          {cays.map((cay, index) => {
            const reverse = index % 2 === 1;
            return (
              <article key={cay.name} className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14">
                <div className={reverse ? "lg:order-2" : undefined}><CayoImage src={cay.image} alt={cay.name + ", Los Roques"} /></div>
                <div className={"max-w-xl " + (reverse ? "lg:order-1 lg:justify-self-end" : "")}>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#247c8f]">0{index + 1}</p>
                  <h3 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-semibold leading-[0.96] text-[#17201b] md:text-5xl">{cay.name}</h3>
                  <div className="mt-6 space-y-4 text-lg leading-8 text-[#59675f]">{cay.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-[#e8e1d5] bg-white/75 py-20 md:py-28">
        <div className="container-page">
          <div className="max-w-3xl">
            <EditorialSectionHeading
              number="04"
              title="QUÉ HACER"
              description="El archipiélago se recorre a otra velocidad."
            />
          </div>
          <div className="mt-12 grid gap-x-14 gap-y-10 md:grid-cols-2">
            {experiences.map(({ title, text }, index) => (
              <article key={title} className="border-t border-[#ddd6ca] pt-5">
                {index % 2 === 0 ? <Waves size={20} className="text-[#247c8f]" /> : <Compass size={20} className="text-[#247c8f]" />}
                <h3 className="mt-5 font-[family-name:var(--font-display)] text-3xl font-semibold text-[#17201b]">{title}</h3>
                <p className="mt-3 max-w-xl leading-7 text-[#68726d]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page grid gap-12 py-20 lg:grid-cols-[0.82fr_1.18fr] lg:items-start md:py-28">
        <div>
          <EditorialSectionHeading
            number="05"
            title="CÓMO LLEGAR"
            description="Cómo llegar a Los Roques."
          />
        </div>
        <div className="max-w-2xl">
          <p className="text-lg leading-8 text-[#59675f]">El acceso habitual es por vuelo hasta Gran Roque. Desde allí se organizan las estadías y los traslados en lancha a los diferentes cayos.</p>
          <div className="mt-8 flex gap-4 border-t border-[#ddd6ca] pt-6">
            <Plane size={21} className="mt-1 shrink-0 text-[#247c8f]" />
            <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#247c8f]">PUNTO DE PARTIDA</p><p className="mt-3 leading-7 text-[#68726d]">Hay vuelos comerciales de alrededor de 35 minutos desde Maiquetía o Margarita hacia la pista costera de Gran Roque.</p></div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#e8e1d5] bg-[#edf4f1] py-20 md:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <EditorialSectionHeading
            number="06"
            title="CUÁNDO VIAJAR"
            description="El Caribe tiene su propio ritmo."
            className="max-w-lg"
          />
          <p className="max-w-2xl text-lg leading-8 text-[#59675f]">Los días despejados y el mar tranquilo ayudan a disfrutar mejor los traslados entre cayos. La experiencia concreta depende del clima, el operador y el tiempo disponible; conviene confirmar la ruta antes de salir. Los vientos también forman parte de la experiencia de deportes como el kitesurf.</p>
        </div>
      </section>

      <section className="container-page py-20 md:py-28">
        <EditorialSectionHeading
          number="07"
          title="ANTES DE VIAJAR"
          description="Prepararse también es cuidar el archipiélago."
          className="max-w-3xl"
        />
        <div className="mt-12 grid gap-x-12 gap-y-8 md:grid-cols-2">
          {tips.map(({ title, text }, index) => (
            <article key={title} className="flex gap-4">
              {index % 2 === 0 ? <Sun size={20} className="mt-1 shrink-0 text-[#247c8f]" /> : <ShieldCheck size={20} className="mt-1 shrink-0 text-[#247c8f]" />}
              <div><h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[#17201b]">{title}</h3><p className="mt-2 leading-7 text-[#68726d]">{text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-page pb-28">
        <div className="max-w-4xl"><EditorialSectionHeading title="PREGUNTAS FRECUENTES" description="Lo útil antes de salir." />
          <div className="mt-10 divide-y divide-[#ddd6ca] border-y border-[#ddd6ca]">
            {faqs.map(({ question, answer }) => (
              <details key={question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center gap-4 text-[#17201b] [&::-webkit-details-marker]:hidden"><span className="font-[family-name:var(--font-display)] text-2xl font-semibold leading-[0.95] md:text-3xl">{question}</span><span className="ml-auto text-2xl leading-none text-[#247c8f] transition-transform duration-200 group-open:rotate-45">+</span></summary>
                <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-[#68726d]">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
