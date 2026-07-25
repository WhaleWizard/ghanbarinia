import { useRef } from "react";
import { motion } from "motion/react";
import { CarpetImage } from "./CarpetImage";
import { useCopy } from "../../i18n/LanguageProvider";
import { useAutoAdvance } from "../hooks/useAutoAdvance";
import { usePrefersReducedMotion } from "../hooks/useMediaQuery";
import { CONTACTS } from "../../i18n/dictionary";
import { CARPETS, FEATURED, formatSize, type Carpet } from "../../data/catalogue";

const CATALOGUE_URL = `${import.meta.env.BASE_URL}catalog.html`;
const REMAINING = CARPETS.length - FEATURED.length;

/**
 * A carpet on offer, not a description of a weaving school. The card carries
 * what someone actually needs in order to ask about a piece: what it is, how
 * big, what it is made of, how finely knotted, and its reference number.
 */
function CarpetCard({ carpet, priority }: { carpet: Carpet; priority: boolean }) {
  const t = useCopy();
  const school = t.collections.items.find((item) => item.id === carpet.tradition);
  const name = school?.name ?? carpet.tradition;

  return (
    /* Width, snapping and centring all come from .carpet-track in theme.css. */
    <article className="group">
      <div className="relative mb-5 overflow-hidden" style={{ aspectRatio: "3/4" }}>
        <CarpetImage
          name={carpet.image}
          alt={`${name} — ${formatSize(carpet)}`}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 1023px) 86vw, 400px"
          priority={priority}
        />
        {carpet.antique && (
          <span className="absolute left-0 top-5 bg-[#1A1108] px-3 py-1.5 font-['Jost'] text-[9px] uppercase tracking-[0.24em] text-[#E0BC75]">
            {t.catalogue.antique}
          </span>
        )}
        <div className="pointer-events-none absolute right-4 top-4 h-6 w-6 border-r border-t border-[#B8935A]/60" />
        <div className="pointer-events-none absolute bottom-4 left-4 h-6 w-6 border-b border-l border-[#B8935A]/60" />
      </div>

      <div className="mb-1 flex items-baseline justify-between gap-3">
        <h3 className="font-['Playfair_Display'] text-[24px] leading-tight text-[#1A1108] transition-colors duration-300 group-hover:text-[#B8935A]">
          {name}
        </h3>
        <span className="flex-shrink-0 font-['Jost'] text-[10px] uppercase tracking-[0.18em] text-[#7A6E5F]/70">
          {carpet.id}
        </span>
      </div>

      <p className="mb-4 font-['Jost'] text-[14px] text-[#7A6E5F]">
        {school?.origin ?? ""}
      </p>

      <dl className="grid grid-cols-2 gap-x-4 gap-y-3 border-t border-[rgba(26,17,8,0.1)] pt-4">
        <div>
          <dt className="font-['Jost'] text-[9px] uppercase tracking-[0.25em] text-[#7A6E5F]/70">
            {t.collections.sizeLabel}
          </dt>
          <dd className="font-['Jost'] text-[13px] text-[#1A1108]">{formatSize(carpet)}</dd>
        </div>
        <div>
          <dt className="font-['Jost'] text-[9px] uppercase tracking-[0.25em] text-[#7A6E5F]/70">
            {t.collections.densityLabel}
          </dt>
          <dd className="font-['Jost'] text-[13px] text-[#1A1108]">
            {carpet.knots} {t.catalogue.knotUnit}
          </dd>
        </div>
        <div className="col-span-2">
          <dt className="font-['Jost'] text-[9px] uppercase tracking-[0.25em] text-[#7A6E5F]/70">
            {t.collections.materialLabel}
          </dt>
          <dd className="font-['Jost'] text-[13px] text-[#1A1108]">
            {t.catalogue.materials[carpet.material]}
          </dd>
        </div>
      </dl>

      <a
        href={`${CONTACTS.telegramHref}?text=${encodeURIComponent(`${t.collections.ask}: ${carpet.id}`)}`}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-flex w-full items-center justify-center gap-2 border border-[rgba(26,17,8,0.2)] py-3.5 font-['Jost'] text-[10px] uppercase tracking-[0.2em] text-[#1A1108] transition-colors duration-300 hover:border-[#1A1108] hover:bg-[#1A1108] hover:text-[#FAF8F3]"
      >
        {t.collections.ask}
      </a>
    </article>
  );
}

export function Collections() {
  const t = useCopy();
  const trackRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useAutoAdvance(trackRef, { interval: 3000, enabled: !reducedMotion });

  // Rendered twice so the loop can wrap at the halfway point without a seam.
  const loop = [...FEATURED, ...FEATURED];

  return (
    <section id="collections" className="overflow-hidden bg-[#FAF8F3] py-20 lg:py-40">
      <div className="mx-auto mb-12 max-w-[1440px] px-6 lg:mb-16 lg:px-16">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <motion.p
              className="mb-5 font-['Jost'] text-[10px] uppercase tracking-[0.4em] text-[#B8935A]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {t.collections.label}
            </motion.p>
            <motion.h2
              className="font-['Playfair_Display'] text-[clamp(32px,4vw,64px)] leading-[1.1] text-[#1A1108]"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.9 }}
            >
              {t.collections.titleLine1}
              <br />
              <span className="italic text-[#B8935A]">{t.collections.titleLine2}</span>
            </motion.h2>
          </div>

          <motion.p
            className="max-w-sm font-['Jost'] text-[14px] leading-[1.8] text-[#7A6E5F]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {t.collections.intro}
          </motion.p>
        </div>
      </div>

      <div
        ref={trackRef}
        className="carpet-track no-scrollbar pb-2"
        role="region"
        aria-label={t.collections.trackLabel}
        tabIndex={0}
      >
        {loop.map((carpet, i) => (
          <CarpetCard key={`${carpet.id}-${i}`} carpet={carpet} priority={i < 3} />
        ))}
      </div>

      <div className="mx-auto mt-14 max-w-[1440px] px-6 text-center lg:mt-20 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-6 font-['Jost'] text-[13px] text-[#7A6E5F]">
            {t.collections.footnote.replace("{count}", String(REMAINING))}
          </p>
          <a
            href={CATALOGUE_URL}
            className="premium-button group inline-flex items-center gap-3 border border-[#1A1108] px-10 py-4 font-['Jost'] text-[11px] uppercase tracking-[0.22em] text-[#1A1108] transition-all duration-500 hover:bg-[#1A1108] hover:text-[#FAF8F3]"
          >
            {t.collections.cta}
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
