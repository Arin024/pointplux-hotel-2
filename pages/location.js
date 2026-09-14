const { page } = require('../build_site');

const landmarks = [
  ['20', 'minute drive to the popular ancient Olumo Rock'],
  ['20', 'minute drive to MMM Airport, Ikeja'],
  ['15', 'minutes drive to the Faith Tabernacle of Living Faith Church, Bishop David Oyedepo — the second largest church auditorium in the world'],
  ['15', 'minute drive to the newly ultra-modern palace of the Olota of Otta'],
  ['10', 'minute drive to Covenant University and Bells University'],
];

const body = `
<section class="page-hero" style="background-image:url('images/optimized/location-aerial.jpg');">
  <div class="container">
    <div class="breadcrumb"><a href="index.html">Home</a> / Location</div>
    <h1 style="color:#fff;">Location</h1>
    <p style="max-width:620px;color:#e8e8e8;">Right at the commercial heart of Sango Otta, minutes from Ogun State's best-known landmarks.</p>
  </div>
</section>

<section>
  <div class="container split">
    <div class="img-loading-wrap" style="border-radius:10px;">
      <img src="images/optimized/location-aerial.jpg" alt="Aerial view of Sango Otta showing the commercial area surrounding PointPlux Hotel" loading="lazy" width="1600" height="1200">
      <div class="skeleton" style="aspect-ratio:4/3;"></div>
    </div>
    <div>
      <span class="eyebrow">Getting Here</span>
      <h2 class="section-title">Commercial Heart of Sango Otta</h2>
      <p>PointPlux Hotels &amp; Suites is located at the commercial business area of Sango Otta, some buildings away from the popular Abeokuta/Lagos Express Road on Joju Road. We are surrounded by over ten commercial banks, and close to the tourism centres and most popular places in Nigeria listed below.</p>
      <ul class="location-list">
        ${landmarks.map((l, i) => `<li><span class="dot">${i + 1}</span><span>${l[0]} ${l[1]}</span></li>`).join('\n        ')}
      </ul>
    </div>
  </div>
</section>

<section class="section-alt">
  <div class="container">
    <div class="section-head center">
      <span class="eyebrow">Find Us</span>
      <h2 class="section-title">101/102 Joju Road, Sango Otta, Ogun State</h2>
    </div>
    <iframe class="map-embed" title="Map showing PointPlux Hotel & Suites location on Joju Road, Sango Otta"
      src="https://www.google.com/maps?q=Joju+Road,+Sango+Otta,+Ogun+State,+Nigeria&output=embed"
      loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <div class="text-center" style="margin-top:24px;">
      <a class="btn btn-primary" href="https://www.google.com/maps?q=Joju+Road,+Sango+Otta,+Ogun+State,+Nigeria" target="_blank" rel="noopener">Get Directions</a>
    </div>
  </div>
</section>

<section class="cta-band">
  <div class="container">
    <h2 class="section-title">See It for Yourself</h2>
    <p>Book a room or reach out for directions from your specific location.</p>
    <a class="btn btn-dark" href="contact.html">Contact Us</a>
  </div>
</section>
`;

module.exports = page({
  title: 'Location | PointPlux Hotel & Suites, Joju Road, Sango Otta',
  description: 'PointPlux Hotel & Suites is located on Joju Road, Sango Otta — minutes from Olumo Rock, MMM Airport, Covenant University, Bells University & more.',
  path: 'location.html',
  active: 'location.html',
  body,
});
