import type { StateGuideData } from "@/lib/states/types";

const photos = {
  virgen: { src: "/images/states/trujillo.jpg", alt: "Monumento a la Virgen de la Paz visto desde abajo, con la paloma en la mano, cerca de la ciudad de Trujillo", position: "center 4%" },
};

export const trujillo: StateGuideData = {
  slug: "trujillo",
  name: "Trujillo",
  heroKicker: "Andes venezolanos",
  heroTagline: "Páramos, café y una Virgen sobre la montaña.",
  hero: { src: "/images/commons/trujillo-valera.jpg", alt: "Valera, la mayor ciudad del estado Trujillo, extendida en su valle andino", position: "center 23%" },

  intro: {
    eyebrow: "Guía de estado",
    title: "Trujillo, la montaña serena de los Andes venezolanos.",
    paragraphs: [
      "Trujillo se recorre despacio. Entre el Lago de Maracaibo y las cumbres del páramo, el estado sube por valles de café y pueblos de tejas hasta alturas donde la niebla cae por la tarde. Arriba, sobre la capital, la Virgen de la Paz observa todo el territorio; abajo, Valera mueve el comercio de los Andes.",
      "Es el rincón más discreto de la cordillera y uno de los más antiguos: la ciudad de Trujillo se fundó en 1557, Bolívar firmó aquí el Decreto de Guerra a Muerte y Boconó sigue viviendo del café y de sus huertas. Esta guía busca explicar un estado que no necesita alzar la voz para hacerse querer.",
    ],
    aside: { label: "En una frase", text: "Un estado de montaña que prefiere la calma." },
  },

  know: {
    title: "CONOCE TRUJILLO",
    description: "Dónde está, cómo es y por qué se sube despacio.",
    paragraphs: [
      "Trujillo está en el occidente de Venezuela, en el extremo nororiental de la cordillera de los Andes. Limita con Zulia y Lara al norte, con Mérida y Barinas al sur, con Portuguesa al este y con el Lago de Maracaibo al oeste, de modo que en pocos kilómetros pasa de la orilla cálida del lago a páramos de más de 4.000 metros.",
      "La cordillera lo atraviesa de suroeste a noreste y organiza el mapa: los valles del Motatán, del Boconó y del Carache concentran ciudades y cultivos, mientras la Teta de Niquitao, con 4.006 metros, marca el punto más alto del estado. Esa escalera de pisos climáticos explica el café, las hortalizas y las fresas que bajan a diario hacia los mercados.",
      "La capital es Trujillo, una ciudad pequeña y antigua encajada en un valle estrecho; Valera, más abajo y más grande, es el centro comercial y la puerta habitual. Boconó, al otro lado de la montaña, completa el trío con su aire de pueblo agrícola rodeado de bosque nublado.",
    ],
    facts: [
      { label: "Capital", value: "Trujillo" },
      { label: "Región", value: "Andes venezolanos" },
      { label: "Paisaje", value: "Valles cafetaleros, páramos y la orilla del Lago de Maracaibo" },
      { label: "Superficie", value: "7.400 km²" },
      { label: "Altitud", value: "De la orilla del lago a los 4.006 m de la Teta de Niquitao" },
      { label: "Gentilicio", value: "Trujillano / trujillana" },
    ],
  },

  history: {
    description: "Una ciudad que cambió varias veces de sitio y un decreto que cambió una guerra.",
    paragraphs: [
      "Antes de la fundación española, los valles trujillanos estaban habitados por los cuicas, un pueblo de la familia timoto-cuica emparentado culturalmente con los grupos chibchas de los Andes. Cultivaban maíz, papa y algodón en terrazas sobre las laderas, trabajaban la cerámica con destreza y se organizaban en parcialidades como los escuqueyes, los carachis o los betijoqueyes, cuyos nombres sobreviven en el mapa del estado. Su lengua se extinguió, pero su manera de habitar la montaña sigue visible en los cultivos escalonados.",
      "La ciudad de Trujillo fue fundada el 9 de octubre de 1557 por Diego García de Paredes, lo que la convierte en una de las más antiguas de Venezuela. Su primer siglo fue inquieto: entre la resistencia indígena y los movimientos sísmicos se trasladó varias veces antes de fijarse en 1570 en el valle que hoy ocupa, y de ahí viene el apodo de ciudad portátil. Boconó nació poco después, en 1563, y La Puerta en 1620, con el nombre de San Pablo de Momboy.",
      "Durante la independencia, Trujillo fue escenario de dos momentos decisivos. El 15 de junio de 1813, en plena Campaña Admirable, Simón Bolívar firmó en la ciudad el Decreto de Guerra a Muerte; pocos días después, el 2 de julio, las tropas de José Félix Ribas vencieron en el páramo de Niquitao. En noviembre de 1820, también en Trujillo, Bolívar y Pablo Morillo firmaron el armisticio y el tratado de regularización de la guerra, sellados con el abrazo de Santa Ana.",
      "Trujillo se constituyó como estado en 1863. Desde entonces su identidad se ha tejido con el café de Boconó, la devoción popular y una forma de vida rural que no ha perdido el centro. El médico José Gregorio Hernández, nacido en Isnotú en 1864 y canonizado en 2025, es hoy el trujillano más querido del país, y su pueblo natal recibe peregrinos de todas partes. Sobre la capital, desde 1983, la Virgen de la Paz resume esa mezcla de fe y montaña.",
    ],
  },

  defines: {
    title: "LO QUE DEFINE A TRUJILLO",
    description: "Tres rasgos que explican el carácter del estado.",
    panorama: { src: "/images/commons/trujillo-vista-ciudad.jpg", alt: "La ciudad de Trujillo en el fondo de su valle andino, vista desde el mirador del monumento a la Virgen de la Paz", position: "center 50%" },
    items: [
      {
        name: "La Virgen de la Paz",
        text: "Desde 1983, una figura de concreto de 46,72 metros se alza a pocos kilómetros de la capital, obra del escultor Manuel de la Fuente. Tiene cinco miradores en su interior y, en días despejados, permite ver buena parte del estado, la Sierra Nevada de Mérida y la orilla sur del Lago de Maracaibo. Es el emblema de Trujillo.",
      },
      {
        name: "El café y los pueblos altos",
        text: "El café de Boconó, las fresas y las flores de La Puerta, las papas de Jajó y Tuñame: la agricultura de montaña marca el ritmo del estado. Los pueblos que la sostienen conservan calles tranquilas, iglesias de torres claras y una hospitalidad sin prisa que convierte cualquier visita en una conversación larga.",
      },
      {
        name: "Una historia de fundaciones y tratados",
        text: "Trujillo es tierra de ciudades tempranas y de decisiones que pesaron en la independencia. Aquí se firmó el Decreto de Guerra a Muerte en 1813 y, siete años después, el armisticio que devolvió a la guerra sus reglas. Esa memoria convive con la devoción a José Gregorio Hernández, el santo nacido en Isnotú.",
      },
    ],
  },

  places: {
    description: "Una selección para entrar en Trujillo por distintas alturas.",
    items: [
      {
        name: "Monumento a la Virgen de la Paz",
        text: "A unos once kilómetros de la ciudad de Trujillo, la figura de 46,72 metros se puede recorrer por dentro hasta sus cinco miradores, desde las rodillas hasta los ojos. Conviene subir temprano, antes de que la nube de la tarde cubra el valle, para ver el estado entero extendido a los pies.",
        photo: photos.virgen,
      },
      {
        name: "Trujillo, la capital",
        text: "Pequeña y antigua, la ciudad se extiende por un valle estrecho a poco más de 800 metros de altura. La catedral, dedicada a Nuestra Señora de la Paz, y las casas del centro recuerdan su fundación en 1557 y los episodios de 1813 y 1820 que aquí se decidieron.",
        photo: null,
      },
      {
        name: "Boconó",
        text: "Al otro lado de la montaña, a 1.225 metros, Boconó vive de la agricultura y del café entre colinas verdes. Bolívar la llamó Jardín de Venezuela en 1813. El Santuario de San Alejo, el Trapiche de Los Clavo y la cercanía del Parque Nacional Guaramacal dan razones para quedarse más de un día.",
        photo: null,
      },
      {
        name: "La Puerta",
        text: "A 21 kilómetros de Valera por la carretera Trasandina, a 1.758 metros, este pueblo es una de las escapadas de montaña más habituales de los trujillanos. Fundado en 1620 como San Pablo de Momboy, cultiva flores y fresas, y por las tardes la neblina baja sobre La Lagunita.",
        photo: null,
      },
      {
        name: "Niquitao y Jajó, pueblos de páramo",
        text: "Niquitao, al pie de la Teta de Niquitao, guarda arquitectura colonial, mantecadas y vino de mora, y el recuerdo de la batalla de 1813. Jajó, en el municipio Urdaneta, es uno de los pueblos altos donde el páramo se cultiva en papas, fresas y flores.",
        photo: null,
      },
      {
        name: "Isnotú",
        text: "En el municipio Rafael Rangel, este pueblo a 873 metros de altitud es el lugar de nacimiento de José Gregorio Hernández. Su santuario recibe peregrinos de todo el país y, desde la canonización de 2025, la visita es uno de los motivos más frecuentes para viajar a Trujillo.",
        photo: null,
      },
    ],
  },

  culture: {
    description: "Cocina de montaña, fe y fiestas de pueblo.",
    intro: "La mesa trujillana es andina: trigo, papa, queso y café en preparaciones sencillas, mientras el calendario lo marcan los santos de cada pueblo y la Semana Santa.",
    blocks: [
      {
        label: "Gastronomía",
        title: "Sabores de páramo y de valle.",
        items: [
          { name: "Pisca andina", text: "Caldo de papa, cilantro, cebollín y huevo, a veces con leche y queso. Es el desayuno de los Andes venezolanos y en Trujillo se sirve con arepa recién hecha." },
          { name: "Arepa de trigo", text: "Más delgada y suave que la de maíz, acompaña casi cualquier comida en la montaña. Muy presente en toda la región andina, en los pueblos altos se amasa a diario." },
          { name: "Pastelitos andinos", text: "Empanadas pequeñas de masa de trigo, rellenas de carne, pollo o queso y fritas. Un clásico de las panaderías y los mercados de toda la cordillera." },
          { name: "Mantecadas y vino de mora", text: "En Niquitao, los bizcochos de mantecada y el vino artesanal de mora son la merienda del páramo. Un recuerdo sencillo que resume la repostería de montaña." },
        ],
      },
      {
        label: "Identidad",
        title: "El café de Boconó",
        text: "El municipio Boconó produce café, caña, maíz y frutas en laderas que suben hasta el bosque nublado. Tomarlo recién colado en una posada, con la niebla bajando, es una de las experiencias más sencillas y más fieles al carácter del estado.",
      },
      {
        label: "Celebraciones",
        title: "Santos de pueblo y Semana Santa",
        text: "Boconó celebra a San Alejo y a la Virgen del Carmen, y mantiene la tradición de los Pastores de San Miguel. En Tostós, la Semana Santa se vive con un viacrucis viviente que atrae visitantes de todo el país, mientras Isnotú recibe peregrinos durante todo el año.",
      },
      {
        label: "Tradiciones",
        title: "La devoción a José Gregorio Hernández",
        text: "El médico de Isnotú, nacido en 1864 y canonizado el 19 de octubre de 2025, es el trujillano más reconocido del país. Su santuario y la devoción popular que lo acompaña desde hace décadas convierten a su pueblo natal en un destino de peregrinación que no distingue entre creyentes y curiosos.",
      },
    ],
  },

  nature: {
    description: "Bosque nublado, páramos y la orilla del lago.",
    intro: "Trujillo concentra en poco espacio varios pisos de montaña: tierras cálidas junto al Lago de Maracaibo, valles templados donde crece el café, bosques nublados cargados de orquídeas y helechos y, por encima de los 3.000 metros, páramos de frailejones con lagunas de origen glaciar. Varias áreas protegidas resguardan lo esencial.",
    items: [
      { name: "Parque Nacional Guaramacal", text: "Creado en 1988 entre Trujillo y Portuguesa, protege unos 215 km² de bosque nublado y páramo junto a Boconó. Alberga al oso frontino y más de 150 especies de aves, y guarda la laguna de Los Cedros." },
      { name: "Teta de Niquitao", text: "El punto más alto del estado, con 4.006 metros, preside un monumento natural de más de 33.000 hectáreas creado en 1996: frailejones, lagunas como la de la Teta y el Arenal, oso frontino y conejo de páramo." },
      { name: "Parque Nacional Dinira", text: "Compartido con Lara y Portuguesa desde 1988, protege más de 450 km² de montaña entre 1.200 y 3.500 metros y las cabeceras del río Tocuyo. Bosques, páramos y una fauna que incluye oso frontino, venado y tapir." },
      { name: "Sierra de La Culata", text: "El parque nacional, creado en 1989 y compartido con Mérida, entra en el sur de Trujillo con paisajes de alta montaña: frailejones, arbustos de páramo y temperaturas que pueden bajar de cero por la noche." },
      { name: "Los ríos de la cordillera", text: "El Motatán, el Boconó, el Carache y el Castán nacen en la montaña y abren los valles donde vive la mayoría de los trujillanos. Sus orillas concentran los cultivos de café, caña y hortalizas que definen el paisaje." },
    ],
  },

  access: {
    description: "Llegar a Trujillo.",
    intro: "Valera es la puerta habitual; desde allí, la carretera sube a la capital, a La Puerta y, cruzando la montaña, a Boconó.",
    routes: [
      { mode: "aire", title: "Por aire", text: "El Aeropuerto Antonio Nicolás Briceño, en Carvajal, junto a Valera, es la entrada aérea del estado. Su operación comercial ha variado en los últimos años, así que conviene confirmar con antelación si hay vuelos programados." },
      { mode: "carretera", title: "Por carretera", text: "Trujillo se conecta por tierra con Zulia y Lara por el norte y con Mérida por el sur a través de la carretera Trasandina, que pasa por Valera y La Puerta. Desde Portuguesa y Barinas se entra por el este, hacia Boconó." },
      { mode: "local", title: "Dentro del estado", text: "Las distancias son cortas, pero las carreteras son de montaña, con curvas y tramos de niebla. Entre Valera, Trujillo y La Puerta el recorrido es breve; a Boconó o a los pueblos de páramo conviene calcular más tiempo y viajar de día." },
    ],
  },

  tips: {
    description: "La altura y la niebla marcan el ritmo del viaje.",
    items: [
      { icon: "mountain", title: "Altitud por pisos", text: "Pasas de unos 500 metros en Valera a más de 1.700 en La Puerta y a páramos de 3.000 o más. Sube con calma y deja que el cuerpo se adapte." },
      { icon: "shirt", title: "Ropa por capas", text: "En un mismo día puede hacer calor en Valera y frío en el páramo. Lleva abrigo ligero, algo impermeable y calzado cerrado para caminar." },
      { icon: "clock", title: "Madruga para la Virgen", text: "El monumento se disfruta más con cielo despejado. Las mañanas suelen ser más claras; por la tarde la nube cubre el valle y oculta la vista." },
      { icon: "car", title: "Carreteras de montaña", text: "Curvas, niebla y tramos estrechos son parte del viaje. Conduce despacio, revisa los frenos antes de subir y evita las rutas de páramo de noche." },
      { icon: "users", title: "Respeto en los pueblos", text: "Isnotú, Niquitao o Jajó son pueblos pequeños con vida propia. Pregunta antes de fotografiar en iglesias y procesiones, y compra lo que comes a quien lo produce." },
      { icon: "leaf", title: "Parques con guía", text: "Guaramacal, Dinira y la Teta de Niquitao se visitan mejor con guías locales y con la autorización de Inparques cuando la ruta lo exija. Lleva agua y no dejes rastro." },
    ],
  },

  faqs: {
    description: "Lo que suele preguntarse antes de viajar a Trujillo.",
    items: [
      { question: "¿Cuántos días conviene dedicar a Trujillo?", answer: "Con dos días se conocen Valera, la capital y el Monumento a la Virgen de la Paz. Un tercer día permite subir a La Puerta o acercarse a Isnotú, y con cuatro o cinco se cruza la montaña hasta Boconó y el Parque Nacional Guaramacal." },
      { question: "¿Qué altura tiene el Monumento a la Virgen de la Paz?", answer: "Mide 46,72 metros y se inauguró el 21 de diciembre de 1983. Es una estructura de concreto diseñada por el escultor Manuel de la Fuente, con cinco miradores interiores, y está a unos once kilómetros de la ciudad de Trujillo." },
      { question: "¿Hace frío en Trujillo?", answer: "Depende de la altura. Valera es cálida durante todo el año; la capital y Boconó tienen un clima templado, y en La Puerta y los páramos las noches son frías. Lo razonable es vestirse por capas y llevar siempre un abrigo a mano." },
      { question: "¿Qué pasó en Trujillo durante la independencia?", answer: "En 1813, durante la Campaña Admirable, Bolívar firmó en la ciudad el Decreto de Guerra a Muerte y sus tropas vencieron en Niquitao. En noviembre de 1820 se firmaron aquí el armisticio y el tratado de regularización de la guerra con Pablo Morillo, sellados con el abrazo de Santa Ana." },
      { question: "¿Se puede visitar Isnotú sin ser peregrino?", answer: "Sí. El pueblo recibe a cualquier visitante: el santuario, la plaza dedicada al médico y las posadas y restaurantes que lo rodean funcionan todo el año. Conviene respetar el silencio en los momentos de oración y, si prefieres calma, evitar las fechas de mayor afluencia." },
      { question: "¿Dónde está el aeropuerto más cercano?", answer: "En Carvajal, junto a Valera: el Aeropuerto Antonio Nicolás Briceño. Su actividad comercial ha cambiado varias veces en los últimos años, así que confirma antes de viajar. Muchos visitantes llegan también por carretera desde Mérida, Lara o Zulia." },
    ],
  },

  credits: [{ title: "Vista de la ciudad de Trujillo", author: "Rjcastillo", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Vista_de_la_ciudad_de_Trujillo.jpg" }],

  seo: {
    title: "Trujillo: guía de la Virgen de la Paz y Boconó",
    description: "Guía editorial de Trujillo: Monumento a la Virgen de la Paz, Valera, Boconó y su café, La Puerta, Isnotú y los páramos andinos. Historia, naturaleza y consejos.",
  },

  layout: { historyPhotoSide: "left", placesFirstPhotoSide: "right", cultureTone: "light" },
};
