import type { ThematicContent } from "./types";

/* Traducción del maestro `es.ts`. Mismos slug, mismas imágenes, mismos enlaces. */
export const thematicZh: ThematicContent = {
  "caribe-y-playa": {
    slug: "caribe-y-playa",
    eyebrow: "面朝大海的委内瑞拉",
    title: "加勒比与海滩",
    intro:
      "近2400公里的加勒比海岸线，十二组岛屿，以及一条从这个海湾到下一个海湾就换一种性格的海岸。",
    hero: {
      src: "/images/cayo-de-agua.jpg",
      alt: "洛斯罗克斯群岛「水岛」的沙洲与碧绿海水",
    },
    meta: {
      title: "委内瑞拉的加勒比与海滩 | Mrs Venezuela",
      description:
        "委内瑞拉的海岸与岛屿：洛斯罗克斯、玛格丽塔、莫罗科伊、莫奇马、乔罗尼、帕里亚、拉托尔图加与银岛，以及海岸线自西向东的变化。",
    },
    indexLabel: "本指南目录",
    backLabel: "返回首页",
    sections: [
      {
        slug: "el-caribe-venezolano",
        number: "01",
        title: "委内瑞拉的加勒比",
        lede: "委内瑞拉没有一条海岸，而是好几条。海岸线从沙丘变成红树林，从珊瑚沙洲变成峭壁，从开阔海湾变成被山脉围拢的港湾。再加上远在海上的那些岛屿，又是另一回事。",
        layout: "band",
        photo: {
          src: "/images/commons/morrocoy-sea-island.jpg",
          alt: "法尔孔州莫罗科伊国家公园里的一座沙洲，四周是碧绿海水",
        },
        items: [
          { title: "沙洲", text: "浅水中的沙岛与珊瑚岛。" },
          { title: "岛屿", text: "远在海上，坐船或搭飞机要几个小时。" },
          { title: "海湾与港汊", text: "水面平静，几乎没有涌浪。" },
          { title: "大陆海岸", text: "山脚下的开阔沙滩。" },
        ],
      },
      {
        slug: "destinos-esenciales",
        number: "02",
        title: "必去之地",
        lede: "九种走进委内瑞拉加勒比的方式，从最偏远的群岛，到周日会挤满人的海滩。",
        layout: "gallery",
        items: [
          {
            title: "洛斯罗克斯",
            meta: "联邦属地",
            text: "白色沙洲、潟湖与珊瑚礁，从加拉加斯飞半小时可达。",
            photo: { src: "/images/commons/madrisqui.jpg", alt: "洛斯罗克斯群岛的马德里斯基沙洲" },
            href: "/playa/los-roques",
          },
          {
            title: "阿瓜海滩",
            meta: "玛格丽塔 · 新斯巴达州",
            text: "岛北面四公里长的开阔沙滩，有海浪也有椰子树。",
            photo: { src: "/images/playa-el-agua.jpg", alt: "玛格丽塔岛东北部的阿瓜海滩" },
            href: "/playa/playa-el-agua",
          },
          {
            title: "松布雷罗沙洲",
            meta: "莫罗科伊 · 法尔孔州",
            text: "莫罗科伊最热门的沙洲，椰子树斜倚在平静的水面上。",
            photo: { src: "/images/cayo-sombrero.jpg", alt: "莫罗科伊国家公园的松布雷罗沙洲" },
            href: "/playa/cayo-sombrero",
          },
          {
            title: "莫奇马",
            meta: "苏克雷州与安索阿特吉州",
            text: "国家公园里的绿色小岛与港汊，要坐当地的小船才能游遍。",
            photo: { src: "/images/mochima.jpg", alt: "莫奇马国家公园的海湾与一艘渔船" },
            href: "/playa/mochima",
          },
          {
            title: "银岛",
            meta: "关塔 · 安索阿特吉州",
            text: "莫奇马国家公园内的浅水小岛，从关塔坐小船几分钟就到。",
            photo: { src: "/images/commons/isla-de-plata.jpg", alt: "莫奇马国家公园银岛的浅水与小船" },
          },
          {
            title: "乔罗尼",
            meta: "阿拉瓜州",
            text: "穿过恩里克·皮蒂尔云雾林的公路尽头，是一座小镇和一片海滩。",
            photo: { src: "/images/choroni.jpg", alt: "乔罗尼海岸，加勒比海与山脉相接" },
            href: "/playa/choroni",
          },
          {
            title: "库亚瓜",
            meta: "阿拉瓜州",
            text: "开阔多浪的海滩，中部海岸最著名的冲浪地。",
            photo: { src: "/images/cuyagua.jpg", alt: "阿拉瓜州海岸的库亚瓜海滩" },
            href: "/playa/cuyagua",
          },
          {
            title: "梅迪纳海滩",
            meta: "帕里亚半岛 · 苏克雷州",
            text: "潮湿的帕里亚海岸上一处椰林环抱的海湾，远离其他一切。",
            photo: {
              src: "/images/commons/playa-medina-peninsula-paria.jpg",
              alt: "苏克雷州帕里亚半岛的梅迪纳海滩",
            },
            href: "/playa/playa-medina",
          },
          {
            title: "拉托尔图加",
            meta: "联邦属地",
            text: "全国第二大岛，没有常住人口：只能坐船或搭小飞机前往。",
            photo: { src: "/images/isla-la-tortuga-turquesa.jpg", alt: "拉托尔图加岛的碧绿海水" },
            href: "/playa/isla-la-tortuga",
          },
        ],
      },
      {
        slug: "de-occidente-a-oriente",
        number: "03",
        title: "自西向东",
        lede: "同一条海岸，从国土的一端走到另一端，会认不出自己。",
        layout: "coastline",
        items: [
          {
            title: "西部",
            meta: "苏利亚州与法尔孔州",
            text: "最干燥的一段。宽阔的海湾、一直伸到水边的沙丘，以及法尔孔外海莫罗科伊的沙洲与红树林。",
          },
          {
            title: "中部",
            meta: "卡拉沃沃、阿拉瓜与拉瓜伊拉",
            text: "在这里山脉直接落入加勒比海。云雾林之间是短促的海湾，也有迎着北面涌浪的开阔沙滩。",
          },
          {
            title: "岛屿",
            meta: "新斯巴达州",
            text: "在东部海岸外，玛格丽塔、科切与库瓦瓜组成了全国唯一的岛屿州。",
          },
          {
            title: "东部",
            meta: "安索阿特吉州与苏克雷州",
            text: "海湾、半岛，水色更绿。西边是莫奇马，东边是帕里亚，也是加勒比海终结、大西洋开始的地方。",
          },
        ],
      },
      {
        slug: "el-mar-en-numeros",
        number: "04",
        title: "数字里的海",
        lede: "四个不容易确定的数字——因为流传的那些，几乎都不说自己量的是什么。",
        layout: "numbers",
        items: [
          {
            value: "2,394公里",
            title: "加勒比海岸线",
            text: "从瓜希拉的卡斯蒂列特斯，到帕里亚的佩尼亚斯角。",
            source: "《海岸带法》· 2001年",
          },
          {
            value: "12 + 89",
            title: "岛群",
            text: "十二组构成联邦属地；另有89座岛屿归沿海各州管辖。没有官方的总数。",
            source: "国家统计局 · 2025年",
          },
          {
            value: "约475,000平方公里",
            title: "自己的海",
            text: "专属经济区。这是个约数：与几个邻国的界线尚未划定。",
            source: "Sea Around Us · 2015年",
          },
          {
            value: "221,120公顷",
            title: "海洋公园",
            text: "洛斯罗克斯自1972年起受保护，是加勒比海面积最大的国家公园。",
            source: "洛斯罗克斯群岛国家公园",
          },
        ],
      },
      {
        slug: "venezuela-insular",
        number: "05",
        title: "岛屿上的委内瑞拉",
        lede: "这个国家并不止于大陆海岸。海上还有十几组岛屿，多数无人居住；最远的鸟岛距离大陆五百多公里。",
        layout: "islands",
        photo: {
          src: "/images/isla-de-coche.jpg",
          alt: "新斯巴达州科切岛的海岸",
        },
        items: [
          { title: "玛格丽塔", meta: "新斯巴达州", text: "委内瑞拉加勒比海最大的岛，也是唯一有城市的岛。" },
          { title: "科切", meta: "新斯巴达州", text: "位于玛格丽塔与大陆之间，是一个有人居住的市。" },
          { title: "库瓦瓜", meta: "新斯巴达州", text: "岛上保存着「珍珠之城」新加的斯的遗址。" },
          { title: "洛斯罗克斯", meta: "联邦属地", text: "1972年起为国家公园，也是拉姆萨尔湿地：八成以上是海。" },
          { title: "拉托尔图加", meta: "联邦属地", text: "156平方公里，没有常住人口。全国第二大岛。" },
          { title: "拉布兰基利亚", meta: "联邦属地", text: "没有平民居住：只有一处海岸警卫哨所和季节性渔民。" },
          { title: "拉奥奇拉", meta: "联邦属地", text: "设有海军航空基地，进出受限：未经许可不得前往。" },
          { title: "拉斯阿维斯", meta: "联邦属地", text: "分为背风与迎风两群，无人居住。" },
          { title: "洛斯特斯蒂戈斯", meta: "联邦属地", text: "居民是玛格丽塔后裔，是仅有的两处有人群岛之一。" },
          { title: "洛斯弗赖莱斯", meta: "联邦属地", text: "玛格丽塔东北方十座无人小岛。" },
        ],
      },
      {
        slug: "antes-de-llegar-al-mar",
        number: "06",
        title: "下海之前",
        lede: "四件最好先弄清楚的事。",
        layout: "tips",
        items: [
          { title: "太阳", text: "靠近赤道，即使阴天紫外线也很强。防晒、遮阴、多喝水。" },
          { title: "海况", text: "涌浪和暗流因海滩而异，也因当天而异。到了岸边先问一问。" },
          { title: "交通", text: "岛屿和许多沙洲只能坐船前往。上船前先确认往返班次。" },
          { title: "保护区", text: "洛斯罗克斯、莫罗科伊和莫奇马都是国家公园：露营等活动需要 Inparques 的许可。" },
        ],
      },
    ],
    finalPhoto: {
      src: "/images/commons/dos-mosquises.jpg",
      alt: "从空中俯瞰洛斯罗克斯的多斯莫斯基塞斯沙洲，四周是珊瑚礁与沙洲",
    },
    closing: {
      text: "一整个国家面朝加勒比，而抵达大海的方式有上百种。",
    },
    credits: [
      {
        title: "洛斯罗克斯马德里斯基沙洲",
        author: "Wilfredor",
        license: "CC BY-SA 4.0",
        href: "https://commons.wikimedia.org/wiki/File:Madrisqui.jpg",
      },
      {
        title: "帕里亚半岛梅迪纳海滩",
        author: "Alejandro Solo",
        license: "CC BY-SA 4.0",
        href: "https://commons.wikimedia.org/wiki/File:Playa_Medina_Peninsula_Paria.jpg",
      },
      {
        title: "莫罗科伊国家公园",
        author: "Regisrob",
        license: "CC BY 3.0",
        href: "https://commons.wikimedia.org/wiki/File:Morrocoy_sea_island.jpg",
      },
      {
        title: "莫奇马国家公园银岛",
        author: "Velasquez-Perugini",
        license: "CC BY-SA 3.0",
        href: "https://commons.wikimedia.org/wiki/File:Isla_de_Plata.JPG",
      },
      {
        title: "洛斯罗克斯多斯莫斯基塞斯沙洲",
        author: "Berrucomons",
        license: "CC BY-SA 3.0",
        href: "https://commons.wikimedia.org/wiki/File:Dos_Mosquises.jpg",
      },
    ],
  },

  "montana-y-paramo": {
    slug: "montana-y-paramo",
    eyebrow: "高处的委内瑞拉",
    title: "山地与高原",
    intro:
      "这个热带国家也有雪、结冰的湖泊和海拔三千米的村庄。委内瑞拉的安第斯山是这条山脉的最北端，每往上走一小时，风景就换一次。",
    hero: {
      src: "/images/pico-bolivar.jpg",
      alt: "梅里达内华达山脉中的玻利瓦尔峰，委内瑞拉最高峰",
    },
    meta: {
      title: "委内瑞拉的山地与高原 | Mrs Venezuela",
      description:
        "委内瑞拉的安第斯山：梅里达、塔奇拉与特鲁希略，玻利瓦尔峰、内华达山脉、帕拉莫高原及其村庄与湖泊。",
    },
    indexLabel: "本指南目录",
    backLabel: "返回首页",
    sections: [
      {
        slug: "venezuela-en-altura",
        number: "01",
        title: "高处的委内瑞拉",
        lede: "委内瑞拉不只有海岸与平原。梅里达山脉在北端收束整条安第斯，玻利瓦尔峰达4978米；海岸山脉把阿维拉山托举在加拉加斯之上；东南部的桌山则是另一类山。它们之间是温和的河谷、云雾林和高寒草原。",
        layout: "prose",
      },
      {
        slug: "los-andes",
        number: "02",
        title: "安第斯",
        lede: "三个州由同一条山脉相连，也由翻越它数百年的道路相连。",
        layout: "gallery",
        items: [
          {
            title: "梅里达",
            meta: "山峰与高原",
            text: "全国最高处，世界最高的缆车，以及一整片山村网络。",
            photo: { src: "/images/commons/teleferico-del-pico-espejo.jpg", alt: "梅里达缆车在群山间攀升" },
            href: "/estado/merida",
          },
          {
            title: "塔奇拉",
            meta: "边境与山地",
            text: "农业河谷、凉爽的小镇，以及通往哥伦比亚的陆路门户。",
            photo: {
              src: "/images/commons/paramo-las-coloradas-tachira.jpg",
              alt: "塔奇拉州拉斯科洛拉达斯高原的潟湖、绒毛菊与徒步者",
            },
            href: "/estado/tachira",
          },
          {
            title: "特鲁希略",
            meta: "村庄与记忆",
            text: "有人居住的山、咖啡，以及俯瞰山脉北端的观景点。",
            photo: {
              src: "/images/states/trujillo.jpg",
              alt: "俯瞰特鲁希略城的和平圣母像",
            },
            href: "/estado/trujillo",
          },
        ],
      },
      {
        slug: "lugares-en-las-alturas",
        number: "03",
        title: "高处的地方",
        lede: "四个名字，带你开始读懂这条山脉。",
        layout: "gallery",
        items: [
          {
            title: "玻利瓦尔峰",
            meta: "4978米 · 梅里达",
            text: "委内瑞拉最高峰。登顶属于登山运动，不是徒步。",
            photo: {
              src: "/images/commons/pico-bolivar-al-desnudo-en-dia-soleado-y-despejado.jpg",
              alt: "晴朗日子里毫无云遮的玻利瓦尔峰",
            },
            href: "/montana/pico-bolivar",
          },
          {
            title: "洪堡峰",
            meta: "4940米 · 梅里达",
            text: "全国第二高峰，委内瑞拉最后一条冰川就在这里。",
            photo: {
              src: "/images/commons/flanco-norte-del-pico-humboldt.jpg",
              alt: "梅里达内华达山脉中洪堡峰的北坡",
            },
          },
          {
            title: "拉库拉塔山脉",
            meta: "梅里达",
            text: "梅里达的另一条大山脉，开阔的高寒草原与裸露的岩石。",
            photo: { src: "/images/commons/picos-en-la-culata.jpg", alt: "梅里达州拉库拉塔山脉的群峰" },
          },
          {
            title: "埃斯佩霍峰",
            meta: "4765米 · 梅里达",
            text: "穆昆巴里缆车的终点站，这条缆车是世界最高也最长的一条。",
            photo: {
              src: "/images/merida-pico-espejo.png",
              alt: "穆昆巴里缆车的埃斯佩霍峰站",
            },
          },
        ],
      },
      {
        slug: "vida-en-el-paramo",
        number: "04",
        title: "高原上的生活",
        lede: "在森林之上、积雪之下，有一个自成一格的世界：寒冷、潮湿而缓慢。",
        layout: "band",
        photo: {
          src: "/images/commons/paramo-1.jpg",
          alt: "委内瑞拉安第斯高寒草原上的绒毛菊",
        },
        items: [
          { title: "绒毛菊", text: "叶片带绒毛的植物，能留住雾里的水分。" },
          { title: "冰湖", text: "冰川作用形成，寒冷而清澈。" },
          { title: "农业", text: "在陡坡上种土豆、小麦、胡萝卜和大蒜。" },
          { title: "村庄", text: "海拔两千米以上的瓦屋顶与广场。" },
        ],
      },
      {
        slug: "cultura-andina",
        number: "05",
        title: "安第斯文化",
        lede: "另一种建造、耕作与生活的方式，也是另一种吃法：安第斯浓汤、小麦、土豆、烟熏奶酪与牛奶甜点。",
        layout: "gallery",
        items: [
          {
            title: "村庄",
            meta: "阿帕塔德罗斯 · 穆库奇耶斯 · 哈希",
            text: "海拔三千多米的谷底，一片瓦屋顶。",
            photo: {
              src: "/images/commons/vista-del-pueblo-de-apartaderos.jpg",
              alt: "梅里达州安第斯村庄阿帕塔德罗斯远景",
            },
          },
          {
            title: "广场",
            meta: "建筑",
            text: "刷白的教堂、石板广场，背后是山。整个高原都是这个格局。",
            photo: {
              src: "/images/commons/plaza-bolivar-de-los-nevados.jpg",
              alt: "梅里达安第斯山中洛斯内瓦多斯村的玻利瓦尔广场",
            },
          },
          {
            title: "耕作",
            meta: "高山农业",
            text: "土豆、小麦与蔬菜，一层层种在坡上。",
            photo: { src: "/images/commons/siembra-y-pueblo.jpg", alt: "安第斯村庄旁坡地上的农田" },
          },
        ],
      },
      {
        slug: "antes-de-subir",
        number: "06",
        title: "上山之前",
        lede: "高海拔不容许着急。",
        layout: "tips",
        items: [
          { title: "海拔", text: "分段上升，继续往上之前先在半山住一晚。" },
          { title: "寒冷", text: "带上多层衣物。即使白天晴朗，高原夜里也可能结霜。" },
          { title: "紫外线", text: "海拔越高辐射越强：防晒霜、帽子和墨镜，起雾时也要。" },
          { title: "准备", text: "雪峰需要向导、专业装备和以往经验。" },
        ],
      },
    ],
    closing: {
      text: "在山里要慢慢往上走。只有这样才能到达山顶，也才能在路上看懂眼前的一切。",
    },
    credits: [
      {
        title: "塔奇拉州拉斯科洛拉达斯高原",
        author: "Nackort",
        license: "CC BY-SA 3.0",
        href: "https://commons.wikimedia.org/wiki/File:Paramo_Andino_Estado_Tachira.jpg",
      },
      {
        title: "晴日中的玻利瓦尔峰",
        author: "Paolo Costa",
        license: "CC BY-SA 4.0",
        href: "https://commons.wikimedia.org/wiki/File:Pico_Bol%C3%ADvar_al_desnudo_en_d%C3%ADa_soleado_y_despejado.jpg",
      },
      {
        title: "梅里达玻利瓦尔峰",
        author: "Gerson Márquez",
        license: "CC BY-SA 3.0",
        href: "https://commons.wikimedia.org/wiki/File:Pico_Bol%C3%ADvar,_M%C3%A9rida.JPG",
      },
      {
        title: "埃斯佩霍峰缆车",
        author: "Ivan Carvajal",
        license: "CC BY-SA 3.0",
        href: "https://commons.wikimedia.org/wiki/File:Telef%C3%A9rico_del_Pico_Espejo.JPG",
      },
      { title: "高寒草原的绒毛菊", author: "Adolfo (Ajerit)", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Paramo_1.jpg" },
      { title: "拉库拉塔的群峰", author: "Arnaldo Noguera Sifontes", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Picos_en_La_Culata.jpg" },
      { title: "洪堡峰北坡", author: "Massieljc", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Flanco_norte_del_Pico_Humboldt.jpg" },
      { title: "阿帕塔德罗斯村", author: "Rjcastillo", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Vista_del_pueblo_de_Apartaderos.jpg" },
      { title: "洛斯内瓦多斯的玻利瓦尔广场", author: "José Alfaro", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Plaza_Bolivar_de_Los_Nevados.jpg" },
      { title: "梅里达安第斯的农田与村庄", author: "José Alfaro", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Siembra_y_pueblo.jpg" },
    ],
  },

  "selva-y-rios": {
    slug: "selva-y-rios",
    eyebrow: "大水之国",
    title: "雨林与河流",
    intro:
      "河流连接城市与社区，森林覆盖南方，古老岩石诉说遥远的过去。在这样的委内瑞拉，水塑造着风景与日常生活。",
    hero: {
      src: "/images/commons/cano-zorro-15020517430.jpg",
      alt: "亚马孙州植被环绕的 Caño Zorro 溪流",
      position: "center 40%",
    },
    meta: {
      title: "委内瑞拉的雨林与河流 | Mrs Venezuela",
      description:
        "奥里诺科河、委内瑞拉亚马孙、三角洲、圭亚那与卡奈马：大河、森林，以及生活其中的民族。",
    },
    indexLabel: "本指南目录",
    backLabel: "返回首页",
    sections: [
      {
        slug: "un-pais-de-grandes-aguas",
        number: "01",
        title: "大水之国",
        lede: "奥里诺科河全长约2140公里，流域覆盖委内瑞拉五分之四以上的国土。平原、圭亚那和三角洲都围绕它排布：在这里，水不是穿过风景，而是安排风景。",
        layout: "prose",
      },
      {
        slug: "el-orinoco",
        number: "02",
        title: "奥里诺科河",
        lede: "解释这个国家的那条河。",
        layout: "band",
        photo: {
          src: "/images/commons/panoramica-del-rio-orinoco-en-amazonas.jpg",
          alt: "奥里诺科河流经亚马孙州一段宽阔水面的全景",
        },
        items: [
          { title: "地理", text: "发源于帕里马山，经由数千条水道组成的三角洲注入大西洋。" },
          { title: "历史", text: "它曾是入口、边界与独立之路：安戈斯图拉就在它的岸上。" },
          { title: "生活", text: "两岸养活着渔业、农业、城市与原住民社区。" },
        ],
      },
      {
        slug: "amazonas",
        number: "03",
        title: "亚马孙州",
        lede: "仅次于玻利瓦尔州的第二大州，也是全国人口最稀少的州：森林、河流与极古老的裸岩。阿亚库乔港是它的门户；再往里，距离要用航行的小时数来计算。",
        layout: "feature",
        photo: {
          src: "/images/commons/rio-sipapo-amazonas.jpg",
          alt: "亚马孙州雨林环绕的西帕波河",
        },
        items: [
          { title: "森林", text: "连绵的湿润雨林，生物多样性居美洲前列。" },
          { title: "岩石", text: "圭亚那地盾的山丘与桌山从植被中隆起。" },
          { title: "本州指南", href: "/estado/amazonas" },
        ],
      },
      {
        slug: "delta-del-orinoco",
        number: "04",
        title: "奥里诺科三角洲",
        lede: "在汇入大西洋之前，河流散成数百条水道、岛屿与红树林。这里是瓦劳人的祖居之地，远早于委内瑞拉这个国家的存在。",
        layout: "band",
        photo: {
          src: "/images/commons/delta-orinoco-atardecer.jpg",
          alt: "奥里诺科三角洲水面上的日落",
        },
        items: [
          { title: "水道", text: "取代公路的河汊。" },
          { title: "红树林", text: "淡水与咸水之间的两栖森林。" },
          { title: "莫里切棕榈", text: "提供食物、纤维与住所的那种棕榈。" },
          { title: "潮汐", text: "大西洋一天进出两次。" },
        ],
      },
      {
        "slug": "guayana",
        "number": "05",
        "title": "圭亚那地区",
        "lede": "河流、滨河城市、草原与森林：从四个角度认识委内瑞拉的圭亚那地区。",
        "layout": "gallery",
        "items": [
          {
            "title": "卡罗尼河",
            "meta": "圭亚那城",
            "text": "奥里诺科河的大支流，汇入之前有拉约维斯纳等瀑布。",
            "photo": {
              "src": "/images/commons/la-llovizna-1.jpg",
              "alt": "圭亚那城卡罗尼河上的拉约维斯纳瀑布"
            }
          },
          {
            "title": "奥里诺科河",
            "meta": "Ciudad Bolívar",
            "text": "在昔日安戈斯图拉的河岸边，自然风景、历史与城市生活在这里相遇。",
            "photo": {
              "src": "/images/commons/ciudad-bolivar-historical-zone.jpg",
              "alt": "Ciudad Bolívar 与奥里诺科河，远处是安戈斯图拉大桥"
            }
          },
          {
            "title": "大草原",
            "meta": "玻利瓦尔州",
            "text": "桌山之间的高地草原，深色的河流与沿途的瀑布。",
            "photo": {
              "src": "/images/commons/la-gran-sabana.jpg",
              "alt": "大草原的风景，远处是桌山"
            }
          },
          {
            "title": "卡奈马",
            "meta": "世界遗产",
            "text": "三百万公顷的桌山、森林与稀树草原；天使瀑布就在其中。",
            "photo": {
              "src": "/images/salto-angel.jpg",
              "alt": "从奥扬桌山跌落的天使瀑布"
            }
          }
        ]
      },
      {
        "slug": "pueblos-y-territorio",
        "number": "06",
        "title": "民族与土地",
        "lede": "这些民族拥有各自的语言、知识与组织方式。了解他们的土地，也意味着倾听社区的声音，尊重他们的决定。",
        "layout": "list",
        "items": [
          {
            "title": "佩蒙人",
            "meta": "玻利瓦尔州",
            "text": "生活在 Gran Sabana 与卡罗尼河流域。他们的语言与口述传统承载着这片土地的记忆。"
          },
          {
            "title": "瓦劳人",
            "meta": "德尔塔阿马库罗州",
            "text": "三角洲是他们的祖居地；航行与莫里切棕榈纤维编织都是文化的一部分。"
          },
          {
            "title": "耶克瓦纳人",
            "meta": "玻利瓦尔州与亚马孙州",
            "text": "生活在考拉河与文图阿里河上游流域。航行与编篮将传统知识融入日常生活。"
          },
          {
            "title": "乌沃提哈人",
            "meta": "亚马孙州",
            "text": "生活在奥里诺科河中游及西帕波、奥塔纳和夸奥河流域。也被称为皮亚罗阿人，保有自己的语言与知识。"
          }
        ]
      },
      {
        "slug": "naturaleza",
        "number": "07",
        "title": "自然",
        "lede": "四种由水相连的环境，各自孕育不同的生命。",
        "layout": "gallery",
        "items": [
          {
            "title": "河流",
            "meta": "流动的水",
            "text": "河汊、急流与瀑布连接不同风景。这里的碧玉溪展露出岩石河床。",
            "photo": {
              "src": "/images/commons/gran-sabana-quebrada-de-jaspe-i-1.jpg",
              "alt": "大草原上的碧玉溪"
            }
          },
          {
            "title": "森林",
            "meta": "亚马孙州",
            "text": "植被沿着河岸生长，为地面投下阴影。水与森林构成同一片风景。",
            "photo": {
              "src": "/images/commons/cano-zorro-15020517430.jpg",
              "alt": "亚马孙雨林中流过红色岩石的清澈溪流"
            }
          },
          {
            "title": "桌山",
            "meta": "圭亚那地盾",
            "text": "古老岩石形成的高台，拥有独特的生境与物种，库克南山便是其中之一。",
            "photo": {
              "src": "/images/commons/kukenan-tepuy.jpg",
              "alt": "云雾中的库克南桌山"
            }
          },
          {
            "title": "生物多样性",
            "meta": "南方森林",
            "text": "鸟类、昆虫与植物共享森林。白喉巨嘴鸟只是众多物种中的一种。",
            "photo": {
              "src": "/images/commons/piapoco-de-garganta-blanca-ramphastos-tucanus-cuvieri.jpg",
              "alt": "枝叶间的白喉巨嘴鸟"
            }
          }
        ]
      },
    ],
    closing: {
      text: "在这里，水不是穿过土地，而是安排土地：它决定人住在哪里、怎么出行、吃什么。",
    },
    credits: [
      { title: "玻利瓦尔城历史城区", author: "Venecon", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Ciudad_Bol%C3%ADvar_historical_zone.jpg" },
      {
        title: "卡奈马的阿查瀑布与独木舟",
        author: "Wilfredor",
        license: "CC BY-SA 4.0",
        href: "https://commons.wikimedia.org/wiki/File:Salto_Hacha_y_curiara_sector_occidental.jpg",
      },
      {
        title: "大草原",
        author: "Paolo Costa Baldi",
        license: "CC BY-SA 3.0",
        href: "https://commons.wikimedia.org/wiki/File:La_Gran_Sabana.jpg",
      },
      {
        title: "大草原碧玉溪",
        author: "Vinícius Pinheiro",
        license: "CC BY-SA 4.0",
        href: "https://commons.wikimedia.org/wiki/File:Gran_Sabana_Quebrada_de_Jaspe_I_(1).jpg",
      },
      {
        title: "库克南桌山",
        author: "Paolo Costa Baldi",
        license: "CC BY-SA 3.0",
        href: "https://commons.wikimedia.org/wiki/File:Kukenan_tepuy.jpg",
      },
      { title: "奥里诺科河全景", author: "Shishoxisrax", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Panor%C3%A1mica_del_r%C3%ADo_Orinoco_en_Amazonas.jpg" },
      { title: "西帕波河，亚马孙州", author: "Fernando Flores", license: "CC BY-SA 2.0", href: "https://commons.wikimedia.org/wiki/File:R%C3%ADo_Sipapo_-_Sipapo_River_(12917850754).jpg" },
      { title: "亚马孙的索罗溪", author: "Fernando Flores", license: "CC BY-SA 2.0", href: "https://commons.wikimedia.org/wiki/File:Ca%C3%B1o_Zorro_(15020517430).jpg" },
      { title: "奥里诺科三角洲", author: "Antolin Martinez A.", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Delta_del_Orinoco_110514-27.JPG" },
      { title: "卡罗尼河拉约维斯纳瀑布", author: "Daniel Méndez", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:La_Llovizna_1.jpg" },
      { title: "白喉巨嘴鸟", author: "Fernando Flores", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Piapoco_de_garganta_blanca_(Ramphastos_tucanus_cuvieri).jpg" },
    ],
  },

  "ciudades-y-cultura": {
    slug: "ciudades-y-cultura",
    eyebrow: "生活着的委内瑞拉",
    title: "城市与文化",
    intro:
      "十个委内瑞拉人里有九个住在城市，而每座城市面朝的方向都不同：大海、湖泊、山脉、平原或大河。这个国家的文化，就诞生于这种差异。",
    hero: {
      src: "/images/caracas-avila.jpg",
      alt: "阿维拉山脚下的加拉加斯",
    },
    meta: {
      title: "委内瑞拉的城市与文化 | Mrs Venezuela",
      description:
        "加拉加斯、马拉开波、巴基西梅托、科罗与卡贝略港；解释委内瑞拉的遗产、音乐、节庆与手工艺。",
    },
    indexLabel: "本指南目录",
    backLabel: "返回首页",
    sections: [
      {
        slug: "venezuela-urbana",
        number: "01",
        title: "城市化的委内瑞拉",
        lede: "委内瑞拉的城市化非常快：1936年大多数人还住在乡下，今天几乎没有人了。这一由石油推动的跳跃，解释了它的城市、它的音乐，以及它说话方式的大半。",
        layout: "prose",
      },
      {
        slug: "ciudades-que-cuentan-el-pais",
        number: "02",
        title: "讲述国家的城市",
        lede: "八座城市，八种认识委内瑞拉的方式。",
        layout: "gallery",
        items: [
          {
            title: "加拉加斯",
            meta: "首都区",
            text: "加拉加斯位于阿维拉山脚下的山谷中，建筑、广场与文化生活在这里交汇。现代建筑与城市公共空间，展现了体验和探索委内瑞拉首都的不同方式。",
            photo: { src: "/images/commons/caracas-atardecer.jpg", alt: "夕阳下的加拉加斯，城市建筑与右侧的阿维拉山", position: "60% 50%" },
          },
          {
            title: "马拉开波",
            meta: "苏利亚州",
            text: "马拉开波将湖畔生活、商业与鲜明的地方文化融为一体。拉斐尔·乌尔达内塔大桥和苏利亚的盖塔音乐，让人了解这座城市与湖水及当地传统的联系。",
            photo: {
              src: "/images/commons/maracaibo-ciudad.jpg",
              alt: "马拉开波的城市景观，大道与建筑清晰可见",
              position: "60% 50%",
            },
          },
          {
            title: "玻利瓦尔城",
            meta: "玻利瓦尔州",
            text: "玻利瓦尔城的街巷和俯瞰奥里诺科河的屋顶，保存着昔日安戈斯图拉的记忆。漫步老城，可以了解1819年的国会，以及河流对城市生活的重要意义。",
            photo: {
              src: "/images/commons/ciudad-bolivar-historical-zone.jpg",
              alt: "俯瞰奥里诺科河的玻利瓦尔城历史城区",
            },
          },
          {
            title: "科罗",
            meta: "法尔孔州",
            text: "科罗保留着土屋、庭院与体现殖民历史的街道，呈现独特的城市面貌。这里与拉韦拉港共同展现了适应当地气候与地域环境的建筑文化。",
            photo: { src: "/images/commons/coro-calle-colonial.jpg", alt: "法尔孔州科罗两旁排列着殖民时期房屋的街道", position: "center" },
          },
          {
            title: "巴基西梅托",
            meta: "拉腊州",
            text: "巴基西梅托是一座音乐之城，也是委内瑞拉多个地区之间的交汇点。当地大教堂与对神圣牧羊女的敬仰，展现了城市建筑和文化传统的不同面貌。",
            photo: {
              src: "/images/commons/catedral-de-barquisimeto-dia-lluvioso.jpg",
              alt: "雨天云层下的拉腊州巴基西梅托主教座堂",
            },
          },
          {
            title: "库马纳",
            meta: "苏克雷州",
            text: "库马纳位于委内瑞拉东部，将城市历史遗产与海岸生活融为一体。圣伊内斯宗座圣殿和圣安东尼奥城堡，让人了解这座城市不同时期的历史。",
            photo: { src: "/images/commons/cumana-ciudad-mar.jpg", alt: "库马纳城市建筑与加勒比海岸的航拍景观", position: "70% 50%" },
          },
          {
            title: "卡贝略港",
            meta: "卡拉沃沃州",
            text: "卡贝略港融合了港口历史、殖民街道与紧密的海洋联系。从洛斯兰塞罗斯街到海滨步道，阳台与彩色外墙引领人们发现这座城市的日常生活。",
            photo: { src: "/images/commons/puerto-cabello-los-lanceros.jpg", alt: "卡贝略港历史街区的洛斯兰塞罗斯街", position: "center" },
          },
          {
            title: "特鲁希略",
            meta: "特鲁希略州",
            text: "特鲁希略保留着狭窄街巷，以及由风景和传统塑造的安第斯文化特色。和平圣母纪念碑展现了宗教信仰在这座山城的生活中所占的重要位置。",
            photo: {
              src: "/images/commons/trujillo-plaza-mendoza.jpg",
              alt: "特鲁希略市的克里斯托瓦尔·门多萨广场",
              position: "52% 50%",
            },
          },
        ],
      },
      {
        slug: "patrimonio",
        number: "03",
        title: "会讲故事的建筑",
        lede: "这些地方究竟特别在哪里？从建筑中，可以读懂塑造委内瑞拉的艺术、生活方式和历史时刻。",
        layout: "gallery",
        items: [
          {
            title: "加拉加斯大学城",
            meta: "加拉加斯 · 艺术与建筑",
            text: "留意壁画和雕塑如何融入建筑。卡洛斯·劳尔·比利亚努埃瓦将艺术与建筑结合，让学生在众多艺术家的作品之间学习。这座校园本身就是一件值得细看的作品。",
            photo: { src: "/images/commons/biblioteca-central-de-la-ciudad-universitaria-caracas.jpg", alt: "加拉加斯大学城中央图书馆", position: "60% 50%" },
          },
          {
            title: "科罗的传统民居",
            meta: "法尔孔州 · 土墙与庭院",
            text: "土墙、庭院和有顶走廊，展现了另一种建造方式。科罗与拉贝拉保存的传统技艺融合了本地、西班牙和荷兰的影响；这种结合，正是它们的独特之处。",
            photo: { src: "/images/commons/coro-patio-ventanas-hierro.jpg", alt: "科罗铁窗之家的内庭", position: "center" },
          },
          {
            title: "安戈斯图拉议会旧址",
            meta: "玻利瓦尔城 · 独立历史",
            text: "这些阳台背后藏着重要的历史：1819年，安戈斯图拉议会在此召开。玻利瓦尔在这里发表著名演说，阐述如何组织共和国。因此，眼前的不仅是一座老建筑。",
            photo: { src: "/images/commons/casa-congreso-angostura.jpg", alt: "玻利瓦尔城安戈斯图拉议会旧址的立面", position: "center" },
          },
        ],
      },
      {
        slug: "musica",
        number: "04",
        title: "音乐",
        lede: "每隔几百公里，这个国家就换一种曲风。",
        layout: "facets",
        items: [
          { spotifyTrack: "joropo", title: "霍罗波", meta: "2025年入选教科文组织名录", text: "竖琴或班多拉、四弦琴与沙铃。不只属于平原：安第斯、东部与中部都有自己的变体。" },
          { spotifyTrack: "gaita", title: "苏利亚 gaita", meta: "苏利亚州", text: "富罗鼓、坦博拉鼓、刮响器与四弦琴。每年十二月响彻全国。" },
          { spotifyTrack: "calipso", title: "埃尔卡亚俄卡利普索", meta: "玻利瓦尔州", text: "十九世纪随黄金而来的安的列斯（尤其是特立尼达）遗产。用西班牙语和帕图瓦语演唱。" },
          { spotifyTrack: "tambores", title: "鼓乐", meta: "中部海岸", text: "与海岸主保瞻礼相连的非裔委内瑞拉节奏。" },
          { spotifyTrack: "andina", title: "安第斯音乐", meta: "梅里达、塔奇拉与特鲁希略", text: "属于山村的弦乐与歌唱曲目。" },
        ],
      },
      {
        slug: "fiestas-y-tradiciones",
        number: "05",
        title: "节庆与传统",
        lede: "这些节庆让几代人相聚。面具、鼓声与巡游背后，是共同的信仰与记忆。",
        layout: "gallery",
        items: [
          {
            title: "跳舞的魔鬼",
            meta: "圣体节 · 2012年入选名录",
            text: "这一传统起源于殖民时期，将天主教的基督圣体节与非洲及原住民文化相结合。面具和舞蹈象征邪恶向善良臣服。",
            photo: {
              src: "/images/commons/diablos-yare-trajes.jpg",
              alt: "Yare的舞蹈恶魔戴着面具，全身红色服装清晰可见",
              position: "50% 50%",
            },
          },
          {
            title: "Sanare的Zaragozas庆典",
            meta: "12月28日 · Sanare，Lara",
            text: "这一节庆与诸圣婴孩的宗教纪念相连，让Sanare充满音乐与舞蹈。参与者戴着手工面具、身着缤纷服装走上街头，以歌唱和宗教许愿延续这份传统。",
            photo: {
              src: "/images/commons/zaragozas-sanare.jpg",
              alt: "Sanare的Zaragozas庆典参与者戴着手工面具、身着缤纷服装",
              position: "25% 50%",
            },
          },
          {
            title: "奇尼塔圣母",
            meta: "11月11日至18日 · 马拉开波",
            text: "据苏利亚的传统传说，一位洗衣妇在湖中拾到一块带有圣母像的小木板。这份信仰逐渐成为融合盖塔音乐、虔诚信仰与社群情感的节庆。",
            photo: {
              src: "/images/commons/bajada-de-la-chinita-en-maracaibo-2023-01.jpg",
              alt: "马拉开波奇尼塔圣母巡游期间，大教堂上空的烟花",
            },
          },
          {
            title: "神圣牧女",
            meta: "1月14日 · 巴基西梅托",
            text: "1856年，巴基西梅托遭遇霍乱疫情，人们祈求庇佑，由此开始了巡游传统。每年一月，信众从Santa Rosa陪伴圣母像前行，延续这份虔诚。",
            photo: {
              src: "/images/commons/divina-pastora-procesion.jpg",
              alt: "巴基西梅托，人群簇拥着神圣牧女圣像",
              position: "20% 50%",
            },
          },
        ],
      },
      {
        slug: "artesania-y-memoria",
        number: "06",
        title: "手工艺与记忆",
        lede: "每一门手艺都属于某个具体的地方：并不存在单一的「委内瑞拉手工艺」。",
        layout: "facets",
        items: [
          { title: "编织", text: "南部与西部原住民族群加工的植物纤维。" },
          { title: "陶器", text: "烧制陶土，各地形制与用途各不相同。" },
          { title: "纺织", text: "从瓜希拉的吊床到安第斯的羊毛织物。" },
          { title: "木雕与面具", text: "与地方庆典相连的仪式与节庆器物。" },
        ],
      },
    ],
    closing: {
      text: "没有哪一座委内瑞拉城市能独自解释这个国家。所有城市加在一起，也才刚刚开了个头。",
    },
    credits: [
      { title: "夕阳下的加拉加斯，城市建筑与右侧的阿维拉山 — 图片已缩放；展示时裁切", author: "Periodismodepaz", license: "CC BY 4.0", href: "https://commons.wikimedia.org/wiki/File:Atardecer_en_Caracas_2.jpg" },
      {
        title: "马拉开波的城市景观，大道与建筑清晰可见 — 图片已缩放；展示时裁切",
        author: "José ILIDIO Spinola",
        license: "CC BY-SA 2.0",
        href: "https://commons.wikimedia.org/wiki/File:MaracaiboView_(cropped).jpg",
      },
      { title: "卡贝略港历史街区的洛斯兰塞罗斯街 — 图片已缩放；展示时裁切", author: "Jesus Enrique Morao Blanco", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Calle_%22Los_Lanceros%22_en_Puerto_Cabello.jpg" },
      { title: "玻利瓦尔城历史城区", author: "Venecon", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Ciudad_Bol%C3%ADvar_historical_zone.jpg" },
      { title: "法尔孔州科罗两旁排列着殖民时期房屋的街道 — 图片已缩放；展示时裁切", author: "Grégory David Escobar Fernández", license: "CC BY 2.0", href: "https://commons.wikimedia.org/wiki/File:Calle_en_Coro_2.JPG" },
      { title: "巴基西梅托主教座堂", author: "Rodolfo Pimentel", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Catedral_de_Barquisimeto_d%C3%ADa_lluvioso.jpg" },
      { title: "库马纳城市建筑与加勒比海岸的航拍景观 — 图片已缩放；展示时裁切", author: "BID Ciudades Sostenibles", license: "CC BY 2.0", href: "https://commons.wikimedia.org/wiki/File:Cumana_sucre.jpg" },
      { title: "特鲁希略市的克里斯托瓦尔·门多萨广场 — 图片已缩放；展示时裁切", author: "Rjcastillo", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Plaza_Cristobal_Mendoza.jpg" },
      { title: "Yare的舞蹈恶魔戴着面具，全身红色服装清晰可见 — 图片已缩放；展示时裁切", author: "Josedrg08", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Danzantes_de_Yare.jpg" },
      { title: "Sanare的Zaragozas庆典参与者戴着手工面具、身着缤纷服装 — 图片已缩小；展示时裁切", author: "Rodolfo Pimentel", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Zaragozas_original.jpg" },
      { title: "马拉开波奇尼塔圣母巡游", author: "Mgta122001vzla", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Bajada_de_la_Chinita_en_Maracaibo_2023_01.jpg" },
      { title: "巴基西梅托巡游中的神圣牧女圣像，周围是鲜花与信众 — 图片已缩小；展示时裁切", author: "Rodolfo Pimentel", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:DIVINA_PASTORA_en_la_procesi%C3%B3n_los_feligreses_tom%C3%A1ndole_fotos.jpg" },
{ title: "加拉加斯大学城中央图书馆", author: "Jorge Andrés Paparoni Bruzual", license: "CC BY-SA 2.0", href: "https://commons.wikimedia.org/wiki/File:Biblioteca_Central_de_la_Ciudad_Universitaria_Caracas.jpg" },
      { title: "科罗铁窗之家的内庭 — 图片已缩放；展示时裁切", author: "Janethrodri", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Patio_Casa_de_las_Ventanas_de_Hierro.jpg" },
      { title: "玻利瓦尔城安戈斯图拉议会旧址的立面 — 图片已缩放；展示时裁切", author: "LHommeDuMonde", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Casa_de_Angostura,_Ciudad_Bol%C3%ADvar..jpg" },
    ],
  },

  sabores: {
    slug: "sabores",
    eyebrow: "从餐桌认识委内瑞拉",
    title: "委内瑞拉的风味",
    intro:
      "一个国家也可以吃着走完。而这里没有一种菜系，而是六七种：玉米在哪里都是主角，但配它的东西会随气候、河流，以及当年在哪个港口上岸的人而变。",
    hero: {
      src: "/images/arepa.jpg",
      alt: "刚做好的委内瑞拉玉米饼 arepa",
    },
    meta: {
      title: "委内瑞拉的风味 | Mrs Venezuela",
      description:
        "用照片认识委内瑞拉菜：arepa、pabellón、cachapa 与 hallaca，各地区的风味，可可、甜点、食材，以及十二月的餐桌。",
    },
    indexLabel: "本指南目录",
    backLabel: "返回首页",
    sections: [
      {
        slug: "una-cocina-de-muchas-regiones",
        number: "01",
        title: "许多地区的一桌菜",
        lede: "并不存在单一的委内瑞拉菜。玉米和木薯是共同的底子；在此之上，安第斯用小麦和土豆入菜，东部用鱼，平原则用柴火烤肉。",
        layout: "prose",
      },
      {
        slug: "iconos-venezolanos",
        number: "02",
        title: "委内瑞拉的标志",
        lede: "六道菜，几乎任何一个委内瑞拉人无论身在何处都认得。",
        layout: "food-dishes",
        items: [
          {
            title: "Arepa",
            meta: "全国 · 源自前西班牙时期",
            text: "在 budare（烤盘）上烤熟的玉米饼，与南美洲北部其他民族共有。其名称常被认为与「erepa」有关，那是库马纳戈托语中与玉米相关的词。1960年起，预煮玉米粉让它成为日常食物；剖开后夹馅。",
            photo: { src: "/images/commons/arepas-tradicionales.jpg", alt: "莫纳加斯州卡里佩一处摊位上正在烤制的玉米 arepa" },
          },
          {
            title: "Pabellón criollo",
            meta: "全国 · 午餐",
            text: "手撕牛肉、黑豆、白米饭与熟大蕉煎片（tajadas）。通常被视为国菜。上面加一个煎蛋叫「a caballo」；煎蕉片摆在两侧则叫「con barandas」。",
            photo: { src: "/images/commons/pabellon-criollo-venezolano.jpg", alt: "一盘委内瑞拉 pabellón criollo" },
          },
          {
            title: "Cachapa",
            meta: "全国 · 嫩玉米",
            text: "磨碎的嫩玉米（jojoto）调成的甜面糊，在 budare 上烤熟，对折裹住 queso de mano。它的近亲 cachapa de hoja 用玉米叶包裹，放进水里煮熟。",
            photo: { src: "/images/commons/cachapa-con-queso-e-mano.jpg", alt: "对折裹着 queso de mano 的 cachapa" },
          },
          {
            title: "Hallaca",
            meta: "全国 · 十二月",
            text: "用 onoto（胭脂树籽）染色的玉米面团，包入炖肉馅，裹上芭蕉叶后水煮。自十八世纪起已有文献记载，做法因地区和家庭而异：例如安第斯的做法通常会放鹰嘴豆。",
            photo: { src: "/images/commons/tradicionales-hallacas.jpg", alt: "在芭蕉叶上包 hallaca，四周摆着炖馅", position: "25% 50%" },
          },
          {
            title: "Tequeños",
            meta: "加拉加斯与中部 · 开胃小点",
            text: "白奶酪条裹上小麦面皮后油炸。其名称常被认为与洛斯特克斯（Los Teques）有关，但并无文献证据。到二十世纪中叶，它已是聚会上的常见食物。",
            photo: { src: "/images/commons/tequenos-venezolanos.jpg", alt: "炸好的 tequeños，其中一根掰开露出奶酪", position: "90% 50%" },
          },
          {
            title: "Empanada",
            meta: "全国 · 早餐",
            text: "源自伊比利亚，在委内瑞拉用玉米面团制作并油炸。馅料有手撕牛肉、奶酪或黑豆；在玛格丽塔岛和东部，经典的是 empanada de cazón（小鲨鱼肉馅）。",
            photo: { src: "/images/commons/empanadas-de-venezuela.jpg", alt: "玻璃盘上的委内瑞拉玉米粉 empanada，其中一个被咬了一口", position: "100% 50%" },
          },
        ],
      },
      {
        slug: "sabores-por-region",
        number: "03",
        title: "分区的风味",
        lede: "同一张餐桌，换个地方坐下来就完全不同。",
        layout: "food-regions",
        items: [
          {
            title: "安第斯",
            meta: "梅里达 · 塔奇拉 · 特鲁希略",
            dishes: ["Pastelitos andinos", "Pisca andina", "Arepa de trigo", "鳟鱼"],
            text: "寒冷气候的菜：土豆、乳制品和小麦——殖民时期的小麦种植主要与这片山区联系在一起。鳟鱼于1937年引入，如今已很常见。",
            photo: { src: "/images/commons/pastelitos-andinos.jpg", alt: "篮子里刚炸好的 pastelitos andinos" },
          },
          {
            title: "东部",
            meta: "苏克雷 · 安索阿特吉 · 新斯巴达 · 莫纳加斯",
            dishes: ["Empanada de cazón", "Pastel de chucho", "炸鱼"],
            text: "海岸与渔业决定了餐桌。在玛格丽塔岛，pastel de chucho 被认为由厨师鲁文·圣地亚哥（Rubén Santiago）在八十年代创制，源自东部的 cuajado。",
            photo: { src: "/images/commons/pescado-frito-con-arepa.jpg", alt: "玛格丽塔岛风格的炸鱼，配 arepa、番茄与青柠" },
          },
          {
            title: "苏利亚",
            meta: "马拉开波与湖区",
            dishes: ["Patacón", "Mandoca", "Huevos chimbos"],
            text: "马拉开波湖周边是全国几大产奶区之一。熟大蕉和奶酪出现在许多菜肴里，甜食中也有。",
            photo: { src: "/images/commons/mandocas-maracuchas.jpg", alt: "马拉开波的 mandoca：玉米与熟大蕉做的炸面圈" },
          },
          {
            title: "平原",
            meta: "阿普雷 · 巴里纳斯 · 瓜里科 · 葡萄牙州 · 科赫德斯",
            dishes: ["Carne en vara", "Pisillo", "Carato"],
            text: "萨瓦纳草原上的牧区菜，以柴火烤肉和大蕉为主。圣周期间会吃水豚（chigüire），捕猎水豚须持官方许可。",
            photo: { src: "/images/commons/entreverado-llanero.jpg", alt: "平原牧场的篝火旁，正在烤制的 carne en vara 与 entreverado", position: "65% 50%" },
          },
          {
            title: "圭亚那",
            meta: "玻利瓦尔 · 亚马孙 · 德尔塔阿马库罗",
            dishes: ["Sapoara", "河鱼", "Catara"],
            text: "原住民的苦木薯与奥里诺科河的鱼在这里共存。每年八月，捕捞 sapoara 鱼揭开玻利瓦尔城奥里诺科节的序幕。",
            photo: { src: "/images/commons/pescado-de-rio-amazonas.jpg", alt: "亚马孙州，芭蕉叶上的河鱼，配木薯与沙拉" },
          },
          {
            title: "中部海岸",
            meta: "阿拉瓜 · 卡拉沃沃 · 拉瓜伊拉 · 米兰达",
            dishes: ["鱼配 tostones", "鱼肉 sancocho", "Cafunga"],
            text: "渔民聚居、昔日可可庄园林立的海岸，巴洛文托（Barlovento）一带非裔委内瑞拉传统深厚。在海边，鱼端上桌时配着 tostones。",
            photo: { src: "/images/commons/pescado-frito-con-tostones.jpg", alt: "炸鱼配 tostones 与沙拉，阿拉瓜海岸的典型菜" },
          },
        ],
      },
      {
        slug: "cacao-y-chocolate",
        number: "04",
        title: "可可与巧克力",
        lede: "委内瑞拉的可可产量不大——据 FAOSTAT，2024年约29,400吨，占全球0.6%——但名列国际可可组织的「精品香味可可」名单。",
        layout: "food-cacao",
        photo: {
          src: "/images/commons/cacao-tostado.jpg",
          alt: "陶碗里烘好的可可豆，等待研磨",
        },
        items: [
          {
            title: "乔奥",
            meta: "阿拉瓜州 · 原产地命名",
            text: "一个不通公路、要从乔罗尼坐小船抵达的村子。它的可可自2000年起获原产地命名；据 SAPI（2026），这是全国唯一的可可原产地命名。",
            photo: { src: "/images/commons/cacao-chuao.jpg", alt: "阿拉瓜州乔奥村的场院上，可可豆在阳光下晾晒" },
          },
          {
            title: "帕里亚",
            meta: "苏克雷州",
            text: "半岛上以 trinitario 可可为主，因同名小镇而在市场上称作 Río Caribe。",
            photo: { src: "/images/commons/cacao-paria.jpg", alt: "帕里亚半岛上，挂在树干上的成熟可可果" },
          },
          {
            title: "湖南岸",
            meta: "苏利亚州 · 梅里达州",
            text: "安第斯山脚下种植 Porcelana，一种 criollo 可可，新鲜时豆仁呈白色。",
            photo: { src: "/images/commons/cacao-santa-apolonia.jpg", alt: "梅里达湖南岸圣阿波罗尼亚种植的可可豆" },
          },
        ],
      },
      {
        slug: "dulces-panes-y-bebidas",
        number: "05",
        title: "甜点、面包与饮品",
        lede: "上午垫肚子的、配咖啡的，以及天热时喝的。",
        layout: "food-groups",
        groups: [
          {
            title: "甜点",
            items: [
              {
                title: "Quesillo",
                meta: "全国",
                text: "委内瑞拉版的焦糖布丁，用全蛋和炼乳，铺在焦糖上。其名称通常被解释为源于它的小孔，形似奶酪上的孔。",
                photo: { src: "/images/commons/quesillo.jpg", alt: "玻璃盘里的委内瑞拉 quesillo，焦糖在上面" },
              },
              {
                title: "Dulce de lechosa",
                meta: "十二月",
                text: "青木瓜切条，用 papelón 或白糖熬的糖浆煮制，有时加丁香。传统上为圣诞餐桌而做。",
                photo: { src: "/images/commons/dulce-de-lechosa.jpg", alt: "盛在盘中、浸着金黄糖浆的 dulce de lechosa" },
              },
              {
                title: "Bienmesabe",
                meta: "全国",
                text: "浸过酒的海绵蛋糕，与椰子蛋黄奶油层层相间，表面覆蛋白霜。通常最后撒上肉桂。",
                photo: { src: "/images/commons/bienmesabe.jpg", alt: "表面铺满椰丝、点缀肉桂条纹的 bienmesabe 蛋糕" },
              },
            ],
          },
          {
            title: "面包",
            items: [
              {
                title: "Golfeado",
                meta: "甜面包",
                text: "加 papelón、白奶酪和大茴香卷成螺旋的面团。传统说法认为它出自二十世纪初佩塔雷的面包房。",
                photo: { src: "/images/commons/golfeado-4.jpg", alt: "从上方看的 golfeado，螺旋表面覆着 papelón" },
              },
              {
                title: "Cachito",
                meta: "面包房",
                text: "烘烤前卷入火腿的面包。其起源没有文献记载；流传的几种说法中，有一种把它与葡萄牙面包师联系在一起。",
                photo: { src: "/images/commons/cachito-de-jamon.jpg", alt: "切成两半的火腿 cachito", position: "20% 50%" },
              },
            ],
          },
          {
            title: "饮品",
            items: [
              {
                title: "Papelón con limón",
                meta: "家常饮料",
                text: "把 papelón 溶在冰水里，加青柠汁。是午餐和小吃摊上最常见的家常饮料。",
                photo: { src: "/images/commons/papelon-con-limon-2.jpg", alt: "一杯加冰与青柠片的 papelón con limón", position: "50% 100%" },
              },
              {
                title: "Chicha",
                meta: "米饮",
                text: "街头的 chicha 用大米做，甜而不发酵，由 chichero 小贩售卖。安第斯地区另有一种发酵的。",
                photo: { src: "/images/commons/chicha.jpg", alt: "杯装委内瑞拉米制 chicha，上面撒着肉桂", position: "90% 50%" },
              },
              {
                title: "Tizana",
                meta: "水果饮品",
                text: "水果切丁泡在橙汁或西瓜汁里，加红石榴糖浆，因而呈红色。全年有售。",
                photo: { src: "/images/commons/tizana.jpg", alt: "一杯带水果块的红色 tizana", position: "50% 80%" },
              },
            ],
          },
        ],
      },
      {
        slug: "migraciones-en-la-mesa",
        number: "06",
        title: "餐桌上的移民",
        lede: "今天这里吃的一部分东西，是坐船而来或越过边境的人带来的。",
        layout: "food-influences",
        items: [
          {
            title: "欧洲",
            meta: "西班牙 · 葡萄牙 · 意大利",
            text: "西班牙留下了殖民时期的底子，二十世纪中叶的加那利移民又加以巩固。葡萄牙人（许多来自马德拉）深刻影响了食品商业；意大利人则帮助意面普及开来。",
            photo: { src: "/images/commons/panaderia-la-asuncion.jpg", alt: "玛格丽塔岛拉亚松森一家面包房货架上刚出炉的面包" },
          },
          {
            title: "黎凡特",
            meta: "叙利亚 · 黎巴嫩",
            text: "叙利亚人和黎巴嫩人自十九世纪下半叶起陆续到来，二十世纪又有新的移民潮。随着他们，quibbe 和 tabule 变得常见。",
            photo: { src: "/images/commons/comida-arabe-maracaibo.jpg", alt: "马拉开波一家餐馆里的 quibbe、酿葡萄叶、tabule 与鹰嘴豆泥" },
          },
          {
            title: "邻国",
            meta: "哥伦比亚 · 特立尼达与安的列斯群岛",
            text: "与哥伦比亚共享餐桌：边境两侧都有 arepa，各有各的做法。在埃尔卡亚俄，随淘金而来的安的列斯人留下了 calalú。",
            photo: { src: "/images/commons/arepa-de-chocolo.jpg", alt: "夹奶酪的哥伦比亚 arepa de chócolo" },
          },
        ],
      },
      {
        slug: "ingredientes-de-venezuela",
        number: "07",
        title: "委内瑞拉的食材",
        lede: "七种食材，几乎撑起了上面的一切。",
        layout: "food-pantry",
        items: [
          {
            title: "玉米",
            meta: "原住民的根基",
            text: "委内瑞拉菜的核心谷物，源自原住民：可以晒干磨粉，也可以趁嫩使用，即 jojoto。",
            dishes: ["Arepa", "Hallaca", "Cachapa", "Bollos"],
            photo: { src: "/images/commons/maiz.jpg", alt: "剥好的黄玉米穗" },
          },
          {
            title: "木薯",
            meta: "苦木薯 · Casabe",
            text: "苦木薯榨去汁液后做成 casabe，一种源自原住民的饼，2024年在五国联合申报中入选教科文组织名录。",
            dishes: ["Casabe", "Mañoco"],
            photo: { src: "/images/commons/esto-es-casabe.jpg", alt: "柴火灶旁挂在木杆上晾干的 casabe 饼", position: "72% 40%" },
          },
          {
            title: "大蕉",
            meta: "青熟皆可",
            text: "十六世纪初随欧洲人来到加勒比，如今几乎每张餐桌上都有。",
            dishes: ["Tajadas", "Tostones", "Patacón", "Pastel de chucho"],
            photo: { src: "/images/commons/platanos-chuao.jpg", alt: "乔奥河边的一串青大蕉", position: "67% 50%" },
          },
          {
            title: "Ají dulce",
            meta: "调味",
            text: "几乎不辣的 Capsicum chinense，与一些极辣的辣椒同属一个种。",
            dishes: ["Hallaca", "炖菜", "鱼"],
            photo: { src: "/images/commons/aji-dulce.jpg", alt: "市场上绿、红、橙色的 ají dulce" },
          },
          {
            title: "Papelón",
            meta: "甜味剂",
            text: "甘蔗汁熬煮后凝固成块；在其他国家称作 panela。",
            dishes: ["Papelón con limón", "Golfeado", "椰子甜点"],
            photo: { src: "/images/commons/papelon.jpg", alt: "堆叠的 papelón 糖块" },
          },
          {
            title: "可可",
            meta: "历史作物",
            text: "十七、十八世纪，它是殖民地委内瑞拉最主要的出口品。",
            dishes: ["巧克力", "热巧克力"],
            photo: { src: "/images/commons/mazorca-de-cacao.jpg", alt: "德尔塔阿马库罗州，剖开露出可可豆的可可果" },
          },
          {
            title: "奶酪",
            meta: "De mano · Guayanés · Telita · Llanero",
            text: "软质新鲜的有 queso de mano、guayanés 和 telita；硬而咸的是 llanero，擦碎撒在黑豆和 arepa 上。",
            dishes: ["Cachapa", "Arepa", "黑豆"],
            photo: { src: "/images/commons/queso-llanero.jpg", alt: "木板上的一轮 queso llanero" },
          },
        ],
      },
      {
        slug: "la-mesa-de-diciembre",
        number: "08",
        title: "十二月的餐桌",
        lede: "平安夜和新年，hallaca 与另外三道经典菜同桌，举杯时则有 ponche crema。",
        layout: "food-table",
        photo: {
          src: "/images/commons/plato-tipico-navideno.jpg",
          alt: "委内瑞拉圣诞餐盘：hallaca、pan de jamón、ensalada de gallina 与 pernil",
        },
        items: [
          {
            title: "Hallaca",
            text: "全家一起动手做，整个十二月都在吃。",
            photo: { src: "/images/commons/hallacas-amarradas.jpg", alt: "两个用芭蕉叶包好扎紧的 hallaca" },
          },
          {
            title: "Pan de jamón",
            text: "馅料是火腿、葡萄干和橄榄。一般认为出自二十世纪初加拉加斯的 Ramella 面包房。",
            photo: { src: "/images/commons/pan-de-jamon.jpg", alt: "一片 pan de jamón，可见火腿与橄榄卷成的螺旋" },
          },
          {
            title: "Pernil",
            text: "腌制后烤上几个小时的猪腿；吃剩的通常会夹进面包。",
            photo: { src: "/images/commons/pernil-horneado.jpg", alt: "烤盘里烤好的猪腿 pernil" },
          },
          {
            title: "Ensalada de gallina",
            text: "土豆、胡萝卜和撕碎的母鸡肉拌蛋黄酱，是俄罗斯沙拉的近亲。",
            photo: { src: "/images/commons/ensalada-de-gallina.jpg", alt: "圣诞晚餐上加了豌豆的 ensalada de gallina" },
          },
        ],
      },
    ],
    closing: {
      text: "一个国家，也可以用它端上餐桌的东西来讲述。",
    },
    credits: [
      { title: "Arepa（封面）", author: "Steven Depolo", license: "CC BY 2.0", href: "https://commons.wikimedia.org/wiki/File:Arepitas_Food_Macro.jpg" },
      { title: "卡里佩的传统 arepa", author: "Wilmeris Hernández", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Arepas_Tradicionales.jpg" },
      { title: "Pabellón criollo", author: "Wilfredor", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Pabell%C3%B3n_Criollo_Venezolano.jpg" },
      { title: "夹 queso de mano 的 cachapa", author: "Jonathan de Almeida", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Cachapa_Con_Queso_e_Mano.JPG" },
      { title: "传统 hallaca", author: "Tomás Rojas", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Tradicionales_Hallacas.jpg" },
      { title: "委内瑞拉 tequeños", author: "Rodolfo Pimentel", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Teque%C3%B1os_Venezolanos.jpg" },
      { title: "委内瑞拉 empanada", author: "Laura Fiorucci", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Empanadas_de_Venezuela.jpg" },
      { title: "Pastelitos andinos", author: "Julio Sifontes", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Pastelitos_Andinos.jpg" },
      { title: "炸鱼配 arepa", author: "Wilfredor", license: "CC0", href: "https://commons.wikimedia.org/wiki/File:Plato_de_pescado_frito_con_arepa.jpg" },
      { title: "马拉开波的 mandoca", author: "DamianFinol", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Mandocas_maracuchas.jpg" },
      { title: "平原的 carne en vara 与 entreverado", author: "Douglas Bracho", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Un_entreverado_bien_llanero.JPG" },
      { title: "亚马孙州的河鱼（调整光线）", author: "Rasiel Morella", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Comida_t%C3%ADpica,_Amazonas.JPG" },
      { title: "炸鱼配 tostones", author: "Menu1973", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Plato_tipico_en_Maracay.jpg" },
      { title: "烘烤过的可可", author: "ElmerGuevara", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Cacao_Tostado..JPG" },
      { title: "乔奥晾晒中的可可", author: "Bucare2011", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Cacao_Chuao.jpg" },
      { title: "帕里亚的可可果", author: "Luisovalles", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Cacao-fruto.jpg" },
      { title: "梅里达州圣阿波罗尼亚的可可", author: "Wilfredor", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Semillas_de_cacao.jpg" },
      { title: "委内瑞拉 quesillo", author: "Muago", license: "CC0", href: "https://commons.wikimedia.org/wiki/File:Quesillo_venezolano_2.jpg" },
      { title: "Dulce de lechosa", author: "Muago", license: "CC0", href: "https://commons.wikimedia.org/wiki/File:Dulce_de_lechosa.jpg" },
      { title: "Bienmesabe 蛋糕", author: "Muago", license: "CC0", href: "https://commons.wikimedia.org/wiki/File:Torta_de_bienmesabe.jpg" },
      { title: "Golfeado", author: "Muago", license: "CC0", href: "https://commons.wikimedia.org/wiki/File:Golfeado_4.jpg" },
      { title: "火腿 cachito", author: "Luis Miguel Cisneros", license: "CC BY 2.0", href: "https://commons.wikimedia.org/wiki/File:Cachito_de_Jam%C3%B3n.jpg" },
      { title: "Papelón con limón", author: "Muago", license: "CC0", href: "https://commons.wikimedia.org/wiki/File:Papel%C3%B3n_con_lim%C3%B3n_2.jpg" },
      { title: "委内瑞拉 chicha", author: "Muago", license: "CC0", href: "https://commons.wikimedia.org/wiki/File:Chicha_venezolana_2.jpg" },
      { title: "Tizana", author: "Muago", license: "CC0", href: "https://commons.wikimedia.org/wiki/File:Tizana.jpg" },
      { title: "拉亚松森的面包房", author: "Wilfredor", license: "CC0", href: "https://commons.wikimedia.org/wiki/File:Panaderia_Don_Bosco_en_la_Asuncion_12.jpg" },
      { title: "马拉开波的阿拉伯菜（裁切）", author: "Ronaldy Lugo", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:COMIDA_ARABE_EN_MARACAIBO.JPG" },
      { title: "Arepa de chócolo", author: "John Alexis Guerra Gómez", license: "CC BY-SA 2.0", href: "https://commons.wikimedia.org/wiki/File:Arepa_de_Ch%C3%B3colo.jpg" },
      { title: "剥好的玉米", author: "Davidperezc77", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Maiz_Pelado.JPG" },
      { title: "Casabe", author: "Wilmeris Hernández", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Esto_es_casabe.jpg" },
      { title: "乔奥河边的大蕉", author: "Isamarvda", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Pl%C3%A1tanos_a_orillas_del_r%C3%ADo_de_Chuao.jpg" },
      { title: "Ají dulce", author: "Wilfredor", license: "CC0", href: "https://commons.wikimedia.org/wiki/File:Sweet_Pepper_Market.jpg" },
      { title: "成块的 papelón", author: "Elifeleth", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Panela_en_cuadros.JPG" },
      { title: "德尔塔阿马库罗州的可可果", author: "Grace Rengifo", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Cacao_(Delta_Amacuro).JPG" },
      { title: "Queso llanero", author: "Muago", license: "CC0", href: "https://commons.wikimedia.org/wiki/File:Queso_llanero.jpg" },
      { title: "委内瑞拉圣诞餐盘（裁切）", author: "jonathan de Almeida", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Plato_Tipico_Navide%C3%B1o.JPG" },
      { title: "圣诞节的 hallaca", author: "Wilfredor", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Hallaca,_Venezuelan_Christmas_food.jpg" },
      { title: "Pan de jamón", author: "Wilfredor", license: "CC BY-SA 4.0", href: "https://commons.wikimedia.org/wiki/File:Pan_de_jamon,_Venezuelan_food.jpg" },
      { title: "烤 pernil", author: "Jovannabonilla", license: "CC BY-SA 3.0", href: "https://commons.wikimedia.org/wiki/File:Pierna_de_cochino_en_salsa.JPG" },
      { title: "圣诞餐盘中的 ensalada de gallina（裁切）", author: "David Hernández", license: "CC BY-SA 2.0", href: "https://commons.wikimedia.org/wiki/File:Cena_navidad_2007.jpg" },
    ],
  },
};
