import type { Copy } from "./dictionary";

/**
 * Uzbek, Latin script — the state language of the country the gallery stands
 * in. Worth a native read-through before a campaign runs on it.
 *
 * English is the reference shape: a missing or misspelt key here fails the
 * type check, so the three languages cannot drift apart.
 */
export const uz: Copy = {
  code: "uz",
  label: "O‘zbekcha",

  meta: {
    title: "Ghanbarinia Uzbekistan — Toshkentda qo‘lda to‘qilgan fors gilamlari",
    description:
      "1841 yildan beri kolleksion fors gilamlari. Eron va Yaqin Sharqning eng yaxshi ustaxonalaridan tanlangan qo‘l mehnati gilamlari — har biri yagona nusxada. Markaziy Osiyodagi yagona galereya: Tashkent City Mall, 2-qavat, har kuni 10:00–00:00.",
  },

  nav: {
    heritage: "Uy haqida",
    schools: "Shaharlar",
    collections: "Katalog",
    craft: "Qanday to‘qiladi",
    showroom: "Galereya",
    appointment: "Toshkent · oldindan yozilib",
    cta: "Telegramga yozish",
    openMenu: "Menyuni ochish",
    closeMenu: "Menyuni yopish",
  },

  hero: {
    eyebrow: "Fors gilamlari · Toshkent",
    kicker: "1841 yildan kolleksion gilamlar",
    titleLine1: "Markaziy Osiyodagi",
    titleLine2: "birinchi galereya.",
    lead: "Eron va Yaqin Sharqning eng yaxshi ustaxonalarida donama-dona tanlangan, qo‘lda to‘qilgan fors gilamlari. Ular dastgohda emas, qo‘lda bog‘lanadi — shuning uchun bir xilidan ikkitasi bo‘lmaydi. Biz Toshkentda ochildik, endi bunday gilam uchun Dubayga uchish shart emas.",
    ctaCatalogue: "Kolleksiyalarni ko‘rish",
    ctaContact: "Telegramga yozish",
    sideLabel: "Qo‘lda tanlangan",
    sideText: "Har bir gilam yagona nusxada. Ikkinchisi bo‘lmaydi.",
    scroll: "Pastga",
  },

  marquee: [
    "1841 yilda tashkil etilgan",
    "Bir oilaning besh avlodi",
    "Dunyo bo‘ylab 30 dan ortiq galereya",
    "Flagman — The Dubai Mall’da",
    "Markaziy Osiyodagi yagona galereya",
    "Har bir gilam — qo‘l mehnati",
    "Har biri yagona nusxada",
    "Tashkent City Mall, 2-qavat",
  ],

  heritage: {
    label: "◆ Uy haqida",
    titleLine1: "Besh avlod,",
    titleLine2: "1841 yildan buyon.",
    p1: "Ghanbarinia oilasi 1841 yilda Sherozda gilam savdosini boshlagan va o‘shandan beri to‘xtamagan — besh avlod, bitta kasb. Uy eng avvalo tanlovi bilan tanilgan: xaridorlari ustaxonalarni shaxsan biladi va olganidan ko‘ra ko‘proq narsani rad etadi.",
    p2: "Xalqaro bozorda uy Heritage Carpet by Ghanbarinia nomi bilan ishlaydi: dunyo bo‘ylab o‘ttizdan ortiq galereya, flagman esa The Dubai Mall ichida. Uyning antiqa to‘plami Burj Al Arab va Atlantis The Royal’da namoyish etilgan.",
    p3: "Toshkent — Ghanbarinia’ning Markaziy Osiyodagi yagona galereyasi. U gilamni qanday tanlash kerak bo‘lsa, shunday tanlash uchun bor: yozib qo‘yilgan holda, kunduzgi yorug‘likda, ko‘z o‘ngingizda.",
    link: "Gilam qanday to‘qilishini ko‘rish",
    imageCaption: "Galereya · Heritage Carpet Collection",
    stats: [
      { value: "1841", label: "Uy tashkil etilgan yil" },
      { value: "5", label: "Oila avlodlari" },
      { value: "30+", label: "Dunyo bo‘ylab galereyalar" },
      { value: "1", label: "Markaziy Osiyodagi galereya" },
    ],
  },

  schools: {
    label: "Ular qayerdan keladi",
    cta: "Narxini so‘rash",
    items: [
      {
        id: "tabriz",
        region: "Sharqiy Ozarbayjon, Eron",
        title: "Tabriz",
        description:
          "1501 yildan Safaviylar poytaxti va gilamlari Yevropaga yetib borgan birinchi fors shahri: XIX asrda Hoji Jalili ustaxonalari G‘arbga birinchi partiyalarni jo‘natgan. Tabrizni medalyoni bilan tanishadi — tugunigacha o‘lchangan va doim mutlaqo simmetrik.",
        detail: "Jun va ipak · Qo‘sh arqoq · O‘simlik bo‘yoqlari",
      },
      {
        id: "kashan",
        region: "Isfahon viloyati, Eron",
        title: "Koshon",
        description:
          "Safaviy shohlarining qarorgohi va XVI asrdan ipak to‘qish markazi. Mahalliy jun nozik ish uchun qo‘pol edi, shuning uchun Koshon merinos sotib olgan — avval Manchesterdan, keyin Sabzavordan. Shuning uchun uning gulli maydonlari boshqa hech qayerdagidan zichroq.",
        detail: "Kork juni va ipak · Fors tuguni · Gulli medalyon",
      },
      {
        id: "isfahan",
        region: "Isfahon, Eron",
        title: "Isfahon",
        description:
          "Nisf-e Jahon, ya’ni «dunyoning yarmi» — Shoh Abbos I davrida Isfahonni shunday atashgan. Gilamchilik sulola bilan birga so‘nib, faqat 1920-yillarda qaytgan. Bugungi Isfahon — simmetrik bog‘lar, ov manzaralari va yorug‘likni ushlash uchun kork juni ustidan tortilgan ipak.",
        detail: "Kork juni · Ipak urg‘ular · Assimetrik fors tuguni",
      },
      {
        id: "qom",
        region: "Markaziy Eron",
        title: "Qum",
        description:
          "Buyuk gilam shaharlarining eng yoshi: Qumda faqat 1930-yillarda to‘qishni boshlashgan — va darrov sof ipakdan. Xivi ham, asos ham, arqoq ham ipak, shuning uchun gilam aylanib o‘tganingizda rangini o‘zgartiradi: bitta joy bir tomondan och, boshqasidan to‘q ko‘rinadi.",
        detail: "100% ipak: xivi va asos · Yorug‘likka qarab rang o‘zgaradi",
      },
      {
        id: "nain",
        region: "Isfahon viloyati, Eron",
        title: "Noyin",
        description:
          "Noyin gilam emas, an’anaviy erkaklar yopinchig‘i abo uchun eng nozik jun matoni to‘qigan. 1930-yillarda abo modadan chiqqach, to‘quvchilar mahoratini dastgohga o‘tkazgan. Noyin uslubi shundan: fil suyagi rangidagi fon, indigo medalyon va har bir konturga ipak chegara.",
        detail: "Nozik jun · Ipak kontur · 6La va 9La darajalari",
      },
      {
        id: "mashad",
        region: "Xuroson, Eron",
        title: "Mashhad",
        description:
          "Eronning asosiy ziyorat shahri va Afshoriylar davridan gilamchilik markazi. Mashhad yirik ishlaydi — zallar va uzun mehmonxonalar uchun gilamlar, — bu yerdagi marena qizili esa mamlakatdagi eng chuquri.",
        detail: "Jun xivi · Paxta asos · Yirik o‘lchamlar",
      },
      {
        id: "heriz",
        region: "Sharqiy Ozarbayjon, Eron",
        title: "Heriz",
        description:
          "Shahar emas, Tabrizdan sharqdagi tog‘ qishloqlari. Heriz to‘quvchilari hech qachon qog‘oz chizmadan ishlamagan: naqsh xotirada saqlanadi va o‘shandan chiziladi — shuning uchun medalyon burchakli va tirik chiqadi. Bular eng chidamli fors gilamlari: ular hamon nevaralarga qoldiriladi.",
        detail: "Qo‘lda yigirilgan jun · Geometrik medalyon · O‘simlik bo‘yoqlari",
      },
      {
        id: "shiraz",
        region: "Fors viloyati, Eron",
        title: "Sheroz",
        description:
          "Sheroz deyarli to‘qimaydi — u yig‘adi. Qashqoy va Xamsa ko‘chmanchilari Fors tog‘laridan ko‘chma dastgohlarda, chizmasiz va ikki marta takrorlanmaydigan naqsh bilan qilingan ishni olib tushadi. Ghanbarinia uyi ham 1841 yilda shu yerdan boshlangan.",
        detail: "Tabiiy jun · Qo‘lda bo‘yash · Ko‘chmanchilar to‘quvi",
      },
    ],
  },

  collections: {
    label: "◆ Katalog",
    titleLine1: "Hozir galereyada",
    titleLine2: "turgan gilamlar.",
    intro:
      "Bugun Toshkentdagi galereyada yozib qo‘yilganlarning bir qismi. Har bir gilam — yagona nusxadagi qo‘l mehnati, shuning uchun har birida o‘lchami, materiali va tugun zichligi ko‘rsatilgan.",
    materialLabel: "Material",
    densityLabel: "Zichlik",
    sizeLabel: "O‘lcham",
    ask: "Narxini so‘rash",
    footnote:
      "Galereyada yana {count} ta gilam bor — kichigidan saroy o‘lchamigacha.",
    cta: "To‘liq katalogni ko‘rish",
    trackLabel: "Galereyadagi gilamlar, yon tomonga suriladi",
    items: [
      {
        id: "tabriz",
        image: "tabriz",
        name: "Tabriz",
        origin: "Sharqiy Ozarbayjon, Eron",
        material: "Merinos juni va ipak",
        knots: "150–400 tugun/dyuym²",
        description:
          "Maktablarning eng aniqi. Tabrizni gilam hayratlantirishi emas, tartib berishi kerak bo‘lgan mehmonxonaga oladilar.",
      },
      {
        id: "kashan",
        image: "kashan",
        name: "Koshon",
        origin: "Isfahon viloyati, Eron",
        material: "Kork juni va ipak qistirmalar",
        knots: "100–400 tugun/dyuym²",
        description:
          "Iliq qizil va chuqur ko‘k ohangdagi zich gulli maydonlar. Yog‘och, jez va tosh bilan yaxshi yashaydi hamda to‘yingan interyerni kechiradi.",
      },
      {
        id: "isfahan",
        image: "isfahan",
        name: "Isfahon",
        origin: "Isfahon, Eron",
        material: "Kork juni va ipak urg‘ular",
        knots: "200–600 tugun/dyuym²",
        description:
          "Muvozanatli tanlov: yaqindan tomosha qilish uchun yetarlicha nozik va har kuni birga yashash uchun yetarlicha xotirjam. Ipak urg‘ular kunduzgi yorug‘lik ortidan siljiydi.",
      },
      {
        id: "qom",
        image: "qom",
        name: "Qum",
        origin: "Qum, Markaziy Eron",
        material: "100% Eron ipagi",
        knots: "300–700 tugun/dyuym²",
        description:
          "Butunlay ipak. Dunyoda eng ko‘p yig‘iladigan maktab va ko‘pincha jihoz sifatida emas, meros sifatida sotib olinadigani.",
      },
      {
        id: "nain",
        image: "nain",
        name: "Noyin",
        origin: "Isfahon viloyati, Eron",
        material: "Nozik jun va ipak kontur",
        knots: "200–600 tugun/dyuym²",
        description:
          "Fil suyagi rangidagi fon va indigo medalyonlar. Eng tinch maktab: xonani o‘ziga tortmaydi, yoritadi. Och rangli mebel ostida yaxshi.",
      },
      {
        id: "mashad",
        image: "mashad",
        name: "Mashhad",
        origin: "Xuroson, Eron",
        material: "Nozik jun, ba’zan ipak urg‘ular",
        knots: "120–250 tugun/dyuym²",
        description:
          "Miqyos uchun yaratilgan. Agar xona uzun, shift baland bo‘lsa yoki gilam butun zalni ushlashi kerak bo‘lsa — bu o‘sha.",
      },
      {
        id: "heriz",
        image: "heriz",
        name: "Heriz",
        origin: "Sharqiy Ozarbayjon, Eron",
        material: "Qo‘lda yigirilgan jun, o‘simlik bo‘yoqlari",
        knots: "50–120 tugun/dyuym²",
        description:
          "Dadil geometriya va hammasidan yuqori chidamlilik. Dahliz, oilaviy xona va odam ko‘p yuradigan har qanday joy uchun to‘g‘ri javob.",
      },
      {
        id: "shiraz",
        image: "shiraz",
        name: "Sheroz",
        origin: "Fors viloyati, Eron",
        material: "Qo‘lda bo‘yalgan tabiiy jun",
        knots: "40–120 tugun/dyuym²",
        description:
          "Xotiradan to‘qilgan ko‘chmanchilar ishi. Notekisliklar nuqson emas, bitta ustaning qo‘l izi — kolleksionerlar aynan shuning uchun qadrlaydi.",
      },
    ],
  },

  craft: {
    label: "◆ Qanday to‘qiladi",
    titleLine1: "Bitta gilamda",
    titleLine2: "besh yillik mehnat.",
    intro:
      "Bu jarayonda birorta ham avtomat dastgoh yo‘q. Gilam to‘rt bosqichdan va bir necha juft qo‘ldan o‘tadi, birinchi chizmadan yakuniy tekshiruvgacha esa besh yil o‘tishi mumkin.",
    steps: [
      {
        number: "01",
        subtitle: "Chizma",
        title: "Bir marta chizilgan bitta naqsh",
        description:
          "Har bir gilam qo‘lda chizilgan kartondan boshlanadi: millimetrli qog‘ozda tabiiy o‘lchamdagi chizma, unda bitta katak bitta tugunga teng. Yirik medalyon naqshini rassom oylab chizadi. Bu karton shu gilam uchun ishlatiladi va boshqa hech qaysisi uchun emas.",
      },
      {
        number: "02",
        subtitle: "Materiallar",
        title: "Ipak, jun va o‘simliklar",
        description:
          "Ipak — Kaspiy tut ipak qurtidan. Kork juni baland tog‘ yaylovidagi qo‘ylarning ko‘kragidan qirqiladi, u yerda jun eng yumshoq. Rang — indigo, marena, anor po‘sti va yong‘oq qobig‘i: bo‘yoqlarni ustalar tayyorlaydi, bankada sotib olinmaydi.",
      },
      {
        number: "03",
        subtitle: "To‘quv",
        title: "Tugun ketidan tugun, qo‘lda",
        description:
          "To‘quvchilar yelkama-yelka ishlaydi va qator ketidan qator rang kodini ovoz chiqarib aytadi. Har bir tugun qo‘lda bog‘lanadi, qirqiladi va qoqiladi. Uch metrga to‘rt metrli nozik ipak gilamda millionlab tugun va yillar mehnati bor. Yagona nusxa qoidasi ham shundan: bir xil qo‘llar bir xil gilamni takrorlamaydi.",
      },
      {
        number: "04",
        subtitle: "Kafolat",
        title: "Sotishdan oldin tekshiruv",
        description:
          "Gilam kolleksiyaga tushishidan oldin tugun zichligi, bo‘yoqlar chidamliligi, asos butunligi, antiqa buyumlarda esa yoshi tekshiriladi. Har bir gilam kelib chiqish sertifikati va parvarish yo‘riqnomasi bilan chiqadi.",
      },
    ],
  },

  masterworks: {
    label: "◆ Durdonalar",
    titleLine1: "Uchta gilam —",
    titleLine2: "kolleksiya cho‘qqisi.",
    intro:
      "Kolleksiyaning eng yuqorisidan uchta gilam, har biri shaxsiy xarid uchun ochiq. To‘liq o‘qish uchun gilamni bosing.",
    materialLabel: "Material",
    availabilityLabel: "Mavjudligi",
    availabilityValue: "Yagona nusxa · Toshkentda oldindan yozilib ko‘rish",
    cta: "Ko‘rikka yozilish",
    items: [
      {
        id: "ardabil-revival",
        name: "Ardabil qayta tug‘ilishi",
        origin: "Koshon, Isfahon viloyati",
        year: "2018 yilda buyurtma qilingan, 2023 yilda tugallangan",
        dimensions: "10,5 × 7,2 m",
        material: "Kork juni, ipak hoshiya, tabiiy bo‘yoqlar",
        description:
          "1539 yilgi Ardabil gilamiga bag‘ishlov — u dunyodagi eng qadimgi sanasi ko‘rsatilgan gilam bo‘lib, bugun Viktoriya va Albert muzeyida saqlanadi. Ustalar guruhi uni besh yil ketma-ket to‘qigan. Markaziy medalyon asl nusxa geometriyasini takrorlaydi, kartushlardagi yozuvlar esa asl nusxadan qo‘lda ko‘chirilgan.",
      },
      {
        id: "silk-garden-paradise",
        name: "Ipak jannat bog‘i",
        origin: "Qum, Markaziy Eron",
        year: "2019–2022",
        dimensions: "4,8 × 3,2 m",
        material: "100% Eron ipagi — xivi, asos va arqoq",
        description:
          "Butunlay sof ipakdan qilingan bog‘ gilami. Maydon klassik fors chor-bog‘ sxemasi — to‘rt bog‘ bo‘yicha qurilgan va Safaviylar saroy naqshining o‘simlik motivlari bilan to‘ldirilgan. Uyning so‘nggi yillardagi texnik jihatdan eng murakkab ishi.",
      },
      {
        id: "tabriz-imperial-throne",
        name: "Tabriz imperator taxti",
        origin: "Tabriz, Sharqiy Ozarbayjon",
        year: "Antiqa — taxminan 1880-yillar",
        dimensions: "6,2 × 4,4 m",
        material: "O‘sha davr kork juni, asl o‘simlik bo‘yoqlari",
        description:
          "Kech Qojarlar davriga oid tasdiqlangan antiqa buyum, dastlab yevropalik to‘plam uchun buyurtma qilingan. Medalyonda burchakli palmetta maydoni uzra afsonaviy Simurg‘ tasvirlangan, bir yarim asr esa qip-qizil fonni bordo rangga aylantirgan. To‘liq kelib chiqish hujjatlari bilan topshiriladi.",
      },
    ],
  },

  trust: {
    label: "◆ Hujjatlashtirilgan",
    titleLine1: "Bu da’vo emas.",
    titleLine2: "Bu yozma tarix.",
    intro:
      "Uy haqidagi hamma narsani mustaqil nashrlar tekshirgan. Quyidagi har bir bandda manbaga havola bor.",
    source: "Manba",
    items: [
      {
        title: "Burj Al Arab",
        meta: "Dubay",
        text: "Uyning antiqa gilamlari faqat taklifnoma bo‘yicha uch kunlik ko‘rgazmada namoyish etilgan, ular orasida 10 million dirhamga baholangan buyum ham bor.",
      },
      {
        title: "Atlantis The Royal",
        meta: "Dubay",
        text: "200 ming dollardan 7 million dollargacha bo‘lgan antiqa gilamlar, ular orasida Nosiruddin Shoh Qojar buyrug‘i bilan to‘qilgani ham bor.",
      },
      {
        title: "The Dubai Mall",
        meta: "Flagman",
        text: "Uyning flagman galereyasi — BAAdagi o‘n sakkiztadan biri.",
      },
      {
        title: "The National",
        meta: "2022",
        text: "«Aytadigan besh avlod fors tarixi bor sehrli gilamlar» — Ghanbarinia oilasi haqidagi maqola.",
      },
    ],
    reviewsTitle: "Xaridorlar fikri",
  },

  showroom: {
    label: "◆ Galereya",
    titleLine1: "Markaziy Osiyodagi",
    titleLine2: "yagona galereya.",
    intro:
      "Ghanbarinia’da dunyo bo‘ylab o‘ttizdan ortiq galereya bor. Markaziy Osiyoda esa bitta — u Toshkentda, Tashkent City Mall’ning ikkinchi qavatida. Hech bir fotosurat yoningizdan o‘tayotganda ipak rangini qanday oqizishini ko‘rsatib berolmaydi, kelishga arziydigan sabab ham shu.",
    addressLabel: "Manzil",
    address: "Toshkent, Tashkent City Mall savdo markazi, 2-qavat",
    directions: "Xaritada ochish",
    hoursLabel: "Ish vaqti",
    hours: "Har kuni, 10:00 – 00:00",
    phoneLabel: "Telefon",
    contactLabel: "Bizga yozing",
    note: "Maslahatchilarimiz o‘zbek, rus, ingliz va fors tillarida javob beradi.",
    services: [
      ["Shaxsiy tashrif", "Istalgan gilamni yozib, kunduzgi yorug‘likda ko‘rsatamiz"],
      ["Interyerda sinab ko‘rish", "Tanlangan gilamlarni qaror qabul qilishingizdan oldin olib boramiz"],
      ["Masofadan tanlash", "Xona o‘lchamlari va suratlarini yuboring — qisqa ro‘yxat tayyorlaymiz"],
      ["Dizaynerlar va loyihalar", "Mehmonxonalar, ofislar va interyer studiyalari bilan ishlaymiz"],
    ],
  },

  consultation: {
    label: "◆ Bog‘lanish",
    titleLine1: "Tanlovingizda",
    titleLine2: "yordam beramiz.",
    intro:
      "Xonaning o‘lchami, yorug‘ligi va allaqachon mavjud ranglari. Biz qisqa tanlov tayyorlaymiz va o‘sha gilamlarni tashrifingizgacha saqlab turamiz.",
    name: "Ism",
    namePlaceholder: "Sizga qanday murojaat qilaylik",
    phone: "Telefon yoki Telegram",
    phonePlaceholder: "+998 90 000 00 00",
    interest: "Qiziqtirgani",
    interestPlaceholder: "An’anani tanlang",
    interestOther: "Hali aniq emas — maslahat bering",
    message: "Xabar",
    messagePlaceholder: "Xona o‘lchami, kerakli ranglar, ipak yoki jun…",
    submit: "Arizani yuborish",
    orWrite: "Yoki bizga to‘g‘ridan-to‘g‘ri Telegramga yozing:",
    thanksTitle: "Rahmat",
    thanksText:
      "Arizangiz bizda. Ghanbarinia maslahatchisi tez orada bog‘lanadi. Shoshilinch bo‘lsa — Telegramga yozing.",
  },

  catalogue: {
    metaTitle: "Katalog — Ghanbarinia Uzbekistan",
    metaDescription:
      "Ghanbarinia to‘liq katalogi: Tabriz, Koshon, Isfahon, Qum, Noyin, Mashhad, Heriz va Sherozdan qo‘lda to‘qilgan fors gilamlari. Shahar, material, o‘lcham va rang bo‘yicha filtrlar.",
    back: "Saytga qaytish",
    label: "◆ Katalog",
    title: "Butun kolleksiya.",
    intro:
      "Har bir gilam qo‘lda to‘qilgan, shuning uchun har biri yagona nusxada. Tanlovni shahar, material, o‘lcham yoki rang bo‘yicha toraytiring — belgilangan istalgan gilamni Toshkent galereyasida yozib ko‘rsatamiz.",
    filters: "Filtrlar",
    hideFilters: "Filtrlarni yashirish",
    sort: "Saralash",
    sortNewest: "Avval yangilari",
    sortDensity: "Zichlik: avval yuqorisi",
    sortAreaDesc: "O‘lcham: avval kattasi",
    sortAreaAsc: "O‘lcham: avval kichigi",
    sortTradition: "Shahar: A–Z",
    traditionLabel: "Shahar",
    materialLabel: "Material",
    sizeLabel: "O‘lcham",
    colourLabel: "Rang",
    densityLabel: "Zichlik",
    knotUnit: "tugun/dyuym²",
    reset: "Hammasini tozalash",
    shown: "{total} tadan {shown} tasi ko‘rsatildi",
    showMore: "Yana ko‘rsatish",
    empty: "Bunday tanlovga hech nima topilmadi.",
    emptyAction: "Filtrlarni tozalash",
    antique: "Antiqa",
    priceOnRequest: "Narxi so‘rov bo‘yicha",
    ask: "Shu gilam haqida so‘rash",
    materials: {
      silk: "Sof ipak",
      "wool-silk": "Jun va ipak",
      wool: "Jun",
    },
    colours: {
      red: "Qizil",
      blue: "Ko‘k",
      ivory: "Fil suyagi",
      green: "Yashil",
      gold: "Oltin",
      multi: "Ko‘p rangli",
    },
    sizes: {
      small: "3 m² gacha",
      medium: "3–8 m²",
      large: "8–15 m²",
      palace: "15 m² dan ortiq",
    },
  },

  footer: {
    about:
      "Ghanbarinia Uzbekistan — 1841 yilda tashkil etilgan uydan qo‘lda to‘qilgan fors gilamlari. Har bir gilam yagona nusxada. Markaziy Osiyodagi yagona galereya.",
    navTitle: "Bo‘limlar",
    contactTitle: "Kontaktlar",
    rights: "Barcha huquqlar himoyalangan.",
    photoNote: "Suratlar namunaviy, galereya suratlariga almashtirilmoqda.",
  },
};
