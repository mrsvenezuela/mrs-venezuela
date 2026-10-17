import Image from "next/image";
import { PhotoCredits } from "@/components/content/photo-credits";
import {
  Calendar,
  CloudSun,
  Compass,
  MapPinned,
  Mountain,
  Plane,
  Sparkles,
  Users,
} from "lucide-react";
import type { DiscoverItem } from "@/lib/content";

type Guide = {
  capital: string;
  landscape: string;
  identity: string;
  route: string;
};

type Profile = {
  region: string;
  climate: string;
  demonym: string;
  elevation: string;
  flavor: string;
  dish: string;
  dishText: string;
  secondDish: string;
  secondDishText: string;
};

const profiles: Record<string, Profile> = {
  amazonas: { region: "Sur de Venezuela", climate: "Tropical húmedo", demonym: "Amazonense", elevation: "Principalmente baja y selvática", flavor: "Casabe, pescado de río y sabores indígenas", dish: "Casabe", dishText: "Pan ancestral de yuca amarga, inseparable de muchas mesas amazónicas.", secondDish: "Pescado de río", secondDishText: "Preparaciones sencillas que celebran los sabores del Orinoco y sus afluentes." },
  anzoategui: { region: "Oriente de Venezuela", climate: "Tropical costero", demonym: "Anzoatiguense", elevation: "Del nivel del mar a serranías interiores", flavor: "Pescados, mariscos y cocina oriental", dish: "Pescado frito", dishText: "Una presencia constante en las mesas cercanas a la costa oriental.", secondDish: "Empanada de cazón", secondDishText: "Masa de maíz rellena de pescado, un clásico del desayuno y la playa." },
  apure: { region: "Llanos occidentales", climate: "Tropical de sabana", demonym: "Apureño / apureña", elevation: "Llanuras bajas", flavor: "Carne, queso y cocina llanera", dish: "Carne en vara", dishText: "Carne asada lentamente al fuego, uno de los sabores más representativos del llano.", secondDish: "Palo a pique", secondDishText: "Arroz, caraotas y carne en una combinación cotidiana y reconfortante." },
  aragua: { region: "Centro-norte", climate: "Tropical, de montaña y costa", demonym: "Aragüeño / aragüeña", elevation: "Valles entre costa y montaña", flavor: "Cacao, costa y tradición central", dish: "Pescado frito", dishText: "La costa aragüeña lo sirve fresco, acompañado de mar y conversación larga.", secondDish: "Dulces de cacao", secondDishText: "Una forma local de acercarse a la riqueza agrícola de la región." },
  barinas: { region: "Llanos occidentales", climate: "Tropical de sabana", demonym: "Barinés / barinesa", elevation: "Del piedemonte a las llanuras", flavor: "Carne, queso y productos del llano", dish: "Carne en vara", dishText: "El sabor directo de las rutas llaneras, cocinado a fuego abierto.", secondDish: "Queso llanero", secondDishText: "Fresco, salado y presente en desayunos y comidas de carretera." },
  bolivar: { region: "Guayana venezolana", climate: "Tropical cálido y húmedo", demonym: "Bolivarense", elevation: "De ríos bajos a tepuyes", flavor: "Casabe, pescado de río y cocina guayanesa", dish: "Casabe", dishText: "Acompañamiento esencial en una región atravesada por ríos y culturas originarias.", secondDish: "Pescado de río", secondDishText: "Sabores locales que encuentran en el Caroní y el Orinoco su punto de partida." },
  carabobo: { region: "Centro-norte", climate: "Tropical cálido", demonym: "Carabobeño / carabobeña", elevation: "Costa y montañas centrales", flavor: "Cocina costera y central", dish: "Tostones", dishText: "Plátano frito y crujiente, frecuente en las mesas de la costa central.", secondDish: "Pescado frito", secondDishText: "Una parada clásica en Puerto Cabello y sus alrededores." },
  cojedes: { region: "Llanos centrales", climate: "Tropical de sabana", demonym: "Cojedeño / cojedeña", elevation: "Llanuras bajas", flavor: "Carne, queso y tradición llanera", dish: "Carne en vara", dishText: "Preparación esencial de las jornadas de llano.", secondDish: "Pisillo", secondDishText: "Carne desmechada y sazonada, presente en la cocina de sabana." },
  "delta-amacuro": { region: "Oriente y delta del Orinoco", climate: "Tropical muy húmedo", demonym: "Delta-amacurense", elevation: "Nivel del mar y caños", flavor: "Pescado, yuca y cocina warao", dish: "Pescado de río", dishText: "Preparado al momento en un territorio atravesado por agua.", secondDish: "Casabe", secondDishText: "Una herencia de yuca que acompaña la vida diaria del delta." },
  "distrito-capital": { region: "Centro-norte", climate: "Tropical de valle", demonym: "Caraqueño / caraqueña", elevation: "Alrededor de 900 m", flavor: "Cocina venezolana contemporánea", dish: "Arepa", dishText: "Caracas reúne versiones tradicionales y contemporáneas de este clásico nacional.", secondDish: "Cachapa", secondDishText: "Maíz dulce y queso, una combinación que nunca pasa de moda." },
  falcon: { region: "Occidente y Caribe", climate: "Seco y semiárido", demonym: "Falconiano / falconiana", elevation: "Costa baja y sierras", flavor: "Chivo, coco y sabores costeros", dish: "Chivo en coco", dishText: "Una receta intensa que resume la identidad gastronómica falconiana.", secondDish: "Dulces de coco", secondDishText: "La costa convierte el coco en un sabor cotidiano y festivo." },
  guarico: { region: "Llanos centrales", climate: "Tropical de sabana", demonym: "Guariqueño / guariqueña", elevation: "Llanuras y morros", flavor: "Carne y tradición llanera", dish: "Carne en vara", dishText: "El fuego lento y la sabana como contexto de un plato esencial.", secondDish: "Pisillo", secondDishText: "Una preparación práctica y profundamente llanera." },
  "la-guaira": { region: "Litoral central", climate: "Tropical costero", demonym: "Varguense", elevation: "Del mar a la montaña", flavor: "Pescado, coco y cocina de litoral", dish: "Pescado frito", dishText: "Directo de la costa a la mesa, acompañado de vista al Caribe.", secondDish: "Empanada de cazón", secondDishText: "Un clásico de playa preparado en masa de maíz." },
  lara: { region: "Centro-occidente", climate: "Seco de valles y sierras", demonym: "Larense", elevation: "Valles y montañas", flavor: "Cocina criolla y dulces de caña", dish: "Mondongo larense", dishText: "Una preparación sabrosa y paciente, muy presente en la tradición local.", secondDish: "Acema tocuyana", secondDishText: "Pan dulce de larga tradición en los pueblos larenses." },
  merida: { region: "Andes venezolanos", climate: "Templado a frío de montaña", demonym: "Merideño / merideña", elevation: "Hasta 4.978 m", flavor: "Trucha, papa y cocina andina", dish: "Trucha andina", dishText: "Servida en las rutas de montaña, es uno de los sabores más buscados de Mérida.", secondDish: "Arepa andina", secondDishText: "Elaborada con trigo y ligada a los desayunos de tierras altas." },
  miranda: { region: "Centro-norte", climate: "Tropical de valle y costa", demonym: "Mirandino / mirandina", elevation: "Valles, montañas y litoral", flavor: "Cacao, pescado y cocina barloventeña", dish: "Dulces de cacao", dishText: "Barlovento convierte el cacao en parte de su lenguaje cotidiano.", secondDish: "Pescado frito", secondDishText: "Una presencia natural en las rutas costeras de Higuerote." },
  monagas: { region: "Oriente interior", climate: "Tropical cálido", demonym: "Monaguense", elevation: "Llanuras y serranías", flavor: "Cocina oriental y productos de tierra", dish: "Arepa de maíz", dishText: "Sencilla, cercana y siempre presente en las mesas monaguenses.", secondDish: "Carne en vara", secondDishText: "Una conexión directa con las sabanas del oriente interior." },
  "nueva-esparta": { region: "Caribe insular", climate: "Cálido y seco", demonym: "Neoespartano / neoespartana", elevation: "Nivel del mar a cerros insulares", flavor: "Pescado, mariscos y dulces isleños", dish: "Empanada de cazón", dishText: "Un clásico de Margarita, fácil de encontrar a cualquier hora.", secondDish: "Pescado frito", secondDishText: "La cocina isleña deja que el producto fresco sea protagonista." },
  portuguesa: { region: "Centro-occidente", climate: "Tropical de llanura", demonym: "Portuguesense", elevation: "Llanos y piedemonte", flavor: "Queso, carne y cocina campesina", dish: "Carne en vara", dishText: "Una receta de campo que se disfruta en rutas abiertas y jornadas largas.", secondDish: "Queso de mano", secondDishText: "Fresco y delicado, acompaña panes, arepas y cachapas." },
  sucre: { region: "Oriente y Caribe", climate: "Tropical costero", demonym: "Sucrense", elevation: "Bahías, penínsulas y serranías", flavor: "Pescado, cacao y coco", dish: "Pescado frito", dishText: "Una expresión simple y brillante de la costa sucrense.", secondDish: "Dulces de cacao", secondDishText: "Paria y sus cultivos dan al cacao un lugar especial en la mesa." },
  tachira: { region: "Andes fronterizos", climate: "Templado de montaña", demonym: "Tachirense", elevation: "Valles altos y páramos", flavor: "Café, pan y cocina andina", dish: "Arepa andina", dishText: "Hecha con trigo, tiene textura y sabor propios de las tierras altas.", secondDish: "Pizca andina", secondDishText: "Sopa cálida de papa y leche, ideal para el clima de montaña." },
  trujillo: { region: "Andes venezolanos", climate: "Templado de montaña", demonym: "Trujillano / trujillana", elevation: "Valles y páramos", flavor: "Cocina andina y productos del campo", dish: "Arepa andina", dishText: "Una tradición de trigo que acompaña mañanas frías de montaña.", secondDish: "Queso ahumado", secondDishText: "Producto local de sabor intenso, presente en muchas rutas andinas." },
  yaracuy: { region: "Centro-occidente", climate: "Tropical de montaña", demonym: "Yaracuyano / yaracuyana", elevation: "Valles y bosques", flavor: "Café, caña y cocina criolla", dish: "Cachapa", dishText: "El maíz tierno y el queso hacen de este plato una parada de ruta ideal.", secondDish: "Dulces de caña", secondDishText: "Sabores tradicionales que dialogan con la producción agrícola del estado." },
};

