"use client";

import { PhotoCredits } from "@/components/content/photo-credits";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Calendar,
  Camera,
  Clock3,
  HelpCircle,
  Map,
  MapPin,
  Mountain,
  Navigation,
  Plane,
  ShieldCheck,
  Share2,
  Sparkles,
  Waves,
  type LucideIcon,
} from "lucide-react";
import { DiscoverItem, gallery, searchIndex } from "@/lib/content";
import { IslandExplorer, type IslandSlide } from "@/components/content/island-carousel";
import { CanaimaLandmarks } from "@/components/content/canaima-landmarks";
import { CanaimaExperienceCard } from "@/components/content/canaima-experience-card";
import { ManualImageCarousel } from "@/components/content/manual-image-carousel";
import { ZuliaGuide } from "@/components/content/zulia-guide";
import { StateGuide } from "@/components/content/state-guide";
import { useLanguage } from "@/components/i18n/language-provider";
import { LosRoquesGuide } from "@/components/content/los-roques-guide";
import { MedanosGuide } from "@/components/content/medanos-guide";
import { PicoBolivarGuide } from "@/components/content/pico-bolivar-guide";
import { EditorialSectionHeading } from "@/components/content/editorial-section-heading";

type BeachGuide = {
  title: string;
  paragraphs: string[];
  cards: Array<{ icon: LucideIcon; title: string; text: string }>;
  moments: string[];
  bestMoment: string;
  tips: string[];
  faqs: Array<{ question: string; answer: string }>;
};

const losRoquesIslands: IslandSlide[] = [
  {
    name: "Gran Roque",
    image:
      "/images/commons/gran-roque.jpg",
    description:
      "Es la isla principal y la única habitada. Aquí se llega en avión, se encuentran las posadas y comienza la navegación hacia los demás cayos.",
  },
  {
    name: "Cayo de Agua",
    image: "/images/cayo-de-agua.jpg",
    description:
      "Uno de los paisajes más reconocidos del archipiélago por su banco de arena y sus dos franjas de agua turquesa. Es una excursión de día desde Gran Roque.",
  },
  {
    name: "Crasquí",
    image:
      "/images/commons/cayo-crasqui-los-roques-archipelago-venezuela.jpg",
    description:
      "Un cayo conocido por su playa amplia, aguas tranquilas y ambiente relajado. Suele ser una de las paradas favoritas para pasar el día entre baño, arena y comida junto al mar.",
  },
  {
    name: "Madrisquí",
    image:
      "/images/commons/cayo-madrisqui-calmo-y-tranquilo.jpg",
    description:
      "Cercano a Gran Roque y fácil de incluir en una ruta corta. Sus aguas claras y sus orillas bajas lo hacen ideal para nadar, hacer esnórquel y conocer el ritmo más cotidiano del archipiélago.",
  },
  {
    name: "Francisquí",
    image:
      "/images/commons/cayo-francisqui-apacible.jpg",
    description:
      "Un conjunto de cayos cercano a Gran Roque, buscado por sus lagunas poco profundas y por las rutas cortas que permiten combinar baño, esnórquel y navegación.",
  },
  {
    name: "Dos Mosquises",
    image:
      "/images/commons/dos-mosquises.jpg",
    description:
      "Conocido por su relación con la investigación marina y la protección de tortugas. Es uno de los cayos que muestran el lado científico y de conservación de Los Roques.",
  },
];

const losRoquesHighlights = [
  {
    name: "Cayo de Agua: La Playa más Perfecta del Caribe",
    image: "/images/cayo-de-agua.jpg",
    secondaryImage: undefined,
    secondaryLabel: undefined,
    introduction: "Es, por amplio margen, la isla más famosa, fotografiada e icónica de todo el parque nacional debido a su geografía única.",
    highlight: "Cuenta con un espectacular istmo o puente de arena natural que conecta dos porciones de isla en medio del mar. Caminar por esta estrecha franja de arena blanca con el agua turquesa golpeando suavemente por ambos lados es la experiencia definitiva en Los Roques.",
    fact: "Ha sido elegida recurrentemente en listas internacionales como una de las 10 playas más hermosas de todo el mundo. Al estar en el extremo occidental del parque, el trayecto en lancha para llegar es una verdadera aventura caribeña.",
  },
  {
    name: "Madrisquí y Francisquí: Los Favoritos del Día a Día",
    image: "/images/commons/madrisqui.jpg",
    secondaryImage: "/images/commons/francisqui-lancha.jpg",
    secondaryLabel: "Francisquí",
    introduction: "Son dos cayos distintos pero muy cercanos entre sí, ubicados a apenas unos minutos de navegación desde la isla principal de Gran Roque.",
    highlight: "Son las playas más accesibles, conocidas y visitadas del archipiélago. Al estar tan cerca de las posadas, son los cayos perfectos para aprovechar el primer o el último día de viaje.",
    fact: "Francisquí es famoso por albergar la Piscina Natural, una laguna de aguas llanas y turquesas protegida por una barrera de coral, ideal para hacer esnórquel y nadar junto a miles de peces de colores.",
  },
  {
    name: "Crasquí: El Oasis de los Veleros y la Gastronomía",
    image: "/images/commons/cayo-crasqui-los-roques-archipelago-venezuela.jpg",
    secondaryImage: undefined,
    secondaryLabel: undefined,
    introduction: "Es una isla alargada de arenas blancas y aguas extremadamente tranquilas, ideal para pasar un día entero de relajación absoluta.",
    highlight: "Es el punto de encuentro favorito para los amantes del windsurf y kitesurf debido a la constancia de sus vientos alisios.",
    fact: "En su orilla se encuentran algunos de los restaurantes playeros más famosos del parque, donde los turistas almuerzan pescado fresco del día y langosta, durante la temporada permitida, con los pies hundidos en la arena.",
  },
];

type CanaimaTepuy = {
  name: string;
  image: string;
  introduction: string;
  record: string;
  history: string;
  curiosity: string;
  visit: string;
};

const canaimaTepuis: CanaimaTepuy[] = [
  {
    name: "El Auyantepuy: El Gigante del Salto Ángel",
    image: "/images/commons/salto-angel-canon-del-diablo.jpg",
    introduction: "Es el tepuy más famoso y extenso de Venezuela. Su enorme macizo domina una parte esencial del paisaje de Canaima.",
    record: "Con una superficie cercana a 700 km², es el origen del Kerepakupai Vená, conocido como Salto Ángel, la caída de agua más alta del mundo con 979 metros de altura total.",
    history: "Las comunidades pemón conocían este lugar desde mucho antes. Ernesto Sánchez La Cruz lo registró en un mapa en 1910; en 1933, el aviador Jimmie Angel lo avistó desde el aire y en 1937 aterrizó de emergencia en su cima con su tripulación.",
    curiosity: "Auyantepuy suele traducirse del pemón como “Montaña del Diablo”, en referencia a las brumas y tormentas que cubren su cumbre.",
    visit: "La experiencia habitual es navegar en curiara por los ríos Carrao y Churún para ver el salto desde su base, o contemplar el macizo durante un sobrevuelo autorizado.",
  },
  {
    name: "El Monte Roraima: La Cuna del Excursionismo",
    image: "/images/commons/mount-roraima-venezuela-12372404495.jpg",
    introduction: "Con 2.810 metros de altitud, es uno de los destinos de aventura más deseados de la Gran Sabana.",
    record: "En su cima se encuentra el punto donde convergen las fronteras de Venezuela, Brasil y Guyana.",
    history: "Su perfil y los relatos de exploración de la región ayudaron a inspirar El mundo perdido, la novela de Arthur Conan Doyle.",
    curiosity: "Una rampa natural permite alcanzar la cima a pie. Aun así, la ruta exige preparación física, varios días de caminata y el acompañamiento de guías.",
    visit: "Las expediciones suelen durar entre seis y siete días y parten desde la comunidad de Paraitepuy. En la cumbre hay formaciones de cuarzo, pozas y flora única.",
  },
  {
    name: "El Kukenán (Matawí-Tepuy): El Gemelo Sagrado",
    image: "/images/commons/kukenan-tepuy.jpg",
    introduction: "También conocido como Matawi-Tepuy, es el gran vecino del Roraima y una de las siluetas más impresionantes de la Gran Sabana.",
    record: "En su vertiente sur nace el Salto Kukenán, una caída de agua de aproximadamente 674 metros que gana fuerza durante la temporada de lluvias.",
    history: "Para las comunidades pemón es un lugar sagrado. El nombre Matawi suele asociarse con la idea de un lugar de los muertos.",
    curiosity: "Sus paredes lisas, los vientos y las condiciones del terreno hacen que sea mucho menos accesible que el Roraima.",
    visit: "La mayoría de los viajeros lo contempla desde la base o durante la caminata hacia Roraima, donde su perfil aparece junto al paisaje abierto de la sabana.",
  },
];

const canaimaPracticalQuestions = [
  {
    icon: Calendar,
    title: "¿Cuánto tiempo conviene quedarse?",
    text: "Para conocer la laguna y los saltos de Canaima suele ser útil reservar varios días. Las rutas hacia zonas más remotas requieren más tiempo y una planificación distinta.",
  },
  {
    icon: Navigation,
    title: "¿Cómo se recorren las rutas?",
    text: "Los desplazamientos combinan trayectos a pie, navegación por río y acompañamiento de guías locales. El recorrido exacto depende del clima, el nivel de los ríos y el lugar que se quiera visitar.",
  },
  {
    icon: Camera,
    title: "¿Qué conviene llevar?",
    text: "Ropa ligera que pueda mojarse, calzado firme, protección para lluvia y sol, agua reutilizable y una bolsa seca para cuidar cámara, teléfono y documentos.",
  },
  {
    icon: ShieldCheck,
    title: "¿Qué hay que tener en cuenta?",
    text: "Es un territorio protegido y vivo. Sigue las indicaciones de los guías, respeta las comunidades pemón, no dejes residuos y confirma las condiciones de la ruta antes de salir.",
  },
];

type CanaimaExperience = {
  title: string;
  image: string;
  alt: string;
  secondaryImage?: string;
  secondaryAlt?: string;
  description: string;
};

