/* ===================================================
   PointPlux Hotel & Suites — Shared site behaviour
   =================================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Mobile nav toggle (bound first, defensively, so nothing else can block it) ---------- */
  try {
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.querySelector('.main-nav');
    if (toggle && nav) {
      toggle.setAttribute('type', 'button');
      toggle.addEventListener('click', function (e) {
        e.preventDefault();
        var isOpen = nav.classList.toggle('open');
        toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
      nav.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
          nav.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
        });
      });
    }
  } catch (err) {
    console.error('Nav toggle failed to initialize:', err);
  }

  /* ---------- Page loader ---------- */
  var loader = document.querySelector('.page-loader');
  if (loader) {
    window.addEventListener('load', function () {
      setTimeout(function () { loader.classList.add('hide'); }, 200);
    });
    // Safety net in case 'load' already fired
    setTimeout(function () { loader.classList.add('hide'); }, 2500);
  }

  /* ---------- Scroll-reveal animations ---------- */
  try {
    var revealEls = document.querySelectorAll('.reveal, .reveal-img, .reveal-left, .reveal-right');
    if (revealEls.length && 'IntersectionObserver' in window) {
      var revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
      revealEls.forEach(function (el) { revealObserver.observe(el); });
    } else {
      revealEls.forEach(function (el) { el.classList.add('in-view'); });
    }
  } catch (err) {
    console.error('Scroll-reveal failed to initialize:', err);
  }

  /* ---------- Lazy image loading states (skeleton -> loaded) ---------- */
  try {
    document.querySelectorAll('.img-loading-wrap img').forEach(function (img) {
      function markLoaded() { img.classList.add('loaded'); }
      if (img.complete && img.naturalWidth > 0) {
        markLoaded();
      } else {
        img.addEventListener('load', markLoaded);
        img.addEventListener('error', markLoaded);
      }
    });
  } catch (err) { console.error('Image loading states failed:', err); }

  /* ---------- Hero slider ---------- */
  try {
    var slides = document.querySelectorAll('.hero-slide');
    var dotsWrap = document.querySelector('.hero-dots');
    if (slides.length > 1 && dotsWrap) {
      var current = 0;
      slides.forEach(function (_, i) {
        var b = document.createElement('button');
        b.setAttribute('type', 'button');
        b.setAttribute('aria-label', 'Show slide ' + (i + 1));
        if (i === 0) b.classList.add('active');
        b.addEventListener('click', function () { goTo(i); });
        dotsWrap.appendChild(b);
      });
      var dots = dotsWrap.querySelectorAll('button');
      function goTo(i) {
        slides[current].classList.remove('active');
        dots[current].classList.remove('active');
        current = i;
        slides[current].classList.add('active');
        dots[current].classList.add('active');
      }
      setInterval(function () {
        goTo((current + 1) % slides.length);
      }, 5500);
    }
  } catch (err) { console.error('Hero slider failed:', err); }

  /* ---------- Cookie consent banner ---------- */
  try {
    var COOKIE_KEY = 'pointplux_cookie_consent';
    var banner = document.querySelector('.cookie-banner');
    if (banner) {
      var stored = localStorage.getItem(COOKIE_KEY);
      if (!stored) {
        setTimeout(function () { banner.classList.add('show'); }, 600);
      }
      var acceptBtn = banner.querySelector('[data-cookie="accept"]');
      var declineBtn = banner.querySelector('[data-cookie="decline"]');
      if (acceptBtn) acceptBtn.addEventListener('click', function () {
        localStorage.setItem(COOKIE_KEY, 'accepted');
        banner.classList.remove('show');
        initAnalytics();
      });
      if (declineBtn) declineBtn.addEventListener('click', function () {
        localStorage.setItem(COOKIE_KEY, 'declined');
        banner.classList.remove('show');
      });
      if (stored === 'accepted') initAnalytics();
    }
  } catch (err) { console.error('Cookie banner failed:', err); }

  function initAnalytics() {
    if (window.__pointpluxLoadAnalytics) window.__pointpluxLoadAnalytics();
  }

  /* ---------- Contact / enquiry form validation ---------- */
  try {
  var form = document.querySelector('#enquiry-form');
  if (form) {
    var submitBtn = form.querySelector('button[type="submit"]');

    function showError(field, message) {
      field.setAttribute('aria-invalid', 'true');
      var err = form.querySelector('[data-error-for="' + field.name + '"]');
      if (err) { err.textContent = message; err.classList.add('show'); }
    }
    function clearError(field) {
      field.removeAttribute('aria-invalid');
      var err = form.querySelector('[data-error-for="' + field.name + '"]');
      if (err) { err.classList.remove('show'); }
    }
    function validateField(field) {
      var value = field.value.trim();
      if (field.hasAttribute('required') && !value) {
        showError(field, 'This field is required.');
        return false;
      }
      if (field.type === 'email' && value) {
        var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRe.test(value)) { showError(field, 'Enter a valid email address.'); return false; }
      }
      if (field.type === 'tel' && value) {
        var phoneRe = /^[0-9+()\s-]{7,}$/;
        if (!phoneRe.test(value)) { showError(field, 'Enter a valid phone number.'); return false; }
      }
      clearError(field);
      return true;
    }

    form.querySelectorAll('input, textarea, select').forEach(function (field) {
      field.addEventListener('blur', function () { validateField(field); });
      field.addEventListener('input', function () {
        if (field.getAttribute('aria-invalid') === 'true') validateField(field);
      });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var fields = form.querySelectorAll('input, textarea, select');
      var valid = true;
      fields.forEach(function (f) { if (!validateField(f)) valid = false; });

      var statusBox = form.querySelector('.form-status');

      if (!valid) {
        if (statusBox) {
          statusBox.textContent = 'Please fix the highlighted fields and try again.';
          statusBox.className = 'form-status show error';
        }
        var firstInvalid = form.querySelector('[aria-invalid="true"]');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      // Loading state
      submitBtn.classList.add('is-loading');
      submitBtn.disabled = true;

      // Build a WhatsApp message from the form fields and hand the enquiry
      // straight to WhatsApp — no backend/server required.
      var WHATSAPP_NUMBER = '2347030091259'; // +234 703 009 1259
      var data = new FormData(form);
      var name = (data.get('name') || '').trim();
      var email = (data.get('email') || '').trim();
      var phone = (data.get('phone') || '').trim();
      var interestSelect = form.querySelector('#interest');
      var interestLabel = interestSelect ? interestSelect.options[interestSelect.selectedIndex].text : '';
      var message = (data.get('message') || '').trim();

      var lines = [
        'Hi PointPlux Hotel, I\u2019d like to make an enquiry:',
        'Name: ' + name,
        'Email: ' + email,
        'Phone: ' + phone,
        'Interested in: ' + interestLabel,
        'Message: ' + message,
      ];
      var waText = encodeURIComponent(lines.join('\n'));
      var waUrl = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + waText;

      setTimeout(function () {
        submitBtn.classList.remove('is-loading');
        submitBtn.disabled = false;
        // Open WhatsApp with the enquiry pre-filled, ready to send...
        window.open(waUrl, '_blank', 'noopener');
        // ...and confirm on-screen so the visitor knows it went through.
        window.location.href = 'thank-you.html';
      }, 700);
    });
  }
  } catch (err) { console.error('Form validation failed:', err); }

  /* ---------- Image carousels (supports multiple per page) ---------- */
  try {
    document.querySelectorAll('.carousel').forEach(function (carousel) {
      var track = carousel.querySelector('.carousel-track');
      var slides = carousel.querySelectorAll('.carousel-slide');
      var dotsWrap = carousel.querySelector('.carousel-dots');
      var prevBtn = carousel.querySelector('.carousel-arrow.prev');
      var nextBtn = carousel.querySelector('.carousel-arrow.next');
      if (!track || slides.length < 2) return;

      var idx = 0;
      if (dotsWrap) {
        slides.forEach(function (_, i) {
          var b = document.createElement('button');
          b.setAttribute('type', 'button');
          b.setAttribute('aria-label', 'Go to photo ' + (i + 1));
          if (i === 0) b.classList.add('active');
          b.addEventListener('click', function () { goTo(i); });
          dotsWrap.appendChild(b);
        });
      }
      var dots = dotsWrap ? dotsWrap.querySelectorAll('button') : [];

      function goTo(i) {
        idx = (i + slides.length) % slides.length;
        track.style.transform = 'translateX(-' + (idx * 100) + '%)';
        dots.forEach(function (d, di) { d.classList.toggle('active', di === idx); });
      }

      if (prevBtn) prevBtn.addEventListener('click', function () { goTo(idx - 1); });
      if (nextBtn) nextBtn.addEventListener('click', function () { goTo(idx + 1); });

      var startX = null;
      track.addEventListener('touchstart', function (e) { startX = e.touches[0].clientX; }, { passive: true });
      track.addEventListener('touchend', function (e) {
        if (startX === null) return;
        var delta = e.changedTouches[0].clientX - startX;
        if (Math.abs(delta) > 40) { goTo(delta < 0 ? idx + 1 : idx - 1); }
        startX = null;
      }, { passive: true });

      var autoplay = setInterval(function () { goTo(idx + 1); }, 5000);
      carousel.addEventListener('mouseenter', function () { clearInterval(autoplay); });
      carousel.addEventListener('touchstart', function () { clearInterval(autoplay); }, { passive: true });
    });
  } catch (err) { console.error('Carousel failed to initialize:', err); }

});
