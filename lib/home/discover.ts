/*
 * «Descubre más de Venezuela»: la sección final de la portada.
 *
 * Arriba, la portada explora el país POR TEMAS (Historia, Caribe y playa, Montaña y
 * páramo, Selva y ríos, Ciudades y cultura, Sabores), por estados y por destinos.
 * Aquí abajo va contenido especial que no repite esos temas: tres tarjetas con
 * funciones distintas.
 *
 *   ruta          viajar      /articulo/ruta-perfecta-14-dias
 *   naturaleza    fauna y flora (especies), no paisajes: eso es «Selva y ríos»
 *   curiosidades  datos e historias verificadas que no necesitan categoría propia
 *
 * Los textos de cada tarjeta están en lib/i18n.ts (`articles.cards`), en los cinco idiomas.
 *
 * `available: false` = la página aún no existe: la tarjeta se muestra, pero sin enlace
 * y con «Próximamente». Nunca se enlaza a una página vacía ni a una ruta que dé 404.
 * Al publicar la página, poner `available: true` y comprobar la ruta.
 */

export type DiscoverCardId = "ruta" | "naturaleza" | "curiosidades";

export type PhotoCredit = { author: string; license: string; href: string };

export type DiscoverCard = {
  id: DiscoverCardId;
  href: string;
  /** Foto con licencia verificada. `""` = la tarjeta no se muestra. */
  image: string;
  /** Encuadre cuando la tarjeta recorta la foto (4:5 en móvil y escritorio, 3:2 en tableta). */
  position?: string;
  available: boolean;
  /** Autoría y licencia de la foto (o de las fotos de una composición). Se muestran bajo las tarjetas. */
  credits: PhotoCredit[];
};

export const discoverCards: DiscoverCard[] = [
  {
    id: "ruta",
    href: "/articulo/ruta-perfecta-14-dias",
    // Composición de las cuatro etapas (Caracas, Canaima, Los Roques, Mérida): un viaje, no un solo destino.
    image: "/images/commons/ruta-14-dias-tarjeta.jpg",
    available: true,
    credits: [
      { author: "Paolo Costa Baldi", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Venezuela_-_Caracas_-_La_Florida.jpg" },
      { author: "Stig Nygaard", license: "CC BY 2.0", href: "https://commons.wikimedia.org/wiki/File:Take_off..._(42019737374).jpg" },
      { author: "Tucanrecords", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Cayo_de_Agua_in_Los_Roques.jpg" },
      { author: "Cesar Pérez", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Laguna_de_Mucubaji_en_20015_05.jpg" },
    ],
  },
  {
    id: "naturaleza",
    /*
     * Página /naturaleza: especies de Venezuela, agrupadas en
     * Fauna · Aves · Flores · Árboles · Plantas y paisajes vegetales
     * (jaguar, oso frontino, chigüire, caimán del Orinoco, tonina, turpial, guacamayas,
     * cóndor andino, águila harpía, tortugas marinas; araguaney, flor de mayo,
     * frailejones, moriche…). Las fichas /animal/[slug] y /planta/[slug] ya existentes
     * podrán colgar de ella.
     */
    href: "/naturaleza",
    // Corocoro rojo en libertad, Refugio de Fauna Silvestre de Cuare (Falcón), marzo de 2014.
    image: "/images/commons/corocoro-rojo-manglar-cuare.jpg",
    position: "68% center",
    available: true,
    credits: [
      { author: "Fernando Flores", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Scarlet_Ibis,_Corocoro_Colorado_(Eudocimus_ruber).jpg" },
    ],
  },
  {
    id: "curiosidades",
    /*
     * Página /curiosidades: «Venezuela que quizás no conocías», en pocos grupos:
     * Venezuela en el mundo · Naturaleza extraordinaria · Patrimonio · Historias que sorprenden
     * (Miss Universo, Salto Ángel, Relámpago del Catatumbo, patrimonio UNESCO, Colonia Tovar,
     * Ciudad Universitaria, béisbol; quizá los símbolos nacionales). Cada dato, verificado
     * y con fuente antes de publicarse.
     */
    href: "/curiosidades",
    // La bandera de Venezuela ondeando: la página tendrá «de todo un poco», así que no se ata a un solo tema.
    image: "/images/commons/bandera-venezuela-ondeando.jpg",
    position: "45% center",
    available: true,
    credits: [
      { author: "Jorge Andrés Paparoni Bruzual", license: "CC BY-SA 2.0", href: "https://commons.wikimedia.org/wiki/File:Bandera_de_Venezuela_en_movimiento.jpg" },
    ],
  },
];
