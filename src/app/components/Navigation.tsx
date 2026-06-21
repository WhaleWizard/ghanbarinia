import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = ["Collections", "Heritage", "Craftsmanship", "Showrooms"];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-[#FAF8F3]/96 backdrop-blur-md border-b border-[rgba(26,17,8,0.08)]"
            : ""
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-5 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="font-['Playfair_Display'] text-xl tracking-[0.35em] text-[#1A1108] hover:text-[#B8935A] transition-colors duration-500"
          >
            GHANBARINIA
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-['Jost'] text-[11px] tracking-[0.25em] uppercase text-[#1A1108]/60 hover:text-[#B8935A] transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <span className="font-['Jost'] text-[10px] tracking-[0.2em] uppercase text-[#7A6E5F]">
              Dubai · Private Appointment
            </span>
            <a
              href="#consultation"
              className="font-['Jost'] text-[11px] tracking-[0.2em] uppercase px-7 py-3 border border-[#1A1108] text-[#1A1108] hover:bg-[#1A1108] hover:text-[#FAF8F3] transition-all duration-400"
            >
              Private Viewing
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <div className="flex flex-col gap-[5px]">
              <motion.span
                className="block w-6 h-px bg-[#1A1108]"
                animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block w-5 h-px bg-[#1A1108]"
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block w-6 h-px bg-[#1A1108]"
                animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#FAF8F3] flex flex-col justify-center items-center gap-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="font-['Playfair_Display'] text-2xl tracking-[0.3em] text-[#1A1108] mb-8">
              GHANBARINIA
            </div>
            {navLinks.map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-['Playfair_Display'] text-4xl text-[#1A1108] hover:text-[#B8935A] transition-colors italic"
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                {item}
              </motion.a>
            ))}
            <motion.a
              href="#consultation"
              className="mt-8 font-['Jost'] text-[11px] tracking-[0.25em] uppercase px-10 py-4 border border-[#1A1108] text-[#1A1108]"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              Private Viewing
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
