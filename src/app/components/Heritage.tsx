import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { CarpetImage } from "./CarpetImage";
import { useCopy } from "../../i18n/LanguageProvider";

function AnimatedStat({
  value,
  label,
  delay,
}: {
  value: string;
  label: string;
  delay: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className="border-t border-[rgba(26,17,8,0.12)] pt-5"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mb-2 font-['Playfair_Display'] text-[clamp(32px,4vw,56px)] leading-none text-[#1A1108]">
        {value}
      </div>
      <div className="font-['Jost'] text-[11px] uppercase tracking-[0.2em] text-[#7A6E5F]">
        {label}
      </div>
    </motion.div>
  );
}

export function Heritage() {
  const t = useCopy();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="heritage" className="bg-[#FAF8F3] py-20 lg:py-40">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
        <motion.p
          className="mb-10 font-['Jost'] text-[10px] uppercase tracking-[0.4em] text-[#B8935A] lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t.heritage.label}
        </motion.p>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-32">
          <div ref={ref}>
            <motion.h2
              className="mb-8 font-['Playfair_Display'] text-[clamp(32px,4vw,60px)] leading-[1.1] text-[#1A1108] lg:mb-10"
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              {t.heritage.titleLine1}
              <br />
              <span className="italic text-[#B8935A]">{t.heritage.titleLine2}</span>
            </motion.h2>

            <motion.p
              className="mb-6 font-['Jost'] text-[15px] leading-[1.9] text-[#7A6E5F]"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.12, duration: 0.9 }}
            >
              {t.heritage.p1}
            </motion.p>

            <motion.p
              className="mb-6 font-['Jost'] text-[15px] leading-[1.9] text-[#7A6E5F]"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.9 }}
            >
              {t.heritage.p2}
            </motion.p>

            <motion.p
              className="mb-10 border-l-2 border-[#B8935A] pl-5 font-['Jost'] text-[15px] leading-[1.9] text-[#1A1108] lg:mb-12"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.28, duration: 0.9 }}
            >
              {t.heritage.p3}
            </motion.p>

            {/* Was a bare line of small caps with a rule after it, which read
                as a caption rather than something you could click. */}
            <motion.a
              href="#craftsmanship"
              className="group inline-flex items-center gap-3 border border-[#1A1108] px-7 py-4 font-['Jost'] text-[11px] uppercase tracking-[0.2em] text-[#1A1108] transition-colors duration-300 hover:bg-[#1A1108] hover:text-[#FAF8F3]"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.35, duration: 0.8 }}
            >
              {t.heritage.link}
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </motion.a>
          </div>

          <div className="flex flex-col gap-10 lg:gap-12">
            <motion.div
              className="relative overflow-hidden"
              style={{ aspectRatio: "4/3" }}
              /* Sliding in from the side pushed the page 16px wider than the
                 screen on mobile. Vertical entrances cannot do that. */
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <CarpetImage
                name="showroom"
                alt={t.heritage.imageCaption}
                className="h-full w-full object-cover"
                sizes="(max-width: 1023px) 92vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1108]/20 to-transparent" />
              <div className="absolute bottom-5 left-5">
                <span className="bg-[#1A1108]/50 px-3 py-1.5 font-['Jost'] text-[10px] uppercase tracking-[0.25em] text-[#FAF8F3]/80 backdrop-blur-sm">
                  {t.heritage.imageCaption}
                </span>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-6 lg:gap-8">
              {t.heritage.stats.map((stat, i) => (
                <AnimatedStat key={stat.label} {...stat} delay={i * 0.08} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
