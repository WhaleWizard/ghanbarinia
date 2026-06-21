import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Scene {
  id: string;
  region: string;
  title: string;
  description: string;
  detail: string;
  price: string;
  img: string;
  accent: string;
}

const scenes: Scene[] = [
  {
    id: "tabriz",
    region: "North-West Iran",
    title: "Tabriz",
    description:
      "The imperial city of Tabriz has been the cradle of Persian carpet weaving for over 500 years. Characterised by medallion compositions of extraordinary precision, Tabriz carpets are woven with a density of up to 1,000,000 knots per square metre.",
    detail: "Double-wefted · Merino wool pile · Vegetable dyes",
    price: "From $85,000",
    img: "https://images.unsplash.com/photo-1588421874990-1fe162747f9b?w=1400&h=1000&fit=crop&auto=format",
    accent: "#8B3A3A",
  },
  {
    id: "kashan",
    region: "Isfahan Province",
    title: "Kashan",
    description:
      "Revered since the Safavid era, Kashan's weavers produce carpets of unrivalled floral intricacy. The famous Ardabil Carpet — the world's oldest dated carpet — emerged from these ateliers in 1539. Our Kashan collection honours that 500-year legacy.",
    detail: "Silk inlay · Kork wool · Persian knot · 800 KPSI",
    price: "From $120,000",
    img: "https://images.unsplash.com/photo-1572123979839-3749e9973aba?w=1400&h=1000&fit=crop&auto=format",
    accent: "#3A5A8B",
  },
  {
    id: "qom",
    region: "Central Iran",
    title: "Qom Silk",
    description:
      "Qom produces the most luxurious carpets known to mankind — woven entirely from the finest Iranian silk, with knot counts exceeding 1,200 per square inch. A single square metre may require over 18 months of uninterrupted work by a master weaver.",
    detail: "100% silk pile & foundation · 1,200+ KPSI · Museum grade",
    price: "From $250,000",
    img: "https://images.unsplash.com/photo-1693332559291-380f10cd2253?w=1400&h=1000&fit=crop&auto=format",
    accent: "#5A3A8B",
  },
  {
    id: "isfahan",
    region: "Historic Isfahan",
    title: "Isfahan",
    description:
      "Isfahan — Nesf-e Jahan, 'Half the World' — has produced carpets of transcendent beauty since the golden age of Shah Abbas I. The arabesques, palmettes and garden compositions of Isfahan carpets represent Persian art at its most refined and philosophical.",
    detail: "Kork wool · Silk highlights · Persian asymmetric knot",
    price: "From $180,000",
    img: "https://images.unsplash.com/photo-1737820254876-c22049f67714?w=1400&h=1000&fit=crop&auto=format",
    accent: "#3A7A5A",
  },
];

interface SceneSlideProps {
  scene: Scene;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}

