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

// ── Light Cycles ──────────────────────────────────────────
class LightCycle {
  constructor(color, startDelay = 0) {
    this.color = color;
    // Parse once for rgba reuse
    this.r = parseInt(color.slice(1, 3), 16);
    this.g = parseInt(color.slice(3, 5), 16);
    this.b = parseInt(color.slice(5, 7), 16);
    this.startDelay = startDelay;
    this.started = false;
    this.trail = [];
    this.reset();
  }

  reset() {
    // Spawn at a random grid intersection, safely inside screen
    this.x = (Math.floor(Math.random() * Math.max(1, Math.floor(W / GRID) - 1)) + 1) * GRID;
    this.y = (Math.floor(Math.random() * Math.max(1, Math.floor(H / GRID) - 1)) + 1) * GRID;
    // Pick a cardinal direction: 0=right, 90=down, 180=left, 270=up
    this.angle  = [0, Math.PI / 2, Math.PI, -Math.PI / 2][Math.floor(Math.random() * 4)];
    this.speed  = Math.random() * 1.4 + 1.8;          // px per frame
    this.trail  = [{ x: this.x, y: this.y }];
    this.distTraveled = 0;
    this.nextTurn     = (Math.floor(Math.random() * 4) + 3) * GRID;
    this.frame  = 0;
  }

  update() {
    if (!this.started) return;

    const cos = Math.cos(this.angle);
    const sin = Math.sin(this.angle);
    this.x += cos * this.speed;
    this.y += sin * this.speed;
    this.distTraveled += this.speed;
    this.frame++;

    // Sample trail point every 4 frames for a dense-enough trail
    if (this.frame % 4 === 0) {
      this.trail.push({ x: this.x, y: this.y });
      if (this.trail.length > 120) this.trail.shift();
    }

    // Turn at 90° when we've covered enough distance
    if (this.distTraveled >= this.nextTurn) {
      // Snap to nearest grid intersection before turning
      this.x = Math.round(this.x / GRID) * GRID;
      this.y = Math.round(this.y / GRID) * GRID;
      this.trail.push({ x: this.x, y: this.y }); // record the corner

      const turn = Math.random() > 0.5 ? Math.PI / 2 : -Math.PI / 2;
      this.angle = ((this.angle + turn) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);

      this.distTraveled = 0;
      this.nextTurn = (Math.floor(Math.random() * 5) + 3) * GRID;
    }

    // Respawn when fully off-screen
    if (this.x < -120 || this.x > W + 120 || this.y < -120 || this.y > H + 120) {
      this.reset();
    }
  }

  draw() {
    if (!this.started || this.trail.length < 2) return;

    const pts = this.trail;
    const { r, g, b } = this;

    // ── Trail: rendered in 8 alpha-batches for performance ──
    const BATCHES = 8;
    const step = Math.max(1, Math.ceil(pts.length / BATCHES));
    for (let s = 0; s < BATCHES; s++) {
      const from = s * step;
      const to   = Math.min((s + 1) * step, pts.length - 1);
      if (from >= pts.length - 1) break;

      const t = (s + 0.5) / BATCHES;
      const alpha = Math.pow(t, 1.6) * 0.88;

      bgCtx.beginPath();
      bgCtx.moveTo(pts[from].x, pts[from].y);
      for (let i = from + 1; i <= to; i++) bgCtx.lineTo(pts[i].x, pts[i].y);

      bgCtx.strokeStyle = `rgba(${r},${g},${b},${alpha})`;
      bgCtx.lineWidth   = t > 0.75 ? 2.5 : 1.8;
      if (s >= BATCHES - 2) {
        bgCtx.shadowBlur  = 12;
        bgCtx.shadowColor = this.color;
      }
      bgCtx.stroke();
      bgCtx.shadowBlur = 0;
    }

    // Bright tip where trail meets the bike
    const tail = pts[pts.length - 1];
    bgCtx.beginPath();
    bgCtx.arc(tail.x, tail.y, 3, 0, Math.PI * 2);
    bgCtx.fillStyle   = this.color;
    bgCtx.shadowBlur  = 14;
    bgCtx.shadowColor = this.color;
    bgCtx.fill();
    bgCtx.shadowBlur = 0;

    // ── Bike body ──────────────────────────────────────────
    this.drawBike();
  }

