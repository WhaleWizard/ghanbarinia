import { motion } from "motion/react";

const links = {
  Collections: ["Tabriz", "Kashan", "Isfahan", "Qom Silk", "Nain", "Tribal"],
  Services: ["Private Viewing", "Home Preview", "Corporate Acquisition", "Bespoke Commission", "Conservation & Restoration"],
  Company: ["Our Heritage", "Craftsmanship", "Authentication", "Showrooms", "Press & Media"],
};

const socials = [
  { name: "Instagram", href: "#" },
  { name: "Pinterest", href: "#" },
  { name: "LinkedIn", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-[#120D07] border-t border-[rgba(250,248,243,0.06)]">
      {/* Main footer */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="font-['Playfair_Display'] text-[22px] tracking-[0.35em] text-[#FAF8F3] mb-5">
              GHANBARINIA
            </div>
            <p className="font-['Jost'] text-[13px] leading-[1.8] text-[#FAF8F3]/40 mb-8 max-w-xs">
              The world's most distinguished Persian carpet house. Private acquisition by appointment across 30+ showrooms worldwide.
            </p>

            {/* Persian ornament */}
            <div className="mb-8">
              <svg width="80" height="40" viewBox="0 0 80 40" fill="none">
                <line x1="0" y1="20" x2="30" y2="20" stroke="#B8935A" strokeWidth="0.5" opacity="0.4" />
                <circle cx="40" cy="20" r="8" fill="none" stroke="#B8935A" strokeWidth="0.5" opacity="0.6" />
                <circle cx="40" cy="20" r="4" fill="none" stroke="#B8935A" strokeWidth="0.5" opacity="0.5" />
                <polygon points="40,12 48,20 40,28 32,20" fill="none" stroke="#B8935A" strokeWidth="0.5" opacity="0.4" />
                <line x1="50" y1="20" x2="80" y2="20" stroke="#B8935A" strokeWidth="0.5" opacity="0.4" />
              </svg>
            </div>

            <div className="flex gap-6">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  className="font-['Jost'] text-[10px] tracking-[0.25em] uppercase text-[#FAF8F3]/30 hover:text-[#B8935A] transition-colors duration-300"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <p className="font-['Jost'] text-[10px] tracking-[0.35em] uppercase text-[#B8935A] mb-6">
                {category}
              </p>
              <ul className="flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="font-['Jost'] text-[12px] text-[#FAF8F3]/40 hover:text-[#FAF8F3]/80 transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[rgba(250,248,243,0.05)]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-6 flex flex-col lg:flex-row items-center justify-between gap-4">
          <p className="font-['Jost'] text-[10px] tracking-[0.2em] uppercase text-[#FAF8F3]/25">
            © {new Date().getFullYear()} Ghanbarinia International Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms & Conditions", "Cookie Policy"].map((item) => (
              <a
                key={item}
                href="#"
                className="font-['Jost'] text-[10px] tracking-[0.15em] uppercase text-[#FAF8F3]/25 hover:text-[#FAF8F3]/60 transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
