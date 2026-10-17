import { commonsImage as commons } from "@/lib/commons-image";
import type { StateGuideData } from "@/lib/states/types";


const photos = {
  medanos: { src: "/images/medanos-coro.jpg", alt: "Dunas del Parque Nacional Médanos de Coro bajo un cielo abierto, estado Falcón", position: "center 55%" },
  medanosCommons: { src: commons("Medanos.jpg"), alt: "Dunas de los Médanos de Coro con montañas en el horizonte, estado Falcón", position: "center 50%" },
  coro: { src: "/images/commons/nuestro-vestigio-colonial.jpg", alt: "Casa de las Cien Ventanas, en el casco histórico de Coro, estado Falcón", position: "center 50%" },
  morrocoy: { src: "/images/commons/morrocoy-sea-island.jpg", alt: "Cayo del Parque Nacional Morrocoy en el horizonte, visto desde aguas turquesas y poco profundas, estado Falcón", position: "center 50%" },
  cayoSombrero: { src: "/images/cayo-sombrero.jpg", alt: "Cocoteros y arena blanca de Cayo Sombrero, en el Parque Nacional Morrocoy, estado Falcón", position: "center 50%" },
  chichiriviche: { src: commons("Bahía Boulevar Chichiriviche 01.jpg"), alt: "Bulevar de Chichiriviche de noche, con lanchas fondeadas en la bahía, estado Falcón", position: "center 50%" },
};

