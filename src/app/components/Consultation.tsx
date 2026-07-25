import { useState } from "react";
import { motion } from "motion/react";
import { useCopy } from "../../i18n/LanguageProvider";
import { CONTACTS } from "../../i18n/dictionary";

const FIELD_CLASS =
  "border-b border-[rgba(250,248,243,0.15)] bg-transparent pb-3 font-['Jost'] text-[15px] text-[#FAF8F3] transition-colors duration-300 placeholder:text-[#FAF8F3]/25 focus:border-[#B8935A] focus:outline-none";

const LABEL_CLASS =
  "font-['Jost'] text-[10px] uppercase tracking-[0.28em] text-[#FAF8F3]/45";

export function Consultation() {
  const t = useCopy();
  const [form, setForm] = useState({ name: "", phone: "", interest: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: deliver the enquiry to Telegram — until then nothing is sent.
    setSubmitted(true);
  };

  return (
    <section
      id="consultation"
      className="relative overflow-hidden bg-[#1A1108] py-20 lg:py-40"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <svg width="100%" height="100%" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <defs>
            <pattern id="persian-cta" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <polygon points="100,0 200,100 100,200 0,100" fill="none" stroke="#B8935A" strokeWidth="0.8" />
              <circle cx="100" cy="100" r="50" fill="none" stroke="#B8935A" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#persian-cta)" />
        </svg>
      </div>

      <div className="absolute left-6 right-6 top-0 h-px bg-gradient-to-r from-transparent via-[#B8935A]/60 to-transparent lg:left-16 lg:right-16" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-32">
          <div>
            <motion.p
              className="mb-5 font-['Jost'] text-[10px] uppercase tracking-[0.4em] text-[#B8935A]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {t.consultation.label}
            </motion.p>
            <motion.h2
              className="mb-7 font-['Playfair_Display'] text-[clamp(32px,4vw,64px)] leading-[1.1] text-[#FAF8F3]"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.9 }}
            >
              {t.consultation.titleLine1}
              <br />
              <span className="italic text-[#B8935A]">{t.consultation.titleLine2}</span>
            </motion.h2>
            <motion.p
              className="mb-10 font-['Jost'] text-[14px] leading-[1.85] text-[#FAF8F3]/60 lg:mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {t.consultation.intro}
            </motion.p>

            <motion.dl
              className="flex flex-col gap-5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {[
                [t.showroom.addressLabel, t.showroom.address],
                [t.showroom.hoursLabel, t.showroom.hours],
                [t.showroom.phoneLabel, CONTACTS.phone],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="border-t border-[rgba(250,248,243,0.08)] pt-4"
                >
                  <dt className="mb-1 font-['Jost'] text-[10px] uppercase tracking-[0.28em] text-[#FAF8F3]/35">
                    {label}
                  </dt>
                  <dd className="font-['Jost'] text-[14px] text-[#FAF8F3]/85">{value}</dd>
                </div>
              ))}
            </motion.dl>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {submitted ? (
              <div className="flex h-full flex-col justify-center py-16 text-center">
                <div className="mx-auto mb-7 flex h-14 w-14 items-center justify-center border border-[#B8935A]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <polyline points="4,12 9,17 20,6" stroke="#B8935A" strokeWidth="1.5" fill="none" />
                  </svg>
                </div>
                <h3 className="mb-4 font-['Playfair_Display'] text-[28px] text-[#FAF8F3]">
                  {t.consultation.thanksTitle}
                </h3>
                <p className="mx-auto mb-8 max-w-sm font-['Jost'] text-[14px] leading-relaxed text-[#FAF8F3]/55">
                  {t.consultation.thanksText}
                </p>
                <a
                  href={CONTACTS.telegramHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mx-auto border border-[#B8935A] px-8 py-4 font-['Jost'] text-[11px] uppercase tracking-[0.22em] text-[#B8935A] transition-colors duration-300 hover:bg-[#B8935A] hover:text-[#1A1108]"
                >
                  {CONTACTS.telegram}
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="cf-name" className={LABEL_CLASS}>
                    {t.consultation.name}
                  </label>
                  <input
                    id="cf-name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className={FIELD_CLASS}
                    placeholder={t.consultation.namePlaceholder}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="cf-phone" className={LABEL_CLASS}>
                    {t.consultation.phone}
                  </label>
                  <input
                    id="cf-phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    required
                    className={FIELD_CLASS}
                    placeholder={t.consultation.phonePlaceholder}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="cf-interest" className={LABEL_CLASS}>
                    {t.consultation.interest}
                  </label>
                  <select
                    id="cf-interest"
                    value={form.interest}
                    onChange={(e) => setForm({ ...form, interest: e.target.value })}
                    className={`${FIELD_CLASS} cursor-pointer bg-[#1A1108]`}
                  >
                    <option value="">{t.consultation.interestPlaceholder}</option>
                    {t.collections.items.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                    <option value="other">{t.consultation.interestOther}</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="cf-message" className={LABEL_CLASS}>
                    {t.consultation.message}
                  </label>
                  <textarea
                    id="cf-message"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={3}
                    className={`${FIELD_CLASS} resize-none`}
                    placeholder={t.consultation.messagePlaceholder}
                  />
                </div>

                <div className="mt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#B8935A] py-5 font-['Jost'] text-[11px] uppercase tracking-[0.28em] text-[#FAF8F3] transition-colors duration-500 hover:bg-[#FAF8F3] hover:text-[#1A1108]"
                  >
                    {t.consultation.submit}
                  </button>
                  <p className="mt-4 text-center font-['Jost'] text-[11px] text-[#FAF8F3]/35">
                    {t.consultation.orWrite}{" "}
                    <a
                      href={CONTACTS.telegramHref}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#B8935A] underline-offset-4 hover:underline"
                    >
                      {CONTACTS.telegram}
                    </a>
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#B8935A]/60 to-transparent lg:left-16 lg:right-16" />
    </section>
  );
}
