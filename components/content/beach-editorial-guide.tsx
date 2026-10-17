"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { ArrowLeft, ArrowUpRight, BedDouble, ChevronDown, Clock3, Sun, Waves, Backpack } from 'lucide-react';
import { useLanguage } from '@/components/i18n/language-provider';
import { PhotoCredits } from './photo-credits';
import { guideLabels as labels } from '@/lib/beach-guides/copy';
import type { BeachGuide, GuidePhoto, GuidePlanningSection } from '@/lib/beach-guides/types';
import type { ActiveLanguageCode } from '@/lib/i18n';

const focus = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#247c8f]';
const tipIcons = [Waves, Sun, Backpack];

function Heading({ title }: { title: string }) {
  return <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.4rem,4vw,3.8rem)] font-semibold leading-[1.06] text-[#103d38] after:mt-5 after:block after:h-[2px] after:w-10 after:bg-[#24979b]">{title}</h2>;
}

function Photo({ photo, language, wide = false }: { photo: GuidePhoto; language: ActiveLanguageCode; wide?: boolean }) {
  return <figure className="min-w-0">
    <div className={`relative overflow-hidden ${wide ? 'aspect-[4/3] sm:aspect-[5/2] lg:aspect-[3/1]' : 'aspect-[4/3] lg:aspect-[3/2]'}`}>
      <Image src={photo.src} alt={photo.caption[language]} fill sizes={wide ? '(min-width: 1280px) 1180px, 96vw' : '(min-width: 1024px) 710px, 96vw'} className={wide ? 'object-cover object-bottom' : 'object-cover'} />
    </div>
    <figcaption className="mt-3 text-xs leading-5 text-[#68726d]">{photo.caption[language]}</figcaption>
  </figure>;
}

