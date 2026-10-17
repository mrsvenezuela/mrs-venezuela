import { commonsImage as commonsFile } from "@/lib/commons-image";
import {
  Beef,
  Binoculars,
  BookOpen,
  Building2,
  Flower2,
  Landmark,
  Mountain,
  Palmtree,
  Trees,
  Waves,
} from "lucide-react";

export type ContentKind =
  | "estado"
  | "ciudad"
  | "parque-nacional"
  | "playa"
  | "montana"
  | "animal"
  | "planta"
  | "comida"
  | "historia"
  | "articulo";

export type DiscoverItem = {
  kind: ContentKind;
  slug: string;
  name: string;
  kicker: string;
  description: string;
  /** Descripción para buscadores cuando `description` es demasiado corta. */
  seoDescription?: string;
  /** "" = sin foto verificada: quien pinte la tarjeta muestra un marcador neutro. */
  image: string;
  /** Texto alternativo propio cuando la foto no se describe con el nombre. */
  imageAlt?: string;
  region?: string;
  readTime?: string;
  nearby?: string[];
  places?: number;
};


const venezuelaImages = {
  angelFalls: "/images/salto-angel.jpg",
  canaima: "/images/salto-angel.jpg",
  cayoAgua: "/images/cayo-de-agua.jpg",
  losRoques: commonsFile("Village Gran Roque.jpg"),
  morrocoy: "/images/playa-el-agua.jpg",
  cayoSombrero: "/images/cayo-sombrero.jpg",
  playaElAgua: "/images/playa-el-agua.jpg",
  playaElYaque: "/images/playa-el-yaque.jpg",
  mochima: "/images/mochima.jpg",
  choroni: "/images/choroni.jpg",
  cuyagua: "/images/cuyagua.jpg",
  bahiaDeCata: "/images/bahia-de-cata.jpg",
  puertoCabello: commonsFile("Vista al Mar Malencón de Puerto Cabello.jpg"),
  islaDeCoche: "/images/isla-de-coche.jpg",
  patanemo: "/images/patanemo-hero.png",
  playaMedina: commonsFile("Playa Medina Peninsula Paria.jpg"),
  islaLaTortuga: "/images/isla-la-tortuga-turquesa.jpg",
  chichiriviche: commonsFile("Bahía Boulevar Chichiriviche 01.jpg"),
  macuto: commonsFile("Macuto (2023).jpg"),
  roraima: "/images/roraima.jpg",
  picoBolivar:
    "/images/commons/pico-bolivar-al-desnudo-en-dia-soleado-y-despejado.jpg",
  avila: "/images/caracas-avila.jpg",
  orinocoDelta: "/images/delta-orinoco.jpg",
  medanos: "/images/medanos-coro.jpg",
  merida: "/images/merida-pico-espejo.png",
  llano: "/images/llanos.jpg",
  margarita: "/images/playa-el-agua.jpg",
  turpial: "/images/turpial.jpg",
  orchid: "/images/delta-orinoco.jpg",
  arepa: "/images/arepa.jpg",
  culture: "/images/caracas-avila.jpg",
  history: "/images/caracas-avila.jpg",
};

export const heroImage =
  venezuelaImages.angelFalls;

export const heroSlides = [
  {
    src: venezuelaImages.angelFalls,
    alt: "Salto Ángel en Canaima",
    label: "Salto Ángel",
    location: "Parque Nacional Canaima",
  },
  {
    src: venezuelaImages.cayoAgua,
    alt: "Cayo de Agua en Los Roques",
    label: "Los Roques",
    location: "Cayo de Agua",
  },
  {
    src: venezuelaImages.medanos,
    alt: "Médanos de Coro",
    label: "Médanos de Coro",
    location: "Falcón",
  },
  {
    src: venezuelaImages.merida,
    alt: "Pico Espejo en Mérida",
    label: "Mérida",
    location: "Pico Espejo",
  },
  {
    src: venezuelaImages.avila,
    alt: "Caracas y El Ávila",
    label: "Caracas",
    location: "El Ávila",
  },
];

export const venezuelaMapImage =
  "/images/mapa-venezuela.jpg";

