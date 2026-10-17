import type { StateGuideData } from "@/lib/states/types";

/*
 * Guía editorial de Yaracuy. Todavía no existe una fotografía verificada del estado en el
 * proyecto, por lo que el hero queda en `null` y ninguna sección lleva foto: la página se
 * sostiene solo con texto hasta que se incorporen imágenes correctas.
 */
export const yaracuy: StateGuideData = {
  slug: "yaracuy",
  name: "Yaracuy",
  heroKicker: "Centro-occidente de Venezuela",
  heroTagline: "Valle de caña, montaña y devoción.",
  hero: { src: "/images/commons/yaracuy-san-felipe.jpg", alt: "La avenida Caracas de San Felipe, con la sierra de Aroa cerrando la calle, estado Yaracuy", position: "center 50%" },

  intro: {
    eyebrow: "Guía de estado",
    title: "Yaracuy, el valle verde que corre entre montañas.",
    paragraphs: [
      "Yaracuy es un estado pequeño que se entiende mirando su valle: el río que le da nombre baja entre la sierra de Aroa y el macizo de Nirgua, y a su paso deja cañaverales, naranjales y pueblos agrícolas. San Felipe, la capital, vive en ese corredor verde, con el Parque Nacional Yurubí a la espalda.",
      "Es también un territorio de fe popular. En la montaña de Sorte, cerca de Chivacoa, se concentra cada año la peregrinación del culto a María Lionza, una de las expresiones religiosas más propias de Venezuela. Esta guía recorre el valle, la montaña y la memoria de un estado que suele cruzarse deprisa y merece una pausa.",
    ],
    aside: { label: "En una frase", text: "Un valle agrícola con montaña y devoción a los lados." },
  },

  know: {
    title: "CONOCE YARACUY",
    description: "Un estado de valle, abierto entre dos cordones de montaña.",
    paragraphs: [
      "Yaracuy está en el centro-occidente de Venezuela y limita con Falcón al norte, Carabobo al este, Cojedes al sur y Lara al oeste. Con unos 7.100 km² es uno de los estados menos extensos del país, repartido en catorce municipios. Su nombre viene de la lengua de los jirajaras, el pueblo que habitaba estas tierras, y se suele traducir como «coger agua de lejos».",
      "El relieve lo organizan dos alineaciones montañosas: la sierra de Aroa, al norte, y el macizo de Nirgua, al sur. Entre ambas se abre la depresión por la que corre el río Yaracuy, que con unos 140 kilómetros drena el valle hacia el golfo Triste. Por el norte del estado corre el río Aroa. El clima es tropical, con una media cercana a los 22 °C y lluvias abundantes.",
      "San Felipe, la capital, se asienta en el valle, a la sombra del Parque Nacional Yurubí. A su alrededor se reparten Cocorote, Independencia, Yaritagua, Chivacoa, Nirgua y Urachiche, pueblos y ciudades ligados a la caña de azúcar, el maíz, el café y los cítricos. Esa vocación agrícola, más la montaña y la fe popular de Sorte, resume bien lo que Yaracuy es.",
    ],
    facts: [
      { label: "Capital", value: "San Felipe" },
      { label: "Región", value: "Centro-occidente de Venezuela" },
      { label: "Paisaje", value: "Valle del río Yaracuy entre la sierra de Aroa y el macizo de Nirgua" },
      { label: "Superficie", value: "7.100 km²" },
      { label: "Clima", value: "Tropical, con unos 22 °C de media y lluvias abundantes" },
      { label: "Gentilicio", value: "Yaracuyano / yaracuyana" },
    ],
  },

  history: {
    description: "Jirajaras, minas de oro, terremoto y un valle que se rehízo.",
    paragraphs: [
      "Antes de la llegada de los europeos, el valle y sus montañas eran territorio de los jirajaras, un pueblo de cuya lengua procede, según la tradición, el nombre del río y del estado. Ese pasado sigue presente en la toponimia y en la memoria de lugares como Nirgua, donde la búsqueda de oro atrajo muy pronto a los conquistadores: allí se explotaron las minas de San Pedro de Buría y en 1569 se levantó un fuerte, el de San Juan, para sostener la presencia española en la zona.",
      "Nirgua se fundó en 1628 con el nombre de Nuestra Señora de la Victoria del Prado de Talavera, y un siglo después le llegó el turno a San Felipe: el caserío conocido como Cerrito de Cocorote recibió el título de ciudad en 1729 por real cédula de Felipe V, y en 1731 instaló su primer cabildo. Desde entonces San Felipe organizó la vida del valle, entre haciendas y caminos, con una economía que ya giraba alrededor de la tierra.",
      "El 26 de marzo de 1812, el terremoto que sacudió a buena parte de Venezuela destruyó San Felipe y dejó numerosas víctimas. La ciudad se levantó de nuevo, y hoy el Parque Histórico Arqueológico San Felipe El Fuerte conserva la memoria de aquel asentamiento colonial y de sus primeros siglos. Caminar por ese parque es una manera directa de entender que la capital yaracuyana ha tenido que rehacerse, y que su trazado actual es hijo de esa reconstrucción.",
      "En el siglo XX, Yaracuy se consolidó como un valle agrícola e industrial al paso del eje que une Barquisimeto con Valencia, y su capital se dotó de edificios modernos como la catedral de San Felipe, inaugurada en 1973 con un diseño de Erasmo Calvani. Al mismo tiempo, una expresión religiosa nacida en el campo yaracuyano, el culto a María Lionza, creció con las migraciones hacia las ciudades hasta convertirse en una de las devociones populares más extendidas del país, con Sorte como su centro.",
    ],
  },

  defines: {
    title: "LO QUE DEFINE A YARACUY",
    description: "Tres rasgos que explican su carácter.",
    panorama: { src: "/images/commons/yaracuy-sierra-de-aroa.jpg", alt: "El valle del Yaracuy con sus cultivos en primer plano y la sierra de Aroa cerrando el horizonte, vista desde Santa María", position: "center 100%" },
    items: [
      {
        name: "El valle del río Yaracuy",
        text: "Un corredor agrícola encajado entre la sierra de Aroa y el macizo de Nirgua. El río baja unos 140 kilómetros hasta el golfo Triste y, a su paso, el valle se cubre de caña de azúcar, maíz, plátano y naranjales. Es el paisaje cotidiano del estado: llano, verde y con montañas a ambos lados.",
      },
      {
        name: "Sorte y el culto a María Lionza",
        text: "En la montaña de Sorte, cerca de Chivacoa, se encuentra el centro espiritual del culto a María Lionza, una religiosidad popular que mezcla raíces indígenas, africanas y católicas. Cada 12 de octubre y en Semana Santa llegan peregrinos de todo el país. Es un lugar de fe activa, que pide respeto y discreción a quien lo visita.",
      },
      {
        name: "Montaña y bosque nublado",
        text: "Yaracuy no es solo valle. La sierra de Aroa guarda el Parque Nacional Yurubí, con bosques nublados que abastecen de agua a San Felipe, y el macizo de Nirgua levanta al sur un territorio de clima más fresco, famoso por sus naranjas y su café. Subir a cualquiera de los dos cambia la idea que uno tiene del estado.",
      },
    ],
  },

  places: {
    description: "Distintas puertas para entrar en Yaracuy.",
    items: [
      {
        name: "San Felipe y el Parque San Felipe El Fuerte",
        text: "La capital se recorre entre la plaza Bolívar, la catedral, inaugurada en 1973 y de formas modernas, y el Museo Carmelo Fernández. En la misma ciudad, el Parque Histórico Arqueológico San Felipe El Fuerte conserva la memoria de la ciudad colonial destruida por el terremoto de 1812, un paseo tranquilo para empezar el viaje.",
      },
      {
        name: "Parque de la Exótica Flora Tropical",
        text: "A las afueras de San Felipe, sobre una antigua plantación de cacao de la misión de los capuchinos, este jardín botánico reúne más de 2.500 variedades de plantas tropicales: heliconias, jengibres, bromelias y orquídeas de varios países. Un recorrido de 4,5 kilómetros pasa junto a la capilla restaurada de la Misión Nuestra Señora del Carmen.",
      },
      {
        name: "Montaña de Sorte",
        text: "Cerca de Chivacoa, el Monumento Natural Cerro María Lionza protege la montaña que es centro del culto marialioncero. Los rituales que allí se celebran, como el baile en candela del 12 de octubre, forman parte de una práctica religiosa viva: se visita con respeto, sin interrumpir las ceremonias y preguntando antes de fotografiar.",
      },
      {
        name: "Parque Nacional Yurubí",
        text: "Sobre San Felipe, en la sierra de Aroa, este parque creado en 1960 protege la cuenca del río Yurubí y sus bosques nublados, que abastecen de agua a la capital. El Parque Leonor Bernabó, dentro de sus límites, es un área recreativa y una puerta sencilla para entrar en la montaña.",
      },
      {
        name: "Nirgua",
        text: "En el macizo que lleva su nombre, a unos 800 metros de altitud, Nirgua conserva el aire de pueblo de montaña fundado en 1628. Su clima templado explica las naranjas y el café que le dan fama, y sus fiestas patronales del 25 de enero y sus carnavales son citas conocidas en toda la región.",
      },
    ],
  },

  culture: {
    description: "Caña, naranjas, fiestas de pueblo y una fe con montaña propia.",
    intro: "La cultura yaracuyana se cocina con lo que da el valle, se celebra en las fiestas patronales de sus pueblos y tiene en Sorte una de las expresiones religiosas populares más singulares de Venezuela.",
    blocks: [
      {
        label: "Gastronomía",
        title: "Sabores del valle y de la montaña.",
        items: [
          { name: "Cachapa con queso de mano", text: "Torta de maíz tierno, dulce y dorada, servida con queso fresco. Es un clásico del centro-occidente muy presente en las carreteras y mercados de Yaracuy." },
          { name: "Sancocho", text: "Sopa de gallina, carne o pescado con verduras, compartida en olla grande. Plato de toda Venezuela, asociado en Yaracuy a los paseos al río y a la montaña." },
          { name: "Papelón y dulces de caña", text: "Del cañaveral salen el papelón con limón, la bebida fresca de media tarde, y los dulces de melado. En un estado azucarero, la caña también está en la mesa." },
          { name: "Naranjas y café de Nirgua", text: "Los cítricos del macizo de Nirgua, conocidos mucho más allá del estado, se beben en jugo recién exprimido. El café de la zona completa la sobremesa." },
        ],
      },
      {
        label: "Tradiciones",
        title: "El culto a María Lionza",
        text: "Nacido en el campo yaracuyano a comienzos del siglo XX, el espiritismo marialioncero venera a María Lionza junto al Negro Felipe y al cacique Guaicaipuro, las llamadas Tres Potencias, y organiza a sus espíritus en cortes. Sorte es su centro de peregrinación y el 12 de octubre su fecha mayor. Es una religiosidad popular estudiada desde la universidad, que merece el mismo respeto que cualquier otra.",
      },
      {
        label: "Celebraciones",
        title: "Fiestas patronales y carnavales",
        text: "San Felipe celebra a su patrono, San Felipe Apóstol, en la primera semana de mayo, una tradición que se remonta a la instalación del primer cabildo en 1731. Nirgua honra a su patrona el 25 de enero y vive con intensidad sus carnavales, con coleo y bolas criollas entre las actividades tradicionales.",
      },
      {
        label: "Identidad",
        title: "Un estado que se reconoce en su valle",
        text: "Yaracuy se define por lo que produce: caña de azúcar, maíz, plátano, café y cítricos sobre un valle fértil cruzado por la autopista que une Barquisimeto con Valencia. Esa condición de lugar de paso convive con una identidad firme, hecha de pueblos agrícolas, montaña cercana y una fe popular que tiene aquí su casa.",
      },
    ],
  },

  nature: {
    description: "Bosque nublado, valle y dos ríos largos.",
    intro: "El verde de Yaracuy tiene capas: abajo, el valle cultivado por donde corre el río Yaracuy; arriba, los bosques nublados de la sierra de Aroa y las laderas frescas del macizo de Nirgua. El Parque Nacional Yurubí y el Monumento Natural Cerro María Lionza protegen dos de los rincones más valiosos de ese paisaje.",
    items: [
      { name: "Parque Nacional Yurubí", text: "Creado el 18 de marzo de 1960 en la sierra de Aroa, protege unos 237 km² de bosque nublado. Resguarda la cuenca del río Yurubí, que abastece a San Felipe, y alberga numerosas especies de aves, murciélagos y mamíferos." },
      { name: "Monumento Natural Cerro María Lionza", text: "Declarado en 1960, protege la montaña de Sorte, cerca de Chivacoa, con sus laderas boscosas y sus cursos de agua. Es a la vez espacio natural y centro de peregrinación, y su cuidado también depende de quienes lo visitan." },
      { name: "Río Yaracuy", text: "Con unos 140 kilómetros, recorre la depresión que lleva su nombre entre la sierra de Aroa y el macizo de Nirgua y desemboca en el golfo Triste. Es el eje del valle agrícola y de la vida del estado." },
      { name: "Sierra de Aroa y macizo de Nirgua", text: "Los dos cordones montañosos que encierran el valle. La sierra de Aroa queda al norte, donde corre el río Aroa, de más de 130 kilómetros; el macizo de Nirgua, al sur, tiene un clima templado a unos 800 metros." },
    ],
  },

  access: {
    description: "Llegar a Yaracuy.",
    intro: "San Felipe es la referencia. El estado queda en el camino entre Barquisimeto y Valencia, lo que lo hace fácil de alcanzar por carretera.",
    routes: [
      { mode: "aire", title: "Por aire", text: "Yaracuy cuenta con el aeropuerto Subteniente Néstor Arias, en Cocorote, junto a San Felipe, usado sobre todo por vuelos privados y aeronaves pequeñas. Para vuelos comerciales, las puertas habituales son los aeropuertos de Barquisimeto y Valencia, desde donde se sigue por carretera." },
      { mode: "carretera", title: "Por carretera", text: "La Autopista Regional Cimarrón Andresote cruza el valle y forma parte del eje vial entre Barquisimeto, al oeste, y Valencia y el centro del país, al este. Es también el camino hacia Chivacoa y Sorte. Desde Falcón se entra por el norte del estado." },
      { mode: "local", title: "Dentro del estado", text: "Las distancias son cortas: San Felipe, Cocorote, Yaritagua, Chivacoa y Nirgua quedan a pocos kilómetros unos de otros, sobre el valle o en sus laderas. Para Sorte, desde Chivacoa, y para el Parque Nacional Yurubí conviene ir en vehículo propio o con transporte local acordado." },
    ],
  },

  tips: {
    description: "Claves para moverse entre el valle, la montaña y Sorte.",
    items: [
      { icon: "users", title: "Sorte se visita con respeto", text: "La montaña es un espacio religioso en uso. Pregunta antes de fotografiar, no interrumpas las ceremonias ni toques los altares, y sigue las indicaciones de quienes acompañan a los peregrinos." },
      { icon: "clock", title: "Fechas de peregrinación", text: "El 12 de octubre y la Semana Santa son las fechas de mayor afluencia en Sorte. Si buscas calma, elige otro día; si quieres conocer el culto en su momento más intenso, llega con tiempo." },
      { icon: "droplets", title: "Lluvia en la montaña", text: "Yaracuy es un estado lluvioso y el bosque nublado de Yurubí lo es aún más. Lleva calzado que agarre y un impermeable ligero, y ten cuidado con las crecidas de los ríos tras las tormentas." },
      { icon: "sun", title: "Calor en el valle", text: "En San Felipe y el valle el clima es cálido y húmedo la mayor parte del año. Reserva las caminatas para la mañana, lleva agua y protector solar, y busca la sombra de los parques." },
      { icon: "leaf", title: "El jardín botánico pide calma", text: "El Parque de la Exótica Flora Tropical se disfruta despacio: el recorrido supera los cuatro kilómetros y las colecciones de heliconias y orquídeas se aprecian mejor sin prisa. Calcula media jornada." },
      { icon: "car", title: "Un estado de paso que merece parada", text: "Muchos cruzan Yaracuy por la autopista entre Barquisimeto y Valencia sin detenerse. Con vehículo, San Felipe, Chivacoa y Nirgua están a poca distancia entre sí y permiten un desvío de uno o dos días." },
    ],
  },

  faqs: {
    description: "Lo que conviene saber antes de viajar a Yaracuy.",
    items: [
      { question: "¿Qué es el culto a María Lionza y cómo se vive en Yaracuy?", answer: "Es una religiosidad popular venezolana que venera a María Lionza, una figura de origen legendario, junto al Negro Felipe y al cacique Guaicaipuro. Mezcla elementos indígenas, africanos y católicos, y tiene en la montaña de Sorte, cerca de Chivacoa, su principal lugar de peregrinación. Quien no es devoto puede acercarse, pero como invitado y con respeto." },
      { question: "¿Cuándo conviene ir a Sorte?", answer: "Depende de lo que busques. El 12 de octubre, Día de la Resistencia Indígena, y la Semana Santa son los momentos de mayor peregrinación y de rituales como el baile en candela. El resto del año la montaña está más tranquila y permite conocer el lugar y su entorno natural con más calma." },
      { question: "¿Qué se puede hacer en San Felipe en un día?", answer: "Pasear por la plaza Bolívar y la catedral, visitar el Museo Carmelo Fernández y recorrer el Parque Histórico Arqueológico San Felipe El Fuerte por la mañana; dedicar la tarde al Parque de la Exótica Flora Tropical, a las afueras, o subir al Parque Leonor Bernabó, dentro del Parque Nacional Yurubí." },
      { question: "¿Qué se cultiva en Yaracuy?", answer: "Es un estado de vocación agrícola: caña de azúcar, maíz, plátano y cambur, café, caraotas, sorgo, aguacate y naranjas, entre otros cultivos. Nirgua es conocida por sus cítricos y su café, y los cañaverales acompañan buena parte del valle del río Yaracuy." },
      { question: "¿Cuántos días conviene dedicar a Yaracuy?", answer: "Un día alcanza para San Felipe y su jardín botánico; con dos se añade Sorte desde Chivacoa o una excursión al Parque Nacional Yurubí; con tres entra Nirgua y su clima de montaña. Como está entre Barquisimeto y Valencia, también funciona como escala de una ruta más larga por el centro-occidente." },
      { question: "¿Qué significa el nombre Yaracuy?", answer: "Es el nombre del río que atraviesa el estado y, según la tradición recogida, procede de la lengua de los jirajaras, el pueblo originario de estas tierras; se suele traducir como «coger agua de lejos». El estado tomó su nombre del río, que recorre el valle de punta a punta." },
    ],
  },

  credits: [
    { title: "Avenida Caracas, San Felipe", author: "Daniel Doffiny", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Avenida_Caracas_-_San_Felipe.jpg" },
    { title: "Macizo aroeño desde Santa María", author: "Geliersanta", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Macizo_aroe%C3%B1o_desde_Santa_Mar%C3%ADa.jpg" },
  ],

  seo: {
    title: "Yaracuy: guía de viaje de San Felipe, Sorte y el Parque Yurubí",
    description: "Guía editorial de Yaracuy: San Felipe, la montaña de Sorte y el culto a María Lionza, el Parque Nacional Yurubí, Nirgua y el valle agrícola del río Yaracuy.",
  },

  layout: { historyPhotoSide: "left", placesFirstPhotoSide: "right", cultureTone: "light" },
};