const canaimaExperiences: CanaimaExperience[] = [
  {
    title: "Salto Ángel (Kerepakupai Vená)",
    image: "/images/commons/salto-angel-canon-del-diablo.jpg",
    alt: "Salto Ángel descendiendo desde el Auyantepuy",
    description: "Con una caída de 979 metros, el Salto Ángel es la cascada más alta del mundo y uno de los mayores tesoros naturales de Venezuela. Aunque era conocido desde hace siglos por el pueblo pemón con el nombre de Kerepakupai Vená, fue el aviador estadounidense Jimmie Angel quien lo dio a conocer internacionalmente tras sobrevolarlo en 1933. Desde entonces, este impresionante salto de agua se ha convertido en el símbolo más emblemático del Parque Nacional Canaima y en uno de los destinos naturales más extraordinarios del planeta.",
  },
  {
    title: "Laguna de Canaima",
    image: "/images/commons/laguna-de-canaima.jpg",
    alt: "Laguna de Canaima con sus aguas abiertas y saltos al fondo",
    description: "La Laguna de Canaima es el corazón acuático del poblado y una de las postales más tranquilas del parque. Sus aguas, playas de arena y saltos cercanos forman el punto de partida de muchas rutas guiadas.",
  },
  {
    title: "Salto El Sapo",
    image: "/images/commons/salto-el-sapo.jpg",
    alt: "Salto El Sapo entre la selva de Canaima",
    secondaryImage: "/images/commons/salto-el-sapo-adentro.jpg",
    secondaryAlt: "Sendero detrás de la cortina de agua de Salto El Sapo",
    description: "Salto El Sapo permite acercarse a una gran cortina de agua entre la vegetación de Canaima. El sendero revela la fuerza de la cascada y la humedad intensa de la selva desde muy cerca.",
  },
  {
    title: "Salto El Hacha",
    image: "/images/commons/salto-el-hacha-2023.jpg",
    alt: "Salto El Hacha en la Laguna de Canaima",
    description: "A orillas de la Laguna de Canaima, Salto El Hacha se reconoce por su amplia cortina de agua. Su entorno reúne río, roca y selva, y se aprecia especialmente desde las rutas de navegación guiadas por la laguna.",
  },
  {
    title: "Paseo en curiara",
    image: "/images/commons/salto-hacha-y-curiara-sector-occidental.jpg",
    alt: "Curiara frente al Salto El Hacha en la Laguna de Canaima",
    description: "La curiara es una de las formas más auténticas de recorrer las rutas de agua del parque. Navegar sus ríos acerca al paisaje, a los guías locales y a las entradas naturales de Canaima.",
  },
  {
    title: "Sobrevuelo del Salto Ángel",
    image: "/images/commons/angel-falls-in-venezuela.jpg",
    alt: "Vista aérea del Salto Ángel y el Auyantepuy",
    description: "Visto desde el aire, el Salto Ángel revela la escala del Auyantepuy y del bosque que lo rodea. Es una manera inolvidable de apreciar la caída de agua completa y la inmensidad del paisaje de Canaima.",
  },
];

const canaimaQuickFacts = [
  { icon: MapPin, label: "Ubicación", value: "Estado Bolívar, sureste de Venezuela" },
  { icon: Mountain, label: "Tipo de destino", value: "Naturaleza, aventura y patrimonio cultural" },
  { icon: Sparkles, label: "Principal atractivo", value: "Salto Ángel y los tepuyes" },
  { icon: Calendar, label: "Mejor época", value: "Depende de la experiencia que quieras vivir" },
  { icon: Clock3, label: "Duración recomendada", value: "Entre 3 y 4 días para una primera visita" },
  { icon: Plane, label: "Forma de acceso", value: "Principalmente por vía aérea, según disponibilidad" },
];

const stateGuides: Record<string, { capital: string; landscape: string; identity: string; route: string }> = {
  amazonas: { capital: "Puerto Ayacucho", landscape: "Selva, rios caudalosos y paisajes del Escudo Guayanes.", identity: "Un territorio de culturas originarias y naturaleza de escala inmensa.", route: "Puerto Ayacucho, el Orinoco y sus monumentos naturales." },
  anzoategui: { capital: "Barcelona", landscape: "Costa oriental, bahias y ciudades junto al Caribe.", identity: "Una mezcla de mar, vida urbana y rutas hacia el oriente venezolano.", route: "Barcelona, Lecheria y los paisajes costeros cercanos." },
  apure: { capital: "San Fernando de Apure", landscape: "Sabanas abiertas, canos y vida silvestre llanera.", identity: "El ritmo de los hatos, el rio y las tradiciones del llano.", route: "San Fernando, los hatos y las rutas de observacion de fauna." },
  aragua: { capital: "Maracay", landscape: "Selva tropical, bahias y valles entre costa y montana.", identity: "El Parque Henri Pittier conecta el verde con el Caribe.", route: "Maracay, Choroni y las playas de la costa araguena." },
  barinas: { capital: "Barinas", landscape: "Llanos amplios con los Andes en el horizonte.", identity: "Puerta occidental de los llanos y tierra de tradicion ganadera.", route: "La ciudad de Barinas y las sabanas que se abren hacia el sur." },
  bolivar: { capital: "Ciudad Bolivar", landscape: "Tepuyes, rios inmensos y selva del sur venezolano.", identity: "El estado de mayor escala natural: Canaima, Gran Sabana y el Caroni.", route: "Ciudad Bolivar, Canaima, La Gran Sabana y el Salto Angel." },
  carabobo: { capital: "Valencia", landscape: "Costa central, montanas y espacios historicos.", identity: "Un territorio que enlaza industria, puerto y memoria republicana.", route: "Valencia, Puerto Cabello y los paisajes de San Esteban." },
  cojedes: { capital: "San Carlos", landscape: "Llanos centrales, rios tranquilos y campos abiertos.", identity: "Una Venezuela rural de sabanas, caballos y rutas pausadas.", route: "San Carlos y las haciendas de los llanos centrales." },
  "delta-amacuro": { capital: "Tucupita", landscape: "Canales, manglares y la desembocadura del Orinoco.", identity: "Un paisaje anfibio marcado por la cultura warao.", route: "Tucupita y los canos del delta del Orinoco." },
  "distrito-capital": { capital: "Caracas", landscape: "Una ciudad entre El Avila, cultura y miradores urbanos.", identity: "El corazon cultural, historico y contemporaneo del pais.", route: "El Avila, museos, arquitectura y los barrios de Caracas." },
  falcon: { capital: "Coro", landscape: "Dunas, costa seca y aguas del Caribe.", identity: "Contrastes entre el desierto de los medanos, pueblos coloniales y cayos.", route: "Coro, los Medanos y el Parque Nacional Morrocoy." },
  guarico: { capital: "San Juan de los Morros", landscape: "Morros, hatos y el llano central.", identity: "Grandes horizontes y una cultura profundamente llanera.", route: "San Juan de los Morros y las rutas de sabana." },
  lara: { capital: "Barquisimeto", landscape: "Valles secos, sierras y crepusculos de occidente.", identity: "Musica, arquitectura y una identidad cultural muy marcada.", route: "Barquisimeto, la Flor de Venezuela y sus pueblos cercanos." },
  merida: { capital: "Merida", landscape: "Paramos, lagunas y cumbres de los Andes.", identity: "Altura, universidades y rutas de montana en el corazon andino.", route: "Merida, el teleferico Mukumbari y la Sierra Nevada." },
  miranda: { capital: "Los Teques", landscape: "Valles, montanas y playas cercanas a Caracas.", identity: "Escapadas cortas entre naturaleza, cacao y costa.", route: "Los Teques, Higuerote y los pueblos de Barlovento." },
  monagas: { capital: "Maturin", landscape: "Bosques, cuevas y llanuras del oriente interior.", identity: "Naturaleza subterranea y caminos que conectan con el Caribe oriental.", route: "Maturin y el Monumento Natural Cueva del Guacharo." },
  "nueva-esparta": { capital: "La Asuncion", landscape: "Islas, playas y cerros junto al Caribe.", identity: "Margarita, Coche y Cubagua se viven a ritmo de mar.", route: "La Asuncion, Playa El Agua, Porlamar e Isla de Coche." },
  portuguesa: { capital: "Guanare", landscape: "Llanos verdes, rios y campos productivos.", identity: "Devocion, naturaleza y tradicion agricola en el centro-occidente.", route: "Guanare y las rutas rurales de Portuguesa." },
  sucre: { capital: "Cumana", landscape: "Peninsulas verdes, bahias y mar profundo.", identity: "Una costa de pescadores, cacao y puertas de entrada a Mochima.", route: "Cumana, Mochima y la peninsula de Paria." },
  tachira: { capital: "San Cristobal", landscape: "Andes fronterizos, neblina y pueblos de montana.", identity: "Rutas altas, cafe y una fuerte tradicion andina.", route: "San Cristobal, La Grita y las montanas del occidente." },
  trujillo: { capital: "Trujillo", landscape: "Paramos, pueblos altos y montanas andinas.", identity: "Historia, devocion y paisajes de altura entre los Andes.", route: "Trujillo, la Virgen de la Paz y sus pueblos de montana." },
  "la-guaira": { capital: "La Guaira", landscape: "Mar Caribe y montana a pocos minutos de Caracas.", identity: "Una costa intensa de malecones, playas y memoria portuaria.", route: "La Guaira, Macuto y las playas de la costa central." },
  yaracuy: { capital: "San Felipe", landscape: "Montanas verdes, rios y bosques de transicion.", identity: "Naturaleza cercana, cafe y rutas tranquilas del centro-occidente.", route: "San Felipe y los parques naturales del estado." },
  zulia: { capital: "Maracaibo", landscape: "El lago, llanuras calurosas y horizontes del occidente.", identity: "Una identidad marabina entre gaita, gastronomia y relampagos.", route: "Maracaibo, el Puente sobre el Lago y la ruta del Catatumbo." },
};

const canaimaFaqs = [
  { icon: Calendar, title: "¿Cuántos días necesito?", text: "Tres o cuatro días permiten conocer la laguna y varias experiencias cercanas. Las rutas más remotas requieren tiempo adicional y una planificación específica." },
  { icon: Sparkles, title: "¿Cuánto cuesta visitar Canaima?", text: "El presupuesto depende del vuelo, el hospedaje, la temporada y las excursiones elegidas. Conviene solicitar una cotización actualizada a operadores autorizados antes de reservar." },
  { icon: ShieldCheck, title: "¿Es seguro?", text: "Con una ruta organizada, guías locales y atención a las indicaciones del clima, la visita puede planificarse de forma responsable. Confirma siempre las condiciones antes de salir." },
  { icon: Navigation, title: "¿Necesito guía?", text: "Para las excursiones fluviales y las rutas del parque es recomendable, y en muchos casos necesario, contar con guías y operadores locales autorizados." },
  { icon: Map, title: "¿Dónde hospedarse?", text: "La comunidad de Canaima cuenta con campamentos y posadas. La disponibilidad puede ser limitada, por lo que es mejor organizar el alojamiento junto con el traslado." },
];

function getEditorialCopy(item: DiscoverItem) {
  const place = item.region ?? item.name;

  return {
    intro:
      item.kind === "articulo"
        ? `Una lectura para entender ${item.name.toLowerCase()} con mirada pausada: paisajes, memoria, sabores y decisiones prácticas que ayudan a viajar mejor.`
        : `${item.name} se descubre por capas: primero la imagen que impresiona, luego los caminos, las historias locales y esos pequeños detalles que convierten una visita en recuerdo.`,
    blocks: [
      {
        icon: Navigation,
        title: "Cómo llegar",
        text: `La ruta ideal depende de la temporada y del punto de partida. Para ${place}, conviene planificar conexiones, traslados locales y ventanas de luz con margen suficiente.`,
      },
      {
        icon: Sparkles,
        title: "Curiosidades",
        text: "Cada región mezcla naturaleza, acentos, oficios y relatos propios. Esa diversidad es parte esencial de la experiencia venezolana.",
      },
      {
        icon: Map,
        title: "Mapa local",
        text: "La guía conecta estados, ciudades, parques, playas y rutas cercanas para que el viaje pueda leerse como una red, no como puntos aislados.",
      },
      {
        icon: HelpCircle,
        title: "Preguntas frecuentes",
        text: "Clima, acceso, seguridad, presupuesto y mejores épocas se responden con información clara para decidir con confianza.",
      },
    ],
  };
}

