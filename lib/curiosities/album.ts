import type { ActiveLanguageCode } from "@/lib/i18n";
import type { Story, StoryId } from "./content";

export const albumSections = ["talento", "records", "historias", "tradiciones", "reinados"] as const;
export const newStoryIds = ["dudamel", "parra", "reveron", "aparicio"] as const;
export type NewStoryId = typeof newStoryIds[number];
export type AlbumStoryId = StoryId | NewStoryId;
export const albumGroups = {
  portraits: ["moran", "carreno", "herrera", "convit", "abreu", "cruz"],
  people: ["dudamel", "parra", "reveron", "benacerraf", "soto"],
  achievements: ["yulimar", "cabrera", "orchestra", "aparicio"],
  curiosities: ["coromoto"],
  traditions: ["casabe", "diablos"],
} as const;

export const newSources: Record<NewStoryId, { label: string; href: string }> = {
  dudamel: { label: "LA Phil · Gustavo Dudamel", href: "https://www.laphil.com/people/gustavo-dudamel" },
  parra: { label: "Instituto Cervantes · Teresa de la Parra", href: "https://cultura.cervantes.es/espanya/es/leemos-a...-teresa-de-la-parra/173550" },
  reveron: { label: "MoMA · Armando Reverón", href: "https://www.moma.org/artists/27447-armando-reveron" },
  aparicio: { label: "National Baseball Hall of Fame · Luis Aparicio", href: "https://baseballhall.org/hall-of-famers/aparicio-luis" },
};

type AlbumCopy = {
  eyebrow: string; intro: string; morePeople: string; nature: string;
  headings: [string, string, string, string, string];
  navigation: [string, string, string, string, string];
  questions: Partial<Record<StoryId, string>>;
  stories: Record<NewStoryId, Story>;
};

