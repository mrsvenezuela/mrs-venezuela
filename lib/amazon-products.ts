import type { LanguageCode } from "@/lib/i18n";

// SiteStripe links supplied by the owner on 2026-09-19, with mrsvenezuela-21
// selected in Amazon.de. Keep these exact links; do not invent regional tags.
// No scraped product photographs, live prices, ratings or stock promises.
// Maltín and Frescolita links generated through the owner's SiteStripe on
// 2026-09-20, with Store-ID and tracking ID mrsvenezuela-21 selected.
export const amazonKitchenProducts = [
  { id: "pan", asin: "B01DZR21ZQ", href: "https://link.amazon/B00f4gofL", format: "3 × 1 kg" },
  { id: "pirulin", asin: "B019IQOLNS", href: "https://link.amazon/B02CWGRc2", format: "155 g" },
  { id: "budare", asin: "B0GSGN2ZPW", href: "https://link.amazon/B0hXBaWvt", format: "28 cm" },
  { id: "maltin", asin: "B01GIGH8Q8", href: "https://link.amazon/B0iBCZwax", format: "6 × 355 ml" },
  { id: "frescolita", asin: "B07FZSMDBZ", href: "https://link.amazon/B06RqK0Nu", format: "6 × 355 ml" },
] as const;

type ProductId = (typeof amazonKitchenProducts)[number]["id"];
type KitchenCopy = {
  title: string;
  close: string;
  marketplace: string;
  intro: string;
  affiliateLabel: string;
  disclosure: string;
  cta: string;
  newTab: string;
  availability: string;
  products: Record<ProductId, { name: string; description: string }>;
};

