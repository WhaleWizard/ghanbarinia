/**
 * Every visible string on the site lives here, in English and Russian.
 * Components never hard-code copy — that is what let the old text contradict
 * itself (a marquee saying "Est. 1965" beside a heading reading 1841).
 *
 * The thread running through all of it: every carpet is hand-knotted, so
 * every carpet is the only one of its kind. The sections are ordered as a
 * journey — what we sell, who we are, where the carpets come from, what you
 * can choose from, why it costs what it costs, the rarest pieces, where to
 * see them, how to get in touch.
 */

export const CONTACTS = {
  /* Confirmed by the brand: Tashkent City Mall, 2nd floor, daily 10:00–00:00 */
  phone: "+998 90 029 55 50",
  phoneHref: "tel:+998900295550",
  telegram: "@ghanbarinia_uzbekistan",
  telegramHref: "https://t.me/ghanbarinia_uzbekistan",
  instagram: "@ghanbariniauzbekistan",
  instagramHref: "https://www.instagram.com/ghanbariniauzbekistan",
  mapHref: "https://maps.google.com/?q=Tashkent+City+Mall",
} as const;

const en = {
  code: "en",
  label: "English",

  meta: {
    title: "Ghanbarinia Uzbekistan — Hand-Knotted Persian Carpets in Tashkent",
    description:
      "Collectors' Persian carpets since 1841. Hand-knotted carpets chosen in the finest workshops of Iran and the Middle East — every one a single piece. The only gallery in Central Asia: Tashkent City Mall, 2nd floor, daily 10:00–00:00.",
  },

  nav: {
    heritage: "The house",
    schools: "Cities",
    collections: "Catalogue",
    craft: "How it is made",
    showroom: "Gallery",
    appointment: "Tashkent · By appointment",
    cta: "Write on Telegram",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },

  hero: {
    /* Kept short on purpose — longer wording wrapped onto two lines on a
       390px screen. */
    eyebrow: "Persian carpets · Tashkent",
    kicker: "Collectors' carpets since 1841",
    titleLine1: "The first gallery",
    titleLine2: "in Central Asia.",
    lead: "Hand-knotted Persian carpets, chosen piece by piece in the finest workshops of Iran and the Middle East. Tied by hand, never by machine — which is why no two are ever the same. We opened in Tashkent so that nobody has to fly to Dubai for a carpet like this.",
    ctaCatalogue: "See the collections",
    ctaContact: "Write on Telegram",
    sideLabel: "Chosen by hand",
    sideText: "Each piece is singular. There will not be a second one.",
    scroll: "Scroll",
  },

  marquee: [
    "Established 1841",
    "Five generations of one family",
    "More than 30 galleries worldwide",
    "Flagship at The Dubai Mall",
    "The only gallery in Central Asia",
    "Hand-knotted, every piece",
    "Singular, every piece",
    "Tashkent City Mall, 2nd floor",
  ],

  heritage: {
    label: "◆ The house",
    titleLine1: "Five generations",
    titleLine2: "since 1841.",
    p1: "The Ghanbarinia family began trading carpets in Shiraz in 1841 and has not stopped since — five generations, one trade. What the house is known for is the selection: buyers who know the workshops personally, and who reject far more than they take.",
    p2: "Trading internationally as Heritage Carpet by Ghanbarinia, the house keeps more than thirty galleries around the world, with the flagship inside The Dubai Mall. Its antique collection has been shown at the Burj Al Arab and Atlantis The Royal.",
    p3: "Tashkent is the only Ghanbarinia gallery in Central Asia. It exists so that a carpet can be chosen the way it should be — unrolled, in daylight, in front of you.",
    link: "See how a carpet is made",
    imageCaption: "Gallery · Heritage Carpet Collection",
    stats: [
      { value: "1841", label: "Year the house was founded" },
      { value: "5", label: "Generations of the family" },
      { value: "30+", label: "Galleries worldwide" },
      { value: "1", label: "Gallery in Central Asia" },
    ],
  },

  schools: {
    label: "Where they come from",
    cta: "Request the price",
    items: [
      {
        id: "tabriz",
        region: "East Azerbaijan, Iran",
        title: "Tabriz",
        description:
          "Capital of the Safavid empire from 1501, and the first Persian city whose carpets reached Europe: in the nineteenth century the workshops of Haji Jalili sent the earliest consignments west. A Tabriz is known by its medallion — measured to the knot, and always exactly symmetrical.",
        detail: "Wool and silk · Double-wefted · Vegetable dyes",
      },
      {
        id: "kashan",
        region: "Isfahan Province, Iran",
        title: "Kashan",
        description:
          "A retreat of the Safavid shahs, and a silk-weaving town since the sixteenth century. The local wool was too coarse for fine work, so Kashan bought merino instead — first from Manchester, later from Sabzevar. That is why its floral fields are denser than anywhere else.",
        detail: "Kork wool and silk · Persian knot · Floral medallion",
      },
      {
        id: "isfahan",
        region: "Isfahan, Iran",
        title: "Isfahan",
        description:
          "Nesf-e Jahan — half the world — is what they called Isfahan under Shah Abbas I. Weaving died with the dynasty and only returned in the 1920s. Modern Isfahan means symmetrical gardens, hunting scenes, and silk drawn through kork wool to catch the light.",
        detail: "Kork wool · Silk highlights · Asymmetric Persian knot",
      },
      {
        id: "qom",
        region: "Central Iran",
        title: "Qom",
        description:
          "The youngest of the great weaving cities: Qom only began in the 1930s, and began straight in pure silk. Pile, warp and weft are all silk, so the carpet changes colour as you walk around it — the same patch reads light from one side and dark from the other.",
        detail: "100% silk pile and foundation · Shifts colour with the light",
      },
      {
        id: "nain",
        region: "Isfahan Province, Iran",
        title: "Nain",
        description:
          "Nain wove cloth, not carpets — the fine wool used for the aba, the traditional men's cloak. When the aba fell out of fashion in the 1930s, its weavers turned that skill to the loom. Hence the Nain signature: ivory ground, indigo medallion, every outline drawn in silk.",
        detail: "Fine wool · Silk outlining · 6La and 9La grades",
      },
      {
        id: "mashad",
        region: "Khorasan, Iran",
        title: "Mashhad",
        description:
          "Iran's great city of pilgrimage, and a weaving centre since the Afsharid period. Mashhad works large — carpets for halls and long reception rooms — and its madder red is the deepest produced anywhere in the country.",
        detail: "Wool pile · Cotton foundation · Large formats",
      },
      {
        id: "heriz",
        region: "East Azerbaijan, Iran",
        title: "Heriz",
        description:
          "Not a city but a group of mountain villages east of Tabriz. Heriz weavers never worked from a paper cartoon: the pattern is held in memory and drawn from it, which is why the medallion comes out angular and alive. These are the toughest Persian carpets made — they are still handed down to grandchildren.",
        detail: "Hand-spun wool · Geometric medallion · Vegetable dyes",
      },
      {
        id: "shiraz",
        region: "Fars Province, Iran",
        title: "Shiraz",
        description:
          "Shiraz barely weaves at all — it gathers. The Qashqai and Khamseh nomads come down from the hills of Fars with work made on portable looms, without a cartoon and without a pattern repeated twice. This is also where the house of Ghanbarinia began, in 1841.",
        detail: "Natural wool · Hand-dyed · Nomadic weaving",
      },
    ],
  },

  collections: {
    label: "◆ The catalogue",
    titleLine1: "Eight traditions.",
    titleLine2: "No two alike.",
    intro:
      "The cities give you the romance; this is the practical part. Each tradition has its own material, density and temperament — here is which one suits which room.",
    materialLabel: "Material",
    densityLabel: "Density",
    footnote:
      "Every piece is hand-knotted and one of a kind. What you see here is a sample of the catalogue — the showroom holds considerably more.",
    cta: "See the full catalogue",
    trackLabel: "Weaving traditions, scrolls sideways",
    items: [
      {
        id: "tabriz",
        image: "tabriz",
        name: "Tabriz",
        origin: "East Azerbaijan, Iran",
        material: "Merino wool and silk",
        knots: "150–400 KPSI",
        description:
          "The most exact of the schools. Choose Tabriz for a formal room where the carpet is meant to be the discipline in the space, not the surprise.",
      },
      {
        id: "kashan",
        image: "kashan",
        name: "Kashan",
        origin: "Isfahan Province, Iran",
        material: "Kork wool and silk inlay",
        knots: "100–400 KPSI",
        description:
          "Dense floral fields in warm reds and deep blues. Sits comfortably with wood, brass and stone, and forgives a busy room.",
      },
      {
        id: "isfahan",
        image: "isfahan",
        name: "Isfahan",
        origin: "Isfahan, Iran",
        material: "Kork wool and silk highlights",
        knots: "200–600 KPSI",
        description:
          "The balanced choice: fine enough to reward close attention, calm enough to live with every day. The silk highlights move as the daylight moves.",
      },
      {
        id: "qom",
        image: "qom",
        name: "Qom",
        origin: "Qom, Central Iran",
        material: "100% pure Iranian silk",
        knots: "300–700 KPSI",
        description:
          "Pure silk throughout. The most collected school in the world, and the one most often bought as an inheritance rather than a furnishing.",
      },
      {
        id: "nain",
        image: "nain",
        name: "Nain",
        origin: "Isfahan Province, Iran",
        material: "Fine wool with silk outlining",
        knots: "200–600 KPSI",
        description:
          "Ivory grounds and indigo medallions. The quietest school — it lightens a room rather than taking it over. Good under pale furniture.",
      },
      {
        id: "mashad",
        image: "mashad",
        name: "Mashhad",
        origin: "Khorasan, Iran",
        material: "Fine wool, occasional silk accents",
        knots: "120–250 KPSI",
        description:
          "Built for scale. If the room is long, the ceiling high, or the carpet has to hold its own across a hall, this is the one.",
      },
      {
        id: "heriz",
        image: "heriz",
        name: "Heriz",
        origin: "East Azerbaijan, Iran",
        material: "Hand-spun wool, vegetable dyes",
        knots: "50–120 KPSI",
        description:
          "Bold geometry and the hardest wearing of them all. The right answer for a hallway, a family room, or anywhere with genuine traffic.",
      },
      {
        id: "shiraz",
        image: "shiraz",
        name: "Shiraz",
        origin: "Fars Province, Iran",
        material: "Natural wool, hand-dyed",
        knots: "40–120 KPSI",
        description:
          "Nomadic work, woven from memory. The irregularities are not flaws — they are the record of one weaver's hand, and they are why collectors want them.",
      },
    ],
  },

  craft: {
    label: "◆ How it is made",
    titleLine1: "Five years of work",
    titleLine2: "in a single carpet.",
    intro:
      "There is no machine anywhere in this process. A single carpet passes through four stages and several pairs of hands, and can take five years from first drawing to final check.",
    steps: [
      {
        number: "01",
        subtitle: "The drawing",
        title: "One pattern, drawn once",
        description:
          "Every carpet begins as a cartoon painted by hand: a full-size drawing on graph paper where one square equals one knot. A large medallion design takes a master designer months. That drawing is used for this carpet and no other.",
      },
      {
        number: "02",
        subtitle: "The materials",
        title: "Silk, wool and plants",
        description:
          "Silk from Caspian mulberry silkworms. Kork wool taken from the chest of high-pasture sheep, where the fleece is softest. Colour from indigo, madder, pomegranate rind and walnut husk — prepared by dyers, not bought in a tin.",
      },
      {
        number: "03",
        subtitle: "The weaving",
        title: "Tied knot by knot",
        description:
          "Weavers work side by side, calling the colour code along each row. Every knot is tied, cut and beaten down by hand. A fine silk carpet of three by four metres runs to millions of knots and takes years. This is where the single-copy rule comes from: the same hands never repeat the same carpet.",
      },
      {
        number: "04",
        subtitle: "The guarantee",
        title: "Checked before it is sold",
        description:
          "Knot density, dye stability, the integrity of the foundation and, for antiques, the age are all verified before a piece joins the collection. Each carpet leaves with a certificate of provenance and instructions for looking after it.",
      },
    ],
  },

  masterworks: {
    label: "◆ Masterworks",
    titleLine1: "Three carpets.",
    titleLine2: "Nothing above them.",
    intro:
      "Three carpets from the top of the collection, each available for private acquisition. Tap a piece to read it in full.",
    materialLabel: "Material",
    availabilityLabel: "Availability",
    availabilityValue: "One piece only · Viewing by appointment in Tashkent",
    cta: "Arrange a private viewing",
    items: [
      {
        id: "ardabil-revival",
        name: "The Ardabil Revival",
        origin: "Kashan, Isfahan Province",
        year: "Commissioned 2018, completed 2023",
        dimensions: "10.5 × 7.2 m",
        material: "Kork wool, silk border inlay, natural dyes",
        description:
          "A homage to the Ardabil Carpet of 1539 — the oldest dated carpet in the world, now in the Victoria & Albert Museum — woven by a team of master weavers over five consecutive years. The central medallion follows the original's geometry, and the cartouche inscriptions were transcribed by hand from the original.",
      },
      {
        id: "silk-garden-paradise",
        name: "Silk Garden of Paradise",
        origin: "Qom, Central Iran",
        year: "2019–2022",
        dimensions: "4.8 × 3.2 m",
        material: "100% Iranian silk — pile, warp and weft",
        description:
          "A garden carpet in pure silk throughout. The field follows the char bagh, the classical Persian four-garden plan, filled with botanical motifs taken from Safavid court design. Technically the most demanding piece the house has produced in recent years.",
      },
      {
        id: "tabriz-imperial-throne",
        name: "Tabriz Imperial Throne",
        origin: "Tabriz, East Azerbaijan",
        year: "Antique — circa 1880s",
        dimensions: "6.2 × 4.4 m",
        material: "Period kork wool, original vegetable dyes",
        description:
          "An authenticated antique of the late Qajar period, originally commissioned for a European collection. The medallion carries the Simurgh over a field of angular palmettes, and a century and a half has deepened the crimson ground to burgundy. Sold with full provenance documentation.",
      },
    ],
  },

  showroom: {
    label: "◆ The gallery",
    titleLine1: "The only gallery",
    titleLine2: "in Central Asia.",
    intro:
      "Ghanbarinia keeps more than thirty galleries around the world. In Central Asia there is one, and it is in Tashkent, on the second floor of Tashkent City Mall. No photograph shows how silk turns colour as you move past it, which is the entire reason to come and stand in front of it.",
    addressLabel: "Address",
    address: "Tashkent City Mall, 2nd floor, Tashkent",
    directions: "Open in Maps",
    hoursLabel: "Opening hours",
    hours: "Daily, 10:00 – 00:00",
    phoneLabel: "Phone",
    contactLabel: "Write to us",
    note: "Our advisors answer in Russian, Uzbek, English and Persian.",
    services: [
      ["Come and look", "Any carpet is unrolled and shown to you in daylight"],
      ["Try it at home", "Selected pieces go to your home before you decide anything"],
      ["Choose remotely", "Send your room measurements and photographs — we prepare a shortlist"],
      ["Designers and projects", "We work with hotels, offices and interior studios"],
    ],
  },

  consultation: {
    label: "◆ Get in touch",
    titleLine1: "We are here to help",
    titleLine2: "you choose.",
    intro:
      "Size, light, the colours already in the space. We put a short selection together and hold those pieces for your visit — no obligation, and no pressure once you are here.",
    name: "Name",
    namePlaceholder: "Your name",
    phone: "Phone or Telegram",
    phonePlaceholder: "+998 90 000 00 00",
    interest: "Interested in",
    interestPlaceholder: "Choose a tradition",
    interestOther: "Not sure yet — please advise",
    message: "Message",
    messagePlaceholder: "Room size, colours you have in mind, silk or wool…",
    submit: "Send the request",
    orWrite: "Or write to us directly on Telegram:",
    thanksTitle: "Thank you",
    thanksText:
      "We have your request. A Ghanbarinia advisor will be in touch shortly. If it is urgent, message us on Telegram.",
  },

  catalogue: {
    metaTitle: "Catalogue — Ghanbarinia Uzbekistan",
    metaDescription:
      "The full Ghanbarinia catalogue: hand-knotted Persian carpets from Tabriz, Kashan, Isfahan, Qom, Nain, Mashhad, Heriz and Shiraz. Filter by city, material, size and colour.",
    back: "Back to the site",
    label: "◆ The catalogue",
    title: "The whole collection.",
    intro:
      "Every piece is hand-knotted, so every piece exists once. Narrow it down by city, material, size or colour — anything you mark can be unrolled for you in the Tashkent gallery.",
    filters: "Filters",
    hideFilters: "Hide filters",
    sort: "Sort",
    sortNewest: "Newest first",
    sortDensity: "Density: highest first",
    sortAreaDesc: "Size: largest first",
    sortAreaAsc: "Size: smallest first",
    sortTradition: "City: A to Z",
    traditionLabel: "City",
    materialLabel: "Material",
    sizeLabel: "Size",
    colourLabel: "Colour",
    densityLabel: "Density",
    reset: "Clear all",
    shown: "Showing {shown} of {total}",
    showMore: "Show more",
    empty: "Nothing matches that combination.",
    emptyAction: "Clear the filters",
    antique: "Antique",
    priceOnRequest: "Price on request",
    ask: "Ask about this carpet",
    materials: {
      silk: "Pure silk",
      "wool-silk": "Wool and silk",
      wool: "Wool",
    },
    colours: {
      red: "Red",
      blue: "Blue",
      ivory: "Ivory",
      green: "Green",
      gold: "Gold",
      multi: "Multicolour",
    },
    sizes: {
      small: "Up to 3 m²",
      medium: "3–8 m²",
      large: "8–15 m²",
      palace: "Over 15 m²",
    },
  },

  footer: {
    about:
      "Ghanbarinia Uzbekistan — hand-knotted Persian carpets from a house founded in 1841. Every piece is singular. The only gallery in Central Asia.",
    navTitle: "Sections",
    contactTitle: "Contacts",
    rights: "All rights reserved.",
    photoNote: "Photographs are illustrative and are being replaced with photographs of the gallery.",
  },
};

