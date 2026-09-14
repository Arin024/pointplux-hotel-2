const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, 'site');
const SITE_URL = 'https://www.pointpluxhotel.com'; // placeholder — update once the real domain is live
const WHATSAPP_NUMBER = '2347030091259'; // +234 703 009 1259, international format, no + or spaces

function waLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

const NAV_LINKS = [
  ['index.html', 'Home'],
  ['rooms.html', 'Rooms & Suites'],
  ['facilities.html', 'Facilities'],
  ['gallery.html', 'Gallery'],
  ['location.html', 'Location'],
  ['contact.html', 'Contact'],
];

function head({ title, description, path: pagePath, noindex }) {
  const canonical = `${SITE_URL}/${pagePath}`;
  return `<meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="${description}">
  ${noindex ? '<meta name="robots" content="noindex, nofollow">' : `<link rel="canonical" href="${canonical}">`}

  <!-- Favicons -->
  <link rel="icon" type="image/x-icon" href="images/icons/favicon.ico">
  <link rel="icon" type="image/png" sizes="16x16" href="images/icons/favicon-16x16.png">
  <link rel="icon" type="image/png" sizes="32x32" href="images/icons/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="48x48" href="images/icons/favicon-48x48.png">
  <link rel="icon" type="image/png" sizes="96x96" href="images/icons/favicon-96x96.png">
  <link rel="apple-touch-icon" sizes="180x180" href="images/icons/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="192x192" href="images/icons/android-chrome-192x192.png">
  <link rel="icon" type="image/png" sizes="512x512" href="images/icons/android-chrome-512x512.png">
  <link rel="manifest" href="site.webmanifest">
  <meta name="theme-color" content="#3aa635">

  <!-- Open Graph / social sharing -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:image" content="${SITE_URL}/images/icons/og-image.jpg">
  <meta property="og:url" content="${canonical}">
  <meta property="og:site_name" content="PointPlux Hotel & Suites">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${description}">
  <meta name="twitter:image" content="${SITE_URL}/images/icons/og-image.jpg">

  <link rel="stylesheet" href="css/style.css">
  <!--
    Google Analytics (GA4) is wired up in js/ga.js and js/main.js.
    It only fires after the visitor accepts the cookie banner.
    Swap the placeholder ID in js/ga.js for your real GA4 Measurement ID.
  -->
  <script src="js/ga.js" defer></script>`;
}

function pageLoader() {
  return `<div class="page-loader" aria-hidden="true"><div class="ring"></div></div>`;
}

function header(active) {
  const links = NAV_LINKS.map(([href, label]) => {
    const current = href === active ? ' aria-current="page"' : '';
    return `<a href="${href}"${current}>${label}</a>`;
  }).join('\n        ');

  return `<a class="skip-link" href="#main-content">Skip to main content</a>
  <header class="site-header">
    <div class="nav-wrap">
      <a href="index.html" class="brand">
        <img src="images/icons/logo-master.png" alt="PointPlux Hotel & Suites logo" width="44" height="44">
        <span class="brand-text"><strong>PointPlux</strong><span>Hotel &amp; Suites</span></span>
      </a>
      <nav class="main-nav" aria-label="Primary">
        ${links}
      </nav>
      <div class="nav-cta">
        <a class="nav-phone" href="tel:+2348175935137">0817 593 5137</a>
        <a class="btn btn-primary" href="${waLink('Hi PointPlux Hotel, I\u2019d like to book a room. Could you help me check availability?')}" target="_blank" rel="noopener">Book Now</a>
        <button class="nav-toggle" aria-label="Toggle navigation menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </header>`;
}

function stickyMobileCta() {
  return `<div class="sticky-mobile-cta">
    <a class="call" href="tel:+2348175935137">📞 Call Now</a>
    <a class="enquire" href="${waLink('Hi PointPlux Hotel, I have an enquiry.')}" target="_blank" rel="noopener">💬 WhatsApp Us</a>
  </div>`;
}

function cookieBanner() {
  return `<div class="cookie-banner" role="dialog" aria-label="Cookie consent">
    <p>We use cookies to improve your experience on our site and to understand how it's used. See our <a href="privacy-policy.html" style="color:#7ed321;text-decoration:underline;">Privacy Policy</a> to learn more.</p>
    <div class="cookie-actions">
      <button class="btn btn-outline" data-cookie="decline" style="border-color:#555;color:#fff;">Decline</button>
      <button class="btn btn-primary" data-cookie="accept">Accept</button>
    </div>
  </div>`;
}