/*
 * image = la foto verificada del hero de cada guía (auditoría de septiembre de 2026), o null si el
 * estado aún no tiene una foto correcta. Nunca una foto de otro estado: la usan las tarjetas de
 * /estados y de la portada, el buscador y los metadatos.
 */
export const states: Array<{ name: string; slug: string; x: number; y: number; places: number; image: string | null; imageAlt?: string }> = [
  { name: "Amazonas", slug: "amazonas", x: 49, y: 79, places: 42, image: "/images/commons/amazonas-puerto-ayacucho.jpg" },
  { name: "Anzoátegui", slug: "anzoategui", x: 67, y: 47, places: 31, image: "/images/commons/anzoategui-puerto-la-cruz.jpg" },
  { name: "Apure", slug: "apure", x: 39, y: 62, places: 27, image: "/images/commons/apure-san-fernando.jpg" },
  { name: "Aragua", slug: "aragua", x: 45, y: 38, places: 35, image: "/images/commons/aragua-maracay.jpg" },
  { name: "Barinas", slug: "barinas", x: 31, y: 55, places: 24, image: "/images/commons/barinas-ciudad.jpg" },
  { name: "Bolívar", slug: "bolivar", x: 66, y: 68, places: 58, image: "/images/commons/ciudad-bolivar-vista-aerea.jpg" },
  { name: "Carabobo", slug: "carabobo", x: 39, y: 37, places: 29, image: "/images/commons/carabobo-valencia.jpg" },
  { name: "Cojedes", slug: "cojedes", x: 38, y: 45, places: 18, image: "/images/commons/cojedes-san-carlos.jpg" },
  { name: "Delta Amacuro", slug: "delta-amacuro", x: 84, y: 50, places: 26, image: "/images/commons/delta-tucupita.jpg" },
  { name: "Distrito Capital", slug: "distrito-capital", x: 50, y: 34, places: 21, image: "/images/commons/caracas-centro-desde-torre-ministerial.jpg", imageAlt: "El centro de Caracas visto desde lo alto, con sus edificios apretados y la sierra del Waraira Repano (Ávila) cerrando el valle, Distrito Capital" },
  { name: "Falcón", slug: "falcon", x: 31, y: 25, places: 37, image: "/images/commons/falcon-coro.jpg" },
  { name: "Guárico", slug: "guarico", x: 49, y: 50, places: 22, image: "/images/commons/guarico-san-juan-de-los-morros.jpg" },
  { name: "Lara", slug: "lara", x: 28, y: 34, places: 28, image: "/images/commons/lara-barquisimeto.jpg" },
  { name: "Mérida", slug: "merida", x: 18, y: 49, places: 39, image: "/images/commons/merida-ciudad.jpg" },
  { name: "Miranda", slug: "miranda", x: 53, y: 37, places: 33, image: "/images/commons/miranda-los-teques.jpg", imageAlt: "Diablos Danzantes de Yare con sus trajes rojos por una calle de San Francisco de Yare durante el Corpus Christi, estado Miranda" },
  { name: "Monagas", slug: "monagas", x: 75, y: 45, places: 23, image: "/images/commons/monagas-maturin.jpg" },
  { name: "Nueva Esparta", slug: "nueva-esparta", x: 73, y: 27, places: 34, image: "/images/commons/nueva-esparta-la-asuncion.jpg" },
  { name: "Portuguesa", slug: "portuguesa", x: 33, y: 45, places: 20, image: "/images/commons/portuguesa-guanare.jpg" },
  { name: "Sucre", slug: "sucre", x: 81, y: 35, places: 41, image: "/images/commons/sucre-cumana.jpg" },
  { name: "Táchira", slug: "tachira", x: 16, y: 57, places: 25, image: "/images/commons/tachira-san-cristobal-panoramica.jpg" },
  { name: "Trujillo", slug: "trujillo", x: 23, y: 45, places: 19, image: "/images/commons/trujillo-valera.jpg" },
  { name: "La Guaira", slug: "la-guaira", x: 48, y: 31, places: 17, image: venezuelaImages.macuto },
  { name: "Yaracuy", slug: "yaracuy", x: 34, y: 36, places: 21, image: "/images/commons/yaracuy-san-felipe.jpg" },
  { name: "Zulia", slug: "zulia", x: 15, y: 31, places: 36, image: "/images/commons/zulia-maracaibo.jpg" },
];

