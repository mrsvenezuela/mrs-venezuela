import type { LanguageCode } from "@/lib/i18n";
import type { amazonKitchenProducts } from "@/lib/amazon-products";

type ProductId = (typeof amazonKitchenProducts)[number]["id"];

// Editorial history verified 2026-09-20. Brand origins do not imply that
// the current Amazon offer was manufactured in Venezuela.
export const amazonHistorySources = {
  pan: "https://empresaspolar.com/mas-de-1500-trabajadores-festejaron-50-aniversario-de-harina-p-a-n/",
  pirulin: "https://mail.sindoni.com.ve/noticias.php?sec=04",
  budare: "https://www.fundacionbigott.org/casabe-el-pan-venezolano/",
  maltin: "https://empresaspolar.com/nuestra-historia-colombia/",
  frescolita: "https://www.guia.com.ve/noti/28864/frescolita-celebro-sus-50-anos-de-la-mano-con-los-venezolanos",
} satisfies Record<ProductId, string>;

// The budare history describes the traditional utensil, not La Comadre's
// founding date, place of manufacture or commercial history.
export const amazonProductHistory: Record<LanguageCode, Record<ProductId, string>> = {
  es: {
    maltin: "Una bebida dulce de malta, sin alcohol, nacida en 1951 en Barcelona, Anzoátegui. Comenzó como Malta Polar y después se convirtió en Maltín Polar: un sabor que lleva décadas acompañando la mesa venezolana.",
    frescolita: "Un refresco rojo, dulce y con burbujas, creado en Venezuela. Su historia está ligada a generaciones de celebraciones y meriendas: una de esas bebidas que muchos reconocen por su color y su sabor.",
    pan: "Nacida en Turmero, Aragua, en 1960, esta harina de maíz precocida de Empresas Polar cambió la forma de preparar arepas. Al ahorrar el trabajo de pilar el maíz, acercó una tradición de muchos siglos al ritmo de la vida moderna.",
    pirulin: "Estos barquillos de chocolate y avellana nacieron en Venezuela, en Nucita Venezolana, del Grupo Sindoni. Detrás de su creación estuvo Filippo Sindoni: una historia de raíces italianas que encontró en Venezuela el lugar para construir una empresa familiar de alimentos.",
    budare: "Antes de las planchas de hierro, estaban los budares de barro de las cocinas indígenas, donde se cocía el casabe, un pan de yuca. El budare cuenta esa historia: la continuidad de un utensilio tradicional en la cocina venezolana.",
  },
  en: {
    maltin: "A sweet, non-alcoholic malt drink born in 1951 in Barcelona, Anzoátegui. It began as Malta Polar and later became Maltín Polar: a flavour that has accompanied Venezuelan meals for decades.",
    frescolita: "A sweet, red, fizzy soft drink created in Venezuela. Its story is tied to generations of celebrations and afternoon snacks: a drink many recognise by its colour and flavour.",
    pan: "Born in Turmero, Aragua, in 1960, this precooked corn flour from Empresas Polar changed how arepas were made. By removing the work of pounding corn, it brought a centuries-old tradition into the rhythm of modern life.",
    pirulin: "These chocolate and hazelnut wafer rolls originated in Venezuela at Nucita Venezolana, part of Grupo Sindoni. Filippo Sindoni was behind their creation: a story with Italian roots and a family food business built in Venezuela.",
    budare: "Before iron griddles, Indigenous kitchens used clay budares to cook casabe, a cassava flatbread. The budare tells that story: a traditional utensil that continues to have a place in Venezuelan cooking.",
  },
  de: {
    maltin: "Ein süßes, alkoholfreies Malzgetränk, das 1951 in Barcelona, Anzoátegui, entstand. Zunächst hieß es Malta Polar, später Maltín Polar: ein Geschmack, der seit Jahrzehnten zur venezolanischen Tischkultur gehört.",
    frescolita: "Eine süße, rote Limonade mit Kohlensäure, die in Venezuela entwickelt wurde. Ihre Geschichte ist mit den Festen und Zwischenmahlzeiten vieler Generationen verbunden – unverkennbar durch Farbe und Geschmack.",
    pan: "1960 in Turmero, Aragua, entstanden, veränderte dieses vorgekochte Maismehl von Empresas Polar die Zubereitung von Arepas. Es ersparte das Stampfen des Maises und verband so eine jahrhundertealte Tradition mit dem Rhythmus des modernen Alltags.",
    pirulin: "Diese Schokoladen-Haselnuss-Waffelröllchen entstanden in Venezuela bei Nucita Venezolana, einem Unternehmen der Grupo Sindoni. Hinter ihrer Entwicklung stand Filippo Sindoni: eine Geschichte mit italienischen Wurzeln und einem in Venezuela aufgebauten Familienunternehmen für Lebensmittel.",
    budare: "Vor den Eisenplatten gab es Budares aus Ton in indigenen Küchen, auf denen Casabe, ein Maniokfladenbrot, gebacken wurde. Der Budare erzählt von einem traditionellen Kochgerät, das bis heute seinen Platz in der venezolanischen Küche hat.",
  },
  fr: {
    maltin: "Une boisson maltée sucrée et sans alcool, née en 1951 à Barcelona, dans l’Anzoátegui. D’abord appelée Malta Polar, puis Maltín Polar, elle accompagne la table vénézuélienne depuis des décennies.",
    frescolita: "Un soda rouge, sucré et pétillant, créé au Venezuela. Son histoire accompagne les fêtes et les goûters de plusieurs générations : une boisson que beaucoup reconnaissent à sa couleur et à son goût.",
    pan: "Née à Turmero, dans l’Aragua, en 1960, cette farine de maïs précuite d’Empresas Polar a transformé la préparation des arepas. En évitant de piler le maïs, elle a adapté une tradition séculaire au rythme de la vie moderne.",
    pirulin: "Ces gaufrettes au chocolat et à la noisette sont nées au Venezuela, chez Nucita Venezolana, du Grupo Sindoni. Filippo Sindoni est à l’origine de leur création : une histoire de racines italiennes et d’entreprise alimentaire familiale construite au Venezuela.",
    budare: "Avant les plaques en fer, les cuisines autochtones utilisaient des budares en terre cuite pour préparer le casabe, un pain de manioc. Le budare raconte cette continuité : celle d’un ustensile traditionnel toujours présent dans la cuisine vénézuélienne.",
  },
  zh: {
    maltin: "这款甜味无酒精麦芽饮料于 1951 年诞生于安索阿特吉州的 Barcelona，最初名为 Malta Polar，后来改称 Maltín Polar。数十年来，它一直是委内瑞拉餐桌上熟悉的味道。",
    frescolita: "这款诞生于委内瑞拉的红色汽水，口味甜美，气泡丰富。它陪伴了几代人的聚会和午后点心时光，独特的颜色与味道让许多人一眼就能认出。",
    pan: "1960 年，Empresas Polar 在阿拉瓜州 Turmero 推出了这款预熟玉米粉，改变了 arepas 玉米饼的制作方式。它省去了舂磨玉米的工序，让延续数百年的饮食传统融入现代生活。",
    pirulin: "这些巧克力榛子威化卷诞生于委内瑞拉的 Nucita Venezolana，隶属 Grupo Sindoni。创制背后的人物是 Filippo Sindoni：一个有着意大利根源、在委内瑞拉建立食品家族企业的故事。",
    budare: "在铁煎盘出现之前，原住民厨房就用陶制 budare 烘制 casabe 木薯薄饼。它讲述的是传统炊具的延续，以及这种炊具在委内瑞拉厨房中至今保有的位置。",
  },
};
