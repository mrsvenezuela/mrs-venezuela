import type { StateGuideData } from "@/lib/states/types";

const photos = {
  elMorro: { src: "/images/commons/anzoategui-cerro-el-morro.jpg", alt: "La costa de Lechería vista desde el cerro El Morro: cardones en primer plano, la carretera bordeando la punta y el mar Caribe con las islas al fondo, estado Anzoátegui", position: "center 40%" },
};

export const anzoategui: StateGuideData = {
  slug: "anzoategui",
  name: "Anzoátegui",
  heroKicker: "Oriente de Venezuela",
  heroTagline: "Islas, costa colonial y sabana abierta.",
  hero: { src: "/images/commons/anzoategui-puerto-la-cruz.jpg", alt: "El perfil urbano de Puerto La Cruz visto desde el mar, con la serranía detrás, estado Anzoátegui", position: "center 48%" },

  intro: {
    eyebrow: "Guía de estado",
    title: "Anzoátegui, donde el Caribe oriental se encuentra con la sabana.",
    paragraphs: [
      "Anzoátegui se entiende mirando en dos direcciones. Al norte, la costa oriental del Caribe: Puerto La Cruz, Lechería, Guanta y las islas del Parque Nacional Mochima, con Barcelona guardando la memoria colonial a orillas del Neverí. Al sur, la Mesa de Guanipa abre una sabana amplia que baja hacia el Orinoco.",
      "Es un estado de contrastes que conviven sin estridencia: el pescador y el obrero petrolero, la iglesia del siglo XVIII y la marina moderna, el joropo con mandolina y el canto kariña de la sabana. Esta guía lo recorre de la orilla al llano, con calma y con datos.",
    ],
    aside: { label: "En una frase", text: "Un estado que se reparte entre el mar y la sabana." },
  },

  know: {
    title: "CONOCE ANZOÁTEGUI",
    description: "Dónde está, cómo se organiza su territorio y por qué cambia tanto de norte a sur.",
    paragraphs: [
      "Anzoátegui ocupa el nororiente de Venezuela, con el mar Caribe al norte, Sucre y Monagas al este, Guárico y Miranda al oeste y el río Orinoco marcando su límite sur con Bolívar. Sus 43.300 km² lo sitúan entre los estados más extensos del país, y en el censo de 2011 contaba 1.469.747 habitantes.",
      "El territorio se lee en franjas. Una costa de bahías, islas y lagunas salobres; detrás, la Serranía de Bergantín y los valles del Neverí y el Unare; más al sur, la Mesa de Guanipa, una altiplanicie de sabana y morichales que se prolonga hasta las riberas del Orinoco.",
      "Barcelona, la capital, forma con Puerto La Cruz, Lechería y Guanta una conurbación conocida como Gran Barcelona, la más poblada de la región nororiental. Desde allí se organiza casi todo: las salidas en lancha hacia Mochima, el ferri a Margarita y las carreteras que bajan hacia El Tigre y la sabana.",
    ],
    facts: [
      { label: "Capital", value: "Barcelona" },
      { label: "Región", value: "Oriente de Venezuela" },
      { label: "Paisaje", value: "Costa caribeña, islas de Mochima, serranía y la sabana de la Mesa de Guanipa" },
      { label: "Superficie", value: "43.300 km²" },
      { label: "Clima", value: "Cálido todo el año: seco en la costa, de sabana hacia el sur" },
      { label: "Gentilicio", value: "Anzoatiguense" },
    ],
  },

  history: {
    description: "De los cumanagotos al petróleo, con Barcelona como eje.",
    paragraphs: [
      "Antes de la llegada europea, la costa y los valles del actual Anzoátegui eran territorio de pueblos de lengua caribe, entre ellos los cumanagotos y los kariña. Los primeros ocupaban la franja litoral y el interior inmediato; los segundos, las sabanas del sur. Ambos siguen presentes: hay comunidades kariña en la Mesa de Guanipa, donde se mantiene la lengua, y descendientes cumanagotos que trabajan en la recuperación de su idioma, hoy llamado itoto majun.",
      "La ocupación española fue lenta y conflictiva. Clarines se fundó en 1594 a orillas del Unare, y en 1638 el catalán Joan Orpí estableció Nueva Barcelona del Cerro Santo, trasladada en 1671 al lugar que hoy ocupa la capital. Las misiones franciscanas instaladas en Píritu desde 1656 dejaron iglesias que todavía se visitan, y Cantaura nació en 1740 como pueblo de indios bajo la advocación de la Candelaria.",
      "La independencia marcó a Barcelona con dureza. En abril de 1817, el antiguo convento franciscano convertido en Casa Fuerte fue tomado por las tropas realistas, y sus ruinas, declaradas monumento nacional, siguen en pie frente a la plaza. De esta ciudad era José Antonio Anzoátegui, general que combatió en Boyacá y murió en 1819 con treinta años recién cumplidos; el estado, llamado antes Barcelona, adoptó su nombre en 1909.",
      "El siglo XX llegó con el petróleo. El Tigre se fundó en 1933 junto al primer pozo de la Gulf en la Mesa de Guanipa, Anaco creció desde 1944 alrededor del gas y la costa sumó la refinería de Puerto La Cruz y, en 1990, el complejo industrial de José. Hoy Anzoátegui combina esa economía con una identidad oriental hecha de mar, devoción a la Virgen del Valle y música de mandolina.",
    ],
    photo: null,
  },

  defines: {
    title: "LO QUE DEFINE A ANZOÁTEGUI",
    description: "Tres rasgos que explican el estado de norte a sur.",
    panorama: { src: "/images/commons/anzoategui-cerro-el-morro.jpg", alt: "La costa de Lechería vista desde el cerro El Morro: cardones en primer plano, la carretera bordeando la punta y el mar Caribe con las islas al fondo, estado Anzoátegui", position: "center 40%" },
    items: [
      {
        name: "La costa oriental",
        text: "Puerto La Cruz, Lechería y Guanta forman una orilla continua de paseos marítimos, marinas y embarcaderos desde donde se sale a las islas. Es la cara más visible del estado: el Paseo Colón al atardecer, las lanchas rumbo a las Chimanas y El Morro de Lechería recortado sobre el agua.",
      },
      {
        name: "Barcelona y su memoria colonial",
        text: "La capital guarda en torno a la plaza Boyacá un conjunto que pocas ciudades venezolanas conservan: la catedral de San Cristóbal terminada en 1773, las ruinas de la Casa Fuerte, el Teatro Cajigal y el Museo de la Tradición. El río Neverí atraviesa el centro y recuerda por qué la ciudad se fundó aquí.",
      },
      {
        name: "La Mesa de Guanipa",
        text: "Al sur, el paisaje cambia por completo: una altiplanicie de sabana y morichales donde nacieron El Tigre y Anaco al ritmo del petróleo y el gas. Es también territorio kariña, con comunidades que conservan su lengua y bailan el maremare, reconocido como baile emblemático del estado.",
      },
    ],
  },

  places: {
    description: "Una selección para entrar en Anzoátegui por la costa, por la historia y por la sabana.",
    items: [
      {
        name: "Parque Nacional Mochima",
        text: "Compartido con Sucre y decretado en 1973, protege casi mil kilómetros cuadrados entre mar e islas. Desde los embarcaderos de Puerto La Cruz, Guanta y Lechería se sale a las Chimanas, Las Borrachas y la Isla de Plata, con playas de palmeras y fondos para bucear.",
        photo: null,
        href: "/playa/mochima",
      },
      {
        name: "Barcelona colonial",
        text: "Alrededor de la plaza Boyacá se concentra el casco histórico: la catedral de San Cristóbal, la Casa Fuerte, el Teatro Cajigal y el Museo de la Tradición. Un paseo de una mañana basta para entender por qué la ciudad fue capital de provincia antes que de estado.",
        photo: null,
      },
      {
        name: "Puerto La Cruz y el Paseo Colón",
        text: "El bulevar costero de la ciudad, inaugurado en 1967, reúne artesanos, restaurantes y el embarcadero principal hacia Mochima. Desde aquí parte también el ferri a Margarita, lo que convierte a Puerto La Cruz en la puerta marítima del oriente.",
        photo: null,
      },
      {
        name: "Lechería y El Morro",
        text: "El municipio más pequeño del país se construyó sobre canales y marinas junto al cerro de El Morro, donde resiste el Fortín de la Magdalena, terminado en 1799. Playa Lido atrae a quienes practican kitesurf; Playa Mansa, a las familias.",
        photo: null,
      },
      {
        name: "Clarines y Píritu",
        text: "Hacia el oeste, dos pueblos nacidos entre los siglos XVI y XVII conservan iglesias coloniales de primer orden: San Antonio de Padua en Clarines, barroca y monumento nacional, y la Inmaculada Concepción de Píritu, levantada entre 1674 y 1745 con cinco retablos dorados.",
        photo: null,
      },
      {
        name: "El Tigre y la Mesa de Guanipa",
        text: "La ciudad nació en 1933 alrededor de un pozo petrolero y su historia inspiró la novela Oficina N.º 1 de Miguel Otero Silva. Es la base para recorrer la sabana del sur, los morichales y las comunidades kariña de Tascabaña o Kashama.",
        photo: null,
      },
    ],
  },

  culture: {
    description: "Mar, mandolina y sabana en una misma mesa.",
    intro: "La cultura anzoatiguense es oriental por el mar y la devoción, llanera por la sabana del sur y kariña por la memoria que se canta en la Mesa de Guanipa.",
    blocks: [
      {
        label: "Gastronomía",
        title: "Cocina de costa y de sabana.",
        items: [
          { name: "Sancocho de pescado", text: "Hervido de pescado fresco con verduras y ají dulce, muy presente en toda la costa oriental y en las mesas de Puerto La Cruz y Guanta." },
          { name: "Cuajado", text: "Pastel de huevo con pescado o cazón, típico del oriente y protagonista de la feria gastronómica de la Virgen del Valle en Lechería." },
          { name: "Casabe", text: "Torta de yuca seca y crujiente heredada de los cumanagotos. Acompaña pescados y guisos, y se vende en los pueblos del interior." },
          { name: "Empanadas de cazón", text: "Masa de maíz frita con guiso de cazón desmenuzado. Son el desayuno de playa por excelencia en toda la costa oriental, no solo en Anzoátegui." },
        ],
      },
      {
        label: "Música",
        title: "El joropo oriental",
        text: "En el norte del estado el joropo se toca con mandolina o bandolín, bandola oriental, cuatro y maracas, a veces con la pequeña cuereta. Su forma más conocida es el joropo con estribillo, que alterna una melodía fija con una parte improvisada.",
      },
      {
        label: "Tradiciones",
        title: "El maremare kariña",
        text: "En las comunidades kariña de la Mesa de Guanipa se baila el maremare, danza circular de canto colectivo que el estado adoptó como baile emblemático. Los días 1 y 2 de noviembre, el Akaatompo reúne a las familias para recordar a sus difuntos.",
      },
      {
        label: "Celebraciones",
        title: "La Virgen del Valle y la Cruz de Mayo",
        text: "Cada 8 de septiembre, la patrona del oriente y de los pescadores se celebra en toda la costa, con feria gastronómica en Lechería. Puerto La Cruz festeja además la Santa Cruz el 3 de mayo, y Barcelona honra a San Celestino el 15 de mayo.",
      },
    ],
  },

  nature: {
    description: "Islas, lagunas salobres y la sabana del moriche.",
    intro: "Anzoátegui concentra en poco espacio tres mundos naturales: el mar de islas y arrecifes de Mochima, las lagunas costeras de Unare y Píritu con sus bandadas de aves, y la sabana de la Mesa de Guanipa, donde los morichales siguen el curso de los ríos hacia el Orinoco.",
    photo: null,
    items: [
      { name: "Parque Nacional Mochima", text: "Arrecifes, manglares, bosque seco y playas de arena blanca repartidos entre islas como Chimana Grande, la mayor del parque. En sus aguas es frecuente ver delfines; en tierra, iguanas y monos capuchinos." },
      { name: "Lagunas de Unare y Píritu", text: "Dos lagunas salobres separadas del mar por cordones de arena, consideradas entre los humedales más importantes del país. En Unare, refugio de fauna, se observan flamencos, corocoras, cotúas y garzas." },
      { name: "Ríos Neverí y Unare", text: "El Neverí baja del macizo del Turimiquire, cruza Barcelona y forma un pequeño delta al desembocar. El Unare, más al oeste, fue durante la colonia la vía de entrada hacia Clarines." },
      { name: "Morichales de la Mesa de Guanipa", text: "En la sabana del sur, la palma moriche forma bosques densos a lo largo de los ríos Tigre, Caris y Morichal Largo. Son refugio de aves y mamíferos y uno de los rasgos más reconocibles del paisaje anzoatiguense." },
    ],
  },

  access: {
    description: "Llegar a Anzoátegui.",
    intro: "Barcelona y Puerto La Cruz son la puerta habitual; desde allí se abren la costa, las islas y la carretera hacia el sur.",
    routes: [
      { mode: "aire", title: "Por aire", text: "El Aeropuerto Internacional General José Antonio Anzoátegui, en Barcelona, sirve a toda la conurbación de la costa. Para la Mesa de Guanipa, El Tigre cuenta con el aeropuerto Don Edmundo Barrios, en San Tomé. Confirma las rutas vigentes antes de viajar." },
      { mode: "carretera", title: "Por carretera", text: "Desde el centro del país se entra por Boca de Uchire y la carretera de la costa, que sigue hacia Puerto Píritu y Barcelona. Desde Sucre se llega bordeando Mochima; desde Bolívar y los llanos, por El Tigre y la sabana." },
      { mode: "mar", title: "Por mar", text: "Puerto La Cruz es terminal de ferris hacia Margarita y base de salida hacia las islas de Mochima. Guanta mantiene un puerto comercial que fue durante años uno de los más importantes del país." },
      { mode: "local", title: "Dentro del estado", text: "Las lanchas hacia las islas salen de los embarcaderos del Paseo Colón, de Guanta y de Lechería, siempre con operadores autorizados. La costa y el sur se conectan por carretera pasando por Anaco y Cantaura." },
    ],
  },

  tips: {
    description: "Sol, lanchas y distancias de sabana.",
    items: [
      { icon: "sun", title: "Sol de costa seca", text: "La costa de Anzoátegui recibe poca lluvia y mucho sol. Protector, sombrero y agua son básicos en las islas, donde la sombra escasea fuera de las palmeras." },
      { icon: "ship", title: "Lanchas con operador autorizado", text: "Las salidas a las islas se contratan en los embarcaderos. Acuerda antes el precio, la hora de regreso y la playa de destino, y usa chaleco salvavidas durante la travesía." },
      { icon: "leaf", title: "Mochima es parque nacional", text: "Dentro del parque no se dejan residuos ni se toca el coral. Para acampar en Isla de Plata u otras islas hace falta autorización previa de Inparques." },
      { icon: "users", title: "Respeto en territorio kariña", text: "Si visitas comunidades de la Mesa de Guanipa, ve acompañado de alguien de la comunidad, pregunta antes de fotografiar y no trates el maremare o el Akaatompo como un espectáculo." },
      { icon: "car", title: "Distancias en el sur", text: "De Barcelona a El Tigre la carretera cruza sabana abierta con pueblos espaciados. Sal temprano, lleva agua y evita conducir de noche en los tramos rurales." },
      { icon: "clock", title: "Temporadas con más gente", text: "Carnaval, Semana Santa y la fiesta de la Virgen del Valle en septiembre llenan la costa. Si prefieres playas tranquilas, elige días de semana fuera de esas fechas." },
    ],
  },

  faqs: {
    description: "Lo que suele preguntarse antes de viajar a Anzoátegui.",
    items: [
      { question: "¿Qué diferencia hay entre Barcelona, Puerto La Cruz y Lechería?", answer: "Son tres ciudades contiguas que forman la Gran Barcelona. Barcelona es la capital y guarda el casco colonial; Puerto La Cruz concentra el paseo marítimo, el ferri y los embarcaderos; Lechería es el municipio más pequeño, con marinas, canales y El Morro. Se recorren en un mismo día." },
      { question: "¿Desde dónde se va a las islas de Mochima?", answer: "Desde los embarcaderos del Paseo Colón en Puerto La Cruz, de Guanta y de Lechería. Las lanchas llevan a las Chimanas, Las Borrachas e Isla de Plata en trayectos cortos, y la ida y la vuelta se acuerdan con el mismo operador." },
      { question: "¿Merece la pena bajar a la Mesa de Guanipa?", answer: "Sí, si buscas el otro Anzoátegui: sabana, morichales, la historia petrolera de El Tigre y las comunidades kariña. Es un viaje de carretera, con menos infraestructura turística que la costa, que se disfruta con tiempo y con guía local." },
      { question: "¿Cuántos días conviene dedicar al estado?", answer: "Tres días dan para Barcelona colonial, una jornada de islas y el paseo de Lechería. Con cinco puedes sumar Clarines y Píritu por el oeste o bajar a la sabana del sur." },
      { question: "¿Cuándo se celebra la Virgen del Valle?", answer: "El 8 de septiembre, en toda la costa oriental. En Lechería la fiesta incluye una feria gastronómica con platos de pescado, y en los pueblos de pescadores la devoción a la patrona del oriente se vive muy de cerca." },
      { question: "¿Hace calor todo el año?", answer: "Sí. La costa es cálida y seca, con pocas lluvias al año; la Mesa de Guanipa es de sabana, con una temporada de lluvias más marcada entre junio y julio. Las primeras horas del día son las mejores para caminar." },
    ],
  },

  credits: [
    { title: "Puerto La Cruz desde el mar", author: "Edymar Hurtado", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Al_borde_del_mar.JPG" },
    { title: "Vista desde el cerro El Morro, Lechería", author: "Josgara", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Vista_desde_Cerro_el_Morro.jpg" },
  ],

  seo: {
    title: "Anzoátegui: guía de Mochima, Barcelona y Guanipa",
    description: "Guía editorial de Anzoátegui: Puerto La Cruz, Lechería, las islas de Mochima, Barcelona colonial y la sabana kariña de la Mesa de Guanipa. Historia y consejos.",
  },

  layout: { historyPhotoSide: "left", placesFirstPhotoSide: "right", cultureTone: "light" },
};
