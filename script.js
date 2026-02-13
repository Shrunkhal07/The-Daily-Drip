// ═══════════════════════════════════════
// THE DAILY DRIP — Main JavaScript
// ═══════════════════════════════════════

// ── Date Display ──
document.addEventListener('DOMContentLoaded', function () {
  const now = new Date();
  const opts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formatted = now.toLocaleDateString('en-IN', opts);

  const dateEl = document.getElementById('dateDisplay');
  if (dateEl) dateEl.textContent = formatted.toUpperCase();

  const dailyEl = document.getElementById('dailyDate');
  if (dailyEl) dailyEl.textContent = formatted;

  // Set schema datePublished on briefing articles
  document.querySelectorAll('meta[itemprop="datePublished"]').forEach(function (el) {
    el.setAttribute('content', now.toISOString().split('T')[0]);
  });
});

// ── Tab Switching (Homepage) ──
document.querySelectorAll('.nav-tab[data-page]').forEach(function (tab) {
  tab.addEventListener('click', function () {
    document.querySelectorAll('.nav-tab').forEach(function (t) { t.classList.remove('active'); });
    document.querySelectorAll('.page').forEach(function (p) { p.classList.remove('active'); });
    tab.classList.add('active');
    var page = document.getElementById(tab.dataset.page);
    if (page) page.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Close mobile nav if open
    var mobileNav = document.querySelector('.mobile-nav');
    if (mobileNav) mobileNav.classList.remove('open');
  });
});

// ── Briefing Expand/Collapse ──
function toggleBrief(el) {
  var card = el.closest('.brief-card');
  if (card) card.classList.toggle('open');
}

// ── Newsletter Subscribe Handler ──
function handleSubscribe(btn) {
  var form = btn.closest('.nl-form');
  if (!form) return;
  var input = form.querySelector('input');
  if (input && input.value && input.value.includes('@')) {
    btn.textContent = '✓ Subscribed!';
    btn.style.background = '#1A8C5E';
    input.value = '';
    setTimeout(function () {
      btn.textContent = 'Subscribe Free';
      btn.style.background = '';
    }, 3000);
  } else {
    input.style.borderColor = '#D4362C';
    input.setAttribute('placeholder', 'Please enter a valid email');
    setTimeout(function () {
      input.style.borderColor = '';
      input.setAttribute('placeholder', 'you@company.com');
    }, 2000);
  }
}

// ── Smooth scroll for anchor links ──
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    var target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
