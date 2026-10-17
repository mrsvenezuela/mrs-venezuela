import type { StateGuideData } from "@/lib/states/types";

const photos = {
  choroni: { src: "/images/choroni.jpg", alt: "Playa Grande de Choroní, con cocoteros y el cerro Papelón junto al mar Caribe, estado Aragua", position: "center 50%" },
  cata: { src: "/images/bahia-de-cata.jpg", alt: "Bahía de Cata desde lo alto, con la playa, una torre de apartamentos y la cordillera de la Costa detrás, estado Aragua", position: "center 50%" },
  cuyagua: { src: "/images/cuyagua.jpg", alt: "Playa de Cuyagua, con cocoteros, oleaje abierto y un cerro de la cordillera de la Costa al fondo, estado Aragua", position: "center 50%" },
  cacao: { src: "/images/commons/cacao-chuao.jpg", alt: "Granos de cacao secándose al sol en el pueblo de Chuao, con los cerros de la costa de Aragua al fondo", position: "center 70%" },
};

export const aragua: StateGuideData = {
  slug: "aragua",
  name: "Aragua",
  heroKicker: "Centro de Venezuela",
  heroTagline: "Selva nublada, tambores, cacao y mar.",
  hero: { src: "/images/commons/aragua-maracay.jpg", alt: "El centro de Maracay desde lo alto, con su plaza arbolada y la cordillera de la Costa al fondo, estado Aragua", position: "center 52%" },

  intro: {
    eyebrow: "Guía de estado",
    title: "Aragua: dónde queda y qué visitar.",
    paragraphs: [
      "Aragua está en el centro-norte de Venezuela y su capital es Maracay, entre Caracas y Valencia. Maracay está en el interior: para llegar a Choroní, Cata o Cuyagua hay que cruzar la montaña. Elige primero si quieres ciudad, playa o una estancia en la Colonia Tovar; no conviene intentar conocerlo todo en un día.",
      "Es un estado para escuchar tambores en Choroní una noche de San Juan, ver a los Diablos Danzantes de la costa, probar el chocolate de Chuao, tomar un café en la Colonia Tovar y entender por qué Maracay fue, en tiempos de Juan Vicente Gómez, el centro del poder en Venezuela.",
    ],
    aside: { label: "En una frase", text: "Un estado que cruza la montaña para llegar al mar." },
  },

  know: {
    title: "CONOCE ARAGUA",
    description: "Valles, montaña y litoral en un mismo estado.",
    paragraphs: [
      "Aragua ocupa el centro-norte de Venezuela, entre Carabobo al oeste, Guárico al sur y Miranda y La Guaira al este. Su franja norte mira al mar Caribe, y por el medio corre la Cordillera de la Costa, que separa los valles interiores del litoral.",
      "Los valles de Aragua, cálidos y fértiles, concentran las ciudades: Maracay, la capital, Turmero, La Victoria, Cagua y Villa de Cura. Al oeste, el estado comparte con Carabobo el Lago de Valencia, una cuenca cerrada sin salida al mar; hacia el sur, el relieve se suaviza camino de los llanos.",
      "Al norte de la cordillera, el paisaje cambia por completo: la selva nublada del Parque Nacional Henri Pittier baja hasta bahías como Choroní, Cata y Cuyagua. En las alturas del este, la Colonia Tovar guarda un clima fresco y una herencia alemana que sorprende a quien llega por primera vez.",
    ],
    facts: [
      { label: "Capital", value: "Maracay" },
      { label: "Región", value: "Centro de Venezuela" },
      { label: "Paisaje", value: "Valles, Cordillera de la Costa, Lago de Valencia y litoral caribeño" },
      { label: "Superficie", value: "7.014 km²" },
      { label: "Altitud", value: "Del nivel del mar a 2.436 m en el Pico El Cenizo" },
      { label: "Clima", value: "Cálido en costa y valles, templado en las alturas" },
      { label: "Gentilicio", value: "Aragüeño / aragüeña" },
    ],
  },

  history: {
    description: "Valles de hacienda, una batalla de jóvenes y la ciudad que fue sede del poder.",
    paragraphs: [
      "Antes de la llegada de los españoles, las orillas del lago de Tacarigua, hoy Lago de Valencia, estaban habitadas por pueblos como los tacariguas y los guayamures, y hacia los valles del este vivían grupos caribes como los meregotos, junto a asentamientos arahuacos. El propio nombre del estado se atribuye a una voz cumanagoto, de la familia caribe, vinculada a la palma de chaguaramo. De esa capa indígena quedan topónimos, hallazgos arqueológicos en las riberas del lago y una memoria que sigue presente en la región.",
      "Los pueblos coloniales nacieron a lo largo de poco más de un siglo: Choroní en 1616, Turmero y La Victoria en 1620, Maracay como parroquia en 1701, Villa de Cura en 1722 y Ocumare de la Costa en 1731. Los valles se llenaron de haciendas de caña, añil y cacao, y el cacao de Chuao y Choroní ganó fama fuera del país. Cuando Alexander von Humboldt pasó por Maracay en 1800, la llamó Ciudad Jardín, un nombre que la ciudad todavía conserva.",
      "La independencia dejó en Aragua dos fechas que el país recuerda. El 12 de febrero de 1814, en La Victoria, José Félix Ribas resistió a las tropas de Boves con jóvenes seminaristas y universitarios traídos desde Caracas; por eso Venezuela celebra ese día el Día de la Juventud. Dos años después, el 6 de julio de 1816, Simón Bolívar desembarcó en Ocumare de la Costa y proclamó allí la abolición de la esclavitud. Aragua fue provincia desde 1848 y estado desde 1864.",
      "El siglo XX hizo de Maracay una ciudad de poder. Juan Vicente Gómez se instaló en ella desde 1908, trasladó la capital del estado desde La Victoria en 1917 y levantó la Escuela de Aviación Militar, la Plaza Bolívar, el Hotel Jardín y la Maestranza César Girón. En 1937, Rancho Grande se convirtió en el primer parque nacional de Venezuela, hoy Henri Pittier. Aragua reúne esa herencia con la cultura afrovenezolana de la costa y la huella alemana de la Colonia Tovar.",
    ],
    photo: photos.cacao,
  },

  defines: {
    title: "LO QUE DEFINE A ARAGUA",
    description: "Tres rasgos que explican el estado.",
    panorama: photos.cata,
    items: [
      {
        name: "La selva nublada de Henri Pittier",
        text: "Creado en 1937 como Rancho Grande, el primer parque nacional de Venezuela cubre 107.800 hectáreas entre Aragua y Carabobo. Sus laderas suben del mar a 2.436 metros y pasan del bosque seco a la selva nublada. Cruzarlo por carretera, entre niebla y helechos, es ya parte del viaje.",
      },
      {
        name: "La costa de los tambores",
        text: "Choroní, Chuao, Ocumare, Cata y Cuyagua son pueblos de pescadores y cacao donde la herencia afrovenezolana se expresa con tambores. La noche de San Juan, el 24 de junio, y el Corpus Christi, con sus Diablos Danzantes, marcan un calendario que convierte la costa en una fiesta compartida.",
      },
      {
        name: "El cacao de Chuao",
        text: "En un valle sin carretera, al que se llega en lancha desde Puerto Colombia, Chuao cultiva cacao criollo desde hace unos cuatro siglos. Su nombre es una referencia mundial y cuenta con denominación de origen. Probarlo en el propio pueblo, después de cruzar el mar, es una experiencia que resume el estado.",
      },
    ],
  },

  places: {
    description: "Una selección para recorrer Aragua de los valles a la costa.",
    items: [
      {
        name: "Choroní y Puerto Colombia",
        text: "Al final de la carretera que cruza Henri Pittier, el pueblo colonial de Choroní, fundado en 1616, conserva calles tranquilas y una iglesia antigua. Unos pasos más allá, Puerto Colombia reúne el malecón, las lanchas hacia Chuao y Playa Grande, una franja de arena de casi un kilómetro.",
        photo: photos.choroni,
        href: "/playa/choroni",
      },
      {
        name: "Bahía de Cata",
        text: "Un arco de arena fina encerrado entre montañas, a unos 58 kilómetros de Maracay por la vía de El Limón y Ocumare. Es una de las playas más conocidas de esta costa, con cabañas y restaurantes, y punto de partida hacia Catica y otras ensenadas a las que solo se llega por mar.",
        photo: photos.cata,
        href: "/playa/bahia-de-cata",
      },
      {
        name: "Cuyagua",
        text: "Más allá de Cata, el camino sigue hasta Cuyagua, un pueblo de la costa de Ocumare con una playa abierta y de oleaje fuerte que atrae a surfistas. Cada Corpus Christi salen sus Diablos Danzantes, una tradición documentada desde 1773 y reconocida por la Unesco junto a otras cofradías del país.",
        photo: photos.cuyagua,
        href: "/playa/cuyagua",
      },
      {
        name: "La carretera de Rancho Grande",
        text: "La vía Maracay–Ocumare sube por el corazón de Henri Pittier. En su tramo alto están la Estación Biológica Rancho Grande, a cargo de la Universidad Central de Venezuela, y el Paso Portachuelo, por donde cada año cruzan decenas de especies de aves migratorias. Conviene detenerse y caminar un poco.",
        photo: null,
      },
      {
        name: "Colonia Tovar",
        text: "Fundada en 1843 por familias llegadas de Baden, en Alemania, la Colonia Tovar se asienta a unos 1.900 metros en la Cordillera de la Costa. Casas de estilo alemán, una iglesia inspirada en la de Endingen, fresas, duraznos y un dialecto propio, el alemán coloniero, hacen de ella un lugar aparte dentro del estado.",
        photo: null,
      },
      {
        name: "Maracay",
        text: "La capital se entiende mejor a través de la huella de Juan Vicente Gómez: la Plaza Bolívar inaugurada en 1930, el Hotel Jardín, la Maestranza César Girón y el primer hangar de la aviación venezolana, hoy Museo Aeronáutico. El Santuario de la Madre María de San José y el Teatro de la Ópera completan el paseo.",
        photo: null,
      },
    ],
  },

  culture: {
    description: "Tambores, diablos, cacao y una aldea alemana.",
    intro: "La cultura aragüeña tiene dos acentos: el de la costa, afrovenezolana y de cacao, y el de los valles y las alturas, donde conviven la capital, los pueblos coloniales y la Colonia Tovar.",
    blocks: [
      {
        label: "Gastronomía",
        title: "Sabores de costa, valle y montaña.",
        items: [
          { name: "Cacao y chocolate de Chuao", text: "El cacao criollo de la costa aragüeña, con Chuao como nombre mayor, se prueba en tabletas, bombones y bebidas elaboradas en los propios pueblos." },
          { name: "Pescado de la costa", text: "En Choroní, Ocumare y Cata la mesa gira alrededor del pescado del día, frito o a la parrilla, muy presente con tostones y ensalada." },
          { name: "Cachapa con queso de mano", text: "Torta de maíz tierno presente en todo el país. El queso de mano, con Villa de Cura entre sus productores históricos, es su pareja natural." },
          { name: "Fresas y embutidos de la Colonia Tovar", text: "Fresas con crema, duraznos, pastelería y embutidos de tradición alemana: la Colonia Tovar tiene una cocina propia que se disfruta mejor con el fresco de la montaña." },
        ],
      },
      {
        label: "Celebraciones",
        title: "Los Diablos Danzantes de Corpus Christi",
        text: "Cada Corpus Christi, cofradías de Ocumare de la Costa, Cata, Cuyagua, Turiamo y Chuao salen con máscaras y bailan de espaldas ante el Santísimo en señal de penitencia. En 2012 la Unesco inscribió a los Diablos Danzantes de Venezuela en su lista de patrimonio cultural inmaterial, y cinco de sus cofradías están en la costa de Aragua.",
      },
      {
        label: "Música",
        title: "Tambores de San Juan",
        text: "El 24 de junio la costa celebra a San Juan Bautista con tambores que suenan hasta la madrugada. En Choroní se distinguen toques, fulías, parrandas y repiques, y el pueblo entero participa. Es una de las expresiones más reconocibles de la herencia afrovenezolana del estado.",
      },
      {
        label: "Identidad",
        title: "El alemán coloniero",
        text: "En la Colonia Tovar todavía se habla el alemán coloniero, un dialecto de origen badense que llegó con los colonos de 1843 y convivió con el español durante generaciones. La arquitectura, la iglesia de San Martín de Tours y el Oktoberfest de cada octubre mantienen viva esa memoria sin convertirla en decorado.",
      },
    ],
  },

  nature: {
    description: "Del bosque nublado al manglar en pocos kilómetros.",
    intro: "La Cordillera de la Costa concentra casi toda la naturaleza de Aragua: en unos pocos kilómetros se pasa de la sabana de los valles a la selva nublada y de ahí a la costa, con manglares en La Ciénaga de Ocumare y Turiamo. El Lago de Valencia, al oeste, completa un mapa natural tan rico como frágil.",
    photo: photos.cuyagua,
    items: [
      { name: "Parque Nacional Henri Pittier", text: "Selva nublada, bosques secos y de galería y manglares en 107.800 hectáreas. Se han registrado 582 especies de aves, cerca del 43 % de las de Venezuela, y unas 140 de mamíferos." },
      { name: "Paso Portachuelo", text: "Una depresión de la cordillera dentro del parque por donde cruzan cada año más de 80 especies de aves migratorias del hemisferio norte. La Estación Biológica Rancho Grande estudia ese paso desde hace décadas." },
      { name: "La costa y sus manglares", text: "Entre Choroní y Turiamo, ríos cortos bajan del parque al mar y forman bahías como Cata, Cuyagua o Chuao. En La Ciénaga de Ocumare y la bahía de Turiamo crecen manglares que protegen la orilla." },
      { name: "Monumento Natural Pico Codazzi", text: "Creado en 1991 para unir Henri Pittier con el Parque Nacional Macarao, protege 11.850 hectáreas de bosques semicaducifolios, cuevas y rutas de aves migratorias junto a la carretera de La Victoria a la Colonia Tovar." },
      { name: "Lago de Valencia", text: "Una cuenca cerrada, sin salida al mar, de unos 344 km² y una veintena de islas, compartida con Carabobo. Es un paisaje de gran valor histórico que hoy afronta contaminación y cambios en su nivel." },
    ],
  },

  access: {
    description: "Llegar a Aragua.",
    intro: "Desde Caracas o Valencia, llega a Maracay por la Autopista Regional del Centro. Después elige una de dos carreteras de montaña: por Las Delicias hacia Choroní y Puerto Colombia, o por El Limón hacia Ocumare de la Costa, Cata y Cuyagua. No son la misma ruta. La Colonia Tovar se organiza como una salida aparte, por ejemplo desde La Victoria.",
    routes: [
      { mode: "aire", title: "Por aire", text: "Las puertas aéreas habituales están fuera del estado: el Aeropuerto Internacional Arturo Michelena, en Valencia, que sirve también a Aragua, y el Aeropuerto Internacional de Maiquetía, en La Guaira, conectado por autopista con los valles de Aragua." },
      { mode: "carretera", title: "Por carretera", text: "La Autopista Regional del Centro une Aragua con Caracas y Valencia y recorre los valles de La Victoria, Turmero y Maracay. Desde la capital salen las dos carreteras que cruzan Henri Pittier: una hacia Choroní y otra, por El Limón, hacia Ocumare de la Costa, Cata y Cuyagua. A la Colonia Tovar se sube desde La Victoria." },
      { mode: "mar", title: "Por mar", text: "Chuao, La Ciénaga de Ocumare y varias ensenadas no tienen carretera: se llega en lancha desde Puerto Colombia, en Choroní, o desde El Playón, en Ocumare. Acuerda el viaje con los lancheros del propio puerto." },
      { mode: "local", title: "Dentro del estado", text: "Las distancias son cortas, pero las carreteras de montaña son lentas y sinuosas. Entre los pueblos de la costa hay tramos sin conexión por tierra, y la lancha sustituye al carro." },
    ],
  },

  tips: {
    description: "Montaña, mar y fiesta: lo que conviene saber.",
    items: [
      { icon: "car", title: "La carretera del parque se conduce con calma", text: "Las vías hacia Choroní y Ocumare son estrechas, con curvas cerradas y niebla frecuente en lo alto. Sal temprano, usa las luces y evita conducir de noche." },
      { icon: "waves", title: "Respeta el oleaje", text: "Cuyagua y Playa Grande tienen mar abierto y corrientes. Atiende las indicaciones locales y, si viajas con niños, prefiere bahías cerradas como Cata." },
      { icon: "ship", title: "Para Chuao, lancha y acuerdo previo", text: "Los viajes salen de Puerto Colombia según el estado del mar. Pacta el precio de ida y vuelta y la hora de regreso antes de embarcar." },
      { icon: "bug", title: "Selva nublada: manga larga y repelente", text: "En Rancho Grande y el Paso Portachuelo la humedad es constante. Lleva calzado cerrado, una capa impermeable y repelente si piensas caminar entre el bosque." },
      { icon: "shirt", title: "Abrigo para la Colonia Tovar", text: "A casi dos mil metros, las tardes y las noches son frescas incluso en temporada seca. Un suéter o una chaqueta ligera bastan para estar cómodo." },
      { icon: "clock", title: "Fiestas que llenan los pueblos", text: "San Juan, a finales de junio, y el Corpus Christi reúnen a mucha gente en la costa. Reserva alojamiento con antelación y llega con margen." },
    ],
  },

  faqs: {
    description: "Dudas habituales antes de salir hacia Aragua.",
    items: [
      { question: "¿Maracay y Choroní están en el mismo estado?", answer: "Sí, ambos están en Aragua. Maracay es la capital, en el interior, y Choroní está en la costa. Los separa una carretera de montaña a través de Henri Pittier: no planifiques el traslado como si fueran barrios de una misma ciudad." },
      { question: "¿Cuántos días hacen falta para conocer Aragua?", answer: "Para empezar, reserva una jornada para Maracay y dos para una sola zona de costa: Choroní o el entorno de Ocumare. Si quieres Colonia Tovar o Chuao, añade días en lugar de acumular visitas y traslados en la misma jornada." },
      { question: "¿Se puede ir a Chuao por carretera?", answer: "No. Chuao no tiene acceso por tierra para vehículos: se llega en lancha desde Puerto Colombia, en Choroní, o a pie por senderos de montaña que atraviesan el parque. La lancha es la opción habitual para una visita de un día." },
      { question: "¿Cuándo se celebran los Diablos Danzantes y San Juan?", answer: "Los Diablos Danzantes salen el jueves de Corpus Christi, nueve semanas después del Jueves Santo, en Ocumare de la Costa, Cata, Cuyagua, Turiamo y Chuao. Los tambores de San Juan Bautista suenan alrededor del 24 de junio en toda la costa." },
      { question: "¿Qué tiene de especial el Parque Nacional Henri Pittier?", answer: "Fue el primer parque nacional de Venezuela, creado en 1937, y concentra una de las mayores diversidades de aves del país, con 582 especies registradas. Además, sus dos carreteras son el camino habitual hacia la costa aragüeña, así que casi cualquier viaje a la playa lo atraviesa." },
      { question: "¿Hace frío en la Colonia Tovar?", answer: "Es fresca más que fría. A su altitud, cerca de los 1.900 metros, las temperaturas son suaves de día y bajan de noche, algo poco habitual en un estado de valles cálidos y costa. Conviene llevar abrigo ligero." },
      { question: "¿Dónde conviene alojarse: Maracay o la costa?", answer: "Depende del plan. Maracay es práctica para moverse en todas las direcciones y conocer la ciudad. Si el objetivo es la playa y los tambores, dormir en Choroní, Puerto Colombia u Ocumare permite vivir la costa de noche y evitar el regreso por la montaña." },
    ],
  },

  credits: [
    { title: "Maracay desde la torre Sindoni", author: "Jesus0106h03", license: "CC0 1.0", href: "https://commons.wikimedia.org/wiki/File:MaracaydesdetorreSindoni.jpg" },
    { title: "Playa Grande de Choroní", author: "Christiane Pelda", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Playa_Grande,_Choron%C3%AD,_Aragua.JPG" },
    { title: "Bahía de Cata", author: "Marianny Mata", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Acerc%C3%A1ndose_al_Para%C3%ADso.JPG" },
    { title: "Playa de Cuyagua", author: "Carlos eduardo villegas", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Cuyagua_2.jpg" },
    { title: "Cacao de Chuao", author: "Bucare2011", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Cacao_Chuao.jpg" },
  ],

  seo: {
    title: "Aragua: dónde queda, sus playas y cómo llegar",
    description: "Ubica Aragua y su capital, Maracay. Organiza tu visita a Choroní, Cata, Cuyagua y Colonia Tovar con rutas de llegada y consejos para elegir tu base.",
  },

  layout: { historyPhotoSide: "left", placesFirstPhotoSide: "left", cultureTone: "dark" },
};
