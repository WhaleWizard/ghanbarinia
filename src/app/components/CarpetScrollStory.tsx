import { motion } from "motion/react";
import { CarpetImage } from "./CarpetImage";
import { useCopy } from "../../i18n/LanguageProvider";

/** Visual settings per school. The wording lives in the dictionary. */
const VISUALS: Record<string, { image: string; accent: string }> = {
  tabriz: { image: "tabriz", accent: "#8B3A3A" },
  kashan: { image: "kashan", accent: "#3A5A8B" },
  qom: { image: "qom", accent: "#5A3A8B" },
  nain: { image: "nain", accent: "#8A7A55" },
  mashad: { image: "mashad", accent: "#7B1F24" },
  heriz: { image: "heriz", accent: "#8A4A24" },
  isfahan: { image: "isfahan", accent: "#3A7A5A" },
};

interface FrameProps {
  index: number;
  total: number;
  region: string;
  title: string;
  description: string;
  detail: string;
  image: string;
  accent: string;
  cta: string;
}

/**
 * A frame-by-frame sequence built entirely on `position: sticky`.
 *
 * Every scene pins to the top of the screen and the next one slides over it
 * like a film cut. The browser's compositor does all of it — there is no
 * scroll listener, no per-frame JavaScript and no 3D transform, which is what
 * used to make this section stutter on phones.
 */
function Frame({
  index,
  total,
  region,
  title,
  description,
  detail,
  image,
  accent,
  cta,
}: FrameProps) {
  return (
    <article
      className="sticky top-0 h-[100svh] overflow-hidden bg-[#120D07]"
      style={{ zIndex: index + 1 }}
    >
      <div className="absolute inset-0">
        <CarpetImage
          name={image}
          alt={`${title} — Persian carpet`}
          className="h-full w-full object-cover"
          sizes="100vw"
        />
      </div>

      {/* Legibility layers: a wash in the scene's own colour, then a dark
          gradient under the text.
          Plain alpha, not mix-blend-multiply. Eight full-screen blend layers
          sat in this sticky stack, and every scroll frame made the browser
          read back the pixels underneath and re-blend all of them — which is
          what made touch scrolling stutter. */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{ backgroundColor: accent }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(8,6,4,0.74)_0%,rgba(8,6,4,0.22)_30%,rgba(8,6,4,0.6)_66%,rgba(8,6,4,0.95)_100%)] lg:bg-[linear-gradient(90deg,rgba(8,6,4,0.95)_0%,rgba(8,6,4,0.72)_44%,rgba(8,6,4,0.14)_100%)]" />
      <div className="pointer-events-none absolute inset-x-5 inset-y-20 border border-[#E7D4A7]/12 lg:inset-x-16 lg:inset-y-24" />

      <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-end px-6 pb-14 pt-24 lg:justify-center lg:px-16 lg:pb-0">
        <motion.div
          className="max-w-[560px]"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-5 flex items-center gap-3 lg:gap-4">
            {/* shrink-0 + nowrap: a long region name was squeezing the counter
                until "01 / 08" broke across two lines. */}
            <span className="shrink-0 whitespace-nowrap font-['Jost'] text-[10px] tracking-[0.3em] text-[#D9B46A]">
              {String(index + 1).padStart(2, "0")}
              <span className="text-[#FAF8F3]/35"> / {String(total).padStart(2, "0")}</span>
            </span>
            <span className="h-px w-6 shrink-0 bg-[#D9B46A]/60 lg:w-10" />
            <span className="font-['Jost'] text-[10px] uppercase leading-relaxed tracking-[0.2em] text-[#FAF8F3]/60 lg:tracking-[0.28em]">
              {region}
            </span>
          </div>

          <h3 className="mb-5 font-['Playfair_Display'] text-[clamp(42px,8vw,96px)] leading-[0.95] tracking-[-0.03em] text-[#FAF8F3]">
            {title}
          </h3>

          <p className="mb-5 font-['Jost'] text-[14px] leading-[1.8] text-[#FAF8F3]/78 lg:text-[15px] lg:leading-[1.85]">
            {description}
          </p>

          <p className="mb-7 font-['Jost'] text-[10px] uppercase tracking-[0.24em] text-[#FAF8F3]/45">
            {detail}
          </p>

          {/* Reads as a button, not as a caption: solid fill, arrow, and a
              label that names an action rather than a state. */}
          <a
            href="#consultation"
            className="group inline-flex items-center gap-3 bg-[#FAF8F3] px-7 py-3.5 font-['Jost'] text-[10px] uppercase tracking-[0.2em] text-[#100B06] transition-colors duration-300 hover:bg-[#E0BC75] motion-reduce:transition-none"
          >
            {cta}
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </motion.div>
      </div>
    </article>
  );
}

export function CarpetScrollStory() {
  const t = useCopy();
  const items = t.schools.items;

  return (
    <section id="schools" className="relative bg-[#120D07]">
      <div className="pointer-events-none absolute left-6 top-24 z-[99] lg:left-16">
        <p className="font-['Jost'] text-[10px] uppercase tracking-[0.4em] text-[#FAF8F3]/35">
          {t.schools.label}
        </p>
      </div>

      {items.map((scene, i) => {
        const visual = VISUALS[scene.id] ?? { image: "tabriz", accent: "#8B3A3A" };
        return (
          <Frame
            key={scene.id}
            index={i}
            total={items.length}
            region={scene.region}
            title={scene.title}
            description={scene.description}
            detail={scene.detail}
            image={visual.image}
            accent={visual.accent}
            cta={t.schools.cta}
          />
        );
      })}
    </section>
  );
}
