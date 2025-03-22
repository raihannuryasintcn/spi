require('babel-register');
const router = require('./sitemap-routes').default;
const Sitemap = require('react-router-sitemap').default;

new Sitemap(router)
  .build('https://scarletpowerindonesia.com') // Ganti dengan URL website Anda
  .save('./public/sitemap.xml');