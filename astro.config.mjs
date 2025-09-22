// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';


export default defineConfig({
site: 'https://vibhavmisra.com',
integrations: [mdx(), sitemap()],
vite: { plugins: [tailwindcss()] },
markdown: {
shikiConfig: {
theme: 'github-dark-dimmed'
}
}
});