import { useState } from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const pieces = [
  {
    id: "ardabil-revival",
    name: "The Ardabil Revival",
    origin: "Kashan, Isfahan Province",
    year: "Commissioned 2018, completed 2023",
    dimensions: "10.5 × 7.2 m",
    knots: "52,920,000 individual knots",
    material: "Finest kork wool, silk border inlay, natural dyes",
    description:
      "A monumental homage to the world-renowned 1539 Ardabil Carpet, woven by a team of eight master weavers over five consecutive years. The central medallion composition recreates the original's cosmic geometry with unprecedented fidelity. Each cartouche inscription is hand-transcribed from the Victoria & Albert Museum's original.",
    price: "$1,200,000",
    cert: "GHN-2023-004",
    img: "https://images.unsplash.com/photo-1693332559056-02b80991b2e8?w=800&h=1100&fit=crop&auto=format",
  },
  {
    id: "silk-garden-paradise",
    name: "Silk Garden of Paradise",
    origin: "Qom, Central Iran",
    year: "2019–2022",
    dimensions: "4.8 × 3.2 m",
    knots: "18,432,000 individual knots",
    material: "100% raw Iranian silk — pile, warp, and weft",
    description:
      "A transcendent garden carpet rendered entirely in pure Caspian silk. The field depicts the classical Persian char bagh (four-garden) cosmology, populated with 340 distinct botanical species rendered with botanical accuracy. At 1,200 knots per square inch, this is among the most technically demanding carpets ever produced.",
    price: "$850,000",
    cert: "GHN-2022-017",
    img: "https://images.unsplash.com/photo-1594847915592-2a7ef568e2b6?w=800&h=1100&fit=crop&auto=format",
  },
  {
    id: "tabriz-imperial-throne",
    name: "Tabriz Imperial Throne",
    origin: "Tabriz, East Azerbaijan",
    year: "Antique — circa 1880s",
    dimensions: "6.2 × 4.4 m",
    knots: "Estimated 28,000,000",
    material: "Period kork wool, original vegetable dyes",
    description:
      "An authenticated antique Tabriz carpet of the late Qajar period, originally commissioned for a European aristocratic collection. The central medallion depicts the legendary Simurgh bird over a field of angular palmettes. Natural age has deepened the crimson field to a spectacular burgundy. Accompanied by full provenance documentation.",
    price: "$420,000",
    cert: "GHN-ANT-1884-003",
    img: "https://images.unsplash.com/photo-1652634213812-f0deeb1de78e?w=800&h=1100&fit=crop&auto=format",
  },
];

export function Masterworks() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="bg-[#FAF8F3] py-32 lg:py-40">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="mb-20">
          <motion.p
            className="font-['Jost'] text-[10px] tracking-[0.4em] uppercase text-[#B8935A] mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            ◆ Masterworks
          </motion.p>
          <motion.div
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 1 }}
          >
            <h2 className="font-['Playfair_Display'] text-[clamp(36px,4vw,64px)] leading-[1.1] text-[#1A1108]">
              Signature pieces<br />
              <span className="italic text-[#B8935A]">of rare distinction.</span>
            </h2>
            <p className="font-['Jost'] text-[13px] text-[#7A6E5F] max-w-xs leading-relaxed">
              A curated selection of exceptional pieces available for private acquisition. Each work represents the absolute pinnacle of Persian carpet making.
            </p>
          </motion.div>
        </div>

        {/* Pieces */}
        <div className="flex flex-col gap-0 divide-y divide-[rgba(26,17,8,0.08)]">
          {pieces.map((piece, i) => (
            <motion.div
              key={piece.id}
              className="group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Collapsed row */}
              <button
                className="w-full text-left py-8 flex items-start gap-6 lg:gap-12 hover:bg-[#F3EDE2]/50 transition-colors duration-300 px-2"
                onClick={() => setActive(active === piece.id ? null : piece.id)}
                aria-expanded={active === piece.id}
              >
                <div className="flex-shrink-0 w-16 lg:w-20">
                  <div className="overflow-hidden" style={{ aspectRatio: "3/4" }}>
                    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }} className="w-full h-full">
                      <ImageWithFallback
                        src={piece.img}
                        alt={piece.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </div>
                </div>

                <div className="flex-1 min-w-0 pt-1">
                  <div className="flex flex-col lg:flex-row lg:items-baseline justify-between gap-2 mb-2">
                    <h3 className="font-['Playfair_Display'] text-[clamp(20px,2.2vw,32px)] text-[#1A1108] group-hover:text-[#B8935A] transition-colors duration-300">
                      {piece.name}
                    </h3>
                    <span className="font-['Playfair_Display'] text-[clamp(18px,2vw,28px)] text-[#B8935A] flex-shrink-0">
                      {piece.price}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-4 mb-1">
                    <span className="font-['Jost'] text-[11px] tracking-[0.2em] uppercase text-[#7A6E5F]">
                      {piece.origin}
                    </span>
                    <span className="text-[#7A6E5F] opacity-40">·</span>
                    <span className="font-['Jost'] text-[11px] tracking-[0.2em] uppercase text-[#7A6E5F]">
                      {piece.dimensions}
                    </span>
                  </div>
                  <p className="font-['Jost'] text-[12px] text-[#7A6E5F]">{piece.year}</p>
                </div>

                {/* Expand icon */}
                <div className="flex-shrink-0 pt-2">
                  <motion.div
                    className="w-8 h-8 border border-[rgba(26,17,8,0.15)] flex items-center justify-center"
                    animate={{ rotate: active === piece.id ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <line x1="6" y1="0" x2="6" y2="12" stroke="#1A1108" strokeWidth="1" />
                      <line x1="0" y1="6" x2="12" y2="6" stroke="#1A1108" strokeWidth="1" />
                    </svg>
                  </motion.div>
                </div>
              </button>

              {/* Expanded detail */}
              <motion.div
                className="overflow-hidden"
                initial={false}
                animate={{
                  height: active === piece.id ? "auto" : 0,
                  opacity: active === piece.id ? 1 : 0,
                }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="pl-[calc(4rem+1.5rem)] lg:pl-[calc(5rem+3rem)] pb-12 pr-16">
                  <div className="grid lg:grid-cols-3 gap-10">
                    <div className="lg:col-span-2">
                      <p className="font-['Jost'] text-[14px] leading-[1.9] text-[#7A6E5F] mb-8">
                        {piece.description}
                      </p>
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        {[
                          ["Material", piece.material],
                          ["Knots", piece.knots],
                          ["Certificate", piece.cert],
                          ["Status", "Available for Private Acquisition"],
                        ].map(([label, value]) => (
                          <div key={label} className="border-t border-[rgba(26,17,8,0.08)] pt-4">
                            <p className="font-['Jost'] text-[10px] tracking-[0.3em] uppercase text-[#7A6E5F] mb-1">
                              {label}
                            </p>
                            <p className="font-['Jost'] text-[12px] text-[#1A1108]">{value}</p>
                          </div>
                        ))}
                      </div>
                      <a
                        href="#consultation"
                        className="inline-block font-['Jost'] text-[11px] tracking-[0.25em] uppercase px-8 py-4 bg-[#1A1108] text-[#FAF8F3] hover:bg-[#B8935A] transition-colors duration-400"
                      >
                        Arrange Private Viewing
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
