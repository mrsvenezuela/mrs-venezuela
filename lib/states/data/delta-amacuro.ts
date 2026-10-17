import type { StateGuideData } from "@/lib/states/types";

const photos = {
  curiapo: { src: "/images/commons/delta-canos-curiapo.jpg", alt: "Viviendas sobre pilotes a la orilla de un caño en Curiapo, en el delta del Orinoco, estado Delta Amacuro", position: "center 45%" },
};

export const deltaAmacuro: StateGuideData = {
  slug: "delta-amacuro",
  name: "Delta Amacuro",
  heroKicker: "Delta del Orinoco",
  heroTagline: "Donde el Orinoco se abre al mar.",
  hero: { src: "/images/commons/delta-tucupita.jpg", alt: "Los tejados de Tucupita con la cúpula de la catedral y la selva del delta al fondo, estado Delta Amacuro", position: "center 60%" },

  intro: {
    eyebrow: "Guía de estado",
    title: "Delta Amacuro, donde el Orinoco se deshace en caños.",
    paragraphs: [
      "Delta Amacuro es el estado donde el Orinoco termina su recorrido. El gran río se reparte en caños que avanzan entre manglares, morichales e islas hasta abrirse al Atlántico, y ese abanico de agua es el verdadero mapa del territorio: aquí las distancias se miden en horas de navegación más que en kilómetros de carretera.",
      "Es también la casa del pueblo warao, cuyo nombre suele traducirse como «gente de la canoa». Sus palafitos sobre los caños, sus curiaras y su trabajo con la fibra de moriche forman parte de la vida cotidiana del delta, no de una postal. Tucupita, la capital, es el punto de partida para entenderlo.",
    ],
    aside: { label: "En una frase", text: "Un estado que se recorre navegando." },
  },

  know: {
    title: "CONOCE DELTA AMACURO",
    description: "Dónde está, cómo es y por qué el agua lo explica todo.",
    paragraphs: [
      "Está en el extremo oriental de Venezuela, sobre la desembocadura del Orinoco. Limita al norte con el golfo de Paria, Trinidad y Tobago y el océano Atlántico; al oeste con Monagas y Sucre; al sur con Bolívar, y al este con la Guayana Esequiba.",
      "Su geografía tiene dos mitades de tamaño parecido. Una es el delta propiamente dicho: una llanura de agua con caños como el Manamo, el Macareo y el Araguaimujo, islas, manglares y morichales que suben y bajan con la marea. La otra, hacia el sur, es la Serranía de Imataca, un relieve de bosques y sabanas que el estado comparte con Bolívar.",
      "Tucupita, la capital, se asienta a la orilla del caño Manamo y es la puerta de entrada habitual: allí se acaban las carreteras y empiezan las embarcaciones. Desde la ciudad salen las rutas hacia los caños, hacia Pedernales en el golfo de Paria y hacia el parque nacional que protege el corazón del delta.",
    ],
    facts: [
      { label: "Capital", value: "Tucupita" },
      { label: "Región", value: "Delta del Orinoco, región Guayana" },
      { label: "Paisaje", value: "Caños, manglares, morichales y la Serranía de Imataca" },
      { label: "Superficie", value: "40.200 km²" },
      { label: "Clima", value: "Tropical lluvioso en el interior y de sabana hacia la costa" },
      { label: "Gentilicio", value: "Deltano / deltana" },
    ],
  },

  history: {
    description: "Un delta habitado mucho antes de los mapas.",
    paragraphs: [
      "Los warao habitan el delta desde hace milenios, mucho antes de que apareciera en cartas de navegación. Su modo de vida se organizó alrededor del agua: casas elevadas sobre troncos de mangle, curiaras para moverse entre caños y la palma de moriche como fuente de fibra, alimento y símbolo. Cuando Humboldt escribió sobre la región en 1799, los describió como el pueblo que todavía se mantenía al margen del control colonial, y esa autonomía explica buena parte de su continuidad cultural.",
      "Las bocas del Orinoco atrajeron pronto a los navegantes europeos: Alonso de Ojeda en 1499, Vicente Yáñez Pinzón en 1500 y Diego de Ordaz en 1531, que remontó el río en una expedición naval, primera de la que queda registro. Walter Raleigh regresó en varias ocasiones entre 1594 y 1616. Sin embargo, el laberinto de caños resultó difícil de someter, y durante siglos el delta fue un borde de la provincia de Guayana más que un territorio controlado de verdad.",
      "Tucupita nació tarde, el 31 de julio de 1848, fundada por colonos llegados de la isla de Margarita que se instalaron a orillas del caño Manamo. El nombre, de origen warao, alude a la inestabilidad de sus suelos. Pedernales siguió en 1858. En 1884 el gobierno creó el Territorio Federal Delta, que fue anexado a Bolívar en 1893 y restablecido en 1901 como Territorio Federal Delta Amacuro. Solo el 3 de agosto de 1991 alcanzó el rango de estado.",
      "En 1966 la Corporación Venezolana de Guayana cerró el caño Manamo con un dique-carretera. La obra alteró el equilibrio del delta: salinizó aguas, acidificó suelos y empujó a muchas familias warao a dejar sus comunidades y marcharse a las ciudades. Hoy el estado vive entre la pesca, el petróleo y un turismo de naturaleza que empieza a organizarse, y su identidad sigue apoyada en lo que siempre tuvo: el agua, los caños y la cultura warao.",
    ],
  },

  defines: {
    title: "LO QUE DEFINE A DELTA AMACURO",
    description: "Tres rasgos que explican el estado.",
    panorama: { src: "/images/commons/delta-canos-curiapo.jpg", alt: "Viviendas sobre pilotes a la orilla de un caño en Curiapo, en el delta del Orinoco, estado Delta Amacuro", position: "center 45%" },
    items: [
      {
        name: "Los caños del Orinoco",
        text: "El río no desemboca por una boca, sino por una red de brazos que se abren en abanico entre el golfo de Paria y el Atlántico. El Manamo, el Macareo y el Araguaimujo están entre los caños que aparecen en cualquier mapa del delta. La marea entra y retrocede, y ese pulso decide el ritmo de todo el territorio.",
      },
      {
        name: "El pueblo warao",
        text: "Son el pueblo originario del delta y quienes mejor lo conocen. Viven en hanoko, casas elevadas sobre el agua unidas por pasarelas, se desplazan en curiara y hablan una lengua sin parentesco conocido con ninguna otra. Visitar sus comunidades exige acuerdo previo, calma y respeto.",
      },
      {
        name: "Navegar como forma de viaje",
        text: "En Delta Amacuro las carreteras se acaban poco después de Tucupita y el viaje continúa en lancha o curiara. Los campamentos y las comunidades se alcanzan por agua, los atardeceres se miran desde el río y el silencio de los caños sustituye al ruido del motor en cuanto se apaga. Moverse despacio es la norma.",
      },
    ],
  },

  places: {
    description: "Distintas maneras de entrar en el delta.",
    items: [
      {
        name: "Tucupita",
        text: "La capital se recorre a pie y con calma: el Paseo Malecón Manamo bordea el caño al atardecer, la Plaza Bolívar reúne la vida del centro y la Catedral de la Divina Pastora, levantada entre 1957 y 1982, marca el perfil de la ciudad. Es también donde se contratan las salidas hacia los caños.",
        photo: null,
      },
      {
        name: "Los caños del delta",
        text: "Desde Tucupita, las embarcaciones entran en el Manamo y se adentran en una red de brazos cada vez más estrechos, entre manglares, morichales y comunidades warao sobre el agua. Es la experiencia central del estado: campamentos fluviales, avistamiento de aves y noches sin más luz que la del cielo.",
        photo: null,
      },
      {
        name: "Parque Nacional Delta del Orinoco-Mariusa",
        text: "Creado en 1991 en el corazón de la desembocadura, protege más de 3.300 km² de pantanos, manglares, morichales y bosques siempreverdes. Es hogar de manatíes, toninas, caimanes y una enorme variedad de aves, y también territorio warao. Se recorre por agua y con guías que conozcan la zona.",
        photo: null,
      },
      {
        name: "Pedernales",
        text: "En el extremo norte del estado, donde el caño Manamo se abre al golfo de Paria frente a Trinidad, Pedernales es un pueblo de pescadores y petróleo fundado en 1858 que se presenta como «la cuna de los warao». Tiene puerto y aeropuerto, y desde allí el horizonte ya es mar.",
        photo: null,
      },
      {
        name: "Curiapo y el delta oriental",
        text: "Capital del municipio Antonio Díaz, Curiapo se asoma a la costa atlántica en el extremo oriental del delta, con comunidades warao repartidas por los caños cercanos. Llegar supone una travesía larga por agua, y por eso sigue siendo una de las zonas menos recorridas del estado.",
        photo: null,
      },
      {
        name: "Serranía de Imataca",
        text: "Al sur, el delta deja paso a un relieve de colinas y bosques que se reparte con Bolívar. La Serranía de Imataca sube hasta unos 750 metros, alterna bosque y sabana, y entre su fauna figura el águila arpía. Es la cara menos conocida, y menos acuática, del estado.",
        photo: null,
      },
    ],
  },

  culture: {
    description: "Una cultura que nace del agua y de la palma de moriche.",
    intro: "La cocina deltana se apoya en el pescado de río y de mar, el ocumo chino y el coco, con un acento que llega de Trinidad y Guyana, mientras la artesanía warao convierte la fibra de moriche en chinchorros y cestas.",
    blocks: [
      {
        label: "Gastronomía",
        title: "Pescado, coco y un toque de curry.",
        items: [
          { name: "Lau-lau en salsa de coco", text: "Bagre de río cocinado en una salsa de coco con curry, especia muy presente por la cercanía de Trinidad y Guyana. Se sirve con ocumo chino y plátano verde." },
          { name: "Pescado de caño y de mar", text: "El delta es ribereño del Atlántico y eso se nota en la mesa: pescados de río y de costa, fritos o guisados, son la base diaria de la cocina deltana." },
          { name: "Yuruma y ocumo chino", text: "La yuruma es el almidón que los warao extraen del tronco del moriche; el ocumo chino, cultivado desde los años veinte, se convirtió en su principal alimento de subsistencia." },
          { name: "Turrones de leche y coco", text: "Dulces tradicionales de Tucupita que se venden en los alrededores de la Plaza Bolívar. Un cierre sencillo y muy local para cualquier comida en la capital." },
        ],
      },
      {
        label: "Artesanía",
        title: "La fibra de moriche",
        text: "Para los warao, la palma de moriche es símbolo y materia prima. De sus hojas sacan la fibra con la que tejen el chinchorro, que llaman ha, además de cuerdas y cestas. Comprarlos en las comunidades o directamente a las artesanas es la forma más directa de apoyar ese trabajo.",
      },
      {
        label: "Identidad",
        title: "Vivir sobre el agua",
        text: "La casa warao, el hanoko, se levanta sobre troncos de mangle, con techo de palma temiche y pisos de manaca, y se comunica con las vecinas por pasarelas. La curiara es el vehículo de todos los días. Las decisiones comunitarias pasan por asambleas de mayores, y el wisiratu cumple un papel de mediador espiritual y de cuidado de la salud.",
      },
      {
        label: "Celebraciones",
        title: "La Divina Pastora de Tucupita",
        text: "La Divina Pastora es la patrona de Tucupita y da nombre a su catedral, sede del Vicariato Apostólico creado en 1954. La devoción llegó con los misioneros capuchinos, que en 1925 fundaron la misión de Araguaimujo bajo esa misma advocación, y sigue siendo el eje de la vida religiosa de la capital.",
      },
    ],
  },

  nature: {
    description: "Agua dulce, marea y manglar.",
    intro: "Delta Amacuro es, antes que nada, un humedal inmenso. El Orinoco deposita aquí sus sedimentos y la marea atlántica entra y sale por los caños, de modo que el paisaje cambia de hora en hora. Manglares hacia la costa, morichales y bosques inundados hacia el interior, y al sur el relieve boscoso de Imataca.",
    items: [
      { name: "Parque Nacional Delta del Orinoco-Mariusa", text: "Protege desde 1991 unos 3.310 km² de pantanos, manglares, morichales y sabanas. Alberga manatíes, toninas, nutrias gigantes, caimanes del Orinoco y más de 180 especies de aves, entre ellas el corocoro rojo y la espátula rosada." },
      { name: "Manglares de la costa", text: "Donde el agua dulce se mezcla con la del mar, el mangle forma bosques que sostienen la pesca y fijan el terreno. Su madera es también la base de las casas warao, que se alzan sobre sus troncos." },
      { name: "Morichales", text: "Las agrupaciones de palma de moriche crecen en suelos encharcados y son uno de los ecosistemas más reconocibles del delta. De ellas los warao obtienen fibra, almidón y fruto, y por eso esta palma es su símbolo." },
      { name: "Serranía de Imataca", text: "Compartida con Bolívar, se levanta entre 250 y 750 metros y alterna bosque con sabanas. Entre su fauna está el águila arpía, y en su territorio viven comunidades indígenas. Es el contrapunto seco del delta." },
      { name: "El pulso de la marea", text: "En el delta la marea sube y baja siguiendo el flujo y el reflujo del Atlántico. Ese movimiento dibuja los manglares, mueve los sedimentos y marca cuándo conviene navegar por cada caño." },
    ],
  },

  access: {
    description: "Llegar a Delta Amacuro.",
    intro: "Tucupita es la puerta de entrada, y desde allí casi todo continúa por agua.",
    routes: [
      { mode: "aire", title: "Por aire", text: "Tucupita cuenta con el Aeropuerto San Rafael, de operaciones nacionales, a pocos kilómetros de la ciudad. Pedernales dispone también de una pista aérea. Confirma la disponibilidad de vuelos directamente con la aerolínea antes de planificar." },
      { mode: "carretera", title: "Por carretera", text: "La entrada terrestre se hace desde Monagas: la Troncal 15 llega a Tucupita después de atravesar Anzoátegui y Monagas, y el acceso a la capital se realiza por el dique-carretera que cierra el caño Manamo desde 1966." },
      { mode: "rio", title: "Por río", text: "Los caños son las verdaderas carreteras del estado. Desde Tucupita parten las lanchas hacia los campamentos del delta, hacia Pedernales y hacia Curiapo. Organiza siempre el recorrido con operadores locales y comunidades que conozcan las mareas." },
    ],
  },

  tips: {
    description: "El agua y la lluvia marcan el ritmo del viaje.",
    items: [
      { icon: "droplets", title: "Lluvia casi todo el año", text: "El clima es tropical lluvioso en buena parte del estado. Lleva una funda impermeable para el equipaje y ropa que seque rápido; en lancha, todo acaba mojándose." },
      { icon: "bug", title: "Repelente y manga larga", text: "En un humedal de manglares y morichales los insectos forman parte del paisaje, sobre todo al atardecer. Repelente, pantalón largo y mosquitero si duermes en campamentos abiertos." },
      { icon: "ship", title: "La marea manda", text: "Las salidas por los caños dependen del flujo y el reflujo. Deja que los operadores y las comunidades decidan la hora: ellos saben cuándo un brazo tiene agua suficiente para pasar." },
      { icon: "users", title: "Respeto en las comunidades warao", text: "Estás en su casa. Pide permiso antes de entrar en un hanoko o de fotografiar, no trates a las personas como parte del paisaje y compra la artesanía directamente a quien la hace." },
      { icon: "sun", title: "Sol reflejado en el agua", text: "Aunque llueva, el sol sobre el río quema más de lo que parece. Sombrero, protector solar y camisa ligera de manga larga para las horas en lancha." },
      { icon: "clock", title: "Cuenta con tiempo de sobra", text: "Aquí los trayectos se cuentan en horas de lancha y el clima cambia los planes. Reserva al menos dos noches dentro del delta para que el viaje tenga sentido." },
    ],
  },

  faqs: {
    description: "Lo que suele preguntarse antes de viajar a Delta Amacuro.",
    items: [
      { question: "¿Cómo se visita el delta del Orinoco?", answer: "Desde Tucupita, en embarcaciones contratadas con operadores locales o con las propias comunidades. Lo habitual es pasar una o más noches en campamentos fluviales, y desde allí recorrer los caños, observar aves y visitar comunidades warao con su consentimiento." },
      { question: "¿Cuántos días conviene dedicar a Delta Amacuro?", answer: "Un día alcanza para Tucupita y su malecón, pero el estado se entiende en el agua. Con tres o cuatro días puedes dormir dentro del delta, acercarte al parque nacional o a Pedernales y volver sin prisa." },
      { question: "¿Quiénes son los warao?", answer: "El pueblo originario del delta del Orinoco, presente también en Monagas, Sucre y Guyana. Hablan una lengua aislada, sin parentesco conocido, viven en casas elevadas sobre el agua y han construido su cultura alrededor de la curiara y la palma de moriche." },
      { question: "¿Cuándo conviene viajar a Delta Amacuro?", answer: "El delta es húmedo y lluvioso durante gran parte del año, con precipitaciones que varían mucho de una zona a otra. Los operadores locales saben en qué meses los caños llevan más o menos agua; pregúntales antes de fijar fechas. El calor es constante." },
      { question: "¿Se puede recorrer el delta por cuenta propia?", answer: "No es recomendable. Los caños forman un laberinto sin señales, la marea cambia la profundidad de cada brazo y las visitas a comunidades deben acordarse previamente. Contratar a un operador o a guías warao es la manera sensata y, además, deja el ingreso en el propio delta." },
    ],
  },

  credits: [
    { title: "Vista de Tucupita", author: "Guillermo Ramos Flamerich", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Vista_de_Tucupita.jpg" },
    { title: "Caños de Curiapo, estado Delta Amacuro", author: "Thesharkeliu", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Ca%C3%B1os_de_curiapo.JPG" },
  ],

  seo: {
    title: "Delta Amacuro: guía del delta y el pueblo warao",
    description: "Guía editorial de Delta Amacuro: Tucupita, los caños del Orinoco, el Parque Nacional Mariusa, el pueblo warao y la navegación. Historia, naturaleza y consejos.",
  },

  layout: { historyPhotoSide: "right", placesFirstPhotoSide: "left", cultureTone: "dark" },
};
