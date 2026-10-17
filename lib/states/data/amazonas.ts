import type { StateGuideData } from "@/lib/states/types";

const photos = {
  puertoAyacucho: { src: "/images/states/amazonas.jpg", alt: "Avenida Orinoco, la vía principal del centro de Puerto Ayacucho, capital del estado Amazonas", position: "center 60%" },
  autana: { src: "/images/commons/tepuy-autana-kuaymayojo.jpg", alt: "Cerro Autana, tepuy del estado Amazonas, sobre la selva", position: "center 60%" },
  orinoco: { src: "/images/commons/panoramica-del-rio-orinoco-en-amazonas.jpg", alt: "Río Orinoco y bosque inundado vistos desde la Piedra La Tortuga, cerca de Puerto Ayacucho", position: "center" },
  canoZorro: { src: "/images/commons/cano-zorro-15020517430.jpg", alt: "Caño Zorro, afluente del río Autana, corriendo entre rocas y selva en el estado Amazonas", position: "center 50%" },
};

export const amazonas: StateGuideData = {
  slug: "amazonas",
  name: "Amazonas",
  heroKicker: "Sur de Venezuela",
  heroTagline: "Selva, grandes ríos y tepuyes.",
  hero: { src: "/images/commons/amazonas-puerto-ayacucho.jpg", alt: "Avenida 23 de Enero de Puerto Ayacucho, capital del estado Amazonas, con el cerro Perico al fondo", position: "center 40%" },

  intro: {
    eyebrow: "Guía de estado",
    title: "Amazonas, el sur de Venezuela que se recorre por el río.",
    paragraphs: [
      "Amazonas ocupa el extremo sur de Venezuela y se mide en otra escala: el Orinoco nace aquí, el Ventuari y el Atabapo trazan rutas que ninguna carretera sigue, y los tepuyes asoman sobre un horizonte de selva que parece no terminar. Es el segundo estado más extenso del país y uno de los menos poblados.",
      "Casi la mitad de quienes lo habitan pertenecen a pueblos indígenas, y eso se nota en las lenguas, en el mercado, en la cestería y en la manera de entender el territorio. Viajar a Amazonas pide tiempo, logística fluvial y otra disposición: se llega a un lugar con historia propia y con comunidades que lo habitan desde mucho antes.",
    ],
    aside: { label: "En una frase", text: "El estado donde nace el Orinoco." },
  },

  know: {
    title: "CONOCE AMAZONAS",
    description: "Dónde está, cómo es y por qué se mide en ríos.",
    paragraphs: [
      "Está en el extremo sur del país: Bolívar al norte, Brasil al este y al sur, y Colombia al oeste, con la que comparte frontera a lo largo de los ríos Atabapo, Orinoco y Negro. Con 177.617 km² es el segundo estado más extenso de Venezuela y, al mismo tiempo, uno de los menos poblados: 146.480 habitantes en el censo de 2011.",
      "Su geografía es la del escudo guayanés en versión selvática: llanuras de bosque húmedo, sabanas intercaladas, ríos de aguas claras y de aguas negras, y mesetas de arenisca que se levantan aisladas, como el Autana, el Yapacana o el macizo del Duida y el Marahuaca. En la sierra Parima, al este, nace el Orinoco.",
      "Puerto Ayacucho, la capital, está al norte, junto a los raudales de Atures, y es la única ciudad del estado unida por carretera al resto del país. A partir de ahí, el mapa se lee en ríos: Orinoco, Ventuari, Atabapo, Casiquiare y Negro son las verdaderas vías de Amazonas.",
    ],
    facts: [
      { label: "Capital", value: "Puerto Ayacucho" },
      { label: "Región", value: "Sur de Venezuela" },
      { label: "Paisaje", value: "Selva, grandes ríos y tepuyes del escudo guayanés" },
      { label: "Superficie", value: "177.617 km²" },
      { label: "Clima", value: "Cálido y húmedo, con lluvias durante buena parte del año" },
      { label: "Gentilicio", value: "Amazonense" },
    ],
  },

  history: {
    description: "Ríos que fueron caminos mucho antes que fronteras.",
    paragraphs: [
      "Mucho antes de cualquier mapa, estas cuencas ya estaban habitadas. Hoy conviven en Amazonas una veintena de pueblos indígenas: los yanomami en el Alto Orinoco y la sierra Parima; los uwottüja, conocidos como piaroa, en el Orinoco medio y los ríos Sipapo, Cuao y Autana; los ye'kwana en el este del estado; los jivi hacia el norte; los baré, baniva y kurripako en la cuenca del río Negro. Sus lenguas pertenecen a familias distintas, y la yuca, en forma de casabe y mañoco, sigue siendo la base de muchas mesas.",
      "La presencia europea llegó tarde y por el río. Los jesuitas fundaron la misión de Atures en 1748, la última que levantaron Orinoco arriba, y la expedición de límites española dio origen a San Fernando de Atabapo en 1758 y a San Carlos de Río Negro en 1759. En 1800, Alexander von Humboldt remontó el Orinoco, cruzó los raudales y documentó el Casiquiare, el brazo que une las cuencas del Orinoco y del Amazonas y que los pueblos del río conocían desde mucho antes.",
      "En 1864 el territorio se separó de la antigua provincia de Guayana como Territorio Federal Amazonas, con capital en San Fernando de Atabapo. El auge del caucho trajo comerciantes, abusos y episodios violentos, como los del gobernador Tomás Funes en 1913. En 1924 el ingeniero Santiago Aguerrevere fundó Puerto Ayacucho junto a los raudales de Atures, ligado a un proyecto de carretera que debía unir Caicara del Orinoco con San Fernando de Atabapo; en 1928 la capital se trasladó allí.",
      "Amazonas fue Territorio Federal hasta el 29 de julio de 1992, cuando se convirtió en estado y eligió por primera vez a sus autoridades. Su identidad actual se construye sobre esa doble condición: un territorio inmenso, de baja densidad y lógica fluvial, y una población en la que casi la mitad es indígena y cuyas lenguas son oficiales junto al castellano. Entenderlo es aceptar que aquí el tiempo, las distancias y las decisiones se miden de otra manera.",
    ],
    photo: null,
  },

  defines: {
    title: "LO QUE DEFINE A AMAZONAS",
    description: "Tres claves para entender el sur del país.",
    panorama: photos.orinoco,
    items: [
      {
        name: "El Orinoco y sus raudales",
        text: "El gran río venezolano nace en Amazonas, en el cerro Delgado Chalbaud de la sierra Parima, y recorre el estado antes de convertirse en frontera con Colombia. Frente a Puerto Ayacucho, los raudales de Atures interrumpen la navegación: durante siglos obligaron a desembarcar y explican por qué la capital está donde está.",
      },
      {
        name: "Los tepuyes del sur",
        text: "Lejos de la Gran Sabana, las mesetas de arenisca del escudo guayanés reaparecen aisladas entre la selva. El Autana, con una cavidad que atraviesa la montaña de lado a lado, es el más conocido; el Yapacana, el Duida, el Marahuaca y la serranía de la Neblina completan una geografía que se aprecia mejor desde el río o desde el aire.",
      },
      {
        name: "Los pueblos del río",
        text: "Casi la mitad de la población amazonense es indígena y pertenece a una veintena de pueblos con lenguas propias: yanomami, uwottüja (piaroa), ye'kwana, jivi, baré, baniva y kurripako, entre otros. No forman parte del paisaje: son quienes lo conocen, lo nombran y lo trabajan. Viajar aquí empieza por entender que se llega a sus territorios.",
      },
    ],
  },

  places: {
    description: "Una selección para entrar en Amazonas siguiendo el río.",
    items: [
      {
        name: "Puerto Ayacucho",
        text: "La capital se asienta junto al Orinoco, frente a los raudales de Atures y a la orilla colombiana. Entre la Catedral María Auxiliadora, el mercado indígena y el Museo Etnológico de Amazonas se entiende la mezcla de la ciudad, puerta de entrada a todo lo demás.",
        photo: photos.puertoAyacucho,
      },
      {
        name: "Raudales de Atures y Tobogán de la Selva",
        text: "Al sur de la ciudad, el Orinoco se rompe entre rocas y corrientes, y en sus orillas hay petroglifos antiguos. Cerca están la Piedra La Tortuga, protegida como Monumento Natural, y el Tobogán de la Selva, un tobogán natural de roca pulida por el agua donde los ayacuchenses van a bañarse.",
        photo: null,
      },
      {
        name: "Cerro Autana",
        text: "Río arriba, en territorio uwottüja, se levanta el Autana, un tepuy de unos 1.250 metros atravesado por una cavidad de unos 400 metros. Es Monumento Natural desde 1978 y, para el pueblo piaroa, representa el árbol de la vida. Se llega en embarcación desde Samariapo, con guías de la zona.",
        photo: null,
      },
      {
        name: "San Fernando de Atabapo",
        text: "Antigua capital del territorio, fundada en 1758 donde confluyen el Orinoco, el Atabapo y el Guaviare. Es una de las estampas fluviales más reconocibles del estado: las aguas negras del Atabapo se encuentran con las del Orinoco frente al pueblo, y Colombia queda al otro lado.",
        photo: null,
      },
      {
        name: "La Esmeralda y el Alto Orinoco",
        text: "En el corazón del estado, La Esmeralda mira al macizo del Duida y es la base para el Alto Orinoco, territorio yanomami y ye'kwana. Es el Amazonas más remoto: pistas aéreas, ríos y comunidades. Se organiza únicamente con operadores y acompañamiento de la gente del lugar.",
        photo: null,
      },
      {
        name: "Río Negro y Piedra del Cocuy",
        text: "En el extremo suroeste, San Carlos de Río Negro, fundada en 1759 frente a Colombia, es la puerta al río Negro y al Casiquiare. Cerca de la triple frontera con Brasil se alza la Piedra del Cocuy, un domo de roca de unos 400 metros protegido como Monumento Natural.",
        photo: null,
      },
    ],
  },

  culture: {
    description: "Yuca, río y manos que tejen.",
    intro: "La cultura amazonense es, sobre todo, indígena: se expresa en las lenguas, en la cestería, en la manera de cocinar la yuca y en una relación con el río que organiza el calendario y la mesa.",
    blocks: [
      {
        label: "Gastronomía",
        title: "La yuca en todas sus formas.",
        items: [
          { name: "Casabe", text: "Torta fina y crujiente de yuca amarga, rallada, exprimida en sebucán y cocida en budare. Pan cotidiano de muchos pueblos del estado, reconocido por la Unesco en 2024." },
          { name: "Mañoco", text: "Yuca rallada y tostada en grano, que se conserva bien y acompaña caldos y pescado. Muy presente en toda la cuenca del Orinoco y del río Negro." },
          { name: "Catara", text: "Salsa picante de jugo cocido de yuca y bachacos culones, a veces con ají. Es la preparación más propia del Amazonas venezolano y un reto para el paladar foráneo." },
          { name: "Pescado de río", text: "Morocoto y pavón llegan del Orinoco y sus afluentes a las mesas de Puerto Ayacucho y son habituales en la cocina del estado, casi siempre junto a casabe o mañoco." },
        ],
      },
      {
        label: "Artesanía",
        title: "Cestería de palma y fibras.",
        text: "Con hojas y fibras de moriche, cumare y seje se tejen cestas, sebucanes y chinchorros, y cada pueblo tiene sus tramas y sus formas: la cestería ye'kwana, por ejemplo, es reconocida por sus diseños. El mercado indígena de Puerto Ayacucho es el lugar habitual para comprarla directamente a quien la hace.",
      },
      {
        label: "Identidad",
        title: "Una veintena de pueblos, varias lenguas.",
        text: "En Amazonas el castellano convive con lenguas de las familias sáliba, caribe, arawak, guahibana y yanomami, oficiales en el estado. El Museo Etnológico de Amazonas, en Puerto Ayacucho, ayuda a situar a cada pueblo en su territorio antes de viajar, y la mejor regla de respeto es sencilla: preguntar, escuchar y no fotografiar sin permiso.",
      },
      {
        label: "Celebraciones",
        title: "Fiestas patronales y ceremonias propias.",
        text: "El calendario combina fiestas patronales de tradición católica, como las de la Virgen del Carmen, con ceremonias propias de cada pueblo, ligadas a las cosechas y a los ciclos del río. Muchas de ellas no son espectáculos para visitantes: se asiste solo cuando la comunidad invita.",
      },
    ],
  },

  nature: {
    description: "Selva, tepuyes y las cabeceras del Orinoco.",
    intro: "Amazonas es, en gran parte, bosque húmedo de tierras bajas interrumpido por sabanas, ríos de aguas negras y mesetas de arenisca. Varios parques nacionales, creados en 1978 y 1991, protegen desde el Yapacana hasta las cabeceras del Orinoco, y buena parte del sur forma la Reserva de Biosfera Alto Orinoco-Casiquiare.",
    photo: photos.canoZorro,
    items: [
      { name: "Parque Nacional Parima-Tapirapecó", text: "Creado en 1991 sobre más de 31.000 km², resguarda las cabeceras del Orinoco en la sierra Parima y el territorio del pueblo yanomami, con bosques de tierras bajas y de montaña." },
      { name: "Parque Nacional Duida-Marahuaca", text: "Frente a La Esmeralda, los tepuyes Duida, Huachamacari y Marahuaca superan los 2.800 metros entre nieblas y lluvias abundantes. Cerca de una quinta parte de su flora solo se encuentra allí." },
      { name: "Parque Nacional Serranía La Neblina", text: "En la frontera con Brasil, protege uno de los relieves más altos de toda la Guayana: el Pico da Neblina, del lado brasileño, supera los 3.000 metros, y el Pico Phelps, del venezolano, alcanza 2.992." },
      { name: "Parque Nacional Yapacana", text: "Al sur de la confluencia del Ventuari con el Orinoco, el cerro Yapacana sube de 80 a 1.345 metros entre bosques inundables, palmares y sabanas. Es hogar de comunidades uwottüja (piaroa)." },
      { name: "El brazo Casiquiare", text: "Bifurcación natural que desvía parte del Orinoco hacia el río Negro y la cuenca del Amazonas a lo largo de 326 kilómetros. Navegado por Humboldt en 1800, es un fenómeno hidrográfico poco común en el mundo." },
    ],
  },

  access: {
    description: "Llegar a Amazonas.",
    intro: "Puerto Ayacucho es la entrada práctica. Desde allí, el resto del estado se alcanza por río o en pequeñas aeronaves.",
    routes: [
      { mode: "aire", title: "Por aire", text: "Puerto Ayacucho cuenta con el Aeropuerto Nacional Cacique Aramare, la puerta aérea del estado. Hacia el interior, La Esmeralda, San Fernando de Atabapo o San Carlos de Río Negro se alcanzan en pequeñas aeronaves hasta pistas locales, siempre con operadores autorizados." },
      { mode: "carretera", title: "Por carretera", text: "Puerto Ayacucho es la única ciudad del estado unida por carretera al resto del país: la vía sube hacia el norte, bordeando el Orinoco, y enlaza con el estado Bolívar. Hacia el sur, la carretera llega hasta Samariapo, donde termina el asfalto y empieza el río." },
      { mode: "rio", title: "Por río", text: "Los raudales de Atures y Maipures cortan la navegación del Orinoco frente a la capital, así que los viajes río arriba salen de Samariapo. Desde allí las embarcaciones remontan hacia el Autana, Isla Ratón y San Fernando de Atabapo. El nivel del agua cambia con las lluvias y condiciona qué rutas son posibles." },
      { mode: "local", title: "Dentro del estado", text: "Más allá del eje Puerto Ayacucho–Samariapo las carreteras son escasas: el Ventuari, el Atabapo, el Casiquiare y el Negro, junto a las pistas aéreas, son las verdaderas vías. Las distancias se calculan en horas de embarcación y los planes se cierran con quien conoce el río." },
    ],
  },

  tips: {
    description: "El río marca el ritmo del viaje.",
    items: [
      { icon: "users", title: "Territorio indígena", text: "Gran parte del estado son territorios de pueblos indígenas. Pregunta antes de fotografiar, no entres en comunidades sin invitación y compra la artesanía directamente a quien la hace." },
      { icon: "compass", title: "Planifica con operadores locales", text: "Nada se improvisa: río, aeronaves y visitas a comunidades se coordinan con operadores y guías de la zona, con margen de días para cambios de clima y de nivel del agua." },
      { icon: "droplets", title: "Lluvias y nivel del río", text: "En Puerto Ayacucho llueve sobre todo entre abril y noviembre. El caudal cambia lo que se puede navegar, así que la temporada define el viaje tanto como el destino." },
      { icon: "bug", title: "Protección contra insectos", text: "Selva y río significan mosquitos. Repelente, ropa de manga larga al atardecer y mosquitero donde se duerma en chinchorro forman parte del equipaje básico." },
      { icon: "sun", title: "Sol sobre el agua", text: "Las horas en embarcación multiplican la exposición: sombrero, protector solar y agua suficiente, porque en el río no hay sombra ni paradas previstas." },
      { icon: "backpack", title: "Equipaje ligero e impermeable", text: "En aeronaves pequeñas y curiaras el espacio es limitado. Bolsas estancas para documentos y cámara, calzado que pueda mojarse y solo lo imprescindible." },
    ],
  },

  faqs: {
    description: "Lo que suele preguntarse antes de viajar a Amazonas.",
    items: [
      { question: "¿Cuánto tiempo hace falta para conocer Amazonas?", answer: "Puerto Ayacucho y sus alrededores se recorren en dos días. Cualquier ruta fluvial hacia el Autana o el Atabapo suma varios días más, y el Alto Orinoco o el río Negro requieren una expedición organizada con bastante antelación." },
      { question: "¿Se puede subir al Cerro Autana?", answer: "La ascensión es técnica y se logró por primera vez en 1974; no es una excursión convencional. La mayoría de los viajeros lo contempla desde el río y sus alrededores, con guías locales y respetando que se está en territorio uwottüja." },
      { question: "¿Qué es el Casiquiare?", answer: "Un brazo natural del Orinoco que, en lugar de seguir hacia el mar, desvía parte de su caudal hacia el río Negro y la cuenca del Amazonas. Tiene unos 326 kilómetros y fue navegado por Humboldt en 1800; los pueblos del río lo conocían mucho antes." },
      { question: "¿Hace falta hablar alguna lengua indígena?", answer: "No: el castellano es común en Puerto Ayacucho y en los centros poblados. Pero en el estado son oficiales también las lenguas indígenas, y aprender unos saludos en la lengua de la comunidad que se visita abre más puertas que cualquier otro gesto." },
      { question: "¿Cuál es la mejor época para viajar a Amazonas?", answer: "Depende del destino. Con menos lluvia los caminos están más secos y los ríos descubren sus orillas; con las lluvias el caudal sube y algunas rutas fluviales se vuelven más accesibles. Conviene decidirlo con los operadores de la zona según lo que se quiera ver." },
    ],
  },

  credits: [
    { title: "Avenida 23 de Enero, Puerto Ayacucho", author: "solem josias", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:2da_avenida_mas_importante_de_pto.ayacucho_la_23_de_enero-venezuela.jpg" },
    { title: "Cerro Autana", author: "Fernando Flores", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Tepuy_Autana_(Kuaymayojo).jpg" },
    { title: "Río Orinoco desde la Piedra La Tortuga", author: "Shishoxisrax", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Panoramica_del_rio_orinoco_en_amazonas.JPG" },
    { title: "Caño Zorro", author: "Fernando Flores", license: "CC BY-SA 2.0", href: "https://commons.wikimedia.org/wiki/File:Ca%C3%B1o_Zorro_(15020517430).jpg" },
  ],

  seo: {
    title: "Amazonas: guía de viaje del Orinoco, el Autana y la selva del sur",
    description: "Guía editorial de Amazonas: Puerto Ayacucho, raudales de Atures, Cerro Autana, el Orinoco y sus pueblos indígenas. Naturaleza, rutas fluviales y consejos.",
  },

  layout: { historyPhotoSide: "right", placesFirstPhotoSide: "left", cultureTone: "dark" },
};
