import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jams.agency',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({
      filter: (page) => page !== 'https://jams.agency/start/',
    }),
  ],
});
