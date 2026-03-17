/* ============================================================
   TRON PORTFOLIO — MAIN JAVASCRIPT
   ============================================================ */

// ============================================================
// COURSES DATA  (VU Amsterdam — BSc Artificial Intelligence)
// ============================================================
const COURSES = [
  // ── FOUNDATIONS ─────────────────────────────────────────
  {
    name: 'Introduction to AI',
    year: 'Year 1',
    category: 'foundations',
    desc: 'Intelligent agents, search algorithms (BFS, DFS, A*), problem formulation, and the PEAS framework.',
    skills: ['Python', 'Search Algorithms', 'A*', 'BFS / DFS', 'Agent Design'],
  },
  {
    name: 'Logic and Modelling',
    year: 'Year 1',
    category: 'foundations',
    desc: 'Propositional and predicate logic, proof systems, model checking, and formal AI system specification.',
    skills: ['Propositional Logic', 'Predicate Logic', 'SAT Solving', 'Proof Systems', 'Model Checking'],
  },
  {
    name: 'Linear Algebra for AI',
    year: 'Year 1',
    category: 'foundations',
    desc: 'Vector spaces, matrix operations, eigendecomposition, SVD, and their applications in machine learning.',
    skills: ['Matrices', 'Vectors', 'Eigenvalues', 'SVD', 'PCA'],
  },
  {
    name: 'Calculus & Analysis',
    year: 'Year 1',
    category: 'foundations',
    desc: 'Limits, derivatives, integration, multivariable calculus, and gradient-based optimisation for ML.',
    skills: ['Differentiation', 'Integration', 'Gradient Descent', 'Optimisation', 'Taylor Series'],
  },
  {
    name: 'Probability & Statistics',
    year: 'Year 1',
    category: 'foundations',
    desc: 'Probability theory, statistical inference, distributions, Bayesian reasoning, and hypothesis testing.',
    skills: ['Bayesian Reasoning', 'Distributions', 'MLE / MAP', 'Hypothesis Testing', 'Regression'],
  },
  {
    name: 'Introduction to Programming',
    year: 'Year 1',
    category: 'foundations',
    desc: 'Programming fundamentals, object-oriented design, data structures, and algorithm development in Python.',
    skills: ['Python', 'OOP', 'Data Structures', 'Recursion', 'Testing'],
  },

  // ── CORE AI ─────────────────────────────────────────────
  {
    name: 'Machine Learning',
    year: 'Year 2',
    category: 'core-ai',
    desc: 'Supervised and unsupervised learning, model evaluation, feature engineering, and ensemble methods.',
    skills: ['Scikit-learn', 'Regression', 'Classification', 'Clustering', 'Cross-validation', 'Ensembles'],
  },
  {
    name: 'Natural Language Processing',
    year: 'Year 2',
    category: 'core-ai',
    desc: 'Text pre-processing, language models, word embeddings, transformers, and semantic similarity.',
    skills: ['BERT', 'Transformers', 'Word2Vec', 'Tokenisation', 'Semantic Search', 'HuggingFace'],
  },
  {
    name: 'Knowledge Representation & Reasoning',
    year: 'Year 2',
    category: 'core-ai',
    desc: 'Ontologies, description logics, Bayesian networks, Prolog, and knowledge-driven AI systems.',
    skills: ['Ontologies', 'Bayesian Networks', 'Prolog', 'Description Logics', 'Knowledge Graphs'],
  },
  {
    name: 'Multi-Agent Systems',
    year: 'Year 2',
    category: 'core-ai',
    desc: 'Game theory, agent communication, coordination protocols, and emergent multi-agent behaviour.',
    skills: ['Game Theory', 'Nash Equilibrium', 'Agent Communication', 'Coordination', 'Emergent Behaviour'],
  },
  {
    name: 'Data Structures & Algorithms',
    year: 'Year 2',
    category: 'core-ai',
    desc: 'Advanced algorithms, graph theory, dynamic programming, and complexity analysis.',
    skills: ['Graph Theory', 'Dynamic Programming', 'Complexity Analysis', 'Trees', 'Sorting'],
  },
  {
    name: 'Computer Vision',
    year: 'Year 2',
    category: 'core-ai',
    desc: 'Image processing, convolutional neural networks, object detection, and segmentation.',
    skills: ['CNNs', 'Image Processing', 'Object Detection', 'OpenCV', 'Feature Extraction'],
  },

  // ── ADVANCED ────────────────────────────────────────────
  {
    name: 'Deep Learning',
    year: 'Year 3',
    category: 'advanced',
    desc: 'Neural network architectures, backpropagation, PyTorch, regularisation, and advanced optimisation.',
    skills: ['PyTorch', 'Backpropagation', 'CNNs', 'RNNs', 'Attention Mechanism', 'Regularisation'],
  },
  {
    name: 'Reinforcement Learning',
    year: 'Year 3',
    category: 'advanced',
    desc: 'Markov decision processes, temporal difference learning, Q-learning, policy gradient methods, and deep RL.',
    skills: ['MDPs', 'Q-Learning', 'Policy Gradient', 'DQN', 'PPO', 'OpenAI Gym'],
  },
  {
    name: 'AI Ethics & Society',
    year: 'Year 3',
    category: 'advanced',
    desc: 'Fairness, accountability, transparency, and bias in AI. Societal, legal, and ethical implications.',
    skills: ['Fairness Metrics', 'Bias Detection', 'Explainability (XAI)', 'GDPR', 'Responsible AI'],
  },
  {
    name: 'Research Project (BSc Thesis)',
    year: 'Year 3',
    category: 'advanced',
    desc: 'Independent research project applying AI to a novel problem, including literature review and paper writing.',
    skills: ['Research Methods', 'LaTeX', 'Scientific Writing', 'Experimentation', 'Statistical Analysis'],
  },

  // ── MINOR: ECONOMICS ────────────────────────────────────
  {
    name: 'Introduction to Economics',
    year: 'Minor',
    category: 'minor',
    desc: 'Fundamentals of economic analysis — how choices and trade-offs shape outcomes at micro and macro levels, using real-world cases.',
    skills: ['Microeconomics', 'Macroeconomics', 'Supply & Demand', 'Economic Modelling', 'Case Analysis'],
  },
  {
    name: 'Economic Challenges',
    year: 'Minor',
    category: 'minor',
    desc: 'How economic theories emerge from historical, social and political contexts. Competing schools of thought and theoretical diversity.',
    skills: ['History of Economic Thought', 'Economic Paradigms', 'Policy Analysis', 'Theoretical Frameworks'],
  },
  {
    name: 'The Economics of Crises',
    year: 'Minor',
    category: 'minor',
    desc: 'How pandemics, financial instability, and climate policies generate economic crises, and macroeconomic policy responses.',
    skills: ['Crisis Analysis', 'Macroeconomic Policy', 'Financial Systems', 'Business Cycles', 'Climate Economics'],
  },
  {
    name: 'Choices, Inequality and Welfare',
    year: 'Minor',
    category: 'minor',
    desc: 'Policy solutions for microeconomic problems: labour markets, social insurance, international trade, environment, and competition.',
    skills: ['Labour Market Policy', 'Social Insurance', 'International Trade', 'Environmental Economics', 'Market Regulation'],
  },
  {
    name: 'Applying Economics',
    year: 'Minor',
    category: 'minor',
    desc: 'Capstone course: independent policy research, designing economic responses, academic writing, and oral presentation with peer review.',
    skills: ['Policy Research', 'Economic Literature Review', 'Academic Writing', 'Oral Presentation', 'Peer Review'],
  },
];

