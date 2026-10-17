export type SpeciesId = "capybara" | "bear" | "troupial" | "macaw" | "ibis" | "flamingo" | "orchid" | "cattleya" | "araguaney" | "saman" | "ceiba" | "moriche" | "turtle" | "dolphin" | "parrotfish" | "coral";
export type NatureCopy = {
  title: string; eyebrow: string; intro: string; back: string; index: string;
  sections: [string, string, string, string, string];
  descriptions: [string, string, string, string, string];
  species: Record<SpeciesId, { name: string; text: string }>;
  careTitle: string; care: string; sources: string; photoNote: string; licenses: string;
};
