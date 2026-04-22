/* ============================================================
   ANALYTICS — Firebase Firestore
   Collections:
     visits        — one doc per page load (includes IP + geo)
     chat_messages — one doc per ARIA message (user + aria)
     counters      — single document "visitors" with a running total
   Security: write-only rules (public can insert/increment, never read)
   ============================================================ */

import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc,
  increment,
  serverTimestamp,
} from 'firebase/firestore';

// ── Firebase config (identifiers only — not secret) ──────────
const FB_CONFIG = {
  apiKey:            import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain:        import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId:         import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket:     import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId:             import.meta.env.VITE_FIREBASE_APP_ID,
};

let db = null;

// ── Session ID — stable for the lifetime of this browser tab ─
export const sessionId = (() => {
  const key = 'tron_sid';
  let id = sessionStorage.getItem(key);
  if (!id) {
    id = crypto.randomUUID();
    sessionStorage.setItem(key, id);
  }
  return id;
})();

// ── Init ──────────────────────────────────────────────────────
export function initAnalytics() {
  if (!FB_CONFIG.projectId) return;
  try {
    const app = initializeApp(FB_CONFIG);
    db = getFirestore(app);
  } catch (e) {
    console.warn('[analytics] init failed:', e);
  }
}

// ── Geo / IP lookup via ipapi.co (free, no key required) ─────
// Returns { ip, city, region, country, org } or {} on failure.
async function fetchGeoInfo() {
  try {
    const res = await fetch('https://ipapi.co/json/', { cache: 'no-store' });
    if (!res.ok) return {};
    const d = await res.json();
    return {
      ip:      d.ip      ?? null,
      city:    d.city    ?? null,
      region:  d.region  ?? null,
      country: d.country_name ?? null,
      org:     d.org     ?? null,   // ISP / company name
    };
  } catch {
    return {};
  }
}

// ── Write helpers ─────────────────────────────────────────────
async function write(col, data) {
  if (!db) return;
  try {
    await addDoc(collection(db, col), { ...data, timestamp: serverTimestamp() });
  } catch (e) {
    console.warn(`[analytics] write/${col} failed:`, e);
  }
}

async function incrementCounter() {
  if (!db) return;
  try {
    // setDoc with merge:true creates the doc if missing, increments if present.
    // FieldValue.increment is evaluated server-side — no client read needed.
    await setDoc(
      doc(db, 'counters', 'visitors'),
      { total: increment(1), lastVisit: serverTimestamp() },
      { merge: true }
    );
  } catch (e) {
    console.warn('[analytics] counter increment failed:', e);
  }
}

// ── Public API ────────────────────────────────────────────────

/** Call once on page load — fetches geo info then writes visit doc + increments counter */
export async function logVisit() {
  if (!db) return;
  const geo = await fetchGeoInfo();
  await Promise.all([
    write('visits', {
      sessionId,
      userAgent: navigator.userAgent,
      referrer:  document.referrer || 'direct',
      path:      window.location.pathname,
      screen:    `${window.screen.width}x${window.screen.height}`,
      language:  navigator.language,
      ...geo,   // ip, city, region, country, org
    }),
    incrementCounter(),
  ]);
}

/** Call for every ARIA chat message — both user and aria turns */
export function logChatMessage(role, text) {
  write('chat_messages', {
    sessionId,
    role,
    text,
  });
}

/** Call on any user click — logs element info + coordinates */
export function logClick(data) {
  write('clicks', { sessionId, ...data });
}
