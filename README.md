# Ghanbarinia Uzbekistan

Landing page for the Ghanbarinia showroom in Tashkent — handmade Persian carpets.
React + Vite + Tailwind, deployed to GitHub Pages by `.github/workflows/deploy.yml`.

## Commands

```bash
npm install     # install dependencies
npm run dev     # development server
npm run check   # TypeScript check — run this after every change
npm run build   # production build into dist/
```

## Where things live

| What | Where |
| --- | --- |
| All copy, English and Russian | `src/i18n/dictionary.ts` |
| Address, hours, phone, Telegram, Instagram | `CONTACTS` in `src/i18n/dictionary.ts` |
| Carpet photographs | `public/img/carpets/` |
| Page sections | `src/app/components/` |

## Editing the text

Every visible string lives in `src/i18n/dictionary.ts`. English is the reference
shape: if a key is missing from the Russian copy, `npm run check` fails, so the
two languages cannot drift apart.

## Replacing the photographs

Each carpet needs two files in `public/img/carpets/`: `<name>-480.webp` for
phones and `<name>-960.webp` for desktop. Keep the existing file names and no
code changes are needed. The current images are Unsplash placeholders.
