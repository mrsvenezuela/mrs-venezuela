import type { LanguageCode } from "@/lib/i18n";

// Independently licensed illustrative photographs, not Amazon product imagery.
// Original files are preserved; see public/images/amazon-selection/CREDITS.md.
export const amazonProductPhotos = {
  maltin: {
    src: "/images/amazon-selection/maltin-envase.jpg",
    width: 901,
    height: 1200,
    author: "kiliweb · Open Food Facts",
    source: "https://world.openfoodfacts.org/product/0858810006053",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
  },
  frescolita: {
    src: "/images/amazon-selection/frescolita-envase.jpg",
    width: 899,
    height: 1200,
    author: "kiliweb · Open Food Facts",
    source: "https://world.openfoodfacts.org/product/8437008732060",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
  },
  budare: {
    src: "/images/amazon-selection/budare-ilustrativo.jpg",
    width: 960,
    height: 607,
    author: "Glane23 · Wikimedia Commons",
    source: "https://commons.wikimedia.org/wiki/File:Comal2.jpg",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
  },
  pan: {
    src: "/images/amazon-selection/pan-paquete-completo.jpg",
    width: 274,
    height: 478,
    author: "kiliweb · Open Food Facts",
    source: "https://world.openfoodfacts.org/product/7591002000547",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
  },
  pirulin: {
    src: "/images/amazon-selection/pirulin-off.jpg",
    width: 594,
    height: 787,
    author: "macrofactor · Open Food Facts",
    source: "https://world.openfoodfacts.org/product/7466762939010",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
  },
};

type PhotoCopy = Record<keyof typeof amazonProductPhotos, { alt: string; caption: string }>;

export const amazonPhotoLabels: Record<LanguageCode, { details: string; displayNote: string }> = {
  es: { details: "Foto y licencia", displayNote: "Encuadre recortado para su presentación." },
  en: { details: "Photo and licence", displayNote: "Cropped for display." },
  de: { details: "Foto und Lizenz", displayNote: "Für die Darstellung zugeschnitten." },
  fr: { details: "Photo et licence", displayNote: "Cadrage recadré pour la présentation." },
  zh: { details: "照片与许可", displayNote: "展示时已裁剪构图。" },
};