export const featured: DiscoverItem[] = [
  {
    kind: "parque-nacional",
    slug: "canaima",
    name: "Parque Nacional Canaima",
    kicker: "Tepuyes y agua",
    description: "Un territorio inmenso de mesetas ancestrales, ríos color ámbar y saltos que parecen venir de otro tiempo.",
    image: venezuelaImages.angelFalls,
    region: "Bolívar",
    readTime: "7 min",
  },
  {
    kind: "playa",
    slug: "los-roques",
    name: "Los Roques",
    kicker: "Caribe puro",
    description: "Un archipiélago de cayos, arrecifes y lagunas turquesa donde el Caribe se siente inmenso y sereno.",
    image: venezuelaImages.losRoques,
    region: "Los Roques",
    readTime: "5 min",
  },
  {
    kind: "parque-nacional",
    slug: "medanos-de-coro",
    name: "Los Médanos de Coro",
    kicker: "Desierto caribeño",
    description: "Dunas doradas junto al Caribe: un paisaje cambiante, luminoso y único en Venezuela.",
    image: venezuelaImages.medanos,
    region: "Falcón",
    readTime: "5 min",
  },
  {
    kind: "montana",
    slug: "pico-bolivar",
    name: "Pico Bolívar",
    kicker: "Altura andina",
    description: "La cima simbólica de los Andes venezolanos, rodeada de páramos, lagunas frías y caminos memorables.",
    image: venezuelaImages.picoBolivar,
    region: "Mérida",
    readTime: "6 min",
  },
];

