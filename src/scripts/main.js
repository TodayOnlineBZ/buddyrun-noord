// Buddy Run Noord — interactie: header, menu, reveal, scrolllijn, parallax, lightbox, formulierpanelen.
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const reduced = document.documentElement.classList.contains('rm');

/* ---------- Header ---------- */
const hdr = $('#hdr');
const menuBtn = $('#menu-btn');
const mnav = $('#mnav');
let menuOpen = false;

function setHeader() {
  const sc = window.scrollY > 40;
  hdr.classList.toggle('is-sc', sc || menuOpen);
}
function setMenu(open) {
  menuOpen = open;
  mnav.hidden = !open;
  menuBtn.setAttribute('aria-expanded', String(open));
  menuBtn.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
  $('.i-open', menuBtn).toggleAttribute('hidden', open);
  $('.i-close', menuBtn).toggleAttribute('hidden', !open);
  setHeader();
}
menuBtn.addEventListener('click', () => setMenu(!menuOpen));
$$('a', mnav).forEach((a) => a.addEventListener('click', () => setMenu(false)));
mnav.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') { setMenu(false); menuBtn.focus(); }
});
window.matchMedia('(min-width: 901px)').addEventListener('change', (m) => { if (m.matches) setMenu(false); });

/* ---------- Reveal ---------- */
const rvEls = $$('.rv');
if (reduced || !('IntersectionObserver' in window)) {
  rvEls.forEach((el) => el.classList.add('in'));
} else {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
  rvEls.forEach((el) => io.observe(el));
}

/* ---------- Scrolllijn ---------- */
const journey = $('#journey');
const jline = $('#jline');
const jpath = $('#jpath');
let L = 0;
function buildPath() {
  const w = journey.offsetWidth, h = journey.offsetHeight;
  if (!w || !h) return;
  const X = (f) => Math.round(w * f), Y = (f) => Math.round(h * f);
  jline.setAttribute('viewBox', `0 0 ${w} ${h}`);
  jline.setAttribute('preserveAspectRatio', 'none');
  jpath.setAttribute('d',
    `M ${X(.05)} 0 C ${X(.3)} ${Y(.06)}, ${X(.97)} ${Y(.04)}, ${X(.955)} ${Y(.17)}` +
    ` S ${X(.015)} ${Y(.36)}, ${X(.03)} ${Y(.5)}` +
    ` S ${X(.985)} ${Y(.64)}, ${X(.965)} ${Y(.78)}` +
    ` S ${X(.35)} ${Y(.95)}, ${X(.5)} ${h}`);
  L = jpath.getTotalLength();
  jpath.style.strokeDasharray = `${L} ${L}`;
}
function drawPath() {
  if (!L) return;
  if (reduced) { jpath.style.strokeDashoffset = '0'; return; }
  const r = journey.getBoundingClientRect();
  const vh = window.innerHeight;
  const p = Math.min(1, Math.max(0, (vh * 0.7 - r.top) / Math.max(1, r.height)));
  jpath.style.strokeDashoffset = String(L * (1 - p));
}

/* ---------- Parallax (alleen desktop) ---------- */
const pars = $$('[data-par="1"]');
function parallax() {
  const on = !reduced && window.innerWidth >= 1024;
  const vh = window.innerHeight;
  pars.forEach((el) => {
    if (!on) { el.style.transform = ''; return; }
    const r = el.parentElement.getBoundingClientRect();
    const d = r.top + r.height / 2 - vh / 2;
    const t = Math.max(-16, Math.min(16, d * -0.05));
    el.style.transform = `translate3d(0, ${t.toFixed(1)}px, 0)`;
  });
}

let raf = 0;
function tick() { raf = 0; setHeader(); drawPath(); parallax(); }
window.addEventListener('scroll', () => { if (!raf) raf = requestAnimationFrame(tick); }, { passive: true });
window.addEventListener('resize', () => { buildPath(); tick(); });
window.addEventListener('load', () => { buildPath(); tick(); });
if ('ResizeObserver' in window) new ResizeObserver(() => { buildPath(); drawPath(); }).observe(journey);
buildPath(); tick();

