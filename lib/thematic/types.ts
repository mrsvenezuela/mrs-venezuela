/*
 * Forma del contenido de las cinco páginas temáticas: Caribe y playa, Montaña y
 * páramo, Selva y ríos, Ciudades y cultura, Sabores.
 *
 * Son las hermanas de /historia, no su copia. Comparten la jerarquía —número
 * pequeño, título corto, entradilla de una o dos líneas, contenido— y el mismo
 * cuidado con las fuentes y las licencias. Cambian en el ritmo: aquí manda la
 * fotografía y el texto es breve por norma.
 *
 * REGLA DE ORO, escrita aquí para que no se pierda: poco texto.
 *   entradilla de página   2 a 4 líneas
 *   entradilla de sección  1 a 2 líneas
 *   descripción de lugar   1 a 3 líneas
 * Si un bloque necesita más, es que hay que resumirlo, no alargarlo.
 *
 * El idioma se resuelve en el contenido, como en /historia: hay un archivo por
 * idioma y el traductor de DOM no toca estas páginas. Así los nombres propios
 * —Mucubají, hallaca, Ye'kwana— no se traducen solos.
 */

export type ThematicPhoto = {
  /** Ruta local dentro de `public/`. Nunca un enlace en caliente a Commons. */
  src: string;
  alt: string;
  /** Encuadre cuando el motivo no está centrado: «top», «50% 30%»… */
  position?: string;
};

export type ThematicItem = {
  /** Optional official music sample; rendered only in the music facets. */
  spotifyTrack?: import("./music").MusicSampleKey;
  title: string;
  /** Etiqueta pequeña sobre el título: el estado, la región o tres palabras clave. */
  meta?: string;
  /** Una a tres líneas. Nunca un párrafo. */
  text?: string;
  photo?: ThematicPhoto;
  /** Explicit opt-in while a gallery photograph awaits selection and licensing. */
  photoPlaceholder?: { title: string; text: string };
  /** Solo rutas que existen de verdad en el sitio. Si no existe, no se enlaza. */
  href?: string;
  /** La cifra grande, en `numbers`. Va delante del título. */
  value?: string;
  /** Fuente y año, en letra pequeña. Obligatorio en cualquier cifra discutida. */
  source?: string;
  /** Preparaciones relacionadas, en los bloques de Sabores: «Pisca andina», «Pastelitos»… */
  dishes?: string[];
};

/**
 * Los siete modos de pintar una sección. Cada página escoge una secuencia
 * distinta: eso, más la proporción de sus tarjetas y su color, es lo que hace
 * que Caribe no se parezca a Sabores aunque compartan renderizador.
 *
 *  prose      solo texto, para abrir un tema
 *  gallery    fotografías grandes con nombre y una línea: el bloque protagonista
 *  facets     rejilla de conceptos sin foto, para escanear de un vistazo
 *  feature    una fotografía grande junto a un texto corto
 *  band       una fotografía a todo el ancho, con o sin frase
 *  list       lista compacta: nombre, etiqueta y una línea. Sin fotos
 *  regions    mapa y accesos a estados y guías. Cierra las páginas
 *  tips       consejos breves en tarjetas pequeñas
 *  coastline  un recorrido geográfico en línea: de un extremo del país al otro
 *  numbers    cifras grandes con rótulo, una línea y la fuente en pequeño
 *  islands    una fotografía y una lista tipográfica de nombres, sin tarjetas
 *
 * Y los de Sabores, que es una guía visual y pone foto a todo lo que nombra:
 *  food-dishes      filas de foto y texto que alternan de lado
 *  food-regions     tarjetas apaisadas con las preparaciones de cada región
 *  food-cacao       una fotografía grande y cada zona con su miniatura
 *  food-groups      grupos rotulados (dulces, panes, bebidas)
 *  food-influences  tres influencias, cada una con su mesa
 *  food-pantry      fichas de ingrediente con miniatura
 *  food-table       fotografía grande y los platos debajo
 */
export type ThematicLayout =
  | "prose"
  | "gallery"
  | "facets"
  | "feature"
  | "band"
  | "list"
  | "regions"
  | "tips"
  | "coastline"
  | "numbers"
  | "islands"
  | "food-dishes"
  | "food-regions"
  | "food-cacao"
  | "food-groups"
  | "food-influences"
  | "food-pantry"
  | "food-table";

export type ThematicSection = {
  /** Ancla dentro de la página. Igual en los cinco idiomas. */
  slug: string;
  /** «01», «02»… Se omite en las secciones que no van numeradas. */
  number?: string;
  /** Corto: dos o tres palabras siempre que se pueda. */
  title: string;
  /** Una o dos líneas. Nunca debe pesar más que el título. */
  lede?: string;
  layout: ThematicLayout;
  /** Para `feature` y `band`; también es el mapa en `regions`. */
  photo?: ThematicPhoto;
  items?: ThematicItem[];
  /** Para `food-groups`: cada grupo con su rótulo y sus piezas. */
  groups?: { title: string; items: ThematicItem[] }[];
};

/**
 * El carácter visual de cada página. Los colores son de la paleta del sitio y
 * los cambios, deliberadamente sutiles: lo que de verdad diferencia una página
 * de otra es la proporción de sus fotografías y el orden de sus bloques.
 */
export type ThematicTheme = {
  /** Acento: números de sección, etiquetas y enlaces. */
  accent: string;
  /** Fondo suave de los marcos de imagen mientras cargan. */
  soft: string;
  /** Banda oscura del cierre. */
  deep: string;
  /** Fondo de la página. Muy cercano al crema del sitio. */
  paper: string;
  /** Proporción de las tarjetas de `gallery`: «16/10», «4/5», «1/1»… */
  cardRatio: string;
  /** Composición de la portada: partida en dos o fotografía a sangre. */
  hero: "split" | "full";
};

export type ThematicCredit = {
  title: string;
  author: string;
  license: string;
  href: string;
};

export type ThematicPage = {
  /** Ruta: /caribe-y-playa, /montana-y-paramo, /selva-y-rios… */
  slug: string;
  eyebrow: string;
  title: string;
  /** Dos a cuatro líneas. Es la única prosa larga que se permite la portada. */
  intro: string;
  hero: ThematicPhoto;
  /** Título y descripción para buscadores. Se escriben aparte del texto visible. */
  meta: { title: string; description: string };
  indexLabel: string;
  backLabel: string;
  sections: ThematicSection[];
  /** La gran fotografía con la que termina la página, antes de la frase. */
  finalPhoto?: ThematicPhoto;
  /** Frase de cierre sobre fondo oscuro. Opcional y muy breve. */
  closing?: { text: string; source?: string };
  /** Créditos de las fotografías de Commons. Sin crédito no se publica la foto. */
  credits?: ThematicCredit[];
};

/** Las cinco páginas de un idioma, indexadas por slug de ruta. */
export type ThematicContent = Record<string, ThematicPage>;
