import { motion } from "motion/react";
import { useCopy } from "../../i18n/LanguageProvider";
import { REVIEWS } from "../../data/reviews";

/**
 * Sources for the four entries, in the same order as `trust.items`.
 * Every claim on this section is one a visitor can go and check — which is
 * the only kind of social proof worth putting on a site selling carpets at
 * these prices.
 */
const SOURCES = [
  "https://www.khaleejtimes.com/uae/dubai-rare-dh10-million-carpets-used-by-kings-on-display-at-burj-al-arab",
  "https://www.khaleejtimes.com/uae/dubai-rare-antique-carpets-worth-up-to-dh25-million-used-by-kings-on-display-at-atlantis-the-roya",
  "https://heritagecarpets.ae/gallery/",
  "https://www.thenationalnews.com/weekend/2022/02/25/dubai-carpet-sellers-tell-thousands-of-years-of-history-in-their-shops/",
];

export function Trust() {
  const t = useCopy();

  return (
    <section id="trust" className="bg-[#F3EDE2] py-20 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
        <motion.p
          className="mb-5 font-['Jost'] text-[10px] uppercase tracking-[0.4em] text-[#B8935A]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t.trust.label}
        </motion.p>

        <motion.div
          className="mb-12 flex flex-col justify-between gap-8 lg:mb-16 lg:flex-row lg:items-end"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.9 }}
        >
          <h2 className="font-['Playfair_Display'] text-[clamp(32px,4vw,64px)] leading-[1.1] text-[#1A1108]">
            {t.trust.titleLine1}
            <br />
            <span className="italic text-[#B8935A]">{t.trust.titleLine2}</span>
          </h2>
          <p className="max-w-sm font-['Jost'] text-[14px] leading-[1.8] text-[#7A6E5F]">
            {t.trust.intro}
          </p>
        </motion.div>

        <div className="grid gap-px bg-[rgba(26,17,8,0.12)] md:grid-cols-2 lg:grid-cols-4">
          {t.trust.items.map((item, i) => (
            <motion.article
              key={item.title}
              className="flex flex-col bg-[#F3EDE2] p-6 lg:p-7"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.6 }}
            >
              <p className="mb-1 font-['Jost'] text-[10px] uppercase tracking-[0.28em] text-[#B8935A]">
                {item.meta}
              </p>
              <h3 className="mb-4 font-['Playfair_Display'] text-[22px] leading-tight text-[#1A1108]">
                {item.title}
              </h3>
              <p className="mb-6 flex-1 font-['Jost'] text-[13px] leading-[1.75] text-[#7A6E5F]">
                {item.text}
              </p>
              <a
                href={SOURCES[i]}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 font-['Jost'] text-[10px] uppercase tracking-[0.2em] text-[#1A1108] underline-offset-4 transition-colors duration-300 hover:text-[#B8935A] hover:underline"
              >
                {t.trust.source}
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </motion.article>
          ))}
        </div>

        {/* Renders only once there are real reviews in src/data/reviews.ts */}
        {REVIEWS.length > 0 && (
          <div className="mt-16 lg:mt-20">
            <p className="mb-8 font-['Jost'] text-[10px] uppercase tracking-[0.3em] text-[#B8935A]">
              {t.trust.reviewsTitle}
            </p>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {REVIEWS.map((review) => (
                <motion.blockquote
                  key={review.name + review.text.slice(0, 24)}
                  className="border-t border-[rgba(26,17,8,0.14)] pt-5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <p className="mb-4 font-['Playfair_Display'] text-[17px] italic leading-[1.6] text-[#1A1108]">
                    {review.text}
                  </p>
                  <footer className="font-['Jost'] text-[11px] uppercase tracking-[0.18em] text-[#7A6E5F]">
                    {review.name}
                    {review.context && <span className="opacity-70"> · {review.context}</span>}
                  </footer>
                </motion.blockquote>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
