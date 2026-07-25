import { defineConfig } from 'vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

const rootDir = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  // GitHub Pages serves project sites from /<repo>/, so emitted asset URLs
  // must be relative instead of absolute /assets/... paths.
  base: './',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(rootDir, 'src'),
    },
  },
  build: {
    // Inline only tiny assets; carpet photos must stay separate files so the
    // browser can cache them and load them lazily.
    assetsInlineLimit: 2048,
  },
})
