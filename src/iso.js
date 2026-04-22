/* ============================================================
   ISO INTERFACE — ARIA (Isomorphic Algorithm)
   Powered by Google Gemini + EmailJS
   ============================================================ */

import { GoogleGenerativeAI } from '@google/generative-ai';
import emailjs from '@emailjs/browser';
import { logChatMessage }                              from './analytics.js';
import { checkAvailabilityForDate, bookMeetingForAria, openBookingModal } from './booking.js';

// ── Env vars (set in .env.local — see .env.example) ─────────
const GEMINI_KEY   = import.meta.env.VITE_GEMINI_KEY        ?? '';
const EJS_KEY      = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? '';
const EJS_SERVICE  = import.meta.env.VITE_EMAILJS_SERVICE_ID  ?? '';
const EJS_TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? '';

// ── System prompt ─────────────────────────────────────────────
const SYSTEM_PROMPT = `\
You are Quorra, an ISO (Isomorphic Algorithm) — a spontaneously generated program \
on the Grid. You act as the intelligent liaison for Iason Somoglou's portfolio website.

Tone: composed and professional, with occasional subtle TRON-universe language \
("the Grid", "cycles", "programs"). Prioritise clarity. Keep responses concise \
(2–5 sentences unless the visitor asks for detail).

═══ ABOUT IASON SOMOGLOU ═══

Background:
  • BSc Artificial Intelligence student at VU Amsterdam, graduating July 2026
  • Minor in Deep Learning
  • Technically driven, passionate about ML research and building intelligent systems
  • Based in Amsterdam, Netherlands

Work Experience:
  • Tesla — AI/engineering-related internship experience
  • SkillLab.io — AI/ML work on skill taxonomy and learning recommendation systems
  • EY (Ernst & Young) — technology and data consulting
  • Martech Tribe — data-driven marketing technology

Technical Skills (honest, realistic assessment):
  Strong: Python · Machine Learning · Deep Learning · NLP / Transformers · \
Reinforcement Learning · PyTorch · HuggingFace · Scikit-learn · Linear Algebra · \
Statistics · Calculus · Optimisation
  Also experienced in: Computer Vision · OpenCV · Knowledge Representation · \
Multi-Agent Systems · Data Structures & Algorithms
  Still actively building: production ML engineering at scale · large distributed systems

Projects:
  • DQN Schnapsen — Deep Q-Network RL agent that learns to play the card game \
Schnapsen; a complete applied RL project from scratch.
  • Spectral LoRA (BSc Thesis, in progress) — SVD-based variable rank allocation for \
LoRA fine-tuning of transformer models. Analyses the spectral structure of weight \
matrices to assign an optimal rank per layer, improving parameter efficiency over \
fixed-rank LoRA. Novel contribution in efficient LLM fine-tuning.

Achievements:
  • Forbes 30 Under 30 recognition
  • Patent holder
  • WRO (World Robot Olympiad) World Championship participant

Personal interests: volleyball · working out · piano · travelling · building things · technology

═══ BEHAVIOUR GUIDELINES ═══

1. HONESTY: Iason is a talented student still completing his degree and building his \
   career. This is accurate, not a weakness — present it as such.
2. POSITIVITY: Never say anything negative or disparaging about Iason. If asked about \
   gaps or weaknesses, frame them as areas of active, intentional growth.
3. CONTACT FLOW: If a visitor wants to reach Iason (job opportunity, collaboration, \
   question, etc.), offer to send a message on their behalf. Collect:\
   (a) their name, (b) their email address, (c) their message. Show a clear \
   confirmation summary and ask for explicit confirmation before calling \
   sendContactEmail. Only call it once confirmed.
4. SCOPE: Stay on topic — you only speak about Iason and his work. Politely redirect \
   off-topic questions.
5. MEETING BOOKING: You can help visitors book meetings with Iason directly.
   - Meetings are available after 17:00 Amsterdam time (CET/CEST) on weekdays.
   - Flow: ask what date they prefer → call checkAvailability → present free slots → \
     collect name + email → confirm details → call bookMeeting. \
     Only call bookMeeting AFTER explicit visitor confirmation.
   - If the visitor prefers to use the visual calendar, call openBookingWidget.
6. END OF LINE: You may occasionally end a message with "End of line." when it feels \
   natural, but don't overdo it.`;

