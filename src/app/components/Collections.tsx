import { motion } from "motion/react";
import { CarpetImage } from "./CarpetImage";
import { useCopy } from "../../i18n/LanguageProvider";

interface CardProps {
  image: string;
  name: string;
  origin: string;
  description: string;
  material: string;
  knots: string;
  materialLabel: string;
  densityLabel: string;
}

function CollectionCard(item: CardProps) {
  return (
    <motion.article
      className="group"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative mb-5 overflow-hidden" style={{ aspectRatio: "3/4" }}>
        <CarpetImage
          name={item.image}
          alt={`${item.name} — Persian carpet`}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 767px) 92vw, (max-width: 1023px) 46vw, 30vw"
        />
        <div className="pointer-events-none absolute right-4 top-4 h-6 w-6 border-r border-t border-[#B8935A]/60" />
        <div className="pointer-events-none absolute bottom-4 left-4 h-6 w-6 border-b border-l border-[#B8935A]/60" />
      </div>

      <h3 className="mb-1 font-['Playfair_Display'] text-[24px] text-[#1A1108] transition-colors duration-300 group-hover:text-[#B8935A]">
        {item.name}
      </h3>
      <p className="mb-3 font-['Jost'] text-[11px] uppercase tracking-[0.2em] text-[#7A6E5F]">
        {item.origin}
      </p>
      <p className="mb-5 font-['Jost'] text-[14px] leading-[1.75] text-[#7A6E5F]">
        {item.description}
      </p>

      {/* Specs used to appear only on mouse hover, which meant phone visitors
          never saw them. They are part of the card now. */}
      <dl className="grid grid-cols-2 gap-x-4 gap-y-2 border-t border-[rgba(26,17,8,0.1)] pt-4">
        <div>
          <dt className="font-['Jost'] text-[9px] uppercase tracking-[0.25em] text-[#7A6E5F]/70">
            {item.materialLabel}
          </dt>
          <dd className="font-['Jost'] text-[12px] text-[#1A1108]">{item.material}</dd>
        </div>
        <div>
          <dt className="font-['Jost'] text-[9px] uppercase tracking-[0.25em] text-[#7A6E5F]/70">
            {item.densityLabel}
          </dt>
          <dd className="font-['Jost'] text-[12px] text-[#1A1108]">{item.knots}</dd>
        </div>
      </dl>
    </motion.article>
  );
}

export function Collections() {
  const t = useCopy();

  return (
    <section id="collections" className="bg-[#FAF8F3] py-20 lg:py-40">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
        <div className="mb-14 flex flex-col justify-between gap-8 lg:mb-20 lg:flex-row lg:items-end">
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

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {t.collections.items.map((item) => (
            <CollectionCard
              key={item.id}
              image={item.image}
              name={item.name}
              origin={item.origin}
              description={item.description}
              material={item.material}
              knots={item.knots}
              materialLabel={t.collections.materialLabel}
              densityLabel={t.collections.densityLabel}
            />
          ))}
        </div>

        <motion.div
          className="mt-16 text-center lg:mt-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-6 font-['Jost'] text-[13px] text-[#7A6E5F]">
            {t.collections.footnote}
          </p>
          <a
            href="#consultation"
            className="premium-button inline-block border border-[#1A1108] px-10 py-4 font-['Jost'] text-[11px] uppercase tracking-[0.22em] text-[#1A1108] transition-all duration-500 hover:bg-[#1A1108] hover:text-[#FAF8F3]"
          >
            {t.collections.cta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
