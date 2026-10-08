// @ts-check
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';
import basePath from './src/integrations/base-path.mjs';

// Meridian — three design directions for a single-family-office one-pager.
// Client material is CONFIDENTIAL; public specs use the codename only.
export default defineConfig({
  /* PAGES_SITE / PAGES_BASE are set only by the GitHub Pages workflow
   * (.github/workflows/pages.yml). Unset — Vercel, local dev — the site
   * serves from the root exactly as before. */
  site: process.env.PAGES_SITE ?? 'https://meridian.example.com',
  base: process.env.PAGES_BASE ?? '/',
  trailingSlash: 'ignore',
  integrations: [svelte(), basePath()],
  // Client demo: no floating dev-toolbar pill over the design.
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@layouts': path.resolve('./src/layouts'),
        '@components': path.resolve('./src/components'),
        '@lib': path.resolve('./src/lib'),
      },
    },
  },
});
