import type { StateGuideData } from "@/lib/states/types";
import { amazonas } from "@/lib/states/data/amazonas";
import { anzoategui } from "@/lib/states/data/anzoategui";
import { apure } from "@/lib/states/data/apure";
import { aragua } from "@/lib/states/data/aragua";
import { barinas } from "@/lib/states/data/barinas";
import { bolivar } from "@/lib/states/data/bolivar";
import { carabobo } from "@/lib/states/data/carabobo";
import { cojedes } from "@/lib/states/data/cojedes";
import { deltaAmacuro } from "@/lib/states/data/delta-amacuro";
import { falcon } from "@/lib/states/data/falcon";
import { guarico } from "@/lib/states/data/guarico";
import { laGuaira } from "@/lib/states/data/la-guaira";
import { lara } from "@/lib/states/data/lara";
import { merida } from "@/lib/states/data/merida";
import { miranda } from "@/lib/states/data/miranda";
import { monagas } from "@/lib/states/data/monagas";
import { nuevaEsparta } from "@/lib/states/data/nueva-esparta";
import { portuguesa } from "@/lib/states/data/portuguesa";
import { sucre } from "@/lib/states/data/sucre";
import { tachira } from "@/lib/states/data/tachira";
import { trujillo } from "@/lib/states/data/trujillo";
import { yaracuy } from "@/lib/states/data/yaracuy";
import { zulia } from "@/lib/states/data/zulia";

/*
 * Registro de guías editoriales de estado. Cada entrada vive en `lib/states/data/<slug>.ts`.
 * Los estados sin entrada siguen usando la ficha genérica de `DetailPage`.
 */
const guides: Record<string, StateGuideData> = {
  "amazonas": amazonas,
  "anzoategui": anzoategui,
  "apure": apure,
  "aragua": aragua,
  "barinas": barinas,
  "bolivar": bolivar,
  "carabobo": carabobo,
  "cojedes": cojedes,
  "delta-amacuro": deltaAmacuro,
  "falcon": falcon,
  "guarico": guarico,
  "la-guaira": laGuaira,
  "lara": lara,
  "merida": merida,
  "miranda": miranda,
  "monagas": monagas,
  "nueva-esparta": nuevaEsparta,
  "portuguesa": portuguesa,
  "sucre": sucre,
  "tachira": tachira,
  "trujillo": trujillo,
  "yaracuy": yaracuy,
  "zulia": zulia,
};

export function getStateGuide(slug: string): StateGuideData | undefined {
  return guides[slug];
}

export const stateGuideSlugs = Object.keys(guides);
