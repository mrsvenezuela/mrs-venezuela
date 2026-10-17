import type { CtaKey, StayCtaKey, StayDestination, TravelServiceId } from "./stay-types";

export type { CtaKey, StayCtaKey, StayDestination, TravelServiceId } from "./stay-types";

/*
 * Forma del itinerario «Una ruta por Venezuela en 14 días» (/articulo/ruta-perfecta-14-dias).
 *
 * Como /historia y las páginas temáticas: un archivo por idioma y el traductor de
 * DOM fuera, para que Canaima, Mukumbarí o Pico Espejo no se traduzcan solos. Los
 * identificadores, las rutas de imagen, los números de día y los enlaces internos
 * son idénticos en los cinco idiomas; solo cambia el texto.
 *
 * REGLA DE ORO: la utilidad sale de la organización, no de escribir mucho.
 *   día               2 a 4 líneas
 *   entradilla        2 a 3 líneas
 *   consejo, destino  1 a 2 líneas
 *
 * Y la de la logística: los datos que cambian (aeropuertos, terminales, conexiones,
 * carreteras, teleférico, excursiones que dependen de la operación) viven SOLO en
 * `travelInfo` («Información de viaje», dentro de «Antes de reservar»), con la fecha de
 * ITINERARY_UPDATED. El día por día, la ruta y «Cómo moverse» cuentan lo estable.
 * Un mismo aviso aparece una vez. Nada de aerolíneas, horarios, frecuencias ni precios.
 *
 * Lo comercial (afiliados, partners, agencia) no vive aquí: está en lib/affiliates.
 */

export type ItineraryPhoto = {
  /** Ruta local dentro de `public/`. */
  src: string;
  alt: string;
  /** Encuadre cuando el motivo no está centrado: «top», «50% 30%»… */
  position?: string;
  /** Proporción propia cuando la foto no admite el 4:3 del día: «3 / 4»… */
  ratio?: string;
};

export type StageId = StayDestination | "regreso";
export type BudgetId = "vuelos" | "alojamiento" | "excursiones" | "comidas" | "traslados" | "tasas";
/** Medio de un tramo: avión de línea, avioneta o carretera. */
export type TransferMode = "flight" | "small-plane" | "road";

/** Una parada del resumen de la ruta (01). */
export type ItineraryStop = {
  id: StageId;
  /** «Días 2–5» */
  days: string;
  name: string;
  /** Qué cara del país muestra: «Tepuyes, selva, ríos y Salto Ángel». */
  role: string;
};

export type ItineraryDay = {
  day: number;
  place: string;
  title: string;
  /** Dos a cuatro líneas. */
  text: string;
  /** Dónde se duerme: ciudad o destino, nunca un hotel. Sin noche el día de salida. */
  night?: string;
  /** Días dedicados sobre todo a conexiones: se marcan como tales, no se esconden. */
  transfer?: boolean;
  photo?: ItineraryPhoto;
};

export type ItineraryStage = {
  id: StageId;
  name: string;
  /** «Días 2–5» */
  days: string;
  /** Aviso breve de la etapa, solo lo que hace falta para entenderla. */
  note?: string;
  /** Enlace editorial interno a la guía existente. Nunca comercial. */
  guide?: { label: string; href: string };
  items: ItineraryDay[];
};

export type StayArea = {
  id: StayDestination;
  place: string;
  nights: number;
  /** «noches» ya escrito en el idioma. */
  nightsLabel: string;
  /** Tipos de alojamiento: «Hoteles · apartamentos · alojamiento urbano». */
  kinds: string;
  /** Una o dos líneas. Sin nombres de establecimientos. */
  text: string;
  /** Rótulo por defecto del futuro botón de alojamiento de este destino. */
  ctaKey: StayCtaKey;
};

