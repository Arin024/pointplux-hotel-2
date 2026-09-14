/* ===================================================
   Google Analytics 4 — placeholder installation
   ---------------------------------------------------
   Replace G-XXXXXXXXXX below with your real GA4
   Measurement ID (Google Analytics > Admin > Data
   Streams > your web stream). Analytics only loads
   AFTER the visitor accepts the cookie banner, so this
   file intentionally does NOT run on its own.
   =================================================== */

var GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // <-- put your real GA4 ID here

window.__pointpluxLoadAnalytics = function () {
  if (window.__pointpluxAnalyticsLoaded) return;
  window.__pointpluxAnalyticsLoaded = true;

  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_MEASUREMENT_ID;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID);
};