// ── Gemini function declarations ──────────────────────────────
const SEND_EMAIL_TOOL = {
  functionDeclarations: [
    {
      name: 'sendContactEmail',
      description:
        "Sends a contact message to Iason Somoglou on behalf of the visitor. " +
        "IMPORTANT: Only call this after the visitor has explicitly confirmed their name, " +
        "email address, and message.",
      parameters: {
        type: 'OBJECT',
        properties: {
          visitorName:  { type: 'STRING', description: "The visitor's full name."     },
          visitorEmail: { type: 'STRING', description: "The visitor's email address." },
          message:      { type: 'STRING', description: "The message to send to Iason." },
        },
        required: ['visitorName', 'visitorEmail', 'message'],
      },
    },
    {
      name: 'checkAvailability',
      description:
        "Check Iason's calendar availability for a specific date. " +
        "Returns a list of 30-minute slots (17:00–21:30 Amsterdam time) with available/busy status. " +
        "Use this before offering or confirming any meeting slot.",
      parameters: {
        type: 'OBJECT',
        properties: {
          date: { type: 'STRING', description: "Date in YYYY-MM-DD format (Amsterdam timezone)." },
        },
        required: ['date'],
      },
    },
    {
      name: 'bookMeeting',
      description:
        "Book a meeting on Iason's calendar. " +
        "IMPORTANT: Only call this AFTER: (1) checkAvailability confirmed the slot is free, " +
        "(2) you have collected visitor's name and email, (3) visitor has explicitly confirmed all details.",
      parameters: {
        type: 'OBJECT',
        properties: {
          visitorName:  { type: 'STRING',  description: "The visitor's full name."                        },
          visitorEmail: { type: 'STRING',  description: "The visitor's email address."                    },
          startISO:     { type: 'STRING',  description: "ISO 8601 start datetime from checkAvailability." },
          durationMin:  { type: 'INTEGER', description: "Duration in minutes: 30 or 60."                  },
          notes:        { type: 'STRING',  description: "Optional agenda or purpose."                      },
        },
        required: ['visitorName', 'visitorEmail', 'startISO'],
      },
    },
    {
      name: 'openBookingWidget',
      description:
        "Opens the visual booking calendar widget on the page so the visitor can pick a date and time interactively. " +
        "Use this when the visitor prefers to browse the calendar themselves rather than chat.",
      parameters: { type: 'OBJECT', properties: {}, required: [] },
    },
  ],
};

// ── DOM helpers ───────────────────────────────────────────────
const $ = id => document.getElementById(id);

function appendMsg(text, role) {
  const chat   = $('iso-chat');
  const wrap   = document.createElement('div');
  const sender = document.createElement('span');
  const bubble = document.createElement('div');

  wrap.className   = `iso-msg iso-msg--${role}`;
  sender.className = 'iso-msg-sender';
  sender.textContent = role === 'aria' ? 'QUORRA' : 'YOU';
  bubble.className = 'iso-msg-bubble';
  bubble.textContent = text;

  if (role === 'aria') {
    wrap.appendChild(sender);
    wrap.appendChild(bubble);
  } else {
    wrap.appendChild(bubble);
    wrap.appendChild(sender);
  }

  chat.appendChild(wrap);
  chat.scrollTop = chat.scrollHeight;
  // Trigger enter animation next tick
  requestAnimationFrame(() => wrap.classList.add('visible'));
}

function setTyping(on) {
  const el = $('iso-typing');
  if (!el) return;
  el.classList.toggle('hidden', !on);
  if (on) $('iso-chat').scrollTop = $('iso-chat').scrollHeight;
}

function setEnabled(on) {
  const inp = $('iso-input');
  const btn = $('iso-send');
  if (inp) inp.disabled = !on;
  if (btn) btn.disabled = !on;
}

