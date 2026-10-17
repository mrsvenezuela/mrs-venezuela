import type { ThematicContent } from "./types";

/* Traducción del maestro `es.ts`. Mismos slug, mismas imágenes, mismos enlaces. */
export const thematicEn: ThematicContent = {
  "caribe-y-playa": {
    slug: "caribe-y-playa",
    eyebrow: "Venezuela facing the sea",
    title: "Caribbean and beach",
    intro:
      "Almost 2,400 kilometres of Caribbean shoreline, twelve island groups and a coast that changes character between one gulf and the next.",
    hero: {
      src: "/images/cayo-de-agua.jpg",
      alt: "Sandbar and turquoise water at Cayo de Agua, Los Roques archipelago",
    },
    meta: {
      title: "Caribbean and beach in Venezuela | Mrs Venezuela",
      description:
        "The coast and islands of Venezuela: Los Roques, Margarita, Morrocoy, Mochima, Choroní, Paria, La Tortuga and Isla de Plata, and how the shoreline changes from west to east.",
    },
    indexLabel: "In this guide",
    backLabel: "Back to home",
    sections: [
      {
        slug: "el-caribe-venezolano",
        number: "01",
        title: "The Venezuelan Caribbean",
        lede: "There is no single Venezuelan coast: there are several. The shoreline moves from dunes to mangroves, from coral cays to cliffs, and from open gulfs to bays closed off by the mountain range. Then there are the islands, well out to sea, which are something else again.",
        layout: "band",
        photo: {
          src: "/images/commons/morrocoy-sea-island.jpg",
          alt: "A cay in Morrocoy National Park over turquoise water, Falcón state",
        },
        items: [
          { title: "Cays", text: "Sand and coral islets in shallow water." },
          { title: "Islands", text: "Out at sea, hours away by boat or by air." },
          { title: "Bays and coves", text: "Sheltered water and little swell." },
          { title: "Mainland coast", text: "Open beaches at the foot of the range." },
        ],
      },
      {
        slug: "destinos-esenciales",
        number: "02",
        title: "Essential destinations",
        lede: "Eight ways into the Venezuelan Caribbean, from the remotest archipelago to the beach that fills up on Sundays.",
        layout: "gallery",
        items: [
          {
            title: "Los Roques",
            meta: "Federal Dependencies",
            text: "White cays, lagoons and reefs half an hour by air from Caracas.",
            photo: { src: "/images/commons/madrisqui.jpg", alt: "Madrisquí cay, in the Los Roques archipelago" },
            href: "/playa/los-roques",
          },
          {
            title: "Playa El Agua",
            meta: "Margarita · Nueva Esparta",
            text: "Four kilometres of open sand on the north of the island, with surf and coconut palms.",
            photo: { src: "/images/playa-el-agua.jpg", alt: "Playa El Agua, on the north-east of Margarita island" },
            href: "/playa/playa-el-agua",
          },
          {
            title: "Morrocoy",
            meta: "National park · Falcón",
            text: "Cays, mangroves and coast between Tucacas and Chichiriviche. Cayo Sombrero is one of its destinations.",
            photo: { src: "/images/cayo-sombrero.jpg", alt: "Cayo Sombrero, in Morrocoy National Park" },
            href: "/playa/morrocoy",
          },
          {
            title: "Mochima",
            meta: "Sucre and Anzoátegui",
            text: "Green islands and coves inside a national park you travel by peñero.",
            photo: { src: "/images/mochima.jpg", alt: "Bay in Mochima National Park with a fishing boat" },
            href: "/playa/mochima",
          },
          {
            title: "Choroní",
            meta: "Aragua",
            text: "Village and beach at the end of a road that crosses the Henri Pittier cloud forest.",
            photo: { src: "/images/choroni.jpg", alt: "The coast at Choroní, with the Caribbean at the foot of the range" },
            href: "/playa/choroni",
          },
          {
            title: "Cuyagua",
            meta: "Aragua",
            text: "An open beach with waves, the one most associated with surfing on the central coast.",
            photo: { src: "/images/cuyagua.jpg", alt: "Cuyagua beach, on the coast of Aragua state" },
            href: "/playa/cuyagua",
          },
          {
            title: "Playa Medina",
            meta: "Paria peninsula · Sucre",
            text: "A bay of coconut palms on the humid Paria coast, far from everything else.",
            photo: {
              src: "/images/commons/playa-medina-peninsula-paria.jpg",
              alt: "Playa Medina, on the Paria peninsula, Sucre state",
            },
            href: "/playa/playa-medina",
          },
          {
            title: "La Tortuga",
            meta: "Federal Dependencies",
            text: "The country's second island, with no settled population: reached by sea or light aircraft.",
            photo: { src: "/images/isla-la-tortuga-turquesa.jpg", alt: "Turquoise water off La Tortuga island" },
            href: "/playa/isla-la-tortuga",
          },
        ],
      },
      {
        slug: "de-occidente-a-oriente",
        number: "03",
        title: "From west to east",
        lede: "The same coast, followed from one end of the country to the other, does not resemble itself.",
        layout: "coastline",
        items: [
          {
            title: "West",
            meta: "Zulia and Falcón",
            text: "The driest stretch. Wide gulfs, dunes that reach the water and, off Falcón, the cays and mangroves of Morrocoy.",
          },
          {
            title: "Centre",
            meta: "Carabobo, Aragua and La Guaira",
            text: "Here the range drops straight into the Caribbean. Short bays between cloud-forest mountains, and beaches open to the northern swell.",
          },
          {
            title: "Islands",
            meta: "Nueva Esparta",
            text: "Off the eastern coast, Margarita, Coche and Cubagua form the country's only island state.",
          },
          {
            title: "East",
            meta: "Anzoátegui and Sucre",
            text: "Gulfs, peninsulas and greener water. Mochima to the west, Paria to the east, and the point where the Caribbean ends and the Atlantic begins.",
          },
        ],
      },
      {
        slug: "el-mar-en-numeros",
        number: "04",
        title: "The sea in numbers",
        lede: "Four figures that are hard to pin down, because most of the ones in circulation never say what they are measuring.",
        layout: "numbers",
        items: [
          {
            value: "2,394 km",
            title: "Caribbean shoreline",
            text: "From Castilletes, in the Guajira, to Punta Peñas, in Paria.",
            source: "Coastal Zones Act · 2001",
          },
          {
            value: "12 + 89",
            title: "Island groups",
            text: "Twelve make up the Federal Dependencies; another 89 islands belong to the coastal states. There is no official total.",
            source: "INE · 2025",
          },
          {
            value: "~475,000 km²",
            title: "Its own sea",
            text: "The exclusive economic zone. The figure is approximate: boundaries with several neighbours are still unsettled.",
            source: "Sea Around Us · 2015",
          },
          {
            value: "221,120 ha",
            title: "Marine park",
            text: "Los Roques, protected since 1972, is the largest national park in the Caribbean Sea.",
            source: "Los Roques Archipelago National Park",
          },
        ],
      },
      {
        slug: "venezuela-insular",
        number: "05",
        title: "Island Venezuela",
        lede: "The country does not end at the mainland coast. Out at sea there are a dozen island groups, most of them uninhabited, and the furthest — Isla de Aves — lies more than five hundred kilometres from the continent.",
        layout: "islands",
        photo: {
          src: "/images/isla-de-coche.jpg",
          alt: "The coast of Coche island, in Nueva Esparta state",
        },
        items: [
          { title: "Margarita", meta: "Nueva Esparta", text: "The largest island of the Venezuelan Caribbean, and the only one with cities." },
          { title: "Coche", meta: "Nueva Esparta", text: "Between Margarita and the mainland. It is an inhabited municipality." },
          { title: "Cubagua", meta: "Nueva Esparta", text: "It holds the ruins of Nueva Cádiz, the city of pearls." },
          { title: "Los Roques", meta: "Federal Dependencies", text: "A national park since 1972 and a Ramsar site: more than 80% of it is sea." },
          { title: "La Tortuga", meta: "Federal Dependencies", text: "156 km² and no settled population. The country's second island." },
          { title: "La Blanquilla", meta: "Federal Dependencies", text: "No civilian population: a coastguard post and seasonal fishermen." },
          { title: "La Orchila", meta: "Federal Dependencies", text: "A naval air base with restricted access: no visits without permission." },
          { title: "Las Aves", meta: "Federal Dependencies", text: "Two groups, Sotavento and Barlovento. Uninhabited." },
          { title: "Los Testigos", meta: "Federal Dependencies", text: "Settled by families of Margaritan origin. One of the two inhabited archipelagos." },
          { title: "Los Frailes", meta: "Federal Dependencies", text: "Ten uninhabited islets north-east of Margarita." },
        ],
      },
      {
        slug: "antes-de-llegar-al-mar",
        number: "06",
        title: "Before you reach the sea",
        lede: "Four things worth being clear about.",
        layout: "tips",
        items: [
          { title: "Sun", text: "Near the equator the sun is strong even under cloud. Sunscreen, shade and water." },
          { title: "Sea", text: "Swell and currents change a great deal from one beach to the next and from one day to the next. Ask on the shore." },
          { title: "Access", text: "The islands and many cays can only be reached by sea. Confirm the outward and return trip before boarding." },
          { title: "Protected areas", text: "Los Roques, Morrocoy and Mochima are national parks: camping and other activities require authorisation from Inparques." },
        ],
      },
    ],
    finalPhoto: {
      src: "/images/commons/dos-mosquises.jpg",
      alt: "Aerial view of Dos Mosquises cay, in Los Roques, surrounded by reefs and sandbanks",
    },
    closing: {
      text: "A whole country facing the Caribbean, and hundreds of different ways of reaching the sea.",
    },
    credits: [
      {
        title: "Madrisquí cay, Los Roques",
        author: "Wilfredor",
        license: "CC BY-SA 4.0",
        href: "https://commons.wikimedia.org/wiki/File:Madrisqui.jpg",
      },
      {
        title: "Playa Medina, Paria peninsula",
        author: "Alejandro Solo",
        license: "CC BY-SA 4.0",
        href: "https://commons.wikimedia.org/wiki/File:Playa_Medina_Peninsula_Paria.jpg",
      },
      {
        title: "Morrocoy National Park",
        author: "Regisrob",
        license: "CC BY 3.0",
        href: "https://commons.wikimedia.org/wiki/File:Morrocoy_sea_island.JPG",
      },
      {
        title: "Dos Mosquises cay, Los Roques",
        author: "Berrucomons",
        license: "CC BY-SA 3.0",
        href: "https://commons.wikimedia.org/wiki/File:Dos_Mosquises.jpg",
      },
    ],
  },

  "montana-y-paramo": {
    slug: "montana-y-paramo",
    eyebrow: "Venezuela up high",
    title: "Mountain and páramo",
    intro:
      "The tropical country also has snow, frozen lagoons and villages at three thousand metres. The Venezuelan Andes are the northern end of the range, and the landscape changes with every hour of climbing.",
    hero: {
      src: "/images/pico-bolivar.jpg",
      alt: "Pico Bolívar, the highest summit in Venezuela, in the Sierra Nevada of Mérida",
    },
    meta: {
      title: "Mountain and páramo in Venezuela | Mrs Venezuela",
      description:
        "The Venezuelan Andes: Mérida, Táchira and Trujillo, Pico Bolívar, the Sierra Nevada, the páramos, their villages and their lagoons.",
    },
    indexLabel: "In this guide",
    backLabel: "Back to home",
    sections: [
      {
        slug: "venezuela-en-altura",
        number: "01",
        title: "Venezuela up high",
        lede: "Venezuela is not only coast and plain. The Mérida range closes the Andes to the north and reaches 4,978 metres at Pico Bolívar; the Coastal range lifts the Ávila above Caracas, and in the south-east the tepuis form mountains of another kind altogether. Between them lie temperate valleys, cloud forests and páramos.",
        layout: "prose",
      },
      {
        slug: "los-andes",
        number: "02",
        title: "The Andes",
        lede: "Three states joined by the same range and by roads that have been crossing it for centuries.",
        layout: "gallery",
        items: [
          {
            title: "Mérida",
            meta: "Summits and páramos",
            text: "The country's greatest height, the world's highest cable car and a network of mountain villages.",
            photo: { src: "/images/commons/teleferico-del-pico-espejo.jpg", alt: "The Mérida cable car climbing between the mountains" },
            href: "/estado/merida",
          },
          {
            title: "Táchira",
            meta: "Border and mountain",
            text: "Farming valleys, cool towns and the overland gateway to Colombia.",
            photo: {
              src: "/images/commons/paramo-las-coloradas-tachira.jpg",
              alt: "Lagoon, frailejones and hikers in Páramo Las Coloradas, Táchira state",
            },
            href: "/estado/tachira",
          },
          {
            title: "Trujillo",
            meta: "Villages and memory",
            text: "Inhabited mountains, coffee and viewpoints over the northern end of the range.",
            photo: {
              src: "/images/states/trujillo.jpg",
              alt: "Monument to the Virgin of Peace above the city of Trujillo",
            },
            href: "/estado/trujillo",
          },
        ],
      },
      {
        slug: "lugares-en-las-alturas",
        number: "03",
        title: "Places in the heights",
        lede: "Four names to start reading the range.",
        layout: "gallery",
        items: [
          {
            title: "Pico Bolívar",
            meta: "4,978 m · Mérida",
            text: "The highest summit in Venezuela. Climbing it is mountaineering, not hiking.",
            photo: {
              src: "/images/commons/pico-bolivar-al-desnudo-en-dia-soleado-y-despejado.jpg",
              alt: "Pico Bolívar clear of cloud on a sunny day",
            },
            href: "/montana/pico-bolivar",
          },
          {
            title: "Pico Humboldt",
            meta: "4,940 m · Mérida",
            text: "The country's second summit, holding the last glacier Venezuela had left.",
            photo: {
              src: "/images/commons/flanco-norte-del-pico-humboldt.jpg",
              alt: "North face of Pico Humboldt, in the Sierra Nevada of Mérida",
            },
          },
          {
            title: "Sierra de La Culata",
            meta: "Mérida",
            text: "Mérida's other great range, of open páramo and bare rock.",
            photo: { src: "/images/commons/picos-en-la-culata.jpg", alt: "Peaks of the Sierra de La Culata, Mérida state" },
          },
          {
            title: "Pico Espejo",
            meta: "4,765 m · Mérida",
            text: "The last station of the Mukumbarí cable car, the highest and longest in the world.",
            photo: {
              src: "/images/merida-pico-espejo.png",
              alt: "Pico Espejo station of the Mukumbarí cable car",
            },
          },
        ],
      },
      {
        slug: "vida-en-el-paramo",
        number: "04",
        title: "Life in the páramo",
        lede: "Above the forest and below the snow there is a world of its own: cold, wet and slow.",
        layout: "band",
        photo: {
          src: "/images/commons/paramo-1.jpg",
          alt: "Frailejones in a páramo of the Venezuelan Andes",
        },
        items: [
          { title: "Frailejones", text: "Velvet-leaved plants that hold the water from the mist." },
          { title: "Lagoons", text: "Glacial in origin, cold and clear." },
          { title: "Farming", text: "Potatoes, wheat, carrots and garlic on the slope." },
          { title: "Villages", text: "Tiled roofs and plazas above two thousand metres." },
        ],
      },
      {
        slug: "cultura-andina",
        number: "05",
        title: "Andean culture",
        lede: "Another way of building, sowing and living. Of eating too: pisca andina, wheat, potatoes, smoked cheeses and milk sweets.",
        layout: "gallery",
        items: [
          {
            title: "The villages",
            meta: "Apartaderos · Mucuchíes · Jají",
            text: "Tiled roofs at the bottom of the valley, above three thousand metres.",
            photo: {
              src: "/images/commons/vista-del-pueblo-de-apartaderos.jpg",
              alt: "View of the Andean village of Apartaderos, Mérida state",
            },
          },
          {
            title: "The plaza",
            meta: "Architecture",
            text: "Whitewashed church, cobbled square and mountain behind. The pattern repeats across the páramo.",
            photo: {
              src: "/images/commons/plaza-bolivar-de-los-nevados.jpg",
              alt: "Plaza Bolívar in the village of Los Nevados, in the Andes of Mérida",
            },
          },
          {
            title: "The sowing",
            meta: "Farming at altitude",
            text: "Potatoes, wheat and vegetables terraced across the slope.",
            photo: { src: "/images/commons/siembra-y-pueblo.jpg", alt: "Crops on a slope beside an Andean village" },
          },
        ],
      },
      {
        slug: "antes-de-subir",
        number: "06",
        title: "Before you climb",
        lede: "Altitude does not forgive haste.",
        layout: "tips",
        items: [
          { title: "Altitude", text: "Climb in stages and sleep a night at mid-height before going on." },
          { title: "Cold", text: "Bring layers. The páramo can freeze at night even after a sunny day." },
          { title: "Sun", text: "Radiation rises with altitude: sunscreen, hat and glasses even in mist." },
          { title: "Preparation", text: "The snow summits require a guide, technical gear and previous experience." },
        ],
      },
    ],
    closing: {
      text: "In the mountains you climb slowly. It is the only way to reach the top and, along the way, to understand what you are looking at.",
    },
    credits: [
      {
        title: "Páramo Las Coloradas, Táchira state",
        author: "Nackort",
        license: "CC BY-SA 3.0",
        href: "https://commons.wikimedia.org/wiki/File:Paramo_Andino_Estado_Tachira.jpg",
      },
      {
        title: "Pico Bolívar on a clear day",
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
        title: "Pico Espejo cable car",
        author: "Ivan Carvajal",
        license: "CC BY-SA 3.0",
        href: "https://commons.wikimedia.org/wiki/File:Telef%C3%A9rico_del_Pico_Espejo.JPG",
      },
      { title: "Frailejones of the páramo", author: "Adolfo (Ajerit)", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:P%C3%A1ramo_1.jpg" },
      { title: "Peaks of La Culata", author: "Arnaldo Noguera Sifontes", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Picos_en_la_culata.jpg" },
      { title: "North face of Pico Humboldt", author: "Massieljc", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Flanco_Norte_del_Pico_Humboldt.jpg" },
      { title: "Village of Apartaderos", author: "Rjcastillo", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Vista_del_Pueblo_de_Apartaderos.jpg" },
      { title: "Plaza Bolívar, Los Nevados", author: "José Alfaro", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Plaza_Bol%C3%ADvar_de_Los_Nevados.jpg" },
      { title: "Crops and village, Andes of Mérida", author: "José Alfaro", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Siembra_y_pueblo.jpg" },
    ],
  },

  "selva-y-rios": {
    slug: "selva-y-rios",
    eyebrow: "The country of great waters",
    title: "Rainforest and rivers",
    intro:
      "Rivers connecting cities and communities, forests covering the south and rocks from a distant past. In this Venezuela, water shapes the landscape and everyday life.",
    hero: {
      src: "/images/commons/cano-zorro-15020517430.jpg",
      alt: "Caño Zorro amid the vegetation of Amazonas",
      position: "center 40%",
    },
    meta: {
      title: "Rainforest and rivers of Venezuela | Mrs Venezuela",
      description:
        "The Orinoco, the Venezuelan Amazon, the Delta, Guayana and Canaima: the great rivers, the forests and the peoples who live in them.",
    },
    indexLabel: "In this guide",
    backLabel: "Back to home",
    sections: [
      {
        slug: "un-pais-de-grandes-aguas",
        number: "01",
        title: "A country of great waters",
        lede: "The Orinoco runs some 2,140 kilometres and its basin covers more than four fifths of Venezuela. The plains, Guayana and the delta are all arranged around it: here water does not cross the landscape, it organises it.",
        layout: "prose",
      },
      {
        slug: "el-orinoco",
        number: "02",
        title: "The Orinoco",
        lede: "The river that explains the country.",
        layout: "band",
        photo: {
          src: "/images/commons/panoramica-del-rio-orinoco-en-amazonas.jpg",
          alt: "Panorama of a wide stretch of the Orinoco river as it crosses Amazonas",
        },
        items: [
          { title: "Geography", text: "It rises in the Parima range and reaches the Atlantic through a delta of thousands of channels." },
          { title: "History", text: "It was a way in, a frontier and a road to independence: Angostura stands on its bank." },
          { title: "Life", text: "Its banks feed fishing, farming, cities and indigenous communities." },
        ],
      },
      {
        slug: "amazonas",
        number: "03",
        title: "Amazonas",
        lede: "The largest state after Bolívar and the least populated in the country: forest, rivers and outcrops of very ancient rock. Puerto Ayacucho is its gateway; beyond it, distances are measured in hours of navigation.",
        layout: "feature",
        photo: {
          src: "/images/commons/rio-sipapo-amazonas.jpg",
          alt: "Sipapo River surrounded by rainforest in Amazonas state",
        },
        items: [
          { title: "Forest", text: "Continuous rainforest, with some of the greatest biological diversity on the continent." },
          { title: "Rock", text: "Hills and tepuis of the Guiana Shield rise out of the vegetation." },
          { title: "State guide", href: "/estado/amazonas" },
        ],
      },
      {
        slug: "delta-del-orinoco",
        number: "04",
        title: "Orinoco delta",
        lede: "Before the Atlantic, the river opens into hundreds of channels, islands and mangroves. It is the ancestral territory of the Warao people, who have lived there since long before Venezuela existed.",
        layout: "band",
        photo: {
          src: "/images/commons/delta-orinoco-atardecer.jpg",
          alt: "Sunset over the waters of the Orinoco delta",
        },
        items: [
          { title: "Channels", text: "River arms that take the place of roads." },
          { title: "Mangroves", text: "Amphibious forests between fresh and salt water." },
          { title: "Moriche palm", text: "The palm that provides food, fibre and housing." },
          { title: "Tides", text: "The Atlantic comes in and out twice a day." },
        ],
      },
      {
        "slug": "guayana",
        "number": "05",
        "title": "Guayana",
        "lede": "Rivers, riverside cities, savannas and forests: four ways to discover Venezuelan Guayana.",
        "layout": "gallery",
        "items": [
          {
            "title": "The Caroní",
            "meta": "Ciudad Guayana",
            "text": "The Orinoco's great tributary, with falls like La Llovizna before it joins.",
            "photo": {
              "src": "/images/commons/la-llovizna-1.jpg",
              "alt": "La Llovizna falls, on the Caroní river, Ciudad Guayana"
            }
          },
          {
            "title": "The Orinoco",
            "meta": "Ciudad Bolívar",
            "text": "Along the banks of former Angostura, the river brings together landscape, history and urban life.",
            "photo": {
              "src": "/images/commons/ciudad-bolivar-historical-zone.jpg",
              "alt": "Ciudad Bolívar and the Orinoco river, with Angostura Bridge in the distance"
            }
          },
          {
            "title": "La Gran Sabana",
            "meta": "Bolívar",
            "text": "High savanna among tepuis, with dark-water rivers and waterfalls along the way.",
            "photo": {
              "src": "/images/commons/la-gran-sabana.jpg",
              "alt": "The Gran Sabana with tepuis in the distance"
            }
          },
          {
            "title": "Canaima",
            "meta": "World Heritage Site",
            "text": "Three million hectares of tepuis, forest and savanna; Angel Falls is inside it.",
            "photo": {
              "src": "/images/salto-angel.jpg",
              "alt": "Angel Falls dropping from the Auyantepui"
            }
          }
        ]
      },
      {
        "slug": "pueblos-y-territorio",
        "number": "06",
        "title": "Peoples and territory",
        "lede": "Peoples with their own languages, knowledge and forms of organisation. Getting to know their territories means listening to their communities and respecting their decisions.",
        "layout": "list",
        "items": [
          {
            "title": "Pemón",
            "meta": "Bolívar",
            "text": "The Gran Sabana and Caroní basin. Their language and oral traditions are part of the territory's living memory."
          },
          {
            "title": "Warao",
            "meta": "Delta Amacuro",
            "text": "The delta is their ancestral territory; navigation and weaving moriche palm fibres are part of their culture."
          },
          {
            "title": "Ye'kwana",
            "meta": "Bolívar and Amazonas",
            "text": "The Caura and upper Ventuari basins. Navigation and basketry link knowledge with everyday life."
          },
          {
            "title": "Uwottüja",
            "meta": "Amazonas",
            "text": "The middle Orinoco and the Sipapo, Autana and Cuao rivers. Also known as Piaroa, they maintain their own language and knowledge."
          }
        ]
      },
      {
        "slug": "naturaleza",
        "number": "07",
        "title": "Nature",
        "lede": "Four environments connected by water, each with its own life.",
        "layout": "gallery",
        "items": [
          {
            "title": "Rivers",
            "meta": "Water in motion",
            "text": "Channels, rapids and waterfalls connect contrasting landscapes. Here, Quebrada de Jaspe reveals the rocky riverbed.",
            "photo": {
              "src": "/images/commons/gran-sabana-quebrada-de-jaspe-i-1.jpg",
              "alt": "Quebrada de Jaspe, in the Gran Sabana"
            }
          },
          {
            "title": "Forests",
            "meta": "Amazonas",
            "text": "Vegetation follows the banks and shades the ground. Water and forest form a single landscape.",
            "photo": {
              "src": "/images/commons/cano-zorro-15020517430.jpg",
              "alt": "A clear stream over red rock in the forest of Amazonas"
            }
          },
          {
            "title": "Tepuis",
            "meta": "Guiana Shield",
            "text": "Ancient rock plateaus with distinctive habitats and species, such as Kukenán.",
            "photo": {
              "src": "/images/commons/kukenan-tepuy.jpg",
              "alt": "Kukenán tepui among clouds"
            }
          },
          {
            "title": "Biodiversity",
            "meta": "Southern forests",
            "text": "Birds, insects and plants share the forest. The white-throated toucan is one of its many species.",
            "photo": {
              "src": "/images/commons/piapoco-de-garganta-blanca-ramphastos-tucanus-cuvieri.jpg",
              "alt": "White-throated toucan among the vegetation"
            }
          }
        ]
      },
    ],
    closing: {
      text: "Here water does not cross the territory. It organises it: it decides where people live, how they travel and what they eat.",
    },
    credits: [
      { title: "Historic quarter of Ciudad Bolívar", author: "Venecon", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Ciudad_Bol%C3%ADvar_historical_zone.jpg" },
      {
        title: "Salto Hacha and curiara, Canaima",
        author: "Yosmary Lopez",
        license: "CC BY-SA 3.0",
        href: "https://commons.wikimedia.org/wiki/File:Salto_Hacha_y_Curiara_(Sector_Occidental).JPG",
      },
      {
        title: "La Gran Sabana",
        author: "Paolo Costa Baldi",
        license: "CC BY-SA 3.0",
        href: "https://commons.wikimedia.org/wiki/File:La_Gran_Sabana.jpg",
      },
      {
        title: "Quebrada de Jaspe, Gran Sabana",
        author: "Paolo Costa Baldi",
        license: "CC BY-SA 3.0",
        href: "https://commons.wikimedia.org/wiki/File:Gran_Sabana_Quebrada_de_Jaspe_I_(1).JPG",
      },
      {
        title: "Kukenán tepui",
        author: "Paolo Costa Baldi",
        license: "CC BY-SA 3.0",
        href: "https://commons.wikimedia.org/wiki/File:Kukenan_tepuy.jpg",
      },
      { title: "Panorama of the Orinoco river", author: "Shishoxisrax", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Panoramica_del_rio_orinoco_en_amazonas.JPG" },
      { title: "Sipapo River, Amazonas", author: "Fernando Flores", license: "CC BY-SA 2.0", href: "https://commons.wikimedia.org/wiki/File:R%C3%ADo_Sipapo_-_Sipapo_River_(12917850754).jpg" },
      { title: "Caño Zorro, Amazonas", author: "Fernando Flores", license: "CC BY-SA 2.0", href: "https://commons.wikimedia.org/wiki/File:Ca%C3%B1o_Zorro_(15020517430).jpg" },
      { title: "Orinoco delta", author: "Antolin Martinez A.", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Delta_del_Orinoco_110514-27.JPG" },
      { title: "La Llovizna falls, Caroní river", author: "Daniel Méndez", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:La_Llovizna_1.jpg" },
      { title: "White-throated toucan", author: "Fernando Flores", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Piapoco_de_Garganta_Blanca_(Ramphastos_tucanus_cuvieri).jpg" },
    ],
  },

  "ciudades-y-cultura": {
    slug: "ciudades-y-cultura",
    eyebrow: "Venezuela lived",
    title: "Cities and culture",
    intro:
      "Nine out of ten Venezuelans live in cities, and each one faces something different: the sea, the lake, the mountains, the plains or the river. The country's culture is born of that difference.",
    hero: {
      src: "/images/caracas-avila.jpg",
      alt: "Caracas at the foot of the Ávila mountain",
    },
    meta: {
      title: "Cities and culture of Venezuela | Mrs Venezuela",
      description:
        "Caracas, Maracaibo, Barquisimeto, Coro and Puerto Cabello; the heritage, music, festivals and crafts that explain Venezuela.",
    },
    indexLabel: "In this guide",
    backLabel: "Back to home",
    sections: [
      {
        slug: "venezuela-urbana",
        number: "01",
        title: "Urban Venezuela",
        lede: "Venezuela urbanised very fast: in 1936 most people lived in the countryside, and today almost nobody does. That leap, driven by oil, explains its cities, its music and much of the way it speaks.",
        layout: "prose",
      },
      {
        slug: "ciudades-que-cuentan-el-pais",
        number: "02",
        title: "Cities that tell the country",
        lede: "Eight cities, eight ways to discover Venezuela.",
        layout: "gallery",
        items: [
          {
            title: "Caracas",
            meta: "Capital District",
            text: "Caracas brings together buildings, squares and cultural life in a valley beneath the Ávila. Its modern architecture and urban spaces reveal different ways of living in and exploring Venezuela’s capital.",
            photo: { src: "/images/commons/caracas-atardecer.jpg", alt: "Caracas at sunset, with city buildings and the Ávila to the right", position: "60% 50%" },
          },
          {
            title: "Maracaibo",
            meta: "Zulia",
            text: "Maracaibo brings together lakeside life, trade and a distinctive cultural identity. The Rafael Urdaneta bridge and Zulian gaita music offer an introduction to its relationship with the water and its traditions.",
            photo: {
              src: "/images/commons/maracaibo-ciudad.jpg",
              alt: "City view of Maracaibo, with avenues and buildings",
              position: "60% 50%",
            },
          },
          {
            title: "Ciudad Bolívar",
            meta: "Bolívar",
            text: "Ciudad Bolívar preserves the memory of Angostura through streets and rooftops overlooking the Orinoco. Its old town introduces the Congress of 1819 and the river’s importance to the life of the city.",
            photo: {
              src: "/images/commons/ciudad-bolivar-historical-zone.jpg",
              alt: "Historic quarter of Ciudad Bolívar above the Orinoco river",
            },
          },
          {
            title: "Coro",
            meta: "Falcón",
            text: "Coro preserves earthen houses, courtyards and streets that reflect its colonial heritage. Together with the port of La Vela, it offers a chance to discover architecture shaped by the climate and the region.",
            photo: { src: "/images/commons/coro-calle-colonial.jpg", alt: "Street lined with colonial houses in Coro, Falcón state", position: "center" },
          },
          {
            title: "Barquisimeto",
            meta: "Lara",
            text: "Barquisimeto is a musical city and a meeting point between several Venezuelan regions. Its cathedral and devotion to the Divina Pastora reveal two different sides of the city’s architecture and traditions.",
            photo: {
              src: "/images/commons/catedral-de-barquisimeto-dia-lluvioso.jpg",
              alt: "Barquisimeto cathedral, Lara state, under a rainy sky",
            },
          },
          {
            title: "Cumaná",
            meta: "Sucre",
            text: "Cumaná brings together urban heritage and coastal life in eastern Venezuela. The basilica of Santa Inés and San Antonio de la Eminencia castle offer an introduction to different chapters of the city’s history.",
            photo: { src: "/images/commons/cumana-ciudad-mar.jpg", alt: "Aerial view of Cumaná, its buildings and Caribbean coastline", position: "70% 50%" },
          },
          {
            title: "Puerto Cabello",
            meta: "Carabobo",
            text: "Puerto Cabello combines maritime history, colonial streets and a close relationship with the sea. Between Los Lanceros and the waterfront, balconies and colourful façades invite you to discover the life of the city.",
            photo: { src: "/images/commons/puerto-cabello-los-lanceros.jpg", alt: "Los Lanceros street in Puerto Cabello’s historic quarter", position: "center" },
          },
          {
            title: "Trujillo",
            meta: "Trujillo",
            text: "Trujillo preserves narrow streets and an Andean identity shaped by its landscapes and traditions. The monument to the Virgin of Peace reflects the importance of religious devotion in this mountain city.",
            photo: {
              src: "/images/commons/trujillo-plaza-mendoza.jpg",
              alt: "Plaza Cristóbal Mendoza in the city of Trujillo",
              position: "52% 50%",
            },
          },
        ],
      },
      {
        slug: "patrimonio",
        number: "03",
        title: "Architecture that tells stories",
        lede: "What makes these places special? Their buildings reveal the art, ways of living and events that shaped Venezuela.",
        layout: "gallery",
        items: [
          {
            title: "University City",
            meta: "Caracas · Art and architecture",
            text: "Notice how murals and sculptures become part of the buildings. Carlos Raúl Villanueva brought art and architecture together on a campus where students learn among works by major artists.",
            photo: { src: "/images/commons/biblioteca-central-de-la-ciudad-universitaria-caracas.jpg", alt: "Central Library of the University City of Caracas", position: "60% 50%" },
          },
          {
            title: "Coro and its houses",
            meta: "Falcón · Earth and courtyards",
            text: "Earthen walls, courtyards and covered walkways reveal another way of building. Coro and La Vela preserve traditional techniques combining local, Spanish and Dutch influences: that blend makes them distinctive.",
            photo: { src: "/images/commons/coro-patio-ventanas-hierro.jpg", alt: "Courtyard of the Casa de las Ventanas de Hierro in Coro", position: "center" },
          },
          {
            title: "Casa de Angostura",
            meta: "Ciudad Bolívar · Independence",
            text: "Behind these balconies lies a defining story: the Congress of Angostura met here in 1819. Bolívar delivered his celebrated speech on organising the republic; this is more than an old façade.",
            photo: { src: "/images/commons/casa-congreso-angostura.jpg", alt: "Façade of the House of the Congress of Angostura in Ciudad Bolívar", position: "center" },
          },
        ],
      },
      {
        slug: "musica",
        number: "04",
        title: "Music",
        lede: "The country changes genre every few hundred kilometres.",
        layout: "facets",
        items: [
          { spotifyTrack: "joropo", title: "Joropo", meta: "UNESCO heritage, 2025", text: "Harp or bandola, cuatro and maracas. Not only from the plains: there are Andean, eastern and central variants." },
          { spotifyTrack: "gaita", title: "Gaita zuliana", meta: "Zulia", text: "Furro, tambora, charrasca and cuatro. It plays across the country every December." },
          { spotifyTrack: "calipso", title: "Calipso de El Callao", meta: "Bolívar", text: "Antillean heritage, mostly Trinidadian, that came with the gold in the 19th century. Sung in Spanish and in patois." },
          { spotifyTrack: "tambores", title: "Drums", meta: "Central coast", text: "Afro-Venezuelan rhythms tied to the patron saint festivals of the coast." },
          { spotifyTrack: "andina", title: "Andean music", meta: "Mérida, Táchira and Trujillo", text: "String and song repertoires belonging to the mountain towns." },
        ],
      },
      {
        slug: "fiestas-y-tradiciones",
        number: "05",
        title: "Festivals and traditions",
        lede: "Celebrations that bring generations together. Behind the masks, drums and processions are stories of faith and shared memory.",
        layout: "gallery",
        items: [
          {
            title: "Dancing Devils",
            meta: "Corpus Christi · UNESCO 2012",
            text: "Rooted in colonial times, this tradition brings together Catholic Corpus Christi celebrations and African and Indigenous influences. Masks and dance express the surrender of evil before good.",
            photo: {
              src: "/images/commons/diablos-yare-trajes.jpg",
              alt: "Dancing Devils of Yare wearing masks and full-length red costumes",
              position: "50% 50%",
            },
          },
          {
            title: "Zaragozas of Sanare",
            meta: "28 December · Sanare, Lara",
            text: "Rooted in devotion to the Holy Innocents, this celebration fills Sanare with music and dance. Participants take to the streets in handmade masks and colourful costumes, accompanied by songs and religious vows.",
            photo: {
              src: "/images/commons/zaragozas-sanare.jpg",
              alt: "Participants in the Zaragozas of Sanare wearing handmade masks and colourful costumes",
              position: "25% 50%",
            },
          },
          {
            title: "La Chinita",
            meta: "11 to 18 November · Maracaibo",
            text: "According to Zulia's tradition, a washerwoman found a small wooden panel bearing the Virgin's image in the lake. That devotion grew into a celebration of gaita music, faith and community.",
            photo: {
              src: "/images/commons/bajada-de-la-chinita-en-maracaibo-2023-01.jpg",
              alt: "Fireworks over the basilica during the Bajada de la Chinita in Maracaibo",
            },
          },
          {
            title: "Divina Pastora",
            meta: "14 January · Barquisimeto",
            text: "The procession began in 1856, when Barquisimeto sought protection during a cholera epidemic. Each January, the faithful renew that devotion by accompanying the Virgin from Santa Rosa.",
            photo: {
              src: "/images/commons/divina-pastora-procesion.jpg",
              alt: "Crowd accompanying the image of the Divina Pastora in Barquisimeto",
              position: "20% 50%",
            },
          },
        ],
      },
      {
        slug: "artesania-y-memoria",
        number: "06",
        title: "Crafts and memory",
        lede: "Every craft belongs to a particular place: there is no single Venezuelan craft tradition.",
        layout: "facets",
        items: [
          { title: "Basketry", text: "Plant fibres worked by indigenous peoples of the south and the west." },
          { title: "Ceramics", text: "Fired clay with different forms and uses in every region." },
          { title: "Textiles", text: "From the Guajira hammock to the wool weaving of the Andes." },
          { title: "Carving and masks", text: "Ritual and festival objects tied to local celebrations." },
        ],
      },
    ],
    closing: {
      text: "No Venezuelan city explains the country on its own. All of them together barely begin to.",
    },
    credits: [
      { title: "Caracas at sunset, with city buildings and the Ávila to the right — resized image; display crop", author: "Periodismodepaz", license: "CC BY 4.0", href: "https://commons.wikimedia.org/wiki/File:Atardecer_en_Caracas_2.jpg" },
      {
        title: "City view of Maracaibo, with avenues and buildings — resized image; display crop",
        author: "José ILIDIO Spinola",
        license: "CC BY-SA 2.0",
        href: "https://commons.wikimedia.org/wiki/File:MaracaiboView_(cropped).jpg",
      },
      { title: "Los Lanceros street in Puerto Cabello’s historic quarter — resized image; display crop", author: "Jesus Enrique Morao Blanco", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Calle_%22Los_Lanceros%22_en_Puerto_Cabello.jpg" },
      { title: "Historic quarter of Ciudad Bolívar", author: "Venecon", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Ciudad_Bol%C3%ADvar_historical_zone.jpg" },
      { title: "Street lined with colonial houses in Coro, Falcón state — resized image; display crop", author: "Grégory David Escobar Fernández", license: "CC BY 2.0", href: "https://commons.wikimedia.org/wiki/File:Calle_en_Coro_2.JPG" },
      { title: "Barquisimeto cathedral", author: "Rodolfo Pimentel", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Catedral_de_Barquisimeto_dia_lluvioso.jpg" },
      { title: "Aerial view of Cumaná, its buildings and Caribbean coastline — resized image; display crop", author: "BID Ciudades Sostenibles", license: "CC BY 2.0", href: "https://commons.wikimedia.org/wiki/File:Cumana_sucre.jpg" },
      { title: "Plaza Cristóbal Mendoza in the city of Trujillo — resized image; display crop", author: "Rjcastillo", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Plaza_Cristobal_Mendoza.jpg" },
      { title: "Dancing Devils of Yare wearing masks and full-length red costumes — resized image; display crop", author: "Josedrg08", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Danzantes_de_Yare.jpg" },
      { title: "Participants in the Zaragozas of Sanare wearing handmade masks and colourful costumes — resized image; cropped for display", author: "Rodolfo Pimentel", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Zaragozas_original.jpg" },
      { title: "Bajada de la Chinita, Maracaibo", author: "Mgta122001vzla", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Bajada_de_la_chinita_en_Maracaibo_-_2023_01.jpg" },
      { title: "The Divina Pastora during the procession in Barquisimeto, surrounded by flowers and worshippers — resized image; cropped for display", author: "Rodolfo Pimentel", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:DIVINA_PASTORA_en_la_procesi%C3%B3n_los_feligreses_tom%C3%A1ndole_fotos.jpg" },
{ title: "Central Library, University City of Caracas", author: "Jorge Andrés Paparoni Bruzual", license: "CC BY-SA 2.0", href: "https://commons.wikimedia.org/wiki/File:Biblioteca_Central_de_la_Ciudad_Universitaria._Caracas..jpg" },
      { title: "Courtyard of the Casa de las Ventanas de Hierro in Coro — resized image; display crop", author: "Janethrodri", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Patio_Casa_de_las_Ventanas_de_Hierro.jpg" },
      { title: "Façade of the House of the Congress of Angostura in Ciudad Bolívar — resized image; display crop", author: "LHommeDuMonde", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Casa_de_Angostura,_Ciudad_Bol%C3%ADvar..jpg" },
    ],
  },

  sabores: {
    slug: "sabores",
    eyebrow: "Venezuela from its table",
    title: "Flavours of Venezuela",
    intro:
      "A country can also be travelled by eating. And here there is not one cuisine but six or seven: maize rules them all, but what goes with it changes with the climate, the river and whoever landed at each port.",
    hero: {
      src: "/images/arepa.jpg",
      alt: "Freshly made Venezuelan arepas",
    },
    meta: {
      title: "Flavours of Venezuela | Mrs Venezuela",
      description:
        "Venezuelan cooking in photographs: arepa, pabellón, cachapa and hallaca, the flavours of each region, cacao, sweets, ingredients and the December table.",
    },
    indexLabel: "In this guide",
    backLabel: "Back to home",
    sections: [
      {
        slug: "una-cocina-de-muchas-regiones",
        number: "01",
        title: "A cuisine of many regions",
        lede: "There is no single Venezuelan cuisine. Maize and cassava are the common base; from there, the Andes cook with wheat and potato, the east with fish and the Llanos with beef roasted over a wood fire.",
        layout: "prose",
      },
      {
        slug: "iconos-venezolanos",
        number: "02",
        title: "Venezuelan icons",
        lede: "Six dishes almost any Venezuelan recognises, wherever they are.",
        layout: "food-dishes",
        items: [
          {
            title: "Arepa",
            meta: "The whole country · Pre-Hispanic roots",
            text: "Maize bread cooked on a budare (griddle), shared with other peoples of northern South America. Its name is often linked to “erepa”, a Cumanagoto word associated with maize. Since 1960 precooked flour has made it a daily food; it is split open and filled.",
            photo: { src: "/images/commons/arepas-tradicionales.jpg", alt: "Maize arepas cooking at a food stall in Caripe, Monagas" },
          },
          {
            title: "Pabellón criollo",
            meta: "The whole country · Lunch",
            text: "Shredded beef, black beans, white rice and tajadas of ripe plantain. It is usually considered the national dish. With a fried egg on top it is called “a caballo”; with the tajadas along the sides, “con barandas”.",
            photo: { src: "/images/commons/pabellon-criollo-venezolano.jpg", alt: "A plate of Venezuelan pabellón criollo" },
          },
          {
            title: "Cachapa",
            meta: "The whole country · Fresh maize",
            text: "A sweet batter of ground jojoto (fresh maize), cooked on a budare and folded over queso de mano. Its relative, the cachapa de hoja, is wrapped in the maize husk and boiled.",
            photo: { src: "/images/commons/cachapa-con-queso-e-mano.jpg", alt: "A cachapa folded over queso de mano" },
          },
          {
            title: "Hallaca",
            meta: "The whole country · December",
            text: "Maize dough coloured with onoto, filled with a meat stew, wrapped in plantain leaf and boiled. Documented since the 18th century, it changes with the region and the family: the Andean version, for example, usually includes chickpeas.",
            photo: { src: "/images/commons/tradicionales-hallacas.jpg", alt: "Assembling hallacas on the plantain leaf, with the stew around", position: "25% 50%" },
          },
          {
            title: "Tequeños",
            meta: "Caracas and the centre · Party snack",
            text: "Batons of white cheese wrapped in wheat dough and fried. Their name is often linked to Los Teques, although there is no documentary proof. By the mid-20th century they were already common at parties.",
            photo: { src: "/images/commons/tequenos-venezolanos.jpg", alt: "Fried tequeños, one broken open to show the cheese", position: "90% 50%" },
          },
          {
            title: "Empanada",
            meta: "The whole country · Breakfast",
            text: "Iberian in origin, in Venezuela it is made with maize dough and fried. It is filled with shredded beef, cheese or black beans; in Margarita and the east, the cazón (small shark) version is a classic.",
            photo: { src: "/images/commons/empanadas-de-venezuela.jpg", alt: "Venezuelan maize-flour empanadas on a glass plate, one of them bitten", position: "100% 50%" },
          },
        ],
      },
      {
        slug: "sabores-por-region",
        number: "03",
        title: "Flavours by region",
        lede: "The same table changes completely depending on where you sit down.",
        layout: "food-regions",
        items: [
          {
            title: "Andes",
            meta: "Mérida · Táchira · Trujillo",
            dishes: ["Pastelitos andinos", "Pisca andina", "Arepa de trigo", "Trout"],
            text: "Cold-climate cooking: potato, dairy and wheat, a cereal whose colonial cultivation is associated above all with these mountains. Trout, introduced in 1937, is common today.",
            photo: { src: "/images/commons/pastelitos-andinos.jpg", alt: "Freshly fried pastelitos andinos in a basket" },
          },
          {
            title: "The East",
            meta: "Sucre · Anzoátegui · Nueva Esparta · Monagas",
            dishes: ["Empanada de cazón", "Pastel de chucho", "Fried fish"],
            text: "The coast and fishing define the table. In Margarita, pastel de chucho, attributed to the cook Rubén Santiago in the 1980s, derives from the eastern cuajado.",
            photo: { src: "/images/commons/pescado-frito-con-arepa.jpg", alt: "Fried fish with arepa, tomato and lime, Margarita style" },
          },
          {
            title: "Zulia",
            meta: "Maracaibo and the Lake",
            dishes: ["Patacón", "Mandoca", "Huevos chimbos"],
            text: "Around Lake Maracaibo lies one of the country's great dairy regions. Ripe plantain and cheese turn up in many preparations, sweet ones included.",
            photo: { src: "/images/commons/mandocas-maracuchas.jpg", alt: "Mandoca from Maracaibo, a fried ring of maize and ripe plantain" },
          },
          {
            title: "Llanos",
            meta: "Apure · Barinas · Guárico · Portuguesa · Cojedes",
            dishes: ["Carne en vara", "Pisillo", "Carato"],
            text: "Cattle-country cooking of the savannah, with beef roasted over a wood fire and plantain. During Holy Week people eat capybara, which may only be hunted with an official permit.",
            photo: { src: "/images/commons/entreverado-llanero.jpg", alt: "Carne en vara and entreverado roasting beside the fire on a Llanos cattle ranch", position: "65% 50%" },
          },
          {
            title: "Guayana",
            meta: "Bolívar · Amazonas · Delta Amacuro",
            dishes: ["Sapoara", "River fish", "Catara"],
            text: "The bitter cassava of the Indigenous peoples lives alongside fish from the Orinoco. In August, the sapoara catch opens the Orinoco Fair in Ciudad Bolívar.",
            photo: { src: "/images/commons/pescado-de-rio-amazonas.jpg", alt: "River fish on a plantain leaf, with cassava and salad, in Amazonas" },
          },
          {
            title: "Central coast",
            meta: "Aragua · Carabobo · La Guaira · Miranda",
            dishes: ["Fish with tostones", "Fish sancocho", "Cafunga"],
            text: "A shoreline of fishermen and old cacao estates, with a deep Afro-Venezuelan heritage in Barlovento. By the sea, fish comes with tostones.",
            photo: { src: "/images/commons/pescado-frito-con-tostones.jpg", alt: "Fried fish with tostones and salad, a typical dish of the Aragua coast" },
          },
        ],
      },
      {
        slug: "cacao-y-chocolate",
        number: "04",
        title: "Cacao and chocolate",
        lede: "Venezuela grows little cacao — some 29,400 tonnes in 2024 according to FAOSTAT, 0.6% of the world total — but it is on the International Cocoa Organization's list of fine-flavour cacao.",
        layout: "food-cacao",
        photo: {
          src: "/images/commons/cacao-tostado.jpg",
          alt: "Roasted cacao beans in a clay bowl, ready to be ground",
        },
        items: [
          {
            title: "Chuao",
            meta: "Aragua · Denomination of origin",
            text: "A village with no road, reached by boat from Choroní. Its cacao has held a denomination of origin since 2000: the country's only one for cacao, according to SAPI (2026).",
            photo: { src: "/images/commons/cacao-chuao.jpg", alt: "Cacao beans drying in the sun in the village of Chuao, Aragua state" },
          },
          {
            title: "Paria",
            meta: "Sucre",
            text: "On the peninsula, Trinitario cacao predominates, sold under the name Río Caribe, after the town of the same name.",
            photo: { src: "/images/commons/cacao-paria.jpg", alt: "Ripe cacao pods on the trunk, on the Paria peninsula" },
          },
          {
            title: "Sur del Lago",
            meta: "Zulia · Mérida",
            text: "At the foot of the Andes grows Porcelana, a criollo cacao whose beans are white when fresh.",
            photo: { src: "/images/commons/cacao-santa-apolonia.jpg", alt: "Cacao beans grown in Santa Apolonia, in the Sur del Lago of Mérida" },
          },
        ],
      },
      {
        slug: "dulces-panes-y-bebidas",
        number: "05",
        title: "Sweets, breads and drinks",
        lede: "What is eaten mid-morning, what goes with coffee and what is drunk in the heat.",
        layout: "food-groups",
        groups: [
          {
            title: "Sweets",
            items: [
              {
                title: "Quesillo",
                meta: "The whole country",
                text: "The Venezuelan take on flan, made with whole eggs and condensed milk over caramel. Its name is usually explained by its small holes, like those of a cheese.",
                photo: { src: "/images/commons/quesillo.jpg", alt: "Venezuelan quesillo with the caramel on top, in a glass dish" },
              },
              {
                title: "Dulce de lechosa",
                meta: "December",
                text: "Strips of green papaya cooked in papelón or sugar syrup, sometimes with cloves. It is traditionally made for the Christmas table.",
                photo: { src: "/images/commons/dulce-de-lechosa.jpg", alt: "Dulce de lechosa in golden syrup, served on a plate" },
              },
              {
                title: "Bienmesabe",
                meta: "The whole country",
                text: "Sponge cake soaked in liqueur, layered with a coconut and egg-yolk cream and topped with meringue. It is usually finished with cinnamon.",
                photo: { src: "/images/commons/bienmesabe.jpg", alt: "Bienmesabe cake covered in grated coconut and stripes of cinnamon" },
              },
            ],
          },
          {
            title: "Breads",
            items: [
              {
                title: "Golfeado",
                meta: "Sweet bread",
                text: "A spiral of dough with papelón, white cheese and aniseed. Tradition places it in the bakeries of Petare in the early 20th century.",
                photo: { src: "/images/commons/golfeado-4.jpg", alt: "Golfeado seen from above, its spiral covered in papelón" },
              },
              {
                title: "Cachito",
                meta: "Bakery",
                text: "Bread rolled around ham before baking. Its origin is undocumented; among the stories in circulation, one ties it to Portuguese bakers.",
                photo: { src: "/images/commons/cachito-de-jamon.jpg", alt: "A ham cachito cut in half", position: "20% 50%" },
              },
            ],
          },
          {
            title: "Drinks",
            items: [
              {
                title: "Papelón con limón",
                meta: "Homemade drink",
                text: "Papelón (unrefined cane sugar) dissolved in cold water with lime juice. It is the most common homemade drink at lunch and at food stalls.",
                photo: { src: "/images/commons/papelon-con-limon-2.jpg", alt: "A glass of papelón con limón with ice and lime slices", position: "50% 100%" },
              },
              {
                title: "Chicha",
                meta: "Rice drink",
                text: "The street version is made from rice, sweet and unfermented, and sold by chicheros. In the Andes a different, fermented one is made.",
                photo: { src: "/images/commons/chicha.jpg", alt: "Venezuelan rice chicha served in a glass, with cinnamon on top", position: "90% 50%" },
              },
              {
                title: "Tizana",
                meta: "Fruit drink",
                text: "Chopped fruit in orange or watermelon juice, with grenadine, which gives it its reddish colour. It is sold all year round.",
                photo: { src: "/images/commons/tizana.jpg", alt: "A glass of red tizana with pieces of fruit", position: "50% 80%" },
              },
            ],
          },
        ],
      },
      {
        slug: "migraciones-en-la-mesa",
        number: "06",
        title: "Migrations at the table",
        lede: "Part of what is eaten here today was brought by people who arrived by ship or crossed the border.",
        layout: "food-influences",
        items: [
          {
            title: "Europe",
            meta: "Spain · Portugal · Italy",
            text: "Spain laid the colonial foundation, reinforced by Canary Islanders in the mid-20th century. The Portuguese, many from Madeira, shaped the food trade; Italians helped popularise pasta.",
            photo: { src: "/images/commons/panaderia-la-asuncion.jpg", alt: "Freshly baked bread on the shelves of a bakery in La Asunción, Margarita" },
          },
          {
            title: "The Levant",
            meta: "Syria · Lebanon",
            text: "Syrians and Lebanese arrived from the second half of the 19th century, with new waves in the 20th. With them, quibbe and tabule became commonplace.",
            photo: { src: "/images/commons/comida-arabe-maracaibo.jpg", alt: "Quibbe, stuffed vine leaves, tabule and hummus at a restaurant in Maracaibo" },
          },
          {
            title: "Neighbouring countries",
            meta: "Colombia · Trinidad and the Antilles",
            text: "With Colombia the table is shared: there are arepas on both sides of the border, each made its own way. In El Callao, Antilleans who came with the gold left behind calalú.",
            photo: { src: "/images/commons/arepa-de-chocolo.jpg", alt: "Colombian arepa de chócolo filled with cheese" },
          },
        ],
      },
      {
        slug: "ingredientes-de-venezuela",
        number: "07",
        title: "Ingredients of Venezuela",
        lede: "Seven products that underpin almost everything above.",
        layout: "food-pantry",
        items: [
          {
            title: "Maize",
            meta: "Indigenous base",
            text: "The central cereal of Venezuelan cooking, of Indigenous origin: it is ground dry or used fresh, as jojoto.",
            dishes: ["Arepa", "Hallaca", "Cachapa", "Bollos"],
            photo: { src: "/images/commons/maiz.jpg", alt: "Husked ears of yellow maize" },
          },
          {
            title: "Cassava",
            meta: "Bitter cassava · Casabe",
            text: "Once pressed, bitter cassava yields casabe, a bread of Indigenous roots that UNESCO recognised in 2024 in a five-country nomination.",
            dishes: ["Casabe", "Mañoco"],
            photo: { src: "/images/commons/esto-es-casabe.jpg", alt: "Casabe rounds drying on poles beside the wood fire", position: "72% 40%" },
          },
          {
            title: "Plantain",
            meta: "Green or ripe",
            text: "It reached the Caribbean with the Europeans in the early 16th century and is now on almost every table.",
            dishes: ["Tajadas", "Tostones", "Patacón", "Pastel de chucho"],
            photo: { src: "/images/commons/platanos-chuao.jpg", alt: "A bunch of green plantains on the banks of the Chuao river", position: "67% 50%" },
          },
          {
            title: "Ají dulce",
            meta: "Seasoning",
            text: "A Capsicum chinense with almost no heat, of the same species as some very hot chillies.",
            dishes: ["Hallaca", "Stews", "Fish"],
            photo: { src: "/images/commons/aji-dulce.jpg", alt: "Green, red and orange ajíes dulces at a market" },
          },
          {
            title: "Papelón",
            meta: "Sweetener",
            text: "Sugar-cane juice boiled down and set in blocks; in other countries it is called panela.",
            dishes: ["Papelón con limón", "Golfeado", "Coconut sweets"],
            photo: { src: "/images/commons/papelon.jpg", alt: "Stacked blocks of papelón" },
          },
          {
            title: "Cacao",
            meta: "Historic crop",
            text: "It was colonial Venezuela's main export in the 17th and 18th centuries.",
            dishes: ["Chocolate", "Hot chocolate"],
            photo: { src: "/images/commons/mazorca-de-cacao.jpg", alt: "An open cacao pod with its beans, in Delta Amacuro" },
          },
          {
            title: "Cheeses",
            meta: "De mano · Guayanés · Telita · Llanero",
            text: "Soft and fresh: queso de mano, guayanés and telita; hard and salty: llanero, grated over black beans and arepas.",
            dishes: ["Cachapa", "Arepa", "Black beans"],
            photo: { src: "/images/commons/queso-llanero.jpg", alt: "A wheel of queso llanero on a wooden board" },
          },
        ],
      },
      {
        slug: "la-mesa-de-diciembre",
        number: "08",
        title: "The December table",
        lede: "On Christmas Eve and New Year's Eve the hallaca shares the table with three other classics, and ponche crema arrives for the toast.",
        layout: "food-table",
        photo: {
          src: "/images/commons/plato-tipico-navideno.jpg",
          alt: "Venezuelan Christmas plate with hallaca, pan de jamón, ensalada de gallina and pernil",
        },
        items: [
          {
            title: "Hallaca",
            text: "Made as a family and eaten throughout December.",
            photo: { src: "/images/commons/hallacas-amarradas.jpg", alt: "Two hallacas tied up in plantain leaf" },
          },
          {
            title: "Pan de jamón",
            text: "Filled with ham, raisins and olives. It is attributed to the Ramella bakery in Caracas, in the early 20th century.",
            photo: { src: "/images/commons/pan-de-jamon.jpg", alt: "A slice of pan de jamón with its spiral of ham and olives" },
          },
          {
            title: "Pernil",
            text: "Leg of pork marinated and roasted for hours; the leftovers usually end up in bread.",
            photo: { src: "/images/commons/pernil-horneado.jpg", alt: "Roast leg of pork in its tray" },
          },
          {
            title: "Ensalada de gallina",
            text: "Potato, carrot and shredded hen with mayonnaise, a relative of Russian salad.",
            photo: { src: "/images/commons/ensalada-de-gallina.jpg", alt: "Ensalada de gallina with peas at a Christmas dinner" },
          },
        ],
      },
    ],
    closing: {
      text: "A country is also told by what it puts on the table.",
    },
    credits: [
      { title: "Arepas (cover)", author: "Steven Depolo", license: "CC BY 2.0", href: "https://commons.wikimedia.org/wiki/File:Arepitas_Food_Macro.jpg" },
      { title: "Traditional arepas in Caripe", author: "Wilmeris Hernández", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Arepas_Tradicionales.jpg" },
      { title: "Pabellón criollo", author: "Wilfredor", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Pabell%C3%B3n_Criollo_Venezolano.jpg" },
      { title: "Cachapa with queso de mano", author: "Jonathan de Almeida", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Cachapa_Con_Queso_e_Mano.JPG" },
      { title: "Traditional hallacas", author: "Tomás Rojas", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Tradicionales_Hallacas.jpg" },
      { title: "Venezuelan tequeños", author: "Rodolfo Pimentel", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Teque%C3%B1os_Venezolanos.jpg" },
      { title: "Venezuelan empanadas", author: "Laura Fiorucci", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Empanadas_de_Venezuela.jpg" },
      { title: "Pastelitos andinos", author: "Julio Sifontes", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Pastelitos_Andinos.jpg" },
      { title: "Fried fish with arepa", author: "Wilfredor", license: "CC0", href: "https://commons.wikimedia.org/wiki/File:Plato_de_pescado_frito_con_arepa.jpg" },
      { title: "Mandocas from Maracaibo", author: "DamianFinol", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Mandocas_maracuchas.jpg" },
      { title: "Carne en vara and entreverado llanero", author: "Douglas Bracho", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Un_entreverado_bien_llanero.JPG" },
      { title: "River fish in Amazonas (brightened)", author: "Rasiel Morella", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Comida_t%C3%ADpica,_Amazonas.JPG" },
      { title: "Fried fish with tostones", author: "Menu1973", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Plato_tipico_en_Maracay.jpg" },
      { title: "Roasted cacao", author: "ElmerGuevara", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Cacao_Tostado..JPG" },
      { title: "Cacao drying in Chuao", author: "Bucare2011", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Cacao_Chuao.jpg" },
      { title: "Cacao pods in Paria", author: "Luisovalles", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Cacao-fruto.jpg" },
      { title: "Cacao from Santa Apolonia, Mérida", author: "Wilfredor", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Semillas_de_cacao.jpg" },
      { title: "Venezuelan quesillo", author: "Muago", license: "CC0", href: "https://commons.wikimedia.org/wiki/File:Quesillo_venezolano_2.jpg" },
      { title: "Dulce de lechosa", author: "Muago", license: "CC0", href: "https://commons.wikimedia.org/wiki/File:Dulce_de_lechosa.jpg" },
      { title: "Bienmesabe cake", author: "Muago", license: "CC0", href: "https://commons.wikimedia.org/wiki/File:Torta_de_bienmesabe.jpg" },
      { title: "Golfeado", author: "Muago", license: "CC0", href: "https://commons.wikimedia.org/wiki/File:Golfeado_4.jpg" },
      { title: "Ham cachito", author: "Luis Miguel Cisneros", license: "CC BY 2.0", href: "https://commons.wikimedia.org/wiki/File:Cachito_de_Jam%C3%B3n.jpg" },
      { title: "Papelón con limón", author: "Muago", license: "CC0", href: "https://commons.wikimedia.org/wiki/File:Papel%C3%B3n_con_lim%C3%B3n_2.jpg" },
      { title: "Venezuelan chicha", author: "Muago", license: "CC0", href: "https://commons.wikimedia.org/wiki/File:Chicha_venezolana_2.jpg" },
      { title: "Tizana", author: "Muago", license: "CC0", href: "https://commons.wikimedia.org/wiki/File:Tizana.jpg" },
      { title: "Bakery in La Asunción", author: "Wilfredor", license: "CC0", href: "https://commons.wikimedia.org/wiki/File:Panaderia_Don_Bosco_en_la_Asuncion_12.jpg" },
      { title: "Arab food in Maracaibo (cropped)", author: "Ronaldy Lugo", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:COMIDA_ARABE_EN_MARACAIBO.JPG" },
      { title: "Arepa de chócolo", author: "John Alexis Guerra Gómez", license: "CC BY-SA 2.0", href: "https://commons.wikimedia.org/wiki/File:Arepa_de_Ch%C3%B3colo.jpg" },
      { title: "Husked maize", author: "Davidperezc77", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Maiz_Pelado.JPG" },
      { title: "Casabe", author: "Wilmeris Hernández", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Esto_es_casabe.jpg" },
      { title: "Plantains by the Chuao river", author: "Isamarvda", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Pl%C3%A1tanos_a_orillas_del_r%C3%ADo_de_Chuao.jpg" },
      { title: "Ají dulce", author: "Wilfredor", license: "CC0", href: "https://commons.wikimedia.org/wiki/File:Sweet_Pepper_Market.jpg" },
      { title: "Papelón in blocks", author: "Elifeleth", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Panela_en_cuadros.JPG" },
      { title: "Cacao pod, Delta Amacuro", author: "Grace Rengifo", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Cacao_(Delta_Amacuro).JPG" },
      { title: "Queso llanero", author: "Muago", license: "CC0", href: "https://commons.wikimedia.org/wiki/File:Queso_llanero.jpg" },
      { title: "Venezuelan Christmas plate (cropped)", author: "jonathan de Almeida", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Plato_Tipico_Navide%C3%B1o.JPG" },
      { title: "Christmas hallacas", author: "Wilfredor", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Hallaca,_Venezuelan_Christmas_food.jpg" },
      { title: "Pan de jamón", author: "Wilfredor", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Pan_de_jamon,_Venezuelan_food.jpg" },
      { title: "Roast pernil", author: "Jovannabonilla", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Pierna_de_cochino_en_salsa.JPG" },
      { title: "Ensalada de gallina, from the Christmas plate (cropped)", author: "David Hernández", license: "CC BY-SA 2.0", href: "https://commons.wikimedia.org/wiki/File:Cena_navidad_2007.jpg" },
    ],
  },
};
