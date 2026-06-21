import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [0.58, 0.78]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[760px] h-screen overflow-hidden bg-[#1A1108]">
      {/* Parallax image */}
      <motion.div
        className="absolute inset-0"
        style={{ y: imageY, scale: imageScale }}
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1693332559291-380f10cd2253?w=2200&h=1500&fit=crop&auto=format&q=90"
          alt="Opulent handmade Qom silk Persian carpet with luminous detail"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-[#1A1108]"
        style={{ opacity: overlayOpacity }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_58%,rgba(184,147,90,0.30),transparent_30%),linear-gradient(90deg,rgba(18,13,7,0.92)_0%,rgba(18,13,7,0.68)_42%,rgba(18,13,7,0.28)_100%)]" />

      {/* Gradient bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#FAF8F3] to-transparent" />

      {/* Content */}
      <motion.div
        className="relative z-10 h-full flex flex-col justify-between px-6 lg:px-16 max-w-[1440px] mx-auto"
        style={{ y: textY, opacity: contentOpacity }}
      >
        {/* Top area */}
        <div className="pt-32 flex justify-between items-start">
          <motion.p
            className="font-['Jost'] text-[10px] tracking-[0.45em] uppercase text-[#FAF8F3]/60"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Persian Carpet House · Tashkent
          </motion.p>
          <motion.p
            className="hidden lg:block font-['Jost'] text-[10px] tracking-[0.35em] uppercase text-[#FAF8F3]/60"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Iranian Silk Masterworks · Private Catalogue
          </motion.p>
        </div>

        {/* Hero headline */}
        <div className="pb-28">
          <motion.div
            className="overflow-hidden mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.1 }}
          >
            <motion.h1
              className="font-['Playfair_Display'] text-[clamp(64px,11vw,160px)] leading-[0.9] tracking-[-0.02em] text-[#FAF8F3]"
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ delay: 0.3, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="whitespace-nowrap">GHANBARINIA</span>
              <span className="block text-[clamp(14px,1.55vw,24px)] not-italic tracking-[0.55em] mt-5 text-[#FAF8F3]/75 font-['Jost']">UZBEKISTAN</span>
            </motion.h1>
          </motion.div>
          <motion.div
            className="overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.1 }}
          >
            <motion.h1
              className="font-['Playfair_Display'] italic text-[clamp(32px,5vw,78px)] leading-[0.95] tracking-[-0.01em] text-[#B8935A]"
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ delay: 0.5, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            >
              PERSIAN CARPETS
            </motion.h1>
          </motion.div>

          <div className="mt-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <motion.p
              className="font-['Jost'] text-[13px] lg:text-[15px] tracking-[0.12em] text-[#FAF8F3]/75 max-w-sm leading-relaxed"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 1 }}
            >
              Museum-grade handmade Persian silk carpets from Iran — curated in Uzbekistan for refined homes, villas, hotels, and collectors.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 1 }}
            >
              <a
                href="#collections"
                className="premium-button font-['Jost'] text-[11px] tracking-[0.22em] uppercase px-8 py-4 bg-[#FAF8F3] text-[#1A1108] hover:bg-[#B8935A] hover:text-[#FAF8F3] transition-all duration-500 shadow-[0_18px_45px_rgba(0,0,0,0.28)]"
              >
                Open Catalogue
              </a>
              <a
                href="https://www.instagram.com/ghanbariniauzbekistan"
                target="_blank"
                rel="noreferrer"
                className="font-['Jost'] text-[11px] tracking-[0.22em] uppercase px-7 py-4 border border-[#FAF8F3]/35 bg-[#1A1108]/35 text-[#FAF8F3] backdrop-blur-sm hover:border-[#B8935A] hover:text-[#B8935A] transition-all duration-300 flex items-center justify-center gap-3"
              >
                Instagram
                <svg width="20" height="1" viewBox="0 0 20 1" fill="none">
                  <line x1="0" y1="0.5" x2="20" y2="0.5" stroke="currentColor" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="w-px h-14 bg-[#FAF8F3]/25 overflow-hidden relative">
          <motion.div
            className="absolute top-0 left-0 w-full bg-[#B8935A]"
            style={{ height: "50%" }}
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <span
          className="font-['Jost'] text-[9px] tracking-[0.4em] uppercase text-[#FAF8F3]/40"
          style={{ writingMode: "vertical-rl" }}
        >
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
