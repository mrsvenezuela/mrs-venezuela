import Image from "next/image";
import {
  Calendar,
  ChevronDown,
  CloudSun,
  Compass,
  MapPinned,
  Mountain,
  Users,
} from "lucide-react";

const quickFacts = [
  [MapPinned, "Capital", "Maracaibo"],
  [Compass, "Región", "Occidente de Venezuela"],
  [MapPinned, "Superficie", "63.100 km²"],
  [Users, "Población", "3.704.404 habitantes"],
  [CloudSun, "Clima", "Cálido tropical y semiárido"],
  [Mountain, "Altitud", "Del nivel del mar a la Sierra de Perijá"],
  [Users, "Gentilicio", "Zuliano / zuliana"],
  [Calendar, "Huso horario", "UTC−4"],
] as const;

const places = [
  {
    id: "catatumbo",
    name: "Relámpago del Catatumbo",
    text: "Una noche junto al lago puede revelar uno de los fenómenos atmosféricos más célebres del planeta.",
    image: "/images/commons/catatumbo-lightning-141677107.jpeg",
  },
  {
    id: "lago-maracaibo",
    name: "Lago de Maracaibo",
    text: "El gran espejo de agua que organiza la vida, el paisaje y las rutas de todo el estado.",
    image: "/images/commons/puente-general-rafael-urdaneta.jpg",
  },
  {
    id: "basilica",
    name: "Basílica de La Chinita",
    text: "Un emblema de Maracaibo y el corazón espiritual de una de las celebraciones más queridas del país.",
    image: "/images/commons/basilica-de-la-chiquinquira.jpg",
  },
];

const dishes = [
  ["Patacón zuliano", "Plátano verde frito que abraza rellenos generosos. Es calle, sabor y personalidad maracucha en un solo plato."],
  ["Mandoca", "Rosquilla de plátano maduro y harina de maíz, tradicionalmente acompañada con queso. Su dulzor suave la hace inconfundible."],
  ["Yoyo", "Dos tajadas de plátano maduro rellenas con queso y rebozadas. Una mezcla intensa de dulce, salado y textura crujiente."],
  ["Tumbarrancho", "Arepa frita, rellena y contundente. Un clásico de la comida rápida zuliana que se disfruta mejor recién hecha."],
] as const;

const funFacts = [
  "El Lago de Maracaibo es uno de los rasgos geográficos más reconocibles de Venezuela y da forma a la identidad zuliana.",
  "La gaita zuliana, especialmente presente al final del año, se convirtió en una de las bandas sonoras culturales del país.",
  "La Basílica de La Chinita concentra cada noviembre una celebración que transforma el pulso de Maracaibo.",
];

