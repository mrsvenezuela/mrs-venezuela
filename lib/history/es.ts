import type { HistoryContent } from "./types";

/*
 * El maestro. Los demás idiomas se traducen desde aquí y comparten los `slug`,
 * los `percent`, las rutas de las imágenes y todas las cifras: si se corrige un
 * dato hay que corregirlo en los cinco archivos.
 *
 * Reglas de la página:
 *  - Ninguna cifra sin la institución que la firma y el año.
 *  - Donde las fuentes discrepan, el texto lo dice en lugar de elegir en silencio.
 *  - Los datos que cambian —población, diáspora, religión— llevan fuente visible.
 *  - Ninguna imagen sin licencia comprobada y crédito.
 *  - La página no enlaza a otras guías del sitio: se lee entera y se acaba.
 */
export const historyEs: HistoryContent = {
  eyebrow: "Historia de Venezuela",
  title: "La historia de Venezuela no empieza con la llegada europea.",
  intro:
    "Empieza miles de años antes, en un territorio habitado por sociedades muy distintas entre sí. Lo que vino después —la colonia, la independencia, el petróleo, las migraciones— fue transformando ese punto de partida hasta llegar al país de hoy.",
  introTimeline: ["Antes de 1498", "1498", "1811", "1830", "1914", "1958", "Hoy"],
  indexLabel: "En esta guía",
  backLabel: "Volver al inicio",
  topLabel: "Volver arriba",

  chapters: [
    {
      slug: "pueblos-originarios",
      title: "Pueblos originarios",
      period: "Antes de 1498",
      lede: "No un pueblo ni una cultura: decenas de sociedades distintas, con lenguas, economías y formas de habitar el territorio que no se parecían entre sí.",
      paragraphs: [
        "Hace al menos trece mil años ya había gente aquí. En Taima-Taima, cerca de Coro, se excavó el sitio donde un grupo de cazadores despiezó un mastodonte joven; en el Orinoco medio hay abrigos rocosos ocupados de forma continuada desde hace más de nueve mil años. Sobre las dataciones más antiguas hay debate académico, pero el orden de magnitud no está en duda.",
        "Cuando llegaron los europeos, el territorio no estaba organizado como un país sino como un conjunto de regiones que comerciaban entre sí. Cada una había resuelto de una manera distinta el problema de vivir donde vivía.",
      ],
      parts: [
        {
          label: "Caribe y costa",
          text: "Pesca, sal y perlas. Los bancos de ostras de Cubagua, Coche y Margarita estaban entre los más ricos del mundo, y las perlas se cambiaban por oro y cerámica en ferias de trueque de la costa. Los caquetíos, de lengua arawak, ocupaban lo que hoy son Falcón, Lara, Yaracuy, Portuguesa y las riberas del lago de Maracaibo, y llegaban hasta Aruba, Bonaire y Curazao.",
        },
        {
          label: "Los Andes",
          text: "Los timoto-cuicas cultivaban en terrazas escalonadas, con acequias y depósitos de agua pensados para la montaña, y guardaban las cosechas en mintoyes: silos de piedra que también servían de espacio funerario. Su lengua no encajaba en ninguna de las grandes familias del continente y se extinguió a comienzos del siglo XX.",
        },
        {
          label: "Orinoco y delta",
          text: "Los warao levantaban sus viviendas sobre pilotes en los caños del delta y se movían en curiara. Aguas arriba, los raudales de Atures funcionaban como un centro de intercambio al que acudían grupos de la Guayana, los llanos y la Amazonía: allí se fabricaban cuentas de piedra y circulaba la quiripa, cuentas de concha que servían de moneda. En las rocas del río quedan petroglifos de serpientes de más de cuarenta metros.",
        },
        {
          label: "Guayana",
          text: "Pemón y ye'kwana habitaban —y habitan— el sureste y el alto Caura, entre tepuyes, sabana y ríos. En Cerro Gavilán, cerca de donde el Parguaza desemboca en el Orinoco, hay un abrigo rocoso ocupado sin interrupción durante casi seis mil años, con arte rupestre superpuesto y enterramientos posteriores.",
        },
      ],
      outro: [
        "La división escolar entre «caribes» y «arawacos» viene de los relatos del primer viaje europeo y simplifica demasiado. Hoy se documentan al menos cinco familias lingüísticas en el territorio, más varias lenguas que no encajan en ninguna.",
        "Y nada de esto terminó en 1498. La Constitución de 1999 reconoce los idiomas indígenas como de uso oficial para sus pueblos y les reserva tres escaños en la Asamblea Nacional; la tradición oral mapoyo está inscrita desde 2014 en la lista de la UNESCO de patrimonio inmaterial que necesita salvaguardia urgente. Al mismo tiempo, la minería en la cuenca del Orinoco y la crisis de los últimos años han empujado a miles de personas warao y pemón fuera de sus territorios.",
      ],
    },
    {
      slug: "la-colonia",
      title: "La colonia",
      period: "1498 – 1810",
      lede: "Tres siglos que cambiaron quién vivía aquí, de qué se vivía y en qué idioma se hablaba.",
      paragraphs: [
        "En 1498 Cristóbal Colón llegó a la península de Paria: el primer desembarco europeo en tierra firme americana. Lo que siguió no fue un descubrimiento sino una ocupación, y empezó por donde había riqueza inmediata. En cuatro décadas los bancos de perlas de Cubagua estaban agotados, y con ellos la población indígena obligada a bucear.",
        "Tierra adentro la conquista fue lenta y violenta. Coro se fundó en 1527, Valencia en 1555, Caracas en 1567. En 1528 la Corona firmó con los Welser, una casa comercial de Augsburgo, una capitulación para conquistar, poblar y gobernar la provincia; incluía permiso para introducir cuatro mil personas esclavizadas de África y para esclavizar a los indígenas que resistieran. Gobernaron unos dieciocho años, buscando El Dorado más que fundando nada. La población originaria cayó por la guerra, por el trabajo forzado y sobre todo por las epidemias.",
        "Cuando el oro no apareció, la economía se ordenó alrededor del cacao. Y el cacao necesitaba brazos: entre los siglos XVI y XVIII llegaron a estas costas miles de africanos esclavizados, sobre todo de África occidental y central. No vinieron. Los trajeron.",
        "De ahí sale una sociedad que no se explica con tres casillas. Había blancos peninsulares y blancos criollos, y entre ellos una rivalidad que acabaría estallando en 1810. Había pardos libres, que llegaron a ser el grupo más numeroso. Había indígenas en pueblos de misión y otros que nunca fueron sometidos. Había esclavizados, y cimarrones que huyeron y fundaron sus propios pueblos.",
      ],
      tags: {
        title: "Una sociedad en transformación",
        items: ["Indígena", "Africana", "Europea", "Parda", "Criolla", "Cimarrona"],
      },
      outro: [
        "En 1777 la Corona reunió las provincias dispersas en la Capitanía General de Venezuela. Por primera vez este territorio tuvo una administración común, y con ella la idea de que era una sola cosa. Treinta y tres años después, esa idea se volvió contra quien la había creado.",
      ],
    },
    {
      slug: "independencia",
      title: "Independencia",
      period: "1810 – 1830",
      lede: "Un pulso que empezó en un cabildo, se convirtió en trece años de guerra y terminó creando dos países.",
      timeline: [
        { year: "1810", text: "El cabildo de Caracas desconoce a la autoridad colonial." },
        { year: "1811", text: "El Congreso declara la independencia, de las primeras de Hispanoamérica." },
        { year: "1819", text: "El Congreso de Angostura diseña la Gran Colombia." },
        { year: "1821", text: "Carabobo rompe el poder militar español en Venezuela." },
        { year: "1830", text: "Venezuela se separa y queda constituida como república." },
      ],
      paragraphs: [
        "Empezó por una crisis ajena. Napoleón invadió España en 1808 y dejó al imperio sin rey; en toda la América hispana los cabildos se preguntaron a quién debían obediencia. El 19 de abril de 1810 el de Caracas resolvió no obedecer a nadie y formó una junta. El 5 de julio de 1811 el Congreso dio el paso siguiente y declaró la independencia.",
        "Lo que vino después fue mucho más duro de lo que esperaban. La Primera República cayó en un año; la Segunda tampoco duró. La guerra se peleó dentro del territorio y también entre venezolanos: buena parte de los llaneros combatió al principio del lado realista y solo cambió de bando cuando el proyecto republicano dejó de ser cosa de propietarios criollos.",
        "El Congreso de Angostura, instalado en 1819 en la actual Ciudad Bolívar, es el momento en que la guerra se convierte en un plan. Allí se diseñó una república grande —la que se llamaría Gran Colombia— capaz de negociar con Europa de igual a igual. La batalla de Carabobo, el 24 de junio de 1821, rompió el poder militar español en Venezuela; los últimos realistas salieron de Puerto Cabello en 1823.",
        "La Gran Colombia reunió los territorios de las actuales Venezuela, Colombia, Ecuador y Panamá, y duró once años. Las distancias, los intereses locales y las rivalidades la desarmaron. En 1830 Venezuela se separó y quedó constituida como república propia. Ese año nació el país y se terminó el proyecto continental.",
      ],
    },
    {
      slug: "simon-bolivar",
      title: "Simón Bolívar",
      period: "1783 – 1830",
      lede: "Cuatro cosas bastan para entender por qué su nombre está hoy en seis países.",
      paragraphs: [],
      portrait: {
        src: "/images/commons/simon-bolivar-1825.jpg",
        alt: "Retrato de Simón Bolívar de cuerpo entero, en uniforme militar, pintado por José Gil de Castro en 1825",
        caption: "Simón Bolívar · 1783 – 1830",
        ratio: "2/3",
        credit: {
          title: "Retrato de Simón Bolívar, José Gil de Castro, 1825",
          author: "Casa de la Libertad, Sucre",
          license: "dominio público",
          href: "https://commons.wikimedia.org/wiki/File:Sim%C3%B3n_Bol%C3%ADvar,_1825.jpg",
        },
      },
      parts: [
        {
          label: "El hombre",
          text: "Nació en Caracas en 1783, en una de las familias más ricas de la provincia, y quedó huérfano muy pronto. Estudió con Simón Rodríguez y con Andrés Bello. A los veintiuno era un criollo rico sin oficio conocido; a los treinta mandaba un ejército.",
        },
        {
          label: "El libertador",
          text: "Condujo campañas desde 1813, y su papel fue tanto militar como político: sostuvo la guerra cuando la causa parecía perdida, la financió y convenció a quienes no querían pelear. Conviene decirlo con precisión, porque casi siempre se cuenta mal: las batallas que cerraron la independencia del sur, Pichincha y Ayacucho, las ganó Antonio José de Sucre. En Ayacucho Bolívar ni siquiera estaba.",
        },
        {
          label: "La idea",
          text: "Pensaba que las repúblicas nuevas, sueltas y débiles, no iban a sobrevivir solas. En la Carta de Jamaica, en 1815, propuso unir Nueva Granada y Venezuela en un solo Estado que se llamaría Colombia, y eso mismo defendió en el Congreso de Angostura. La sostuvo hasta el final y la vio deshacerse en los últimos meses de su vida.",
          note: {
            title: "Gran Colombia",
            period: "1819 — 1831",
            items: ["Venezuela", "Colombia", "Ecuador", "Panamá"],
            caption: "Una república. Cuatro países actuales.",
            text: "Su nombre oficial fue República de Colombia; «Gran Colombia» se lo pusieron después los historiadores. Se proclamó en Angostura en 1819 y quedó organizada en Cúcuta en 1821. El pulso entre centralismo y caudillos regionales la rompió en 1830 —el año en que murió Bolívar— y se disolvió formalmente en 1831.",
          },
        },
        {
          label: "El legado",
          text: "Murió cerca de Santa Marta en diciembre de 1830, con 47 años, enfermo y sin fortuna. Bolivia lleva su nombre, y sus ejércitos pelearon en cinco de los seis países bolivarianos: Panamá se unió por su cuenta a la República de Colombia en 1821. Hay monumentos suyos desde Washington hasta El Cairo, y en Venezuela su figura ha sido reclamada por gobiernos de signos opuestos durante dos siglos.",
        },
      ],
      figures: [
        { value: "1783 – 1830", label: "Nació en Caracas y murió cerca de Santa Marta" },
        { value: "47", label: "Años que vivió" },
        { value: "6", label: "Países bolivarianos", detail: "Venezuela · Colombia · Ecuador · Panamá · Perú · Bolivia" },
      ],
      quote: {
        text: "Yo deseo más que otro alguno ver formar en América la más grande nación del mundo, menos por su extensión y riquezas que por su libertad y gloria.",
        author: "Carta de Jamaica, Kingston, 6 de septiembre de 1815",
      },
    },
    {
      slug: "la-nueva-republica",
      title: "La nueva república",
      period: "1830 – 1908",
      lede: "Construir un país después de la independencia resultó más difícil que ganarla.",
      paragraphs: [
        "Venezuela salió de la guerra arruinada y con la población diezmada. No había caminos, ni Estado, ni dinero. El poder no se ganaba en las urnas sino a caballo, y quien lo tenía se llamaba caudillo: José Antonio Páez, el llanero de Carabobo, gobernó tres veces y marcó las primeras décadas.",
        "Hubo, aun así, decisiones que cambiaron el país para siempre. En 1854, bajo el gobierno de José Gregorio Monagas, se abolió la esclavitud. En 1860, Manuel Felipe de Tovar fue elegido en las primeras elecciones directas y secretas de la historia venezolana.",
        "Entre 1859 y 1863 la Guerra Federal enfrentó a conservadores y federalistas y fue el conflicto más sangriento del país después de la independencia. Detrás de las banderas había un problema real: la tierra y quién la trabajaba seguían casi igual que en la colonia. De ahí salieron la organización federal que todavía da nombre a los estados y la figura de Ezequiel Zamora.",
        "Antonio Guzmán Blanco gobernó de forma intermitente entre 1870 y 1888. Decretó la educación primaria gratuita y obligatoria, levantó obra pública y modernizó la fachada de Caracas mientras el resto del país seguía igual. La economía vivía del café y del cacao, es decir, de lo que se pagara por ellos en Europa: cuando el precio del café caía, caía también el gobierno. El siglo se cerró como había empezado, entre alzamientos.",
      ],
    },
    {
      slug: "era-del-petroleo",
      title: "La era del petróleo",
      period: "1908 – 1976",
      lede: "El cambio más rápido y más profundo de toda la historia del país.",
      paragraphs: [],
      parts: [
        {
          label: "Antes del petróleo",
          text: "En 1908 Venezuela era un país rural de menos de tres millones de habitantes que vivía del café. La mayoría de la gente trabajaba la tierra, la mortalidad era altísima y el Estado apenas llegaba más allá de Caracas y de las capitales de provincia.",
        },
        {
          label: "El petróleo",
          text: "En 1914 empezó a producir el pozo Zumaque I, en Mene Grande. En diciembre de 1922 el reventón del Barroso II, en la costa oriental del lago de Maracaibo, estuvo días lanzando petróleo al aire y le enseñó al mundo el tamaño de las reservas venezolanas. Juan Vicente Gómez, que gobernó de 1908 a 1935 sin oposición tolerada, firmó las concesiones que entregaron el subsuelo a las compañías extranjeras.",
        },
        {
          label: "Las ciudades crecen",
          text: "El campo se vació. Maracaibo se llenó de campos petroleros y de gente venida de todo el occidente; Caracas pasó de ciudad de provincia a capital de autopistas y urbanizaciones. Se construyeron carreteras, hospitales y universidades, y apareció una clase media urbana que antes no existía.",
        },
        {
          label: "Un país nuevo",
          text: "Y apareció algo más importante: un Estado con dinero propio, que ya no dependía de los impuestos de sus ciudadanos. Eso cambia la relación entre un gobierno y su sociedad, porque reparte más de lo que exige y la política se convierte en la disputa por ese reparto. Marcos Pérez Jiménez gobernó de 1952 a 1958 con una obra pública monumental —autopistas, el teleférico de Mérida, la Ciudad Universitaria— sostenida sobre la censura y la policía política.",
        },
        {
          label: "1976 · La nacionalización",
          text: "El 1 de enero de 1976 el Estado tomó el control de los campos petroleros y nació Petróleos de Venezuela. El acto se hizo en Mene Grande, junto al pozo donde todo había empezado sesenta años antes. PDVSA se organizó como una empresa técnica con autonomía frente al gobierno de turno, un equilibrio que sería discutido durante décadas.",
        },
      ],
      photo: {
        src: "/images/commons/muelle-lake-tankers-maracaibo-1930.jpg",
        alt: "Muelle con buques de poco calado cargando petróleo del lago de Maracaibo, hacia 1930",
        caption: "Buques cargando petróleo en el lago de Maracaibo, hacia 1930.",
        ratio: "640/627",
        credit: {
          title: "Colección KITLV, Leiden University Libraries",
          author: "autor desconocido",
          license: "CC BY 4.0",
          href: "https://commons.wikimedia.org/wiki/File:Pier_met_lake-tankers_voor_het_verschepen_van_olie_van_Lagune_Maracaibo_in_Venezuela,_KITLV_9957.tiff",
        },
      },
    },
    {
      slug: "migracion",
      title: "Migración y transformación",
      period: "1940 – 1980",
      lede: "Durante buena parte del siglo XX, Venezuela fue el país al que se venía a empezar de nuevo.",
      paragraphs: [
        "Mientras Europa salía destruida de la guerra y varios países vecinos entraban en crisis, aquí había trabajo, moneda fuerte y las puertas abiertas. En 1981, uno de cada catorce habitantes había nacido fuera: el máximo del siglo. Conviene decir cómo se hizo, porque forma parte de la historia: las leyes migratorias de la primera mitad del siglo eran explícitamente raciales, y los colombianos, el grupo más numeroso, llegaron sobre todo después y muchas veces sin papeles.",
      ],
      entries: [
        {
          term: "España y Canarias",
          when: "1946 – 1980",
          tags: "Comercio · Hostelería · Construcción",
          detail:
            "Dos tercios llegaron en los años cincuenta, y un tercio del total venía de Canarias. A los canarios, que llegaban desde la colonia, aquí se les dice «los isleños».",
        },
        {
          term: "Italia",
          when: "1948 – 1961",
          tags: "Construcción · Industria · Gastronomía",
          detail:
            "Sobre todo del sur del país. Levantaron buena parte de la Caracas moderna y trajeron una manera de comer que se quedó: la pasta, el helado, la panadería dulce.",
        },
        {
          term: "Portugal",
          when: "1950 – 1981",
          tags: "Panaderías · Abastos · Vida urbana",
          detail:
            "Más del 60% venía de Madeira. Fueron los únicos que siguieron creciendo en los setenta, y la panadería venezolana —el cafecito y el cachito de media mañana— es en buena medida obra suya.",
        },
        {
          term: "Alemania",
          when: "Desde 1843",
          tags: "Colonia Tovar · Agricultura · Comercio",
          detail:
            "En 1843, 374 personas del Kaiserstuhl, en el suroeste alemán, fundaron la Colonia Tovar en las montañas de Aragua: quedó casi un siglo aislada y conserva su dialecto y sus fresas. Es un ejemplo, no el conjunto: el grueso de la presencia alemana estuvo en el comercio de los puertos.",
        },
        {
          term: "Colombia",
          when: "1961 – hoy",
          tags: "Agricultura · Construcción · Frontera",
          detail:
            "El grupo más numeroso desde 1981. Una frontera de más de dos mil kilómetros que durante décadas se cruzó en los dos sentidos, y que explica media música y medio acento del occidente.",
        },
        {
          term: "Siria y Líbano",
          when: "Desde 1874",
          tags: "Comercio · Telas · Gastronomía",
          detail:
            "Entraron por Puerto Cabello y por Margarita y se asentaron en Caracas, Maracaibo y Valencia. Del comercio de telas al pan árabe y el quibbe, que hoy se venden en cualquier esquina.",
        },
        {
          term: "China",
          when: "Desde 1850",
          tags: "Comercio · Restaurantes · Abastos",
          detail:
            "Sobre todo de Guangdong. La ley los excluyó durante décadas, pero el restaurante chino de barrio terminó siendo parte del paisaje de cualquier ciudad venezolana.",
        },
      ],
      tags: {
        title: "Lo que quedó",
        items: [
          "Gastronomía",
          "Arquitectura",
          "Comercio",
          "Agricultura",
          "Construcción",
          "Apellidos",
          "Costumbres",
          "Tradiciones",
        ],
      },
      outro: [
        "Nada de esto se ve en una estadística. Se ve en un apellido italiano en la alineación de un equipo de béisbol, en una panadería portuguesa a las seis de la mañana y en las fresas de Colonia Tovar. Llegó de algún sitio, y ya es de aquí.",
      ],
    },
    {
      slug: "democracia-y-crisis",
      title: "Democracia y crisis",
      period: "1958 – 1998",
      lede: "Cuarenta años de gobiernos electos que empezaron construyendo un país moderno y terminaron sin crédito.",
      timeline: [
        { year: "1958", text: "Cae la dictadura y se firma el Pacto de Punto Fijo." },
        { year: "1976", text: "Nacionalización petrolera, en el momento más próspero del país." },
        { year: "1983", text: "El Viernes Negro rompe la paridad del bolívar." },
        { year: "1989", text: "El Caracazo." },
        { year: "1992", text: "Dos intentos de golpe de Estado." },
      ],
      paragraphs: [
        "El 23 de enero de 1958 una insurrección cívico-militar puso fin a la dictadura. Semanas después los principales partidos firmaron el Pacto de Punto Fijo: un acuerdo para respetar los resultados electorales y repartirse las responsabilidades de gobierno. Sostuvo cuatro décadas de presidentes electos, en un continente que en esos mismos años se llenaba de dictaduras.",
        "La parte buena es real y conviene no olvidarla. Se amplió la educación pública, se fundaron universidades, se construyeron hospitales, carreteras y viviendas. En 1969 un partido entregó el poder a otro por votación por primera vez en la historia del país. Millones de personas pasaron del campo a la ciudad y de la ciudad al liceo.",
        "En octubre de 1973 el precio del petróleo se disparó y los ingresos del Estado se multiplicaron. Según el Banco Mundial, el producto por habitante pasó de unos 1.000 dólares en 1970 a unos 3.900 en 1980. El bolívar valía 4,30 por dólar y llevaba casi veinte años sin moverse: de ahí viene la frase que resume la época, «ta' barato, dame dos».",
        "La parte que casi nadie miró es que todo colgaba de un solo producto, de un precio que no se decidía aquí y de un Estado que repartía sin tener que recaudar. Cuando el precio cayó, el modelo se rompió: el 18 de febrero de 1983, el Viernes Negro, fue el último día en que el dólar se cotizó libremente en Venezuela.",
        "El 27 de febrero de 1989, con un paquete de ajuste en marcha, el aumento del pasaje desató protestas que empezaron en Guarenas y se extendieron a Caracas y a otras ciudades. Es el Caracazo: la cifra oficial fue de 276 muertos y la Corte Interamericana declaró responsable al Estado en 1999. En 1992 hubo dos intentos de golpe; el primero lo dirigió un teniente coronel llamado Hugo Chávez, que se rindió en televisión con dos palabras, «por ahora». Los años noventa fueron de bancos quebrados, un presidente separado del cargo y partidos sin crédito.",
      ],
    },
    {
      slug: "venezuela-contemporanea",
      title: "Venezuela contemporánea",
      period: "1999 – hoy",
      lede: "Un cambio político profundo, la mayor crisis económica de su historia y un país que sigue en movimiento.",
      paragraphs: [],
      parts: [
        {
          label: "1998 – 1999",
          text: "Hugo Chávez ganó las elecciones de diciembre de 1998. En 1999 una asamblea constituyente redactó una Constitución nueva, aprobada en referéndum: cambió el nombre del país a República Bolivariana de Venezuela y alargó el mandato presidencial a seis años.",
        },
        {
          label: "La década de 2000",
          text: "Años de altos ingresos petroleros y de fuerte polarización. En abril de 2002 un golpe apartó a Chávez del poder durante dos días; ese diciembre, un paro general y petrolero paralizó el país. En 2004 ganó un referéndum revocatorio con el 59% de los votos, y en 2009 una enmienda permitió la reelección indefinida.",
        },
        {
          label: "2013",
          text: "Chávez murió en el cargo el 5 de marzo de 2013. Nicolás Maduro ganó las elecciones de abril por 1,49 puntos; el Consejo Nacional Electoral no concedió el recuento total que pidió la oposición.",
        },
        {
          label: "2014 – 2020",
          text: "El producto cayó más del 75% entre 2013 y 2021, según el Fondo Monetario Internacional, con hiperinflación desde finales de 2017. Hubo protestas con muertos y detenidos en 2014, 2017 y 2019. Una misión independiente de la ONU concluyó en 2020 que había «motivos razonables para creer» que se cometieron crímenes de lesa humanidad, y la Corte Penal Internacional investiga desde 2021. Millones de personas se fueron del país.",
        },
        {
          label: "2024 – 2025",
          text: "En las presidenciales del 28 de julio de 2024 el Consejo Nacional Electoral proclamó ganador a Maduro y nunca publicó las actas; sigue sin hacerlo. El Centro Carter, único observador internacional acreditado, concluyó que la elección no puede considerarse democrática. Maduro juró un tercer mandato en enero de 2025 y, en octubre, María Corina Machado recibió el Premio Nobel de la Paz.",
        },
        {
          label: "2026",
          text: "El 3 de enero de 2026, fuerzas de Estados Unidos capturaron a Maduro y lo trasladaron a Nueva York, donde está acusado de narcoterrorismo, tráfico de cocaína y delitos de armas; se declaró no culpable y el juicio está fijado para 2027. Desde entonces Delcy Rodríguez ejerce como presidenta encargada, sin que se hayan convocado elecciones. El 24 de junio, dos terremotos de magnitudes 7,2 y 7,5 devastaron siete estados del centro-norte: 6.438 muertos según el balance oficial del 17 de agosto. En agosto se abrió en Caracas una primera ronda de conversaciones entre el gobierno encargado y parte de la oposición.",
        },
      ],
    },
  ],

  facts: {
    label: "Venezuela en datos",
    title: "El país, en ocho cifras.",
    lede: "Una mirada rápida antes del último capítulo. El último censo con resultados publicados es el de 2011, así que casi todo lo que sigue son estimaciones: cada dato lleva quién lo firma y de cuándo es.",
    items: [
      {
        label: "Población",
        value: "28,5 millones",
        detail:
          "Es una estimación, no un recuento. La proyección oficial venezolana da 33,4 millones, porque parte del censo de 2011 sin descontar la emigración posterior.",
        source: "Naciones Unidas · 2025",
      },
      {
        label: "Capital",
        value: "Caracas",
        detail: "La ciudad se reparte entre cinco municipios de dos entidades distintas.",
        source: "Constitución, artículo 18",
      },
      {
        label: "Refugiados y migrantes de Venezuela",
        value: "6.978.009",
        detail:
          "En América Latina y el Caribe. Es la etiqueta exacta de la fuente, que suma datos de los gobiernos de acogida con fechas de corte propias. En todo el mundo, ACNUR maneja una cifra cercana a los 7,9 millones.",
        source: "R4V (ACNUR y OIM) · agosto de 2026",
      },
      {
        label: "Idioma oficial",
        value: "El castellano",
        detail:
          "Así lo llama la Constitución, que añade que los idiomas indígenas son también de uso oficial para sus pueblos y reconoce la lengua de señas venezolana.",
        source: "Constitución, artículo 9",
      },
      {
        label: "Lenguas indígenas",
        value: "37 vivas",
        detail:
          "La cuenta cambia según la clasificación: otras fuentes hablan de 34 o de más de 70. Wayuunaiki, warao y pemón están entre las de más hablantes.",
        source: "Ethnologue · 2026",
      },
      {
        label: "Moneda",
        value: "El bolívar",
        detail: "Se escribe Bs. La escala vigente rige desde octubre de 2021.",
        source: "Banco Central de Venezuela",
      },
      {
        label: "Superficie",
        value: "916.445 km²",
        detail:
          "Cifra oficial venezolana, que no incluye la Guayana Esequiba, en reclamación. Los organismos internacionales manejan entre 912.050 y 929.690 km².",
        source: "Cifra oficial venezolana · desde 1996",
      },
      {
        label: "Religión",
        value: "63% católicos",
        detail:
          "Más un 16% de evangélicos, un 6% de otras iglesias cristianas y un 8% sin religión. No hay estadística oficial: el censo no pregunta por creencias, así que esto es una encuesta de mil casos.",
        source: "Encuesta Centro Gumilla · 2025",
      },
    ],
  },

  closing: {
    slug: "venezuela-hoy",
    title: "Venezuela hoy",
    period: "El país que existe ahora",
    lede: "Después de siglos de encuentros, conflictos, migraciones y transformaciones, Venezuela sigue siendo difícil de resumir en una sola identidad.",
    paragraphs: [
      "Un país joven, urbano y mezclado. En el censo de 2011, el más reciente publicado, más de la mitad de la gente se declaró «morena»: la palabra que aquí cubre casi todo el espectro entre lo europeo, lo africano y lo indígena, y la más difícil de traducir a cualquier otro idioma.",
    ],
    bars: [
      { label: "Morena / moreno", value: "51,6%", percent: 51.6 },
      { label: "Blanca / blanco", value: "43,6%", percent: 43.6 },
      { label: "Negra / negro", value: "2,9%", percent: 2.9 },
      { label: "Otra", value: "1,2%", percent: 1.2 },
      { label: "Afrodescendiente", value: "0,7%", percent: 0.7 },
    ],
    barsSource:
      "Autoidentificación declarada por cada persona. Censo de Población y Vivienda del INE · 2011",
    outro: [
      "Los pueblos originarios siguen ahí: 724.592 personas en 2011, los wayuu en La Guajira, los warao en el delta, los pemón en la Gran Sabana. Encima de esa base están los que llegaron y también los que se fueron. Pocas familias venezolanas no tienen a alguien afuera.",
      "Pero Venezuela no se entiende del todo en cifras. Se entiende en el olor de una arepa a las siete de la mañana, en la gaita que suena en diciembre en Maracaibo y también en Madrid, en el joropo y el tambor de San Juan, en un «vale» y un «na' guará» que nadie tuvo que enseñarle a nadie. Todo eso llegó de algún sitio, se mezcló aquí, y se fue con quien se fue.",
    ],
    quote: {
      text: "La historia no explica un país. Explica a su gente.",
      author: "",
    },
  },
};
