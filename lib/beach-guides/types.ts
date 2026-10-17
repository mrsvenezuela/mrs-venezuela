import type { ActiveLanguageCode } from '@/lib/i18n';

export type LocalText = Record<ActiveLanguageCode, string>;
export const t = (es: string, en: string, de: string, fr: string): LocalText => ({ es, en, de, fr });
export type GuideBlock = { title: LocalText; text: LocalText; link?: { href: string; label: LocalText } };
export type GuidePhoto = { src: string; caption: LocalText; author: string; license: string; href: string };
export type GuidePlanningSection = { title: LocalText; intro?: LocalText; items: GuideBlock[]; note?: LocalText };
export type GuidePlanner = {
  bases: GuidePlanningSection;
  boats: GuidePlanningSection;
  itinerary: GuidePlanningSection;
  budget: GuidePlanningSection;
  arrivalNote: LocalText;
  highlightsTitle: LocalText;
};
export type BeachGuide = {
  slug: string;
  name: string;
  region: LocalText;
  access: LocalText;
  setting: LocalText;
  tagline: LocalText;
  introTitle: LocalText;
  intro: LocalText;
  identity: LocalText;
  hero: GuidePhoto;
  feature?: GuidePhoto;
  gallery?: GuidePhoto[];
  planner?: GuidePlanner;
  highlights: [GuideBlock, GuideBlock, GuideBlock];
  arrival: [GuideBlock, GuideBlock, GuideBlock];
  timing: LocalText;
  duration: LocalText;
  stayAdvice?: LocalText;
  tips: [LocalText, LocalText, LocalText];
  faq: [GuideBlock, GuideBlock, GuideBlock];
  /** Sin `href` se muestra solo el nombre de la fuente (enlace caído o sin URL estable). */
  sources: { name: string; href?: string }[];
};
