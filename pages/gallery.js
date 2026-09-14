const { page, carousel } = require('../build_site');

const poolSlides = [
  { src: 'images/gallery/pool-day-empty.jpg', alt: 'PointPlux Hotel outdoor swimming pool by day, calm water with pool floats', title: 'Swimming Pool', desc: 'A private outdoor pool with a relaxed poolside seating area.' },
  { src: 'images/gallery/pool-day-guests.jpg', alt: 'Guests relaxing in the PointPlux Hotel swimming pool on inflatable floats', title: 'Poolside Relaxation', desc: 'Cool off and unwind with friends and family.' },
  { src: 'images/gallery/pool-night-blue.jpg', alt: 'PointPlux Hotel swimming pool lit in blue at night', title: 'Pool by Night', desc: 'The pool transforms with mood lighting after dark.' },
  { src: 'images/gallery/pool-night-purple.jpg', alt: 'PointPlux Hotel swimming pool lit in purple at night beside the Rockstar lounge wall', title: 'Evening Ambience', desc: 'A vibrant night-time setting for a swim and a drink.' },
  { src: 'images/gallery/pool-poolside-guests.jpg', alt: 'Guests enjoying drinks poolside at PointPlux Hotel', title: 'Poolside Service', desc: 'Drinks and refreshments served right at the water\u2019s edge.' },
];

const nightlifeSlides = [
  { src: 'images/gallery/dj-nightlife-setup.jpg', alt: 'DJ booth and sound system set up at PointPlux Hotel for a live event', title: 'Live DJ Sets', desc: 'Professional sound and lighting for parties and events.' },
  { src: 'images/gallery/workmans-bar-night.jpg', alt: 'PointPlux Workman\u2019s Bar signage lit up at night with guests socialising', title: "Workman's Bar at Night", desc: 'The bar comes alive in the evening with music and good company.' },
];

const securitySlides = [
  { src: 'images/gallery/security-team.jpg', alt: 'PointPlux Hotel security team in tactical gear on duty at an event', title: 'Professional Security', desc: 'Trained security personnel on-site for every event, day and night.' },
];

const roomsExtraSlides = [
  { src: 'images/gallery/room-blue-dark.jpg', alt: 'PointPlux Hotel Royal Suite bedroom with blue mood lighting and striped bedspread', title: 'Royal Suite', desc: 'Deep blue accent lighting for a calm, private atmosphere.' },
  { src: 'images/gallery/room-flag-bedspread.jpg', alt: 'PointPlux Hotel room with America-themed striped bedspread under blue lighting', title: 'America Suite', desc: 'One of our themed Royal Suites, finished with custom bedding.' },
  { src: 'images/gallery/room-purple-curtains.jpg', alt: 'PointPlux Hotel room with orange and navy curtains and white bedding under purple light', title: 'Suite Detail', desc: 'Rich curtain textures and crisp white linens.' },
  { src: 'images/gallery/room-all-blue.jpg', alt: 'PointPlux Hotel room bathed entirely in blue mood lighting', title: 'Mood Lighting', desc: 'Every room is finished with atmospheric accent lighting.' },
];

const propertySlides = [
  { src: 'images/gallery/staircase-led.jpg', alt: 'PointPlux Hotel staircase lined with blue LED accent lighting', title: 'Staircase Lighting', desc: 'Thoughtful lighting details throughout the property.' },
  { src: 'images/gallery/reception-portraits.jpg', alt: 'PointPlux Hotel reception area with framed portraits, TV, and seating', title: 'Reception Area', desc: 'A warm, attended reception ready to welcome guests.' },
  { src: 'images/gallery/phase2-balcony-view.jpg', alt: 'PointPlux Hotel Phase 2 balcony exterior with international flags', title: 'Phase 2 Balcony', desc: 'Balcony views over the Phase 2 building.' },
  { src: 'images/gallery/phase2-flag-exterior.jpg', alt: 'PointPlux Hotel Phase 2 exterior with the Nigerian flag flying', title: 'Phase 2 Exterior', desc: 'A closer look at the Phase 2 frontage.' },
  { src: 'images/gallery/phase1-exterior-street.jpg', alt: 'Street view of the PointPlux Hotel Phase 1 building signage', title: 'Phase 1 Street View', desc: 'The Point Plux Hotel & Suites Phase 1 building from Joju Road.' },
];

