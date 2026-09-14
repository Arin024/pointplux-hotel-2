const { page } = require('../build_site');

const body = `
<section class="page-hero" style="background-image:url('images/optimized/exotic-bar.jpg');">
  <div class="container">
    <div class="breadcrumb"><a href="index.html">Home</a> / Facilities</div>
    <h1 style="color:#fff;">Facilities</h1>
    <p style="max-width:560px;color:#e8e8e8;">From late-night drinks to daytime business meetings, PointPlux has a space for every occasion.</p>
  </div>
</section>

<div class="feature-row">
  <div class="feature-media" style="background-image:url('images/optimized/exotic-bar.jpg');" role="img" aria-label="Exotic Bar seating area with blue mood lighting at PointPlux Hotel"></div>
  <div class="feature-text">
    <span class="eyebrow">Exotic Bar</span>
    <h2 class="section-title">Come, Relax, and Unwind</h2>
    <p>Come, relax, watch live matches, and enjoy a fun time with friends and family at our Exotic Bar. The bar is an ideal space to relax, unwind, and mingle with friends and family while enjoying your favourite drinks.</p>
  </div>
</div>

<div class="feature-row">
  <div class="feature-media" style="background-image:url('images/gallery/workmans-bar-night.jpg');" role="img" aria-label="Workman's Bar signage lit up at night with guests socialising at PointPlux Hotel"></div>
  <div class="feature-text">
    <span class="eyebrow">Workman's Lounge</span>
    <h2 class="section-title">Meals, Meetings &amp; Match Day</h2>
    <p>With its comfortable chairs, the bar is a cozy space for light meals — both local and international refreshments — throughout the day and into the evening with its relaxed, welcoming atmosphere.</p>
    <p>The Workman's Lounge is the best place to take a business meeting and enjoy a glass of beer while watching your favourite sport.</p>
  </div>
</div>

<div class="feature-row">
  <div class="feature-media" style="background-image:url('images/gallery/pool-day-empty.jpg');" role="img" aria-label="Outdoor pool and lounge area at PointPlux Hotel"></div>
  <div class="feature-text">
    <span class="eyebrow">Lounge</span>
    <h2 class="section-title">An Easy Space to Settle In</h2>
    <p>A relaxed indoor-outdoor lounge area, perfect for a quiet drink or catching up with guests before heading up to your room.</p>
  </div>
</div>

<div class="feature-row">
  <div class="feature-media" style="background: linear-gradient(120deg, #4a3f5c, #6c5c85); display:flex; align-items:center; justify-content:center;">
  </div>
  <div class="feature-text">
    <span class="eyebrow">Exclusive Hall</span>
    <h2 class="section-title">Conferences, Seminars &amp; Congresses</h2>
    <p>A hall with a seating capacity of over 50 guests, also equipped with advanced and modern audio-visual aids and equipment for conferences, seminars, and congresses.</p>
    <div class="amenities"><span>50+ Seats</span><span>Audio-Visual Equipment</span><span>Event Support</span></div>
    <a class="btn btn-primary" href="contact.html" style="margin-top:10px;width:fit-content;">Enquire About Hosting an Event</a>
  </div>
</div>

<div class="feature-row">
  <div class="feature-media" style="background-image:url('images/gallery/pool-night-blue.jpg');" role="img" aria-label="PointPlux Hotel outdoor swimming pool lit blue at night"></div>
  <div class="feature-text">
    <span class="eyebrow">Swimming Pool</span>
    <h2 class="section-title">Cool Off, Day or Night</h2>
    <p>Take a dip in our private outdoor pool, complete with poolside seating, floats, and drink service. By day it's a relaxed retreat; by night, mood lighting turns it into one of the property's best spots to unwind.</p>
    <a class="btn btn-primary" href="gallery.html" style="margin-top:10px;width:fit-content;">See More Pool Photos</a>
  </div>
</div>

<div class="feature-row">
  <div class="feature-media" style="background-image:url('images/gallery/security-team.jpg');" role="img" aria-label="PointPlux Hotel security team in tactical gear on duty"></div>
  <div class="feature-text">
    <span class="eyebrow">Security</span>
    <h2 class="section-title">Maximum Security, Guaranteed</h2>
    <p>Trained, professional security personnel are on-site around the clock — for everyday peace of mind and for every event hosted at PointPlux.</p>
  </div>
</div>

<div class="feature-row">
  <div class="feature-media" style="background-image:url('images/gallery/laundry-service-flyer.jpg');" role="img" aria-label="PointPlux Laundry Shop service advertisement"></div>
  <div class="feature-text">
    <span class="eyebrow">Laundry Service</span>
    <h2 class="section-title">Laundering, Ironing &amp; Folding</h2>
    <p>On-site laundry service with a quick 48-hour turnaround, so you stay comfortable and put-together throughout your stay.</p>
  </div>
</div>

<section class="cta-band">
  <div class="container">
    <h2 class="section-title">Planning an Event or a Night Out?</h2>
    <p>Get in touch to check availability for the Exclusive Hall, Exotic Bar, or Workman's Lounge.</p>
    <a class="btn btn-dark" href="contact.html">Contact Us</a>
  </div>
</section>
`;

module.exports = page({
  title: 'Facilities | Exotic Bar, Workman\'s Lounge & Exclusive Hall — PointPlux Hotel',
  description: 'Explore PointPlux Hotel & Suites facilities: the Exotic Bar, Workman\'s Lounge, outdoor lounge, and the 50+ seat Exclusive Hall for conferences and events.',
  path: 'facilities.html',
  active: 'facilities.html',
  body,
});
