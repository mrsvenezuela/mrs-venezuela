import type { StateGuideData } from "@/lib/states/types";

export const portuguesa: StateGuideData = {
  slug: "portuguesa",
  name: "Portuguesa",
  heroKicker: "Llanos occidentales",
  heroTagline: "Arroz, joropo y la patrona de Venezuela.",
  hero: { src: "/images/commons/portuguesa-guanare.jpg", alt: "Plaza Bolívar de Guanare, con su fuente y la estatua del Libertador entre los árboles, estado Portuguesa", position: "center 78%" },

  intro: {
    eyebrow: "Guía de estado",
    title: "Portuguesa, el granero de Venezuela al pie de los Andes.",
    paragraphs: [
      "Portuguesa se entiende desde dos horizontes: la llanura sembrada que se extiende hacia el sur y el piedemonte andino que asoma por el noroeste. Entre ambos corren el río Portuguesa y sus afluentes, y sobre esa tierra fértil crecieron Guanare, Acarigua y Araure, ciudades de trabajo agrícola y memoria llanera.",
      "Es también el estado de la Virgen de Coromoto, patrona de Venezuela, cuyo santuario cerca de Guanare reúne peregrinos de todo el país. Aquí el joropo suena con arpa, cuatro y maracas, el arroz y el maíz marcan el calendario del campo y el café perfuma pueblos de montaña como Biscucuy y Chabasquén.",
    ],
    aside: { label: "En una frase", text: "Llanura sembrada, fe y piedemonte cafetalero." },
  },

  know: {
    title: "CONOCE PORTUGUESA",
    description: "Un estado llanero con una orilla andina.",
    paragraphs: [
      "Portuguesa está en el centro-occidente de Venezuela y forma parte de la región de los Llanos. Limita con Lara al norte, con Cojedes al este, con Barinas al sur y con Barinas y Trujillo al oeste. Su capital es Guanare, asentada entre los ríos Guanare y Portuguesa.",
      "La mayor parte del territorio es llanura: sabanas y tierras de cultivo que descienden suavemente hacia el sur. Al noroeste, en cambio, el relieve se levanta en el piedemonte andino y la Sierra de Portuguesa, donde nacen varios ríos y el clima se vuelve más fresco y cafetalero.",
      "La conurbación de Acarigua y Araure es el principal núcleo urbano y agroindustrial. Entre esas dos ciudades, Guanare y los pueblos del sur se dibuja la identidad portugueseña: campo sembrado, tradición llanera y una devoción mariana que trasciende las fronteras del estado.",
    ],
    facts: [
      { label: "Capital", value: "Guanare" },
      { label: "Región", value: "Llanos occidentales" },
      { label: "Paisaje", value: "Llanura agrícola, ríos y piedemonte andino" },
      { label: "Superficie", value: "15.200 km²" },
      { label: "Clima", value: "Sabana tropical, seco de diciembre a abril y lluvioso de mayo a noviembre" },
      { label: "Gentilicio", value: "Portugueseño / portugueseña" },
    ],
  },

  history: {
    description: "Del valle de Guanaguanare al granero del país.",
    paragraphs: [
      "Antes de la llegada de los europeos, estas llanuras y el piedemonte estaban habitados por pueblos como los caquetíos, los guamos y los cuibas, además de grupos que las crónicas coloniales llaman cospes y achaguas. Vivían de la pesca, la recolección y el cultivo en las riberas, y su huella permanece en los nombres de ríos y lugares: el propio Guanare toma el suyo del valle de Guanaguanare.",
      "Guanare fue fundada el 3 de noviembre de 1591 por el portugués Juan Fernández de León como Espíritu Santo del Valle de San Juan de Guanaguanare. Durante los siglos XVII y XVIII surgieron Acarigua, Araure, Ospino y Guanarito, pueblos de misión y villas agrícolas que fueron ordenando la llanura. Fue también el tiempo de la aparición de la Virgen de Coromoto al cacique del mismo nombre, en 1652, origen de una devoción que terminaría siendo nacional.",
      "El 5 de diciembre de 1813, Simón Bolívar derrotó a las fuerzas realistas en la Batalla de Araure y premió a un batallón que había perdido su nombre con el título de Vencedor de Araure. En Acarigua sitúan las biografías el nacimiento, en 1790, de José Antonio Páez, el caudillo llanero de Carabobo. El territorio fue provincia desde 1851, con Guanare como capital, y adoptó definitivamente el nombre de Portuguesa en 1909.",
      "En el siglo XX la agricultura cambió la escala del estado. La Unidad Agrícola de Turén, iniciada a finales de los años cuarenta con familias llegadas de Italia, España y Alemania, fue uno de los proyectos de colonización agrícola más ambiciosos del país, y el arroz, el maíz y la caña convirtieron a Portuguesa en el granero de Venezuela. En 1996, Juan Pablo II inauguró el santuario de Coromoto, sello de la identidad espiritual de Guanare.",
    ],
  },

  defines: {
    title: "LO QUE DEFINE A PORTUGUESA",
    description: "Tres rasgos que explican el estado.",
    panorama: { src: "/images/commons/portuguesa-frailes-ospino.jpg", alt: "Los Frailes de Ospino: un paredón de arcilla ocre erosionado en pináculos, con vegetación verde al pie, estado Portuguesa", position: "center 90%" },
    items: [
      {
        name: "La Virgen de Coromoto",
        text: "Patrona de Venezuela, confirmada por Pío XII en 1944 y coronada canónicamente en 1952. La tradición sitúa su aparición en 1652 ante el cacique Coromoto, y el santuario nacional levantado en ese lugar, a unos 25 kilómetros de Guanare, convoca cada septiembre a peregrinos de todo el país.",
      },
      {
        name: "El granero de Venezuela",
        text: "Arroz, maíz, caña de azúcar, ajonjolí y sorgo cubren la llanura portugueseña y sostienen una agroindustria que tiene su centro en Acarigua y Araure. Es un paisaje de silos, canales de riego y campos que cambian de color con las cosechas, tan identitario como cualquier monumento.",
      },
      {
        name: "El río y el piedemonte",
        text: "El río Portuguesa nace cerca de Biscucuy, en la Sierra de Portuguesa, y baja hacia los llanos para unirse al Apure tras cruzar varios estados. Entre su cabecera y la llanura, pueblos como Biscucuy y Chabasquén conservan un clima templado, vocación cafetalera y otra forma de ser portugueseño.",
      },
    ],
  },

  places: {
    description: "Una selección para recorrer Portuguesa del santuario al piedemonte.",
    items: [
      {
        name: "Santuario Nacional de Nuestra Señora de Coromoto",
        text: "Consagrado en 1996 e inaugurado con una misa de Juan Pablo II, este templo de líneas modernas se alza en el sitio de la aparición, cerca de Guanare. Custodia la pequeña imagen de la Virgen, fue elevado a basílica menor en 2007 y concentra las peregrinaciones de septiembre.",
      },
      {
        name: "Guanare",
        text: "La capital conserva el trazado de su fundación de 1591 y un centro que gira en torno a la Basílica Catedral de Nuestra Señora de Coromoto. Con el Parque Los Samanes, sus museos y la universidad de los llanos, es paso obligado hacia el santuario y hacia el sur.",
      },
      {
        name: "Acarigua y Araure",
        text: "Las ciudades gemelas del estado forman su mayor área urbana y el corazón de la agroindustria. En Araure, la Iglesia de Nuestra Señora del Pilar, monumento nacional del siglo XVIII, recuerda el pueblo colonial y la batalla de 1813; en Acarigua, el monumento La Espiga celebra la vocación agrícola.",
      },
      {
        name: "Biscucuy y Chabasquén",
        text: "En el piedemonte andino, entre 600 y 1.600 metros de altitud, estos pueblos cafetaleros cambian el calor de la llanura por un clima fresco, ríos de montaña y cultivos en ladera. Biscucuy es el principal municipio productor de café del estado; Chabasquén abre paso hacia Lara y Trujillo.",
      },
      {
        name: "Turén y la colonia agrícola",
        text: "Villa Bruzual y los campos de Turén son el resultado de un proyecto de colonización agrícola iniciado a finales de los años cuarenta con familias europeas. Hoy es uno de los paisajes de arroz y maíz más extensos del estado, con una memoria migrante que se nota en apellidos y mesas.",
      },
      {
        name: "Chorro San Miguel, en Ospino",
        text: "En las estribaciones del Parque Nacional El Guache, esta cascada es uno de los saltos de agua más conocidos de la región llanera. Se llega desde Ospino, villa desde 1754, y combina bien con un baño en los ríos del piedemonte.",
      },
    ],
  },

  culture: {
    description: "Llanura, devoción y mesa de campo.",
    intro: "En Portuguesa la cultura se reparte entre el arpa llanera, la fe en la Virgen de Coromoto y una cocina que nace de lo que se siembra y se cría.",
    blocks: [
      {
        label: "Gastronomía",
        title: "Sabores de tierra sembrada.",
        items: [
          { name: "Hervido llanero", text: "Sopa de res o de gallina con verduras, muy presente en los llanos occidentales. En Portuguesa acompaña reuniones familiares y jornadas largas de campo." },
          { name: "Carne en vara", text: "Res asada lentamente junto a las brasas, asociada a la tradición ganadera de todo el llano. Se sirve con yuca, casabe o arepa y sin demasiados adornos." },
          { name: "Cachapa con queso de mano", text: "Torta de maíz tierno con queso fresco, un clásico compartido con el centro del país que en Portuguesa tiene el maíz a la puerta de casa." },
          { name: "Pisillo de carne", text: "Carne salada, desmenuzada y sofrita con aliños, receta llanera compartida con los estados vecinos. Suele acompañarse de arroz, arepa o plátano." },
        ],
      },
      {
        label: "Música",
        title: "El joropo llanero",
        text: "Arpa, cuatro y maracas sostienen el joropo que se canta y se baila en Portuguesa, compartido con los demás estados llaneros. El pasaje, más sosegado, y el golpe, más rápido, suenan en fiestas patronales y parrandas. Venezuela declaró el joropo patrimonio cultural en 2014.",
      },
      {
        label: "Celebraciones",
        title: "Septiembre de Coromoto",
        text: "El 8 de septiembre recuerda la aparición de 1652 y el 11 es la fiesta oficial de la Virgen de Coromoto. Guanare y el santuario reciben peregrinos durante esos días, en la celebración religiosa más importante del estado. Los carnavales y las fiestas patronales de cada pueblo completan el calendario.",
      },
      {
        label: "Identidad",
        title: "Campo, caballo y cosecha",
        text: "Ser portugueseño es, muchas veces, vivir del campo. La tradición llanera del ganado convive con la agricultura a gran escala del arroz y el maíz, y la memoria migrante de Turén con el café del piedemonte. Esa mezcla explica un carácter trabajador, hospitalario y poco dado a la exageración.",
      },
    ],
  },

  nature: {
    description: "Llanura, ríos y bosques de piedemonte.",
    intro: "La naturaleza de Portuguesa se lee de norte a sur: en el noroeste, los parques nacionales del piedemonte protegen bosques nublados donde nacen los ríos; en el centro, la llanura cultivada se abre entre canales y embalses; y hacia el sur, los llanos bajos de Guanarito se vuelven más húmedos y ganaderos.",
    items: [
      { name: "Río Portuguesa", text: "Nace en la Sierra de Portuguesa, cerca de Biscucuy, y recorre unos 600 kilómetros hasta el Apure. Recibe al Guanare, al Acarigua y al Cojedes, y da agua a los campos de arroz del estado." },
      { name: "Parque Nacional El Guache", text: "Entre Portuguesa y Lara, al inicio de la cordillera andina, protege bosques nublados y el nacimiento de los ríos Guache, Ospino y Morador. Fue creado en 1992 y cerca de sus límites cae el Chorro San Miguel." },
      { name: "Parque Nacional Terepaima", text: "Compartido con Lara y creado en 1976, conserva selva nublada en un relieve que sube hasta los 1.775 metros. Allí nace el río Sarare, que alimenta el embalse Las Majaguas, y habitan el oso frontino y el jaguar." },
      { name: "Parque Nacional Dinira", text: "Repartido entre Lara, Trujillo y Portuguesa, alcanza páramos por encima de los 3.000 metros con frailejones y protege la cuenca alta del río Tocuyo. Es la cara andina del estado." },
      { name: "Llanos del sur", text: "Hacia Guanarito, la llanura se vuelve más baja y húmeda. El río Guanare, navegado durante siglos en pequeñas embarcaciones, conecta la zona con el Apure y el Orinoco, en un paisaje de hato ganadero y sabana." },
    ],
  },

  access: {
    description: "Llegar a Portuguesa.",
    intro: "Acarigua-Araure y Guanare son las puertas habituales; desde ellas se organizan las rutas hacia el santuario, el piedemonte y el sur.",
    routes: [
      { mode: "aire", title: "Por aire", text: "El Aeropuerto Oswaldo Guevara Mujica, en Acarigua, y el Aeropuerto La Coromoto, en Guanare, son las terminales del estado. La oferta de vuelos varía, así que conviene confirmar las rutas activas antes de planificar." },
      { mode: "carretera", title: "Por carretera", text: "La Autopista José Antonio Páez es el eje principal: cruza el estado por Acarigua, Araure y Guanare y lo enlaza con Lara, hacia el norte, y con Barinas, hacia el sur. Desde Cojedes y el centro del país se entra por Acarigua-Araure." },
      { mode: "local", title: "Dentro del estado", text: "Las distancias son llanas y las carreteras unen las ciudades principales con los pueblos agrícolas. Hacia Biscucuy y Chabasquén la vía sube al piedemonte desde Guanare; hacia Guanarito se baja al llano por caminos más largos y menos transitados." },
    ],
  },

  tips: {
    description: "El campo y el calendario agrícola marcan el viaje.",
    items: [
      { icon: "sun", title: "Calor de llanura", text: "Guanare y Acarigua tienen clima de sabana, cálido todo el año. Reserva las caminatas y las visitas al aire libre para las primeras horas y el atardecer." },
      { icon: "umbrella", title: "Dos estaciones", text: "La lluvia se concentra de mayo a noviembre y la sequía va de diciembre a abril. En temporada de lluvias los caminos rurales y los ríos cambian de carácter." },
      { icon: "users", title: "Peregrinación en septiembre", text: "Los días 8 y 11 de septiembre el santuario de Coromoto se llena. Si viajas por la fiesta, llega con tiempo; si buscas calma, elige otra fecha." },
      { icon: "mountain", title: "Abrigo para el piedemonte", text: "En Biscucuy y Chabasquén la temperatura baja y las noches pueden ser frescas. Lleva una capa ligera y calzado apto para caminos húmedos." },
      { icon: "car", title: "Vías compartidas con el campo", text: "Conduce con paciencia: en época de cosecha, camiones y maquinaria agrícola comparten las carreteras del llano, sobre todo alrededor de Acarigua y Turén." },
      { icon: "camera", title: "Luz de amanecer", text: "Los campos de arroz y maíz cambian de color con el ciclo de siembra. Las primeras horas, con la niebla baja sobre la llanura, regalan la mejor luz para fotografiar." },
    ],
  },

  faqs: {
    description: "Lo que suele preguntarse antes de viajar a Portuguesa.",
    items: [
      { question: "¿Por qué la Virgen de Coromoto es la patrona de Venezuela?", answer: "La devoción nació en Guanare tras la aparición atribuida al cacique Coromoto en 1652. En 1942 el episcopado venezolano la declaró patrona y el papa Pío XII lo confirmó en 1944. Desde entonces Guanare es conocida como la capital espiritual del país." },
      { question: "¿Cuánto tiempo hace falta para conocer Portuguesa?", answer: "Dos días permiten ver Guanare y el santuario y acercarse a Acarigua y Araure. Si quieres subir al piedemonte cafetalero o bajar a los llanos de Guanarito, suma al menos uno o dos días más, porque las distancias y los ritmos son distintos." },
      { question: "¿Qué se cultiva en Portuguesa?", answer: "Sobre todo arroz, maíz, caña de azúcar, ajonjolí y sorgo en la llanura, y café en el piedemonte de Biscucuy y Chabasquén. Por ese peso agrícola se le conoce como el granero de Venezuela, y la agroindustria se concentra en Acarigua y Araure." },
      { question: "¿Hay montañas en Portuguesa?", answer: "Sí. Aunque se la identifica con el llano, el noroeste del estado sube al piedemonte andino y a la Sierra de Portuguesa, con alturas que superan los 3.000 metros en el Parque Nacional Dinira. Allí el clima es fresco y el paisaje, de bosque nublado y páramo." },
      { question: "¿Cuál es la mejor época para viajar?", answer: "La estación seca, de diciembre a abril, facilita los caminos rurales y las excursiones a ríos y cascadas. Septiembre, en plena temporada de lluvias, tiene a cambio la fiesta de la Virgen de Coromoto, que llena Guanare y el santuario de peregrinos." },
      { question: "¿Qué fue la Batalla de Araure?", answer: "Una victoria de Simón Bolívar sobre las fuerzas realistas el 5 de diciembre de 1813, en las afueras de Araure. Tras el combate, Bolívar dio el nombre de Vencedor de Araure a un batallón que había sido castigado quedando sin nombre. Es uno de los hechos más recordados de la independencia en el centro-occidente." },
    ],
  },

  credits: [
    { title: "Plaza Bolívar de Guanare", author: "Geliersanta", license: "Dominio público", href: "https://commons.wikimedia.org/wiki/File:La_Plaza_Bol%C3%ADvar_de_Guanare.jpg" },
    { title: "Los Frailes de Ospino, estado Portuguesa", author: "Samael Marco", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Los_frailes_Ospino.jpg" },
  ],

  seo: {
    title: "Portuguesa: guía de Guanare, Coromoto y el llano",
    description: "Guía editorial de Portuguesa: Guanare y el santuario de Coromoto, Acarigua-Araure, el piedemonte cafetalero, el joropo y los arrozales del llano venezolano.",
  },

  layout: { historyPhotoSide: "right", placesFirstPhotoSide: "left", cultureTone: "light" },
};
