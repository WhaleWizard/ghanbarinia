import { useCopy } from "../../i18n/LanguageProvider";
import { CONTACTS } from "../../i18n/dictionary";

export function Footer() {
  const t = useCopy();

  // Every one of these used to be href="#" — a dead link.
  const sections = [
    { label: t.nav.heritage, href: "#heritage" },
    { label: t.nav.schools, href: "#schools" },
    { label: t.nav.collections, href: "#collections" },
    { label: t.nav.craft, href: "#craftsmanship" },
    { label: t.nav.showroom, href: "#showroom" },
  ];

  return (
    <footer className="border-t border-[rgba(250,248,243,0.06)] bg-[#120D07]">
      <div className="mx-auto max-w-[1440px] px-6 py-16 lg:px-16 lg:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-8">
          <div className="lg:col-span-2">
            {/* Same italic wordmark as the header; the footer is dark, so it
                stays light rather than turning gold. */}
            <div className="mb-5 font-['Playfair_Display'] text-[20px] italic tracking-[0.12em] text-[#FAF8F3]">
              GHANBARINIA
            </div>
            <p className="mb-7 max-w-sm font-['Jost'] text-[13px] leading-[1.8] text-[#FAF8F3]/45">
              {t.footer.about}
            </p>

            <svg width="80" height="40" viewBox="0 0 80 40" fill="none" aria-hidden="true">
              <line x1="0" y1="20" x2="30" y2="20" stroke="#B8935A" strokeWidth="0.5" opacity="0.4" />
              <circle cx="40" cy="20" r="8" fill="none" stroke="#B8935A" strokeWidth="0.5" opacity="0.6" />
              <circle cx="40" cy="20" r="4" fill="none" stroke="#B8935A" strokeWidth="0.5" opacity="0.5" />
              <polygon points="40,12 48,20 40,28 32,20" fill="none" stroke="#B8935A" strokeWidth="0.5" opacity="0.4" />
              <line x1="50" y1="20" x2="80" y2="20" stroke="#B8935A" strokeWidth="0.5" opacity="0.4" />
            </svg>
          </div>

          <div>
            <p className="mb-5 font-['Jost'] text-[10px] uppercase tracking-[0.3em] text-[#B8935A]">
              {t.footer.navTitle}
            </p>
            <ul className="flex flex-col gap-3">
              {sections.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="font-['Jost'] text-[13px] text-[#FAF8F3]/45 transition-colors duration-300 hover:text-[#FAF8F3]/85"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-5 font-['Jost'] text-[10px] uppercase tracking-[0.3em] text-[#B8935A]">
              {t.footer.contactTitle}
            </p>
            <ul className="flex flex-col gap-3 font-['Jost'] text-[13px] text-[#FAF8F3]/45">
              <li className="leading-relaxed">{t.showroom.address}</li>
              <li>{t.showroom.hours}</li>
              <li>
                <a
                  href={CONTACTS.phoneHref}
                  className="transition-colors duration-300 hover:text-[#FAF8F3]/85"
                >
                  {CONTACTS.phone}
                </a>
              </li>
              <li>
                <a
                  href={CONTACTS.telegramHref}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors duration-300 hover:text-[#FAF8F3]/85"
                >
                  Telegram — {CONTACTS.telegram}
                </a>
              </li>
              <li>
                <a
                  href={CONTACTS.instagramHref}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors duration-300 hover:text-[#FAF8F3]/85"
                >
                  Instagram — {CONTACTS.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[rgba(250,248,243,0.05)]">
        <div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-3 px-6 py-6 lg:flex-row lg:items-center lg:px-16">
          <p className="font-['Jost'] text-[10px] uppercase tracking-[0.18em] text-[#FAF8F3]/25">
            © {new Date().getFullYear()} Ghanbarinia Uzbekistan. {t.footer.rights}
          </p>
          <p className="font-['Jost'] text-[10px] text-[#FAF8F3]/20">
            {t.footer.photoNote}
          </p>
        </div>
      </div>
    </footer>
  );
}
