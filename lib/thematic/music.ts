import type { LanguageCode } from "@/lib/i18n";

// Official Spotify embeds, verified with oEmbed. No audio is downloaded or hosted.
// Conticinio: https://bibliofep.fundacionempresaspolar.org/dhv/entradas/m/mejias-laudelino/
export const musicSamples = {
  joropo: { id: "3j8oMfNbwHl72ycvRJLPLY", title: "Alma Llanera", artist: "Simón Díaz" },
  gaita: { id: "1bUrYhqNRg1fHaoRMWtqSO", title: "La Grey Zuliana", artist: "Ricardo Aguirre" },
  calipso: { id: "5CHPg4vXdTa1Ji01XDf6qP", title: "Woman del Callao", artist: "Un Solo Pueblo" },
  tambores: { id: "6lxtkQ8Saa9tge8IbOnKG1", title: "Viva Venezuela", artist: "Un Solo Pueblo" },
  andina: { id: "5mG96oKJQ6J1Hp6r9re6BX", title: "Conticinio", artist: "Juan Vicente Torrealba" },
} as const;

export type MusicSampleKey = keyof typeof musicSamples;

type MusicLabels = {
  listen: string;
  close: string;
  help: string;
  play: string;
  loading: string;
  unavailable: string;
  fallback: string;
  player: string;
  andina: string;
};

export const musicLabels: Record<LanguageCode, MusicLabels> = {
  es: {
    listen: "Escuchar", close: "Cerrar reproductor",
    help: "Elige un estilo y pulsa ▶ en su reproductor. Al abrirlo se conecta con Spotify, que puede ofrecer solo un fragmento.",
    play: "Pulsa ▶ en Spotify para escuchar. Al elegir otro estilo, este reproductor se cierra.",
    loading: "Cargando Spotify…", unavailable: "No se pudo cargar el reproductor.",
    fallback: "Si no funciona, abrir en Spotify", player: "Reproductor de Spotify",
    andina: "Un vals de Trujillo, compuesto por Laudelino Mejías.",
  },
  en: {
    listen: "Listen", close: "Close player",
    help: "Choose a style, then press ▶ in its player. Opening it connects to Spotify, which may offer only a preview.",
    play: "Press ▶ in Spotify to listen. Choosing another style closes this player.",
    loading: "Loading Spotify…", unavailable: "The player could not be loaded.",
    fallback: "Not working? Open in Spotify", player: "Spotify player",
    andina: "A waltz from Trujillo, composed by Laudelino Mejías.",
  },
  de: {
    listen: "Anhören", close: "Player schließen",
    help: "Wähle einen Stil und drücke ▶ im Player. Beim Öffnen wird Spotify geladen; möglicherweise ist nur eine Hörprobe verfügbar.",
    play: "Drücke ▶ in Spotify zum Anhören. Ein anderer Stil schließt diesen Player.",
    loading: "Spotify wird geladen…", unavailable: "Der Player konnte nicht geladen werden.",
    fallback: "Funktioniert es nicht? In Spotify öffnen", player: "Spotify-Player",
    andina: "Ein Walzer aus Trujillo, komponiert von Laudelino Mejías.",
  },
  fr: {
    listen: "Écouter", close: "Fermer le lecteur",
    help: "Choisissez un style, puis appuyez sur ▶ dans son lecteur. Son ouverture connecte à Spotify, qui peut ne proposer qu’un extrait.",
    play: "Appuyez sur ▶ dans Spotify pour écouter. Choisir un autre style ferme ce lecteur.",
    loading: "Chargement de Spotify…", unavailable: "Le lecteur n’a pas pu être chargé.",
    fallback: "Un problème ? Ouvrir dans Spotify", player: "Lecteur Spotify",
    andina: "Une valse de Trujillo, composée par Laudelino Mejías.",
  },
  zh: {
    listen: "试听", close: "关闭播放器",
    help: "选择一种风格，再按播放器中的 ▶。打开播放器会连接 Spotify，部分情况下只能试听片段。",
    play: "按 Spotify 中的 ▶ 开始播放。选择另一种风格会关闭当前播放器。",
    loading: "正在加载 Spotify…", unavailable: "无法加载播放器。",
    fallback: "无法播放？在 Spotify 中打开", player: "Spotify 播放器",
    andina: "来自特鲁希略的圆舞曲，由劳德利诺·梅希亚斯创作。",
  },
};
