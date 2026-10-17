import type { LanguageCode } from "@/lib/i18n";

// Amazon.de listings checked 2026-09-20. Tracking ID verified in the owner's SiteStripe.
// No scraped Amazon product photographs: these entries use clearly generic icons.
export const amazonHomeAccessories = [
  { id: "venezuela-flag", asin: "B00MOXYIY0", href: "https://www.amazon.de/dp/B00MOXYIY0?tag=mrsvenezuela-21", icon: "flag" },
  { id: "venezuela-map", asin: "B07L17XM16", href: "https://www.amazon.de/dp/B07L17XM16?th=1&linkCode=ll2&tag=mrsvenezuela-21&linkId=45336fe80f5526cb2f48d54f7d5ce26a&ref_=as_li_ss_tl", icon: "frame" },
] as const;

type AccessoryId = (typeof amazonHomeAccessories)[number]["id"];
export const amazonHomeAccessoryCopy: Record<LanguageCode, Record<AccessoryId, { name: string; format: string; description: string }>> = {
  es: {
    "venezuela-flag": { name: "Bandera de Venezuela — AZ FLAG", format: "150 × 90 cm · Sin escudo", description: "El tricolor venezolano con ocho estrellas, en poliéster y con dos ojales para colgarlo. Un detalle para celebrar nuestras raíces y tener Venezuela presente en casa." },
    "venezuela-map": { name: "Venezuela Map Black — artboxONE", format: "Lámina con marco blanco", description: "Un mapa de Venezuela en blanco y negro, con una composición sencilla para acompañar tu rincón favorito. Consulta las medidas de la variante elegida en Amazon antes de comprar." },
  },
  en: {
    "venezuela-flag": { name: "Venezuela flag — AZ FLAG", format: "150 × 90 cm · Without coat of arms", description: "Venezuela’s eight-star tricolour in polyester, with two eyelets for hanging. A detail to celebrate Venezuelan roots and keep the country close at home." },
    "venezuela-map": { name: "Venezuela Map Black — artboxONE", format: "Print with white frame", description: "A black-and-white map of Venezuela with a simple composition for your favourite corner. Check the selected variant’s dimensions on Amazon before buying." },
  },
  de: {
    "venezuela-flag": { name: "Venezuela-Flagge — AZ FLAG", format: "150 × 90 cm · Ohne Wappen", description: "Venezuelas Trikolore mit acht Sternen, aus Polyester und mit zwei Ösen zum Aufhängen. Ein Detail, das venezolanische Wurzeln feiert und das Land zu Hause näherbringt." },
    "venezuela-map": { name: "Venezuela Map Black — artboxONE", format: "Poster mit weißem Rahmen", description: "Eine schwarz-weiße Karte von Venezuela in schlichter Gestaltung für deinen Lieblingsplatz. Prüfe vor dem Kauf die Maße der ausgewählten Variante bei Amazon." },
  },
  fr: {
    "venezuela-flag": { name: "Drapeau du Venezuela — AZ FLAG", format: "150 × 90 cm · Sans armoiries", description: "Le tricolore vénézuélien à huit étoiles, en polyester, avec deux œillets pour le suspendre. Un détail pour célébrer ses racines et garder le Venezuela près de soi." },
    "venezuela-map": { name: "Venezuela Map Black — artboxONE", format: "Affiche avec cadre blanc", description: "Une carte du Venezuela en noir et blanc, à la composition épurée, pour votre coin préféré. Vérifiez les dimensions de la variante choisie sur Amazon avant l’achat." },
  },
  zh: {
    "venezuela-flag": { name: "Venezuela 国旗 — AZ FLAG", format: "150 × 90 厘米 · 无国徽", description: "八颗星的委内瑞拉三色旗，采用聚酯纤维，配有两个悬挂孔。让家中保留一份对委内瑞拉文化与故乡的眷恋。" },
    "venezuela-map": { name: "Venezuela Map Black — artboxONE", format: "白框装饰画", description: "简洁的黑白委内瑞拉地图，为你喜爱的家居角落增添一份故乡气息。购买前请在 Amazon 确认所选款式的尺寸。" },
  },
};
