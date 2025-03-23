const fs = require('fs');
const path = require('path');

// URL situs
const siteUrl = 'https://scarletpowerindonesia.com';

// Daftar route statis
const staticRoutes = [
  '',
  '/blog',
  '/contact',
  '/about',
  '/services',
];

// Daftar artikel (bisa diambil dari CMS atau database jika ada)
const blogPosts = [
  { id: 'cara-kerja-ac', lastMod: '2025-03-20' },
  { id: 'perbaikan-ac', lastMod: '2025-03-21' },
];

// Buat sitemap.xml
const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticRoutes.map(route => `
  <url>
    <loc>${siteUrl}${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${route === '' ? 'daily' : 'weekly'}</changefreq>
    <priority>${route === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
  ${blogPosts.map(post => `
  <url>
    <loc>${siteUrl}/blog/${post.id}</loc>
    <lastmod>${post.lastMod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('')}
</urlset>`;

  fs.writeFileSync(path.resolve(__dirname, '../public/sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully!');
};

generateSitemap();