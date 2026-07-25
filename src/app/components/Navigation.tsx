import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../../i18n/LanguageProvider";
import { CONTACTS, languages } from "../../i18n/dictionary";

export function Navigation() {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: t.nav.heritage, href: "#heritage" },
    { label: t.nav.schools, href: "#schools" },
    { label: t.nav.collections, href: "#collections" },
    { label: t.nav.craft, href: "#craftsmanship" },
    { label: t.nav.showroom, href: "#showroom" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Stop the page behind the full-screen menu from scrolling.
  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  const onDark = !scrolled && !menuOpen;
  // The hamburger sits on a dark photo until the header turns opaque.
  const burgerColor = onDark ? "bg-[#FAF8F3]" : "bg-[#1A1108]";

  const LanguageSwitch = ({ compact = false }: { compact?: boolean }) => (
    <div className={`flex items-center gap-1 ${compact ? "" : "mr-1"}`}>
      {languages.map((code, i) => (
        <span key={code} className="flex items-center gap-1">
          {i > 0 && <span className={onDark ? "text-[#FAF8F3]/25" : "text-[#1A1108]/25"}>/</span>}
          <button
            type="button"
            onClick={() => setLanguage(code)}
            aria-pressed={language === code}
            className={`font-['Jost'] text-[11px] uppercase tracking-[0.18em] transition-colors duration-300 ${
              language === code
                ? "text-[#B8935A]"
                : onDark
                  ? "text-[#FAF8F3]/60 hover:text-[#FAF8F3]"
                  : "text-[#1A1108]/50 hover:text-[#1A1108]"
            }`}
          >
            {code}
          </button>
        </span>
      ))}
    </div>
  );

  return (
    <>
      <motion.nav
        className={`fixed left-0 right-0 top-0 z-50 transition-colors duration-500 ${
          scrolled ? "border-b border-[rgba(26,17,8,0.08)] bg-[#FAF8F3]/96 backdrop-blur-md" : ""
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 lg:px-16">
          {/* Italic, matching the second line of every heading. Gold was too
              low-contrast against the cream header, so on light it goes back
              to near-black and keeps gold for the hover only. */}
          <a
            href="#top"
            className={`font-['Playfair_Display'] text-lg italic tracking-[0.12em] transition-colors duration-500 lg:text-xl lg:tracking-[0.14em] ${
              onDark
                ? "text-[#FAF8F3] drop-shadow hover:text-[#E0BC75]"
                : "text-[#1A1108] hover:text-[#B8935A]"
            }`}
          >
            GHANBARINIA
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`font-['Jost'] text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 hover:text-[#B8935A] ${
                  onDark ? "text-[#FAF8F3]/80" : "text-[#1A1108]/65"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-5 lg:flex">
            <LanguageSwitch />
            <span
              className={`font-['Jost'] text-[10px] uppercase tracking-[0.18em] ${
                onDark
                  ? "text-[#FAF8F3]/85 [text-shadow:0_1px_10px_rgba(0,0,0,0.75)]"
                  : "text-[#7A6E5F]"
              }`}
            >
              {t.nav.appointment}
            </span>
            <a
              href={CONTACTS.telegramHref}
              target="_blank"
              rel="noreferrer"
              className={`premium-button px-6 py-3 font-['Jost'] text-[11px] uppercase tracking-[0.18em] transition-all duration-300 ${
                onDark
                  ? "border border-[#FAF8F3]/50 bg-[#FAF8F3] text-[#1A1108] hover:border-[#B8935A] hover:bg-[#B8935A] hover:text-[#FAF8F3]"
                  : "border border-[#1A1108] text-[#1A1108] hover:bg-[#1A1108] hover:text-[#FAF8F3]"
              }`}
            >
              {t.nav.cta}
            </a>
          </div>

          <div className="flex items-center gap-4 lg:hidden">
            <LanguageSwitch compact />
            <button
              type="button"
              className="-mr-2 p-3"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={menuOpen}
            >
              <span className="flex flex-col gap-[5px]">
                <motion.span
                  className={`block h-px w-6 ${burgerColor}`}
                  animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className={`block h-px w-5 ${burgerColor}`}
                  animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className={`block h-px w-6 ${burgerColor}`}
                  animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </span>
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            /* overflow-y-auto so the menu still works on short screens. */
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 overflow-y-auto bg-[#FAF8F3] px-6 py-24"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
          >
            <div className="mb-2 font-['Playfair_Display'] text-lg italic tracking-[0.12em] text-[#1A1108]">
              GHANBARINIA
            </div>

            {navLinks.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="font-['Playfair_Display'] text-[30px] italic leading-tight text-[#1A1108] transition-colors hover:text-[#B8935A]"
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.35 }}
              >
                {item.label}
              </motion.a>
            ))}

            <motion.a
              href={CONTACTS.telegramHref}
              target="_blank"
              rel="noreferrer"
              className="mt-4 border border-[#1A1108] px-10 py-4 font-['Jost'] text-[11px] uppercase tracking-[0.22em] text-[#1A1108]"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.32, duration: 0.35 }}
            >
              {t.nav.cta}
            </motion.a>

            <a
              href={CONTACTS.phoneHref}
              className="font-['Jost'] text-[13px] tracking-[0.1em] text-[#7A6E5F]"
            >
              {CONTACTS.phone}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
