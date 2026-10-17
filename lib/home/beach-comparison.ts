import type { ActiveLanguageCode } from "@/lib/i18n";

// Short summaries of the existing destination guides; not live transport offers.
export const comparisonSlugs = ["los-roques", "morrocoy", "playa-el-agua", "mochima", "choroni", "cuyagua", "playa-medina", "isla-la-tortuga"] as const;
export type ComparisonSlug = (typeof comparisonSlugs)[number];
type Facts = [string, string, string, string];
type Copy = {
  title: string; intro: string; choose: string; destination: string; guide: string;
  labels: Facts; note: string; homeTitle: string; homeText: string; homeCta: string;
  discoverEyebrow: string; discoverText: string; descriptions: [string, string, string];
  facts: Record<ComparisonSlug, Facts>;
};

export const beachComparisonCopy: Record<ActiveLanguageCode, Copy> = {
  es: {
    title: "¿Qué playa va contigo?", intro: "Compara cómo llegar, qué hacer y dónde quedarte. Cambia los destinos para encontrar tu plan.",
    choose: "Elige los destinos", destination: "Destino", guide: "Ver guía", labels: ["Cómo llegar", "El plan", "Dónde quedarse", "Tiempo para disfrutar"],
    note: "Un primer vistazo para elegir. Consulta cada guía para organizar traslados, servicios y gastos según tu punto de partida.",
    homeTitle: "¿No sabes qué playa elegir?", homeText: "Compara el acceso, el ambiente y el alojamiento antes de decidir.", homeCta: "Comparar playas",
    discoverEyebrow: "Sigue explorando", discoverText: "Planea un viaje, conoce sus especies o descubre historias que no esperabas.",
    descriptions: ["Caracas, Canaima, Los Roques y Mérida: una propuesta para organizar dos semanas de viaje.", "Conoce los animales, las aves y las plantas del país, con fotos y datos para reconocerlos.", "Personas, récords e historias venezolanas que merecen una mirada más de cerca."],
    facts: {
      "los-roques": ["Vuelo a Gran Roque + lancha a los cayos", "Explorar cayos y hacer esnórquel", "Posadas en Gran Roque", "Mejor con varias noches"],
      morrocoy: ["Carretera a Tucacas o Chichiriviche + lancha", "Paseos entre cayos y manglares", "Tucacas o Chichiriviche", "Un día desde la costa o varios"],
      "playa-el-agua": ["Avión o ferry a Margarita + carretera", "Playa, paseos y servicios cercanos", "Playa El Agua y otras zonas de Margarita", "Un día desde la isla o varios"],
      mochima: ["Carretera al embarcadero + lancha según la playa", "Islas, bahías y recorridos en lancha", "Pueblo de Mochima o ciudades cercanas", "Un día desde la zona o varios"],
      choroni: ["Carretera de montaña desde Maracay", "Playa Grande y paseo por el pueblo", "Posadas en Choroní y Puerto Colombia", "Una escapada con noche en la zona"],
      cuyagua: ["Carretera de montaña por Ocumare", "Surf y ambiente de pueblo costero", "Posadas en el pueblo; confirmar servicios", "Una escapada con noche en la zona"],
      "playa-medina": ["Carretera desde Carúpano hacia Río Caribe y Medina", "Bahía y cocoteros en Paria", "Alojamiento en Medina o Río Caribe", "Un día desde Paria o varios"],
      "isla-la-tortuga": ["Excursión marítima organizada; confirmar salida", "Playas y cayos en una isla remota", "Estadía coordinada con el operador", "Según el itinerario de la excursión"],
    },
  },
  en: {
    title: "Which beach suits you?", intro: "Compare access, activities and places to stay. Change the destinations to find your trip.",
    choose: "Choose destinations", destination: "Destination", guide: "View guide", labels: ["Getting there", "The plan", "Where to stay", "Time to explore"],
    note: "A first look to help you choose. Read each guide to plan transport, services and costs from your starting point.",
    homeTitle: "Not sure which beach to choose?", homeText: "Compare access, atmosphere and accommodation before deciding.", homeCta: "Compare beaches",
    discoverEyebrow: "Keep exploring", discoverText: "Plan a trip, meet the wildlife or discover unexpected stories.",
    descriptions: ["Caracas, Canaima, Los Roques and Mérida: an idea for planning two weeks of travel.", "Meet the country's animals, birds and plants, with photos and facts to recognise them.", "Venezuelan people, records and stories worth a closer look."],
    facts: {
      "los-roques": ["Flight to Gran Roque + boat to the cays", "Explore cays and snorkel", "Guesthouses in Gran Roque", "Best with several nights"],
      morrocoy: ["Road to Tucacas or Chichiriviche + boat", "Cay and mangrove trips", "Tucacas or Chichiriviche", "A day from the coast or longer"],
      "playa-el-agua": ["Flight or ferry to Margarita + road", "Beach, walks and nearby services", "Playa El Agua or elsewhere on Margarita", "A day from the island or longer"],
      mochima: ["Road to the jetty + boat depending on beach", "Islands, bays and boat trips", "Mochima village or nearby cities", "A day from the area or longer"],
      choroni: ["Mountain road from Maracay", "Playa Grande and village walks", "Guesthouses in Choroní and Puerto Colombia", "An overnight coastal break"],
      cuyagua: ["Mountain road via Ocumare", "Surf and coastal village life", "Village guesthouses; confirm services", "An overnight coastal break"],
      "playa-medina": ["Road from Carúpano via Río Caribe to Medina", "A palm-lined bay in Paria", "Medina or Río Caribe accommodation", "A day from Paria or longer"],
      "isla-la-tortuga": ["Organised sea excursion; confirm departure", "Remote island beaches and cays", "Stay arranged with the operator", "Depends on the excursion itinerary"],
    },
  },
  de: {
    title: "Welcher Strand passt zu dir?", intro: "Vergleiche Anreise, Aktivitäten und Unterkünfte. Wechsle die Ziele und finde deinen Reiseplan.",
    choose: "Reiseziele auswählen", destination: "Reiseziel", guide: "Zum Reiseführer", labels: ["Anreise", "Aktivitäten", "Übernachten", "Zeit vor Ort"],
    note: "Ein erster Überblick zur Auswahl. Details zu Transport, Angeboten und Kosten ab deinem Ausgangspunkt stehen im jeweiligen Reiseführer.",
    homeTitle: "Welcher Strand soll es sein?", homeText: "Vergleiche Anreise, Atmosphäre und Unterkünfte vor deiner Entscheidung.", homeCta: "Strände vergleichen",
    discoverEyebrow: "Weiter entdecken", discoverText: "Plane eine Reise, lerne die Tierwelt kennen oder entdecke überraschende Geschichten.",
    descriptions: ["Caracas, Canaima, Los Roques und Mérida: ein Vorschlag für zwei Wochen in Venezuela.", "Tiere, Vögel und Pflanzen des Landes mit Fotos und wissenswerten Details kennenlernen.", "Menschen, Rekorde und Geschichten aus Venezuela, die einen näheren Blick verdienen."],
    facts: {
      "los-roques": ["Flug nach Gran Roque + Boot zu den Cayos", "Cayos erkunden und schnorcheln", "Posadas in Gran Roque", "Am besten mehrere Nächte"],
      morrocoy: ["Straße nach Tucacas oder Chichiriviche + Boot", "Cayos und Mangroven erkunden", "Tucacas oder Chichiriviche", "Ein Tag ab der Küste oder länger"],
      "playa-el-agua": ["Flug oder Fähre nach Margarita + Straße", "Strand, Spaziergänge und Angebote vor Ort", "Playa El Agua und andere Orte auf Margarita", "Ein Tag ab der Insel oder länger"],
      mochima: ["Straße zum Anleger + Boot je nach Strand", "Inseln, Buchten und Bootsausflüge", "Dorf Mochima oder nahe Städte", "Ein Tag ab der Umgebung oder länger"],
      choroni: ["Bergstraße ab Maracay", "Playa Grande und Spaziergang durchs Dorf", "Posadas in Choroní und Puerto Colombia", "Ausflug mit Übernachtung"],
      cuyagua: ["Bergstraße über Ocumare", "Surfen und Küstendorf erleben", "Posadas im Dorf; Angebote bestätigen", "Ausflug mit Übernachtung"],
      "playa-medina": ["Straße ab Carúpano über Río Caribe nach Medina", "Palmenbucht auf Paria", "Unterkünfte in Medina oder Río Caribe", "Ein Tag ab Paria oder länger"],
      "isla-la-tortuga": ["Organisierte Bootstour; Abfahrt bestätigen", "Strände und Cayos einer abgelegenen Insel", "Übernachtung über den Veranstalter", "Je nach Ausflugsprogramm"],
    },
  },
  fr: {
    title: "Quelle plage vous correspond ?", intro: "Comparez les accès, les activités et les hébergements. Changez les destinations pour trouver votre séjour.",
    choose: "Choisir les destinations", destination: "Destination", guide: "Voir le guide", labels: ["Comment arriver", "Au programme", "Où dormir", "Temps sur place"],
    note: "Un premier aperçu pour choisir. Consultez chaque guide pour organiser transports, services et dépenses selon votre point de départ.",
    homeTitle: "Quelle plage choisir ?", homeText: "Comparez les accès, l’ambiance et les hébergements avant de décider.", homeCta: "Comparer les plages",
    discoverEyebrow: "Continuez à explorer", discoverText: "Préparez un voyage, découvrez les espèces ou des histoires inattendues.",
    descriptions: ["Caracas, Canaima, Los Roques et Mérida : une idée pour organiser deux semaines de voyage.", "Découvrez les animaux, les oiseaux et les plantes du pays avec des photos et des repères.", "Des personnalités, des records et des histoires du Venezuela à découvrir de plus près."],
    facts: {
      "los-roques": ["Vol vers Gran Roque + bateau vers les îlots", "Explorer les îlots et faire du snorkeling", "Posadas à Gran Roque", "De préférence plusieurs nuits"],
      morrocoy: ["Route vers Tucacas ou Chichiriviche + bateau", "Excursions entre îlots et mangroves", "Tucacas ou Chichiriviche", "Une journée depuis la côte ou plus"],
      "playa-el-agua": ["Avion ou ferry vers Margarita + route", "Plage, promenades et services proches", "Playa El Agua ou ailleurs sur Margarita", "Une journée depuis l’île ou plus"],
      mochima: ["Route vers l’embarcadère + bateau selon la plage", "Îles, baies et balades en bateau", "Village de Mochima ou villes proches", "Une journée depuis les environs ou plus"],
      choroni: ["Route de montagne depuis Maracay", "Playa Grande et promenade au village", "Posadas à Choroní et Puerto Colombia", "Une escapade avec nuit sur place"],
      cuyagua: ["Route de montagne par Ocumare", "Surf et ambiance de village côtier", "Posadas au village ; vérifier les services", "Une escapade avec nuit sur place"],
      "playa-medina": ["Route de Carúpano via Río Caribe vers Medina", "Baie et cocotiers à Paria", "Hébergement à Medina ou Río Caribe", "Une journée depuis Paria ou plus"],
      "isla-la-tortuga": ["Excursion en mer organisée ; confirmer le départ", "Plages et îlots d’une île isolée", "Séjour organisé avec l’opérateur", "Selon le programme de l’excursion"],
    },
  },
};
