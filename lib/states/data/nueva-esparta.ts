import type { StateGuideData } from "@/lib/states/types";

const photos = {
  elAgua: { src: "/images/playa-el-agua.jpg", alt: "Playa El Agua, en el noreste de Margarita: arena clara, sombrillas blancas y una hilera de cocoteros junto al mar", position: "center 45%" },
  elYaque: { src: "/images/playa-el-yaque.jpg", alt: "Playa El Yaque, en el sur de Margarita, vista desde lo alto a última hora de la tarde: cometas de kitesurf en la arena y bañistas en el agua poco profunda", position: "center 60%" },
  juanGriego: { src: "/images/commons/a-day-of-fishing-in-juan-griego.jpg", alt: "Pescadores sentados en el muelle de Juan Griego, en el norte de Margarita, con lanchas fondeadas en la bahía y un cerro al fondo", position: "70% 50%" },
  coche: { src: "/images/isla-de-coche.jpg", alt: "Vista aérea de una lengua de arena en la isla de Coche, con mar turquesa, un hotel entre palmeras y cerros al otro lado del mar", position: "center 50%" },
};

export const nuevaEsparta: StateGuideData = {
  slug: "nueva-esparta",
  name: "Nueva Esparta",
  heroKicker: "Caribe insular",
  heroTagline: "Luz de mar, viento y devoción.",
  hero: { src: "/images/commons/nueva-esparta-la-asuncion.jpg", alt: "La Asunción, capital de Nueva Esparta, al pie del cerro Matasiete, en la isla de Margarita", position: "center 60%" },

  intro: {
    eyebrow: "Guía de estado",
    title: "Nueva Esparta, el Caribe que se vive en isla.",
    paragraphs: [
      "Nueva Esparta se reparte entre tres islas del Caribe: Margarita, Coche y Cubagua. Aquí el paisaje lo dictan el mar, el viento alisio y una luz que cambia de playa en playa, desde el oleaje abierto del norte de Margarita hasta las aguas llanas del sur, donde las velas de El Yaque cruzan el horizonte cada tarde.",
      "Es también un territorio con memoria: pueblos de pescadores, castillos que vigilaron la costa frente a los piratas, la devoción a la Virgen del Valle y una cocina que nace del cazón y del chucho. Un estado pequeño en superficie y grande en carácter, que se recorre sin prisa entre playa, historia y tradición.",
    ],
    aside: { label: "En una frase", text: "Tres islas donde el mar lo explica todo." },
  },

  know: {
    title: "CONOCE NUEVA ESPARTA",
    description: "Tres islas, un mar y una capital con historia.",
    paragraphs: [
      "Está en el mar Caribe, frente a la costa nororiental de Venezuela, a poco más de veinte kilómetros de tierra firme. Lo forman tres islas: Margarita, la mayor y la más poblada; Coche, llana y ventosa, a medio camino del continente; y Cubagua, casi deshabitada, donde quedan las ruinas de Nueva Cádiz.",
      "Margarita tiene dos cuerpos muy distintos. En la parte oriental están La Asunción, Porlamar, Pampatar y Juan Griego, además de los cerros más altos y las playas más visitadas; al oeste, la península de Macanao es árida y poco poblada. Las une una franja de arena y manglar, la Laguna de La Restinga, que es parque nacional y paso obligado entre ambos sectores.",
      "La Asunción, la capital, conserva escala de pueblo colonial al pie del cerro Matasiete, mientras Porlamar concentra el comercio, los hoteles y el movimiento del puerto libre. El clima es cálido y seco casi todo el año, con lluvias escasas y el viento alisio como compañía constante.",
    ],
    facts: [
      { label: "Capital", value: "La Asunción" },
      { label: "Región", value: "Caribe insular" },
      { label: "Paisaje", value: "Playas, manglares, cerros secos y lagunas costeras" },
      { label: "Superficie", value: "1.150 km²" },
      { label: "Clima", value: "Cálido y semiárido, con lluvias escasas y viento alisio" },
      { label: "Gentilicio", value: "Neoespartano / neoespartana" },
    ],
  },

  history: {
    description: "Perlas, piratas, castillos y una independencia defendida desde la isla.",
    paragraphs: [
      "Mucho antes de 1498, las islas eran territorio de los guaiqueríes, un pueblo de pescadores y navegantes asentado en Margarita, Coche, Cubagua y el litoral del actual estado Sucre. Vivían de la pesca, de la recolección de moluscos y de la navegación, y llamaban Paraguachoa a la isla mayor. Tras la llegada de los españoles, las cédulas reales los declararon vasallos libres y no fueron sometidos a encomienda. Su lengua se perdió hacia el siglo XVIII, pero miles de margariteños siguen reconociéndose hoy como guaiqueríes, sobre todo en Porlamar.",
      "Colón avistó Margarita el 15 de agosto de 1498 y, un año después, la abundancia de perlas le dio nombre. En Cubagua creció deprisa Nueva Cádiz, elevada a ciudad en 1528 y considerada la primera de Venezuela, levantada sobre la explotación de los ostrales. Duró poco: un huracán en 1541 y un ataque pirata en 1543 la dejaron en ruinas, hoy Monumento Nacional. En Margarita, mientras tanto, nacían El Valle del Espíritu Santo, Porlamar y, en 1562, La Asunción.",
      "En los siglos XVI y XVII la isla vivió bajo la amenaza de corsarios y piratas. De esa época quedan el castillo de San Carlos de Borromeo en Pampatar, iniciado en 1669, y el de Santa Rosa en La Asunción, terminado en 1682 tras un asalto francés. En 1815 fue prisión de Luisa Cáceres de Arismendi. Dos años después, los margariteños resistieron en Matasiete y Juan Griego al ejército de Morillo, y en mayo de 1817 la isla recibió el nombre de Nueva Esparta en homenaje a ese heroísmo.",
      "La antigua Provincia de Margarita, una de las que en 1777 formaron la Capitanía General, pasó a llamarse estado Nueva Esparta en 1864. En 1971 el régimen de puerto libre cambió la escala de Porlamar, que pasó de villa de pescadores a centro comercial de la isla. Aun así, la identidad neoespartana sigue anclada en lo esencial: las lanchas que salen de madrugada, la Virgen del Valle cada 8 de septiembre, el galerón de los velorios de Cruz y la torta de cazón en la mesa.",
    ],
    photo: photos.juanGriego,
  },

  defines: {
    title: "LO QUE DEFINE A NUEVA ESPARTA",
    description: "Tres rasgos que explican la vida en las islas.",
    panorama: photos.elYaque,
    items: [
      {
        name: "La luz y el mar",
        text: "Nueva Esparta se entiende desde la orilla. Al norte de Margarita las playas reciben oleaje de mar abierto; al sur, el agua se vuelve llana y transparente. Entre una y otra, el sol seco, las palmeras de El Agua y la brisa de la tarde componen una luz distinta a la de cualquier otra costa del país.",
      },
      {
        name: "Pescadores y la Virgen del Valle",
        text: "La pesca sigue siendo oficio e identidad: en Juan Griego, Punta de Piedras o Coche, las embarcaciones marcan el ritmo del día. Esa misma gente mira hacia El Valle del Espíritu Santo, donde la basílica guarda a la Virgen del Valle, patrona de Nueva Esparta y del oriente venezolano, a la que los pescadores encomiendan cada salida al mar.",
      },
      {
        name: "Castillos, fortines y viento",
        text: "La historia se asoma desde lo alto: el castillo de Santa Rosa vigila La Asunción, San Carlos de Borromeo guarda la bahía de Pampatar y el fortín de La Galera mira los atardeceres de Juan Griego. Más al sur, el mismo alisio que trajo velas enemigas empuja hoy las tablas de windsurf en El Yaque.",
      },
    ],
  },

  places: {
    description: "Distintas puertas para entrar en Nueva Esparta.",
    items: [
      {
        name: "Playa El Agua",
        text: "Cuatro kilómetros de arena fina y palmeras en la costa noreste de Margarita, con oleaje moderado y restaurantes a pie de playa. Es la más concurrida de la isla y la más sencilla para un primer día: se llega, se camina por la orilla y se entiende por qué Margarita es sinónimo de playa.",
        photo: photos.elAgua,
        href: "/playa/playa-el-agua",
      },
      {
        name: "Playa El Yaque",
        text: "En el sur de Margarita, a pocos kilómetros del aeropuerto, el alisio sopla con constancia durante buena parte del año sobre un mar poco profundo. Por eso El Yaque es una referencia internacional del windsurf y el kitesurf, con escuelas que permiten empezar desde cero y una playa que se disfruta también sin tabla.",
        photo: photos.elYaque,
        href: "/playa/playa-el-yaque",
      },
      {
        name: "Isla de Coche",
        text: "Una isla llana de pescadores y salinas, a un trayecto corto en ferry desde Punta de Piedras o en lancha desde El Yaque. Su costa occidental tiene viento para navegar y playas de arena blanca para no hacer nada; San Pedro de Coche conserva el ritmo pausado de los pueblos del mar.",
        photo: photos.coche,
        href: "/playa/isla-de-coche",
      },
      {
        name: "La Asunción y el castillo de Santa Rosa",
        text: "La capital guarda su trazado colonial al pie del cerro Matasiete, donde en 1817 se libró la batalla que dio nombre al estado. Desde el castillo de Santa Rosa, terminado en 1682 y prisión de Luisa Cáceres de Arismendi, se abarca todo el valle de Santa Lucía.",
        photo: null,
      },
      {
        name: "Juan Griego y el fortín de La Galera",
        text: "Bahía de pescadores en el norte de la isla, conocida por sus atardeceres sobre el agua. El fortín de La Galera, levantado en 1811 y escenario de la batalla de agosto de 1817, es el mirador natural para verlos caer mientras las lanchas regresan al muelle.",
        photo: null,
      },
      {
        name: "Península de Macanao",
        text: "El lado árido y menos visitado de Margarita: cerros secos, cactus, playas largas como Punta Arenas y pueblos como Boca de Río, sede del Museo Marino. Es también el territorio de la cotorra margariteña, que sobrevive en estas laderas gracias a décadas de trabajo de conservación.",
        photo: null,
      },
    ],
  },

  culture: {
    description: "Una identidad que se reza, se canta y se come frente al mar.",
    intro: "La mesa neoespartana nace del mar y la fe tiene nombre propio, la Virgen del Valle; alrededor de ambas, el galerón, los chinchorros de Santa Ana y el barro de El Cercado completan el retrato.",
    blocks: [
      {
        label: "Gastronomía",
        title: "Cocina de pescadores.",
        items: [
          { name: "Torta de cazón", text: "Cazón desmenuzado y guisado, ligado con huevo y cocinado en molde. Se la considera el plato emblemático de las islas y aparece en cualquier mesa familiar." },
          { name: "Empanadas de cazón", text: "De masa de maíz y relleno de cazón guisado, a veces con queso blanco. Son el desayuno habitual frente a la playa y la mejor carta de presentación de Margarita." },
          { name: "Pastel de chucho", text: "Capas de plátano maduro, queso y chucho guisado, una raya de carne suave. Un plato de celebración muy presente en todo el oriente venezolano." },
          { name: "Consomé de chipichipi", text: "Caldo de pequeñas almejas de arena, ligero y muy marino, que se toma temprano o después de una noche larga. Se asocia a toda la costa oriental del país." },
        ],
      },
      {
        label: "Celebraciones",
        title: "La Virgen del Valle",
        text: "Cada 8 de septiembre, El Valle del Espíritu Santo recibe a miles de devotos que acompañan en procesión a la patrona de Nueva Esparta y del oriente venezolano. Los pescadores le atribuyen protección en el mar, y las promesas cumplidas se pagan con vestidos que luego se exhiben en la basílica.",
      },
      {
        label: "Música",
        title: "Galerón, polo y malagueña",
        text: "En el oriente venezolano, los velorios de la Cruz de Mayo se acompañan con galerón, polo, punto y malagueña, cantos en décimas que en Margarita tienen voz propia. El joropo oriental, con mandolina, bandola y cuereta, completa una tradición musical que suena distinta a la del resto del país.",
      },
      {
        label: "Artesanía",
        title: "Barro, chinchorros y sombreros",
        text: "Cada pueblo del interior de Margarita tiene su oficio: El Cercado trabaja la alfarería y la loza de barro, Santa Ana teje chinchorros y San Juan Bautista conserva los sombreros de cogollo y el piñonate, un dulce tradicional. Comprar en los talleres es la forma de apoyar a quienes mantienen estos oficios.",
      },
    ],
  },

  nature: {
    description: "Manglares, cerros secos y un mar que lo rodea todo.",
    intro: "Nueva Esparta es seca en tierra y generosa en el agua. Las lluvias escasean y el cactus domina Macanao y Cubagua, pero las lagunas costeras crían peces, aves y tortugas, y en lo alto de Cerro El Copey el bosque nublado guarda las únicas fuentes de agua permanentes de Margarita.",
    photo: null,
    items: [
      { name: "Parque Nacional Laguna de La Restinga", text: "Creado en 1974, une los dos sectores de Margarita con canales entre manglares rojo, negro y blanco. Se recorre en botes locales y reúne flamencos, garzas, pelícanos y playas donde desovan tortugas marinas." },
      { name: "Parque Nacional Cerro El Copey", text: "Sobre La Asunción, el cerro pasa de bosque seco a bosque nublado en pocos kilómetros. Protegido desde 1974, concentra las únicas fuentes de agua permanentes de la isla y buena parte de sus aves." },
      { name: "Laguna de Las Marites", text: "En el litoral sur de Margarita, manglares negros y rojos y praderas marinas dan refugio a pelícanos, cotúas y garzas. Es monumento natural desde 1974 y se observa mejor desde la orilla, con calma." },
      { name: "Tetas de María Guevara", text: "Dos cerros gemelos junto a La Restinga, visibles desde la carretera hacia Macanao y rodeados por tres lagunas costeras con manglar. Monumento natural desde 1974, son una de las siluetas más reconocibles de la isla." },
      { name: "La cotorra margariteña", text: "Amazona barbadensis vive en las laderas secas de Macanao, donde se concentra la población de la isla. Figura en peligro en el Libro Rojo de Venezuela y programas locales la protegen desde 1989." },
    ],
  },

  access: {
    description: "Llegar a Nueva Esparta.",
    intro: "Casi todo el mundo entra por Margarita, en avión o en ferry; Coche y Cubagua se alcanzan desde allí.",
    routes: [
      { mode: "aire", title: "Por aire", text: "El Aeropuerto Internacional del Caribe General en Jefe Santiago Mariño, en El Yaque, al sur de Margarita, es la puerta aérea del estado. Está a poca distancia de Porlamar y de las playas del sur." },
      { mode: "mar", title: "Por mar", text: "Los ferris cruzan desde Puerto La Cruz y Cumaná, en tierra firme, hasta Punta de Piedras, en el suroeste de Margarita. Desde ese mismo puerto salen las conexiones a Coche y las excursiones a Cubagua." },
      { mode: "local", title: "Dentro del estado", text: "Margarita se recorre por carretera: una misma vía une Porlamar, La Asunción, Juan Griego y, cruzando La Restinga, la península de Macanao. Desde El Yaque, las lanchas acortan el salto a Coche." },
    ],
  },

  tips: {
    description: "Sol, viento y sal: lo que conviene saber.",
    items: [
      { icon: "sun", title: "Sol seco todo el año", text: "Las lluvias son escasas y el sol aprieta desde temprano. Protector, sombrero y sombra a mediodía, sobre todo en Coche y Macanao, donde apenas hay árboles." },
      { icon: "wind", title: "El viento manda en el sur", text: "En El Yaque y en la costa oeste de Coche el alisio sopla con fuerza gran parte del año. Es ideal para navegar; para una tarde tranquila, busca las playas del este." },
      { icon: "waves", title: "Playas de dos caracteres", text: "Las del norte reciben oleaje de mar abierto; las del sur y el este son más calmadas. Pregunta a los bañistas o pescadores locales antes de meterte donde no conoces." },
      { icon: "ship", title: "El mar pone las condiciones", text: "Las lanchas a Coche y los botes de La Restinga dependen del viento y del clima. Coordina con los operadores del muelle y sal temprano para aprovechar la luz." },
      { icon: "users", title: "Respeto en el muelle y en la fiesta", text: "La pesca y la Virgen del Valle forman parte de la vida cotidiana. Pregunta antes de fotografiar a pescadores o devotos y compra la artesanía en los talleres de los pueblos." },
      { icon: "footprints", title: "Deja espacio a las tortugas", text: "En La Restinga y en otras playas del estado desovan tortugas marinas. No dejes luces ni basura en la arena de noche y sigue las indicaciones de los guías." },
    ],
  },

  faqs: {
    description: "Lo que se pregunta antes de viajar a las islas.",
    items: [
      { question: "¿La capital de Nueva Esparta es La Asunción o Porlamar?", answer: "La capital es La Asunción, una ciudad pequeña y colonial al pie del cerro Matasiete. Porlamar es la ciudad más poblada y el centro comercial y hotelero de Margarita, de modo que la confusión es frecuente." },
      { question: "¿Cuántos días conviene dedicar a Margarita?", answer: "Con cuatro o cinco días se combinan varias playas, una visita a La Asunción y Pampatar, un atardecer en Juan Griego y un paseo en bote por La Restinga. Coche merece al menos un día más y Cubagua, una excursión." },
      { question: "¿Se puede visitar Cubagua?", answer: "Sí, en excursiones de un día desde Punta de Piedras o desde Coche. La isla está casi deshabitada y no tiene alojamiento; se va por las ruinas de Nueva Cádiz, declaradas Monumento Nacional, y por sus playas solitarias. Lleva agua y protección solar." },
      { question: "¿Cuándo es la fiesta de la Virgen del Valle?", answer: "El 8 de septiembre. Ese día El Valle del Espíritu Santo se llena de devotos llegados de todo el oriente venezolano, con procesión y misa. Los días previos ya se nota el movimiento en la basílica y en Porlamar." },
      { question: "¿Qué significa que Margarita sea puerto libre?", answer: "Desde 1971 la isla tiene un régimen de puerto libre que favoreció el comercio y transformó Porlamar. Para quien viaja se traduce en una oferta comercial amplia; el resto de la isla conserva su carácter de pueblos y playas." },
      { question: "¿Hace falta saber windsurf para ir a El Yaque?", answer: "No. El Yaque recibe a navegantes experimentados, pero su mar poco profundo y sus escuelas lo convierten en un buen lugar para aprender. Quien no navegue puede disfrutar de la playa y ver pasar las velas." },
    ],
  },

  credits: [
    { title: "Panorámica de La Asunción", author: "Wilfredor", license: "CC0 1.0", href: "https://commons.wikimedia.org/wiki/File:Panoramic_view_of_La_Asunci%C3%B3n,_Isla_Margarita.jpg" },
    { title: "Playa El Agua", author: "Wilfredor", license: "CC0", href: "https://commons.wikimedia.org/wiki/File:Tumbonas_bajo_las_palmeras_en_Playa_El_Agua.jpg" },
    { title: "Playa El Yaque", author: "Wilfredor", license: "CC0", href: "https://commons.wikimedia.org/wiki/File:Playa_de_El_Yaque_vista_desde_lo_alto.jpg" },
    { title: "Pescadores en Juan Griego", author: "Wilfredor", license: "CC0", href: "https://commons.wikimedia.org/wiki/File:A_day_of_fishing_in_Juan_Griego.jpg" },
  ],

  seo: {
    title: "Nueva Esparta: guía de viaje de Margarita, Coche y Cubagua",
    description: "Guía editorial de Nueva Esparta: playas de Margarita, El Yaque, Coche, castillos, la Virgen del Valle y la cocina de cazón. Historia, naturaleza y consejos.",
  },

  layout: { historyPhotoSide: "left", placesFirstPhotoSide: "left", cultureTone: "light" },
};
