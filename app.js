/* Move My Stuff — Lanarkshire
   Light, dependency-free interactions. */

(() => {
  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  /* ---------- Year ---------- */
  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Theme toggle ---------- */
  const root = document.documentElement;
  const themeButtons = $$('#themeToggle, #themeToggleMobile');
  const currentMode = () => root.getAttribute('data-theme') === 'orange' ? 'orange' : 'navy';
  const syncLabels = () => {
    const next = currentMode() === 'orange' ? 'navy' : 'orange';
    themeButtons.forEach(btn => {
      btn.setAttribute('aria-label', `Switch to ${next} theme`);
      btn.setAttribute('title', `Switch to ${next} theme`);
    });
  };
  syncLabels();
  themeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const next = currentMode() === 'orange' ? 'navy' : 'orange';
      if (next === 'orange') root.setAttribute('data-theme', 'orange');
      else root.removeAttribute('data-theme');
      try { localStorage.setItem('mmsl-theme', next); } catch (e) {}
      syncLabels();
    });
  });

  /* ---------- Header shadow on scroll ---------- */
  const header = $('#siteHeader');
  if (header) {
    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- Mobile menu ---------- */
  const toggle = $('#menuToggle');
  const menu = $('#mobileMenu');
  if (toggle && menu) {
    const setOpen = (open) => {
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      menu.classList.toggle('is-open', open);
      menu.setAttribute('aria-hidden', String(!open));
      document.body.style.overflow = open ? 'hidden' : '';
    };
    toggle.addEventListener('click', () => setOpen(!menu.classList.contains('is-open')));
    $$('a', menu).forEach(a => a.addEventListener('click', () => setOpen(false)));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) setOpen(false);
    });
  }

  /* ---------- Scroll reveal ---------- */
  const reveals = $$('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          const delay = Math.min(i * 60, 240);
          entry.target.style.transitionDelay = `${delay}ms`;
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(el => io.observe(el));

    // Safety net: anything that hasn't revealed within 1.2s gets shown anyway.
    // Covers headless captures and edge cases where IO doesn't fire.
    setTimeout(() => {
      reveals.forEach(el => {
        if (!el.classList.contains('is-in')) {
          const r = el.getBoundingClientRect();
          if (r.top < window.innerHeight) el.classList.add('is-in');
        }
      });
    }, 1200);
  } else {
    reveals.forEach(el => el.classList.add('is-in'));
  }

  /* ---------- Contact form: route to email OR WhatsApp ---------- */
  const form = $('#contactForm');
  if (form) {
    const PHONE_WA = '447850694243';
    const EMAIL    = 'getintouch@movemystuff.info';
    /* Web3Forms access key (https://web3forms.com — free, key arrives by
       email after verifying getintouch@movemystuff.info). While empty,
       the email route falls back to a mailto: link. */
    const WEB3FORMS_KEY = 'e8ebd5fb-5798-4cac-a381-6678217d6035';

    let route = 'email';
    $$('button[data-route]', form).forEach(btn => {
      btn.addEventListener('click', () => { route = btn.dataset.route; });
    });

    const fieldEl = (input) => input.closest('.field');
    const validate = () => {
      let ok = true;
      ['f-name', 'f-phone', 'f-job'].forEach(id => {
        const input = $(`#${id}`);
        const fEl = fieldEl(input);
        const valid = input.value.trim().length > 0;
        fEl.classList.toggle('invalid', !valid);
        if (!valid) ok = false;
      });
      return ok;
    };

    ['f-name', 'f-phone', 'f-job'].forEach(id => {
      const input = $(`#${id}`);
      input.addEventListener('input', () => fieldEl(input).classList.remove('invalid'));
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!validate()) {
        const firstInvalid = $('.field.invalid input, .field.invalid textarea');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      const name    = $('#f-name').value.trim();
      const phone   = $('#f-phone').value.trim();
      const job     = $('#f-job').value.trim();
      const message = $('#f-message').value.trim();

      const serviceLabels = [];
      if ($('#f-service-1man').checked)    serviceLabels.push('1 Man & Van (customer helps load/unload)');
      if ($('#f-service-2person').checked) serviceLabels.push('2 Person Team (we do all the loading)');

      const lines = [
        `Hi Gregg — quote request via the website`,
        ``,
        `Name: ${name}`,
        `Phone: ${phone}`,
        `What needs moved: ${job}`,
        serviceLabels.length ? `Service type: ${serviceLabels.join(', ')}` : null,
        message ? `Notes: ${message}` : null
      ].filter(Boolean).join('\n');

      if (route === 'whatsapp') {
        const url = `https://wa.me/${PHONE_WA}?text=${encodeURIComponent(lines)}`;
        window.open(url, '_blank', 'noopener');
        return;
      }

      const subject = `Quote request from ${name}`;

      if (!WEB3FORMS_KEY) {
        const url = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines)}`;
        window.location.href = url;
        return;
      }

      const status  = $('#formStatus');
      const buttons = $$('.contact-form__actions .btn', form);
      const showStatus = (msg, ok) => {
        status.textContent = msg;
        status.hidden = false;
        status.classList.toggle('is-error', !ok);
      };
      const setSending = (on) => buttons.forEach(b => { b.disabled = on; });

      setSending(true);
      status.hidden = true;
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject,
          from_name: 'Move My Stuff website',
          botcheck: $('#f-botcheck') ? $('#f-botcheck').checked : false,
          name,
          phone,
          'What needs moved': job,
          'Service type': serviceLabels.length ? serviceLabels.join(', ') : 'Not specified',
          'Notes': message || '—'
        })
      })
        .then(r => r.json())
        .then(data => {
          if (!data.success) throw new Error(data.message || 'Send failed');
          form.reset();
          showStatus('Thanks — your message is on its way. Gregg will get back to you soon.', true);
        })
        .catch(() => {
          showStatus("Sorry — that didn't send. Please try WhatsApp instead, or call 07850 694243.", false);
        })
        .finally(() => setSending(false));
    });
  }

  /* ---------- Work carousel ---------- */
  const carousel = $('#workCarousel');
  if (carousel) {
    const track = carousel.querySelector('.wc-track');
    const dots  = [...carousel.querySelectorAll('.wc-dot')];
    const total = dots.length;
    let idx = 0;

    const goTo = (n) => {
      idx = (n + total) % total;
      track.style.transform = `translateX(-${idx * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle('wc-dot--active', i === idx));
      dots.forEach((d, i) => d.setAttribute('aria-selected', i === idx));
    };

    carousel.querySelector('.wc-btn--prev').addEventListener('click', () => goTo(idx - 1));
    carousel.querySelector('.wc-btn--next').addEventListener('click', () => goTo(idx + 1));
    dots.forEach((d, i) => d.addEventListener('click', () => goTo(i)));

    /* Swipe support */
    let startX = 0;
    carousel.addEventListener('pointerdown', e => { startX = e.clientX; });
    carousel.addEventListener('pointerup',   e => {
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 40) goTo(dx < 0 ? idx + 1 : idx - 1);
    });
  }

  /* ---------- Image lightbox (T&Cs + FAQs) ---------- */
  const lightbox = $('#imageLightbox');
  if (lightbox) {
    const SETS = {
      terms: {
        label: 'Terms and conditions',
        srcFor: (i) => `images/terms/tc${i + 1}.jpeg`,
        pages: [
          'Move My Stuff — Lanarkshire light removals terms and conditions, introduction',
          'Section 1 — Customer’s responsibilities',
          'Section 2 — Quotation',
          'Section 3 — Work not included in the quotation',
          'Section 4 — Excluded property',
          'Section 5 — Insurance'
        ]
      },
      faq: {
        label: 'Frequently asked questions',
        srcFor: (i) => `images/faq/faq${i + 1}.jpeg`,
        pages: [
          'FAQs 1 to 4 — services offered, where the waste goes, waste carrier licence, couch and mattress uplifts',
          'FAQs 5 to 8 — pricing for uplifts, scrap collection, vehicle load space, payment methods',
          'FAQs 9 to 12 — removal quotes between two addresses, jobs around your work hours, asbestos garages, taking waste to the local tip'
        ]
      }
    };
    const img      = lightbox.querySelector('.lightbox__img');
    const counter  = lightbox.querySelector('.lightbox__counter');
    const closeBtn = lightbox.querySelector('.lightbox__close');
    let set = SETS.terms;
    let page = 0;
    let lastFocus = null;

    const render = () => {
      img.src = set.srcFor(page);
      img.alt = set.pages[page];
      counter.textContent = `${page + 1} / ${set.pages.length}`;
    };
    const goTo = (n) => { page = (n + set.pages.length) % set.pages.length; render(); };
    const open = (name) => {
      set = SETS[name] || SETS.terms;
      lightbox.setAttribute('aria-label', set.label);
      lastFocus = document.activeElement;
      goTo(0);
      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      closeBtn.focus();
      set.pages.forEach((_, i) => { const pre = new Image(); pre.src = set.srcFor(i); });
    };
    const close = () => {
      lightbox.classList.remove('is-open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      if (lastFocus) lastFocus.focus();
    };

    $$('[data-lightbox]').forEach(a => {
      a.addEventListener('click', (e) => { e.preventDefault(); open(a.dataset.lightbox); });
    });
    closeBtn.addEventListener('click', close);
    lightbox.querySelector('.lightbox__btn--prev').addEventListener('click', () => goTo(page - 1));
    lightbox.querySelector('.lightbox__btn--next').addEventListener('click', () => goTo(page + 1));
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) close(); });
    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('is-open')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') goTo(page - 1);
      if (e.key === 'ArrowRight') goTo(page + 1);
    });

    /* Swipe support */
    let lbStartX = 0;
    lightbox.addEventListener('pointerdown', e => { lbStartX = e.clientX; });
    lightbox.addEventListener('pointerup',   e => {
      const dx = e.clientX - lbStartX;
      if (Math.abs(dx) > 40) goTo(dx < 0 ? page + 1 : page - 1);
    });
  }

  /* ---------- Smooth-scroll offset for sticky header ---------- */
  $$('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id.length <= 1) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const headerH = header ? header.getBoundingClientRect().height : 0;
      const y = target.getBoundingClientRect().top + window.scrollY - (headerH + 12);
      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  });
})();
