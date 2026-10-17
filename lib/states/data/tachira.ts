import type { StateGuideData } from "@/lib/states/types";

/*
 * Táchira tiene por ahora una sola foto verificada (La Grita, Commons): va en el hero.
 * El resto de secciones sigue sin foto hasta tener imágenes confirmadas del estado.
 */

const photos = {
  sanCristobal: { src: "/images/commons/tachira-san-cristobal-panoramica.jpg", alt: "San Cristóbal extendida en su valle entre montañas verdes, capital del estado Táchira", position: "center 50%" },
};

export const tachira: StateGuideData = {
  slug: "tachira",
  name: "Táchira",
  heroKicker: "Andes venezolanos",
  heroTagline: "Páramo, café, frontera y bicicleta.",
  hero: photos.sanCristobal,

  intro: {
    eyebrow: "Guía de estado",
    title: "Táchira, los Andes que miran a la frontera.",
    paragraphs: [
      "El Táchira se recorre subiendo y bajando: de los valles templados donde crece San Cristóbal a los páramos que pasan de los 3.000 metros, y de ahí al piedemonte cálido que se abre hacia los llanos. La neblina, el café y la cercanía de Colombia marcan el carácter de este extremo de los Andes venezolanos.",
      "Es un estado de pueblos con plaza e iglesia, de devociones que convocan peregrinos cada agosto y de una feria de enero que llena San Cristóbal de música, toros y ciclismo. Quien llega encuentra un ritmo sereno, una cocina de montaña y una gente que se nombra a sí misma gocha con orgullo.",
    ],
    aside: { label: "En una frase", text: "Andes de café y neblina en la frontera con Colombia." },
  },

  know: {
    title: "CONOCE TÁCHIRA",
    description: "Dónde está, cómo es y por qué cambia de clima en pocos kilómetros.",
    paragraphs: [
      "Está en el extremo suroccidental de los Andes venezolanos, con Colombia al oeste, Zulia y Mérida al norte y Barinas y Apure hacia el sur y el este. Es un estado pequeño en superficie, poco más de 11.000 km², pero con tal densidad de pueblos, valles y carreteras de montaña que se siente mucho más grande.",
      "La cordillera lo atraviesa y lo divide en tres ambientes: la montaña templada donde están San Cristóbal, Táriba, Rubio y La Grita; el norte cálido y lluvioso de la carretera Panamericana, con La Fría y Coloncito; y el piedemonte del sureste, ya con clima de sabana. Por encima de los 3.000 metros empieza el páramo, y el Pico El Púlpito, con 3.942 metros, es su punto más alto.",
      "San Cristóbal, la capital, ocupa el valle del río Torbes a unos 900 metros de altitud, con un clima templado que explica su fama de ciudad cómoda para vivir. Desde allí se organizan las rutas hacia los páramos, hacia la frontera en San Antonio del Táchira y hacia los pueblos de la montaña.",
    ],
    facts: [
      { label: "Capital", value: "San Cristóbal" },
      { label: "Región", value: "Andes venezolanos" },
      { label: "Paisaje", value: "Valles templados, páramos y piedemonte hacia los llanos" },
      { label: "Superficie", value: "11.100 km²" },
      { label: "Altitud", value: "De 9 a 3.942 m s. n. m. (Pico El Púlpito)" },
      { label: "Clima", value: "Templado de montaña, frío en los páramos y cálido en el norte y el piedemonte" },
      { label: "Gentilicio", value: "Tachirense" },
    ],
  },

  history: {
    description: "Café, frontera y una tierra de gobernantes.",
    paragraphs: [
      "Antes de la llegada de los españoles, estos valles estaban habitados por grupos de filiación chibcha, como los machirí, los umuquena y los táriba, cuyos nombres siguen vivos en la toponimia; el propio nombre Táchira se suele explicar desde esa lengua. San Cristóbal fue fundada en 1561 por Juan Maldonado Ordóñez y Villaquirán, y La Grita en 1576; durante la colonia, ambas vivieron entre la influencia de Pamplona, Mérida y Maracaibo.",
      "En 1781 la región se sumó a la insurrección de los Comuneros, y en 1813 Simón Bolívar entró en Venezuela por San Antonio del Táchira para iniciar la Campaña Admirable. Tras la independencia, el territorio fue provincia en 1856 y alcanzó la categoría de estado en 1863, aunque pasó por anexiones y por el Gran Estado Los Andes antes de recuperar su nombre propio en 1899.",
      "El café fue durante más de dos siglos el motor del Táchira y lo convirtió en el principal productor del país; para sacar la cosecha se construyó en 1895 el Gran Ferrocarril del Táchira, entre La Fría y Encontrados. Cerca de Rubio, en La Petrolia, se perforaron los primeros pozos petroleros venezolanos. Y desde 1899, con Cipriano Castro, una serie de presidentes nacidos aquí gobernó Venezuela durante buena parte del siglo XX: de ahí el apodo de «tierra de gobernantes».",
      "Hoy el Táchira conserva esa mezcla de montaña y frontera: la vida cotidiana se cruza con Cúcuta y el Norte de Santander colombiano, el campo sigue produciendo café, papa, hortalizas y flores, y la identidad andina se expresa en el habla pausada, en la devoción al Santo Cristo de La Grita y en una pasión por el ciclismo y el fútbol que pocos estados comparten con tanta intensidad.",
    ],
  },

  defines: {
    title: "LO QUE DEFINE AL TÁCHIRA",
    description: "Tres rasgos que explican su carácter.",
    items: [
      {
        name: "La montaña y el páramo",
        text: "Casi todo en el Táchira ocurre a media altura: valles templados a 800 o 900 metros, pueblos que trepan hacia los 1.500 y carreteras que cruzan páramos como El Zumbador, el tramo más alto de la Trasandina a su paso por el estado. Arriba, frailejones, niebla y lagunas; abajo, café y hortalizas.",
      },
      {
        name: "La frontera con Colombia",
        text: "San Antonio del Táchira y Ureña viven pegadas a Cúcuta, y el Puente Internacional Simón Bolívar es uno de los pasos más transitados entre los dos países. Esa vecindad se nota en el comercio, en el acento, en la cocina y en una historia compartida que empezó mucho antes de que existieran las aduanas.",
      },
      {
        name: "La feria, los toros y la bicicleta",
        text: "Cada enero, San Cristóbal celebra a su patrono con la Feria Internacional de San Sebastián: corridas en la Plaza Monumental de Pueblo Nuevo, desfiles, conciertos y la Vuelta al Táchira, la carrera ciclista por etapas que se disputa desde 1966 y que convierte las cuestas del estado en un escenario deportivo seguido por todo el país.",
      },
    ],
  },

  places: {
    description: "Una selección para entrar en el Táchira por distintas alturas.",
    items: [
      {
        name: "San Cristóbal",
        text: "La capital se recorre a pie entre la catedral del siglo XVIII, la plaza Bolívar y el Ateneo del Táchira, abierto en 1907. El Museo Antropológico del Táchira guarda parte de la memoria de la región, y Pueblo Nuevo, con su estadio y su plaza de toros, concentra la vida deportiva y ferial.",
      },
      {
        name: "La Grita",
        text: "A unos 1.440 metros, en un valle fresco y a menudo neblinoso, La Grita, fundada en 1576, presume el título de Atenas del Táchira. Su Basílica del Espíritu Santo custodia al Santo Cristo, y cada 6 de agosto la ciudad recibe a miles de peregrinos que llegan a pie, a caballo o en bicicleta.",
      },
      {
        name: "Peribeca y los pueblos de la montaña",
        text: "Peribeca, cerca de Capacho, es uno de los poblados tradicionales que el Táchira conserva con más cariño, con una tradición de luthiers del bandolín. San Pedro del Río, fundado en 1606, mantiene su arquitectura colonial y un taller de arte popular; El Cobre y Pregonero completan una ruta de pueblos pequeños y plazas tranquilas.",
      },
      {
        name: "Páramo El Zumbador",
        text: "La carretera Trasandina alcanza aquí sus 2.540 metros más altos dentro del estado. Entre miradores de páramo, viveros de orquídeas y rosas, cultivos de montaña y ventas de artesanía, el tramo forma parte del corredor turístico de Las Rosas y es una parada natural en el camino de montaña entre San Cristóbal y La Grita.",
      },
      {
        name: "Rubio",
        text: "Conocida como la Ciudad Pontálida por sus puentes, Rubio creció con el café y guarda esa memoria en su Centro de Investigación del Café y en el parque de La Petrolia, donde se perforaron los primeros pozos petroleros del país. Su iglesia de Santa Bárbara, de ladrillo y estilo neogótico, preside el centro.",
      },
      {
        name: "San Antonio del Táchira y la frontera",
        text: "Bolívar la llamó Villa Heroica cuando entró por aquí en 1813. Hoy es la puerta terrestre hacia Cúcuta a través del Puente Internacional Simón Bolívar, con un comercio intenso en sus calles. Cerca, Ureña suma su zona industrial y las aguas termales de Aguas Calientes.",
      },
    ],
  },

  culture: {
    description: "Una cultura de montaña que se reza, se canta y se come caliente.",
    intro: "La mesa tachirense es de sopas, trigo y maíz; el calendario lo marcan los santos y la feria, y la música de raíz se toca con bandolín en los pueblos altos.",
    blocks: [
      {
        label: "Gastronomía",
        title: "Cocina para el frío de la mañana.",
        items: [
          { name: "Pisca andina", text: "Caldo sencillo de cilantro, cebollín, papa, huevo y leche que se toma al desayuno en todos los Andes venezolanos, casi siempre con arepa de trigo." },
          { name: "Arepa de trigo", text: "Más suave y dorada que la de maíz, es la arepa de la montaña, muy presente en Táchira y Mérida, sola o acompañando sopas y quesos." },
          { name: "Mute andino", text: "Versión andina del mondongo, espesa y contundente, asociada al Táchira y a la cocina de frontera; se sirve como plato principal en los días fríos." },
          { name: "Hallaca andina", text: "En diciembre, la hallaca de esta región lleva garbanzos en el guiso y ciruelas pasas de adorno, con un relleno que se cuece crudo durante horas dentro de la hoja." },
        ],
      },
      {
        label: "Celebraciones",
        title: "Enero es de San Sebastián; agosto, del Santo Cristo.",
        text: "La Feria Internacional de San Sebastián, así llamada desde 1965, reúne en torno al 20 de enero corridas, desfiles, conciertos y la Vuelta al Táchira. En agosto, el día 6 convoca a los peregrinos del Santo Cristo de La Grita y el 15 a los devotos de la Virgen de la Consolación en Táriba, una de las ferias más antiguas de Venezuela.",
      },
      {
        label: "Música",
        title: "El bandolín y la música de raíz",
        text: "En los pueblos altos del Táchira se toca el bandolín tachirense, un instrumento de la familia de la bandola que acompaña merengues campesinos y joropos andinos. Peribeca conserva luthiers que siguen construyéndolo, y el canto acomodado, con versos improvisados en rueda, sigue sonando en las fiestas de montaña.",
      },
      {
        label: "Identidad",
        title: "Gochos, ciclistas y aurinegros",
        text: "El tachirense se llama a sí mismo gocho, una palabra que pasó de burla a orgullo y que hoy resume trabajo, sobriedad y apego a la familia. Esa identidad se ve en la carretera, donde el ciclismo es pasión colectiva, y en el Polideportivo de Pueblo Nuevo, casa del Deportivo Táchira, uno de los clubes con más títulos del fútbol venezolano.",
      },
    ],
  },

  nature: {
    description: "Páramos, bosques de niebla y ríos que nacen en lo alto.",
    intro: "El Táchira concentra en poco espacio casi todos los pisos de los Andes: páramos con frailejones y lagunas glaciares por encima de los 3.000 metros, bosques nublados en las laderas medias y selva húmeda hacia el norte. Cuatro parques nacionales protegen ese escalonamiento, y en varios de ellos sobrevive el oso frontino.",
    items: [
      { name: "Parque Nacional El Tamá", text: "En la frontera con Colombia, protege desde 1978 unas 139.000 hectáreas de páramo y bosque húmedo, continuadas al otro lado por el parque colombiano del mismo nombre. Es refugio del oso frontino y cabecera de numerosos ríos." },
      { name: "Páramos El Batallón y La Negra", text: "El Parque Nacional General Juan Pablo Peñaloza, compartido con Mérida, reúne más de 130 lagunas de origen glaciar y el Pico El Púlpito, techo del estado. Allí nacen el Torbes y el Uribante." },
      { name: "Chorro El Indio", text: "Al este de San Cristóbal, este parque nacional sube desde los 1.100 hasta los 2.600 metros entre bosque nublado y páramo. Su cascada da nombre al parque y sus quebradas abastecen de agua a buena parte de la región." },
      { name: "Tapo-Caparo y el embalse de Uribante", text: "Hacia el sureste, el Parque Nacional Tapo-Caparo, compartido con Mérida y Barinas, cuida los bosques que rodean el complejo hidroeléctrico Uribante-Caparo, cuyos embalses abren paisajes de agua entre montañas." },
      { name: "El oso frontino", text: "El oso andino, llamado aquí frontino, encuentra en los bosques altos del Táchira uno de sus últimos refugios en el país. Verlo es improbable; saber que está ahí cambia la manera de caminar el páramo." },
    ],
  },

  access: {
    description: "Llegar al Táchira.",
    intro: "San Cristóbal es el centro de casi todos los desplazamientos; los aeropuertos están fuera de la ciudad y la frontera con Colombia queda muy cerca.",
    routes: [
      { mode: "aire", title: "Por aire", text: "El Aeropuerto Internacional de Santo Domingo, en el municipio Fernández Feo, es la principal puerta aérea y queda a unos 37 kilómetros de San Cristóbal por la Troncal 5. También operan el aeropuerto de La Fría, al norte, y el de San Antonio del Táchira, junto a la frontera. Paramillo, dentro de la capital, se reserva a la aviación general." },
      { mode: "carretera", title: "Por carretera", text: "Desde el centro del país se llega por la Troncal 5, que sube desde Barinas por el piedemonte, o por la Panamericana, que entra desde el Zulia por La Fría. La Trasandina conecta con Mérida a través de los páramos, y desde Colombia se cruza por San Antonio del Táchira, frente a Cúcuta." },
      { mode: "local", title: "Dentro del estado", text: "Las distancias son cortas, pero las carreteras son de montaña, con curvas, niebla y tramos estrechos. Para los páramos, La Grita o los embalses conviene contar con vehículo propio o con un guía local que conozca la ruta." },
    ],
  },

  tips: {
    description: "La altura y la montaña marcan el ritmo del viaje.",
    items: [
      { icon: "snowflake", title: "Frío en los páramos", text: "Aunque San Cristóbal sea templada, en El Zumbador o La Grita la temperatura baja mucho y la niebla llega de pronto. Lleva abrigo, incluso en un viaje de un día." },
      { icon: "car", title: "Carreteras de montaña", text: "Las rutas son sinuosas y la niebla reduce la visibilidad en las partes altas. Conduce con calma, evita los tramos de páramo de noche y sal con el tanque lleno." },
      { icon: "clock", title: "Enero se llena", text: "Durante la Feria de San Sebastián, San Cristóbal recibe visitantes de todo el país y de Colombia. Si viajas entonces, reserva alojamiento con antelación y cuenta con calles cerradas por desfiles y ciclismo." },
      { icon: "footprints", title: "Peregrinos en agosto", text: "El 6 de agosto La Grita se llena de devotos del Santo Cristo y las carreteras se comparten con caminantes y ciclistas. Si no vas por devoción, ten presente que el pueblo cambia esos días." },
      { icon: "map", title: "Documentos en la frontera", text: "San Antonio del Táchira es zona fronteriza. Lleva siempre tu identificación y, si piensas cruzar a Colombia, infórmate antes de los requisitos vigentes en ambos países." },
      { icon: "leaf", title: "Café de origen", text: "El Táchira fue durante siglos tierra cafetalera. Pregunta por cafés de fincas locales en San Cristóbal, Rubio o los pueblos de montaña: es la manera más directa de probar el estado." },
    ],
  },

  faqs: {
    description: "Lo que suele preguntarse antes de viajar al Táchira.",
    items: [
      { question: "¿Cuántos días conviene dedicar al Táchira?", answer: "Con dos días se conoce San Cristóbal y algún pueblo cercano como Peribeca o Táriba. Para subir a La Grita por el páramo de El Zumbador, acercarse a la frontera y visitar un parque nacional, conviene contar con cuatro o cinco." },
      { question: "¿Cuándo es la Feria de San Sebastián?", answer: "En enero, en torno al día 20, fiesta del patrono de San Cristóbal. Se celebra con ese nombre desde 1965 e incluye corridas, desfiles, conciertos, exposiciones y la Vuelta al Táchira, que suele correrse en esas mismas fechas." },
      { question: "¿Hace frío en el Táchira?", answer: "Depende de la altura. San Cristóbal ronda los 20 grados de media y es agradable todo el año; La Grita es fresca y neblinosa, y los páramos, por encima de los 3.000 metros, son fríos a cualquier hora. El norte, hacia La Fría, es cálido y húmedo." },
      { question: "¿Qué es el Santo Cristo de La Grita?", answer: "Es una talla de madera del siglo XVII, declarada monumento nacional, que la tradición vincula al terremoto de 1610. Se venera en la Basílica del Espíritu Santo de La Grita y su fiesta, el 6 de agosto, reúne a peregrinos de todo el occidente del país." },
      { question: "¿Se puede pasar a Colombia desde el Táchira?", answer: "San Antonio del Táchira está conectada con Cúcuta por el Puente Internacional Simón Bolívar, uno de los pasos fronterizos más activos entre ambos países. Las condiciones del cruce cambian; infórmate de los requisitos en vigor antes de planificar." },
      { question: "¿Qué significa ser gocho?", answer: "Es el nombre coloquial que reciben los habitantes de Táchira, Mérida y Trujillo. Tuvo un origen burlón, pero desde finales del siglo XX los andinos lo adoptaron con orgullo para resumir su fama de trabajadores, organizados y apegados a la familia." },
    ],
  },

  credits: [
    { title: "San Cristóbal desde las montañas", author: "Fotogocho", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Balc%C3%B3n_de_las_nubes.jpg" },
  ],

  seo: {
    title: "Táchira: guía de viaje de San Cristóbal, los páramos y la frontera",
    description: "Guía editorial del Táchira: San Cristóbal, La Grita, Peribeca, los páramos de El Tamá, la Feria de San Sebastián, la Vuelta al Táchira y la cocina andina.",
  },

  layout: { historyPhotoSide: "right", placesFirstPhotoSide: "left", cultureTone: "dark" },
};
