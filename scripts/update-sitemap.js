#!/usr/bin/env node
/*
 * Regenerates sitemap.xml with an accurate <lastmod> for the pages whose
 * content actually changes daily (index.html / en.html show a new quote
 * of the day + featured testimonial — see update-daily-content.js).
 * Run daily by .github/workflows/sitemap.yml, shortly after that job.
 */
'use strict';

const fs = require('fs');
const path = require('path');

const SITE_URL = (process.env.SITE_URL || 'https://brightlings-academy-kids-edu.vercel.app').replace(/\/$/, '');

const dailyPath = path.join(__dirname, '..', 'assets', 'js', 'daily-content.js');
const dailyRaw = fs.readFileSync(dailyPath, 'utf8');
const dateMatch = dailyRaw.match(/"date":\s*"(\d{4}-\d{2}-\d{2})"/);
const lastmod = dateMatch ? dateMatch[1] : new Date().toISOString().slice(0, 10);

const pages = [
  { loc: '/', priority: '1.0' },
  { loc: '/en.html', priority: '0.9' },
];

const urls = pages
  .map(
    (p) => `  <url>
    <loc>${SITE_URL}${p.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>daily</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  )
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

fs.writeFileSync(path.join(__dirname, '..', 'sitemap.xml'), xml);
console.log(`Updated sitemap.xml with lastmod=${lastmod}`);
