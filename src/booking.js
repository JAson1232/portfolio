/* ============================================================
   BOOKING — Calendar scheduling widget
   Firebase Cloud Functions + Google Calendar API
   ============================================================ */

const TZ         = 'Europe/Amsterdam';
const START_HOUR = 17;
const END_HOUR   = 22; // last slot at 21:30
const SLOT_MIN   = 30;

const FUNCTIONS_BASE = `https://us-central1-${import.meta.env.VITE_FIREBASE_PROJECT_ID}.cloudfunctions.net`;

async function callFn(name, data) {
  const res  = await fetch(`${FUNCTIONS_BASE}/${name}`, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify(data),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.error || `HTTP ${res.status}`);
  return json;
}

// ── Time helpers ──────────────────────────────────────────────

function pad(n) { return String(n).padStart(2, '0'); }

function amsOffset(date) {
  const ref  = new Date(date); ref.setUTCHours(12, 0, 0, 0);
  let amsH   = parseInt(
    new Intl.DateTimeFormat('en', { timeZone: TZ, hour: 'numeric', hour12: false }).format(ref), 10,
  );
  if (amsH === 24) amsH = 0;
  let diff = amsH - 12;
  if (diff > 12) diff -= 24;
  if (diff < -12) diff += 24;
  return diff; // +1 CET or +2 CEST
}

function amsToUTC(dateStr, hour, minute) {
  const ref    = new Date(`${dateStr}T12:00:00Z`);
  const off    = amsOffset(ref);
  let utcH     = hour - off;
  const base   = new Date(`${dateStr}T00:00:00Z`);
  if (utcH < 0)   { utcH += 24; base.setUTCDate(base.getUTCDate() - 1); }
  if (utcH >= 24) { utcH -= 24; base.setUTCDate(base.getUTCDate() + 1); }
  const d = base.toISOString().split('T')[0];
  return new Date(`${d}T${pad(utcH)}:${pad(minute)}:00Z`);
}

function amsDateStr(date) {
  return new Intl.DateTimeFormat('en-CA', { timeZone: TZ }).format(date);
}

function generateSlots(dateStr) {
  const slots = [];
  for (let h = START_HOUR; h < END_HOUR; h++) {
    for (let m = 0; m < 60; m += SLOT_MIN) {
      slots.push({
        start: amsToUTC(dateStr, h, m),
        end:   amsToUTC(dateStr, h, m + SLOT_MIN),
        label: `${pad(h)}:${pad(m)}`,
      });
    }
  }
  return slots;
}

function isBusy(slot, busyPeriods) {
  return busyPeriods.some(b => {
    const bs = new Date(b.start), be = new Date(b.end);
    return slot.start < be && slot.end > bs;
  });
}

// ── DOM ───────────────────────────────────────────────────────

const $ = id => document.getElementById(id);

function showStep(step) {
  ['date', 'slot', 'form', 'confirm'].forEach(s => {
    $(`booking-step-${s}`)?.classList.toggle('hidden', s !== step);
  });
}

let _pendingSlot = null;

// ── Date grid ─────────────────────────────────────────────────

function renderDateGrid() {
  const grid = $('booking-date-grid');
  if (!grid) return;
  grid.innerHTML = '';
  const today = new Date();
  for (let i = 1; i <= 14; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    const dateStr = amsDateStr(d);
    const dayName = new Intl.DateTimeFormat('en', { timeZone: TZ, weekday: 'short' }).format(d);
    const dayNum  = new Intl.DateTimeFormat('en', { timeZone: TZ, day:     'numeric' }).format(d);
    const mon     = new Intl.DateTimeFormat('en', { timeZone: TZ, month:   'short'   }).format(d);
    const btn = document.createElement('button');
    btn.className = 'booking-date-btn';
    btn.innerHTML = `<span class="bdb-day">${dayName.toUpperCase()}</span><span class="bdb-num">${dayNum}</span><span class="bdb-mon">${mon.toUpperCase()}</span>`;
    btn.addEventListener('click', () => selectDate(dateStr, d));
    grid.appendChild(btn);
  }
}

// ── Slot grid ─────────────────────────────────────────────────

