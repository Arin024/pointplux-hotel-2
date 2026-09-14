const fs = require('fs');
const path = require('path');
const { OUT, SITE_URL } = require('./build_site');

const pagesDir = path.join(__dirname, 'pages');
const pageFiles = fs.readdirSync(pagesDir).filter((f) => f.endsWith('.js'));

const indexablePaths = [];

pageFiles.forEach((file) => {
  const html = require(path.join(pagesDir, file));
  const outName = file.replace(/\.js$/, '.html');
  fs.writeFileSync(path.join(OUT, outName), html);
  console.log('Wrote', outName);

  // Track which pages should be in the sitemap (exclude noindex-style utility pages)
  if (isIndexable(outName)) indexablePaths.push(outName);
});

function isIndexable(name) {
  return !['thank-you.html', '404.html'].includes(name);
}

// ---- sitemap.xml ----
const today = new Date().toISOString().split('T')[0];
const urls = indexablePaths
  .map((p) => {
    const loc = p === 'index.html' ? `${SITE_URL}/` : `${SITE_URL}/${p}`;
    const priority = p === 'index.html' ? '1.0' : '0.7';
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${priority}</priority>\n  </url>`;
  })
  .join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
fs.writeFileSync(path.join(OUT, 'sitemap.xml'), sitemap);
console.log('Wrote sitemap.xml');

// Also copy 404.html to the root (already there) — Netlify/GitHub Pages pick it up automatically.
console.log('\nBuild complete. Pages written to', OUT);
