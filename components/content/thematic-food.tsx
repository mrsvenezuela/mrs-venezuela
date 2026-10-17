import Image from "next/image";
import type { ThematicItem, ThematicPhoto, ThematicSection, ThematicTheme } from "@/lib/thematic/types";

/*
 * Los bloques propios de /sabores.
 *
 * Sabores es una guía visual: cada plato, ingrediente o región que se nombra
 * lleva su fotografía. Estos bloques existen para que eso no convierta la página
 * en seis rejillas iguales. Cada sección tiene su forma —filas alternas para los
 * iconos, tarjetas apaisadas para las regiones, fichas con miniatura para los
 * ingredientes— y todas hablan el mismo idioma que el resto del renderizador:
 * marcos redondeados sin sombra, reglas finas, nombre, contexto y dos o tres
 * líneas. Nada de enlaces ni botones: todo lo que hay que saber está aquí.
 *
 * Orden de lectura en todos, también en móvil: foto, nombre, contexto, texto.
 */

const MUTED = "#68726d";
const RULE = "#e2dbcd";

function Photo({
  photo,
  ratio,
  theme,
  sizes,
  radius = "rounded-[20px]",
}: {
  photo: ThematicPhoto;
  ratio: string;
  theme: ThematicTheme;
  sizes: string;
  radius?: string;
}) {
  return (
    <div className={`relative overflow-hidden ${radius}`} style={{ background: theme.soft, aspectRatio: ratio }}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={sizes}
        className="object-cover"
        style={{ objectPosition: photo.position ?? "center" }}
      />
    </div>
  );
}

function Name({ item, size = "text-2xl" }: { item: ThematicItem; size?: string }) {
  return <h3 className={`font-[family-name:var(--font-display)] ${size} font-semibold leading-tight`}>{item.title}</h3>;
}

function Context({ item, theme }: { item: ThematicItem; theme: ThematicTheme }) {
  return item.meta ? (
    <p className="mt-1.5 text-[0.66rem] font-bold uppercase tracking-[0.16em]" style={{ color: theme.accent }}>
      {item.meta}
    </p>
  ) : null;
}

function Text({ item, className = "mt-2 leading-7" }: { item: ThematicItem; className?: string }) {
  return item.text ? (
    <p className={className} style={{ color: MUTED }}>
      {item.text}
    </p>
  ) : null;
}