function PlanningSection({ section, id, language, tinted = false }: { section: GuidePlanningSection; id: string; language: ActiveLanguageCode; tinted?: boolean }) {
  return <section id={id} className={`scroll-mt-24 py-10 md:py-14 ${tinted ? 'bg-[#e9efea]' : ''}`}>
    <div className="container-page">
      <Heading title={section.title[language]} />
      {section.intro && <p className="mt-5 max-w-3xl text-base leading-7 text-[#50635d]">{section.intro[language]}</p>}
      <div className={`mt-7 grid gap-7 sm:grid-cols-2 ${section.items.length === 4 ? 'lg:grid-cols-4' : 'lg:gap-14'}`}>
        {section.items.map((item, i) => <article key={i} className="min-w-0">
          <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[#103d38]">{item.title[language]}</h3>
          <p className="mt-3 text-base leading-7 text-[#50635d]">{item.text[language]}</p>
        </article>)}
      </div>
      {section.note && <p className="mt-7 max-w-4xl border-l-2 border-[#24979b] pl-4 text-sm leading-6 text-[#395b53]">{section.note[language]}</p>}
    </div>
  </section>;
}

export function BeachEditorialGuide({ guide }: { guide: BeachGuide }) {
  const { language } = useLanguage();
  const title = `${guide.name}: ${labels.guide[language]} | Mrs Venezuela`;
  const description = guide.tagline[language];
  // Keep El Agua's beach in view instead of illustrating it with La Asunción.
  const activityPhoto = guide.slug === 'playa-el-agua' ? guide.hero : guide.feature ?? guide.hero;
  useEffect(() => {
    document.title = title;
    const updates = [
      ['meta[name="description"]', description],
      ['meta[property="og:title"]', title],
      ['meta[property="og:description"]', description],
      ['meta[name="twitter:title"]', title],
      ['meta[name="twitter:description"]', description],
    ];
    for (const [selector, value] of updates) document.querySelector(selector)?.setAttribute('content', value);
  }, [title, description]);
  const photos = [guide.hero, activityPhoto, ...(guide.gallery ?? [])].filter((photo, i, all) => all.findIndex(p => p.src === photo.src) === i);
  const credits = photos.filter((p) => p.author && p.license && p.href).map((p) => ({title:p.caption[language],author:p.author,license:p.license,href:p.href}));
  const schema = {
    '@context':'https://schema.org', '@graph':[
      {'@type':'Article',headline:title,description:guide.intro[language],inLanguage:language,url:`https://mrsvenezuela.com/playa/${guide.slug}`,image:`https://mrsvenezuela.com${guide.hero.src}`,author:{'@type':'Organization',name:'Mrs Venezuela'},about:{'@type':'TouristDestination',name:guide.name}},
      {'@type':'FAQPage',inLanguage:language,mainEntity:guide.faq.map((item) => ({'@type':'Question',name:item.title[language],acceptedAnswer:{'@type':'Answer',text:item.text[language]}}))},
    ],
  };

  return <main data-translated="true" lang={language} className="bg-[#f7f4ec] text-[#17201b]">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,'\\u003c')}} />
    <section className="relative isolate min-h-[580px] overflow-hidden pb-52 pt-32 sm:min-h-[680px] sm:pt-40 lg:min-h-[740px]">
      <Image src={guide.hero.src} alt={guide.hero.caption[language]} fill priority sizes="100vw" className="-z-20 object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#f7f4ec]/90 via-[#f7f4ec]/15 to-transparent" />
      <div className="container-page text-[#103d38]">
        <Link href="/caribe-y-playa#destinos-esenciales" className={`mb-7 inline-flex min-h-11 items-center gap-2 text-sm ${focus}`}><ArrowLeft size={16} aria-hidden="true" />{labels.back[language]}</Link>
        <h1 className="max-w-5xl font-[family-name:var(--font-display)] text-[clamp(3.4rem,8.5vw,8rem)] font-semibold leading-[0.98] tracking-[-0.025em] [overflow-wrap:anywhere]">{guide.name}</h1>
        <p className="mt-6 max-w-2xl text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm">{guide.region[language]}</p>
        <span className="mt-6 block h-[2px] w-12 bg-[#168e96]" aria-hidden="true" />
      </div>
    </section>

    <div className="container-page py-8 md:py-10"><p className="max-w-4xl text-xl leading-relaxed text-[#173d39] md:text-2xl">{guide.tagline[language]}</p></div>

    {guide.planner && <nav aria-label={labels.index[language]} className="container-page mb-10 flex flex-wrap gap-x-6 gap-y-1 text-sm text-[#175363]">
      {[['elige-base', guide.planner.bases.title], ['como-llegar', labels.arrival], ['lanchas', guide.planner.boats.title], ['plan-dos-dias', guide.planner.itinerary.title], ['presupuesto', guide.planner.budget.title]].map(([id, text]) => <a key={id as string} href={`#${id}`} className={`inline-flex min-h-11 items-center underline decoration-[#247c8f]/35 underline-offset-4 ${focus}`}>{(text as typeof labels.arrival)[language]}</a>)}
    </nav>}

    <section id="conoce" className="container-page scroll-mt-8 pb-12 md:pb-16">
      <div className="grid items-center gap-8 lg:grid-cols-[0.8fr_1.3fr] lg:gap-14">
        <div className="min-w-0">
          <Heading title={guide.introTitle[language]} />
          <div className="mt-6 max-w-2xl space-y-4 text-base leading-7 text-[#50635d]">
            <p>{guide.intro[language]}</p><p>{guide.identity[language]}</p>
          </div>
        </div>
        {guide.planner ? <div className="bg-[#e9efea] p-7 sm:p-10"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#247c8f]">{labels.quickFacts[language]}</p><dl className="mt-6 space-y-6">{[[labels.location,guide.region],[labels.access,guide.access],[labels.duration,guide.duration]].map(([label,value],i) => <div key={i} id={i === 2 ? 'cuanto-tiempo' : undefined}><dt className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[#103d38]">{label[language]}</dt><dd className="mt-2 text-base leading-7 text-[#50635d]">{value[language]}</dd></div>)}</dl></div> : <Photo photo={guide.hero} language={language} />}
      </div>
    </section>

    {guide.planner && <PlanningSection id="elige-base" section={guide.planner.bases} language={language} tinted />}

    <section id="que-hacer" className={`scroll-mt-8 pb-12 md:pb-16 ${guide.planner ? 'pt-12 md:pt-16' : ''}`}>
      <div className="container-page">
        <Heading title={(guide.planner?.highlightsTitle ?? labels.highlights)[language]} />
        <div className="mt-7"><Photo photo={activityPhoto} language={language} wide /></div>
        <div className="mt-6 grid gap-7 md:grid-cols-3 md:gap-9" data-guide-activities>
            {guide.highlights.map((item,i) => <article key={i} className="min-w-0">
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold leading-tight lg:text-[1.8rem]">{item.title[language]}</h3>
              <p className="mt-3 max-w-xl text-base leading-7 text-[#59675f]">{item.text[language]}</p>
              {item.link ? <Link href={item.link.href} className={`mt-3 inline-flex min-h-11 items-center gap-2 text-sm text-[#175363] underline underline-offset-4 ${focus}`}>{item.link.label[language]}<ArrowUpRight size={16} aria-hidden="true" /></Link> : null}
            </article>)}
        </div>
        {guide.gallery && <div className="mt-9 grid gap-7 sm:grid-cols-2">{guide.gallery.map(photo => <Photo key={photo.src} photo={photo} language={language} />)}</div>}
      </div>
    </section>

    <section aria-label={labels.planning[language]} className="pb-12 md:pb-16">
      <div className="container-page">
        <div className="space-y-10">
          <section id="como-llegar" className="grid scroll-mt-8 gap-6 lg:grid-cols-[0.8fr_1.7fr] lg:gap-14">
            <Heading title={labels.arrival[language]} />
            <div className="min-w-0 lg:border-l lg:border-[#24979b]/40 lg:pl-9">
              <ol className="space-y-6" data-arrival-steps>
                {guide.arrival.map((step, i) => <li key={i} className="flex items-start gap-4">
                  <span aria-hidden="true" className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#247c8f]/10 text-xs font-semibold text-[#247c8f]">{i + 1}</span>
                  <div className="min-w-0"><h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[#103d38]">{step.title[language]}</h3><p className="mt-2 text-base leading-7 text-[#50635d]">{step.text[language]}</p></div>
                </li>)}
              </ol>
              <p className="mt-6 max-w-2xl text-sm leading-6 text-[#68726d]">{(guide.planner?.arrivalNote ?? labels.routeNote)[language]}</p>
            </div>
          </section>
          <section id="cuando-ir" className="grid scroll-mt-8 gap-6 lg:grid-cols-[0.8fr_1.7fr] lg:gap-14">
            <Heading title={labels.timing[language]} />
            <div className="flex items-start gap-5 lg:border-l lg:border-[#24979b]/40 lg:pl-9"><Sun size={28} className="mt-1 shrink-0 text-[#247c8f]" aria-hidden="true" /><p className="text-base leading-7 text-[#50635d]">{guide.timing[language]}</p></div>
          </section>
          {!guide.planner && <section id="cuanto-tiempo" className="grid scroll-mt-8 gap-6 lg:grid-cols-[0.8fr_1.7fr] lg:gap-14">
            <Heading title={labels.duration[language]} />
            <div className="flex items-start gap-5 lg:border-l lg:border-[#24979b]/40 lg:pl-9"><Clock3 size={28} className="mt-1 shrink-0 text-[#247c8f]" aria-hidden="true" /><p className="text-base leading-7 text-[#50635d]">{guide.duration[language]}</p></div>
          </section>}
        </div>
      </div>
    </section>

    {guide.planner && <>
      <PlanningSection id="lanchas" section={guide.planner.boats} language={language} tinted />
      <PlanningSection id="plan-dos-dias" section={guide.planner.itinerary} language={language} />
      <PlanningSection id="presupuesto" section={guide.planner.budget} language={language} />
    </>}

    <section id="donde-hospedarse" aria-labelledby="beach-stay-title" className="scroll-mt-8 bg-[#eee7db] py-9 md:py-12">
      <div className="container-page grid items-center gap-6 lg:grid-cols-[0.8fr_1.7fr] lg:gap-14">
        <div><h2 id="beach-stay-title" className="font-[family-name:var(--font-display)] text-[clamp(2.4rem,4vw,3.8rem)] font-semibold leading-[1.06] text-[#103d38]">{labels.stay[language]}</h2><p className="mt-4 text-xs font-semibold uppercase tracking-[0.23em] text-[#247c8f]">{labels.comingSoon[language]}</p></div>
        <div className="flex items-start gap-5 lg:border-l lg:border-[#24979b]/40 lg:py-4 lg:pl-9"><BedDouble size={30} className="shrink-0 text-[#247c8f]" aria-hidden="true" /><div className="max-w-xl space-y-3">{guide.stayAdvice && <p className="text-base leading-7 text-[#50635d]">{guide.stayAdvice[language]}</p>}<p className="text-sm leading-6 text-[#50635d]">{labels.stayNotice[language]}</p></div></div>
      </div>
    </section>

    <section id="consejos" className="container-page grid scroll-mt-8 gap-7 py-12 md:py-16 lg:grid-cols-[0.65fr_2fr] lg:gap-12">
      <Heading title={labels.tips[language]} />
      <ul className="grid gap-6 md:grid-cols-3">{guide.tips.map((tip,i) => {const Icon = tipIcons[i]; return <li key={i} className="flex items-start gap-3"><Icon size={24} aria-hidden="true" className="mt-1 shrink-0 text-[#247c8f]" /><p className="text-sm leading-6 text-[#50635d]">{tip[language]}</p></li>;})}</ul>
    </section>

    <section id="preguntas" className="container-page scroll-mt-8 pb-12 md:pb-16">
      <div>
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-[#103d38]">{labels.faq[language]}</h2>
        <div className="mt-6 grid gap-7 md:grid-cols-3 md:gap-9">{guide.faq.map((item,i) => <article key={i}><h3 className="font-[family-name:var(--font-display)] text-xl font-semibold leading-tight">{item.title[language]}</h3><p className="mt-2 text-sm leading-6 text-[#59675f]">{item.text[language]}</p></article>)}</div>
      </div>
    </section>

    <div className="container-page pb-12">
      <p className="max-w-3xl text-xs leading-6 text-[#68726d]">{labels.reviewed[language]}</p>
      <div className="mt-4 space-y-2">
        {credits.length > 0 ? <PhotoCredits credits={credits}><p className="mt-2">{labels.crop[language]}</p></PhotoCredits> : null}
        <details className="group"><summary className={`flex min-h-11 w-fit cursor-pointer list-none items-center gap-2 text-xs text-[#59675f] ${focus} [&::-webkit-details-marker]:hidden`}>{labels.sources[language]}<ChevronDown size={15} aria-hidden="true" className="group-open:rotate-180" /></summary>
          <ul className="space-y-2 py-3 text-xs text-[#59675f]">{guide.sources.map((source) => <li key={source.href ?? source.name}>{source.href ? <a className={`underline underline-offset-4 ${focus}`} href={source.href} target="_blank" rel="noreferrer">{source.name}</a> : source.name}</li>)}</ul>
        </details>
      </div>
      <Link href="/caribe-y-playa#destinos-esenciales" className={`mt-8 inline-flex min-h-12 items-center gap-3 rounded-full border border-[#247c8f]/30 px-6 py-3 text-sm text-[#175363] ${focus}`}>{labels.next[language]}<ArrowUpRight size={17} aria-hidden="true" /></Link>
    </div>
  </main>;
}
