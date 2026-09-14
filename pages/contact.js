const { page, waLink } = require('../build_site');

const body = `
<section class="page-hero" style="background-image:url('images/optimized/reception-lobby.jpg');">
  <div class="container">
    <div class="breadcrumb"><a href="index.html">Home</a> / Contact</div>
    <h1 style="color:#fff;">Contact Us</h1>
    <p style="max-width:560px;color:#e8e8e8;">Reach out to book a room, enquire about the Exclusive Hall, or ask us anything.</p>
  </div>
</section>

<section>
  <div class="container split">
    <div class="form-card">
      <h2 class="section-title" style="font-size:24px;">Send an Enquiry</h2>
      <p class="small" style="margin-bottom:24px;">Fill in the form below — when you hit send, WhatsApp will open with your message ready to go straight to our team.</p>

      <form id="enquiry-form" novalidate>
        <div class="form-row">
          <label for="name">Full Name <span class="required">*</span></label>
          <input type="text" id="name" name="name" required autocomplete="name">
          <div class="error-msg" data-error-for="name"></div>
        </div>

        <div class="form-row">
          <label for="email">Email Address <span class="required">*</span></label>
          <input type="email" id="email" name="email" required autocomplete="email">
          <div class="error-msg" data-error-for="email"></div>
        </div>

        <div class="form-row">
          <label for="phone">Phone Number <span class="required">*</span></label>
          <input type="tel" id="phone" name="phone" required autocomplete="tel">
          <div class="error-msg" data-error-for="phone"></div>
        </div>

        <div class="form-row">
          <label for="interest">I'm Interested In</label>
          <select id="interest" name="interest">
            <option value="room">Booking a Room / Suite</option>
            <option value="hall">Exclusive Hall / Event</option>
            <option value="bar">Exotic Bar / Lounge</option>
            <option value="other">Something Else</option>
          </select>
        </div>

        <div class="form-row">
          <label for="message">Message <span class="required">*</span></label>
          <textarea id="message" name="message" rows="4" required></textarea>
          <div class="error-msg" data-error-for="message"></div>
        </div>

        <button type="submit" class="btn btn-primary btn-block">
          <span class="btn-label">Send via WhatsApp</span>
          <span class="spinner" aria-hidden="true"></span>
        </button>

        <div class="form-status" role="status" aria-live="polite"></div>
      </form>
    </div>

    <div>
      <span class="eyebrow">Get In Touch</span>
      <h2 class="section-title">We'd Love to Hear From You</h2>
      <p>Whether it's a last-minute room, a wedding, or a corporate seminar in the Exclusive Hall — our team is on hand to help.</p>

      <ul class="location-list">
        <li><span class="dot">📍</span><span>101/102 Joju Road, Sango Otta, Ogun State, Nigeria</span></li>
        <li><span class="dot">☎</span><span><a href="tel:+2348175935137">0817 593 5137</a></span></li>
        <li><span class="dot">☎</span><span><a href="tel:+2349094409585">0909 440 9585</a></span></li>
        <li><span class="dot">💬</span><span><a href="${waLink('Hi PointPlux Hotel, I have an enquiry.')}" target="_blank" rel="noopener">WhatsApp: +234 703 009 1259</a></span></li>
      </ul>

      <div class="img-loading-wrap" style="border-radius:10px;margin-top:24px;">
        <iframe class="map-embed" title="Map showing PointPlux Hotel & Suites location on Joju Road, Sango Otta"
          src="https://www.google.com/maps?q=Joju+Road,+Sango+Otta,+Ogun+State,+Nigeria&output=embed"
          loading="lazy" referrerpolicy="no-referrer-when-downgrade" style="min-height:280px;"></iframe>
      </div>
    </div>
  </div>
</section>
`;

module.exports = page({
  title: 'Contact Us | PointPlux Hotel & Suites, Sango Otta',
  description: 'Contact PointPlux Hotel & Suites on Joju Road, Sango Otta. Call 0817 593 5137 or 0909 440 9585, or send us an enquiry online.',
  path: 'contact.html',
  active: 'contact.html',
  body,
});
