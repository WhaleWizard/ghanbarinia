import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useCopy } from "../../i18n/LanguageProvider";
import { CONTACTS } from "../../i18n/dictionary";

const BASE = import.meta.env.BASE_URL;

export function Hero() {
  const t = useCopy();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      /* 100svh, not 100vh: on phones the mobile toolbar must not make the
         first screen jump while scrolling. */
      className="relative h-[100svh] min-h-[560px] overflow-hidden bg-[#0A0704]"
    >
      <motion.div className="absolute inset-0" style={{ y: imageY, scale: imageScale }}>
        {/* Two crops rather than one: phones get a tall frame, desktops a wide
            one, so neither downloads pixels it will never show. */}
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet={`${BASE}img/hero/showroom-silk-desktop.webp`}
          />
          <img
            src={`${BASE}img/hero/showroom-silk-mobile.webp`}
            alt="Handmade Persian silk carpets from the Ghanbarinia collection"
            className="h-full w-full object-cover"
            fetchPriority="high"
            decoding="async"
            draggable={false}
          />
        </picture>
      </motion.div>

      {/* The headline used to sit straight on the photograph and disappear into
          it. These scrims turn the lower half into near-solid darkness, so the
          text always has something to sit on. */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(10,7,4,0.86)_0%,rgba(10,7,4,0.34)_26%,rgba(10,7,4,0.62)_54%,rgba(10,7,4,0.95)_82%,rgba(10,7,4,0.99)_100%)] lg:bg-[linear-gradient(94deg,rgba(10,7,4,0.97)_0%,rgba(10,7,4,0.9)_34%,rgba(10,7,4,0.5)_62%,rgba(10,7,4,0.2)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_36%,rgba(197,154,82,0.16),transparent_38%)]" />
      <div className="pointer-events-none absolute bottom-10 left-6 right-6 top-24 hidden border border-[#E7D4A7]/12 lg:block" />

      <motion.div
        className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-between px-6 lg:px-16"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className="grid gap-6 pt-28 lg:grid-cols-[1fr_auto] lg:items-start lg:pt-36">
          <motion.p
            /* whitespace-nowrap plus tighter tracking: this line wrapped onto
               two lines on a 390px screen and looked broken. */
            className="whitespace-nowrap font-['Jost'] text-[9px] uppercase tracking-[0.22em] text-[#E7D4A7]/80 sm:text-[10px] sm:tracking-[0.3em] lg:tracking-[0.44em]"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9 }}
          >
            {t.hero.eyebrow}
          </motion.p>

          <motion.div
            className="hidden max-w-[260px] border-l border-[#E7D4A7]/25 pl-7 text-right lg:block"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.9 }}
          >
            <p className="font-['Jost'] text-[10px] uppercase tracking-[0.3em] text-[#FAF8F3]/55">
              {t.hero.sideLabel}
            </p>
            <p className="mt-3 font-['Playfair_Display'] text-[18px] italic leading-snug text-[#FAF8F3]/85">
              {t.hero.sideText}
            </p>
          </motion.div>
        </div>

        <div className="pb-14 lg:pb-28">
          <motion.div
            className="mb-5 flex items-center gap-4 lg:mb-7"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.9 }}
          >
            <span className="h-px w-10 bg-[#C59A52] lg:w-16" />
            <span className="font-['Jost'] text-[10px] uppercase tracking-[0.26em] text-[#FAF8F3]/70">
              {t.hero.kicker}
            </span>
          </motion.div>

          <motion.h1
            /* Lower bound was 54px, which overflowed the screen on a 390px
               phone — the second line alone needed ~400px. */
            className="max-w-[980px] font-['Playfair_Display'] text-[clamp(40px,9.4vw,142px)] leading-[0.92] tracking-[-0.045em] text-[#FAF8F3] [text-shadow:0_2px_30px_rgba(0,0,0,0.55)]"
            initial={{ opacity: 0, y: 44 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {t.hero.titleLine1}
            <span className="block italic text-[#E0BC75] lg:pl-[0.08em]">
              {t.hero.titleLine2}
            </span>
          </motion.h1>

          <div className="mt-6 grid max-w-[1010px] gap-6 lg:mt-9 lg:grid-cols-[minmax(0,520px)_auto] lg:items-end lg:gap-8">
            <motion.p
              className="font-['Jost'] text-[14px] leading-[1.75] tracking-[0.02em] text-[#FAF8F3]/80 lg:text-[15px] lg:leading-[1.9]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.9 }}
            >
              {t.hero.lead}
            </motion.p>

            <motion.div
              className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.9 }}
            >
              <a
                href="#collections"
                className="bg-[#FAF8F3] px-8 py-4 text-center font-['Jost'] text-[11px] uppercase tracking-[0.2em] text-[#100B06] shadow-[0_22px_60px_rgba(0,0,0,0.4)] transition-colors duration-300 hover:bg-[#E0BC75]"
              >
                {t.hero.ctaCatalogue}
              </a>
              <a
                href={CONTACTS.telegramHref}
                target="_blank"
                rel="noreferrer"
                className="border border-[#FAF8F3]/30 bg-[#0A0704]/45 px-7 py-4 text-center font-['Jost'] text-[11px] uppercase tracking-[0.2em] text-[#FAF8F3] backdrop-blur-md transition-colors duration-300 hover:border-[#E0BC75] hover:text-[#E0BC75]"
              >
                {t.hero.ctaContact}
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 right-6 z-20 hidden items-center gap-5 lg:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.9 }}
      >
        <span className="font-['Jost'] text-[9px] uppercase tracking-[0.4em] text-[#FAF8F3]/45">
          {t.hero.scroll}
        </span>
        <div className="relative h-px w-24 overflow-hidden bg-[#FAF8F3]/20">
          <motion.div
            className="absolute left-0 top-0 h-full w-1/2 bg-[#E0BC75]"
            animate={{ x: ["-100%", "220%"] }}
            transition={{ duration: 1.9, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
