import { motion } from "motion/react";

const items = [
  "Est. 1965",
  "30+ Showrooms Worldwide",
  "Master Hand-Knotted Carpets",
  "Tabriz · Kashan · Isfahan · Qom",
  "From $10,000 to $1,500,000",
  "Private Acquisition Service",
  "60 Years of Excellence",
  "Natural Silk & Wool",
];

export function MarqueeBar() {
  const repeated = [...items, ...items, ...items];

  return (
    <div className="bg-[#1A1108] py-4 overflow-hidden relative">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-33.33%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center gap-12 shrink-0">
            <span className="font-['Jost'] text-[10px] tracking-[0.35em] uppercase text-[#FAF8F3]/70">
              {item}
            </span>
            <span className="text-[#B8935A] text-sm">◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