const laundrySlides = [
  { src: 'images/gallery/laundry-service-flyer.jpg', alt: 'PointPlux Laundry Shop service graphic listing laundering, ironing, and folding', title: 'Laundry, Ironing & Folding', desc: '48-hour quick dry cleaning available on-site.' },
];

const body = `
<section class="page-hero" style="background-image:url('images/gallery/pool-night-blue.jpg');">
  <div class="container">
    <div class="breadcrumb"><a href="index.html">Home</a> / Gallery</div>
    <h1 style="color:#fff;">Gallery</h1>
    <p style="max-width:620px;color:#e8e8e8;">A closer look at the pool, nightlife, rooms, and everyday details around PointPlux Hotel &amp; Suites.</p>
  </div>
</section>

<section>
  <div class="container">
    <div class="section-head center">
      <span class="eyebrow">Swimming Pool</span>
      <h2 class="section-title">Cool Off in Style</h2>
      <p>Our private outdoor pool is open day and night, with poolside seating and drink service.</p>
    </div>
    ${carousel('pool-carousel', poolSlides)}
  </div>
</section>

<section class="section-alt">
  <div class="container">
    <div class="section-head center">
      <span class="eyebrow">Nightlife &amp; Entertainment</span>
      <h2 class="section-title">Live DJ Sets &amp; Evening Vibes</h2>
      <p>From live-mixed music to a buzzing bar scene, PointPlux keeps the evening going.</p>
    </div>
    ${carousel('nightlife-carousel', nightlifeSlides)}
  </div>
</section>

<section>
  <div class="container">
    <div class="section-head center">
      <span class="eyebrow">More Rooms &amp; Suites</span>
      <h2 class="section-title">Every Room, Its Own Mood</h2>
      <p>A further look inside our themed Royal Suites and their signature accent lighting.</p>
    </div>
    ${carousel('rooms-extra-carousel', roomsExtraSlides)}
  </div>
</section>

<section class="section-alt">
  <div class="container">
    <div class="section-head center">
      <span class="eyebrow">Security</span>
      <h2 class="section-title">Safety You Can See</h2>
      <p>Professional, trained security personnel are on-site for events and daily operations, day and night.</p>
    </div>
    ${carousel('security-carousel', securitySlides)}
  </div>
</section>

<section>
  <div class="container">
    <div class="section-head center">
      <span class="eyebrow">Laundry Service</span>
      <h2 class="section-title">Laundering, Ironing &amp; Folding</h2>
      <p>On-site laundry service with a quick 48-hour turnaround — because comfort includes clean clothes too.</p>
    </div>
    ${carousel('laundry-carousel', laundrySlides)}
  </div>
</section>

<section class="section-alt">
  <div class="container">
    <div class="section-head center">
      <span class="eyebrow">Around the Property</span>
      <h2 class="section-title">The Little Details</h2>
      <p>From LED-lit staircases to a welcoming reception, comfort shows up in the details.</p>
    </div>
    ${carousel('property-carousel', propertySlides)}
  </div>
</section>

<section class="cta-band">
  <div class="container">
    <h2 class="section-title">Come See It in Person</h2>
    <p>Book a room, or reach out to plan your next event at PointPlux.</p>
    <a class="btn btn-dark" href="contact.html">Contact Us</a>
  </div>
</section>
`;

module.exports = page({
  title: 'Gallery | PointPlux Hotel & Suites, Sango Otta',
  description: 'See the PointPlux Hotel & Suites swimming pool, nightlife, rooms, security, laundry service, and more in our photo gallery.',
  path: 'gallery.html',
  active: 'gallery.html',
  body,
});