export function ZuliaGuide() {
  return (
    <>
      <section className="container-page py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#247c8f]">Guía de viaje</p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-semibold leading-[0.94] text-[#17201b] md:text-6xl">Zulia, el gran paisaje del occidente venezolano.</h2>
          <div className="mt-8 space-y-5 text-lg leading-8 text-[#59675f]">
            <p>Zulia se vive con amplitud: el Lago de Maracaibo abre el horizonte, Maracaibo sostiene un ritmo propio y el occidente venezolano cambia de paisaje entre costa, humedales y montañas.</p>
            <p>En un mismo viaje puedes recorrer la ciudad, cruzar el Puente sobre el Lago, acercarte a la Sierra de Perijá o seguir las rutas del sur, donde el Catatumbo y sus aguas dibujan otro Zulia, más verde y silencioso.</p>
            <p>Es un estado para escuchar gaita, probar una cocina sin timidez y descubrir una identidad que se reconoce en su forma de hablar, en la devoción a La Chinita y en la hospitalidad de su gente.</p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#e8e1d5] bg-white/70 py-16 md:py-20">
        <div className="container-page">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#247c8f]">Información rápida</p>
          <div className="mt-8 grid gap-px overflow-hidden rounded-[28px] border border-[#e8e1d5] bg-[#e8e1d5] sm:grid-cols-2 lg:grid-cols-4">
            {quickFacts.map(([Icon, label, value]) => (
              <div key={label} className="min-h-40 bg-[#fbfaf7] p-6">
                <Icon size={20} className="text-[#247c8f]" />
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#247c8f]">{label}</p>
                <p className="mt-2 text-base font-medium leading-6 text-[#17201b]">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page grid gap-12 py-20 md:grid-cols-[0.9fr_1.1fr] md:items-center md:py-28">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#247c8f]">Ubicación</p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-semibold leading-[0.94] text-[#17201b]">¿Dónde queda Zulia?</h2>
          <div className="mt-7 space-y-5 text-lg leading-8 text-[#59675f]">
            <p>Está al noroeste de Venezuela, junto a Colombia y el golfo de Venezuela. Su geografía gira alrededor de la cuenca del Lago de Maracaibo, una gran vía natural que conecta ciudades, ríos y costa.</p>
            <p>Al oeste se levanta la Sierra de Perijá; hacia el sur, los humedales y el sistema del Catatumbo marcan la transición hacia paisajes más húmedos. Esa mezcla explica por qué Zulia no se recorre de una sola manera.</p>
          </div>
        </div>
        <div className="relative min-h-[330px] overflow-hidden rounded-[30px] border border-[#e8e1d5] bg-[#eaf2ed]">
          <Image src="/images/venezuela-political-map.jpg" alt="Mapa de Venezuela con Zulia en el occidente" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover object-center opacity-80" />
          <div className="absolute inset-0 bg-[#102e22]/10" />
          <div className="absolute left-[19%] top-[33%] flex items-center gap-2 rounded-full bg-[#173d2e] px-4 py-2 text-sm font-semibold text-white shadow-lg">
            <span className="h-2.5 w-2.5 rounded-full bg-[#e8c359]" /> Zulia
          </div>
        </div>
      </section>

      <section className="border-y border-[#e8e1d5] bg-white py-20 md:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[0.76fr_1.24fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#247c8f]">Historia</p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-semibold leading-[0.94] text-[#17201b]">Una región que siempre miró hacia el lago.</h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-[#59675f]">
            <p>Antes de las rutas coloniales, los territorios zulianos eran hogar de pueblos como los wayuu, añú, barí y yukpa. Sus vínculos con el agua, el comercio y el territorio siguen siendo esenciales para entender el estado.</p>
            <p>Durante la colonia, Maracaibo fue un puerto estratégico. En 1823, la batalla naval del Lago de Maracaibo se convirtió en un episodio decisivo para la consolidación de la independencia venezolana.</p>
            <p>En el siglo XX, el desarrollo petrolero transformó la escala económica y urbana de la región. Hoy, Zulia reúne esa memoria histórica con una identidad cultural que sigue siendo profundamente local.</p>
          </div>
        </div>
      </section>

      <section className="container-page py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#247c8f]">Naturaleza</p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-semibold leading-[0.94] text-[#17201b]">Un territorio de agua, humedales y montaña.</h2>
            <p className="mt-7 text-lg leading-8 text-[#59675f]">El Lago de Maracaibo es el gran protagonista, pero Zulia va mucho más allá de su orilla: el sur reúne ríos y ciénagas; la Sierra de Perijá suma relieve y bosque; y el Catatumbo convierte el cielo nocturno en paisaje.</p>
          </div>
          <div className="border-l border-[#e8e1d5] pl-0 lg:pl-12">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#247c8f]">Cultura</p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-semibold leading-[0.94] text-[#17201b]">La identidad zuliana se escucha y se celebra.</h2>
            <p className="mt-7 text-lg leading-8 text-[#59675f]">La gaita, la devoción a La Chinita, las artesanías wayuu y una manera muy particular de hablar construyen una identidad inmediata. En Zulia, la hospitalidad y el orgullo por lo propio no son detalles: forman parte del viaje.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#173d2e] py-20 text-white md:py-28">
        <div className="container-page">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b9d9d6]">Gastronomía</p>
          <h2 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-5xl font-semibold leading-[0.94] md:text-6xl">Una cocina que no pasa desapercibida.</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">El sabor zuliano combina plátano, queso, frituras y recetas que se sienten generosas desde el primer bocado.</p>
          <div className="mt-10 grid gap-x-12 gap-y-9 md:grid-cols-2">
            {dishes.map(([name, text]) => (
              <div key={name} className="border-t border-white/20 pt-5">
                <h3 className="font-[family-name:var(--font-display)] text-3xl font-semibold">{name}</h3>
                <p className="mt-3 max-w-xl leading-7 text-white/72">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20 md:py-28">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#247c8f]">Lugares imprescindibles</p>
        <div className="mt-4 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <h2 className="max-w-3xl font-[family-name:var(--font-display)] text-5xl font-semibold leading-[0.94] text-[#17201b] md:text-6xl">Tres maneras de entrar en Zulia.</h2>
          <p className="max-w-sm text-base leading-7 text-[#68726d]">No son postales intercambiables: cada una revela una cara distinta del estado.</p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {places.map((place) => (
            <article key={place.id} className="group overflow-hidden rounded-[28px] border border-[#e8e1d5] bg-white">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={place.image} alt={place.name} fill sizes="(min-width: 1024px) 33vw, 100vw" unoptimized className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
              </div>
              <details id={place.id} className="group/details">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 text-[#17201b] [&::-webkit-details-marker]:hidden">
                  <h3 className="font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight">{place.name}</h3>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eef7f4] text-[#247c8f] transition-transform duration-200 group-open/details:rotate-180">
                    <ChevronDown size={20} />
                  </span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="border-t border-[#e8e1d5] pt-4 leading-7 text-[#68726d]">{place.text}</p>
                </div>
              </details>
            </article>
          ))}
        </div>
      </section>

      <section className="container-page pb-10 pt-14 md:pb-12 md:pt-16">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#247c8f]">Datos curiosos</p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-semibold leading-[0.94] text-[#17201b]">Pequeñas claves para leer el lugar.</h2>
          </div>
          <ol className="space-y-5">
            {funFacts.map((fact, index) => <li key={fact} className="flex gap-5 border-t border-[#e8e1d5] pt-5"><span className="font-[family-name:var(--font-display)] text-3xl text-[#247c8f]">0{index + 1}</span><p className="max-w-2xl text-lg leading-8 text-[#59675f]">{fact}</p></li>)}
          </ol>
        </div>
      </section>

      <section className="container-page pb-20 pt-10 md:pb-28 md:pt-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#247c8f]">Cómo llegar</p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-semibold leading-[0.94] text-[#17201b]">Llegar a Zulia.</h2>
          <div className="mt-9 space-y-6 text-lg leading-8 text-[#59675f]">
            <p><strong className="text-[#17201b]">Por aire.</strong> Maracaibo cuenta con el Aeropuerto Internacional La Chinita, principal puerta aérea del estado. Confirma rutas y horarios directamente con la aerolínea antes de planificar.</p>
            <p><strong className="text-[#17201b]">Por carretera o autobús.</strong> Las conexiones terrestres enlazan Maracaibo con otras ciudades del occidente y el centro del país. Los tiempos pueden variar de forma importante según el trayecto y las condiciones del viaje.</p>
            <p><strong className="text-[#17201b]">Por agua.</strong> Para algunas zonas del lago y del sur, la navegación forma parte del recorrido. Coordina siempre con operadores locales registrados, especialmente en rutas de naturaleza.</p>
          </div>
        </div>
      </section>
    </>
  );
}
