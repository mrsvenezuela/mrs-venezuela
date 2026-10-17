/*
 * Forma del contenido de /historia.
 *
 * La página entera se pinta desde un único objeto por idioma. Un capítulo trae
 * siempre número, título corto, período y entradilla; todo lo demás es
 * opcional y solo se pinta si existe. Alternar bloques es lo que evita que la
 * página sea diez veces la misma secuencia de título y párrafo largo.
 *
 * El orden de pintado dentro de un capítulo es fijo:
 *   entradilla · línea de tiempo · párrafos · bloques · foto · cifras ·
 *   barras · fichas · etiquetas · párrafos de cierre · cita
 *
 * Ninguna imagen entra sin licencia comprobada y crédito: por eso `credit` es
 * obligatorio en `HistoryPhoto`. Si no hay crédito, no hay foto.
 */

export type HistoryPhoto = {
  /** Ruta local dentro de `public/`. Nunca un enlace en caliente a Commons. */
  src: string;
  alt: string;
  /** Pie visible bajo la imagen. El crédito va aparte, más pequeño. */
  caption?: string;
  /** Proporción del marco, en formato Tailwind: «2/3», «1/1», «16/9». Debe
   *  coincidir con la de la imagen para no recortarla. */
  ratio: string;
  credit: { title: string; author: string; license: string; href: string };
};

export type HistoryChapter = {
  /** Ancla dentro de la página: /historia#<slug>. Igual en todos los idiomas. */
  slug: string;
  /** Corto: dos o tres palabras. La explicación va en `lede`. */
  title: string;
  period: string;
  /** Frase de entrada. Secundaria: nunca debe pesar más que el título. */
  lede: string;
  /** Prosa de entrada. Puede ir vacía si el capítulo arranca con bloques. */
  paragraphs: string[];
  /** Hitos con la fecha en grande. */
  timeline?: { year: string; text: string }[];
  /** Bloques conceptuales con etiqueta: las cuatro regiones, las partes de una
   *  figura, los pasos de una transformación. */
  parts?: {
    label: string;
    text: string;
    /** Recuadro breve bajo el bloque, para aclarar un concepto que el visitante
     *  puede no conocer: nombre, período, los nombres que lo formaron y dos o
     *  tres líneas. Pensado para la Gran Colombia dentro de «La idea». */
    note?: {
      title: string;
      period: string;
      /** Los nombres que se leen de un vistazo. */
      items: string[];
      /** Una línea que resume la relación entre el título y los nombres. */
      caption: string;
      text: string;
    };
  }[];
  /** Retrato en columna, al lado de los bloques. Pensado para Bolívar. */
  portrait?: HistoryPhoto;
  /** Fotografía ancha dentro del capítulo. */
  photo?: HistoryPhoto;
  /** `detail` desglosa la cifra cuando el número solo no dice nada: el 6 de
   *  Bolívar no significa nada hasta que se leen los seis nombres. */
  figures?: { value: string; label: string; detail?: string }[];
  /** Origen · período · huella. Usado en el capítulo de migración. */
  entries?: { term: string; when: string; tags: string; detail: string }[];
  /** `value` es lo que se lee; `percent` solo dibuja el ancho. */
  bars?: { label: string; value: string; percent: number }[];
  /** Pie de la tabla de barras: fuente y año, en pequeño. */
  barsSource?: string;
  /** Lista corta de conceptos, sin desarrollo: lo que dejó una época. */
  tags?: { title: string; items: string[] };
  /** Párrafos posteriores a los bloques, para cerrar el capítulo. */
  outro?: string[];
  quote?: { text: string; author: string };
};

/**
 * «Venezuela en datos»: la pausa entre la historia y el país de hoy. No lleva
 * número y no entra en la navegación, que es de 01 a 10.
 */
export type HistoryFacts = {
  label: string;
  title: string;
  lede: string;
  items: {
    label: string;
    value: string;
    /** Aclaración breve bajo el dato, cuando el número solo no basta. */
    detail?: string;
    /** Fuente y año, siempre visibles: son datos que cambian. */
    source: string;
  }[];
};

export type HistoryContent = {
  eyebrow: string;
  title: string;
  intro: string;
  /** Solo años, como orientación visual bajo la portada. */
  introTimeline: string[];
  indexLabel: string;
  backLabel: string;
  topLabel: string;
  /** Los nueve capítulos numerados. */
  chapters: HistoryChapter[];
  facts: HistoryFacts;
  /** Cierre editorial: el capítulo 10, sobre fondo oscuro. */
  closing: HistoryChapter;
  /** La gran fotografía con la que termina la página, antes de la frase final. */
  finalPhoto?: HistoryPhoto;
};
