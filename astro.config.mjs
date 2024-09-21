// @ts-check
import { defineConfig } from 'astro/config';
// @ts-ignore
import VitePWA from '@vite-pwa/astro';

// https://astro.build/config
export default defineConfig({
    integrations: [
        VitePWA({
            registerType: 'autoUpdate', // Automatically update the service worker
            includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'], // Assets to cache
            manifest: {
                name: 'My Astro PWA',
                short_name: 'AstroPWA',
                description: 'My Progressive Web App built with Astro',
                theme_color: '#ffffff',
                icons: [
                    {
                        src: 'icon-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: 'icon-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },
                ],
            },
        }),
    ],
});
