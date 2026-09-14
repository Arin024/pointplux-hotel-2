const { page } = require('../build_site');

const body = `
<section class="error-page">
  <div class="container" style="max-width:560px;">
    <div class="code">404</div>
    <h1>Page Not Found</h1>
    <p>Sorry, we couldn't find the page you were looking for. It may have been moved, renamed, or never existed.</p>
    <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-top:20px;">
      <a class="btn btn-primary" href="index.html">Back to Homepage</a>
      <a class="btn btn-dark" href="contact.html">Contact Us</a>
    </div>
  </div>
</section>
`;

module.exports = page({
  title: '404 — Page Not Found | PointPlux Hotel & Suites',
  description: 'The page you were looking for could not be found on the PointPlux Hotel & Suites website.',
  path: '404.html',
  active: '',
  body,
  noindex: true,
});
