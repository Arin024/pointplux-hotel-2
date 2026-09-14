const { page, waLink } = require('../build_site');

const body = `
<section class="thankyou-page">
  <div class="container" style="max-width:560px;">
    <div class="check-badge" aria-hidden="true">✓</div>
    <h1>Almost There!</h1>
    <p>We've opened WhatsApp in a new tab with your enquiry pre-filled — just hit send there and our team will reply as soon as possible.</p>
    <p class="small">Didn't see the WhatsApp window open? <a href="${waLink('Hi PointPlux Hotel, I have an enquiry.')}" target="_blank" rel="noopener" style="color:var(--green);font-weight:700;">Tap here to open WhatsApp</a>, or call us directly at <a href="tel:+2348175935137" style="color:var(--green);font-weight:700;">0817 593 5137</a>.</p>
    <div style="margin-top:28px;">
      <a class="btn btn-primary" href="index.html">Back to Homepage</a>
    </div>
  </div>
</section>
`;

module.exports = page({
  title: 'Thank You | PointPlux Hotel & Suites',
  description: 'Thank you for contacting PointPlux Hotel & Suites. We\'ll be in touch shortly.',
  path: 'thank-you.html',
  active: '',
  body,
  noindex: true,
});
