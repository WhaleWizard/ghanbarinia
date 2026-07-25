/**
 * Every visible string on the site lives here, in English and Russian.
 * Components never hard-code copy — that is what made the old text
 * contradict itself (a marquee saying "Est. 1965" next to a heading
 * saying 1841).
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
    title: "Ghanbarinia Uzbekistan — Handmade Persian Carpets in Tashkent",
    description:
      "A Persian carpet house since 1841. The only showroom in Central Asia — Tashkent City Mall, 2nd floor, daily 10:00–00:00. Hand-knotted silk and wool carpets from Tabriz, Kashan, Isfahan, Qom and Nain.",
  },

  nav: {
    schools: "Schools",
    collections: "Catalogue",
    heritage: "Heritage",
    craft: "Craft",
    showroom: "Showroom",
    appointment: "Tashkent · By appointment",
    cta: "Write on Telegram",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },

  hero: {
    /* Kept short on purpose — the longer wording wrapped onto two lines on a
       390px screen. */
    eyebrow: "Persian carpets · Tashkent",
    kicker: "Persian carpet house since 1841",
    titleLine1: "Qom silk,",
    titleLine2: "without excess.",
    lead: "A private selection of handmade Iranian carpets — luminous silk from Qom, precise medallions and atelier-level finishing. The only Ghanbarinia showroom in Central Asia.",
    ctaCatalogue: "View the catalogue",
    ctaContact: "Write on Telegram",
    sideLabel: "Private selection",
    sideText: "Iranian masterworks for quiet, collectible interiors.",
    scroll: "Scroll",
  },

  marquee: [
    "Established 1841",
    "Five generations of one family",
    "29 countries",
    "Flagship at The Dubai Mall",
    "The only showroom in Central Asia",
    "Hand-knotted, every piece",
    "Tabriz · Kashan · Isfahan · Qom",
    "Tashkent City Mall, 2nd floor",
  ],

  heritage: {
    label: "◆ Our heritage",
    title: "One family, five generations, since 1841",
    p1: "The Ghanbarinia family began trading carpets in Shiraz in 1841 and has done so ever since — five generations without a break. The house holds one of the largest collections of fine handmade Persian carpets anywhere: natural fibres only, pure silk and wool, natural dyes.",
    p2: "Trading internationally as Heritage Carpet by Ghanbarinia, the house today has showrooms and affiliated boutiques in 29 countries, eighteen of them in the UAE, with the flagship inside The Dubai Mall. Its antique collection has been exhibited at the Burj Al Arab and Atlantis The Royal.",
    p3: "Tashkent is the only Ghanbarinia showroom in Central Asia. It exists so that a carpet can be chosen the way it should be — unrolled, in daylight, in person.",
    link: "See how a carpet is made",
    imageCaption: "Gallery · Heritage Carpet Collection",
    stats: [
      { value: "1841", label: "Year the house was founded" },
      { value: "5", label: "Generations of the family" },
      { value: "29", label: "Countries with a showroom" },
      { value: "1", label: "Showroom in Central Asia" },
    ],
  },

  schools: {
    label: "Weaving schools",
    priceOnRequest: "Price on request",
    items: [
      {
        id: "tabriz",
        region: "North-West Iran",
        title: "Tabriz",
        description:
          "Tabriz has been a centre of Persian carpet weaving for more than 500 years, and the workshops there set the standard for medallion design. The finest Tabriz pieces reach several hundred knots to the square inch — precision you can read with your fingertips.",
        detail: "Double-wefted · Merino wool pile · Vegetable dyes",
      },
      {
        id: "kashan",
        region: "Isfahan Province",
        title: "Kashan",
        description:
          "Kashan has woven carpets of unrivalled floral intricacy since the Safavid era. The Ardabil Carpet — the oldest dated carpet in the world, now in the Victoria & Albert Museum — was signed in 1539 by Maqsud Kashani; scholars still argue whether it left a Kashan or a Tabriz loom.",
        detail: "Silk inlay · Kork wool · Persian knot",
      },
      {
        id: "qom",
        region: "Central Iran",
        title: "Qom Silk",
        description:
          "The youngest of the great schools — Qom has only woven since the 1930s — and the one that went furthest. Pile, warp and weft are all pure silk, and the finest pieces carry several hundred knots to the square inch. The surface changes colour as you walk around it.",
        detail: "100% silk pile & foundation · Museum grade",
      },
      {
        id: "nain",
        region: "Isfahan Province",
        title: "Nain",
        description:
          "Nain is prized for disciplined ivory fields, deep indigo medallions and exceptionally fine wool with silk outlining — architectural calm for formal interiors.",
        detail: "Fine wool · Silk outlines · 6La and 9La grades",
      },
      {
        id: "mashad",
        region: "Khorasan, Iran",
        title: "Mashad",
        description:
          "Grand scale, saturated madder-red grounds and commanding central medallions. Their formal strength suits large salons, reception halls and collector rooms.",
        detail: "Wool pile · Cotton foundation · Grand medallions",
      },
      {
        id: "heriz",
        region: "East Azerbaijan, Iran",
        title: "Heriz",
        description:
          "The bolder geometric school of Persian weaving: angular medallions, powerful outlines and remarkable durability. Character for a room that needs strength rather than delicacy.",
        detail: "Hand-spun wool · Geometric medallion · Vegetable dyes",
      },
      {
        id: "isfahan",
        region: "Historic Isfahan",
        title: "Isfahan",
        description:
          "Isfahan — Nesf-e Jahan, 'Half the World' — has produced carpets of transcendent beauty since Shah Abbas I. Arabesques, palmettes and garden compositions at their most refined.",
        detail: "Kork wool · Silk highlights · Persian asymmetric knot",
      },
    ],
  },

  collections: {
    label: "◆ The catalogue",
    titleLine1: "Eight weaving schools.",
    titleLine2: "One standard of excellence.",
    intro:
      "Every school has its own character, material and knot density. Each piece is hand-knotted and comes with the Ghanbarinia certificate of provenance.",
    materialLabel: "Material",
    densityLabel: "Density",
    footnote:
      "Silk, wool-silk and oversized salon pieces are available to view in Tashkent.",
    cta: "Request the catalogue",
    items: [
      {
        id: "tabriz",
        image: "tabriz",
        name: "Tabriz",
        origin: "East Azerbaijan, Iran",
        material: "Merino wool & silk",
        knots: "150–400 KPSI",
        description:
          "Medallion compositions of imperial precision. The densest weave the house offers, and the school most often chosen for a formal living room.",
      },
      {
        id: "kashan",
        image: "kashan",
        name: "Kashan",
        origin: "Isfahan Province, Iran",
        material: "Kork wool & silk inlay",
        knots: "100–400 KPSI",
        description:
          "Floral arabesque of rare intricacy, unchanged in spirit since the Safavid era. Warm palettes that sit comfortably with wood and stone.",
      },
      {
        id: "isfahan",
        image: "isfahan",
        name: "Isfahan",
        origin: "Isfahan, Iran",
        material: "Kork wool & silk highlights",
        knots: "200–600 KPSI",
        description:
          "Garden motifs and spiritual arabesques from the golden age of Shah Abbas I. The most balanced of the classical schools.",
      },
      {
        id: "qom",
        image: "qom",
        name: "Qom Silk",
        origin: "Qom, Central Iran",
        material: "100% pure Iranian silk",
        knots: "300–700 KPSI",
        description:
          "Pure silk, pile and foundation alike. The surface changes colour as you walk around it — the reason Qom is the most collected school of all.",
      },
      {
        id: "nain",
        image: "nain",
        name: "Nain",
        origin: "Isfahan Province, Iran",
        material: "Fine wool & silk highlights",
        knots: "200–600 KPSI",
        description:
          "Ivory grounds with deep indigo medallions and silk outlining. The quietest school — it lightens a room instead of dominating it.",
      },
      {
        id: "mashad",
        image: "mashad",
        name: "Mashad",
        origin: "Khorasan, Iran",
        material: "Fine wool, silk accents",
        knots: "120–250 KPSI",
        description:
          "Grand medallions on saturated madder-red fields. Made for scale: reception halls, large salons and long corridors.",
      },
      {
        id: "heriz",
        image: "heriz",
        name: "Heriz",
        origin: "East Azerbaijan, Iran",
        material: "Hand-spun wool, vegetable dyes",
        knots: "50–120 KPSI",
        description:
          "Bold angular geometry and exceptional durability. The school to choose for a hallway, a family room or anywhere with real traffic.",
      },
      {
        id: "shiraz",
        image: "shiraz",
        name: "Shiraz",
        origin: "Fars Province, Iran",
        material: "Natural wool, hand-dyed palette",
        knots: "40–120 KPSI",
        description:
          "Expressive tribal geometry woven by nomadic weavers. No two are alike, and the irregularity is the point.",
      },
    ],
  },

  craft: {
    label: "◆ The art of making",
    titleLine1: "From the designer's pen",
    titleLine2: "to your floor.",
    intro:
      "A museum-quality Persian carpet is one of the most demanding crafts there is. From first drawing to final check, the process can span five years.",
    steps: [
      {
        number: "01",
        subtitle: "The vision",
        title: "Design",
        description:
          "Every carpet begins as a hand-painted cartoon — a full-scale drawing on graph paper where each square is one knot. A large medallion design takes a master designer months to complete.",
      },
      {
        number: "02",
        subtitle: "The foundation",
        title: "Materials",
        description:
          "Silk thread comes from Caspian mulberry silkworms; kork wool is taken from the chest of sheep grazed at altitude. Natural dyes — indigo, madder, pomegranate, walnut — are prepared by specialist dyers.",
      },
      {
        number: "03",
        subtitle: "The creation",
        title: "Weaving",
        description:
          "A team of master weavers works in concert, reciting the colour code row by row. Each knot is tied, cut and tamped by hand. A silk carpet of three by four metres can take years to finish.",
      },
      {
        number: "04",
        subtitle: "The guarantee",
        title: "Authentication",
        description:
          "Knot count, dye stability, foundation integrity and age are all verified before a piece enters the collection. Each carpet is issued a certificate of provenance and a care guide.",
      },
    ],
  },

  masterworks: {
    label: "◆ Masterworks",
    titleLine1: "Signature pieces",
    titleLine2: "of rare distinction.",
    intro:
      "A selection of exceptional pieces available for private acquisition. Tap a piece to read its full description.",
    materialLabel: "Material",
    availabilityLabel: "Availability",
    availabilityValue: "Available for private viewing in Tashkent",
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
          "A monumental homage to the 1539 Ardabil Carpet, woven by a team of master weavers over five consecutive years. The central medallion recreates the original's geometry, and each cartouche inscription is transcribed by hand from the original held by the Victoria & Albert Museum.",
      },
      {
        id: "silk-garden-paradise",
        name: "Silk Garden of Paradise",
        origin: "Qom, Central Iran",
        year: "2019–2022",
        dimensions: "4.8 × 3.2 m",
        material: "100% Iranian silk — pile, warp and weft",
        description:
          "A garden carpet rendered entirely in pure silk. The field follows the classical Persian char bagh, the four-garden composition, populated with botanical motifs drawn from Safavid court design. One of the most technically demanding pieces the house has produced.",
      },
      {
        id: "tabriz-imperial-throne",
        name: "Tabriz Imperial Throne",
        origin: "Tabriz, East Azerbaijan",
        year: "Antique — circa 1880s",
        dimensions: "6.2 × 4.4 m",
        material: "Period kork wool, original vegetable dyes",
        description:
          "An authenticated antique Tabriz carpet of the late Qajar period, originally commissioned for a European collection. The central medallion depicts the legendary Simurgh over a field of angular palmettes; age has deepened the crimson field to burgundy. Supplied with full provenance documentation.",
      },
    ],
  },

  showroom: {
    label: "◆ The showroom",
    titleLine1: "One showroom,",
    titleLine2: "in Tashkent.",
    intro:
      "Ghanbarinia has more than thirty galleries around the world. In Central Asia there is one, and it is here. Everything in it can be seen, unrolled and compared in person.",
    addressLabel: "Address",
    address: "Tashkent City Mall, 2nd floor, Tashkent",
    directions: "Open in Maps",
    hoursLabel: "Opening hours",
    hours: "Daily, 10:00 – 00:00",
    phoneLabel: "Phone",
    contactLabel: "Message us",
    note: "Our advisors answer in Russian, Uzbek, English and Persian.",
    services: [
      ["Come and see", "Any carpet can be unrolled and viewed in daylight"],
      ["Try it at home", "Selected pieces can be brought to your home before you decide"],
      ["Remote selection", "Send your room size and photos — we prepare a shortlist"],
      ["Designers and projects", "Hotels, offices and interior studios welcome"],
    ],
  },

  consultation: {
    label: "◆ Get in touch",
    titleLine1: "Choose your",
    titleLine2: "carpet with us.",
    intro:
      "Tell us the room, the size and the colours you have in mind. We will prepare a short selection and hold the pieces for your visit.",
    name: "Name",
    namePlaceholder: "Your name",
    phone: "Phone or Telegram",
    phonePlaceholder: "+998 90 000 00 00",
    interest: "Interested in",
    interestPlaceholder: "Choose a school",
    interestOther: "Not sure yet",
    message: "Message",
    messagePlaceholder: "Room size, preferred colours, silk or wool…",
    submit: "Send the request",
    orWrite: "Or write to us directly on Telegram:",
    thanksTitle: "Thank you",
    thanksText:
      "We have your request. A Ghanbarinia advisor will be in touch shortly. If it is urgent, message us on Telegram.",
  },

  footer: {
    about:
      "Ghanbarinia Uzbekistan — handmade Persian carpets, a Persian carpet house since 1841. The only showroom in Central Asia.",
    navTitle: "Sections",
    contactTitle: "Contacts",
    rights: "All rights reserved.",
    photoNote: "Photographs are illustrative and are being replaced with showroom images.",
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
      "Ковровый дом с 1841 года. Единственный шоурум в Средней Азии — ТРЦ Tashkent City Mall, 2 этаж, ежедневно 10:00–00:00. Ковры ручной работы из шёлка и шерсти: Тебриз, Кашан, Исфахан, Кум, Наин.",
  },

  nav: {
    schools: "Школы",
    collections: "Каталог",
    heritage: "История",
    craft: "Производство",
    showroom: "Шоурум",
    appointment: "Ташкент · по записи",
    cta: "Написать в Telegram",
    openMenu: "Открыть меню",
    closeMenu: "Закрыть меню",
  },

  hero: {
    eyebrow: "Персидские ковры · Ташкент",
    kicker: "Ковровый дом с 1841 года",
    titleLine1: "Кумский шёлк,",
    titleLine2: "без излишеств.",
    lead: "Частная подборка иранских ковров ручной работы — светящийся шёлк из Кума, выверенные медальоны и отделка уровня ателье. Единственный шоурум Ghanbarinia в Средней Азии.",
    ctaCatalogue: "Смотреть каталог",
    ctaContact: "Написать в Telegram",
    sideLabel: "Частная подборка",
    sideText: "Иранские шедевры для спокойных, коллекционных интерьеров.",
    scroll: "Листайте",
  },

  marquee: [
    "Основан в 1841 году",
    "Пять поколений одной семьи",
    "29 стран",
    "Флагман в The Dubai Mall",
    "Единственный шоурум в Средней Азии",
    "Каждый ковёр связан вручную",
    "Тебриз · Кашан · Исфахан · Кум",
    "Tashkent City Mall, 2 этаж",
  ],

  heritage: {
    label: "◆ Наша история",
    title: "Одна семья, пять поколений, с 1841 года",
    p1: "Семья Ганбариния начала торговать коврами в Ширазе в 1841 году и не прерывалась с тех пор — пять поколений подряд. У дома одно из крупнейших в мире собраний персидских ковров ручной работы: только натуральные волокна, чистый шёлк и шерсть, природные красители.",
    p2: "На международном рынке дом работает под именем Heritage Carpet by Ghanbarinia: шоурумы и партнёрские бутики в 29 странах, восемнадцать из них в ОАЭ, флагман — в The Dubai Mall. Антикварное собрание дома выставлялось в Burj Al Arab и Atlantis The Royal.",
    p3: "Ташкент — единственный шоурум Ghanbarinia в Средней Азии. Он существует, чтобы ковёр можно было выбрать так, как и следует: развёрнутым, при дневном свете, своими глазами.",
    link: "Как создаётся ковёр",
    imageCaption: "Галерея · Heritage Carpet Collection",
    stats: [
      { value: "1841", label: "Год основания дома" },
      { value: "5", label: "Поколений семьи" },
      { value: "29", label: "Стран с шоурумами" },
      { value: "1", label: "Шоурум в Средней Азии" },
    ],
  },

  schools: {
    label: "Ковровые школы",
    priceOnRequest: "Цена по запросу",
    items: [
      {
        id: "tabriz",
        region: "Северо-запад Ирана",
        title: "Тебриз",
        description:
          "Тебриз — центр персидского ковроткачества уже больше 500 лет, и именно тамошние мастерские задали стандарт медальонного рисунка. У лучших тебризских ковров несколько сотен узлов на квадратный дюйм — точность, которую чувствуешь пальцами.",
        detail: "Двойной уток · Ворс из мериносовой шерсти · Растительные красители",
      },
      {
        id: "kashan",
        region: "Провинция Исфахан",
        title: "Кашан",
        description:
          "В Кашане ткут ковры с непревзойдённым цветочным узором со времён Сефевидов. Ардебильский ковёр — старейший датированный ковёр в мире, сегодня он в Музее Виктории и Альберта — подписан в 1539 году мастером Максудом Кашани; учёные до сих пор спорят, кашанский это станок или тебризский.",
        detail: "Шёлковые вставки · Шерсть корк · Персидский узел",
      },
      {
        id: "qom",
        region: "Центральный Иран",
        title: "Кумский шёлк",
        description:
          "Самая молодая из великих школ — в Куме ткут только с 1930-х — и зашедшая дальше всех. Ворс, основа и уток целиком из шёлка, у лучших ковров несколько сотен узлов на квадратный дюйм. Поверхность меняет цвет, когда обходишь ковёр вокруг.",
        detail: "100% шёлк: ворс и основа · Музейный уровень",
      },
      {
        id: "nain",
        region: "Провинция Исфахан",
        title: "Наин",
        description:
          "Наин ценят за сдержанные фоны цвета слоновой кости, глубокие индиговые медальоны и очень тонкую шерсть с шёлковой обводкой — архитектурное спокойствие для строгих интерьеров.",
        detail: "Тонкая шерсть · Шёлковая обводка · Классы 6La и 9La",
      },
      {
        id: "mashad",
        region: "Хорасан, Иран",
        title: "Мешхед",
        description:
          "Крупный масштаб, насыщенный мареновый красный фон и властные центральные медальоны. Такая парадность уместна в больших гостиных, холлах и коллекционных залах.",
        detail: "Шерстяной ворс · Хлопковая основа · Крупные медальоны",
      },
      {
        id: "heriz",
        region: "Восточный Азербайджан, Иран",
        title: "Хериз",
        description:
          "Смелая геометрическая школа персидского ткачества: угловатые медальоны, мощный контур и выдающаяся износостойкость. Характер для комнаты, которой нужна сила, а не изящество.",
        detail: "Шерсть ручного прядения · Геометрический медальон · Растительные красители",
      },
      {
        id: "isfahan",
        region: "Исторический Исфахан",
        title: "Исфахан",
        description:
          "Исфахан — Несф-е Джахан, «Половина мира» — со времён шаха Аббаса I создаёт ковры исключительной красоты. Арабески, пальметты и садовые композиции в самой утончённой форме.",
        detail: "Шерсть корк · Шёлковые акценты · Персидский асимметричный узел",
      },
    ],
  },

  collections: {
    label: "◆ Каталог",
    titleLine1: "Восемь ковровых школ.",
    titleLine2: "Один стандарт качества.",
    intro:
      "У каждой школы свой характер, материал и плотность узла. Каждый ковёр связан вручную и передаётся с сертификатом происхождения Ghanbarinia.",
    materialLabel: "Материал",
    densityLabel: "Плотность",
    footnote:
      "Шёлк, шёлк с шерстью и ковры больших залов можно посмотреть в Ташкенте.",
    cta: "Запросить каталог",
    items: [
      {
        id: "tabriz",
        image: "tabriz",
        name: "Тебриз",
        origin: "Восточный Азербайджан, Иран",
        material: "Мериносовая шерсть и шёлк",
        knots: "150–400 узлов/дюйм²",
        description:
          "Медальонные композиции имперской точности. Самое плотное плетение в коллекции и школа, которую чаще всего выбирают в парадную гостиную.",
      },
      {
        id: "kashan",
        image: "kashan",
        name: "Кашан",
        origin: "Провинция Исфахан, Иран",
        material: "Шерсть корк и шёлковые вставки",
        knots: "100–400 узлов/дюйм²",
        description:
          "Цветочные арабески редкой тонкости, по духу не изменившиеся со времён Сефевидов. Тёплая палитра, которая хорошо живёт рядом с деревом и камнем.",
      },
      {
        id: "isfahan",
        image: "isfahan",
        name: "Исфахан",
        origin: "Исфахан, Иран",
        material: "Шерсть корк и шёлковые акценты",
        knots: "200–600 узлов/дюйм²",
        description:
          "Садовые мотивы и духовные арабески золотого века шаха Аббаса I. Самая уравновешенная из классических школ.",
      },
      {
        id: "qom",
        image: "qom",
        name: "Кумский шёлк",
        origin: "Кум, Центральный Иран",
        material: "100% иранский шёлк",
        knots: "300–700 узлов/дюйм²",
        description:
          "Чистый шёлк и в ворсе, и в основе. Поверхность меняет цвет, когда вы обходите ковёр, — поэтому Кум собирают чаще всех остальных школ.",
      },
      {
        id: "nain",
        image: "nain",
        name: "Наин",
        origin: "Провинция Исфахан, Иран",
        material: "Тонкая шерсть и шёлк",
        knots: "200–600 узлов/дюйм²",
        description:
          "Фон цвета слоновой кости, глубокие индиговые медальоны и шёлковая обводка. Самая тихая школа: осветляет комнату, а не подавляет её.",
      },
      {
        id: "mashad",
        image: "mashad",
        name: "Мешхед",
        origin: "Хорасан, Иран",
        material: "Тонкая шерсть, шёлковые акценты",
        knots: "120–250 узлов/дюйм²",
        description:
          "Крупные медальоны на насыщенном мареновом фоне. Сделано под масштаб: холлы, большие гостиные и длинные коридоры.",
      },
      {
        id: "heriz",
        image: "heriz",
        name: "Хериз",
        origin: "Восточный Азербайджан, Иран",
        material: "Шерсть ручного прядения",
        knots: "50–120 узлов/дюйм²",
        description:
          "Смелая угловатая геометрия и выдающаяся износостойкость. Школа для прихожей, семейной комнаты и любого места с реальной проходимостью.",
      },
      {
        id: "shiraz",
        image: "shiraz",
        name: "Шираз",
        origin: "Провинция Фарс, Иран",
        material: "Натуральная шерсть ручной окраски",
        knots: "40–120 узлов/дюйм²",
        description:
          "Выразительная племенная геометрия кочевых мастериц. Двух одинаковых не бывает, и эта неровность — главное в них.",
      },
    ],
  },

  craft: {
    label: "◆ Искусство создания",
    titleLine1: "От эскиза художника",
    titleLine2: "до вашего пола.",
    intro:
      "Ковёр музейного уровня — одно из самых требовательных ремёсел. От первого рисунка до финальной проверки может пройти пять лет.",
    steps: [
      {
        number: "01",
        subtitle: "Замысел",
        title: "Эскиз",
        description:
          "Каждый ковёр начинается с рисунка от руки — чертежа в натуральную величину на миллиметровой бумаге, где каждая клетка равна одному узлу. Крупный медальонный рисунок художник делает месяцами.",
      },
      {
        number: "02",
        subtitle: "Основа",
        title: "Материалы",
        description:
          "Шёлковая нить — от каспийского тутового шелкопряда, шерсть корк состригают с груди овец высокогорного выпаса. Натуральные красители — индиго, марена, гранат, орех — готовят отдельные мастера-красильщики.",
      },
      {
        number: "03",
        subtitle: "Создание",
        title: "Ткачество",
        description:
          "Мастера работают вместе, ряд за рядом проговаривая цветовой код вслух. Каждый узел завязывают, подрезают и уплотняют вручную. Шёлковый ковёр три на четыре метра ткут годами.",
      },
      {
        number: "04",
        subtitle: "Гарантия",
        title: "Проверка",
        description:
          "Прежде чем ковёр попадёт в коллекцию, проверяют плотность узла, стойкость красителей, целостность основы и возраст. На каждый ковёр выдают сертификат происхождения и инструкцию по уходу.",
      },
    ],
  },

  masterworks: {
    label: "◆ Шедевры",
    titleLine1: "Штучные ковры",
    titleLine2: "особой редкости.",
    intro:
      "Подборка исключительных ковров для частного приобретения. Нажмите на ковёр, чтобы прочитать описание целиком.",
    materialLabel: "Материал",
    availabilityLabel: "Доступность",
    availabilityValue: "Можно посмотреть в Ташкенте по записи",
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
          "Монументальное посвящение Ардебильскому ковру 1539 года: команда мастеров ткала его пять лет подряд. Центральный медальон воспроизводит геометрию оригинала, а надписи в картушах переписаны от руки с подлинника, который хранится в Музее Виктории и Альберта.",
      },
      {
        id: "silk-garden-paradise",
        name: "Шёлковый райский сад",
        origin: "Кум, Центральный Иран",
        year: "2019–2022",
        dimensions: "4,8 × 3,2 м",
        material: "100% иранский шёлк — ворс, основа и уток",
        description:
          "Садовый ковёр целиком из чистого шёлка. Поле построено по классической персидской схеме чор-баг — четыре сада, — и заполнено растительными мотивами придворного сефевидского рисунка. Один из самых сложных по технике ковров дома.",
      },
      {
        id: "tabriz-imperial-throne",
        name: "Тебризский имперский трон",
        origin: "Тебриз, Восточный Азербайджан",
        year: "Антиквариат — около 1880-х",
        dimensions: "6,2 × 4,4 м",
        material: "Шерсть корк того времени, оригинальные растительные красители",
        description:
          "Подтверждённый антикварный тебризский ковёр позднего каджарского периода, изначально заказанный для европейского собрания. В центральном медальоне — легендарная птица Симург над полем угловатых пальметт; со временем малиновый фон стал бордовым. Передаётся с полным пакетом документов о происхождении.",
      },
    ],
  },

  showroom: {
    label: "◆ Шоурум",
    titleLine1: "Один шоурум —",
    titleLine2: "в Ташкенте.",
    intro:
      "У Ghanbarinia больше тридцати галерей по миру. В Средней Азии — одна, и она здесь. Всё, что в ней есть, можно увидеть, развернуть и сравнить вживую.",
    addressLabel: "Адрес",
    address: "Ташкент, ТРЦ Tashkent City Mall, 2 этаж",
    directions: "Открыть на карте",
    hoursLabel: "Часы работы",
    hours: "Ежедневно, 10:00 – 00:00",
    phoneLabel: "Телефон",
    contactLabel: "Написать нам",
    note: "Наши консультанты отвечают на русском, узбекском, английском и фарси.",
    services: [
      ["Приходите смотреть", "Любой ковёр развернём и покажем при дневном свете"],
      ["Примерка дома", "Отобранные ковры привезём к вам до принятия решения"],
      ["Подбор удалённо", "Пришлите размеры комнаты и фото — соберём короткий список"],
      ["Дизайнерам и проектам", "Работаем с отелями, офисами и интерьерными студиями"],
    ],
  },

  consultation: {
    label: "◆ Связаться",
    titleLine1: "Подберём ковёр",
    titleLine2: "вместе с вами.",
    intro:
      "Расскажите про комнату, размер и цвета, которые нравятся. Мы соберём короткую подборку и придержим ковры к вашему визиту.",
    name: "Имя",
    namePlaceholder: "Как к вам обращаться",
    phone: "Телефон или Telegram",
    phonePlaceholder: "+998 90 000 00 00",
    interest: "Интересует",
    interestPlaceholder: "Выберите школу",
    interestOther: "Пока не определился",
    message: "Сообщение",
    messagePlaceholder: "Размер комнаты, желаемые цвета, шёлк или шерсть…",
    submit: "Отправить заявку",
    orWrite: "Или напишите нам напрямую в Telegram:",
    thanksTitle: "Спасибо",
    thanksText:
      "Заявка у нас. Консультант Ghanbarinia свяжется с вами в ближайшее время. Если вопрос срочный — напишите в Telegram.",
  },

  footer: {
    about:
      "Ghanbarinia Uzbekistan — персидские ковры ручной работы, ковровый дом с 1841 года. Единственный шоурум в Средней Азии.",
    navTitle: "Разделы",
    contactTitle: "Контакты",
    rights: "Все права защищены.",
    photoNote: "Фотографии иллюстративные, идёт замена на снимки шоурума.",
  },
};

export const dictionaries = { en, ru };
export type Language = keyof typeof dictionaries;
export type Copy = Dictionary;
export const languages: Language[] = ["en", "ru"];
