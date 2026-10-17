import { commonsImage as commons } from "@/lib/commons-image";
import type { StateGuideData } from "@/lib/states/types";


const photos = {
  apartaderos: { src: "/images/commons/vista-del-pueblo-de-apartaderos.jpg", alt: "Pueblo de Apartaderos en el páramo merideño, con las cúpulas del observatorio de Llano del Hato sobre la loma, estado Mérida", position: "center 40%" },
  picoEspejo: { src: "/images/merida-pico-espejo.png", alt: "Estación de Pico Espejo del teleférico Mukumbarí sobre un mar de nubes", position: "center 50%" },
  cabina: { src: commons("Teleférico del Pico Espejo.JPG"), alt: "Cabina naranja del antiguo teleférico de Mérida bajando desde la estación Pico Espejo, con cumbres nevadas de la Sierra Nevada al fondo", position: "center 50%" },
  sierra: { src: commons("Pico Bolívar, Mérida.JPG"), alt: "Pico Bolívar con restos de nieve sobre una ladera de bosque nublado, Sierra Nevada de Mérida", position: "center 25%" },
  cumbre: { src: commons("PicoBolivarMerida.JPG"), alt: "Cumbre rocosa del Pico Bolívar", position: "center 45%" },
  picoDesnudo: { src: commons("Pico Bolívar al desnudo en día soleado y despejado.jpg"), alt: "Macizo del Pico Bolívar cubierto de nieve fresca bajo un cielo azul, Sierra Nevada de Mérida", position: "center 50%" },
};