const beachGuides: Record<string, BeachGuide> = {
  "los-roques": {
    title: "Los Roques: El Paraíso Coralino del Caribe",
    paragraphs: [
      "Declarado Parque Nacional en 1972, el Archipiélago Los Roques es el complejo arrecifal más grande de todo el Mar Caribe y uno de los sistemas coralinos mejor conservados de América. Este santuario marino está ubicado a unos 160 kilómetros al norte de la costa central de Venezuela y está formado por más de 50 cayos, 300 bancos de arena y una inmensa barrera de coral que frena las olas oceánicas, creando una gigantesca piscina natural de aguas mansas, transparentes y de infinitas tonalidades turquesas.",
    ],
    cards: [
      { icon: Map, title: "¿Dónde queda?", text: "En el Caribe venezolano, al norte de La Guaira, dentro de las Dependencias Federales." },
      { icon: Navigation, title: "¿Cómo llegar?", text: "Normalmente se llega en vuelo hasta Gran Roque y desde allí se organizan traslados en lancha a los cayos." },
      { icon: Waves, title: "¿Qué islas conocer?", text: "Cayo de Agua, Crasquí, Madrisquí, Francisquí y Dos Mosquises son algunos de los nombres más buscados." },
      { icon: Camera, title: "¿Por qué es famoso?", text: "Por sus arrecifes, aguas transparentes, bancos de arena y el ritmo pausado de un parque marino protegido." },
    ],
    moments: [
      "Ver aparecer los cayos desde la lancha mientras cambia el color del agua.",
      "Caminar por la arena blanca de Cayo de Agua cuando el istmo está visible.",
      "Cerrar el día en Gran Roque, mirando las embarcaciones y la luz sobre la isla.",
    ],
    bestMoment: "Los días despejados y de mar tranquilo permiten disfrutar mejor los traslados entre cayos. La ruta concreta depende del clima, el operador y el tiempo disponible.",
    tips: [
      "Organiza con tiempo vuelos, hospedaje y lanchas desde Gran Roque.",
      "Respeta los arrecifes, la fauna y las normas del parque nacional.",
      "Lleva agua, protección solar y bolsas para guardar tus residuos.",
      "Pregunta qué cayos son recomendables según el estado del mar ese día.",
    ],
    faqs: [
      { question: "¿Qué conviene llevar a los cayos?", answer: "Agua reutilizable, protección solar, gorra, traje de baño, una camisa ligera y una bolsa seca para proteger teléfono, documentos y cámara." },
      { question: "¿Se puede hacer esnórquel o buceo?", answer: "Sí. Las aguas poco profundas y los arrecifes hacen del archipiélago un destino muy buscado para estas actividades. Conviene hacerlo con operadores autorizados y siguiendo las normas del parque." },
      { question: "¿Dónde se hospeda la gente?", answer: "La base de alojamiento es Gran Roque, donde hay posadas de distintos estilos y desde donde salen las lanchas hacia los cayos." },
      { question: "¿Qué normas de conservación hay que respetar?", answer: "No dejes residuos, no extraigas conchas ni coral, evita tocar la fauna marina y sigue siempre las indicaciones de guías y operadores locales." },
    ],
  },
  "playa-el-yaque": {
    title: "Viento, mar bajo y energía deportiva en Margarita.",
    paragraphs: [
      "Playa El Yaque es una de las playas más conocidas de Margarita por sus condiciones de viento, su ambiente relajado y su relación con el windsurf y el kitesurf.",
      "La experiencia combina playa, deporte, restaurantes sencillos frente al mar y una atmósfera más casual que la de otros destinos turísticos de la isla.",
    ],
    cards: [
      { icon: Map, title: "¿Dónde queda?", text: "En el sur de la isla de Margarita, estado Nueva Esparta." },
      { icon: Navigation, title: "¿Cómo llegar?", text: "Se llega por carretera desde Porlamar, Pampatar o el aeropuerto de Margarita." },
      { icon: Waves, title: "¿Qué hacer?", text: "Ver deportes de vela, bañarse en zonas tranquilas, caminar y comer frente al mar." },
      { icon: Camera, title: "¿Por qué es famosa?", text: "Por el viento constante y su ambiente internacional de windsurf y kitesurf." },
    ],
    moments: [
      "Ver las velas de colores moverse sobre el mar.",
      "Caminar por la orilla cuando baja el sol y el viento se suaviza.",
      "Sentarse frente al agua y mirar cómo cambia el ritmo de la playa.",
    ],
    bestMoment: "Suele disfrutarse mejor en días despejados y con viento moderado. Para deportes de vela, conviene consultar escuelas u operadores locales.",
    tips: [
      "Si vas a practicar deportes, consulta condiciones y escuelas certificadas.",
      "Lleva protección solar: el viento puede hacer que el sol se sienta menos fuerte.",
      "Camina con calma por la zona de playa y respeta áreas de práctica deportiva.",
      "Es buena opción para combinar playa, comida y atardecer.",
    ],
    faqs: [
      { question: "¿Es buena para deportes acuáticos?", answer: "Sí, es una de las playas más asociadas al windsurf y kitesurf en Venezuela." },
      { question: "¿Es cómoda para pasar el día?", answer: "Sí, suele tener servicios y ambiente turístico cerca." },
      { question: "¿Está cerca del aeropuerto?", answer: "Sí, queda en una zona accesible del sur de Margarita." },
    ],
  },
  mochima: {
    title: "Islas, ensenadas y agua calma en el oriente venezolano.",
    paragraphs: [
      "Mochima no es una sola playa: es un paisaje marino de islas, bahías, lanchas y aguas tranquilas entre Sucre y Anzoátegui.",
      "La visita suele sentirse como un recorrido por mar, con paradas en playas claras, miradores naturales y pueblos costeros.",
    ],
    cards: [
      { icon: Map, title: "¿Dónde queda?", text: "En el Parque Nacional Mochima, entre los estados Sucre y Anzoátegui." },
      { icon: Navigation, title: "¿Cómo llegar?", text: "Se puede salir en lancha desde zonas como Mochima, Santa Fe o Puerto La Cruz, según la ruta." },
      { icon: Waves, title: "¿Qué hacer?", text: "Tomar paseos en lancha, visitar playas, nadar y recorrer islas cercanas." },
      { icon: Camera, title: "¿Por qué es famosa?", text: "Por sus ensenadas, islas y paisajes marinos protegidos." },
    ],
    moments: ["Salir temprano en lancha.", "Ver cómo aparecen las islas entre el azul del mar.", "Quedarse en una playa calma hasta que baje la luz."],
    bestMoment: "Los días despejados y de mar tranquilo permiten disfrutar mejor las lanchas, las playas y los colores del agua.",
    tips: ["Confirma ruta, horario y regreso con el lanchero.", "Lleva agua y protección solar.", "Respeta zonas protegidas y no dejes basura.", "Pregunta por condiciones del mar antes de salir."],
    faqs: [
      { question: "¿Es una playa o un parque?", answer: "Es un parque nacional con varias playas, islas y rutas marinas." },
      { question: "¿Se visita en lancha?", answer: "Muchas de sus mejores playas se conocen en lancha." },
      { question: "¿Conviene ir temprano?", answer: "Sí, para aprovechar mejor el día y organizar el regreso." },
    ],
  },
  choroni: {
    title: "Montaña, pueblo costero y playa con identidad aragüeña.",
    paragraphs: [
      "Choroní combina la fuerza verde del Parque Nacional Henri Pittier con la vida de un pueblo costero lleno de memoria, música y tradición.",
      "La experiencia suele girar alrededor de Playa Grande, el malecón, los sabores locales y ese contraste entre montaña tropical y mar Caribe.",
    ],
    cards: [
      { icon: Map, title: "¿Dónde queda?", text: "En la costa del estado Aragua, cerca de Puerto Colombia." },
      { icon: Navigation, title: "¿Cómo llegar?", text: "Se llega por carretera desde Maracay atravesando la montaña del Henri Pittier." },
      { icon: Waves, title: "¿Qué hacer?", text: "Visitar Playa Grande, caminar el pueblo, comer pescado y disfrutar el ambiente local." },
      { icon: Camera, title: "¿Por qué es famosa?", text: "Por su mezcla de playa, montaña, historia y cultura afrovenezolana." },
    ],
    moments: ["Bajar la carretera entre montaña y neblina.", "Caminar por Playa Grande al final de la tarde.", "Escuchar el ritmo del pueblo después de un día de mar."],
    bestMoment: "Conviene revisar la vía y salir con luz. Los días despejados permiten disfrutar mejor el paisaje de montaña y playa.",
    tips: ["Maneja con calma en la carretera de montaña.", "Lleva efectivo para servicios locales.", "Respeta el oleaje y las indicaciones de seguridad.", "Aprovecha para conocer el pueblo, no solo la playa."],
    faqs: [
      { question: "¿La playa principal es Playa Grande?", answer: "Sí, es la playa más conocida asociada a Choroní." },
      { question: "¿La carretera es de montaña?", answer: "Sí, por eso conviene ir con tiempo y manejar con precaución." },
      { question: "¿Vale la pena quedarse?", answer: "Sí, muchas personas lo disfrutan más pasando al menos una noche." },
    ],
  },
  cuyagua: {
    title: "Una playa amplia para surf, camping y aventura.",
    paragraphs: [
      "Cuyagua es una playa de Aragua conocida por su ambiente más libre, su relación con el surf y su sensación de escapada natural.",
      "No se siente como una playa de paseo rápido: invita a ir con calma, mirar el oleaje y vivir una experiencia más rústica junto al mar.",
    ],
    cards: [
      { icon: Map, title: "¿Dónde queda?", text: "En la costa del estado Aragua, al oeste de Ocumare de la Costa." },
      { icon: Navigation, title: "¿Cómo llegar?", text: "Se llega por carretera desde la zona de Ocumare, revisando condiciones de vía y acceso." },
      { icon: Waves, title: "¿Qué hacer?", text: "Surf, caminatas, descanso frente al mar y fotografía de paisaje costero." },
      { icon: Camera, title: "¿Por qué es famosa?", text: "Por su amplitud, su oleaje y su ambiente de aventura." },
    ],
    moments: ["Mirar a los surfistas entrar al agua.", "Caminar la playa cuando baja la intensidad del sol.", "Sentarse frente al mar sin música ni prisa."],
    bestMoment: "Para surf depende del oleaje. Para pasar el día, conviene revisar clima, acceso y condiciones del mar.",
    tips: ["Consulta el estado de la vía antes de ir.", "Lleva lo necesario si buscas una experiencia más rústica.", "Respeta el oleaje: puede cambiar rápido.", "No dejes basura en la playa."],
    faqs: [
      { question: "¿Es buena para surf?", answer: "Sí, es una de las playas asociadas al surf en Aragua." },
      { question: "¿Es muy turística?", answer: "Tiene un ambiente más natural y aventurero que otras playas." },
      { question: "¿Conviene ir preparado?", answer: "Sí, especialmente por acceso, servicios y condiciones del mar." },
    ],
  },
  "bahia-de-cata": {
    title: "Una bahía amplia entre montaña verde y mar Caribe.",
    paragraphs: [
      "Bahía de Cata es una de las playas más reconocidas de Aragua, con una franja amplia de arena y montañas que enmarcan el paisaje.",
      "Su ambiente combina playa popular, salida familiar, servicios locales y esa sensación clásica de costa central venezolana.",
    ],
    cards: [
      { icon: Map, title: "¿Dónde queda?", text: "En el estado Aragua, cerca de Ocumare de la Costa." },
      { icon: Navigation, title: "¿Cómo llegar?", text: "Se llega por carretera desde Maracay hacia Ocumare y luego hacia la bahía." },
      { icon: Waves, title: "¿Qué hacer?", text: "Bañarse con precaución, caminar, comer junto al mar y disfrutar la vista de la bahía." },
      { icon: Camera, title: "¿Por qué es famosa?", text: "Por su forma de bahía, su paisaje de montaña y su popularidad en la costa central." },
    ],
    moments: ["Llegar temprano para ver la bahía con menos movimiento.", "Caminar la arena mirando las montañas.", "Cerrar el día con comida local frente al mar."],
    bestMoment: "Los días despejados resaltan el color del agua y la montaña. En temporada alta conviene salir temprano.",
    tips: ["Revisa oleaje antes de bañarte.", "Lleva efectivo para servicios locales.", "Cuida tus pertenencias en días concurridos.", "Respeta la playa y recoge tus residuos."],
    faqs: [
      { question: "¿Es una playa familiar?", answer: "Sí, suele ser una opción popular para familias y grupos." },
      { question: "¿Tiene servicios?", answer: "Generalmente hay servicios locales, pero conviene confirmar según temporada." },
      { question: "¿Está cerca de Ocumare?", answer: "Sí, forma parte de las rutas costeras de esa zona de Aragua." },
    ],
  },
  "puerto-cabello": {
    title: "Costa, historia y mar en una ciudad portuaria.",
    paragraphs: [
      "Puerto Cabello mezcla historia, puerto, malecón y acceso a playas cercanas como Patanemo e Isla Larga.",
      "Más que una sola playa, funciona como una base costera para explorar el litoral de Carabobo y su memoria marítima.",
    ],
    cards: [
      { icon: Map, title: "¿Dónde queda?", text: "En el estado Carabobo, en la costa central de Venezuela." },
      { icon: Navigation, title: "¿Cómo llegar?", text: "Se llega por carretera desde Valencia y otras ciudades del centro del país." },
      { icon: Waves, title: "¿Qué hacer?", text: "Recorrer el malecón, visitar playas cercanas y combinar historia con costa." },
      { icon: Camera, title: "¿Por qué es famoso?", text: "Por su importancia portuaria, su centro histórico y su cercanía a playas de Carabobo." },
    ],
    moments: ["Mirar el mar desde el malecón.", "Combinar paseo urbano con playa cercana.", "Ver cómo la ciudad mantiene su relación con el puerto."],
    bestMoment: "Conviene ir con clima despejado y planificar qué playa cercana visitar, porque Puerto Cabello funciona mejor como punto de salida.",
    tips: ["Define si quieres ciudad, malecón o playa cercana.", "Consulta rutas hacia Patanemo o Isla Larga.", "Lleva protección solar.", "Aprovecha para conocer el casco histórico."],
    faqs: [
      { question: "¿Puerto Cabello es una playa?", answer: "Es una ciudad costera con malecón y acceso a playas cercanas." },
      { question: "¿Está cerca de Valencia?", answer: "Sí, es una salida costera habitual desde Carabobo." },
      { question: "¿Se puede combinar con Patanemo?", answer: "Sí, muchas rutas de la zona se conectan con playas cercanas." },
    ],
  },
  "isla-de-coche": {
    title: "Una isla seca, luminosa y tranquila cerca de Margarita.",
    paragraphs: [
      "Isla de Coche ofrece playas abiertas, paisajes áridos y una sensación más pausada que la de Margarita.",
      "Es un destino para pasar el día, descansar, mirar el horizonte y disfrutar un Caribe sencillo, amplio y sin demasiada prisa.",
    ],
    cards: [
      { icon: Map, title: "¿Dónde queda?", text: "Al sur de la isla de Margarita, dentro del estado Nueva Esparta." },
      { icon: Navigation, title: "¿Cómo llegar?", text: "Se llega en embarcaciones desde Margarita, según operadores y condiciones del día." },
      { icon: Waves, title: "¿Qué hacer?", text: "Bañarse, caminar, descansar y disfrutar playas tranquilas." },
      { icon: Camera, title: "¿Por qué es famosa?", text: "Por su paisaje abierto, su cercanía a Margarita y su ambiente más sereno." },
    ],
    moments: ["Cruzar desde Margarita y ver aparecer la isla.", "Caminar una playa amplia con poca sombra.", "Disfrutar el silencio del paisaje seco frente al mar."],
    bestMoment: "Los días despejados y con mar tranquilo hacen más cómodo el traslado y mejoran la experiencia de playa.",
    tips: ["Confirma horarios de ida y vuelta.", "Lleva agua y protección solar.", "Considera que algunas zonas tienen poca sombra.", "Respeta el entorno natural de la isla."],
    faqs: [
      { question: "¿Se visita desde Margarita?", answer: "Sí, muchas excursiones salen desde Margarita." },
      { question: "¿Es tranquila?", answer: "Suele sentirse más calmada que las playas más turísticas de Margarita." },
      { question: "¿Conviene ir por el día?", answer: "Sí, es una opción común para excursiones de día." },
    ],
  },
  patanemo: {
    title: "Una bahía amplia con espíritu clásico de Carabobo.",
    paragraphs: [
      "Patanemo es una bahía conocida de Carabobo, con arena amplia, vegetación alrededor y ambiente playero muy tradicional.",
      "Es una de esas playas donde el paisaje se entiende mejor caminando: montaña, mar, arena y vida local en una misma escena.",
    ],
    cards: [
      { icon: Map, title: "¿Dónde queda?", text: "En el municipio Puerto Cabello, estado Carabobo." },
      { icon: Navigation, title: "¿Cómo llegar?", text: "Se llega por carretera desde Puerto Cabello, revisando condiciones de acceso." },
      { icon: Waves, title: "¿Qué hacer?", text: "Bañarse con precaución, caminar por la bahía y comer en la zona." },
      { icon: Camera, title: "¿Por qué es famosa?", text: "Por su bahía amplia y su conexión con las rutas costeras de Carabobo." },
    ],
    moments: ["Llegar temprano y ver la bahía despejada.", "Caminar de punta a punta mirando el relieve alrededor.", "Probar comida local después de la playa."],
    bestMoment: "Conviene revisar oleaje y acceso. En días despejados la bahía se ve más abierta y luminosa.",
    tips: ["Consulta condiciones de la vía.", "Lleva efectivo y protección solar.", "Respeta el oleaje.", "No dejes basura en la playa."],
    faqs: [
      { question: "¿Está cerca de Puerto Cabello?", answer: "Sí, es una de las playas asociadas a esa zona de Carabobo." },
      { question: "¿Es una bahía grande?", answer: "Sí, es conocida por su amplitud." },
      { question: "¿Es buena para pasar el día?", answer: "Sí, siempre revisando condiciones y servicios disponibles." },
    ],
  },
  "playa-medina": {
    title: "Palmeras, agua tranquila y belleza natural en Paria.",
    paragraphs: [
      "Playa Medina es una de las playas más hermosas del estado Sucre, reconocida por sus palmeras, arena clara y ambiente natural.",
      "Su encanto está en sentirse apartada del ruido: una playa para bajar el ritmo, mirar el agua y disfrutar el paisaje sin grandes artificios.",
    ],
    cards: [
      { icon: Map, title: "¿Dónde queda?", text: "En la península de Paria, estado Sucre." },
      { icon: Navigation, title: "¿Cómo llegar?", text: "Se llega por carretera siguiendo rutas locales de Paria, según el punto de partida." },
      { icon: Waves, title: "¿Qué hacer?", text: "Nadar, caminar entre palmeras, descansar y fotografiar el paisaje." },
      { icon: Camera, title: "¿Por qué es famosa?", text: "Por su belleza natural, palmeras y sensación de playa tropical apartada." },
    ],
    moments: ["Caminar bajo palmeras frente al mar.", "Escuchar el sonido del agua en una playa tranquila.", "Quedarse hasta que la luz suavice el paisaje."],
    bestMoment: "Los días despejados ayudan a disfrutar el color del agua y la vegetación. Conviene revisar acceso y condiciones locales.",
    tips: ["Planifica la ruta con tiempo.", "Lleva agua y protector solar.", "Respeta la vegetación y la limpieza del lugar.", "Pregunta por servicios disponibles antes de llegar."],
    faqs: [
      { question: "¿Está en Sucre?", answer: "Sí, en la península de Paria." },
      { question: "¿Es una playa natural?", answer: "Sí, destaca por su paisaje de palmeras y ambiente tranquilo." },
      { question: "¿Conviene ir preparado?", answer: "Sí, por distancia, acceso y servicios variables." },
    ],
  },
  "isla-la-tortuga": {
    title: "Caribe remoto, bancos de arena y agua cristalina.",
    paragraphs: [
      "Isla La Tortuga es uno de los destinos insulares más especiales de Venezuela: amplia, poco poblada y rodeada de aguas claras.",
      "La experiencia suele sentirse más remota que en otros lugares: mar abierto, bancos de arena, silencio y una relación directa con la naturaleza.",
    ],
    cards: [
      { icon: Map, title: "¿Dónde queda?", text: "En las Dependencias Federales de Venezuela, en el mar Caribe." },
      { icon: Navigation, title: "¿Cómo llegar?", text: "Se llega por vía marítima o excursiones organizadas, según temporada y operador." },
      { icon: Waves, title: "¿Qué hacer?", text: "Navegar, bañarse, visitar bancos de arena y disfrutar paisajes insulares." },
      { icon: Camera, title: "¿Por qué es famosa?", text: "Por su sensación remota, aguas cristalinas y playas de gran belleza." },
    ],
    moments: ["Ver aparecer la isla desde el mar.", "Caminar un banco de arena rodeado de agua clara.", "Sentir el silencio de un destino casi sin ciudad alrededor."],
    bestMoment: "Depende mucho del mar y de los operadores. Es clave confirmar clima, navegación y permisos o condiciones antes de salir.",
    tips: ["Planifica con operadores confiables.", "Lleva todo lo necesario para el día.", "Protege el entorno: no dejes residuos.", "Consulta condiciones de navegación antes del viaje."],
    faqs: [
      { question: "¿Es una isla habitada?", answer: "Tiene muy poca presencia permanente; se visita principalmente en excursiones." },
      { question: "¿Se llega fácilmente?", answer: "Requiere planificación marítima y operadores adecuados." },
      { question: "¿Vale la pena para fotos?", answer: "Sí, sus playas y bancos de arena son muy fotogénicos." },
    ],
  },
  chichiriviche: {
    title: "El punto de partida hacia los cayos de Morrocoy.",
    paragraphs: [
      "Chichiriviche es una localidad costera de Falcón muy ligada al Parque Nacional Morrocoy y a las salidas en lancha hacia sus cayos.",
      "Más que una sola playa, funciona como puerta de entrada a un paisaje de canales, embarcaderos, cayos y mar tranquilo.",
    ],
    cards: [
      { icon: Map, title: "¿Dónde queda?", text: "En el estado Falcón, dentro de las rutas del Parque Nacional Morrocoy." },
      { icon: Navigation, title: "¿Cómo llegar?", text: "Se llega por carretera y desde allí se organizan salidas en lancha hacia los cayos." },
      { icon: Waves, title: "¿Qué hacer?", text: "Tomar lanchas, visitar cayos, caminar el malecón y disfrutar el ambiente costero." },
      { icon: Camera, title: "¿Por qué es famosa?", text: "Por ser una de las entradas más conocidas a Morrocoy." },
    ],
    moments: ["Ver las lanchas salir temprano hacia los cayos.", "Caminar el borde del agua antes del paseo.", "Regresar al final de la tarde con el movimiento del pueblo costero."],
    bestMoment: "Funciona mejor saliendo temprano, cuando hay más margen para organizar lancha, destino y regreso.",
    tips: ["Acordar precio, destino y hora de regreso antes de salir.", "Llevar efectivo.", "Confirmar condiciones del parque y del mar.", "No dejar basura en cayos ni embarcaderos."],
    faqs: [
      { question: "¿Desde aquí salen lanchas a los cayos?", answer: "Sí, es uno de los puntos de salida habituales." },
      { question: "¿Es parte de Morrocoy?", answer: "Está asociado a las rutas de acceso al Parque Nacional Morrocoy." },
      { question: "¿Conviene llegar temprano?", answer: "Sí, para organizar mejor el paseo." },
    ],
  },
  macuto: {
    title: "Un balneario histórico frente al litoral central.",
    paragraphs: [
      "Macuto forma parte de la memoria costera de La Guaira: playa, paseo, historia urbana y cercanía con Caracas.",
      "Su encanto no está solo en el mar, sino en la mezcla de litoral, arquitectura, tradición de balneario y vida local.",
    ],
    cards: [
      { icon: Map, title: "¿Dónde queda?", text: "En el estado La Guaira, en el litoral central de Venezuela." },
      { icon: Navigation, title: "¿Cómo llegar?", text: "Se llega por carretera desde Caracas y otras zonas de La Guaira." },
      { icon: Waves, title: "¿Qué hacer?", text: "Caminar, mirar el mar, recorrer el litoral y combinar playa con paseo urbano." },
      { icon: Camera, title: "¿Por qué es famoso?", text: "Por su historia como balneario y su conexión directa con Caracas." },
    ],
    moments: ["Caminar cerca del mar con la montaña al fondo.", "Mirar el litoral como parte de la vida caraqueña.", "Hacer una pausa de ciudad frente al agua."],
    bestMoment: "Conviene ir en días despejados y revisar el estado del mar. Es ideal para paseos cortos desde Caracas.",
    tips: ["Planifica horarios por tráfico hacia La Guaira.", "Lleva protección solar.", "Combina el paseo con otras zonas del litoral.", "Cuida tus pertenencias en áreas concurridas."],
    faqs: [
      { question: "¿Está cerca de Caracas?", answer: "Sí, es uno de los puntos costeros más conectados con la capital." },
      { question: "¿Es un destino histórico?", answer: "Sí, tiene tradición como balneario del litoral central." },
      { question: "¿Es para pasar el día?", answer: "Sí, funciona bien para paseos cortos y recorridos costeros." },
    ],
  },
};

