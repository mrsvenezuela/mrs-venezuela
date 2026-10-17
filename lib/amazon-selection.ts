import type { LanguageCode } from "@/lib/i18n";

// Editorial preview only. Add verified Amazon products and approved imagery
// for Amazon US; no affiliate URLs or availability claims yet.
export type SelectionCategory = "kitchen" | "art" | "clothing";
type SelectionCopy = {
  eyebrow: string;
  title: string;
  intro: string;
  status: string;
  notice: string;
  /** Divulgación obligatoria del Programa de Afiliados de Amazon. */
  affiliateNote: string;
  explore: string;
  close: string;
  empty: string;
  detailLabel: string;
  categories: Record<SelectionCategory, { title: string; text: string; detail: string; examples: string[] }>;
};

export const amazonSelectionCopy: Record<LanguageCode, SelectionCopy> = {
  es: {
    close: "Cerrar selección",
    empty: "Estamos preparando esta selección de Amazon Estados Unidos. Pronto encontrarás aquí los productos elegidos.",
    eyebrow: "La selección de Mrs Venezuela",
    title: "Un pedacito de Venezuela",
    intro: "Para tu mesa, para tu casa o para llevar contigo. Pequeñas formas de sentir Venezuela cerca.",
    status: "Próximamente · Amazon Estados Unidos",
    affiliateNote: "En calidad de Afiliada de Amazon, Mrs Venezuela obtiene ingresos por las compras adscritas que cumplen los requisitos aplicables.",
    notice: "Estamos preparando la selección. Los productos, fotografías y enlaces de Amazon todavía no están disponibles aquí.",
    explore: "Descubrir",
    detailLabel: "Lo que estamos preparando",
    categories: {
      kitchen: { title: "En tu mesa", text: "Harina para arepas, dulces y utensilios para nuestros sabores.", detail: "Sabores de Venezuela para compartir en casa.", examples: ["Harina de maíz precocida", "Dulces venezolanos", "Budares"] },
      art: { title: "En tu casa", text: "Libros de recetas, banderas y detalles para tu hogar.", detail: "Lecturas y objetos con identidad venezolana.", examples: ["Libros de cocina venezolana", "Banderas", "Cuadros de Venezuela"] },
      clothing: { title: "Contigo", text: "Camisetas y detalles para llevar un recuerdo de Venezuela.", detail: "Diseños sencillos con identidad venezolana, para ti o para regalar a alguien que la lleva cerca.", examples: ["Camisetas de Venezuela", "Diseños inspirados en el país", "Pequeños regalos"] },
    },
  },
  en: {
    close: "Close selection",
    empty: "We are preparing this Amazon US selection. Our chosen products will appear here soon.",
    eyebrow: "The Mrs Venezuela selection", title: "A little piece of Venezuela", intro: "For your table, your home or wherever you go. Small ways to keep Venezuela close.", status: "Coming soon · Amazon US", affiliateNote: "As an Amazon Associate, Mrs Venezuela earns from qualifying purchases.", notice: "We are preparing the selection. Products, photographs and Amazon links are not available here yet.", explore: "Discover", detailLabel: "What we are preparing",
    categories: {
      kitchen: { title: "At your table", text: "Arepa flour, sweet treats and cookware for Venezuelan flavours.", detail: "Venezuelan flavours to share at home.", examples: ["Precooked corn flour", "Venezuelan sweets", "Griddles"] },
      art: { title: "In your home", text: "Cookbooks, flags and little touches for your home.", detail: "Books and objects with a Venezuelan identity.", examples: ["Venezuelan cookbooks", "Flags", "Venezuela wall art"] },
      clothing: { title: "With you", text: "T-shirts and small gifts to carry a reminder of Venezuela.", detail: "Simple designs with a Venezuelan identity, for yourself or someone who holds the country close.", examples: ["Venezuela T-shirts", "Designs inspired by the country", "Small gifts"] },
    },
  },
  de: {
    close: "Auswahl schließen",
    empty: "Wir bereiten diese Auswahl von Amazon USA vor. Die ausgewählten Produkte findest du bald hier.",
    eyebrow: "Die Auswahl von Mrs Venezuela", title: "Ein kleines Stück Venezuela", intro: "Für deinen Tisch, dein Zuhause oder unterwegs. Kleine Dinge, die Venezuela näherbringen.", status: "Demnächst · Amazon USA", affiliateNote: "Als Amazon-Partnerin verdient Mrs Venezuela an qualifizierten Verkäufen.", notice: "Wir bereiten die Auswahl vor. Produkte, Fotos und Amazon-Links sind hier noch nicht verfügbar.", explore: "Entdecken", detailLabel: "Was wir vorbereiten",
    categories: {
      kitchen: { title: "Auf deinem Tisch", text: "Arepa-Mehl, Süßigkeiten und Kochutensilien für Venezuelas Küche.", detail: "Venezolanische Aromen für zu Hause.", examples: ["Vorgekochtes Maismehl", "Venezolanische Süßigkeiten", "Grillplatten"] },
      art: { title: "In deinem Zuhause", text: "Kochbücher, Flaggen und kleine Akzente für dein Zuhause.", detail: "Bücher und Gegenstände mit venezolanischer Identität.", examples: ["Venezolanische Kochbücher", "Flaggen", "Venezuela-Bilder"] },
      clothing: { title: "Mit dir unterwegs", text: "T-Shirts und kleine Geschenke als Erinnerung an Venezuela.", detail: "Schlichte Designs mit venezolanischer Identität, für dich oder einen Menschen, dem das Land am Herzen liegt.", examples: ["Venezuela-T-Shirts", "Vom Land inspirierte Designs", "Kleine Geschenke"] },
    },
  },
  fr: {
    close: "Fermer la sélection",
    empty: "Nous préparons cette sélection Amazon États-Unis. Les produits choisis seront bientôt présentés ici.",
    eyebrow: "La sélection de Mrs Venezuela", title: "Un petit morceau de Venezuela", intro: "Pour votre table, votre maison ou à emporter avec vous. De petites façons de garder Venezuela tout près.", status: "Bientôt · Amazon États-Unis", affiliateNote: "En tant que Partenaire Amazon, Mrs Venezuela réalise un bénéfice sur les achats remplissant les conditions requises.", notice: "Nous préparons la sélection. Les produits, les photos et les liens Amazon ne sont pas encore disponibles ici.", explore: "Découvrir", detailLabel: "Ce que nous préparons",
    categories: {
      kitchen: { title: "À votre table", text: "Farine pour arepas, douceurs et ustensiles aux saveurs du pays.", detail: "Les saveurs du Venezuela à partager chez vous.", examples: ["Farine de maïs précuite", "Douceurs vénézuéliennes", "Plaques de cuisson"] },
      art: { title: "Chez vous", text: "Livres de recettes, drapeaux et petites touches pour votre intérieur.", detail: "Livres et objets à l’identité vénézuélienne.", examples: ["Livres de cuisine vénézuélienne", "Drapeaux", "Tableaux du Venezuela"] },
      clothing: { title: "Avec vous", text: "T-shirts et petits cadeaux pour emporter un souvenir de Venezuela.", detail: "Des créations sobres à l'identité vénézuélienne, pour vous ou pour quelqu'un qui aime ce pays.", examples: ["T-shirts Venezuela", "Créations inspirées du pays", "Petits cadeaux"] },
    },
  },
  zh: {
    close: "关闭精选",
    empty: "我们正在筹备 Amazon 美国精选，选定商品将很快在这里展示。",
    eyebrow: "Mrs Venezuela 精选", title: "把一点 Venezuela 带回家", intro: "从餐桌到家居，再到日常穿搭，用小小的物件，让 Venezuela 更近一些。", status: "即将推出 · Amazon 美国", affiliateNote: "作为亚马逊联盟成员，Mrs Venezuela 从符合条件的购买中获得收入。", notice: "我们正在筹备精选商品。目前这里尚未提供商品、照片或 Amazon 购买链接。", explore: "探索", detailLabel: "我们正在筹备的内容",
    categories: {
      kitchen: { title: "你的餐桌", text: "通过食材、厨具和食谱书，分享委内瑞拉的风味。", detail: "精选适合制作玉米饼的食材和厨具，为厨房带来新灵感。", examples: ["预熟玉米粉", "玉米饼煎盘", "委内瑞拉食谱书"] },
      art: { title: "你的家", text: "以这个国家的城市和自然风景为灵感的装饰画。", detail: "让 Venezuela 出现在墙上：我们正在寻找适合不同空间的图案与尺寸。", examples: ["城市主题画作", "风景装饰画", "Venezuela 主题插画"] },
      clothing: { title: "随你同行", text: "用 T 恤与小礼物，随身带着一份关于 Venezuela 的记忆。", detail: "简洁而富有委内瑞拉特色的设计，送给自己，也送给心系这个国家的人。", examples: ["Venezuela 主题 T 恤", "以这个国家为灵感的设计", "小礼物"] },
    },
  },
};