export const additionalDestinations: DiscoverItem[] = [
  {
    kind: "playa",
    slug: "cayo-sombrero",
    name: "Cayo Sombrero",
    kicker: "Morrocoy esencial",
    description: "Arena clara, palmeras y aguas tranquilas dentro del Parque Nacional Morrocoy.",
    image: venezuelaImages.cayoSombrero,
    region: "Falcón",
    readTime: "5 min",
  },
  {
    kind: "playa",
    slug: "playa-el-agua",
    name: "Playa El Agua",
    kicker: "Margarita clásica",
    description: "Una de las playas más famosas de Margarita, amplia, turística y frente al Caribe oriental.",
    image: venezuelaImages.playaElAgua,
    region: "Nueva Esparta",
    readTime: "5 min",
  },
  {
    kind: "playa",
    slug: "playa-el-yaque",
    name: "Playa El Yaque",
    kicker: "Viento y Caribe",
    description: "Una playa margariteña famosa por el windsurf, el kitesurf y su ambiente relajado.",
    image: venezuelaImages.playaElYaque,
    region: "Nueva Esparta",
    readTime: "5 min",
  },
  {
    kind: "playa",
    slug: "mochima",
    name: "Mochima",
    kicker: "Parque marino",
    description: "Islas, ensenadas y playas de agua calma dentro de uno de los paisajes marinos más conocidos del oriente.",
    image: venezuelaImages.mochima,
    region: "Sucre y Anzoátegui",
    readTime: "6 min",
  },
  {
    kind: "playa",
    slug: "choroni",
    name: "Choroní",
    kicker: "Costa de Aragua",
    description: "Pueblo costero, montaña tropical y playa con mucha identidad venezolana.",
    image: venezuelaImages.choroni,
    region: "Aragua",
    readTime: "5 min",
  },
  {
    kind: "playa",
    slug: "cuyagua",
    name: "Cuyagua",
    kicker: "Surf y naturaleza",
    description: "Una playa amplia de Aragua, querida por surfistas y viajeros de aventura.",
    image: venezuelaImages.cuyagua,
    region: "Aragua",
    readTime: "5 min",
  },
  {
    kind: "playa",
    slug: "bahia-de-cata",
    name: "Bahía de Cata",
    kicker: "Bahía tropical",
    description: "Una de las bahías más conocidas de la costa central, rodeada por montañas verdes.",
    image: venezuelaImages.bahiaDeCata,
    region: "Aragua",
    readTime: "5 min",
  },
  {
    kind: "playa",
    slug: "puerto-cabello",
    name: "Puerto Cabello",
    kicker: "Costa histórica",
    description: "Ciudad costera de Carabobo, con malecón, historia y playas cercanas.",
    image: venezuelaImages.puertoCabello,
    region: "Carabobo",
    readTime: "5 min",
  },
  {
    kind: "playa",
    slug: "isla-de-coche",
    name: "Isla de Coche",
    kicker: "Isla tranquila",
    description: "Una isla cercana a Margarita, reconocida por playas abiertas y ambiente sereno.",
    image: venezuelaImages.islaDeCoche,
    region: "Nueva Esparta",
    readTime: "5 min",
  },
  {
    kind: "playa",
    slug: "patanemo",
    name: "Patanemo",
    kicker: "Bahía de Carabobo",
    description: "Una bahía amplia y muy visitada, con ambiente playero clásico de la costa central.",
    image: venezuelaImages.patanemo,
    region: "Carabobo",
    readTime: "5 min",
  },
  {
    kind: "playa",
    slug: "playa-medina",
    name: "Playa Medina",
    kicker: "Paria natural",
    description: "Una playa de palmeras, arena clara y agua tranquila en la península de Paria.",
    image: venezuelaImages.playaMedina,
    region: "Sucre",
    readTime: "5 min",
  },
  {
    kind: "playa",
    slug: "isla-la-tortuga",
    name: "Isla La Tortuga",
    kicker: "Caribe remoto",
    description: "Destino insular de aguas cristalinas, bancos de arena y sensación de aislamiento.",
    image: venezuelaImages.islaLaTortuga,
    region: "Dependencias Federales",
    readTime: "5 min",
  },
  {
    kind: "playa",
    slug: "chichiriviche",
    name: "Chichiriviche",
    kicker: "Entrada a Morrocoy",
    description: "Pueblo costero y punto de salida hacia cayos, canales y playas del Parque Nacional Morrocoy.",
    image: venezuelaImages.chichiriviche,
    region: "Falcón",
    readTime: "5 min",
  },
  {
    kind: "playa",
    slug: "macuto",
    name: "Macuto",
    kicker: "Litoral central",
    description: "Balneario histórico de La Guaira, conectado con Caracas y la memoria costera del litoral central.",
    image: venezuelaImages.macuto,
    region: "La Guaira",
    readTime: "5 min",
  },
];

export const categories = [
  { label: "Playas", icon: Waves, href: "/playas", text: "Cayos, bahías y costas caribeñas." },
  { label: "Parques Nacionales", icon: Trees, href: "/parque-nacional/canaima", text: "Santuarios naturales y rutas memorables." },
  { label: "Montañas", icon: Mountain, href: "/montana/pico-bolivar", text: "Andes, tepuyes y miradores." },
  { label: "Selvas", icon: Palmtree, href: "/estado/amazonas", text: "Ríos, comunidades y biodiversidad." },
  { label: "Ciudades", icon: Building2, href: "/ciudad/caracas", text: "Arquitectura, barrios y vida urbana." },
  { label: "Gastronomía", icon: Beef, href: "/comida/arepa", text: "Sabores regionales y platos esenciales." },
  { label: "Fauna", icon: Binoculars, href: "/animal/turpial", text: "Aves, felinos, reptiles y especies únicas." },
  { label: "Flora", icon: Flower2, href: "/planta/orquidea", text: "Bosques, flores nacionales y ecosistemas." },
  { label: "Historia", icon: Landmark, href: "/historia", text: "De los pueblos originarios a hoy." },
  { label: "Cultura", icon: BookOpen, href: "/articulo/cultura-viva", text: "Música, tradiciones y celebraciones." },
];