/* ---------- Dialoog-hulpjes ---------- */
let lastTrigger = null;
function trapTab(e, root) {
  if (e.key !== 'Tab') return;
  const f = $$('button, a[href], input, textarea', root).filter((el) => el.tabIndex !== -1 && !el.disabled && el.offsetParent !== null);
  if (!f.length) return;
  const first = f[0], last = f[f.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
}
function lockScroll(on) { document.body.style.overflow = on ? 'hidden' : ''; }

/* ---------- Lightbox (per lijst: sfeer, e25, e26) ---------- */
const lb = $('#lb');
const lbImg = $('#lb-img');
const lists = {};
$$('[data-lb-list]').forEach((b) => {
  const k = b.dataset.lbList;
  (lists[k] = lists[k] || []).push(b);
});
const lbTitles = { sfeer: 'Foto’s uit de sfeercollage', e25: 'Foto’s editie 2025', e26: 'Foto’s editie 2026' };
let lbKey = 'sfeer';
let lbIndex = -1;
function showLb(i) {
  const items = lists[lbKey];
  lbIndex = (i + items.length) % items.length;
  const b = items[lbIndex];
  lbImg.src = b.dataset.full;
  lbImg.alt = b.dataset.alt;
  $('#lb-cap').textContent = b.dataset.alt;
  $('#lb-pos').textContent = `${b.dataset.year} · ${lbIndex + 1} / ${items.length}`;
  const n = items[(lbIndex + 1) % items.length];
  const pre = new Image(); pre.src = n.dataset.full;
}
function openLb(key, i) {
  lastTrigger = document.activeElement;
  lbKey = key;
  lb.setAttribute('aria-label', lbTitles[key] || 'Foto’s');
  pauseReel();
  showLb(i);
  lb.hidden = false;
  lockScroll(true);
  $('#lb-close').focus();
}
function closeLb() {
  lb.hidden = true;
  lockScroll(false);
  lbIndex = -1;
  if (lastTrigger) lastTrigger.focus();
}
Object.keys(lists).forEach((k) => lists[k].forEach((b, i) => b.addEventListener('click', () => openLb(k, i))));
$('#lb-prev').addEventListener('click', () => showLb(lbIndex - 1));
$('#lb-next').addEventListener('click', () => showLb(lbIndex + 1));
$$('[data-close]', lb).forEach((b) => b.addEventListener('click', closeLb));
lb.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') { e.preventDefault(); closeLb(); }
  else if (e.key === 'ArrowRight') { e.preventDefault(); showLb(lbIndex + 1); }
  else if (e.key === 'ArrowLeft') { e.preventDefault(); showLb(lbIndex - 1); }
  else trapTab(e, lb);
});
let tx = null;
lb.addEventListener('touchstart', (e) => { tx = e.touches[0].clientX; }, { passive: true });
lb.addEventListener('touchend', (e) => {
  if (tx === null) return;
  const dx = e.changedTouches[0].clientX - tx;
  if (Math.abs(dx) > 50) showLb(lbIndex + (dx < 0 ? 1 : -1));
  tx = null;
});

/* ---------- Video 2026 ---------- */
const reel = $('#reel');
const reelCover = $('#reel-cover');
function pauseReel() { if (reel && !reel.paused) reel.pause(); }
if (reel && reelCover) {
  reelCover.addEventListener('click', () => {
    reel.controls = true;
    reel.muted = false;
    reelCover.hidden = true;
    const p = reel.play();
    if (p && p.catch) p.catch(() => {});
    reel.focus();
  });
  reel.addEventListener('ended', () => {
    reel.controls = false;
    try { reel.currentTime = 0; } catch (err) { /* */ }
    reel.load(); // toont de cover-afbeelding weer
    reelCover.hidden = false;
  });
}

/* ---------- Edities (tabs) ---------- */
const tabs = $$('#ed-tabs [role="tab"]');
function selectEd(y, focus) {
  tabs.forEach((t) => {
    const on = t.dataset.ed === y;
    t.classList.toggle('on', on);
    t.setAttribute('aria-selected', String(on));
    t.tabIndex = on ? 0 : -1;
    const panelEl = document.getElementById(t.getAttribute('aria-controls'));
    if (on && panelEl.hidden) {
      panelEl.hidden = false;
      // animatie opnieuw starten bij het wisselen
      panelEl.style.animation = 'none'; void panelEl.offsetWidth; panelEl.style.animation = '';
      $$('.thumbs > *, .ed-hero img', panelEl).forEach((el) => { el.style.animation = 'none'; void el.offsetWidth; el.style.animation = ''; });
    } else if (!on) {
      panelEl.hidden = true;
    }
    if (on && focus) t.focus();
  });
  if (y !== '2026') pauseReel();
  buildPath(); drawPath();
}
tabs.forEach((t) => t.addEventListener('click', () => selectEd(t.dataset.ed, false)));
$('#ed-tabs').addEventListener('keydown', (e) => {
  const cur = tabs.findIndex((t) => t.getAttribute('aria-selected') === 'true');
  let next = -1;
  if (e.key === 'ArrowRight') next = (cur + 1) % tabs.length;
  else if (e.key === 'ArrowLeft') next = (cur - 1 + tabs.length) % tabs.length;
  else if (e.key === 'Home') next = 0;
  else if (e.key === 'End') next = tabs.length - 1;
  if (next < 0) return;
  e.preventDefault();
  selectEd(tabs[next].dataset.ed, true);
});