function footer() {
  return `<footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="footer-brand">
            <img src="images/icons/logo-master.png" alt="PointPlux Hotel & Suites logo" width="40" height="40">
            <strong>PointPlux Hotel &amp; Suites</strong>
          </div>
          <p>Over seventeen years of hospitality excellence in Sango Otta — three phases, 60+ rooms, and facilities built for comfort, business, and leisure.</p>
          <div class="social-row">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Instagram">◎</a>
            <a href="${waLink('Hi PointPlux Hotel, I have an enquiry.')}" target="_blank" rel="noopener" aria-label="Chat with us on WhatsApp">☏</a>
          </div>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            <li><a href="rooms.html">Rooms &amp; Suites</a></li>
            <li><a href="facilities.html">Facilities</a></li>
            <li><a href="location.html">Location</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4>Legal</h4>
          <ul>
            <li><a href="privacy-policy.html">Privacy Policy</a></li>
            <li><a href="terms-and-conditions.html">Terms &amp; Conditions</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li>101/102 Joju Road, Sango Otta,<br>Ogun State, Nigeria</li>
            <li><a href="tel:+2348175935137">0817 593 5137</a></li>
            <li><a href="tel:+2349094409585">0909 440 9585</a></li>
            <li><a href="${waLink('Hi PointPlux Hotel, I have an enquiry.')}" target="_blank" rel="noopener">💬 WhatsApp: +234 703 009 1259</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; <span id="year"></span> PointPlux Hotel &amp; Suites. All rights reserved.</span>
        <span><a href="privacy-policy.html">Privacy</a> &middot; <a href="terms-and-conditions.html">Terms</a></span>
      </div>
    </div>
  </footer>
  <script>document.getElementById('year').textContent = new Date().getFullYear();</script>`;
}

function applyRevealClasses(html) {
  return html
    .replace(/class="section-head center"/g, 'class="section-head center reveal"')
    .replace(/class="section-head"/g, 'class="section-head reveal"')
    .replace(/class="card"/g, 'class="card reveal"')
    .replace(/class="img-loading-wrap"/g, 'class="img-loading-wrap reveal-img"')
    .replace(/class="feature-media"/g, 'class="feature-media reveal-img"')
    .replace(/class="feature-text"/g, 'class="feature-text reveal"')
    .replace(/class="grid grid-3"/g, 'class="grid grid-3 reveal-stagger"')
    .replace(/class="grid grid-2"/g, 'class="grid grid-2 reveal-stagger"')
    .replace(/class="carousel" id/g, 'class="carousel reveal-img" id');
}

function page({ title, description, path: pagePath, active, body, extraHead = '', noindex = false }) {
  const revealedBody = applyRevealClasses(body);
  return `<!DOCTYPE html>
<html lang="en">
<head>
${head({ title, description, path: pagePath, noindex })}
${extraHead}
</head>
<body>
  ${pageLoader()}
  ${header(active)}
  <main id="main-content">
${revealedBody}
  </main>
  ${footer()}
  ${stickyMobileCta()}
  ${cookieBanner()}
  <script src="js/main.js" defer></script>
</body>
</html>`;
}

function carousel(id, slides) {
  const slideHtml = slides.map((s) => `
    <div class="carousel-slide">
      <img src="${s.src}" alt="${s.alt}" loading="lazy">
      ${s.title ? `<div class="carousel-caption"><div class="cap-title">${s.title}</div>${s.desc ? `<div class="cap-desc">${s.desc}</div>` : ''}</div>` : ''}
    </div>`).join('');
  return `
    <div class="carousel" id="${id}">
      <div class="carousel-track">${slideHtml}</div>
      <button class="carousel-arrow prev" type="button" aria-label="Previous photo">&#8249;</button>
      <button class="carousel-arrow next" type="button" aria-label="Next photo">&#8250;</button>
      <div class="carousel-dots"></div>
    </div>`;
}

module.exports = { page, OUT, SITE_URL, NAV_LINKS, waLink, WHATSAPP_NUMBER, carousel };
