import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CarpetImage } from "./CarpetImage";
import { useCopy } from "../../i18n/LanguageProvider";

const PIECE_IMAGES: Record<string, string> = {
  "ardabil-revival": "master-ardabil",
  "silk-garden-paradise": "master-silk-garden",
  "tabriz-imperial-throne": "master-tabriz-antique",
};

interface RowProps {
  index: number;
  image: string;
  name: string;
  origin: string;
  year: string;
  dimensions: string;
  material: string;
  description: string;
  materialLabel: string;
  availabilityLabel: string;
  availabilityValue: string;
  cta: string;
}

function PieceRow(p: RowProps) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: p.index * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <button
        type="button"
        className="group flex w-full items-start gap-4 py-6 text-left transition-colors duration-300 hover:bg-[#F3EDE2]/60 lg:gap-8 lg:py-8"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <div
          className="w-16 flex-shrink-0 overflow-hidden lg:w-20"
          style={{ aspectRatio: "3/4" }}
        >
          <CarpetImage
            name={p.image}
            alt={p.name}
            className="h-full w-full object-cover"
            sizes="80px"
          />
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="mb-2 font-['Playfair_Display'] text-[clamp(20px,2.2vw,32px)] leading-tight text-[#1A1108] transition-colors duration-300 group-hover:text-[#B8935A]">
            {p.name}
          </h3>
          <p className="font-['Jost'] text-[11px] uppercase tracking-[0.16em] text-[#7A6E5F]">
            {p.origin}
          </p>
          <p className="font-['Jost'] text-[11px] uppercase tracking-[0.16em] text-[#7A6E5F]">
            {p.dimensions}
          </p>
          <p className="mt-1 font-['Jost'] text-[12px] text-[#7A6E5F]/80">{p.year}</p>
        </div>

        <motion.span
          className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center border border-[rgba(26,17,8,0.15)]"
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <line x1="6" y1="0" x2="6" y2="12" stroke="#1A1108" strokeWidth="1" />
            <line x1="0" y1="6" x2="12" y2="6" stroke="#1A1108" strokeWidth="1" />
          </svg>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Previously indented by 5rem + 3rem even on phones, which left
                the text squeezed into a narrow column. */}
            <div className="pb-10 lg:pl-28 lg:pr-16">
              <p className="mb-6 max-w-3xl font-['Jost'] text-[14px] leading-[1.85] text-[#7A6E5F]">
                {p.description}
              </p>
              <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:max-w-2xl">
                {[
                  [p.materialLabel, p.material],
                  [p.availabilityLabel, p.availabilityValue],
                ].map(([label, value]) => (
                  <div key={label} className="border-t border-[rgba(26,17,8,0.08)] pt-3">
                    <p className="mb-1 font-['Jost'] text-[10px] uppercase tracking-[0.26em] text-[#7A6E5F]">
                      {label}
                    </p>
                    <p className="font-['Jost'] text-[12px] text-[#1A1108]">{value}</p>
                  </div>
                ))}
              </div>
              <a
                href="#consultation"
                className="inline-block bg-[#1A1108] px-8 py-4 font-['Jost'] text-[11px] uppercase tracking-[0.22em] text-[#FAF8F3] transition-colors duration-300 hover:bg-[#B8935A]"
              >
                {p.cta}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function Masterworks() {
  const t = useCopy();

  return (
    <section className="bg-[#FAF8F3] py-20 lg:py-40">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
        <div className="mb-12 lg:mb-20">
          <motion.p
            className="mb-5 font-['Jost'] text-[10px] uppercase tracking-[0.4em] text-[#B8935A]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {t.masterworks.label}
          </motion.p>
          <motion.div
            className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.9 }}
          >
            <h2 className="font-['Playfair_Display'] text-[clamp(32px,4vw,64px)] leading-[1.1] text-[#1A1108]">
              {t.masterworks.titleLine1}
              <br />
              <span className="italic text-[#B8935A]">{t.masterworks.titleLine2}</span>
            </h2>
            <p className="max-w-xs font-['Jost'] text-[13px] leading-relaxed text-[#7A6E5F]">
              {t.masterworks.intro}
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col divide-y divide-[rgba(26,17,8,0.08)]">
          {t.masterworks.items.map((piece, i) => (
            <PieceRow
              key={piece.id}
              index={i}
              image={PIECE_IMAGES[piece.id] ?? "master-ardabil"}
              name={piece.name}
              origin={piece.origin}
              year={piece.year}
              dimensions={piece.dimensions}
              material={piece.material}
              description={piece.description}
              materialLabel={t.masterworks.materialLabel}
              availabilityLabel={t.masterworks.availabilityLabel}
              availabilityValue={t.masterworks.availabilityValue}
              cta={t.masterworks.cta}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
