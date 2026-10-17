import { commonsImage as commons } from "@/lib/commons-image";
import type { StateGuideData } from "@/lib/states/types";


const photos = {
  patanemo: { src: "/images/patanemo.jpg", alt: "Playa de la bahía de Patanemo con cocoteros, toldos y bañistas, y los cerros del Parque Nacional San Esteban al fondo, estado Carabobo", position: "center 75%" },
  malecon: { src: commons("Vista al Mar Malencón de Puerto Cabello.jpg"), alt: "El mar desde el malecón de Puerto Cabello, con la costa y la cordillera de la Costa a contraluz, estado Carabobo", position: "center 50%" },
};

export const carabobo: StateGuideData = {
  slug: "carabobo",
  name: "Carabobo",
  heroKicker: "Centro de Venezuela",
  heroTagline: "Campo histórico, ciudad industrial y costa verde.",
  hero: { src: "/images/commons/carabobo-valencia.jpg", alt: "Valencia vista desde Lomas del Este, con las torres del centro y los cerros que cierran el valle, estado Carabobo", position: "center 55%" },

  intro: {
    eyebrow: "Guía de estado",
    title: "Carabobo: dónde queda y qué visitar.",
    paragraphs: [
      "Carabobo está en el centro-norte de Venezuela, al oeste de Aragua, y su capital es Valencia. Para una primera visita, separa el recorrido en dos zonas: Valencia y el Campo de Carabobo en el interior; Puerto Cabello y Patanemo en la costa. Valencia no está junto al mar: hay que cruzar la cordillera para llegar a las playas.",
      "Es un territorio compacto que, aun así, cambia de carácter varias veces: del Campo de Carabobo y sus monumentos a las calles coloniales de Puerto Cabello, del bosque nublado de San Esteban a la arena de Patanemo y a los barcos hundidos de Isla Larga. Esa cercanía entre historia, industria y costa es su rasgo más particular.",
    ],
    aside: { label: "En una frase", text: "La sabana que selló la independencia venezolana." },
  },

  know: {
    title: "CONOCE CARABOBO",
    description: "Dónde está, cómo es y por qué pesa tanto en el mapa.",
    paragraphs: [
      "Carabobo ocupa el centro-norte de Venezuela, con Yaracuy al oeste, Aragua al este, Cojedes y Guárico al sur y el mar Caribe al norte. Sus 4.650 km² lo convierten en uno de los estados más pequeños del país y, al mismo tiempo, en uno de los más poblados: ciudades, fábricas y carreteras se concentran en un espacio reducido.",
      "Tres cuartas partes del territorio son montaña. La cordillera de la Costa lo atraviesa de este a oeste y separa dos mundos: al sur, los valles abiertos alrededor del Lago de Valencia, también llamado lago de Tacarigua; al norte, una franja costera estrecha con bahías, manglares e islas frente a Puerto Cabello.",
      "Valencia, la capital, es el centro industrial, universitario y comercial de la región. Desde ella todo queda cerca: el Campo de Carabobo, el bosque nublado del Parque Nacional San Esteban, las playas de Patanemo o los petroglifos de Vigirima. Esa cercanía explica por qué Carabobo se recorre mejor por tramos cortos y con calma.",
    ],
    facts: [
      { label: "Capital", value: "Valencia" },
      { label: "Región", value: "Centro de Venezuela" },
      { label: "Paisaje", value: "Cordillera de la Costa, Lago de Valencia y costa caribeña" },
      { label: "Superficie", value: "4.650 km²" },
      { label: "Clima", value: "Cálido en los valles y la costa, más fresco y húmedo en la montaña" },
      { label: "Gentilicio", value: "Carabobeño / carabobeña" },
    ],
  },

  history: {
    description: "Una sabana, un puerto y una ciudad que decidieron el rumbo del país.",
    paragraphs: [
      "Mucho antes de la batalla, los valles en torno al lago de Tacarigua estaban habitados. Hacia el siglo IX se consolidó allí la llamada cultura valencioide, conocida por su cerámica y por figuras como la Venus de Tacarigua, y a la llegada de los europeos la región era territorio de los tacariguas. Los petroglifos de Vigirima y de San Esteban, tallados en rocas de la cordillera, son la huella más visible de esos primeros habitantes.",
      "Valencia fue fundada el 25 de marzo de 1555 por Alonso Díaz Moreno con el nombre de Nuestra Señora de la Anunciación de la Nueva Valencia del Rey. Creció despacio, mientras en la costa Puerto Cabello tomaba forma en el siglo XVIII al amparo de la Real Compañía Guipuzcoana, que trazó calles, levantó almacenes y fortificó la bahía con el Castillo San Felipe y, más tarde, el Fortín Solano.",
      "El 24 de junio de 1821, en la sabana de Carabobo, el ejército de Bolívar, con Páez, Cedeño y Plaza al frente de sus divisiones y la Legión Británica en un papel decisivo, derrotó a las fuerzas realistas de Miguel de la Torre. La victoria selló la independencia de Venezuela, aunque la guerra se prolongó hasta 1823, cuando Páez tomó Puerto Cabello, el bastión realista que aún resistía. En 1830, el Congreso reunido en Valencia dio forma a la Venezuela separada de la Gran Colombia.",
      "Carabobo fue provincia desde 1824 y estado desde las reformas del siglo XIX. El siglo XX lo convirtió en uno de los centros fabriles del país: Valencia recibió el título de capital industrial en 1951, Morón y El Palito sumaron petroquímica y refinación, y Puerto Cabello consolidó uno de los principales puertos de Venezuela. A esa identidad productiva se suman la devoción a la Virgen del Socorro, los tambores de San Juan en la costa y una memoria republicana que cada 24 de junio vuelve al Campo de Carabobo.",
    ],
    photo: null,
  },

  defines: {
    title: "LO QUE DEFINE A CARABOBO",
    description: "Tres rasgos que explican el estado.",
    panorama: photos.malecon,
    items: [
      {
        name: "El Campo de Carabobo",
        text: "La sabana donde se libró la batalla de 1821 es hoy un conjunto monumental con el Arco de Triunfo, levantado para el centenario, el Altar de la Patria con Bolívar y sus generales, y la Tumba del Soldado Desconocido custodiada por una guardia de honor. Es el lugar donde el país se mira en su origen republicano.",
      },
      {
        name: "Valencia, ciudad de trabajo",
        text: "La capital lleva desde 1951 el título de capital industrial de Venezuela, y se nota: zonas fabriles, una universidad con más de un siglo y una trama urbana que mezcla el Teatro Municipal de 1894, la Catedral y la Casa de la Estrella con avenidas modernas. Es la ciudad donde Carabobo trabaja, estudia y celebra su feria de noviembre.",
      },
      {
        name: "Una costa con puerto y bosque",
        text: "Al norte de la cordillera, Puerto Cabello reúne fortalezas del siglo XVIII, un casco colonial restaurado y uno de los puertos más activos del país. A pocos kilómetros, el Parque Nacional San Esteban baja del bosque nublado hasta los manglares, las playas de Patanemo y las islas donde los barcos hundidos se han vuelto arrecife.",
      },
    ],
  },

  places: {
    description: "Una selección para leer Carabobo de la sabana al mar.",
    items: [
      {
        name: "Campo de Carabobo",
        text: "Al suroeste de Valencia, cerca de Tocuyito, el campo de la batalla se visita como un paseo entre jardines, avenidas anchas y monumentos. El relevo de la guardia de honor ante la Tumba del Soldado Desconocido, con uniformes de época, es el momento que más recuerdan quienes lo visitan.",
        photo: null,
      },
      {
        name: "Valencia y su centro histórico",
        text: "En el centro histórico sobreviven la Catedral, la Casa de los Celis y la Casa de la Estrella, donde sesionó el Congreso de 1830. A unas cuadras, el Teatro Municipal conserva el plafón pintado por Antonio Herrera Toro. Es la Valencia anterior a las fábricas, y merece una mañana sin prisa.",
        photo: null,
      },
      {
        name: "Puerto Cabello y su casco histórico",
        text: "Desde la Plaza Bolívar hasta la Casa Guipuzcoana, el casco colonial restaurado se recorre por la calle Los Lanceros y el malecón, con el Castillo San Felipe, hoy Castillo Libertador, al otro lado del agua y el Fortín Solano vigilando desde la colina. Una ciudad portuaria que conserva su siglo XVIII a la vista.",
        photo: photos.malecon,
        href: "/playa/puerto-cabello",
      },
      {
        name: "Bahía de Patanemo",
        text: "Dentro del Parque Nacional San Esteban, la bahía abre una playa de arena de unos 800 metros entre dos costas rocosas, con cocoteros, la laguna de manglar de La Bocaína en un extremo y el pueblo de Patanemo detrás, donde los diablos danzantes salen cada Corpus Christi. Es una playa de referencia en el estado.",
        photo: photos.patanemo,
        href: "/playa/patanemo",
      },
      {
        name: "Isla Larga",
        text: "Frente a Puerto Cabello, es la única isla del Parque Nacional San Esteban con acceso libre para visitantes, en lancha desde la playa de Quizandal. Bajo el agua descansan dos barcos hundidos, el Sesostris y el Wacko, convertidos en arrecifes que hacen de la isla un sitio conocido para el esnórquel y el buceo.",
        photo: null,
      },
      {
        name: "Parque Nacional San Esteban y Vigirima",
        text: "El parque guarda el Camino de los Españoles, la ruta colonial que unía Valencia con el puerto, y el Puente Ojival o Puente de los Españoles, a 427 metros de altura entre bosque. Hacia Guacara, el Parque Arqueológico Piedra Pintada, en Vigirima, reúne petroglifos tallados siglos antes de cualquier camino real.",
        photo: null,
      },
    ],
  },

  culture: {
    description: "Tambores en la costa, feria en la capital y dulces con historia.",
    intro: "La cultura carabobeña se reparte entre el valle y el mar: Valencia celebra a su patrona con una feria en noviembre, mientras en Puerto Cabello y Patanemo los tambores y los diablos danzantes marcan el calendario de junio.",
    blocks: [
      {
        label: "Gastronomía",
        title: "Del valle al puerto.",
        items: [
          { name: "Panelas de San Joaquín", text: "Bizcochuelos ligeros nacidos en San Joaquín a finales del siglo XIX, cuando una receta casera se hizo famosa en el centro del país. Es el dulce más asociado a Carabobo." },
          { name: "Tostada carabobeña", text: "Así llaman en Valencia a la arepa rellena. Es comida de todos los días y una seña de identidad local que sorprende a quien viene de otros estados." },
          { name: "Hervido de pescado", text: "En Puerto Cabello y la costa, el pescado fresco se sirve frito o en hervido, un caldo contundente muy presente en las playas y los puertos del Caribe venezolano." },
          { name: "Naranjas de Valencia", text: "La capital fue conocida como la Ciudad de las Naranjas Dulces por los cultivos de cítricos de sus alrededores, una memoria agrícola que sobrevive en el apodo." },
        ],
      },
      {
        label: "Tradiciones",
        title: "Los diablos danzantes de Patanemo",
        text: "Cada Corpus Christi, la cofradía de Patanemo, con raíces que se remontan a 1721, sale a bailar con máscaras de cartón que representan peces, perros, loros o dragones, al son de cuatro, maracas y cencerros. Forma parte de las cofradías de diablos danzantes que la UNESCO reconoció en 2012 como patrimonio cultural inmaterial.",
      },
      {
        label: "Celebraciones",
        title: "San Juan en la costa, la feria en el valle",
        text: "Puerto Cabello celebra a San Juan Bautista, su patrono, el 23 y 24 de junio con tambores que suenan también en San Millán y Patanemo, herencia de las comunidades afrodescendientes de la costa. En noviembre, Valencia dedica su feria a la Virgen del Socorro, patrona de la ciudad y del estado.",
      },
      {
        label: "Identidad",
        title: "Una tierra de llegada",
        text: "Carabobo creció con las fábricas y con quienes llegaron a trabajar en ellas: familias italianas, españolas, portuguesas y árabes dejaron huella en la mesa, en los apellidos y en los barrios de Valencia y Puerto Cabello. El resultado es una identidad urbana, mestiza y orgullosa de su capacidad de hacer.",
      },
    ],
  },

  nature: {
    description: "Bosque nublado, lago y Caribe en un mismo estado.",
    intro: "La cordillera de la Costa organiza la naturaleza carabobeña. Sus laderas del norte caen hacia el Caribe con bosque húmedo, manglares e islas; las del sur se abren al Lago de Valencia, una cuenca cerrada que no desagua al mar. Entre ambos mundos, dos parques nacionales protegen lo esencial.",
    items: [
      { name: "Parque Nacional San Esteban", text: "Creado en 1987, protege 445 km² entre Guacara, Naguanagua, San Diego y Puerto Cabello: selva tropical en las cotas bajas, bosque nublado por encima de los 400 metros, manglares en la costa e islas como Isla Larga." },
      { name: "Parque Nacional Henri Pittier", text: "El parque nacional más antiguo de Venezuela, creado en 1937, ocupa buena parte del noreste de Carabobo además del norte de Aragua. Su selva nublada es uno de los grandes refugios de aves del país." },
      { name: "Lago de Valencia", text: "Llamado también lago de Tacarigua, es una cuenca endorreica de unos 344 km² compartida con Aragua, con una veintena de islas. Hoy sufre contaminación y crecidas, pero sigue siendo el eje geográfico de los valles centrales." },
      { name: "Lagunas de Patanemo", text: "En la bahía de Patanemo, la laguna de La Bocaína se rodea de manglares y cocoteros, y hacia el este Yapascua esconde una laguna de agua salada a la que se llega a pie o en bote." },
      { name: "Fauna de la cordillera", text: "En los bosques de San Esteban se han registrado puma, jaguar y danta, además del águila arpía, mientras que Henri Pittier reúne más de 580 especies de aves, casi la mitad de las conocidas en Venezuela." },
    ],
  },

  access: {
    description: "Llegar a Carabobo.",
    intro: "Desde Caracas, la ruta por carretera pasa por Maracay y continúa hasta Valencia por la Autopista Regional del Centro. Para la costa, sigue desde Valencia hacia Puerto Cabello y después al destino concreto. Si aterrizas en Maiquetía, en La Guaira, necesitas primero un traslado terrestre; no estás llegando a Valencia. Confirma el recorrido completo con tu alojamiento antes de reservar.",
    routes: [
      { mode: "aire", title: "Por aire", text: "El Aeropuerto Internacional Arturo Michelena, en Valencia, es la principal terminal aérea de la región central y recibe vuelos nacionales e internacionales. Confirma rutas y conexiones directamente con la aerolínea antes de planificar." },
      { mode: "carretera", title: "Por carretera", text: "La Autopista Regional del Centro une Valencia con Maracay y Caracas hacia el este. Desde la capital, otras vías siguen hacia Yaracuy y el occidente, bajan a los llanos por Cojedes y Guárico, y cruzan la cordillera hasta Puerto Cabello y la costa." },
      { mode: "mar", title: "Por mar", text: "Puerto Cabello es uno de los principales puertos comerciales de Venezuela y la base para las lanchas que salen desde Quizandal hacia Isla Larga. Para Patanemo y Yapascua, las embarcaciones locales completan lo que la carretera no alcanza." },
      { mode: "local", title: "Dentro del estado", text: "Las distancias son cortas: Valencia, el Campo de Carabobo, Guacara y Puerto Cabello quedan conectados por autopistas y carreteras principales. Para el Parque Nacional San Esteban y los pueblos de la cordillera conviene moverse con vehículo propio o con guías locales." },
    ],
  },

  tips: {
    description: "Un estado de sol, montaña y fiestas de comunidad.",
    items: [
      { icon: "sun", title: "Sol fuerte en la costa", text: "Puerto Cabello y Patanemo tienen calor y humedad durante todo el año. Protector solar, sombrero y agua son obligatorios; busca la sombra de los cocoteros en las horas centrales." },
      { icon: "waves", title: "Respeta el mar abierto", text: "La playa de la bahía de Patanemo recibe oleaje. Entra con precaución, no te alejes de la orilla si el mar está movido y sigue las indicaciones de quienes viven allí." },
      { icon: "footprints", title: "Calzado para la montaña", text: "El Camino de los Españoles y los senderos de San Esteban atraviesan bosque húmedo y tramos de piedra. Lleva calzado cerrado, ropa que seque rápido y algo de abrigo para las cotas altas." },
      { icon: "clock", title: "El Campo de Carabobo, sin prisa", text: "El conjunto es amplio y está al aire libre. Ve temprano para evitar el sol más fuerte y, si coincides con el relevo de la guardia de honor, espera: merece la pena." },
      { icon: "camera", title: "Esnórquel en Isla Larga", text: "Los pecios del Sesostris y el Wacko son el atractivo. No toques el coral ni los restos de los barcos, y sal con lancheros de Quizandal que conozcan el parque." },
      { icon: "users", title: "Fiestas con respeto", text: "Los diablos danzantes y los tambores de San Juan son celebraciones religiosas de la comunidad. Observa, pregunta antes de fotografiar y deja que sean los vecinos quienes marquen el ritmo." },
    ],
  },

  faqs: {
    description: "Lo que suele preguntarse antes de viajar a Carabobo.",
    items: [
      { question: "¿Carabobo es una ciudad o un estado?", answer: "Es un estado de Venezuela. Valencia es su capital y Puerto Cabello es una de sus ciudades costeras; no son tres nombres para el mismo lugar." },
      { question: "¿Cuántos días conviene dedicar a Carabobo?", answer: "Como propuesta, dedica tres días: uno a Valencia, otro al Campo de Carabobo y otro a Puerto Cabello. Añade una jornada si quieres playa o Isla Larga. Ajusta el plan al tiempo de traslado y confirma accesos antes de salir." },
      { question: "¿Qué se ve en el Campo de Carabobo?", answer: "Un conjunto monumental sobre la sabana de la batalla de 1821: el Arco de Triunfo del centenario, el Altar de la Patria con Bolívar y sus generales, la Tumba del Soldado Desconocido con su llama eterna y una guardia de honor en uniformes de época que se releva a lo largo del día." },
      { question: "¿Cómo se llega a Isla Larga?", answer: "En lancha desde la playa de Quizandal, muy cerca de Puerto Cabello. Es la única isla del Parque Nacional San Esteban con acceso libre para visitantes y no tiene población permanente, así que conviene llevar agua, sombra y todo lo necesario para el día." },
      { question: "¿Cuándo salen los diablos danzantes de Patanemo?", answer: "El día de Corpus Christi, entre finales de mayo y junio según el calendario litúrgico. Las máscaras se preparan durante los dos meses anteriores y se renuevan cada año. Es una fiesta religiosa de la cofradía, reconocida por la UNESCO en 2012 junto a otras diez del país." },
      { question: "¿Es Valencia solo una ciudad industrial?", answer: "No. Es la capital industrial de Venezuela desde 1951, pero también una ciudad histórica: fue fundada en 1555, acogió el Congreso de 1830 y conserva su Catedral, el Teatro Municipal y casas coloniales. Además tiene universidad desde el siglo XIX y una feria en noviembre." },
      { question: "¿Se puede nadar en el Lago de Valencia?", answer: "No es recomendable. El lago sufre una contaminación severa por aguas urbanas e industriales y su nivel ha crecido en las últimas décadas. Se aprecia mejor como paisaje desde los valles que lo rodean, no como destino de baño." },
    ],
  },

  credits: [
    { title: "Valencia desde Lomas del Este", author: "Ramses Hatem", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Vista_de_Valencia_desde_Lomas_del_Este.JPG" },
    { title: "Playa de Patanemo", author: "ELARVLO", license: "CC0", href: "https://commons.wikimedia.org/wiki/File:Playa_patanemo_estado_Carabobo.jpg" },
    { title: "Malecón de Puerto Cabello", author: "Jesus Enrique Morao Blanco", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Vista_al_Mar_Malenc%C3%B3n_de_Puerto_Cabello.jpg" },
  ],

  seo: {
    title: "Carabobo: dónde queda, qué visitar y cómo llegar",
    description: "Carabobo, Venezuela: ubicación y capital, Valencia. Descubre qué visitar en Puerto Cabello y Patanemo y cómo organizar la llegada desde Caracas.",
  },

  layout: { historyPhotoSide: "right", placesFirstPhotoSide: "right", cultureTone: "light" },
};