export const amazonPhotoCopy: Record<LanguageCode, PhotoCopy> = {
  es: {
    maltin: { alt: "Lata completa de Maltín Polar de 355 ml", caption: "Fotografía de una lata de 355 ml. El enlace corresponde a 6 × 355 ml; el diseño del envase puede variar." },
    frescolita: { alt: "Lata roja de Frescolita de 355 ml", caption: "Fotografía de una lata de 355 ml. El enlace corresponde a 6 × 355 ml; el diseño del envase puede variar." },
    budare: { alt: "Comal redondo de hierro con mango sobre fondo claro; imagen ilustrativa", caption: "Imagen ilustrativa de un comal de hierro. No representa el modelo La Comadre de 28 cm enlazado en Amazon. Fotografía de Glane23, sin modificaciones." },
    pan: { alt: "Envase amarillo completo de harina P.A.N. de maíz blanco", caption: "Imagen de una presentación anterior de 1 kg. El enlace corresponde a 3 × 1 kg; el diseño del envase puede variar." },
    pirulin: { alt: "Lata de Pirulín con barquillos de chocolate y avellana en la etiqueta", caption: "Fotografía de una presentación de Pirulín. El enlace corresponde a 155 g; el formato y el diseño del envase pueden variar." },
  },
  en: {
    maltin: { alt: "Complete 355 ml can of Maltín Polar", caption: "Photo of a 355 ml can. The link is for 6 × 355 ml; packaging design may vary." },
    frescolita: { alt: "Red 355 ml can of Frescolita", caption: "Photo of a 355 ml can. The link is for 6 × 355 ml; packaging design may vary." },
    budare: { alt: "Round iron griddle with a handle on a light background; illustrative image", caption: "Illustrative photo of an iron comal. It does not depict the 28 cm La Comadre model linked on Amazon. Photograph by Glane23, unmodified." },
    pan: { alt: "Complete yellow package of P.A.N. white corn flour", caption: "Image of an earlier 1 kg package. The link is for 3 × 1 kg; packaging design may vary." },
    pirulin: { alt: "A tin of Pirulín with chocolate and hazelnut wafers on the label", caption: "Photo of a Pirulín package. The linked product is 155 g; package size and design may differ." },
  },
  de: {
    maltin: { alt: "Vollständige 355-ml-Dose Maltín Polar", caption: "Foto einer 355-ml-Dose. Der Link führt zu 6 × 355 ml; das Verpackungsdesign kann abweichen." },
    frescolita: { alt: "Rote 355-ml-Dose Frescolita", caption: "Foto einer 355-ml-Dose. Der Link führt zu 6 × 355 ml; das Verpackungsdesign kann abweichen." },
    budare: { alt: "Runde Eisenplatte mit Griff auf hellem Hintergrund; Beispielbild", caption: "Beispielfoto eines Comals aus Eisen. Es zeigt nicht das auf Amazon verlinkte 28-cm-Modell von La Comadre. Foto von Glane23, unverändert." },
    pan: { alt: "Vollständige gelbe Packung P.A.N. aus weißem Mais", caption: "Abbildung einer früheren 1-kg-Verpackung. Der Link führt zu 3 × 1 kg; das Verpackungsdesign kann abweichen." },
    pirulin: { alt: "Eine Dose Pirulín mit Schokoladen-Haselnuss-Waffeln auf dem Etikett", caption: "Foto einer Pirulín-Packung. Das verlinkte Produkt enthält 155 g; Packungsgröße und Gestaltung können abweichen." },
  },
  fr: {
    maltin: { alt: "Canette entière de Maltín Polar de 355 ml", caption: "Photo d’une canette de 355 ml. Le lien correspond à 6 × 355 ml ; le visuel de l’emballage peut varier." },
    frescolita: { alt: "Canette rouge de Frescolita de 355 ml", caption: "Photo d’une canette de 355 ml. Le lien correspond à 6 × 355 ml ; le visuel de l’emballage peut varier." },
    budare: { alt: "Plaque ronde en fer avec manche sur fond clair ; image illustrative", caption: "Photo illustrative d’un comal en fer. Elle ne représente pas le modèle La Comadre de 28 cm lié sur Amazon. Photographie de Glane23, non modifiée." },
    pan: { alt: "Paquet jaune entier de farine de maïs blanc P.A.N.", caption: "Image d’un ancien emballage de 1 kg. Le lien correspond à 3 × 1 kg ; le visuel de l’emballage peut varier." },
    pirulin: { alt: "Une boîte de Pirulín avec des gaufrettes au chocolat et aux noisettes sur l’étiquette", caption: "Photo d’une présentation de Pirulín. Le produit lié contient 155 g ; le format et le visuel de l’emballage peuvent varier." },
  },
  zh: {
    maltin: { alt: "完整的 355 毫升 Maltín Polar 罐装饮料", caption: "照片展示一罐 355 毫升饮料。链接商品为 6 × 355 毫升，包装设计可能不同。" },
    frescolita: { alt: "红色的 355 毫升 Frescolita 罐装汽水", caption: "照片展示一罐 355 毫升饮料。链接商品为 6 × 355 毫升，包装设计可能不同。" },
    budare: { alt: "浅色背景上的带柄圆形铁烤盘，示意图片", caption: "铁制 comal 烤盘的示意照片，并非亚马逊链接中的 28 厘米 La Comadre 型号。照片由 Glane23 拍摄，未经修改。" },
    pan: { alt: "完整的黄色 P.A.N. 白玉米粉包装", caption: "图片展示旧版 1 千克包装。链接商品为 3 × 1 千克，包装设计可能不同。" },
    pirulin: { alt: "标签上印有巧克力榛子威化卷的 Pirulín 罐装产品", caption: "照片展示一种 Pirulín 包装。链接商品为 155 克，包装规格和设计可能不同。" },
  },
};
