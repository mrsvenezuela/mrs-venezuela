import type { ThematicContent } from "./types";

/* Traducción del maestro `es.ts`. Mismos slug, mismas imágenes, mismos enlaces. */
export const thematicFr: ThematicContent = {
  "caribe-y-playa": {
    slug: "caribe-y-playa",
    eyebrow: "Le Venezuela face à la mer",
    title: "Caraïbes et plage",
    intro:
      "Près de 2 400 kilomètres de façade caraïbe, douze groupes d'îles et une côte qui change de caractère d'un golfe à l'autre.",
    hero: {
      src: "/images/cayo-de-agua.jpg",
      alt: "Banc de sable et eaux turquoise à Cayo de Agua, archipel de Los Roques",
    },
    meta: {
      title: "Caraïbes et plage au Venezuela | Mrs Venezuela",
      description:
        "La côte et les îles du Venezuela : Los Roques, Margarita, Morrocoy, Mochima, Choroní, Paria, La Tortuga et Isla de Plata, et comment le littoral change d'ouest en est.",
    },
    indexLabel: "Dans ce guide",
    backLabel: "Retour à l'accueil",
    sections: [
      {
        slug: "el-caribe-venezolano",
        number: "01",
        title: "Les Caraïbes vénézuéliennes",
        lede: "Il n'y a pas une côte vénézuélienne : il y en a plusieurs. Le littoral passe des dunes aux mangroves, des cayes coralliennes aux falaises, et des golfes ouverts aux baies fermées par la cordillère. À cela s'ajoutent les îles, au large, qui sont encore autre chose.",
        layout: "band",
        photo: {
          src: "/images/commons/morrocoy-sea-island.jpg",
          alt: "Une caye du parc national Morrocoy sur des eaux turquoise, État de Falcón",
        },
        items: [
          { title: "Cayes", text: "Îlots de sable et de corail en eau peu profonde." },
          { title: "Îles", text: "Au large, à des heures de bateau ou d'avion." },
          { title: "Baies et criques", text: "Eaux abritées et peu de houle." },
          { title: "Côte continentale", text: "Plages ouvertes au pied de la cordillère." },
        ],
      },
      {
        slug: "destinos-esenciales",
        number: "02",
        title: "Destinations essentielles",
        lede: "Huit façons d'entrer dans les Caraïbes vénézuéliennes, de l'archipel le plus reculé à la plage qui se remplit le dimanche.",
        layout: "gallery",
        items: [
          {
            title: "Los Roques",
            meta: "Dépendances fédérales",
            text: "Cayes blanches, lagunes et récifs à une demi-heure de vol de Caracas.",
            photo: { src: "/images/commons/madrisqui.jpg", alt: "Caye Madrisquí, dans l'archipel de Los Roques" },
            href: "/playa/los-roques",
          },
          {
            title: "Playa El Agua",
            meta: "Margarita · Nueva Esparta",
            text: "Quatre kilomètres de sable ouvert au nord de l'île, avec houle et cocotiers.",
            photo: { src: "/images/playa-el-agua.jpg", alt: "Playa El Agua, au nord-est de l'île de Margarita" },
            href: "/playa/playa-el-agua",
          },
          {
            title: "Morrocoy",
            meta: "Parc national · Falcón",
            text: "Îlots, mangroves et côte entre Tucacas et Chichiriviche. Cayo Sombrero est l’une des destinations du parc.",
            photo: { src: "/images/cayo-sombrero.jpg", alt: "Cayo Sombrero, dans le parc national Morrocoy" },
            href: "/playa/morrocoy",
          },
          {
            title: "Mochima",
            meta: "Sucre et Anzoátegui",
            text: "Îles et criques vertes dans un parc national que l'on parcourt en peñero.",
            photo: { src: "/images/mochima.jpg", alt: "Baie du parc national Mochima avec une barque de pêcheurs" },
            href: "/playa/mochima",
          },
          {
            title: "Choroní",
            meta: "Aragua",
            text: "Village et plage au bout d'une route qui traverse la forêt de nuages du Henri Pittier.",
            photo: { src: "/images/choroni.jpg", alt: "Côte de Choroní, la mer des Caraïbes au pied de la cordillère" },
            href: "/playa/choroni",
          },
          {
            title: "Cuyagua",
            meta: "Aragua",
            text: "Une plage ouverte et animée, la plus associée au surf de la côte centrale.",
            photo: { src: "/images/cuyagua.jpg", alt: "Plage de Cuyagua, sur la côte de l'État d'Aragua" },
            href: "/playa/cuyagua",
          },
          {
            title: "Playa Medina",
            meta: "Péninsule de Paria · Sucre",
            text: "Une baie de cocotiers sur la côte humide de Paria, loin de tout le reste.",
            photo: {
              src: "/images/commons/playa-medina-peninsula-paria.jpg",
              alt: "Playa Medina, sur la péninsule de Paria, État de Sucre",
            },
            href: "/playa/playa-medina",
          },
          {
            title: "La Tortuga",
            meta: "Dépendances fédérales",
            text: "La deuxième île du pays, sans population fixe : on y accède par mer ou en petit avion.",
            photo: { src: "/images/isla-la-tortuga-turquesa.jpg", alt: "Eaux turquoise de l'île La Tortuga" },
            href: "/playa/isla-la-tortuga",
          },
        ],
      },
      {
        slug: "de-occidente-a-oriente",
        number: "03",
        title: "D'ouest en est",
        lede: "La même côte, parcourue d'un bout à l'autre du pays, ne se ressemble pas.",
        layout: "coastline",
        items: [
          {
            title: "Ouest",
            meta: "Zulia et Falcón",
            text: "Le tronçon le plus sec. Larges golfes, dunes qui atteignent l'eau et, au large de Falcón, les cayes et mangroves de Morrocoy.",
          },
          {
            title: "Centre",
            meta: "Carabobo, Aragua et La Guaira",
            text: "Ici la cordillère tombe droit dans les Caraïbes. Baies courtes entre montagnes de forêt de nuages, et plages ouvertes à la houle du nord.",
          },
          {
            title: "Îles",
            meta: "Nueva Esparta",
            text: "Au large de la côte orientale, Margarita, Coche et Cubagua forment le seul État insulaire du pays.",
          },
          {
            title: "Est",
            meta: "Anzoátegui et Sucre",
            text: "Golfes, péninsules et eau plus verte. Mochima à l'ouest, Paria à l'est, et le point où les Caraïbes s'arrêtent et où commence l'Atlantique.",
          },
        ],
      },
      {
        slug: "el-mar-en-numeros",
        number: "04",
        title: "La mer en chiffres",
        lede: "Quatre chiffres difficiles à établir, parce que la plupart de ceux qui circulent ne disent jamais ce qu'ils mesurent.",
        layout: "numbers",
        items: [
          {
            value: "2 394 km",
            title: "Façade caraïbe",
            text: "De Castilletes, dans la Guajira, à Punta Peñas, dans la Paria.",
            source: "Loi sur les zones côtières · 2001",
          },
          {
            value: "12 + 89",
            title: "Groupes d'îles",
            text: "Douze forment les Dépendances fédérales ; 89 autres îles relèvent des États côtiers. Il n'existe pas de total officiel.",
            source: "INE · 2025",
          },
          {
            value: "~475 000 km²",
            title: "Sa propre mer",
            text: "La zone économique exclusive. Le chiffre est approximatif : des limites restent à fixer avec plusieurs voisins.",
            source: "Sea Around Us · 2015",
          },
          {
            value: "221 120 ha",
            title: "Parc marin",
            text: "Los Roques, protégé depuis 1972, est le plus vaste parc national de la mer des Caraïbes.",
            source: "Parc national Archipel de Los Roques",
          },
        ],
      },
      {
        slug: "venezuela-insular",
        number: "05",
        title: "Le Venezuela insulaire",
        lede: "Le pays ne s'arrête pas à la côte continentale. Au large, une douzaine de groupes d'îles, la plupart inhabités, et le plus lointain — Isla de Aves — se trouve à plus de cinq cents kilomètres du continent.",
        layout: "islands",
        photo: {
          src: "/images/isla-de-coche.jpg",
          alt: "Côte de l'île de Coche, dans l'État de Nueva Esparta",
        },
        items: [
          { title: "Margarita", meta: "Nueva Esparta", text: "La plus grande île des Caraïbes vénézuéliennes, et la seule avec des villes." },
          { title: "Coche", meta: "Nueva Esparta", text: "Entre Margarita et le continent. C'est une commune habitée." },
          { title: "Cubagua", meta: "Nueva Esparta", text: "Elle garde les ruines de Nueva Cádiz, la ville des perles." },
          { title: "Los Roques", meta: "Dépendances fédérales", text: "Parc national depuis 1972 et site Ramsar : plus de 80 % en est de la mer." },
          { title: "La Tortuga", meta: "Dépendances fédérales", text: "156 km² et aucune population fixe. La deuxième île du pays." },
          { title: "La Blanquilla", meta: "Dépendances fédérales", text: "Sans population civile : un poste de garde-côtes et des pêcheurs de saison." },
          { title: "La Orchila", meta: "Dépendances fédérales", text: "Base aéronavale à accès restreint : pas de visite sans autorisation." },
          { title: "Las Aves", meta: "Dépendances fédérales", text: "Deux groupes, Sotavento et Barlovento. Inhabités." },
          { title: "Los Testigos", meta: "Dépendances fédérales", text: "Peuplé par des familles d'origine margaritaine. L'un des deux archipels habités." },
          { title: "Los Frailes", meta: "Dépendances fédérales", text: "Dix îlots inhabités au nord-est de Margarita." },
        ],
      },
      {
        slug: "antes-de-llegar-al-mar",
        number: "06",
        title: "Avant d'arriver à la mer",
        lede: "Quatre choses à avoir en tête.",
        layout: "tips",
        items: [
          { title: "Soleil", text: "Près de l'équateur le soleil tape fort, même sous les nuages. Crème, ombre et eau." },
          { title: "Mer", text: "La houle et les courants changent beaucoup d'une plage à l'autre et d'un jour à l'autre. Demandez sur place." },
          { title: "Accès", text: "Les îles et beaucoup de cayes ne se rejoignent que par la mer. Confirmez l'aller et le retour avant d'embarquer." },
          { title: "Aires protégées", text: "Los Roques, Morrocoy et Mochima sont des parcs nationaux : camper et d'autres activités exigent une autorisation d'Inparques." },
        ],
      },
    ],
    finalPhoto: {
      src: "/images/commons/dos-mosquises.jpg",
      alt: "Vue aérienne de la caye Dos Mosquises, à Los Roques, entourée de récifs et de bancs de sable",
    },
    closing: {
      text: "Un pays entier face aux Caraïbes, et des centaines de façons différentes d'arriver à la mer.",
    },
    credits: [
      {
        title: "Caye Madrisquí, Los Roques",
        author: "Wilfredor",
        license: "CC BY-SA 4.0",
        href: "https://commons.wikimedia.org/wiki/File:Madrisqui.jpg",
      },
      {
        title: "Playa Medina, péninsule de Paria",
        author: "Alejandro Solo",
        license: "CC BY-SA 4.0",
        href: "https://commons.wikimedia.org/wiki/File:Playa_Medina_Peninsula_Paria.jpg",
      },
      {
        title: "Parc national Morrocoy",
        author: "Regisrob",
        license: "CC BY 3.0",
        href: "https://commons.wikimedia.org/wiki/File:Morrocoy_sea_island.jpg",
      },
      {
        title: "Caye Dos Mosquises, Los Roques",
        author: "Berrucomons",
        license: "CC BY-SA 3.0",
        href: "https://commons.wikimedia.org/wiki/File:Dos_Mosquises.jpg",
      },
    ],
  },

  "montana-y-paramo": {
    slug: "montana-y-paramo",
    eyebrow: "Le Venezuela en altitude",
    title: "Montagne et páramo",
    intro:
      "Le pays tropical a aussi de la neige, des lagunes glacées et des villages à trois mille mètres. Les Andes vénézuéliennes forment l'extrémité nord de la cordillère, et le paysage change à chaque heure de montée.",
    hero: {
      src: "/images/pico-bolivar.jpg",
      alt: "Pico Bolívar, le plus haut sommet du Venezuela, dans la Sierra Nevada de Mérida",
    },
    meta: {
      title: "Montagne et páramo au Venezuela | Mrs Venezuela",
      description:
        "Les Andes vénézuéliennes : Mérida, Táchira et Trujillo, le Pico Bolívar, la Sierra Nevada, les páramos, leurs villages et leurs lagunes.",
    },
    indexLabel: "Dans ce guide",
    backLabel: "Retour à l'accueil",
    sections: [
      {
        slug: "venezuela-en-altura",
        number: "01",
        title: "Le Venezuela en altitude",
        lede: "Le Venezuela n'est pas fait que de côtes et de plaines. La cordillère de Mérida achève les Andes au nord et atteint 4 978 mètres au Pico Bolívar ; la cordillère de la Côte élève l'Ávila au-dessus de Caracas, et au sud-est les tepuys forment des montagnes d'un tout autre genre. Entre les deux : vallées tempérées, forêts de nuages et páramos.",
        layout: "prose",
      },
      {
        slug: "los-andes",
        number: "02",
        title: "Les Andes",
        lede: "Trois États réunis par la même cordillère et par des chemins qui la traversent depuis des siècles.",
        layout: "gallery",
        items: [
          {
            title: "Mérida",
            meta: "Sommets et páramos",
            text: "La plus grande altitude du pays, le téléphérique le plus haut du monde et un réseau de villages de montagne.",
            photo: { src: "/images/commons/teleferico-del-pico-espejo.jpg", alt: "Le téléphérique de Mérida montant entre les montagnes" },
            href: "/estado/merida",
          },
          {
            title: "Táchira",
            meta: "Frontière et montagne",
            text: "Vallées agricoles, villages frais et porte terrestre vers la Colombie.",
            photo: {
              src: "/images/commons/paramo-las-coloradas-tachira.jpg",
              alt: "Lagune, frailejones et randonneurs dans le Páramo Las Coloradas, État de Táchira",
            },
            href: "/estado/tachira",
          },
          {
            title: "Trujillo",
            meta: "Villages et mémoire",
            text: "Montagnes habitées, café et points de vue sur l'extrémité nord de la cordillère.",
            photo: {
              src: "/images/states/trujillo.jpg",
              alt: "Monument à la Vierge de la Paix au-dessus de la ville de Trujillo",
            },
            href: "/estado/trujillo",
          },
        ],
      },
      {
        slug: "lugares-en-las-alturas",
        number: "03",
        title: "Lieux d'altitude",
        lede: "Quatre noms pour commencer à lire la cordillère.",
        layout: "gallery",
        items: [
          {
            title: "Pico Bolívar",
            meta: "4 978 m · Mérida",
            text: "Le plus haut sommet du Venezuela. Son ascension relève de l'alpinisme, pas de la randonnée.",
            photo: {
              src: "/images/commons/pico-bolivar-al-desnudo-en-dia-soleado-y-despejado.jpg",
              alt: "Le Pico Bolívar dégagé par une journée ensoleillée",
            },
            href: "/montana/pico-bolivar",
          },
          {
            title: "Pico Humboldt",
            meta: "4 940 m · Mérida",
            text: "Le deuxième sommet du pays, qui portait le dernier glacier du Venezuela.",
            photo: {
              src: "/images/commons/flanco-norte-del-pico-humboldt.jpg",
              alt: "Face nord du Pico Humboldt, dans la Sierra Nevada de Mérida",
            },
          },
          {
            title: "Sierra de La Culata",
            meta: "Mérida",
            text: "L'autre grande sierra de Mérida, de páramo ouvert et de roche nue.",
            photo: { src: "/images/commons/picos-en-la-culata.jpg", alt: "Sommets de la Sierra de La Culata, État de Mérida" },
          },
          {
            title: "Pico Espejo",
            meta: "4 765 m · Mérida",
            text: "La dernière station du téléphérique Mukumbarí, le plus haut et le plus long du monde.",
            photo: {
              src: "/images/merida-pico-espejo.png",
              alt: "Station du Pico Espejo du téléphérique Mukumbarí",
            },
          },
        ],
      },
      {
        slug: "vida-en-el-paramo",
        number: "04",
        title: "La vie dans le páramo",
        lede: "Au-dessus de la forêt et sous la neige existe un monde à part : froid, humide et lent.",
        layout: "band",
        photo: {
          src: "/images/commons/paramo-1.jpg",
          alt: "Frailejones dans un páramo des Andes vénézuéliennes",
        },
        items: [
          { title: "Frailejones", text: "Plantes aux feuilles duveteuses qui retiennent l'eau du brouillard." },
          { title: "Lagunes", text: "D'origine glaciaire, froides et transparentes." },
          { title: "Agriculture", text: "Pommes de terre, blé, carottes et ail à flanc de pente." },
          { title: "Villages", text: "Toits de tuiles et places à plus de deux mille mètres." },
        ],
      },
      {
        slug: "cultura-andina",
        number: "05",
        title: "Culture andine",
        lede: "Une autre manière de construire, de semer et de vivre. De manger aussi : pisca andina, blé, pommes de terre, fromages fumés et douceurs lactées.",
        layout: "gallery",
        items: [
          {
            title: "Les villages",
            meta: "Apartaderos · Mucuchíes · Jají",
            text: "Toits de tuiles au fond de la vallée, à plus de trois mille mètres.",
            photo: {
              src: "/images/commons/vista-del-pueblo-de-apartaderos.jpg",
              alt: "Vue du village andin d'Apartaderos, État de Mérida",
            },
          },
          {
            title: "La place",
            meta: "Architecture",
            text: "Église blanchie, place pavée et montagne derrière. Le schéma se répète dans tout le páramo.",
            photo: {
              src: "/images/commons/plaza-bolivar-de-los-nevados.jpg",
              alt: "Plaza Bolívar du village de Los Nevados, dans les Andes de Mérida",
            },
          },
          {
            title: "Les semis",
            meta: "Agriculture d'altitude",
            text: "Pommes de terre, blé et légumes en terrasses sur la pente.",
            photo: { src: "/images/commons/siembra-y-pueblo.jpg", alt: "Cultures en pente à côté d'un village andin" },
          },
        ],
      },
      {
        slug: "antes-de-subir",
        number: "06",
        title: "Avant de monter",
        lede: "L'altitude ne pardonne pas la hâte.",
        layout: "tips",
        items: [
          { title: "Altitude", text: "Montez par étapes et dormez une nuit à mi-hauteur avant de continuer." },
          { title: "Froid", text: "Prévoyez des couches. Le páramo peut geler la nuit même après une journée de soleil." },
          { title: "Soleil", text: "Le rayonnement augmente avec l'altitude : crème, casquette et lunettes, même dans la brume." },
          { title: "Préparation", text: "Les sommets enneigés exigent un guide, du matériel technique et de l'expérience." },
        ],
      },
    ],
    closing: {
      text: "En montagne, on monte lentement. C'est la seule façon d'arriver en haut et, en chemin, de comprendre ce que l'on regarde.",
    },
    credits: [
      {
        title: "Páramo Las Coloradas, État de Táchira",
        author: "Nackort",
        license: "CC BY-SA 3.0",
        href: "https://commons.wikimedia.org/wiki/File:Paramo_Andino_Estado_Tachira.jpg",
      },
      {
        title: "Pico Bolívar par temps clair",
        author: "Paolo Costa",
        license: "CC BY-SA 4.0",
        href: "https://commons.wikimedia.org/wiki/File:Pico_Bol%C3%ADvar_al_desnudo_en_d%C3%ADa_soleado_y_despejado.jpg",
      },
      {
        title: "Pico Bolívar, Mérida",
        author: "Gerson Márquez",
        license: "CC BY-SA 3.0",
        href: "https://commons.wikimedia.org/wiki/File:Pico_Bol%C3%ADvar,_M%C3%A9rida.JPG",
      },
      {
        title: "Téléphérique du Pico Espejo",
        author: "Ivan Carvajal",
        license: "CC BY-SA 3.0",
        href: "https://commons.wikimedia.org/wiki/File:Telef%C3%A9rico_del_Pico_Espejo.JPG",
      },
      { title: "Frailejones du páramo", author: "Adolfo (Ajerit)", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Paramo_1.jpg" },
      { title: "Sommets de La Culata", author: "Arnaldo Noguera Sifontes", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Picos_en_La_Culata.jpg" },
      { title: "Face nord du Pico Humboldt", author: "Massieljc", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Flanco_norte_del_Pico_Humboldt.jpg" },
      { title: "Village d'Apartaderos", author: "Rjcastillo", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Vista_del_pueblo_de_Apartaderos.jpg" },
      { title: "Plaza Bolívar, Los Nevados", author: "José Alfaro", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Plaza_Bolivar_de_Los_Nevados.jpg" },
      { title: "Cultures et village, Andes de Mérida", author: "José Alfaro", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Siembra_y_pueblo.jpg" },
    ],
  },

  "selva-y-rios": {
    slug: "selva-y-rios",
    eyebrow: "Le pays des grandes eaux",
    title: "Forêt et rivières",
    intro:
      "Des fleuves qui relient villes et communautés, des forêts qui couvrent le sud et des roches venues d'un passé lointain. Dans ce Venezuela, l'eau façonne le paysage et le quotidien.",
    hero: {
      src: "/images/commons/cano-zorro-15020517430.jpg",
      alt: "Caño Zorro au milieu de la végétation d'Amazonas",
      position: "center 40%",
    },
    meta: {
      title: "Forêt et rivières du Venezuela | Mrs Venezuela",
      description:
        "L'Orénoque, l'Amazonie vénézuélienne, le Delta, la Guayana et Canaima : les grands fleuves, les forêts et les peuples qui y vivent.",
    },
    indexLabel: "Dans ce guide",
    backLabel: "Retour à l'accueil",
    sections: [
      {
        slug: "un-pais-de-grandes-aguas",
        number: "01",
        title: "Un pays de grandes eaux",
        lede: "L'Orénoque parcourt environ 2 140 kilomètres et son bassin couvre plus des quatre cinquièmes du Venezuela. Les llanos, la Guayana et le delta s'organisent autour de lui : ici l'eau ne traverse pas le paysage, elle l'organise.",
        layout: "prose",
      },
      {
        slug: "el-orinoco",
        number: "02",
        title: "L'Orénoque",
        lede: "Le fleuve qui explique le pays.",
        layout: "band",
        photo: {
          src: "/images/commons/panoramica-del-rio-orinoco-en-amazonas.jpg",
          alt: "Panorama d'un large tronçon de l'Orénoque à son passage dans l'Amazonas",
        },
        items: [
          { title: "Géographie", text: "Il naît dans la sierra Parima et rejoint l'Atlantique par un delta de milliers de bras." },
          { title: "Histoire", text: "Il fut voie d'entrée, frontière et chemin de l'indépendance : Angostura est sur sa rive." },
          { title: "Vie", text: "Ses berges nourrissent la pêche, l'agriculture, des villes et des communautés autochtones." },
        ],
      },
      {
        slug: "amazonas",
        number: "03",
        title: "Amazonas",
        lede: "L'État le plus vaste après Bolívar et le moins peuplé du pays : forêt, rivières et affleurements de roche très ancienne. Puerto Ayacucho en est la porte ; au-delà, les distances se mesurent en heures de navigation.",
        layout: "feature",
        photo: {
          src: "/images/commons/rio-sipapo-amazonas.jpg",
          alt: "Le río Sipapo entouré de forêt tropicale dans l'État d'Amazonas",
        },
        items: [
          { title: "Forêt", text: "Forêt humide continue, d'une des plus grandes diversités biologiques du continent." },
          { title: "Roche", text: "Collines et tepuys du bouclier guyanais émergent de la végétation." },
          { title: "Guide de l'État", href: "/estado/amazonas" },
        ],
      },
      {
        slug: "delta-del-orinoco",
        number: "04",
        title: "Delta de l'Orénoque",
        lede: "Avant l'Atlantique, le fleuve s'ouvre en centaines de bras, d'îles et de mangroves. C'est le territoire ancestral du peuple warao, qui y vit bien avant l'existence du Venezuela.",
        layout: "band",
        photo: {
          src: "/images/commons/delta-orinoco-atardecer.jpg",
          alt: "Coucher de soleil sur les eaux du delta de l'Orénoque",
        },
        items: [
          { title: "Caños", text: "Des bras de fleuve qui remplacent les routes." },
          { title: "Mangroves", text: "Forêts amphibies entre eau douce et eau salée." },
          { title: "Palmier moriche", text: "Le palmier dont dépendent nourriture, fibre et habitat." },
          { title: "Marées", text: "L'Atlantique entre et sort deux fois par jour." },
        ],
      },
      {
        "slug": "guayana",
        "number": "05",
        "title": "Guayana",
        "lede": "Fleuves, villes riveraines, savanes et forêts : quatre regards sur la Guayana vénézuélienne.",
        "layout": "gallery",
        "items": [
          {
            "title": "Le Caroní",
            "meta": "Ciudad Guayana",
            "text": "Le grand affluent de l'Orénoque, avec des chutes comme La Llovizna avant la confluence.",
            "photo": {
              "src": "/images/commons/la-llovizna-1.jpg",
              "alt": "Chute de La Llovizna, sur le Caroní, à Ciudad Guayana"
            }
          },
          {
            "title": "L'Orénoque",
            "meta": "Ciudad Bolívar",
            "text": "Sur les rives de l'ancienne Angostura, le fleuve réunit paysage, histoire et vie urbaine.",
            "photo": {
              "src": "/images/commons/ciudad-bolivar-historical-zone.jpg",
              "alt": "Ciudad Bolívar et l'Orénoque, avec le pont Angostura à l'arrière-plan"
            }
          },
          {
            "title": "La Gran Sabana",
            "meta": "Bolívar",
            "text": "Savane d'altitude entre tepuys, avec des rivières d'eau sombre et des chutes en chemin.",
            "photo": {
              "src": "/images/commons/la-gran-sabana.jpg",
              "alt": "Paysage de la Gran Sabana avec des tepuys au fond"
            }
          },
          {
            "title": "Canaima",
            "meta": "Patrimoine mondial",
            "text": "Trois millions d'hectares de tepuys, de forêt et de savane ; le Salto Ángel s'y trouve.",
            "photo": {
              "src": "/images/salto-angel.jpg",
              "alt": "Le Salto Ángel tombant de l'Auyantepui"
            }
          }
        ]
      },
      {
        "slug": "pueblos-y-territorio",
        "number": "06",
        "title": "Peuples et territoire",
        "lede": "Des peuples avec leurs langues, leurs savoirs et leurs formes d'organisation. Découvrir leurs territoires implique d'écouter les communautés et de respecter leurs décisions.",
        "layout": "list",
        "items": [
          {
            "title": "Pemón",
            "meta": "Bolívar",
            "text": "Gran Sabana et bassin du Caroní. Leur langue et leurs traditions orales font partie de la mémoire du territoire."
          },
          {
            "title": "Warao",
            "meta": "Delta Amacuro",
            "text": "Le delta est leur territoire ancestral ; la navigation et le tissage des fibres de palmier moriche font partie de leur culture."
          },
          {
            "title": "Ye'kwana",
            "meta": "Bolívar et Amazonas",
            "text": "Bassins du Caura et du haut Ventuari. Navigation et vannerie relient savoirs et vie quotidienne."
          },
          {
            "title": "Uwottüja",
            "meta": "Amazonas",
            "text": "Orénoque moyen et rivières Sipapo, Autana et Cuao. Aussi connus sous le nom de Piaroa, ils conservent leur langue et leurs savoirs propres."
          }
        ]
      },
      {
        "slug": "naturaleza",
        "number": "07",
        "title": "Nature",
        "lede": "Quatre milieux reliés par l'eau, chacun avec sa propre vie.",
        "layout": "gallery",
        "items": [
          {
            "title": "Rivières",
            "meta": "L'eau en mouvement",
            "text": "Bras de rivière, rapides et cascades relient des paysages variés. Ici, la Quebrada de Jaspe dévoile son lit rocheux.",
            "photo": {
              "src": "/images/commons/gran-sabana-quebrada-de-jaspe-i-1.jpg",
              "alt": "Quebrada de Jaspe, dans la Gran Sabana"
            }
          },
          {
            "title": "Forêts",
            "meta": "Amazonas",
            "text": "La végétation borde les rives et couvre le sol d'ombre. L'eau et la forêt forment un même paysage.",
            "photo": {
              "src": "/images/commons/cano-zorro-15020517430.jpg",
              "alt": "Ruisseau clair sur roche rouge dans la forêt d'Amazonas"
            }
          },
          {
            "title": "Tepuys",
            "meta": "Bouclier guyanais",
            "text": "Des plateaux de roche ancienne aux milieux et espèces singuliers, comme le Kukenán.",
            "photo": {
              "src": "/images/commons/kukenan-tepuy.jpg",
              "alt": "Le tepuy Kukenán entre les nuages"
            }
          },
          {
            "title": "Biodiversité",
            "meta": "Forêts du sud",
            "text": "Oiseaux, insectes et plantes partagent la forêt. Le toucan à gorge blanche est l'une de ses nombreuses espèces.",
            "photo": {
              "src": "/images/commons/piapoco-de-garganta-blanca-ramphastos-tucanus-cuvieri.jpg",
              "alt": "Toucan à gorge blanche dans la végétation"
            }
          }
        ]
      },
    ],
    closing: {
      text: "Ici l'eau ne traverse pas le territoire. Elle l'organise : elle décide où l'on vit, par où l'on voyage et de quoi l'on mange.",
    },
    credits: [
      { title: "Quartier historique de Ciudad Bolívar", author: "Venecon", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Ciudad_Bol%C3%ADvar_historical_zone.jpg" },
      {
        title: "Salto Hacha et curiara, Canaima",
        author: "Wilfredor",
        license: "CC BY-SA 4.0",
        href: "https://commons.wikimedia.org/wiki/File:Salto_Hacha_y_curiara_sector_occidental.jpg",
      },
      {
        title: "La Gran Sabana",
        author: "Paolo Costa Baldi",
        license: "CC BY-SA 3.0",
        href: "https://commons.wikimedia.org/wiki/File:La_Gran_Sabana.jpg",
      },
      {
        title: "Quebrada de Jaspe, Gran Sabana",
        author: "Vinícius Pinheiro",
        license: "CC BY-SA 4.0",
        href: "https://commons.wikimedia.org/wiki/File:Gran_Sabana_Quebrada_de_Jaspe_I_(1).jpg",
      },
      {
        title: "Tepuy Kukenán",
        author: "Paolo Costa Baldi",
        license: "CC BY-SA 3.0",
        href: "https://commons.wikimedia.org/wiki/File:Kukenan_tepuy.jpg",
      },
      { title: "Panorama de l'Orénoque", author: "Shishoxisrax", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Panor%C3%A1mica_del_r%C3%ADo_Orinoco_en_Amazonas.jpg" },
      { title: "Río Sipapo, Amazonas", author: "Fernando Flores", license: "CC BY-SA 2.0", href: "https://commons.wikimedia.org/wiki/File:R%C3%ADo_Sipapo_-_Sipapo_River_(12917850754).jpg" },
      { title: "Caño Zorro, Amazonas", author: "Fernando Flores", license: "CC BY-SA 2.0", href: "https://commons.wikimedia.org/wiki/File:Ca%C3%B1o_Zorro_(15020517430).jpg" },
      { title: "Delta de l'Orénoque", author: "Antolin Martinez A.", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Delta_del_Orinoco_110514-27.JPG" },
      { title: "Chute de La Llovizna, Caroní", author: "Daniel Méndez", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:La_Llovizna_1.jpg" },
      { title: "Toucan à gorge blanche", author: "Fernando Flores", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Piapoco_de_garganta_blanca_(Ramphastos_tucanus_cuvieri).jpg" },
    ],
  },

  "ciudades-y-cultura": {
    slug: "ciudades-y-cultura",
    eyebrow: "Le Venezuela vécu",
    title: "Villes et culture",
    intro:
      "Neuf Vénézuéliens sur dix vivent en ville, et chacune regarde ailleurs : la mer, le lac, la montagne, la plaine ou le fleuve. La culture du pays naît de cette différence.",
    hero: {
      src: "/images/caracas-avila.jpg",
      alt: "Caracas au pied du mont Ávila",
    },
    meta: {
      title: "Villes et culture du Venezuela | Mrs Venezuela",
      description:
        "Caracas, Maracaibo, Barquisimeto, Coro et Puerto Cabello ; le patrimoine, la musique, les fêtes et l'artisanat qui expliquent le Venezuela.",
    },
    indexLabel: "Dans ce guide",
    backLabel: "Retour à l'accueil",
    sections: [
      {
        slug: "venezuela-urbana",
        number: "01",
        title: "Le Venezuela urbain",
        lede: "Le Venezuela s'est urbanisé très vite : en 1936 la majorité vivait à la campagne, aujourd'hui presque personne. Ce saut, poussé par le pétrole, explique ses villes, sa musique et une bonne part de sa manière de parler.",
        layout: "prose",
      },
      {
        slug: "ciudades-que-cuentan-el-pais",
        number: "02",
        title: "Des villes qui racontent le pays",
        lede: "Huit villes, huit façons de découvrir le Venezuela.",
        layout: "gallery",
        items: [
          {
            title: "Caracas",
            meta: "District Capital",
            text: "Caracas réunit immeubles, places et vie culturelle dans une vallée au pied de l’Ávila. Son architecture moderne et ses espaces urbains révèlent différentes façons de vivre et de parcourir la capitale du Venezuela.",
            photo: { src: "/images/commons/caracas-atardecer.jpg", alt: "Caracas au coucher du soleil, avec ses immeubles et l’Ávila à droite", position: "60% 50%" },
          },
          {
            title: "Maracaibo",
            meta: "Zulia",
            text: "Maracaibo associe vie lacustre, commerce et identité culturelle singulière. Le pont Rafael Urdaneta et la gaita du Zulia permettent de comprendre les liens de la ville avec l’eau et ses traditions.",
            photo: {
              src: "/images/commons/maracaibo-ciudad.jpg",
              alt: "Vue urbaine de Maracaibo, avec ses avenues et ses immeubles",
              position: "60% 50%",
            },
          },
          {
            title: "Ciudad Bolívar",
            meta: "Bolívar",
            text: "Ciudad Bolívar garde la mémoire d’Angostura entre rues et toits dominant l’Orénoque. Son centre ancien permet d’aborder le Congrès de 1819 et l’importance du fleuve dans la vie de la ville.",
            photo: {
              src: "/images/commons/ciudad-bolivar-historical-zone.jpg",
              alt: "Quartier historique de Ciudad Bolívar au-dessus de l'Orénoque",
            },
          },
          {
            title: "Coro",
            meta: "Falcón",
            text: "Coro conserve maisons en terre, patios et rues témoignant de son héritage colonial. Avec le port de La Vela, son patrimoine invite à découvrir une architecture adaptée au climat et à la région.",
            photo: { src: "/images/commons/coro-calle-colonial.jpg", alt: "Rue bordée de maisons coloniales à Coro, État de Falcón", position: "center" },
          },
          {
            title: "Barquisimeto",
            meta: "Lara",
            text: "Barquisimeto est une ville musicale et un carrefour entre plusieurs régions vénézuéliennes. Sa cathédrale et la dévotion à la Divina Pastora révèlent deux facettes de son architecture et de ses traditions.",
            photo: {
              src: "/images/commons/catedral-de-barquisimeto-dia-lluvioso.jpg",
              alt: "Cathédrale de Barquisimeto, État de Lara, sous un ciel de pluie",
            },
          },
          {
            title: "Cumaná",
            meta: "Sucre",
            text: "Cumaná associe patrimoine urbain et vie côtière dans l’est du Venezuela. La basilique Santa Inés et le château San Antonio de la Eminencia permettent d’aborder différents moments de l’histoire de la ville.",
            photo: { src: "/images/commons/cumana-ciudad-mar.jpg", alt: "Vue aérienne de Cumaná, de ses immeubles et de la côte caraïbe", position: "70% 50%" },
          },
          {
            title: "Puerto Cabello",
            meta: "Carabobo",
            text: "Puerto Cabello mêle histoire portuaire, rues coloniales et liens étroits avec la mer. Entre Los Lanceros et le front de mer, balcons et façades colorées invitent à découvrir la vie de la ville.",
            photo: { src: "/images/commons/puerto-cabello-los-lanceros.jpg", alt: "Rue Los Lanceros dans le centre historique de Puerto Cabello", position: "center" },
          },
          {
            title: "Trujillo",
            meta: "Trujillo",
            text: "Trujillo conserve des rues étroites et une identité andine façonnée par ses paysages et ses traditions. Le monument à la Vierge de la Paix témoigne de l’importance de la dévotion dans cette ville montagnarde.",
            photo: {
              src: "/images/commons/trujillo-plaza-mendoza.jpg",
              alt: "Place Cristóbal Mendoza dans la ville de Trujillo",
              position: "52% 50%",
            },
          },
        ],
      },
      {
        slug: "patrimonio",
        number: "03",
        title: "Une architecture qui raconte",
        lede: "Qu’ont ces lieux de particulier ? Leurs bâtiments racontent l’art, les modes de vie et les événements qui ont façonné le Venezuela.",
        layout: "gallery",
        items: [
          {
            title: "Cité universitaire",
            meta: "Caracas · Art et architecture",
            text: "Observez comment les peintures murales et les sculptures s’intègrent aux bâtiments. Carlos Raúl Villanueva a réuni art et architecture sur un campus où l’on étudie parmi les œuvres de grands artistes.",
            photo: { src: "/images/commons/biblioteca-central-de-la-ciudad-universitaria-caracas.jpg", alt: "Bibliothèque centrale de la Cité universitaire de Caracas", position: "60% 50%" },
          },
          {
            title: "Coro et ses maisons",
            meta: "Falcón · Terre et patios",
            text: "Murs de terre, patios et galeries révèlent une autre façon de construire. Coro et La Vela préservent des techniques traditionnelles mêlant influences locales, espagnoles et néerlandaises : c’est ce mélange qui les distingue.",
            photo: { src: "/images/commons/coro-patio-ventanas-hierro.jpg", alt: "Patio de la Casa de las Ventanas de Hierro à Coro", position: "center" },
          },
          {
            title: "Casa de Angostura",
            meta: "Ciudad Bolívar · Indépendance",
            text: "Derrière ces balcons se cache un événement décisif : le Congrès d’Angostura s’y réunit en 1819. Bolívar y prononça son célèbre discours sur l’organisation de la république ; ce n’est pas qu’une façade ancienne.",
            photo: { src: "/images/commons/casa-congreso-angostura.jpg", alt: "Façade de la Maison du Congrès d’Angostura à Ciudad Bolívar", position: "center" },
          },
        ],
      },
      {
        slug: "musica",
        number: "04",
        title: "Musique",
        lede: "Le pays change de genre tous les quelques centaines de kilomètres.",
        layout: "facets",
        items: [
          { spotifyTrack: "joropo", title: "Joropo", meta: "Patrimoine UNESCO, 2025", text: "Harpe ou bandola, cuatro et maracas. Pas seulement llanero : il existe des variantes andines, orientales et centrales." },
          { spotifyTrack: "gaita", title: "Gaita zuliana", meta: "Zulia", text: "Furro, tambora, charrasca et cuatro. Elle résonne dans tout le pays en décembre." },
          { spotifyTrack: "calipso", title: "Calipso de El Callao", meta: "Bolívar", text: "Héritage antillais, surtout trinidadien, arrivé avec l'or au XIXᵉ siècle. On le chante en espagnol et en patois." },
          { spotifyTrack: "tambores", title: "Tambours", meta: "Côte centrale", text: "Rythmes afro-vénézuéliens liés aux fêtes patronales de la côte." },
          { spotifyTrack: "andina", title: "Musique andine", meta: "Mérida, Táchira et Trujillo", text: "Répertoires à cordes et de chant propres aux villages de montagne." },
        ],
      },
      {
        slug: "fiestas-y-tradiciones",
        number: "05",
        title: "Fêtes et traditions",
        lede: "Des fêtes qui rassemblent les générations. Derrière les masques, les tambours et les processions se trouvent des histoires de foi et de mémoire partagée.",
        layout: "gallery",
        items: [
          {
            title: "Diables danseurs",
            meta: "Fête-Dieu · UNESCO 2012",
            text: "D'origine coloniale, cette tradition associe la fête catholique du Corpus Christi aux héritages africains et autochtones. Les masques et la danse représentent la soumission du mal devant le bien.",
            photo: {
              src: "/images/commons/diablos-yare-trajes.jpg",
              alt: "Diables dansants de Yare portant leurs masques et leurs costumes rouges visibles en entier",
              position: "50% 50%",
            },
          },
          {
            title: "Zaragozas de Sanare",
            meta: "28 décembre · Sanare, Lara",
            text: "Liée à la dévotion aux Saints Innocents, cette fête emplit Sanare de musique et de danses. Les participants parcourent les rues avec des masques artisanaux et des costumes colorés, entre chants et vœux religieux.",
            photo: {
              src: "/images/commons/zaragozas-sanare.jpg",
              alt: "Participants aux Zaragozas de Sanare portant des masques artisanaux et des costumes colorés",
              position: "25% 50%",
            },
          },
          {
            title: "La Chinita",
            meta: "11 au 18 novembre · Maracaibo",
            text: "Selon la tradition du Zulia, une lavandière trouva dans le lac une planchette portant l'image de la Vierge. Cette dévotion donna naissance à une fête mêlant gaita, foi et communauté.",
            photo: {
              src: "/images/commons/bajada-de-la-chinita-en-maracaibo-2023-01.jpg",
              alt: "Feux d'artifice au-dessus de la basilique pendant la Bajada de la Chinita à Maracaibo",
            },
          },
          {
            title: "Divina Pastora",
            meta: "14 janvier · Barquisimeto",
            text: "La procession débuta en 1856, lorsque Barquisimeto demanda protection face à une épidémie de choléra. Chaque janvier, les fidèles renouvellent cette dévotion en accompagnant la Vierge depuis Santa Rosa.",
            photo: {
              src: "/images/commons/divina-pastora-procesion.jpg",
              alt: "Foule accompagnant l'image de la Divina Pastora à Barquisimeto",
              position: "20% 50%",
            },
          },
        ],
      },
      {
        slug: "artesania-y-memoria",
        number: "06",
        title: "Artisanat et mémoire",
        lede: "Chaque métier appartient à un lieu précis : il n'existe pas un artisanat vénézuélien unique.",
        layout: "facets",
        items: [
          { title: "Vannerie", text: "Fibres végétales travaillées par des peuples autochtones du sud et de l'ouest." },
          { title: "Céramique", text: "Terre cuite aux formes et aux usages différents selon les régions." },
          { title: "Textiles", text: "Du hamac de la Guajira aux tissages de laine des Andes." },
          { title: "Sculpture et masques", text: "Objets rituels et de fête, liés aux célébrations locales." },
        ],
      },
    ],
    closing: {
      text: "Aucune ville vénézuélienne n'explique le pays à elle seule. Toutes ensemble commencent à peine à le faire.",
    },
    credits: [
      { title: "Caracas au coucher du soleil, avec ses immeubles et l’Ávila à droite — image redimensionnée ; recadrage d’affichage", author: "Periodismodepaz", license: "CC BY 4.0", href: "https://commons.wikimedia.org/wiki/File:Atardecer_en_Caracas_2.jpg" },
      {
        title: "Vue urbaine de Maracaibo, avec ses avenues et ses immeubles — image redimensionnée ; recadrage d’affichage",
        author: "José ILIDIO Spinola",
        license: "CC BY-SA 2.0",
        href: "https://commons.wikimedia.org/wiki/File:MaracaiboView_(cropped).jpg",
      },
      { title: "Rue Los Lanceros dans le centre historique de Puerto Cabello — image redimensionnée ; recadrage d’affichage", author: "Jesus Enrique Morao Blanco", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Calle_%22Los_Lanceros%22_en_Puerto_Cabello.jpg" },
      { title: "Quartier historique de Ciudad Bolívar", author: "Venecon", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Ciudad_Bol%C3%ADvar_historical_zone.jpg" },
      { title: "Rue bordée de maisons coloniales à Coro, État de Falcón — image redimensionnée ; recadrage d’affichage", author: "Grégory David Escobar Fernández", license: "CC BY 2.0", href: "https://commons.wikimedia.org/wiki/File:Calle_en_Coro_2.JPG" },
      { title: "Cathédrale de Barquisimeto", author: "Rodolfo Pimentel", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Catedral_de_Barquisimeto_d%C3%ADa_lluvioso.jpg" },
      { title: "Vue aérienne de Cumaná, de ses immeubles et de la côte caraïbe — image redimensionnée ; recadrage d’affichage", author: "BID Ciudades Sostenibles", license: "CC BY 2.0", href: "https://commons.wikimedia.org/wiki/File:Cumana_sucre.jpg" },
      { title: "Place Cristóbal Mendoza dans la ville de Trujillo — image redimensionnée ; recadrage d’affichage", author: "Rjcastillo", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Plaza_Cristobal_Mendoza.jpg" },
      { title: "Diables dansants de Yare portant leurs masques et leurs costumes rouges visibles en entier — image redimensionnée ; recadrage d’affichage", author: "Josedrg08", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Danzantes_de_Yare.jpg" },
      { title: "Participants aux Zaragozas de Sanare portant des masques artisanaux et des costumes colorés — image redimensionnée ; recadrage de présentation", author: "Rodolfo Pimentel", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Zaragozas_original.jpg" },
      { title: "Bajada de la Chinita, Maracaibo", author: "Mgta122001vzla", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Bajada_de_la_Chinita_en_Maracaibo_2023_01.jpg" },
      { title: "La Divina Pastora pendant la procession à Barquisimeto, entourée de fleurs et de fidèles — image redimensionnée ; recadrage de présentation", author: "Rodolfo Pimentel", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:DIVINA_PASTORA_en_la_procesi%C3%B3n_los_feligreses_tom%C3%A1ndole_fotos.jpg" },
{ title: "Bibliothèque centrale, Cité universitaire de Caracas", author: "Jorge Andrés Paparoni Bruzual", license: "CC BY-SA 2.0", href: "https://commons.wikimedia.org/wiki/File:Biblioteca_Central_de_la_Ciudad_Universitaria_Caracas.jpg" },
      { title: "Patio de la Casa de las Ventanas de Hierro à Coro — image redimensionnée ; recadrage d’affichage", author: "Janethrodri", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Patio_Casa_de_las_Ventanas_de_Hierro.jpg" },
      { title: "Façade de la Maison du Congrès d’Angostura à Ciudad Bolívar — image redimensionnée ; recadrage d’affichage", author: "LHommeDuMonde", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Casa_de_Angostura,_Ciudad_Bol%C3%ADvar..jpg" },
    ],
  },

  sabores: {
    slug: "sabores",
    eyebrow: "Le Venezuela depuis sa table",
    title: "Saveurs du Venezuela",
    intro:
      "Un pays se parcourt aussi en mangeant. Et ici il n'y a pas une cuisine mais six ou sept : le maïs règne partout, mais ce qui l'accompagne change avec le climat, le fleuve et ceux qui sont arrivés dans chaque port.",
    hero: {
      src: "/images/arepa.jpg",
      alt: "Arepas vénézuéliennes tout juste préparées",
    },
    meta: {
      title: "Saveurs du Venezuela | Mrs Venezuela",
      description:
        "La cuisine vénézuélienne en photographies : arepa, pabellón, cachapa et hallaca, les saveurs de chaque région, le cacao, les douceurs, les ingrédients et la table de décembre.",
    },
    indexLabel: "Dans ce guide",
    backLabel: "Retour à l'accueil",
    sections: [
      {
        slug: "una-cocina-de-muchas-regiones",
        number: "01",
        title: "Une cuisine de plusieurs régions",
        lede: "Il n'existe pas une seule cuisine vénézuélienne. Le maïs et le manioc sont la base commune ; à partir de là, les Andes cuisinent au blé et à la pomme de terre, l'est au poisson et les llanos à la viande grillée au feu de bois.",
        layout: "prose",
      },
      {
        slug: "iconos-venezolanos",
        number: "02",
        title: "Icônes vénézuéliennes",
        lede: "Six plats que presque tout Vénézuélien reconnaît, où qu'il soit.",
        layout: "food-dishes",
        items: [
          {
            title: "Arepa",
            meta: "Tout le pays · Racine préhispanique",
            text: "Pain de maïs cuit sur le budare (plaque de cuisson), partagé avec d'autres peuples du nord de l'Amérique du Sud. Son nom est souvent rattaché à « erepa », mot cumanagoto associé au maïs. Depuis 1960, la farine précuite en a fait un aliment quotidien ; on l'ouvre et on la garnit.",
            photo: { src: "/images/commons/arepas-tradicionales.jpg", alt: "Arepas de maïs en train de cuire sur un stand de Caripe, Monagas" },
          },
          {
            title: "Pabellón criollo",
            meta: "Tout le pays · Déjeuner",
            text: "Bœuf effiloché, haricots noirs, riz blanc et tajadas de banane plantain mûre. On le considère généralement comme le plat national. Surmonté d'un œuf au plat, il se dit « a caballo » ; avec les tajadas sur les côtés, « con barandas ».",
            photo: { src: "/images/commons/pabellon-criollo-venezolano.jpg", alt: "Une assiette de pabellón criollo vénézuélien" },
          },
          {
            title: "Cachapa",
            meta: "Tout le pays · Maïs frais",
            text: "Pâte de jojoto (maïs tendre) moulu, douce, cuite sur le budare et repliée sur un queso de mano. Sa cousine, la cachapa de hoja, est enveloppée dans la feuille du maïs et cuite à l'eau.",
            photo: { src: "/images/commons/cachapa-con-queso-e-mano.jpg", alt: "Cachapa repliée sur un queso de mano" },
          },
          {
            title: "Hallaca",
            meta: "Tout le pays · Décembre",
            text: "Pâte de maïs teintée à l'onoto (roucou), farcie d'un ragoût de viandes, enveloppée dans une feuille de bananier et bouillie. Attestée depuis le XVIIIᵉ siècle, elle change selon la région et la famille : celle des Andes, par exemple, contient souvent des pois chiches.",
            photo: { src: "/images/commons/tradicionales-hallacas.jpg", alt: "Montage des hallacas sur la feuille de bananier, la garniture autour", position: "25% 50%" },
          },
          {
            title: "Tequeños",
            meta: "Caracas et le centre · Amuse-bouche",
            text: "Bâtonnets de fromage blanc enroulés dans une pâte de blé et frits. Leur nom est souvent rattaché à Los Teques, bien qu'aucune preuve documentaire ne l'établisse. Au milieu du XXᵉ siècle, ils étaient déjà courants dans les fêtes.",
            photo: { src: "/images/commons/tequenos-venezolanos.jpg", alt: "Tequeños frits, l'un ouvert laissant voir le fromage", position: "90% 50%" },
          },
          {
            title: "Empanada",
            meta: "Tout le pays · Petit-déjeuner",
            text: "D'origine ibérique, elle se fait au Venezuela avec une pâte de maïs et se frit. On la garnit de bœuf effiloché, de fromage ou de haricots noirs ; à Margarita et dans l'est, celle au cazón (petit requin) est un classique.",
            photo: { src: "/images/commons/empanadas-de-venezuela.jpg", alt: "Empanadas vénézuéliennes à la farine de maïs sur une assiette en verre, l'une entamée", position: "100% 50%" },
          },
        ],
      },
      {
        slug: "sabores-por-region",
        number: "03",
        title: "Saveurs par région",
        lede: "La même table change du tout au tout selon l'endroit où l'on s'assoit.",
        layout: "food-regions",
        items: [
          {
            title: "Andes",
            meta: "Mérida · Táchira · Trujillo",
            dishes: ["Pastelitos andinos", "Pisca andina", "Arepa de trigo", "Truite"],
            text: "Cuisine de climat froid : pomme de terre, produits laitiers et blé, une céréale dont la culture coloniale est surtout associée à ces montagnes. La truite, introduite en 1937, est aujourd'hui courante.",
            photo: { src: "/images/commons/pastelitos-andinos.jpg", alt: "Pastelitos andinos tout juste frits dans un panier" },
          },
          {
            title: "Est",
            meta: "Sucre · Anzoátegui · Nueva Esparta · Monagas",
            dishes: ["Empanada de cazón", "Pastel de chucho", "Poisson frit"],
            text: "La côte et la pêche définissent la table. À Margarita, le pastel de chucho, attribué au cuisinier Rubén Santiago dans les années 1980, dérive du cuajado de l'est.",
            photo: { src: "/images/commons/pescado-frito-con-arepa.jpg", alt: "Poisson frit avec arepa, tomate et citron vert, à la manière de Margarita" },
          },
          {
            title: "Zulia",
            meta: "Maracaibo et le lac",
            dishes: ["Patacón", "Mandoca", "Huevos chimbos"],
            text: "Autour du lac de Maracaibo se trouve l'une des grandes régions laitières du pays. La banane plantain mûre et le fromage apparaissent dans de nombreuses préparations, y compris sucrées.",
            photo: { src: "/images/commons/mandocas-maracuchas.jpg", alt: "Mandoca de Maracaibo, couronne frite de maïs et de banane plantain mûre" },
          },
          {
            title: "Llanos",
            meta: "Apure · Barinas · Guárico · Portuguesa · Cojedes",
            dishes: ["Carne en vara", "Pisillo", "Carato"],
            text: "Cuisine d'élevage de la savane, avec de la viande grillée au feu de bois et de la banane plantain. Pendant la Semaine sainte, on mange du cabiai, dont la chasse exige un permis officiel.",
            photo: { src: "/images/commons/entreverado-llanero.jpg", alt: "Carne en vara et entreverado grillant près du feu dans un hato des llanos", position: "65% 50%" },
          },
          {
            title: "Guayana",
            meta: "Bolívar · Amazonas · Delta Amacuro",
            dishes: ["Sapoara", "Poisson de rivière", "Catara"],
            text: "Le manioc amer des peuples autochtones y côtoie le poisson de l'Orénoque. En août, la pêche de la sapoara ouvre la Feria del Orinoco à Ciudad Bolívar.",
            photo: { src: "/images/commons/pescado-de-rio-amazonas.jpg", alt: "Poisson de rivière sur une feuille de bananier, avec manioc et salade, en Amazonas" },
          },
          {
            title: "Côte centrale",
            meta: "Aragua · Carabobo · La Guaira · Miranda",
            dishes: ["Poisson avec tostones", "Sancocho de poisson", "Cafunga"],
            text: "Littoral de pêcheurs et d'anciennes haciendas de cacao, marqué par un profond héritage afro-vénézuélien à Barlovento. Face à la mer, le poisson arrive avec des tostones.",
            photo: { src: "/images/commons/pescado-frito-con-tostones.jpg", alt: "Poisson frit avec tostones et salade, plat typique de la côte d'Aragua" },
          },
        ],
      },
      {
        slug: "cacao-y-chocolate",
        number: "04",
        title: "Cacao et chocolat",
        lede: "Le Venezuela produit peu de cacao — environ 29 400 tonnes en 2024 selon FAOSTAT, 0,6 % du total mondial — mais figure sur la liste des cacaos fins ou aromatiques de l'Organisation internationale du cacao.",
        layout: "food-cacao",
        photo: {
          src: "/images/commons/cacao-tostado.jpg",
          alt: "Fèves de cacao torréfiées dans un bol en terre cuite, prêtes à être moulues",
        },
        items: [
          {
            title: "Chuao",
            meta: "Aragua · Appellation d'origine",
            text: "Un village sans route, que l'on rejoint en barque depuis Choroní. Son cacao bénéficie d'une appellation d'origine depuis 2000 : la seule du pays pour le cacao, selon le SAPI (2026).",
            photo: { src: "/images/commons/cacao-chuao.jpg", alt: "Fèves de cacao séchant au soleil dans le village de Chuao, État d'Aragua" },
          },
          {
            title: "Paria",
            meta: "Sucre",
            text: "Sur la péninsule domine le cacao trinitario, commercialisé sous le nom de Río Caribe, d'après le village du même nom.",
            photo: { src: "/images/commons/cacao-paria.jpg", alt: "Cabosses de cacao mûres sur le tronc, dans la péninsule de Paria" },
          },
          {
            title: "Sur del Lago",
            meta: "Zulia · Mérida",
            text: "Au pied des Andes pousse le Porcelana, un cacao criollo dont la fève est blanche lorsqu'elle est fraîche.",
            photo: { src: "/images/commons/cacao-santa-apolonia.jpg", alt: "Fèves de cacao cultivé à Santa Apolonia, dans la partie méridéenne du Sur del Lago" },
          },
        ],
      },
      {
        slug: "dulces-panes-y-bebidas",
        number: "05",
        title: "Douceurs, pains et boissons",
        lede: "Ce qui se mange en milieu de matinée, ce qui accompagne le café et ce qui se boit quand il fait chaud.",
        layout: "food-groups",
        groups: [
          {
            title: "Douceurs",
            items: [
              {
                title: "Quesillo",
                meta: "Tout le pays",
                text: "Version vénézuélienne du flan, aux œufs entiers et au lait concentré sur un caramel. Son nom s'explique souvent par ses petits trous, semblables à ceux d'un fromage.",
                photo: { src: "/images/commons/quesillo.jpg", alt: "Quesillo vénézuélien nappé de caramel, dans un plat en verre" },
              },
              {
                title: "Dulce de lechosa",
                meta: "Décembre",
                text: "Lanières de papaye verte cuites dans un sirop de papelón ou de sucre, parfois avec du clou de girofle. On le prépare traditionnellement pour la table de Noël.",
                photo: { src: "/images/commons/dulce-de-lechosa.jpg", alt: "Dulce de lechosa dans un sirop doré, servi sur une assiette" },
              },
              {
                title: "Bienmesabe",
                meta: "Tout le pays",
                text: "Génoise imbibée de liqueur, alternée avec une crème de coco et de jaunes d'œuf et couverte de meringue. On la termine souvent avec de la cannelle.",
                photo: { src: "/images/commons/bienmesabe.jpg", alt: "Gâteau bienmesabe couvert de noix de coco râpée et de bandes de cannelle" },
              },
            ],
          },
          {
            title: "Pains",
            items: [
              {
                title: "Golfeado",
                meta: "Pain sucré",
                text: "Spirale de pâte au papelón, au fromage blanc et à l'anis. La tradition le situe dans les boulangeries de Petare au début du XXᵉ siècle.",
                photo: { src: "/images/commons/golfeado-4.jpg", alt: "Golfeado vu de dessus, sa spirale nappée de papelón" },
              },
              {
                title: "Cachito",
                meta: "Boulangerie",
                text: "Pain roulé avec du jambon avant la cuisson. Son origine n'est pas documentée ; parmi les versions qui circulent, l'une le rattache à des boulangers portugais.",
                photo: { src: "/images/commons/cachito-de-jamon.jpg", alt: "Cachito au jambon coupé en deux", position: "20% 50%" },
              },
            ],
          },
          {
            title: "Boissons",
            items: [
              {
                title: "Papelón con limón",
                meta: "Boisson maison",
                text: "Papelón dissous dans de l'eau froide avec du jus de citron vert. C'est la boisson maison la plus courante aux déjeuners et dans les échoppes de rue.",
                photo: { src: "/images/commons/papelon-con-limon-2.jpg", alt: "Verre de papelón con limón avec glaçons et rondelles de citron", position: "50% 100%" },
              },
              {
                title: "Chicha",
                meta: "Boisson au riz",
                text: "Celle de la rue est au riz, sucrée et non fermentée, et ce sont les chicheros qui la vendent. Dans les Andes, on en fait une autre, fermentée.",
                photo: { src: "/images/commons/chicha.jpg", alt: "Chicha vénézuélienne au riz servie dans un verre, saupoudrée de cannelle", position: "90% 50%" },
              },
              {
                title: "Tizana",
                meta: "Boisson aux fruits",
                text: "Fruits coupés dans du jus d'orange ou de pastèque, avec de la grenadine, qui lui donne sa couleur rougeâtre. Elle se vend toute l'année.",
                photo: { src: "/images/commons/tizana.jpg", alt: "Verre de tizana rouge avec des morceaux de fruits", position: "50% 80%" },
              },
            ],
          },
        ],
      },
      {
        slug: "migraciones-en-la-mesa",
        number: "06",
        title: "Les migrations à table",
        lede: "Une partie de ce qui se mange ici aujourd'hui a été apportée par des gens arrivés en bateau ou passés par la frontière.",
        layout: "food-influences",
        items: [
          {
            title: "Europe",
            meta: "Espagne · Portugal · Italie",
            text: "L'Espagne a laissé la base coloniale, renforcée par les Canariens au milieu du XXᵉ siècle. Les Portugais, nombreux à venir de Madère, ont marqué le commerce alimentaire ; les Italiens ont contribué à populariser les pâtes.",
            photo: { src: "/images/commons/panaderia-la-asuncion.jpg", alt: "Pain tout juste cuit sur les étagères d'une boulangerie de La Asunción, Margarita" },
          },
          {
            title: "Levant",
            meta: "Syrie · Liban",
            text: "Syriens et Libanais sont arrivés à partir de la seconde moitié du XIXᵉ siècle, avec de nouvelles vagues au XXᵉ. Avec eux, le quibbe et le tabule sont devenus courants.",
            photo: { src: "/images/commons/comida-arabe-maracaibo.jpg", alt: "Quibbe, feuilles de vigne farcies, tabule et houmous dans un restaurant de Maracaibo" },
          },
          {
            title: "Pays voisins",
            meta: "Colombie · Trinité et les Antilles",
            text: "Avec la Colombie, la table se partage : il y a des arepas des deux côtés de la frontière, chacune à sa manière. À El Callao, les Antillais venus avec l'or ont laissé le calalú.",
            photo: { src: "/images/commons/arepa-de-chocolo.jpg", alt: "Arepa de chócolo colombienne garnie de fromage" },
          },
        ],
      },
      {
        slug: "ingredientes-de-venezuela",
        number: "07",
        title: "Ingrédients du Venezuela",
        lede: "Sept produits qui soutiennent presque tout ce qui précède.",
        layout: "food-pantry",
        items: [
          {
            title: "Maïs",
            meta: "Base autochtone",
            text: "La céréale centrale de la cuisine vénézuélienne, d'origine autochtone : on la moud sèche ou on l'utilise tendre, en jojoto.",
            dishes: ["Arepa", "Hallaca", "Cachapa", "Bollos"],
            photo: { src: "/images/commons/maiz.jpg", alt: "Épis de maïs jaune épluchés" },
          },
          {
            title: "Manioc",
            meta: "Manioc amer · Casabe",
            text: "Pressé, le manioc amer donne le casabe, pain d'origine autochtone que l'UNESCO a reconnu en 2024 dans une candidature de cinq pays.",
            dishes: ["Casabe", "Mañoco"],
            photo: { src: "/images/commons/esto-es-casabe.jpg", alt: "Galettes de casabe séchant sur des perches près du feu de bois", position: "72% 40%" },
          },
          {
            title: "Banane plantain",
            meta: "Verte ou mûre",
            text: "Arrivée dans les Caraïbes avec les Européens au début du XVIᵉ siècle, elle est aujourd'hui sur presque toutes les tables.",
            dishes: ["Tajadas", "Tostones", "Patacón", "Pastel de chucho"],
            photo: { src: "/images/commons/platanos-chuao.jpg", alt: "Régime de bananes plantains vertes au bord de la rivière de Chuao", position: "67% 50%" },
          },
          {
            title: "Ají dulce",
            meta: "Assaisonnement",
            text: "Un Capsicum chinense presque sans piquant, de la même espèce que des piments très forts.",
            dishes: ["Hallaca", "Ragoûts", "Poisson"],
            photo: { src: "/images/commons/aji-dulce.jpg", alt: "Ajíes dulces verts, rouges et orange sur un marché" },
          },
          {
            title: "Papelón",
            meta: "Édulcorant",
            text: "Jus de canne cuit et solidifié en blocs ; dans d'autres pays, on l'appelle panela.",
            dishes: ["Papelón con limón", "Golfeado", "Douceurs à la noix de coco"],
            photo: { src: "/images/commons/papelon.jpg", alt: "Blocs de papelón empilés" },
          },
          {
            title: "Cacao",
            meta: "Culture historique",
            text: "Ce fut la principale exportation du Venezuela colonial aux XVIIᵉ et XVIIIᵉ siècles.",
            dishes: ["Chocolat", "Chocolat chaud"],
            photo: { src: "/images/commons/mazorca-de-cacao.jpg", alt: "Cabosse de cacao ouverte avec ses fèves, dans le Delta Amacuro" },
          },
          {
            title: "Fromages",
            meta: "De mano · Guayanés · Telita · Llanero",
            text: "Tendres et frais, le queso de mano, le guayanés et le telita ; dur et salé, le llanero, que l'on râpe sur les haricots noirs et les arepas.",
            dishes: ["Cachapa", "Arepa", "Haricots noirs"],
            photo: { src: "/images/commons/queso-llanero.jpg", alt: "Meule de queso llanero sur une planche en bois" },
          },
        ],
      },
      {
        slug: "la-mesa-de-diciembre",
        number: "08",
        title: "La table de décembre",
        lede: "Au réveillon de Noël et au Nouvel An, la hallaca partage la table avec trois autres classiques, et pour trinquer arrive le ponche crema.",
        layout: "food-table",
        photo: {
          src: "/images/commons/plato-tipico-navideno.jpg",
          alt: "Assiette de Noël vénézuélienne avec hallaca, pan de jamón, ensalada de gallina et pernil",
        },
        items: [
          {
            title: "Hallaca",
            text: "Elle se prépare en famille et se mange pendant tout le mois de décembre.",
            photo: { src: "/images/commons/hallacas-amarradas.jpg", alt: "Deux hallacas ficelées dans une feuille de bananier" },
          },
          {
            title: "Pan de jamón",
            text: "Garni de jambon, de raisins secs et d'olives. On l'attribue à la boulangerie Ramella, à Caracas, au début du XXᵉ siècle.",
            photo: { src: "/images/commons/pan-de-jamon.jpg", alt: "Tranche de pan de jamón avec sa spirale de jambon et d'olives" },
          },
          {
            title: "Pernil",
            text: "Cuisse de porc marinée et rôtie pendant des heures ; les restes finissent souvent dans du pain.",
            photo: { src: "/images/commons/pernil-horneado.jpg", alt: "Pernil de porc rôti dans son plat" },
          },
          {
            title: "Ensalada de gallina",
            text: "Pomme de terre, carotte et poule effilochée à la mayonnaise, cousine de la salade russe.",
            photo: { src: "/images/commons/ensalada-de-gallina.jpg", alt: "Ensalada de gallina aux petits pois lors d'un dîner de Noël" },
          },
        ],
      },
    ],
    closing: {
      text: "Un pays se raconte aussi par ce qu'il met sur la table.",
    },
    credits: [
      { title: "Arepas (couverture)", author: "Steven Depolo", license: "CC BY 2.0", href: "https://commons.wikimedia.org/wiki/File:Arepitas_Food_Macro.jpg" },
      { title: "Arepas traditionnelles à Caripe", author: "Wilmeris Hernández", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Arepas_Tradicionales.jpg" },
      { title: "Pabellón criollo", author: "Wilfredor", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Pabell%C3%B3n_Criollo_Venezolano.jpg" },
      { title: "Cachapa au queso de mano", author: "Jonathan de Almeida", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Cachapa_Con_Queso_e_Mano.JPG" },
      { title: "Hallacas traditionnelles", author: "Tomás Rojas", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Tradicionales_Hallacas.jpg" },
      { title: "Tequeños vénézuéliens", author: "Rodolfo Pimentel", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Teque%C3%B1os_Venezolanos.jpg" },
      { title: "Empanadas du Venezuela", author: "Laura Fiorucci", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Empanadas_de_Venezuela.jpg" },
      { title: "Pastelitos andinos", author: "Julio Sifontes", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Pastelitos_Andinos.jpg" },
      { title: "Poisson frit avec arepa", author: "Wilfredor", license: "CC0", href: "https://commons.wikimedia.org/wiki/File:Plato_de_pescado_frito_con_arepa.jpg" },
      { title: "Mandocas de Maracaibo", author: "DamianFinol", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Mandocas_maracuchas.jpg" },
      { title: "Carne en vara et entreverado des llanos", author: "Douglas Bracho", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Un_entreverado_bien_llanero.JPG" },
      { title: "Poisson de rivière en Amazonas (lumière ajustée)", author: "Rasiel Morella", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Comida_t%C3%ADpica,_Amazonas.JPG" },
      { title: "Poisson frit avec tostones", author: "Menu1973", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Plato_tipico_en_Maracay.jpg" },
      { title: "Cacao torréfié", author: "ElmerGuevara", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Cacao_Tostado..JPG" },
      { title: "Cacao séchant à Chuao", author: "Bucare2011", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Cacao_Chuao.jpg" },
      { title: "Cabosses de cacao à Paria", author: "Luisovalles", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Cacao-fruto.jpg" },
      { title: "Cacao de Santa Apolonia, Mérida", author: "Wilfredor", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Semillas_de_cacao.jpg" },
      { title: "Quesillo vénézuélien", author: "Muago", license: "CC0", href: "https://commons.wikimedia.org/wiki/File:Quesillo_venezolano_2.jpg" },
      { title: "Dulce de lechosa", author: "Muago", license: "CC0", href: "https://commons.wikimedia.org/wiki/File:Dulce_de_lechosa.jpg" },
      { title: "Gâteau bienmesabe", author: "Muago", license: "CC0", href: "https://commons.wikimedia.org/wiki/File:Torta_de_bienmesabe.jpg" },
      { title: "Golfeado", author: "Muago", license: "CC0", href: "https://commons.wikimedia.org/wiki/File:Golfeado_4.jpg" },
      { title: "Cachito au jambon", author: "Luis Miguel Cisneros", license: "CC BY 2.0", href: "https://commons.wikimedia.org/wiki/File:Cachito_de_Jam%C3%B3n.jpg" },
      { title: "Papelón con limón", author: "Muago", license: "CC0", href: "https://commons.wikimedia.org/wiki/File:Papel%C3%B3n_con_lim%C3%B3n_2.jpg" },
      { title: "Chicha vénézuélienne", author: "Muago", license: "CC0", href: "https://commons.wikimedia.org/wiki/File:Chicha_venezolana_2.jpg" },
      { title: "Tizana", author: "Muago", license: "CC0", href: "https://commons.wikimedia.org/wiki/File:Tizana.jpg" },
      { title: "Boulangerie à La Asunción", author: "Wilfredor", license: "CC0", href: "https://commons.wikimedia.org/wiki/File:Panaderia_Don_Bosco_en_la_Asuncion_12.jpg" },
      { title: "Cuisine arabe à Maracaibo (recadrage)", author: "Ronaldy Lugo", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:COMIDA_ARABE_EN_MARACAIBO.JPG" },
      { title: "Arepa de chócolo", author: "John Alexis Guerra Gómez", license: "CC BY-SA 2.0", href: "https://commons.wikimedia.org/wiki/File:Arepa_de_Ch%C3%B3colo.jpg" },
      { title: "Maïs épluché", author: "Davidperezc77", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Maiz_Pelado.JPG" },
      { title: "Casabe", author: "Wilmeris Hernández", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Esto_es_casabe.jpg" },
      { title: "Bananes plantains au bord de la rivière de Chuao", author: "Isamarvda", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Pl%C3%A1tanos_a_orillas_del_r%C3%ADo_de_Chuao.jpg" },
      { title: "Ají dulce", author: "Wilfredor", license: "CC0", href: "https://commons.wikimedia.org/wiki/File:Sweet_Pepper_Market.jpg" },
      { title: "Papelón en blocs", author: "Elifeleth", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Panela_en_cuadros.JPG" },
      { title: "Cabosse de cacao, Delta Amacuro", author: "Grace Rengifo", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Cacao_(Delta_Amacuro).JPG" },
      { title: "Queso llanero", author: "Muago", license: "CC0", href: "https://commons.wikimedia.org/wiki/File:Queso_llanero.jpg" },
      { title: "Assiette de Noël vénézuélienne (recadrage)", author: "jonathan de Almeida", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Plato_Tipico_Navide%C3%B1o.JPG" },
      { title: "Hallacas de Noël", author: "Wilfredor", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Hallaca,_Venezuelan_Christmas_food.jpg" },
      { title: "Pan de jamón", author: "Wilfredor", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Pan_de_jamon,_Venezuelan_food.jpg" },
      { title: "Pernil rôti", author: "Jovannabonilla", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Pierna_de_cochino_en_salsa.JPG" },
      { title: "Ensalada de gallina, de l'assiette de Noël (recadrage)", author: "David Hernández", license: "CC BY-SA 2.0", href: "https://commons.wikimedia.org/wiki/File:Cena_navidad_2007.jpg" },
    ],
  },
};
