import { playaElAgua, cayoSombrero } from './margarita-morrocoy';
import { choroni, cuyagua } from './aragua';
import { mochima, playaMedina } from './sucre';
import { laTortuga } from './tortuga';
import { islaDePlata } from './isla-de-plata';
import { morrocoy } from './morrocoy';
import { losRoques } from './los-roques';
import { choroniPlanner, cuyaguaPlanner } from './aragua-planners';
import { mochimaPlanner, islaPlataPlanner, medinaPlanner } from './east-planners';
import { margaritaArrival, margaritaPlanner, sombreroPlanner, tortugaPlanner } from './island-planners';
import { travelSources } from './travel';
import type { BeachGuide, GuidePlanner } from './types';
import { additionalCoastalEntries, completeCoastalGuide } from './coastal-completion';
import { coastalIslands } from './coastal-islands';
import { coastalMainland } from './coastal-mainland';

const planners: Record<string, GuidePlanner> = {
  'playa-el-agua': margaritaPlanner, 'cayo-sombrero': sombreroPlanner,
  mochima: mochimaPlanner, 'isla-de-plata': islaPlataPlanner,
  choroni: choroniPlanner, cuyagua: cuyaguaPlanner,
  'playa-medina': medinaPlanner, 'isla-la-tortuga': tortugaPlanner,
};
const planningSources: Record<string, BeachGuide['sources']> = {
  'playa-el-agua': [{ name: 'VENETUR · Ferry Jet para pasajeros', href: 'https://www.venetur.com/index.php/ferry-jet-4/' }],
  mochima: [{ name: 'Turismo Sucre · pueblo y bahía de Mochima', href: 'https://www.turismosucre.com.ve/mochima/masinfomochima.html' }],
  'playa-medina': [{ name: 'Turismo Sucre · acceso y alojamiento en Medina', href: 'https://turismosucre.com.ve/posadaplayamedina/' }],
  'isla-la-tortuga': [{ name: 'Higuerote Online · organización y servicios de La Tortuga', href: 'https://higueroteonline.com/guiatortuga/amp/' }],
};

// Every beach route uses the shared renderer, without adding duplicate cards to the hub.
export const beachGuides: BeachGuide[] = [losRoques, playaElAgua, morrocoy, cayoSombrero, mochima, islaDePlata, choroni, cuyagua, playaMedina, laTortuga,
  ...[...additionalCoastalEntries, ...coastalIslands, ...coastalMainland].map(completeCoastalGuide),
].map(guide => ({
  ...guide,
  planner: guide.planner ?? planners[guide.slug],
  arrival: guide.slug === 'playa-el-agua' ? margaritaArrival : guide.arrival,
  sources: [...guide.sources, ...(travelSources[guide.slug] ?? []), ...(planningSources[guide.slug] ?? [])].filter((source, i, all) => all.findIndex(item => item.href === source.href) === i),
}));
export function getBeachGuide(slug: string) { return beachGuides.find((guide) => guide.slug === slug); }
