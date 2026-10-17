/*
 * Aviso de enlaces de afiliado, reutilizable en cualquier guía.
 *
 * Solo se pinta cuando la página contiene enlaces comerciales reales (`show`).
 * Sin enlaces no hay nada que advertir, y un aviso sin motivo resta confianza.
 */
export function AffiliateDisclosure({
  text,
  show,
  className = "",
}: {
  text: string;
  show: boolean;
  className?: string;
}) {
  if (!show || !text.trim()) return null;

  return (
    <p role="note" className={`border-l-2 border-[#d9d3c7] pl-4 text-xs leading-5 text-[#68726d] ${className}`}>
      {text}
    </p>
  );
}