export const merida: StateGuideData = {
  slug: "merida",
  name: "Mérida",
  heroKicker: "Andes venezolanos",
  heroTagline: "Montaña, páramo, frío y tradición andina.",
  hero: { src: "/images/commons/merida-ciudad.jpg", alt: "La ciudad de Mérida en su meseta, entre las montañas de la Sierra Nevada, estado Mérida", position: "center 45%" },

  intro: {
    eyebrow: "Guía de estado",
    title: "Mérida, donde Venezuela sube a la montaña.",
    paragraphs: [
      "Mérida es el estado donde Venezuela se vuelve montaña. La Sierra Nevada levanta las cumbres más altas del país, el páramo cubre de frailejones las tierras por encima de los 3.000 metros y, en el fondo de los valles, los pueblos andinos conservan una vida de campo, de fe y de mesa caliente.",
      "La capital, a 1.630 metros, es universitaria desde hace más de dos siglos y mira hacia la sierra desde cualquier esquina. Desde ella sube el teleférico Mukumbarí, parten las carreteras del páramo y se abre el camino hacia Jají, Los Nevados o las tierras cálidas del Sur del Lago.",
    ],
    aside: { label: "En una frase", text: "Montaña alta, pueblos de páramo y una ciudad de estudiantes." },
  },

  know: {
    title: "CONOCE MÉRIDA",
    description: "Dónde está, cómo se ordena el territorio y por dónde se entra.",
    paragraphs: [
      "Mérida ocupa el corazón de los Andes venezolanos, en el occidente del país. Limita con Zulia y Trujillo al norte, con Barinas al este y con Táchira al sur y al oeste, y reúne en 11.300 km² un desnivel que va de las tierras bajas del Sur del Lago de Maracaibo a los 4.978 metros del Pico Bolívar.",
      "Dos cordilleras organizan el territorio: la Sierra Nevada, al sur del valle del río Chama, y la Sierra de La Culata, al norte. Entre ambas corre el Chama, y sobre sus laderas se escalonan los pueblos del páramo, los valles agrícolas y la ciudad de Mérida, a 1.630 metros de altitud.",
      "La capital es la puerta habitual del estado y el punto desde el que se organiza todo: el teleférico hacia Pico Espejo, la carretera Trasandina hacia Apartaderos y Mucuchíes, la ruta a Jají y la bajada hacia El Vigía, donde el clima vuelve a ser cálido.",
    ],
    facts: [
      { label: "Capital", value: "Mérida" },
      { label: "Región", value: "Andes venezolanos" },
      { label: "Paisaje", value: "Sierra Nevada, páramos, valles andinos y piedemonte hacia el Sur del Lago" },
      { label: "Superficie", value: "11.300 km²" },
      { label: "Clima", value: "Frío de montaña en el páramo, templado en los valles y cálido en las tierras bajas" },
      { label: "Gentilicio", value: "Merideño / merideña" },
      { label: "Altitud", value: "Mérida ciudad a 1.630 m; Pico Bolívar a 4.978 m" },
    ],
  },

  history: {
    description: "Terrazas indígenas, una ciudad de caballeros y una universidad en la montaña.",
    paragraphs: [
      "Mucho antes de la fundación española, las montañas merideñas estaban habitadas por los pueblos timoto-cuicas, entre ellos los timotes, los mucuchíes y los tabayes. Fueron agricultores de altura: construyeron terrazas y sistemas de riego en las laderas, cultivaron papa y maíz, trabajaron la cerámica y el tejido. Muchos nombres de lugar del páramo, como Mucuchíes, Mucubají o Mucujún, conservan todavía sus voces.",
      "En 1558 el capitán Juan Rodríguez Suárez fundó la ciudad de Mérida, que al año siguiente pasó a llamarse Santiago de los Caballeros. Creció como ciudad de paso entre el lago y los Andes y en 1622 se convirtió en sede de gobernación. En 1785 el obispo fray Juan Ramos de Lora abrió un seminario que en 1810 se transformó en universidad, una de las más antiguas de Venezuela.",
      "En 1813 Simón Bolívar cruzó estos páramos durante la Campaña Admirable; el monumento del Collado del Cóndor lo recuerda. El estado Mérida se creó el 23 de noviembre de 1863, formó parte del Gran Estado de Los Andes entre 1881 y 1899, y en el siglo XX lo transformaron dos obras: la carretera Trasandina, inaugurada en 1925, y el teleférico hacia Pico Espejo, abierto en 1960.",
      "Hoy Mérida es una ciudad universitaria rodeada de pueblos agrícolas que siembran papa y ajo en el páramo, reciben viajeros y mantienen vivas la Paradura del Niño, los Vasallos de la Candelaria y la Feria del Sol. Los glaciares que dieron nombre a la Sierra Nevada han retrocedido, pero la montaña sigue siendo el centro de la identidad merideña.",
    ],
    photo: photos.cabina,
  },

  defines: {
    title: "LO QUE DEFINE A MÉRIDA",
    description: "Tres rasgos que explican el estado de las cumbres.",
    panorama: photos.sierra,
    items: [
      {
        name: "La Sierra Nevada",
        text: "Es la cordillera de las cumbres mayores de Venezuela: el Pico Bolívar (4.978 m), el Humboldt (4.942 m), La Concha y el Bonpland superan los 4.800 metros. Protegida como parque nacional desde 1952, guarda lagunas de origen glaciar, bosques nublados y el territorio del oso andino y del cóndor.",
      },
      {
        name: "El páramo",
        text: "Por encima de los 3.000 metros el paisaje se abre en pajonales y frailejones. Apartaderos, a 3.505 metros, es uno de los pueblos más altos del país, y la Trasandina alcanza los 4.118 metros en el Collado del Cóndor. Es tierra de papa, ajo, niebla y temperaturas que rondan el punto de congelación.",
      },
      {
        name: "Tradición y universidad",
        text: "Mérida conjuga una vida de pueblo con una ciudad de estudiantes. La Universidad de Los Andes, heredera del seminario de 1785, marca el pulso de la capital, mientras en los valles se celebran la Paradura del Niño, los Vasallos de la Candelaria y las fiestas de San Benito, y la cocina de montaña reúne a las familias.",
      },
    ],
  },

  places: {
    description: "Montaña, páramo y pueblos: distintas maneras de entrar en Mérida.",
    items: [
      {
        name: "Teleférico Mukumbarí",
        text: "Desde la estación Barinitas, a 1.577 metros, el sistema asciende 12,5 kilómetros en cuatro tramos hasta Pico Espejo, a 4.765 metros. Inaugurado en 1960 y renovado en 2016, pasa de la ciudad al bosque nublado y al páramo hasta quedar, muchas mañanas, por encima de las nubes.",
        photo: photos.picoEspejo,
      },
      {
        name: "Pico Bolívar",
        text: "La cumbre más alta de Venezuela, a 4.978 metros, se ve de frente desde Pico Espejo. Subirla es una travesía de varios días con guías de montaña, pero contemplarla desde el teleférico o desde los senderos del parque ya forma parte del viaje. Tiene su propia guía en esta web.",
        photo: photos.cumbre,
        href: "/montana/pico-bolivar",
      },
      {
        name: "Laguna de Mucubají y Apartaderos",
        text: "A unos 3.600 metros, junto a la Trasandina, esta laguna de origen glaciar es la entrada más fácil al páramo: senderos entre frailejones hacia la Laguna Negra, paseos a caballo y un centro de visitantes. Muy cerca, Apartaderos cruza tres valles y el observatorio de Llano del Hato mira las estrellas desde 3.600 metros.",
        photo: null,
      },
      {
        name: "Jají",
        text: "A 34 kilómetros de la capital y a 1.781 metros, este pueblo fundado en 1580 fue restaurado entre 1968 y 1971 conservando su traza colonial. Sus casas de fachadas blancas y azules, la plaza con iglesia y museo y los talleres de artesanía lo convierten en la excursión clásica de media jornada.",
        photo: null,
      },
      {
        name: "Los Nevados",
        text: "A 2.711 metros, dentro del Parque Nacional Sierra Nevada, este pueblo de 1591 toma su nombre de los glaciares que hoy ya no se ven. Se llega a pie o en mula desde la estación Loma Redonda del teleférico, o por una vía de montaña que exige vehículo todoterreno y tiempo.",
        photo: null,
      },
      {
        name: "Mérida, la ciudad",
        text: "A 1.630 metros, entre los ríos Chama y Albarregas, la capital se recorre a pie: el casco central, la Universidad de Los Andes, los puestos de dulces y tejidos de Milla y una heladería célebre por sus cientos de sabores. En carnaval, la Feria del Sol llena sus calles.",
        photo: null,
      },
    ],
  },

  culture: {
    description: "Cocina de montaña, fe de pueblo y una ciudad de estudiantes.",
    intro: "La mesa merideña es caliente y sencilla, de papa, trigo, trucha, queso ahumado y dulces de leche, y el calendario gira en torno a la Paradura del Niño, la Candelaria y el carnaval de la Feria del Sol.",
    blocks: [
      {
        label: "Gastronomía",
        title: "Sabores de páramo y de valle.",
        items: [
          { name: "Pisca andina", text: "Caldo de papa con cilantro y cebollín al que suelen sumarse huevo, leche y queso. Es el desayuno de montaña por excelencia, muy presente en todos los Andes venezolanos." },
          { name: "Arepa andina", text: "A diferencia de la de maíz, se amasa con harina de trigo y un punto dulce de azúcar o papelón. Acompaña la pisca y el queso ahumado de la región." },
          { name: "Trucha", text: "Criada en las aguas frías del páramo, se sirve de muchas maneras en los restaurantes de Mucuchíes, Apartaderos y la capital. La truchicultura forma parte de la economía de la sierra." },
          { name: "Dulces abrillantados", text: "Pequeñas figuras de leche cubiertas de azúcar, quizá el dulce más conocido de Mérida. Se venden en la zona de Milla junto a tejidos y recuerdos." },
        ],
      },
      {
        label: "Tradiciones",
        title: "La Paradura del Niño",
        text: "Entre el 1 de enero y el 2 de febrero, las familias andinas levantan al Niño Jesús del pesebre con rosario, procesión, cantos y velas, y cierran la noche con bizcochuelo y vino. En Tovar y en toda Mérida es una de las citas más queridas del año.",
      },
      {
        label: "Celebraciones",
        title: "Candelaria, San Benito y la Feria del Sol",
        text: "El 2 de febrero los Vasallos de la Candelaria bailan en honor a la Virgen una danza ligada a la fertilidad de la tierra; en diciembre Mucuchíes celebra a San Benito; y en carnaval la Feria del Sol, nacida en 1969, llena la capital de desfiles, conciertos y exposiciones.",
      },
      {
        label: "Identidad",
        title: "Una ciudad universitaria",
        text: "La Universidad de Los Andes nació como seminario en 1785 y fue elevada a universidad en 1810. Sus facultades reparten la vida estudiantil por toda Mérida y explican el ambiente joven, las librerías, los cafés y la costumbre de conversar en la plaza.",
      },
    ],
  },

  nature: {
    description: "Dos sierras, cuatro parques nacionales y lagunas de hielo antiguo.",
    intro: "La naturaleza merideña se ordena en pisos: bosque cálido y ríos en las tierras bajas, selva nublada en las laderas medias, páramo de frailejones por encima de los 3.000 metros y roca y nieve ocasional en las cumbres. Cuatro parques nacionales y un monumento natural protegen ese escalón de paisajes.",
    photo: photos.picoDesnudo,
    items: [
      { name: "Parque Nacional Sierra Nevada", text: "Creado en 1952 y compartido con Barinas, abarca 276.446 hectáreas con las cumbres mayores del país, lagunas glaciares como Mucubají y Los Anteojos, y fauna como el oso andino, el cóndor y el puma." },
      { name: "Parque Nacional Sierra de La Culata", text: "Al norte del Chama, desde 1989 protege 200.400 hectáreas de páramo y bosque entre Mérida y Trujillo. Sus frailejones y el Collado del Cóndor, a 4.118 metros, se ven desde la misma Trasandina." },
      { name: "Lagunas de páramo", text: "Mucubají, la Laguna Negra, La Verde y Los Anteojos son cubetas excavadas por glaciares hace unos diez mil años. Hoy alojan truchas, reflejan frailejones y son el inicio de los senderos hacia el Pico Mucuñuque." },
      { name: "Parques del sur", text: "Tapo-Caparo, creado en 1992 entre Mérida, Barinas y Táchira, guarda bosques húmedos y ríos caudalosos; el Parque Nacional Juan Pablo Peñaloza, compartido con Táchira, protege los Páramos del Batallón y La Negra y sus lagunas." },
      { name: "Monumento Natural Laguna de Urao", text: "En Lagunillas, una laguna salada de origen tectónico declarada monumento natural en 1979. De su fondo se extraía el urao, mineral que desde tiempos indígenas se mezcla con tabaco para elaborar el chimó." },
    ],
  },

  access: {
    description: "Llegar a Mérida.",
    intro: "La capital está en un valle alto rodeado de sierras, así que llegar forma parte del paisaje: por aire se combina un aeródromo de montaña con otro de tierras bajas, y por carretera se entra siempre subiendo.",
    routes: [
      { mode: "aire", title: "Por aire", text: "Mérida cuenta con el Aeropuerto Alberto Carnevalli, dentro de la ciudad y con operaciones condicionadas por el relieve, y El Vigía, en las tierras bajas, con el Aeropuerto Internacional Juan Pablo Pérez Alfonzo, enlazado con la capital por carretera. Confirma la operación vigente antes de planificar." },
      { mode: "carretera", title: "Por carretera", text: "La carretera Trasandina entra desde Trujillo por Timotes, el Collado del Cóndor, Apartaderos y Mucuchíes, y continúa hacia Táchira por el valle del Mocotíes y Tovar. Desde Barinas se sube por el valle del Santo Domingo hasta Apartaderos, y desde el Zulia y el Sur del Lago la Panamericana llega a El Vigía." },
      { mode: "local", title: "Dentro del estado", text: "El teleférico Mukumbarí conecta la ciudad con la alta montaña en cuatro tramos. Hacia Jají, el páramo y los pueblos del valle hay transporte público y excursiones organizadas; los Pueblos del Sur y Los Nevados exigen vehículo todoterreno, mula o caminata." },
    ],
  },

  tips: {
    description: "El frío, la altura y el sol de montaña marcan el viaje.",
    items: [
      { icon: "snowflake", title: "Abrígate por capas", text: "En el páramo las temperaturas rondan el punto de congelación y cambian en minutos. Lleva abrigo, gorro y guantes incluso si en la ciudad hace templado." },
      { icon: "mountain", title: "Respeta la altura", text: "Pico Espejo está a 4.765 metros. Sube despacio, haz pausas en las estaciones intermedias y no fuerces el ritmo si sientes dolor de cabeza o mareo." },
      { icon: "sun", title: "El sol también quema en frío", text: "La radiación es intensa por la altitud aunque el aire esté helado. Protector solar, gafas y gorra son tan necesarios como el abrigo." },
      { icon: "umbrella", title: "Lluvia durante buena parte del año", text: "Los meses de lluvia traen tardes nubladas y caminos húmedos. Un impermeable ligero y calzado con buen agarre resuelven la mayor parte de las salidas." },
      { icon: "clock", title: "Madruga para ver la sierra", text: "Las cumbres suelen despejarse temprano y cubrirse de nubes hacia el mediodía. Las primeras horas son las mejores para el teleférico y las lagunas." },
      { icon: "footprints", title: "Camina con guías", text: "En el parque nacional los senderos largos se hacen con guías locales y avisando la ruta. En pueblos como Los Nevados, las mulas y sus arrieros son parte del camino." },
    ],
  },

  faqs: {
    description: "Dudas habituales antes de subir a Mérida.",
    items: [
      { question: "¿Hace mucho frío en Mérida?", answer: "Depende de la altura. La ciudad, a 1.630 metros, tiene un clima templado y agradable; en el páramo y en Pico Espejo el frío es intenso y puede nevar de forma ocasional. En El Vigía y el Sur del Lago, en cambio, el clima es cálido todo el año." },
      { question: "¿Cuántos días conviene dedicar a Mérida?", answer: "Tres días permiten conocer la ciudad, subir en el teleférico y hacer una excursión al páramo o a Jají. Una semana abre el abanico: Los Nevados, las lagunas, los pueblos del valle del Mocotíes y la vertiente cálida del estado." },
      { question: "¿Se puede ver nieve en Mérida?", answer: "Las nevadas ocurren en las cumbres más altas y, de forma ocasional, en el Collado del Cóndor, sobre todo entre finales de julio y agosto. Los antiguos glaciares de la Sierra Nevada han retrocedido mucho, así que la nieve no está garantizada en ninguna visita." },
      { question: "¿Cuál es la mejor época para viajar?", answer: "Los meses más secos suelen ofrecer cielos más despejados en la montaña y coinciden con la Paradura del Niño, la Candelaria y el carnaval de la Feria del Sol, entre diciembre y febrero. La temporada de lluvias deja el páramo más verde y con menos visitantes; en cualquier época, el clima de montaña cambia deprisa." },
      { question: "¿Qué pueblos del páramo vale la pena conocer?", answer: "Mucuchíes, a 2.983 metros, con sus fiestas de San Benito; San Rafael de Mucuchíes, a 3.080 metros; Apartaderos, a 3.505 metros, junto a la laguna de Mucubají y el observatorio; y Tabay, punto de partida de senderos hacia la Sierra Nevada." },
      { question: "¿Mérida es solo montaña?", answer: "No. Hacia el noroeste el estado baja hasta el Sur del Lago de Maracaibo, donde El Vigía, a 130 metros y con temperaturas medias de 27 °C, vive del plátano y la ganadería. Y en el sur, los Pueblos del Sur son la parte más extensa y menos poblada del territorio." },
    ],
  },

  credits: [
    { title: "Vista de la ciudad de Mérida", author: "Venex_jpb", license: "CC BY-SA 2.0", href: "https://commons.wikimedia.org/wiki/File:M%C3%A9rida3.jpg" },
    { title: "Pueblo de Apartaderos", author: "Rjcastillo", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Vista_del_Pueblo_de_Apartaderos.jpg" },
    { title: "Teleférico del Pico Espejo", author: "Ivan Carvajal", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Telef%C3%A9rico_del_Pico_Espejo.JPG" },
    { title: "Pico Bolívar, Mérida", author: "Gerson Márquez", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Pico_Bol%C3%ADvar,_M%C3%A9rida.JPG" },
    { title: "Pico Bolívar", author: "Fernando Cuartero", license: "CC BY-SA 2.5", href: "https://commons.wikimedia.org/wiki/File:PicoBolivarMerida.JPG" },
    { title: "Pico Bolívar al desnudo en día soleado y despejado", author: "ALJB", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Pico_Bol%C3%ADvar_al_desnudo_en_d%C3%ADa_soleado_y_despejado.jpg" },
  ],

  seo: {
    title: "Mérida: guía de viaje de los Andes, el páramo y el Mukumbarí",
    description: "Guía editorial de Mérida: la Sierra Nevada, el Mukumbarí, el páramo, Jají, Los Nevados y la ciudad universitaria. Historia, naturaleza, sabores y consejos.",
  },

  layout: { historyPhotoSide: "right", placesFirstPhotoSide: "left", cultureTone: "dark" },
};
