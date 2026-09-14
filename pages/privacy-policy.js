const { page } = require('../build_site');

const body = `
<section class="page-hero" style="background-image:url('images/optimized/reception-lobby.jpg'); padding:130px 0 50px;">
  <div class="container">
    <div class="breadcrumb"><a href="index.html">Home</a> / Privacy Policy</div>
    <h1 style="color:#fff;">Privacy Policy</h1>
  </div>
</section>

<section>
  <div class="container legal-content">
    <p class="small">Last updated: 13 September 2026</p>

    <p>PointPlux Hotel &amp; Suites ("we," "our," or "us"), located at 101/102 Joju Road, Sango Otta, Ogun State, Nigeria, respects your privacy and is committed to protecting the personal information you share with us through this website. This Privacy Policy explains what information we collect, how we use it, and the choices you have.</p>

    <h2>1. Information We Collect</h2>
    <p>When you use this website, we may collect the following types of information:</p>
    <ul>
      <li><strong>Information you provide directly</strong> — such as your name, email address, phone number, and any message details submitted through our contact or enquiry form.</li>
      <li><strong>Automatically collected information</strong> — such as your IP address, browser type, device type, and pages visited, gathered through cookies and analytics tools (see Section 4).</li>
    </ul>

    <h2>2. How We Use Your Information</h2>
    <p>We use the information we collect to:</p>
    <ul>
      <li>Respond to your enquiries and booking requests.</li>
      <li>Improve our website, services, and guest experience.</li>
      <li>Communicate with you about offers, availability, or updates, where you have consented to this.</li>
      <li>Maintain the security and proper functioning of our website.</li>
    </ul>

    <h2>3. How We Share Your Information</h2>
    <p>We do not sell your personal information. We may share information with trusted service providers who help us operate this website (such as hosting or analytics providers), and only to the extent necessary for them to perform their services, or where required by law.</p>

    <h2>4. Cookies &amp; Analytics</h2>
    <p>This website uses cookies to remember your preferences and to understand how visitors use our site through tools such as Google Analytics. You can accept or decline non-essential cookies via the cookie banner shown when you first visit the site. You may also control cookies through your browser settings at any time.</p>

    <h2>5. Data Security</h2>
    <p>We take reasonable technical and organizational measures to protect your personal information from unauthorized access, loss, or misuse. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.</p>

    <h2>6. Data Retention</h2>
    <p>We retain personal information only for as long as necessary to fulfil the purposes described in this policy, or as required by applicable law.</p>

    <h2>7. Your Rights</h2>
    <p>Depending on applicable law, you may have the right to access, correct, or request deletion of your personal information held by us. To make such a request, please contact us using the details below.</p>

    <h2>8. Children's Privacy</h2>
    <p>Our website and services are not directed at children under 13, and we do not knowingly collect personal information from children.</p>

    <h2>9. Changes to This Policy</h2>
    <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.</p>

    <h2>10. Contact Us</h2>
    <p>If you have any questions about this Privacy Policy or how we handle your information, please contact us at:</p>
    <p>
      PointPlux Hotel &amp; Suites<br>
      101/102 Joju Road, Sango Otta, Ogun State, Nigeria<br>
      Phone: <a href="tel:+2348175935137">0817 593 5137</a> / <a href="tel:+2349094409585">0909 440 9585</a>
    </p>
  </div>
</section>
`;

module.exports = page({
  title: 'Privacy Policy | PointPlux Hotel & Suites',
  description: 'Read the PointPlux Hotel & Suites privacy policy to learn how we collect, use, and protect your personal information.',
  path: 'privacy-policy.html',
  active: '',
  body,
});