export const albumCopy: Record<ActiveLanguageCode, AlbumCopy> = {
  es: {
    eyebrow: "Personas, ideas y sorpresas", intro: "Historias que te acercan a otra Venezuela.",
    morePeople: "Más personas, más formas de dejar huella", nature: "Y un cielo que también sorprende",
    headings: ["Personas que dejaron huella", "Hazañas que sorprenden", "Curiosidades del país", "Tradiciones con historia", "Un país que vive los reinados"],
    navigation: ["Personas", "Hazañas", "Curiosidades", "Tradiciones", "Reinados"],
    questions: {
      moran: "¿Un diamante al servicio de la ciencia?", carreno: "¿Quién estaba detrás del nombre del teatro?",
      herrera: "¿Cómo llegó de Caracas a las pasarelas?", convit: "¿Cómo poner la ciencia al servicio de las personas?",
      abreu: "¿Qué puede comenzar con una orquesta?", cruz: "¿Puede cambiar el color cuando te mueves?",
      yulimar: "¿Hasta dónde puede llegar un salto?", cabrera: "¿Qué hizo excepcional su temporada de 2012?",
      orchestra: "¿Cómo suenan miles de músicos juntos?", coromoto: "¿Una heladería con cientos de sabores?",
      casabe: "¿Cuánta memoria cabe en un pan?", diablos: "¿Qué cuentan estas máscaras?",
    },
    stories: {
      dudamel: { title: "¿Cómo empezó el director de Barquisimeto?", text: "Gustavo Dudamel nació en Barquisimeto en 1981. De niño aprendió violín, aunque pronto le atrajo dirigir.", detail: "Su formación en El Sistema enlaza su trayectoria internacional con las orquestas juveniles venezolanas: aprender música también era aprender a tocar juntos." },
      parra: { title: "¿Quién escribió Ifigenia?", text: "Teresa de la Parra publicó Ifigenia en 1924 y Memorias de Mamá Blanca en 1929.", detail: "Sus novelas abren otra ventana a Venezuela: la mirada de las mujeres, los recuerdos de infancia y las transformaciones de la sociedad." },
      reveron: { title: "¿Cómo se pinta la luz del Caribe?", text: "Armando Reverón hizo de la luz de la costa venezolana una búsqueda artística. Sus paisajes blancos son parte de esa exploración.", detail: "En 2007, el MoMA le dedicó una exposición: una manera de acercarse al país a través de la pintura." },
      aparicio: { title: "¿Quién abrió la puerta de Cooperstown?", text: "En 1984, Luis Aparicio fue el primer venezolano en ingresar al Salón de la Fama del Béisbol. Había nacido en Maracaibo.", detail: "Su legado combina velocidad y defensa: ganó nueve Guantes de Oro. La historia venezolana en Grandes Ligas también se cuenta desde el campocorto." },
    },
  },
  en: {
    eyebrow: "People, ideas and surprises", intro: "Stories that bring you closer to another Venezuela.",
    morePeople: "More people, more ways to make a difference", nature: "And a sky that surprises too",
    headings: ["People who left a mark", "Remarkable achievements", "Curiosities of the country", "Traditions with a story", "A country with a passion for pageants"],
    navigation: ["People", "Achievements", "Curiosities", "Traditions", "Pageants"],
    questions: {
      moran: "A diamond in the service of science?", carreno: "Who was behind the theatre’s name?",
      herrera: "How did she go from Caracas to the runway?", convit: "How can science serve people?",
      abreu: "What can begin with an orchestra?", cruz: "Can colour change as you move?",
      yulimar: "How far can a jump go?", cabrera: "What made his 2012 season exceptional?",
      orchestra: "What do thousands of musicians sound like together?", coromoto: "An ice cream shop with hundreds of flavours?",
      casabe: "How much memory can a bread hold?", diablos: "What stories do these masks tell?",
    },
    stories: {
      dudamel: { title: "How did the conductor from Barquisimeto begin?", text: "Born in Barquisimeto in 1981, Gustavo Dudamel learned violin as a child but was soon drawn to conducting.", detail: "His training in El Sistema connects his international career with Venezuela’s youth orchestras: learning music also meant learning to play together." },
      parra: { title: "Who wrote Ifigenia?", text: "Teresa de la Parra published Ifigenia in 1924 and Memorias de Mamá Blanca in 1929.", detail: "Her novels open another window onto Venezuela through women’s perspectives, childhood memories and a changing society." },
      reveron: { title: "How do you paint Caribbean light?", text: "Armando Reverón made the light of Venezuela’s coast an artistic quest. His white landscapes are part of that exploration.", detail: "In 2007, MoMA devoted an exhibition to him: another way of discovering the country through painting." },
      aparicio: { title: "Who opened the door to Cooperstown?", text: "In 1984, Maracaibo-born Luis Aparicio became the first Venezuelan inducted into the Baseball Hall of Fame.", detail: "His legacy combines speed and defence: he won nine Gold Gloves. Venezuela’s Major League story also unfolds at shortstop." },
    },
  },
  de: {
    eyebrow: "Menschen, Ideen und Überraschungen", intro: "Geschichten, die dir ein anderes Venezuela näherbringen.",
    morePeople: "Weitere Menschen, weitere Wege, Spuren zu hinterlassen", nature: "Auch der Himmel überrascht",
    headings: ["Menschen, die Spuren hinterließen", "Außergewöhnliche Leistungen", "Überraschendes aus Venezuela", "Traditionen mit Geschichte", "Ein Land mit Begeisterung für Schönheitswettbewerbe"],
    navigation: ["Menschen", "Leistungen", "Kurioses", "Traditionen", "Schönheitswettbewerbe"],
    questions: {
      moran: "Ein Diamant im Dienst der Wissenschaft?", carreno: "Wer steckt hinter dem Namen des Theaters?",
      herrera: "Wie kam sie von Caracas auf den Laufsteg?", convit: "Wie kann Wissenschaft den Menschen dienen?",
      abreu: "Was kann mit einem Orchester beginnen?", cruz: "Ändert sich Farbe, wenn du dich bewegst?",
      yulimar: "Wie weit kann ein Sprung führen?", cabrera: "Was machte seine Saison 2012 außergewöhnlich?",
      orchestra: "Wie klingen Tausende Musiker gemeinsam?", coromoto: "Eine Eisdiele mit Hunderten Sorten?",
      casabe: "Wie viel Erinnerung steckt in einem Brot?", diablos: "Was erzählen diese Masken?",
    },
    stories: {
      dudamel: { title: "Wie begann der Dirigent aus Barquisimeto?", text: "Gustavo Dudamel wurde 1981 in Barquisimeto geboren. Als Kind lernte er Geige, interessierte sich aber bald fürs Dirigieren.", detail: "Seine Ausbildung bei El Sistema verbindet seine internationale Laufbahn mit Venezuelas Jugendorchestern: Musik lernen hieß auch, gemeinsam spielen zu lernen." },
      parra: { title: "Wer schrieb Ifigenia?", text: "Teresa de la Parra veröffentlichte 1924 Ifigenia und 1929 Memorias de Mamá Blanca.", detail: "Ihre Romane eröffnen einen anderen Blick auf Venezuela: aus der Sicht von Frauen, durch Kindheitserinnerungen und im Wandel der Gesellschaft." },
      reveron: { title: "Wie malt man das Licht der Karibik?", text: "Armando Reverón machte das Licht an Venezuelas Küste zum Gegenstand seiner Kunst. Seine weißen Landschaften gehören zu dieser Suche.", detail: "2007 widmete ihm das MoMA eine Ausstellung: eine weitere Möglichkeit, das Land durch Malerei kennenzulernen." },
      aparicio: { title: "Wer öffnete die Tür nach Cooperstown?", text: "1984 wurde der in Maracaibo geborene Luis Aparicio als erster Venezolaner in die Baseball Hall of Fame aufgenommen.", detail: "Sein Vermächtnis verbindet Schnelligkeit und Verteidigung: Er gewann neun Gold Gloves. Auch die Position des Shortstops gehört zu Venezuelas Geschichte in den Major Leagues." },
    },
  },
  fr: {
    eyebrow: "Personnes, idées et surprises", intro: "Des histoires pour découvrir un autre Venezuela.",
    morePeople: "D’autres personnes, d’autres façons de laisser une trace", nature: "Un ciel qui surprend lui aussi",
    headings: ["Des personnes qui ont laissé leur empreinte", "Des exploits remarquables", "Curiosités du pays", "Des traditions et leur histoire", "Un pays passionné de concours de beauté"],
    navigation: ["Personnes", "Exploits", "Curiosités", "Traditions", "Concours de beauté"],
    questions: {
      moran: "Un diamant au service de la science ?", carreno: "Qui se cache derrière le nom du théâtre ?",
      herrera: "Comment est-elle passée de Caracas aux défilés ?", convit: "Comment mettre la science au service des personnes ?",
      abreu: "Que peut faire naître un orchestre ?", cruz: "La couleur change-t-elle quand on bouge ?",
      yulimar: "Jusqu’où peut aller un saut ?", cabrera: "Pourquoi sa saison 2012 fut-elle exceptionnelle ?",
      orchestra: "Comment sonnent des milliers de musiciens ensemble ?", coromoto: "Un glacier avec des centaines de parfums ?",
      casabe: "Quelle mémoire un pain peut-il porter ?", diablos: "Que racontent ces masques ?",
    },
    stories: {
      dudamel: { title: "Comment le chef de Barquisimeto a-t-il débuté ?", text: "Gustavo Dudamel est né à Barquisimeto en 1981. Enfant, il apprend le violon, mais la direction d’orchestre l’attire rapidement.", detail: "Sa formation au sein d’El Sistema relie sa carrière internationale aux orchestres de jeunes du Venezuela : apprendre la musique, c’était aussi apprendre à jouer ensemble." },
      parra: { title: "Qui a écrit Ifigenia ?", text: "Teresa de la Parra publie Ifigenia en 1924 et Memorias de Mamá Blanca en 1929.", detail: "Ses romans ouvrent une autre fenêtre sur le Venezuela : regards de femmes, souvenirs d’enfance et transformations de la société." },
      reveron: { title: "Comment peindre la lumière des Caraïbes ?", text: "Armando Reverón a fait de la lumière du littoral vénézuélien une recherche artistique. Ses paysages blancs en font partie.", detail: "En 2007, le MoMA lui a consacré une exposition : une autre façon de découvrir le pays à travers la peinture." },
      aparicio: { title: "Qui a ouvert la porte de Cooperstown ?", text: "En 1984, Luis Aparicio, né à Maracaibo, est devenu le premier Vénézuélien admis au Temple de la renommée du baseball.", detail: "Son héritage associe vitesse et défense : il a remporté neuf Gants dorés. L’histoire vénézuélienne en Ligue majeure passe aussi par le poste d’arrêt-court." },
    },
  },
};
