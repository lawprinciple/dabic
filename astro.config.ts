import { defineConfig } from 'astro/config';
import { prospect } from './src/prospect';

export default defineConfig({
  // Canonical URL — read from prospect config so it's a single source of truth.
  // Used by Astro for sitemap generation and any absolute URL helpers.
  site: prospect.site.canonicalUrl,
  server: { port: 5173, host: true },
  vite: {
    build: {
      cssMinify: 'lightningcss',
    },
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