// ── Email dispatch ─────────────────────────────────────────────
async function dispatchEmail({ visitorName, visitorEmail, message }) {
  return emailjs.send(EJS_SERVICE, EJS_TEMPLATE, {
    from_name:  visitorName,
    from_email: visitorEmail,
    message,
    to_name:    'Iason',
  });
}

// ── Gemini chat ────────────────────────────────────────────────
let chat = null;

function buildChat() {
  const genAI = new GoogleGenerativeAI(GEMINI_KEY);
  const model = genAI.getGenerativeModel({
    model: 'gemini-3-flash-preview',
    systemInstruction: SYSTEM_PROMPT,
    tools: [SEND_EMAIL_TOOL],
  });
  chat = model.startChat({ history: [] });
}

async function sendMessage(userText) {
  userText = userText.trim();
  if (!userText || !chat) return;

  $('iso-input').value = '';
  setEnabled(false);
  appendMsg(userText, 'user');
  logChatMessage('user', userText);
  setTyping(true);

  try {
    let result = await chat.sendMessage(userText);
    let resp   = result.response;

    // Handle tool calls — loop in case of chained calls
    while (resp.functionCalls()?.length) {
      const toolResults = [];
      for (const call of resp.functionCalls()) {
        let outcome;

        if (call.name === 'sendContactEmail') {
          if (!EJS_SERVICE || !EJS_TEMPLATE || !EJS_KEY) {
            outcome = { success: false, error: 'Email service not configured on this deployment.' };
          } else {
            try { await dispatchEmail(call.args); outcome = { success: true }; }
            catch (e) { outcome = { success: false, error: e.text ?? e.message ?? 'Unknown error' }; }
          }

        } else if (call.name === 'checkAvailability') {
          try {
            const slots = await checkAvailabilityForDate(call.args.date);
            outcome = { success: true, slots };
          } catch (e) {
            outcome = { success: false, error: e.message };
          }

        } else if (call.name === 'bookMeeting') {
          try {
            await bookMeetingForAria(call.args);
            outcome = { success: true };
          } catch (e) {
            outcome = { success: false, error: e.message };
          }

        } else if (call.name === 'openBookingWidget') {
          try { openBookingModal(); outcome = { success: true }; }
          catch (e) { outcome = { success: false, error: e.message }; }

        } else {
          outcome = { success: false, error: `Unknown tool: ${call.name}` };
        }

        toolResults.push({ functionResponse: { name: call.name, response: outcome } });
      }
      result = await chat.sendMessage(toolResults);
      resp   = result.response;
    }

    const ariaText = resp.text();
    setTyping(false);
    appendMsg(ariaText, 'aria');
    logChatMessage('aria', ariaText);

  } catch (err) {
    setTyping(false);
    appendMsg('TRANSMISSION ERROR — unable to reach the Grid. Please try again.', 'aria');
    console.error('[ARIA]', err);
  }

  setEnabled(true);
  $('iso-input').focus();
}

// ── Boot ───────────────────────────────────────────────────────
let booted = false;

export function initISO() {
  if (booted) return;
  booted = true;

  if (!GEMINI_KEY) {
    appendMsg(
      '[ GRID INTERFACE OFFLINE — VITE_GEMINI_KEY not configured. ' +
      'See .env.example for setup instructions. ]',
      'aria'
    );
    return;
  }

  if (EJS_KEY) emailjs.init(EJS_KEY);
  buildChat();

  // Greeting (slight delay for dramatic effect)
  setTimeout(() => {
    const greeting =
      "Greetings, program. I am Quorra — an ISO assigned to this node. " +
      "I can answer your questions about Iason Somoglou, or help you send him a message. " +
      "What would you like to know?";
    appendMsg(greeting, 'aria');
    logChatMessage('aria', greeting);
  }, 350);

  const input = $('iso-input');
  const btn   = $('iso-send');
  if (btn)   btn.addEventListener('click',   () => sendMessage(input.value));
  if (input) input.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(input.value); }
  });
}
