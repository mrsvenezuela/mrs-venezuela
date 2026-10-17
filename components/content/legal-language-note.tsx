'use client';

import { useLanguage } from '@/components/i18n/language-provider';
import type { LanguageCode } from '@/lib/i18n';

// Los textos legales solo existen en español; la versión española es la vinculante.
const notes: Partial<Record<LanguageCode, string>> = {
  en: 'These legal texts are only available in Spanish. The Spanish version is the authoritative one.',
  de: 'Diese rechtlichen Hinweise liegen nur auf Spanisch vor. Maßgeblich ist die spanische Fassung.',
  fr: 'Ces textes juridiques ne sont disponibles qu’en espagnol. Seule la version espagnole fait foi.',
  zh: '这些法律文本仅提供西班牙语版本，以西班牙语版本为准。',
};

export function LegalLanguageNote() {
  const { language } = useLanguage();
  const note = notes[language];
  if (!note) return null;
  return <p role="note" lang={language} className="mb-6 border-l-2 border-[#976c45] bg-[#eee7db] p-4 text-sm leading-6">{note}</p>;
}