export const gallery = [
  { src: venezuelaImages.angelFalls, alt: "Salto Ángel, Parque Nacional Canaima", height: 620 },
  { src: venezuelaImages.cayoAgua, alt: "Cayo de Agua, Los Roques", height: 760 },
  { src: venezuelaImages.picoBolivar, alt: "Pico Bolívar, Mérida", height: 540 },
  { src: venezuelaImages.orinocoDelta, alt: "Delta del Orinoco", height: 700 },
  { src: venezuelaImages.roraima, alt: "Monte Roraima", height: 520 },
  { src: venezuelaImages.avila, alt: "Caracas y El Ávila", height: 680 },
];

export const articles: DiscoverItem[] = [
  {
    kind: "articulo",
    slug: "ruta-perfecta-14-dias",
    name: "Una ruta por Venezuela en 14 días",
    kicker: "Itinerario",
    description: "Caracas, Canaima, Los Roques y Mérida en una ruta sugerida de dos semanas.",
    image: "/images/commons/ruta-14-dias-tarjeta.jpg",
    readTime: "7 min",
  },
  {
    kind: "articulo",
    slug: "sabores-que-definen-venezuela",
    name: "Sabores que definen Venezuela",
    kicker: "Gastronomía",
    description: "Arepas, cacao, quesos frescos, pescados y recetas regionales que cuentan el país desde la mesa.",
    image: venezuelaImages.arepa,
    readTime: "6 min",
  },
  {
    kind: "articulo",
    slug: "cultura-viva",
    name: "Cultura viva: fiestas, música y tradiciones",
    kicker: "Identidad",
    description: "Un recorrido por celebraciones, ritmos, artesanías y memorias que dan forma a la vida venezolana.",
    image: venezuelaImages.culture,
    readTime: "8 min",
  },
];

export const searchIndex: DiscoverItem[] = [
  ...featured,
  ...additionalDestinations,
  ...articles,
  ...states.map((state) => ({
    kind: "estado" as const,
    slug: state.slug,
    name: state.name,
    kicker: "Estado",
    description:
      state.slug === "zulia"
        ? "Lago, gaita, relámpagos y una identidad que se siente en cada rincón del occidente venezolano."
        : `Paisajes, cultura, sabores y rutas para descubrir la identidad de ${state.name}.`,
    image: state.image ?? "",
    imageAlt: state.imageAlt,
    places: state.places,
  })),
  {
    kind: "ciudad",
    slug: "caracas",
    name: "Caracas",
    kicker: "Ciudad",
    description: "Capital vibrante entre el Ávila, museos, gastronomía contemporánea y arquitectura moderna.",
    image: venezuelaImages.avila,
  },
  {
    kind: "animal",
    slug: "turpial",
    name: "Turpial",
    kicker: "Fauna",
    description: "Ave nacional, reconocible por su canto y plumaje de amarillo profundo con negro.",
    image: venezuelaImages.turpial,
  },
  {
    kind: "planta",
    slug: "orquidea",
    name: "Orquídea",
    kicker: "Flora",
    description: "Flor nacional y emblema de la diversidad botánica venezolana.",
    seoDescription: "La orquídea Cattleya mossiae, conocida como flor de mayo, es la flor nacional de Venezuela y un emblema de la diversidad botánica del país.",
    image: venezuelaImages.orchid,
  },
  {
    kind: "comida",
    slug: "arepa",
    name: "Arepa",
    kicker: "Gastronomía",
    description: "Ícono culinario cotidiano, versátil y profundamente venezolano.",
    seoDescription: "La arepa, ícono culinario de Venezuela: un pan de maíz cotidiano y versátil que se rellena de mil maneras y acompaña la mesa de todo el país.",
    image: venezuelaImages.arepa,
  },
  {
    kind: "historia",
    slug: "camino-de-los-libertadores",
    name: "Camino de los Libertadores",
    kicker: "Historia",
    description: "Memoria, independencia y rutas patrimoniales para leer el país desde sus orígenes republicanos.",
    image: venezuelaImages.history,
  },
];

export function getItem(kind: ContentKind, slug: string) {
  return searchIndex.find((item) => item.kind === kind && item.slug === slug);
}

export const pageKinds: ContentKind[] = [
  "estado",
  "ciudad",
  "parque-nacional",
  "playa",
  "montana",
  "animal",
  "planta",
  "comida",
  "historia",
  "articulo",
];
