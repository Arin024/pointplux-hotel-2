const { page } = require('../build_site');

const body = `
<section class="page-hero" style="background-image:url('images/optimized/phase1-exterior.jpg'); padding:130px 0 50px;">
  <div class="container">
    <div class="breadcrumb"><a href="index.html">Home</a> / Terms &amp; Conditions</div>
    <h1 style="color:#fff;">Terms &amp; Conditions</h1>
  </div>
</section>

<section>
  <div class="container legal-content">
    <p class="small">Last updated: 13 September 2026</p>

    <p>These Terms and Conditions ("Terms") govern your use of this website and your bookings and interactions with PointPlux Hotel &amp; Suites ("we," "our," or "us"), located at 101/102 Joju Road, Sango Otta, Ogun State, Nigeria. By using this website or booking a room with us, you agree to these Terms.</p>

    <h2>1. Use of This Website</h2>
    <p>This website is provided for the purpose of showcasing our rooms, suites, and facilities, and for enabling enquiries and bookings. You agree to use this website only for lawful purposes and not to misuse any content, forms, or functionality on the site.</p>

    <h2>2. Bookings &amp; Reservations</h2>
    <p>Enquiries submitted through this website are requests for availability and do not constitute a confirmed booking until acknowledged by our team, whether by phone, email, or in person. Room rates, availability, and suite categories (Single Room, Standard Room, Royal Suites) are subject to change without prior notice.</p>

    <h2>3. Cancellations &amp; Changes</h2>
    <p>Cancellation and rescheduling terms will be communicated at the time your booking is confirmed. Please contact our team directly at <a href="tel:+2348175935137">0817 593 5137</a> or <a href="tel:+2349094409585">0909 440 9585</a> as early as possible if you need to cancel or amend a reservation.</p>

    <h2>4. Hotel Rules &amp; Conduct</h2>
    <p>Guests are expected to conduct themselves respectfully and in accordance with hotel policies during their stay, including with respect to noise, guest visitation, and use of shared facilities such as the Exotic Bar, Workman's Lounge, and Exclusive Hall. We reserve the right to refuse service or request a guest to vacate the premises in cases of misconduct.</p>

    <h2>5. Exclusive Hall &amp; Event Bookings</h2>
    <p>Bookings for the Exclusive Hall for conferences, seminars, or other events are subject to separate terms which will be provided at the time of enquiry, including any deposit, capacity, and equipment usage terms.</p>

    <h2>6. Pricing</h2>
    <p>All prices for rooms, suites, and hall bookings are quoted in Nigerian Naira (₦) unless otherwise stated, and are subject to change without notice until a booking is confirmed.</p>

    <h2>7. Limitation of Liability</h2>
    <p>While we take reasonable care to keep our website accurate and our premises safe, we do not accept liability for any indirect or consequential loss arising from use of this website or your stay, except where such liability cannot be excluded by law.</p>

    <h2>8. Intellectual Property</h2>
    <p>All content on this website, including photographs, text, and branding, is the property of PointPlux Hotel &amp; Suites and may not be reproduced without permission.</p>

    <h2>9. Governing Law</h2>
    <p>These Terms are governed by the laws of the Federal Republic of Nigeria.</p>

    <h2>10. Contact Us</h2>
    <p>Questions about these Terms can be directed to:</p>
    <p>
      PointPlux Hotel &amp; Suites<br>
      101/102 Joju Road, Sango Otta, Ogun State, Nigeria<br>
      Phone: <a href="tel:+2348175935137">0817 593 5137</a> / <a href="tel:+2349094409585">0909 440 9585</a>
    </p>
  </div>
</section>
`;

module.exports = page({
  title: 'Terms & Conditions | PointPlux Hotel & Suites',
  description: 'Read the terms and conditions for using the PointPlux Hotel & Suites website and for bookings, cancellations, and hotel policies.',
  path: 'terms-and-conditions.html',
  active: '',
  body,
});
