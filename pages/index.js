const { page, waLink } = require('../build_site');

const body = `
<section class="hero">
  <div class="hero-slides">
    <div class="hero-slide active" style="background-image:url('images/optimized/phase1-exterior.jpg')" role="img" aria-label="Exterior of PointPlux Hotel Phase 1 on Joju Road, Sango Otta"></div>
    <div class="hero-slide" style="background-image:url('images/optimized/room-london-suite.jpg')" role="img" aria-label="The London-themed Royal Suite bedroom at PointPlux Hotel"></div>
    <div class="hero-slide" style="background-image:url('images/optimized/reception-lobby.jpg')" role="img" aria-label="PointPlux Hotel reception and lobby area"></div>
  </div>
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <span class="hero-eyebrow">Sango Otta &middot; Ogun State &middot; Since 17+ Years</span>
    <h1>Your <em>Comfortability</em> Is Our Concern</h1>
    <p class="lead">PointPlux Hotel &amp; Suites is one of the leading hospitality businesses in Sango Otta — three phases, 60+ rooms, and facilities designed for business, leisure, and everything in between.</p>
    <div class="hero-ctas">
      <a class="btn btn-primary" href="${waLink('Hi PointPlux Hotel, I\u2019d like to book a room. Could you help me check availability?')}" target="_blank" rel="noopener">Book Now</a>
      <a class="btn btn-outline" href="rooms.html">View Rooms &amp; Suites</a>
    </div>
  </div>
  <div class="hero-dots"></div>
</section>

<section>
  <div class="container split">
    <div class="img-loading-wrap" style="border-radius:10px;">
      <img src="images/optimized/reception-lobby.jpg" alt="Interior view of the PointPlux Hotel reception and lobby, lit with blue accent lighting" loading="lazy" width="1200" height="900">
      <div class="skeleton" style="aspect-ratio:4/3;"></div>
    </div>
    <div>
      <span class="eyebrow">Welcome</span>
      <h2 class="section-title">Welcome to PointPlux Hotels &amp; Suites</h2>
      <p>PointPlux Hotel &amp; Suites is one of the leading hospitality businesses across the states, especially at Sango Otta, for over seventeen (17) years of experience. Doing common things uncommonly well is what has led us to becoming leaders in sustained service excellence over the years.</p>
      <p>The building comprises three phases — Phase 1, Phase 2, and Phase 3 — with good-looking attractions, and our services in hospitality provide an experience like no others.</p>
      <a class="btn btn-dark" href="facilities.html">Explore Our Facilities</a>
    </div>
  </div>
</section>

<section class="section-alt">
  <div class="container">
    <div class="section-head center">
      <span class="eyebrow">Our Property</span>
      <h2 class="section-title">Three Phases, One Standard of Comfort</h2>
      <p>Spread across Sango Otta's commercial hub, each phase of PointPlux Hotel &amp; Suites carries the same commitment to comfort and service.</p>
    </div>
    <div class="grid grid-3">
      <div class="card">
        <div class="card-img">
          <span class="card-tag">Phase 1</span>
          <img src="images/optimized/phase1-exterior.jpg" alt="Exterior of PointPlux Hotel Phase 1 building with signage, VIP Exotic Bar, and conference hall on Joju Road" loading="lazy" width="1600" height="1200">
        </div>
        <div class="card-body">
          <h3>Phase 1</h3>
          <p>Our flagship building featuring the Point Plux Lodge, VIP Exotic Bar, conference hall, uninterrupted power supply, and round-the-clock security.</p>
        </div>
      </div>
      <div class="card">
        <div class="card-img">
          <span class="card-tag">Phase 2</span>
          <img src="images/optimized/phase2-exterior.jpg" alt="Exterior of PointPlux Hotel Phase 2 building entrance and gated compound" loading="lazy" width="1600" height="1200">
        </div>
        <div class="card-body">
          <h3>Phase 2</h3>
          <p>A quieter extension of the property offering the same PointPlux comfort in a more relaxed, gated setting.</p>
        </div>
      </div>
      <div class="card">
        <div class="card-img">
          <span class="card-tag">Phase 3</span>
          <img src="images/optimized/room-tv-view.jpg" alt="PointPlux Hotel guest room interior with television and modern lighting" loading="lazy" width="1600" height="1200">
        </div>
        <div class="card-body">
          <h3>Phase 3</h3>
          <p>Rounding out our 60+ rooms across the property, Phase 3 continues our promise of spacious, well-appointed comfort.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section>
  <div class="container">
    <div class="section-head center">
      <span class="eyebrow">Rooms &amp; Suites</span>
      <h2 class="section-title">Spacious, Modern, and Tastefully Furnished</h2>
      <p>Every room is air-conditioned and equipped with digital satellite TV, a wardrobe, exotic chairs, and an ensuite bathroom — a haven of relaxation for business and leisure travelers alike.</p>
    </div>
    <div class="grid grid-3">
      <div class="card">
        <div class="card-img"><img src="images/optimized/room-bed-purple.jpg" alt="Single Room at PointPlux Hotel with double bed and mood lighting" loading="lazy" width="1600" height="1200"></div>
        <div class="card-body">
          <h3>Single Room</h3>
          <p>A cosy, well-furnished room ideal for solo travelers.</p>
          <span class="card-link"><a href="rooms.html">See details →</a></span>
        </div>
      </div>
      <div class="card">
        <div class="card-img"><img src="images/optimized/room-tv-view.jpg" alt="Standard Room at PointPlux Hotel with television and seating" loading="lazy" width="1600" height="1200"></div>
        <div class="card-body">
          <h3>Standard Room</h3>
          <p>Extra space and amenities for couples or short business stays.</p>
          <span class="card-link"><a href="rooms.html">See details →</a></span>
        </div>
      </div>
      <div class="card">
        <div class="card-img"><img src="images/optimized/room-london-suite.jpg" alt="London-themed Royal Suite bedroom at PointPlux Hotel" loading="lazy" width="1600" height="1200"></div>
        <div class="card-body">
          <h3>Royal Suites</h3>
          <p>Themed suites — London, Dublin, Italy, Germany, Canada, Spain, America, Nigeria, Ghana, Gabon &amp; more.</p>
          <span class="card-link"><a href="rooms.html">See details →</a></span>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section-alt">
  <div class="container">
    <div class="section-head center">
      <span class="eyebrow">Facilities</span>
      <h2 class="section-title">Relax, Unwind, and Meet in Style</h2>
    </div>
    <div class="grid grid-3">
      <div class="card">
        <div class="card-img"><img src="images/optimized/exotic-bar.jpg" alt="Exotic Bar lounge seating area at PointPlux Hotel with blue mood lighting" loading="lazy" width="1600" height="1200"></div>
        <div class="card-body"><h3>Exotic Bar</h3><p>Relax, watch live matches, and enjoy your favourite drinks with friends and family.</p></div>
      </div>
      <div class="card">
        <div class="card-img"><img src="images/gallery/pool-night-purple.jpg" alt="PointPlux Hotel outdoor swimming pool lit purple at night" loading="lazy" width="1600" height="1200"></div>
        <div class="card-body"><h3>Swimming Pool</h3><p>A private outdoor pool with poolside seating, open day and night.</p></div>
      </div>
      <div class="card">
        <div class="card-img"><img src="images/gallery/dj-nightlife-setup.jpg" alt="DJ booth and sound system set up at PointPlux Hotel for a live event" loading="lazy" width="1600" height="1200"></div>
        <div class="card-body"><h3>Nightlife &amp; Events</h3><p>Live DJ sets and a buzzing bar scene keep the evening going.</p></div>
      </div>
      <div class="card">
        <div class="card-img"><img src="images/optimized/workman-lounge.jpg" alt="Workman's Lounge dining and seating area at PointPlux Hotel" loading="lazy" width="1600" height="1200"></div>
        <div class="card-body"><h3>Workman's Lounge</h3><p>A cozy space for light meals, local and international refreshments, and business meetings.</p></div>
      </div>
      <div class="card">
        <div class="card-img"><img src="images/optimized/lounge.jpg" alt="Outdoor lounge seating area at PointPlux Hotel" loading="lazy" width="1600" height="1200"></div>
        <div class="card-body"><h3>Lounge &amp; Exclusive Hall</h3><p>An outdoor lounge plus a 50+ seat hall equipped for conferences, seminars, and congresses.</p></div>
      </div>
      <div class="card">
        <div class="card-img"><img src="images/gallery/security-team.jpg" alt="PointPlux Hotel security team in tactical gear on duty" loading="lazy" width="1600" height="1200"></div>
        <div class="card-body"><h3>Security &amp; Laundry</h3><p>Round-the-clock security plus on-site laundry, ironing, and folding.</p></div>
      </div>
    </div>
    <div class="text-center" style="margin-top:32px;">
      <a class="btn btn-dark" href="gallery.html">View Full Photo Gallery</a>
    </div>
  </div>
</section>

<section>
  <div class="container">
    <div class="section-head center">
      <span class="eyebrow">Location</span>
      <h2 class="section-title">Right in the Heart of Sango Otta</h2>
      <p>Some buildings away from the popular Abeokuta/Lagos Express Road on Joju Road — surrounded by over ten commercial banks and close to Ogun State's most popular landmarks.</p>
    </div>
    <a class="btn btn-dark" href="location.html">View Full Location Details</a>
  </div>
</section>

<section class="cta-band">
  <div class="container">
    <h2 class="section-title">Ready to Experience PointPlux?</h2>
    <p>Reach out today to check room availability or book the Exclusive Hall for your next event.</p>
    <a class="btn btn-dark" href="contact.html">Enquire Now</a>
  </div>
</section>
`;

module.exports = page({
  title: 'PointPlux Hotel & Suites | Hotel in Sango Otta, Ogun State',
  description: 'PointPlux Hotel & Suites — 17+ years of hospitality in Sango Otta. Three phases, 60+ rooms, Exotic Bar, Workman\'s Lounge & Exclusive Hall. Book now.',
  path: 'index.html',
  active: 'index.html',
  body,
});
