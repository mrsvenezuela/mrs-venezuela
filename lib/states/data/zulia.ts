import { commonsImage as commons } from "@/lib/commons-image";
import type { StateGuideData } from "@/lib/states/types";


const photos = {
  catatumbo: { src: commons("Catatumbo Lightning (141677107).jpeg"), alt: "Relámpago del Catatumbo sobre el sur del Lago de Maracaibo, estado Zulia", position: "center 80%" },
  puente: { src: commons("Puente General Rafael Urdaneta.jpg"), alt: "Puente General Rafael Urdaneta sobre el Lago de Maracaibo, estado Zulia", position: "center 45%" },
  basilica: { src: commons("Basílica de la Chiquinquira.jpg"), alt: "Basílica de Nuestra Señora de Chiquinquirá, La Chinita, en el centro de Maracaibo, estado Zulia", position: "center 40%" },
};

export const zulia: StateGuideData = {
  slug: "zulia",
  name: "Zulia",
  heroKicker: "Occidente de Venezuela",
  heroTagline: "Lago, calor, gaita y relámpagos.",
  hero: { src: "/images/commons/zulia-maracaibo.jpg", alt: "El casco histórico de Maracaibo con la cúpula de la catedral y el lago al fondo, estado Zulia", position: "center 55%" },

  intro: {
    eyebrow: "Guía de estado",
    title: "Zulia, el gran paisaje del occidente venezolano.",
    paragraphs: [
      "Zulia se vive con amplitud: el Lago de Maracaibo abre el horizonte, Maracaibo sostiene un ritmo propio y el occidente venezolano cambia de paisaje entre costa, humedales y montañas.",
      "Es un estado para escuchar gaita, probar una cocina sin timidez y descubrir una identidad que se reconoce en su forma de hablar, en la devoción a La Chinita y en la hospitalidad de su gente.",
    ],
    aside: { label: "En una frase", text: "Un estado que siempre miró hacia el lago." },
  },

  know: {
    title: "CONOCE ZULIA",
    description: "Dónde está, cómo es y por qué se recorre de varias maneras.",
    paragraphs: [
      "Está al noroeste de Venezuela, junto a Colombia y el golfo de Venezuela. Su geografía gira alrededor de la cuenca del Lago de Maracaibo, una gran vía natural que conecta ciudades, ríos y costa.",
      "Al oeste se levanta la Sierra de Perijá; hacia el sur, los humedales y el sistema del Catatumbo marcan la transición hacia paisajes más húmedos. Esa mezcla explica por qué Zulia no se recorre de una sola manera.",
      "Maracaibo, la capital, concentra la vida urbana y la puerta de entrada habitual. En un mismo viaje puedes recorrer la ciudad, cruzar el Puente sobre el Lago, acercarte a la Sierra de Perijá o seguir las rutas del sur.",
    ],
    facts: [
      { label: "Capital", value: "Maracaibo" },
      { label: "Región", value: "Occidente de Venezuela" },
      { label: "Paisaje", value: "Lago, costa, humedales y la Sierra de Perijá" },
      { label: "Superficie", value: "63.100 km²" },
      { label: "Clima", value: "Cálido, tropical y semiárido en gran parte del territorio" },
      { label: "Gentilicio", value: "Zuliano / zuliana" },
    ],
  },

  history: {
    description: "Una región que siempre miró hacia el lago.",
    paragraphs: [
      "Antes de las rutas coloniales, los territorios zulianos eran hogar de pueblos como los wayuu, añú, barí y yukpa. Sus vínculos con el agua, el comercio y el territorio siguen siendo esenciales para entender el estado: los añú, por ejemplo, dieron forma a la vida en palafitos de la laguna de Sinamaica.",
      "Maracaibo fue fundada en el siglo XVI y creció como puerto del lago, punto de salida de los productos de la región andina y de entrada de mercancías. Durante la colonia se convirtió en un enclave estratégico del occidente.",
      "En 1823, la batalla naval del Lago de Maracaibo se convirtió en un episodio decisivo para la consolidación de la independencia venezolana. Un siglo después, el descubrimiento de petróleo en la cuenca transformó la escala económica y urbana de la región.",
      "Hoy, Zulia reúne esa memoria histórica con una identidad cultural que sigue siendo profundamente local: la gaita, la devoción a La Chinita, las artesanías wayuu y una manera muy particular de hablar.",
    ],
    photo: photos.basilica,
  },

  defines: {
    title: "LO QUE DEFINE AL ZULIA",
    description: "Tres elementos que cuentan parte de su identidad.",
    panorama: photos.catatumbo,
    items: [
      {
        name: "El Lago de Maracaibo",
        text: "El gran espejo de agua que organiza la vida, el paisaje y las rutas de todo el estado. Conectado con el golfo de Venezuela, es uno de los rasgos geográficos más reconocibles del país, y el Puente General Rafael Urdaneta lo cruza uniendo sus dos orillas.",
      },
      {
        name: "El Relámpago del Catatumbo",
        text: "Sobre la desembocadura del río Catatumbo, en el sur del lago, las tormentas eléctricas se repiten durante buena parte del año y convierten el cielo nocturno en paisaje. Una noche junto al lago puede revelar uno de los fenómenos atmosféricos más célebres del planeta.",
      },
      {
        name: "La gaita y La Chinita",
        text: "La identidad zuliana se escucha y se celebra. La gaita, especialmente presente al final del año, es una de las bandas sonoras culturales del país, y la Basílica de La Chinita concentra cada noviembre una celebración que transforma el pulso de Maracaibo.",
      },
    ],
  },

  places: {
    description: "Una selección para entrar en Zulia por distintas puertas.",
    items: [
      {
        name: "Maracaibo y su casco histórico",
        text: "La capital se recorre entre el Paseo del Lago, las casas de colores de la calle Carabobo, la Basílica de La Chinita y los mercados que resumen el sabor y el carácter de la ciudad.",
        photo: photos.basilica,
      },
      {
        name: "Puente sobre el Lago",
        text: "El Puente General Rafael Urdaneta une Maracaibo con la costa oriental del lago. Cruzarlo es una de las experiencias más reconocibles del estado, con el agua abriéndose a ambos lados.",
        photo: photos.puente,
      },
      {
        name: "Relámpago del Catatumbo",
        text: "Las excursiones parten hacia el sur del lago, donde la noche se ilumina de tormentas. Se organizan con operadores locales y dependen de la temporada y del clima.",
        photo: null,
      },
      {
        name: "Laguna de Sinamaica",
        text: "Al norte de Maracaibo, los palafitos de la laguna recuerdan el modo de vida añú sobre el agua. Se visita en embarcación, con calma, escuchando a quienes la habitan.",
        photo: null,
      },
      {
        name: "Sierra de Perijá",
        text: "Al oeste, la frontera con Colombia se levanta en montaña y bosque, territorio de los pueblos barí y yukpa. Es el Zulia menos conocido y el que exige mayor planificación.",
        photo: null,
      },
    ],
  },

  culture: {
    description: "Una identidad que se escucha, se celebra y se come.",
    intro: "El sabor zuliano combina plátano, queso y frituras en recetas generosas, mientras la gaita y la devoción a La Chinita marcan el calendario de todo el estado.",
    blocks: [
      {
        label: "Gastronomía",
        title: "Una cocina que no pasa desapercibida.",
        items: [
          { name: "Patacón zuliano", text: "Plátano verde frito que abraza rellenos generosos. Es calle, sabor y personalidad maracucha en un solo plato." },
          { name: "Mandoca", text: "Rosquilla de plátano maduro y harina de maíz, tradicionalmente acompañada con queso. Su dulzor suave la hace inconfundible." },
          { name: "Yoyo", text: "Dos tajadas de plátano maduro rellenas con queso y rebozadas. Una mezcla intensa de dulce, salado y textura crujiente." },
          { name: "Tumbarrancho", text: "Arepa frita, rellena y contundente. Un clásico de la comida rápida zuliana que se disfruta mejor recién hecha." },
        ],
      },
      {
        label: "Música",
        title: "La gaita zuliana",
        text: "Con tambora, furro, cuatro, charrasca y maracas, la gaita acompaña la Navidad venezolana desde el Zulia. Sus letras mezclan devoción, humor y crítica social, y suenan con más fuerza entre noviembre y diciembre.",
      },
      {
        label: "Celebraciones",
        title: "La Feria de La Chinita",
        text: "Cada 18 de noviembre, Maracaibo celebra a Nuestra Señora de Chiquinquirá, La Chinita. La víspera, con gaitas y fuegos artificiales frente a la Basílica, es una de las noches más esperadas del año en la ciudad.",
      },
      {
        label: "Artesanía",
        title: "Tejidos wayuu",
        text: "Las mantas, los chinchorros y las mochilas tejidas por mujeres wayuu son una expresión viva de la Guajira. Comprarlas directamente a las artesanas es la mejor manera de apoyar su trabajo.",
      },
    ],
  },

  nature: {
    description: "Un territorio de agua, humedales y montaña.",
    intro: "El Lago de Maracaibo es el gran protagonista, pero Zulia va mucho más allá de su orilla: el sur reúne ríos y ciénagas, la Sierra de Perijá suma relieve y bosque, y el Catatumbo convierte el cielo nocturno en paisaje.",
    items: [
      { name: "Lago de Maracaibo", text: "Una gran cuenca de agua salobre conectada con el golfo de Venezuela. Organiza el clima, la economía y las rutas de todo el estado." },
      { name: "Ciénagas del sur", text: "En la desembocadura del Catatumbo, el Parque Nacional Ciénagas de Juan Manuel protege humedales, manglares y una fauna acuática abundante." },
      { name: "Sierra de Perijá", text: "El Parque Nacional Sierra de Perijá, en la frontera con Colombia, reúne bosques de montaña, ríos y el territorio de los pueblos barí y yukpa." },
      { name: "Ciénaga de Los Olivitos", text: "Al noreste del lago, este refugio de fauna silvestre es conocido por las concentraciones de flamencos y aves costeras." },
    ],
  },

  access: {
    description: "Llegar a Zulia.",
    intro: "Maracaibo es la puerta habitual. Desde allí se organizan las rutas hacia el lago, la Guajira y el sur.",
    routes: [
      { mode: "aire", title: "Por aire", text: "Maracaibo cuenta con el Aeropuerto Internacional La Chinita, principal puerta aérea del estado. Confirma rutas y horarios directamente con la aerolínea antes de planificar." },
      { mode: "carretera", title: "Por carretera", text: "Las conexiones terrestres enlazan Maracaibo con Falcón, Lara, Trujillo y el centro del país. Desde la costa oriental del lago se entra a la ciudad por el Puente General Rafael Urdaneta." },
      { mode: "rio", title: "Por agua", text: "Para la laguna de Sinamaica y el sur del lago, la navegación forma parte del recorrido. Coordina siempre con operadores locales registrados, especialmente en rutas de naturaleza." },
    ],
  },

  tips: {
    description: "El calor marca el ritmo del viaje.",
    items: [
      { icon: "sun", title: "Calor durante todo el año", text: "Maracaibo es una de las ciudades más calurosas del país. Planifica las caminatas temprano o al final de la tarde." },
      { icon: "droplets", title: "Hidratación constante", text: "Lleva agua siempre contigo; el calor y la humedad se sienten más de lo que parece." },
      { icon: "clock", title: "El Catatumbo es nocturno", text: "Las excursiones al relámpago se hacen de noche y dependen del clima. Resérvalas con operadores locales y con margen de días." },
      { icon: "users", title: "Respeto en la Guajira", text: "En comunidades wayuu y añú, pregunta antes de fotografiar y compra la artesanía directamente a quienes la hacen." },
      { icon: "shirt", title: "Ropa ligera y sombra", text: "Tejidos frescos, sombrero y protector solar. En el lago y la laguna el reflejo del agua intensifica el sol." },
    ],
  },

  faqs: {
    description: "Lo que suele preguntarse antes de viajar a Zulia.",
    items: [
      { question: "¿Cuántos días conviene dedicar a Zulia?", answer: "Dos o tres días permiten conocer Maracaibo y cruzar el puente. Una excursión al Catatumbo o a la laguna de Sinamaica suma al menos un día más." },
      { question: "¿Cuándo se puede ver el Relámpago del Catatumbo?", answer: "Se observa de noche, durante buena parte del año, aunque su intensidad varía con la temporada y el clima. Los operadores locales saben cuándo son las mejores noches." },
      { question: "¿Hace mucho calor en Maracaibo?", answer: "Sí. El clima es cálido durante todo el año, con temperaturas altas a mediodía. Las primeras horas y el atardecer son los momentos más agradables." },
      { question: "¿Qué es la gaita?", answer: "Es el género musical más representativo del Zulia, con tambora, furro y cuatro. Suena sobre todo en noviembre y diciembre, y acompaña la Navidad en todo el país." },
      { question: "¿Se puede visitar la Sierra de Perijá?", answer: "Sí, pero es el destino que más planificación exige: carreteras largas, zonas rurales y comunidades indígenas. Conviene ir con guías locales y respetar sus indicaciones." },
    ],
  },

  credits: [
    { title: "Casco histórico de Maracaibo", author: "Wilfredor", license: "CC0 1.0", href: "https://commons.wikimedia.org/wiki/File:Panoramic_view_of_Maracaibo_center_and_cathedral_dome.jpg" },
    { title: "Relámpago del Catatumbo", author: "Fernando Flores", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Catatumbo_Lightning_(141677107).jpeg" },
    { title: "Puente General Rafael Urdaneta", author: "Orlando Pozo", license: "CC BY 2.0", href: "https://commons.wikimedia.org/wiki/File:Puente_General_Rafael_Urdaneta.jpg" },
    { title: "Basílica de La Chinita", author: "Wilfredor", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Bas%C3%ADlica_de_la_Chiquinquira.jpg" },
  ],

  seo: {
    title: "Zulia: guía del Lago de Maracaibo y el Catatumbo",
    description: "Guía editorial de Zulia: Maracaibo, el Lago, el Relámpago del Catatumbo, la gaita y la cocina zuliana. Historia, lugares, naturaleza y consejos de viaje.",
  },

  layout: { historyPhotoSide: "right", placesFirstPhotoSide: "left", cultureTone: "dark" },
};