// ============================================================
// COURSES — RENDER + FILTER
// ============================================================
const coursesGrid = document.getElementById('courses-grid');

function renderCourses(filter = 'all') {
  coursesGrid.innerHTML = '';
  const filtered = filter === 'all' ? COURSES : COURSES.filter(c => c.category === filter);

  filtered.forEach((course, i) => {
    const card = document.createElement('div');
    card.className = 'course-card reveal';
    card.style.transitionDelay = `${i * 45}ms`;
    card.innerHTML = `
      <div class="course-cat-tag ${course.category}">${course.category.replace('-', ' ').toUpperCase()}</div>
      <div class="course-header">
        <div class="course-name">${course.name}</div>
        <div class="course-year">${course.year.toUpperCase()}</div>
      </div>
      <div class="course-desc">${course.desc}</div>
      <div class="course-skills">
        ${course.skills.map(s => `<span class="course-skill">${s}</span>`).join('')}
      </div>
      <div class="course-hint">[ CLICK TO EXPAND ]</div>
    `;

    card.addEventListener('click', () => {
      const expanded = card.classList.contains('expanded');
      // Collapse all
      document.querySelectorAll('.course-card.expanded').forEach(c => {
        c.classList.remove('expanded');
        c.querySelector('.course-hint').textContent = '[ CLICK TO EXPAND ]';
      });
      if (!expanded) {
        card.classList.add('expanded');
        card.querySelector('.course-hint').textContent = '[ CLICK TO COLLAPSE ]';
      }
    });

    coursesGrid.appendChild(card);

    // Observe for reveal
    revealObserver.observe(card);
  });
}

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderCourses(btn.dataset.filter);
  });
});

