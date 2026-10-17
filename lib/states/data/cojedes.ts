import type { StateGuideData } from "@/lib/states/types";

export const cojedes: StateGuideData = {
  slug: "cojedes",
  name: "Cojedes",
  heroKicker: "Llanos centrales",
  heroTagline: "Sabana abierta, ríos lentos y hatos.",
  hero: { src: "/images/commons/cojedes-san-carlos.jpg", alt: "El centro de San Carlos al atardecer, con la torre de la iglesia sobre los tejados, estado Cojedes", position: "center 90%" },

  intro: {
    eyebrow: "Guía de estado",
    title: "Cojedes, el llano que se recorre sin prisa.",
    paragraphs: [
      "Cojedes no compite por llamar la atención: la sabana se abre sin estridencias, los ríos avanzan despacio hacia el Portuguesa y el ganado marca el ritmo de los días. Es un estado pequeño dentro de los llanos centrales, con San Carlos como capital, donde la vida rural sigue siendo el eje de casi todo.",
      "Quien llega encuentra una capital con memoria colonial y republicana, un piedemonte boscoso que guarda el nacimiento de sus ríos, hatos que hicieron de la conservación un oficio y pueblos donde las fiestas todavía organizan el calendario. Es un destino para viajar con calma, conversar y mirar el horizonte.",
    ],
    aside: { label: "En una frase", text: "Llano de ríos, hatos y silencio." },
  },

  know: {
    title: "CONOCE COJEDES",
    description: "Un estado llanero pequeño en el centro del país.",
    paragraphs: [
      "Cojedes está en el centro de Venezuela, donde las últimas estribaciones montañosas se disuelven en los llanos. Limita con Yaracuy y Carabobo al norte, con Guárico al este, con Barinas al sur y con Portuguesa al oeste, además de un tramo con Lara al noroeste. Con unos 14.800 km², es uno de los estados menos extensos del país.",
      "Casi todo el territorio es llanura de sabanas y bosques, con una altitud media cercana a los 88 metros. Las excepciones son el norte, donde el piedemonte sube hasta el Parque Nacional Tirgua, y el macizo de El Baúl, una elevación aislada en el sur. Los ríos Cojedes, San Carlos, Tinaco y Pao lo recorren hacia la cuenca del Portuguesa.",
      "San Carlos, la capital, concentra la administración y la memoria histórica; Tinaquillo, en el norte, es la ciudad industrial y la puerta desde Valencia. El resto se organiza en pueblos pequeños y hatos ganaderos: El Pao, Tinaco, El Baúl, Libertad. Esa escala humana define la manera de viajar por el estado.",
    ],
    facts: [
      { label: "Capital", value: "San Carlos" },
      { label: "Región", value: "Llanos centrales" },
      { label: "Paisaje", value: "Sabanas, bosques de piedemonte y ríos de llanura" },
      { label: "Superficie", value: "14.800 km²" },
      { label: "Población", value: "323.165 habitantes (censo 2011)" },
      { label: "Gentilicio", value: "Cojedeño / cojedeña" },
    ],
  },

  history: {
    description: "Misiones, sabanas de batalla y un llano que se hizo estado.",
    paragraphs: [
      "El nombre del estado procede de una lengua caribe y se traduce como pueblo de ceramistas, una pista sobre quienes habitaban estas sabanas antes de la llegada europea. Durante el siglo XVII, misioneros capuchinos congregaron a grupos indígenas de la zona, entre ellos los guamonteyes, en pueblos de doctrina como los que dieron origen a El Pao y El Tinaco. De ese mismo proceso nació San Carlos de Austria, fundada en 1678 como villa de españoles junto a las misiones del río Tirgua.",
      "Las sabanas cojedeñas fueron escenario decisivo de la independencia. El 31 de julio de 1813, en Taguanes, cerca de Tinaquillo, Bolívar derrotó a las fuerzas realistas y abrió el camino hacia Valencia y Caracas en el cierre de la Campaña Admirable. Ocho años después, en junio de 1821, San Carlos sirvió de punto de reunión para más de diez mil hombres de Bolívar, Páez y Urdaneta, que avanzaron desde allí hacia el campo de Carabobo.",
      "El siglo XIX trajo también la Guerra Federal. En enero de 1860, el general Ezequiel Zamora murió en San Carlos de un disparo mientras dirigía el asedio de la ciudad, un episodio que todavía pesa en la memoria local y que da nombre al aeropuerto de la capital. Cojedes había sido creada como provincia en 1855 y en 1864 figuró entre los estados fundadores de los Estados Unidos de Venezuela.",
      "La identidad actual se construyó en torno al hato y a la sabana. La ganadería extensiva organizó la propiedad, el trabajo y las fiestas, y en el siglo XX algunos hatos del sur, como Piñero, sumaron a esa tradición un proyecto de conservación de la fauna llanera. Hoy Cojedes se reconoce en su cocina de río y de cacería, en los toros coleados, en los diablos de Tinaquillo y en una forma tranquila de habitar el llano.",
    ],
    photo: null,
  },

  defines: {
    title: "LO QUE DEFINE A COJEDES",
    description: "Tres rasgos que explican cómo se vive este llano.",
    panorama: { src: "/images/commons/cojedes-hato-pinero-atardecer.jpg", alt: "Atardecer sobre una laguna del hato Piñero, con chigüires en el agua y la sabana de Cojedes al fondo", position: "center 62%" },
    items: [
      {
        name: "Los ríos de la sabana",
        text: "El Cojedes da nombre al estado y lo recorre durante unos 340 kilómetros antes de entregar sus aguas al Portuguesa. El San Carlos o Tirgua baja del piedemonte, y el Tinaco y el Pao completan una red de cauces lentos que marcan la vida de los pueblos, los balnearios y la ganadería.",
      },
      {
        name: "El hato como forma de vida",
        text: "La ganadería extensiva no es solo economía: es paisaje, vocabulario y calendario. Los hatos del sur, con sus sabanas inundables, sus caños y su ganado, explican el carácter de Cojedes, y algunos, como el antiguo Hato Piñero, demostraron que producir y conservar la fauna llanera pueden ir juntos.",
      },
      {
        name: "Una capital con memoria",
        text: "San Carlos guarda en pocas calles tres siglos de historia: la fundación capuchina del siglo XVII, las iglesias coloniales, la casa barroca de La Blanquera, la concentración del ejército patriota antes de Carabobo y la muerte de Ezequiel Zamora en 1860. Es una ciudad de llano que se recorre a pie y sin prisa.",
      },
    ],
  },

  places: {
    description: "Una selección para entrar en Cojedes por distintas puertas.",
    items: [
      {
        name: "San Carlos",
        text: "La capital se recorre entre la Catedral de la Inmaculada Concepción, las iglesias de San Juan Bautista y Santo Domingo, la Plaza Bolívar y la Casa La Blanquera, una casona barroca del siglo XVIII convertida en museo. El río Tirgua y el balneario de Boca Toma completan la visita.",
        photo: null,
      },
      {
        name: "Tinaquillo y el Arco de Taguanes",
        text: "Ciudad industrial y puerta norte del estado, Tinaquillo conserva la iglesia de Nuestra Señora del Socorro, con murales de Pietro Ginesotto, y es la casa de los Diablos Danzantes. Muy cerca, el Arco de Taguanes recuerda la batalla de 1813 en las sabanas donde Bolívar cerró la Campaña Admirable.",
        photo: null,
      },
      {
        name: "Parque Nacional Tirgua",
        text: "En el piedemonte del norte, entre Cojedes y Yaracuy, este parque de bosques deciduos protege las cabeceras del río Tirgua. Es el Cojedes más verde y accidentado, con más de trescientas especies de aves y una fauna que incluye araguatos, dantas y pumas.",
        photo: null,
      },
      {
        name: "El Baúl y sus galeras",
        text: "En el sur profundo, El Baúl es un pueblo ganadero rodeado por las galeras, un macizo rocoso aislado de unos 400 metros que rompe la horizontal de la llanura. Desde aquí se entra al territorio de los grandes hatos y a las sabanas que se inundan con las lluvias.",
        photo: null,
      },
      {
        name: "Hato Piñero",
        text: "Unas 80.000 hectáreas de sabanas, bosques, caños y lagunas en el municipio Girardot. Durante décadas fue hato ganadero y reserva privada, pionera del ecoturismo de observación de fauna en Venezuela; hoy se administra como Hato San Miguel y sigue combinando producción y conservación.",
        photo: null,
      },
      {
        name: "El Pao y su embalse",
        text: "Uno de los pueblos más antiguos del estado, con origen en 1661, conserva las ruinas de su beaterio. Cerca están el embalse del Pao, que riega y abastece buena parte de la región, y las aguas termales de Las Galeras, un descanso sencillo en medio de la sabana ganadera.",
        photo: null,
      },
    ],
  },

  culture: {
    description: "Cocina de sabana y río, fiestas de promesa y toros coleados.",
    intro: "En Cojedes la cultura se vive en la manga de coleo, en la cocina de cacería y pescado de río, y en un calendario de fiestas que va de los diablos de Corpus Christi a las Locainas de diciembre.",
    blocks: [
      {
        label: "Gastronomía",
        title: "Sabores de llano y de río.",
        items: [
          { name: "Pabellón alterado", text: "Versión cojedeña del plato nacional en la que los espaguetis sustituyen al arroz junto a la carne mechada, las caraotas y las tajadas. Una rareza muy asociada al estado." },
          { name: "Carnes de cacería", text: "Venado, chigüire y lapa forman parte de la cocina tradicional del llano cojedeño, preparados en guisos y asados que se comparten en fiestas y en el campo." },
          { name: "Pescado de río", text: "Pavón, bagre y cachama llegan de los ríos y embalses del estado. Son protagonistas de sancochos y fritos, muy presentes en los balnearios y pueblos ribereños." },
          { name: "Mango", text: "Cojedes lo cultiva y lo celebra: hay ferias dedicadas al mango y San Carlos le dedica un monumento en una de sus redomas. Es el emblema sencillo del estado." },
        ],
      },
      {
        label: "Tradiciones",
        title: "Diablos Danzantes de Tinaquillo",
        text: "Cada Corpus Christi, y también el 24 de junio por San Juan Bautista, los diablos de Tinaquillo salen vestidos de rojo y negro, con máscaras de malla metálica, a pagar promesas y rendirse ante el Santísimo. La cofradía forma parte de los Diablos Danzantes de Venezuela, reconocidos por la UNESCO en 2012.",
      },
      {
        label: "Celebraciones",
        title: "San Pascual Bailón y la Divina Pastora",
        text: "El 17 de mayo, Libertad celebra a San Pascual Bailón, y el 8 de septiembre el estado honra a la Divina Pastora, su patrona, con santuario en la misma localidad. Los toros coleados acompañan casi todas las ferias, y el 28 de diciembre las Locainas cierran el año con el humor de los Santos Inocentes.",
      },
      {
        label: "Identidad",
        title: "La vida de hato",
        text: "La ganadería ordena el paisaje y el carácter: el trabajo de llano, el coleo, la cocina de campo y una hospitalidad sin ceremonias. A eso se suman el mango como fruta emblema y el apamate como árbol regional, dos maneras discretas de reconocerse cojedeño.",
      },
    ],
  },

  nature: {
    description: "Sabana, piedemonte y ríos que bajan hacia el Portuguesa.",
    intro: "Cojedes es llano, pero no es plano del todo. En el norte, el piedemonte sube hasta los bosques del Parque Nacional Tirgua, donde nacen sus ríos; en el centro, las sabanas alternan con bosques y embalses; y en el sur, las galeras de El Baúl vigilan llanuras que se inundan en cada temporada de lluvias.",
    items: [
      { name: "Parque Nacional Tirgua", text: "Creado en 1992 con el nombre de General Manuel Manrique, protege unos 910 km² de bosques deciduos y semideciduos entre Cojedes y Yaracuy. Resguarda las cabeceras del Tirgua y alberga jaguares, pumas, dantas y más de trescientas especies de aves." },
      { name: "Río Cojedes", text: "Nace en Lara y recorre unos 340 kilómetros hasta el Portuguesa. Su cauce ha sido un área de conservación del caimán del Orinoco, y en sus playas se han protegido los nidos de la tortuga terecay." },
      { name: "Hatos y sabanas del sur", text: "Las sabanas inundables del municipio Girardot concentran la fauna llanera: chigüires, jaguares, anacondas, nutrias y centenares de especies de aves, como el paují de copete, sobre todo en el antiguo Hato Piñero, convertido en reserva privada." },
      { name: "Embalse del Pao", text: "Con más de 1.500 hectáreas de espejo de agua, el embalse abastece y riega la región y se ha convertido en lugar de pesca y de paseo en medio de la sabana ganadera." },
      { name: "El macizo de El Baúl", text: "Una elevación aislada de unos 400 metros, las llamadas galeras, que se levanta sobre la llanura del sur como referencia de todo el paisaje. Es el punto más alto del municipio Girardot." },
    ],
  },

  access: {
    description: "Llegar a Cojedes.",
    intro: "Casi todo el mundo entra por el norte, desde Valencia, y sigue hacia San Carlos. Desde allí se abren las rutas al piedemonte y a los hatos del sur.",
    routes: [
      { mode: "aire", title: "Por aire", text: "San Carlos cuenta con el Aeropuerto Nacional Ezequiel Zamora, de pista asfaltada y uso mayormente nacional. En la práctica, muchos viajeros vuelan a Valencia y completan el trayecto por carretera; confirma siempre la disponibilidad de vuelos con antelación." },
      { mode: "carretera", title: "Por carretera", text: "La autopista José Antonio Páez enlaza Valencia con Tinaquillo y San Carlos y continúa hacia el occidente llanero. Es el eje que vertebra el estado y el acceso habitual desde el centro del país." },
      { mode: "local", title: "Dentro del estado", text: "Entre San Carlos, Tinaco, El Pao y Libertad las distancias son cortas y las carreteras atraviesan sabana y pueblos. Hacia El Baúl y los hatos del sur los caminos se alargan, y en temporada de lluvias conviene preguntar por su estado antes de salir." },
    ],
  },

  tips: {
    description: "El llano se disfruta con calma, sombra y buenas horas.",
    items: [
      { icon: "sun", title: "Calor de llanura", text: "El clima es cálido todo el año y el sol cae sin sombra sobre la sabana. Sombrero, protector solar y caminatas a primera hora o al atardecer." },
      { icon: "droplets", title: "Dos estaciones, dos paisajes", text: "En lluvias, las sabanas del sur se anegan y los caminos se complican; en seco, la fauna se concentra junto a los caños. Elige la temporada según lo que quieras ver." },
      { icon: "bug", title: "Repelente junto al agua", text: "En ríos, embalses y esteros, sobre todo al atardecer, lleva repelente y ropa de manga larga. Es una precaución sencilla que mejora cualquier tarde de llano." },
      { icon: "users", title: "Respeto en los hatos", text: "Los hatos son fincas en funcionamiento y viviendas. Entra solo con permiso o con quienes los gestionan, y sigue las indicaciones del personal en zonas de ganado y fauna." },
      { icon: "camera", title: "Fauna con paciencia", text: "Chigüires, aves y reptiles se observan mejor al amanecer y al final de la tarde, en silencio y sin acercarse. Unos binoculares hacen la diferencia." },
      { icon: "clock", title: "Fiestas con fecha", text: "Para ver a los Diablos Danzantes de Tinaquillo, planifica en torno a Corpus Christi o al 24 de junio; San Pascual Bailón es el 17 de mayo y la Divina Pastora, el 8 de septiembre." },
    ],
  },

  faqs: {
    description: "Lo que suele preguntarse antes de viajar a Cojedes.",
    items: [
      { question: "¿Qué se puede hacer en Cojedes en un fin de semana?", answer: "San Carlos se conoce en una mañana: catedral, iglesias, Plaza Bolívar y La Blanquera. La tarde puede ir al balneario de Boca Toma o a La Sierra, y el segundo día a Tinaquillo y el Arco de Taguanes o, si hay tiempo, hacia el embalse del Pao." },
      { question: "¿Se puede visitar el Hato Piñero?", answer: "El hato, hoy administrado como Hato San Miguel, es una propiedad privada productiva que históricamente recibió visitantes para observar fauna. Las condiciones de acceso cambian, así que conviene informarse con antelación y no presentarse sin aviso." },
      { question: "¿Cuál es la mejor época para viajar a Cojedes?", answer: "Depende de lo que busques. En temporada seca los caminos del sur son más fáciles y los animales se concentran cerca del agua; en lluvias el llano se vuelve verde e inundado, con otra belleza y más dificultades para desplazarse." },
      { question: "¿Qué son las galeras de El Baúl?", answer: "Es el nombre local del macizo que rodea a El Baúl, una elevación rocosa aislada de unos 400 metros en medio de la llanura del sur. Es el punto más alto del municipio Girardot y una referencia del paisaje cojedeño." },
      { question: "¿Qué se come en Cojedes?", answer: "Comida de llano y de río: carnes de cacería como venado, chigüire y lapa, pescados como pavón, bagre y cachama, y el pabellón alterado, que cambia el arroz por espaguetis. El mango, muy cultivado, tiene feria propia y monumento en San Carlos." },
      { question: "¿Por qué San Carlos es importante en la historia de Venezuela?", answer: "Porque allí se reunieron en junio de 1821 los ejércitos de Bolívar, Páez y Urdaneta antes de marchar a Carabobo, y porque en 1860, durante la Guerra Federal, murió en la ciudad el general Ezequiel Zamora. La batalla de Taguanes, en 1813, ocurrió también en el estado." },
    ],
  },

  credits: [
    { title: "San Carlos al atardecer", author: "Salazardaviddd", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Panoramicasancarlos.jpg" },
    { title: "Atardecer en el hato Piñero, estado Cojedes", author: "Laura De Oliveira", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Atardecer_de_paz.JPG" },
  ],

  seo: {
    title: "Cojedes: guía de San Carlos, los hatos y el llano",
    description: "Guía editorial de Cojedes: San Carlos, Tinaquillo y sus diablos, el Parque Nacional Tirgua, El Baúl y los hatos del sur. Historia, naturaleza y consejos.",
  },

  layout: { historyPhotoSide: "left", placesFirstPhotoSide: "left", cultureTone: "light" },
};