/** Preparaciones relacionadas. El separador va detrás de cada nombre para que ninguna línea empiece por él. */
function Dishes({ item, theme }: { item: ThematicItem; theme: ThematicTheme }) {
  if (!item.dishes?.length) return null;
  const last = item.dishes.length - 1;
  return (
    <ul className="mt-2.5 flex flex-wrap gap-y-1 text-[0.9rem] font-semibold leading-6" style={{ color: theme.deep }}>
      {item.dishes.map((dish, index) => (
        <li key={dish} className="whitespace-nowrap">
          {dish}
          {index < last ? (
            <span className="mx-2" style={{ color: theme.accent }} aria-hidden="true">
              ·
            </span>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

/**
 * Iconos: filas de foto y texto que alternan de lado. En pantalla ancha van de
 * dos en dos y alternan por fila; en una columna, alternan una a una.
 */
export function FoodDishes({ items, theme }: { items: ThematicItem[]; theme: ThematicTheme }) {
  return (
    <div className="mt-10 grid gap-x-12 gap-y-10 lg:grid-cols-2 lg:gap-y-14">
      {items.map((item, index) => {
        const flipOne = index % 2 === 1;
        const flipTwo = Math.floor(index / 2) % 2 === 1;
        return (
          <article key={item.title} className="grid items-center gap-5 sm:grid-cols-2 sm:gap-7">
            {item.photo ? (
              <div className={`${flipOne ? "sm:order-2" : "sm:order-none"} ${flipTwo ? "lg:order-2" : "lg:order-none"}`}>
                <Photo photo={item.photo} ratio={theme.cardRatio.replace("/", " / ")} theme={theme} sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw" />
              </div>
            ) : null}
            <div>
              <Name item={item} />
              <Context item={item} theme={theme} />
              <Text item={item} className="mt-3 text-[0.97rem] leading-7" />
            </div>
          </article>
        );
      })}
    </div>
  );
}

/** Regiones: fotografía apaisada, nombre, estados, lo que se come y dos líneas. */
export function FoodRegions({ items, theme }: { items: ThematicItem[]; theme: ThematicTheme }) {
  return (
    <div className="mt-9 grid gap-x-7 gap-y-11 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <article key={item.title}>
          {item.photo ? <Photo photo={item.photo} ratio="4 / 3" theme={theme} sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw" /> : null}
          <div className="mt-4">
            <Name item={item} />
            <Context item={item} theme={theme} />
            <Dishes item={item} theme={theme} />
            <Text item={item} className="mt-2 text-[0.95rem] leading-7" />
          </div>
        </article>
      ))}
    </div>
  );
}

/** Cacao: una fotografía grande y, al lado, cada zona con su miniatura. */
export function FoodCacao({ section, theme }: { section: ThematicSection; theme: ThematicTheme }) {
  return (
    <div className="mt-9 grid items-center gap-9 md:grid-cols-[1.02fr_0.98fr] lg:gap-12">
      {section.photo ? (
        <Photo photo={section.photo} ratio="16 / 11" theme={theme} sizes="(max-width:768px) 100vw, 46vw" radius="rounded-[26px]" />
      ) : null}
      <div className="grid gap-6">
        {section.items?.map((item) => (
          <article key={item.title} className="grid grid-cols-[5.5rem_1fr] items-start gap-5 sm:grid-cols-[6.5rem_1fr]">
            {item.photo ? <Photo photo={item.photo} ratio="1 / 1" theme={theme} sizes="120px" radius="rounded-[16px]" /> : <span />}
            <div>
              <Name item={item} size="text-xl" />
              <Context item={item} theme={theme} />
              <Text item={item} className="mt-1.5 text-[0.93rem] leading-6" />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

/**
 * Dulces, panes y bebidas: tres grupos con su rótulo. Hasta pantalla ancha cada
 * pieza es una fila con miniatura, para no apilar ocho fotografías grandes; en
 * escritorio pasan a ser cuatro columnas con la foto encima.
 */
export function FoodGroups({ section, theme }: { section: ThematicSection; theme: ThematicTheme }) {
  return (
    <div className="mt-9">
      {section.groups?.map((group) => (
        <div key={group.title} className="grid gap-5 border-t py-8 lg:grid-cols-[9rem_1fr] lg:gap-8" style={{ borderColor: RULE }}>
          <h3 className="text-[0.7rem] font-bold uppercase tracking-[0.22em] lg:pt-1" style={{ color: theme.accent }}>
            {group.title}
          </h3>
          <div className="grid gap-x-6 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
            {group.items.map((item) => (
              <article key={item.title} className="grid grid-cols-[6rem_1fr] items-start gap-4 sm:grid-cols-[7rem_1fr] sm:gap-5 lg:block">
                {item.photo ? <Photo photo={item.photo} ratio="1 / 1" theme={theme} sizes="(max-width:1024px) 140px, 22vw" radius="rounded-[18px]" /> : <span />}
                <div className="lg:mt-4">
                  <Name item={item} size="text-xl" />
                  <Context item={item} theme={theme} />
                  <Text item={item} className="mt-1.5 text-[0.93rem] leading-6" />
                </div>
              </article>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/** Migraciones: tres influencias, cada una con una mesa y no con una bandera. */
export function FoodInfluences({ items, theme }: { items: ThematicItem[]; theme: ThematicTheme }) {
  return (
    <div className="mt-9 grid gap-x-8 gap-y-10 md:grid-cols-3">
      {items.map((item) => (
        <article key={item.title}>
          {item.photo ? <Photo photo={item.photo} ratio="3 / 2" theme={theme} sizes="(max-width:768px) 100vw, 33vw" /> : null}
          <div className="mt-5 border-l-2 pl-5" style={{ borderColor: theme.accent }}>
            <Name item={item} size="text-xl" />
            <Context item={item} theme={theme} />
            <Text item={item} className="mt-2 text-[0.95rem] leading-7" />
          </div>
        </article>
      ))}
    </div>
  );
}

/** Ingredientes: fichas con miniatura, una línea y dónde aparecen. Como una despensa. */
export function FoodPantry({ items, theme }: { items: ThematicItem[]; theme: ThematicTheme }) {
  return (
    <div className="mt-8 grid gap-x-12 md:grid-cols-2">
      {items.map((item) => (
        <article
          key={item.title}
          className="grid grid-cols-[5.5rem_1fr] items-start gap-5 border-t py-6 sm:grid-cols-[7rem_1fr]"
          style={{ borderColor: RULE }}
        >
          {item.photo ? <Photo photo={item.photo} ratio="1 / 1" theme={theme} sizes="130px" radius="rounded-[16px]" /> : <span />}
          <div>
            <Name item={item} size="text-xl" />
            <Context item={item} theme={theme} />
            <Text item={item} className="mt-1.5 text-[0.93rem] leading-6" />
            <Dishes item={item} theme={theme} />
          </div>
        </article>
      ))}
    </div>
  );
}

/** La mesa de diciembre: una fotografía grande y los cuatro platos debajo, con su miniatura. */
export function FoodTable({ section, theme }: { section: ThematicSection; theme: ThematicTheme }) {
  return (
    <figure className="mt-9">
      {section.photo ? (
        <Photo photo={section.photo} ratio="16 / 10" theme={theme} sizes="100vw" radius="rounded-[26px]" />
      ) : null}
      {section.items?.length ? (
        <figcaption className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {section.items.map((item) => (
            <div key={item.title} className="grid grid-cols-[4.5rem_1fr] items-start gap-4">
              {item.photo ? <Photo photo={item.photo} ratio="1 / 1" theme={theme} sizes="90px" radius="rounded-[14px]" /> : <span />}
              <div>
                <Name item={item} size="text-lg" />
                <Text item={item} className="mt-1 text-[0.9rem] leading-6" />
              </div>
            </div>
          ))}
        </figcaption>
      ) : null}
    </figure>
  );
}
