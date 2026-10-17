type EditorialSectionHeadingProps = {
  number?: string;
  title: string;
  description?: string;
  className?: string;
  /*
   * Reparte el encabezado en dos columnas —título a la izquierda, frase de entrada
   * a la derecha— cuando la sección ocupa todo el ancho. Apilados, el título se
   * cortaba en max-w-4xl y la frase en max-w-2xl dentro de un contenedor de 1180 px,
   * así que un tercio quedaba vacío en las secciones sin fotografía.
   * No se activa en las secciones que ya son de dos columnas: ahí sobra.
   */
  wide?: boolean;
};

export function EditorialSectionHeading({
  number,
  title,
  description,
  className = "",
  wide = false,
}: EditorialSectionHeadingProps) {
  const twoColumns = wide && Boolean(description);

  return (
    <div className={className}>
      {number && (
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#247c8f] md:text-sm">{number}</p>
      )}

      <div className={`${number ? "mt-4" : ""} grid items-end gap-6 ${twoColumns ? "lg:grid-cols-[1fr_0.72fr] lg:gap-14" : ""}`}>
        <h2
          className={`font-[family-name:var(--font-display)] text-[clamp(2.3rem,4.4vw,4.5rem)] font-semibold leading-[0.96] text-[#17201b] ${
            twoColumns ? "" : "max-w-4xl"
          }`}
        >
          {title}
        </h2>
        {description && (
          <p
            className={`text-base leading-7 text-[#68726d] md:text-lg md:leading-8 ${
              twoColumns ? "lg:pb-2" : "max-w-2xl"
            }`}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
