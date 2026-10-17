import type { SpeciesId } from "./types";

export const natureGroups: { id: string; species: SpeciesId[] }[] = [
  { id: "fauna", species: ["capybara", "bear"] },
  { id: "aves", species: ["troupial", "macaw", "ibis", "flamingo"] },
  { id: "flores", species: ["orchid", "cattleya"] },
  { id: "arboles", species: ["araguaney", "saman", "ceiba", "moriche"] },
  { id: "agua", species: ["turtle", "dolphin", "parrotfish", "coral"] },
];

export const scientificNames: Record<SpeciesId, string> = {
  capybara: "Hydrochoerus hydrochaeris", bear: "Tremarctos ornatus",
  troupial: "Icterus icterus", macaw: "Ara ararauna", ibis: "Eudocimus ruber", flamingo: "Phoenicopterus ruber",
  orchid: "Cattleya mossiae", cattleya: "Cattleya lueddemanniana",
  araguaney: "Handroanthus chrysanthus", saman: "Samanea saman", ceiba: "Ceiba pentandra", moriche: "Mauritia flexuosa",
  turtle: "Eretmochelys imbricata", dolphin: "Inia geoffrensis", parrotfish: "Sparisoma viride", coral: "Acropora palmata",
};

export const natureSources = [
  { label: "WIDECAST · Eretmochelys imbricata en Venezuela", href: "https://www.widecast.org/What/Country/Venezuela/Docs/Buitrago_and_Guada_2002_La_tortuga_carey_Ei_en_Venezuela_Situacion_actual_y_perspectivas_para_su_recuperacion.pdf" },
  { label: "WWF · Inia geoffrensis", href: "https://www.worldwildlife.org/species/dolphin-and-porpoise/amazon-river-dolphin/" },
  { label: "Smithsonian · Sparisoma viride", href: "https://biogeodb.stri.si.edu/caribbean/en/thefishes/species/3926" },
  { label: "NOAA · Acropora palmata", href: "https://www.fisheries.noaa.gov/species/elkhorn-coral" },
  { label: "Smithsonian · Los Roques, corales", href: "https://learninglab.si.edu/resources/view/6386678" },
  { label: "Fundación Empresas Polar · Hydrochoerus hydrochaeris", href: "https://dvev.fundacionempresaspolar.org/campo-semantico/la-naturaleza/tema/fauna/venezolanismo/chiguire/" },
  { label: "Fundación Empresas Polar · Tremarctos ornatus", href: "https://bibliofep.fundacionempresaspolar.org/publicaciones/libros/el-oso-frontino/" },
  { label: "Inparques · Cuare", href: "https://inparques.gob.ve/Refugios/cuare.html" },
  { label: "Inparques · Ara ararauna", href: "https://www.inparques.gob.ve/Parques%20de%20Recreacion/francisco-de-miranda.html" },
  { label: "Kew · Cattleya mossiae", href: "https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:50274-2" },
  { label: "Kew · Cattleya lueddemanniana", href: "https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:50260-2" },
  { label: "Field Museum · Cattleya", href: "https://fieldguides.fieldmuseum.org/sites/default/files/rapid-color-guides-pdfs/747_venezuela-nativecattleya_0.pdf" },
  { label: "Field Museum · Handroanthus chrysanthus", href: "https://plantidtools.fieldmuseum.org/en/rrc/catalogue/324193" },
  { label: "Quaternary Science Reviews · Mauritia flexuosa", href: "https://www.sciencedirect.com/science/article/pii/S027737911400225X" },
];
