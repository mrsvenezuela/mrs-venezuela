import type { StateGuideData } from "@/lib/states/types";

const photos = {
  morichalLargo: {
    src: "/images/commons/monagas-rio-morichal-largo.jpg",
    alt: "El río Morichal Largo con una curiara varada en la orilla de arena y el bosque de moriches en la otra ribera, estado Monagas",
    position: "center 62%",
  },
  guacharo: {
    src: "/images/commons/monagas-cueva-guacharo.jpg",
    alt: "Entrada de la Cueva del Guácharo vista desde el interior, Caripe, Monagas",
    position: "center 50%",
  },
};

export const monagas: StateGuideData = {
  slug: "monagas",
  name: "Monagas",
  heroKicker: "Oriente de Venezuela",
  heroTagline: "Cuevas, café, morichales y llano.",
  hero: { src: "/images/commons/monagas-maturin.jpg", alt: "El centro de Maturín con las torres de la catedral sobre los tejados, estado Monagas", position: "center 50%" },

  intro: {
    eyebrow: "Guía de estado",
    title: "Monagas, donde la montaña de Caripe se abre al llano.",
    paragraphs: [
      "Monagas cambia de paisaje en pocas horas de carretera: al norte, el macizo de Caripe guarda cafetales, huertos de naranjas y la cueva en la que Humboldt describió al guácharo; al sur, las sabanas se extienden hacia el Orinoco cruzadas por ríos y morichales. Maturín, en el centro, reúne ambos mundos.",
      "Es un estado de tierra adentro que se entiende mejor despacio: un amanecer en el valle de Caripe, una curiara sobre el Morichal Largo, una tarde en los llanos orientales. Y una identidad que se expresa en fiestas como el Baile del Mono y en la presencia viva de los pueblos kariña y warao.",
    ],
    aside: { label: "En una frase", text: "Montaña de café al norte, llano y morichales al sur." },
  },

  know: {
    title: "CONOCE MONAGAS",
    description: "Dónde está, cómo es y qué paisajes reúne.",
    paragraphs: [
      "Monagas ocupa el nororiente de Venezuela. Limita con Sucre al norte, con Delta Amacuro al este, con Bolívar al sur y con Anzoátegui al oeste, y se asoma al golfo de Paria por el noreste. Su capital, Maturín, se levanta a orillas del río Guarapiche, en el centro del territorio.",
      "El relieve explica casi todo: la serranía del Turimiquire y el macizo de Caripe cierran el norte con bosques nublados y valles frescos que suben hasta el Cerro Negro, a 2.280 metros; hacia el sur, las mesas y sabanas de los llanos orientales descienden hacia el Orinoco entre ríos como el Morichal Largo, el Tigre y el Amana.",
      "Entre ambos extremos conviven el café de altura, el petróleo que transformó la economía en el siglo XX, la ganadería de las sabanas y una vida ribereña ligada a los caños y a la palma moriche. Es un estado que se recorre tierra adentro y que premia a quien se toma su tiempo.",
    ],
    facts: [
      { label: "Capital", value: "Maturín" },
      { label: "Región", value: "Oriente de Venezuela" },
      { label: "Paisaje", value: "Macizo de Caripe, llanos orientales, morichales y golfo de Paria" },
      { label: "Superficie", value: "28.900 km²" },
      { label: "Clima", value: "Cálido en los llanos; templado y húmedo en la montaña de Caripe" },
      { label: "Gentilicio", value: "Monaguense" },
    ],
  },

  history: {
    description: "De las misiones capuchinas al petróleo, con la montaña como memoria.",
    paragraphs: [
      "Antes de los misioneros, el territorio que hoy es Monagas estaba habitado por pueblos de lengua caribe como los chaima, en las montañas del norte, y los kariña, en las sabanas; hacia los caños del este vivían los warao, la gente de la canoa. La Cueva del Guácharo era para los chaima un lugar cargado de significado, y el propio nombre de Maturín recuerda a un cacique chaima muerto en una batalla en 1718.",
      "La ocupación colonial llegó de la mano de las misiones capuchinas, que fundaron los pueblos del norte: San Antonio de Capayacuar en 1713, Caripe en 1734 y, el 7 de diciembre de 1760, San Judas Tadeo de Maturín, origen de la capital. Esas misiones organizaron el valle y dejaron una trama de pueblos que todavía se reconoce en las iglesias y en las plazas del macizo de Caripe.",
      "En 1799 Alexander von Humboldt entró en la Cueva del Guácharo y describió al ave que la habita, un episodio que puso a Caripe en los mapas de la ciencia. Durante la independencia, Maturín fue escenario de combates como la batalla del Alto de los Godos, en 1813. El estado, que toma su nombre de la familia Monagas, que dio al país tres presidentes en el siglo XIX, quedó constituido con su forma actual en 1909.",
      "El siglo XX trajo el petróleo: el campo de Quiriquire, descubierto en 1928, y la refinería de Caripito, inaugurada en 1931, convirtieron el río San Juan en una ruta de tanqueros y cambiaron la escala de la economía regional. Hoy Monagas reúne esa herencia con el café de Caripe, la ganadería de las sabanas y unas tradiciones, como el Baile del Mono de Caicara, que siguen marcando el calendario.",
    ],
  },

  defines: {
    title: "LO QUE DEFINE A MONAGAS",
    description: "Tres rasgos que explican el carácter del estado.",
    panorama: { src: "/images/commons/monagas-rio-morichal-largo.jpg", alt: "El río Morichal Largo con una curiara varada en la orilla de arena y el bosque de moriches en la otra ribera, estado Monagas", position: "center 62%" },
    items: [
      {
        name: "La Cueva del Guácharo",
        text: "A poca distancia de Caripe, una boca abierta a más de mil metros de altitud da paso a una caverna con más de diez kilómetros explorados, atravesada por un río y habitada por colonias de guácharos. Fue el primer monumento natural del país, en 1949, y desde 1975 da nombre a un parque nacional compartido con Sucre.",
      },
      {
        name: "El valle de Caripe",
        text: "Entre 800 y 900 metros de altitud, con temperaturas suaves, Caripe es el contrapunto fresco del oriente venezolano. Sus laderas producen café de montaña, naranjas, hortalizas y flores, y sus pueblos, como San Agustín con su iglesia cubierta de enredaderas, conservan el aire de las antiguas misiones.",
      },
      {
        name: "Morichales y llano",
        text: "Al sur del Guarapiche el paisaje se abre en sabanas y mesas que bajan hacia el Orinoco. Allí, a lo largo de ríos como el Morichal Largo, la palma moriche forma bosques densos junto al agua, los morichales, que concentran fauna y han sido la base material de la vida warao: fibra, alimento y vivienda.",
      },
    ],
  },

  places: {
    description: "Una selección para recorrer Monagas de la montaña al río.",
    items: [
      {
        name: "Cueva del Guácharo",
        text: "La entrada al monumento natural Alejandro de Humboldt queda en el municipio Caripe, a 1.065 metros de altitud. Dentro, las galerías se recorren con calma siguiendo el curso del río, mientras los guácharos se hacen oír en la oscuridad de las primeras salas. Es la visita que justifica por sí sola el viaje.",
        photo: photos.guacharo,
      },
      {
        name: "Caripe y sus pueblos",
        text: "Caripe, llamado Jardín del Oriente venezolano, es la base natural para conocer la montaña: el mirador sobre el valle, los cafetales, las fincas de naranjas y fresas, los pueblos de San Agustín y Teresén. Desde aquí parten también los caminos hacia el Cerro Negro y hacia saltos de agua como La Paila y El Chorrerón.",
        photo: null,
      },
      {
        name: "Maturín",
        text: "La Sultana del Guarapiche es la puerta de entrada y el centro de servicios del estado. Vale la pena detenerse en su plaza Bolívar, en la catedral de Nuestra Señora del Carmen y en el parque La Guaricha, y probar la cocina monaguense antes de salir hacia la montaña o el llano.",
        photo: null,
      },
      {
        name: "Río Morichal Largo",
        text: "En el sureste del estado, este río avanza entre morichales hacia el delta del Orinoco. Se navega en curiara desde campamentos situados cerca de su desembocadura, en un recorrido de palmas, aves y silencio por una zona donde viven comunidades warao. Es Monagas en su versión más fluvial.",
        photo: null,
      },
      {
        name: "San Antonio de Capayacuar y las Puertas de Miraflores",
        text: "Capital del municipio Acosta y uno de los pueblos de misión más antiguos de la montaña, fundado en 1713. Muy cerca nace el Guarapiche, que se abre paso entre las paredes de roca de las Puertas de Miraflores, una garganta de unos cien metros de altura que marca el inicio del río.",
        photo: null,
      },
      {
        name: "Caripito",
        text: "A orillas del río San Juan, Caripito fue puerto petrolero desde 1930 y conserva la huella de la refinería inaugurada un año después. Hoy se la conoce como tierra del Nazareno y del chocolate, por la devoción de sus vecinos y por el cacao que se cultiva en la zona.",
        photo: null,
      },
    ],
  },

  culture: {
    description: "Una cultura de montaña, llano y río que se come y se baila.",
    intro: "La cocina monaguense mezcla la yuca, el maíz, el plátano y el río; el calendario lo marcan el Baile del Mono, la Feria de San Simón y las celebraciones de los pueblos kariña.",
    blocks: [
      {
        label: "Gastronomía",
        title: "Sabores de tierra adentro.",
        items: [
          { name: "Sancocho de cangrejo de río", text: "Caldo espeso de cangrejos de río, verduras y aliños. Muy presente en Caripe y en los pueblos de la montaña, es uno de los platos más propios de Monagas." },
          { name: "Cachapa burrera", text: "Versión grande y gruesa de la cachapa de maíz tierno, servida con queso de mano. Un clásico de carretera asociado a toda la región oriental del país." },
          { name: "Casabe", text: "La torta de yuca de herencia indígena acompaña guisos y pescados en todo el oriente. En Monagas sigue siendo pan cotidiano y memoria kariña y warao." },
          { name: "Carato de mango", text: "Bebida espesa y refrescante hecha con mango, muy asociada al oriente venezolano. Se toma bien fría, sobre todo en la temporada de cosecha de la fruta." },
        ],
      },
      {
        label: "Celebraciones",
        title: "El Baile del Mono de Caicara",
        text: "Cada 28 de diciembre, Caicara de Maturín se convierte en una larga cadena humana que baila agarrada por la cintura detrás del mono mayor, con caras pintadas y máscaras. La tradición oral lo vincula a ritos de cosecha de los pueblos chaima y kariña, y en 2025 fue declarado Patrimonio Cultural de Venezuela.",
      },
      {
        label: "Tradiciones",
        title: "Ferias, culebras y un calendario propio",
        text: "Maturín abre diciembre con la Feria de San Simón y celebra su Carnaval con desfiles y comparsas. En San Antonio de Capayacuar, el Baile de la Culebra de Ipure, danzado por mujeres que imitan el movimiento de la serpiente, forma parte de las fiestas del municipio Acosta. Caripe vive una Semana Santa de procesiones en torno al Santo Ángel Custodio.",
      },
      {
        label: "Identidad",
        title: "Kariña y warao, presencia viva",
        text: "En las sabanas viven comunidades kariña, de lengua caribe, que cada 1 y 2 de noviembre celebran el Akaatompo en memoria de sus difuntos y conservan la danza colectiva del mare mare. Hacia los caños del este, los warao, la gente de la canoa, mantienen una vida ligada al agua y a la palma moriche, de la que obtienen fibra para cestas y chinchorros.",
      },
    ],
  },

  nature: {
    description: "Bosque nublado, cavernas, ríos y sabanas de moriche.",
    intro: "Monagas reúne en pocos kilómetros dos mundos naturales: la montaña húmeda del macizo de Caripe, con su bosque nublado y su caverna, y la llanura oriental, donde las sabanas se abren hacia el Orinoco y los ríos van acompañados de morichales. Entre ambos, el Guarapiche enlaza el norte con el centro del estado.",
    items: [
      { name: "Parque Nacional El Guácharo", text: "Creado en 1975 sobre el macizo de Caripe y compartido con Sucre, protege bosques nublados de orquídeas, helechos y laureles, y una fauna que incluye pumas, dantas y araguatos, además de centenares de especies de aves." },
      { name: "El guácharo", text: "Steatornis caripensis es un ave nocturna y frugívora que vive en colonias dentro de cuevas y se orienta en la oscuridad mediante chasquidos. Humboldt la describió a partir de su visita a Caripe, y de allí viene su nombre científico." },
      { name: "Morichales del Morichal Largo", text: "Las asociaciones de palma moriche junto a los ríos del sur forman corredores densos de vida. Desde 2011, una reserva de fauna silvestre protege el curso del Morichal Largo y sus morichales hacia el delta del Orinoco." },
      { name: "Río Guarapiche y Puertas de Miraflores", text: "Nace en el macizo del Turimiquire, en la garganta de las Puertas de Miraflores, y atraviesa Maturín antes de entregar sus aguas al río San Juan. Abastece de agua a buena parte de la capital." },
      { name: "Llanos y sabanas del sur", text: "Mesas y sabanas con estación seca prolongada, ganadería y, en el extremo sur, las plantaciones de pino de Uverito. Es el Monagas de horizontes largos, cielos abiertos y ríos que buscan el Orinoco." },
    ],
  },

  access: {
    description: "Llegar a Monagas.",
    intro: "Maturín es la puerta de entrada habitual; desde allí se sube a Caripe o se baja hacia los morichales y el llano.",
    routes: [
      { mode: "aire", title: "Por aire", text: "Maturín cuenta con el Aeropuerto Internacional José Tadeo Monagas, la principal entrada aérea del estado. Conviene confirmar las rutas disponibles directamente con las aerolíneas antes de organizar el viaje." },
      { mode: "carretera", title: "Por carretera", text: "Las vías terrestres enlazan Maturín con Anzoátegui y el centro del país hacia el oeste, con Sucre hacia el norte y con Bolívar y Delta Amacuro hacia el sur y el este. Desde Caracas, la distancia supera ligeramente los 400 kilómetros." },
      { mode: "local", title: "Dentro del estado", text: "De Maturín a Caripe se sube por una carretera de montaña con curvas y cambios de paisaje. Hacia el Morichal Largo, el acceso combina carretera y embarcación, coordinada con los campamentos y operadores de la zona." },
    ],
  },

  tips: {
    description: "Montaña fresca, llano caluroso y una cueva que pide respeto.",
    items: [
      { icon: "mountain", title: "Caripe es montaña", text: "A 800 o 900 metros, las noches refrescan y la humedad es alta. Lleva una chaqueta ligera e impermeable aunque vengas del calor de Maturín." },
      { icon: "camera", title: "Silencio y sin flash en la cueva", text: "Los guácharos son aves nocturnas que viven en colonias dentro de la caverna. Baja la voz, evita luces fuertes, lleva calzado cerrado y sigue las indicaciones del personal del parque." },
      { icon: "sun", title: "Calor en el llano", text: "Al sur de Maturín el sol pega fuerte y las sombras escasean en la sabana. Sombrero, protector solar y agua abundante para cualquier recorrido en curiara o a campo abierto." },
      { icon: "bug", title: "Repelente en los morichales", text: "Junto al agua y bajo las palmas, los mosquitos aparecen al caer la tarde: lleva repelente, manga larga y pantalón para los paseos fluviales." },
      { icon: "users", title: "Respeto en las comunidades", text: "En poblados kariña y warao, pregunta antes de fotografiar, compra la artesanía directamente a quien la hace y escucha: la mejor guía del territorio es su gente." },
      { icon: "clock", title: "Diciembre es el mes grande", text: "La Feria de San Simón abre el mes en Maturín y el Baile del Mono cierra el año en Caicara el día 28. Si quieres vivirlos, organiza el viaje con antelación." },
    ],
  },

  faqs: {
    description: "Lo que suele preguntarse antes de viajar a Monagas.",
    items: [
      { question: "¿Qué es un guácharo?", answer: "Es un ave nocturna que vive en colonias dentro de cuevas y se alimenta de frutos, sobre todo de palmas. Se orienta en la oscuridad con chasquidos audibles y sale a comer al caer la noche. Su nombre científico, Steatornis caripensis, recuerda a Caripe, donde Humboldt la estudió en 1799." },
      { question: "¿Cuántos días hacen falta para conocer Monagas?", answer: "Con tres días se combinan Maturín, una jornada en Caripe con la cueva y los pueblos del valle, y otra en los morichales. Si quieres añadir las Puertas de Miraflores o los llanos del sur, calcula al menos un día más para cada zona." },
      { question: "¿Hace frío en Caripe?", answer: "No hace frío intenso, pero el contraste con Maturín es notable: el valle ronda los 22 grados de media y en las zonas más altas del municipio las temperaturas bajan bastante más. Por la noche y en la montaña se agradece una chaqueta." },
      { question: "¿Cómo se visitan los morichales?", answer: "La forma habitual es navegar el Morichal Largo en curiara desde los campamentos de la zona, con salidas que se organizan localmente. Es un recorrido tranquilo entre palmas, aves y caños que se adentra hacia el delta del Orinoco; conviene reservar con antelación y llevar repelente." },
      { question: "¿Cuándo se celebra el Baile del Mono?", answer: "Cada 28 de diciembre en Caicara de Maturín, capital del municipio Cedeño. La fiesta reúne a vecinos y visitantes en una cadena humana que recorre el pueblo bailando. Es una de las tradiciones más reconocidas del estado y desde 2025 es Patrimonio Cultural de Venezuela." },
      { question: "¿Conviene dormir en Maturín o en Caripe?", answer: "Maturín concentra aeropuerto, terminal y servicios, y es lógica como primera noche. Para la cueva y el valle, dormir en Caripe permite madrugar y disfrutar del clima fresco; para los morichales, los campamentos de la zona del Morichal Largo son la opción natural." },
    ],
  },

  credits: [
    { title: "La catedral de Maturín en el perfil de la ciudad", author: "Beatrice Murch", license: "CC BY 2.0", href: "https://commons.wikimedia.org/wiki/File:Maturin_cathedral_in_the_skyline.jpg" },
    { title: "Río Morichal Largo, estado Monagas", author: "Cesar Pérez", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Rio_Morichal_Largo,_Estado_Monagas.jpg" },
    { title: "Cueva del Guácharo, Caripe, Monagas", author: "Wilmeris Hernández", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:La_Cueva_del_Guácharo.jpg" },
  ],

  seo: {
    title: "Monagas: guía de viaje de la Cueva del Guácharo, Caripe y el llano",
    description: "Guía de Monagas: Maturín, la Cueva del Guácharo, el café de Caripe, los morichales del Morichal Largo y los llanos orientales. Historia, cultura y consejos.",
  },

  layout: { historyPhotoSide: "right", placesFirstPhotoSide: "right", cultureTone: "light" },
};
