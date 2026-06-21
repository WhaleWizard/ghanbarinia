import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import qomSilkHero from "../../assets/qom-silk-hero-carpet.svg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [0.26, 0.58]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[820px] h-screen overflow-hidden bg-[#080604]">
      <motion.div className="absolute inset-0" style={{ y: imageY, scale: imageScale }}>
        <img
          src={qomSilkHero}
          alt="Original Qom silk Persian carpet artwork with sapphire field and antique gold medallion"
          className="h-full w-full object-cover object-[62%_50%]"
        />
      </motion.div>

      <motion.div className="absolute inset-0 bg-[#080604]" style={{ opacity: overlayOpacity }} />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,6,4,0.96)_0%,rgba(8,6,4,0.86)_34%,rgba(8,6,4,0.34)_66%,rgba(8,6,4,0.12)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_40%,rgba(197,154,82,0.18),transparent_34%),radial-gradient(circle_at_21%_76%,rgba(126,26,35,0.28),transparent_29%)]" />
      <div className="absolute left-6 right-6 top-24 bottom-10 hidden border border-[#E7D4A7]/12 lg:block" />
      <div className="absolute bottom-0 left-0 right-0 h-52 bg-gradient-to-t from-[#FAF8F3] via-[#FAF8F3]/48 to-transparent" />

      <motion.div
        className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-between px-6 lg:px-16"
        style={{ y: textY, opacity: contentOpacity }}
      >
        <div className="pt-32 lg:pt-36 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-start">
          <motion.p
            className="font-['Jost'] text-[10px] uppercase tracking-[0.48em] text-[#E7D4A7]/72"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 1 }}
          >
            Qom silk carpets · curated in Tashkent
          </motion.p>
          <motion.div
            className="hidden max-w-[260px] border-l border-[#E7D4A7]/25 pl-7 text-right lg:block"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 1 }}
          >
            <p className="font-['Jost'] text-[10px] uppercase tracking-[0.32em] text-[#FAF8F3]/58">Private selection</p>
            <p className="mt-3 font-['Playfair_Display'] text-[18px] italic leading-snug text-[#FAF8F3]/82">Iranian masterworks for quiet, collectible interiors.</p>
          </motion.div>
        </div>

        <div className="pb-24 lg:pb-28">
          <motion.div
            className="mb-7 flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 1 }}
          >
            <span className="h-px w-16 bg-[#C59A52]" />
            <span className="font-['Jost'] text-[10px] uppercase tracking-[0.34em] text-[#FAF8F3]/64">Persian Carpet House</span>
          </motion.div>

          <motion.h1
            className="max-w-[980px] font-['Playfair_Display'] text-[clamp(54px,9.4vw,142px)] leading-[0.86] tracking-[-0.055em] text-[#FAF8F3]"
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 1.35, ease: [0.22, 1, 0.36, 1] }}
          >
            Qom silk,
            <span className="block pl-[0.08em] italic text-[#D9B46A]">without excess.</span>
          </motion.h1>

          <div className="mt-9 grid max-w-[1010px] gap-8 lg:grid-cols-[minmax(0,520px)_auto] lg:items-end">
            <motion.p
              className="font-['Jost'] text-[14px] leading-[1.9] tracking-[0.08em] text-[#FAF8F3]/72 lg:text-[15px]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 1 }}
            >
              A restrained private catalogue of handmade Iranian carpets — luminous silk from Qom, precise medallions, and atelier-level finishing for residences, villas, hotels, and collectors in Uzbekistan.
            </motion.p>

            <motion.div
              className="flex flex-col gap-4 sm:flex-row sm:items-center"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.22, duration: 1 }}
            >
              <a
                href="#collections"
                className="font-['Jost'] text-[11px] uppercase tracking-[0.22em] bg-[#FAF8F3] px-8 py-4 text-[#100B06] shadow-[0_22px_60px_rgba(0,0,0,0.34)] transition-all duration-500 hover:bg-[#D9B46A]"
              >
                View catalogue
              </a>
              <a
                href="https://www.instagram.com/ghanbariniauzbekistan"
                target="_blank"
                rel="noreferrer"
                className="font-['Jost'] text-[11px] uppercase tracking-[0.22em] border border-[#FAF8F3]/28 bg-[#080604]/36 px-7 py-4 text-[#FAF8F3] backdrop-blur-md transition-all duration-300 hover:border-[#D9B46A] hover:text-[#D9B46A]"
              >
                Instagram
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 right-6 z-20 hidden items-center gap-5 lg:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
      >
        <span className="font-['Jost'] text-[9px] uppercase tracking-[0.4em] text-[#FAF8F3]/42">Scroll</span>
        <div className="relative h-px w-24 overflow-hidden bg-[#FAF8F3]/20">
          <motion.div
            className="absolute left-0 top-0 h-full w-1/2 bg-[#D9B46A]"
            animate={{ x: ["-100%", "220%"] }}
            transition={{ duration: 1.9, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
