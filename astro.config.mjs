// @ts-check
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';

// Meridian — three design directions for a single-family-office one-pager.
// Client material is CONFIDENTIAL; public specs use the codename only.
export default defineConfig({
  site: 'https://meridian.example.com',
  base: '/',
  trailingSlash: 'ignore',
  integrations: [svelte()],
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
