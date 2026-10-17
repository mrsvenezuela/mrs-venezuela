import type { ItineraryContent } from "./types";

/*
 * El reparto de los 14 días sale de la logística verificada en septiembre de 2026,
 * no de un esquema bonito: a Canaima solo se llega en avión y sus vuelos no son
 * diarios, así que esa etapa fija el calendario; entre Canaima, Los Roques y Mérida
 * se vuelve siempre por Caracas, y esas noches intermedias aparecen como lo que son.
 *
 * Cada aviso vive en un solo sitio:
 *   travelInfo      lo que caduca (aeropuertos, conexiones, carretera, teleférico, situación), con fecha
 *   notas de etapa  lo estable de cada destino (ríos de Canaima, cayos, Pico Espejo ≠ Pico Bolívar)
 *   before.tips     seis comprobaciones cortas
 *   budget          tasas y qué se paga aparte
 * Nada de aerolíneas, horarios ni precios.
 */
export const itineraryEs: ItineraryContent = {
  meta: {
    title: "Una ruta por Venezuela en 14 días | Mrs Venezuela",
    description:
      "Itinerario sugerido de 14 días por Caracas, Canaima, Los Roques y Mérida, con ideas día por día, alojamientos, traslados y consejos para planificar el viaje.",
    // Describe la composición de metadata.ts (ruta-14-dias-og.jpg).
    ogAlt: "Cuatro etapas del viaje: Caracas con el Ávila, la laguna de Canaima, Cayo de Agua en Los Roques y la laguna de Mucubají en Mérida",
  },
  hero: {
    home: "Descubre Venezuela",
    eyebrow: "Itinerario",
    title: "Una ruta por Venezuela en 14 días",
    subtitle: "Caracas · Canaima · Los Roques · Mérida",
    photo: {
      src: "/images/commons/canaima-laguna-aerea.jpg",
      alt: "Vista aérea de la laguna de Canaima con sus saltos y los tepuyes al fondo",
      position: "center 55%",
    },
    stats: [
      { value: "14", label: "días" },
      { value: "4", label: "destinos" },
      { value: "1", label: "viaje" },
    ],
  },
  intro:
    "Esta ruta combina cuatro caras muy distintas de Venezuela: la vida urbana de Caracas, los paisajes de Canaima, el Caribe de Los Roques y los Andes de Mérida. Es una propuesta, no la única manera de hacerlo: adáptala a la disponibilidad, las conexiones, la temporada, tu presupuesto y lo que más te interese.",
  indexLabel: "En este itinerario",
  travelInfo: {
    title: "Información de viaje",
    reviewedLabel: "Última revisión",
    linkLabel: "Información de viaje revisada en {month}",
    lede: "Lo que más cambia está aquí y solo aquí. Vuelve a comprobarlo cerca de la fecha con tu aerolínea, tu alojamiento o tu operador.",
    items: [
      {
        title: "Aeropuerto de Maiquetía",
        text: "Tras los terremotos de junio de 2026 funciona con terminales provisionales y menos vuelos. Se recomienda llegar unas 2 horas antes en vuelos nacionales y 3 en internacionales, y solo entran los pasajeros.",
      },
      {
        title: "Vuelos internos",
        text: "El vuelo directo entre Caracas y Canaima no es diario, así que marca el calendario. A Los Roques se vuela en avioneta: confirma desde qué aeropuerto sale. A Mérida se llega por El Vigía, que ha tenido cierres temporales.",
      },
      {
        title: "Carretera El Vigía–Mérida",
        text: "Con lluvias sufre derrumbes y cierres temporales. Pregunta por el estado de la vía al reservar el traslado.",
      },
      {
        title: "Teleférico Mukumbarí",
        text: "Ha cerrado varias veces en 2026 y fuera de las vacaciones no abre todos los días. Confirma en sus canales oficiales si opera en tus fechas.",
      },
      {
        title: "Caracas y La Guaira",
        text: "Parte de ambas ciudades sigue en obras tras los terremotos: confirma que tu alojamiento y los lugares que quieras visitar estén abiertos.",
      },
      {
        title: "Recomendaciones oficiales",
        text: "Varios gobiernos desaconsejan viajar a Venezuela salvo por motivos esenciales. Consulta las de tu país y comprueba que tu seguro te cubra.",
      },
    ],
  },
  route: {
    title: "La ruta",
    lede: "Cuatro caras del país, con Caracas como puerta de entrada, de salida y de conexión entre etapas.",
    stops: [
      { id: "caracas", days: "Día 1", name: "Caracas", role: "Llegada y noches de conexión entre etapas" },
      { id: "canaima", days: "Días 2–5", name: "Canaima", role: "Tepuyes, selva, ríos y Salto Ángel" },
      { id: "los-roques", days: "Días 6–9", name: "Los Roques", role: "Caribe, cayos y mar" },
      { id: "merida", days: "Días 10–13", name: "Mérida", role: "Andes, teleférico y páramo" },
      { id: "regreso", days: "Día 14", name: "Caracas", role: "Vuelo de salida" },
    ],
    mapAlt: "Mapa de Venezuela con Caracas, Canaima, Los Roques y Mérida numerados en el orden del viaje",
    mapNote: "El mapa muestra el orden del viaje, no la trayectoria de los vuelos: entre una etapa y otra se vuelve a Caracas.",
  },
  days: {
    title: "Día por día",
    lede: "Agrupado por destino y con los días de traslado a la vista, porque también son parte del viaje.",
    dayPattern: "Día {nn}",
    nightLabel: "Noche",
    transferLabel: "Traslado",
    stages: [
      {
        id: "caracas",
        name: "Caracas",
        days: "Día 1",
        items: [
          {
            day: 1,
            place: "Maiquetía · Caracas",
            title: "Llegada a Venezuela",
            text: "Se aterriza en Maiquetía, en La Guaira, al otro lado del Ávila. El primer día es solo para llegar, hacer el traslado ya reservado y descansar.",
            night: "Caracas o La Guaira",
            transfer: true,
            photo: { src: "/images/commons/caracas-la-florida-avila.jpg", alt: "Caracas con el Ávila detrás, a primera hora de la mañana" },
          },
        ],
      },
      {
        id: "canaima",
        name: "Canaima",
        days: "Días 2–5",
        note: "Las excursiones en curiara dependen del nivel de los ríos, del clima y de la operación local. El Salto Ángel suele ser más accesible de junio a noviembre; en los meses secos la subida puede alargarse o cancelarse.",
        guide: { label: "Conoce nuestra guía de Canaima", href: "/parque-nacional/canaima" },
        items: [
          {
            day: 2,
            place: "Caracas → Canaima",
            title: "Llegada a Canaima",
            text: "Vuelo desde Caracas y llegada al campamento, junto a la laguna. Si aterrizas con tiempo, la tarde da para recorrerla.",
            night: "Canaima",
            transfer: true,
            photo: { src: "/images/commons/laguna-de-canaima.jpg", alt: "Laguna de Canaima con sus saltos y la playa de arena rosada" },
          },
          {
            day: 3,
            place: "Canaima",
            title: "Salto Ángel",
            text: "La jornada más larga del viaje: se sale de madrugada, se remontan en curiara el Carrao y el Churún hasta el campamento frente al salto y se camina por la selva hasta el mirador Laime.",
            night: "Canaima, o frente al salto si la excursión incluye pernocta",
            photo: {
              src: "/images/commons/salto-angel-mirador-laime.jpg",
              alt: "Salto Ángel visto desde su base, cayendo desde el Auyantepui",
              ratio: "3 / 4",
            },
          },
          {
            day: 4,
            place: "Canaima",
            title: "Laguna, saltos y margen",
            text: "Si dormiste frente al salto, hoy toca volver río abajo. Si no, laguna y saltos cercanos: con caudal suficiente se pasa por detrás de la cortina de El Sapo. Es también el día de reserva si el río obliga a mover la excursión.",
            night: "Canaima",
            photo: { src: "/images/commons/salto-el-sapo-cortina.jpg", alt: "Sendero por detrás de la cortina de agua del Salto El Sapo" },
          },
          {
            day: 5,
            place: "Canaima → Caracas",
            title: "Vuelta a Caracas",
            text: "Vuelo de vuelta a Maiquetía y noche de conexión, sin planes. Buen momento para dejar guardada la maleta grande: las avionetas de Los Roques admiten poco equipaje.",
            night: "Caracas o La Guaira",
            transfer: true,
          },
        ],
      },
      {
        id: "los-roques",
        name: "Los Roques",
        days: "Días 6–9",
        note: "Pocos cayos y bien elegidos: el archipiélago se disfruta más con calma que intentando verlos todos.",
        guide: { label: "Conoce nuestra guía de Los Roques", href: "/playa/los-roques" },
        items: [
          {
            day: 6,
            place: "Caracas → Gran Roque",
            title: "Avioneta al archipiélago",
            text: "Vuelo corto hasta la pista de Gran Roque e instalación en la posada. La tarde da para un cayo cercano si la posada lo organiza.",
            night: "Gran Roque",
            transfer: true,
            photo: { src: "/images/commons/village-gran-roque.jpg", alt: "Gran Roque desde el aire, con el pueblo, la playa y la pista de aterrizaje" },
          },
          {
            day: 7,
            place: "Los Roques",
            title: "Cayos cercanos",
            text: "Salida en lancha por la mañana a Madrisquí o Francisquí, a pocos minutos de Gran Roque, y vuelta a media tarde. Agua clara, sombra y poco más.",
            night: "Gran Roque",
            photo: { src: "/images/commons/cayo-madrisqui-calmo-y-tranquilo.jpg", alt: "Cayo Madrisquí con agua transparente y la playa al fondo" },
          },
          {
            day: 8,
            place: "Los Roques",
            title: "Cayo de Agua",
            text: "Los cayos lejanos se visitan en una excursión de día completo, que suele contratarse aparte. Mejor hoy, lejos de los días de vuelo.",
            night: "Gran Roque",
            photo: { src: "/images/commons/cayo-de-agua-istmo.jpg", alt: "Istmo de arena de Cayo de Agua entre dos aguas turquesas" },
          },
          {
            day: 9,
            place: "Los Roques → Caracas",
            title: "Última mañana y regreso",
            text: "Mañana tranquila en Gran Roque, sin excursiones largas, y avioneta de vuelta por la tarde. Noche de conexión en Caracas o La Guaira.",
            night: "Caracas o La Guaira",
            transfer: true,
            photo: { src: "/images/commons/gran-roque-pueblo-desde-el-mar.jpg", alt: "El pueblo de Gran Roque a la orilla del agua turquesa, con posadas, palmeras y el cerro del faro al fondo", position: "center 15%" },
          },
        ],
      },
      {
        id: "merida",
        name: "Mérida",
        days: "Días 10–13",
        note: "Mukumbarí llega a Pico Espejo, no a la cima del Pico Bolívar: esa es otra montaña y pide una ascensión técnica con guías especializados.",
        guide: { label: "Conoce nuestra guía del Pico Bolívar", href: "/montana/pico-bolivar" },
        items: [
          {
            day: 10,
            place: "Caracas → El Vigía → Mérida",
            title: "Bajada a los Andes",
            text: "Vuelo a El Vigía y unos 70 km de carretera de montaña hasta Mérida, mejor de día. Si llegas pronto, la Plaza Bolívar.",
            night: "Mérida",
            transfer: true,
            photo: { src: "/images/commons/merida-plaza-bolivar.jpg", alt: "Plaza Bolívar de Mérida con la catedral y el Pico Bolívar nevado al fondo" },
          },
          {
            day: 11,
            place: "Mérida",
            title: "Mukumbarí y Pico Espejo",
            text: "Subida temprano por las cinco estaciones del teleférico hasta Pico Espejo, a unos 4.765 metros. Si no opera o hay niebla, cambia este día por el del páramo.",
            night: "Mérida",
            photo: { src: "/images/commons/mukumbari-pico-espejo.jpg", alt: "Estación de Pico Espejo del teleférico Mukumbarí, entre la niebla" },
          },
          {
            day: 12,
            place: "Mérida",
            title: "Páramo por la Trasandina",
            text: "Día completo hacia Mucuchíes, Apartaderos y la laguna de Mucubají, con el Pico El Águila si el tiempo acompaña. Son varias horas de carretera de montaña.",
            night: "Mérida",
            photo: { src: "/images/commons/laguna-de-mucubaji.jpg", alt: "Laguna de Mucubají en el páramo, con la Sierra Nevada al fondo" },
          },
          {
            day: 13,
            place: "Mérida → El Vigía → Caracas",
            title: "Regreso a la costa",
            text: "Carretera a El Vigía y vuelo a Maiquetía, la víspera del vuelo internacional. Última noche en Caracas o junto al aeropuerto.",
            night: "Caracas o La Guaira",
            transfer: true,
          },
        ],
      },
      {
        id: "regreso",
        name: "Regreso",
        days: "Día 14",
        items: [
          {
            day: 14,
            place: "Caracas → Maiquetía",
            title: "Vuelo de salida",
            text: "Traslado al aeropuerto con tiempo de sobra. Sin excursiones ni vuelos internos: el último día queda solo para volver a casa.",
            transfer: true,
          },
        ],
      },
    ],
  },
  sleep: {
    title: "Dónde dormir",
    lede: "Noches por destino y qué tipo de alojamiento buscar. Por ahora no recomendamos establecimientos concretos.",
    areas: [
      {
        id: "caracas",
        place: "Caracas",
        nights: 4,
        nightsLabel: "noches",
        kinds: "Hoteles · apartamentos urbanos",
        text: "Sirve de llegada, de salida y de conexión entre etapas, así que importa más la ubicación que el encanto.",
        ctaKey: "whereToStay",
      },
      {
        id: "canaima",
        place: "Canaima",
        nights: 3,
        nightsLabel: "noches",
        kinds: "Campamentos · lodges",
        text: "Adaptados a la logística del parque: casi siempre con vuelo, comidas y excursiones en el mismo paquete.",
        ctaKey: "seeStays",
      },
      {
        id: "los-roques",
        place: "Los Roques",
        nights: 3,
        nightsLabel: "noches",
        kinds: "Posadas en Gran Roque",
        text: "Casi todo el alojamiento está en el pueblo. Muchas posadas incluyen pensión completa y lancha a los cayos cercanos.",
        ctaKey: "seeStays",
      },
      {
        id: "merida",
        place: "Mérida",
        nights: 3,
        nightsLabel: "noches",
        kinds: "Hoteles · posadas · apartamentos",
        text: "En la ciudad, como base para el teleférico y el páramo.",
        ctaKey: "whereToStay",
      },
    ],
  },
  move: {
    title: "Cómo moverse",
    lede: "El viaje por tramos, en orden. Entre un destino y otro se vuelve siempre a Caracas.",
    modeLabels: { flight: "Avión", "small-plane": "Avioneta", road: "Carretera" },
    toLabel: "a",
    legs: [
      {
        day: 1,
        from: "Aeropuerto de Maiquetía",
        to: "Caracas o La Guaira",
        modes: ["road"],
        text: "Unos 30 km por autopista hasta el centro de Caracas; mejor con el traslado reservado.",
      },
      {
        day: 2,
        from: "Caracas",
        to: "Canaima",
        modes: ["flight"],
        text: "Vuelo directo desde Maiquetía, de alrededor de una hora. A Canaima no se llega por carretera; muchos campamentos incluyen el vuelo en el paquete.",
      },
      {
        day: 5,
        from: "Canaima",
        to: "Caracas",
        modes: ["flight"],
        text: "Vuelta a Maiquetía y noche de conexión antes de Los Roques.",
      },
      {
        day: 6,
        from: "Caracas",
        to: "Los Roques",
        modes: ["small-plane"],
        text: "Avioneta de pocas plazas, de unos 40 minutos, hasta la pista de Gran Roque.",
      },
      {
        day: 9,
        from: "Los Roques",
        to: "Caracas",
        modes: ["small-plane"],
        text: "Regreso a Maiquetía y otra noche de conexión antes de Mérida.",
      },
      {
        day: 10,
        from: "Caracas",
        to: "Mérida",
        modes: ["flight", "road"],
        text: "Vuelo a El Vigía —no a la ciudad de Mérida— y unos 70 km de carretera de montaña.",
      },
      {
        day: 13,
        from: "Mérida",
        to: "Caracas",
        modes: ["road", "flight"],
        text: "Carretera hasta El Vigía y vuelo a Maiquetía. Por tierra, Caracas queda a más de 600 km: no cabe en este viaje.",
      },
      {
        day: 14,
        from: "Caracas",
        to: "Aeropuerto de Maiquetía",
        modes: ["road"],
        text: "Traslado para el vuelo internacional.",
      },
    ],
  },
  budget: {
    title: "Presupuesto",
    lede: "Qué hay que presupuestar. No damos un precio total: las tarifas cambian con la temporada, el operador y la disponibilidad. Canaima y Los Roques, que suelen venderse en paquete, concentran buena parte del gasto.",
    priceLabels: { partner: "Precio del partner", estimate: "Estimación orientativa", updated: "Actualizado" },
    items: [
      { id: "vuelos", title: "Vuelos internos", text: "Seis vuelos dentro del país: ida y vuelta a Canaima, a Los Roques y a El Vigía." },
      { id: "alojamiento", title: "Alojamiento", text: "Trece noches muy distintas: ciudad, campamento con pensión completa y posada de isla." },
      { id: "excursiones", title: "Excursiones", text: "Salto Ángel, lanchas a los cayos, teleférico y páramo. Algunas van en el paquete: pregunta qué incluye." },
      { id: "comidas", title: "Comidas", text: "En Canaima y en muchas posadas de Los Roques suelen ir incluidas; en Caracas y Mérida van aparte." },
      { id: "traslados", title: "Traslados", text: "Aeropuerto de Maiquetía, carretera El Vigía–Mérida y movimientos locales. Mejor reservados que improvisados." },
      { id: "tasas", title: "Entradas y tasas", text: "Canaima y Los Roques cobran entrada al parque nacional, a menudo aparte del paquete y en efectivo. Confirma el importe con tu operador." },
    ],
  },
  before: {
    title: "Antes de reservar",
    lede: "La información que caduca, con su fecha, y seis comprobaciones antes de pagar nada.",
    tips: [
      { title: "Conexiones", text: "Cierra primero los vuelos internos, empezando por Canaima, y después los alojamientos que no se puedan cancelar." },
      { title: "Canaima", text: "Pregunta al campamento qué incluye el paquete, si la excursión al Salto Ángel opera en tus fechas y qué vacunas se recomiendan para la zona." },
      { title: "Los Roques", text: "Confirma a la vez avioneta, posada y traslado al aeropuerto: las plazas son pocas." },
      { title: "Mérida", text: "Entre la ciudad y Pico Espejo hay más de 3.000 metros de desnivel. Sube despacio, bebe agua y lleva capas de abrigo." },
      { title: "Margen", text: "Deja una noche entre etapas: los billetes separados no se protegen entre sí y un retraso te haría perder el siguiente vuelo." },
      { title: "Regreso", text: "Vuelve a Caracas como tarde la víspera del vuelo internacional, con un seguro que cubra cambios." },
    ],
  },
  commercial: {
    cta: {
      whereToStay: "Dónde hospedarse",
      seeStays: "Ver alojamientos",
      seeStay: "Ver alojamiento",
      requestItinerary: "Solicitar itinerario",
      organizedTrip: "Consultar viaje organizado",
    },
    featuredStay: "Alojamiento destacado",
    codeLabel: "Código",
    disclosure:
      "Algunos enlaces de esta guía pueden ser enlaces de afiliado. Si reservas a través de ellos, Mrs Venezuela puede recibir una comisión sin coste adicional para ti.",
    newTab: "se abre en una pestaña nueva",
    tour: {
      title: "¿Prefieres que organicen el viaje por ti?",
      text: "Si no quieres coordinar cada vuelo, alojamiento y traslado por separado, puedes solicitar esta ruta a un operador local.",
      ownTitle: "Organízalo por tu cuenta",
      ownText: "Usa esta ruta como guía y reserva cada etapa por separado: vuelos, alojamientos y excursiones.",
      organizedTitle: "Prefiero que organicen el viaje",
      inlineTitle: "¿Quieres dejar la logística en manos de un operador?",
      services: {
        "airport-reception": "Recepción en Caracas",
        "domestic-flights": "Vuelos internos",
        transfers: "Traslados",
        stays: "Alojamientos",
        excursions: "Excursiones",
        "trip-logistics": "Logística del recorrido",
        "in-trip-assistance": "Asistencia durante el viaje",
      },
    },
  },
  creditsLabel: "Créditos fotográficos",
  creditsNote:
    "La imagen para la portada del sitio y las redes combina cuatro de estas fotografías (Caracas, laguna de Canaima, Cayo de Agua y laguna de Mucubají) y se comparte con sus mismas licencias.",
  credits: [
    { title: "Laguna de Canaima desde el aire", author: "Stig Nygaard", license: "CC BY 2.0", href: "https://commons.wikimedia.org/wiki/File:Take_off..._(42019737374).jpg" },
    { title: "Caracas y el Ávila desde La Florida", author: "Paolo Costa Baldi", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Venezuela_-_Caracas_-_La_Florida.jpg" },
    { title: "Laguna de Canaima", author: "Wilnel José Verdú Guerrero", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Laguna-de-Canaima.jpg" },
    { title: "Salto Ángel desde el mirador Laime", author: "Diego Delso", license: "CC BY 3.0", href: "https://commons.wikimedia.org/wiki/File:Salto_del_Angel-Canaima-Venezuela03.JPG" },
    { title: "Sendero tras la cortina del Salto El Sapo", author: "Diego Delso", license: "CC BY 3.0", href: "https://commons.wikimedia.org/wiki/File:Salto_Sapo-Canaima-Venezuela09.JPG" },
    { title: "Gran Roque desde el aire", author: "Berrucomons", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Village_Gran_Roque.jpg" },
    { title: "Cayo Madrisquí", author: "M. Celeste Rabbat", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Cayo_Madrisqui_calmo_y_tranquilo.JPG" },
    { title: "Istmo de Cayo de Agua", author: "Tucanrecords", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Cayo_de_Agua_in_Los_Roques.jpg" },
    { title: "Gran Roque desde el mar", author: "M. Celeste Rabbat", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:A_punto_de_llegar.JPG" },
    { title: "Plaza Bolívar de Mérida con el Pico Bolívar", author: "Jarrypalomino", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Pico_Bol%C3%ADvar_desde_la_plaza_Bol%C3%ADvar_de_M%C3%A9rida.jpg" },
    { title: "Estación de Pico Espejo, teleférico Mukumbarí", author: "Samael Marco", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Telef%C3%A9rico_de_M%C3%A9rida_estaci%C3%B3n_pico_espejo.jpg" },
    { title: "Laguna de Mucubají", author: "Cesar Pérez", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Laguna_de_Mucubaji_en_20015_05.jpg" },
  ],
};
