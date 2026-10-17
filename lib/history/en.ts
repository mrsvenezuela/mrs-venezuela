import type { HistoryContent } from "./types";

/* Traducción del maestro `es.ts`. Mismos slug, mismos percent, mismas cifras. */
export const historyEn: HistoryContent = {
  eyebrow: "History of Venezuela",
  title: "The history of Venezuela does not begin with the arrival of Europeans.",
  intro:
    "It begins thousands of years earlier, in a territory inhabited by societies very different from one another. What came afterwards — the colony, independence, oil, migration — kept transforming that starting point until it became the country of today.",
  introTimeline: ["Before 1498", "1498", "1811", "1830", "1914", "1958", "Today"],
  indexLabel: "In this guide",
  backLabel: "Back to home",
  topLabel: "Back to top",

  chapters: [
    {
      slug: "pueblos-originarios",
      title: "First peoples",
      period: "Before 1498",
      lede: "Not one people or one culture: dozens of distinct societies, with languages, economies and ways of inhabiting the land that bore little resemblance to one another.",
      paragraphs: [
        "People were already here at least thirteen thousand years ago. At Taima-Taima, near Coro, archaeologists excavated the site where a group of hunters butchered a young mastodon; on the middle Orinoco there are rock shelters occupied continuously for more than nine thousand years. The earliest dates are still debated among scholars, but the order of magnitude is not in doubt.",
        "When the Europeans arrived, the territory was not organised as a country but as a set of regions that traded with one another. Each had solved the problem of living where it lived in a different way.",
      ],
      parts: [
        {
          label: "Caribbean and coast",
          text: "Fishing, salt and pearls. The oyster beds of Cubagua, Coche and Margarita were among the richest in the world, and pearls were bartered for gold and pottery at coastal trade fairs. The Caquetío, an Arawak-speaking people, occupied what are today Falcón, Lara, Yaracuy, Portuguesa and the shores of Lake Maracaibo, reaching as far as Aruba, Bonaire and Curaçao.",
        },
        {
          label: "The Andes",
          text: "The Timoto-Cuica farmed on stepped terraces, with irrigation channels and water tanks designed for the mountains, and stored their harvests in mintoyes: stone silos that also served as burial spaces. Their language fitted into none of the continent's major families and died out in the early twentieth century.",
        },
        {
          label: "Orinoco and delta",
          text: "The Warao built their houses on stilts along the channels of the delta and travelled by curiara. Upriver, the rapids of Atures worked as a trading hub drawing groups from Guayana, the plains and Amazonia: stone beads were made there, and quiripa — shell beads used as currency — circulated. Petroglyphs of serpents more than forty metres long remain on the rocks of the river.",
        },
        {
          label: "Guayana",
          text: "Pemón and Ye'kwana inhabited — and still inhabit — the south-east and the upper Caura, among tepuis, savanna and rivers. At Cerro Gavilán, near where the Parguaza meets the Orinoco, a rock shelter was occupied without interruption for almost six thousand years, with superimposed rock art and later burials.",
        },
      ],
      outro: [
        "The textbook division between “Caribs” and “Arawaks” comes from the accounts of the first European voyage and simplifies far too much. Today at least five language families are documented in the territory, plus several languages that fit into none of them.",
        "And none of this ended in 1498. The 1999 Constitution recognises indigenous languages as official for their own peoples and reserves three seats for them in the National Assembly; the Mapoyo oral tradition has been inscribed since 2014 on the UNESCO list of intangible heritage in urgent need of safeguarding. At the same time, mining in the Orinoco basin and the crisis of recent years have pushed thousands of Warao and Pemón people out of their territories.",
      ],
    },
    {
      slug: "la-colonia",
      title: "The colony",
      period: "1498 – 1810",
      lede: "Three centuries that changed who lived here, what people lived on, and what language they spoke.",
      paragraphs: [
        "In 1498 Christopher Columbus reached the Paria peninsula: the first European landing on the American mainland. What followed was not a discovery but an occupation, and it began where the wealth was immediate. Within four decades the pearl beds of Cubagua were exhausted, and with them the indigenous population forced to dive for them.",
        "Inland the conquest was slow and violent. Coro was founded in 1527, Valencia in 1555, Caracas in 1567. In 1528 the Crown signed a charter with the Welsers, a merchant house from Augsburg, to conquer, settle and govern the province; it included permission to bring in four thousand enslaved Africans and to enslave any indigenous people who resisted. They governed for some eighteen years, looking for El Dorado rather than founding anything. The original population collapsed through war, forced labour and above all epidemics.",
        "When the gold failed to appear, the economy organised itself around cacao. And cacao needed hands: between the sixteenth and eighteenth centuries thousands of enslaved Africans, mostly from western and central Africa, were brought to these shores. They did not come. They were brought.",
        "Out of that came a society that three boxes cannot explain. There were peninsular whites and creole whites, and a rivalry between them that would finally erupt in 1810. There were free pardos, who became the largest group of all. There were indigenous people in mission villages and others who were never subdued. There were the enslaved, and cimarrones who fled and founded villages of their own.",
      ],
      tags: {
        title: "A society in transformation",
        items: ["Indigenous", "African", "European", "Parda", "Creole", "Cimarrona"],
      },
      outro: [
        "In 1777 the Crown gathered the scattered provinces into the Captaincy General of Venezuela. For the first time this territory had a common administration, and with it the idea that it was a single thing. Thirty-three years later, that idea turned against the power that had created it.",
      ],
    },
    {
      slug: "independencia",
      title: "Independence",
      period: "1810 – 1830",
      lede: "A struggle that began in a town council, became thirteen years of war, and ended by creating two countries.",
      timeline: [
        { year: "1810", text: "The Caracas town council refuses to recognise colonial authority." },
        { year: "1811", text: "Congress declares independence, among the first in Spanish America." },
        { year: "1819", text: "The Congress of Angostura designs Gran Colombia." },
        { year: "1821", text: "Carabobo breaks Spanish military power in Venezuela." },
        { year: "1830", text: "Venezuela separates and is constituted as a republic." },
      ],
      paragraphs: [
        "It began with someone else's crisis. Napoleon invaded Spain in 1808 and left the empire without a king; across Spanish America town councils asked themselves whom they owed obedience to. On 19 April 1810 the Caracas council decided to obey no one and formed a junta. On 5 July 1811 Congress took the next step and declared independence.",
        "What followed was far harder than they expected. The First Republic fell within a year; the Second did not last either. The war was fought inside the territory and also between Venezuelans: many of the llaneros fought at first on the royalist side and only changed sides when the republican project stopped being the business of creole landowners.",
        "The Congress of Angostura, convened in 1819 in what is now Ciudad Bolívar, is the moment the war became a plan. There a large republic was designed — the one that would be called Gran Colombia — able to negotiate with Europe as an equal. The battle of Carabobo, on 24 June 1821, broke Spanish military power in Venezuela; the last royalists left Puerto Cabello in 1823.",
        "Gran Colombia brought together the territories of today's Venezuela, Colombia, Ecuador and Panama, and lasted eleven years. Distance, local interests and rivalries pulled it apart. In 1830 Venezuela separated and was constituted as a republic of its own. That year the country was born and the continental project ended.",
      ],
    },
    {
      slug: "simon-bolivar",
      title: "Simón Bolívar",
      period: "1783 – 1830",
      lede: "Four things are enough to understand why his name is in six countries today.",
      paragraphs: [],
      portrait: {
        src: "/images/commons/simon-bolivar-1825.jpg",
        alt: "Full-length portrait of Simón Bolívar in military uniform, painted by José Gil de Castro in 1825",
        caption: "Simón Bolívar · 1783 – 1830",
        ratio: "2/3",
        credit: {
          title: "Portrait of Simón Bolívar, José Gil de Castro, 1825",
          author: "Casa de la Libertad, Sucre",
          license: "public domain",
          href: "https://commons.wikimedia.org/wiki/File:Sim%C3%B3n_Bol%C3%ADvar,_1825.jpg",
        },
      },
      parts: [
        {
          label: "The man",
          text: "He was born in Caracas in 1783, into one of the richest families in the province, and was orphaned very young. He studied with Simón Rodríguez and Andrés Bello. At twenty-one he was a wealthy creole with no known occupation; at thirty he commanded an army.",
        },
        {
          label: "The liberator",
          text: "He led campaigns from 1813 on, and his role was as much political as military: he kept the war going when the cause seemed lost, financed it, and persuaded those who did not want to fight. It is worth being precise, because it is almost always told wrong: the battles that closed independence in the south, Pichincha and Ayacucho, were won by Antonio José de Sucre. Bolívar was not even at Ayacucho.",
        },
        {
          label: "The idea",
          text: "He believed the new republics, loose and weak, would not survive on their own. In the Jamaica Letter of 1815 he proposed uniting New Granada and Venezuela into a single state to be called Colombia, and he argued the same at the Congress of Angostura. He sustained it to the end and watched it fall apart in the last months of his life.",
          note: {
            title: "Gran Colombia",
            period: "1819 — 1831",
            items: ["Venezuela", "Colombia", "Ecuador", "Panama"],
            caption: "One republic. Four of today's countries.",
            text: "Its official name was the Republic of Colombia; “Gran Colombia” is what historians called it later. It was proclaimed at Angostura in 1819 and legally organised at Cúcuta in 1821. The struggle between central government and regional strongmen broke it in 1830 — the year Bolívar died — and it was formally dissolved in 1831.",
          },
        },
        {
          label: "The legacy",
          text: "He died near Santa Marta in December 1830, aged 47, ill and without a fortune. Bolivia bears his name, and his armies fought in five of the six Bolivarian countries: Panama joined the Republic of Colombia of its own accord in 1821. There are monuments to him from Washington to Cairo, and in Venezuela his figure has been claimed by governments of opposite signs for two centuries.",
        },
      ],
      figures: [
        { value: "1783 – 1830", label: "Born in Caracas, died near Santa Marta" },
        { value: "47", label: "Years he lived" },
        { value: "6", label: "Bolivarian countries", detail: "Venezuela · Colombia · Ecuador · Panama · Peru · Bolivia" },
      ],
      quote: {
        text: "I desire more than any other to see America formed into the greatest nation in the world, less for its size and wealth than for its freedom and glory.",
        author: "Jamaica Letter, Kingston, 6 September 1815",
      },
    },
    {
      slug: "la-nueva-republica",
      title: "The new republic",
      period: "1830 – 1908",
      lede: "Building a country after independence turned out to be harder than winning it.",
      paragraphs: [
        "Venezuela came out of the war ruined and with its population decimated. There were no roads, no state, no money. Power was not won at the ballot box but on horseback, and whoever held it was called a caudillo: José Antonio Páez, the llanero of Carabobo, governed three times and shaped the first decades.",
        "There were, even so, decisions that changed the country for good. In 1854, under the government of José Gregorio Monagas, slavery was abolished. In 1860, Manuel Felipe de Tovar was elected in the first direct secret elections in Venezuelan history.",
        "Between 1859 and 1863 the Federal War set conservatives against federalists and was the bloodiest conflict in the country after independence. Behind the banners lay a real problem: land, and who worked it, had barely changed since colonial times. Out of it came the federal organisation that still gives the states their names, and the figure of Ezequiel Zamora.",
        "Antonio Guzmán Blanco governed on and off between 1870 and 1888. He decreed free compulsory primary education, built public works and modernised the face of Caracas while the rest of the country stayed as it was. The economy lived on coffee and cacao — that is, on whatever Europe would pay for them: when the price of coffee fell, so did the government. The century closed as it had begun, amid uprisings.",
      ],
    },
    {
      slug: "era-del-petroleo",
      title: "The oil era",
      period: "1908 – 1976",
      lede: "The fastest and deepest change in the country's entire history.",
      paragraphs: [],
      parts: [
        {
          label: "Before oil",
          text: "In 1908 Venezuela was a rural country of fewer than three million people living on coffee. Most worked the land, mortality was very high, and the state barely reached beyond Caracas and the provincial capitals.",
        },
        {
          label: "Oil",
          text: "In 1914 the Zumaque I well, at Mene Grande, began producing. In December 1922 the blowout of Barroso II, on the eastern shore of Lake Maracaibo, threw oil into the air for days and showed the world the size of Venezuela's reserves. Juan Vicente Gómez, who governed from 1908 to 1935 with no tolerated opposition, signed the concessions that handed the subsoil to foreign companies.",
        },
        {
          label: "The cities grow",
          text: "The countryside emptied. Maracaibo filled with oil camps and people from all over the west; Caracas went from provincial town to a capital of motorways and new districts. Roads, hospitals and universities were built, and an urban middle class appeared that had not existed before.",
        },
        {
          label: "A new country",
          text: "And something more important appeared: a state with money of its own, no longer dependent on taxing its citizens. That changes the relationship between a government and its society, because it distributes more than it demands, and politics becomes a fight over that distribution. Marcos Pérez Jiménez governed from 1952 to 1958 with monumental public works — motorways, the Mérida cable car, the University City — held up by censorship and the political police.",
        },
        {
          label: "1976 · Nationalisation",
          text: "On 1 January 1976 the state took control of the oil fields and Petróleos de Venezuela was born. The ceremony was held at Mene Grande, beside the well where it had all begun sixty years earlier. PDVSA was organised as a technical company with autonomy from the government of the day, a balance that would be disputed for decades.",
        },
      ],
      photo: {
        src: "/images/commons/muelle-lake-tankers-maracaibo-1930.jpg",
        alt: "Pier with shallow-draft tankers loading oil from Lake Maracaibo, around 1930",
        caption: "Tankers loading oil on Lake Maracaibo, around 1930.",
        ratio: "640/627",
        credit: {
          title: "KITLV Collection, Leiden University Libraries",
          author: "unknown photographer",
          license: "CC BY 4.0",
          href: "https://commons.wikimedia.org/wiki/File:Pier_met_lake-tankers_voor_het_verschepen_van_olie_van_Lagune_Maracaibo_in_Venezuela,_KITLV_9957.tiff",
        },
      },
    },
    {
      slug: "migracion",
      title: "Migration and transformation",
      period: "1940 – 1980",
      lede: "For much of the twentieth century, Venezuela was the country you came to in order to start again.",
      paragraphs: [
        "While Europe emerged from the war in ruins and several neighbouring countries fell into crisis, here there was work, a strong currency and open doors. By 1981 one in fourteen inhabitants had been born abroad: the highest share of the century. It is worth saying how it was done, because that is part of the story: the migration laws of the first half of the century were explicitly racial, and Colombians, the largest group, arrived mostly later and often without papers.",
      ],
      entries: [
        {
          term: "Spain and the Canaries",
          when: "1946 – 1980",
          tags: "Trade · Hospitality · Construction",
          detail:
            "Two thirds arrived in the 1950s, and a third of the total came from the Canary Islands. Canarians, who had been arriving since colonial times, are known here as “los isleños”.",
        },
        {
          term: "Italy",
          when: "1948 – 1961",
          tags: "Construction · Industry · Food",
          detail:
            "Mostly from the south of the country. They built much of modern Caracas and brought a way of eating that stayed: pasta, ice cream, sweet baking.",
        },
        {
          term: "Portugal",
          when: "1950 – 1981",
          tags: "Bakeries · Grocers · City life",
          detail:
            "More than 60% came from Madeira. They were the only group still growing in the 1970s, and the Venezuelan bakery — the mid-morning coffee and cachito — is largely their work.",
        },
        {
          term: "Germany",
          when: "Since 1843",
          tags: "Colonia Tovar · Farming · Trade",
          detail:
            "In 1843, 374 people from the Kaiserstuhl, in south-west Germany, founded Colonia Tovar in the mountains of Aragua: it stayed almost a century in isolation and keeps its dialect and its strawberries. It is one example, not the whole: the bulk of the German presence was in port commerce.",
        },
        {
          term: "Colombia",
          when: "1961 – today",
          tags: "Farming · Construction · The border",
          detail:
            "The largest group since 1981. A border of more than two thousand kilometres, crossed in both directions for decades, which explains half the music and half the accent of the west.",
        },
        {
          term: "Syria and Lebanon",
          when: "Since 1874",
          tags: "Trade · Textiles · Food",
          detail:
            "They came in through Puerto Cabello and Margarita and settled in Caracas, Maracaibo and Valencia. From the cloth trade to Arab bread and kibbeh, sold today on any street corner.",
        },
        {
          term: "China",
          when: "Since 1850",
          tags: "Trade · Restaurants · Grocers",
          detail:
            "Mostly from Guangdong. The law excluded them for decades, but the neighbourhood Chinese restaurant became part of the landscape of every Venezuelan city.",
        },
      ],
      tags: {
        title: "What stayed",
        items: [
          "Food",
          "Architecture",
          "Trade",
          "Farming",
          "Construction",
          "Surnames",
          "Customs",
          "Traditions",
        ],
      },
      outro: [
        "None of this shows up in a statistic. It shows up in an Italian surname in a baseball line-up, in a Portuguese bakery at six in the morning and in the strawberries of Colonia Tovar. It came from somewhere, and it is from here now.",
      ],
    },
    {
      slug: "democracia-y-crisis",
      title: "Democracy and crisis",
      period: "1958 – 1998",
      lede: "Forty years of elected governments that began by building a modern country and ended with no credit left.",
      timeline: [
        { year: "1958", text: "The dictatorship falls and the Punto Fijo Pact is signed." },
        { year: "1976", text: "Oil nationalisation, at the country's most prosperous moment." },
        { year: "1983", text: "Black Friday breaks the bolívar's peg." },
        { year: "1989", text: "The Caracazo." },
        { year: "1992", text: "Two attempted coups." },
      ],
      paragraphs: [
        "On 23 January 1958 a civil-military uprising ended the dictatorship. Weeks later the main parties signed the Punto Fijo Pact: an agreement to respect election results and share the responsibilities of government. It sustained four decades of elected presidents, on a continent that in those same years was filling with dictatorships.",
        "The good part is real and worth remembering. Public education expanded, universities were founded, hospitals, roads and housing were built. In 1969 one party handed power to another by vote for the first time in the country's history. Millions moved from the countryside to the city and from the city to secondary school.",
        "In October 1973 the price of oil shot up and state revenue multiplied. According to the World Bank, output per inhabitant went from around 1,000 dollars in 1970 to around 3,900 in 1980. The bolívar was worth 4.30 to the dollar and had not moved in almost twenty years: hence the phrase that sums up the era, “ta' barato, dame dos” — it's cheap, give me two.",
        "The part almost nobody looked at is that all of it hung on a single product, on a price not decided here, and on a state that distributed without having to collect. When the price fell, the model broke: 18 February 1983, Black Friday, was the last day the dollar traded freely in Venezuela.",
        "On 27 February 1989, with an adjustment package under way, a fare increase set off protests that began in Guarenas and spread to Caracas and other cities. This is the Caracazo: the official toll was 276 dead, and the Inter-American Court found the state responsible in 1999. In 1992 there were two attempted coups; the first was led by a lieutenant colonel named Hugo Chávez, who surrendered on television with two words, “por ahora” — for now. The 1990s brought failed banks, a president removed from office, and parties with no credibility left.",
      ],
    },
    {
      slug: "venezuela-contemporanea",
      title: "Contemporary Venezuela",
      period: "1999 – today",
      lede: "A profound political change, the largest economic crisis in its history, and a country still in motion.",
      paragraphs: [],
      parts: [
        {
          label: "1998 – 1999",
          text: "Hugo Chávez won the December 1998 election. In 1999 a constituent assembly drafted a new Constitution, approved by referendum: it changed the country's name to the Bolivarian Republic of Venezuela and extended the presidential term to six years.",
        },
        {
          label: "The 2000s",
          text: "Years of high oil revenue and sharp polarisation. In April 2002 a coup removed Chávez from power for two days; that December, a general and oil strike paralysed the country. In 2004 he won a recall referendum with 59% of the vote, and in 2009 an amendment allowed indefinite re-election.",
        },
        {
          label: "2013",
          text: "Chávez died in office on 5 March 2013. Nicolás Maduro won the April election by 1.49 points; the National Electoral Council did not grant the full recount the opposition demanded.",
        },
        {
          label: "2014 – 2020",
          text: "Output fell by more than 75% between 2013 and 2021, according to the International Monetary Fund, with hyperinflation from late 2017. There were protests with deaths and detentions in 2014, 2017 and 2019. An independent UN mission concluded in 2020 that there were “reasonable grounds to believe” crimes against humanity had been committed, and the International Criminal Court has been investigating since 2021. Millions of people left the country.",
        },
        {
          label: "2024 – 2025",
          text: "In the presidential election of 28 July 2024 the National Electoral Council proclaimed Maduro the winner and never published the tally sheets; it still has not. The Carter Center, the only accredited international observer, concluded that the election cannot be considered democratic. Maduro was sworn in for a third term in January 2025 and, in October, María Corina Machado received the Nobel Peace Prize.",
        },
        {
          label: "2026",
          text: "On 3 January 2026, United States forces captured Maduro and took him to New York, where he is charged with narco-terrorism, cocaine trafficking and weapons offences; he pleaded not guilty and the trial is set for 2027. Since then Delcy Rodríguez has served as acting president, with no elections called. On 24 June, two earthquakes of magnitude 7.2 and 7.5 devastated seven states in the north-centre: 6,438 dead according to the official toll of 17 August. In August a first round of talks opened in Caracas between the acting government and part of the opposition.",
        },
      ],
    },
  ],

  facts: {
    label: "Venezuela in figures",
    title: "The country, in eight numbers.",
    lede: "A quick look before the final chapter. The last census with published results is the one from 2011, so almost everything below is an estimate: each figure carries who signs it and from when.",
    items: [
      {
        label: "Population",
        value: "28.5 million",
        detail:
          "An estimate, not a count. The official Venezuelan projection gives 33.4 million, because it projects from the 2011 census without deducting later emigration.",
        source: "United Nations · 2025",
      },
      {
        label: "Capital",
        value: "Caracas",
        detail: "The city is divided among five municipalities in two different entities.",
        source: "Constitution, article 18",
      },
      {
        label: "Refugees and migrants from Venezuela",
        value: "6,978,009",
        detail:
          "In Latin America and the Caribbean. That is the exact label used by the source, which adds up host-government data with cut-off dates of their own. Worldwide, UNHCR works with a figure close to 7.9 million.",
        source: "R4V (UNHCR and IOM) · August 2026",
      },
      {
        label: "Official language",
        value: "Castilian Spanish",
        detail:
          "That is what the Constitution calls it; it adds that indigenous languages are also of official use for their own peoples, and it recognises Venezuelan sign language.",
        source: "Constitution, article 9",
      },
      {
        label: "Indigenous languages",
        value: "37 living",
        detail:
          "The count changes with the classification used: other sources give 34, or more than 70. Wayuunaiki, Warao and Pemón are among those with the most speakers.",
        source: "Ethnologue · 2026",
      },
      {
        label: "Currency",
        value: "The bolívar",
        detail: "Written Bs. The current scale has been in force since October 2021.",
        source: "Central Bank of Venezuela",
      },
      {
        label: "Area",
        value: "916,445 km²",
        detail:
          "The official Venezuelan figure, which does not include the Guayana Esequiba, under claim. International bodies use between 912,050 and 929,690 km².",
        source: "Official Venezuelan figure · since 1996",
      },
      {
        label: "Religion",
        value: "63% Catholic",
        detail:
          "Plus 16% evangelical, 6% other Christian churches and 8% with no religion. There is no official statistic: the census does not ask about belief, so this is a survey of a thousand cases.",
        source: "Centro Gumilla survey · 2025",
      },
    ],
  },

  closing: {
    slug: "venezuela-hoy",
    title: "Venezuela today",
    period: "The country that exists now",
    lede: "After centuries of encounters, conflicts, migrations and transformations, Venezuela is still hard to sum up in a single identity.",
    paragraphs: [
      "A young, urban, mixed country. In the 2011 census, the most recent one published, more than half the people described themselves as “morena”: the word that here covers almost the whole spectrum between European, African and indigenous, and the hardest one to translate into any other language.",
    ],
    bars: [
      { label: "Morena / moreno", value: "51.6%", percent: 51.6 },
      { label: "White", value: "43.6%", percent: 43.6 },
      { label: "Black", value: "2.9%", percent: 2.9 },
      { label: "Other", value: "1.2%", percent: 1.2 },
      { label: "Afro-descendant", value: "0.7%", percent: 0.7 },
    ],
    barsSource:
      "Self-identification declared by each person. INE Population and Housing Census · 2011",
    outro: [
      "The first peoples are still here: 724,592 people in 2011, the Wayuu in La Guajira, the Warao in the delta, the Pemón in the Gran Sabana. On top of that base are those who arrived and also those who left. Few Venezuelan families have nobody abroad.",
      "But Venezuela is not fully understood in figures. It is understood in the smell of an arepa at seven in the morning, in the gaita playing in December in Maracaibo and also in Madrid, in the joropo and the drums of San Juan, in a “vale” and a “na' guará” nobody ever had to teach anyone. All of it came from somewhere, mixed here, and left with those who left.",
    ],
    quote: {
      text: "History does not explain a country. It explains its people.",
      author: "",
    },
  },
};