// Disclosure reference: https://partnernet.amazon.de/help/operating/agreement §5.
export const amazonKitchenCopy: Record<LanguageCode, KitchenCopy> = {
  es: {
    title: "En tu mesa",
    close: "Cerrar productos",
    marketplace: "Selección en Amazon Alemania",
    intro: "Para unas arepas en casa, una pausa dulce y esos sabores que nos acompañan.",
    affiliateLabel: "Enlaces de afiliación",
    disclosure: "Como afiliado de Amazon, obtengo ingresos por las compras adscritas que cumplen los requisitos aplicables.",
    cta: "Ver en Amazon.de",
    newTab: "Se abre en una pestaña nueva",
    availability: "Consulta el precio, la disponibilidad y el envío a tu dirección en Amazon.de.",
    products: {
      maltin: { name: "Maltín Polar", description: "Una bebida dulce de malta, sin alcohol, nacida en 1951 en Barcelona, Anzoátegui. Comenzó como Malta Polar y después se convirtió en Maltín Polar: un sabor que lleva décadas acompañando la mesa venezolana." },
      frescolita: { name: "Frescolita", description: "Un refresco rojo, dulce y con burbujas, creado en Venezuela. Su historia está ligada a generaciones de celebraciones y meriendas: una de esas bebidas que muchos reconocen por su color y su sabor." },
      pan: { name: "Harina P.A.N.", description: "Es una harina de maíz blanco precocida. Se mezcla con agua y sal para hacer arepas: pequeños panes redondos de maíz que puedes abrir y rellenar a tu gusto." },
      pirulin: { name: "Pirulín", description: "Son barquillos crujientes en forma de tubito, rellenos de crema de chocolate y avellana. Un dulce para comer solo, compartir o acompañar con un café." },
      budare: { name: "Budare La Comadre", description: "Es una plancha circular de hierro donde se cocinan arepas y cachapas, unas tortitas de maíz tierno. Antes de elegirlo, revisa los cuidados y la compatibilidad con tu cocina." },
    },
  },
  en: {
    title: "At your table",
    close: "Close products",
    marketplace: "Selection on Amazon Germany",
    intro: "For homemade arepas, a sweet break and the flavours we carry with us.",
    affiliateLabel: "Affiliate links",
    disclosure: "As an Amazon Associate I earn from qualifying purchases.",
    cta: "View on Amazon.de",
    newTab: "Opens in a new tab",
    availability: "Check the price, availability and delivery to your address on Amazon.de.",
    products: {
      maltin: { name: "Maltín Polar", description: "A sweet, non-alcoholic malt drink born in 1951 in Barcelona, Anzoátegui. It began as Malta Polar and later became Maltín Polar: a flavour that has accompanied Venezuelan meals for decades." },
      frescolita: { name: "Frescolita", description: "A sweet, red, fizzy soft drink created in Venezuela. Its story is tied to generations of celebrations and afternoon snacks: a drink many recognise by its colour and flavour." },
      pan: { name: "P.A.N. corn flour", description: "Precooked white corn flour. Mix it with water and salt to make arepas: small, round corn breads that you can split open and fill with your favourite ingredients." },
      pirulin: { name: "Pirulín", description: "Crisp wafer rolls filled with chocolate and hazelnut cream. A sweet snack to enjoy on its own, share with others or serve alongside a coffee." },
      budare: { name: "La Comadre budare", description: "A round iron griddle for cooking arepas and cachapas, pancakes made with fresh sweet corn. Before choosing it, check the care instructions and compatibility with your hob." },
    },
  },
  de: {
    title: "Auf deinem Tisch",
    close: "Produkte schließen",
    marketplace: "Auswahl bei Amazon Deutschland",
    intro: "Für hausgemachte Arepas, eine süße Pause und den Geschmack, der uns begleitet.",
    affiliateLabel: "Affiliate-Links",
    disclosure: "Als Amazon-Partner verdiene ich an qualifizierten Verkäufen.",
    cta: "Bei Amazon.de ansehen",
    newTab: "Öffnet sich in einem neuen Tab",
    availability: "Prüfe Preis, Verfügbarkeit und Lieferung an deine Adresse bei Amazon.de.",
    products: {
      maltin: { name: "Maltín Polar", description: "Ein süßes, alkoholfreies Malzgetränk, das 1951 in Barcelona, Anzoátegui, entstand. Zunächst hieß es Malta Polar, später Maltín Polar: ein Geschmack, der seit Jahrzehnten zur venezolanischen Tischkultur gehört." },
      frescolita: { name: "Frescolita", description: "Eine süße, rote Limonade mit Kohlensäure, die in Venezuela entwickelt wurde. Ihre Geschichte ist mit den Festen und Zwischenmahlzeiten vieler Generationen verbunden – unverkennbar durch Farbe und Geschmack." },
      pan: { name: "P.A.N. Maismehl", description: "Vorgekochtes weißes Maismehl. Mit Wasser und Salz wird daraus der Teig für Arepas: kleine, runde Maisfladen, die du aufschneiden und nach Belieben füllen kannst." },
      pirulin: { name: "Pirulín", description: "Knusprige Waffelröllchen mit einer Creme aus Schokolade und Haselnuss. Eine süße Kleinigkeit zum Naschen, zum Teilen oder als Begleitung zu einer Tasse Kaffee." },
      budare: { name: "Budare La Comadre", description: "Eine runde Eisenplatte zum Backen von Arepas und Cachapas, Pfannkuchen aus frischem Zuckermais. Prüfe vor der Auswahl die Pflegehinweise und ob sie für deinen Herd geeignet ist." },
    },
  },
  fr: {
    title: "À votre table",
    close: "Fermer les produits",
    marketplace: "Sélection sur Amazon Allemagne",
    intro: "Pour des arepas maison, une pause sucrée et ces saveurs qui nous accompagnent.",
    affiliateLabel: "Liens d’affiliation",
    disclosure: "En tant que Partenaire Amazon, je réalise un bénéfice sur les achats remplissant les conditions requises.",
    cta: "Voir sur Amazon.de",
    newTab: "S’ouvre dans un nouvel onglet",
    availability: "Consultez le prix, la disponibilité et la livraison à votre adresse sur Amazon.de.",
    products: {
      maltin: { name: "Maltín Polar", description: "Une boisson maltée sucrée et sans alcool, née en 1951 à Barcelona, dans l’Anzoátegui. D’abord appelée Malta Polar, puis Maltín Polar, elle accompagne la table vénézuélienne depuis des décennies." },
      frescolita: { name: "Frescolita", description: "Un soda rouge, sucré et pétillant, créé au Venezuela. Son histoire accompagne les fêtes et les goûters de plusieurs générations : une boisson que beaucoup reconnaissent à sa couleur et à son goût." },
      pan: { name: "Farine P.A.N.", description: "Une farine de maïs blanc précuite. Mélangée à de l’eau et du sel, elle sert à préparer les arepas : de petits pains ronds de maïs à ouvrir et à garnir selon vos envies." },
      pirulin: { name: "Pirulín", description: "Des gaufrettes croustillantes en petits rouleaux, fourrées à la crème de chocolat et de noisette. Une douceur à déguster seule, à partager ou à savourer avec un café." },
      budare: { name: "Budare La Comadre", description: "Une plaque ronde en fer pour cuire les arepas et les cachapas, des galettes de maïs frais. Avant de choisir, vérifiez l’entretien et la compatibilité avec votre cuisinière." },
    },
  },
  zh: {
    title: "你的餐桌",
    close: "关闭商品",
    marketplace: "德国 Amazon 精选",
    intro: "在家做玉米饼，享受甜蜜片刻，重温那些熟悉的味道。",
    affiliateLabel: "联盟推广链接",
    disclosure: "作为 Amazon 联盟成员，我可通过符合条件的购买获得佣金。",
    cta: "在 Amazon.de 查看",
    newTab: "在新标签页中打开",
    availability: "请在 Amazon.de 确认价格、库存以及是否配送至你的地址。",
    products: {
      maltin: { name: "Maltín Polar", description: "这款甜味无酒精麦芽饮料于 1951 年诞生于安索阿特吉州的 Barcelona，最初名为 Malta Polar，后来改称 Maltín Polar。数十年来，它一直是委内瑞拉餐桌上熟悉的味道。" },
      frescolita: { name: "Frescolita", description: "这款诞生于委内瑞拉的红色汽水，口味甜美，气泡丰富。它陪伴了几代人的聚会和午后点心时光，独特的颜色与味道让许多人一眼就能认出。" },
      pan: { name: "P.A.N. 玉米粉", description: "这是一种预熟白玉米粉，加水和盐即可制作 arepas：小巧的圆形玉米饼。烹熟后可以切开，夹入自己喜欢的馅料。" },
      pirulin: { name: "Pirulín", description: "酥脆的管状威化卷，内有巧克力榛子奶油夹心。可以直接当零食、与人分享，也适合搭配一杯咖啡。" },
      budare: { name: "La Comadre 铁煎盘", description: "这是一种圆形铁煎盘，用来烹制 arepas 玉米饼和以鲜甜玉米制作的 cachapas。选购前请确认保养方法及炉灶兼容性。" },
    },
  },
};
