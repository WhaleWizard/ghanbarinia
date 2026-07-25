import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { dictionaries, type Copy, type Language } from "./dictionary";

const STORAGE_KEY = "ghanbarinia-lang";
const DEFAULT_LANGUAGE: Language = "en";

function detectLanguage(): Language {
  if (typeof window === "undefined") return DEFAULT_LANGUAGE;

  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === "en" || saved === "ru") return saved;

  // Russian is the working language of Tashkent, so anyone whose browser is
  // set to Russian (or another post-Soviet locale) gets Russian first.
  const browser = window.navigator.languages ?? [window.navigator.language];
  const wantsRussian = browser.some((tag) =>
    /^(ru|uz|kk|ky|tg|az|be|hy)\b/i.test(tag)
  );
  return wantsRussian ? "ru" : DEFAULT_LANGUAGE;
}

interface LanguageContextValue {
  language: Language;
  setLanguage: (next: Language) => void;
  t: Copy;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE);

  // Runs after mount so the first paint matches the server-rendered markup.
  useEffect(() => {
    setLanguageState(detectLanguage());
  }, []);

  // Keep the tab title, the meta description and the OG tags in step with the
  // chosen language — messenger previews read these, not the page body.
  useEffect(() => {
    const copy = dictionaries[language];
    document.documentElement.lang = language;
    document.title = copy.meta.title;

    const setMeta = (selector: string, value: string) => {
      document.querySelector(selector)?.setAttribute("content", value);
    };
    setMeta('meta[name="description"]', copy.meta.description);
    setMeta('meta[property="og:title"]', copy.meta.title);
    setMeta('meta[property="og:description"]', copy.meta.description);
  }, [language]);

  const setLanguage = useCallback((next: Language) => {
    setLanguageState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* private mode — the choice simply will not be remembered */
    }
  }, []);

  const value = useMemo(
    () => ({ language, setLanguage, t: dictionaries[language] }),
    [language, setLanguage]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside <LanguageProvider>");
  return ctx;
}

/** Shortcut for components that only need the copy. */
export function useCopy(): Copy {
  return useLanguage().t;
}