// ============================================================
// INTERSECTION OBSERVER — SCROLL REVEAL
// ============================================================
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const delay = parseFloat(el.style.transitionDelay) || i * 80;
      setTimeout(() => el.classList.add('revealed'), delay);
      revealObserver.unobserve(el);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
  revealObserver.observe(el);
});

// Skill bar fill animation
const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('animated'), 200);
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.skill-fill').forEach(el => skillObserver.observe(el));

// ============================================================
// TYPEWRITER EFFECT
// ============================================================
const twEl = document.getElementById('typewriter');
const phrases = ['ML ENGINEER', 'AI DEVELOPER', 'NLP SPECIALIST', 'DEEP LEARNER', 'RL ENTHUSIAST', 'VU AI STUDENT'];
let pIdx = 0, cIdx = 0, deleting = false, twDelay = 120;

function typeWriter() {
  const phrase = phrases[pIdx];
  if (!deleting) {
    twEl.textContent = phrase.slice(0, ++cIdx);
    if (cIdx === phrase.length) { deleting = true; twDelay = 2200; }
    else twDelay = 110;
  } else {
    twEl.textContent = phrase.slice(0, --cIdx);
    if (cIdx === 0) { deleting = false; pIdx = (pIdx + 1) % phrases.length; twDelay = 550; }
    else twDelay = 65;
  }
  setTimeout(typeWriter, twDelay);
}
typeWriter();

// ============================================================
// NAVIGATION — SCROLL + ACTIVE SECTION + MOBILE
// ============================================================
const navbar   = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');
const navToggle     = document.getElementById('nav-toggle');
const navLinksList  = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);

  let current = 'home';
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top <= 120 && rect.bottom >= 120) current = sec.id;
  });
  navLinks.forEach(l => {
    l.classList.toggle('active', l.dataset.section === current);
  });
}, { passive: true });

navToggle.addEventListener('click', () => navLinksList.classList.toggle('open'));
navLinks.forEach(l => l.addEventListener('click', () => navLinksList.classList.remove('open')));

// ============================================================
// CONTACT FORM
// ============================================================
const contactForm = document.getElementById('contact-form');
const submitBtn   = document.getElementById('submit-btn');
const submitText  = document.getElementById('submit-text');
const formSuccess = document.getElementById('form-success');

contactForm.addEventListener('submit', e => {
  e.preventDefault();
  submitText.textContent = 'TRANSMITTING...';
  submitBtn.disabled = true;
  setTimeout(() => {
    contactForm.classList.add('hidden');
    formSuccess.classList.remove('hidden');
  }, 1600);
});

// ============================================================
// CUSTOM CURSOR
// ============================================================
const ring = document.createElement('div'); ring.className = 'c-ring';
const dot  = document.createElement('div'); dot.className  = 'c-dot';
document.body.appendChild(ring);
document.body.appendChild(dot);

