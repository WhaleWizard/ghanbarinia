/**
 * The carpet inventory.
 *
 * REPLACING THIS WITH REAL STOCK
 * ------------------------------
 * Everything below `DEMO_STOCK` is generated placeholder data so the
 * catalogue page can be built and tested at full scale (~250 pieces). To put
 * the real inventory in, delete `generateDemoStock()` and export a plain
 * array of `Carpet` objects instead — nothing else in the app needs to
 * change. One object per carpet:
 *
 *   { id: "GHN-0001", tradition: "tabriz", image: "tabriz",
 *     widthCm: 300, lengthCm: 400, material: "wool-silk",
 *     colour: "red", knots: 320, antique: false }
 *
 * `image` is a file name in public/img/carpets/ without the size suffix,
 * so "tabriz" resolves to tabriz-480.webp and tabriz-960.webp.
 */

export type TraditionId =
  | "tabriz"
  | "kashan"
  | "isfahan"
  | "qom"
  | "nain"
  | "mashad"
  | "heriz"
  | "shiraz";

export type MaterialId = "silk" | "wool" | "wool-silk";

export type ColourId = "red" | "blue" | "ivory" | "green" | "gold" | "multi";

export type SizeId = "small" | "medium" | "large" | "palace";

export interface Carpet {
  id: string;
  tradition: TraditionId;
  /** File name in public/img/carpets/ without the -480/-960 suffix. */
  image: string;
  widthCm: number;
  lengthCm: number;
  material: MaterialId;
  colour: ColourId;
  /** Knots per square inch. */
  knots: number;
  antique: boolean;
}

export const TRADITION_IDS: TraditionId[] = [
  "tabriz",
  "kashan",
  "isfahan",
  "qom",
  "nain",
  "mashad",
  "heriz",
  "shiraz",
];

export const MATERIAL_IDS: MaterialId[] = ["silk", "wool-silk", "wool"];
export const COLOUR_IDS: ColourId[] = ["red", "blue", "ivory", "green", "gold", "multi"];
export const SIZE_IDS: SizeId[] = ["small", "medium", "large", "palace"];

/** Square metres, used for the size filter and the size sort. */
export function areaM2(carpet: Carpet) {
  return (carpet.widthCm * carpet.lengthCm) / 10_000;
}

export function sizeOf(carpet: Carpet): SizeId {
  const area = areaM2(carpet);
  if (area < 3) return "small";
  if (area < 8) return "medium";
  if (area < 15) return "large";
  return "palace";
}

export function formatSize(carpet: Carpet) {
  const m = (cm: number) => (cm / 100).toFixed(2).replace(/\.?0+$/, "").replace(".", ",");
  return `${m(carpet.widthCm)} × ${m(carpet.lengthCm)} м`;
}

/* ------------------------------------------------------------------ */
/* Placeholder inventory — replace with the real stock                  */
/* ------------------------------------------------------------------ */

/** What each weaving city plausibly produces, so the demo set is not absurd. */
const PROFILES: Record<
  TraditionId,
  { materials: MaterialId[]; colours: ColourId[]; knots: [number, number] }
> = {
  tabriz: { materials: ["wool-silk", "wool"], colours: ["red", "blue", "ivory"], knots: [150, 400] },
  kashan: { materials: ["wool-silk", "wool"], colours: ["red", "blue", "multi"], knots: [100, 400] },
  isfahan: { materials: ["wool-silk", "silk"], colours: ["ivory", "blue", "gold"], knots: [200, 600] },
  qom: { materials: ["silk"], colours: ["ivory", "gold", "blue", "green"], knots: [300, 700] },
  nain: { materials: ["wool-silk"], colours: ["ivory", "blue"], knots: [200, 600] },
  mashad: { materials: ["wool", "wool-silk"], colours: ["red", "multi"], knots: [120, 250] },
  heriz: { materials: ["wool"], colours: ["red", "gold", "multi"], knots: [50, 120] },
  shiraz: { materials: ["wool"], colours: ["red", "multi", "blue"], knots: [40, 120] },
};

/**
 * The photographs the catalogue draws on. The first eight are the signature
 * shots for each city, so the carousel on the front page keeps them; the rest
 * are the wider pool that stops the same picture appearing over and over.
 *
 * Assignment is `index % POOL.length`, which spreads them perfectly evenly —
 * the first thirty-two pieces all carry a different photograph, so the opening
 * page of the catalogue has no repeats at all.
 */
const PHOTO_POOL: string[] = [
  "tabriz",
  "kashan",
  "isfahan",
  "qom",
  "nain",
  "mashad",
  "heriz",
  "shiraz",
  ...Array.from({ length: 24 }, (_, i) => `rug-${String(i + 1).padStart(2, "0")}`),
];

const SIZES: Array<[number, number]> = [
  [80, 120],
  [120, 180],
  [150, 200],
  [170, 240],
  [200, 300],
  [250, 350],
  [300, 400],
  [350, 500],
  [400, 600],
  [450, 700],
];

/** Deterministic pseudo-random, so the demo set is identical on every build. */
function seeded(seed: number) {
  let value = seed;
  return () => {
    value = (value * 1103515245 + 12345) % 2147483648;
    return value / 2147483648;
  };
}

function generateDemoStock(count: number): Carpet[] {
  const random = seeded(20260725);
  const stock: Carpet[] = [];

  for (let i = 0; i < count; i += 1) {
    const tradition = TRADITION_IDS[i % TRADITION_IDS.length];
    const profile = PROFILES[tradition];
    const pick = <T,>(list: readonly T[]) => list[Math.floor(random() * list.length)];
    const [width, length] = pick(SIZES);
    const [minKnots, maxKnots] = profile.knots;

    stock.push({
      id: `GHN-${String(i + 1).padStart(4, "0")}`,
      tradition,
      image: PHOTO_POOL[i % PHOTO_POOL.length],
      widthCm: width,
      lengthCm: length,
      material: pick(profile.materials),
      colour: pick(profile.colours),
      knots: Math.round(minKnots + random() * (maxKnots - minKnots)),
      antique: random() < 0.12,
    });
  }

  return stock;
}

export const CARPETS: Carpet[] = generateDemoStock(248);

/** The eight pieces shown in the carousel on the front page — one per city. */
export const FEATURED: Carpet[] = TRADITION_IDS.map(
  (tradition) => CARPETS.find((carpet) => carpet.tradition === tradition)!
);
