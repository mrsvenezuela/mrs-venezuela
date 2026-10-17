import type { LanguageCode } from "@/lib/i18n";
import type { SpeciesId } from "./types";

type NatureDetails = {
  habitatLabel: string;
  didYouKnow: string;
  habitats: Record<SpeciesId, string>;
  facts: Record<"fauna" | "arboles" | "agua", { title: string; text: string }>;
};

// Habitat labels describe the species, not the location of the photograph.
export const natureDetails: Record<LanguageCode, NatureDetails> = {
  es: {
    habitatLabel: "Hábitat", didYouKnow: "¿Sabías que…?",
    habitats: {
      capybara: "Llanos · riberas", bear: "Andes · bosques montañosos",
      troupial: "Matorrales y bosques secos", macaw: "Bosques y espacios arbolados",
      ibis: "Manglares y humedales", flamingo: "Lagunas costeras",
      orchid: "Bosques montañosos", cattleya: "Bosques del norte de Venezuela",
      araguaney: "Bosques estacionales", saman: "Sabanas y espacios abiertos",
      ceiba: "Bosques tropicales", moriche: "Humedales · morichales",
      turtle: "Caribe · arrecifes", dolphin: "Cuenca del Orinoco",
      parrotfish: "Caribe · arrecifes", coral: "Caribe · aguas someras",
    },
    facts: {
      fauna: { title: "Un nadador sorprendente", text: "El chigüire puede permanecer hasta cinco minutos bajo el agua. Sumergirse le ayuda a esconderse de sus depredadores." },
      arboles: { title: "El samán también se recoge", text: "Al caer la tarde, las pequeñas hojitas del samán se pliegan. También pueden hacerlo cuando el cielo está muy nublado." },
      agua: { title: "Un cuello que marca la diferencia", text: "La tonina tiene las vértebras del cuello sin fusionar. Esa flexibilidad le ayuda a moverse entre raíces y ramas en los bosques inundados." },
    },
  },
  en: {
    habitatLabel: "Habitat", didYouKnow: "Did you know…?",
    habitats: {
      capybara: "Llanos · riverbanks", bear: "Andes · mountain forests",
      troupial: "Scrub and dry forests", macaw: "Forests and wooded areas",
      ibis: "Mangroves and wetlands", flamingo: "Coastal lagoons",
      orchid: "Mountain forests", cattleya: "Forests of northern Venezuela",
      araguaney: "Seasonal forests", saman: "Savannas and open spaces",
      ceiba: "Tropical forests", moriche: "Wetlands · palm swamps",
      turtle: "Caribbean · reefs", dolphin: "Orinoco basin",
      parrotfish: "Caribbean · reefs", coral: "Caribbean · shallow waters",
    },
    facts: {
      fauna: { title: "A surprising swimmer", text: "A capybara can stay underwater for up to five minutes. Diving helps it hide from predators." },
      arboles: { title: "The rain tree folds up, too", text: "As evening falls, the rain tree's tiny leaflets fold together. They can also do so when the sky is heavily overcast." },
      agua: { title: "A neck that makes a difference", text: "The river dolphin's neck vertebrae are not fused. This flexibility helps it move among roots and branches in flooded forests." },
    },
  },
  de: {
    habitatLabel: "Lebensraum", didYouKnow: "Schon gewusst…?",
    habitats: {
      capybara: "Llanos · Flussufer", bear: "Anden · Bergwälder",
      troupial: "Buschland und Trockenwälder", macaw: "Wälder und baumreiche Gebiete",
      ibis: "Mangroven und Feuchtgebiete", flamingo: "Küstenlagunen",
      orchid: "Bergwälder", cattleya: "Wälder im Norden Venezuelas",
      araguaney: "Saisonale Wälder", saman: "Savannen und Freiflächen",
      ceiba: "Tropische Wälder", moriche: "Feuchtgebiete · Palmensümpfe",
      turtle: "Karibik · Riffe", dolphin: "Orinoco-Becken",
      parrotfish: "Karibik · Riffe", coral: "Karibik · flache Gewässer",
    },
    facts: {
      fauna: { title: "Ein erstaunlicher Schwimmer", text: "Das Wasserschwein kann bis zu fünf Minuten unter Wasser bleiben. So kann es sich vor Fressfeinden verstecken." },
      arboles: { title: "Auch der Regenbaum klappt zu", text: "Am frühen Abend falten sich die kleinen Fiederblättchen des Regenbaums zusammen. Das kann auch bei stark bewölktem Himmel geschehen." },
      agua: { title: "Ein besonders beweglicher Hals", text: "Die Halswirbel des Flussdelfins sind nicht miteinander verwachsen. Dadurch kann er sich zwischen Wurzeln und Ästen in überfluteten Wäldern bewegen." },
    },
  },
  fr: {
    habitatLabel: "Habitat", didYouKnow: "Le saviez-vous… ?",
    habitats: {
      capybara: "Llanos · berges", bear: "Andes · forêts de montagne",
      troupial: "Broussailles et forêts sèches", macaw: "Forêts et espaces arborés",
      ibis: "Mangroves et zones humides", flamingo: "Lagunes côtières",
      orchid: "Forêts de montagne", cattleya: "Forêts du nord du Venezuela",
      araguaney: "Forêts saisonnières", saman: "Savanes et espaces ouverts",
      ceiba: "Forêts tropicales", moriche: "Zones humides · palmeraies",
      turtle: "Caraïbes · récifs", dolphin: "Bassin de l'Orinoco",
      parrotfish: "Caraïbes · récifs", coral: "Caraïbes · eaux peu profondes",
    },
    facts: {
      fauna: { title: "Un nageur étonnant", text: "Le capybara peut rester jusqu'à cinq minutes sous l'eau. Plonger l'aide à se cacher de ses prédateurs." },
      arboles: { title: "L'arbre à pluie se replie aussi", text: "En début de soirée, les petites folioles de l'arbre à pluie se replient. Elles peuvent aussi le faire lorsque le ciel est très couvert." },
      agua: { title: "Un cou qui fait la différence", text: "Les vertèbres du cou du dauphin rose ne sont pas soudées. Cette souplesse l'aide à se déplacer entre les racines et les branches des forêts inondées." },
    },
  },
  zh: {
    habitatLabel: "栖息地", didYouKnow: "你知道吗？",
    habitats: {
      capybara: "大平原 · 河岸", bear: "安第斯山脉 · 山地森林",
      troupial: "灌丛与干旱森林", macaw: "森林与林地",
      ibis: "红树林与湿地", flamingo: "沿海潟湖",
      orchid: "山地森林", cattleya: "委内瑞拉北部森林",
      araguaney: "季节性森林", saman: "稀树草原与开阔地",
      ceiba: "热带森林", moriche: "湿地 · 棕榈沼泽",
      turtle: "加勒比海 · 珊瑚礁", dolphin: "奥里诺科河流域",
      parrotfish: "加勒比海 · 珊瑚礁", coral: "加勒比海 · 浅水区",
    },
    facts: {
      fauna: { title: "出色的游泳健将", text: "水豚可以在水下停留长达五分钟。潜水能帮助它躲避捕食者。" },
      arboles: { title: "雨树也会收拢叶片", text: "傍晚时，雨树的小叶会折叠起来。天空阴云密布时，也可能出现这种现象。" },
      agua: { title: "灵活的颈部", text: "亚马孙河豚的颈椎并未融合。这种灵活性有助于它在被洪水淹没的森林中穿过树根和树枝。" },
    },
  },
};

export const curiositySources = [
  { label: "San Diego Zoo · Hydrochoerus hydrochaeris", href: "https://animals.sandiegozoo.org/animals/capybara" },
  { label: "NParks · Samanea saman", href: "https://www.nparks.gov.sg/florafaunaweb/flora/3/1/3106" },
  { label: "WWF · River dolphins", href: "https://support.wwf.org.uk/protect-river-dolphins" },
];
