import { motion } from "motion/react";
import { useCopy } from "../../i18n/LanguageProvider";
import { CONTACTS } from "../../i18n/dictionary";

/**
 * Replaces the old "Showrooms" block, which listed nine Uzbek cities and a
 * dozen invented addresses abroad. There is one showroom, it is in Tashkent,
 * and this section says exactly where it is and when it is open.
 */
export function Showroom() {
  const t = useCopy();

  return (
    <section id="showroom" className="bg-[#EDE5D5] py-20 lg:py-40">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
        <motion.p
          className="mb-5 font-['Jost'] text-[10px] uppercase tracking-[0.4em] text-[#B8935A]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t.showroom.label}
        </motion.p>

        <motion.div
          className="mb-12 flex flex-col justify-between gap-8 lg:mb-16 lg:flex-row lg:items-end"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.9 }}
        >
          <h2 className="font-['Playfair_Display'] text-[clamp(28px,4vw,64px)] leading-[1.1] text-[#1A1108]">
            {t.showroom.titleLine1}
            <br />
            <span className="italic text-[#B8935A]">{t.showroom.titleLine2}</span>
          </h2>
          <p className="max-w-sm font-['Jost'] text-[14px] leading-[1.8] text-[#7A6E5F]">
            {t.showroom.intro}
          </p>
        </motion.div>

        {/* Address, hours and phone — the three things a visitor actually
            came for. They were missing from the site entirely. */}
        <motion.div
          className="grid gap-px border border-[rgba(26,17,8,0.12)] bg-[rgba(26,17,8,0.12)] md:grid-cols-3"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-[#EDE5D5] p-6 lg:p-8">
            <p className="mb-3 font-['Jost'] text-[10px] uppercase tracking-[0.3em] text-[#B8935A]">
              {t.showroom.addressLabel}
            </p>
            <p className="mb-4 font-['Playfair_Display'] text-[20px] leading-snug text-[#1A1108]">
              {t.showroom.address}
            </p>
            <a
              href={CONTACTS.mapHref}
              target="_blank"
              rel="noreferrer"
              className="inline-block py-2 font-['Jost'] text-[11px] uppercase tracking-[0.18em] text-[#7A6E5F] underline-offset-4 transition-colors duration-300 hover:text-[#B8935A] hover:underline"
            >
              {t.showroom.directions}
            </a>
          </div>

          <div className="bg-[#EDE5D5] p-6 lg:p-8">
            <p className="mb-3 font-['Jost'] text-[10px] uppercase tracking-[0.3em] text-[#B8935A]">
              {t.showroom.hoursLabel}
            </p>
            <p className="font-['Playfair_Display'] text-[20px] leading-snug text-[#1A1108]">
              {t.showroom.hours}
            </p>
          </div>

          <div className="bg-[#EDE5D5] p-6 lg:p-8">
            <p className="mb-3 font-['Jost'] text-[10px] uppercase tracking-[0.3em] text-[#B8935A]">
              {t.showroom.phoneLabel}
            </p>
            <a
              href={CONTACTS.phoneHref}
              className="mb-4 block font-['Playfair_Display'] text-[20px] leading-snug text-[#1A1108] transition-colors duration-300 hover:text-[#B8935A]"
            >
              {CONTACTS.phone}
            </a>
            <div className="flex flex-wrap gap-x-5 gap-y-1">
              <a
                href={CONTACTS.telegramHref}
                target="_blank"
                rel="noreferrer"
                className="inline-block py-2 font-['Jost'] text-[11px] uppercase tracking-[0.18em] text-[#7A6E5F] underline-offset-4 transition-colors duration-300 hover:text-[#B8935A] hover:underline"
              >
                Telegram
              </a>
              <a
                href={CONTACTS.instagramHref}
                target="_blank"
                rel="noreferrer"
                className="inline-block py-2 font-['Jost'] text-[11px] uppercase tracking-[0.18em] text-[#7A6E5F] underline-offset-4 transition-colors duration-300 hover:text-[#B8935A] hover:underline"
              >
                Instagram
              </a>
            </div>
          </div>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {t.showroom.services.map(([title, note], i) => (
            <motion.div
              key={title}
              className="border-t border-[rgba(26,17,8,0.12)] pt-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.6 }}
            >
              <p className="mb-2 font-['Playfair_Display'] text-[18px] text-[#1A1108]">
                {title}
              </p>
              <p className="font-['Jost'] text-[13px] leading-relaxed text-[#7A6E5F]">
                {note}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-[rgba(26,17,8,0.12)] pt-8 lg:flex-row lg:items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-['Jost'] text-[13px] leading-relaxed text-[#7A6E5F]">
            {t.showroom.note}
          </p>
          <a
            href={CONTACTS.telegramHref}
            target="_blank"
            rel="noreferrer"
            className="flex-shrink-0 border border-[#1A1108] px-8 py-4 font-['Jost'] text-[11px] uppercase tracking-[0.22em] text-[#1A1108] transition-all duration-500 hover:bg-[#1A1108] hover:text-[#FAF8F3]"
          >
            {t.showroom.contactLabel}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
