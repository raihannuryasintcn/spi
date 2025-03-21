import sitemap from 'vite-plugin-sitemap';
import { createHtmlPlugin } from 'vite-plugin-html';
import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

export default defineConfig({
  plugins: [
    sitemap({
      hostname: 'https://scarletpowerinonesia.com',
    }),    
    preact({
      prerender: { enabled:true }
    }),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: "PT SCARLET POWER INDONESIA",
          description: "PT Scarlet Power Indonesia adalah spesialis AC yang menawarkan layanan konsultasi, penjualan, pemasangan, dan perawatan AC untuk rumah dan industri. Dapatkan solusi AC berkualitas, hemat energi, dan tahan lama untuk kenyamanan udara terbaik. meta otomatis",
        },
      },
    }),
], 

  // Additional configuration if needed
});
