/* ============================================================
   TRON Portfolio — Firebase Cloud Functions
   Google Calendar: getAvailability + createBooking
   Uses onRequest (plain HTTP) for reliable CORS handling.
   ============================================================ */

const { onRequest } = require('firebase-functions/v2/https');
const { initializeApp }            = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { google } = require('googleapis');
const { randomUUID } = require('crypto');

initializeApp();
const db = getFirestore();

const TZ = 'Europe/Amsterdam';

const ALLOWED_ORIGINS = [
  'https://portfolio.iasonsomoglou.com',
  'http://localhost:5173',
  'http://localhost:4173',
];

// ── CORS ─────────────────────────────────────────────────────
function setCORS(req, res) {
  const origin = req.headers.origin;
  if (ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

// ── Google Calendar client ────────────────────────────────────
function getCalendarClient() {
  const email = process.env.GCAL_CLIENT_EMAIL;
  const key   = (process.env.GCAL_PRIVATE_KEY ?? '').replace(/\\n/g, '\n');
  const calId = process.env.GCAL_CALENDAR_ID;
  if (!email || !key || !calId) {
    throw Object.assign(new Error('Calendar not configured on this server.'), { status: 503 });
  }
  const auth = new google.auth.JWT({
    email,
    key,
    scopes: ['https://www.googleapis.com/auth/calendar'],
  });
  return { cal: google.calendar({ version: 'v3', auth }), calId };
}

// ── getAvailability ──────────────────────────────────────────
exports.getAvailability = onRequest(async (req, res) => {
  setCORS(req, res);
  if (req.method === 'OPTIONS') return res.status(204).send('');
  if (req.method !== 'POST')   return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { startDate, endDate } = req.body;
    if (!startDate || !endDate) return res.status(400).json({ error: 'startDate and endDate required.' });

    const { cal, calId } = getCalendarClient();
    const result = await cal.freebusy.query({
      requestBody: { timeMin: startDate, timeMax: endDate, timeZone: TZ, items: [{ id: calId }] },
    });

    const busy = (result.data.calendars[calId]?.busy ?? []).map(b => ({ start: b.start, end: b.end }));
    res.json({ busy });
  } catch (err) {
    res.status(err.status ?? 500).json({ error: err.message });
  }
});

// ── createBooking ─────────────────────────────────────────────
exports.createBooking = onRequest(async (req, res) => {
  setCORS(req, res);
  if (req.method === 'OPTIONS') return res.status(204).send('');
  if (req.method !== 'POST')   return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { visitorName, visitorEmail, startISO, durationMin = 30, notes = '' } = req.body;
    if (!visitorName || !visitorEmail || !startISO) {
      return res.status(400).json({ error: 'visitorName, visitorEmail, and startISO are required.' });
    }

    const start   = new Date(startISO);
    const amsHour = parseInt(
      new Intl.DateTimeFormat('en', { timeZone: TZ, hour: 'numeric', hour12: false }).format(start), 10,
    );
    if (amsHour < 17) return res.status(400).json({ error: 'Bookings must be after 17:00 Amsterdam time.' });

    const end = new Date(start.getTime() + durationMin * 60_000);
    const { cal, calId } = getCalendarClient();

    // Re-check slot is still free
    const check = await cal.freebusy.query({
      requestBody: { timeMin: start.toISOString(), timeMax: end.toISOString(), timeZone: TZ, items: [{ id: calId }] },
    });
    if ((check.data.calendars[calId]?.busy ?? []).length > 0) {
      return res.status(409).json({ error: 'This slot was just taken. Please choose another.' });
    }

    const event = await cal.events.insert({
      calendarId: calId,
      conferenceDataVersion: 1,
      requestBody: {
        summary:     `Meeting — ${visitorName}`,
        description: `Booked via portfolio.\n\nEmail: ${visitorEmail}${notes ? '\n\nNotes: ' + notes : ''}`,
        start: { dateTime: start.toISOString(), timeZone: TZ },
        end:   { dateTime: end.toISOString(),   timeZone: TZ },
        conferenceData: {
          createRequest: {
            requestId: randomUUID(),
            conferenceSolutionKey: { type: 'hangoutsMeet' },
          },
        },
        reminders:  { useDefault: true },
      },
    });

    await db.collection('bookings').add({
      visitorName, visitorEmail,
      startISO: start.toISOString(),
      endISO:   end.toISOString(),
      durationMin, notes,
      meetLink: event.data.hangoutLink,
      createdAt: FieldValue.serverTimestamp(),
    });

    res.json({ success: true });
  } catch (err) {
    res.status(err.status ?? 500).json({ error: err.message });
  }
});