/*
 * Foto de «¿Dónde queda?» y créditos de las guías que usan esta ficha genérica (hoy solo el
 * Distrito Capital). Sin entrada aquí se usa /images/states/<slug>.jpg, como antes. La foto de
 * ubicación no debe repetir la del hero (lib/content.ts).
 */
const LOCATION_PHOTOS: Record<string, { src: string; alt: string; position: string }> = {
  "distrito-capital": {
    src: "/images/commons/caracas-la-florida-avila.jpg",
    alt: "Casas y edificios entre árboles de Caracas, vistos desde La Florida, con la vertiente sur del Waraira Repano (Ávila) al fondo, Distrito Capital",
    position: "center 30%",
  },
};

const PHOTO_CREDITS: Record<string, Array<{ author: string; license: string; href: string }>> = {
  "distrito-capital": [
    { author: "Oscar Costero", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Centro_de_Caracas.jpg" },
    { author: "Paolo Costa Baldi", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Venezuela_-_Caracas_-_La_Florida.jpg" },
  ],
};

export function StateGuide({ item, guide }: { item: DiscoverItem; guide: Guide }) {
  const profile = profiles[item.slug] ?? profiles.carabobo;
  const location = LOCATION_PHOTOS[item.slug] ?? { src: `/images/states/${item.slug}.jpg`, alt: `Paisaje de ${item.name}`, position: "center" };
  const credits = PHOTO_CREDITS[item.slug] ?? [];
  const quickFacts = [
    [MapPinned, "Capital", guide.capital], [Compass, "Región", profile.region], [CloudSun, "Clima", profile.climate], [Mountain, "Altitud", profile.elevation],
    [Users, "Gentilicio", profile.demonym], [Calendar, "Huso horario", "UTC−4"], [Sparkles, "Paisaje", guide.landscape], [Compass, "Primera ruta", guide.route],
  ] as const;

  return (
    <>
      <section className="container-page py-20 md:py-28">
        <div className="max-w-3xl"><p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#247c8f]">Guía de viaje</p><h2 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-semibold leading-[0.94] text-[#17201b] md:text-6xl">Descubre {item.name}.</h2><div className="mt-8 space-y-5 text-lg leading-8 text-[#59675f]"><p>{guide.landscape}</p><p>{guide.identity} Esta guía reúne una primera lectura del estado y algunas rutas para empezar a recorrerlo con calma.</p></div></div>
      </section>
      <section className="border-y border-[#e8e1d5] bg-white/70 py-16 md:py-20"><div className="container-page"><p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#247c8f]">Información rápida</p><div className="mt-8 grid gap-px overflow-hidden rounded-[28px] border border-[#e8e1d5] bg-[#e8e1d5] sm:grid-cols-2 lg:grid-cols-4">{quickFacts.map(([Icon, label, value]) => <div key={label} className="min-h-40 bg-[#fbfaf7] p-6"><Icon size={20} className="text-[#247c8f]" /><p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#247c8f]">{label}</p><p className="mt-2 text-base font-medium leading-6 text-[#17201b]">{value}</p></div>)}</div></div></section>
      <section className="container-page grid gap-12 py-20 md:grid-cols-[0.9fr_1.1fr] md:items-center md:py-28"><div><p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#247c8f]">Ubicación</p><h2 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-semibold leading-[0.94] text-[#17201b]">¿Dónde queda {item.name}?</h2><p className="mt-7 text-lg leading-8 text-[#59675f]">{item.name} forma parte de {profile.region.toLowerCase()} y se define por {guide.landscape.toLowerCase()} Su posición lo conecta con rutas regionales, paisajes contrastantes y una manera particular de entender Venezuela.</p></div><figure className="relative min-h-[330px] overflow-hidden rounded-[30px] border border-[#e8e1d5] bg-[#eaf2ed]"><Image src={location.src} alt={location.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" style={{ objectPosition: location.position }} /></figure></section>
      <section className="border-y border-[#e8e1d5] bg-white py-20 md:py-28"><div className="container-page grid gap-12 lg:grid-cols-[0.76fr_1.24fr]"><div><p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#247c8f]">Historia</p><h2 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-semibold leading-[0.94] text-[#17201b]">Un territorio con memoria propia.</h2></div><div className="space-y-5 text-lg leading-8 text-[#59675f]"><p>La historia de {item.name} empieza mucho antes de sus ciudades actuales. Comunidades originarias, caminos regionales y formas locales de comercio construyeron una identidad que todavía se reconoce en sus pueblos y paisajes.</p><p>Durante la colonia y la independencia, el territorio participó de las transformaciones que dieron forma al país. Su desarrollo moderno ha seguido ritmos propios, entre actividad rural, ciudades, servicios y vínculos con las regiones vecinas.</p></div></div></section>
      <section className="container-page py-20 md:py-28"><div className="grid gap-12 lg:grid-cols-2"><div><p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#247c8f]">Naturaleza</p><h2 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-semibold leading-[0.94] text-[#17201b]">Paisajes que explican el estado.</h2><p className="mt-7 text-lg leading-8 text-[#59675f]">{guide.landscape} La mejor forma de conocerlos es respetando sus ritmos, sus estaciones y las comunidades que viven junto a ellos.</p></div><div className="border-l border-[#e8e1d5] pl-0 lg:pl-12"><p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#247c8f]">Cultura</p><h2 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-semibold leading-[0.94] text-[#17201b]">Una identidad que se reconoce en lo cotidiano.</h2><p className="mt-7 text-lg leading-8 text-[#59675f]">{guide.identity} La música, las fiestas, los oficios y las formas de recibir a quien llega son parte esencial de la experiencia.</p></div></div></section>
      <section className="bg-[#173d2e] py-20 text-white md:py-28"><div className="container-page"><p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b9d9d6]">Gastronomía</p><h2 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-5xl font-semibold leading-[0.94] md:text-6xl">Sabores para conocer {item.name}.</h2><p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">{profile.flavor} forman parte de una cocina que cuenta la historia del territorio.</p><div className="mt-10 grid gap-8 md:grid-cols-2"><div className="border-t border-white/20 pt-5"><h3 className="font-[family-name:var(--font-display)] text-3xl font-semibold">{profile.dish}</h3><p className="mt-3 leading-7 text-white/72">{profile.dishText}</p></div><div className="border-t border-white/20 pt-5"><h3 className="font-[family-name:var(--font-display)] text-3xl font-semibold">{profile.secondDish}</h3><p className="mt-3 leading-7 text-white/72">{profile.secondDishText}</p></div></div></div></section>
      <section className="container-page py-20 md:py-28"><p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#247c8f]">Lugares imprescindibles</p><h2 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-5xl font-semibold leading-[0.94] text-[#17201b] md:text-6xl">Una primera ruta por {item.name}.</h2><div className="mt-10 grid gap-6 md:grid-cols-3">{[guide.capital, guide.route, guide.landscape].map((place, index) => <article key={place} className="rounded-[28px] border border-[#e8e1d5] bg-white p-7"><span className="font-[family-name:var(--font-display)] text-3xl text-[#247c8f]">0{index + 1}</span><h3 className="mt-7 font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight text-[#17201b]">{place}</h3><p className="mt-4 leading-7 text-[#68726d]">Un punto de partida para entender una de las caras del estado.</p></article>)}</div></section>
      <section className="border-y border-[#e8e1d5] bg-white py-20 md:py-28"><div className="container-page"><p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#247c8f]">Experiencias</p><h2 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-5xl font-semibold leading-[0.94] text-[#17201b]">Vivir {item.name}, más allá de una foto.</h2><div className="mt-10 grid gap-px overflow-hidden rounded-[28px] border border-[#e8e1d5] bg-[#e8e1d5] md:grid-cols-3"><div className="bg-[#fbfaf7] p-7"><Sparkles className="text-[#247c8f]" /><h3 className="mt-6 font-[family-name:var(--font-display)] text-3xl font-semibold text-[#17201b]">Seguir la ruta local</h3><p className="mt-3 leading-7 text-[#68726d]">Recorrer sin prisa y con tiempo para entender el ritmo del lugar.</p></div><div className="bg-[#fbfaf7] p-7"><Compass className="text-[#247c8f]" /><h3 className="mt-6 font-[family-name:var(--font-display)] text-3xl font-semibold text-[#17201b]">Comer como se come aquí</h3><p className="mt-3 leading-7 text-[#68726d]">Buscar una cocina ligada a los productos, las familias y los caminos cercanos.</p></div><div className="bg-[#fbfaf7] p-7"><MapPinned className="text-[#247c8f]" /><h3 className="mt-6 font-[family-name:var(--font-display)] text-3xl font-semibold text-[#17201b]">Hablar con la gente</h3><p className="mt-3 leading-7 text-[#68726d]">La conversación local suele ser la mejor guía para descubrir un paisaje.</p></div></div></div></section>
      <section className="container-page pb-10 pt-16 md:pb-12 md:pt-20"><div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#247c8f]">Datos curiosos</p><h2 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-semibold leading-[0.94] text-[#17201b]">Claves para leer el lugar.</h2></div><ol className="space-y-5"><li className="flex gap-5 border-t border-[#e8e1d5] pt-5"><span className="font-[family-name:var(--font-display)] text-3xl text-[#247c8f]">01</span><p className="text-lg leading-8 text-[#59675f]">{guide.identity}</p></li><li className="flex gap-5 border-t border-[#e8e1d5] pt-5"><span className="font-[family-name:var(--font-display)] text-3xl text-[#247c8f]">02</span><p className="text-lg leading-8 text-[#59675f]">{guide.route}</p></li></ol></div></section>
      <section className="container-page pb-20 pt-10 md:pb-28 md:pt-12"><div className="max-w-3xl"><p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#247c8f]">Cómo llegar</p><h2 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-semibold leading-[0.94] text-[#17201b]">Llegar a {item.name}.</h2><div className="mt-9 space-y-6 text-lg leading-8 text-[#59675f]"><p><strong className="text-[#17201b]">Por carretera o autobús.</strong> Las conexiones varían según la ciudad de origen. Confirma tiempos, horarios y condiciones antes de salir.</p><p><strong className="text-[#17201b]">Por aire.</strong> Revisa la disponibilidad de vuelos hacia la capital o los aeropuertos cercanos; las rutas pueden cambiar según la temporada.</p><p><strong className="text-[#17201b]">Con apoyo local.</strong> Para rutas rurales, fluviales o de naturaleza, coordina con prestadores y guías de la zona.</p></div></div></section>
      {credits.length ? (
        <div className="container-page pb-12">
          <PhotoCredits credits={credits} />
        </div>
      ) : null}
    </>
  );
}
