import type { ThematicContent } from "./types";

/* Traducción del maestro `es.ts`. Mismos slug, mismas imágenes, mismos enlaces. */
export const thematicDe: ThematicContent = {
  "caribe-y-playa": {
    slug: "caribe-y-playa",
    eyebrow: "Venezuela am Meer",
    title: "Karibik und Strand",
    intro:
      "Fast 2.400 Kilometer karibische Küste, zwölf Inselgruppen und ein Litoral, das zwischen einem Golf und dem nächsten seinen Charakter wechselt.",
    hero: {
      src: "/images/cayo-de-agua.jpg",
      alt: "Sandbank und türkisfarbenes Wasser bei Cayo de Agua, Archipel Los Roques",
    },
    meta: {
      title: "Karibik und Strand in Venezuela | Mrs Venezuela",
      description:
        "Die Küste und die Inseln Venezuelas: Los Roques, Margarita, Morrocoy, Mochima, Choroní, Paria, La Tortuga und Isla de Plata — und wie sich das Litoral von West nach Ost verändert.",
    },
    indexLabel: "In diesem Guide",
    backLabel: "Zurück zur Startseite",
    sections: [
      {
        slug: "el-caribe-venezolano",
        number: "01",
        title: "Die venezolanische Karibik",
        lede: "Es gibt nicht eine venezolanische Küste, sondern mehrere. Sie wechselt von Dünen zu Mangroven, von Korallencayos zu Steilküsten und von offenen Golfen zu Buchten, die das Gebirge abschirmt. Dazu die Inseln, weit draußen im Meer — noch einmal etwas ganz anderes.",
        layout: "band",
        photo: {
          src: "/images/commons/morrocoy-sea-island.jpg",
          alt: "Ein Cayo im Nationalpark Morrocoy über türkisfarbenem Wasser, Bundesstaat Falcón",
        },
        items: [
          { title: "Cayos", text: "Sand- und Koralleninseln im flachen Wasser." },
          { title: "Inseln", text: "Weit draußen, Stunden entfernt per Boot oder Flugzeug." },
          { title: "Buchten", text: "Geschütztes Wasser, wenig Seegang." },
          { title: "Festlandküste", text: "Offene Strände am Fuß der Kordillere." },
        ],
      },
      {
        slug: "destinos-esenciales",
        number: "02",
        title: "Die wichtigsten Ziele",
        lede: "Acht Wege in die venezolanische Karibik, vom entlegensten Archipel bis zum Strand, der sich sonntags füllt.",
        layout: "gallery",
        items: [
          {
            title: "Los Roques",
            meta: "Bundesdependenzen",
            text: "Weiße Cayos, Lagunen und Riffe, eine halbe Flugstunde von Caracas.",
            photo: { src: "/images/commons/madrisqui.jpg", alt: "Cayo Madrisquí im Archipel Los Roques" },
            href: "/playa/los-roques",
          },
          {
            title: "Playa El Agua",
            meta: "Margarita · Nueva Esparta",
            text: "Vier Kilometer offener Sand im Norden der Insel, mit Brandung und Kokospalmen.",
            photo: { src: "/images/playa-el-agua.jpg", alt: "Playa El Agua im Nordosten der Insel Margarita" },
            href: "/playa/playa-el-agua",
          },
          {
            title: "Morrocoy",
            meta: "Nationalpark · Falcón",
            text: "Inseln, Mangroven und Küste zwischen Tucacas und Chichiriviche. Cayo Sombrero ist eines der Ziele im Park.",
            photo: { src: "/images/cayo-sombrero.jpg", alt: "Cayo Sombrero im Nationalpark Morrocoy" },
            href: "/playa/morrocoy",
          },
          {
            title: "Mochima",
            meta: "Sucre und Anzoátegui",
            text: "Grüne Inseln und Buchten in einem Nationalpark, den man im Peñero erkundet.",
            photo: { src: "/images/mochima.jpg", alt: "Bucht im Nationalpark Mochima mit einem Fischerboot" },
            href: "/playa/mochima",
          },
          {
            title: "Choroní",
            meta: "Aragua",
            text: "Ort und Strand am Ende einer Straße durch den Nebelwald des Henri Pittier.",
            photo: { src: "/images/choroni.jpg", alt: "Küste von Choroní, die Karibik am Fuß der Kordillere" },
            href: "/playa/choroni",
          },
          {
            title: "Cuyagua",
            meta: "Aragua",
            text: "Ein offener Strand mit Wellen, der bekannteste Surfstrand der Zentralküste.",
            photo: { src: "/images/cuyagua.jpg", alt: "Strand von Cuyagua an der Küste des Bundesstaates Aragua" },
            href: "/playa/cuyagua",
          },
          {
            title: "Playa Medina",
            meta: "Halbinsel Paria · Sucre",
            text: "Eine Bucht voller Kokospalmen an der feuchten Küste von Paria, fernab von allem.",
            photo: {
              src: "/images/commons/playa-medina-peninsula-paria.jpg",
              alt: "Playa Medina auf der Halbinsel Paria, Bundesstaat Sucre",
            },
            href: "/playa/playa-medina",
          },
          {
            title: "La Tortuga",
            meta: "Bundesdependenzen",
            text: "Die zweitgrößte Insel des Landes, ohne feste Bevölkerung: erreichbar per Boot oder Kleinflugzeug.",
            photo: { src: "/images/isla-la-tortuga-turquesa.jpg", alt: "Türkisfarbenes Wasser vor der Insel La Tortuga" },
            href: "/playa/isla-la-tortuga",
          },
        ],
      },
      {
        slug: "de-occidente-a-oriente",
        number: "03",
        title: "Von West nach Ost",
        lede: "Dieselbe Küste, von einem Ende des Landes zum anderen verfolgt, gleicht sich selbst nicht.",
        layout: "coastline",
        items: [
          {
            title: "Westen",
            meta: "Zulia und Falcón",
            text: "Der trockenste Abschnitt. Weite Golfe, Dünen bis ans Wasser und vor Falcón die Cayos und Mangroven von Morrocoy.",
          },
          {
            title: "Mitte",
            meta: "Carabobo, Aragua und La Guaira",
            text: "Hier fällt die Kordillere direkt in die Karibik. Kurze Buchten zwischen Nebelwaldbergen und Strände, die dem Seegang aus Norden offenstehen.",
          },
          {
            title: "Inseln",
            meta: "Nueva Esparta",
            text: "Vor der Ostküste bilden Margarita, Coche und Cubagua den einzigen Inselbundesstaat des Landes.",
          },
          {
            title: "Osten",
            meta: "Anzoátegui und Sucre",
            text: "Golfe, Halbinseln und grüneres Wasser. Mochima im Westen, Paria im Osten — und der Punkt, an dem die Karibik endet und der Atlantik beginnt.",
          },
        ],
      },
      {
        slug: "el-mar-en-numeros",
        number: "04",
        title: "Das Meer in Zahlen",
        lede: "Vier Zahlen, die schwer zu fassen sind, weil die meisten kursierenden nie sagen, was sie eigentlich messen.",
        layout: "numbers",
        items: [
          {
            value: "2.394 km",
            title: "Karibische Küste",
            text: "Von Castilletes in der Guajira bis Punta Peñas in Paria.",
            source: "Küstenzonengesetz · 2001",
          },
          {
            value: "12 + 89",
            title: "Inselgruppen",
            text: "Zwölf bilden die Bundesdependenzen; weitere 89 Inseln gehören zu den Küstenstaaten. Eine offizielle Gesamtzahl gibt es nicht.",
            source: "INE · 2025",
          },
          {
            value: "~475.000 km²",
            title: "Eigenes Meer",
            text: "Die ausschließliche Wirtschaftszone. Die Zahl ist ungefähr: mit mehreren Nachbarn sind Grenzen noch offen.",
            source: "Sea Around Us · 2015",
          },
          {
            value: "221.120 ha",
            title: "Meerespark",
            text: "Los Roques, seit 1972 geschützt, ist der größte Nationalpark des Karibischen Meeres.",
            source: "Nationalpark Archipel Los Roques",
          },
        ],
      },
      {
        slug: "venezuela-insular",
        number: "05",
        title: "Das insulare Venezuela",
        lede: "Das Land endet nicht an der Festlandküste. Draußen im Meer liegen ein Dutzend Inselgruppen, die meisten unbewohnt, und die entfernteste — Isla de Aves — mehr als fünfhundert Kilometer vom Kontinent.",
        layout: "islands",
        photo: {
          src: "/images/isla-de-coche.jpg",
          alt: "Küste der Insel Coche im Bundesstaat Nueva Esparta",
        },
        items: [
          { title: "Margarita", meta: "Nueva Esparta", text: "Die größte Insel der venezolanischen Karibik und die einzige mit Städten." },
          { title: "Coche", meta: "Nueva Esparta", text: "Zwischen Margarita und dem Festland. Eine bewohnte Gemeinde." },
          { title: "Cubagua", meta: "Nueva Esparta", text: "Hier liegen die Ruinen von Nueva Cádiz, der Stadt der Perlen." },
          { title: "Los Roques", meta: "Bundesdependenzen", text: "Seit 1972 Nationalpark und Ramsar-Gebiet: über 80 % davon ist Meer." },
          { title: "La Tortuga", meta: "Bundesdependenzen", text: "156 km² und keine feste Bevölkerung. Die zweitgrößte Insel des Landes." },
          { title: "La Blanquilla", meta: "Bundesdependenzen", text: "Ohne Zivilbevölkerung: ein Küstenwachposten und Fischer zur Saison." },
          { title: "La Orchila", meta: "Bundesdependenzen", text: "Marineluftwaffenstützpunkt mit Zugangsbeschränkung: kein Besuch ohne Genehmigung." },
          { title: "Las Aves", meta: "Bundesdependenzen", text: "Zwei Gruppen, Sotavento und Barlovento. Unbewohnt." },
          { title: "Los Testigos", meta: "Bundesdependenzen", text: "Besiedelt von Familien margaritanischer Herkunft. Eines der beiden bewohnten Archipele." },
          { title: "Los Frailes", meta: "Bundesdependenzen", text: "Zehn unbewohnte Inselchen nordöstlich von Margarita." },
        ],
      },
      {
        slug: "antes-de-llegar-al-mar",
        number: "06",
        title: "Bevor du ans Meer kommst",
        lede: "Vier Dinge, über die man sich im Klaren sein sollte.",
        layout: "tips",
        items: [
          { title: "Sonne", text: "Nahe dem Äquator brennt die Sonne auch bei Bewölkung. Sonnenschutz, Schatten und Wasser." },
          { title: "Meer", text: "Seegang und Strömungen wechseln stark von Strand zu Strand und von Tag zu Tag. Frag am Ufer nach." },
          { title: "Zugang", text: "Die Inseln und viele Cayos erreicht man nur über See. Bestätige Hin- und Rückfahrt vor dem Einsteigen." },
          { title: "Schutzgebiete", text: "Los Roques, Morrocoy und Mochima sind Nationalparks: Zelten und anderes braucht eine Genehmigung von Inparques." },
        ],
      },
    ],
    finalPhoto: {
      src: "/images/commons/dos-mosquises.jpg",
      alt: "Luftbild des Cayo Dos Mosquises in Los Roques, umgeben von Riffen und Sandbänken",
    },
    closing: {
      text: "Ein ganzes Land vor der Karibik — und hunderte verschiedene Wege, ans Meer zu kommen.",
    },
    credits: [
      {
        title: "Cayo Madrisquí, Los Roques",
        author: "Wilfredor",
        license: "CC BY-SA 4.0",
        href: "https://commons.wikimedia.org/wiki/File:Madrisqui.jpg",
      },
      {
        title: "Playa Medina, Halbinsel Paria",
        author: "Alejandro Solo",
        license: "CC BY-SA 4.0",
        href: "https://commons.wikimedia.org/wiki/File:Playa_Medina_Peninsula_Paria.jpg",
      },
      {
        title: "Nationalpark Morrocoy",
        author: "Regisrob",
        license: "CC BY 3.0",
        href: "https://commons.wikimedia.org/wiki/File:Morrocoy_sea_island.jpg",
      },
      {
        title: "Cayo Dos Mosquises, Los Roques",
        author: "Berrucomons",
        license: "CC BY-SA 3.0",
        href: "https://commons.wikimedia.org/wiki/File:Dos_Mosquises.jpg",
      },
    ],
  },

  "montana-y-paramo": {
    slug: "montana-y-paramo",
    eyebrow: "Venezuela in der Höhe",
    title: "Berge und Páramo",
    intro:
      "Das tropische Land hat auch Schnee, eisige Lagunen und Dörfer auf dreitausend Metern. Die venezolanischen Anden sind das Nordende der Kordillere, und die Landschaft ändert sich mit jeder Stunde Aufstieg.",
    hero: {
      src: "/images/pico-bolivar.jpg",
      alt: "Pico Bolívar, der höchste Gipfel Venezuelas, in der Sierra Nevada von Mérida",
    },
    meta: {
      title: "Berge und Páramo in Venezuela | Mrs Venezuela",
      description:
        "Die venezolanischen Anden: Mérida, Táchira und Trujillo, der Pico Bolívar, die Sierra Nevada, die Páramos, ihre Dörfer und Lagunen.",
    },
    indexLabel: "In diesem Guide",
    backLabel: "Zurück zur Startseite",
    sections: [
      {
        slug: "venezuela-en-altura",
        number: "01",
        title: "Venezuela in der Höhe",
        lede: "Venezuela besteht nicht nur aus Küste und Ebene. Die Kordillere von Mérida schließt die Anden im Norden ab und erreicht am Pico Bolívar 4.978 Meter; die Küstenkordillere hebt den Ávila über Caracas, und im Südosten bilden die Tepuis Berge ganz anderer Art. Dazwischen liegen gemäßigte Täler, Nebelwälder und Páramos.",
        layout: "prose",
      },
      {
        slug: "los-andes",
        number: "02",
        title: "Die Anden",
        lede: "Drei Bundesstaaten, verbunden durch dieselbe Kordillere und durch Wege, die sie seit Jahrhunderten queren.",
        layout: "gallery",
        items: [
          {
            title: "Mérida",
            meta: "Gipfel und Páramos",
            text: "Die größte Höhe des Landes, die höchste Seilbahn der Welt und ein Netz von Bergdörfern.",
            photo: { src: "/images/commons/teleferico-del-pico-espejo.jpg", alt: "Die Seilbahn von Mérida beim Aufstieg zwischen den Bergen" },
            href: "/estado/merida",
          },
          {
            title: "Táchira",
            meta: "Grenze und Gebirge",
            text: "Landwirtschaftliche Täler, kühle Ortschaften und das Landtor nach Kolumbien.",
            photo: {
              src: "/images/commons/paramo-las-coloradas-tachira.jpg",
              alt: "Lagune, Frailejones und Wanderer im Páramo Las Coloradas, Bundesstaat Táchira",
            },
            href: "/estado/tachira",
          },
          {
            title: "Trujillo",
            meta: "Dörfer und Erinnerung",
            text: "Bewohnte Berge, Kaffee und Aussichtspunkte über das Nordende der Kordillere.",
            photo: {
              src: "/images/states/trujillo.jpg",
              alt: "Denkmal der Jungfrau des Friedens über der Stadt Trujillo",
            },
            href: "/estado/trujillo",
          },
        ],
      },
      {
        slug: "lugares-en-las-alturas",
        number: "03",
        title: "Orte in der Höhe",
        lede: "Vier Namen, um die Kordillere zu lesen.",
        layout: "gallery",
        items: [
          {
            title: "Pico Bolívar",
            meta: "4.978 m · Mérida",
            text: "Der höchste Gipfel Venezuelas. Sein Aufstieg ist Alpinismus, keine Wanderung.",
            photo: {
              src: "/images/commons/pico-bolivar-al-desnudo-en-dia-soleado-y-despejado.jpg",
              alt: "Der wolkenfreie Pico Bolívar an einem sonnigen Tag",
            },
            href: "/montana/pico-bolivar",
          },
          {
            title: "Pico Humboldt",
            meta: "4.940 m · Mérida",
            text: "Der zweithöchste Gipfel des Landes, mit dem letzten Gletscher, den Venezuela noch hatte.",
            photo: {
              src: "/images/commons/flanco-norte-del-pico-humboldt.jpg",
              alt: "Nordflanke des Pico Humboldt in der Sierra Nevada von Mérida",
            },
          },
          {
            title: "Sierra de La Culata",
            meta: "Mérida",
            text: "Die andere große Sierra Méridas, mit offenem Páramo und nacktem Fels.",
            photo: { src: "/images/commons/picos-en-la-culata.jpg", alt: "Gipfel der Sierra de La Culata, Bundesstaat Mérida" },
          },
          {
            title: "Pico Espejo",
            meta: "4.765 m · Mérida",
            text: "Die letzte Station der Seilbahn Mukumbarí, der höchsten und längsten der Welt.",
            photo: {
              src: "/images/merida-pico-espejo.png",
              alt: "Station Pico Espejo der Seilbahn Mukumbarí",
            },
          },
        ],
      },
      {
        slug: "vida-en-el-paramo",
        number: "04",
        title: "Leben im Páramo",
        lede: "Über dem Wald und unter dem Schnee liegt eine eigene Welt: kalt, feucht und langsam.",
        layout: "band",
        photo: {
          src: "/images/commons/paramo-1.jpg",
          alt: "Frailejones in einem Páramo der venezolanischen Anden",
        },
        items: [
          { title: "Frailejones", text: "Pflanzen mit samtigen Blättern, die das Wasser des Nebels halten." },
          { title: "Lagunen", text: "Glazialen Ursprungs, kalt und klar." },
          { title: "Landwirtschaft", text: "Kartoffeln, Weizen, Karotten und Knoblauch am Hang." },
          { title: "Dörfer", text: "Ziegeldächer und Plätze auf über zweitausend Metern." },
        ],
      },
      {
        slug: "cultura-andina",
        number: "05",
        title: "Andine Kultur",
        lede: "Eine andere Art zu bauen, zu säen und zu leben. Und zu essen: Pisca andina, Weizen, Kartoffeln, geräucherte Käse und Milchsüßigkeiten.",
        layout: "gallery",
        items: [
          {
            title: "Die Dörfer",
            meta: "Apartaderos · Mucuchíes · Jají",
            text: "Ziegeldächer im Talgrund, auf über dreitausend Metern.",
            photo: {
              src: "/images/commons/vista-del-pueblo-de-apartaderos.jpg",
              alt: "Blick auf das Andendorf Apartaderos, Bundesstaat Mérida",
            },
          },
          {
            title: "Der Platz",
            meta: "Architektur",
            text: "Weiß gekalkte Kirche, gepflasterter Platz, Berg dahinter. Das Muster wiederholt sich im ganzen Páramo.",
            photo: {
              src: "/images/commons/plaza-bolivar-de-los-nevados.jpg",
              alt: "Plaza Bolívar im Dorf Los Nevados, in den Anden von Mérida",
            },
          },
          {
            title: "Die Aussaat",
            meta: "Landwirtschaft in der Höhe",
            text: "Kartoffeln, Weizen und Gemüse auf Terrassen am Hang.",
            photo: { src: "/images/commons/siembra-y-pueblo.jpg", alt: "Felder am Hang neben einem Andendorf" },
          },
        ],
      },
      {
        slug: "antes-de-subir",
        number: "06",
        title: "Bevor du aufsteigst",
        lede: "Die Höhe verzeiht keine Eile.",
        layout: "tips",
        items: [
          { title: "Höhe", text: "Steige in Etappen und schlafe eine Nacht auf mittlerer Höhe, bevor du weitergehst." },
          { title: "Kälte", text: "Nimm Schichten mit. Im Páramo kann es nachts frieren, auch nach einem sonnigen Tag." },
          { title: "Sonne", text: "Die Strahlung nimmt mit der Höhe zu: Sonnencreme, Hut und Brille, auch bei Nebel." },
          { title: "Vorbereitung", text: "Die Schneegipfel verlangen Bergführer, technische Ausrüstung und Erfahrung." },
        ],
      },
    ],
    closing: {
      text: "Im Gebirge steigt man langsam. Nur so kommt man oben an und versteht unterwegs, was man da eigentlich sieht.",
    },
    credits: [
      {
        title: "Páramo Las Coloradas, Bundesstaat Táchira",
        author: "Nackort",
        license: "CC BY-SA 3.0",
        href: "https://commons.wikimedia.org/wiki/File:Paramo_Andino_Estado_Tachira.jpg",
      },
      {
        title: "Pico Bolívar an einem klaren Tag",
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
        title: "Seilbahn zum Pico Espejo",
        author: "Ivan Carvajal",
        license: "CC BY-SA 3.0",
        href: "https://commons.wikimedia.org/wiki/File:Telef%C3%A9rico_del_Pico_Espejo.JPG",
      },
      { title: "Frailejones im Páramo", author: "Adolfo (Ajerit)", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Paramo_1.jpg" },
      { title: "Gipfel in La Culata", author: "Arnaldo Noguera Sifontes", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Picos_en_La_Culata.jpg" },
      { title: "Nordflanke des Pico Humboldt", author: "Massieljc", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Flanco_norte_del_Pico_Humboldt.jpg" },
      { title: "Dorf Apartaderos", author: "Rjcastillo", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Vista_del_pueblo_de_Apartaderos.jpg" },
      { title: "Plaza Bolívar, Los Nevados", author: "José Alfaro", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Plaza_Bolivar_de_Los_Nevados.jpg" },
      { title: "Felder und Dorf, Anden von Mérida", author: "José Alfaro", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Siembra_y_pueblo.jpg" },
    ],
  },

  "selva-y-rios": {
    slug: "selva-y-rios",
    eyebrow: "Das Land der großen Wasser",
    title: "Regenwald und Flüsse",
    intro:
      "Flüsse verbinden Städte und Gemeinschaften, Wälder bedecken den Süden, Felsen erzählen von ferner Vergangenheit. In diesem Venezuela prägt das Wasser Landschaft und Alltag.",
    hero: {
      src: "/images/commons/cano-zorro-15020517430.jpg",
      alt: "Caño Zorro inmitten der Vegetation von Amazonas",
      position: "center 40%",
    },
    meta: {
      title: "Regenwald und Flüsse Venezuelas | Mrs Venezuela",
      description:
        "Der Orinoco, der venezolanische Amazonas, das Delta, Guayana und Canaima: die großen Flüsse, die Wälder und die Völker, die dort leben.",
    },
    indexLabel: "In diesem Guide",
    backLabel: "Zurück zur Startseite",
    sections: [
      {
        slug: "un-pais-de-grandes-aguas",
        number: "01",
        title: "Ein Land der großen Wasser",
        lede: "Der Orinoco fließt rund 2.140 Kilometer, sein Einzugsgebiet bedeckt mehr als vier Fünftel Venezuelas. Um ihn herum ordnen sich die Llanos, Guayana und das Delta: hier durchquert das Wasser die Landschaft nicht, es organisiert sie.",
        layout: "prose",
      },
      {
        slug: "el-orinoco",
        number: "02",
        title: "Der Orinoco",
        lede: "Der Fluss, der das Land erklärt.",
        layout: "band",
        photo: {
          src: "/images/commons/panoramica-del-rio-orinoco-en-amazonas.jpg",
          alt: "Panorama eines breiten Abschnitts des Orinoco in Amazonas",
        },
        items: [
          { title: "Geografie", text: "Er entspringt in der Sierra Parima und erreicht den Atlantik über ein Delta aus Tausenden Armen." },
          { title: "Geschichte", text: "Er war Zugang, Grenze und Weg der Unabhängigkeit: Angostura liegt an seinem Ufer." },
          { title: "Leben", text: "Seine Ufer ernähren Fischerei, Landwirtschaft, Städte und indigene Gemeinschaften." },
        ],
      },
      {
        slug: "amazonas",
        number: "03",
        title: "Amazonas",
        lede: "Der nach Bolívar größte und der am dünnsten besiedelte Bundesstaat: Wald, Flüsse und uralter Fels. Puerto Ayacucho ist sein Tor; dahinter misst man Entfernungen in Stunden auf dem Wasser.",
        layout: "feature",
        photo: {
          src: "/images/commons/rio-sipapo-amazonas.jpg",
          alt: "Der Fluss Sipapo, umgeben von Regenwald im Bundesstaat Amazonas",
        },
        items: [
          { title: "Wald", text: "Durchgehender Regenwald mit einer der größten biologischen Vielfalt des Kontinents." },
          { title: "Fels", text: "Berge und Tepuis des Guayana-Schildes ragen aus der Vegetation." },
          { title: "Guide zum Bundesstaat", href: "/estado/amazonas" },
        ],
      },
      {
        slug: "delta-del-orinoco",
        number: "04",
        title: "Orinoco-Delta",
        lede: "Vor dem Atlantik teilt sich der Fluss in Hunderte Arme, Inseln und Mangroven. Es ist angestammtes Gebiet der Warao, die dort lebten, lange bevor es Venezuela gab.",
        layout: "band",
        photo: {
          src: "/images/commons/delta-orinoco-atardecer.jpg",
          alt: "Sonnenuntergang über dem Wasser des Orinoco-Deltas",
        },
        items: [
          { title: "Wasserarme", text: "Flussarme, die die Straßen ersetzen." },
          { title: "Mangroven", text: "Amphibische Wälder zwischen Süß- und Salzwasser." },
          { title: "Moriche-Palme", text: "Die Palme, die Nahrung, Faser und Wohnraum liefert." },
          { title: "Gezeiten", text: "Der Atlantik kommt und geht zweimal am Tag." },
        ],
      },
      {
        "slug": "guayana",
        "number": "05",
        "title": "Guayana",
        "lede": "Flüsse, Städte am Wasser, Savannen und Wälder: vier Zugänge zur venezolanischen Guayana.",
        "layout": "gallery",
        "items": [
          {
            "title": "Der Caroní",
            "meta": "Ciudad Guayana",
            "text": "Der große Nebenfluss des Orinoco, mit Fällen wie La Llovizna kurz vor der Mündung.",
            "photo": {
              "src": "/images/commons/la-llovizna-1.jpg",
              "alt": "Wasserfall La Llovizna am Río Caroní, Ciudad Guayana"
            }
          },
          {
            "title": "Der Orinoco",
            "meta": "Ciudad Bolívar",
            "text": "Am Ufer des einstigen Angostura verbindet der Fluss Landschaft, Geschichte und städtisches Leben.",
            "photo": {
              "src": "/images/commons/ciudad-bolivar-historical-zone.jpg",
              "alt": "Ciudad Bolívar und der Orinoco mit der Angostura-Brücke im Hintergrund"
            }
          },
          {
            "title": "La Gran Sabana",
            "meta": "Bolívar",
            "text": "Hochsavanne zwischen Tepuis, mit dunklen Flüssen und Wasserfällen am Weg.",
            "photo": {
              "src": "/images/commons/la-gran-sabana.jpg",
              "alt": "Landschaft der Gran Sabana mit Tepuis im Hintergrund"
            }
          },
          {
            "title": "Canaima",
            "meta": "Welterbe",
            "text": "Drei Millionen Hektar Tepuis, Wald und Savanne; darin liegt der Salto Ángel.",
            "photo": {
              "src": "/images/salto-angel.jpg",
              "alt": "Salto Ángel, der vom Auyantepui stürzt"
            }
          }
        ]
      },
      {
        "slug": "pueblos-y-territorio",
        "number": "06",
        "title": "Völker und Territorium",
        "lede": "Völker mit eigenen Sprachen, Wissensbeständen und Organisationsformen. Ihre Gebiete kennenzulernen heißt, den Gemeinschaften zuzuhören und ihre Entscheidungen zu respektieren.",
        "layout": "list",
        "items": [
          {
            "title": "Pemón",
            "meta": "Bolívar",
            "text": "Gran Sabana und Caroní-Becken. Sprache und mündliche Überlieferungen gehören zum Gedächtnis dieses Gebiets."
          },
          {
            "title": "Warao",
            "meta": "Delta Amacuro",
            "text": "Das Delta ist ihr angestammtes Gebiet; Bootsfahrt und das Weben von Moriche-Palmfasern gehören zu ihrer Kultur."
          },
          {
            "title": "Ye'kwana",
            "meta": "Bolívar und Amazonas",
            "text": "Die Einzugsgebiete des Caura und oberen Ventuari. Bootsfahrt und Korbflechterei verbinden Wissen und Alltag."
          },
          {
            "title": "Uwottüja",
            "meta": "Amazonas",
            "text": "Mittlerer Orinoco sowie Sipapo, Autana und Cuao. Auch als Piaroa bekannt, bewahren sie ihre eigene Sprache und ihr Wissen."
          }
        ]
      },
      {
        "slug": "naturaleza",
        "number": "07",
        "title": "Natur",
        "lede": "Vier durch Wasser verbundene Lebensräume, jeder mit eigenem Leben.",
        "layout": "gallery",
        "items": [
          {
            "title": "Flüsse",
            "meta": "Wasser in Bewegung",
            "text": "Wasserarme, Stromschnellen und Fälle verbinden unterschiedliche Landschaften. Hier zeigt die Quebrada de Jaspe ihr felsiges Bett.",
            "photo": {
              "src": "/images/commons/gran-sabana-quebrada-de-jaspe-i-1.jpg",
              "alt": "Quebrada de Jaspe in der Gran Sabana"
            }
          },
          {
            "title": "Wälder",
            "meta": "Amazonas",
            "text": "Vegetation säumt die Ufer und beschattet den Boden. Wasser und Wald bilden eine gemeinsame Landschaft.",
            "photo": {
              "src": "/images/commons/cano-zorro-15020517430.jpg",
              "alt": "Klarer Bach über rotem Fels im Wald von Amazonas"
            }
          },
          {
            "title": "Tepuis",
            "meta": "Guayana-Schild",
            "text": "Tafelberge aus altem Gestein mit besonderen Lebensräumen und Arten, etwa der Kukenán.",
            "photo": {
              "src": "/images/commons/kukenan-tepuy.jpg",
              "alt": "Tepui Kukenán zwischen Wolken"
            }
          },
          {
            "title": "Artenvielfalt",
            "meta": "Wälder des Südens",
            "text": "Vögel, Insekten und Pflanzen teilen den Wald. Der Weißbrusttukan ist eine seiner vielen Arten.",
            "photo": {
              "src": "/images/commons/piapoco-de-garganta-blanca-ramphastos-tucanus-cuvieri.jpg",
              "alt": "Weißkehltukan zwischen den Blättern"
            }
          }
        ]
      },
    ],
    closing: {
      text: "Hier durchquert das Wasser das Land nicht. Es organisiert es: Es entscheidet, wo man lebt, wie man reist und wovon man isst.",
    },
    credits: [
      { title: "Historisches Viertel von Ciudad Bolívar", author: "Venecon", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Ciudad_Bol%C3%ADvar_historical_zone.jpg" },
      {
        title: "Salto Hacha und Einbaum, Canaima",
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
        title: "Tepui Kukenán",
        author: "Paolo Costa Baldi",
        license: "CC BY-SA 3.0",
        href: "https://commons.wikimedia.org/wiki/File:Kukenan_tepuy.jpg",
      },
      { title: "Panorama des Orinoco", author: "Shishoxisrax", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Panor%C3%A1mica_del_r%C3%ADo_Orinoco_en_Amazonas.jpg" },
      { title: "Fluss Sipapo, Amazonas", author: "Fernando Flores", license: "CC BY-SA 2.0", href: "https://commons.wikimedia.org/wiki/File:R%C3%ADo_Sipapo_-_Sipapo_River_(12917850754).jpg" },
      { title: "Caño Zorro, Amazonas", author: "Fernando Flores", license: "CC BY-SA 2.0", href: "https://commons.wikimedia.org/wiki/File:Ca%C3%B1o_Zorro_(15020517430).jpg" },
      { title: "Orinoco-Delta", author: "Antolin Martinez A.", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Delta_del_Orinoco_110514-27.JPG" },
      { title: "Wasserfall La Llovizna, Río Caroní", author: "Daniel Méndez", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:La_Llovizna_1.jpg" },
      { title: "Weißkehltukan", author: "Fernando Flores", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Piapoco_de_garganta_blanca_(Ramphastos_tucanus_cuvieri).jpg" },
    ],
  },

  "ciudades-y-cultura": {
    slug: "ciudades-y-cultura",
    eyebrow: "Gelebtes Venezuela",
    title: "Städte und Kultur",
    intro:
      "Neun von zehn Venezolanern leben in Städten, und jede blickt woandershin: aufs Meer, den See, die Berge, die Ebene oder den Fluss. Aus diesem Unterschied entsteht die Kultur des Landes.",
    hero: {
      src: "/images/caracas-avila.jpg",
      alt: "Caracas am Fuß des Berges Ávila",
    },
    meta: {
      title: "Städte und Kultur Venezuelas | Mrs Venezuela",
      description:
        "Caracas, Maracaibo, Barquisimeto, Coro und Puerto Cabello; das Erbe, die Musik, die Feste und das Handwerk, die Venezuela erklären.",
    },
    indexLabel: "In diesem Guide",
    backLabel: "Zurück zur Startseite",
    sections: [
      {
        slug: "venezuela-urbana",
        number: "01",
        title: "Urbanes Venezuela",
        lede: "Venezuela verstädterte sehr schnell: 1936 lebte die Mehrheit auf dem Land, heute fast niemand mehr. Dieser vom Erdöl getriebene Sprung erklärt seine Städte, seine Musik und viel von seiner Sprechweise.",
        layout: "prose",
      },
      {
        slug: "ciudades-que-cuentan-el-pais",
        number: "02",
        title: "Städte, die das Land erzählen",
        lede: "Acht Städte, acht Wege, Venezuela kennenzulernen.",
        layout: "gallery",
        items: [
          {
            title: "Caracas",
            meta: "Hauptstadtdistrikt",
            text: "Caracas vereint Gebäude, Plätze und Kulturleben in einem Tal am Fuß des Ávila. Moderne Architektur und öffentliche Räume zeigen unterschiedliche Möglichkeiten, Venezuelas Hauptstadt zu erleben und zu erkunden.",
            photo: { src: "/images/commons/caracas-atardecer.jpg", alt: "Caracas bei Sonnenuntergang mit Gebäuden und dem Ávila auf der rechten Seite", position: "60% 50%" },
          },
          {
            title: "Maracaibo",
            meta: "Zulia",
            text: "Maracaibo verbindet das Leben am See mit Handel und einer eigenen kulturellen Identität. Die Rafael-Urdaneta-Brücke und die Gaita-Musik aus Zulia erzählen von der Beziehung zum Wasser und den örtlichen Traditionen.",
            photo: {
              src: "/images/commons/maracaibo-ciudad.jpg",
              alt: "Stadtansicht von Maracaibo mit Alleen und Gebäuden",
              position: "60% 50%",
            },
          },
          {
            title: "Ciudad Bolívar",
            meta: "Bolívar",
            text: "Ciudad Bolívar bewahrt zwischen Gassen und Dächern über dem Orinoco die Erinnerung an Angostura. Die Altstadt führt zum Kongress von 1819 und zur Bedeutung des Flusses für das Stadtleben.",
            photo: {
              src: "/images/commons/ciudad-bolivar-historical-zone.jpg",
              alt: "Historisches Viertel von Ciudad Bolívar über dem Orinoco",
            },
          },
          {
            title: "Coro",
            meta: "Falcón",
            text: "Coro bewahrt Lehmhäuser, Innenhöfe und Straßen als Zeugnisse seines kolonialen Erbes. Gemeinsam mit dem Hafen La Vela lässt sich hier eine Architektur entdecken, die vom Klima und der Region geprägt ist.",
            photo: { src: "/images/commons/coro-calle-colonial.jpg", alt: "Straße mit Kolonialhäusern in Coro, Bundesstaat Falcón", position: "center" },
          },
          {
            title: "Barquisimeto",
            meta: "Lara",
            text: "Barquisimeto ist eine Musikstadt und ein Treffpunkt zwischen mehreren Regionen Venezuelas. Die Kathedrale und die Verehrung der Divina Pastora zeigen unterschiedliche Seiten der Architektur und der Traditionen dieser Stadt.",
            photo: {
              src: "/images/commons/catedral-de-barquisimeto-dia-lluvioso.jpg",
              alt: "Kathedrale von Barquisimeto, Bundesstaat Lara, unter Regenhimmel",
            },
          },
          {
            title: "Cumaná",
            meta: "Sucre",
            text: "Cumaná vereint städtisches Kulturerbe und Küstenleben im Osten Venezuelas. Die Basilika Santa Inés und die Festung San Antonio de la Eminencia ermöglichen Einblicke in verschiedene Kapitel der Stadtgeschichte.",
            photo: { src: "/images/commons/cumana-ciudad-mar.jpg", alt: "Luftaufnahme von Cumaná mit Gebäuden und karibischer Küste", position: "70% 50%" },
          },
          {
            title: "Puerto Cabello",
            meta: "Carabobo",
            text: "Puerto Cabello verbindet Hafengeschichte, koloniale Straßen und eine enge Beziehung zum Meer. Zwischen Los Lanceros und der Uferpromenade laden Balkone und bunte Fassaden dazu ein, das Stadtleben zu entdecken.",
            photo: { src: "/images/commons/puerto-cabello-los-lanceros.jpg", alt: "Straße Los Lanceros in der Altstadt von Puerto Cabello", position: "center" },
          },
          {
            title: "Trujillo",
            meta: "Trujillo",
            text: "Trujillo bewahrt enge Gassen und eine andine Identität, die von Landschaften und Traditionen geprägt ist. Das Denkmal der Jungfrau des Friedens zeigt die Bedeutung religiöser Verehrung in dieser Bergstadt.",
            photo: {
              src: "/images/commons/trujillo-plaza-mendoza.jpg",
              alt: "Plaza Cristóbal Mendoza in der Stadt Trujillo",
              position: "52% 50%",
            },
          },
        ],
      },
      {
        slug: "patrimonio",
        number: "03",
        title: "Architektur, die Geschichten erzählt",
        lede: "Was macht diese Orte besonders? Ihre Gebäude erzählen von Kunst, Lebensweisen und Ereignissen, die Venezuela geprägt haben.",
        layout: "gallery",
        items: [
          {
            title: "Universitätsstadt",
            meta: "Caracas · Kunst und Architektur",
            text: "Achte darauf, wie Wandbilder und Skulpturen Teil der Gebäude werden. Carlos Raúl Villanueva vereinte Kunst und Architektur auf einem Campus, auf dem Studierende zwischen Werken bedeutender Künstler lernen.",
            photo: { src: "/images/commons/biblioteca-central-de-la-ciudad-universitaria-caracas.jpg", alt: "Zentralbibliothek der Universitätsstadt Caracas", position: "60% 50%" },
          },
          {
            title: "Coro und seine Häuser",
            meta: "Falcón · Lehm und Innenhöfe",
            text: "Lehmwände, Innenhöfe und überdachte Gänge zeigen eine andere Art zu bauen. Coro und La Vela bewahren traditionelle Techniken mit lokalen, spanischen und niederländischen Einflüssen: Diese Verbindung macht sie besonders.",
            photo: { src: "/images/commons/coro-patio-ventanas-hierro.jpg", alt: "Innenhof der Casa de las Ventanas de Hierro in Coro", position: "center" },
          },
          {
            title: "Casa de Angostura",
            meta: "Ciudad Bolívar · Unabhängigkeit",
            text: "Hinter diesen Balkonen verbirgt sich ein entscheidendes Ereignis: Hier tagte 1819 der Kongress von Angostura. Bolívar hielt seine berühmte Rede über die Gestaltung der Republik – weit mehr als nur eine alte Fassade.",
            photo: { src: "/images/commons/casa-congreso-angostura.jpg", alt: "Fassade des Hauses des Kongresses von Angostura in Ciudad Bolívar", position: "center" },
          },
        ],
      },
      {
        slug: "musica",
        number: "04",
        title: "Musik",
        lede: "Das Land wechselt alle paar hundert Kilometer das Genre.",
        layout: "facets",
        items: [
          { spotifyTrack: "joropo", title: "Joropo", meta: "UNESCO-Erbe, 2025", text: "Harfe oder Bandola, Cuatro und Maracas. Nicht nur aus den Llanos: es gibt andine, östliche und zentrale Varianten." },
          { spotifyTrack: "gaita", title: "Gaita zuliana", meta: "Zulia", text: "Furro, Tambora, Charrasca und Cuatro. Im Dezember klingt sie im ganzen Land." },
          { spotifyTrack: "calipso", title: "Calipso aus El Callao", meta: "Bolívar", text: "Antillanisches, vor allem trinidadisches Erbe, das im 19. Jahrhundert mit dem Gold kam. Gesungen auf Spanisch und auf Patois." },
          { spotifyTrack: "tambores", title: "Trommeln", meta: "Zentralküste", text: "Afrovenezolanische Rhythmen der Patronatsfeste an der Küste." },
          { spotifyTrack: "andina", title: "Andine Musik", meta: "Mérida, Táchira und Trujillo", text: "Saiten- und Gesangsrepertoires der Bergdörfer." },
        ],
      },
      {
        slug: "fiestas-y-tradiciones",
        number: "05",
        title: "Feste und Traditionen",
        lede: "Feste, die Generationen verbinden. Hinter Masken, Trommeln und Prozessionen stehen Geschichten von Glauben und gemeinsamer Erinnerung.",
        layout: "gallery",
        items: [
          {
            title: "Tanzende Teufel",
            meta: "Fronleichnam · UNESCO 2012",
            text: "Die Tradition hat koloniale Wurzeln und verbindet das katholische Fronleichnamsfest mit afrikanischen und indigenen Einflüssen. Masken und Tanz stellen dar, wie sich das Böse dem Guten unterwirft.",
            photo: {
              src: "/images/commons/diablos-yare-trajes.jpg",
              alt: "Tanzende Teufel von Yare mit aufgesetzten Masken und vollständig sichtbaren roten Kostümen",
              position: "50% 50%",
            },
          },
          {
            title: "Zaragozas von Sanare",
            meta: "28. Dezember · Sanare, Lara",
            text: "Dieses Fest zu Ehren der Unschuldigen Kinder erfüllt Sanare mit Musik und Tanz. Mit handgefertigten Masken und farbenfrohen Kostümen ziehen die Teilnehmenden durch die Straßen; Gesänge und religiöse Gelübde begleiten die Feier.",
            photo: {
              src: "/images/commons/zaragozas-sanare.jpg",
              alt: "Teilnehmende der Zaragozas von Sanare mit handgefertigten Masken und farbenfrohen Kostümen",
              position: "25% 50%",
            },
          },
          {
            title: "La Chinita",
            meta: "11. bis 18. November · Maracaibo",
            text: "Der Überlieferung Zulias zufolge fand eine Wäscherin im See ein Holztäfelchen mit dem Bild der Jungfrau Maria. Aus dieser Verehrung entstand ein Fest, das Gaita-Musik, Glauben und Gemeinschaft verbindet.",
            photo: {
              src: "/images/commons/bajada-de-la-chinita-en-maracaibo-2023-01.jpg",
              alt: "Feuerwerk über der Basilika während der Bajada de la Chinita in Maracaibo",
            },
          },
          {
            title: "Divina Pastora",
            meta: "14. Januar · Barquisimeto",
            text: "Die Prozession begann 1856, als Barquisimeto während einer Choleraepidemie um Schutz bat. Jeden Januar erneuern die Gläubigen diese Verehrung und begleiten die Jungfrau Maria von Santa Rosa aus.",
            photo: {
              src: "/images/commons/divina-pastora-procesion.jpg",
              alt: "Menschenmenge begleitet das Bildnis der Divina Pastora in Barquisimeto",
              position: "20% 50%",
            },
          },
        ],
      },
      {
        slug: "artesania-y-memoria",
        number: "06",
        title: "Handwerk und Erinnerung",
        lede: "Jedes Handwerk gehört zu einem bestimmten Ort: ein einheitliches venezolanisches Handwerk gibt es nicht.",
        layout: "facets",
        items: [
          { title: "Flechtarbeit", text: "Pflanzenfasern, verarbeitet von indigenen Völkern des Südens und des Westens." },
          { title: "Keramik", text: "Gebrannter Ton mit je nach Region anderen Formen und Zwecken." },
          { title: "Textilien", text: "Von der Hängematte der Guajira bis zu den Wollgeweben der Anden." },
          { title: "Schnitzerei und Masken", text: "Rituelle und festliche Objekte lokaler Feiern." },
        ],
      },
    ],
    closing: {
      text: "Keine venezolanische Stadt erklärt das Land für sich allein. Alle zusammen beginnen gerade erst damit.",
    },
    credits: [
      { title: "Caracas bei Sonnenuntergang mit Gebäuden und dem Ávila auf der rechten Seite — verkleinertes Bild; Anzeigeausschnitt", author: "Periodismodepaz", license: "CC BY 4.0", href: "https://commons.wikimedia.org/wiki/File:Atardecer_en_Caracas_2.jpg" },
      {
        title: "Stadtansicht von Maracaibo mit Alleen und Gebäuden — verkleinertes Bild; Anzeigeausschnitt",
        author: "José ILIDIO Spinola",
        license: "CC BY-SA 2.0",
        href: "https://commons.wikimedia.org/wiki/File:MaracaiboView_(cropped).jpg",
      },
      { title: "Straße Los Lanceros in der Altstadt von Puerto Cabello — verkleinertes Bild; Anzeigeausschnitt", author: "Jesus Enrique Morao Blanco", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Calle_%22Los_Lanceros%22_en_Puerto_Cabello.jpg" },
      { title: "Historisches Viertel von Ciudad Bolívar", author: "Venecon", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Ciudad_Bol%C3%ADvar_historical_zone.jpg" },
      { title: "Straße mit Kolonialhäusern in Coro, Bundesstaat Falcón — verkleinertes Bild; Anzeigeausschnitt", author: "Grégory David Escobar Fernández", license: "CC BY 2.0", href: "https://commons.wikimedia.org/wiki/File:Calle_en_Coro_2.JPG" },
      { title: "Kathedrale von Barquisimeto", author: "Rodolfo Pimentel", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Catedral_de_Barquisimeto_d%C3%ADa_lluvioso.jpg" },
      { title: "Luftaufnahme von Cumaná mit Gebäuden und karibischer Küste — verkleinertes Bild; Anzeigeausschnitt", author: "BID Ciudades Sostenibles", license: "CC BY 2.0", href: "https://commons.wikimedia.org/wiki/File:Cumana_sucre.jpg" },
      { title: "Plaza Cristóbal Mendoza in der Stadt Trujillo — verkleinertes Bild; Anzeigeausschnitt", author: "Rjcastillo", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Plaza_Cristobal_Mendoza.jpg" },
      { title: "Tanzende Teufel von Yare mit aufgesetzten Masken und vollständig sichtbaren roten Kostümen — verkleinertes Bild; Anzeigeausschnitt", author: "Josedrg08", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Danzantes_de_Yare.jpg" },
      { title: "Teilnehmende der Zaragozas von Sanare mit handgefertigten Masken und farbenfrohen Kostümen — verkleinertes Bild; für die Darstellung beschnitten", author: "Rodolfo Pimentel", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Zaragozas_original.jpg" },
      { title: "Bajada de la Chinita, Maracaibo", author: "Mgta122001vzla", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Bajada_de_la_Chinita_en_Maracaibo_2023_01.jpg" },
      { title: "Die Divina Pastora während der Prozession in Barquisimeto, umgeben von Blumen und Gläubigen — verkleinertes Bild; für die Darstellung beschnitten", author: "Rodolfo Pimentel", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:DIVINA_PASTORA_en_la_procesi%C3%B3n_los_feligreses_tom%C3%A1ndole_fotos.jpg" },
{ title: "Zentralbibliothek, Universitätsstadt Caracas", author: "Jorge Andrés Paparoni Bruzual", license: "CC BY-SA 2.0", href: "https://commons.wikimedia.org/wiki/File:Biblioteca_Central_de_la_Ciudad_Universitaria_Caracas.jpg" },
      { title: "Innenhof der Casa de las Ventanas de Hierro in Coro — verkleinertes Bild; Anzeigeausschnitt", author: "Janethrodri", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Patio_Casa_de_las_Ventanas_de_Hierro.jpg" },
      { title: "Fassade des Hauses des Kongresses von Angostura in Ciudad Bolívar — verkleinertes Bild; Anzeigeausschnitt", author: "LHommeDuMonde", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Casa_de_Angostura,_Ciudad_Bol%C3%ADvar..jpg" },
    ],
  },

  sabores: {
    slug: "sabores",
    eyebrow: "Venezuela von seinem Tisch aus",
    title: "Aromen Venezuelas",
    intro:
      "Ein Land lässt sich auch essend bereisen. Und hier gibt es nicht eine Küche, sondern sechs oder sieben: Mais herrscht überall, aber was dazukommt, ändert sich mit dem Klima, dem Fluss und damit, wer in welchem Hafen ankam.",
    hero: {
      src: "/images/arepa.jpg",
      alt: "Frisch zubereitete venezolanische Arepas",
    },
    meta: {
      title: "Aromen Venezuelas | Mrs Venezuela",
      description:
        "Die venezolanische Küche in Bildern: Arepa, Pabellón, Cachapa und Hallaca, die Aromen jeder Region, Kakao, Süßspeisen, Zutaten und der Tisch im Dezember.",
    },
    indexLabel: "In diesem Guide",
    backLabel: "Zurück zur Startseite",
    sections: [
      {
        slug: "una-cocina-de-muchas-regiones",
        number: "01",
        title: "Eine Küche vieler Regionen",
        lede: "Es gibt keine einzige venezolanische Küche. Mais und Maniok sind die gemeinsame Grundlage; davon ausgehend kochen die Anden mit Weizen und Kartoffel, der Osten mit Fisch und die Llanos mit Fleisch vom Holzfeuer.",
        layout: "prose",
      },
      {
        slug: "iconos-venezolanos",
        number: "02",
        title: "Venezolanische Klassiker",
        lede: "Sechs Gerichte, die fast jeder Venezolaner wiedererkennt, wo auch immer er ist.",
        layout: "food-dishes",
        items: [
          {
            title: "Arepa",
            meta: "Im ganzen Land · Vorspanische Wurzeln",
            text: "Maisbrot, auf dem Budare gebacken und mit anderen Völkern im Norden Südamerikas geteilt. Der Name wird oft mit „erepa“ verbunden, einem Wort der Cumanagoto, das mit Mais in Verbindung gebracht wird. Seit 1960 hat vorgekochtes Maismehl sie zum Alltagsessen gemacht; man schneidet sie auf und füllt sie.",
            photo: { src: "/images/commons/arepas-tradicionales.jpg", alt: "Arepas aus Mais backen an einem Verkaufsstand in Caripe, Monagas" },
          },
          {
            title: "Pabellón criollo",
            meta: "Im ganzen Land · Mittagessen",
            text: "Zerpflücktes Rindfleisch, schwarze Bohnen, weißer Reis und Scheiben reifer Kochbanane. Gilt meist als Nationalgericht. Mit einem Spiegelei obenauf heißt es „a caballo“; mit den Bananenscheiben an den Seiten „con barandas“.",
            photo: { src: "/images/commons/pabellon-criollo-venezolano.jpg", alt: "Ein Teller venezolanischer Pabellón criollo" },
          },
          {
            title: "Cachapa",
            meta: "Im ganzen Land · Junger Mais",
            text: "Süßer Teig aus gemahlenem Jojoto, jungem Mais, auf dem Budare gebacken und über Queso de mano geklappt. Ihre Verwandte, die Cachapa de hoja, wird ins Maisblatt gewickelt und in Wasser gegart.",
            photo: { src: "/images/commons/cachapa-con-queso-e-mano.jpg", alt: "Cachapa, zusammengeklappt über Queso de mano" },
          },
          {
            title: "Hallaca",
            meta: "Im ganzen Land · Dezember",
            text: "Mit Onoto gefärbter Maisteig, gefüllt mit einem Fleischragout, in Bananenblatt gewickelt und gekocht. Seit dem 18. Jahrhundert belegt, variiert sie je nach Region und Familie: Die aus den Anden etwa enthält meist Kichererbsen.",
            photo: { src: "/images/commons/tradicionales-hallacas.jpg", alt: "Hallacas werden auf dem Bananenblatt zusammengesetzt, die Füllung ringsum", position: "25% 50%" },
          },
          {
            title: "Tequeños",
            meta: "Caracas und das Zentrum · Pasapalo",
            text: "Stangen aus weißem Käse, in Weizenteig gewickelt und frittiert. Der Name wird oft mit Los Teques verbunden, auch wenn es dafür keinen schriftlichen Beleg gibt. Mitte des 20. Jahrhunderts waren sie auf Festen bereits üblich.",
            photo: { src: "/images/commons/tequenos-venezolanos.jpg", alt: "Frittierte Tequeños, einer aufgebrochen mit sichtbarem Käse", position: "90% 50%" },
          },
          {
            title: "Empanada",
            meta: "Im ganzen Land · Frühstück",
            text: "Iberischen Ursprungs, wird sie in Venezuela aus Maisteig gemacht und frittiert. Gefüllt mit zerpflücktem Fleisch, Käse oder schwarzen Bohnen; auf Margarita und im Osten ist die mit Cazón, kleinem Hai, ein Klassiker.",
            photo: { src: "/images/commons/empanadas-de-venezuela.jpg", alt: "Venezolanische Empanadas aus Maismehl auf einem Glasteller, eine davon angebissen", position: "100% 50%" },
          },
        ],
      },
      {
        slug: "sabores-por-region",
        number: "03",
        title: "Aromen nach Regionen",
        lede: "Derselbe Tisch verändert sich völlig, je nachdem, wo man sich hinsetzt.",
        layout: "food-regions",
        items: [
          {
            title: "Anden",
            meta: "Mérida · Táchira · Trujillo",
            dishes: ["Pastelitos andinos", "Pisca andina", "Arepa de trigo", "Forelle"],
            text: "Küche des kalten Klimas: Kartoffel, Milchprodukte und Weizen, ein Getreide, dessen Anbau in der Kolonialzeit vor allem mit diesen Bergen verbunden wird. Die 1937 eingeführte Forelle ist heute alltäglich.",
            photo: { src: "/images/commons/pastelitos-andinos.jpg", alt: "Frisch frittierte Pastelitos andinos in einem Korb" },
          },
          {
            title: "Osten",
            meta: "Sucre · Anzoátegui · Nueva Esparta · Monagas",
            dishes: ["Empanada de cazón", "Pastel de chucho", "Gebratener Fisch"],
            text: "Küste und Fischfang bestimmen den Tisch. Auf Margarita geht der Pastel de chucho, der dem Koch Rubén Santiago in den Achtzigerjahren zugeschrieben wird, auf den Cuajado des Ostens zurück.",
            photo: { src: "/images/commons/pescado-frito-con-arepa.jpg", alt: "Gebratener Fisch mit Arepa, Tomate und Limette nach Art von Margarita" },
          },
          {
            title: "Zulia",
            meta: "Maracaibo und der See",
            dishes: ["Patacón", "Mandoca", "Huevos chimbos"],
            text: "Rund um den Maracaibo-See liegt eines der großen Milchgebiete des Landes. Reife Kochbanane und Käse tauchen in vielen Zubereitungen auf, auch in süßen.",
            photo: { src: "/images/commons/mandocas-maracuchas.jpg", alt: "Mandoca aus Maracaibo, frittierter Ring aus Mais und reifer Kochbanane" },
          },
          {
            title: "Llanos",
            meta: "Apure · Barinas · Guárico · Portuguesa · Cojedes",
            dishes: ["Carne en vara", "Pisillo", "Carato"],
            text: "Viehzüchterküche der Savanne, mit Fleisch vom Holzfeuer und Kochbanane. In der Karwoche isst man Chigüire, das Wasserschwein, dessen Jagd eine behördliche Genehmigung erfordert.",
            photo: { src: "/images/commons/entreverado-llanero.jpg", alt: "Carne en vara und Entreverado garen am Lagerfeuer auf einem Hato in den Llanos", position: "65% 50%" },
          },
          {
            title: "Guayana",
            meta: "Bolívar · Amazonas · Delta Amacuro",
            dishes: ["Sapoara", "Flussfisch", "Catara"],
            text: "Hier bestehen der Bittermaniok der indigenen Völker und der Fisch des Orinoco nebeneinander. Im August eröffnet der Fang der Sapoara die Feria del Orinoco in Ciudad Bolívar.",
            photo: { src: "/images/commons/pescado-de-rio-amazonas.jpg", alt: "Flussfisch auf Bananenblatt mit Maniok und Salat, in Amazonas" },
          },
          {
            title: "Zentralküste",
            meta: "Aragua · Carabobo · La Guaira · Miranda",
            dishes: ["Fisch mit Tostones", "Sancocho mit Fisch", "Cafunga"],
            text: "Fischerküste mit alten Kakaohaziendas und tief verwurzeltem afrovenezolanischem Erbe in Barlovento. Am Meer wird der Fisch mit Tostones serviert.",
            photo: { src: "/images/commons/pescado-frito-con-tostones.jpg", alt: "Gebratener Fisch mit Tostones und Salat, typisches Gericht der Küste Araguas" },
          },
        ],
      },
      {
        slug: "cacao-y-chocolate",
        number: "04",
        title: "Kakao und Schokolade",
        lede: "Venezuela erzeugt wenig Kakao — laut FAOSTAT rund 29.400 Tonnen im Jahr 2024, 0,6 % der Weltproduktion —, steht aber auf der Edelkakao-Liste der Internationalen Kakao-Organisation.",
        layout: "food-cacao",
        photo: {
          src: "/images/commons/cacao-tostado.jpg",
          alt: "Geröstete Kakaobohnen in einer Tonschale, bereit zum Mahlen",
        },
        items: [
          {
            title: "Chuao",
            meta: "Aragua · Ursprungsbezeichnung",
            text: "Ein Ort ohne Straße, per Boot von Choroní erreichbar. Sein Kakao hat seit dem Jahr 2000 eine Ursprungsbezeichnung: laut SAPI (2026) die einzige des Landes für Kakao.",
            photo: { src: "/images/commons/cacao-chuao.jpg", alt: "Kakaobohnen trocknen in der Sonne auf dem Dorfplatz von Chuao, Bundesstaat Aragua" },
          },
          {
            title: "Paria",
            meta: "Sucre",
            text: "Auf der Halbinsel überwiegt Trinitario-Kakao, der unter dem Namen Río Caribe vermarktet wird, nach dem gleichnamigen Ort.",
            photo: { src: "/images/commons/cacao-paria.jpg", alt: "Reife Kakaofrüchte am Stamm, auf der Halbinsel Paria" },
          },
          {
            title: "Sur del Lago",
            meta: "Zulia · Mérida",
            text: "Am Fuß der Anden wächst Porcelana, ein Criollo-Kakao, dessen Bohne frisch weiß ist.",
            photo: { src: "/images/commons/cacao-santa-apolonia.jpg", alt: "In Santa Apolonia angebaute Kakaobohnen, im Sur del Lago von Mérida" },
          },
        ],
      },
      {
        slug: "dulces-panes-y-bebidas",
        number: "05",
        title: "Süßes, Brot und Getränke",
        lede: "Was man am Vormittag isst, was zum Kaffee gehört und was man bei Hitze trinkt.",
        layout: "food-groups",
        groups: [
          {
            title: "Süßes",
            items: [
              {
                title: "Quesillo",
                meta: "Im ganzen Land",
                text: "Venezolanische Version des Flans, mit ganzen Eiern und Kondensmilch auf Karamell. Den Namen erklärt man meist mit seinen kleinen Löchern, die an Käse erinnern.",
                photo: { src: "/images/commons/quesillo.jpg", alt: "Venezolanischer Quesillo mit Karamell obenauf, in einer Glasform" },
              },
              {
                title: "Dulce de lechosa",
                meta: "Dezember",
                text: "Streifen grüner Papaya, in Sirup aus Papelón oder Zucker gekocht, manchmal mit Gewürznelken. Traditionell wird er für den Weihnachtstisch zubereitet.",
                photo: { src: "/images/commons/dulce-de-lechosa.jpg", alt: "Dulce de lechosa in goldenem Sirup, auf einem Teller serviert" },
              },
              {
                title: "Bienmesabe",
                meta: "Im ganzen Land",
                text: "In Likör getränkter Biskuit, im Wechsel mit Kokoscreme und Eigelb, mit Baiser überzogen. Zum Schluss kommt meist Zimt darüber.",
                photo: { src: "/images/commons/bienmesabe.jpg", alt: "Bienmesabe-Torte mit geraspelter Kokosnuss und Zimtstreifen" },
              },
            ],
          },
          {
            title: "Brot",
            items: [
              {
                title: "Golfeado",
                meta: "Süßes Brot",
                text: "Teigspirale mit Papelón, weißem Käse und Anis. Die Überlieferung verortet ihn in den Bäckereien von Petare Anfang des 20. Jahrhunderts.",
                photo: { src: "/images/commons/golfeado-4.jpg", alt: "Golfeado von oben, die Spirale mit Papelón überzogen" },
              },
              {
                title: "Cachito",
                meta: "Bäckerei",
                text: "Vor dem Backen mit Schinken gerolltes Brot. Sein Ursprung ist nicht belegt; unter den kursierenden Versionen verbindet ihn eine mit portugiesischen Bäckern.",
                photo: { src: "/images/commons/cachito-de-jamon.jpg", alt: "Halbiertes Cachito mit Schinken", position: "20% 50%" },
              },
            ],
          },
          {
            title: "Getränke",
            items: [
              {
                title: "Papelón con limón",
                meta: "Hausgemachte Erfrischung",
                text: "In kaltem Wasser gelöster Papelón mit Limettensaft. Das ist die häufigste hausgemachte Erfrischung zum Mittagessen und an Essensständen.",
                photo: { src: "/images/commons/papelon-con-limon-2.jpg", alt: "Ein Glas Papelón con limón mit Eis und Limettenscheiben", position: "50% 100%" },
              },
              {
                title: "Chicha",
                meta: "Reisgetränk",
                text: "Die von der Straße ist aus Reis, süß und unvergoren, verkauft von den Chicheros. In den Anden macht man eine andere, vergorene.",
                photo: { src: "/images/commons/chicha.jpg", alt: "Venezolanische Reis-Chicha im Glas, mit Zimt bestreut", position: "90% 50%" },
              },
              {
                title: "Tizana",
                meta: "Fruchtgetränk",
                text: "Gehacktes Obst in Orangen- oder Wassermelonensaft, mit Grenadine, die ihr die rötliche Farbe gibt. Das ganze Jahr über zu haben.",
                photo: { src: "/images/commons/tizana.jpg", alt: "Ein Glas rote Tizana mit Fruchtstücken", position: "50% 80%" },
              },
            ],
          },
        ],
      },
      {
        slug: "migraciones-en-la-mesa",
        number: "06",
        title: "Einwanderung auf dem Teller",
        lede: "Manches von dem, was hier heute gegessen wird, brachten Menschen mit, die per Schiff kamen oder die Grenze überquerten.",
        layout: "food-influences",
        items: [
          {
            title: "Europa",
            meta: "Spanien · Portugal · Italien",
            text: "Spanien hinterließ die koloniale Grundlage, verstärkt durch Kanarier Mitte des 20. Jahrhunderts. Die Portugiesen, viele aus Madeira, prägten den Lebensmittelhandel; die Italiener halfen, Pasta populär zu machen.",
            photo: { src: "/images/commons/panaderia-la-asuncion.jpg", alt: "Frisch gebackenes Brot in den Regalen einer Bäckerei in La Asunción, Margarita" },
          },
          {
            title: "Levante",
            meta: "Syrien · Libanon",
            text: "Syrer und Libanesen kamen ab der zweiten Hälfte des 19. Jahrhunderts, mit neuen Wellen im 20. Mit ihnen wurden Quibbe und Tabule verbreitet.",
            photo: { src: "/images/commons/comida-arabe-maracaibo.jpg", alt: "Quibbe, gefüllte Weinblätter, Tabule und Hummus in einem Restaurant in Maracaibo" },
          },
          {
            title: "Nachbarländer",
            meta: "Kolumbien · Trinidad und die Antillen",
            text: "Mit Kolumbien teilt man den Tisch: Arepas gibt es auf beiden Seiten der Grenze, jede auf ihre Art. In El Callao hinterließen die Antillaner, die mit dem Gold kamen, den Calalú.",
            photo: { src: "/images/commons/arepa-de-chocolo.jpg", alt: "Kolumbianische Arepa de chócolo mit Käsefüllung" },
          },
        ],
      },
      {
        slug: "ingredientes-de-venezuela",
        number: "07",
        title: "Zutaten Venezuelas",
        lede: "Sieben Produkte, die fast alles Vorherige tragen.",
        layout: "food-pantry",
        items: [
          {
            title: "Mais",
            meta: "Indigene Grundlage",
            text: "Das zentrale Getreide der venezolanischen Küche, indigenen Ursprungs: getrocknet gemahlen oder jung verwendet, als Jojoto.",
            dishes: ["Arepa", "Hallaca", "Cachapa", "Bollos"],
            photo: { src: "/images/commons/maiz.jpg", alt: "Geschälte gelbe Maiskolben" },
          },
          {
            title: "Maniok",
            meta: "Bittermaniok · Casabe",
            text: "Ausgepresst ergibt Bittermaniok den Casabe, ein Brot indigenen Ursprungs, das die UNESCO 2024 in einer gemeinsamen Kandidatur von fünf Ländern anerkannte.",
            dishes: ["Casabe", "Mañoco"],
            photo: { src: "/images/commons/esto-es-casabe.jpg", alt: "Casabe-Fladen trocknen auf Stangen neben dem Holzfeuer", position: "72% 40%" },
          },
          {
            title: "Kochbanane",
            meta: "Grün oder reif",
            text: "Sie kam Anfang des 16. Jahrhunderts mit den Europäern in die Karibik und steht heute auf fast jedem Tisch.",
            dishes: ["Tajadas", "Tostones", "Patacón", "Pastel de chucho"],
            photo: { src: "/images/commons/platanos-chuao.jpg", alt: "Büschel grüner Kochbananen am Ufer des Flusses von Chuao", position: "67% 50%" },
          },
          {
            title: "Ají dulce",
            meta: "Würze",
            text: "Ein Capsicum chinense fast ohne Schärfe, von derselben Art wie sehr scharfe Chilis.",
            dishes: ["Hallaca", "Schmorgerichte", "Fisch"],
            photo: { src: "/images/commons/aji-dulce.jpg", alt: "Grüne, rote und orange Ajíes dulces auf einem Markt" },
          },
          {
            title: "Papelón",
            meta: "Süßungsmittel",
            text: "Eingekochter und in Blöcken erstarrter Zuckerrohrsaft; in anderen Ländern heißt er Panela.",
            dishes: ["Papelón con limón", "Golfeado", "Kokossüßigkeiten"],
            photo: { src: "/images/commons/papelon.jpg", alt: "Gestapelte Papelón-Blöcke" },
          },
          {
            title: "Kakao",
            meta: "Historischer Anbau",
            text: "Er war im 17. und 18. Jahrhundert das wichtigste Exportgut des kolonialen Venezuela.",
            dishes: ["Schokolade", "Heiße Schokolade"],
            photo: { src: "/images/commons/mazorca-de-cacao.jpg", alt: "Geöffnete Kakaofrucht mit ihren Bohnen, in Delta Amacuro" },
          },
          {
            title: "Käse",
            meta: "De mano · Guayanés · Telita · Llanero",
            text: "Weich und frisch sind Queso de mano, Guayanés und Telita; hart und salzig ist der Llanero, den man über schwarze Bohnen und Arepas reibt.",
            dishes: ["Cachapa", "Arepa", "Schwarze Bohnen"],
            photo: { src: "/images/commons/queso-llanero.jpg", alt: "Laib Queso llanero auf einem Holzbrett" },
          },
        ],
      },
      {
        slug: "la-mesa-de-diciembre",
        number: "08",
        title: "Der Tisch im Dezember",
        lede: "An Heiligabend und Neujahr teilt sich die Hallaca den Tisch mit drei weiteren Klassikern, und zum Anstoßen kommt der Ponche crema.",
        layout: "food-table",
        photo: {
          src: "/images/commons/plato-tipico-navideno.jpg",
          alt: "Venezolanischer Weihnachtsteller mit Hallaca, Pan de jamón, Ensalada de gallina und Pernil",
        },
        items: [
          {
            title: "Hallaca",
            text: "Wird in der Familie zubereitet und den ganzen Dezember über gegessen.",
            photo: { src: "/images/commons/hallacas-amarradas.jpg", alt: "Zwei in Bananenblatt verschnürte Hallacas" },
          },
          {
            title: "Pan de jamón",
            text: "Gefüllt mit Schinken, Rosinen und Oliven. Wird der Bäckerei Ramella in Caracas zu Beginn des 20. Jahrhunderts zugeschrieben.",
            photo: { src: "/images/commons/pan-de-jamon.jpg", alt: "Scheibe Pan de jamón mit ihrer Spirale aus Schinken und Oliven" },
          },
          {
            title: "Pernil",
            text: "Marinierte, stundenlang im Ofen gegarte Schweinekeule; was übrig bleibt, landet meist im Brot.",
            photo: { src: "/images/commons/pernil-horneado.jpg", alt: "Im Ofen gegarter Pernil auf dem Backblech" },
          },
          {
            title: "Ensalada de gallina",
            text: "Kartoffel, Karotte und zerzupftes Huhn mit Mayonnaise, verwandt mit dem russischen Salat.",
            photo: { src: "/images/commons/ensalada-de-gallina.jpg", alt: "Ensalada de gallina mit Erbsen bei einem Weihnachtsessen" },
          },
        ],
      },
    ],
    closing: {
      text: "Ein Land erzählt sich auch über das, was es auf den Tisch bringt.",
    },
    credits: [
      { title: "Arepas (Titelbild)", author: "Steven Depolo", license: "CC BY 2.0", href: "https://commons.wikimedia.org/wiki/File:Arepitas_Food_Macro.jpg" },
      { title: "Traditionelle Arepas in Caripe", author: "Wilmeris Hernández", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Arepas_Tradicionales.jpg" },
      { title: "Pabellón criollo", author: "Wilfredor", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Pabell%C3%B3n_Criollo_Venezolano.jpg" },
      { title: "Cachapa mit Queso de mano", author: "Jonathan de Almeida", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Cachapa_Con_Queso_e_Mano.JPG" },
      { title: "Traditionelle Hallacas", author: "Tomás Rojas", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Tradicionales_Hallacas.jpg" },
      { title: "Venezolanische Tequeños", author: "Rodolfo Pimentel", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Teque%C3%B1os_Venezolanos.jpg" },
      { title: "Venezolanische Empanadas", author: "Laura Fiorucci", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Empanadas_de_Venezuela.jpg" },
      { title: "Pastelitos andinos", author: "Julio Sifontes", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Pastelitos_Andinos.jpg" },
      { title: "Gebratener Fisch mit Arepa", author: "Wilfredor", license: "CC0", href: "https://commons.wikimedia.org/wiki/File:Plato_de_pescado_frito_con_arepa.jpg" },
      { title: "Mandocas aus Maracaibo", author: "DamianFinol", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Mandocas_maracuchas.jpg" },
      { title: "Carne en vara und Entreverado aus den Llanos", author: "Douglas Bracho", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Un_entreverado_bien_llanero.JPG" },
      { title: "Flussfisch in Amazonas (aufgehellt)", author: "Rasiel Morella", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Comida_t%C3%ADpica,_Amazonas.JPG" },
      { title: "Gebratener Fisch mit Tostones", author: "Menu1973", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Plato_tipico_en_Maracay.jpg" },
      { title: "Gerösteter Kakao", author: "ElmerGuevara", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Cacao_Tostado..JPG" },
      { title: "Kakao trocknet in Chuao", author: "Bucare2011", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Cacao_Chuao.jpg" },
      { title: "Kakaofrüchte in Paria", author: "Luisovalles", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Cacao-fruto.jpg" },
      { title: "Kakao aus Santa Apolonia, Mérida", author: "Wilfredor", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Semillas_de_cacao.jpg" },
      { title: "Venezolanischer Quesillo", author: "Muago", license: "CC0", href: "https://commons.wikimedia.org/wiki/File:Quesillo_venezolano_2.jpg" },
      { title: "Dulce de lechosa", author: "Muago", license: "CC0", href: "https://commons.wikimedia.org/wiki/File:Dulce_de_lechosa.jpg" },
      { title: "Bienmesabe-Torte", author: "Muago", license: "CC0", href: "https://commons.wikimedia.org/wiki/File:Torta_de_bienmesabe.jpg" },
      { title: "Golfeado", author: "Muago", license: "CC0", href: "https://commons.wikimedia.org/wiki/File:Golfeado_4.jpg" },
      { title: "Cachito mit Schinken", author: "Luis Miguel Cisneros", license: "CC BY 2.0", href: "https://commons.wikimedia.org/wiki/File:Cachito_de_Jam%C3%B3n.jpg" },
      { title: "Papelón con limón", author: "Muago", license: "CC0", href: "https://commons.wikimedia.org/wiki/File:Papel%C3%B3n_con_lim%C3%B3n_2.jpg" },
      { title: "Venezolanische Chicha", author: "Muago", license: "CC0", href: "https://commons.wikimedia.org/wiki/File:Chicha_venezolana_2.jpg" },
      { title: "Tizana", author: "Muago", license: "CC0", href: "https://commons.wikimedia.org/wiki/File:Tizana.jpg" },
      { title: "Bäckerei in La Asunción", author: "Wilfredor", license: "CC0", href: "https://commons.wikimedia.org/wiki/File:Panaderia_Don_Bosco_en_la_Asuncion_12.jpg" },
      { title: "Arabisches Essen in Maracaibo (Ausschnitt)", author: "Ronaldy Lugo", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:COMIDA_ARABE_EN_MARACAIBO.JPG" },
      { title: "Arepa de chócolo", author: "John Alexis Guerra Gómez", license: "CC BY-SA 2.0", href: "https://commons.wikimedia.org/wiki/File:Arepa_de_Ch%C3%B3colo.jpg" },
      { title: "Geschälter Mais", author: "Davidperezc77", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Maiz_Pelado.JPG" },
      { title: "Casabe", author: "Wilmeris Hernández", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Esto_es_casabe.jpg" },
      { title: "Kochbananen am Fluss von Chuao", author: "Isamarvda", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Pl%C3%A1tanos_a_orillas_del_r%C3%ADo_de_Chuao.jpg" },
      { title: "Ají dulce", author: "Wilfredor", license: "CC0", href: "https://commons.wikimedia.org/wiki/File:Sweet_Pepper_Market.jpg" },
      { title: "Papelón in Blöcken", author: "Elifeleth", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Panela_en_cuadros.JPG" },
      { title: "Kakaofrucht, Delta Amacuro", author: "Grace Rengifo", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Cacao_(Delta_Amacuro).JPG" },
      { title: "Queso llanero", author: "Muago", license: "CC0", href: "https://commons.wikimedia.org/wiki/File:Queso_llanero.jpg" },
      { title: "Venezolanischer Weihnachtsteller (Ausschnitt)", author: "jonathan de Almeida", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Plato_Tipico_Navide%C3%B1o.JPG" },
      { title: "Weihnachts-Hallacas", author: "Wilfredor", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Hallaca,_Venezuelan_Christmas_food.jpg" },
      { title: "Pan de jamón", author: "Wilfredor", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Pan_de_jamon,_Venezuelan_food.jpg" },
      { title: "Im Ofen gegarter Pernil", author: "Jovannabonilla", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Pierna_de_cochino_en_salsa.JPG" },
      { title: "Ensalada de gallina vom Weihnachtsteller (Ausschnitt)", author: "David Hernández", license: "CC BY-SA 2.0", href: "https://commons.wikimedia.org/wiki/File:Cena_navidad_2007.jpg" },
    ],
  },
};