let mx = -100, my = -100, rx = -100, ry = -100;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  dot.style.left = mx + 'px';
  dot.style.top  = my + 'px';
});

(function animateCursor() {
  rx += (mx - rx) * 0.14;
  ry += (my - ry) * 0.14;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(animateCursor);
})();

document.querySelectorAll('a, button, .course-card, .project-card, .interest-card, .stag, .tag').forEach(el => {
  el.addEventListener('mouseenter', () => ring.classList.add('hovered'));
  el.addEventListener('mouseleave', () => ring.classList.remove('hovered'));
});

// ============================================================
// CANVAS — BACKGROUND (TRON GRID + PARTICLES + DATA STREAMS)
// ============================================================
const bgCanvas = document.getElementById('bg-canvas');
const bgCtx    = bgCanvas.getContext('2d');
let W = 0, H = 0;

function resize() {
  W = bgCanvas.width  = window.innerWidth;
  H = bgCanvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

// ── Grid ──────────────────────────────────────────────────
const GRID = 60;
let gridOff = 0;

function drawGrid() {
  bgCtx.strokeStyle = 'rgba(0,229,255,0.055)';
  bgCtx.lineWidth = 0.5;
  const ox = gridOff % GRID;
  const oy = gridOff % GRID;
  for (let x = -GRID + ox; x < W + GRID; x += GRID) {
    bgCtx.beginPath(); bgCtx.moveTo(x, 0); bgCtx.lineTo(x, H); bgCtx.stroke();
  }
  for (let y = -GRID + oy; y < H + GRID; y += GRID) {
    bgCtx.beginPath(); bgCtx.moveTo(0, y); bgCtx.lineTo(W, y); bgCtx.stroke();
  }
}

// ── Particles ─────────────────────────────────────────────
class Particle {
  constructor() { this.reset(true); }
  reset(init = false) {
    this.x = Math.random() * W;
    this.y = init ? Math.random() * H : (Math.random() < 0.5 ? -5 : H + 5);
    this.vx = (Math.random() - 0.5) * 0.6;
    this.vy = (Math.random() - 0.5) * 0.6;
    this.r  = Math.random() * 1.8 + 0.6;
    this.a  = Math.random() * 0.5 + 0.1;
    this.life  = 1;
    this.decay = Math.random() * 0.0015 + 0.0008;
  }
  update() {
    this.x += this.vx; this.y += this.vy; this.life -= this.decay;
    if (this.life <= 0 || this.x < -20 || this.x > W + 20 || this.y < -20 || this.y > H + 20) this.reset();
  }
  draw() {
    bgCtx.beginPath();
    bgCtx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    bgCtx.fillStyle = `rgba(0,229,255,${this.a * this.life})`;
    bgCtx.shadowBlur = 8; bgCtx.shadowColor = '#00e5ff';
    bgCtx.fill(); bgCtx.shadowBlur = 0;
  }
}

// ── Data Streams ──────────────────────────────────────────
class Stream {
  constructor() { this.reset(); }
  reset() {
    this.horiz  = Math.random() > 0.5;
    this.color  = Math.random() > 0.85 ? '#ff00ff' : '#00e5ff';
    this.speed  = Math.random() * 2.5 + 0.8;
    this.len    = Math.random() * 100 + 50;
    this.alpha  = Math.random() * 0.55 + 0.25;
    if (this.horiz) {
      const row = Math.floor(Math.random() * (H / GRID));
      this.x = -this.len; this.y = row * GRID;
      this.vx = this.speed; this.vy = 0;
    } else {
      const col = Math.floor(Math.random() * (W / GRID));
      this.x = col * GRID; this.y = -this.len;
      this.vx = 0; this.vy = this.speed;
    }
  }
  update() {
    this.x += this.vx; this.y += this.vy;
    if (this.x > W + 200 || this.y > H + 200) this.reset();
  }
  draw() {
    const x0 = this.horiz ? this.x - this.len : this.x;
    const y0 = this.horiz ? this.y : this.y - this.len;
    let grad;
    if (this.horiz) {
      grad = bgCtx.createLinearGradient(x0, this.y, this.x, this.y);
    } else {
      grad = bgCtx.createLinearGradient(this.x, y0, this.x, this.y);
    }
    grad.addColorStop(0, 'transparent');
    grad.addColorStop(1, this.color);
    bgCtx.beginPath();
    bgCtx.strokeStyle = grad;
    bgCtx.lineWidth = 1.5;
    bgCtx.globalAlpha = this.alpha;
    bgCtx.shadowBlur = 6; bgCtx.shadowColor = this.color;
    bgCtx.moveTo(x0, y0); bgCtx.lineTo(this.x, this.y);
    bgCtx.stroke();
    bgCtx.shadowBlur = 0; bgCtx.globalAlpha = 1;
  }
}

// ── Intersection nodes (grid crossings that light up) ─────
class GridNode {
  constructor() { this.reset(); }
  reset() {
    const col = Math.floor(Math.random() * (W / GRID));
    const row = Math.floor(Math.random() * (H / GRID));
    this.x = col * GRID; this.y = row * GRID;
    this.life = 1; this.decay = Math.random() * 0.005 + 0.002;
    this.r = Math.random() * 3 + 1;
  }
  update() { this.life -= this.decay; if (this.life <= 0) this.reset(); }
  draw() {
    bgCtx.beginPath();
    bgCtx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    bgCtx.fillStyle = `rgba(0,229,255,${0.45 * this.life})`;
    bgCtx.shadowBlur = 10; bgCtx.shadowColor = '#00e5ff';
    bgCtx.fill(); bgCtx.shadowBlur = 0;
  }
}

const particles  = Array.from({ length: 55 }, () => new Particle());
const streams    = Array.from({ length: 9  }, () => new Stream());
const gridNodes  = Array.from({ length: 18 }, () => new GridNode());

// ── Cursor trail ──────────────────────────────────────────
const trailPts = [];
document.addEventListener('mousemove', e => {
  trailPts.push({ x: e.clientX, y: e.clientY });
  if (trailPts.length > 32) trailPts.shift();
});

function drawTrail() {
  if (trailPts.length < 2) return;
  for (let i = 1; i < trailPts.length; i++) {
    const t  = trailPts[i];
    const t0 = trailPts[i - 1];
    const a  = (i / trailPts.length) * 0.45;
    const w  = (i / trailPts.length) * 2;
    bgCtx.beginPath();
    bgCtx.moveTo(t0.x, t0.y); bgCtx.lineTo(t.x, t.y);
    bgCtx.strokeStyle = `rgba(0,229,255,${a})`;
    bgCtx.lineWidth = w;
    bgCtx.shadowBlur = 6; bgCtx.shadowColor = '#00e5ff';
    bgCtx.stroke(); bgCtx.shadowBlur = 0;
  }
}

// ── Animate ───────────────────────────────────────────────
function bgAnimate() {
  bgCtx.clearRect(0, 0, W, H);
  gridOff += 0.25;

  drawGrid();

  gridNodes.forEach(n => { n.update(); n.draw(); });
  streams.forEach(s   => { s.update(); s.draw(); });
  particles.forEach(p => { p.update(); p.draw(); });

  drawTrail();

  requestAnimationFrame(bgAnimate);
}
bgAnimate();

// ============================================================
// BOOT SEQUENCE — subtle data flicker on hero tag
// ============================================================
const heroTag = document.querySelector('.hero-tag');
if (heroTag) {
  const originalText = heroTag.textContent;
  const chars = '!@#$%^&*<>[]{}|\\~?';
  let ticks = 0;
  const flicker = setInterval(() => {
    if (ticks >= 20) { heroTag.textContent = originalText; clearInterval(flicker); return; }
    heroTag.textContent = originalText.split('').map((c, i) =>
      Math.random() < 0.3 ? chars[Math.floor(Math.random() * chars.length)] : c
    ).join('');
    ticks++;
  }, 60);
}

// ============================================================
// INIT — render courses after DOM + observers set up
// ============================================================
renderCourses('all');
