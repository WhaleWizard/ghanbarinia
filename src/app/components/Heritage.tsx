import { useRef } from "react";
import { motion, useInView } from "motion/react";

const stats = [
  { number: "60+", label: "Years of Mastery" },
  { number: "30+", label: "Global Showrooms" },
  { number: "15,000+", label: "Unique Pieces" },
  { number: "80+", label: "Countries Served" },
];

function AnimatedStat({ number, label, delay }: { number: string; label: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className="border-t border-[rgba(26,17,8,0.12)] pt-6"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="font-['Playfair_Display'] text-[clamp(36px,4vw,56px)] text-[#1A1108] leading-none mb-2">
        {number}
      </div>
      <div className="font-['Jost'] text-[11px] tracking-[0.25em] uppercase text-[#7A6E5F]">
        {label}
      </div>
    </motion.div>
  );
}

export function Heritage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="heritage" className="bg-[#FAF8F3] py-32 lg:py-40">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        {/* Label */}
        <motion.p
          className="font-['Jost'] text-[10px] tracking-[0.4em] uppercase text-[#B8935A] mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          ◆ Our Heritage
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32">
          {/* Left column */}
          <div ref={ref}>
            <motion.h2
              className="font-['Playfair_Display'] text-[clamp(36px,4vw,60px)] leading-[1.1] text-[#1A1108] mb-10"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              Six decades of Persian carpet excellence
            </motion.h2>

            <motion.p
              className="font-['Jost'] text-[15px] leading-[1.9] text-[#7A6E5F] mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15, duration: 1 }}
            >
              Founded in 1965 in Tehran, Ghanbarinia has grown from a single atelier into the world's most respected Persian carpet house. For three generations, our family has maintained an uncompromising standard: only the finest hand-knotted pieces from Iran's master weavers reach our showrooms.
            </motion.p>

            <motion.p
              className="font-['Jost'] text-[15px] leading-[1.9] text-[#7A6E5F] mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25, duration: 1 }}
            >
              Each carpet in our collection is authenticated by our experts and sourced directly from the ancient weaving centres of Tabriz, Kashan, Isfahan, Qom, Nain and Kerman — cities whose names are synonymous with the highest art of carpet making.
            </motion.p>

            <motion.a
              href="#craftsmanship"
              className="inline-flex items-center gap-4 font-['Jost'] text-[11px] tracking-[0.25em] uppercase text-[#1A1108] hover:text-[#B8935A] transition-colors duration-300 group"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Discover Our Craftsmanship
              <span className="block w-12 h-px bg-current transition-all duration-300 group-hover:w-20" />
            </motion.a>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-12">
            {/* Image */}
            <motion.div
              className="relative overflow-hidden"
              style={{ aspectRatio: "4/3" }}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src="https://images.unsplash.com/photo-1739715642772-856d28f0c9b2?w=1000&h=750&fit=crop&auto=format"
                alt="Ghanbarinia showroom interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1108]/20 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="font-['Jost'] text-[10px] tracking-[0.3em] uppercase text-[#FAF8F3]/80 bg-[#1A1108]/50 backdrop-blur-sm px-3 py-1.5">
                  Paris Showroom, 8ème Arrondissement
                </span>
              </div>
            </motion.div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, i) => (
                <AnimatedStat key={stat.label} {...stat} delay={i * 0.1} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
