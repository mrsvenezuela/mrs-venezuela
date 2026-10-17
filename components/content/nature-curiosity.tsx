// Original, code-native illustration: a thoughtful woman dressed for exploring.
// Decorative only; all information is provided as ordinary translated text.
function CuriousExplorer() {
  return <svg data-illustration="curious-explorer" viewBox="0 0 120 120" fill="none" aria-hidden="true" focusable="false" className="h-[72px] w-[72px] sm:h-28 sm:w-28">
    <circle cx="55" cy="67" r="46" fill="#e5e9d9" />
    <g stroke="#244d3d" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      {/* Hair behind the face; safari shirt and sleeveless field vest. */}
      <path d="M29 48c0-17 12-26 26-25 17 1 25 12 23 29l3 32c-13 9-37 9-55-1Z" fill="#66503e" />
      <path d="M23 108v-9c0-14 11-22 30-22s32 8 33 22l1 9" fill="#f1e8d5" />
      <path d="m38 81-8 5 3 22h40l4-22-11-6-13 10Z" fill="#9baa86" />
      <path d="M46 69v12l8 8 9-9V69" fill="#d7a77e" />
      <path d="m42 80 12 9-9 7-8-13m28-3-11 9 8 7 9-12M54 91v17" fill="#e4ddbc" />
      <path d="M36 98h10v8H36Z" fill="#b4bf9d" />
      {/* A tilted face, raised eyebrow and hand at the chin. */}
      <path d="M33 43c1 19 1 27 12 32 12 6 25-4 27-18l1-15c-11 1-21-3-26-10-2 7-7 10-14 11Z" fill="#e7bb94" />
      <path d="m39 48 8-2m11 0 7 2" stroke="#66503e" />
      <ellipse cx="44" cy="53" rx="1.8" ry="2.5" fill="#244d3d" stroke="none" />
      <ellipse cx="62" cy="53" rx="1.8" ry="2.5" fill="#244d3d" stroke="none" />
      <path d="m53 54-2 7 4 1m-7 5c3 2 6 2 9-1" stroke="#946748" strokeWidth="1.5" />
      <path d="m78 98-11-9-6-16c-1-3-5-2-5 1l1 10-5-4c-3-2-6 1-3 4l10 11 11 10" fill="#e7bb94" />
      <path d="m70 104 8-7 5 7" fill="#f1e8d5" />
      {/* Wide-brimmed explorer hat with a dark olive band. */}
      <path d="m30 36 5-19c1-5 9-5 16-2 8-3 16-3 18 2l5 20" fill="#d8c596" />
      <path d="m32 29 39 1 2 7-43-1Z" fill="#75855e" />
      <path d="M21 37c12-5 43-4 59 2 4 2 2 6-3 6-20 1-41-1-55-3-4-1-5-3-1-5Z" fill="#e4d4a9" />
      <path d="M96 13c-10 0-18 6-18 15 0 6 3 11 9 13l-2 8 10-6c12 0 20-6 20-15s-8-15-19-15Z" fill="#f5e3ae" stroke="#a48749" />
      <path d="M91 24c1-6 11-6 11 0 0 4-6 4-6 8" stroke="#715a2d" />
      <circle cx="96" cy="37" r="1.2" fill="#715a2d" stroke="none" />
    </g>
  </svg>;
}

export function NatureCuriosity({ label, title, text }: { label: string; title: string; text: string }) {
  return <aside aria-label={label} className="mt-9 grid grid-cols-[72px_minmax(0,1fr)] items-center gap-x-4 gap-y-3 rounded-[22px] border border-[#d8dfcd] bg-[#f3f1e5] px-4 py-5 sm:grid-cols-[112px_minmax(0,1fr)] sm:gap-x-7 sm:gap-y-2 sm:px-7 sm:py-6">
    <div className="sm:row-span-2"><CuriousExplorer /></div>
    <div className="min-w-0 max-w-3xl sm:self-end">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#80683c]">{label}</p>
      <h3 className="mt-1.5 text-balance font-[family-name:var(--font-display)] text-2xl font-semibold leading-tight text-[#244d3d] sm:text-3xl">{title}</h3>
    </div>
    <p className="col-span-2 max-w-3xl text-sm leading-6 text-[#526255] sm:col-span-1 sm:col-start-2 sm:self-start sm:text-[15px] sm:leading-7">{text}</p>
  </aside>;
}
