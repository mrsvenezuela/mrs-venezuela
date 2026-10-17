"use client";

import { useId, useState } from "react";
import { Play, X } from "lucide-react";
import { useLanguage } from "@/components/i18n/language-provider";
import { musicLabels, musicSamples, type MusicSampleKey } from "@/lib/thematic/music";

export function MusicHelp() {
  const { language } = useLanguage();
  return <p className="mt-5 max-w-3xl text-sm leading-6 text-[#68726d]">{musicLabels[language].help}</p>;
}

export function MusicSample({ sampleKey, genre, open, onToggle }: {
  sampleKey: MusicSampleKey;
  genre: string;
  open: boolean;
  onToggle: () => void;
}) {
  const { language } = useLanguage();
  const labels = musicLabels[language];
  const sample = musicSamples[sampleKey];
  const panelId = useId();

  return (
    <div className="mt-4 min-w-0">
      <p className="text-sm font-medium text-[#17201b]">{sample.title} <span className="font-normal text-[#68726d]">· {sample.artist}</span></p>
      {sampleKey === "andina" ? <p className="mt-1 text-xs leading-5 text-[#68726d]">{labels.andina}</p> : null}
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={`${open ? labels.close : labels.listen}: ${genre} — ${sample.title}`}
        onClick={onToggle}
        className="mt-3 inline-flex min-h-11 items-center gap-2 rounded-full border border-[#d2dacf] px-4 py-2 text-sm font-semibold text-[#0f3d2e] transition hover:bg-[#e8ede7] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0f3d2e]"
      >
        {open ? <X size={16} aria-hidden="true" /> : <Play size={15} aria-hidden="true" />}
        {open ? labels.close : labels.listen}
      </button>
      <div id={panelId} hidden={!open}>
        {/* Only the selected sample mounts an iframe. Unmounting stops its audio.
            No Spotify request is made until the visitor chooses to open it. */}
        {open ? <SpotifyPlayer key={sample.id} sampleKey={sampleKey} /> : null}
      </div>
    </div>
  );
}

function SpotifyPlayer({ sampleKey }: { sampleKey: MusicSampleKey }) {
  const { language } = useLanguage();
  const labels = musicLabels[language];
  const sample = musicSamples[sampleKey];
  const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading");

  return (
    <div className="mt-4 min-w-0">
      <p className="mb-3 text-xs leading-5 text-[#68726d]">{labels.play}</p>
      <div className="relative min-h-[152px] overflow-hidden rounded-xl bg-[#282828]">
        {status !== "loaded" ? <p role="status" className="absolute inset-x-4 top-4 text-sm text-white">{status === "error" ? labels.unavailable : labels.loading}</p> : null}
        <iframe
          src={`https://open.spotify.com/embed/track/${sample.id}?utm_source=generator&theme=0`}
          title={`${labels.player}: ${sample.title} — ${sample.artist}`}
          width="100%"
          height="152"
          className="relative block w-full border-0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
          loading="lazy"
          onLoad={() => setStatus("loaded")}
          onError={() => setStatus("error")}
        />
      </div>
      <a href={`https://open.spotify.com/track/${sample.id}`} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex min-h-11 items-center text-xs text-[#68726d] underline decoration-[#aab4ab] underline-offset-4 hover:text-[#0f3d2e]">{labels.fallback}</a>
    </div>
  );
}
