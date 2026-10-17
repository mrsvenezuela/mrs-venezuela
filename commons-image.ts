/*
 * Ruta local de una fotografía de Wikimedia Commons.
 *
 * Antes se enlazaban en caliente contra `commons.wikimedia.org/wiki/Special:FilePath/…`,
 * que responde con una redirección (medimos 1,6 s y 7,5 s) y a veces devuelve 503:
 * la página tardaba y algunas fotos no llegaban a aparecer. Wikimedia además pide
 * no servir imágenes así. Ahora la copia vive en `public/images/commons/` —bajo su
 * licencia CC, con los créditos que ya lleva cada guía— y Next la optimiza como
 * cualquier otra imagen del sitio.
 *
 * El nombre del archivo se deriva del de Commons con esta misma función, así que
 * el script que descarga y el código que enlaza no pueden desincronizarse.
 */
export function commonsImage(file: string): string {
  const extension = (file.match(/\.([a-z0-9]+)$/i)?.[1] ?? "jpg").toLowerCase();
  const base = file
    .replace(/\.[a-z0-9]+$/i, "")
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 70);

  return `/images/commons/${base}.${extension}`;
}
