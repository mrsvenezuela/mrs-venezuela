import type { ActiveLanguageCode } from "@/lib/i18n";

export const editorialSections = ["talento", "arte-musica", "records", "historias", "pais"] as const;
type EditorialCopy = {
  eyebrow: string; intro: string; orchid: string;
  headings: [string, string, string, string, string];
  navigation: [string, string, string, string, string];
  musicians: string; crowns: string; backToBack: string;
  captions: { carreno: string; abreu: string; catatumbo: string; diablos: string; cabrera: string; orchestra: string };
};

export const editorialCopy: Record<ActiveLanguageCode, EditorialCopy> = {
  es: {
    eyebrow: "Otra mirada al país", intro: "Personas, ideas e historias que merecen ser descubiertas.", orchid: "Flor de mayo · Cattleya mossiae",
    headings: ["Ideas que cambiaron cosas", "Talento que cruzó fronteras", "Hazañas para recordar", "Historias inesperadas", "Un país fuera de lo común"],
    navigation: ["Ciencia", "Arte y música", "Hazañas", "Curiosidades", "Naturaleza"],
    musicians: "músicos", crowns: "coronas de Miss Universo", backToBack: "La corona se quedó en casa",
    captions: {carreno:"Teresa Carreño, 1910. Fotografía de archivo.",abreu:"José Antonio Abreu, 2007.",catatumbo:"Relámpagos del Catatumbo, Zulia.",diablos:"Diablos Danzantes de Yare, con sus máscaras y trajes.",cabrera:"Miguel Cabrera bateando contra los Angels · 9 de septiembre de 2012.",orchestra:"Sinfónica Simón Bolívar · São Paulo, 2013. No es el concierto del récord."},
  },
  en: {
    eyebrow: "Another view of the country", intro: "People, ideas and stories worth discovering.", orchid: "May flower orchid · Cattleya mossiae",
    headings: ["Ideas that made a difference", "Talent beyond borders", "Achievements to remember", "Unexpected stories", "A country unlike any other"],
    navigation: ["Science", "Art and music", "Achievements", "Curiosities", "Nature"],
    musicians: "musicians", crowns: "Miss Universe crowns", backToBack: "The crown stayed at home",
    captions: {carreno:"Teresa Carreño, 1910. Archive photograph.",abreu:"José Antonio Abreu, 2007.",catatumbo:"Catatumbo lightning, Zulia.",diablos:"Dancing Devils of Yare in their masks and costumes.",cabrera:"Miguel Cabrera batting against the Angels · 9 September 2012.",orchestra:"Simón Bolívar Symphony Orchestra · São Paulo, 2013. Not the record concert."},
  },
  de: {
    eyebrow: "Ein anderer Blick auf das Land", intro: "Menschen, Ideen und Geschichten, die es zu entdecken lohnt.", orchid: "Mai-Orchidee · Cattleya mossiae",
    headings: ["Ideen, die etwas veränderten", "Talent über Grenzen hinweg", "Leistungen, die bleiben", "Unerwartete Geschichten", "Ein außergewöhnliches Land"],
    navigation: ["Wissenschaft", "Kunst und Musik", "Leistungen", "Kurioses", "Natur"],
    musicians: "Musiker", crowns: "Miss-Universe-Kronen", backToBack: "Die Krone blieb im Land",
    captions: {carreno:"Teresa Carreño, 1910. Archivfoto.",abreu:"José Antonio Abreu, 2007.",catatumbo:"Catatumbo-Blitze, Zulia.",diablos:"Tanzende Teufel von Yare mit ihren Masken und Kostümen.",cabrera:"Miguel Cabrera beim Schlag gegen die Angels · 9. September 2012.",orchestra:"Simón-Bolívar-Sinfonieorchester · São Paulo, 2013. Nicht das Rekordkonzert."},
  },
  fr: {
    eyebrow: "Un autre regard sur le pays", intro: "Des personnes, des idées et des histoires à découvrir.", orchid: "Orchidée fleur de mai · Cattleya mossiae",
    headings: ["Des idées qui ont changé les choses", "Des talents au-delà des frontières", "Des exploits à retenir", "Des histoires inattendues", "Un pays hors du commun"],
    navigation: ["Sciences", "Arts et musique", "Exploits", "Curiosités", "Nature"],
    musicians: "musiciens", crowns: "couronnes de Miss Universe", backToBack: "La couronne est restée au pays",
    captions: {carreno:"Teresa Carreño, 1910. Photographie d’archives.",abreu:"José Antonio Abreu, 2007.",catatumbo:"Éclairs du Catatumbo, Zulia.",diablos:"Diables danseurs de Yare avec leurs masques et costumes.",cabrera:"Miguel Cabrera à la batte face aux Angels · 9 septembre 2012.",orchestra:"Orchestre symphonique Simón Bolívar · São Paulo, 2013. Ce n’est pas le concert du record."},
  },
};

export const additionalPhotoCredits = {
  diablos: {src:"/images/commons/diablos-yare-trajes.jpg",author:"Josedrg08",license:"CC BY-SA 4.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/",href:"https://commons.wikimedia.org/wiki/File:Danzantes_de_Yare.jpg"},
  orchid: {src:"/images/nature/orchid.jpg",author:"QuazDelaCruz",license:"CC0",licenseUrl:"https://creativecommons.org/publicdomain/zero/1.0/",href:"https://commons.wikimedia.org/wiki/File:Cattleya_mossiae_tipo.jpg"},
};
