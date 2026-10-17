import type { StateGuideData } from "@/lib/states/types";

const photos = {
  ciudadBolivar: { src: "/images/commons/ciudad-bolivar-vista-aerea.jpg", alt: "Vista aérea de Ciudad Bolívar junto al río Orinoco, con el casco histórico y sus tejados asomados a la orilla, estado Bolívar", position: "center 55%" },
  granSabana: { src: "/images/commons/la-gran-sabana.jpg", alt: "Sabanas, morichales y bosques de galería de la Gran Sabana, en el sureste del estado Bolívar", position: "center 55%" },
  llovizna: { src: "/images/commons/la-llovizna-1.jpg", alt: "Salto La Llovizna en el río Caroní, en el parque La Llovizna de Ciudad Guayana", position: "center 50%" },
};

export const bolivar: StateGuideData = {
  slug: "bolivar",
  name: "Bolívar",
  heroKicker: "Guayana venezolana",
  heroTagline: "Orinoco, memoria, ciudades y territorios de Guayana.",
  hero: photos.ciudadBolivar,

  intro: {
    eyebrow: "Guía de estado",
    title: "Bolívar, un estado tejido por ríos, ciudades y memoria.",
    paragraphs: [
      "Bolívar ocupa el sureste de Venezuela y es el estado más extenso del país. Su capital, Ciudad Bolívar, creció en la angostura del Orinoco, el gran río que marca el norte del territorio y que durante siglos ha funcionado como vía de comunicación, frontera natural y escenario de la historia venezolana.",
      "Dentro de sus límites conviven el patrimonio de la antigua Angostura, la escala urbana e industrial de Ciudad Guayana, pueblos mineros como El Callao, comunidades indígenas, cuencas fluviales, selvas, sabanas y formaciones geológicas antiquísimas. Canaima es uno de sus territorios más conocidos, pero forma parte de una región de Guayana mucho más amplia y diversa.",
    ],
    aside: { label: "En una frase", text: "Un cuarto de Venezuela al sur del Orinoco." },
  },

  know: {
    title: "CONOCE BOLÍVAR",
    description: "Una mirada general al estado más extenso de Venezuela.",
    paragraphs: [
      "Bolívar se extiende al sureste del país, con el Orinoco como gran referencia al norte, Brasil al sur y Guyana al este. Sus 240.528 km² abarcan más de una cuarta parte de Venezuela y obligan a pensar el estado por regiones: las ciudades y riberas del norte, las cuencas interiores, los pueblos mineros y las tierras altas del sur.",
      "La mayor parte del territorio pertenece al Escudo Guayanés. Sobre esa base geológica antigua se alternan selvas, sabanas, valles fluviales, serranías y mesetas de arenisca. Los ríos Orinoco, Caroní, Caura y sus afluentes ordenan el paisaje, la movilidad y buena parte de la vida económica y cultural.",
      "Ciudad Bolívar es la capital histórica a orillas del Orinoco. Ciudad Guayana, formada por Puerto Ordaz y San Félix, es la principal concentración urbana e industrial. Upata, El Callao, Tumeremo y Santa Elena de Uairén muestran otras escalas del estado: agricultura, minería, cultura afroantillana, frontera y presencia indígena.",
    ],
    facts: [
      { label: "Capital", value: "Ciudad Bolívar" },
      { label: "Región", value: "Guayana venezolana" },
      { label: "Paisaje", value: "Tepuyes, selva, sabanas y grandes ríos" },
      { label: "Superficie", value: "240.528 km²" },
      { label: "Clima", value: "Cálido de sabana en el norte; más fresco en las tierras altas de la Gran Sabana" },
      { label: "Gentilicio", value: "Bolivarense" },
    ],
  },

  history: {
    description: "Guayana, Angostura y la construcción de una identidad regional.",
    paragraphs: [
      "La historia de Bolívar pertenece a la región de Guayana, habitada mucho antes de la llegada europea por pueblos indígenas de tradiciones y lenguas diversas. El Orinoco conectaba comunidades, sostenía intercambios y abría una ruta hacia el interior; por esa misma razón se convirtió después en un corredor estratégico para misiones, expediciones, comercio y defensa.",
      "Tras varios asentamientos, Santo Tomás de Guayana quedó establecida en 1764 en el punto donde el Orinoco se estrecha y pasó a conocerse como Angostura. La ciudad tuvo un papel central durante la independencia: allí se instaló el Congreso de Angostura en 1819 y circuló el Correo del Orinoco. En 1846 recibió el nombre de Ciudad Bolívar, y el territorio de Guayana evolucionó mediante distintas divisiones políticas hasta consolidarse como el actual estado Bolívar.",
      "La minería transformó poblaciones como El Callao y atrajo influencias caribeñas que aún se reconocen en su cultura. Durante el siglo XX, Ciudad Guayana creció en la confluencia del Caroní y el Orinoco como centro urbano e industrial. Esa historia explica un estado donde conviven memoria republicana, trabajo minero e industrial, culturas afroantillanas, ciudades de río y numerosos pueblos indígenas.",
    ],
    photo: null,
  },

  defines: {
    title: "LO QUE DEFINE A BOLÍVAR",
    description: "Tres dimensiones diferentes de un mismo territorio.",
    panorama: photos.granSabana,
    items: [
      {
        name: "El Orinoco",
        text: "El río marca el límite norte, sostiene ciudades y comunica a Bolívar con otras regiones del país. Ciudad Bolívar nació en su angostura; Ciudad Guayana creció cerca de su encuentro con el Caroní. El Orinoco es paisaje, vía fluvial, memoria histórica y parte de la vida cotidiana.",
        photo: null,
      },
      {
        name: "La Guayana venezolana",
        text: "Bolívar reúne grandes cuencas fluviales, selvas húmedas, sabanas, serranías y formaciones del Escudo Guayanés. Los tepuyes y Canaima son su expresión más famosa, pero comparten el territorio con el Caura, el Caroní, bosques extensos y paisajes de transición hacia el Orinoco.",
        photo: null,
      },
      {
        name: "Una identidad de muchas voces",
        text: "La identidad bolivarense se construye entre la tradición de Angostura, la vida urbana de Ciudad Guayana, la memoria minera y afroantillana de El Callao y la presencia de pueblos como el pemón, ye'kwana, sanemá, e'ñepá, kariña y otros. No existe una sola manera de habitar Bolívar.",
        photo: null,
      },
    ],
  },

  places: {
    description: "Una selección para conocer la historia, las ciudades, la cultura y la naturaleza del estado.",
    items: [
      {
        name: "Ciudad Bolívar, la antigua Angostura",
        text: "La capital conserva un centro histórico frente al Orinoco. La Plaza Bolívar, la Catedral de Santo Tomás, la Casa del Congreso de Angostura, el Paseo Orinoco y el Museo de Arte Moderno Jesús Soto permiten recorrer la memoria política, urbana y artística de Guayana.",
        photo: null,
      },
      {
        name: "Ciudad Guayana y los parques del Caroní",
        text: "Puerto Ordaz y San Félix forman la principal ciudad del estado, situada junto a la confluencia del Caroní y el Orinoco. Los parques La Llovizna, Cachamay y Loefling acercan el río a la vida urbana, mientras la ciudad cuenta la historia industrial contemporánea de Guayana.",
        photo: null,
      },
      {
        name: "El Callao",
        text: "Este pueblo minero es uno de los grandes centros culturales de Bolívar. Su carnaval, el calipso, las madamas, los mediopintos, los mineros y los diablos expresan una memoria afroantillana que la comunidad transmite entre generaciones y que la UNESCO reconoció en 2016.",
        photo: null,
      },
      {
        name: "Parque Nacional Canaima",
        text: "Canaima reúne tepuyes, selvas, sabanas y saltos de agua en un territorio de enorme valor natural y cultural. Aquí se encuentra el Salto Ángel, Kerepakupai Vená. En esta guía aparece como uno de los grandes lugares de Bolívar; su historia, rutas y consejos se desarrollan en la página dedicada.",
        photo: null,
        href: "/parque-nacional/canaima",
      },
      {
        name: "La Gran Sabana",
        text: "Al sureste, la Troncal 10 atraviesa sabanas de altura, comunidades pemón, ríos, cascadas y horizontes dominados por tepuyes. Santa Elena de Uairén funciona como ciudad de referencia para esta región fronteriza, que exige una planificación distinta a la de las ciudades del norte.",
        photo: null,
      },
      {
        name: "La cuenca del Caura",
        text: "El Caura atraviesa bosques, raudales y territorios indígenas antes de desembocar en el Orinoco. El Salto Pará interrumpe su curso con un sistema de cascadas y rápidos. Es una región remota y sensible, apropiada únicamente para recorridos organizados con conocimiento y participación local.",
        photo: null,
      },
    ],
  },

  culture: {
    description: "Sabores de río, memoria afroantillana y saberes de muchos pueblos.",
    intro: "La cultura de Bolívar cambia entre las riberas del Orinoco, las ciudades, los pueblos mineros y los territorios indígenas. Su riqueza está precisamente en esa diversidad: no existe una única tradición capaz de representar por sí sola a todo el estado.",
    blocks: [
      {
        label: "Gastronomía",
        title: "Río, yuca y tradición guayanesa.",
        items: [
          { name: "Sapoara", text: "Pez migratorio del Orinoco asociado especialmente con Ciudad Bolívar y con la temporada de aguas altas. Su consumo forma parte de la memoria culinaria local y de una conocida leyenda popular, pero no resume por sí solo la cocina de todo el estado." },
          { name: "Casabe", text: "Torta delgada elaborada con yuca amarga, de raíz indígena y extendida por buena parte de Guayana y otras regiones del país. En Bolívar acompaña pescados, carnes y preparaciones cotidianas." },
          { name: "Queso guayanés", text: "Queso blanco, fresco y de textura suave identificado con la región de Guayana, aunque hoy se consume en toda Venezuela. Suele acompañar arepas, cachapas y casabe." },
          { name: "Pescados de río", text: "El Orinoco, el Caroní y otras cuencas aportan distintas especies a las cocinas ribereñas. Las preparaciones y temporadas cambian de una localidad a otra, por lo que conviene hablar de una tradición fluvial diversa." },
        ],
      },
      {
        label: "Celebraciones",
        title: "El Carnaval de El Callao",
        text: "La celebración conserva la memoria de una población minera formada por encuentros entre comunidades locales y migraciones caribeñas. Madamas, mediopintos, mineros y diablos recorren las calles al ritmo del calipso. En 2016 la UNESCO la inscribió en la Lista Representativa del Patrimonio Cultural Inmaterial de la Humanidad y destacó su transmisión familiar y comunitaria.",
      },
      {
        label: "Música",
        title: "El calipso de El Callao",
        text: "El calipso callaoense tiene raíces afroantillanas y adquirió una expresión propia en el contexto minero de Bolívar. No es solo música de desfile: reúne canto, baile, composición, fabricación de instrumentos y aprendizaje entre generaciones, y funciona como una forma de memoria colectiva.",
      },
      {
        label: "Saberes y artesanía",
        title: "Culturas indígenas vivas",
        text: "En Bolívar habitan pueblos como el pemón, ye'kwana, sanemá, e'ñepá, kariña y otros, cada uno con lengua, organización y conocimientos propios. La cestería, los tejidos, la talla, el trabajo con fibras y la elaboración de casabe varían entre comunidades; deben entenderse como prácticas vivas, no como una decoración turística uniforme.",
      },
    ],
  },

  nature: {
    description: "Un sistema de ríos, bosques, sabanas y relieves antiguos.",
    intro: "La naturaleza de Bolívar no comienza ni termina en Canaima. El estado se apoya sobre el Escudo Guayanés y reúne grandes cuencas, bosques húmedos, sabanas del norte y del sur, valles, serranías y mesetas de arenisca. El Orinoco recibe las aguas del Caroní, el Caura, el Aro y otros ríos que conectan ecosistemas y territorios humanos.",
    photo: photos.llovizna,
    items: [
      { name: "El Orinoco", text: "Bordea el norte del estado y recibe algunos de los mayores afluentes de su margen derecha. Sus crecidas, islas y riberas influyen en el paisaje, la pesca, la navegación y la vida de Ciudad Bolívar y otras poblaciones." },
      { name: "El Caroní", text: "Nace en las tierras altas del sur, atraviesa sabanas y bosques y llega a Ciudad Guayana antes de unirse al Orinoco. Su cuenca reúne saltos, raudales y embalses, y tiene una importancia ecológica y energética fundamental para el país." },
      { name: "La cuenca del Caura", text: "El Caura conserva una sucesión de bosques, afluentes, raudales y formaciones del Escudo Guayanés. También es territorio de comunidades indígenas y una región de acceso complejo donde cualquier visita debe organizarse con acompañamiento local." },
      { name: "Escudo Guayanés y tepuyes", text: "La base geológica antigua del estado originó relieves muy distintos. Los tepuyes son una de sus formas más espectaculares, pero conviven con planicies, valles, serranías, lomeríos y extensas áreas de bosque y sabana." },
      { name: "Áreas protegidas", text: "Canaima, Caura y Jaua-Sarisariñama protegen paisajes diferentes dentro de un territorio enorme. Canaima resguarda una parte extraordinaria de este sistema, mientras otras cuencas y macizos muestran la amplitud natural del estado." },
    ],
  },

  access: {
    description: "Entrar al estado y elegir una región como punto de partida.",
    intro: "Bolívar no tiene una única puerta de entrada. Ciudad Bolívar y Ciudad Guayana sirven como referencias para el norte; la Troncal 10 conecta con poblaciones del interior y con la Gran Sabana, mientras los territorios remotos requieren una planificación específica.",
    routes: [
      { mode: "aire", title: "Por aire", text: "Ciudad Guayana y Ciudad Bolívar cuentan con aeropuertos que funcionan como referencias para llegar al norte del estado. La disponibilidad de vuelos puede cambiar, por lo que conviene confirmar rutas y fechas antes de organizar el resto del viaje." },
      { mode: "carretera", title: "Por carretera", text: "Los puentes de Angostura y Orinoquia cruzan el Orinoco hacia las principales ciudades del norte. Desde Ciudad Guayana, la Troncal 10 continúa hacia Upata, El Callao, Tumeremo, la Gran Sabana y Santa Elena de Uairén. Las distancias exigen dividir el recorrido por etapas." },
      { mode: "local", title: "Entre ciudades y regiones", text: "Ciudad Bolívar y Ciudad Guayana pueden formar una primera ruta urbana e histórica. El Callao y otros pueblos del interior requieren desplazamientos adicionales; la Gran Sabana constituye otro tramo de viaje y no debe tratarse como una excursión breve desde la capital." },
      { mode: "rio", title: "Canaima y zonas remotas", text: "Canaima tiene una logística distinta a la de las rutas terrestres y debe coordinarse mediante servicios especializados. Lo mismo ocurre con recorridos fluviales o comunidades alejadas: el acceso depende del destino, el clima, el caudal y el acompañamiento local." },
    ],
  },

  tips: {
    description: "Cómo organizar un viaje por un estado de escala continental.",
    items: [
      { icon: "backpack", title: "Divide el estado por regiones", text: "Ciudad Bolívar, Ciudad Guayana, el corredor de la Troncal 10 y los destinos remotos responden a logísticas diferentes. Elegir una o dos zonas produce un viaje más realista que intentar abarcar todo en pocos días." },
      { icon: "footprints", title: "Calcula las distancias", text: "Los trayectos terrestres pueden ocupar buena parte de la jornada. Revisa cada etapa por separado y deja margen entre conexiones, especialmente cuando combines ciudades con regiones naturales." },
      { icon: "shirt", title: "Prepárate para climas distintos", text: "El norte urbano suele ser cálido, mientras las tierras altas del sur pueden sentirse más frescas y lluviosas. La ropa y el equipo deben responder a la región concreta, no a una única idea del clima de Bolívar." },
      { icon: "droplets", title: "Los ríos cambian el viaje", text: "En rutas fluviales, el caudal y la temporada pueden modificar tiempos y accesos. Confirma las condiciones con prestadores locales antes de desplazarte hacia cuencas o sectores alejados." },
      { icon: "users", title: "Respeta a las comunidades", text: "Bolívar alberga pueblos y comunidades con normas y formas de organización propias. Pide permiso antes de fotografiar personas, escucha las indicaciones locales y evita tratar los territorios habitados como espacios vacíos." },
      { icon: "leaf", title: "Cuida las áreas protegidas", text: "No extraigas plantas, piedras ni otros elementos, evita dejar residuos y permanece en rutas autorizadas. Los destinos más remotos requieren guías y una preparación específica acorde con su fragilidad." },
    ],
  },

  faqs: {
    description: "Respuestas para entender el estado y elegir una primera ruta.",
    items: [
      { question: "¿Cuál es la capital del estado Bolívar?", answer: "Ciudad Bolívar es la capital. Se encuentra a orillas del Orinoco, en el lugar históricamente conocido como Angostura, y conserva uno de los conjuntos históricos más importantes de la región de Guayana." },
      { question: "¿Cuáles son las principales ciudades de Bolívar?", answer: "Ciudad Bolívar es la capital histórica y administrativa. Ciudad Guayana, formada por Puerto Ordaz y San Félix, es la mayor concentración urbana e industrial. También destacan Upata, El Callao, Tumeremo y Santa Elena de Uairén como referencias regionales." },
      { question: "¿Qué caracteriza al estado Bolívar?", answer: "Su enorme extensión, el Orinoco y sus grandes afluentes, la historia de Angostura, la diversidad cultural, el desarrollo urbano e industrial de Ciudad Guayana y una geografía que reúne selvas, sabanas, cuencas y tepuyes." },
      { question: "¿Qué lugares se pueden conocer además de Canaima?", answer: "Ciudad Bolívar, Ciudad Guayana y sus parques del Caroní, El Callao, la ruta de la Gran Sabana y distintas poblaciones del corredor de la Troncal 10 muestran facetas históricas, urbanas, culturales y naturales muy diferentes." },
      { question: "¿Cuántos días conviene dedicar a Bolívar?", answer: "Depende de la región. Una ruta entre Ciudad Bolívar y Ciudad Guayana puede ocupar varios días; El Callao, la Gran Sabana o Canaima requieren tiempos y desplazamientos propios. Para conocer zonas muy separadas conviene pensar en más de un viaje." },
      { question: "¿Canaima está en el estado Bolívar?", answer: "Sí. El Parque Nacional Canaima se encuentra en Bolívar y es uno de sus grandes territorios naturales y culturales. Sin embargo, el estado también incluye ciudades históricas e industriales, pueblos mineros, otras cuencas fluviales y una amplia diversidad cultural." },
    ],
  },

  credits: [
    { title: "Ciudad Bolívar desde el aire", author: "Daniel Lopez Monagas", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Ciudad_Bol%C3%ADvar_Vista_Area.jpg" },
    { title: "La Gran Sabana", author: "Inti", license: "CC BY 2.0", href: "https://commons.wikimedia.org/wiki/File:La_Gran_Sabana.jpg" },
    { title: "Salto La Llovizna", author: "Daniel Méndez", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:La_Llovizna_1.jpg" },
  ],

  seo: {
    title: "Bolívar: guía de ciudades, ríos y naturaleza",
    description: "Guía editorial del estado Bolívar: Ciudad Bolívar, Ciudad Guayana, Orinoco, Caroní, El Callao, cultura guayanesa, Canaima y Gran Sabana.",
  },

  layout: { historyPhotoSide: "left", placesFirstPhotoSide: "right", cultureTone: "dark" },
};
