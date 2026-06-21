import { useState } from "react";
import { motion } from "motion/react";

const regions = [
  {
    name: "Europe",
    cities: [
      { city: "Paris", address: "Avenue Montaigne, 8ème" },
      { city: "London", address: "Mayfair, Grosvenor Square" },
      { city: "Milan", address: "Via Montenapoleone" },
      { city: "Geneva", address: "Rue du Rhône" },
      { city: "Zurich", address: "Bahnhofstrasse" },
      { city: "Vienna", address: "Kärntner Ring" },
      { city: "Monaco", address: "Avenue Princesse Grace" },
      { city: "Amsterdam", address: "P.C. Hooftstraat" },
      { city: "Frankfurt", address: "Goethestraße" },
    ],
  },
  {
    name: "Middle East",
    cities: [
      { city: "Dubai", address: "DIFC — Gate Village" },
      { city: "Abu Dhabi", address: "Al Maryah Island" },
      { city: "Riyadh", address: "Kingdom Centre" },
      { city: "Kuwait City", address: "Salhiya District" },
      { city: "Doha", address: "Pearl-Qatar" },
      { city: "Beirut", address: "Verdun District" },
      { city: "Istanbul", address: "Nişantaşı" },
    ],
  },
  {
    name: "The Americas",
    cities: [
      { city: "New York", address: "Upper East Side, 5th Avenue" },
      { city: "Beverly Hills", address: "N. Rodeo Drive" },
      { city: "Miami", address: "Brickell City Centre" },
      { city: "Toronto", address: "Yorkville Avenue" },
    ],
  },
  {
    name: "Asia-Pacific",
    cities: [
      { city: "Tokyo", address: "Minami-Aoyama, Minato" },
      { city: "Singapore", address: "Orchard Road" },
      { city: "Hong Kong", address: "Central — Landmark" },
      { city: "Shanghai", address: "Jing'an District" },
      { city: "Seoul", address: "Cheongdam-dong" },
      { city: "Sydney", address: "Double Bay" },
    ],
  },
];

export function Showrooms() {
  const [activeRegion, setActiveRegion] = useState("Europe");

  const currentCities = regions.find((r) => r.name === activeRegion)?.cities || [];

  return (
    <section id="showrooms" className="bg-[#EDE5D5] py-32 lg:py-40">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="mb-16">
          <motion.p
            className="font-['Jost'] text-[10px] tracking-[0.4em] uppercase text-[#B8935A] mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            ◆ Global Presence
          </motion.p>
          <motion.div
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 1 }}
          >
            <h2 className="font-['Playfair_Display'] text-[clamp(36px,4vw,64px)] leading-[1.1] text-[#1A1108]">
              30+ showrooms.<br />
              <span className="italic text-[#B8935A]">One world of luxury.</span>
            </h2>
            <p className="font-['Jost'] text-[13px] text-[#7A6E5F] max-w-xs leading-relaxed">
              From the 8th arrondissement of Paris to the heart of Tokyo's Minami-Aoyama, every Ghanbarinia showroom is designed to provide an intimate, private acquisition experience.
            </p>
          </motion.div>
        </div>

        {/* Region tabs */}
        <div className="flex gap-0 border-b border-[rgba(26,17,8,0.12)] mb-12">
          {regions.map((region) => (
            <button
              key={region.name}
              className={`font-['Jost'] text-[11px] tracking-[0.2em] uppercase px-6 py-4 border-b-[1.5px] transition-all duration-300 ${
                activeRegion === region.name
                  ? "border-[#B8935A] text-[#B8935A]"
                  : "border-transparent text-[#7A6E5F] hover:text-[#1A1108]"
              }`}
              onClick={() => setActiveRegion(region.name)}
            >
              {region.name}
            </button>
          ))}
        </div>

        {/* City grid */}
        <motion.div
          key={activeRegion}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 divide-y divide-[rgba(26,17,8,0.08)]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {currentCities.map((location, i) => (
            <motion.div
              key={location.city}
              className="py-8 px-4 hover:bg-[#FAF8F3]/40 transition-colors duration-300 group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-['Playfair_Display'] text-[20px] text-[#1A1108] group-hover:text-[#B8935A] transition-colors duration-300 mb-1">
                    {location.city}
                  </h4>
                  <p className="font-['Jost'] text-[11px] tracking-[0.15em] uppercase text-[#7A6E5F]">
                    {location.address}
                  </p>
                </div>
                <motion.div
                  className="mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{}}
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <line x1="0" y1="9" x2="16" y2="9" stroke="#B8935A" strokeWidth="1" />
                    <polyline points="10,3 16,9 10,15" stroke="#B8935A" strokeWidth="1" fill="none" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.div
          className="mt-16 pt-10 border-t border-[rgba(26,17,8,0.12)] flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <p className="font-['Jost'] text-[12px] tracking-[0.15em] text-[#7A6E5F] mb-1">
              Private viewing by appointment only
            </p>
            <p className="font-['Jost'] text-[12px] text-[#7A6E5F]">
              Our advisors speak Arabic, English, French, German, Italian, Japanese, Mandarin, Persian, and Russian
            </p>
          </div>
          <a
            href="#consultation"
            className="font-['Jost'] text-[11px] tracking-[0.25em] uppercase px-8 py-4 border border-[#1A1108] text-[#1A1108] hover:bg-[#1A1108] hover:text-[#FAF8F3] transition-all duration-500 flex-shrink-0"
          >
            Book a Viewing
          </a>
        </motion.div>
      </div>
    </section>
  );
}
