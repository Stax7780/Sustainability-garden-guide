// Share button — Web Share API on mobile, clipboard copy on desktop
async function sharePage() {
  const btn = document.getElementById('share-btn');
  const url   = window.location.href;
  const title = document.title;

  if (navigator.share) {
    try {
      await navigator.share({ title, url });
    } catch (e) {
      // User cancelled — do nothing
    }
  } else {
    try {
      await navigator.clipboard.writeText(url);
      const original = btn.textContent;
      btn.textContent = '✓ Copied!';
      btn.style.color = '#a8e870';
      setTimeout(() => {
        btn.textContent = original;
        btn.style.color = '';
      }, 2000);
    } catch (e) {
      // Clipboard not available — prompt fallback
      prompt('Copy this link:', url);
    }
  }
}

// Dark mode toggle — persists via localStorage
(function () {
  const root = document.documentElement;
  const stored = localStorage.getItem('theme');
  if (stored) root.setAttribute('data-theme', stored);
  else if (window.matchMedia('(prefers-color-scheme: dark)').matches)
    root.setAttribute('data-theme', 'dark');
})();

function toggleTheme() {
  const root = document.documentElement;
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateToggleLabel();
}

function updateToggleLabel() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  const dark = document.documentElement.getAttribute('data-theme') === 'dark';
  btn.textContent = dark ? '☀ Light' : '☾ Dark';
  btn.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
}

document.addEventListener('DOMContentLoaded', updateToggleLabel);

// Abbreviate calendar month headers on small screens
function abbreviateCalendarMonths() {
  const abbr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  if (window.innerWidth > 700) return;
  document.querySelectorAll('.month-col').forEach(function(th, i) {
    if (i < 12) th.textContent = abbr[i];
  });
}
document.addEventListener('DOMContentLoaded', abbreviateCalendarMonths);
window.addEventListener('resize', abbreviateCalendarMonths);

// Mobile nav toggle
function toggleNav() {
  const nav = document.querySelector('.site-nav');
  if (nav) nav.classList.toggle('open');
}

// Back to top
document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', function () {
    btn.classList.toggle('visible', window.scrollY > 400);
  });
  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
