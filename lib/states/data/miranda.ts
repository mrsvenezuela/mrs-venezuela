import type { StateGuideData } from "@/lib/states/types";

// San Francisco de Yare pertenece a Miranda; no reutilizar vistas del Distrito Capital.
const photos = {
  diablos: { src: "/images/commons/a-la-salida-de-la-casa-de-los-diablos.jpg", alt: "Diablos Danzantes de Yare con sus trajes rojos por una calle de San Francisco de Yare durante el Corpus Christi, estado Miranda", position: "68% 28%" },
};

export const miranda: StateGuideData = {
  slug: "miranda",
  name: "Miranda",
  heroKicker: "Centro-norte de Venezuela",
  heroTagline: "Tambor, cacao, montaña y ciudad.",
  hero: { src: "/images/commons/miranda-los-teques.jpg", alt: "Los Teques entre montañas al atardecer, capital del estado Miranda", position: "center 45%" },

  intro: {
    eyebrow: "Guía de estado",
    title: "Miranda: dónde queda y qué visitar.",
    paragraphs: [
      "Miranda está en el centro-norte de Venezuela y su capital es Los Teques. Incluye municipios del área metropolitana de Caracas, pero también los Altos Mirandinos, los valles del Tuy y la costa de Barlovento. No es un único destino: decide qué zona quieres visitar antes de elegir alojamiento y transporte.",
      "Es un territorio de contrastes cercanos. En una misma jornada se puede pasear por un casco colonial, subir a un bosque nublado o escuchar tambores frente al mar. Esta guía propone entrar en Miranda por sus distintas puertas: la ciudad, la montaña, los valles y la costa.",
    ],
    aside: { label: "En una frase", text: "Donde Caracas termina y el tambor empieza." },
  },

  know: {
    title: "CONOCE MIRANDA",
    description: "Un estado que envuelve a la capital y se asoma al Caribe.",
    paragraphs: [
      "Miranda está en el centro-norte de Venezuela, dentro de la Región Capital. Limita al norte con el Distrito Capital y La Guaira, al este con el mar Caribe, al sureste con Anzoátegui, al sur con Guárico y al oeste con Aragua. Su capital es Los Teques, en los Altos Mirandinos, a unos 1.168 metros de altitud.",
      "El relieve es montañoso y quebrado: la cordillera de la Costa recorre el norte, la serranía del Interior cierra el sur y entre ambas se abren los valles del Tuy, por donde corre el río que da nombre a la región. Hacia el este, la llanura de Barlovento baja hasta una costa de playas de fondo suave y hasta la laguna de Tacarigua.",
      "Cuatro municipios del área metropolitana de Caracas (Chacao, Baruta, El Hatillo y Sucre) forman parte del estado, lo que explica su peso demográfico y su doble condición de territorio urbano y rural. Miranda es, a la vez, ciudad, montaña, valle agrícola y litoral afrovenezolano.",
    ],
    facts: [
      { label: "Capital", value: "Los Teques" },
      { label: "Región", value: "Centro-norte de Venezuela (Región Capital)" },
      { label: "Paisaje", value: "Cordillera de la Costa, valles del Tuy, llanura de Barlovento y costa caribeña" },
      { label: "Superficie", value: "7.950 km²" },
      { label: "Clima", value: "Cálido y húmedo en Barlovento y los valles; fresco en los Altos Mirandinos" },
      { label: "Gentilicio", value: "Mirandino / mirandina" },
    ],
  },

  history: {
    description: "De Guaicaipuro a los tambores: una memoria con muchas voces.",
    paragraphs: [
      "Antes de la conquista, estas montañas y valles eran territorio de pueblos de lengua caribe: teques, caracas, mariches, quiriquires y cumanagotos, entre otros. El nombre más recordado es el de Guaicaipuro, cacique de los teques y los caracas, que encabezó la resistencia contra los españoles cuando estos buscaron oro en las serranías de Los Teques hacia 1560. Murió en 1568 en Paracotos; hoy el municipio de la capital lleva su nombre y sus restos simbólicos reposan en el Panteón Nacional desde 2001.",
      "Durante la colonia, los valles y la llanura de Barlovento se cubrieron de haciendas de cacao trabajadas por personas esclavizadas traídas de África, sobre todo de los territorios que hoy son el Congo y Angola. De esa historia dura nació una cultura propia: Curiepe fue fundado hacia 1721 por Juan del Rosario Blanco, un hombre negro libre, y los tambores que allí suenan cada junio son herencia directa de aquel tiempo. Barlovento llegó a ser llamado el granero de Caracas.",
      "Los pueblos que hoy forman parte del área metropolitana tienen raíces antiguas: Baruta se estableció en 1620, Petare fue fundado en 1621 como Dulce Nombre de Jesús de Petare, Chacao se organizó como parroquia en 1769, Los Teques nació en 1777 durante la visita pastoral del obispo Mariano Martí y El Hatillo se fundó en 1784. El estado adoptó su nombre actual en 1889, en homenaje a Francisco de Miranda, precursor de la independencia venezolana.",
      "Los Teques es la capital desde 1927, después de que esa condición pasara por Petare y Ocumare del Tuy. Durante el siglo XX el crecimiento de Caracas desbordó sus límites y convirtió a los municipios mirandinos del este en parte inseparable de la ciudad, mientras Guarenas, Guatire, los valles del Tuy y los Altos Mirandinos crecían como ciudades vecinas. Hoy Miranda reúne esa condición urbana con tradiciones reconocidas por la UNESCO: los Diablos Danzantes de Yare, la Parranda de San Pedro y los Palmeros de Chacao.",
    ],
    photo: photos.diablos,
  },

  defines: {
    title: "LO QUE DEFINE A MIRANDA",
    description: "Tres rasgos que explican su carácter.",
    items: [
      {
        name: "Barlovento y sus tambores",
        text: "En la llanura del este, entre cacaotales y playas, vive una de las expresiones más intensas de la cultura afrovenezolana. El tambor redondo, el culo e' puya, la mina y el cumaco acompañan las fiestas de San Juan Bautista cada junio, con Curiepe como epicentro, y el cacao de esta franja del litoral sigue siendo motivo de orgullo.",
      },
      {
        name: "La ciudad que también es Miranda",
        text: "Chacao, Baruta, El Hatillo y Sucre son municipios mirandinos dentro del área metropolitana de Caracas. Allí están la plaza Francia de Altamira, el bullicio comercial de Las Mercedes, el casco colonial de Petare y el pueblo de El Hatillo: buena parte de lo que se entiende como vida caraqueña ocurre, en realidad, en Miranda.",
      },
      {
        name: "Montaña, valle y laguna",
        text: "El territorio cambia deprisa: los Altos Mirandinos, con Los Teques por encima de los mil metros, ofrecen un clima fresco; los valles del Tuy reúnen pueblos agrícolas y ciudades en crecimiento; Guatopo protege selva de montaña en la serranía del Interior, y la laguna de Tacarigua abre una franja de manglares y agua salobre frente al mar.",
      },
    ],
  },

  places: {
    description: "Distintas puertas para entrar en Miranda.",
    items: [
      {
        name: "Los Teques y los Altos Mirandinos",
        text: "La capital se levanta a unos 1.168 metros, con un clima fresco poco común en el estado. El Parque Knoop, considerado el primer jardín botánico de Venezuela, la catedral de San Felipe Neri y los pueblos vecinos de San Antonio de los Altos y Carrizal forman un conjunto de montaña muy cercano a Caracas.",
      },
      {
        name: "Chacao y la falda del Waraira Repano",
        text: "Altamira y su plaza Francia son el corazón del municipio Chacao, cuyas laderas forman parte del Parque Nacional Waraira Repano, el antiguo El Ávila. Desde Sabas Nieves parte uno de los accesos más conocidos a la montaña, y en Semana Santa los Palmeros de Chacao bajan con la palma del Domingo de Ramos.",
      },
      {
        name: "Casco histórico de Petare",
        text: "Fundado en 1621 como Dulce Nombre de Jesús de Petare, el viejo pueblo conserva su iglesia, la plaza Sucre y calles estrechas en cuadrícula, rodeadas por uno de los conjuntos urbanos más poblados del área metropolitana. Es el extremo oriental de Caracas y la puerta natural hacia Barlovento y el oriente del país.",
      },
      {
        name: "El Hatillo",
        text: "Fundado en 1784, el pueblo conserva su plaza Bolívar, sus casas de colores y la iglesia de Santa Rosalía de Palermo, de estilo barroco. Es uno de los paseos de fin de semana más queridos del área metropolitana, con comercio, restaurantes y un aire de pueblo a pocos kilómetros de la ciudad.",
      },
      {
        name: "Higuerote y la costa de Barlovento",
        text: "Capital del municipio Brión y centro turístico del litoral mirandino, Higuerote es la base para recorrer las playas de fondo suave de Barlovento: Chirimena, Puerto Francés, Los Totumos o Buche. Los cacaotales de los alrededores recuerdan que este litoral forma parte de la franja cacaotera del centro del país.",
      },
      {
        name: "Laguna de Tacarigua",
        text: "Desde Tacarigua de la Laguna, junto a Río Chico, salen las embarcaciones que recorren esta laguna costera separada del mar por una larga barra de arena. Manglares, aves acuáticas, caimanes de la costa y playas donde anidan tortugas marinas hacen de este parque nacional uno de los humedales más valiosos del Caribe venezolano.",
      },
    ],
  },

  culture: {
    description: "Tambores, diablos, parrandas y cacao.",
    intro: "La cultura mirandina se escucha en los tambores de Barlovento y en el arpa tuyera, se celebra en fiestas reconocidas por la UNESCO y se saborea en el cacao y la cocina afrovenezolana del este.",
    blocks: [
      {
        label: "Gastronomía",
        title: "Sabores de Barlovento y de los valles.",
        items: [
          { name: "Cafunga", text: "Bollo de plátano con yuca, coco, papelón y anís, heredado de la cocina africana. Es uno de los sabores más identificados con Barlovento." },
          { name: "Lebranche asado", text: "Pescado de la costa barloventeña cocinado a la brasa, habitual en las mesas del litoral y en los pueblos cercanos a la laguna de Tacarigua." },
          { name: "Bañao", text: "Plátano maduro cubierto con un caramelo de papelón. Un dulce sencillo y casero, muy presente en las mesas de Barlovento." },
          { name: "Chocolate de Barlovento", text: "El cacao de la llanura del este forma parte de la franja cacaotera del litoral central. Probarlo como chocolate es una manera directa de entender la historia de la región." },
        ],
      },
      {
        label: "Música",
        title: "Tambores de Barlovento y arpa tuyera",
        text: "En el este suenan el tambor redondo, el culo e' puya, la mina y el cumaco, junto a los cantos de fulía. En los valles del Tuy, el joropo tuyero se toca con arpa de cuerdas metálicas, maracas y voz, en un estilo propio del centro-norte del país, distinto del joropo llanero.",
      },
      {
        label: "Celebraciones",
        title: "Un calendario reconocido por la UNESCO",
        text: "El jueves de Corpus Christi, los Diablos Danzantes de Yare bailan con máscaras y trajes rojos en San Francisco de Yare. El 29 de junio, Guatire y Guarenas celebran la Parranda de San Pedro, y entre el 23 y el 25 de junio Curiepe vive las fiestas de San Juan Bautista al ritmo de los tambores.",
      },
      {
        label: "Tradiciones",
        title: "Los Palmeros de Chacao",
        text: "Desde 1776, cuando el párroco José Antonio Mohedano hizo una promesa durante una epidemia, una cofradía de Chacao sube cada año a la montaña antes del Domingo de Ramos para recoger la palma que se bendice en la iglesia del pueblo. La tradición pasa de padres a hijos y fue reconocida por la UNESCO en 2019.",
      },
    ],
  },

  nature: {
    description: "Selva de montaña, bosque nublado y manglares.",
    intro: "Miranda concentra en poco espacio varios ecosistemas: el bosque nublado de la cordillera de la Costa, que abastece de agua a Caracas; la selva de montaña de Guatopo, en la serranía del Interior; los valles del río Tuy; y, frente al Caribe, la laguna de Tacarigua, con sus manglares y su barra de arena.",
    items: [
      { name: "Parque Nacional Guatopo", text: "Creado en 1958 entre Miranda y Guárico, protege más de 120.000 hectáreas de selva de montaña, entre 200 y 1.430 metros. Es un refugio importante para el jaguar, otras cinco especies de felinos y la danta." },
      { name: "Parque Nacional Laguna de Tacarigua", text: "Laguna costera de agua salobre separada del mar por una barra de arena de casi 29 kilómetros. Sus manglares albergan aves acuáticas y caimanes de la costa; en sus playas anidan cuatro especies de tortugas marinas. Sitio Ramsar desde 1996." },
      { name: "Waraira Repano y Macarao", text: "El Waraira Repano, antes El Ávila, ocupa el norte montañoso del estado desde las laderas sobre Chacao, con bosque nublado y senderos muy frecuentados. Macarao, creado en 1973, protege en los Altos Mirandinos las cuencas que aportan agua a Caracas." },
      { name: "Río Tuy", text: "Con unos 250 kilómetros, es el gran río del estado: cruza los valles que llevan su nombre, atraviesa la llanura de Barlovento y desemboca en el Caribe por el este de Miranda." },
    ],
  },

  access: {
    description: "Llegar a Miranda.",
    intro: "Si llegas en avión a Maiquetía, aterrizas en La Guaira, no en Miranda. Desde el aeropuerto acuerda el traslado hasta la dirección de tu alojamiento. Desde Caracas, Los Teques queda hacia los Altos Mirandinos; para Higuerote y Barlovento, la ruta va hacia el este por Guarenas y Guatire. No necesitas pasar por Los Teques para ir a la costa.",
    routes: [
      { mode: "aire", title: "Por aire", text: "El aeropuerto de referencia es el Internacional de Maiquetía Simón Bolívar, en La Guaira, principal puerta aérea del país y del área metropolitana de Caracas. Desde allí se entra en Miranda a través de la ciudad." },
      { mode: "carretera", title: "Por carretera", text: "Hacia el este, la Autopista Gran Mariscal de Ayacucho sale de Petare, pasa por Guarenas y Guatire y sigue hacia Caucagua, con un ramal que lleva a Higuerote. Hacia los Altos Mirandinos y los valles del Tuy, las carreteras parten del suroeste y del sur de Caracas." },
      { mode: "local", title: "Dentro del estado", text: "El Metro de Los Teques enlaza la capital con Caracas desde Las Adjuntas, y el ferrocarril Caracas–Cúa conecta la ciudad con los valles del Tuy. Para Barlovento, la laguna de Tacarigua y Guatopo conviene ir en vehículo y, en la laguna, con lancheros locales." },
    ],
  },

  tips: {
    description: "Pequeñas claves para moverse entre la ciudad, la montaña y la costa.",
    items: [
      { icon: "sun", title: "Calor y humedad en Barlovento", text: "La llanura del este es cálida y húmeda todo el año. Protector solar, sombrero y agua son imprescindibles en la costa y en los paseos por la laguna." },
      { icon: "snowflake", title: "Fresco en los Altos", text: "Los Teques y los pueblos vecinos están por encima de los mil metros y pueden amanecer fríos, sobre todo entre diciembre y marzo. Una chaqueta ligera resuelve el día." },
      { icon: "clock", title: "Fiestas con fecha fija", text: "San Juan en Curiepe (23 al 25 de junio), la Parranda de San Pedro (29 de junio) y los Diablos de Yare (jueves de Corpus Christi) llenan los pueblos: llega temprano y con paciencia." },
      { icon: "footprints", title: "Montaña con calma", text: "En el Waraira Repano y en Guatopo camina por senderos señalizados, sal temprano y lleva agua. El bosque nublado cambia de clima en pocos minutos." },
      { icon: "users", title: "Respeto en las fiestas", text: "Los tambores y las cofradías son devoción, no espectáculo. Pregunta antes de fotografiar, no interrumpas los rituales y acepta la invitación a bailar si te la hacen." },
      { icon: "waves", title: "Comprueba las condiciones del mar", text: "No todas las playas de Barlovento tienen el mismo oleaje. Consulta las condiciones del día y respeta las señales y las indicaciones locales; no des por hecho que una playa es apta para bañarse por estar en esta región." },
    ],
  },

  faqs: {
    description: "Lo que conviene saber antes de viajar a Miranda.",
    items: [
      { question: "¿Miranda y Caracas son lo mismo?", answer: "No. Miranda es un estado cuya capital es Los Teques. Chacao, Baruta, El Hatillo y Sucre pertenecen a Miranda y forman parte del área metropolitana de Caracas; el municipio Libertador pertenece al Distrito Capital." },
      { question: "¿Cuál es la capital de Miranda?", answer: "Los Teques, en los Altos Mirandinos, a unos 1.168 metros de altitud. Es capital desde 1927, después de que Petare y Ocumare del Tuy lo fueran a comienzos del siglo XX, y está conectada con Caracas por el Metro de Los Teques." },
      { question: "¿Qué es Barlovento?", answer: "Es la subregión del este del estado, formada por los municipios Acevedo, Andrés Bello, Brión, Buroz, Páez y Pedro Gual. Sus pueblos, como Higuerote, Curiepe, Caucagua y Río Chico, concentran la herencia afrovenezolana, el cacao y las playas de Miranda." },
      { question: "¿Cuándo suenan los tambores de San Juan?", answer: "Entre el 23 y el 25 de junio, con Curiepe como punto de referencia, y el sábado siguiente con la fiesta de San Juan Congo. Los tambores acompañan otras fechas del año, pero junio es el momento de mayor intensidad." },
      { question: "¿Se puede visitar la laguna de Tacarigua?", answer: "Sí. El acceso habitual es por Tacarigua de la Laguna, cerca de Río Chico, donde los lancheros locales organizan recorridos entre los manglares. Es parque nacional y sitio Ramsar, así que conviene seguir las indicaciones del parque y no molestar a la fauna." },
      { question: "¿Cuántos días conviene dedicar a Miranda?", answer: "Depende de las puertas que elijas. Los municipios metropolitanos y El Hatillo se visitan desde Caracas en uno o dos días; Los Teques, en una jornada; Barlovento y la laguna de Tacarigua merecen al menos dos días, y Guatopo, una excursión propia." },
    ],
  },

  credits: [
    { title: "Panorámica de Los Teques", author: "Oscar Costero", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Panoramica_de_Los_Teques_en_2015.jpg" },
    { title: "Diablos Danzantes de Yare", author: "Carlos Eduardo Ramírez Kalajzic", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:A_la_salida_de_la_%22casa_de_los_diablos%22.jpg" },
  ],

  seo: {
    title: "Miranda: dónde queda, su capital y qué visitar",
    description: "Conoce Miranda, Venezuela: Los Teques, su relación con Caracas y la costa de Barlovento. Elige qué zona visitar y entiende cómo llegar a cada una.",
  },

  layout: { historyPhotoSide: "left", placesFirstPhotoSide: "right", cultureTone: "dark" },
};
