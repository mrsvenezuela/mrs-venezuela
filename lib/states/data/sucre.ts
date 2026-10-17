import { commonsImage as commons } from "@/lib/commons-image";
import type { StateGuideData } from "@/lib/states/types";


const photos = {
  mochima: { src: "/images/mochima.jpg", alt: "Playa Colorada, de arena rojiza, con un peñero varado bajo los cocoteros, en el Parque Nacional Mochima, estado Sucre", position: "center 55%" },
  playaMedina: { src: commons("Playa Medina Peninsula Paria.jpg"), alt: "Playa Medina, con su cocotal hasta la arena, en la costa norte de la península de Paria, estado Sucre", position: "center 20%" },
  castillo: { src: "/images/commons/castillo-san-antonio-de-la-eminencia.jpg", alt: "Castillo de San Antonio de la Eminencia, con un cañón antiguo en primer plano, en Cumaná, estado Sucre", position: "75% 50%" },
};

export const sucre: StateGuideData = {
  slug: "sucre",
  name: "Sucre",
  heroKicker: "Oriente de Venezuela",
  heroTagline: "Mar profundo, dos penínsulas y cacao.",
  hero: { src: "/images/commons/sucre-cumana.jpg", alt: "Cumaná vista desde el castillo de San Antonio de la Eminencia, estado Sucre", position: "center 36%" },

  intro: {
    eyebrow: "Guía de estado",
    title: "Sucre, donde el oriente venezolano se abre al mar.",
    paragraphs: [
      "Sucre se entiende desde la costa: un mar profundo que baña islas y acantilados en Mochima, un golfo que se interna entre montañas hasta Cariaco y dos penínsulas que miran en direcciones distintas, Araya con sus salinas y Paria con sus bosques y cacaotales. Cumaná, la capital, guarda siglos de historia a orillas del Manzanares.",
      "Es un estado de pescadores y de pueblos con ritmo propio, donde el carnaval de Carúpano, los velorios de Cruz de Mayo y una cocina de mar marcan el calendario. Se recorre despacio, de bahía en bahía, entre lanchas de madera y haciendas que todavía secan el cacao al sol.",
    ],
    aside: { label: "En una frase", text: "El oriente que nació frente al mar." },
  },

  know: {
    title: "CONOCE SUCRE",
    description: "Dónde está, cómo es y por qué el mar lo explica casi todo.",
    paragraphs: [
      "Está en el nororiente de Venezuela, abierto al mar Caribe, y limita con Anzoátegui y Monagas. Su costa es larga y recortada: la península de Araya cierra por el norte el golfo de Cariaco, y la de Paria se alarga hacia el este hasta el golfo del mismo nombre, a pocas decenas de kilómetros de Trinidad.",
      "Tierra adentro, la serranía del Turimiquire levanta el relieve hasta unos 2.500 metros y separa la costa de los valles del interior. Entre la montaña y el mar conviven paisajes muy distintos: el bosque húmedo de Paria, los valles agrícolas del Manzanares y la franja seca y luminosa de Araya.",
      "Cumaná, la capital, es la puerta natural del estado: desde allí se sale hacia Mochima, hacia el golfo de Cariaco y, cruzando el agua, hacia Araya. Carúpano, en la costa nororiental, es la base para entrar en Paria, con sus playas de cocoteros y sus haciendas de cacao.",
    ],
    facts: [
      { label: "Capital", value: "Cumaná" },
      { label: "Región", value: "Oriente de Venezuela" },
      { label: "Paisaje", value: "Costa, islas, dos penínsulas, golfos y la serranía del Turimiquire" },
      { label: "Superficie", value: "11.800 km²" },
      { label: "Clima", value: "Cálido y semiárido en la costa de Cumaná y Araya; húmedo en la península de Paria" },
      { label: "Gentilicio", value: "Sucrense" },
    ],
  },

  history: {
    description: "Una costa que guarda los primeros capítulos de la historia venezolana.",
    paragraphs: [
      "Antes de cualquier fortaleza, esta costa era territorio de los cumanagotos y los chaimas, con presencia kariña hacia Paria y comunidades warao en los caños del golfo. Vivían de la pesca, el cultivo y el intercambio entre la costa y la montaña. Parte de esa herencia sigue a la vista: el nombre de Macuro viene de la lengua kariña, y el casabe de yuca continúa en la mesa de todo el estado.",
      "En agosto de 1498, durante su tercer viaje, Cristóbal Colón tocó tierra firme en Macuro, en la punta de Paria, y llamó Tierra de Gracia a aquella costa. En 1515, frailes dominicos se establecieron junto a la desembocadura del Manzanares; aquel asentamiento, refundado varias veces y llamado Cumaná desde 1569, es una de las ciudades más antiguas levantadas por europeos en el continente. Por eso se la conoce como la Primogénita.",
      "Durante la colonia, la sal de Araya atrajo a flotas holandesas, expulsadas en 1605 y de nuevo en 1623, y obligó a la Corona a levantar la fortaleza de Santiago de Arroyo, cuyas ruinas siguen frente al mar. En el siglo XVII nacieron Carúpano y Río Caribe, y Cumaná se protegió con el castillo de San Antonio de la Eminencia. Más tarde, comerciantes corsos impulsaron en Paria el cultivo y la exportación del cacao, que aún define la economía y el paisaje de la zona.",
      "Cumaná dio a la independencia americana a Antonio José de Sucre, el Gran Mariscal de Ayacucho que da nombre al estado, y a la poesía venezolana a Andrés Eloy Blanco y José Antonio Ramos Sucre. La ciudad ha resistido terremotos, el último grande en 1997, y se ha levantado cada vez. Hoy Sucre es pesca, cacao, carnaval y una identidad oriental que se reconoce en su música, su acento y su manera de mirar el mar.",
    ],
    photo: photos.castillo,
  },

  defines: {
    title: "LO QUE DEFINE A SUCRE",
    description: "Tres claves para entender el estado.",
    panorama: photos.playaMedina,
    items: [
      {
        name: "Un mar profundo",
        text: "Frente a Sucre el fondo marino cae con rapidez. El golfo de Cariaco supera los cien metros y, mar afuera, la fosa de Cariaco baja a más de 1.400 metros y forma una de las mayores cuencas anóxicas del planeta. Ese mar rico en nutrientes explica la sardina, los delfines y uno de los principales centros pesqueros del país.",
      },
      {
        name: "Dos penínsulas, dos paisajes",
        text: "Araya es luz, sal y viento: una franja seca con salinas explotadas desde el siglo XVI y una fortaleza en ruinas al borde del agua. Paria, en el extremo oriental, es el contrario exacto: bosque nublado en el cerro Humo, playas de cocoteros, haciendas de cacao y pueblos que solo se alcanzan por mar.",
      },
      {
        name: "Cacao y carnaval",
        text: "Desde el siglo XVIII, el cacao de Paria salió al mundo por Carúpano y Río Caribe, y aún se seca al sol en los patios de las haciendas. La misma ciudad que lo exportó celebra cada febrero o marzo uno de los carnavales más reconocidos de Venezuela, declarado bien de interés cultural nacional en 2014.",
      },
    ],
  },

  places: {
    description: "Una selección para recorrer Sucre de Cumaná a la punta de Paria.",
    items: [
      {
        name: "Parque Nacional Mochima",
        text: "Compartido con Anzoátegui, reúne islas, bahías y arrecifes en un mar de aguas profundas. Desde el pueblo de Mochima y desde Santa Fe salen lanchas hacia playas como Playa Blanca, y junto a la carretera costera aparecen Playa Colorada y Arapito. Los delfines son vecinos habituales.",
        photo: photos.mochima,
        href: "/playa/mochima",
      },
      {
        name: "Playa Medina",
        text: "En la costa norte de Paria, cerca de Río Caribe, una bahía cerrada por colinas y cubierta de cocoteros hasta la arena. Es la imagen más reconocible de la península, junto a Pui Puy, y sus playas son zona de anidación de tortugas marinas.",
        photo: photos.playaMedina,
        href: "/playa/playa-medina",
      },
      {
        name: "Cumaná histórica",
        text: "La capital se recorre entre el castillo de San Antonio de la Eminencia, que vigila la ciudad desde su cerro, la catedral, el río Manzanares y el malecón. Es el punto de partida para casi todo: Mochima al oeste, el golfo de Cariaco al este y Araya cruzando el agua.",
        photo: null,
      },
      {
        name: "Península de Araya",
        text: "Se cruza desde Cumaná en embarcación o en chalana con vehículo. Al otro lado esperan las salinas, las ruinas de la fortaleza de Santiago de Arroyo y pueblos de pescadores como Manicuare, frente a un mar que parece otro por la luz y la sequedad del paisaje.",
        photo: null,
      },
      {
        name: "Carúpano y Río Caribe",
        text: "Carúpano conserva la Casa del Cable, donde a finales del siglo XIX llegó un cable submarino que la unió con Europa, y vive su carnaval con comparsas y carrozas. Río Caribe, con su iglesia de San Miguel Arcángel y sus haciendas de cacao abiertas a visitas, es la entrada a las playas de Paria.",
        photo: null,
      },
      {
        name: "Macuro y el golfo de Paria",
        text: "En el extremo de Paria, Macuro solo se alcanza por mar desde Güiria. Es el lugar donde Colón pisó tierra firme en 1498 y hoy un pueblo de pescadores tranquilo, frente a un golfo que mira a Trinidad. Un viaje para quien busca el final del mapa.",
        photo: null,
      },
    ],
  },

  culture: {
    description: "Una identidad que suena a oriente y sabe a mar.",
    intro: "La cocina sucrense nace del pescado y del casabe, la música del cuatro y la bandola oriental, y el calendario de fiestas va del carnaval de Carúpano a los velorios de Cruz de Mayo.",
    blocks: [
      {
        label: "Gastronomía",
        title: "Cocina de puerto y de casabe.",
        items: [
          { name: "Pastel de chucho", text: "Capas de chucho guisado, plátano maduro y queso, horneadas como un pastel. Muy presente en toda la costa oriental, es un clásico de mesa larga y de celebración familiar." },
          { name: "Cuajao cumanés", text: "Plato de Cumaná por excelencia: huevo, pescado desmenuzado y, según la casa, plátano o vegetales, cuajados en la sartén o al horno. Contundente y muy de la ciudad." },
          { name: "Consomé de chipichipi", text: "Caldo claro de almejas pequeñas, llamadas chipichipis o guacucos, que se sirve muy caliente en los puestos de playa. Se le atribuyen poderes reparadores después de una noche larga." },
          { name: "Casabe y pescado frito", text: "La torta de yuca heredada de los pueblos originarios acompaña corocoro, pargo o carite fritos, con arroz y ensalada. La fórmula más sencilla y más repetida de la costa." },
        ],
      },
      {
        label: "Música",
        title: "Joropo oriental, galerón y fulía",
        text: "En Sucre el joropo se toca con bandola oriental de ocho cuerdas, cuatro y maracas, y a veces con cuereta, un acordeón de botones. Junto a él conviven el galerón y la fulía, cantos que acompañan los velorios, y diversiones populares como el carite y la burriquita.",
      },
      {
        label: "Celebraciones",
        title: "El carnaval de Carúpano",
        text: "Entre febrero y marzo, según el año, Carúpano se llena de comparsas, carrozas, disfraces y música durante varios días. Organizado de forma sistemática desde los años sesenta, fue declarado bien de interés cultural nacional en 2014 y es una de las citas más concurridas del oriente del país.",
      },
      {
        label: "Identidad",
        title: "Cacao, pescadores y Cruz de Mayo",
        text: "En Paria las haciendas reciben visitas y muestran cómo se fermenta y seca el cacao; en los puertos, las lanchas de madera siguen saliendo de madrugada. En mayo, las cruces vestidas de flores y papel reúnen a los vecinos en velorios con cantos y décimas.",
      },
    ],
  },

  nature: {
    description: "Islas, golfos, bosque nublado y manglar.",
    intro: "Sucre concentra en poco espacio varios mundos naturales: el mar de islas y acantilados de Mochima, el golfo encajonado de Cariaco, la aridez de Araya, el bosque nublado del cerro Humo y los manglares del golfo de Paria. Tres parques nacionales y parte de un cuarto protegen ese mosaico.",
    items: [
      { name: "Parque Nacional Mochima", text: "Creado en 1973 y compartido con Anzoátegui, protege casi 950 km² de los que más de la mitad son mar: islas, bahías, arrecifes de coral y delfines que se dejan ver con frecuencia." },
      { name: "Parque Nacional Península de Paria", text: "Desde 1978 resguarda la cadena montañosa de la península, con bosque nublado en el cerro Humo, a 1.371 metros, cientos de especies de aves y playas donde anidan tortugas marinas." },
      { name: "Parque Nacional Turuépano", text: "Frente al golfo de Paria, un laberinto de manglares, caños y planicies con influencia de marea, protegido desde 1991. Es hábitat del manatí, un mamífero acuático difícil de ver." },
      { name: "Golfo y fosa de Cariaco", text: "El golfo se interna unos 65 kilómetros entre la península de Araya y tierra firme, con fondos de más de cien metros, praderas de hierbas marinas y manglares. Mar afuera, la fosa de Cariaco alcanza 1.435 metros de profundidad." },
      { name: "Serranía del Turimiquire", text: "El espinazo del interior, con alturas de hasta 2.500 metros, separa la costa de los valles agrícolas del sur y guarda bosques húmedos de montaña. En su extremo oriental, el Parque Nacional El Guácharo entra en territorio sucrense." },
    ],
  },

  access: {
    description: "Llegar a Sucre.",
    intro: "Cumaná es la puerta habitual y Carúpano, la base para el este. Buena parte del estado se recorre, además, por mar.",
    routes: [
      { mode: "aire", title: "Por aire", text: "Cumaná cuenta con el Aeropuerto Internacional Antonio José de Sucre, la principal entrada aérea del estado. Carúpano dispone también de su aeropuerto, el General José Francisco Bermúdez; conviene confirmar qué operaciones existen en cada momento." },
      { mode: "carretera", title: "Por carretera", text: "Por tierra se llega desde Anzoátegui siguiendo la costa de Mochima hasta Cumaná, o desde Monagas por el interior. La vía costera continúa hacia Carúpano y, desde allí, hacia Río Caribe, las playas de Paria y Güiria." },
      { mode: "mar", title: "Por mar", text: "Araya se cruza desde Cumaná en embarcaciones pequeñas o en chalana con vehículo. Las islas y playas de Mochima se alcanzan en lancha desde el pueblo de Mochima y Santa Fe, y Macuro solo es accesible por mar desde Güiria." },
      { mode: "local", title: "Dentro del estado", text: "Las distancias son largas y las carreteras siguen la costa; entre Cumaná y Carúpano median unos 120 kilómetros. Para Paria conviene organizar el viaje desde Carúpano o Río Caribe, y para Mochima y Araya, desde Cumaná." },
    ],
  },

  tips: {
    description: "Sol, mar y distancias marcan el ritmo del viaje.",
    items: [
      { icon: "sun", title: "Sol fuerte en Araya y en el mar", text: "En Araya casi no hay sombra y en las lanchas el reflejo del agua multiplica el sol. Sombrero, protector y agua son imprescindibles desde primera hora." },
      { icon: "ship", title: "Madruga para las lanchas", text: "Las salidas hacia las islas de Mochima y hacia Araya suelen organizarse temprano, cuando el mar está más tranquilo. Acuerda la hora de regreso antes de embarcar." },
      { icon: "umbrella", title: "Paria es húmeda", text: "La península de Paria recibe mucha más lluvia que Cumaná o Araya. Lleva ropa que seque rápido y calzado cerrado si piensas entrar en el bosque del cerro Humo." },
      { icon: "leaf", title: "Tortugas en las playas", text: "Medina y Pui Puy son zonas de anidación de tortugas marinas. Si ves rastros o nidos, no los toques, evita luces fuertes de noche y avisa a quienes cuidan la playa." },
      { icon: "clock", title: "Reserva con tiempo en carnaval", text: "En febrero o marzo Carúpano recibe a cientos de miles de visitantes. Si quieres vivir el carnaval, organiza alojamiento con mucha antelación y prepárate para una ciudad volcada en la calle." },
      { icon: "users", title: "Compra cacao en origen", text: "Las haciendas de Río Caribe y Paria reciben visitantes y ofrecen su cacao y chocolate. Comprar allí apoya directamente a los productores y ayuda a mantener vivo el oficio." },
    ],
  },

  faqs: {
    description: "Lo que suele preguntarse antes de viajar a Sucre.",
    items: [
      { question: "¿Cuántos días conviene dedicar a Sucre?", answer: "Al menos cuatro o cinco. Dos días permiten conocer Cumaná y hacer una salida a Mochima; Araya suma un día más, y Paria, con Carúpano, Río Caribe y sus playas, merece dos o tres por las distancias." },
      { question: "¿Cuándo es mejor viajar a Sucre?", answer: "La costa de Cumaná y Araya es seca y soleada buena parte del año. Paria es más lluviosa, así que conviene informarse sobre la temporada antes de ir. El carnaval de Carúpano cae entre febrero y marzo, según el año." },
      { question: "¿Se puede llegar a Playa Medina en coche?", answer: "Sí. Está en la costa norte de la península de Paria, cerca de Río Caribe, y se accede por carretera desde Carúpano. Pui Puy queda en la misma zona y ambas suelen visitarse en el mismo recorrido." },
      { question: "¿Vale la pena cruzar a Araya desde Cumaná?", answer: "Sí, y es un viaje corto por mar. Del otro lado cambian la luz, el paisaje y el ritmo: salinas, una fortaleza del siglo XVII en ruinas y pueblos de pescadores. Conviene ir temprano, llevar agua y regresar antes de que caiga la tarde." },
      { question: "¿Cómo se llega a Macuro?", answer: "Solo por mar, en embarcación desde Güiria, en el extremo de la península de Paria. No tiene carretera. Es un viaje para quien quiera pisar el lugar donde Colón tocó tierra firme en 1498 y conocer un pueblo de pescadores apartado de todo." },
      { question: "¿Mochima pertenece a Sucre o a Anzoátegui?", answer: "A los dos. El parque nacional se extiende por ambos estados: las islas frente a Puerto La Cruz quedan en Anzoátegui, mientras que el pueblo de Mochima, Santa Fe y playas como Colorada y Arapito están del lado sucrense, en la carretera hacia Cumaná." },
    ],
  },

  credits: [
    { title: "Cumaná desde el castillo de San Antonio", author: "Doble a71", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Cumana_desde_el_Castillo_de_San_Antonio.jpg" },
    { title: "Playa Colorada, Parque Nacional Mochima", author: "Oscar Costero", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Playa_Colorada_Parque_Nacional_Mochima.jpg" },
    { title: "Castillo de San Antonio de la Eminencia", author: "Danielguarache", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Castillo_San_Antonio_de_la_Eminencia.jpg" },
    { title: "Playa Medina", author: "Tucanrecords", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Playa_Medina_Peninsula_Paria.jpg" },
  ],

  seo: {
    title: "Sucre: guía de Cumaná, Mochima, Araya y Paria",
    description: "Guía editorial de Sucre: Cumaná histórica, el Parque Nacional Mochima, las salinas de Araya, Playa Medina, el cacao de Paria y el carnaval de Carúpano.",
  },

  layout: { historyPhotoSide: "left", placesFirstPhotoSide: "right", cultureTone: "dark" },
};
