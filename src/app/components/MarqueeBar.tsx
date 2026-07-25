import { motion } from "motion/react";
import { useCopy } from "../../i18n/LanguageProvider";

export function MarqueeBar() {
  const t = useCopy();
  const repeated = [...t.marquee, ...t.marquee, ...t.marquee];

  return (
    <div className="relative overflow-hidden bg-[#1A1108] py-4">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-33.33%"] }}
        transition={{ duration: 19, repeat: Infinity, ease: "linear" }}
      >
        {repeated.map((item, i) => (
          <span key={`${item}-${i}`} className="flex shrink-0 items-center gap-12">
            <span className="font-['Jost'] text-[10px] uppercase tracking-[0.3em] text-[#FAF8F3]/70">
              {item}
            </span>
            <span className="text-sm text-[#B8935A]">◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
