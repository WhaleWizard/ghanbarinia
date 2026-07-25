/**
 * Turns the original photographs in `images-source/` into the web-sized WebP
 * files the site actually loads.
 *
 * Drop a photo into images-source/carpets/tabriz.jpg and run `npm run images`:
 * it produces public/img/carpets/tabriz-480.webp and tabriz-960.webp. The
 * components pick the right one per screen, so no code changes are needed.
 *
 *   images-source/carpets/<name>.jpg  ->  public/img/carpets/<name>-480.webp
 *                                         public/img/carpets/<name>-960.webp
 *   images-source/hero/<name>.jpg     ->  public/img/hero/<name>-860.webp
 *                                         public/img/hero/<name>-1800.webp
 */
import { mkdir, readdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");

const GROUPS = [
  {
    from: "images-source/carpets",
    to: "public/img/carpets",
    // Card and full-screen use; 480 covers phones, 960 covers retina desktop.
    widths: [480, 960],
    quality: 70,
  },
  {
    from: "images-source/hero",
    to: "public/img/hero",
    // The hero is the first thing painted, so it is compressed hardest. It
    // also sits under a heavy dark scrim, which hides the artefacts. A
    // sub-pixel blur is invisible under that scrim but roughly halves the
    // file size on a texture this noisy. Baking the darkening in rather than
    // layering it in CSS guarantees the headline always has contrast, and a
    // darker image compresses better too.
    //
    // Two crops rather than two sizes: a phone gets a tall frame, a desktop
    // gets a wide one, so neither wastes pixels off-screen.
    variants: [
      // "south": the richest part of this photograph — the cream and gold
      // carpet — sits low in the frame, and on a phone the bottom half is
      // covered by the scrim, so the crop is pulled downwards to bring it up
      // into the visible area.
      { suffix: "mobile", width: 760, height: 1280, position: "south" },
      { suffix: "desktop", width: 1600, height: 900, position: "attention" },
    ],
    quality: 52,
    blur: 0.5,
    brightness: 0.74,
  },
];

const KB = (bytes) => `${Math.round(bytes / 1024)} KB`;

async function exists(p) {
  try {
    await stat(p);
    return true;
  } catch {
    return false;
  }
}

let totalBefore = 0;
let totalAfter = 0;

for (const group of GROUPS) {
  const fromDir = path.join(ROOT, group.from);
  const toDir = path.join(ROOT, group.to);

  if (!(await exists(fromDir))) {
    console.log(`skip ${group.from} — folder not found`);
    continue;
  }

  await mkdir(toDir, { recursive: true });
  const files = (await readdir(fromDir)).filter((f) => /\.(jpe?g|png|webp)$/i.test(f));

  for (const file of files) {
    const name = path.parse(file).name;
    const source = path.join(fromDir, file);
    totalBefore += (await stat(source)).size;

    const variants =
      group.variants ?? group.widths.map((width) => ({ suffix: String(width), width }));

    for (const variant of variants) {
      const target = path.join(toDir, `${name}-${variant.suffix}.webp`);
      let pipeline = sharp(source)
        .rotate()
        .resize({
          width: variant.width,
          height: variant.height,
          fit: variant.height ? "cover" : "inside",
          // Which part of the photo survives the crop.
          position:
            variant.position === "attention"
              ? sharp.strategy.attention
              : variant.position,
          withoutEnlargement: true,
        });
      if (group.blur) pipeline = pipeline.blur(group.blur);
      if (group.brightness) pipeline = pipeline.modulate({ brightness: group.brightness });

      const info = await pipeline.webp({ quality: group.quality, effort: 6 }).toFile(target);

      totalAfter += info.size;
      console.log(`${group.to}/${name}-${variant.suffix}.webp  ${KB(info.size)}`);
    }
  }
}

console.log(
  `\noriginals ${KB(totalBefore)} -> generated ${KB(totalAfter)} across all sizes`
);
