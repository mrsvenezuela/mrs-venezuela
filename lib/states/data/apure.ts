import type { StateGuideData } from "@/lib/states/types";

const photos = {
  sabana: { src: "/images/commons/apure-sabana-inundada.jpg", alt: "Sabana inundada del estado Apure, con bandadas de aves posadas sobre el agua y la línea del llano en el horizonte", position: "center 55%" },
};

export const apure: StateGuideData = {
  slug: "apure",
  name: "Apure",
  heroKicker: "Llanos venezolanos",
  heroTagline: "Sabana abierta, ríos anchos y arpa.",
  hero: { src: "/images/commons/apure-san-fernando.jpg", alt: "Palacio de Gobierno del estado Apure, en el centro de San Fernando de Apure", position: "center 36%" },

  intro: {
    eyebrow: "Guía de estado",
    title: "Apure, el llano que se abre hasta el horizonte.",
    paragraphs: [
      "Apure es el país horizontal: una sabana que se inunda y se seca cada año, atravesada por ríos anchos que bajan hacia el Orinoco. Aquí el paisaje no se mira desde arriba, se recorre a ras de suelo, entre garzas, chigüires y ganado que pasta bajo un cielo enorme.",
      "Es también el estado de los hatos, del joropo con arpa y de una historia que se escribió a caballo. San Fernando de Apure, Elorza y Achaguas marcan el ritmo de un territorio donde el agua decide las rutas y donde los pueblos pumé y jivi siguen habitando las riberas.",
    ],
    aside: { label: "En una frase", text: "Un estado donde el agua decide el calendario." },
  },

  know: {
    title: "CONOCE APURE",
    description: "Dónde está, cómo es y por qué se recorre despacio.",
    paragraphs: [
      "Apure ocupa el suroeste de los Llanos venezolanos. Limita al norte con Táchira, Barinas y Guárico, al este con Bolívar y, al sur y al oeste, con Colombia, con la que comparte un largo tramo de frontera marcado por el río Arauca. Es uno de los estados más extensos del país.",
      "Su relieve es casi enteramente plano, con altitudes que rara vez superan los doscientos metros. El clima es tropical de sabana, con una estación de lluvias que inunda grandes extensiones y una sequía rigurosa que las devuelve al color del pasto seco. Esa alternancia ordena la vida ganadera, la pesca y los viajes.",
      "San Fernando de Apure, la capital, se asienta a orillas del río Apure y es la puerta de entrada habitual. Desde allí se abren las rutas hacia Achaguas y Elorza, hacia los hatos del municipio Muñoz y hacia el sur, donde el Capanaparo y el Cinaruco bordean el Parque Nacional Santos Luzardo.",
    ],
    facts: [
      { label: "Capital", value: "San Fernando de Apure" },
      { label: "Región", value: "Llanos venezolanos" },
      { label: "Paisaje", value: "Sabana inundable, ríos, médanos y bosques de galería" },
      { label: "Superficie", value: "76.500 km²" },
      { label: "Clima", value: "Tropical de sabana, con lluvias y sequía muy marcadas" },
      { label: "Gentilicio", value: "Apureño / apureña" },
    ],
  },

  history: {
    description: "Una tierra que se ganó a caballo y se escribió en novela.",
    paragraphs: [
      "Mucho antes de los hatos, las riberas del Arauca, el Capanaparo y el Cunaviche eran territorio de pueblos que siguen allí: los pumé, con una lengua aislada que no se emparenta con ninguna otra, y los jivi, también llamados sikuani, presentes a ambos lados de la frontera. Su conocimiento del río, de la pesca y de la sabana inundable forma parte de la manera apureña de leer el paisaje, aunque pocas veces se les reconozca ese lugar.",
      "La ocupación colonial llegó tarde y de la mano de misioneros. Guasdualito se fundó en 1770, Achaguas y la misión que daría origen a Elorza en 1774, y San Fernando nació en 1788 como Villa de San Fernando del Paso Real de Apure, un nombre que ya anunciaba su función: cruzar el río. Aquellos pueblos crecieron alrededor de la ganadería extensiva, que convirtió la sabana en un inmenso corral abierto.",
      "En la guerra de Independencia, Apure fue el terreno de los lanceros de José Antonio Páez. El 2 de abril de 1819, cerca del río Arauca, la acción de las Queseras del Medio y la orden de «¡Vuelvan caras!» entraron en la memoria nacional. Bolívar concedió a Páez en 1824 las tierras del hato El Frío, y desde 1835 Achaguas venera la imagen del Nazareno que el propio Páez entregó a la ciudad.",
      "Apure fue provincia en 1856 y estado en 1864. En 1929, Rómulo Gallegos situó Doña Bárbara en estos llanos, junto al Arauca, y fijó para siempre la imagen del hato, del río y de la vida a caballo. Hoy el estado sigue siendo ganadero, pero también territorio de conservación, con refugios de fauna y un parque nacional que lleva el nombre de Santos Luzardo, el personaje de la novela.",
    ],
  },

  defines: {
    title: "LO QUE DEFINE A APURE",
    description: "Tres rasgos que explican este llano.",
    panorama: { src: "/images/commons/apure-sabana-inundada.jpg", alt: "Sabana inundada del estado Apure, con bandadas de aves posadas sobre el agua y la línea del llano en el horizonte", position: "center 55%" },
    items: [
      {
        name: "La sabana inundable",
        text: "Cada año el agua cubre la llanura durante meses y luego se retira, dejando lagunas, esteros y un pasto que alimenta al ganado y a la fauna. Viajar por Apure es aprender a leer ese ciclo: la misma ruta cambia de cara entre la lluvia y la sequía.",
      },
      {
        name: "Los ríos que bajan al Orinoco",
        text: "El Apure, navegable durante cientos de kilómetros, el Arauca fronterizo, el Capanaparo y el Cinaruco con sus playas fluviales: los ríos son las avenidas del estado. En ellos viven toninas, caimanes del Orinoco y una pesca que sostiene a muchas familias ribereñas.",
      },
      {
        name: "El hato y el joropo",
        text: "La ganadería extensiva creó el hato, y el hato creó al llanero: jinete, cantor y conocedor del monte. De esa vida salieron el joropo con arpa, cuatro y maracas, el contrapunteo y los cantos de trabajo que acompañan al ganado, hoy reconocidos como patrimonio cultural.",
      },
    ],
  },

  places: {
    description: "Una selección para entrar en Apure por distintas puertas.",
    items: [
      {
        name: "San Fernando de Apure",
        text: "La capital se recorre a orillas del río: la Plaza Bolívar, la catedral y el Palacio de los Barbarito, uno de sus edificios más reconocibles. El puente María Nieves, que lleva el nombre de una legendaria arreadora de ganado, une la ciudad con la otra orilla del Apure.",
      },
      {
        name: "Elorza y el Arauca",
        text: "A orillas del río fronterizo, Elorza es el pueblo que la canción de Eneas Perdomo convirtió en símbolo del llano. Cada 19 de marzo, sus fiestas en honor a San José reúnen toros coleados, artesanía y joropo, y el resto del año conserva el ritmo tranquilo de un puerto de sabana.",
      },
      {
        name: "Achaguas",
        text: "A unos 80 kilómetros de la capital, Achaguas es la tierra del Nazareno, la imagen que Páez entregó a la ciudad y que cada Miércoles Santo sale en procesión desde la tarde hasta la medianoche. Es también uno de los pueblos donde el coleo se vive con más pasión.",
      },
      {
        name: "Parque Nacional Santos Luzardo",
        text: "Entre el Capanaparo y el Cinaruco, hasta su encuentro con el Orinoco, el parque protege sabanas, médanos, bosques de galería y playas de río. Es el Apure más remoto: se visita con guías locales y con una planificación que depende de la temporada, para ver caimanes del Orinoco, toninas y aves.",
      },
      {
        name: "Los hatos de Mantecal",
        text: "En el municipio Muñoz, los hatos El Cedral y El Frío son referencia para la observación de fauna. Entre esteros y caños se ven chigüires por centenares, garzas, caimanes y anacondas, y El Frío mantiene desde 1987 un programa de cría del caimán del Orinoco.",
      },
      {
        name: "Guasdualito y el Alto Apure",
        text: "En el extremo occidental, Guasdualito mira hacia la frontera con Colombia y hacia el piedemonte andino. Fundada en 1770, es una de las principales ciudades del estado y el enlace con Táchira por la Troncal 5, donde el llano empieza a ondularse camino de las montañas.",
      },
    ],
  },

  culture: {
    description: "Una cultura que se canta, se cabalga y se come.",
    intro: "En Apure la cocina sale del hato y del río, el joropo se toca con arpa, cuatro y maracas, y el calendario lo marcan la Semana Santa de Achaguas y las fiestas de Elorza.",
    blocks: [
      {
        label: "Gastronomía",
        title: "Sabores de hato y de río.",
        items: [
          { name: "Carne en vara", text: "Cortes de res ensartados en varas y asados durante horas junto al fuego: el plato de las fiestas y de los hatos apureños. Es el plato de las fiestas y los encuentros llaneros, muy presente en todos los Llanos." },
          { name: "Pisillo", text: "Carne desmechada y frita con ajo y ají dulce, que puede ser de res, venado, pescado o chigüire. El de chigüire se asocia a los días de abstinencia de la Semana Santa." },
          { name: "Cachapa con queso de mano", text: "Torta de maíz tierno, dulce y suave, doblada sobre queso de mano fresco. Se come en todo el país, pero en los Llanos maíz y leche salen de la misma tierra." },
          { name: "Café guayoyo", text: "Café muy diluido, servido claro y caliente a cualquier hora del día. Es la forma de tomar café más extendida en los Llanos y acompaña toda conversación de hato." },
        ],
      },
      {
        label: "Música",
        title: "Joropo con arpa, cuatro y maracas",
        text: "El joropo llanero se toca con arpa, cuatro, maracas y, en algunas zonas, bandola. Alterna pasajes lentos y golpes rápidos como el pajarillo o el seis, y en el contrapunteo dos cantadores improvisan versos hasta que uno cede. Es Patrimonio Cultural de la Nación desde 2014, y Apure dio voces como la de Eneas Perdomo, nacido en El Yagual.",
      },
      {
        label: "Celebraciones",
        title: "Semana Santa en Achaguas y fiestas de Elorza",
        text: "El Miércoles Santo, el Nazareno de Achaguas sale del templo a las cinco de la tarde y recorre el pueblo en hombros hasta la medianoche. En marzo, Elorza celebra a San José con una semana de toros coleados, artesanía y joropo, y San Fernando tiene sus propias fechas: las Calendas, el 30 de mayo, y los Locos de San Fernando, el 28 de diciembre.",
      },
      {
        label: "Identidad",
        title: "El llanero, el coleo y los pueblos del río",
        text: "El coleo, que derriba al toro tomándolo de la cola a galope, es el deporte del llano y una de las pasiones de Achaguas. Alrededor del hato sobreviven los cantos de trabajo, de ordeño y de arreo, reconocidos por la UNESCO en 2017 como patrimonio inmaterial. Y en las riberas, los jivi tejen chinchorros y trabajan la cerámica, mientras los pumé mantienen una artesanía propia junto a la pesca y la recolección.",
      },
    ],
  },

  nature: {
    description: "Sabana, médanos, ríos y una fauna que se deja ver.",
    intro: "Apure es uno de los grandes territorios de fauna del país. La sabana inundable concentra chigüires, garzas y caimanes en los esteros cuando el agua se retira, y los ríos del sur guardan toninas y una de las poblaciones que quedan del caimán del Orinoco, en peligro crítico.",
    items: [
      { name: "Parque Nacional Santos Luzardo", text: "Creado en 1988 entre el Capanaparo y el Cinaruco, suma más de 580.000 hectáreas de sabanas, médanos, bosques de galería y playas fluviales. Es refugio de caimán del Orinoco, nutria gigante, jaguar y más de veinte especies de aves migratorias." },
      { name: "Los esteros y los hatos", text: "Cuando baja el agua, la fauna se concentra en esteros, caños y lagunas. En hatos como El Cedral o El Frío se han registrado más de trescientas especies de aves, además de chigüires, caimanes y anacondas." },
      { name: "El caimán del Orinoco", text: "Uno de los cocodrilos más amenazados del mundo sobrevive en ríos como el Capanaparo y el Apure. Programas de cría y liberación, como el del hato El Frío, intentan recuperar una especie en peligro crítico." },
      { name: "Río Viejo-San Camilo y El Tamá", text: "En el Alto Apure, el Parque Nacional Río Viejo-San Camilo protege sabanas arboladas junto a la frontera, y una porción del Parque Nacional El Tamá entra en el municipio Páez, donde el llano toca el piedemonte andino." },
    ],
  },

  access: {
    description: "Llegar a Apure.",
    intro: "San Fernando de Apure es la puerta habitual; Guasdualito lo es para quien entra desde los Andes.",
    routes: [
      { mode: "aire", title: "Por aire", text: "San Fernando de Apure cuenta con el aeropuerto Las Flecheras, principal entrada aérea del estado, y Elorza dispone de un aeródromo. Confirma rutas y disponibilidad directamente con las aerolíneas." },
      { mode: "carretera", title: "Por carretera", text: "Desde el centro del país se entra por la Carretera Nacional de los Llanos, que baja desde Guárico por Calabozo hasta San Fernando. Desde Barinas la ruta pasa por Bruzual y Mantecal, y desde Táchira la Troncal 5 comunica San Cristóbal con Guasdualito y Elorza." },
      { mode: "rio", title: "Por río", text: "El Apure es navegable a lo largo de cientos de kilómetros y el Arauca en buena parte de su curso. Para excursiones fluviales, especialmente hacia el Capanaparo y el Cinaruco, coordina con operadores y guías de la zona." },
      { mode: "local", title: "Dentro del estado", text: "Las distancias son largas y muchas vías secundarias son de tierra, por lo que en temporada de lluvias pueden quedar bajo el agua. Los hatos y el sur del estado se visitan con vehículos altos y, a menudo, con el transporte que organiza el propio hato." },
    ],
  },

  tips: {
    description: "El agua y el sol marcan el viaje.",
    items: [
      { icon: "sun", title: "Sol de llano", text: "La sabana no ofrece sombra. Sombrero de ala ancha, protector solar y camisa de manga larga son más útiles que cualquier otro equipaje durante las horas centrales del día." },
      { icon: "droplets", title: "Dos estaciones, dos viajes", text: "En sequía la fauna se concentra junto al agua y los caminos están secos; en lluvias el llano se inunda y cambia de color. Elige la temporada según lo que quieras ver." },
      { icon: "bug", title: "Mosquitos al atardecer", text: "Cerca de esteros y ríos, los insectos aparecen al caer la tarde. Repelente, ropa clara y mosquitero en los hatos hacen la diferencia entre una noche tranquila y una larga." },
      { icon: "camera", title: "Fauna con distancia", text: "Chigüires, caimanes y anacondas se dejan ver sin esfuerzo, pero son animales silvestres. Observa desde el vehículo o la embarcación, sin alimentarlos ni acercarte a las crías." },
      { icon: "users", title: "En territorio pumé y jivi", text: "Las comunidades del Capanaparo, el Cunaviche y el Arauca no son un atractivo: son hogares. Entra solo con invitación o con un guía que las conozca, y pregunta antes de fotografiar." },
      { icon: "map", title: "Distancias de llano", text: "Las distancias entre San Fernando, Elorza y el sur del estado son largas y el paisaje apenas cambia. Sal temprano, lleva agua y calcula las llegadas con luz de día." },
    ],
  },

  faqs: {
    description: "Lo que suele preguntarse antes de viajar a Apure.",
    items: [
      { question: "¿Qué es un hato y se puede visitar?", answer: "Un hato es una gran finca ganadera de sabana. Algunos, como El Cedral en Mantecal, reciben visitantes para recorridos de observación de fauna en vehículo y en bote. Conviene reservar con antelación y preguntar por las condiciones de la temporada." },
      { question: "¿Cuántos días conviene dedicar a Apure?", answer: "Con tres días se conoce San Fernando y se hace una excursión a Achaguas o a un hato cercano. Para llegar a Elorza o al Parque Nacional Santos Luzardo, donde las distancias son largas y las visitas dependen del río, conviene contar con cinco o más." },
      { question: "¿Qué es el coleo?", answer: "Es el deporte tradicional del llano: un jinete persigue a un toro por una manga y lo derriba tomándolo de la cola a galope. Se practica en fiestas patronales de todo el estado, con especial arraigo en Achaguas y en las fiestas de Elorza." },
      { question: "¿Por qué el parque se llama Santos Luzardo?", answer: "Por el protagonista de Doña Bárbara, la novela que Rómulo Gallegos publicó en 1929 y ambientó en los llanos de Apure, junto al Arauca. El parque, creado en 1988 entre el Capanaparo y el Cinaruco, también se conoce como Cinaruco-Capanaparo." },
      { question: "¿De dónde viene el río Apure y se puede navegar?", answer: "Nace en Táchira de la unión del Uribante y el Sarare, recorre unos 820 kilómetros y desemboca en el Orinoco frente a Caicara. Es navegable durante la mayor parte de su curso, y San Fernando creció como puerto sobre su orilla." },
    ],
  },

  credits: [
    { title: "Palacio de Gobierno, San Fernando de Apure", author: "Alxe62", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:PALACIO_DE_GOBIERNO_DEL_ESTADO_APURE.JPG" },
    { title: "Sabana inundada, estado Apure", author: "Fernando Flores", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Flooded_grassland_La_sabana_inundada.jpg" },
  ],

  seo: {
    title: "Apure: guía de viaje de la sabana, los ríos, los hatos y el joropo",
    description: "Guía editorial de Apure: San Fernando, Elorza, Achaguas, el Parque Nacional Santos Luzardo, los hatos, el caimán del Orinoco y el joropo llanero.",
  },

  layout: { historyPhotoSide: "right", placesFirstPhotoSide: "right", cultureTone: "light" },
};
