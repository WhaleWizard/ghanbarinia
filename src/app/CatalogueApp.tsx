import { useEffect, useMemo, useState } from "react";
import { CarpetImage } from "./components/CarpetImage";
import { LanguageProvider, useCopy, useLanguage } from "../i18n/LanguageProvider";
import { CONTACTS, languages } from "../i18n/dictionary";
import {
  CARPETS,
  COLOUR_IDS,
  MATERIAL_IDS,
  SIZE_IDS,
  TRADITION_IDS,
  areaM2,
  formatSize,
  sizeOf,
  type Carpet,
  type ColourId,
  type MaterialId,
  type SizeId,
  type TraditionId,
} from "../data/catalogue";

const HOME_URL = import.meta.env.BASE_URL;
/** 250 photographs at once would stall a phone, so the grid grows in steps. */
const PAGE_SIZE = 24;

type SortId = "newest" | "density" | "areaDesc" | "areaAsc" | "tradition";

/** Toggles a value in a filter set without mutating it. */
function toggle<T>(set: Set<T>, value: T) {
  const next = new Set(set);
  if (next.has(value)) next.delete(value);
  else next.add(value);
  return next;
}

function FilterGroup<T extends string>({
  title,
  options,
  selected,
  onToggle,
  labelFor,
}: {
  title: string;
  options: readonly T[];
  selected: Set<T>;
  onToggle: (value: T) => void;
  labelFor: (value: T) => string;
}) {
  return (
    <div className="border-t border-[rgba(26,17,8,0.12)] pt-5">
      <p className="mb-3 font-['Jost'] text-[10px] uppercase tracking-[0.28em] text-[#B8935A]">
        {title}
      </p>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const active = selected.has(option);
          return (
            <button
              key={option}
              type="button"
              onClick={() => onToggle(option)}
              aria-pressed={active}
              className={`border px-3.5 py-2 font-['Jost'] text-[12px] transition-colors duration-200 ${
                active
                  ? "border-[#1A1108] bg-[#1A1108] text-[#FAF8F3]"
                  : "border-[rgba(26,17,8,0.18)] text-[#7A6E5F] hover:border-[#1A1108] hover:text-[#1A1108]"
              }`}
            >
              {labelFor(option)}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function CarpetCard({ carpet, index }: { carpet: Carpet; index: number }) {
  const t = useCopy();
  const tradition = t.collections.items.find((item) => item.id === carpet.tradition);

  return (
    <article className="group">
      <div className="relative mb-4 overflow-hidden" style={{ aspectRatio: "3/4" }}>
        <CarpetImage
          name={carpet.image}
          alt={`${tradition?.name ?? carpet.tradition} — ${formatSize(carpet)}`}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 639px) 92vw, (max-width: 1023px) 46vw, 30vw"
          priority={index < 4}
        />
        {carpet.antique && (
          <span className="absolute left-0 top-4 bg-[#1A1108] px-3 py-1.5 font-['Jost'] text-[9px] uppercase tracking-[0.24em] text-[#E0BC75]">
            {t.catalogue.antique}
          </span>
        )}
        <div className="pointer-events-none absolute right-4 top-4 h-5 w-5 border-r border-t border-[#B8935A]/60" />
        <div className="pointer-events-none absolute bottom-4 left-4 h-5 w-5 border-b border-l border-[#B8935A]/60" />
      </div>

      <div className="mb-2 flex items-baseline justify-between gap-3">
        <h2 className="font-['Playfair_Display'] text-[20px] leading-tight text-[#1A1108] transition-colors duration-300 group-hover:text-[#B8935A]">
          {tradition?.name ?? carpet.tradition}
        </h2>
        <span className="flex-shrink-0 font-['Jost'] text-[10px] uppercase tracking-[0.18em] text-[#7A6E5F]/70">
          {carpet.id}
        </span>
      </div>

      <p className="mb-3 font-['Jost'] text-[13px] text-[#7A6E5F]">{formatSize(carpet)}</p>

      <dl className="mb-4 grid grid-cols-2 gap-x-4 gap-y-2 border-t border-[rgba(26,17,8,0.1)] pt-3">
        <div>
          <dt className="font-['Jost'] text-[9px] uppercase tracking-[0.22em] text-[#7A6E5F]/70">
            {t.catalogue.materialLabel}
          </dt>
          <dd className="font-['Jost'] text-[12px] text-[#1A1108]">
            {t.catalogue.materials[carpet.material]}
          </dd>
        </div>
        <div>
          <dt className="font-['Jost'] text-[9px] uppercase tracking-[0.22em] text-[#7A6E5F]/70">
            {t.catalogue.densityLabel}
          </dt>
          <dd className="font-['Jost'] text-[12px] text-[#1A1108]">{carpet.knots} KPSI</dd>
        </div>
      </dl>

      <a
        href={`${CONTACTS.telegramHref}?text=${encodeURIComponent(`${t.catalogue.ask}: ${carpet.id}`)}`}
        target="_blank"
        rel="noreferrer"
        className="inline-flex w-full items-center justify-center gap-2 border border-[rgba(26,17,8,0.2)] py-3 font-['Jost'] text-[10px] uppercase tracking-[0.2em] text-[#1A1108] transition-colors duration-300 hover:border-[#1A1108] hover:bg-[#1A1108] hover:text-[#FAF8F3]"
      >
        {t.catalogue.priceOnRequest}
      </a>
    </article>
  );
}

function Catalogue() {
  const { language, setLanguage, t } = useLanguage();

  const [traditions, setTraditions] = useState<Set<TraditionId>>(new Set());
  const [materials, setMaterials] = useState<Set<MaterialId>>(new Set());
  const [sizes, setSizes] = useState<Set<SizeId>>(new Set());
  const [colours, setColours] = useState<Set<ColourId>>(new Set());
  const [sort, setSort] = useState<SortId>("newest");
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    document.title = t.catalogue.metaTitle;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", t.catalogue.metaDescription);
  }, [t]);

  const results = useMemo(() => {
    const filtered = CARPETS.filter(
      (carpet) =>
        (traditions.size === 0 || traditions.has(carpet.tradition)) &&
        (materials.size === 0 || materials.has(carpet.material)) &&
        (colours.size === 0 || colours.has(carpet.colour)) &&
        (sizes.size === 0 || sizes.has(sizeOf(carpet)))
    );

    const traditionName = (carpet: Carpet) =>
      t.collections.items.find((item) => item.id === carpet.tradition)?.name ?? "";

    const sorted = [...filtered];
    if (sort === "density") sorted.sort((a, b) => b.knots - a.knots);
    else if (sort === "areaDesc") sorted.sort((a, b) => areaM2(b) - areaM2(a));
    else if (sort === "areaAsc") sorted.sort((a, b) => areaM2(a) - areaM2(b));
    else if (sort === "tradition")
      sorted.sort((a, b) => traditionName(a).localeCompare(traditionName(b), language));

    return sorted;
  }, [traditions, materials, colours, sizes, sort, t, language]);

  // Any change to the filters puts the grid back to the first page.
  useEffect(() => {
    setVisible(PAGE_SIZE);
  }, [traditions, materials, colours, sizes, sort]);

  const clearAll = () => {
    setTraditions(new Set());
    setMaterials(new Set());
    setSizes(new Set());
    setColours(new Set());
  };

  const activeCount =
    traditions.size + materials.size + sizes.size + colours.size;

  const sortOptions: Array<[SortId, string]> = [
    ["newest", t.catalogue.sortNewest],
    ["density", t.catalogue.sortDensity],
    ["areaDesc", t.catalogue.sortAreaDesc],
    ["areaAsc", t.catalogue.sortAreaAsc],
    ["tradition", t.catalogue.sortTradition],
  ];

  const traditionName = (id: TraditionId) =>
    t.collections.items.find((item) => item.id === id)?.name ?? id;

  const filterPanel = (
    <div className="flex flex-col gap-5">
      <FilterGroup
        title={t.catalogue.traditionLabel}
        options={TRADITION_IDS}
        selected={traditions}
        onToggle={(v) => setTraditions((s) => toggle(s, v))}
        labelFor={traditionName}
      />
      <FilterGroup
        title={t.catalogue.materialLabel}
        options={MATERIAL_IDS}
        selected={materials}
        onToggle={(v) => setMaterials((s) => toggle(s, v))}
        labelFor={(v) => t.catalogue.materials[v]}
      />
      <FilterGroup
        title={t.catalogue.sizeLabel}
        options={SIZE_IDS}
        selected={sizes}
        onToggle={(v) => setSizes((s) => toggle(s, v))}
        labelFor={(v) => t.catalogue.sizes[v]}
      />
      <FilterGroup
        title={t.catalogue.colourLabel}
        options={COLOUR_IDS}
        selected={colours}
        onToggle={(v) => setColours((s) => toggle(s, v))}
        labelFor={(v) => t.catalogue.colours[v]}
      />

      {activeCount > 0 && (
        <button
          type="button"
          onClick={clearAll}
          className="self-start font-['Jost'] text-[11px] uppercase tracking-[0.2em] text-[#B8935A] underline-offset-4 hover:underline"
        >
          {t.catalogue.reset} ({activeCount})
        </button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FAF8F3] text-[#1A1108]">
      <header className="sticky top-0 z-40 border-b border-[rgba(26,17,8,0.1)] bg-[#FAF8F3]/96 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-6 py-4 lg:px-16">
          <a
            href={HOME_URL}
            className="font-['Playfair_Display'] text-base tracking-[0.3em] text-[#1A1108] transition-colors hover:text-[#B8935A] lg:text-lg"
          >
            GHANBARINIA
          </a>

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1">
              {languages.map((code, i) => (
                <span key={code} className="flex items-center gap-1">
                  {i > 0 && <span className="text-[#1A1108]/25">/</span>}
                  <button
                    type="button"
                    onClick={() => setLanguage(code)}
                    aria-pressed={language === code}
                    className={`font-['Jost'] text-[11px] uppercase tracking-[0.18em] transition-colors ${
                      language === code
                        ? "text-[#B8935A]"
                        : "text-[#1A1108]/50 hover:text-[#1A1108]"
                    }`}
                  >
                    {code}
                  </button>
                </span>
              ))}
            </div>
            <a
              href={HOME_URL}
              className="hidden font-['Jost'] text-[11px] uppercase tracking-[0.18em] text-[#7A6E5F] transition-colors hover:text-[#1A1108] sm:block"
            >
              ← {t.catalogue.back}
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1440px] px-6 py-14 lg:px-16 lg:py-20">
        <p className="mb-5 font-['Jost'] text-[10px] uppercase tracking-[0.4em] text-[#B8935A]">
          {t.catalogue.label}
        </p>
        <div className="mb-12 flex flex-col justify-between gap-8 lg:mb-16 lg:flex-row lg:items-end">
          {/* Deliberately one line — it used to break after the first word. */}
          <h1 className="font-['Playfair_Display'] text-[clamp(30px,4vw,64px)] leading-[1.1]">
            {t.catalogue.title}
          </h1>
          <p className="max-w-md font-['Jost'] text-[14px] leading-[1.8] text-[#7A6E5F]">
            {t.catalogue.intro}
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-14">
          {/* Filters: a sidebar on desktop, a disclosure on phones. */}
          <aside>
            <button
              type="button"
              onClick={() => setFiltersOpen((v) => !v)}
              aria-expanded={filtersOpen}
              className="mb-5 flex w-full items-center justify-between border border-[rgba(26,17,8,0.18)] px-4 py-3 font-['Jost'] text-[11px] uppercase tracking-[0.2em] lg:hidden"
            >
              {filtersOpen ? t.catalogue.hideFilters : t.catalogue.filters}
              {activeCount > 0 && (
                <span className="ml-2 bg-[#B8935A] px-2 py-0.5 text-[10px] text-[#FAF8F3]">
                  {activeCount}
                </span>
              )}
            </button>
            <div className={`${filtersOpen ? "block" : "hidden"} lg:block`}>{filterPanel}</div>
          </aside>

          <div>
            <div className="mb-8 flex flex-col gap-4 border-b border-[rgba(26,17,8,0.12)] pb-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-['Jost'] text-[12px] uppercase tracking-[0.2em] text-[#7A6E5F]">
                {t.catalogue.shown
                  .replace("{shown}", String(Math.min(visible, results.length)))
                  .replace("{total}", String(results.length))}
              </p>

              <label className="flex items-center gap-3">
                <span className="font-['Jost'] text-[10px] uppercase tracking-[0.24em] text-[#7A6E5F]">
                  {t.catalogue.sort}
                </span>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value as SortId)}
                  className="cursor-pointer border border-[rgba(26,17,8,0.18)] bg-transparent px-3 py-2 font-['Jost'] text-[12px] text-[#1A1108] focus:border-[#1A1108] focus:outline-none"
                >
                  {sortOptions.map(([value, labelText]) => (
                    <option key={value} value={value}>
                      {labelText}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            {results.length === 0 ? (
              <div className="py-20 text-center">
                <p className="mb-5 font-['Playfair_Display'] text-[22px] text-[#1A1108]">
                  {t.catalogue.empty}
                </p>
                <button
                  type="button"
                  onClick={clearAll}
                  className="border border-[#1A1108] px-8 py-3.5 font-['Jost'] text-[11px] uppercase tracking-[0.2em] transition-colors hover:bg-[#1A1108] hover:text-[#FAF8F3]"
                >
                  {t.catalogue.emptyAction}
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                  {results.slice(0, visible).map((carpet, i) => (
                    <CarpetCard key={carpet.id} carpet={carpet} index={i} />
                  ))}
                </div>

                {visible < results.length && (
                  <div className="mt-14 text-center">
                    <button
                      type="button"
                      onClick={() => setVisible((v) => v + PAGE_SIZE)}
                      className="premium-button border border-[#1A1108] px-10 py-4 font-['Jost'] text-[11px] uppercase tracking-[0.22em] transition-colors duration-500 hover:bg-[#1A1108] hover:text-[#FAF8F3]"
                    >
                      {t.catalogue.showMore}
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </main>

      <footer className="border-t border-[rgba(26,17,8,0.1)]">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-6 py-8 font-['Jost'] text-[12px] text-[#7A6E5F] lg:flex-row lg:items-center lg:justify-between lg:px-16">
          <p>{t.showroom.address} · {t.showroom.hours}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href={CONTACTS.phoneHref} className="hover:text-[#1A1108]">
              {CONTACTS.phone}
            </a>
            <a
              href={CONTACTS.telegramHref}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#1A1108]"
            >
              Telegram
            </a>
            <a href={HOME_URL} className="hover:text-[#1A1108]">
              {t.catalogue.back}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function CatalogueApp() {
  return (
    <LanguageProvider managesMeta={false}>
      <Catalogue />
    </LanguageProvider>
  );
}
