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
| Copy, English and Russian | `src/i18n/dictionary.ts` |
| Copy, Uzbek | `src/i18n/uz.ts` |
| Address, hours, phone, Telegram, Instagram | `CONTACTS` in `src/i18n/dictionary.ts` |
| Carpet stock | `src/data/catalogue.ts` |
| Customer reviews | `src/data/reviews.ts` |
| Carpet photographs | `public/img/carpets/` |
| Page sections | `src/app/components/` |

## Editing the text

Every visible string lives in the dictionary. English is the reference shape:
if a key is missing from the Russian or Uzbek copy, `npm run check` fails, so
the three languages cannot drift apart.

The Uzbek was written to match the other two and is worth a native
read-through before it carries a campaign.

## Reviews

`src/data/reviews.ts` is empty on purpose and the section stays hidden until
it is not. Only add reviews people actually wrote — a site selling carpets at
these prices is the wrong place for invented ones.

The press entries beside it are a different matter: each links to the
publication it came from, so a visitor can check it.

## Replacing the photographs

Each carpet needs two files in `public/img/carpets/`: `<name>-480.webp` for
phones and `<name>-960.webp` for desktop. Keep the existing file names and no
code changes are needed. The current images are Unsplash placeholders.
