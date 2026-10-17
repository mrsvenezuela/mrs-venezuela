import type { StateGuideData } from "@/lib/states/types";

export const barinas: StateGuideData = {
  slug: "barinas",
  name: "Barinas",
  heroKicker: "Llanos occidentales",
  heroTagline: "Sabana abierta con los Andes al fondo.",
  hero: { src: "/images/commons/barinas-ciudad.jpg", alt: "Casa de la Cultura Napoleón Sebastián Arteaga, edificio colonial del centro de Barinas", position: "center 25%" },

  intro: {
    eyebrow: "Guía de estado",
    title: "Barinas, donde el llano empieza a subir.",
    paragraphs: [
      "Barinas es la puerta de los llanos occidentales: una sabana amplia, recorrida por ríos que bajan de la cordillera, con la silueta de los Andes siempre al fondo. Aquí el paisaje no se elige, se atraviesa: del piedemonte cafetalero de Barinitas a las llanuras ganaderas que se pierden hacia el Apure.",
      "Es un estado de hatos, arpa y contrapunteo, pero también de una capital colonial que se ganó el nombre de Ciudad Marquesa. Viajar por Barinas es entender cómo conviven la tradición llanera, la memoria de la Guerra Federal y la naturaleza protegida de la Sierra Nevada en su vertiente barinesa.",
    ],
    aside: { label: "En una frase", text: "El llano que mira a la cordillera." },
  },

  know: {
    title: "CONOCE BARINAS",
    description: "Dónde está, cómo es y por qué cambia tanto de un extremo a otro.",
    paragraphs: [
      "Barinas ocupa el suroeste de Venezuela, entre la cordillera de Mérida y las llanuras del Apure. Limita con Cojedes, Portuguesa y Trujillo al norte, con Apure al sur, con Guárico al este y con Mérida y Táchira al oeste. Su territorio suma 35.200 km² y se reparte entre los llanos occidentales y el piedemonte andino.",
      "La geografía explica el estado: desde las montañas bajan ríos como el Santo Domingo, el Masparro, el Caparo, el Canaguá y el Uribante, todos tributarios del Apure. Esa abundancia de agua le ha dado el apodo de capital de los ríos y sostiene la ganadería y los cultivos de la llanura.",
      "Barinas, la capital, se levanta a orillas del Santo Domingo, a 187 metros de altitud, y concentra la vida administrativa y comercial. Desde ella se abren dos direcciones muy distintas: hacia arriba, Barinitas, Altamira de Cáceres y el páramo; hacia abajo, los hatos, los esteros y el río Apure.",
    ],
    facts: [
      { label: "Capital", value: "Barinas" },
      { label: "Región", value: "Llanos occidentales y piedemonte andino" },
      { label: "Paisaje", value: "Sabanas, ríos andinos, piedemonte y páramo de la Sierra Nevada" },
      { label: "Superficie", value: "35.200 km²" },
      { label: "Clima", value: "Cálido de sabana en el llano; templado y húmedo en la montaña" },
      { label: "Gentilicio", value: "Barinés / barinesa" },
    ],
  },

  history: {
    description: "De la ciudad viajera al llano federal.",
    paragraphs: [
      "Mucho antes de la conquista, el territorio barinés estuvo habitado por los pueblos de la cultura osoide, pescadores, cazadores y cultivadores de maíz que ocuparon estas tierras desde el primer milenio antes de nuestra era. En el piedemonte quedaron petroglifos atribuidos a grupos arahuacos y a comunidades vecinas de la montaña. El nombre del estado, de origen achagua o chibcha, se relaciona con un viento que sopla desde el noroeste y que todavía se siente en los valles.",
      "La capital es una ciudad que caminó. En 1577, el capitán Juan Andrés Varela la fundó como Altamira de Cáceres en el piedemonte; en 1628 se trasladó a la meseta de Barinitas y en el siglo XVIII bajó definitivamente al llano, donde se consolidó en 1762. Durante la colonia, el tabaco de Barinas se exportaba a Europa con fama propia, y en 1786 Carlos III elevó la jurisdicción a provincia. De aquella época de prosperidad le queda el apodo de Ciudad Marquesa.",
      "El siglo XIX dejó su huella en la sabana. El 10 de diciembre de 1859, en Santa Inés, a orillas del Santo Domingo, las tropas federales de Ezequiel Zamora vencieron al ejército del gobierno en una de las batallas decisivas de la Guerra Federal. Barinas quedó ligada desde entonces al federalismo: fue proclamada estado tras la contienda y, durante décadas, llevó el nombre de Estado Zamora, hasta recuperar el suyo en 1937.",
      "En el siglo XX, la ganadería extensiva siguió marcando el ritmo económico, y a ella se sumaron la agricultura y el petróleo de la cuenca Barinas-Apure. La identidad actual se reconoce en el joropo con arpa, en la poesía de Alberto Arvelo Torrealba, barinés autor de Florentino y el Diablo, y en una hospitalidad llanera que convive con el aire andino del piedemonte.",
    ],
  },

  defines: {
    title: "LO QUE DEFINE A BARINAS",
    description: "Tres rasgos que explican el estado.",
    panorama: { src: "/images/commons/barinas-piedemonte-andino.jpg", alt: "El piedemonte de Barinas: un camino baja entre la vegetación y al fondo se levantan las montañas de los Andes", position: "center 55%" },
    items: [
      {
        name: "El llano y el hato",
        text: "La sabana barinesa es tierra de ganado. Los hatos organizan la vida rural, el coleo es deporte criollo reconocido y la jornada empieza antes de que apriete el sol. En el llano el horizonte es plano, pero nunca vacío: garzas, chigüires y caballos forman parte del paisaje cotidiano.",
      },
      {
        name: "Los ríos que bajan de los Andes",
        text: "Santo Domingo, Masparro, Caparo, Canaguá, Uribante: los ríos nacen en la cordillera, cruzan el piedemonte y se entregan al Apure, que marca el sur del estado. Esa red de agua explica por qué a Barinas se le llama capital de los ríos y por qué sus embalses y balnearios forman parte de cualquier recorrido.",
      },
      {
        name: "El piedemonte y la Sierra Nevada",
        text: "Hacia el oeste, el llano se levanta. Barinitas, Altamira de Cáceres y los pueblos cafetaleros anuncian la montaña, y casi un tercio del Parque Nacional Sierra Nevada pertenece a Barinas. En pocas horas se pasa del calor de la sabana a la selva nublada y al páramo de frailejones.",
      },
    ],
  },

  places: {
    description: "Una selección para recorrer Barinas de la sabana a la montaña.",
    items: [
      {
        name: "Barinas, la Ciudad Marquesa",
        text: "La capital se recorre a partir de su casco central y de la Catedral de Nuestra Señora del Pilar, levantada en el siglo XVIII. El Museo Alberto Arvelo Torrealba y la Casa de la Cultura Napoleón Sebastián Arteaga guardan la memoria literaria y llanera de una ciudad que vivió del tabaco y del ganado.",
      },
      {
        name: "Barinitas",
        text: "A 864 metros, en la meseta donde la ciudad viajera se asentó en 1628, Barinitas es la entrada al piedemonte. Café, cacao, aguas termales y el río Santo Domingo acompañan a un pueblo que presume de ser cuna de poetas y que sirve de base para subir hacia la montaña.",
      },
      {
        name: "Altamira de Cáceres",
        text: "Primer asiento de Barinas, fundado en 1577 a unos 900 metros sobre la margen izquierda del Santo Domingo. Conserva casas de adobe y techos de teja, y a poca distancia una cascada de unos treinta metros cae sobre una poza en la que el agua invita a quedarse.",
      },
      {
        name: "Santa Inés",
        text: "A unos 36 kilómetros al este de la capital, junto al Santo Domingo, este pueblo llanero es el escenario de la batalla de 1859 que inclinó la Guerra Federal a favor de Ezequiel Zamora. Se visita por su memoria histórica y por la sabana que lo rodea.",
      },
      {
        name: "Socopó y el piedemonte ganadero",
        text: "En la franja donde los Andes se encuentran con el llano, Socopó es el centro de una zona lechera y platanera atravesada por ríos de montaña. La Troncal 5 la convierte en paso natural entre Barinas y Táchira, con la cordillera siempre a un lado del camino.",
      },
      {
        name: "La vertiente barinesa de la Sierra Nevada",
        text: "Más de 90.000 hectáreas del Parque Nacional Sierra Nevada están en Barinas. Desde Barinitas, la carretera hacia Santo Domingo y Apartaderos sube por el valle del río hasta el páramo, cruzando selva nublada y pueblos de montaña en uno de los ascensos más contrastados del país.",
      },
    ],
  },

  culture: {
    description: "Arpa, copla, ganado y cocina de sabana.",
    intro: "La cultura barinesa es llanera en su raíz, con el joropo y el contrapunteo como lengua común, pero en el piedemonte se tiñe de café, montaña y tradición andina.",
    blocks: [
      {
        label: "Gastronomía",
        title: "Lo que se come en el llano.",
        items: [
          { name: "Carne en vara", text: "Res asada lentamente sobre brasas, ensartada en varas de madera. Muy presente en los llanos y en cualquier celebración barinesa, suele acompañarse de yuca." },
          { name: "Cachapa con queso", text: "Tortilla de maíz tierno, dulce y gruesa, doblada sobre queso fresco. Asociada a toda la región llanera, aquí se sirve con los quesos de la producción local." },
          { name: "Pisillo", text: "Carne desmechada y sofrita con ajo y ají dulce, a menudo de venado o chigüire. Plato de tradición llanera, compartido con los estados vecinos." },
          { name: "Quesos llaneros", text: "La ganadería lechera de Barinas se traduce en quesos frescos y duros que aparecen en el desayuno, dentro de la arepa y junto a la cachapa." },
        ],
      },
      {
        label: "Música",
        title: "Joropo llanero y contrapunteo.",
        text: "El arpa, el cuatro y las maracas sostienen el joropo que Barinas comparte con Apure, Guárico y Portuguesa. En el contrapunteo, dos copleros se enfrentan con versos improvisados hasta que uno calla: la escena que Arvelo Torrealba llevó a Florentino y el Diablo. El joropo es Patrimonio Cultural de la Nación desde 2014.",
      },
      {
        label: "Tradiciones",
        title: "El coleo y la vida de hato.",
        text: "Los toros coleados, declarados deporte criollo y tradicional en 1981, reúnen a jinetes y público en las mangas durante las fiestas de los pueblos. Alrededor del hato persisten el trabajo de llano, la monta y la copla, que en Barinas siguen siendo oficio y no solo espectáculo.",
      },
      {
        label: "Celebraciones",
        title: "Patrona, antorchas y cuna de poetas.",
        text: "La Virgen del Pilar es la patrona del estado y su catedral preside la capital. En Altamira de Cáceres, las fiestas de la Inmaculada Concepción y el desfile de antorchas llevan décadas reuniendo al pueblo, y Barinitas reivindica su fama de cuna de poetas con los hermanos Arvelo Larriva.",
      },
    ],
  },

  nature: {
    description: "Sabana, ríos andinos y páramo en un mismo estado.",
    intro: "Pocos estados venezolanos reúnen tantos pisos de paisaje: el llano bajo del sur, la sabana alta de los hatos, el piedemonte de bosques y cafetales y, por encima, la selva nublada y el páramo de la Sierra Nevada. Los ríos que bajan de la cordillera cosen todos esos mundos hasta el Apure.",
    items: [
      { name: "Parque Nacional Sierra Nevada", text: "Creado en 1952 y compartido con Mérida, protege en Barinas más de 90.000 hectáreas de selva nublada y páramo. Aquí nacen el Santo Domingo y el Caparo, y habitan el oso andino, el puma y el cóndor." },
      { name: "Parque Nacional Tapo-Caparo", text: "Decretado en 1993 entre Barinas, Mérida y Táchira, resguarda unos 2.050 km² de bosques húmedos y quebradas alrededor del complejo Uribante-Caparo. Es territorio de jaguares, tucanes y una vegetación densa de helechos y musgos." },
      { name: "El río Apure y los llanos bajos", text: "Formado en Táchira por el Uribante y el Sarare, el Apure recorre el sur de Barinas antes de seguir hacia el Orinoco. Sus orillas y esteros concentran chigüires, caimanes, toninas y una gran variedad de aves." },
      { name: "Ríos de piedemonte y embalses", text: "Santo Domingo, Masparro, Boconó y Caparo bajan con fuerza desde la montaña y forman pozas y balnearios en el piedemonte. Tres embalses, en el Boconó, el Masparro y el Caparo, regulan su caudal en la llanura." },
      { name: "La sabana y sus símbolos", text: "La palma llanera, árbol emblemático del estado, salpica la sabana que en época de lluvias se llena de agua. La garza silbadora, ave símbolo de Barinas, resume un llano lleno de vida alada." },
    ],
  },

  access: {
    description: "Llegar a Barinas.",
    intro: "La capital es el punto de entrada natural: desde ella se organizan tanto la subida al piedemonte como las rutas hacia el llano.",
    routes: [
      { mode: "aire", title: "Por aire", text: "Barinas cuenta con el Aeropuerto Nacional Luisa Cáceres de Arismendi, a pocos kilómetros de la ciudad, con vuelos nacionales. Confirma la disponibilidad de rutas directamente con las aerolíneas antes de planificar." },
      { mode: "carretera", title: "Por carretera", text: "La Troncal 5, conocida como carretera de los Llanos, une Barinas con Guanare, Acarigua y el centro del país por un lado, y con Socopó, Santa Bárbara y San Cristóbal por el otro. Desde Mérida se baja por la carretera de Apartaderos y Santo Domingo hasta Barinitas." },
      { mode: "local", title: "Dentro del estado", text: "Las distancias son largas y el estado se recorre en vehículo. Hacia el piedemonte las vías son de montaña; hacia el sur, los caminos de sabana cambian con la temporada de lluvias, así que conviene preguntar en el lugar antes de salir." },
    ],
  },

  tips: {
    description: "Un estado de dos climas y horizontes largos.",
    items: [
      { icon: "sun", title: "Sol de sabana", text: "En el llano el sol cae sin sombra. Sombrero, protector solar y agua son parte del equipaje, y las horas centrales se aprovechan mejor bajo techo." },
      { icon: "droplets", title: "Dos estaciones", text: "Las lluvias llenan ríos y esteros y transforman la sabana; la sequía abre los caminos y concentra la fauna junto al agua. Elige según lo que quieras ver." },
      { icon: "shirt", title: "Ropa para dos climas", text: "Del calor de Barinas al fresco de Santo Domingo hay pocas horas de carretera. Lleva ropa ligera para el llano y una capa de abrigo para el páramo." },
      { icon: "users", title: "El hato tiene sus reglas", text: "Si visitas un hato o una manga de coleo, pregunta antes de acercarte al ganado y a los caballos, y deja que sean los llaneros quienes marquen el ritmo." },
      { icon: "bug", title: "Insectos junto al agua", text: "En ríos, esteros y pozas del piedemonte, el repelente es tan necesario como el protector solar, sobre todo al amanecer y al caer la tarde." },
      { icon: "camera", title: "Amaneceres y atardeceres", text: "La luz rasante del llano es la mejor para fotografiar garzas, ganado y horizontes. Madruga y vuelve a salir al final de la tarde." },
    ],
  },

  faqs: {
    description: "Lo que suele preguntarse antes de viajar a Barinas.",
    items: [
      { question: "¿Barinas es llano o Andes?", answer: "Las dos cosas. La mayor parte del territorio es sabana llanera, pero el oeste sube por el piedemonte hasta el páramo de la Sierra Nevada, cuyo parque nacional comparte con Mérida. Esa doble condición es lo que hace distinto al estado." },
      { question: "¿Cuántos días conviene dedicar a Barinas?", answer: "Con dos días se conoce la capital y se sube a Barinitas y Altamira de Cáceres. Un tercer día permite acercarse a un hato o a los ríos del piedemonte, y un cuarto, seguir hacia el páramo o hacia el llano del Apure." },
      { question: "¿Cuándo es mejor viajar a Barinas?", answer: "La temporada seca facilita los desplazamientos por la sabana y concentra la fauna en los ríos; la de lluvias pinta de verde el llano y llena pozas y cascadas del piedemonte. Ambas tienen sentido: depende de si buscas caminos despejados o paisaje de agua." },
      { question: "¿Qué es el contrapunteo?", answer: "Es el duelo cantado del joropo llanero: dos copleros improvisan versos, uno responde al otro, hasta que alguno se queda sin respuesta. Alberto Arvelo Torrealba, nacido en Barinas, lo convirtió en literatura con Florentino y el Diablo, donde un llanero canta contra el mismísimo diablo." },
      { question: "¿Se puede ir de Barinas a Mérida por carretera?", answer: "Sí. Desde la capital se sube a Barinitas y de ahí, por la carretera de Santo Domingo y Apartaderos, al páramo y a Mérida. Es un recorrido de montaña con curvas y cambios de clima, y una forma memorable de pasar del llano a los Andes." },
      { question: "¿Qué se come en Barinas?", answer: "Cocina de ganado y maíz: carne en vara, pisillo, cachapas con queso y los quesos de la ganadería local. Es la mesa llanera compartida con Apure, Guárico y Portuguesa, a la que el piedemonte añade café y cacao de sus propias cosechas." },
    ],
  },

  credits: [
    { title: "Casa de la Cultura de Barinas", author: "Salvatorelon", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Casa_de_la_cultura_Napole%C3%B3n_Sebasti%C3%A1n_Arteaga.jpg" },
    { title: "El pie de la montaña, estado Barinas", author: "Danniegugo", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:El_pie_de_la_monta%C3%B1a.JPG" },
  ],

  seo: {
    title: "Barinas: guía de los llanos y la cultura llanera",
    description: "Guía editorial de Barinas: la Ciudad Marquesa, Barinitas y el piedemonte, la Sierra Nevada, el río Apure, el joropo y la cocina llanera. Lugares y consejos.",
  },

  layout: { historyPhotoSide: "right", placesFirstPhotoSide: "left", cultureTone: "light" },
};
