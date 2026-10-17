import type { StateGuideData } from "@/lib/states/types";

const photos = {
  catedral: { src: "/images/commons/catedral-de-barquisimeto-dia-lluvioso.jpg", alt: "Catedral Metropolitana de Barquisimeto, con su torre en forma de linterna, bajo un cielo cargado de nubes, estado Lara", position: "center 58%" },
  divinaPastora: { src: "/images/commons/devocion-larense.jpg", alt: "Multitud acompaña la imagen de la Divina Pastora durante su procesión por Barquisimeto, estado Lara", position: "center 30%" },
};

export const lara: StateGuideData = {
  slug: "lara",
  name: "Lara",
  heroKicker: "Centro-occidente de Venezuela",
  heroTagline: "Crepúsculos, música, barro y devoción.",
  hero: { src: "/images/commons/lara-barquisimeto.jpg", alt: "Panorámica de Barquisimeto, con sus torres y los cerros larenses al fondo, estado Lara", position: "center 72%" },

  intro: {
    eyebrow: "Guía de estado",
    title: "Lara, tierra de crepúsculos, cuatros y barro cocido.",
    paragraphs: [
      "Lara está donde el país cambia de ritmo: el Caribe queda atrás, los Andes todavía no empiezan y el paisaje se abre en depresiones semiáridas, valles de riego y montañas frescas. Barquisimeto, su capital, se ha ganado el nombre de Capital Musical de Venezuela y el de Ciudad Crepuscular por unos atardeceres que tiñen de naranja la ciudad entera.",
      "Es un estado que se reconoce en sus oficios y en sus fiestas: el barro de Quíbor, los telares de Tintorero, el cinco tocuyano del tamunangue y la procesión de la Divina Pastora cada 14 de enero. A eso se suman Carora, con su casco colonial, y cinco parques nacionales que van del cardonal al bosque nublado.",
    ],
    aside: { label: "En una frase", text: "Un estado que se escucha antes de verse." },
  },

  know: {
    title: "CONOCE LARA",
    description: "Dónde está, cómo es su paisaje y por qué no se parece a sus vecinos.",
    paragraphs: [
      "Lara ocupa el centro-occidente de Venezuela, entre Falcón al norte, Yaracuy al este, Portuguesa y Trujillo al sur y Zulia al oeste. Es un territorio de transición: aquí se encuentran las estribaciones de la cordillera de la Costa y las de los Andes, con el páramo de Cendé como punto más alto, a 3.585 metros.",
      "Buena parte del estado es semiárido, con depresiones cálidas, cardonales y cujíes, pero basta subir hacia Sanare, Cubiro o Yacambú para encontrar café, neblina y bosque nublado. Los ríos Tocuyo, Turbio y Yacambú ordenan los valles agrícolas donde se cultivan caña de azúcar, café y hortalizas de riego.",
      "Barquisimeto, la capital, es una de las ciudades más pobladas del país y la puerta de entrada habitual. Desde ella se llega en pocas horas a Carora, Quíbor, El Tocuyo o Sanare, que son, cada una a su manera, las otras capitales de la identidad larense.",
    ],
    facts: [
      { label: "Capital", value: "Barquisimeto" },
      { label: "Región", value: "Centro-occidente de Venezuela" },
      { label: "Paisaje", value: "Depresiones semiáridas, valles agrícolas y montañas de bosque nublado" },
      { label: "Superficie", value: "19.800 km²" },
      { label: "Clima", value: "Cálido y semiárido en las depresiones, fresco en la montaña" },
      { label: "Gentilicio", value: "Larense" },
    ],
  },

  history: {
    description: "De la Ciudad Madre a la ciudad de los crepúsculos.",
    paragraphs: [
      "Antes de la llegada europea, los valles y depresiones de Lara estaban habitados por pueblos de la familia lingüística jirajara, como los gayones, los ayomanes y los coyones. Eran agricultores y alfareros: los cementerios indígenas hallados en Quíbor y las piezas del Museo Antropológico Francisco Tamayo muestran una tradición de barro cocido que sigue viva en los talleres del mismo valle. El propio nombre de Quíbor se asocia, según la tradición local, con sembrar y cosechar.",
      "La colonización llegó temprano. El Tocuyo fue fundado en 1545 por Juan de Carvajal y funcionó durante tres décadas como capital de hecho de la provincia: de allí partieron expediciones que fundaron otras ciudades del país, y por eso se le llama Ciudad Madre de Venezuela. En 1552, Juan de Villegas fundó Nueva Segovia de Barquisimeto junto al río Turbio; Carora nació en 1569, y Quíbor y Sanare, ya en 1620, completaron la red de pueblos del valle.",
      "Durante la colonia, El Tocuyo tejió el lienzo de algodón que llevó su nombre por América y Europa, mientras Barquisimeto ganaba peso como ciudad de paso y de comercio. Tras la disolución de la Gran Colombia, en 1832 el territorio se organizó como Provincia de Barquisimeto; en 1881 recibió el nombre de Estado Lara en honor al general caroreño Jacinto Lara, y en 1899 alcanzó su autonomía como estado.",
      "La Lara de hoy se reconoce en lo que sonó y se rezó durante siglos: el tamunangue de El Tocuyo, el golpe tocuyano, la Divina Pastora que sale de Santa Rosa desde 1856, los telares de Tintorero y la cerámica de Quíbor. A eso se suma una capital moderna, con la Catedral en forma de paraboloide hiperbólico, el Obelisco de 1952 y la Flor de Venezuela, traída de la Expo de Hannover e inaugurada en 2008.",
    ],
  },

  defines: {
    title: "LO QUE DEFINE A LARA",
    description: "Tres rasgos que explican el carácter larense.",
    panorama: photos.divinaPastora,
    items: [
      {
        name: "La Divina Pastora",
        text: "Cada 14 de enero, la imagen de la Divina Pastora sale del santuario de Santa Rosa y recorre algo más de siete kilómetros hasta la Catedral de Barquisimeto. La tradición nació en 1856, cuando el padre José Macario Yépez la sacó en rogativa durante una epidemia de cólera. Hoy es una de las concentraciones marianas más grandes de América Latina.",
      },
      {
        name: "El tamunangue y la música",
        text: "Lara suena a cuatro, cinco tocuyano y tambor. El tamunangue, nacido en el valle de El Tocuyo, es a la vez promesa, danza y fiesta en honor a San Antonio de Padua cada 13 de junio; del mismo valle viene el golpe tocuyano. No por casualidad Barquisimeto se presenta como Capital Musical de Venezuela.",
      },
      {
        name: "Barro, telar y crepúsculo",
        text: "La cerámica de Quíbor, los manteles y hamacas de Tintorero y las calles empedradas del casco colonial de Carora hablan de un estado de oficios pacientes. Y al final del día, el cielo semiárido de Barquisimeto se enciende en naranjas y violetas: los crepúsculos que le dieron a la ciudad uno de sus nombres.",
      },
    ],
  },

  places: {
    description: "Una selección para recorrer Lara de la capital a la montaña.",
    items: [
      {
        name: "Barquisimeto",
        text: "La capital se recorre entre el Obelisco, la Catedral de diseño moderno, el Teatro Juares de 1905 y el Parque Zoológico y Botánico Bararida. La Flor de Venezuela, el pabellón de Fruto Vivas en la Expo 2000 de Hannover, abre sus dieciséis pétalos sobre jardines y acuarios desde 2008. Quédate hasta el atardecer.",
        photo: null,
      },
      {
        name: "Carora",
        text: "Fundada en 1569, conserva un casco colonial de unas ocho hectáreas declarado Monumento Nacional en 1977: la Catedral de San Juan Bautista, la iglesia de El Calvario, la Casa Amarilla y calles empedradas. Es la ciudad del guitarrista Alirio Díaz y de la raza bovina que lleva su nombre; en Altagracia se cultivan viñedos.",
        photo: null,
      },
      {
        name: "Quíbor y Tintorero",
        text: "En el valle de Quíbor, la alfarería continúa la tradición de los gayones, cuyos entierros y piezas se conservan en el Museo Antropológico Francisco Tamayo. En el mismo valle, Tintorero teje manteles, tapetes y hamacas en telares que se remontan a la colonia, y cada agosto celebra su Feria Internacional.",
        photo: null,
      },
      {
        name: "El Tocuyo",
        text: "Fundada en 1545, fue la capital de hecho de la provincia durante sus primeras décadas y el punto de partida de expediciones que fundaron otras ciudades del país. Un terremoto dañó gravemente la ciudad en 1950 y destruyó su catedral, pero conserva el título de Ciudad Madre, el tamunangue y el golpe tocuyano.",
        photo: null,
      },
      {
        name: "Sanare y el Parque Nacional Yacambú",
        text: "A 1.358 metros, Sanare es la capital municipal más alta del estado y se llama a sí misma Jardín de Lara: café, hortalizas, neblina y una Ruta del Café entre haciendas. Es la puerta del Parque Nacional Yacambú, con bosque nublado, cascadas y orquídeas, y el escenario de Las Zaragozas cada 28 de diciembre.",
        photo: null,
      },
      {
        name: "Cubiro",
        text: "Fundado en 1546 por Diego de Losada, a 1.600 metros de altura, Cubiro es uno de los asentamientos más antiguos del país. Sus lomas verdes, su clima fresco y la vista hacia las tierras áridas del norte lo convierten en una escapada sencilla desde Barquisimeto, a menos de sesenta kilómetros.",
        photo: null,
      },
    ],
  },

  culture: {
    description: "Un estado que se canta, se reza y se come con chivo.",
    intro: "La cocina larense habla de tierra seca, con chivo, ovejo, suero de leche y frutas como el semeruco, mientras el calendario lo marcan San Antonio en junio, Las Zaragozas en diciembre y la Divina Pastora en enero.",
    blocks: [
      {
        label: "Gastronomía",
        title: "Sabores de la tierra seca.",
        items: [
          { name: "Patas de grillo", text: "Carne de chivo desmechada y frita, muy presente en Carora. Servida con arroz, caraotas y tajadas forma la versión larense del pabellón." },
          { name: "Lomo prensado", text: "Corte de carne prensada y horneada, asociado sobre todo a Carora, que se sirve en lonjas finas y acompaña las tostadas caroreñas." },
          { name: "Mondongo de chivo y chanfaina", text: "Sopa de vísceras de chivo y guiso de menudencias: dos preparaciones de origen campesino que siguen muy presentes en mesas y mercados del estado." },
          { name: "Cocuy de penca", text: "Destilado artesanal del Agave cocui, una planta de las zonas áridas. Es la bebida espirituosa que comparten Lara y Falcón, y acompaña fiestas y sobremesas larenses." },
        ],
      },
      {
        label: "Música",
        title: "El cinco tocuyano y el tamunangue",
        text: "Del valle de El Tocuyo salieron el golpe tocuyano, que alterna compases de 3/4 y 6/8 con cuatro, cinco, medio cinco, tambora y maracas, y el tamunangue, con sus ocho sones: la batalla, el yiyivamos, la bella, la juruminga, la perrendenga, el poco a poco, el galerón y el seis figuriao.",
      },
      {
        label: "Celebraciones",
        title: "Un calendario de promesas",
        text: "El 13 de junio, El Tocuyo, Sanare y Curarigua bailan tamunangue a San Antonio de Padua, el Negro Antonio; el 28 de diciembre, Sanare se disfraza para Las Zaragozas; el 14 de enero, Barquisimeto entera camina tras la Divina Pastora, patrona del estado. En septiembre, la capital celebra además su feria por el aniversario de la fundación.",
      },
      {
        label: "Artesanía",
        title: "Barro de Quíbor, hilo de Tintorero",
        text: "La cerámica de Quíbor y los tejidos de Tintorero, con manteles, tapetes y hamacas teñidos con los colores que dan nombre al pueblo, son los dos oficios más reconocibles del estado. Comprarlos en los propios talleres del valle es la mejor forma de entender el trabajo que llevan.",
      },
    ],
  },

  nature: {
    description: "Del cardonal al páramo en un mismo estado.",
    intro: "Lara reúne cinco parques nacionales que recorren casi todos sus pisos: el cardonal semiárido de Cerro Saroche, los bosques nublados de Yacambú, Terepaima y El Guache, y el páramo de Dinira, donde nace el río Tocuyo y crecen frailejones. Es una naturaleza de contrastes cortos, que cambia en pocos kilómetros de altura.",
    photo: { src: "/images/commons/catedral-de-barquisimeto-dia-lluvioso.jpg", alt: "Catedral Metropolitana de Barquisimeto, con su torre en forma de linterna, bajo un cielo cargado de nubes, estado Lara", position: "center 58%" },
    items: [
      { name: "Parque Nacional Yacambú", text: "Creado en 1962 para proteger la cuenca del río Yacambú, guarda bosques nublados con unas sesenta especies de orquídeas, monos aulladores, venados y guacharacas. Se entra desde Sanare." },
      { name: "Parque Nacional Terepaima", text: "Al sureste de Barquisimeto, entre Lara y Portuguesa, sube de 300 a 1.775 metros. En sus bosques nace el río Sarare y sobreviven jaguares, osos frontinos, pumas y dantas." },
      { name: "Parque Nacional Cerro Saroche", text: "El paisaje semiárido de Lara en estado puro: más de treinta mil hectáreas de cardones, cujíes, dividives y guayacanes, con más de un centenar de especies de aves y lluvias muy escasas." },
      { name: "Parque Nacional Dinira", text: "Compartido con Trujillo y Portuguesa, protege la cuenca alta del río Tocuyo y asciende por encima de los 3.500 metros hasta el páramo de Cendé, donde crecen frailejones y vive el oso andino." },
      { name: "Parque Nacional El Guache", text: "En el límite con Portuguesa, sus bosques nublados guardan las cabeceras de los ríos Guache, Ospino, Toco, Morador y Are. Es el más reciente de los cinco parques del estado, decretado en 1992." },
    ],
  },

  access: {
    description: "Llegar a Lara.",
    intro: "Barquisimeto es la puerta natural del estado y el cruce de caminos del centro-occidente: desde allí se reparten las rutas hacia Carora, Quíbor, El Tocuyo y la montaña.",
    routes: [
      { mode: "aire", title: "Por aire", text: "Barquisimeto cuenta con el Aeropuerto Internacional Jacinto Lara, el principal aeropuerto comercial de la región centro-occidental. Está dentro de la propia ciudad, en el municipio Iribarren." },
      { mode: "carretera", title: "Por carretera", text: "Lara limita con Falcón, Yaracuy, Portuguesa, Trujillo, Zulia y Cojedes, y Barquisimeto es paso habitual entre el centro del país y el occidente andino y zuliano. Las carreteras hacia Carora, Quíbor, El Tocuyo y Sanare salen de la capital." },
      { mode: "local", title: "Dentro del estado", text: "Barquisimeto dispone del sistema Transbarca para moverse por la ciudad. Para el resto del estado las distancias son cortas: Cubiro queda a menos de sesenta kilómetros y los pueblos del valle de Quíbor se visitan en una misma jornada." },
    ],
  },

  tips: {
    description: "Sol abajo, neblina arriba y un calendario que conviene conocer.",
    items: [
      { icon: "sun", title: "Sol seco en las depresiones", text: "Barquisimeto, Carora y Quíbor tienen clima cálido y semiárido. Sombrero, protector solar y agua para cualquier caminata entre el mediodía y la media tarde." },
      { icon: "camera", title: "Espera el crepúsculo", text: "Los atardeceres de Barquisimeto son parte del viaje. Busca un punto abierto hacia el oeste, como el mirador del Obelisco, y quédate hasta que se apague el cielo." },
      { icon: "mountain", title: "Abrigo para la montaña", text: "Sanare está a 1.358 metros y Cubiro a 1.600; en Yacambú y Dinira refresca aún más. Lleva una capa de abrigo e impermeable aunque en la capital haga calor." },
      { icon: "clock", title: "El 14 de enero se planifica", text: "La procesión de la Divina Pastora reúne a millones de personas y la ciudad cambia de ritmo. Reserva alojamiento con antelación y cuenta con calles cerradas." },
      { icon: "users", title: "Compra en el taller", text: "En Quíbor y Tintorero, la pieza que compras sostiene a una familia de artesanos. Entra en los talleres, pregunta por el proceso y paga lo que vale el oficio." },
      { icon: "footprints", title: "El tamunangue no es un espectáculo", text: "Si coincides con San Antonio en junio, recuerda que el tamunangue es una promesa: mira, acompaña y, si te invitan, baila con respeto." },
    ],
  },

  faqs: {
    description: "Lo que suele preguntarse antes de viajar a Lara.",
    items: [
      { question: "¿Cuántos días conviene dedicar a Lara?", answer: "Dos días alcanzan para Barquisimeto y una salida al valle de Quíbor. Con cuatro o cinco puedes añadir Carora, El Tocuyo y una noche en Sanare o Cubiro para entrar en Yacambú. Si vas por la Divina Pastora, suma el día completo del 14 de enero." },
      { question: "¿Por qué Barquisimeto es la Capital Musical de Venezuela?", answer: "Es uno de los nombres con los que se conoce a la ciudad, junto al de Ciudad Crepuscular. Lo explica la tradición musical del estado, del golpe tocuyano y el tamunangue al cuatro y el cinco tocuyano, y una vida cultural que tiene en el Teatro Juares uno de sus escenarios históricos." },
      { question: "¿Qué es el tamunangue?", answer: "Una celebración a la vez religiosa y festiva en honor a San Antonio de Padua, nacida en el valle de El Tocuyo y extendida por todo el estado. Se compone de ocho sones, con cuatro, cinco, tambor y maracas, y se baila sobre todo el 13 de junio, a menudo como pago de promesas." },
      { question: "¿Hace calor en Lara?", answer: "Depende de la altura. Barquisimeto, Carora y Quíbor son cálidas y secas durante todo el año. En cambio, Sanare, Cubiro y los parques de montaña tienen clima fresco y pueden exigir abrigo por la noche. En pocos kilómetros se pasa de un ambiente a otro." },
      { question: "¿Se puede visitar la Flor de Venezuela?", answer: "Sí. Es un centro cultural público de Barquisimeto, declarado Monumento Histórico Nacional en 2013, con jardines, acuarios, biblioteca y anfiteatro. Sus dieciséis pétalos se abren y se cierran, así que conviene preguntar por los horarios en que la estructura se despliega." },
      { question: "¿Qué es el cocuy?", answer: "Un destilado artesanal del Agave cocui, una planta de las zonas áridas del occidente venezolano. Se asocia a Lara y Falcón; en Falcón, el cocuy pecayero fue el primer licor venezolano con denominación de origen. En Lara se toma solo y forma parte de la mesa festiva." },
    ],
  },

  credits: [
    { title: "Panorámica de Barquisimeto", author: "Lacamaradefran", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Digitaliza_Tu_Ciudad_Barquisimeto_2025-8.jpg" },
    { title: "Catedral de Barquisimeto", author: "Rodolfo pimentel", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Catedral_de_Barquisimeto_dia_lluvioso.jpg" },
    { title: "Procesión de la Divina Pastora", author: "Rinopisanogarcia", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Devoci%C3%B3n_Larense.jpg" },
  ],

  seo: {
    title: "Lara: guía de viaje de Barquisimeto, Carora y la Divina Pastora",
    description: "Guía editorial de Lara: Barquisimeto y sus crepúsculos, la Divina Pastora, el tamunangue, Carora, la artesanía de Quíbor y Tintorero y sus parques nacionales.",
  },

  layout: { historyPhotoSide: "left", placesFirstPhotoSide: "right", cultureTone: "dark" },
};
