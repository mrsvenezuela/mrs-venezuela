"use client";

import { useEffect } from "react";
import { useLanguage } from "@/components/i18n/language-provider";
import catalog from "@/lib/site-translations.json";

type SiteLanguage = "en" | "de" | "fr" | "zh";
type Catalog = Record<string, Partial<Record<SiteLanguage, string>>>;

const translations = catalog as Catalog;
const normalize = (value: string) => value.replace(/\s+/g, " ").trim();
const manual: Catalog = {
  "Mrs Venezuela": { en: "Mrs Venezuela", de: "Mrs Venezuela", fr: "Mrs Venezuela", zh: "Mrs Venezuela" },
  "Michell Naranjo": { en: "Michell Naranjo", de: "Michell Naranjo", fr: "Michell Naranjo", zh: "Michell Naranjo" },
  "Venezuela": { en: "Venezuela", de: "Venezuela", fr: "Venezuela", zh: "Venezuela" },
  "Canaima": { en: "Canaima", de: "Canaima", fr: "Canaima", zh: "Canaima" },
  "Los Roques": { en: "Los Roques", de: "Los Roques", fr: "Los Roques", zh: "Los Roques" },
  "Compartiendo Venezuela con el mundo.": { en: "Sharing Venezuela with the world.", de: "Venezuela mit der Welt teilen.", fr: "Partager le Venezuela avec le monde.", zh: "与世界分享委内瑞拉。" },
  /*
   * El diccionario de lib/i18n.ts ya devuelve la palabra traducida, y después este
   * traductor vuelve a pasar por encima. Si la palabra ya traducida existe como clave
   * en el catálogo automático, se traduce dos veces: "Menú" → "Menü" → "Speisekarte".
   * Estas entradas de identidad cortan esa segunda vuelta y sobreviven a que el script
   * regenere el catálogo, porque `manual` se consulta antes que `translations`.
   */
  "Menú": { en: "Menu", de: "Menü", fr: "Menu", zh: "菜单" },
  "Menü": { de: "Menü" },
  Menu: { en: "Menu", de: "Menü", fr: "Menu" },
  "Estado": { en: "State", de: "Bundesstaat", fr: "État", zh: "州" },
  "Superficie": { en: "Area", de: "Fläche", fr: "Superficie", zh: "面积" },
  "Gentilicio": { en: "Demonym", de: "Einwohnerbezeichnung", fr: "Gentilé", zh: "居民称谓" },
  El: { en: "On", de: "Am", fr: "Le", zh: "于" },
  En: { en: "In", de: "Im", fr: "En", zh: "于" },
};
const dynamicPrefixes: Record<SiteLanguage, Record<string, string>> = {
  en: { "Mostrar información sobre ": "Show information about ", "Ocultar información sobre ": "Hide information about ", "Ver imagen ": "View image ", "Ver foto ": "View photo " },
  de: { "Mostrar información sobre ": "Informationen anzeigen über ", "Ocultar información sobre ": "Informationen ausblenden über ", "Ver imagen ": "Bild ansehen ", "Ver foto ": "Foto ansehen " },
  fr: { "Mostrar información sobre ": "Afficher les informations sur ", "Ocultar información sobre ": "Masquer les informations sur ", "Ver imagen ": "Voir l’image ", "Ver foto ": "Voir la photo " },
  zh: { "Mostrar información sobre ": "显示相关信息：", "Ocultar información sobre ": "隐藏相关信息：", "Ver imagen ": "查看图片 ", "Ver foto ": "查看照片 " },
};
/*
 * Conectores que solo tienen sentido dentro de una etiqueta ya reconocida por un prefijo,
 * como "Ver imagen 3 de 8". Aplicarlos a cualquier texto suelto rompía frases del contenido
 * ("Un pueblo de pescadores" se convertía en "Un pueblo von pescadores").
 */
const dynamicConnectors: Record<SiteLanguage, Record<string, string>> = {
  en: { " de ": " of " },
  de: { " de ": " von " },
  fr: { " de ": " de " },
  zh: { " de ": "，属于 " },
};

function lookup(source: string, language: SiteLanguage) {
  const key = normalize(source);
  const direct = manual[key]?.[language] ?? translations[key]?.[language];
  if (direct !== undefined) return direct;
  let dynamic = key;
  let changed = false;
  for (const [spanish, localized] of Object.entries(dynamicPrefixes[language])) {
    if (dynamic.includes(spanish)) {
      dynamic = dynamic.replace(spanish, localized);
      changed = true;
    }
  }
  if (!changed) return undefined;
  for (const [spanish, localized] of Object.entries(dynamicConnectors[language])) {
    dynamic = dynamic.replace(spanish, localized);
  }
  return dynamic;
}
type TranslationState = { source: string; applied: string };
const textState = new WeakMap<Text, TranslationState>();
const attributeState = new WeakMap<Element, Map<string, TranslationState>>();
const translatedAttributes = ["alt", "aria-label", "placeholder", "title"];

export function ContentTranslator() {
  const { language } = useLanguage();

  useEffect(() => {
    const translateText = (textNode: Text) => {
      const parent = textNode.parentElement;
      // [data-translated] marca subárboles que ya llegan en el idioma correcto
      // desde el contenido: reescribirlos aquí solo podría estropearlos.
      if (!parent || parent.closest("script, style, code, pre, [data-translated]")) return;
      const previous = textState.get(textNode);
      const source = previous && textNode.data === previous.applied ? previous.source : textNode.data;
      const translated = language === "es" ? undefined : lookup(source, language);
      const leading = source.match(/^\s*/)?.[0] ?? "";
      const trailing = source.match(/\s*$/)?.[0] ?? "";
      const applied = translated ? `${leading}${translated}${trailing}` : source;
      textNode.data = applied;
      textState.set(textNode, { source, applied });
    };

    const translateElement = (element: Element) => {
      let states = attributeState.get(element);
      if (!states) {
        states = new Map();
        attributeState.set(element, states);
      }
      for (const attribute of translatedAttributes) {
        const current = element.getAttribute(attribute);
        if (current == null) continue;
        const previous = states.get(attribute);
        const source = previous && current === previous.applied ? previous.source : current;
        const translated = language === "es" ? undefined : lookup(source, language);
        const applied = translated ?? source;
        element.setAttribute(attribute, applied);
        states.set(attribute, { source, applied });
      }
    };

    const translateTree = (root: Node) => {
      if (root instanceof Text) translateText(root);
      if (root instanceof Element) translateElement(root);

      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
      let node: Node | null;
      while ((node = walker.nextNode())) {
        if (node instanceof Text) translateText(node);
        else if (node instanceof Element) translateElement(node);
      }
    };

    translateTree(document.body);
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const added of mutation.addedNodes) translateTree(added);
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [language]);

  return null;
}
