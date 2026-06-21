import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const steps = [
  {
    number: "01",
    title: "Design & Cartography",
    subtitle: "The Vision",
    description:
      "Every Ghanbarinia carpet begins as a precisely hand-painted cartoon — a 1:1 scale drawing on graph paper, where each square represents a single knot. Master designers require months to complete a single cartoon for a large medallion carpet, encoding thousands of colour transitions with mathematical precision.",
    img: "https://images.unsplash.com/photo-1694847915592-2a7ef568e2b6?w=900&h=700&fit=crop&auto=format",
    fallback: "https://images.unsplash.com/photo-1638310533874-6c124c012e1d?w=900&h=700&fit=crop&auto=format",
  },
  {
    number: "02",
    title: "Material Selection",
    subtitle: "The Foundation",
    description:
      "We source exclusively from Iran's finest material suppliers. Silk thread comes from Caspian mulberry silkworms; kork wool is harvested from the chest of sheep grazed at altitude. Natural dyes — indigo, madder, pomegranate, walnut — are prepared by specialist dyers whose families have held the knowledge for generations.",
    img: "https://images.unsplash.com/photo-1569909115134-a0426936c879?w=900&h=700&fit=crop&auto=format",
    fallback: "https://images.unsplash.com/photo-1569909115134-a0426936c879?w=900&h=700&fit=crop&auto=format",
  },
  {
    number: "03",
    title: "Master Weaving",
    subtitle: "The Creation",
    description:
      "A team of 4–6 master weavers (ustads) works in concert, reciting the colour code from memory row by row. Each knot is hand-tied, cut, and tamped. A Qom silk carpet measuring 3×4 metres may contain over 15 million individual knots and require three years of continuous work to complete.",
    img: "https://images.unsplash.com/photo-1638310533874-6c124c012e1d?w=900&h=700&fit=crop&auto=format",
    fallback: "https://images.unsplash.com/photo-1638310533874-6c124c012e1d?w=900&h=700&fit=crop&auto=format",
  },
  {
    number: "04",
    title: "Authentication & Provenance",
    subtitle: "The Guarantee",
    description:
      "Every piece entering the Ghanbarinia collection undergoes a rigorous 47-point examination by our in-house panel of experts. Knot count, dye stability, foundation integrity, and age are verified. Each carpet is issued a certificate of provenance, a unique registration number, and a conservation guide before being presented in our showrooms.",
    img: "https://images.unsplash.com/photo-1707978932202-751b08324daf?w=900&h=700&fit=crop&auto=format",
    fallback: "https://images.unsplash.com/photo-1707978932202-751b08324daf?w=900&h=700&fit=crop&auto=format",
  },
];

interface StepProps {
  step: (typeof steps)[0];
  index: number;
}

function Step({ step, index }: StepProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.35"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0.4]);
  const y = useTransform(scrollYProgress, [0, 0.3], [60, 0]);
  const imgX = useTransform(
    scrollYProgress,
    [0, 0.3],
    [index % 2 === 0 ? 80 : -80, 0]
  );

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${
        isEven ? "" : "lg:flex-row-reverse"
      }`}
      style={{ opacity, y }}
    >
      {/* Image */}
      <motion.div
        className="lg:w-[55%] relative overflow-hidden flex-shrink-0"
        style={{ x: imgX, aspectRatio: "4/3" }}
      >
        <ImageWithFallback
          src={step.img}
          alt={step.title}
          className="w-full h-full object-cover"
        />
        {/* Step number overlay */}
        <div className="absolute top-6 left-6">
          <span className="font-['Playfair_Display'] text-[80px] leading-none text-[#FAF8F3]/10 select-none">
            {step.number}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1108]/15 to-transparent pointer-events-none" />
      </motion.div>

      {/* Text */}
      <div className={`lg:w-[45%] ${isEven ? "lg:pr-8" : "lg:pl-8"}`}>
        <div className="flex items-center gap-4 mb-6">
          <span className="font-['Jost'] text-[10px] tracking-[0.4em] uppercase text-[#B8935A]">
            {step.number}
          </span>
          <div className="w-10 h-px bg-[#B8935A]" />
          <span className="font-['Jost'] text-[10px] tracking-[0.3em] uppercase text-[#7A6E5F]">
            {step.subtitle}
          </span>
        </div>
        <h3 className="font-['Playfair_Display'] text-[clamp(28px,3vw,44px)] leading-[1.2] text-[#1A1108] mb-6">
          {step.title}
        </h3>
        <p className="font-['Jost'] text-[14px] leading-[1.9] text-[#7A6E5F]">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

export function Craftsmanship() {
  return (
    <section id="craftsmanship" className="bg-[#F3EDE2] py-32 lg:py-40">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="mb-24 lg:mb-32 text-center max-w-2xl mx-auto">
          <motion.p
            className="font-['Jost'] text-[10px] tracking-[0.4em] uppercase text-[#B8935A] mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            ◆ The Art of Making
          </motion.p>
          <motion.h2
            className="font-['Playfair_Display'] text-[clamp(36px,4vw,64px)] leading-[1.1] text-[#1A1108] mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 1 }}
          >
            From cartographer's pen
            <br />
            <span className="italic text-[#B8935A]">to collector's floor.</span>
          </motion.h2>
          <motion.p
            className="font-['Jost'] text-[14px] leading-[1.8] text-[#7A6E5F]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            The creation of a museum-quality Persian carpet is one of humanity's most demanding artistic disciplines. From initial design to final authentication, the process may span five years.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-32 lg:gap-40">
          {steps.map((step, i) => (
            <Step key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
