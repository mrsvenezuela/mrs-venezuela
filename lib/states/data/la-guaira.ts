import { commonsImage as commons } from "@/lib/commons-image";
import type { StateGuideData } from "@/lib/states/types";


const photos = {
  macuto: { src: commons("Macuto (2023).jpg"), alt: "Vista aérea del litoral de Macuto, estado La Guaira: el estadio Fórum de La Guaira y la noria Ojo de La Guaira junto al mar, al pie de la ladera norte del Waraira Repano", position: "center 70%" },
};

export const laGuaira: StateGuideData = {
  slug: "la-guaira",
  name: "La Guaira",
  heroKicker: "Litoral central",
  heroTagline: "Mar, montaña y puerto a minutos de Caracas.",
  hero: photos.macuto,

  intro: {
    eyebrow: "Guía de estado",
    title: "La Guaira, la franja de mar por donde Venezuela recibe al mundo.",
    paragraphs: [
      "La Guaira es una franja estrecha de costa apretada entre el mar Caribe y la cordillera de la Costa. Desde Caracas se baja en pocos kilómetros de la montaña al mar, y en ese descenso aparece el estado que durante siglos fue el puerto de la capital y que hoy alberga también el principal aeropuerto del país.",
      "Es un territorio que se recorre a lo largo: balnearios como Macuto y Caraballeda, el casco colonial de La Guaira con su Casa Guipuzcoana, Galipán en la ladera alta del Waraira Repano y, hacia el este, una costa más tranquila que se prolonga hasta Chuspa. Un estado de paso que merece ser destino.",
    ],
    aside: { label: "En una frase", text: "La costa por la que Venezuela entra y sale." },
  },

  know: {
    title: "CONOCE LA GUAIRA",
    description: "Dónde está, cómo es y por qué se vive mirando al mar.",
    paragraphs: [
      "Ocupa la costa central de Venezuela, al norte de Caracas, con el mar Caribe por delante y la cordillera de la Costa por detrás. Sus 1.497 km² lo convierten en uno de los estados más pequeños del país: una franja larga y estrecha donde la montaña cae casi directamente sobre la orilla.",
      "El relieve sube de forma abrupta desde el nivel del mar hasta el Pico Naiguatá, de 2.765 metros, la cumbre más alta del Parque Nacional Waraira Repano. Ríos cortos como el Naiguatá, el Caruao o el Chuspa bajan de esa vertiente al Caribe, y el clima cambia en pocos kilómetros: cálido y seco en la franja baja, templado en las alturas de Galipán, Carayaca y El Junko.",
      "La Guaira, la capital, es un puerto histórico a unos 30 kilómetros de Caracas. A su alrededor se encadenan Maiquetía, Catia La Mar, Macuto, Caraballeda y Naiguatá, y en Maiquetía está el Aeropuerto Internacional Simón Bolívar, la principal puerta aérea de Venezuela. Buena parte de quienes llegan al país pisan primero este estado.",
    ],
    facts: [
      { label: "Capital", value: "La Guaira" },
      { label: "Región", value: "Litoral central" },
      { label: "Paisaje", value: "Costa caribeña y vertiente norte de la cordillera de la Costa" },
      { label: "Superficie", value: "1.497 km²" },
      { label: "Clima", value: "Cálido y seco en la costa, templado en las alturas" },
      { label: "Gentilicio", value: "Guaireño / guaireña" },
      { label: "Altitud", value: "Del nivel del mar a los 2.765 metros del Pico Naiguatá" },
    ],
  },

  history: {
    description: "Un puerto que fue durante siglos la puerta de Caracas.",
    paragraphs: [
      "Antes de la llegada europea, esta costa estaba habitada por pueblos de filiación caribe y arahuaca. Los toromaimas llamaban Waraira Repano, sierra grande, a la montaña que domina el litoral, y el nombre de Guaicamacuto, el asentamiento que precedió a Macuto, recuerda todavía esa presencia. El mar y la vertiente norte de la cordillera eran ya entonces el eje de la vida en la franja costera.",
      "La Guaira fue fundada el 29 de junio de 1589 por Diego de Osorio como San Pedro de La Guaira, y creció como puerto de Caracas. Los ataques de piratas ingleses y franceses obligaron a levantar defensas como los fuertes San Carlos y El Vigía. Desde 1730, la Real Compañía Guipuzcoana controló desde aquí el comercio de cacao, tabaco, algodón y añil; la Casa Guipuzcoana, en el casco histórico, es la huella más visible de aquel tiempo.",
      "Macuto, fundada en 1740, se convirtió en el balneario de la capital: Antonio Guzmán Blanco le construyó una iglesia en 1883 y el Hotel Miramar, abierto en 1928, fue durante décadas sinónimo de veraneo elegante. El siglo XX trajo las grandes infraestructuras: el aeropuerto de Maiquetía, inaugurado en 1945, la autopista Caracas–La Guaira, abierta en 1953, y el teleférico que unió Macuto con la montaña entre 1957 y 1976.",
      "El territorio se convirtió en estado a finales de 1998, con el nombre de Vargas, y apenas un año después vivió su capítulo más duro: las lluvias de diciembre de 1999 provocaron deslaves e inundaciones que cambiaron la fisonomía del litoral. En 2019 adoptó el nombre de La Guaira. Hoy su identidad se reconstruye entre el puerto, el aeropuerto, las playas y una cultura costera de tambores y diablos danzantes.",
    ],
  },

  defines: {
    title: "LO QUE DEFINE A LA GUAIRA",
    description: "Tres rasgos que explican este litoral.",
    items: [
      {
        name: "Mar y montaña en una misma mirada",
        text: "Pocos lugares del país juntan tanto en tan poco espacio: el mar Caribe a un lado de la carretera y, al otro, la vertiente norte del Waraira Repano subiendo hasta los 2.765 metros del Pico Naiguatá. En pocos kilómetros se pasa del calor seco de la orilla al clima templado de Galipán.",
      },
      {
        name: "El puerto y el aeropuerto",
        text: "La Guaira fue durante siglos el puerto de Caracas, el lugar por donde entraban y salían las mercancías del centro del país. Hoy comparte esa función con el Aeropuerto Internacional Simón Bolívar de Maiquetía, principal puerta aérea de Venezuela. Ser sitio de llegada y de partida forma parte de su carácter.",
      },
      {
        name: "Los balnearios del litoral",
        text: "Desde el siglo XIX, los caraqueños bajan a esta costa a pasar el día. Macuto fue el primer gran balneario y hoy la costumbre se reparte entre Caraballeda, Naiguatá, Los Caracas y las playas más apartadas del este. La Guaira es, para muchos, el mar más cercano a casa.",
      },
    ],
  },

  places: {
    description: "Una selección para recorrer la costa de oeste a este.",
    items: [
      {
        name: "Macuto",
        text: "El balneario histórico del litoral, a la sombra del Waraira Repano. Macuto conserva el aire de pueblo de veraneo de otra época, con su iglesia, su frente marítimo y una orilla que se camina al atardecer. Es la puerta más cómoda para empezar a entender el estado.",
        photo: null,
        href: "/playa/macuto",
      },
      {
        name: "Casco histórico de La Guaira",
        text: "Calles empinadas, casas coloniales, la catedral de San Pedro Apóstol y la Casa Guipuzcoana, sede de la compañía que controló el comercio del cacao en el siglo XVIII. Los antiguos fuertes de San Carlos y El Vigía recuerdan los años en que el puerto vivía pendiente de los piratas.",
        photo: null,
      },
      {
        name: "Galipán",
        text: "En la ladera norte del Waraira Repano, este poblado de origen canario vive de sus cultivos de flores y de sus restaurantes, con un clima templado que sorprende después de la playa. Se sube por el Camino de los Españoles, en vehículo rústico desde Macuto o en teleférico desde Caracas.",
        photo: null,
      },
      {
        name: "Caraballeda y Naiguatá",
        text: "Al este de Macuto, Caraballeda prolonga la franja de balnearios, y Naiguatá, bajo el pico que lleva su nombre, es el pueblo de los Diablos Danzantes, una de las cofradías que forman parte del patrimonio cultural inmaterial reconocido por la UNESCO.",
        photo: null,
      },
      {
        name: "Los Caracas, Caruao y Chuspa",
        text: "Pasado Naiguatá, la carretera se estrecha y la costa se vuelve más tranquila: Los Caracas, con su playa amplia, y luego los pueblos de la parroquia Caruao, hasta Chuspa, en el extremo oriental del estado. Es la parte del litoral que más recompensa ir sin prisa.",
        photo: null,
      },
    ],
  },

  culture: {
    description: "Una cultura de puerto, playa y tambor.",
    intro: "La Guaira come pescado, baila con tambores y celebra con diablos: una cultura costera marcada por el mar, por la cercanía de Caracas y por la memoria del puerto.",
    blocks: [
      {
        label: "Gastronomía",
        title: "Cocina de orilla.",
        items: [
          { name: "Pescado frito con tostones", text: "El plato de playa por excelencia en todo el litoral: pescado entero frito, tostones y ensalada, servido frente al mar en Macuto, Caraballeda o Naiguatá." },
          { name: "Hervido de pescado", text: "Sopa sustanciosa de pescado con verduras y ají dulce, muy presente en la costa central. Se come con calma, en almuerzos largos de fin de semana." },
          { name: "Empanadas de cazón", text: "Asociadas al oriente y a las islas, son también desayuno habitual en las playas guaireñas, recién fritas y acompañadas de guasacaca." },
          { name: "Mesa de montaña en Galipán", text: "En la ladera alta del Waraira Repano, los restaurantes del poblado sirven cocina de campo con productos locales, a una temperatura muy distinta de la de la costa." },
        ],
      },
      {
        label: "Celebraciones",
        title: "Los Diablos Danzantes de Naiguatá",
        text: "En Corpus Christi, las máscaras y los trajes de colores de la cofradía de Naiguatá salen a la calle como parte de la tradición de los Diablos Danzantes de Venezuela, inscrita por la UNESCO como patrimonio cultural inmaterial. Es la fiesta más reconocible del estado.",
      },
      {
        label: "Música",
        title: "Tambores en la costa",
        text: "Como en buena parte del litoral central, los tambores acompañan las fiestas patronales de los pueblos costeros, especialmente en torno a San Juan, en junio. En los pueblos del este del estado siguen siendo el corazón de la celebración.",
      },
      {
        label: "Identidad",
        title: "Un estado de paso que es también hogar",
        text: "Por el puerto y por el aeropuerto de Maiquetía pasa buena parte del país, y el guaireño ha aprendido a convivir con ese tránsito. La reconstrucción tras 1999 y el cambio de nombre en 2019 forman parte de una identidad que se afirma frente al mar.",
      },
    ],
  },

  nature: {
    description: "Del mar Caribe al subpáramo en una misma ladera.",
    intro: "La naturaleza de La Guaira es vertical. En pocos kilómetros el paisaje pasa de la playa y la vegetación seca de la franja costera al bosque nublado y al subpáramo de las cumbres del Waraira Repano, con ríos cortos que bajan de la montaña al mar.",
    items: [
      { name: "Parque Nacional Waraira Repano", text: "Creado en 1958 y conocido durante décadas como El Ávila, protege más de 85.000 hectáreas entre el Distrito Capital, Miranda y La Guaira. Su vertiente norte baja hasta el litoral del estado." },
      { name: "Pico Naiguatá", text: "Con 2.765 metros, es la cumbre más alta del parque. Su silueta domina el pueblo que lleva su nombre y marca el punto donde la cordillera se levanta con más fuerza sobre el mar." },
      { name: "Pisos de vegetación", text: "De la vegetación xerófila de las partes bajas al bosque nublado y al subpáramo de las cumbres, la montaña concentra varios ecosistemas en una misma ladera, con lluvias que superan los 3.000 mm en las zonas altas." },
      { name: "Ríos de la vertiente norte", text: "Naiguatá, Caruao, Chuspa, Mamo o Tacagua son cursos cortos y de fuerte pendiente que bajan de la cordillera al Caribe. Su fuerza en temporada de lluvias explica el relieve de la costa y la memoria de 1999." },
      { name: "Costa y playas", text: "Una orilla larga con playas como Playa Grande, Macuto, Naiguatá o Los Caracas, donde la montaña llega casi hasta el agua. Hacia el este, la costa se vuelve menos urbana y más abierta." },
    ],
  },

  access: {
    description: "Llegar a La Guaira.",
    intro: "Es, probablemente, el estado más fácil de alcanzar del país: su aeropuerto es la principal puerta aérea de Venezuela y Caracas está al otro lado de la montaña.",
    routes: [
      { mode: "aire", title: "Por aire", text: "El Aeropuerto Internacional Simón Bolívar, en Maiquetía, es el principal aeropuerto del país y la puerta de entrada de la mayoría de los vuelos internacionales. Está dentro del propio estado, a muy pocos kilómetros de La Guaira y de los balnearios." },
      { mode: "carretera", title: "Por carretera", text: "La autopista Caracas–La Guaira cruza la cordillera y conecta la capital con el litoral. Desde ella se accede a Maiquetía y La Guaira y, siguiendo la carretera de la costa hacia el este, a Macuto, Caraballeda, Naiguatá y los pueblos de Caruao." },
      { mode: "mar", title: "Por mar", text: "El puerto de La Guaira es uno de los puertos históricos del país y sigue recibiendo tráfico marítimo. Para el viajero, el mar es sobre todo paisaje y recreo; consulta en destino las opciones de embarcaciones y paseos." },
      { mode: "local", title: "Dentro del estado", text: "La carretera costera es el eje de todo el litoral y las distancias son cortas. Para subir a Galipán se utilizan vehículos rústicos desde Macuto, el Camino de los Españoles a pie o el teleférico desde Caracas." },
    ],
  },

  tips: {
    description: "Consejos para un estado vertical y soleado.",
    items: [
      { icon: "sun", title: "Sol de costa seca", text: "La franja baja es cálida y seca durante todo el año. Protector solar, sombrero y agua son imprescindibles en cualquier playa del litoral." },
      { icon: "mountain", title: "Abrigo para Galipán", text: "En la ladera alta del Waraira Repano la temperatura baja de forma notable. Lleva una prenda de abrigo aunque hayas salido de la playa en traje de baño." },
      { icon: "waves", title: "Respeta el mar", text: "Muchas playas de la costa abierta tienen oleaje y corrientes. Pregunta a los locales y a los salvavidas antes de entrar y evita bañarte en puntos sin vigilancia." },
      { icon: "footprints", title: "Calzado para el Camino de los Españoles", text: "La ruta histórica entre Caracas y el litoral es exigente, con pendiente y tramos de piedra. Calzado cerrado, agua y salir temprano marcan la diferencia." },
      { icon: "clock", title: "Madruga los fines de semana", text: "Las playas más cercanas a Caracas se llenan pronto los sábados y domingos. Llegar temprano permite encontrar sitio y bañarse con más calma." },
      { icon: "camera", title: "Corpus Christi en Naiguatá", text: "Si tu viaje coincide con los Diablos Danzantes, asiste con respeto: es una celebración religiosa de la comunidad, no un espectáculo. Pregunta antes de fotografiar de cerca." },
    ],
  },

  faqs: {
    description: "Lo que suele preguntarse antes de bajar al litoral.",
    items: [
      { question: "¿Por qué el estado se llama La Guaira y no Vargas?", answer: "Al crearse a finales de 1998 recibió el nombre de Vargas. En junio de 2019 adoptó oficialmente el nombre de La Guaira, el de su capital y de su puerto histórico, que es también el que la mayoría de la gente usaba para referirse al litoral." },
      { question: "¿Se puede ir a la playa en un día desde Caracas?", answer: "Sí. La autopista cruza la montaña y deja en el litoral en poco tiempo, por lo que Macuto, Caraballeda o Naiguatá son destinos habituales de un solo día. Las playas del este, hacia Caruao y Chuspa, piden salir más temprano o quedarse a dormir." },
      { question: "¿Qué es Galipán y cómo se sube?", answer: "Es un poblado de origen canario en la ladera norte del Waraira Repano, conocido por sus flores y sus restaurantes. Se llega en vehículo rústico desde Macuto, a pie por el Camino de los Españoles o en teleférico desde Caracas." },
      { question: "¿Qué pasó en 1999?", answer: "En diciembre de 1999, lluvias intensas provocaron deslaves e inundaciones en el entonces estado Vargas y destruyeron parte de la franja costera. Fue uno de los episodios más duros de la historia reciente del país, y la reconstrucción marcó las décadas siguientes." },
      { question: "¿Qué son los Diablos Danzantes de Naiguatá?", answer: "Una cofradía que baila con máscaras y trajes de colores en Corpus Christi, como parte de la tradición de los Diablos Danzantes de Venezuela, inscrita por la UNESCO como patrimonio cultural inmaterial. La de Naiguatá es una de las más conocidas del país." },
      { question: "¿El aeropuerto está lejos de las playas?", answer: "No. El Aeropuerto Internacional Simón Bolívar está en Maiquetía, dentro del estado, a muy pocos kilómetros de La Guaira y de Macuto. Es habitual combinar una llegada o una salida con unas horas de costa." },
    ],
  },

  credits: [
    { title: "Macuto", author: "Wilnel José Verdú Guerrero", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Macuto_(2023).jpg" },
  ],

  seo: {
    title: "La Guaira: guía de Macuto, Galipán y el litoral",
    description: "Guía editorial de La Guaira: el puerto histórico, Macuto y los balnearios, Galipán y el Waraira Repano, el aeropuerto de Maiquetía y la costa del este.",
  },

  layout: { historyPhotoSide: "right", placesFirstPhotoSide: "left", cultureTone: "dark" },
};
