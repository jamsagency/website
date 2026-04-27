import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  site: 'https://jams.agency',
  output: 'hybrid',
  adapter: vercel(),
  redirects: {
    '/blog/high-fidelity-member-portal': '/blog/bubble-member-portal-elite-communities',
  },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({
      filter: (page) => page !== 'https://jams.agency/start/',
    }),
  ],
});
