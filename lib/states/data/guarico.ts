import type { StateGuideData } from "@/lib/states/types";

const photos = {
  morros: { src: "/images/commons/guarico-morros-san-juan.jpg", alt: "Los Morros de San Juan iluminados por la luz del atardecer, con las lomas del llano a sus pies, en San Juan de los Morros, estado Guárico", position: "center 45%" },
};

export const guarico: StateGuideData = {
  slug: "guarico",
  name: "Guárico",
  heroKicker: "Llanos centrales",
  heroTagline: "Morros, sabana, arroz y joropo.",
  hero: { src: "/images/commons/guarico-san-juan-de-los-morros.jpg", alt: "San Juan de los Morros a los pies de los Morros, capital del estado Guárico", position: "center 38%" },

  intro: {
    eyebrow: "Guía de estado",
    title: "Guárico, donde la montaña se asoma al llano.",
    paragraphs: [
      "Guárico empieza donde termina la cordillera: los Morros de San Juan se levantan como una puerta de piedra y, a partir de ahí, el terreno se abre en sabanas que bajan hasta la cuenca del Orinoco. Es el llano central de Venezuela, un territorio de ganado, arrozales, ríos lentos y cielos muy anchos.",
      "Se viaja con calma: aguas termales a la salida de la capital, una catedral colonial en Calabozo, un embalse que convirtió la sequía en arroz, un pueblo que inspiró una novela y un parque nacional donde la sabana se inunda y se seca cada año. Guárico no se recorre deprisa; se va entendiendo.",
    ],
    aside: { label: "En una frase", text: "El llano que guarda la memoria del centro del país." },
  },

  know: {
    title: "CONOCE GUÁRICO",
    description: "Dónde está, cómo es y por qué se recorre de norte a sur.",
    paragraphs: [
      "Guárico ocupa el centro geográfico de Venezuela y forma, junto a Cojedes, los llanos centrales. Limita al norte con Carabobo, Aragua y Miranda, al este con Anzoátegui, al sur con Bolívar y Apure, y al oeste con Barinas y Cojedes. Con 66.400 km², es uno de los estados más extensos del país.",
      "Casi todo el territorio es plano, pero el norte conserva un borde montañoso que pertenece a la serranía del Interior. Allí se levantan los Morros de San Juan, calizas arrecifales de unos 80 millones de años que superan los 1.000 metros. Hacia el sur, los ríos Guárico, Orituco y Tiznados descienden hacia la cuenca del Orinoco.",
      "San Juan de los Morros, la capital, se asienta al pie de esas formaciones, a poca distancia de Aragua y de la región capital. Calabozo, Valle de la Pascua, Zaraza y Altagracia de Orituco completan una red de ciudades llaneras unidas por la ganadería, el arroz y una identidad que se reconoce en el joropo.",
    ],
    facts: [
      { label: "Capital", value: "San Juan de los Morros" },
      { label: "Región", value: "Llanos centrales" },
      { label: "Paisaje", value: "Sabanas, morichales, embalses y los Morros de San Juan" },
      { label: "Superficie", value: "66.400 km²" },
      { label: "Clima", value: "Tropical de sabana, con estación seca y de lluvias y una media cercana a 26 °C" },
      { label: "Gentilicio", value: "Guariqueño / guariqueña" },
    ],
  },

  history: {
    description: "Tierra de paso, de batallas y de ganado.",
    paragraphs: [
      "Antes de la llegada de los españoles, las sabanas y los ríos del actual Guárico estaban habitados por pueblos de filiación caribe, como los tamanacos y los cumanagotos, y por comunidades guamo y otomaco asentadas junto a los grandes ríos. El propio nombre del estado viene del río Guárico, una voz que, según la tradición recogida en las crónicas, significa cacique en lengua caribe. La ocupación colonial llegó por dos caminos: los hatos ganaderos y las misiones.",
      "Zaraza nació en 1645 como San Miguel de la Nueva Tarragona del Batey; Altagracia de Orituco se fundó en 1694; Calabozo, en 1724, fue obra de misioneros capuchinos que reunieron a la población indígena en torno a una villa que pronto se llamó de Todos los Santos; San Juan de los Morros se fundó en 1780. Eran pueblos de llano: ganado, casabe, comercio por los ríos y una catedral calaboceña levantada entre 1754 y 1790.",
      "Guárico fue campo de batalla de la independencia. En La Puerta, cerca de San Juan de los Morros, José Tomás Boves venció dos veces a los republicanos en 1814, y en ese mismo lugar Pablo Morillo detuvo a Bolívar en marzo de 1818, apenas semanas después de que Bolívar y Páez lo hubieran derrotado en Calabozo el 12 de febrero. Esas llanuras, con sus caballerías y sus lanzas, decidieron buena parte de la guerra en el centro del país.",
      "La provincia de Guárico se creó en 1848 al dividirse la de Caracas, y en 1864 pasó a ser estado. Calabozo ejerció de capital durante la mayor parte de ese periodo; Ortiz lo fue en dos ocasiones a finales del siglo XIX, antes de que el paludismo la vaciara y la convirtiera en el escenario de Casas muertas, la novela de Miguel Otero Silva. En 1934, Juan Vicente Gómez trasladó la capital a San Juan de los Morros, donde sigue hoy.",
    ],
  },

  defines: {
    title: "LO QUE DEFINE A GUÁRICO",
    description: "Tres rasgos que explican el carácter del estado.",
    panorama: { src: "/images/commons/guarico-morros-san-juan.jpg", alt: "Los Morros de San Juan iluminados por la luz del atardecer, con las lomas del llano a sus pies, en San Juan de los Morros, estado Guárico", position: "center 45%" },
    items: [
      {
        name: "Los Morros de San Juan",
        text: "Tres moles de caliza arrecifal que se alzan sobre la capital y se distinguen desde muy lejos. Formadas en un mar de hace unos 80 millones de años, superan los 1.000 metros y están protegidas desde 1949 como Monumento Natural Arístides Rojas. Son el emblema del estado y el primer paisaje que recibe a quien llega desde el norte.",
      },
      {
        name: "El llano y sus hatos",
        text: "Al sur de los Morros, Guárico es sabana: hatos ganaderos, caballos, garzas y un horizonte que se inunda en las lluvias y se agrieta en la sequía. El estado es uno de los principales productores de ganado bovino del país, y el trabajo de llano, la vaquería y el coleo siguen siendo parte de su vida cotidiana.",
      },
      {
        name: "El agua que ordena el año",
        text: "En Calabozo, el embalse del Guárico, terminado en 1956, cambió la historia del llano: su sistema de riego convirtió sabanas secas en arrozales y puso al estado entre los grandes productores de arroz, maíz y sorgo. El agua, escasa o abundante según el mes, marca el calendario de todo el territorio.",
      },
    ],
  },

  places: {
    description: "Una selección para entrar en Guárico desde la montaña hasta el río.",
    items: [
      {
        name: "Morros de San Juan",
        text: "Desde la ciudad salen caminatas guiadas hacia la base y las cumbres de los morros, con vistas a San Juan y al comienzo del llano. El morro más alto, el Paurario, también se conoce como Morro del Faro. Conviene salir temprano y con calzado cerrado.",
        photo: null,
      },
      {
        name: "Aguas termales de San Juan de los Morros",
        text: "A las afueras de la capital brotan aguas sulfurosas y alcalinas a unos 33 °C, conocidas desde el siglo XIX: su fama fue la razón de que Guzmán Blanco ordenara en 1874 la primera carretera hacia la ciudad. Hoy son un paseo clásico de fin de semana.",
        photo: null,
      },
      {
        name: "Calabozo y el embalse del Guárico",
        text: "La antigua capital conserva la Catedral de Todos los Santos, levantada entre 1754 y 1790, y un casco de trazado colonial. A pocos kilómetros, el embalse del Guárico extiende 230 km² de agua sobre el llano; sus orillas son punto de pesca y de atardeceres largos.",
        photo: null,
      },
      {
        name: "Parque Nacional Aguaro-Guariquito",
        text: "Al sur de Calabozo, entre los ríos Aguaro y Guariquito, el parque protege sabanas, morichales, bosques de galería y lagunas que cambian por completo entre la sequía y las lluvias. Se entra por caminos de tierra desde Calabozo o desde la vía Las Mercedes–Cabruta, siempre con guía.",
        photo: null,
      },
      {
        name: "Ortiz",
        text: "Un pueblo pequeño con una historia grande: fue capital del estado en el siglo XIX, el paludismo lo despobló y Miguel Otero Silva lo convirtió en escenario de Casas muertas. Quedan la iglesia de Santa Rosa de Lima, las ruinas y una calma que explica mejor que cualquier museo lo que fue el llano.",
        photo: null,
      },
      {
        name: "Zaraza y Valle de la Pascua",
        text: "El oriente guariqueño tiene dos centros: Zaraza, junto al río Unare, célebre por su carnaval y por la procesión del Cristo de la Salud cada 1 de enero; y Valle de la Pascua, ciudad ganadera y comercial que celebra a la Candelaria a comienzos de febrero.",
        photo: null,
      },
    ],
  },

  culture: {
    description: "Joropo de dos orillas, cocina de hato y fiestas de pueblo.",
    intro: "Guárico es un punto de encuentro: en el norte suena el joropo central con arpa de cuerdas metálicas, en el sur el joropo llanero con cuatro y bandola, y en la mesa mandan la carne, el maíz y el queso.",
    blocks: [
      {
        label: "Gastronomía",
        title: "Cocina de llano, sin adornos.",
        items: [
          { name: "Pisillo guariqueño", text: "Carne seca desmechada, de venado, chigüire o res, frita y aliñada con ajo y ají dulce. Es el plato más ligado al nombre del estado y un clásico de toda la región llanera." },
          { name: "Carne en vara", text: "Cortes de res ensartados en varas de madera y asados lentamente junto a la brasa, al modo de los hatos. Muy presente en fiestas, ferias y reuniones familiares en todo el llano." },
          { name: "Cachapa con queso de mano", text: "Torta de maíz tierno, dulce y suave, acompañada de queso de mano fresco o de cochino frito. Un desayuno compartido con el centro del país y muy querido en San Juan de los Morros." },
          { name: "Sancocho de gallina", text: "Hervido espeso de gallina con verduras y aliños, cocinado a leña en ollas grandes para muchas personas. Plato de domingo y de celebración, asociado a toda la región llanera." },
        ],
      },
      {
        label: "Música",
        title: "Un estado con dos joropos",
        text: "Al norte, en la franja que mira hacia Aragua y Miranda, se toca el joropo central o tuyero: arpa con cuerdas metálicas, maracas y un solo cantador, sin cuatro, con formas largas como la revuelta. Hacia el sur manda el joropo llanero, con arpa, cuatro, maracas y bandola, más rápido y ligado al trabajo del hato.",
      },
      {
        label: "Celebraciones",
        title: "Un calendario de pueblo",
        text: "Zaraza abre el año con la procesión del Cristo de la Salud, el 1 de enero, y en febrero celebra un carnaval reconocido en todo el país. Valle de la Pascua honra a la Candelaria a comienzos de febrero, en mayo se levantan los velorios de Cruz con versos improvisados y música, y Altagracia de Orituco celebra a San Miguel Arcángel entre finales de septiembre y comienzos de octubre.",
      },
      {
        label: "Identidad",
        title: "Llano y serranía en una misma mesa",
        text: "El guariqueño es llanero, pero de un llano que mira hacia el centro del país. Esa doble pertenencia se nota en el habla, en la música y en una tradición literaria que va de Francisco Lazo Martí, poeta de Calabozo, a las páginas que Miguel Otero Silva dedicó a Ortiz. Zaraza, por sus escritores y músicos, se ganó el apodo de Atenas del Guárico.",
      },
    ],
  },

  nature: {
    description: "Sabana, morichal y agua que va y viene.",
    intro: "El paisaje de Guárico se explica por dos estaciones. Entre mayo y octubre las lluvias inundan sabanas enteras y los ríos se desbordan en esteros; el resto del año el agua se retira, la tierra se agrieta y la fauna se concentra en las lagunas y morichales que quedan. Un mismo lugar son dos paisajes.",
    items: [
      { name: "Parque Nacional Aguaro-Guariquito", text: "Creado en 1974, es uno de los parques nacionales más extensos del país. Sabanas, dunas de arena blanca, morichales y bosques de galería entre los ríos Aguaro y Guariquito, afluentes del sistema del Orinoco." },
      { name: "Monumento Natural Arístides Rojas", text: "Los Morros de San Juan, protegidos desde 1949, son calizas arrecifales formadas bajo un mar antiguo. Sus paredes y cumbres, por encima de los 1.000 metros, dominan la capital y marcan el límite norte del llano." },
      { name: "Parque Nacional Guatopo", text: "Compartido con Miranda y creado en 1958, cubre el borde montañoso del noreste con bosque húmedo de montaña. Es refugio de jaguares, dantas y otras especies, y se alcanza desde Altagracia de Orituco." },
      { name: "Fauna de sabana", text: "Chigüires, venados caramerudos, osos hormigueros, babas y anacondas comparten las sabanas con decenas de especies de aves acuáticas, entre ellas la corocora o ibis escarlata, visible en esteros y lagunas." },
      { name: "Ríos y embalses", text: "El río Guárico, que da nombre al estado, recorre más de 500 kilómetros antes de unirse a las aguas del Apure camino del Orinoco. Su embalse en Calabozo y el de Tierra Blanca son hoy lugares de pesca y de paisaje." },
    ],
  },

  access: {
    description: "Llegar a Guárico.",
    intro: "San Juan de los Morros es la entrada más cómoda desde el centro del país; Calabozo y Valle de la Pascua organizan el acceso al llano profundo y al oriente.",
    routes: [
      { mode: "aire", title: "Por aire", text: "Guárico cuenta con aeródromos nacionales en Calabozo y Valle de la Pascua, con actividad sobre todo privada y de carga. Para la mayoría de los viajeros, la puerta aérea sigue siendo el Aeropuerto Internacional de Maiquetía, en La Guaira, y desde allí el viaje continúa por carretera." },
      { mode: "carretera", title: "Por carretera", text: "Desde Caracas, Maracay o Valencia se entra por el norte hasta San Juan de los Morros, atravesando Aragua. Desde Miranda, la carretera hacia Altagracia de Orituco cruza la zona del Parque Nacional Guatopo. Calabozo enlaza hacia el sur con Apure, y Valle de la Pascua y Zaraza conectan el estado con Anzoátegui y el oriente." },
      { mode: "local", title: "Dentro del estado", text: "Las distancias son largas y las carreteras troncales unen las ciudades principales en línea recta a través de la sabana. Para hatos, embalses y el Parque Nacional Aguaro-Guariquito hacen falta vehículo alto, guía local y tiempo: en la temporada de lluvias muchos caminos de tierra se cierran con el agua." },
    ],
  },

  tips: {
    description: "El llano se disfruta con sombra, agua y la estación correcta.",
    items: [
      { icon: "sun", title: "Sol de llano", text: "La sabana no ofrece sombra y el calor se siente desde media mañana. Sombrero, protector solar y agua en cantidad son obligatorios en cualquier salida fuera de la ciudad." },
      { icon: "umbrella", title: "Elige la estación", text: "De mayo a octubre llueve y el llano se inunda: es la mejor época para ver el agua y las aves. En la sequía la fauna se concentra en las lagunas y los caminos están abiertos." },
      { icon: "footprints", title: "Los Morros, temprano", text: "Las caminatas a los Morros de San Juan se hacen con guía y empiezan al amanecer, antes del calor. Lleva calzado cerrado: la caliza es afilada y resbala después de la lluvia." },
      { icon: "bug", title: "Mosquitos al atardecer", text: "En embalses, esteros y morichales los mosquitos aparecen al caer la tarde. Repelente y manga larga hacen más cómoda la pesca, el paseo o la espera de la fauna." },
      { icon: "users", title: "Respeto en los hatos", text: "Los hatos son fincas de trabajo. Si te reciben, sigue las indicaciones del personal, no te acerques al ganado ni a los caballos sin permiso y pregunta antes de fotografiar a las personas." },
      { icon: "camera", title: "Luz de sabana", text: "Los amaneceres y atardeceres sobre el embalse del Guárico y las sabanas abiertas ofrecen la mejor luz del día. En los Morros, la tarde dibuja mejor las paredes de caliza." },
    ],
  },

  faqs: {
    description: "Lo que suele preguntarse antes de viajar a Guárico.",
    items: [
      { question: "¿Qué son los Morros de San Juan?", answer: "Son formaciones de caliza arrecifal, restos de un mar de hace unos 80 millones de años, que se alzan sobre la capital por encima de los 1.000 metros. Están protegidos como Monumento Natural Arístides Rojas desde 1949 y se pueden recorrer a pie con guías locales." },
      { question: "¿Cuándo conviene viajar a Guárico?", answer: "Depende de lo que busques. La sequía, de noviembre a abril, facilita los caminos y concentra la fauna en lagunas y ríos; las lluvias, de mayo a octubre, inundan la sabana y la llenan de aves y de verde, aunque cierran muchos accesos de tierra." },
      { question: "¿Se pueden visitar las aguas termales?", answer: "Sí. Están a las afueras de San Juan de los Morros y son una de las salidas más tradicionales de la ciudad. Son aguas sulfurosas y alcalinas, con una temperatura media cercana a los 33 °C, conocidas y frecuentadas desde el siglo XIX." },
      { question: "¿Cómo se visita el Parque Nacional Aguaro-Guariquito?", answer: "Desde Calabozo, por caminos de tierra hacia el sur, o por la vía Las Mercedes–Cabruta. Es un territorio muy extenso, así que conviene ir con guía local, vehículo adecuado y provisiones, y elegir la época del año según lo que quieras ver." },
      { question: "¿Qué relación tiene Ortiz con Casas muertas?", answer: "Miguel Otero Silva ambientó en Ortiz su novela de 1955, que narra la decadencia de un pueblo llanero vaciado por el paludismo y la emigración hacia las zonas petroleras. Visitar Ortiz hoy es recorrer esa historia: la iglesia, las ruinas y las calles que la novela hizo célebres." },
      { question: "¿Qué diferencia hay entre el joropo central y el llanero?", answer: "El central o tuyero, que se toca en el norte de Guárico, usa un arpa con cuerdas metálicas, maracas y un solo cantador, sin cuatro, y tiene un ritmo algo más pausado. El llanero, propio del sur, suma cuatro y bandola y está más ligado a la vida del hato." },
    ],
  },

  credits: [
    { title: "San Juan de los Morros", author: "Julioreylagarto", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:SAN_JUAN_DE_LOS_MORROS_-GUARICO_02.JPG" },
    { title: "Morros de San Juan al atardecer", author: "Davevzla", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Morros_de_San_Juan.jpg" },
  ],

  seo: {
    title: "Guárico: guía de viaje de los Morros de San Juan, el llano y Calabozo",
    description: "Guía editorial de Guárico: los Morros de San Juan, las aguas termales, Calabozo y su embalse, el Parque Nacional Aguaro-Guariquito, Ortiz y el joropo.",
  },

  layout: { historyPhotoSide: "right", placesFirstPhotoSide: "left", cultureTone: "light" },
};
