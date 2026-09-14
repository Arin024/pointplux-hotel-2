const { page, carousel } = require('../build_site');

const suiteNames = ['London', 'Dublin', 'Italy', 'Germany', 'Canada', 'Spain', 'America', 'Nigeria', 'Ghana', 'Gabon'];

const body = `
<section class="page-hero" style="background-image:url('images/optimized/room-suite-alt.jpg');">
  <div class="container">
    <div class="breadcrumb"><a href="index.html">Home</a> / Rooms &amp; Suites</div>
    <h1 style="color:#fff;">Rooms &amp; Suites</h1>
    <p style="max-width:560px;color:#e8e8e8;">Immaculate, comfortable, and individually designed to meet the needs of business and leisure travelers.</p>
  </div>
</section>

<section>
  <div class="container">
    <div class="section-head center">
      <span class="eyebrow">Categories</span>
      <h2 class="section-title">Single Room &middot; Standard Room &middot; Royal Suites</h2>
      <p>Point Plux Hotels &amp; Suites can boast of over 60 rooms across three phases at the same location. Our rooms are spacious, well appointed, and tastefully and luxuriously furnished in present modern taste. Each room is equipped with air-conditioning and modern amenities including digital satellite television, a wardrobe, exotic chairs, and an ensuite bathroom — a haven of relaxation.</p>
      <div class="amenities">
        <span>Air Conditioning</span>
        <span>Digital Satellite TV</span>
        <span>Wardrobe</span>
        <span>Exotic Chairs</span>
        <span>Ensuite Bathroom</span>
        <span>Ceiling Fan</span>
      </div>
    </div>

    <div class="grid grid-3">
      <div class="card">
        <div class="card-img"><img src="images/optimized/room-bed-purple.jpg" alt="Single Room bed at PointPlux Hotel with purple mood lighting" loading="lazy" width="1600" height="1200"></div>
        <div class="card-body">
          <h3>Single Room</h3>
          <p>A comfortable, well-furnished room suited to solo business or leisure travelers, with all core amenities included.</p>
          <div class="amenities"><span>1 Bed</span><span>AC</span><span>DSTV</span></div>
        </div>
      </div>
      <div class="card">
        <div class="card-img"><img src="images/optimized/room-tv-view.jpg" alt="Standard Room at PointPlux Hotel with television, seating chair, and curtains" loading="lazy" width="1600" height="1200"></div>
        <div class="card-body">
          <h3>Standard Room</h3>
          <p>Additional space and furnishing for couples or slightly longer stays, keeping the same comfort standard throughout.</p>
          <div class="amenities"><span>Double Bed</span><span>AC</span><span>Wardrobe</span></div>
        </div>
      </div>
      <div class="card">
        <div class="card-img"><img src="images/optimized/room-suite-alt.jpg" alt="Royal Suite bedroom at PointPlux Hotel with modern ceiling design and mood lighting" loading="lazy" width="1600" height="1200"></div>
        <div class="card-body">
          <h3>Royal Suites</h3>
          <p>Our most spacious category, individually themed and named after cities and countries around the world.</p>
          <div class="amenities"><span>Premium Furnishing</span><span>Ensuite Bath</span></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section-alt">
  <div class="container">
    <div class="section-head center">
      <span class="eyebrow">Royal Suites</span>
      <h2 class="section-title">Themed Suites From Around the World</h2>
      <p>Our Royal Suites carry unique names inspired by cities and countries, each individually designed and warm with natural tones, complemented by crisp linens, hi-tech amenities, and ensuite bathrooms.</p>
    </div>
    <div class="amenities" style="justify-content:center;">
      ${suiteNames.map((n) => `<span>${n}</span>`).join('\n      ')}
    </div>
  </div>
</section>

<section>
  <div class="container split reverse">
    <div class="img-loading-wrap" style="border-radius:10px;">
      <img src="images/optimized/room-london-suite.jpg" alt="London Royal Suite bedroom at PointPlux Hotel with dark accent wall and TV" loading="lazy" width="1600" height="1200">
      <div class="skeleton" style="aspect-ratio:4/3;"></div>
    </div>
    <div>
      <span class="eyebrow">Featured Suite</span>
      <h2 class="section-title">The London Suite</h2>
      <p>Immaculate, comfortable, and individually designed to meet the needs of business and leisure travelers — the London Suite is warm with natural tones and complemented by crisp linens, hi-tech amenities, and an ensuite bathroom.</p>
      <a class="btn btn-primary" href="contact.html">Enquire About This Suite</a>
    </div>
  </div>
</section>

<section class="section-alt">
  <div class="container">
    <div class="section-head center">
      <span class="eyebrow">More Photos</span>
      <h2 class="section-title">Every Suite, Its Own Mood</h2>
      <p>A closer look at our signature accent lighting and themed finishes across the Royal Suites.</p>
    </div>
    ${carousel('rooms-more-carousel', [
      { src: 'images/gallery/room-blue-dark.jpg', alt: 'PointPlux Hotel Royal Suite bedroom with blue mood lighting and striped bedspread', title: 'Royal Suite', desc: 'Deep blue accent lighting for a calm, private atmosphere.' },
      { src: 'images/gallery/room-flag-bedspread.jpg', alt: 'PointPlux Hotel room with America-themed striped bedspread under blue lighting', title: 'America Suite', desc: 'One of our themed Royal Suites, finished with custom bedding.' },
      { src: 'images/gallery/room-purple-curtains.jpg', alt: 'PointPlux Hotel room with orange and navy curtains and white bedding under purple light', title: 'Suite Detail', desc: 'Rich curtain textures and crisp white linens.' },
      { src: 'images/gallery/room-all-blue.jpg', alt: 'PointPlux Hotel room bathed entirely in blue mood lighting', title: 'Mood Lighting', desc: 'Every room is finished with atmospheric accent lighting.' },
    ])}
  </div>
</section>

<section class="cta-band">
  <div class="container">
    <h2 class="section-title">Check Availability Today</h2>
    <p>Tell us your preferred room category and dates — our team will confirm availability quickly.</p>
    <a class="btn btn-dark" href="contact.html">Book a Room</a>
  </div>
</section>
`;

module.exports = page({
  title: 'Rooms & Suites | PointPlux Hotel & Suites, Sango Otta',
  description: 'Single, Standard, and Royal Suite rooms at PointPlux Hotel & Suites — air-conditioned, DSTV, ensuite bathrooms. Themed suites include London, Dublin, Italy & more.',
  path: 'rooms.html',
  active: 'rooms.html',
  body,
});
