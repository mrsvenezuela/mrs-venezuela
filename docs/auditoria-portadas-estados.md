# Auditoría de las portadas de los 23 estados

Fecha: 27 de septiembre de 2026.

Alcance: archivos locales y tarjetas de `/estados`, junto con la fuente de portada de las guías `/estado/[slug]`. No se verificó ni se publicó la versión de producción. Distrito Capital no forma parte de estos 23 estados.

## Resultado

Las 23 imágenes corresponden a localidades de su estado. Veinte muestran la capital o un edificio/plaza de ella. Anzoátegui muestra Puerto La Cruz; La Guaira, Macuto; Trujillo, Valera. Estas tres no son fotos de las capitales, pero sí del estado correcto. No se sustituyeron imágenes.

## Método

- Inventario de las portadas resueltas por `getStateGuide` y comprobación de sus archivos.
- Inspección visual de las 23 imágenes locales en una hoja de contacto.
- Consulta de las descripciones, categorías y licencias del original en Wikimedia Commons.
- Comparación de píxeles locales y originales reducidos a 32×32 RGB: las coincidencias tuvieron diferencias medias de 0,422 a 2,940 sobre 255. Este cotejo identifica el archivo; la localización procede de la descripción/categorías de la fuente, no de inferencias visuales.
- Comprobación en el navegador de que `/estados` usa esos archivos. Las guías editoriales también consumen `data.hero.src`.

## Inventario

| Estado | Localidad de la imagen | Fuente cotejada |
| --- | --- | --- |
| amazonas | Puerto Ayacucho | [Original y licencia](https://commons.wikimedia.org/wiki/File:2da_avenida_mas_importante_de_pto.ayacucho_la_23_de_enero-venezuela.jpg) |
| anzoategui | Puerto La Cruz (no es Barcelona, la capital) | [Original y licencia](https://commons.wikimedia.org/wiki/File:Al_borde_del_mar.JPG) |
| apure | San Fernando de Apure: Palacio de Gobierno | [Original y licencia](https://commons.wikimedia.org/wiki/File:PALACIO_DE_GOBIERNO_DEL_ESTADO_APURE.JPG) |
| aragua | Maracay | [Original y licencia](https://commons.wikimedia.org/wiki/File:MaracaydesdetorreSindoni.jpg) |
| barinas | Barinas: Casa de la Cultura | [Original y licencia](https://commons.wikimedia.org/wiki/File:Casa_de_la_cultura_Napole%C3%B3n_Sebasti%C3%A1n_Arteaga.jpg) |
| bolivar | Ciudad Bolívar | [Original y licencia](https://commons.wikimedia.org/wiki/File:Ciudad_Bol%C3%ADvar_Vista_Area.jpg) |
| carabobo | Valencia | [Original y licencia](https://commons.wikimedia.org/wiki/File:Vista_de_Valencia_desde_Lomas_del_Este.JPG) |
| cojedes | San Carlos | [Original y licencia](https://commons.wikimedia.org/wiki/File:Panoramicasancarlos.jpg) |
| delta-amacuro | Tucupita | [Original y licencia](https://commons.wikimedia.org/wiki/File:Vista_de_Tucupita.jpg) |
| falcon | Coro | [Original y licencia](https://commons.wikimedia.org/wiki/File:Calle_empredrada_de_Coro.JPG) |
| guarico | San Juan de los Morros | [Original y licencia](https://commons.wikimedia.org/wiki/File:SAN_JUAN_DE_LOS_MORROS_-GUARICO_02.JPG) |
| la-guaira | Macuto (no es la ciudad de La Guaira) | [Original y licencia](https://commons.wikimedia.org/wiki/File:Macuto_(2023).jpg) |
| lara | Barquisimeto | [Original y licencia](https://commons.wikimedia.org/wiki/File:Digitaliza_Tu_Ciudad_Barquisimeto_2025-8.jpg) |
| merida | Mérida | [Original y licencia](https://commons.wikimedia.org/wiki/File:M%C3%A9rida3.jpg) |
| miranda | Los Teques | [Original y licencia](https://commons.wikimedia.org/wiki/File:Panoramica_de_Los_Teques_en_2015.jpg) |
| monagas | Maturín | [Original y licencia](https://commons.wikimedia.org/wiki/File:Maturin_cathedral_in_the_skyline.jpg) |
| nueva-esparta | La Asunción | [Original y licencia](https://commons.wikimedia.org/wiki/File:Panoramic_view_of_La_Asunci%C3%B3n,_Isla_Margarita.jpg) |
| portuguesa | Guanare: Plaza Bolívar | [Original y licencia](https://commons.wikimedia.org/wiki/File:La_Plaza_Bol%C3%ADvar_de_Guanare.jpg) |
| sucre | Cumaná | [Original y licencia](https://commons.wikimedia.org/wiki/File:Cumana_desde_el_Castillo_de_San_Antonio.jpg) |
| tachira | San Cristóbal | [Original y licencia](https://commons.wikimedia.org/wiki/File:Balc%C3%B3n_de_las_nubes.jpg) |
| trujillo | Valera (no es la ciudad de Trujillo, la capital) | [Original y licencia](https://commons.wikimedia.org/wiki/File:Valera_con_zoom_desde_Carvajal.JPG) |
| yaracuy | San Felipe | [Original y licencia](https://commons.wikimedia.org/wiki/File:Avenida_Caracas_-_San_Felipe.jpg) |
| zulia | Maracaibo | [Original y licencia](https://commons.wikimedia.org/wiki/File:Panoramic_view_of_Maracaibo_center_and_cathedral_dome.jpg) |

## Detalles pendientes de corrección

1. **Trujillo:** la portada `trujillo-valera.jpg` coincide con `Valera con zoom desde Carvajal.JPG`, de **Chapasalas, CC BY-SA 4.0**. La lista de créditos de la guía solo incluye la otra foto de la ciudad de Trujillo, de Rjcastillo. Falta añadir el crédito de la portada de Valera. No confundir ambas ciudades.
2. **Falcón:** la fuente de `falcon-coro.jpg` identifica la iglesia de **San Francisco, Coro** en sus categorías. El texto alternativo local dice «catedral»; la localidad es correcta, pero esa identificación del edificio debe corregirse también en sus traducciones.
3. Si el criterio editorial es mostrar **las 23 capitales** y no cualquier ciudad del estado, las portadas a cambiar son Anzoátegui (Barcelona), La Guaira (ciudad de La Guaira) y Trujillo (ciudad de Trujillo). Eso requiere una selección nueva, no corregir una fotografía de otro estado.

No se cambiaron portadas, contenidos ni créditos durante esta revisión.

