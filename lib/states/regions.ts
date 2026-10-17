/*
 * Región, capital y posición en el mapa político de los 24 estados
 * (23 con guía editorial más el Distrito Capital).
 *
 * Vive aquí y no en cada archivo de `lib/states/data/` para que la lista de
 * /estados, el menú y el localizador de cada guía lean siempre lo mismo.
 * Las coordenadas son porcentajes sobre `/images/venezuela-political-map.jpg`.
 */

export const stateRegions = [
  "Los Andes",
  "Occidente",
  "Región Central",
  "Los Llanos",
  "Oriente",
  "Guayana y Amazonas",
] as const;

export type StateRegion = (typeof stateRegions)[number];

export type StateLocation = {
  region: StateRegion;
  capital: string;
  /** Posición de la capital sobre el mapa político, en % de ancho y alto. */
  x: number;
  y: number;
};

const locations: Record<string, StateLocation> = {
  merida: { region: "Los Andes", capital: "Mérida", x: 16.1, y: 38.6 },
  tachira: { region: "Los Andes", capital: "San Cristóbal", x: 9.4, y: 46.7 },
  trujillo: { region: "Los Andes", capital: "Trujillo", x: 20.5, y: 32.0 },

  zulia: { region: "Occidente", capital: "Maracaibo", x: 12.4, y: 26.1 },
  falcon: { region: "Occidente", capital: "Santa Ana de Coro", x: 26.0, y: 18.2 },
  lara: { region: "Occidente", capital: "Barquisimeto", x: 29.2, y: 25.4 },
  yaracuy: { region: "Occidente", capital: "San Felipe", x: 33.4, y: 20.6 },

  "distrito-capital": { region: "Región Central", capital: "Caracas", x: 45.2, y: 18.5 },
  miranda: { region: "Región Central", capital: "Los Teques", x: 44.8, y: 19.8 },
  "la-guaira": { region: "Región Central", capital: "La Guaira", x: 44.6, y: 17.6 },
  aragua: { region: "Región Central", capital: "Maracay", x: 40.8, y: 20.6 },
  carabobo: { region: "Región Central", capital: "Valencia", x: 38.1, y: 21.9 },

  apure: { region: "Los Llanos", capital: "San Fernando de Apure", x: 43.4, y: 41.8 },
  barinas: { region: "Los Llanos", capital: "Barinas", x: 21.6, y: 38.3 },
  cojedes: { region: "Los Llanos", capital: "San Carlos", x: 34.6, y: 26.4 },
  guarico: { region: "Los Llanos", capital: "San Juan de los Morros", x: 41.1, y: 26.5 },
  portuguesa: { region: "Los Llanos", capital: "Guanare", x: 26.6, y: 32.5 },

  anzoategui: { region: "Oriente", capital: "Barcelona", x: 59.9, y: 24.9 },
  sucre: { region: "Oriente", capital: "Cumaná", x: 65.4, y: 16.8 },
  monagas: { region: "Oriente", capital: "Maturín", x: 71.6, y: 21.8 },
  "nueva-esparta": { region: "Oriente", capital: "La Asunción", x: 67.1, y: 11.2 },

  bolivar: { region: "Guayana y Amazonas", capital: "Ciudad Bolívar", x: 71.6, y: 38.2 },
  "delta-amacuro": { region: "Guayana y Amazonas", capital: "Tucupita", x: 83.0, y: 31.4 },
  amazonas: { region: "Guayana y Amazonas", capital: "Puerto Ayacucho", x: 44.2, y: 60.5 },
};

export function getStateLocation(slug: string): StateLocation | undefined {
  return locations[slug];
}
