import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { CarpetImage } from "./CarpetImage";
import { useIsDesktop, usePrefersReducedMotion } from "../hooks/useMediaQuery";
import { useCopy } from "../../i18n/LanguageProvider";

/** Photo per step. The wording lives in the dictionary. */
const STEP_IMAGES = [
  "master-silk-garden",
  "craft-materials",
  "craft-weaving",
  "craft-authentication",
];

interface StepProps {
  index: number;
  number: string;
  subtitle: string;
  title: string;
  description: string;
}

function Step({ index, number, subtitle, title, description }: StepProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isDesktop = useIsDesktop();
  const reducedMotion = usePrefersReducedMotion();
  const animate = isDesktop && !reducedMotion;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.35"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.85, 1], [0, 1, 1, 0.5]);
  const y = useTransform(scrollYProgress, [0, 0.3], [50, 0]);
  /* The image used to slide in from 80px sideways on every screen size. On a
     phone that pushed the whole page beyond the viewport. */
  const imgX = useTransform(scrollYProgress, [0, 0.3], [index % 2 === 0 ? 70 : -70, 0]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col items-center gap-8 lg:flex-row lg:gap-24 ${
        isEven ? "" : "lg:flex-row-reverse"
      }`}
      style={animate ? { opacity, y } : undefined}
      initial={animate ? undefined : { opacity: 0, y: 24 }}
      whileInView={animate ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="relative w-full flex-shrink-0 overflow-hidden lg:w-[55%]"
        style={animate ? { x: imgX, aspectRatio: "4/3" } : { aspectRatio: "4/3" }}
      >
        <CarpetImage
          name={STEP_IMAGES[index] ?? STEP_IMAGES[0]}
          alt={title}
          className="h-full w-full object-cover"
          sizes="(max-width: 1023px) 92vw, 55vw"
        />
        <div className="absolute left-5 top-4">
          <span className="select-none font-['Playfair_Display'] text-[64px] leading-none text-[#FAF8F3]/15 lg:text-[80px]">
            {number}
          </span>
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1A1108]/20 to-transparent" />
      </motion.div>

      <div className={`w-full lg:w-[45%] ${isEven ? "lg:pr-8" : "lg:pl-8"}`}>
        <div className="mb-5 flex items-center gap-4">
          <span className="font-['Jost'] text-[10px] uppercase tracking-[0.35em] text-[#B8935A]">
            {number}
          </span>
          <span className="h-px w-10 bg-[#B8935A]" />
          <span className="font-['Jost'] text-[10px] uppercase tracking-[0.28em] text-[#7A6E5F]">
            {subtitle}
          </span>
        </div>
        <h3 className="mb-5 font-['Playfair_Display'] text-[clamp(28px,3vw,44px)] leading-[1.2] text-[#1A1108]">
          {title}
        </h3>
        <p className="font-['Jost'] text-[14px] leading-[1.85] text-[#7A6E5F]">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export function Craftsmanship() {
  const t = useCopy();

  return (
    <section id="craftsmanship" className="bg-[#F3EDE2] py-20 lg:py-40">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
        <div className="mx-auto mb-16 max-w-2xl text-center lg:mb-32">
          <motion.p
            className="mb-5 font-['Jost'] text-[10px] uppercase tracking-[0.4em] text-[#B8935A]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {t.craft.label}
          </motion.p>
          <motion.h2
            className="mb-6 font-['Playfair_Display'] text-[clamp(32px,4vw,64px)] leading-[1.1] text-[#1A1108]"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.9 }}
          >
            {t.craft.titleLine1}
            <br />
            <span className="italic text-[#B8935A]">{t.craft.titleLine2}</span>
          </motion.h2>
          <motion.p
            className="font-['Jost'] text-[14px] leading-[1.8] text-[#7A6E5F]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {t.craft.intro}
          </motion.p>
        </div>

        <div className="flex flex-col gap-20 lg:gap-40">
          {t.craft.steps.map((step, i) => (
            <Step
              key={step.number}
              index={i}
              number={step.number}
              subtitle={step.subtitle}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