export const falcon: StateGuideData = {
  slug: "falcon",
  name: "Falcón",
  heroKicker: "Occidente de Venezuela",
  heroTagline: "Arena, viento, patrimonio y cayos.",
  hero: { src: "/images/commons/falcon-coro.jpg", alt: "Calle empedrada del casco histórico de Coro, con la torre de la catedral al fondo, estado Falcón", position: "center 35%" },

  intro: {
    eyebrow: "Guía de estado",
    title: "Falcón, la costa que el viento sigue dibujando.",
    paragraphs: [
      "Falcón se reconoce desde lejos por su luz seca y su horizonte ancho. Entre Coro y la península de Paraguaná, las dunas cruzan la carretera empujadas por los alisios; hacia el este, la costa se deshace en cayos y manglares en Morrocoy; y al sur, la Sierra de San Luis guarda la humedad que al resto del estado le falta.",
      "Es también uno de los territorios con más memoria del país: Coro fue la primera capital de la provincia de Venezuela y conserva, junto a su puerto de La Vela, un casco histórico de tierra declarado Patrimonio de la Humanidad. Aquí se come chivo, se convive con el viento y se viaja despacio entre lo árido y lo azul.",
    ],
    aside: { label: "En una frase", text: "Tierra seca, viento constante y un mar de cayos." },
  },

  know: {
    title: "CONOCE FALCÓN",
    description: "Dónde está, cómo es y por qué el viento explica casi todo.",
    paragraphs: [
      "Falcón ocupa el extremo noroccidental de Venezuela, con una larga fachada sobre el mar Caribe y el golfo de Venezuela. Limita con Zulia al oeste, con Lara y Yaracuy al sur y con Carabobo al este, y su capital, Santa Ana de Coro, se asienta en una llanura semiárida a pocos kilómetros de la costa.",
      "Su geografía se explica por contrastes. Al norte, la península de Paraguaná se une al continente por un istmo de arena donde se levantan los Médanos de Coro; en el interior, la Sierra de San Luis alcanza los 1.600 metros en el cerro Galicia y concentra bosques húmedos y cuevas; hacia el este, la costa baja se llena de cayos, manglares y arrecifes en Morrocoy.",
      "El clima es cálido y semiárido en gran parte del territorio, con lluvias escasas y un viento casi permanente que ha modelado tanto el paisaje como la forma de vivir. Coro es la puerta habitual para el patrimonio y las dunas; Punto Fijo y Adícora organizan la península; Tucacas y Chichiriviche abren el mar.",
    ],
    facts: [
      { label: "Capital", value: "Santa Ana de Coro" },
      { label: "Región", value: "Occidente de Venezuela" },
      { label: "Paisaje", value: "Dunas, península, costa de cayos y la Sierra de San Luis" },
      { label: "Superficie", value: "24.800 km²" },
      { label: "Clima", value: "Cálido y semiárido, más húmedo en la sierra" },
      { label: "Gentilicio", value: "Falconiano / falconiana" },
    ],
  },

  history: {
    description: "Primera capital, puerto de banderas y tierra de viento.",
    paragraphs: [
      "Antes de la llegada europea, estas tierras estaban habitadas por los caquetíos, los jirajaras y los ayamanes. Los caquetíos ocupaban la costa y la península de Paraguaná, y su lengua sigue viva en la toponimia: nombres como Adícora proceden de ella. La alfarería de la península conserva todavía técnicas heredadas de ese pueblo, y el Baile de las Turas, de raíz indígena, recuerda que la memoria más antigua del estado no se fue del todo.",
      "Santa Ana de Coro fue fundada el 26 de julio de 1527 por Juan de Ampíes y se convirtió en la primera capital de la provincia de Venezuela y, en 1531, en sede del primer obispado de Suramérica. Su puerto, La Vela, abrió el comercio con las Antillas Neerlandesas, y de ese intercambio nació una arquitectura de tierra que mezcla rasgos españoles y holandeses. Ese conjunto, uno de los pocos de su tipo en el Caribe, fue declarado Patrimonio de la Humanidad en 1993.",
      "El final de la colonia dejó dos fechas que Falcón sigue nombrando. En 1795, José Leonardo Chirino encabezó en la sierra de Coro una rebelión contra el orden colonial. En 1806, Francisco de Miranda desembarcó en La Vela el 3 de agosto y allí se izó por primera vez la bandera tricolor. Décadas después, la Guerra Federal tuvo entre sus líderes a Juan Crisóstomo Falcón, nacido en Jadacaquiva, presidente del país entre 1863 y 1868 y quien da nombre al estado.",
      "En el siglo XX, las refinerías de Cardón y Amuay transformaron Paraguaná y convirtieron a Punto Fijo en la mayor ciudad de la península, mientras la zona libre impulsaba desde 1998 el comercio y el turismo. Hoy Falcón se reconoce en esa suma: el barro de Coro, el viento de Adícora, la sal y el chivo de Paraguaná, los cayos de Morrocoy y una cultura con huella indígena, africana y europea que sigue sonando en el tambor y en los Locos de La Vela.",
    ],
    photo: photos.coro,
  },

  defines: {
    title: "LO QUE DEFINE A FALCÓN",
    description: "Tres rasgos que explican el estado de un vistazo.",
    panorama: photos.medanosCommons,
    items: [
      {
        name: "La arena que camina",
        text: "Entre Coro y Paraguaná, los alisios empujan las dunas del istmo hacia el este y las recomponen cada día. Los Médanos de Coro, parque nacional desde 1974, son un paisaje en movimiento: montañas de arena de más de ocho metros junto a cujíes y cardones, a pocos minutos de la capital.",
      },
      {
        name: "El barro de Coro y La Vela",
        text: "La capital y su puerto forman un conjunto de casas de tierra, patios y fachadas de color que resume cinco siglos de intercambio entre España, las Antillas Neerlandesas y el mundo indígena. La UNESCO lo reconoció como Patrimonio de la Humanidad en 1993 y sigue siendo el corazón histórico del estado.",
      },
      {
        name: "Un mar de cayos y manglares",
        text: "En el extremo oriental, Morrocoy reúne cerca de una veintena de cayos entre Tucacas y Chichiriviche, con aguas bajas, arrecifes y manglares donde se ven flamencos y corocoras. Es el Falcón más visitado y el que más cuidado pide: lo que se lleva a un cayo vuelve con el viajero.",
      },
    ],
  },

  places: {
    description: "Una selección para recorrer Falcón de la arena al mar.",
    items: [
      {
        name: "Médanos de Coro",
        text: "A la salida de Coro, en la carretera hacia Paraguaná, las dunas aparecen de golpe. Se recorren a pie, descalzo si la hora lo permite, y cambian de forma con cada ráfaga. Al atardecer la arena se enciende y el viento afloja lo justo para quedarse un rato.",
        photo: photos.medanos,
        href: "/parque-nacional/medanos-de-coro",
      },
      {
        name: "Coro, centro histórico",
        text: "Casas de tierra y patios frescos en la calle Zamora, la Catedral, la Casa de las Ventanas de Hierro y la Casa del Sol componen un conjunto colonial que se camina en una mañana. El Cementerio Judío añade otra capa a la memoria de la ciudad.",
        photo: null,
      },
      {
        name: "La Vela de Coro",
        text: "El puerto histórico de Coro, a unos 17 kilómetros de la capital, conserva un casco de influencia holandesa que comparte con ella el reconocimiento de la UNESCO. Aquí desembarcó Miranda en 1806 y aquí, cada 28 de diciembre, los Locos toman las calles con máscaras y disfraces.",
        photo: null,
      },
      {
        name: "Cayo Sombrero",
        text: "Es uno de los cayos más conocidos de Morrocoy: dos playas amplias, un bosque de cocoteros que da sombra y arrecifes a pocos metros de la orilla. Queda a la misma distancia de Tucacas y Chichiriviche, así que se llega en lancha desde cualquiera de los dos puertos.",
        photo: photos.cayoSombrero,
        href: "/playa/cayo-sombrero",
      },
      {
        name: "Chichiriviche",
        text: "Pueblo pesquero y uno de los dos accesos al parque, con su bulevar frente a la bahía y lanchas que salen hacia Cayo Sal, Cayo Muerto o Cayo Sombrero. Junto al pueblo, el Refugio de Fauna Silvestre de Cuare reúne flamencos y la Cueva del Indio, con petroglifos milenarios.",
        photo: photos.chichiriviche,
        href: "/playa/chichiriviche",
      },
      {
        name: "Paraguaná y Adícora",
        text: "La península es un mundo aparte: Punto Fijo y sus refinerías, Pueblo Nuevo y su pasado de capital colonial, y Adícora, antiguo puerto de comercio con las Antillas Neerlandesas que el viento constante ha convertido en referencia del windsurf y el kitesurf. En el centro, el cerro Santa Ana verdea sobre el paisaje seco.",
        photo: null,
      },
    ],
  },

  culture: {
    description: "Chivo, tambor, máscaras y viento.",
    intro: "La cocina falconiana nace de la tierra seca, con cabra, coco, pescado y dulces de leche, y su calendario mezcla raíz indígena, herencia africana y fiesta popular en pueblos como La Vela, Coro o Puerto Cumarebo.",
    blocks: [
      {
        label: "Gastronomía",
        title: "Una cocina hecha a la medida del paisaje.",
        items: [
          { name: "Talkarí de chivo", text: "Guiso de carne de chivo con especias, muy presente en Coro y en Paraguaná. Es el plato que mejor resume la relación del estado con la cría de cabras." },
          { name: "Queso y dulce de leche de cabra", text: "La leche de cabra se convierte en quesos frescos y en un dulce denso y oscuro, asociado a Paraguaná y a las mesas de toda la región." },
          { name: "Arepa pelada", text: "Arepa de maíz pelado en cal o ceniza, de textura más suave y color claro. Se sirve para acompañar guisos y quesos en el occidente del país." },
          { name: "Dabudeques y mancarrones", text: "Dulces de horno de la tradición coriana, asociados al coco y al papelón, que se encuentran en dulcerías y panaderías de Coro y de los pueblos cercanos." },
        ],
      },
      {
        label: "Celebraciones",
        title: "Los Locos de La Vela",
        text: "Cada 28 de diciembre, La Vela de Coro celebra el Día de los Locos: máscaras, disfraces y desfiles recorren calles y plazas en una fiesta de origen popular que cierra el año con humor. Es una de las citas más reconocibles del calendario falconiano.",
      },
      {
        label: "Tradiciones",
        title: "Tambor y Turas",
        text: "Los bailes de tambor acompañan las fiestas de Coro, La Vela y Puerto Cumarebo y mantienen viva la herencia africana de la costa. En septiembre, el Baile de las Turas conserva una raíz indígena que lo convierte en una de las expresiones más antiguas del estado.",
      },
      {
        label: "Artesanía",
        title: "Cardón, barro y chinchorros",
        text: "La artesanía falconiana usa lo que el paisaje ofrece: muebles de madera de cardón con fibras y cuero, cerámica de Paraguaná con técnicas heredadas de los caquetíos, cestería de enea y bejuco, y chinchorros de estilo propio. Comprarlos en los pueblos donde se hacen es la mejor manera de sostener el oficio.",
      },
    ],
  },

  nature: {
    description: "Dunas, cayos y un bosque de nubes sobre la tierra seca.",
    intro: "Falcón reúne tres mundos que rara vez se tocan: el desierto costero del istmo, con sus dunas en marcha; el litoral de Morrocoy, con manglares, fondos bajos y arrecifes; y la sierra húmeda de San Luis, donde nacen los ríos que dan de beber a Coro y Punto Fijo. Entre ellos, la península verdea en un solo cerro.",
    photo: photos.morrocoy,
    items: [
      { name: "Parque Nacional Médanos de Coro", text: "Creado en 1974, protege el istmo de arena que une Paraguaná con el continente: dunas de más de ocho metros, bosque xerófilo de cujíes y cardones y un clima de lluvias escasas." },
      { name: "Parque Nacional Morrocoy", text: "Declarado también en 1974, abarca cayos, manglares y fondos marinos entre Tucacas y Chichiriviche. Alberga más de 260 especies de aves y es hábitat de tortugas marinas y delfines." },
      { name: "Sierra de San Luis", text: "El Parque Nacional Juan Crisóstomo Falcón, creado en 1987, cubre bosques nublados, cuevas y haitones hasta los 1.600 metros del cerro Galicia. Es la principal reserva de agua del estado." },
      { name: "Cueva de la Quebrada del Toro", text: "Parque nacional desde 1961, al sur de Coro, guarda un río subterráneo considerado el mayor conocido en Venezuela, con un embalse interior navegable y colonias de guácharos." },
      { name: "Cerro Santa Ana", text: "Monumento natural desde 1972, en el centro de Paraguaná. Sus 830 metros concentran en la cima un bosque húmedo que contrasta con la vegetación xerófila de toda la península." },
    ],
  },

  access: {
    description: "Llegar a Falcón.",
    intro: "El estado es ancho y sus destinos están lejos unos de otros: Coro y Paraguaná al oeste, Morrocoy al este. Conviene decidir primero a cuál de los dos Falcón se viaja.",
    routes: [
      { mode: "aire", title: "Por aire", text: "Falcón cuenta con dos aeropuertos internacionales: el José Leonardo Chirino, en Coro, y el Josefa Camejo, en Las Piedras, junto a Punto Fijo, en la península de Paraguaná. Consulta la oferta vigente antes de planificar." },
      { mode: "carretera", title: "Por carretera", text: "Coro se conecta por carretera con Maracaibo, Barquisimeto y el centro del país. Hacia Morrocoy, el acceso habitual es desde Morón, en Carabobo, por la vía costera que pasa por Tucacas y sigue hasta Chichiriviche. Entre Coro y Punto Fijo, la carretera cruza el istmo entre las dunas." },
      { mode: "mar", title: "Por mar", text: "Los cayos de Morrocoy se alcanzan en lancha. Las embarcaciones salen de Tucacas y de Chichiriviche, con servicios que se contratan en los propios muelles. Cayo Sombrero queda a medio camino entre ambos puertos." },
      { mode: "local", title: "Dentro del estado", text: "Las distancias son largas: Chichiriviche está a unos 195 kilómetros de Coro. Coro, Punto Fijo, Tucacas y Chichiriviche funcionan como bases desde las que se organizan las salidas a las dunas, la península, la sierra y los cayos." },
    ],
  },

  tips: {
    description: "El viento y el sol mandan; el mar y la sierra lo compensan.",
    items: [
      { icon: "wind", title: "Cuenta con el viento", text: "Los alisios soplan casi todo el año. En las dunas la arena vuela: protege cámaras y teléfonos, lleva gafas y evita las horas de ráfagas más fuertes." },
      { icon: "sun", title: "Sol de tierra seca", text: "Falcón es semiárido y la sombra escasea. Visita los médanos y el centro de Coro a primera hora o al atardecer, con sombrero y protector solar." },
      { icon: "droplets", title: "Agua siempre a mano", text: "Las lluvias son escasas y el calor se siente más en la península y en el istmo. Lleva agua en cada salida, también en los cayos." },
      { icon: "ship", title: "En los cayos, todo vuelve contigo", text: "Lleva lo que necesites para el día y regresa con todos tus residuos; el arrecife lo agradece. Infórmate de los requisitos de ingreso al parque antes de salir." },
      { icon: "map", title: "Dos estados en uno", text: "Coro y Paraguaná quedan muy lejos de Morrocoy. Si tienes pocos días, elige una de las dos zonas en lugar de intentar cruzar el estado de un extremo a otro." },
      { icon: "leaf", title: "La sierra es otro clima", text: "En la Sierra de San Luis la humedad y el frescor sorprenden después de la costa. Lleva una capa ligera y calzado cerrado para cuevas y senderos." },
    ],
  },

  faqs: {
    description: "Lo que suele preguntarse antes de viajar a Falcón.",
    items: [
      { question: "¿Por qué Coro es Patrimonio de la Humanidad?", answer: "Porque su casco histórico y el puerto de La Vela conservan un conjunto de arquitectura de tierra que combina técnicas españolas, holandesas e indígenas, poco habitual en el Caribe. La UNESCO lo inscribió en 1993 y sigue siendo el principal conjunto colonial del estado." },
      { question: "¿Tucacas o Chichiriviche para ir a Morrocoy?", answer: "Ambos pueblos tienen muelles con lanchas hacia los cayos. Tucacas queda más cerca de Carabobo y del centro del país; Chichiriviche, más al norte, da acceso también al Refugio de Fauna Silvestre de Cuare. Cayo Sombrero está a la misma distancia de los dos." },
      { question: "¿Se pueden recorrer los Médanos de Coro por cuenta propia?", answer: "El parque está a las afueras de Coro, en la carretera hacia Paraguaná, y las dunas se recorren a pie sin dificultad. Basta con elegir una hora sin sol fuerte, llevar agua y no alejarse demasiado cuando el viento arrecia." },
      { question: "¿Qué se celebra el 28 de diciembre en La Vela?", answer: "El Día de los Locos: una fiesta popular en la que vecinos disfrazados y enmascarados desfilan por calles y plazas. Es una de las tradiciones más identificadas con Falcón y se vive con especial intensidad en La Vela de Coro." },
      { question: "¿Cuántos días conviene dedicar a Falcón?", answer: "Dos días bastan para Coro, La Vela y los médanos; uno o dos más para Paraguaná, con Adícora y el cerro Santa Ana. Morrocoy, en el otro extremo del estado, merece al menos dos días propios, con noche en Tucacas o Chichiriviche." },
      { question: "¿Qué hay en la Sierra de San Luis?", answer: "Bosques nublados, cuevas, haitones y cascadas dentro del Parque Nacional Juan Crisóstomo Falcón, en la sierra al sur de Coro. Es la zona más fresca y húmeda del estado y el origen de los ríos que abastecen a la capital y a Punto Fijo." },
    ],
  },

  credits: [
    { title: "Calle empedrada de Coro", author: "Juan Carlo Castillo Ortega", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Calle_empredrada_de_Coro.JPG" },
    { title: "Dunas de los Médanos de Coro", author: "Carlos Adampol Galindo", license: "CC BY-SA 2.0", href: "https://commons.wikimedia.org/wiki/File:MedanosdeCoro.jpg" },
    { title: "Casa de las Cien Ventanas, Coro", author: "Josesolerv", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Nuestro_vestigio_colonial.jpg" },
    { title: "Médanos de Coro", author: "Guanjarcia", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Medanos.jpg" },
    { title: "Cayo del Parque Nacional Morrocoy", author: "Regisrob", license: "CC BY 3.0", href: "https://commons.wikimedia.org/wiki/File:Morrocoy_sea_island.JPG" },
    { title: "Bahía de Chichiriviche", author: "Mualani", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Bah%C3%ADa_Boulevar_Chichiriviche_01.jpg" },
  ],

  seo: {
    title: "Falcón: guía de Coro, los Médanos y Morrocoy",
    description: "Guía editorial de Falcón: Coro y La Vela, Patrimonio de la Humanidad, los Médanos de Coro, Paraguaná, los cayos de Morrocoy y la Sierra de San Luis.",
  },

  layout: { historyPhotoSide: "left", placesFirstPhotoSide: "right", cultureTone: "light" },
};
