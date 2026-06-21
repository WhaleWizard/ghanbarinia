import { motion } from "motion/react";

const pillars = [
  {
    title: "Museum calm",
    text: "Long pauses, dark lacquered panels, restrained gold accents and generous negative space make every carpet feel like an acquisition room, not a catalogue tile.",
  },
  {
    title: "School-led discovery",
    text: "Tabriz, Kashan, Isfahan, Qom, Nain and tribal weaving are staged as chapters with origin, fibre, knot density and collector positioning at a glance.",
  },
  {
    title: "Open-source imagery",
    text: "The current prototype uses permissive Unsplash-hosted textile and interior photography while final inventory images can be swapped into the same data structure.",
  },
];

const sources = [
  "Ghanbarinia / Heritage Carpet public social profiles: Est. 1841, handmade Persian carpets, natural fibres and 84 galleries.",
  "DOMOTEX Middle East interviews with Amir Ghanbarinia: Heritage Carpet Collection positioning and carpet-museum storytelling.",
  "Gulf News coverage of the Culture of Woven Treasures exhibition: educational museum format for preserved handwoven Persian carpets.",
  "Regional rug-school references: Tabriz, Kashan, Isfahan, Qom silk, Nain and nomadic weaving traditions.",
];

export function DesignDirection() {
  return (
    <section id="direction" className="relative overflow-hidden bg-[#120D07] py-28 lg:py-36 text-[#FAF8F3]">
      <div className="absolute inset-0 opacity-[0.06]">
        <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,#B8935A_0,transparent_26%),radial-gradient(circle_at_80%_10%,#8B3A3A_0,transparent_22%),linear-gradient(135deg,transparent_0_48%,#B8935A_49%_51%,transparent_52%)]" />
      </div>
      <div className="relative mx-auto grid max-w-[1440px] gap-14 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-16">
        <div>
          <motion.p
            className="mb-5 font-['Jost'] text-[10px] uppercase tracking-[0.4em] text-[#B8935A]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            ◆ Creative Strategy
          </motion.p>
          <motion.h2
            className="font-['Playfair_Display'] text-[clamp(38px,5vw,76px)] leading-[1.02]"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.9 }}
          >
            Luxury with proof,
            <span className="block italic text-[#B8935A]">not noise.</span>
          </motion.h2>
        </div>

        <div className="space-y-10">
          <div className="grid gap-5 md:grid-cols-3">
            {pillars.map((pillar, index) => (
              <motion.article
                key={pillar.title}
                className="border border-[#FAF8F3]/10 bg-[#FAF8F3]/[0.035] p-6 backdrop-blur-sm"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.75 }}
              >
                <h3 className="mb-4 font-['Playfair_Display'] text-2xl text-[#B8935A]">{pillar.title}</h3>
                <p className="font-['Jost'] text-[13px] leading-7 text-[#FAF8F3]/62">{pillar.text}</p>
              </motion.article>
            ))}
          </div>

          <div className="border-t border-[#FAF8F3]/10 pt-8">
            <p className="mb-5 font-['Jost'] text-[10px] uppercase tracking-[0.35em] text-[#FAF8F3]/38">
              Research basis used for this prototype
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              {sources.map((source) => (
                <p key={source} className="font-['Jost'] text-[12px] leading-6 text-[#FAF8F3]/55">
                  <span className="text-[#B8935A]">—</span> {source}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
