import sitemap from 'vite-plugin-sitemap';
import { createHtmlPlugin } from 'vite-plugin-html';
import { defineConfig, loadEnv } from 'vite';
import preact from '@preact/preset-vite';
import { blogPosts } from './src/data/blogData';

export default defineConfig(({ mode }) => {
  // Load env variables
  const env = loadEnv(mode, process.cwd(), '');
  
  // Generate dynamic routes for blog posts
  const blogRoutes = blogPosts.map(post => `/blog/${post.id}`);

  return {
    plugins: [
      sitemap({
        hostname: env.VITE_SITE_URL || 'https://scarletpowerindonesia.com',
        dynamicRoutes: [
          '/',
          ...blogRoutes
        ]
      }),    
      preact({
        prerender: { 
          enabled: true, 
          renderTarget: '#app'
        }
      }),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            title: env.VITE_SITE_TITLE || 'PT SCARLET POWER INDONESIA',
          },
        },
      }),
    ], 
  }
});