/* ---------- Formulierpanelen (demo) ---------- */
const cfg = JSON.parse($('#panel-config').textContent);
const panel = $('#panel');
const form = $('#panel-form');
const formWrap = $('#panel-form-wrap');
const ok = $('#panel-ok');
const fldBedrijf = $('#fld-bedrijf');
let panelType = 'deelnemer';

function clearErrors() {
  $$('.err', form).forEach((el) => { el.hidden = true; el.textContent = ''; });
  $$('input', form).forEach((el) => el.removeAttribute('aria-invalid'));
  $('#errsum').hidden = true;
}
function openPanel(type) {
  panelType = cfg[type] ? type : 'deelnemer';
  pauseReel();
  const c = cfg[panelType];
  lastTrigger = document.activeElement;
  setMenu(false);
  $('#panel-title').textContent = c.title;
  $('#panel-intro').textContent = c.intro;
  $('#panel-submit').textContent = c.submit;
  fldBedrijf.hidden = !c.company;
  form.reset();
  clearErrors();
  $('#sendfail').hidden = true;
  formWrap.hidden = false;
  ok.hidden = true;
  panel.hidden = false;
  lockScroll(true);
  setTimeout(() => { const f = $('input:not([hidden])', panel); (c.company ? $('#f-bedrijf') : $('#f-voornaam')).focus(); }, 40);
}
function closePanel() {
  panel.hidden = true;
  lockScroll(false);
  if (lastTrigger) lastTrigger.focus();
}
$$('[data-panel]').forEach((b) => b.addEventListener('click', () => openPanel(b.dataset.panel)));
$$('[data-close]', panel).forEach((b) => b.addEventListener('click', closePanel));
panel.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') { e.preventDefault(); closePanel(); }
  else trapTab(e, panel);
});

let sending = false;
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (sending) return;
  clearErrors();
  $('#sendfail').hidden = true;
  const fd = new FormData(form);
  const v = (k) => String(fd.get(k) || '').trim();
  const errs = {};
  if (cfg[panelType].company && !v('bedrijf')) errs.bedrijf = 'Vul de naam van je bedrijf in.';
  if (!v('voornaam')) errs.voornaam = 'Vul je voornaam in.';
  if (!v('achternaam')) errs.achternaam = 'Vul je achternaam in.';
  const em = v('email');
  if (!em) errs.email = 'Vul je e-mailadres in.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(em)) errs.email = 'Dit e-mailadres lijkt niet te kloppen. Controleer het even.';
  const tel = v('telefoon');
  if (tel && !/^[0-9+()\s-]{8,}$/.test(tel)) errs.telefoon = 'Controleer je telefoonnummer.';

  const keys = Object.keys(errs);
  if (keys.length) {
    keys.forEach((k) => {
      const err = $('#e-' + k);
      err.textContent = errs[k];
      err.hidden = false;
      $('#f-' + k).setAttribute('aria-invalid', 'true');
    });
    $('#errsum').hidden = false;
    $('#f-' + keys[0]).focus();
    return;
  }
  // Spamval: echte bezoekers zien en vullen dit veld niet in
  if (fd.get('botcheck')) return;

  const c = cfg[panelType];
  const naam = `${v('voornaam')} ${v('achternaam')}`.trim();
  const payload = {
    access_key: form.dataset.key,
    subject: c.subject + (c.company && v('bedrijf') ? ` (${v('bedrijf')})` : ''),
    from_name: 'Website Buddy Run Noord',
    replyto: em,
    Formulier: c.title,
    ...(c.company ? { Bedrijfsnaam: v('bedrijf') } : {}),
    Naam: naam,
    'E-mail': em,
    Telefoon: tel || '–',
    Bericht: v('bericht') || '–',
  };

  const btn = $('#panel-submit');
  const label = btn.textContent;
  sending = true;
  btn.disabled = true;
  btn.textContent = 'Versturen…';
  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.success) throw new Error(data.message || 'Versturen mislukt');
    $('#ok-title').textContent = `Bedankt, ${v('voornaam')}!`;
    $('#ok-text').textContent = panelType === 'deelnemer'
      ? 'Je staat op de lijst. Zodra de nieuwe datum bekend is, hoor je het van ons.'
      : 'Je bericht is verstuurd. We nemen zo snel mogelijk contact met je op.';
    form.reset();
    formWrap.hidden = true;
    ok.hidden = false;
    $('button', ok).focus();
  } catch (err) {
    $('#sendfail').hidden = false;
    btn.focus();
  } finally {
    sending = false;
    btn.disabled = false;
    btn.textContent = label;
  }
});