/* English is the reference shape: any key missing from — or misspelled in —
   the Russian copy is a compile error, so the two can never drift apart. */
type Dictionary = typeof en;

const ru: Dictionary = {
  code: "ru",
  label: "Русский",

  meta: {
    title: "Ghanbarinia Uzbekistan — персидские ковры ручной работы в Ташкенте",
    description:
      "Коллекционные персидские ковры с 1841 года. Ручная работа, отобранные в лучших мастерских Ирана и Ближнего Востока, каждый — в единственном экземпляре. Единственная галерея в Средней Азии: ТРЦ Tashkent City Mall, 2 этаж, ежедневно 10:00–00:00.",
  },

  nav: {
    heritage: "О доме",
    schools: "Города",
    collections: "Каталог",
    craft: "Как ткут",
    showroom: "Галерея",
    appointment: "Ташкент · по записи",
    cta: "Написать в Telegram",
    openMenu: "Открыть меню",
    closeMenu: "Закрыть меню",
  },

  hero: {
    eyebrow: "Персидские ковры · Ташкент",
    kicker: "Коллекционные ковры с 1841 года",
    titleLine1: "Первая галерея",
    titleLine2: "в Средней Азии.",
    lead: "Персидские ковры ручной работы, отобранные поштучно в лучших мастерских Ирана и Ближнего Востока. Их вяжут руками, не станком, — поэтому двух одинаковых не бывает. Мы открылись в Ташкенте, чтобы за таким ковром больше не нужно было лететь в Дубай.",
    ctaCatalogue: "Смотреть коллекции",
    ctaContact: "Написать в Telegram",
    sideLabel: "Отобрано вручную",
    sideText: "Каждый ковёр — в единственном экземпляре. Второго такого не будет.",
    scroll: "Листайте",
  },

  marquee: [
    "Основан в 1841 году",
    "Пять поколений одной семьи",
    "Более 30 галерей по миру",
    "Флагман в The Dubai Mall",
    "Единственная галерея в Средней Азии",
    "Каждый ковёр — ручная работа",
    "Каждый — в единственном экземпляре",
    "Tashkent City Mall, 2 этаж",
  ],

  heritage: {
    label: "◆ О доме",
    titleLine1: "Пять поколений",
    titleLine2: "с 1841 года.",
    p1: "Семья Ганбариния начала торговать коврами в Ширазе в 1841 году и не останавливалась с тех пор — пять поколений, одно дело. Дом известен прежде всего отбором: закупщики знают мастерские лично и отказываются от гораздо большего, чем берут.",
    p2: "На международном рынке дом работает под именем Heritage Carpet by Ghanbarinia: более тридцати галерей по всему миру, флагман — в The Dubai Mall. Антикварное собрание дома выставлялось в Burj Al Arab и Atlantis The Royal.",
    p3: "Ташкент — единственная галерея Ghanbarinia в Средней Азии. Она существует, чтобы ковёр можно было выбрать так, как и следует: развёрнутым, при дневном свете, прямо перед вами.",
    link: "Посмотреть, как ткут ковёр",
    imageCaption: "Галерея · Heritage Carpet Collection",
    stats: [
      { value: "1841", label: "Год основания дома" },
      { value: "5", label: "Поколений семьи" },
      { value: "30+", label: "Галерей по миру" },
      { value: "1", label: "Галерея в Средней Азии" },
    ],
  },

  schools: {
    label: "Откуда они родом",
    cta: "Запросить цену",
    items: [
      {
        id: "tabriz",
        region: "Восточный Азербайджан, Иран",
        title: "Тебриз",
        description:
          "Столица Сефевидов с 1501 года и первый персидский город, чьи ковры попали в Европу: в XIX веке мастерские Хаджи Джалили отправили на Запад первые партии. Тебриз узнают по медальону — выверенному до узла и всегда идеально симметричному.",
        detail: "Шерсть и шёлк · Двойной уток · Растительные красители",
      },
      {
        id: "kashan",
        region: "Провинция Исфахан, Иран",
        title: "Кашан",
        description:
          "Загородная резиденция сефевидских шахов и центр шёлкоткачества с XVI века. Местная шерсть была слишком грубой для тонкой работы, поэтому Кашан покупал мериносовую — сначала в Манчестере, позже в Сабзеваре. Отсюда цветочные поля такой плотности, какой больше нигде нет.",
        detail: "Шерсть корк и шёлк · Персидский узел · Цветочный медальон",
      },
      {
        id: "isfahan",
        region: "Исфахан, Иран",
        title: "Исфахан",
        description:
          "Несф-е Джахан, «половина мира», — так называли Исфахан при шахе Аббасе I. Ковроткачество здесь угасло вместе с династией и вернулось только в 1920-х. Современный Исфахан — это симметричные сады, охотничьи сцены и шёлк, протянутый по шерсти корк, чтобы ловить свет.",
        detail: "Шерсть корк · Шёлковые акценты · Асимметричный персидский узел",
      },
      {
        id: "qom",
        region: "Центральный Иран",
        title: "Кум",
        description:
          "Самый молодой из великих ковровых городов: в Куме начали ткать только в 1930-х — и сразу из чистого шёлка. Ворс, основа и уток шёлковые, поэтому ковёр меняет цвет, когда вы его обходите: один и тот же участок с одной стороны светлый, с другой тёмный.",
        detail: "100% шёлк: ворс и основа · Меняет цвет от угла зрения",
      },
      {
        id: "nain",
        region: "Провинция Исфахан, Иран",
        title: "Наин",
        description:
          "Наин ткал не ковры, а тончайшую шерстяную ткань для аба — традиционного мужского плаща. Когда в 1930-х аба вышли из обихода, ткачи перенесли мастерство на станок. Отсюда наинский почерк: фон цвета слоновой кости, индиговый медальон и каждый контур обведён шёлком.",
        detail: "Тонкая шерсть · Шёлковая обводка · Классы 6La и 9La",
      },
      {
        id: "mashad",
        region: "Хорасан, Иран",
        title: "Мешхед",
        description:
          "Главный город паломничества Ирана и центр ковроткачества со времён Афшаридов. Мешхед работает крупно — ковры для залов и длинных парадных комнат, — а мареновый красный здесь глубже, чем где-либо в стране.",
        detail: "Шерстяной ворс · Хлопковая основа · Крупные форматы",
      },
      {
        id: "heriz",
        region: "Восточный Азербайджан, Иран",
        title: "Хериз",
        description:
          "Не город, а горные деревни к востоку от Тебриза. Херизские ткачи никогда не работали по бумажному картону: узор держат в памяти и оттуда его ведут — поэтому медальон выходит угловатым и живым. Это самые выносливые персидские ковры: их до сих пор передают внукам.",
        detail: "Шерсть ручного прядения · Геометрический медальон · Растительные красители",
      },
      {
        id: "shiraz",
        region: "Провинция Фарс, Иран",
        title: "Шираз",
        description:
          "Шираз почти не ткёт — он собирает. Кочевники кашкайцы и хамсе спускаются с гор Фарса с работой, сделанной на переносных станках, без картона и без повторяющегося дважды узора. Отсюда же, из Шираза, в 1841 году начался дом Ганбариния.",
        detail: "Натуральная шерсть · Ручная окраска · Кочевое ткачество",
      },
    ],
  },

  collections: {
    label: "◆ Каталог",
    titleLine1: "Восемь традиций.",
    titleLine2: "Двух одинаковых нет.",
    intro:
      "Города — это про красоту, а это практическая часть. У каждой традиции свой материал, плотность и характер: здесь видно, какая подойдёт вашей комнате.",
    materialLabel: "Материал",
    densityLabel: "Плотность",
    footnote:
      "Каждый ковёр связан вручную и существует в единственном экземпляре. Здесь показана часть каталога — в галерее их заметно больше.",
    cta: "Увидеть полный каталог",
    trackLabel: "Ковровые традиции, листается вбок",
    items: [
      {
        id: "tabriz",
        image: "tabriz",
        name: "Тебриз",
        origin: "Восточный Азербайджан, Иран",
        material: "Мериносовая шерсть и шёлк",
        knots: "150–400 узлов/дюйм²",
        description:
          "Самая точная из школ. Тебриз берут в парадную комнату, где ковёр должен задавать порядок, а не удивлять.",
      },
      {
        id: "kashan",
        image: "kashan",
        name: "Кашан",
        origin: "Провинция Исфахан, Иран",
        material: "Шерсть корк и шёлковые вставки",
        knots: "100–400 узлов/дюйм²",
        description:
          "Плотные цветочные поля в тёплых красных и глубоких синих тонах. Хорошо живёт рядом с деревом, латунью и камнем и прощает насыщенный интерьер.",
      },
      {
        id: "isfahan",
        image: "isfahan",
        name: "Исфахан",
        origin: "Исфахан, Иран",
        material: "Шерсть корк и шёлковые акценты",
        knots: "200–600 узлов/дюйм²",
        description:
          "Уравновешенный выбор: достаточно тонкий, чтобы разглядывать вблизи, и достаточно спокойный, чтобы жить с ним каждый день. Шёлковые акценты двигаются вслед за дневным светом.",
      },
      {
        id: "qom",
        image: "qom",
        name: "Кум",
        origin: "Кум, Центральный Иран",
        material: "100% иранский шёлк",
        knots: "300–700 узлов/дюйм²",
        description:
          "Целиком шёлк. Самая собираемая школа в мире и та, которую чаще покупают как наследство, а не как предмет обстановки.",
      },
      {
        id: "nain",
        image: "nain",
        name: "Наин",
        origin: "Провинция Исфахан, Иран",
        material: "Тонкая шерсть с шёлковой обводкой",
        knots: "200–600 узлов/дюйм²",
        description:
          "Фон цвета слоновой кости и индиговые медальоны. Самая тихая школа: осветляет комнату, а не забирает её себе. Хорош под светлой мебелью.",
      },
      {
        id: "mashad",
        image: "mashad",
        name: "Мешхед",
        origin: "Хорасан, Иран",
        material: "Тонкая шерсть, иногда шёлковые акценты",
        knots: "120–250 узлов/дюйм²",
        description:
          "Сделан под масштаб. Если комната длинная, потолки высокие или ковру нужно держать целый холл — это он.",
      },
      {
        id: "heriz",
        image: "heriz",
        name: "Хериз",
        origin: "Восточный Азербайджан, Иран",
        material: "Шерсть ручного прядения, растительные красители",
        knots: "50–120 узлов/дюйм²",
        description:
          "Смелая геометрия и самая высокая износостойкость из всех. Правильный ответ для прихожей, семейной комнаты и любого места с настоящей проходимостью.",
      },
      {
        id: "shiraz",
        image: "shiraz",
        name: "Шираз",
        origin: "Провинция Фарс, Иран",
        material: "Натуральная шерсть ручной окраски",
        knots: "40–120 узлов/дюйм²",
        description:
          "Кочевая работа, сотканная по памяти. Неровности — не брак, а след руки одной мастерицы, и именно за них эти ковры ценят коллекционеры.",
      },
    ],
  },

  craft: {
    label: "◆ Как ткут",
    titleLine1: "Пять лет работы",
    titleLine2: "в одном ковре.",
    intro:
      "В этом процессе нет ни одного станка-автомата. Ковёр проходит четыре этапа и несколько пар рук, а от первого рисунка до финальной проверки может пройти пять лет.",
    steps: [
      {
        number: "01",
        subtitle: "Рисунок",
        title: "Один узор, нарисованный один раз",
        description:
          "Каждый ковёр начинается с картона, написанного от руки: чертёж в натуральную величину на миллиметровой бумаге, где одна клетка равна одному узлу. Крупный медальонный рисунок художник делает месяцами. Этот картон используют для этого ковра и больше ни для какого.",
      },
      {
        number: "02",
        subtitle: "Материалы",
        title: "Шёлк, шерсть и растения",
        description:
          "Шёлк — от каспийского тутового шелкопряда. Шерсть корк состригают с груди овец высокогорного выпаса, там руно самое мягкое. Цвет — индиго, марена, кожура граната и скорлупа ореха: красители готовят мастера, а не покупают в банке.",
      },
      {
        number: "03",
        subtitle: "Ткачество",
        title: "Узел за узлом, руками",
        description:
          "Ткачи работают плечом к плечу и проговаривают цветовой код вслух, ряд за рядом. Каждый узел завязывают, подрезают и прибивают вручную. В тонком шёлковом ковре три на четыре метра — миллионы узлов и годы работы. Отсюда и правило единственного экземпляра: одни и те же руки не повторяют один и тот же ковёр.",
      },
      {
        number: "04",
        subtitle: "Гарантия",
        title: "Проверка до продажи",
        description:
          "Прежде чем ковёр попадёт в коллекцию, проверяют плотность узла, стойкость красителей, целостность основы, а для антиквариата — возраст. Каждый ковёр уходит с сертификатом происхождения и инструкцией по уходу.",
      },
    ],
  },

  masterworks: {
    label: "◆ Шедевры",
    titleLine1: "Три ковра —",
    titleLine2: "вершина коллекции.",
    intro:
      "Три ковра с самой вершины коллекции, каждый доступен для частного приобретения. Нажмите на ковёр, чтобы прочитать целиком.",
    materialLabel: "Материал",
    availabilityLabel: "Доступность",
    availabilityValue: "Единственный экземпляр · Просмотр в Ташкенте по записи",
    cta: "Записаться на просмотр",
    items: [
      {
        id: "ardabil-revival",
        name: "Возрождение Ардебиля",
        origin: "Кашан, провинция Исфахан",
        year: "Заказан в 2018, завершён в 2023",
        dimensions: "10,5 × 7,2 м",
        material: "Шерсть корк, шёлковая кайма, натуральные красители",
        description:
          "Посвящение Ардебильскому ковру 1539 года — старейшему датированному ковру в мире, сегодня он в Музее Виктории и Альберта. Команда мастеров ткала его пять лет подряд. Центральный медальон повторяет геометрию оригинала, надписи в картушах переписаны с подлинника от руки.",
      },
      {
        id: "silk-garden-paradise",
        name: "Шёлковый райский сад",
        origin: "Кум, Центральный Иран",
        year: "2019–2022",
        dimensions: "4,8 × 3,2 м",
        material: "100% иранский шёлк — ворс, основа и уток",
        description:
          "Садовый ковёр целиком из чистого шёлка. Поле построено по чор-багу, классической персидской схеме четырёх садов, и заполнено растительными мотивами придворного сефевидского рисунка. Технически самая сложная работа дома за последние годы.",
      },
      {
        id: "tabriz-imperial-throne",
        name: "Тебризский имперский трон",
        origin: "Тебриз, Восточный Азербайджан",
        year: "Антиквариат — около 1880-х",
        dimensions: "6,2 × 4,4 м",
        material: "Шерсть корк того времени, оригинальные растительные красители",
        description:
          "Подтверждённый антиквариат позднего каджарского периода, изначально заказанный для европейского собрания. В медальоне — птица Симург над полем угловатых пальметт, а полтора века превратили малиновый фон в бордовый. Передаётся с полным пакетом документов о происхождении.",
      },
    ],
  },

  showroom: {
    label: "◆ Галерея",
    titleLine1: "Единственная галерея",
    titleLine2: "в Средней Азии.",
    intro:
      "У Ghanbarinia больше тридцати галерей по миру. В Средней Азии она одна — в Ташкенте, на втором этаже ТРЦ Tashkent City Mall. Ни одна фотография не передаст, как шёлк перетекает в цвете, когда вы проходите мимо, — ради этого и стоит прийти.",
    addressLabel: "Адрес",
    address: "Ташкент, ТРЦ Tashkent City Mall, 2 этаж",
    directions: "Открыть на карте",
    hoursLabel: "Часы работы",
    hours: "Ежедневно, 10:00 – 00:00",
    phoneLabel: "Телефон",
    contactLabel: "Написать нам",
    note: "Наши консультанты отвечают на русском, узбекском, английском и фарси.",
    services: [
      ["Личный визит", "Любой ковёр развернём и покажем при дневном свете"],
      ["Примерка в интерьере", "Отобранные ковры привезём к вам до того, как вы примете решение"],
      ["Подбор удалённо", "Пришлите замеры комнаты и фотографии — соберём короткий список"],
      ["Дизайнерам и проектам", "Работаем с отелями, офисами и интерьерными студиями"],
    ],
  },

  consultation: {
    label: "◆ Связаться",
    titleLine1: "Готовы помочь",
    titleLine2: "в вашем выборе.",
    intro:
      "Размер, свет, цвета, которые уже есть в интерьере. Мы соберём короткую подборку и придержим эти ковры к вашему визиту.",
    name: "Имя",
    namePlaceholder: "Как к вам обращаться",
    phone: "Телефон или Telegram",
    phonePlaceholder: "+998 90 000 00 00",
    interest: "Интересует",
    interestPlaceholder: "Выберите традицию",
    interestOther: "Пока не определился — подскажите",
    message: "Сообщение",
    messagePlaceholder: "Размер комнаты, желаемые цвета, шёлк или шерсть…",
    submit: "Отправить заявку",
    orWrite: "Или напишите нам напрямую в Telegram:",
    thanksTitle: "Спасибо",
    thanksText:
      "Заявка у нас. Консультант Ghanbarinia свяжется с вами в ближайшее время. Если вопрос срочный — напишите в Telegram.",
  },

  catalogue: {
    metaTitle: "Каталог — Ghanbarinia Uzbekistan",
    metaDescription:
      "Полный каталог Ghanbarinia: персидские ковры ручной работы из Тебриза, Кашана, Исфахана, Кума, Наина, Мешхеда, Хериза и Шираза. Фильтры по городу, материалу, размеру и цвету.",
    back: "Вернуться на сайт",
    label: "◆ Каталог",
    title: "Вся коллекция.",
    intro:
      "Каждый ковёр связан вручную, поэтому каждый существует в единственном экземпляре. Сузьте выбор по городу, материалу, размеру или цвету — любой отмеченный ковёр развернём для вас в ташкентской галерее.",
    filters: "Фильтры",
    hideFilters: "Скрыть фильтры",
    sort: "Сортировка",
    sortNewest: "Сначала новые",
    sortDensity: "Плотность: сначала выше",
    sortAreaDesc: "Размер: сначала большие",
    sortAreaAsc: "Размер: сначала меньшие",
    sortTradition: "Город: А–Я",
    traditionLabel: "Город",
    materialLabel: "Материал",
    sizeLabel: "Размер",
    colourLabel: "Цвет",
    densityLabel: "Плотность",
    reset: "Сбросить всё",
    shown: "Показано {shown} из {total}",
    showMore: "Показать ещё",
    empty: "Под такое сочетание ничего не нашлось.",
    emptyAction: "Сбросить фильтры",
    antique: "Антиквариат",
    priceOnRequest: "Цена по запросу",
    ask: "Спросить про этот ковёр",
    materials: {
      silk: "Чистый шёлк",
      "wool-silk": "Шерсть и шёлк",
      wool: "Шерсть",
    },
    colours: {
      red: "Красный",
      blue: "Синий",
      ivory: "Слоновая кость",
      green: "Зелёный",
      gold: "Золотой",
      multi: "Многоцветный",
    },
    sizes: {
      small: "До 3 м²",
      medium: "3–8 м²",
      large: "8–15 м²",
      palace: "Больше 15 м²",
    },
  },

  footer: {
    about:
      "Ghanbarinia Uzbekistan — персидские ковры ручной работы от дома, основанного в 1841 году. Каждый ковёр — в единственном экземпляре. Единственная галерея в Средней Азии.",
    navTitle: "Разделы",
    contactTitle: "Контакты",
    rights: "Все права защищены.",
    photoNote: "Фотографии иллюстративные, идёт замена на снимки галереи.",
  },
};

export const dictionaries = { en, ru };
export type Language = keyof typeof dictionaries;
export type Copy = Dictionary;
export const languages: Language[] = ["en", "ru"];
