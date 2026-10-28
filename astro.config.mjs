// @ts-check
import { defineConfig } from 'astro/config';

// Statische site; Vercel herkent Astro automatisch (build: astro build, output: dist).
export default defineConfig({
  site: 'https://buddyrun-noord.nl',
  compressHTML: true,
});