  drawBike() {
    bgCtx.save();
    bgCtx.translate(this.x, this.y);
    bgCtx.rotate(this.angle);

    const { r, g, b } = this;

    bgCtx.shadowBlur  = 22;
    bgCtx.shadowColor = this.color;

    // ── Main chassis (elongated angular hexagon) ───────────
    bgCtx.fillStyle = this.color;
    bgCtx.beginPath();
    bgCtx.moveTo( 15,  0);   // nose tip
    bgCtx.lineTo(  9, -5);   // front-top
    bgCtx.lineTo( -8, -5);   // rear-top
    bgCtx.lineTo(-13, -2);   // rear-top-back
    bgCtx.lineTo(-13,  2);   // rear-bottom-back
    bgCtx.lineTo( -8,  5);   // rear-bottom
    bgCtx.lineTo(  9,  5);   // front-bottom
    bgCtx.closePath();
    bgCtx.fill();

    // ── Rider silhouette ───────────────────────────────────
    bgCtx.beginPath();
    bgCtx.moveTo( -1, -5);
    bgCtx.lineTo(  0, -13);  // back of helmet
    bgCtx.lineTo(  5, -14);  // helmet top
    bgCtx.lineTo(  8, -10);  // visor
    bgCtx.lineTo(  8,  -5);  // leaning forward
    bgCtx.closePath();
    bgCtx.fill();

    // ── Front wheel ───────────────────────────────────────
    bgCtx.lineWidth   = 1.5;
    bgCtx.strokeStyle = this.color;
    bgCtx.beginPath();
    bgCtx.arc(9, 0, 4.5, 0, Math.PI * 2);
    bgCtx.stroke();
    // Wheel hub
    bgCtx.beginPath();
    bgCtx.arc(9, 0, 1.5, 0, Math.PI * 2);
    bgCtx.fillStyle = `rgba(${r},${g},${b},0.9)`;
    bgCtx.fill();

    // ── Rear wheel ────────────────────────────────────────
    bgCtx.strokeStyle = this.color;
    bgCtx.beginPath();
    bgCtx.arc(-9, 0, 4.5, 0, Math.PI * 2);
    bgCtx.stroke();
    bgCtx.beginPath();
    bgCtx.arc(-9, 0, 1.5, 0, Math.PI * 2);
    bgCtx.fillStyle = `rgba(${r},${g},${b},0.9)`;
    bgCtx.fill();

    // ── Cockpit (bright white window slit) ────────────────
    bgCtx.fillStyle   = 'rgba(255,255,255,0.95)';
    bgCtx.shadowBlur  = 8;
    bgCtx.shadowColor = '#ffffff';
    bgCtx.fillRect(4, -3.5, 7, 7);

    // ── Underbody glow line ────────────────────────────────
    bgCtx.shadowBlur  = 6;
    bgCtx.shadowColor = this.color;
    bgCtx.strokeStyle = `rgba(${r},${g},${b},0.6)`;
    bgCtx.lineWidth   = 1;
    bgCtx.beginPath();
    bgCtx.moveTo(-12, 0); bgCtx.lineTo(14, 0);
    bgCtx.stroke();

    bgCtx.restore();
    bgCtx.shadowBlur = 0;
  }
}

// Three cycles — 2 blue, 1 pink — staggered start times
const lightCycles = [
  new LightCycle('#00e5ff', 0),
  new LightCycle('#ff00ff', 2500),
  new LightCycle('#00e5ff', 5000),
];
lightCycles.forEach(c => {
  setTimeout(() => { c.started = true; }, c.startDelay);
});

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

  gridNodes.forEach(n  => { n.update();  n.draw();  });
  streams.forEach(s    => { s.update();  s.draw();  });
  lightCycles.forEach(c => { c.update(); c.draw();  });
  particles.forEach(p  => { p.update();  p.draw();  });

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

// ============================================================
// SECRET ACCESS
// ============================================================
(function () {
  const input = document.getElementById('secret-input');
  if (!input) return;
  input.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter') return;
    if (input.value.toLowerCase() === 'elou') {
      window.location.href = './beach.html';
    } else {
      input.value = '';
      input.placeholder = 'DENIED';
      setTimeout(() => { input.placeholder = 'access'; }, 1800);
    }
  });
})();
