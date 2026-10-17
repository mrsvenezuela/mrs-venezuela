/*
 * Modelo de datos de las guías editoriales de estado.
 * Todo el texto se escribe en español: el sistema global de idiomas traduce el DOM
 * a partir del catálogo `lib/site-translations.json`, por lo que cada cadena de estos
 * datos debe tener su entrada en el catálogo.
 */

export type StatePhoto = {
  /** Ruta local (`/images/...`) o URL ya usada en el proyecto (Wikimedia Commons). */
  src: string;
  alt: string;
  /** `object-position` para el recorte; por defecto "center". */
  position?: string;
};

export type StateFact = { label: string; value: string };

export type StateDefiningElement = {
  name: string;
  text: string;
  photo?: StatePhoto | null;
};

export type StatePlace = {
  name: string;
  text: string;
  photo?: StatePhoto | null;
  /** Ruta interna existente (por ejemplo `/parque-nacional/canaima`). Solo rutas verificadas. */
  href?: string;
};

export type StateCultureBlock = {
  /** Etiqueta pequeña: Gastronomía, Tradiciones, Música, Artesanía, Celebraciones, Identidad… */
  label: string;
  /** Frase-título del bloque (tamaño medio, nunca compite con el título de sección). */
  title?: string;
  text?: string;
  items?: Array<{ name: string; text: string }>;
};

export type StateNatureItem = { name: string; text: string };

export type StateRouteMode = "aire" | "carretera" | "mar" | "rio" | "local";

export type StateRoute = { mode: StateRouteMode; title: string; text: string };

export type StateTipIcon =
  | "sun"
  | "droplets"
  | "shirt"
  | "mountain"
  | "leaf"
  | "compass"
  | "ship"
  | "car"
  | "shield"
  | "camera"
  | "bug"
  | "snowflake"
  | "footprints"
  | "clock"
  | "map"
  | "wind"
  | "umbrella"
  | "backpack"
  | "users"
  | "waves";

export type StateTip = { icon: StateTipIcon; title: string; text: string };

export type StateFaq = { question: string; answer: string };

export type StateCredit = { title: string; author: string; license: string; href: string };

export type StateLayout = {
  /** Lado de la fotografía en Historia e identidad (escritorio). */
  historyPhotoSide?: "left" | "right";
  /** Lado de la primera fotografía en Lugares (se alterna a partir de ahí). */
  placesFirstPhotoSide?: "left" | "right";
  /** Banda de fondo de Cultura y sabores. */
  cultureTone?: "dark" | "light";
};

export type StateGuideData = {
  slug: string;
  /** Nombre tal como aparece en títulos: "Zulia", "Nueva Esparta". */
  name: string;
  /** Línea bajo el nombre en el hero: "Occidente de Venezuela". */
  heroKicker: string;
  /** Frase MUY corta de identidad para el hero. */
  heroTagline: string;
  /** Fotografía panorámica del hero; `null` si todavía no existe una correcta. */
  hero: StatePhoto | null;

  intro: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    aside?: { label: string; text: string };
  };

  /** 01 — CONOCE [ESTADO] */
  know: {
    title: string;
    description: string;
    paragraphs: string[];
    facts: StateFact[];
  };

  /** 02 — HISTORIA E IDENTIDAD */
  history: {
    description: string;
    paragraphs: string[];
    photo?: StatePhoto | null;
  };

  /** 03 — LO QUE DEFINE A [ESTADO] */
  defines: {
    title: string;
    description: string;
    panorama?: StatePhoto | null;
    items: StateDefiningElement[];
  };

  /** 04 — LUGARES QUE DEBES CONOCER */
  places: {
    description: string;
    items: StatePlace[];
  };

  /** 05 — CULTURA Y SABORES */
  culture: {
    description: string;
    intro?: string;
    blocks: StateCultureBlock[];
  };

  /** 06 — NATURALEZA */
  nature: {
    description: string;
    intro: string;
    photo?: StatePhoto | null;
    items: StateNatureItem[];
  };

  /** 07 — CÓMO LLEGAR */
  access: {
    description: string;
    intro?: string;
    routes: StateRoute[];
  };

  /** 08 — CONSEJOS PARA VIAJEROS */
  tips: {
    description: string;
    items: StateTip[];
  };

  /** 09 — PREGUNTAS FRECUENTES */
  faqs: {
    description: string;
    items: StateFaq[];
  };

  /** Créditos de fotografías externas (Wikimedia Commons). */
  credits?: StateCredit[];

  seo: { title: string; description: string };

  layout?: StateLayout;
};
