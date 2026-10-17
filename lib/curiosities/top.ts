import type { ActiveLanguageCode } from "@/lib/i18n";
import { sources } from "./content";

export const topStoryIds = ["moran", "coromoto", "yulimar", "catatumbo", "miss", "cabrera", "carreno", "orchestra", "herrera", "casabe"] as const;
export type TopStoryId = typeof topStoryIds[number];
export const storyAnchor = (id: TopStoryId) => id === "herrera" ? "carolina-herrera" : id === "miss" ? "reinados" : id === "catatumbo" ? "pais" : id;
export const topSources = {
  ...sources,
  catatumbo: { label: "NASA · 2016", href: "https://www.nasa.gov/missions/trmm/earths-new-lightning-capital-revealed/" },
};
// One surprising fact per card; archive biographies remain in content.ts, not rendered here.
type Fact = { title: string; text: string };
type Copy = { title: string; intro: string; eyebrow: string; source: string; stories: Record<TopStoryId, Fact> };
export const topCopy: Record<ActiveLanguageCode, Copy> = {
  es: {
    title: "Top 10 curiosidades de Venezuela",
    eyebrow: "Más allá de lo que ya conoces",
    intro: "Helados de ajo, una corona que se quedó en casa y una niña que tocó para Lincoln. Diez datos para mirar Venezuela de otra manera.",
    source: "Ver fuente",
    stories: {
      moran: { title: "Un venezolano inventó el bisturí de diamante", text: "Humberto Fernández-Morán desarrolló una cuchilla de diamante para cortar muestras ultrafinas. Publicada en 1953, su invención permitió preparar tejidos para observarlos con microscopía electrónica." },
      coromoto: { title: "En Mérida hicieron helados de ajo y macarrones", text: "La heladería Coromoto llegó al libro Guinness en 1991 por su variedad de sabores. En su repertorio histórico aparecen ajo, cebolla y macarrones con queso; no es la carta actual." },
      yulimar: { title: "El mejor salto llegó en el último intento", text: "En Belgrado 2022, Yulimar Rojas saltó 15,74 metros en su sexto intento y rompió el récord mundial de triple salto. Superó por un metro a la medallista de plata." },
      catatumbo: { title: "La capital de los relámpagos está en Venezuela", text: "Un estudio divulgado por la NASA en 2016 situó al lago de Maracaibo a la cabeza mundial de la actividad de rayos. Registró unos 233 destellos por kilómetro cuadrado al año." },
      miss: { title: "Una venezolana coronó a otra en Miss Universo", text: "Dayana Mendoza ganó en 2008 y entregó la corona a Stefanía Fernández en 2009. Ese triunfo consecutivo, conocido como back to back, dejó la corona en Venezuela dos años seguidos." },
      cabrera: { title: "Miguel Cabrera terminó una espera de 45 años", text: "En 2012 lideró la Liga Americana en promedio de bateo, jonrones y carreras impulsadas. Ganó la Triple Corona: nadie en las Grandes Ligas había reunido las tres desde 1967." },
      carreno: { title: "Una niña de Caracas tocó para Abraham Lincoln", text: "Teresa Carreño tenía nueve años cuando actuó en la Casa Blanca en 1863. Mucho antes de dar nombre al teatro caraqueño, ya sorprendía como pianista fuera de Venezuela." },
      orchestra: { title: "8.573 músicos tocaron una misma obra", text: "El Sistema reunió en Caracas la orquesta que Guinness certificó en 2021 con 8.573 músicos. Interpretaron la Marcha eslava de Chaikovski: miles de instrumentos siguiendo una misma partitura." },
      herrera: { title: "Carolina Herrera estrenó su firma en Nueva York", text: "La diseñadora nacida en Caracas presentó su primera colección en el Metropolitan Club en 1981. Diana Vreeland, una figura clave de la moda, la había animado a dar el paso." },
      casabe: { title: "Este pan de yuca tiene reconocimiento de la UNESCO", text: "En 2024, los saberes para elaborar y consumir casabe entraron en la lista de patrimonio cultural inmaterial. Venezuela compartió la candidatura con Cuba, Haití, Honduras y República Dominicana." },
    },
  },
  en: {
    title: "Top 10 fascinating facts about Venezuela", eyebrow: "Beyond the familiar",
    intro: "Garlic ice cream, a crown that stayed home and a girl who played for Lincoln. Ten reasons to see Venezuela differently.", source: "View source",
    stories: {
      moran: { title: "A Venezuelan invented the diamond knife", text: "Humberto Fernández-Morán developed a diamond blade for cutting ultrathin samples. Published in 1953, his invention helped prepare tissue for electron microscopy." },
      coromoto: { title: "Mérida made garlic and macaroni ice cream", text: "Coromoto entered the Guinness book in 1991 for its variety of flavours. Its historical repertoire includes garlic, onion and macaroni with cheese; this is not today's menu." },
      yulimar: { title: "The best jump came on the final attempt", text: "In Belgrade in 2022, Yulimar Rojas jumped 15.74 metres on her sixth attempt, breaking the triple jump world record. She finished a metre ahead of the silver medallist." },
      catatumbo: { title: "The lightning capital is in Venezuela", text: "A study publicised by NASA in 2016 ranked Lake Maracaibo first worldwide for lightning activity. It recorded about 233 flashes per square kilometre per year." },
      miss: { title: "One Venezuelan crowned another Miss Universe", text: "Dayana Mendoza won in 2008 and handed the crown to Stefanía Fernández in 2009. Their back-to-back victories kept the title in Venezuela for two consecutive years." },
      cabrera: { title: "Miguel Cabrera ended a 45-year wait", text: "In 2012 he led the American League in batting average, home runs and runs batted in. He won the Triple Crown, a feat no major-league player had achieved since 1967." },
      carreno: { title: "A girl from Caracas played for Abraham Lincoln", text: "Teresa Carreño was nine when she performed at the White House in 1863. Long before a Caracas theatre bore her name, she was astonishing audiences abroad as a pianist." },
      orchestra: { title: "8,573 musicians played a single work", text: "El Sistema brought together the Caracas orchestra that Guinness certified with 8,573 musicians in 2021. They played Tchaikovsky's Slavonic March, thousands of instruments following the same score." },
      herrera: { title: "Carolina Herrera launched her label in New York", text: "The Caracas-born designer presented her first collection at the Metropolitan Club in 1981. Fashion figure Diana Vreeland had encouraged her to take the step." },
      casabe: { title: "This cassava bread has UNESCO recognition", text: "In 2024, the knowledge of making and consuming cassava bread entered UNESCO's intangible heritage list. Venezuela shared the nomination with Cuba, Haiti, Honduras and the Dominican Republic." },
    },
  },
  de: {
    title: "Top 10: spannende Fakten über Venezuela", eyebrow: "Mehr als das Bekannte",
    intro: "Knoblaucheis, eine Krone, die im Land blieb, und ein Mädchen, das für Lincoln spielte. Zehn überraschende Seiten Venezuelas.", source: "Quelle ansehen",
    stories: {
      moran: { title: "Ein Venezolaner erfand das Diamantmesser", text: "Humberto Fernández-Morán entwickelte eine Diamantklinge für hauchdünne Proben. Seine 1953 veröffentlichte Erfindung half, Gewebe für die Elektronenmikroskopie vorzubereiten." },
      coromoto: { title: "In Mérida gab es Knoblauch- und Makkaronieis", text: "Coromoto kam 1991 wegen seiner Sortenvielfalt ins Guinness-Buch. Zum historischen Repertoire gehören Knoblauch, Zwiebel und Makkaroni mit Käse; dies ist nicht die heutige Eiskarte." },
      yulimar: { title: "Der beste Sprung gelang im letzten Versuch", text: "Yulimar Rojas sprang 2022 in Belgrad im sechsten Versuch 15,74 Meter und brach den Dreisprung-Weltrekord. Sie lag einen Meter vor der Silbermedaillengewinnerin." },
      catatumbo: { title: "Die Blitzhauptstadt liegt in Venezuela", text: "Eine 2016 von der NASA vorgestellte Studie setzte den Maracaibo-See bei der Blitzaktivität weltweit an die Spitze. Sie erfasste etwa 233 Blitze pro Quadratkilometer im Jahr." },
      miss: { title: "Eine Venezolanerin krönte die nächste Miss Universe", text: "Dayana Mendoza gewann 2008 und übergab die Krone 2009 an Stefanía Fernández. Durch diese aufeinanderfolgenden Siege blieb der Titel zwei Jahre in Venezuela." },
      cabrera: { title: "Miguel Cabrera beendete 45 Jahre Wartezeit", text: "2012 führte er die American League bei Schlagdurchschnitt, Home Runs und hereingeschlagenen Runs an. Damit gewann er die Triple Crown, die in den Major Leagues seit 1967 niemand erreicht hatte." },
      carreno: { title: "Ein Mädchen aus Caracas spielte für Abraham Lincoln", text: "Teresa Carreño war neun, als sie 1863 im Weißen Haus auftrat. Lange bevor ein Theater in Caracas ihren Namen trug, begeisterte sie als Pianistin im Ausland." },
      orchestra: { title: "8.573 Musiker spielten ein einziges Werk", text: "El Sistema vereinte in Caracas das Orchester, für das Guinness 2021 genau 8.573 Musiker bestätigte. Sie spielten Tschaikowskys Slawischen Marsch, Tausende Instrumente nach derselben Partitur." },
      herrera: { title: "Carolina Herrera startete ihre Marke in New York", text: "Die in Caracas geborene Designerin stellte 1981 im Metropolitan Club ihre erste Kollektion vor. Modeikone Diana Vreeland hatte sie zu diesem Schritt ermutigt." },
      casabe: { title: "Dieses Maniokbrot wird von der UNESCO anerkannt", text: "2024 wurden die Kenntnisse zur Herstellung und zum Verzehr von Casabe in die Liste des immateriellen Kulturerbes aufgenommen. Venezuela teilte die Bewerbung mit Kuba, Haiti, Honduras und der Dominikanischen Republik." },
    },
  },
  fr: {
    title: "Top 10 des curiosités du Venezuela", eyebrow: "Au-delà des idées reçues",
    intro: "Des glaces à l'ail, une couronne restée au pays et une enfant qui joua pour Lincoln. Dix raisons de découvrir le Venezuela autrement.", source: "Voir la source",
    stories: {
      moran: { title: "Un Vénézuélien a inventé le couteau de diamant", text: "Humberto Fernández-Morán a développé une lame de diamant pour découper des échantillons ultrafins. Publiée en 1953, son invention a aidé à préparer les tissus pour la microscopie électronique." },
      coromoto: { title: "À Mérida, des glaces à l'ail et aux macaronis", text: "Coromoto est entré dans le livre Guinness en 1991 pour sa diversité de parfums. Son répertoire historique comprend ail, oignon et macaronis au fromage ; ce n'est pas la carte actuelle." },
      yulimar: { title: "Le meilleur saut arriva au dernier essai", text: "À Belgrade en 2022, Yulimar Rojas sauta 15,74 mètres à son sixième essai, battant le record du monde du triple saut. Elle devança d'un mètre la médaillée d'argent." },
      catatumbo: { title: "La capitale des éclairs se trouve au Venezuela", text: "Une étude présentée par la NASA en 2016 plaça le lac Maracaibo en tête mondiale pour l'activité électrique. Elle comptait environ 233 éclairs par kilomètre carré et par an." },
      miss: { title: "Une Vénézuélienne en couronna une autre Miss Universe", text: "Dayana Mendoza gagna en 2008 et transmit la couronne à Stefanía Fernández en 2009. Ces victoires consécutives gardèrent le titre au Venezuela pendant deux années de suite." },
      cabrera: { title: "Miguel Cabrera mit fin à 45 ans d'attente", text: "En 2012, il domina la Ligue américaine en moyenne au bâton, circuits et points produits. Il gagna la Triple Couronne, un exploit inédit dans les ligues majeures depuis 1967." },
      carreno: { title: "Une enfant de Caracas joua pour Abraham Lincoln", text: "Teresa Carreño avait neuf ans lorsqu'elle se produisit à la Maison-Blanche en 1863. Bien avant qu'un théâtre de Caracas porte son nom, elle impressionnait déjà comme pianiste à l'étranger." },
      orchestra: { title: "8 573 musiciens jouèrent une même œuvre", text: "El Sistema réunit à Caracas l'orchestre dont Guinness certifia les 8 573 musiciens en 2021. Ils jouèrent la Marche slave de Tchaïkovski, des milliers d'instruments suivant une même partition." },
      herrera: { title: "Carolina Herrera lança sa marque à New York", text: "La créatrice née à Caracas présenta sa première collection au Metropolitan Club en 1981. Diana Vreeland, figure de la mode, l'avait encouragée à franchir le pas." },
      casabe: { title: "Ce pain de manioc est reconnu par l'UNESCO", text: "En 2024, les savoir-faire liés à la fabrication et à la consommation du casabe entrèrent au patrimoine culturel immatériel. Le Venezuela partagea la candidature avec Cuba, Haïti, le Honduras et la République dominicaine." },
    },
  },
};