async function selectDate(dateStr, date) {
  const label = new Intl.DateTimeFormat('en', {
    timeZone: TZ, weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
  }).format(date).toUpperCase();
  const el = $('booking-selected-date');
  if (el) el.textContent = `// ${label}`;
  showStep('slot');
  const grid = $('booking-slot-grid');
  if (!grid) return;
  grid.innerHTML = '<div class="booking-loading">// SCANNING CALENDAR...</div>';
  try {
    const dayStart = amsToUTC(dateStr, 0, 0);
    const dayEnd   = new Date(amsToUTC(dateStr, 23, 59).getTime() + 60_000);
    const res  = await callFn('getAvailability', { startDate: dayStart.toISOString(), endDate: dayEnd.toISOString() });
    const busy = res.busy;
    grid.innerHTML = '';
    generateSlots(dateStr).forEach(slot => {
      const occupied = isBusy(slot, busy);
      const btn = document.createElement('button');
      btn.className = `booking-slot-btn${occupied ? ' busy' : ' free'}`;
      btn.disabled  = occupied;
      if (occupied) {
        btn.innerHTML = `<span class="slot-time">${slot.label}</span><span class="slot-status slot-classified">// CLASSIFIED</span>`;
      } else {
        btn.innerHTML = `<span class="slot-time">${slot.label}</span><span class="slot-status">[ AVAILABLE ]</span>`;
        btn.addEventListener('click', () => selectSlot(dateStr, slot));
      }
      grid.appendChild(btn);
    });
  } catch (err) {
    grid.innerHTML = `<div class="booking-error">// CALENDAR OFFLINE — ${err.message}</div>`;
  }
}

// ── Form ──────────────────────────────────────────────────────

function selectSlot(dateStr, slot) {
  _pendingSlot = { dateStr, slot };
  const el = $('booking-slot-label');
  if (el) el.textContent = `${slot.label} AMS — ${dateStr}`;
  $('booking-form-error')?.classList.add('hidden');
  const btn = $('booking-submit');
  if (btn) { btn.disabled = false; btn.textContent = 'TRANSMIT BOOKING'; }
  showStep('form');
}

async function submitBooking(e) {
  e.preventDefault();
  if (!_pendingSlot) return;
  const name     = $('booking-name').value.trim();
  const email    = $('booking-email').value.trim();
  const duration = parseInt($('booking-duration').value, 10);
  const notes    = $('booking-notes').value.trim();
  const btn      = $('booking-submit');
  if (btn) { btn.disabled = true; btn.textContent = 'TRANSMITTING...'; }
  try {
    await callFn('createBooking', { visitorName: name, visitorEmail: email, startISO: _pendingSlot.slot.start.toISOString(), durationMin: duration, notes });
    const summary = $('booking-confirm-summary');
    if (summary) {
      summary.innerHTML = [
        ['NAME', name], ['EMAIL', email],
        ['DATE', _pendingSlot.dateStr], ['TIME', `${_pendingSlot.slot.label} AMS`],
        ['DURATION', `${duration} MIN`],
      ].map(([l, v]) => `<div class="confirm-row"><span class="confirm-label">${l}</span><span class="confirm-val">${v}</span></div>`).join('');
    }
    showStep('confirm');
  } catch (err) {
    if (btn) { btn.disabled = false; btn.textContent = 'TRANSMIT BOOKING'; }
    const errEl = $('booking-form-error');
    if (errEl) { errEl.textContent = `// ERROR: ${err.message}`; errEl.classList.remove('hidden'); }
  }
}

// ── Public API ────────────────────────────────────────────────

export function initBooking() {
  $('booking-open-btn')?.addEventListener('click', openBookingModal);
  $('booking-close-btn')?.addEventListener('click', closeBookingModal);
  $('booking-back-slot')?.addEventListener('click', () => { showStep('date'); renderDateGrid(); });
  $('booking-back-form')?.addEventListener('click', () => showStep('slot'));
  $('booking-form')?.addEventListener('submit', submitBooking);
  $('booking-new-btn')?.addEventListener('click', () => { showStep('date'); renderDateGrid(); });
  $('booking-modal')?.addEventListener('click', e => { if (e.target === $('booking-modal')) closeBookingModal(); });
  renderDateGrid();
}

export function openBookingModal() {
  $('booking-modal')?.classList.remove('hidden');
  showStep('date');
  renderDateGrid();
}

export function closeBookingModal() {
  $('booking-modal')?.classList.add('hidden');
}

export async function checkAvailabilityForDate(dateStr) {
  const dayStart = amsToUTC(dateStr, 0, 0);
  const dayEnd   = new Date(amsToUTC(dateStr, 23, 59).getTime() + 60_000);
  const res      = await callFn('getAvailability', { startDate: dayStart.toISOString(), endDate: dayEnd.toISOString() });
  return generateSlots(dateStr).map(s => ({
    time:      s.label,
    startISO:  s.start.toISOString(),
    available: !isBusy(s, res.busy),
  }));
}

export async function bookMeetingForAria({ visitorName, visitorEmail, startISO, durationMin = 30, notes = '' }) {
  return callFn('createBooking', { visitorName, visitorEmail, startISO, durationMin, notes });
}