/** Un tramo físico del viaje, en el orden en que se hace. */
export type ItineraryLeg = {
  /** Día en que se hace el tramo. */
  day: number;
  from: string;
  to: string;
  /** Medios en orden: [«flight»], [«flight», «road»]… */
  modes: TransferMode[];
  /** Una o dos líneas de información estable. Lo que caduca va en `travelInfo`. */
  text: string;
};

/**
 * Precio mostrado en el presupuesto. Nunca se mezclan en silencio: un precio de partner
 * y una estimación editorial se rotulan distinto y los dos llevan fecha y fuente.
 */
export type BudgetPrice = {
  kind: "partner" | "estimate";
  value: string;
  updated: string;
  source: string;
};

export type BudgetItem = {
  id: BudgetId;
  title: string;
  text: string;
  /** Vacío mientras no haya datos actuales y verificables. */
  prices?: BudgetPrice[];
};

export type ItineraryTip = { title: string; text: string };

export type ItineraryCredit = { title: string; author: string; license: string; href: string };

export type ItineraryContent = {
  meta: {
    /** <title> para buscadores, con la marca. */
    title: string;
    description: string;
    ogAlt: string;
  };
  hero: {
    home: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    photo: ItineraryPhoto;
    stats: Array<{ value: string; label: string }>;
  };
  /** Tres o cuatro líneas: una ruta posible, adaptable; no todo el país. */
  intro: string;
  indexLabel: string;
  /**
   * «Información de viaje»: la única zona con datos que caducan, con «Última revisión»
   * (fecha de ITINERARY_UPDATED). Se pinta al principio de «Antes de reservar».
   */
  travelInfo: {
    title: string;
    /** «Última revisión» */
    reviewedLabel: string;
    /** Enlace discreto desde la introducción: «Información de viaje revisada en». */
    linkLabel: string;
    lede?: string;
    items: ItineraryTip[];
  };
  route: {
    title: string;
    lede: string;
    stops: ItineraryStop[];
    mapAlt: string;
    /** Aclara que el mapa muestra el orden del viaje, no trayectorias de vuelo. */
    mapNote: string;
  };
  days: {
    title: string;
    lede: string;
    /** «Día {nn}» o «第{n}天»: {nn} con dos cifras, {n} sin relleno. */
    dayPattern: string;
    nightLabel: string;
    transferLabel: string;
    stages: ItineraryStage[];
  };
  sleep: { title: string; lede: string; areas: StayArea[] };
  move: {
    title: string;
    lede: string;
    legs: ItineraryLeg[];
    modeLabels: Record<TransferMode, string>;
    /** Palabra que el lector de pantalla dice entre origen y destino: «a», «to», «nach»… */
    toLabel: string;
  };
  budget: {
    title: string;
    lede: string;
    priceLabels: { partner: string; estimate: string; updated: string };
    items: BudgetItem[];
  };
  before: { title: string; lede: string; tips: ItineraryTip[] };
  /** Textos de la monetización futura. Existen traducidos, pero no se pintan sin socios activos. */
  commercial: {
    /** «Dónde hospedarse», «Ver alojamientos», «Ver alojamiento», «Solicitar itinerario», «Consultar viaje organizado». */
    cta: Record<CtaKey, string>;
    /** «Alojamiento destacado» */
    featuredStay: string;
    /** «Código», para socios que trabajan con código promocional. */
    codeLabel: string;
    disclosure: string;
    /** Para lectores de pantalla en enlaces externos: «se abre en una pestaña nueva». */
    newTab: string;
    tour: {
      /** «¿Prefieres que organicen el viaje por ti?» */
      title: string;
      text: string;
      /** A: «Organízalo por tu cuenta» */
      ownTitle: string;
      ownText: string;
      /** B: «Prefiero que organicen el viaje» */
      organizedTitle: string;
      /** Línea discreta en «Cómo moverse»: «¿Quieres dejar la logística en manos de un operador?» */
      inlineTitle: string;
      services: Record<TravelServiceId, string>;
    };
  };
  creditsNote?: string;
  creditsLabel: string;
  credits: ItineraryCredit[];
};