export function DetailPage({ item }: { item: DiscoverItem }) {
  const { language } = useLanguage();
  const isLosRoques = item.slug === "los-roques";

  if (isLosRoques) {
    return <LosRoquesGuide item={item} language={language} />;
  }

  if (item.slug === "medanos-de-coro") {
    return <MedanosGuide item={item} />;
  }

  if (item.slug === "pico-bolivar") {
    return <PicoBolivarGuide item={item} />;
  }

  const isCanaima = item.slug === "canaima";
  const isMedanos = item.slug === "medanos-de-coro";
  const isPicoBolivar = item.slug === "pico-bolivar";
  const isState = item.kind === "estado";
  const isZulia = isState && item.slug === "zulia";
  const stateGuide = isState ? stateGuides[item.slug] : undefined;
  const isCayoDeAgua = item.kind === "playa" && item.slug === "cayo-de-agua";
  const isCayoSombrero = item.kind === "playa" && item.slug === "cayo-sombrero";
  const isPlayaElAgua = item.kind === "playa" && item.slug === "playa-el-agua";
  const beachGuideFromMap = item.kind === "playa" ? beachGuides[item.slug] : undefined;
  const isFeaturedBeach = Boolean(beachGuideFromMap) || isCayoDeAgua || isCayoSombrero || isPlayaElAgua;
  const beachGuide = beachGuideFromMap ?? (isPlayaElAgua
    ? {
        title: "Una de las playas más emblemáticas de Margarita.",
        paragraphs: [
          "Playa El Agua es uno de los nombres más reconocidos de la isla de Margarita. Su fama viene de su extensión, su ambiente turístico y esa imagen clásica de una playa amplia frente al Caribe oriental.",
          "A diferencia de los cayos más silenciosos, aquí la experiencia suele ser más activa: caminar por la orilla, comer cerca del mar, alojarse en la zona y vivir una playa con movimiento, servicios y energía margariteña.",
        ],
        cards: [
          {
            icon: Map,
            title: "¿Dónde queda?",
            text: "En la isla de Margarita, estado Nueva Esparta, en la zona noreste de la isla.",
          },
          {
            icon: Navigation,
            title: "¿Cómo llegar?",
            text: "Se llega por carretera desde Porlamar, Pampatar, Juan Griego u otras zonas turísticas de Margarita.",
          },
          {
            icon: Waves,
            title: "¿Qué hacer?",
            text: "Caminar por la playa, bañarse con precaución, comer frente al mar y disfrutar el ambiente turístico.",
          },
          {
            icon: Camera,
            title: "¿Por qué es famosa?",
            text: "Por ser una de las playas más conocidas de Margarita y por su larga franja de arena frente al Caribe.",
          },
        ],
        moments: [
          "Caminar temprano por la orilla, antes de que la playa tome su ritmo más activo.",
          "Sentarse frente al mar y mirar cómo cambia el color del agua durante el día.",
          "Cerrar la tarde con una comida cerca de la playa, cuando baja el sol y el ambiente se vuelve más tranquilo.",
        ],
        bestMoment:
          "Los días despejados son ideales para disfrutar el color del mar. Conviene revisar el oleaje, porque puede variar y en algunos momentos exige más precaución al bañarse.",
        tips: [
          "Revisa las condiciones del mar antes de entrar al agua.",
          "Si quieres una experiencia más tranquila, llega temprano o evita las horas de mayor movimiento.",
          "Lleva protector solar, agua y algo ligero para caminar por la playa.",
          "Aprovecha la zona para combinar playa, comida local y recorridos por Margarita.",
        ],
        faqs: [
          {
            question: "¿Es una playa turística?",
            answer: "Sí, es una de las playas más conocidas y visitadas de Margarita.",
          },
          {
            question: "¿Hay restaurantes cerca?",
            answer: "La zona suele tener opciones de comida, hospedaje y servicios turísticos alrededor.",
          },
          {
            question: "¿El mar es siempre tranquilo?",
            answer: "No siempre. Conviene revisar las condiciones del oleaje y bañarse con precaución.",
          },
        ],
      }
    : isCayoSombrero
    ? {
        title: "Un clásico de Morrocoy entre palmeras y mar tranquilo.",
        paragraphs: [
          "Cayo Sombrero es uno de los lugares más conocidos del Parque Nacional Morrocoy, en el estado Falcón. Su atractivo está en la mezcla de arena clara, vegetación costera, palmeras y aguas generalmente calmadas.",
          "Es un cayo ideal para quienes buscan una experiencia caribeña accesible desde tierra firme: pasar el día frente al mar, caminar por la orilla, descansar bajo sombra natural y disfrutar el paisaje de Morrocoy sin complicarse demasiado.",
        ],
        cards: [
          {
            icon: Map,
            title: "¿Dónde queda?",
            text: "En el Parque Nacional Morrocoy, frente a la costa del estado Falcón.",
          },
          {
            icon: Navigation,
            title: "¿Cómo llegar?",
            text: "Normalmente se sale en lancha desde Chichiriviche o Tucacas, según el operador y las condiciones del día.",
          },
          {
            icon: Waves,
            title: "¿Qué hacer?",
            text: "Nadar, caminar por la playa, descansar bajo palmeras y disfrutar un día completo de mar.",
          },
          {
            icon: Camera,
            title: "¿Por qué es famoso?",
            text: "Por ser uno de los cayos más visitados de Morrocoy y por su paisaje caribeño fácil de reconocer.",
          },
        ],
        moments: [
          "Llegar temprano, cuando la playa todavía está tranquila y el agua se ve más clara.",
          "Buscar una zona con sombra entre palmeras y quedarse un rato mirando el movimiento del mar.",
          "Caminar por la orilla antes del regreso en lancha, cuando el día empieza a bajar el ritmo.",
        ],
        bestMoment:
          "Conviene revisar clima, oleaje y disponibilidad de lanchas antes de salir. Los días despejados y con poco viento hacen que el agua se vea más clara.",
        tips: [
          "Lleva agua, protector solar, gorra y algo de efectivo para servicios locales.",
          "Confirma el punto de salida y el horario de regreso con el lanchero.",
          "Respeta la vegetación, no dejes basura y evita alimentar animales.",
          "Si vas en temporada alta, sal temprano para aprovechar mejor el día.",
        ],
        faqs: [
          {
            question: "¿Se puede ir desde Chichiriviche?",
            answer: "Sí, es uno de los puntos habituales de salida hacia los cayos de Morrocoy.",
          },
          {
            question: "¿Es una playa familiar?",
            answer: "Suele ser una buena opción para pasar el día, siempre revisando condiciones del mar y servicios disponibles.",
          },
          {
            question: "¿Hay sombra natural?",
            answer: "Hay zonas con palmeras y vegetación, pero igual conviene llevar protección solar.",
          },
        ],
      }
    : {
        title: "Un paisaje de arena clara y agua turquesa.",
        paragraphs: [
          "Cayo de Agua es uno de los lugares más famosos del Archipiélago Los Roques. Su paisaje combina arena clara, aguas poco profundas y tonos turquesa que lo han convertido en una de las imágenes más reconocidas del Caribe venezolano.",
          "La experiencia gira alrededor del mar: caminar por la orilla, nadar en aguas tranquilas, contemplar bancos de arena y disfrutar un entorno natural que se siente abierto, luminoso y casi virgen.",
        ],
        cards: [
          {
            icon: Map,
            title: "¿Dónde queda?",
            text: "En el Archipiélago Los Roques, dentro de las Dependencias Federales de Venezuela.",
          },
          {
            icon: Navigation,
            title: "¿Cómo llegar?",
            text: "Normalmente se llega a Gran Roque y desde allí se toma una lancha hacia Cayo de Agua.",
          },
          {
            icon: Waves,
            title: "¿Qué hacer?",
            text: "Nadar, caminar por la orilla, descansar, hacer fotos y disfrutar aguas tranquilas.",
          },
          {
            icon: Camera,
            title: "¿Por qué es famoso?",
            text: "Por sus colores turquesa, arena blanca y una sensación de playa remota y luminosa.",
          },
        ],
        moments: [
          "Llegar sin prisa para ver cómo cambia el color del agua con la luz.",
          "Caminar por la franja de arena cuando el mar está tranquilo.",
          "Guardar unos minutos sin cámara: solo horizonte, brisa y silencio.",
        ],
        bestMoment:
          "Conviene revisar clima, viento y disponibilidad de traslados antes de ir. Los días despejados realzan mejor los colores del agua.",
        tips: [
          "Lleva agua, protector solar, gorra y lo necesario para pasar el día.",
          "No dejes basura ni retires arena, conchas o elementos naturales.",
          "Evita tocar fauna marina o caminar sobre zonas sensibles.",
          "Confirma horarios y condiciones de lancha con operadores locales.",
        ],
        faqs: [
          {
            question: "¿Se puede dormir en Cayo de Agua?",
            answer: "Generalmente se visita como paseo de día desde Gran Roque.",
          },
          {
            question: "¿Hay restaurantes?",
            answer: "Es mejor ir preparado y confirmar servicios antes del paseo.",
          },
          {
            question: "¿Es una playa para fotos?",
            answer: "Sí, es una de las imágenes más reconocibles de Los Roques.",
          },
        ],
      });
  const copy = getEditorialCopy(item);
  const heroObjectPosition = "center";
  const related = searchIndex
    .filter((entry) => entry.slug !== item.slug)
    .filter((entry) => entry.kind === item.kind || entry.region === item.region || entry.kind === "articulo")
    // Las tarjetas relacionadas llevan foto: los estados sin foto verificada no entran.
    .filter((entry) => entry.image)
    .slice(0, 3);

  return (
    <main className="bg-[#f7f4ec]">
      <section className="relative min-h-[78vh] overflow-hidden text-white">
        <Image
          src={item.image}
          alt={item.imageAlt ?? item.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: heroObjectPosition }}
          unoptimized={item.image.startsWith("http")}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/24 to-black/18" />
        <div className="container-page relative z-10 flex min-h-[78vh] items-end pb-20 pt-28">
          <div className="max-w-4xl">
            <Link href="/" className="mb-8 inline-flex rounded-full bg-white/14 px-4 py-2 text-sm font-semibold backdrop-blur-md">
              Descubre Venezuela
            </Link>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/76">{item.kicker}</p>
            <h1 className="mt-4 font-[family-name:var(--font-display)] text-6xl font-semibold leading-[0.9] md:text-8xl">{item.name}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/86">{item.description}</p>
          </div>
        </div>
      </section>

      {isFeaturedBeach ? (
        <section className="container-page py-20">
          <div className="grid gap-8 lg:grid-cols-[0.68fr_0.32fr]">
            <article className="rounded-[34px] bg-white p-8 shadow-[0_24px_70px_rgba(23,32,27,0.07)] md:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#247c8f]">
                {isLosRoques ? "Guía del archipiélago" : "Guía de playa"}
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-5xl font-semibold text-[#17201b]">
                {beachGuide.title}
              </h2>
              <div className="mt-7 space-y-6 text-lg leading-8 text-[#4d5b54]">
                {beachGuide.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              {isLosRoques && (
                <div className="mt-10 border-t border-[#e6dfd2] pt-9">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#247c8f]">Clima, biodiversidad y logística</p>
                  <h3 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-semibold text-[#17201b]">Un santuario marino para recorrer con calma.</h3>
                  <div className="mt-5 space-y-4 text-base leading-7 text-[#68726d]">
                    <p><strong className="text-[#17201b]">Un clima perfecto todo el año.</strong> Debido a su ubicación privilegiada, Los Roques goza de un clima cálido y semiárido constante, con temperaturas promedio de 28 °C y cielos despejados casi todos los días del año. Además, al encontrarse fuera de la ruta habitual de huracanes del Caribe, es un destino seguro y paradisíaco en cualquier temporada.</p>
                    <p><strong className="text-[#17201b]">Un refugio de vida marina.</strong> Sus aguas cristalinas y templadas son un laboratorio biológico viviente. El archipiélago alberga más de 60 especies de corales, cientos de tipos de peces tropicales, esponjas coloridas, estrellas de mar, delfines y mantarrayas, consolidándose como uno de los mejores destinos para el buceo y el ecoturismo marino.</p>
                    <p><strong className="text-[#17201b]">Cómo se llega.</strong> Al ser un área protegida y un parque nacional aislado, no se puede llegar en transportes masivos. Los viajeros acceden principalmente a través de vuelos comerciales de unos 35 minutos en avionetas que despegan desde Maiquetía o Margarita y aterrizan en la pequeña pista costera de Gran Roque.</p>
                  </div>
                </div>
              )}

              {!isLosRoques && (
              <div className="mt-10">
                {isLosRoques && <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#247c8f]">Información para organizar la visita</p>}
                <div className={isLosRoques ? "mt-5 divide-y divide-[#e6dfd2]" : "mt-4 grid gap-4 md:grid-cols-2"}>
                {beachGuide.cards.map((block) => {
                  const Icon = block.icon;

                  return (
                    isLosRoques ? (
                      <div key={block.title} className="flex gap-4 py-6 first:pt-0 last:pb-0">
                        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eef7f4] text-[#247c8f]">
                          <Icon size={18} />
                        </span>
                        <div>
                          <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold leading-[0.95] text-[#17201b] md:text-3xl">{block.title}</h3>
                          <p className="mt-2 max-w-xl text-[0.98rem] leading-6 text-[#68726d]">{block.text}</p>
                        </div>
                      </div>
                    ) : (
                      <div key={block.title} className="rounded-[24px] border border-[#e6dfd2] bg-[#f9faf8] p-5 md:p-6">
                        <div className="flex items-center gap-3.5">
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#247c8f] shadow-[0_10px_28px_rgba(23,32,27,0.06)]">
                            <Icon size={18} />
                          </span>
                          <h3 className="min-w-0 font-[family-name:var(--font-display)] text-[1.65rem] font-semibold leading-[0.95] text-[#17201b] md:text-[1.85rem]">
                            {block.title}
                          </h3>
                        </div>
                        <p className="mt-3 text-[0.98rem] leading-6 text-[#68726d]">{block.text}</p>
                      </div>
                    )
                  );
                })}
                </div>
              </div>
              )}
            </article>

            <aside className="space-y-5">
              {!isLosRoques && (
                <div className="rounded-[30px] border border-[#e6dfd2] bg-white p-6 shadow-[0_20px_60px_rgba(23,32,27,0.06)] md:p-7">
                  <div className="flex items-center gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e8f3ef] text-[#247c8f]">
                      <Sparkles size={20} />
                    </span>
                    <h2 className="min-w-0 font-[family-name:var(--font-display)] text-3xl font-semibold leading-[0.98] text-[#17201b] md:text-4xl">
                      Momentos que valen la pena
                    </h2>
                  </div>
                  <div className="mt-5 space-y-4 text-sm leading-6 text-[#68726d]">
                    {beachGuide.moments.map((moment) => (
                      <p key={moment}>{moment}</p>
                    ))}
                  </div>
                </div>
              )}

              <div className="rounded-[30px] border border-[#e6dfd2] bg-white p-6 md:p-7">
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eef7f4] text-[#247c8f]">
                    <Calendar size={20} />
                  </span>
                  <h2 className="min-w-0 font-[family-name:var(--font-display)] text-3xl font-semibold leading-[0.98] text-[#17201b] md:text-4xl">
                    Mejor momento
                  </h2>
                </div>
                <p className="mt-4 text-sm leading-6 text-[#68726d]">{beachGuide.bestMoment}</p>
              </div>
            </aside>
          </div>

          {isLosRoques && (
            <section className="mt-12">
              <div className="max-w-2xl">
                <h2 className="font-[family-name:var(--font-display)] text-5xl font-semibold text-[#247c8f]">Los 3 Cayos más famosos y visitados de Los Roques</h2>
                <p className="mt-4 text-lg leading-8 text-[#68726d]">Aunque el archipiélago reúne cientos de islas vírgenes, estos son los tres puntos que suelen definir un primer itinerario en Los Roques.</p>
              </div>
              <div className="mt-8 space-y-8">
                {losRoquesHighlights.map((cayo, index) => (
                  <article key={cayo.name} className="overflow-hidden rounded-[30px] bg-white shadow-[0_18px_55px_rgba(23,32,27,0.07)]">
                    {cayo.secondaryImage ? (
                      <ManualImageCarousel
                        slides={[
                          { image: cayo.image, alt: "Madrisquí, Los Roques", label: "Madrisquí" },
                          { image: cayo.secondaryImage, alt: "Francisquí, Los Roques", label: cayo.secondaryLabel },
                        ]}
                      />
                    ) : (
                      <div className="relative aspect-[16/9]">
                        <Image src={cayo.image} alt={cayo.name} fill sizes="(max-width: 1024px) 100vw, 72vw" className="object-cover" unoptimized={cayo.image.startsWith("http")} />
                      </div>
                    )}
                    <div className="p-7 md:p-9">
                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#247c8f]">Cayo {String(index + 1).padStart(2, "0")}</p>
                      <h3 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight text-[#17201b] md:text-4xl">{cayo.name}</h3>
                      <p className="mt-4 text-lg leading-8 text-[#4d5b54]">{cayo.introduction}</p>
                      <div className="mt-6 space-y-4 border-t border-[#e6dfd2] pt-6 text-[0.98rem] leading-7 text-[#68726d]">
                        <p><strong className="text-[#17201b]">Su gran atractivo:</strong> {cayo.highlight}</p>
                        <p><strong className="text-[#17201b]">El dato clave:</strong> {cayo.fact}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}

          {!isLosRoques && (
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <section className="rounded-[30px] border border-[#e6dfd2] bg-white p-6 md:p-7">
              <div className="flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eef7f4] text-[#247c8f]">
                  <ShieldCheck size={20} />
                </span>
                <h2 className="min-w-0 font-[family-name:var(--font-display)] text-3xl font-semibold leading-[0.98] text-[#17201b] md:text-4xl">
                  Consejos para visitarlo
                </h2>
              </div>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-[#68726d]">
                {beachGuide.tips.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
            </section>

            <section className="rounded-[30px] border border-[#e6dfd2] bg-white p-6 md:p-7">
              <div className="flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eef7f4] text-[#247c8f]">
                  <HelpCircle size={20} />
                </span>
                <h2 className="min-w-0 font-[family-name:var(--font-display)] text-3xl font-semibold leading-[0.98] text-[#17201b] md:text-4xl">
                  Preguntas frecuentes
                </h2>
              </div>
              <div className="mt-5 space-y-4 text-sm leading-6 text-[#68726d]">
                {beachGuide.faqs.map((faq) => (
                  <p key={faq.question}>
                    <strong className="text-[#17201b]">{faq.question}</strong> {faq.answer}
                  </p>
                ))}
              </div>
            </section>
          </div>
          )}

          {isLosRoques && (
            <section className="mt-12 max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#247c8f]">Información para organizar la visita</p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-semibold text-[#17201b]">Preguntas frecuentes</h2>
              <div className="mt-7 divide-y divide-[#e6dfd2] border-y border-[#e6dfd2]">
                {beachGuide.faqs.map((faq) => (
                  <details key={faq.question} className="group py-5">
                    <summary className="flex cursor-pointer list-none items-center gap-4 text-[#17201b] [&::-webkit-details-marker]:hidden">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eef7f4] text-[#247c8f]">
                        <HelpCircle size={18} />
                      </span>
                      <span className="font-[family-name:var(--font-display)] text-2xl font-semibold leading-[0.95] md:text-3xl">{faq.question}</span>
                      <span className="ml-auto text-2xl leading-none text-[#247c8f] transition-transform duration-200 group-open:rotate-45">+</span>
                    </summary>
                    <p className="ml-[3.25rem] mt-4 max-w-xl text-[0.98rem] leading-6 text-[#68726d]">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          )}
        </section>
      ) : isZulia ? (
        <ZuliaGuide />
      ) : isState && stateGuide ? (
        <StateGuide item={item} guide={stateGuide} />
      ) : (
        <>

      <section className={`container-page grid gap-8 py-20 ${item.slug === "canaima" || isMedanos || isPicoBolivar || isState ? "" : "lg:grid-cols-[0.72fr_0.28fr]"}`}>
        <article className="rounded-[34px] bg-white p-8 shadow-[0_24px_70px_rgba(23,32,27,0.07)] md:p-12">
          {isCanaima ? (
            <>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#247c8f]">Historia</p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-5xl font-semibold">Historia y origen de Canaima.</h2>
              <div className="mt-7 max-w-4xl space-y-5 text-lg leading-8 text-[#4d5b54]">
                <p>Mucho antes de convertirse en parque nacional, Canaima ya era un territorio ancestral habitado por el pueblo pemón, cuyas comunidades han desarrollado durante generaciones una profunda relación con sus ríos, sabanas, selvas y tepuyes.</p>
                <p>El <strong className="font-semibold text-[#17201b]">12 de junio de 1962</strong>, el Estado venezolano creó oficialmente el Parque Nacional Canaima con el propósito de proteger este extraordinario territorio del estado Bolívar. Años después, su superficie fue ampliada hasta abarcar una enorme extensión del sureste venezolano, incluyendo hacia el este la región de <strong className="font-semibold text-[#17201b]">La Gran Sabana</strong>.</p>
                <p>Sus paisajes forman parte del antiguo <strong className="font-semibold text-[#17201b]">Escudo Guayanés</strong>, una formación geológica de enorme antigüedad. De ella emergen los tepuyes: monumentales montañas de paredes abruptas y cimas aisladas que han dado forma a algunos de los paisajes más reconocibles de Venezuela, entre ellos el <strong className="font-semibold text-[#17201b]">Auyantepuy y el Roraima</strong>.</p>
                <p>En <strong className="font-semibold text-[#17201b]">1994</strong>, la UNESCO declaró el Parque Nacional Canaima <strong className="font-semibold text-[#17201b]">Patrimonio de la Humanidad</strong>, reconociendo el excepcional valor natural de un territorio donde geología, biodiversidad y cultura se encuentran.</p>
                <p>Hoy, Canaima conserva mucho más que paisajes espectaculares: protege una parte fundamental del patrimonio natural de Venezuela y continúa siendo territorio ancestral del pueblo pemón.</p>
              </div>

              <section className="mt-11">
                <EditorialSectionHeading title="INFORMACIÓN RÁPIDA" />
                <div className="mt-7 grid gap-x-8 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
                  {canaimaQuickFacts.map((fact) => {
                    const Icon = fact.icon;
                    return (
                      <div key={fact.label} className="flex gap-4">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eef7f4] text-[#247c8f]">
                          <Icon size={18} />
                        </span>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#247c8f]">{fact.label}</p>
                          <p className="mt-1 text-sm leading-6 text-[#68726d]">{fact.value}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            </>
          ) : isState && stateGuide ? (
            <>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#247c8f]">Guia del estado</p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-5xl font-semibold text-[#17201b]">Descubre {item.name}.</h2>
              <div className="mt-7 max-w-4xl space-y-5 text-lg leading-8 text-[#4d5b54]">
                <p><strong className="text-[#17201b]">{stateGuide.capital}</strong> es la capital de {item.name}, un estado que se recorre desde su propia identidad, sus paisajes y sus ritmos locales.</p>
                <p>{stateGuide.landscape} {stateGuide.identity}</p>
              </div>

              <section className="mt-11 border-t border-[#e6dfd2] pt-9">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#247c8f]">Para empezar</p>
                <div className="mt-6 grid gap-5 md:grid-cols-3">
                  <div className="rounded-[24px] bg-[#f9faf8] p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#247c8f]">Capital</p>
                    <h3 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-semibold text-[#17201b]">{stateGuide.capital}</h3>
                  </div>
                  <div className="rounded-[24px] bg-[#f9faf8] p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#247c8f]">Destinos</p>
                    <h3 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-semibold text-[#17201b]">{item.places ?? "Varios"}</h3>
                    <p className="mt-1 text-sm leading-6 text-[#68726d]">lugares seleccionados para descubrir.</p>
                  </div>
                  <div className="rounded-[24px] bg-[#f9faf8] p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#247c8f]">Primera ruta</p>
                    <p className="mt-2 text-sm leading-6 text-[#68726d]">{stateGuide.route}</p>
                  </div>
                </div>
              </section>
            </>
          ) : (
          <>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#247c8f]">Guía esencial</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-5xl font-semibold">Historia, rutas y contexto</h2>
          <p className="mt-6 text-lg leading-8 text-[#4d5b54]">{copy.intro}</p>
          {!isMedanos && !isPicoBolivar && <div className="mt-10 grid gap-4 md:grid-cols-2">
            {copy.blocks.map((block) => {
              const Icon = block.icon;
              return (
                <div key={block.title} className="rounded-[24px] border border-[#e6dfd2] bg-[#f9faf8] p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#247c8f] shadow-[0_10px_28px_rgba(23,32,27,0.06)]">
                      <Icon size={18} />
                    </span>
                    <h3 className="min-w-0 font-[family-name:var(--font-display)] text-3xl font-semibold leading-none">{block.title}</h3>
                  </div>
                  <p className="mt-2 leading-7 text-[#68726d]">{block.text}</p>
                </div>
              );
            })}
          </div>}
          </>
          )}
        </article>

        {item.slug !== "canaima" && !isMedanos && !isPicoBolivar && !isState && (
        <aside className="space-y-5">
          <div className="rounded-[30px] bg-[#0f3d2e] p-7 text-white shadow-[0_24px_70px_rgba(15,61,46,0.2)]">
            <Share2 size={22} />
            <h2 className="mt-6 font-[family-name:var(--font-display)] text-4xl font-semibold">Compartir</h2>
            <p className="mt-3 text-sm leading-6 text-white/75">Guarda esta guía, envíala a tu grupo de viaje o úsala como punto de partida para armar una ruta.</p>
          </div>
          <div className="rounded-[30px] border border-[#e6dfd2] bg-white p-7">
            <h2 className="font-[family-name:var(--font-display)] text-4xl font-semibold">Lugares cercanos</h2>
            <div className="mt-5 space-y-3">
              {searchIndex.slice(0, 4).map((nearby) => (
                <Link key={`${nearby.kind}-${nearby.slug}`} href={`/${nearby.kind}/${nearby.slug}`} className="block rounded-2xl bg-[#f7f4ec] p-4 transition hover:bg-[#dce8df]">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#247c8f]">{nearby.kicker}</span>
                  <span className="mt-1 block font-semibold">{nearby.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </aside>
        )}
      </section>

      {isCanaima && <CanaimaLandmarks />}

      {isCanaima && (
        <section className="container-page space-y-6 pt-12 pb-12 md:pt-16">
          <section id="experiencias">
            <div className="max-w-3xl">
              <EditorialSectionHeading
                title="EXPERIENCIAS IMPERDIBLES"
                description="Seis formas de vivir Canaima."
              />
              <p className="mt-5 text-lg leading-8 text-[#68726d]">El paisaje cambia con cada ruta: agua, selva, roca y encuentros que se descubren a otro ritmo.</p>
            </div>
            <div className="mt-10 grid items-start gap-6 md:grid-cols-2">
              <div className="space-y-6">
                {canaimaExperiences.filter((_, index) => index % 2 === 0).map((experience) => (
                  <CanaimaExperienceCard key={experience.title} {...experience} />
                ))}
              </div>
              <div className="space-y-6">
                {canaimaExperiences.filter((_, index) => index % 2 !== 0).map((experience) => (
                  <CanaimaExperienceCard key={experience.title} {...experience} />
                ))}
              </div>
            </div>
          </section>

          <section className="grid gap-12 border-y border-[#e6dfd2] py-14 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <EditorialSectionHeading
                title="CÓMO LLEGAR"
                description="La llegada también forma parte del viaje."
              />
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <p className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[#17201b]">📍 Desde Caracas</p>
                <p className="mt-3 leading-7 text-[#68726d]">La vía habitual es tomar un vuelo hacia Canaima desde Maiquetía. La frecuencia y las conexiones cambian según la temporada, por lo que conviene coordinarlas con el hospedaje u operador.</p>
              </div>
              <div>
                <p className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[#17201b]">📍 Desde Puerto Ordaz</p>
                <p className="mt-3 leading-7 text-[#68726d]">También existen rutas aéreas desde Puerto Ordaz, una alternativa práctica para combinar Canaima con otros recorridos por el estado Bolívar.</p>
              </div>
            </div>
          </section>

          <section>
            <div className="max-w-2xl">
              <EditorialSectionHeading
                title="MEJOR ÉPOCA PARA VISITAR"
                description="Dos maneras de ver el parque."
              />
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <article className="rounded-[24px] border border-[#e6dfd2] bg-white p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#247c8f]">Temporada seca</p>
                <p className="mt-3 text-lg leading-8 text-[#68726d]">Suele ofrecer días más despejados y recorridos más cómodos a pie. El caudal de algunos saltos puede sentirse más contenido.</p>
              </article>
              <article className="rounded-[24px] border border-[#e6dfd2] bg-white p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#247c8f]">Temporada de lluvias</p>
                <p className="mt-3 text-lg leading-8 text-[#68726d]">Los ríos y las caídas de agua ganan fuerza, mientras el clima puede modificar horarios y recorridos. Es una experiencia más húmeda e intensa.</p>
              </article>
            </div>
          </section>

          <section className="border-y border-[#e6dfd2] py-12 md:py-14">
            <div className="max-w-3xl">
              <EditorialSectionHeading
                title="CONSEJOS PARA VIAJEROS"
                description="Viaja preparado y disfruta Canaima con respeto."
              />
            </div>
            <ul className="mt-7 max-w-4xl">
              {[
                ["☀️", "Protector solar", "El sol puede ser intenso incluso cuando el cielo está nublado."],
                ["🦟", "Repelente", "Especialmente útil durante excursiones por zonas de selva y agua."],
                ["💵", "Algo de efectivo", "Muchos servicios se reservan y pagan previamente, pero es recomendable llevar efectivo para pequeños gastos durante la estancia."],
                ["📶", "Conexión irregular", "Algunos alojamientos ofrecen internet satelital, pero la cobertura móvil y el Wi-Fi pueden ser limitados según la zona."],
                ["🌿", "Respeta el territorio", "Sigue las indicaciones de los guías, evita dejar residuos y respeta a las comunidades pemón y su entorno."],
              ].map(([emoji, title, text]) => (
                <li key={title} className="flex gap-3 py-2.5 md:py-3">
                  <span className="mt-0.5 text-base leading-6" aria-hidden="true">{emoji}</span>
                  <p className="text-[0.96rem] leading-6 text-[#68726d]">
                    <span className="font-semibold text-[#17201b]">{title}.</span>{" "}
                    {text}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section className="max-w-4xl">
            <EditorialSectionHeading title="PREGUNTAS FRECUENTES" description="Antes de partir." />
            <div className="mt-7 divide-y divide-[#e6dfd2] border-y border-[#e6dfd2]">
              {canaimaFaqs.map((question) => {
                const Icon = question.icon;
                return (
                  <details key={question.title} className="group py-5">
                    <summary className="flex cursor-pointer list-none items-center gap-4 text-[#17201b] [&::-webkit-details-marker]:hidden">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eef7f4] text-[#247c8f]"><Icon size={18} /></span>
                      <span className="font-[family-name:var(--font-display)] text-2xl font-semibold leading-[0.95] md:text-3xl">{question.title}</span>
                      <span className="ml-auto text-2xl leading-none text-[#247c8f] transition-transform duration-200 group-open:rotate-45">+</span>
                    </summary>
                    <p className="ml-[3.25rem] mt-4 max-w-xl text-[0.98rem] leading-6 text-[#68726d]">{question.text}</p>
                  </details>
                );
              })}
            </div>
          </section>

          {false && (
          <section>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#247c8f]">Destinos relacionados</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-semibold text-[#17201b]">Sigue explorando el sur de Venezuela.</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                { name: "Salto Ángel", href: "#experiencias", text: "El gran símbolo de Canaima." },
                { name: "Gran Sabana", href: "/estado/bolivar", text: "Rutas abiertas entre sabana y tepuyes." },
                { name: "Monte Roraima", href: "/estado/bolivar", text: "Una expedición hacia la cima." },
                { name: "Delta del Orinoco", href: "/estado/delta-amacuro", text: "Agua, manglar y selva." },
              ].map((destination) => (
                <Link key={destination.name} href={destination.href} className="group rounded-[22px] border border-[#e6dfd2] bg-white p-6 transition hover:-translate-y-1 hover:border-[#9bc2ca]">
                  <span className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[#17201b]">{destination.name}</span>
                  <span className="mt-2 block text-sm leading-6 text-[#68726d]">{destination.text}</span>
                  <ArrowUpRight className="mt-5 text-[#247c8f] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={18} />
                </Link>
              ))}
            </div>
          </section>
          )}

          <PhotoCredits className="max-w-3xl">
            <p className="mt-3">Imágenes de Wikimedia Commons con licencias reutilizables: Salto Ángel, Laguna de Canaima, Salto El Sapo, tepuy desde avión, curiara en Laguna de Canaima y Gran Sabana. Consulta cada archivo para su atribución y licencia completa.</p>
          </PhotoCredits>
        </section>
      )}

      {false && item.slug === "canaima" && (
        <section className="container-page pb-20">
          <section className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#247c8f]">La Gran Sabana</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-5xl font-semibold text-[#17201b]">¿Qué es la Gran Sabana?</h2>
            <div className="mt-5 space-y-5 text-lg leading-8 text-[#68726d]">
              <p>Es una gran región de llanuras, ríos, cascadas y tepuyes situada en el sector oriental de Canaima. Sus carreteras y paisajes abiertos conectan comunidades pemón con algunos de los perfiles más emblemáticos del parque.</p>
              <p>Roraima y Kukenán se elevan sobre este horizonte de sabana; hacia el oeste, el paisaje se vuelve más selvático y conduce a la laguna de Canaima y al Auyantepuy.</p>
            </div>
          </section>

          <div className="mt-14 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#247c8f]">Los tepuyes</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-5xl font-semibold text-[#17201b]">Tepuyes de Venezuela: los 3 más famosos y visitados.</h2>
            <p className="mt-5 text-lg leading-8 text-[#68726d]">En el Parque Nacional Canaima existen más de 100 tepuyes. La mayoría son mesetas de roca aisladas, con paredes verticales y un acceso muy limitado. Tres de ellas destacan por sus récords, su historia y por ser grandes referentes para quienes viajan a la Gran Sabana.</p>
            <p className="mt-5 text-base font-semibold text-[#247c8f]">Aquí te dejamos los tres más conocidos.</p>
          </div>

          <div className="mt-8 space-y-8">
            {canaimaTepuis.map((tepuy, index) => (
              <article key={tepuy.name} className="overflow-hidden rounded-[30px] bg-white shadow-[0_18px_55px_rgba(23,32,27,0.07)]">
                <div className="relative aspect-[16/10]">
                  <Image src={tepuy.image} alt={`${tepuy.name}, Parque Nacional Canaima`} fill sizes="100vw" className="object-cover" unoptimized />
                </div>
                <div className="p-7 md:p-9">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#247c8f]">Tepuy {String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight text-[#17201b] md:text-4xl">{tepuy.name}</h3>
                  <p className="mt-4 text-lg leading-8 text-[#4d5b54]">{tepuy.introduction}</p>
                  <details className="group mt-6 border-y border-[#e6dfd2] py-5">
                    <summary className="flex cursor-pointer list-none items-center gap-4 text-[#17201b] [&::-webkit-details-marker]:hidden">
                      <span className="font-[family-name:var(--font-display)] text-2xl font-semibold leading-[0.95]">Ver información completa</span>
                      <span className="ml-auto text-2xl leading-none text-[#247c8f] transition-transform duration-200 group-open:rotate-45">+</span>
                    </summary>
                    <dl className="mt-5 space-y-4 text-[0.98rem] leading-7 text-[#68726d]">
                      <div><dt className="font-semibold text-[#17201b]">Su gran récord</dt><dd>{tepuy.record}</dd></div>
                      <div><dt className="font-semibold text-[#17201b]">Historia</dt><dd>{tepuy.history}</dd></div>
                      <div><dt className="font-semibold text-[#17201b]">Dato curioso</dt><dd>{tepuy.curiosity}</dd></div>
                      <div><dt className="font-semibold text-[#17201b]">Cómo se visita</dt><dd>{tepuy.visit}</dd></div>
                    </dl>
                  </details>
                </div>
              </article>
            ))}
          </div>

          <section className="mt-12 py-10">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#247c8f]">Cine y tepuyes</p>
            <h2 className="mt-3 max-w-4xl font-[family-name:var(--font-display)] text-4xl font-semibold text-[#17201b]">Películas de Hollywood inspiradas en los tepuyes.</h2>
            <p className="mt-5 max-w-4xl text-lg leading-8 text-[#68726d]">La majestuosidad de los tepuyes ha cruzado fronteras y ha servido como inspiración visual o escenario real para producciones del cine internacional.</p>

            <div className="mt-8 max-w-3xl">
              <p className="pt-6 text-sm font-semibold text-[#247c8f]">Algunas de ellas son:</p>
              <ol className="mt-2 divide-y divide-[#e6dfd2]">
                {[
                  "Up: Una aventura de altura",
                  "Point Break / Sin límites",
                  "El mundo perdido",
                  "Aracnofobia",
                  "Dinosaurio",
                ].map((title, index) => (
                  <li key={title} className="flex items-baseline gap-5 py-5">
                    <span className="w-8 font-[family-name:var(--font-display)] text-2xl font-semibold text-[#247c8f]">{index + 1}</span>
                    <span className="font-[family-name:var(--font-display)] text-2xl font-semibold leading-tight text-[#17201b]">{title}</span>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="mt-12 max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#247c8f]">Información para organizar la visita</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-semibold text-[#17201b]">Preguntas frecuentes.</h2>
            <div className="mt-7 divide-y divide-[#e6dfd2] border-y border-[#e6dfd2]">
              {canaimaPracticalQuestions.map((question) => {
                const Icon = question.icon;

                return (
                  <details key={question.title} className="group py-5">
                    <summary className="flex cursor-pointer list-none items-center gap-4 text-[#17201b] [&::-webkit-details-marker]:hidden">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eef7f4] text-[#247c8f]">
                        <Icon size={18} />
                      </span>
                      <span className="font-[family-name:var(--font-display)] text-2xl font-semibold leading-[0.95] md:text-3xl">{question.title}</span>
                      <span className="ml-auto text-2xl leading-none text-[#247c8f] transition-transform duration-200 group-open:rotate-45">+</span>
                    </summary>
                    <p className="ml-[3.25rem] mt-4 max-w-xl text-[0.98rem] leading-6 text-[#68726d]">{question.text}</p>
                  </details>
                );
              })}
            </div>
          </section>
        </section>
      )}

      {item.slug !== "canaima" && (
      <>
      {!isMedanos && !isPicoBolivar && (
      <section className="container-page pb-20">
        <div className="grid gap-5 md:grid-cols-3">
          {gallery.slice(0, 3).map((image) => (
            <div key={image.src} className="relative h-80 overflow-hidden rounded-[30px]">
              <Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
            </div>
          ))}
        </div>
      </section>
      )}

      {!isMedanos && !isPicoBolivar && (
      <section className="container-page pb-28">
        <h2 className="font-[family-name:var(--font-display)] text-5xl font-semibold">Artículos relacionados</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {related.map((entry) => (
            <Link key={`${entry.kind}-${entry.slug}`} href={`/${entry.kind}/${entry.slug}`} className="group overflow-hidden rounded-[28px] bg-white shadow-[0_18px_55px_rgba(23,32,27,0.07)]">
              <div className="relative h-56">
                <Image src={entry.image} alt={entry.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#247c8f]">{entry.kicker}</p>
                <h3 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-semibold">{entry.name}</h3>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0f3d2e]">
                  Leer más <ArrowUpRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      )}

      </>
      )}
        </>
      )}
    </main>
  );
}
