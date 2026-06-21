import { useState } from "react";
import { motion } from "motion/react";

export function Consultation() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="consultation"
      className="bg-[#1A1108] py-32 lg:py-40 relative overflow-hidden"
    >
      {/* Geometric ornament background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <svg width="100%" height="100%" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="persian-cta" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <polygon points="100,0 200,100 100,200 0,100" fill="none" stroke="#B8935A" strokeWidth="0.8" />
              <circle cx="100" cy="100" r="50" fill="none" stroke="#B8935A" strokeWidth="0.5" />
              <rect x="50" y="50" width="100" height="100" fill="none" stroke="#B8935A" strokeWidth="0.3" transform="rotate(45 100 100)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#persian-cta)" />
        </svg>
      </div>

      {/* Gold accent line top */}
      <div className="absolute top-0 left-16 right-16 h-px bg-gradient-to-r from-transparent via-[#B8935A]/60 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32">
          {/* Left */}
          <div>
            <motion.p
              className="font-['Jost'] text-[10px] tracking-[0.4em] uppercase text-[#B8935A] mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              ◆ Uzbekistan Concierge
            </motion.p>
            <motion.h2
              className="font-['Playfair_Display'] text-[clamp(36px,4vw,64px)] leading-[1.1] text-[#FAF8F3] mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 1 }}
            >
              Begin your
              <br />
              <span className="italic text-[#B8935A]">Uzbekistan viewing.</span>
            </motion.h2>
            <motion.p
              className="font-['Jost'] text-[14px] leading-[1.9] text-[#FAF8F3]/55 mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Our Uzbekistan team will help you choose a silk or wool-silk carpet for your home, villa, office, hotel, or design project. Send measurements, room photos, or inspiration — we will prepare a focused private catalogue.
            </motion.p>

            <motion.div
              className="flex flex-col gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {[
                ["Tashkent private appointment", "Curated viewings by request"],
                ["Telegram and Instagram catalogue", "Fast remote selection for Uzbekistan"],
                ["Home and villa preview", "Selected pieces matched to your interior"],
                ["Hotels, offices, designers", "Dedicated project coordination"],
              ].map(([service, note]) => (
                <div key={service} className="flex items-start gap-4 border-t border-[rgba(250,248,243,0.07)] pt-5">
                  <div className="w-1 h-1 rounded-full bg-[#B8935A] mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-['Jost'] text-[13px] text-[#FAF8F3]/80 mb-0.5">{service}</p>
                    <p className="font-['Jost'] text-[11px] text-[#FAF8F3]/35">{note}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            {submitted ? (
              <div className="h-full flex flex-col justify-center">
                <div className="text-center py-20">
                  <div className="w-14 h-14 border border-[#B8935A] flex items-center justify-center mx-auto mb-8">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <polyline points="4,12 9,17 20,6" stroke="#B8935A" strokeWidth="1.5" fill="none" />
                    </svg>
                  </div>
                  <h3 className="font-['Playfair_Display'] text-[28px] text-[#FAF8F3] mb-4">
                    Thank You
                  </h3>
                  <p className="font-['Jost'] text-[13px] text-[#FAF8F3]/50 leading-relaxed max-w-sm mx-auto">
                    Your enquiry has been received. A Ghanbarinia acquisition advisor will contact you within 24 hours.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="font-['Jost'] text-[10px] tracking-[0.3em] uppercase text-[#FAF8F3]/40">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                      className="bg-transparent border-b border-[rgba(250,248,243,0.15)] pb-3 text-[#FAF8F3] font-['Jost'] text-[14px] focus:outline-none focus:border-[#B8935A] transition-colors duration-300 placeholder:text-[#FAF8F3]/20"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-['Jost'] text-[10px] tracking-[0.3em] uppercase text-[#FAF8F3]/40">
                      Email
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                      className="bg-transparent border-b border-[rgba(250,248,243,0.15)] pb-3 text-[#FAF8F3] font-['Jost'] text-[14px] focus:outline-none focus:border-[#B8935A] transition-colors duration-300 placeholder:text-[#FAF8F3]/20"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-['Jost'] text-[10px] tracking-[0.3em] uppercase text-[#FAF8F3]/40">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="bg-transparent border-b border-[rgba(250,248,243,0.15)] pb-3 text-[#FAF8F3] font-['Jost'] text-[14px] focus:outline-none focus:border-[#B8935A] transition-colors duration-300 placeholder:text-[#FAF8F3]/20"
                    placeholder="+998 90 000 00 00"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-['Jost'] text-[10px] tracking-[0.3em] uppercase text-[#FAF8F3]/40">
                    Interest
                  </label>
                  <select
                    value={form.interest}
                    onChange={(e) => setForm({ ...form, interest: e.target.value })}
                    className="bg-[#1A1108] border-b border-[rgba(250,248,243,0.15)] pb-3 text-[#FAF8F3]/70 font-['Jost'] text-[14px] focus:outline-none focus:border-[#B8935A] transition-colors duration-300 cursor-pointer"
                  >
                    <option value="">Select a collection</option>
                    <option value="tabriz">Tabriz Collection</option>
                    <option value="kashan">Kashan Collection</option>
                    <option value="isfahan">Isfahan Collection</option>
                    <option value="qom">Qom Silk Collection</option>
                    <option value="nain">Nain Collection</option>
                    <option value="masterworks">Masterworks & Antiques</option>
                    <option value="bespoke">Bespoke Commission</option>
                    <option value="general">General Enquiry</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-['Jost'] text-[10px] tracking-[0.3em] uppercase text-[#FAF8F3]/40">
                    Message (optional)
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={3}
                    className="bg-transparent border-b border-[rgba(250,248,243,0.15)] pb-3 text-[#FAF8F3] font-['Jost'] text-[14px] focus:outline-none focus:border-[#B8935A] transition-colors duration-300 resize-none placeholder:text-[#FAF8F3]/20"
                    placeholder="City, room size, preferred colours, silk/wool, and budget..."
                  />
                </div>

                <div className="mt-4">
                  <motion.button
                    type="submit"
                    className="w-full font-['Jost'] text-[11px] tracking-[0.3em] uppercase py-5 bg-[#B8935A] text-[#FAF8F3] hover:bg-[#FAF8F3] hover:text-[#1A1108] transition-all duration-500"
                    whileHover={{ letterSpacing: "0.4em" }}
                    transition={{ duration: 0.3 }}
                  >
                    Request Uzbekistan Catalogue
                  </motion.button>
                  <p className="font-['Jost'] text-[10px] text-[#FAF8F3]/25 text-center mt-4">
                    You can also write directly: @ghanbariniauzbekistan
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* Gold accent line bottom */}
      <div className="absolute bottom-0 left-16 right-16 h-px bg-gradient-to-r from-transparent via-[#B8935A]/60 to-transparent" />
    </section>
  );
}
