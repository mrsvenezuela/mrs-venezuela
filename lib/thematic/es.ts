import type { ThematicContent } from "./types";

/*
 * El maestro. Los otros cuatro idiomas se traducen desde aquí y comparten los
 * `slug` de sección, las rutas de las imágenes y los enlaces internos: si se
 * corrige uno hay que corregirlo en los cinco archivos.
 *
 * Reglas de estas páginas:
 *  - Poco texto. Entradilla de página, 2 a 4 líneas. De sección, 1 a 2. De
 *    lugar, 1 a 3. Si algo pide más, se resume.
 *  - Solo se enlaza a rutas que existen de verdad en el sitio.
 *  - Ninguna imagen sin licencia comprobada y crédito.
 *  - Nada de superlativos sin respaldo: «uno de los más grandes» solo si hay
 *    quien lo firme.
 */
export const thematicEs: ThematicContent = {
  /* ==================================================================== */
  /* CARIBE Y PLAYA — luminosa, azul, abierta. Tarjetas apaisadas.        */
  /* ==================================================================== */
  "caribe-y-playa": {
    slug: "caribe-y-playa",
    eyebrow: "Venezuela frente al mar",
    title: "Caribe y playa",
    intro:
      "Casi 2.400 kilómetros de fachada caribeña, doce grupos de islas y una costa que cambia de carácter entre un golfo y el siguiente.",
    hero: {
      src: "/images/cayo-de-agua.jpg",
      alt: "Banco de arena y aguas turquesas en Cayo de Agua, archipiélago de Los Roques",
    },
    meta: {
      title: "Caribe y playa en Venezuela | Mrs Venezuela",
      description:
        "La costa y las islas de Venezuela: Los Roques, Margarita, Morrocoy, Mochima, Choroní, Paria y La Tortuga, y cómo cambia el litoral de oeste a este.",
    },
    indexLabel: "En esta guía",
    backLabel: "Volver al inicio",
    sections: [
      {
        slug: "el-caribe-venezolano",
        number: "01",
        title: "El Caribe venezolano",
        lede: "No hay una costa venezolana: hay varias. El litoral pasa de médanos a manglares, de cayos coralinos a acantilados, y de golfos abiertos a bahías cerradas por la cordillera. A eso se suman las islas, que están mar adentro y son otra cosa.",
        layout: "band",
        photo: {
          src: "/images/commons/morrocoy-sea-island.jpg",
          alt: "Cayo del Parque Nacional Morrocoy sobre aguas turquesas, estado Falcón",
        },
        items: [
          { title: "Cayos", text: "Islotes de arena y coral en aguas someras." },
          { title: "Islas", text: "Mar adentro, a horas de navegación o de vuelo." },
          { title: "Bahías y ensenadas", text: "Aguas resguardadas y poco oleaje." },
          { title: "Costa continental", text: "Playas abiertas al pie de la cordillera." },
        ],
      },
      {
        slug: "destinos-esenciales",
        number: "02",
        title: "Destinos esenciales",
        lede: "Ocho maneras de entrar al Caribe venezolano, del archipiélago más remoto a la playa que se llena los domingos.",
        layout: "gallery",
        items: [
          {
            title: "Los Roques",
            meta: "Dependencias Federales",
            text: "Cayos blancos, lagunas y arrecifes a media hora de vuelo de Caracas.",
            photo: { src: "/images/commons/madrisqui.jpg", alt: "Cayo Madrisquí, en el archipiélago de Los Roques" },
            href: "/playa/los-roques",
          },
          {
            title: "Playa El Agua",
            meta: "Margarita · Nueva Esparta",
            text: "Cuatro kilómetros de arena abierta al norte de la isla, con oleaje y cocoteros.",
            photo: { src: "/images/playa-el-agua.jpg", alt: "Playa El Agua, en el noreste de la isla de Margarita" },
            href: "/playa/playa-el-agua",
          },
          {
            title: "Morrocoy",
            meta: "Parque nacional · Falcón",
            text: "Cayos, manglares y costa entre Tucacas y Chichiriviche. Cayo Sombrero es uno de sus destinos.",
            photo: { src: "/images/cayo-sombrero.jpg", alt: "Cayo Sombrero, en el Parque Nacional Morrocoy" },
            href: "/playa/morrocoy",
          },
          {
            title: "Mochima",
            meta: "Sucre y Anzoátegui",
            text: "Islas y ensenadas verdes dentro de un parque nacional que se recorre en peñero.",
            photo: { src: "/images/mochima.jpg", alt: "Bahía del Parque Nacional Mochima con una lancha de pescadores" },
            href: "/playa/mochima",
          },
          {
            title: "Choroní",
            meta: "Aragua",
            text: "Pueblo y playa al final de una carretera que cruza la selva nublada del Henri Pittier.",
            photo: { src: "/images/choroni.jpg", alt: "Costa de Choroní, con el mar Caribe al pie de la cordillera" },
            href: "/playa/choroni",
          },
          {
            title: "Cuyagua",
            meta: "Aragua",
            text: "Playa abierta y con olas, la más asociada al surf de la costa central.",
            photo: { src: "/images/cuyagua.jpg", alt: "Playa de Cuyagua, en la costa del estado Aragua" },
            href: "/playa/cuyagua",
          },
          {
            title: "Playa Medina",
            meta: "Península de Paria · Sucre",
            text: "Una bahía de cocoteros en la costa húmeda de Paria, lejos de todo lo demás.",
            photo: {
              src: "/images/commons/playa-medina-peninsula-paria.jpg",
              alt: "Playa Medina, en la península de Paria, estado Sucre",
            },
            href: "/playa/playa-medina",
          },
          {
            title: "La Tortuga",
            meta: "Dependencias Federales",
            text: "La segunda isla del país, sin población estable: se llega por mar o en avioneta.",
            photo: { src: "/images/isla-la-tortuga-turquesa.jpg", alt: "Aguas turquesas de la isla La Tortuga" },
            href: "/playa/isla-la-tortuga",
          },
        ],
      },
      {
        slug: "de-occidente-a-oriente",
        number: "03",
        title: "De occidente a oriente",
        lede: "La misma costa, recorrida de un extremo del país al otro, no se parece a sí misma.",
        layout: "coastline",
        items: [
          {
            title: "Occidente",
            meta: "Zulia y Falcón",
            text: "El tramo más seco. Golfos amplios, médanos que llegan hasta el agua y, frente a Falcón, los cayos y manglares de Morrocoy.",
          },
          {
            title: "Centro",
            meta: "Carabobo, Aragua y La Guaira",
            text: "Aquí la cordillera cae directamente al Caribe. Bahías cortas entre montañas de selva nublada, y playas abiertas al oleaje del norte.",
          },
          {
            title: "Islas",
            meta: "Nueva Esparta",
            text: "Frente a la costa oriental, Margarita, Coche y Cubagua forman el único estado insular del país.",
          },
          {
            title: "Oriente",
            meta: "Anzoátegui y Sucre",
            text: "Golfos, penínsulas y agua más verde. Mochima al oeste, Paria al este, y el punto donde el Caribe se acaba y empieza el Atlántico.",
          },
        ],
      },
      {
        slug: "el-mar-en-numeros",
        number: "04",
        title: "El mar en números",
        lede: "Cuatro cifras que cuestan de encontrar, porque casi todas las que circulan no dicen qué están midiendo.",
        layout: "numbers",
        items: [
          {
            value: "2.394 km",
            title: "Fachada caribeña",
            text: "De Castilletes, en la Guajira, a Punta Peñas, en Paria.",
            source: "Ley de Zonas Costeras · 2001",
          },
          {
            value: "12 + 89",
            title: "Grupos de islas",
            text: "Doce forman las Dependencias Federales; otras 89 islas dependen de los estados costeros. No hay un censo oficial del total.",
            source: "INE · 2025",
          },
          {
            value: "~475.000 km²",
            title: "Mar propio",
            text: "La zona económica exclusiva. Es una cifra aproximada: quedan límites por acordar con varios vecinos.",
            source: "Sea Around Us · 2015",
          },
          {
            value: "221.120 ha",
            title: "Parque marino",
            text: "Los Roques, protegido desde 1972, es el parque nacional más extenso del mar Caribe.",
            source: "Parque Nacional Archipiélago de Los Roques",
          },
        ],
      },
      {
        slug: "venezuela-insular",
        number: "05",
        title: "Venezuela insular",
        lede: "El país no termina en la costa continental. Mar adentro hay una docena de grupos de islas, la mayoría deshabitados, y el más lejano —Isla de Aves— está a más de quinientos kilómetros del continente.",
        layout: "islands",
        photo: {
          src: "/images/isla-de-coche.jpg",
          alt: "Costa de la isla de Coche, en el estado Nueva Esparta",
        },
        items: [
          { title: "Margarita", meta: "Nueva Esparta", text: "La mayor isla del Caribe venezolano y la única con ciudades." },
          { title: "Coche", meta: "Nueva Esparta", text: "Entre Margarita y el continente. Es un municipio habitado." },
          { title: "Cubagua", meta: "Nueva Esparta", text: "Guarda las ruinas de Nueva Cádiz, la ciudad de las perlas." },
          { title: "Los Roques", meta: "Dependencias Federales", text: "Parque nacional desde 1972 y sitio Ramsar: más del 80% es mar." },
          { title: "La Tortuga", meta: "Dependencias Federales", text: "156 km² y sin población estable. La segunda isla del país." },
          { title: "La Blanquilla", meta: "Dependencias Federales", text: "Sin población civil: un puesto de guardacostas y pescadores de temporada." },
          { title: "La Orchila", meta: "Dependencias Federales", text: "Base aeronaval y acceso restringido: no se visita sin permiso." },
          { title: "Las Aves", meta: "Dependencias Federales", text: "Dos grupos, Sotavento y Barlovento. Deshabitados." },
          { title: "Los Testigos", meta: "Dependencias Federales", text: "Poblado por familias de origen margariteño. Uno de los dos archipiélagos habitados." },
          { title: "Los Frailes", meta: "Dependencias Federales", text: "Diez islotes deshabitados al noreste de Margarita." },
        ],
      },
      {
        slug: "antes-de-llegar-al-mar",
        number: "06",
        title: "Antes de llegar al mar",
        lede: "Cuatro cosas que conviene tener claras.",
        layout: "tips",
        items: [
          { title: "Sol", text: "Cerca del ecuador el sol pega fuerte incluso con nubes. Protector, sombra y agua." },
          { title: "Mar", text: "El oleaje y las corrientes cambian mucho de una playa a otra y de un día a otro. Pregunta en la orilla." },
          { title: "Acceso", text: "A las islas y a muchos cayos solo se llega por mar. Confirma la salida y el regreso antes de embarcar." },
          { title: "Áreas protegidas", text: "Los Roques, Morrocoy y Mochima son parques nacionales: acampar y otras actividades requieren autorización de Inparques." },
        ],
      },
    ],
    finalPhoto: {
      src: "/images/commons/dos-mosquises.jpg",
      alt: "Vista aérea del cayo Dos Mosquises, en Los Roques, rodeado de arrecifes y bancos de arena",
    },
    closing: {
      text: "Un país entero frente al Caribe, y cientos de maneras distintas de llegar al mar.",
    },
    credits: [
      {
        title: "Cayo Madrisquí, Los Roques",
        author: "Wilfredor",
        license: "CC BY-SA 4.0",
        href: "https://commons.wikimedia.org/wiki/File:Madrisqui.jpg",
      },
      {
        title: "Playa Medina, península de Paria",
        author: "Alejandro Solo",
        license: "CC BY-SA 4.0",
        href: "https://commons.wikimedia.org/wiki/File:Playa_Medina_Peninsula_Paria.jpg",
      },
      {
        title: "Parque Nacional Morrocoy",
        author: "Regisrob",
        license: "CC BY 3.0",
        href: "https://commons.wikimedia.org/wiki/File:Morrocoy_sea_island.jpg",
      },
      {
        title: "Cayo Dos Mosquises, Los Roques",
        author: "Berrucomons",
        license: "CC BY-SA 3.0",
        href: "https://commons.wikimedia.org/wiki/File:Dos_Mosquises.jpg",
      },
    ],
  },

  "montana-y-paramo": {
    slug: "montana-y-paramo",
    eyebrow: "Venezuela en altura",
    title: "Montaña y páramo",
    intro:
      "El país tropical también tiene nieve, lagunas heladas y pueblos a tres mil metros. Los Andes venezolanos son el extremo norte de la cordillera, y el paisaje cambia con cada hora de subida.",
    hero: {
      src: "/images/pico-bolivar.jpg",
      alt: "Pico Bolívar, la cumbre más alta de Venezuela, en la Sierra Nevada de Mérida",
    },
    meta: {
      title: "Montaña y páramo en Venezuela | Mrs Venezuela",
      description:
        "Los Andes venezolanos: Mérida, Táchira y Trujillo, el Pico Bolívar, la Sierra Nevada, los páramos, sus pueblos y sus lagunas.",
    },
    indexLabel: "En esta guía",
    backLabel: "Volver al inicio",
    sections: [
      {
        slug: "venezuela-en-altura",
        number: "01",
        title: "Venezuela en altura",
        lede: "Venezuela no es solo costa y llano. La cordillera de Mérida remata los Andes por el norte y alcanza los 4.978 metros en el Pico Bolívar; la cordillera de la Costa levanta el Ávila sobre Caracas, y en el sureste los tepuyes forman montañas de otra clase. Entre unas y otras hay valles templados, bosques de niebla y páramos.",
        layout: "prose",
      },
      {
        slug: "los-andes",
        number: "02",
        title: "Los Andes",
        lede: "Tres estados unidos por la misma cordillera y por caminos que llevan siglos cruzándola.",
        layout: "gallery",
        items: [
          {
            title: "Mérida",
            meta: "Cumbres y páramos",
            text: "La mayor altura del país, el teleférico más alto del mundo y una red de pueblos de montaña.",
            photo: { src: "/images/commons/teleferico-del-pico-espejo.jpg", alt: "Teleférico de Mérida ascendiendo entre las montañas" },
            href: "/estado/merida",
          },
          {
            title: "Táchira",
            meta: "Frontera y montaña",
            text: "Valles agrícolas, pueblos frescos y la puerta terrestre hacia Colombia.",
            photo: {
              src: "/images/commons/paramo-las-coloradas-tachira.jpg",
              alt: "Laguna, frailejones y caminantes en el Páramo Las Coloradas, estado Táchira",
            },
            href: "/estado/tachira",
          },
          {
            title: "Trujillo",
            meta: "Pueblos y memoria",
            text: "Montañas habitadas, café y miradores sobre el extremo norte de la cordillera.",
            photo: {
              src: "/images/states/trujillo.jpg",
              alt: "Monumento a la Virgen de la Paz sobre la ciudad de Trujillo",
            },
            href: "/estado/trujillo",
          },
        ],
      },
      {
        slug: "lugares-en-las-alturas",
        number: "03",
        title: "Lugares en las alturas",
        lede: "Cuatro nombres para empezar a leer la cordillera.",
        layout: "gallery",
        items: [
          {
            title: "Pico Bolívar",
            meta: "4.978 m · Mérida",
            text: "La cumbre más alta de Venezuela. Su ascenso es alpinismo, no senderismo.",
            photo: {
              src: "/images/commons/pico-bolivar-al-desnudo-en-dia-soleado-y-despejado.jpg",
              alt: "El Pico Bolívar despejado en un día soleado",
            },
            href: "/montana/pico-bolivar",
          },
          {
            title: "Pico Humboldt",
            meta: "4.940 m · Mérida",
            text: "La segunda cumbre del país, con el último glaciar que le quedaba a Venezuela.",
            photo: {
              src: "/images/commons/flanco-norte-del-pico-humboldt.jpg",
              alt: "Flanco norte del Pico Humboldt, en la Sierra Nevada de Mérida",
            },
          },
          {
            title: "Sierra de La Culata",
            meta: "Mérida",
            text: "La otra gran sierra de Mérida, de páramos abiertos y roca desnuda.",
            photo: { src: "/images/commons/picos-en-la-culata.jpg", alt: "Picos de la Sierra de La Culata, estado Mérida" },
          },
          {
            title: "Pico Espejo",
            meta: "4.765 m · Mérida",
            text: "La última estación del teleférico Mukumbarí, el más alto y largo del mundo.",
            photo: {
              src: "/images/merida-pico-espejo.png",
              alt: "Estación de Pico Espejo del teleférico Mukumbarí",
            },
          },
        ],
      },
      {
        slug: "vida-en-el-paramo",
        number: "04",
        title: "Vida en el páramo",
        lede: "Por encima del bosque y por debajo de la nieve hay un mundo propio: frío, húmedo y lento.",
        layout: "band",
        photo: {
          src: "/images/commons/paramo-1.jpg",
          alt: "Frailejones en un páramo de los Andes venezolanos",
        },
        items: [
          { title: "Frailejones", text: "Plantas de hojas afelpadas que retienen el agua de la niebla." },
          { title: "Lagunas", text: "De origen glaciar, frías y transparentes." },
          { title: "Agricultura", text: "Papa, trigo, zanahoria y ajo en pendiente." },
          { title: "Pueblos", text: "Casas de teja y plazas a más de dos mil metros." },
        ],
      },
      {
        slug: "cultura-andina",
        number: "05",
        title: "Cultura andina",
        lede: "Otra manera de construir, de sembrar y de vivir. También de comer: pisca andina, trigo, papas, quesos ahumados y dulces de leche.",
        layout: "gallery",
        items: [
          {
            title: "Los pueblos",
            meta: "Apartaderos · Mucuchíes · Jají",
            text: "Casas de teja en el fondo del valle, a más de tres mil metros.",
            photo: {
              src: "/images/commons/vista-del-pueblo-de-apartaderos.jpg",
              alt: "Vista del pueblo andino de Apartaderos, estado Mérida",
            },
          },
          {
            title: "La plaza",
            meta: "Arquitectura",
            text: "Iglesia encalada, plaza empedrada y montaña detrás. El esquema se repite en todo el páramo.",
            photo: {
              src: "/images/commons/plaza-bolivar-de-los-nevados.jpg",
              alt: "Plaza Bolívar del pueblo de Los Nevados, en los Andes de Mérida",
            },
          },
          {
            title: "La siembra",
            meta: "Agricultura de altura",
            text: "Papa, trigo y hortalizas en terrazas sobre la pendiente.",
            photo: { src: "/images/commons/siembra-y-pueblo.jpg", alt: "Cultivos en pendiente junto a un pueblo andino" },
          },
        ],
      },
      {
        slug: "antes-de-subir",
        number: "06",
        title: "Antes de subir",
        lede: "La altura no perdona la prisa.",
        layout: "tips",
        items: [
          { title: "Altitud", text: "Sube por etapas y duerme una noche a media altura antes de seguir." },
          { title: "Frío", text: "Lleva capas. En el páramo puede helar de noche aunque el día sea soleado." },
          { title: "Sol", text: "La radiación sube con la altura: protector, gorra y gafas incluso con niebla." },
          { title: "Preparación", text: "Las cumbres nevadas requieren guía, equipo técnico y experiencia previa." },
        ],
      },
    ],
    closing: {
      text: "En la montaña se sube despacio. Es la única forma de llegar arriba y, de paso, de entender lo que se está viendo.",
    },
    credits: [
      {
        title: "Páramo Las Coloradas, estado Táchira",
        author: "Nackort",
        license: "CC BY-SA 3.0",
        href: "https://commons.wikimedia.org/wiki/File:Paramo_Andino_Estado_Tachira.jpg",
      },
      {
        title: "Pico Bolívar en día despejado",
        author: "Paolo Costa",
        license: "CC BY-SA 4.0",
        href: "https://commons.wikimedia.org/wiki/File:Pico_Bol%C3%ADvar_al_desnudo_en_d%C3%ADa_soleado_y_despejado.jpg",
      },
      {
        title: "Pico Bolívar, Mérida",
        author: "Gerson Márquez",
        license: "CC BY-SA 3.0",
        href: "https://commons.wikimedia.org/wiki/File:Pico_Bol%C3%ADvar,_M%C3%A9rida.JPG",
      },
      {
        title: "Teleférico del Pico Espejo",
        author: "Ivan Carvajal",
        license: "CC BY-SA 3.0",
        href: "https://commons.wikimedia.org/wiki/File:Telef%C3%A9rico_del_Pico_Espejo.JPG",
      },
      { title: "Frailejones del páramo", author: "Adolfo (Ajerit)", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Paramo_1.jpg" },
      { title: "Picos en La Culata", author: "Arnaldo Noguera Sifontes", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Picos_en_La_Culata.jpg" },
      { title: "Flanco norte del Pico Humboldt", author: "Massieljc", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Flanco_norte_del_Pico_Humboldt.jpg" },
      { title: "Pueblo de Apartaderos", author: "Rjcastillo", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Vista_del_pueblo_de_Apartaderos.jpg" },
      { title: "Plaza Bolívar de Los Nevados", author: "José Alfaro", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Plaza_Bolivar_de_Los_Nevados.jpg" },
      { title: "Siembra y pueblo, Andes de Mérida", author: "José Alfaro", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Siembra_y_pueblo.jpg" },
    ],
  },

  /* ==================================================================== */
  /* SELVA Y RÍOS — profunda, natural, inmersiva. Fotografías grandes.    */
  /* ==================================================================== */
  "selva-y-rios": {
    slug: "selva-y-rios",
    eyebrow: "El país de las grandes aguas",
    title: "Selva y ríos",
    intro:
      "Ríos que conectan ciudades y comunidades, selvas que cubren el sur y rocas de un pasado remoto. En esta Venezuela, el agua marca el paisaje y la vida cotidiana.",
    hero: {
      src: "/images/commons/cano-zorro-15020517430.jpg",
      alt: "Caño Zorro entre la vegetación de Amazonas",
      position: "center 40%",
    },
    meta: {
      title: "Selva y ríos de Venezuela | Mrs Venezuela",
      description:
        "El Orinoco, el Amazonas venezolano, el Delta, Guayana y Canaima: los grandes ríos, las selvas y los pueblos que viven en ellos.",
    },
    indexLabel: "En esta guía",
    backLabel: "Volver al inicio",
    sections: [
      {
        slug: "un-pais-de-grandes-aguas",
        number: "01",
        title: "Un país de grandes aguas",
        lede: "El Orinoco recorre unos 2.140 kilómetros y su cuenca cubre más de las cuatro quintas partes de Venezuela. Alrededor de él se ordenan los llanos, la Guayana y el delta: aquí el agua no atraviesa el paisaje, lo organiza.",
        layout: "prose",
      },
      {
        slug: "el-orinoco",
        number: "02",
        title: "El Orinoco",
        lede: "El río que explica el país.",
        layout: "band",
        photo: {
          src: "/images/commons/panoramica-del-rio-orinoco-en-amazonas.jpg",
          alt: "Panorámica de un tramo ancho del río Orinoco a su paso por Amazonas",
        },
        items: [
          { title: "Geografía", text: "Nace en la sierra Parima y desemboca en el Atlántico por un delta de miles de caños." },
          { title: "Historia", text: "Fue vía de entrada, frontera y camino de la independencia: Angostura está en su orilla." },
          { title: "Vida", text: "Sus riberas alimentan pesca, agricultura, ciudades y comunidades indígenas." },
        ],
      },
      {
        slug: "amazonas",
        number: "03",
        title: "Amazonas",
        lede: "El estado más extenso después de Bolívar y el menos poblado del país: selva, ríos y afloramientos de roca antiquísima. Puerto Ayacucho es su puerta; más allá, las distancias se miden en horas de navegación.",
        layout: "feature",
        photo: {
          src: "/images/commons/rio-sipapo-amazonas.jpg",
          alt: "Río Sipapo rodeado de selva en el estado Amazonas",
        },
        items: [
          { title: "Selva", text: "Bosque húmedo continuo, con una de las mayores diversidades biológicas del continente." },
          { title: "Roca", text: "Cerros y tepuyes del Escudo Guayanés emergen entre la vegetación." },
          { title: "Guía del estado", href: "/estado/amazonas" },
        ],
      },
      {
        slug: "delta-del-orinoco",
        number: "04",
        title: "Delta del Orinoco",
        lede: "Antes del Atlántico, el río se abre en cientos de caños, islas y manglares. Es territorio ancestral del pueblo warao, que vive en él desde mucho antes de que existiera Venezuela.",
        layout: "band",
        photo: {
          src: "/images/commons/delta-orinoco-atardecer.jpg",
          alt: "Atardecer sobre las aguas del delta del Orinoco",
        },
        items: [
          { title: "Caños", text: "Brazos de río que sustituyen a las carreteras." },
          { title: "Manglares", text: "Bosques anfibios entre el agua dulce y la salada." },
          { title: "Moriche", text: "La palma de la que dependen alimento, fibra y vivienda." },
          { title: "Mareas", text: "El Atlántico entra y sale dos veces al día." },
        ],
      },
      {
        "slug": "guayana",
        "number": "05",
        "title": "Guayana",
        "lede": "Ríos, ciudades ribereñas, sabanas y selvas: cuatro formas de acercarse a la Guayana venezolana.",
        "layout": "gallery",
        "items": [
          {
            "title": "El Caroní",
            "meta": "Ciudad Guayana",
            "text": "El gran afluente del Orinoco, con saltos como La Llovizna antes de unirse a él.",
            "photo": {
              "src": "/images/commons/la-llovizna-1.jpg",
              "alt": "Salto La Llovizna, en el río Caroní, Ciudad Guayana"
            }
          },
          {
            "title": "El Orinoco",
            "meta": "Ciudad Bolívar",
            "text": "A orillas de la antigua Angostura, el río une paisaje, historia y vida urbana.",
            "photo": {
              "src": "/images/commons/ciudad-bolivar-historical-zone.jpg",
              "alt": "Ciudad Bolívar y el río Orinoco, con el puente Angostura al fondo"
            }
          },
          {
            "title": "La Gran Sabana",
            "meta": "Bolívar",
            "text": "Sabana alta entre tepuyes, con ríos de agua oscura y saltos en el camino.",
            "photo": {
              "src": "/images/commons/la-gran-sabana.jpg",
              "alt": "Paisaje de la Gran Sabana con tepuyes al fondo"
            }
          },
          {
            "title": "Canaima",
            "meta": "Patrimonio de la Humanidad",
            "text": "Tres millones de hectáreas de tepuyes, selva y sabana; dentro está el Salto Ángel.",
            "photo": {
              "src": "/images/salto-angel.jpg",
              "alt": "Salto Ángel cayendo del Auyantepuy"
            }
          }
        ]
      },
      {
        "slug": "pueblos-y-territorio",
        "number": "06",
        "title": "Pueblos y territorio",
        "lede": "Pueblos con lenguas, saberes y formas de organización propias. Conocer sus territorios implica escuchar a sus comunidades y respetar sus decisiones.",
        "layout": "list",
        "items": [
          {
            "title": "Pemón",
            "meta": "Bolívar",
            "text": "Gran Sabana y cuenca del Caroní. Su lengua y tradición oral forman parte de la memoria del territorio."
          },
          {
            "title": "Warao",
            "meta": "Delta Amacuro",
            "text": "El delta es su territorio ancestral; la navegación y el tejido de fibras de moriche forman parte de su cultura."
          },
          {
            "title": "Ye'kwana",
            "meta": "Bolívar y Amazonas",
            "text": "Cuencas del Caura y del alto Ventuari. La navegación y la cestería enlazan conocimientos y vida cotidiana."
          },
          {
            "title": "Uwottüja",
            "meta": "Amazonas",
            "text": "Orinoco medio y ríos Sipapo, Autana y Cuao. También conocidos como piaroa, mantienen su lengua y saberes propios."
          }
        ]
      },
      {
        "slug": "naturaleza",
        "number": "07",
        "title": "Naturaleza",
        "lede": "Cuatro ambientes conectados por el agua, cada uno con su propia vida.",
        "layout": "gallery",
        "items": [
          {
            "title": "Ríos",
            "meta": "Agua en movimiento",
            "text": "Caños, rápidos y saltos enlazan paisajes muy distintos. Aquí, la Quebrada de Jaspe revela el lecho rocoso.",
            "photo": {
              "src": "/images/commons/gran-sabana-quebrada-de-jaspe-i-1.jpg",
              "alt": "Quebrada de Jaspe, en la Gran Sabana"
            }
          },
          {
            "title": "Bosques",
            "meta": "Amazonas",
            "text": "La vegetación acompaña las orillas y cubre el suelo de sombra. Agua y bosque forman un mismo paisaje.",
            "photo": {
              "src": "/images/commons/cano-zorro-15020517430.jpg",
              "alt": "Caño de aguas claras sobre roca roja en la selva de Amazonas"
            }
          },
          {
            "title": "Tepuyes",
            "meta": "Escudo Guayanés",
            "text": "Mesetas de roca antigua con ambientes y especies singulares, como el Kukenán.",
            "photo": {
              "src": "/images/commons/kukenan-tepuy.jpg",
              "alt": "Tepuy Kukenán entre nubes"
            }
          },
          {
            "title": "Biodiversidad",
            "meta": "Selvas del sur",
            "text": "Aves, insectos y plantas comparten el bosque. El piapoco de garganta blanca es una de sus muchas especies.",
            "photo": {
              "src": "/images/commons/piapoco-de-garganta-blanca-ramphastos-tucanus-cuvieri.jpg",
              "alt": "Piapoco de garganta blanca entre la vegetación"
            }
          }
        ]
      },
    ],
    closing: {
      text: "Aquí el agua no atraviesa el territorio. Lo organiza: decide dónde se vive, por dónde se viaja y de qué se come.",
    },
    credits: [
      { title: "Casco histórico de Ciudad Bolívar", author: "Venecon", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Ciudad_Bol%C3%ADvar_historical_zone.jpg" },
      {
        title: "Salto Hacha y curiara, Canaima",
        author: "Wilfredor",
        license: "CC BY-SA 4.0",
        href: "https://commons.wikimedia.org/wiki/File:Salto_Hacha_y_curiara_sector_occidental.jpg",
      },
      {
        title: "La Gran Sabana",
        author: "Paolo Costa Baldi",
        license: "CC BY-SA 3.0",
        href: "https://commons.wikimedia.org/wiki/File:La_Gran_Sabana.jpg",
      },
      {
        title: "Quebrada de Jaspe, Gran Sabana",
        author: "Vinícius Pinheiro",
        license: "CC BY-SA 4.0",
        href: "https://commons.wikimedia.org/wiki/File:Gran_Sabana_Quebrada_de_Jaspe_I_(1).jpg",
      },
      {
        title: "Tepuy Kukenán",
        author: "Paolo Costa Baldi",
        license: "CC BY-SA 3.0",
        href: "https://commons.wikimedia.org/wiki/File:Kukenan_tepuy.jpg",
      },
      { title: "Panorámica del río Orinoco", author: "Shishoxisrax", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Panor%C3%A1mica_del_r%C3%ADo_Orinoco_en_Amazonas.jpg" },
      { title: "Río Sipapo, Amazonas", author: "Fernando Flores", license: "CC BY-SA 2.0", href: "https://commons.wikimedia.org/wiki/File:R%C3%ADo_Sipapo_-_Sipapo_River_(12917850754).jpg" },
      { title: "Caño Zorro, Amazonas", author: "Fernando Flores", license: "CC BY-SA 2.0", href: "https://commons.wikimedia.org/wiki/File:Ca%C3%B1o_Zorro_(15020517430).jpg" },
      { title: "Delta del Orinoco", author: "Antolin Martinez A.", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Delta_del_Orinoco_110514-27.JPG" },
      { title: "Salto La Llovizna, río Caroní", author: "Daniel Méndez", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:La_Llovizna_1.jpg" },
      { title: "Piapoco de garganta blanca", author: "Fernando Flores", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Piapoco_de_garganta_blanca_(Ramphastos_tucanus_cuvieri).jpg" },
    ],
  },

  /* ==================================================================== */
  /* CIUDADES Y CULTURA — humana, arquitectónica. Tarjetas cuadradas.     */
  /* ==================================================================== */
  "ciudades-y-cultura": {
    slug: "ciudades-y-cultura",
    eyebrow: "Venezuela vivida",
    title: "Ciudades y cultura",
    intro:
      "Nueve de cada diez venezolanos viven en ciudades, y cada una mira a un sitio distinto: al mar, al lago, a la montaña, al llano o al río. La cultura del país nace de esa diferencia.",
    hero: {
      src: "/images/caracas-avila.jpg",
      alt: "Caracas al pie del cerro Ávila",
    },
    meta: {
      title: "Ciudades y cultura de Venezuela | Mrs Venezuela",
      description:
        "Caracas, Maracaibo, Barquisimeto, Coro y Puerto Cabello; el patrimonio, la música, las fiestas y la artesanía que explican Venezuela.",
    },
    indexLabel: "En esta guía",
    backLabel: "Volver al inicio",
    sections: [
      {
        slug: "venezuela-urbana",
        number: "01",
        title: "Venezuela urbana",
        lede: "Venezuela se urbanizó muy deprisa: en 1936 la mayoría vivía en el campo y hoy casi nadie. Ese salto, empujado por el petróleo, explica sus ciudades, su música y buena parte de su manera de hablar.",
        layout: "prose",
      },
      {
        slug: "ciudades-que-cuentan-el-pais",
        number: "02",
        title: "Ciudades que cuentan el país",
        lede: "Ocho ciudades, ocho maneras de conocer Venezuela.",
        layout: "gallery",
        items: [
          {
            title: "Caracas",
            meta: "Distrito Capital",
            text: "Caracas combina edificios, plazas y vida cultural en un valle al pie del Ávila. Su arquitectura moderna y sus espacios urbanos muestran distintas maneras de vivir y recorrer la capital de Venezuela.",
            photo: { src: "/images/commons/caracas-atardecer.jpg", alt: "Caracas al atardecer, con sus edificios y el Ávila a la derecha", position: "60% 50%" },
          },
          {
            title: "Maracaibo",
            meta: "Zulia",
            text: "Maracaibo reúne la vida del lago, el comercio y una identidad cultural propia. El puente Rafael Urdaneta y la gaita zuliana ayudan a entender su relación con el agua y sus tradiciones.",
            photo: {
              src: "/images/commons/maracaibo-ciudad.jpg",
              alt: "Vista urbana de Maracaibo, con avenidas y edificios",
              position: "60% 50%",
            },
          },
          {
            title: "Ciudad Bolívar",
            meta: "Bolívar",
            text: "Ciudad Bolívar conserva la memoria de Angostura entre calles y tejados frente al Orinoco. Su casco antiguo permite acercarse al Congreso de 1819 y a la importancia del río para la ciudad.",
            photo: {
              src: "/images/commons/ciudad-bolivar-historical-zone.jpg",
              alt: "Casco histórico de Ciudad Bolívar sobre el río Orinoco",
            },
          },
          {
            title: "Coro",
            meta: "Falcón",
            text: "Coro conserva casas de tierra, patios y calles que muestran su herencia colonial. Junto con el puerto de La Vela, su patrimonio permite descubrir arquitectura adaptada al clima y a la región.",
            photo: { src: "/images/commons/coro-calle-colonial.jpg", alt: "Calle con casas coloniales en Coro, estado Falcón", position: "center" },
          },
          {
            title: "Barquisimeto",
            meta: "Lara",
            text: "Barquisimeto es una ciudad musical y un punto de encuentro entre varias regiones venezolanas. Su catedral y la devoción a la Divina Pastora muestran dos caras de su arquitectura y sus tradiciones.",
            photo: {
              src: "/images/commons/catedral-de-barquisimeto-dia-lluvioso.jpg",
              alt: "Catedral de Barquisimeto, estado Lara, bajo un cielo de lluvia",
            },
          },
          {
            title: "Cumaná",
            meta: "Sucre",
            text: "Cumaná reúne patrimonio urbano y vida costera en el oriente de Venezuela. La basílica de Santa Inés y el castillo San Antonio de la Eminencia permiten acercarse a momentos de su historia.",
            photo: { src: "/images/commons/cumana-ciudad-mar.jpg", alt: "Vista aérea de Cumaná, sus edificios y la costa caribeña", position: "70% 50%" },
          },
          {
            title: "Puerto Cabello",
            meta: "Carabobo",
            text: "Puerto Cabello combina historia portuaria y calles coloniales con una estrecha relación con el mar. Entre Los Lanceros y el malecón, sus balcones y fachadas coloridas invitan a descubrir esta ciudad costera.",
            photo: { src: "/images/commons/puerto-cabello-los-lanceros.jpg", alt: "Calle Los Lanceros en el casco histórico de Puerto Cabello", position: "center" },
          },
          {
            title: "Trujillo",
            meta: "Trujillo",
            text: "Trujillo conserva calles estrechas e identidad andina marcada por sus paisajes y tradiciones. El monumento a la Virgen de la Paz muestra la importancia de la devoción en la ciudad de Trujillo.",
            photo: {
              src: "/images/commons/trujillo-plaza-mendoza.jpg",
              alt: "Plaza Cristóbal Mendoza en la ciudad de Trujillo",
              position: "52% 50%",
            },
          },
        ],
      },
      {
        slug: "patrimonio",
        number: "03",
        title: "Arquitectura que cuenta historias",
        lede: "¿Qué tienen de especial estos lugares? En sus edificios se ven el arte, las formas de vivir y los momentos que marcaron a Venezuela.",
        layout: "gallery",
        items: [
          {
            title: "Ciudad Universitaria",
            meta: "Caracas · Arte y arquitectura",
            text: "Fíjate en cómo los murales y las esculturas forman parte de los edificios. Carlos Raúl Villanueva unió arte y arquitectura en un campus donde se estudia entre obras de grandes artistas.",
            photo: { src: "/images/commons/biblioteca-central-de-la-ciudad-universitaria-caracas.jpg", alt: "Biblioteca Central de la Ciudad Universitaria de Caracas", position: "60% 50%" },
          },
          {
            title: "Coro y sus casas",
            meta: "Falcón · Tierra y patios",
            text: "Los muros de tierra, los patios y los corredores cuentan otra manera de construir. Coro y La Vela conservan técnicas tradicionales que mezclan aportes locales, españoles y neerlandeses: ahí está su singularidad.",
            photo: { src: "/images/commons/coro-patio-ventanas-hierro.jpg", alt: "Patio de la Casa de las Ventanas de Hierro, en Coro", position: "center" },
          },
          {
            title: "Casa de Angostura",
            meta: "Ciudad Bolívar · Independencia",
            text: "Detrás de sus balcones hay una historia decisiva: aquí se reunió el Congreso de Angostura en 1819. Bolívar pronunció su célebre discurso sobre cómo organizar la república; no es solo una fachada antigua.",
            photo: { src: "/images/commons/casa-congreso-angostura.jpg", alt: "Fachada de la Casa del Congreso de Angostura, en Ciudad Bolívar", position: "center" },
          },
        ],
      },
      {
        slug: "musica",
        number: "04",
        title: "Música",
        lede: "El país cambia de género cada pocos cientos de kilómetros.",
        layout: "facets",
        items: [
          { spotifyTrack: "joropo", title: "Joropo", meta: "Patrimonio UNESCO, 2025", text: "Arpa o bandola, cuatro y maracas. No es solo llanero: hay variantes andinas, orientales y centrales." },
          { spotifyTrack: "gaita", title: "Gaita zuliana", meta: "Zulia", text: "Furro, tambora, charrasca y cuatro. Suena en diciembre en todo el país." },
          { spotifyTrack: "calipso", title: "Calipso de El Callao", meta: "Bolívar", text: "Herencia antillana, sobre todo trinitaria, llegada con el oro en el siglo XIX. Se canta en español y en patois." },
          { spotifyTrack: "tambores", title: "Tambores", meta: "Costa central", text: "Ritmos afrovenezolanos ligados a las fiestas patronales de la costa." },
          { spotifyTrack: "andina", title: "Música andina", meta: "Mérida, Táchira y Trujillo", text: "Repertorios de cuerda y canto propios de los pueblos de montaña." },
        ],
      },
      {
        slug: "fiestas-y-tradiciones",
        number: "05",
        title: "Fiestas y tradiciones",
        lede: "Fiestas que reúnen a generaciones. Detrás de las máscaras, los tambores y las procesiones hay historias de fe y memoria compartida.",
        layout: "gallery",
        items: [
          {
            title: "Diablos Danzantes",
            meta: "Corpus Christi · UNESCO 2012",
            text: "De raíces coloniales, une la celebración católica del Corpus Christi con herencias africanas e indígenas. Las máscaras y la danza representan la rendición del mal ante el bien.",
            photo: {
              src: "/images/commons/diablos-yare-trajes.jpg",
              alt: "Diablos Danzantes de Yare con máscaras puestas y trajes rojos de cuerpo entero",
              position: "50% 50%",
            },
          },
          {
            title: "Zaragozas de Sanare",
            meta: "28 de diciembre · Sanare, Lara",
            text: "Ligada a la devoción por los Santos Inocentes, esta fiesta llena Sanare de música y danza. Sus participantes recorren las calles con máscaras artesanales y trajes coloridos, entre cantos y promesas religiosas.",
            photo: {
              src: "/images/commons/zaragozas-sanare.jpg",
              alt: "Participantes de las Zaragozas de Sanare con máscaras artesanales y trajes coloridos",
              position: "25% 50%",
            },
          },
          {
            title: "La Chinita",
            meta: "11 al 18 de noviembre · Maracaibo",
            text: "Según la tradición zuliana, una lavandera encontró en el lago una tablita con la imagen de la Virgen. De esa devoción nació una celebración que reúne gaitas, fe y comunidad.",
            photo: {
              src: "/images/commons/bajada-de-la-chinita-en-maracaibo-2023-01.jpg",
              alt: "Fuegos artificiales sobre la basílica durante la bajada de la Chinita en Maracaibo",
            },
          },
          {
            title: "Divina Pastora",
            meta: "14 de enero · Barquisimeto",
            text: "La procesión comenzó en 1856, cuando Barquisimeto pidió protección ante una epidemia de cólera. Cada enero, los fieles renuevan esa devoción acompañando a la Virgen desde Santa Rosa.",
            photo: {
              src: "/images/commons/divina-pastora-procesion.jpg",
              alt: "Multitud acompañando la imagen de la Divina Pastora en Barquisimeto",
              position: "20% 50%",
            },
          },
        ],
      },
      {
        slug: "artesania-y-memoria",
        number: "06",
        title: "Artesanía y memoria",
        lede: "Cada oficio pertenece a un lugar concreto: no existe una artesanía venezolana única.",
        layout: "facets",
        items: [
          { title: "Cestería", text: "Fibras vegetales trabajadas por pueblos indígenas del sur y del occidente." },
          { title: "Cerámica", text: "Barro cocido con formas y usos distintos en cada región." },
          { title: "Textiles", text: "Del chinchorro de la Guajira a los tejidos de lana de los Andes." },
          { title: "Talla y máscaras", text: "Objetos rituales y de fiesta, vinculados a celebraciones locales." },
        ],
      },
    ],
    closing: {
      text: "Ninguna ciudad venezolana explica el país por sí sola. Todas juntas, apenas, empiezan a hacerlo.",
    },
    credits: [
      { title: "Caracas al atardecer, con sus edificios y el Ávila a la derecha — imagen redimensionada; recorte de presentación", author: "Periodismodepaz", license: "CC BY 4.0", href: "https://commons.wikimedia.org/wiki/File:Atardecer_en_Caracas_2.jpg" },
      {
        title: "Vista urbana de Maracaibo, con avenidas y edificios — imagen redimensionada; recorte de presentación",
        author: "José ILIDIO Spinola",
        license: "CC BY-SA 2.0",
        href: "https://commons.wikimedia.org/wiki/File:MaracaiboView_(cropped).jpg",
      },
      { title: "Calle Los Lanceros en el casco histórico de Puerto Cabello — imagen redimensionada; recorte de presentación", author: "Jesus Enrique Morao Blanco", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Calle_%22Los_Lanceros%22_en_Puerto_Cabello.jpg" },
      { title: "Casco histórico de Ciudad Bolívar", author: "Venecon", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Ciudad_Bol%C3%ADvar_historical_zone.jpg" },
      { title: "Calle con casas coloniales en Coro, estado Falcón — imagen redimensionada; recorte de presentación", author: "Grégory David Escobar Fernández", license: "CC BY 2.0", href: "https://commons.wikimedia.org/wiki/File:Calle_en_Coro_2.JPG" },
      { title: "Catedral de Barquisimeto", author: "Rodolfo Pimentel", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Catedral_de_Barquisimeto_d%C3%ADa_lluvioso.jpg" },
      { title: "Vista aérea de Cumaná, sus edificios y la costa caribeña — imagen redimensionada; recorte de presentación", author: "BID Ciudades Sostenibles", license: "CC BY 2.0", href: "https://commons.wikimedia.org/wiki/File:Cumana_sucre.jpg" },
      { title: "Plaza Cristóbal Mendoza en la ciudad de Trujillo — imagen redimensionada; recorte de presentación", author: "Rjcastillo", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Plaza_Cristobal_Mendoza.jpg" },
      { title: "Diablos Danzantes de Yare con máscaras puestas y trajes rojos de cuerpo entero — imagen redimensionada; recorte de presentación", author: "Josedrg08", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Danzantes_de_Yare.jpg" },
      { title: "Participantes de las Zaragozas de Sanare con máscaras artesanales y trajes coloridos — imagen redimensionada; recorte de presentación", author: "Rodolfo Pimentel", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Zaragozas_original.jpg" },
      { title: "Bajada de la Chinita, Maracaibo", author: "Mgta122001vzla", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Bajada_de_la_Chinita_en_Maracaibo_2023_01.jpg" },
      { title: "La Divina Pastora durante la procesión en Barquisimeto, entre flores y feligreses — imagen redimensionada; recorte de presentación", author: "Rodolfo Pimentel", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:DIVINA_PASTORA_en_la_procesi%C3%B3n_los_feligreses_tom%C3%A1ndole_fotos.jpg" },
{ title: "Biblioteca Central, Ciudad Universitaria de Caracas", author: "Jorge Andrés Paparoni Bruzual", license: "CC BY-SA 2.0", href: "https://commons.wikimedia.org/wiki/File:Biblioteca_Central_de_la_Ciudad_Universitaria_Caracas.jpg" },
      { title: "Patio de la Casa de las Ventanas de Hierro, en Coro — imagen redimensionada; recorte de presentación", author: "Janethrodri", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Patio_Casa_de_las_Ventanas_de_Hierro.jpg" },
      { title: "Fachada de la Casa del Congreso de Angostura, en Ciudad Bolívar — imagen redimensionada; recorte de presentación", author: "LHommeDuMonde", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Casa_de_Angostura,_Ciudad_Bol%C3%ADvar..jpg" },
    ],
  },

  /* ==================================================================== */
  /* SABORES — cálida, cercana. El plato es cuadrado.                     */
  /* ==================================================================== */
  sabores: {
    slug: "sabores",
    eyebrow: "Venezuela desde su mesa",
    title: "Sabores de Venezuela",
    intro:
      "Un país también se recorre comiendo. Y aquí no hay una cocina, sino seis o siete: el maíz manda en todas, pero lo que lo acompaña cambia con el clima, el río y quién llegó a cada puerto.",
    hero: {
      src: "/images/arepa.jpg",
      alt: "Arepas venezolanas recién hechas",
    },
    meta: {
      title: "Sabores de Venezuela | Mrs Venezuela",
      description:
        "La cocina venezolana en fotografías: arepa, pabellón, cachapa y hallaca, los sabores de cada región, el cacao, los dulces, los ingredientes y la mesa de diciembre.",
    },
    indexLabel: "En esta guía",
    backLabel: "Volver al inicio",
    sections: [
      {
        slug: "una-cocina-de-muchas-regiones",
        number: "01",
        title: "Una cocina de muchas regiones",
        lede: "No existe una sola cocina venezolana. El maíz y la yuca son la base común; a partir de ahí, los Andes cocinan con trigo y papa, el oriente con pescado y los llanos con carne asada a la leña.",
        layout: "prose",
      },
      {
        slug: "iconos-venezolanos",
        number: "02",
        title: "Iconos venezolanos",
        lede: "Seis platos que casi cualquier venezolano reconoce, esté donde esté.",
        layout: "food-dishes",
        items: [
          {
            title: "Arepa",
            meta: "Todo el país · Raíz prehispánica",
            text: "Pan de maíz cocido en budare, compartido con otros pueblos del norte de Sudamérica. Su nombre suele vincularse con «erepa», voz cumanagota asociada al maíz. Desde 1960 la harina precocida la hizo diaria; se abre y se rellena.",
            photo: { src: "/images/commons/arepas-tradicionales.jpg", alt: "Arepas de maíz asándose en una venta de Caripe, Monagas" },
          },
          {
            title: "Pabellón criollo",
            meta: "Todo el país · Almuerzo",
            text: "Carne mechada, caraotas negras, arroz blanco y tajadas de plátano maduro. Suele considerarse el plato nacional. Con un huevo frito encima se llama «a caballo»; con las tajadas a los lados, «con barandas».",
            photo: { src: "/images/commons/pabellon-criollo-venezolano.jpg", alt: "Plato de pabellón criollo venezolano" },
          },
          {
            title: "Cachapa",
            meta: "Todo el país · Maíz tierno",
            text: "Masa de jojoto molido, dulce, cocida en budare y doblada sobre queso de mano. Su pariente, la cachapa de hoja, se envuelve en la hoja del maíz y se cuece en agua.",
            photo: { src: "/images/commons/cachapa-con-queso-e-mano.jpg", alt: "Cachapa doblada sobre queso de mano" },
          },
          {
            title: "Hallaca",
            meta: "Todo el país · Diciembre",
            text: "Masa de maíz teñida con onoto, rellena de guiso de carnes, envuelta en hoja de plátano y hervida. Documentada desde el siglo XVIII, cambia según la región y la familia: la andina, por ejemplo, suele llevar garbanzos.",
            photo: { src: "/images/commons/tradicionales-hallacas.jpg", alt: "Armado de hallacas sobre la hoja de plátano, con el guiso alrededor", position: "25% 50%" },
          },
          {
            title: "Tequeños",
            meta: "Caracas y el centro · Pasapalo",
            text: "Bastones de queso blanco envueltos en masa de trigo y fritos. Su nombre suele vincularse con Los Teques, aunque no hay prueba documental. A mediados del siglo XX ya eran habituales en las fiestas.",
            photo: { src: "/images/commons/tequenos-venezolanos.jpg", alt: "Tequeños fritos, uno partido mostrando el queso", position: "90% 50%" },
          },
          {
            title: "Empanada",
            meta: "Todo el país · Desayuno",
            text: "De raíz ibérica, en Venezuela se hace con masa de maíz y se fríe. Se rellena de carne mechada, queso o caraotas; en Margarita y el oriente es clásica la de cazón.",
            photo: { src: "/images/commons/empanadas-de-venezuela.jpg", alt: "Empanadas venezolanas de harina de maíz sobre un plato de vidrio, una de ellas mordida", position: "100% 50%" },
          },
        ],
      },
      {
        slug: "sabores-por-region",
        number: "03",
        title: "Sabores por región",
        lede: "La misma mesa cambia por completo según dónde te sientes.",
        layout: "food-regions",
        items: [
          {
            title: "Andes",
            meta: "Mérida · Táchira · Trujillo",
            dishes: ["Pastelitos andinos", "Pisca andina", "Arepa de trigo", "Trucha"],
            text: "Cocina de clima frío: papa, lácteos y trigo, un cereal cuyo cultivo colonial se asocia sobre todo a estas montañas. La trucha, introducida en 1937, hoy es habitual.",
            photo: { src: "/images/commons/pastelitos-andinos.jpg", alt: "Pastelitos andinos recién fritos en una cesta" },
          },
          {
            title: "Oriente",
            meta: "Sucre · Anzoátegui · Nueva Esparta · Monagas",
            dishes: ["Empanada de cazón", "Pastel de chucho", "Pescado frito"],
            text: "La costa y la pesca definen la mesa. En Margarita, el pastel de chucho, atribuido al cocinero Rubén Santiago en los años ochenta, deriva del cuajado oriental.",
            photo: { src: "/images/commons/pescado-frito-con-arepa.jpg", alt: "Pescado frito con arepa, tomate y limón, al estilo de Margarita" },
          },
          {
            title: "Zulia",
            meta: "Maracaibo y el Lago",
            dishes: ["Patacón", "Mandoca", "Huevos chimbos"],
            text: "Alrededor del Lago de Maracaibo está una de las grandes zonas lecheras del país. El plátano maduro y el queso aparecen en muchas preparaciones, también en las dulces.",
            photo: { src: "/images/commons/mandocas-maracuchas.jpg", alt: "Mandoca maracucha, rosca frita de maíz y plátano maduro" },
          },
          {
            title: "Llanos",
            meta: "Apure · Barinas · Guárico · Portuguesa · Cojedes",
            dishes: ["Carne en vara", "Pisillo", "Carato"],
            text: "Cocina ganadera de sabana, con carne asada a la leña y plátano. En Semana Santa se come chigüire, cuya caza exige permiso oficial.",
            photo: { src: "/images/commons/entreverado-llanero.jpg", alt: "Carne en vara y entreverado asándose junto a la hoguera en un hato llanero", position: "65% 50%" },
          },
          {
            title: "Guayana",
            meta: "Bolívar · Amazonas · Delta Amacuro",
            dishes: ["Sapoara", "Pescado de río", "Catara"],
            text: "Conviven la yuca amarga de los pueblos indígenas y el pescado del Orinoco. En agosto, la pesca de la sapoara abre la Feria del Orinoco en Ciudad Bolívar.",
            photo: { src: "/images/commons/pescado-de-rio-amazonas.jpg", alt: "Pescado de río sobre hoja de plátano, con yuca y ensalada, en Amazonas" },
          },
          {
            title: "Costa central",
            meta: "Aragua · Carabobo · La Guaira · Miranda",
            dishes: ["Pescado con tostones", "Sancocho de pescado", "Cafunga"],
            text: "Litoral de pescadores y antiguas haciendas de cacao, con honda herencia afrovenezolana en Barlovento. Frente al mar, el pescado llega con tostones.",
            photo: { src: "/images/commons/pescado-frito-con-tostones.jpg", alt: "Pescado frito con tostones y ensalada, plato típico de la costa aragüeña" },
          },
        ],
      },
      {
        slug: "cacao-y-chocolate",
        number: "04",
        title: "Cacao y chocolate",
        lede: "Venezuela produce poco cacao —unas 29.400 toneladas en 2024 según FAOSTAT, el 0,6% del mundo— pero figura en la lista de cacao fino de aroma de la Organización Internacional del Cacao.",
        layout: "food-cacao",
        photo: {
          src: "/images/commons/cacao-tostado.jpg",
          alt: "Granos de cacao tostados en un cuenco de barro, listos para moler",
        },
        items: [
          {
            title: "Chuao",
            meta: "Aragua · Denominación de origen",
            text: "Un pueblo sin carretera, al que se llega en lancha desde Choroní. Su cacao tiene denominación de origen desde el año 2000: la única de cacao del país, según el SAPI (2026).",
            photo: { src: "/images/commons/cacao-chuao.jpg", alt: "Granos de cacao secándose al sol en el patio del pueblo de Chuao, estado Aragua" },
          },
          {
            title: "Paria",
            meta: "Sucre",
            text: "En la península predomina el cacao trinitario, que se comercializa con el nombre de Río Caribe, por el pueblo del mismo nombre.",
            photo: { src: "/images/commons/cacao-paria.jpg", alt: "Mazorcas maduras de cacao en el tronco, en la península de Paria" },
          },
          {
            title: "Sur del Lago",
            meta: "Zulia · Mérida",
            text: "Al pie de los Andes se cultiva el Porcelana, un cacao criollo de almendra blanca cuando está fresca.",
            photo: { src: "/images/commons/cacao-santa-apolonia.jpg", alt: "Granos de cacao cultivado en Santa Apolonia, en el Sur del Lago merideño" },
          },
        ],
      },
      {
        slug: "dulces-panes-y-bebidas",
        number: "05",
        title: "Dulces, panes y bebidas",
        lede: "Lo que se come a media mañana, lo que acompaña el café y lo que se bebe con calor.",
        layout: "food-groups",
        groups: [
          {
            title: "Dulces",
            items: [
              {
                title: "Quesillo",
                meta: "Todo el país",
                text: "Versión venezolana del flan, con huevos enteros y leche condensada sobre caramelo. Su nombre suele explicarse por sus agujeritos, parecidos a los de un queso.",
                photo: { src: "/images/commons/quesillo.jpg", alt: "Quesillo venezolano con el caramelo por encima, en una fuente de vidrio" },
              },
              {
                title: "Dulce de lechosa",
                meta: "Diciembre",
                text: "Tiras de lechosa verde cocidas en almíbar de papelón o azúcar, a veces con clavo. Tradicionalmente se prepara para la mesa de Navidad.",
                photo: { src: "/images/commons/dulce-de-lechosa.jpg", alt: "Dulce de lechosa en almíbar dorado, servido en un plato" },
              },
              {
                title: "Bienmesabe",
                meta: "Todo el país",
                text: "Bizcocho humedecido en licor, alternado con crema de coco y yemas y cubierto de merengue. Suele terminarse con canela.",
                photo: { src: "/images/commons/bienmesabe.jpg", alt: "Torta de bienmesabe cubierta de coco rallado y franjas de canela" },
              },
            ],
          },
          {
            title: "Panes",
            items: [
              {
                title: "Golfeado",
                meta: "Pan dulce",
                text: "Espiral de masa con papelón, queso blanco y anís. La tradición lo sitúa en las panaderías de Petare a comienzos del siglo XX.",
                photo: { src: "/images/commons/golfeado-4.jpg", alt: "Golfeado visto desde arriba, con su espiral cubierta de papelón" },
              },
              {
                title: "Cachito",
                meta: "Panadería",
                text: "Pan enrollado con jamón antes de hornearse. Su origen no está documentado; entre las versiones que circulan, una lo liga a panaderos portugueses.",
                photo: { src: "/images/commons/cachito-de-jamon.jpg", alt: "Cachito de jamón partido por la mitad", position: "20% 50%" },
              },
            ],
          },
          {
            title: "Bebidas",
            items: [
              {
                title: "Papelón con limón",
                meta: "Refresco casero",
                text: "Papelón disuelto en agua fría con jugo de limón. Es el refresco casero más común en almuerzos y ventas de comida.",
                photo: { src: "/images/commons/papelon-con-limon-2.jpg", alt: "Vaso de papelón con limón con hielo y rodajas de limón", position: "50% 100%" },
              },
              {
                title: "Chicha",
                meta: "Bebida de arroz",
                text: "La de la calle es de arroz, dulce y sin fermentar, y la venden los chicheros. En los Andes se hace otra, fermentada.",
                photo: { src: "/images/commons/chicha.jpg", alt: "Chicha venezolana de arroz servida en vaso, con canela por encima", position: "90% 50%" },
              },
              {
                title: "Tizana",
                meta: "Bebida de frutas",
                text: "Frutas picadas en jugo de naranja o de patilla, con granadina, que le da su color rojizo. Se vende todo el año.",
                photo: { src: "/images/commons/tizana.jpg", alt: "Vaso de tizana roja con trozos de fruta", position: "50% 80%" },
              },
            ],
          },
        ],
      },
      {
        slug: "migraciones-en-la-mesa",
        number: "06",
        title: "Migraciones en la mesa",
        lede: "Parte de lo que hoy se come aquí lo trajo gente que llegó en barco o cruzó la frontera.",
        layout: "food-influences",
        items: [
          {
            title: "Europa",
            meta: "España · Portugal · Italia",
            text: "España dejó la base colonial, reforzada por los canarios a mediados del siglo XX. Los portugueses, muchos de Madeira, marcaron el comercio de alimentos; los italianos ayudaron a popularizar la pasta.",
            photo: { src: "/images/commons/panaderia-la-asuncion.jpg", alt: "Pan recién horneado en los estantes de una panadería de La Asunción, Margarita" },
          },
          {
            title: "Levante",
            meta: "Siria · Líbano",
            text: "Sirios y libaneses llegaron desde la segunda mitad del siglo XIX, con nuevas oleadas en el XX. Con ellos, el quibbe y el tabule se volvieron comunes.",
            photo: { src: "/images/commons/comida-arabe-maracaibo.jpg", alt: "Quibbe, hojas de parra rellenas, tabule y hummus en un restaurante de Maracaibo" },
          },
          {
            title: "Países vecinos",
            meta: "Colombia · Trinidad y las Antillas",
            text: "Con Colombia, la mesa se comparte: hay arepas a ambos lados de la frontera, cada una a su manera. En El Callao, los antillanos llegados con el oro dejaron el calalú.",
            photo: { src: "/images/commons/arepa-de-chocolo.jpg", alt: "Arepa de chócolo colombiana rellena de queso" },
          },
        ],
      },
      {
        slug: "ingredientes-de-venezuela",
        number: "07",
        title: "Ingredientes de Venezuela",
        lede: "Siete productos que sostienen casi todo lo anterior.",
        layout: "food-pantry",
        items: [
          {
            title: "Maíz",
            meta: "Base indígena",
            text: "El cereal central de la cocina venezolana, de origen indígena: se muele seco o se usa tierno, como jojoto.",
            dishes: ["Arepa", "Hallaca", "Cachapa", "Bollos"],
            photo: { src: "/images/commons/maiz.jpg", alt: "Mazorcas de maíz amarillo peladas" },
          },
          {
            title: "Yuca",
            meta: "Yuca amarga · Casabe",
            text: "Exprimida, la yuca amarga da el casabe, pan de raíz indígena que la UNESCO reconoció en 2024 en una candidatura de cinco países.",
            dishes: ["Casabe", "Mañoco"],
            photo: { src: "/images/commons/esto-es-casabe.jpg", alt: "Tortas de casabe secándose en varas junto al fogón de leña", position: "72% 40%" },
          },
          {
            title: "Plátano",
            meta: "Verde o maduro",
            text: "Llegó al Caribe con los europeos a comienzos del siglo XVI y hoy está en casi todas las mesas.",
            dishes: ["Tajadas", "Tostones", "Patacón", "Pastel de chucho"],
            photo: { src: "/images/commons/platanos-chuao.jpg", alt: "Racimo de plátanos verdes a orillas del río de Chuao", position: "67% 50%" },
          },
          {
            title: "Ají dulce",
            meta: "Sazón",
            text: "Un Capsicum chinense casi sin picor, de la misma especie que ajíes muy picantes.",
            dishes: ["Hallaca", "Guisos", "Pescado"],
            photo: { src: "/images/commons/aji-dulce.jpg", alt: "Ajíes dulces verdes, rojos y naranjas en un mercado" },
          },
          {
            title: "Papelón",
            meta: "Endulzante",
            text: "Jugo de caña cocido y solidificado en bloques; en otros países se llama panela.",
            dishes: ["Papelón con limón", "Golfeado", "Dulces de coco"],
            photo: { src: "/images/commons/papelon.jpg", alt: "Bloques de papelón apilados" },
          },
          {
            title: "Cacao",
            meta: "Cultivo histórico",
            text: "Fue la principal exportación de la Venezuela colonial en los siglos XVII y XVIII.",
            dishes: ["Chocolate", "Chocolate caliente"],
            photo: { src: "/images/commons/mazorca-de-cacao.jpg", alt: "Mazorca de cacao abierta con sus granos, en Delta Amacuro" },
          },
          {
            title: "Quesos",
            meta: "De mano · Guayanés · Telita · Llanero",
            text: "Blandos y frescos, el de mano, el guayanés y el telita; duro y salado, el llanero, que se ralla sobre caraotas y arepas.",
            dishes: ["Cachapa", "Arepa", "Caraotas"],
            photo: { src: "/images/commons/queso-llanero.jpg", alt: "Rueda de queso llanero sobre una tabla de madera" },
          },
        ],
      },
      {
        slug: "la-mesa-de-diciembre",
        number: "08",
        title: "La mesa de diciembre",
        lede: "En Nochebuena y Año Nuevo la hallaca comparte la mesa con otros tres clásicos, y para brindar llega el ponche crema.",
        layout: "food-table",
        photo: {
          src: "/images/commons/plato-tipico-navideno.jpg",
          alt: "Plato navideño venezolano con hallaca, pan de jamón, ensalada de gallina y pernil",
        },
        items: [
          {
            title: "Hallaca",
            text: "Se prepara en familia y se come durante todo diciembre.",
            photo: { src: "/images/commons/hallacas-amarradas.jpg", alt: "Dos hallacas amarradas en hoja de plátano" },
          },
          {
            title: "Pan de jamón",
            text: "Relleno de jamón, pasas y aceitunas. Se atribuye a la panadería Ramella, en Caracas, a comienzos del siglo XX.",
            photo: { src: "/images/commons/pan-de-jamon.jpg", alt: "Rebanada de pan de jamón con su espiral de jamón y aceitunas" },
          },
          {
            title: "Pernil",
            text: "Pierna de cerdo adobada y horneada durante horas; lo que sobra suele terminar en pan.",
            photo: { src: "/images/commons/pernil-horneado.jpg", alt: "Pernil de cerdo horneado en su bandeja" },
          },
          {
            title: "Ensalada de gallina",
            text: "Papa, zanahoria y gallina desmenuzada con mayonesa, pariente de la ensaladilla rusa.",
            photo: { src: "/images/commons/ensalada-de-gallina.jpg", alt: "Ensalada de gallina con guisantes en una cena de Navidad" },
          },
        ],
      },
    ],
    closing: {
      text: "Un país también se cuenta por lo que pone sobre la mesa.",
    },
    credits: [
      { title: "Arepas (portada)", author: "Steven Depolo", license: "CC BY 2.0", href: "https://commons.wikimedia.org/wiki/File:Arepitas_Food_Macro.jpg" },
      { title: "Arepas tradicionales en Caripe", author: "Wilmeris Hernández", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Arepas_Tradicionales.jpg" },
      { title: "Pabellón criollo", author: "Wilfredor", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Pabell%C3%B3n_Criollo_Venezolano.jpg" },
      { title: "Cachapa con queso de mano", author: "Jonathan de Almeida", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Cachapa_Con_Queso_e_Mano.JPG" },
      { title: "Hallacas tradicionales", author: "Tomás Rojas", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Tradicionales_Hallacas.jpg" },
      { title: "Tequeños venezolanos", author: "Rodolfo Pimentel", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Teque%C3%B1os_Venezolanos.jpg" },
      { title: "Empanadas de Venezuela", author: "Laura Fiorucci", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Empanadas_de_Venezuela.jpg" },
      { title: "Pastelitos andinos", author: "Julio Sifontes", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Pastelitos_Andinos.jpg" },
      { title: "Pescado frito con arepa", author: "Wilfredor", license: "CC0", href: "https://commons.wikimedia.org/wiki/File:Plato_de_pescado_frito_con_arepa.jpg" },
      { title: "Mandocas maracuchas", author: "DamianFinol", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Mandocas_maracuchas.jpg" },
      { title: "Carne en vara y entreverado llanero", author: "Douglas Bracho", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Un_entreverado_bien_llanero.JPG" },
      { title: "Pescado de río en Amazonas (luz ajustada)", author: "Rasiel Morella", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Comida_t%C3%ADpica,_Amazonas.JPG" },
      { title: "Pescado frito con tostones", author: "Menu1973", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Plato_tipico_en_Maracay.jpg" },
      { title: "Cacao tostado", author: "ElmerGuevara", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Cacao_Tostado..JPG" },
      { title: "Cacao secándose en Chuao", author: "Bucare2011", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Cacao_Chuao.jpg" },
      { title: "Mazorcas de cacao en Paria", author: "Luisovalles", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Cacao-fruto.jpg" },
      { title: "Cacao de Santa Apolonia, Mérida", author: "Wilfredor", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Semillas_de_cacao.jpg" },
      { title: "Quesillo venezolano", author: "Muago", license: "CC0", href: "https://commons.wikimedia.org/wiki/File:Quesillo_venezolano_2.jpg" },
      { title: "Dulce de lechosa", author: "Muago", license: "CC0", href: "https://commons.wikimedia.org/wiki/File:Dulce_de_lechosa.jpg" },
      { title: "Torta de bienmesabe", author: "Muago", license: "CC0", href: "https://commons.wikimedia.org/wiki/File:Torta_de_bienmesabe.jpg" },
      { title: "Golfeado", author: "Muago", license: "CC0", href: "https://commons.wikimedia.org/wiki/File:Golfeado_4.jpg" },
      { title: "Cachito de jamón", author: "Luis Miguel Cisneros", license: "CC BY 2.0", href: "https://commons.wikimedia.org/wiki/File:Cachito_de_Jam%C3%B3n.jpg" },
      { title: "Papelón con limón", author: "Muago", license: "CC0", href: "https://commons.wikimedia.org/wiki/File:Papel%C3%B3n_con_lim%C3%B3n_2.jpg" },
      { title: "Chicha venezolana", author: "Muago", license: "CC0", href: "https://commons.wikimedia.org/wiki/File:Chicha_venezolana_2.jpg" },
      { title: "Tizana", author: "Muago", license: "CC0", href: "https://commons.wikimedia.org/wiki/File:Tizana.jpg" },
      { title: "Panadería en La Asunción", author: "Wilfredor", license: "CC0", href: "https://commons.wikimedia.org/wiki/File:Panaderia_Don_Bosco_en_la_Asuncion_12.jpg" },
      { title: "Comida árabe en Maracaibo (recorte)", author: "Ronaldy Lugo", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:COMIDA_ARABE_EN_MARACAIBO.JPG" },
      { title: "Arepa de chócolo", author: "John Alexis Guerra Gómez", license: "CC BY-SA 2.0", href: "https://commons.wikimedia.org/wiki/File:Arepa_de_Ch%C3%B3colo.jpg" },
      { title: "Maíz pelado", author: "Davidperezc77", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Maiz_Pelado.JPG" },
      { title: "Casabe", author: "Wilmeris Hernández", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Esto_es_casabe.jpg" },
      { title: "Plátanos en el río de Chuao", author: "Isamarvda", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Pl%C3%A1tanos_a_orillas_del_r%C3%ADo_de_Chuao.jpg" },
      { title: "Ají dulce", author: "Wilfredor", license: "CC0", href: "https://commons.wikimedia.org/wiki/File:Sweet_Pepper_Market.jpg" },
      { title: "Papelón en bloques", author: "Elifeleth", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Panela_en_cuadros.JPG" },
      { title: "Mazorca de cacao, Delta Amacuro", author: "Grace Rengifo", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Cacao_(Delta_Amacuro).JPG" },
      { title: "Queso llanero", author: "Muago", license: "CC0", href: "https://commons.wikimedia.org/wiki/File:Queso_llanero.jpg" },
      { title: "Plato navideño venezolano (recorte)", author: "jonathan de Almeida", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Plato_Tipico_Navide%C3%B1o.JPG" },
      { title: "Hallacas de Navidad", author: "Wilfredor", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Hallaca,_Venezuelan_Christmas_food.jpg" },
      { title: "Pan de jamón", author: "Wilfredor", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Pan_de_jamon,_Venezuelan_food.jpg" },
      { title: "Pernil horneado", author: "Jovannabonilla", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Pierna_de_cochino_en_salsa.JPG" },
      { title: "Ensalada de gallina, del plato navideño (recorte)", author: "David Hernández", license: "CC BY-SA 2.0", href: "https://commons.wikimedia.org/wiki/File:Cena_navidad_2007.jpg" },
    ],
  },
};
