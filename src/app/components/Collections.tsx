import { useState } from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Collection {
  id: string;
  name: string;
  origin: string;
  era: string;
  description: string;
  knots: string;
  material: string;
  priceRange: string;
  img: string;
}

const collections: Collection[] = [
  {
    id: "tabriz",
    name: "Tabriz",
    origin: "East Azerbaijan, Iran",
    era: "16th–21st century",
    description: "Medallion compositions of imperial precision",
    knots: "Up to 1,000,000 KPSI",
    material: "Merino wool & silk",
    priceRange: "$85,000 – $950,000",
    img: "https://images.unsplash.com/photo-1588421874990-1fe162747f9b?w=800&h=1000&fit=crop&auto=format",
  },
  {
    id: "kashan",
    name: "Kashan",
    origin: "Isfahan Province, Iran",
    era: "Safavid era – present",
    description: "Floral arabesque of unmatched intricacy",
    knots: "700–900 KPSI",
    material: "Kork wool & silk inlay",
    priceRange: "$120,000 – $1,200,000",
    img: "https://images.unsplash.com/photo-1572123979839-3749e9973aba?w=800&h=1000&fit=crop&auto=format",
  },
  {
    id: "isfahan",
    name: "Isfahan",
    origin: "Isfahan, Iran",
    era: "Shah Abbas era – present",
    description: "Garden motifs and spiritual arabesques",
    knots: "600–800 KPSI",
    material: "Kork wool & silk highlights",
    priceRange: "$95,000 – $800,000",
    img: "https://images.unsplash.com/photo-1737820254876-c22049f67714?w=800&h=1000&fit=crop&auto=format",
  },
  {
    id: "qom",
    name: "Qom Silk",
    origin: "Qom, Central Iran",
    era: "20th century – present",
    description: "Pure silk masterworks of transcendent beauty",
    knots: "1,000–1,400 KPSI",
    material: "100% pure Iranian silk",
    priceRange: "$250,000 – $1,500,000",
    img: "https://images.unsplash.com/photo-1693332559291-380f10cd2253?w=800&h=1000&fit=crop&auto=format",
  },
  {
    id: "nain",
    name: "Nain",
    origin: "Isfahan Province, Iran",
    era: "Post-WWII – present",
    description: "Ivory grounds with indigo medallions",
    knots: "500–700 KPSI",
    material: "Fine wool & silk highlights",
    priceRange: "$65,000 – $600,000",
    img: "https://images.unsplash.com/photo-1619444978283-cccfb92c357d?w=800&h=1000&fit=crop&auto=format",
  },
  {
    id: "tribal",
    name: "Tribal & Nomadic",
    origin: "Various regions, Iran",
    era: "Timeless tradition",
    description: "Raw authenticity of nomadic weaving",
    knots: "80–250 KPSI",
    material: "Natural hand-spun wool",
    priceRange: "$10,000 – $280,000",
    img: "https://images.unsplash.com/photo-1634442747349-3a969d4432df?w=800&h=1000&fit=crop&auto=format",
  },
];

function CollectionCard({ item, index }: { item: Collection; index: number }) {
  const [hovered, setHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      className="group relative cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      style={{ transformPerspective: 1000 }}
      animate={{
        rotateX: tilt.x,
        rotateY: tilt.y,
        scale: hovered ? 1.02 : 1,
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image container */}
      <div className="relative overflow-hidden mb-6" style={{ aspectRatio: "3/4" }}>
        <motion.div
          className="w-full h-full"
          animate={{ scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <ImageWithFallback
            src={item.img}
            alt={`${item.name} Persian carpet`}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-[#1A1108]/50 flex items-end p-6"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div>
            <p className="font-['Jost'] text-[10px] tracking-[0.3em] uppercase text-[#B8935A] mb-2">
              {item.material}
            </p>
            <p className="font-['Jost'] text-[11px] tracking-[0.2em] uppercase text-[#FAF8F3]/70">
              {item.knots}
            </p>
          </div>
        </motion.div>

        {/* Corner accent */}
        <div className="absolute top-4 right-4">
          <div className="w-6 h-6 border-t border-r border-[#B8935A]/60" />
        </div>
        <div className="absolute bottom-4 left-4">
          <div className="w-6 h-6 border-b border-l border-[#B8935A]/60" />
        </div>
      </div>

      {/* Text info */}
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-['Playfair_Display'] text-[22px] text-[#1A1108] mb-1 group-hover:text-[#B8935A] transition-colors duration-300">
            {item.name}
          </h3>
          <p className="font-['Jost'] text-[11px] tracking-[0.2em] uppercase text-[#7A6E5F]">
            {item.origin}
          </p>
        </div>
        <div className="text-right">
          <p className="font-['Jost'] text-[10px] tracking-[0.2em] uppercase text-[#7A6E5F] mb-1">
            Collection
          </p>
          <p className="font-['Playfair_Display'] text-[14px] text-[#B8935A]">
            {item.priceRange}
          </p>
        </div>
      </div>

      <p className="font-['Jost'] text-[13px] text-[#7A6E5F] mt-3 leading-relaxed">
        {item.description}
      </p>
    </motion.div>
  );
}

export function Collections() {
  return (
    <section
      id="collections"
      className="bg-[#FAF8F3] py-32 lg:py-40"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div>
            <motion.p
              className="font-['Jost'] text-[10px] tracking-[0.4em] uppercase text-[#B8935A] mb-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              ◆ The Collections
            </motion.p>
            <motion.h2
              className="font-['Playfair_Display'] text-[clamp(36px,4vw,64px)] leading-[1.1] text-[#1A1108]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 1 }}
            >
              Six traditions.<br />
              <span className="italic text-[#B8935A]">One standard of excellence.</span>
            </motion.h2>
          </div>

          <motion.p
            className="font-['Jost'] text-[14px] leading-[1.8] text-[#7A6E5F] max-w-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Each collection represents a distinct weaving tradition from Iran's greatest carpet-producing cities. Every piece is authenticated and carries the Ghanbarinia certificate of provenance.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {collections.map((item, i) => (
            <CollectionCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-['Jost'] text-[13px] text-[#7A6E5F] mb-6">
            Currently presenting over 2,400 authenticated pieces across our 30+ showrooms
          </p>
          <a
            href="#consultation"
            className="inline-block font-['Jost'] text-[11px] tracking-[0.25em] uppercase px-10 py-4 border border-[#1A1108] text-[#1A1108] hover:bg-[#1A1108] hover:text-[#FAF8F3] transition-all duration-500"
          >
            Request Private Catalogue
          </a>
        </motion.div>
      </div>
    </section>
  );
}