function SceneSlide({ scene, index, total, scrollYProgress }: SceneSlideProps) {
  const seg = 1 / total;
  const start = index * seg;
  const end = (index + 1) * seg;
  const entryEnd = start + seg * 0.28;
  const exitStart = end - seg * 0.2;

  const opacity = useTransform(
    scrollYProgress,
    [start, entryEnd, exitStart, end],
    [0, 1, 1, 0]
  );
  const rotateX = useTransform(
    scrollYProgress,
    [start, entryEnd, exitStart, end],
    [-28, 0, 4, 22]
  );
  const scale = useTransform(
    scrollYProgress,
    [start, entryEnd, exitStart, end],
    [0.72, 1, 1, 1.1]
  );
  const z = useTransform(
    scrollYProgress,
    [start, entryEnd],
    [-600, 0]
  );
  const textX = useTransform(
    scrollYProgress,
    [start, entryEnd, exitStart, end],
    [-100, 0, 0, -80]
  );
  const textOpacityEntryEnd = start + seg * 0.22;
  const textOpacityExitStart = Math.min(exitStart + seg * 0.08, end);
  const textOpacity = useTransform(
    scrollYProgress,
    [start, textOpacityEntryEnd, textOpacityExitStart, end],
    [0, 1, 1, 0]
  );
  const imgX = useTransform(
    scrollYProgress,
    [start, entryEnd, exitStart, end],
    [80, 0, 0, 60]
  );

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      style={{ opacity }}
      aria-hidden={index !== 0}
    >
      {/* Background carpet tint */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundColor: scene.accent }}
      />

      <div className="w-full h-full max-w-[1440px] mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
        {/* Text panel */}
        <motion.div
          className="lg:w-[38%] flex-shrink-0 z-10"
          style={{ x: textX, opacity: textOpacity }}
        >
          <p className="font-['Jost'] text-[10px] tracking-[0.5em] uppercase text-[#B8935A] mb-5">
            ◆ {scene.region}
          </p>
          <h2 className="font-['Playfair_Display'] text-[clamp(48px,5.5vw,88px)] leading-none text-[#FAF8F3] mb-8">
            {scene.title}
          </h2>
          <div className="w-12 h-px bg-[#B8935A] mb-8" />
          <p className="font-['Jost'] text-[14px] leading-[1.85] text-[#FAF8F3]/65 mb-8">
            {scene.description}
          </p>
          <p className="font-['Jost'] text-[10px] tracking-[0.3em] uppercase text-[#FAF8F3]/40 mb-10">
            {scene.detail}
          </p>
          <div className="flex items-center justify-between border-t border-[rgba(250,248,243,0.12)] pt-6">
            <div>
              <p className="font-['Jost'] text-[10px] tracking-[0.3em] uppercase text-[#FAF8F3]/40 mb-1">
                Starting Price
              </p>
              <p className="font-['Playfair_Display'] text-[22px] text-[#B8935A]">
                {scene.price}
              </p>
            </div>
            <a
              href="#consultation"
              className="font-['Jost'] text-[10px] tracking-[0.2em] uppercase px-6 py-3 border border-[rgba(250,248,243,0.25)] text-[#FAF8F3]/70 hover:border-[#B8935A] hover:text-[#B8935A] transition-all duration-400"
            >
              Inquire
            </a>
          </div>
        </motion.div>

        {/* Carpet image with 3D */}
        <motion.div
          className="lg:w-[62%] h-full flex items-center justify-center lg:justify-end"
          style={{ x: imgX }}
        >
          <motion.div
            className="relative overflow-hidden shadow-2xl"
            style={{
              rotateX,
              scale,
              z,
              transformPerspective: 1200,
              width: "clamp(300px, 50vw, 700px)",
              aspectRatio: "3/4",
            }}
          >
            <ImageWithFallback
              src={scene.img}
              alt={`${scene.title} Persian carpet`}
              className="w-full h-full object-cover"
            />
            {/* Sheen overlay for luxury feel */}
            <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-white/5 to-white/10 pointer-events-none" />
            <div className="absolute inset-0 border border-white/10 pointer-events-none" />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

interface ProgressDotProps {
  scrollYProgress: MotionValue<number>;
  index: number;
  total: number;
  label: string;
}

function ProgressDot({ scrollYProgress, index, total, label }: ProgressDotProps) {
  const seg = 1 / total;
  const start = index * seg;
  const end = (index + 1) * seg;
  const opacity = useTransform(scrollYProgress, [start, start + 0.05, end - 0.05, end], [0.3, 1, 1, 0.3]);
  return (
    <motion.div className="flex items-center gap-2" style={{ opacity }}>
      <span className="font-['Jost'] text-[8px] tracking-[0.2em] uppercase text-[#FAF8F3]/50 hidden lg:block">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="w-1 h-1 rounded-full bg-[#B8935A]" />
    </motion.div>
  );
}

export function CarpetScrollStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} style={{ height: `${scenes.length * 100}vh` }} className="relative">
      {/* Sticky container */}
      <div
        className="sticky top-0 h-screen overflow-hidden bg-[#120D07]"
        style={{ perspective: "1200px" }}
      >
        {/* Subtle geometric ornament */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <svg width="100%" height="100%" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="persian-geo" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                <rect x="10" y="10" width="100" height="100" fill="none" stroke="#B8935A" strokeWidth="0.5" />
                <polygon points="60,10 110,60 60,110 10,60" fill="none" stroke="#B8935A" strokeWidth="0.5" />
                <circle cx="60" cy="60" r="15" fill="none" stroke="#B8935A" strokeWidth="0.5" />
                <line x1="10" y1="10" x2="60" y2="60" stroke="#B8935A" strokeWidth="0.3" />
                <line x1="110" y1="10" x2="60" y2="60" stroke="#B8935A" strokeWidth="0.3" />
                <line x1="10" y1="110" x2="60" y2="60" stroke="#B8935A" strokeWidth="0.3" />
                <line x1="110" y1="110" x2="60" y2="60" stroke="#B8935A" strokeWidth="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#persian-geo)" />
          </svg>
        </div>

        {/* Section label */}
        <div className="absolute top-28 left-6 lg:left-16 z-20">
          <p className="font-['Jost'] text-[10px] tracking-[0.45em] uppercase text-[#FAF8F3]/30">
            Collections
          </p>
        </div>

        {/* Progress dots */}
        <div className="absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
          {scenes.map((scene, i) => (
            <ProgressDot
              key={scene.id}
              scrollYProgress={scrollYProgress}
              index={i}
              total={scenes.length}
              label={scene.title}
            />
          ))}
        </div>

        {/* Scenes */}
        {scenes.map((scene, i) => (
          <SceneSlide
            key={scene.id}
            scene={scene}
            index={i}
            total={scenes.length}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
