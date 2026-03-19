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
// SECRET ACCESS + BEACH OVERLAY
// ============================================================
(function () {
  // ── Password gate ──────────────────────────────────────────
  const input = document.getElementById('secret-input');
  if (input) {
    input.addEventListener('keydown', function (e) {
      if (e.key !== 'Enter') return;
      if (input.value.toLowerCase() === 'elou') {
        openBeach();
      } else {
        input.value = '';
        input.placeholder = 'DENIED';
        setTimeout(() => { input.placeholder = 'access'; }, 1800);
      }
    });
  }

  // ── Show / hide overlay ────────────────────────────────────
  function openBeach() {
    document.getElementById('beach-overlay').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    initBeach();
  }

  document.getElementById('beach-back').addEventListener('click', () => {
    document.getElementById('beach-overlay').classList.add('hidden');
    document.body.style.overflow = '';
    stopBeach();
    const audio = document.getElementById('beach-audio');
    if (audio) { audio.pause(); audio.currentTime = 0; }
    document.getElementById('beach-play-btn').textContent = '▶';
    document.getElementById('beach-eq').classList.remove('playing');
    document.getElementById('lyrics-panel').classList.remove('open');
  });

  // ── Lyrics panel ───────────────────────────────────────────
  document.getElementById('lyrics-toggle').addEventListener('click', () =>
    document.getElementById('lyrics-panel').classList.toggle('open'));
  document.getElementById('lyrics-close').addEventListener('click', () =>
    document.getElementById('lyrics-panel').classList.remove('open'));

  // ── Audio player ───────────────────────────────────────────
  let beachAudioReady = false;
  function initAudio() {
    if (beachAudioReady) return;
    beachAudioReady = true;
    const audio    = document.getElementById('beach-audio');
    const playBtn  = document.getElementById('beach-play-btn');
    const fill     = document.getElementById('beach-progress-fill');
    const track    = document.getElementById('beach-progress-track');
    const timeEl   = document.getElementById('beach-player-time');
    const eq       = document.getElementById('beach-eq');
    const volRange = document.getElementById('beach-vol');
    const volIcon  = document.getElementById('beach-vol-icon');

    audio.src = './music_lekkerland.mp3';
    audio.load();
    audio.volume = 0.8;

    audio.addEventListener('error', () => {
      playBtn.textContent = '⚠';
      playBtn.title = 'Audio file not found';
    });

    function fmt(s) {
      if (!isFinite(s)) return '0:00';
      return Math.floor(s / 60) + ':' + String(Math.floor(s % 60)).padStart(2, '0');
    }

    let playing = false;
    playBtn.addEventListener('click', () => {
      if (playing) {
        audio.pause();
        playBtn.textContent = '▶';
        eq.classList.remove('playing');
        playing = false;
      } else {
        audio.play().then(() => {
          playBtn.textContent = '⏸';
          eq.classList.add('playing');
          playing = true;
        }).catch(err => {
          console.error('Beach audio play failed:', err);
          playBtn.textContent = '⚠';
        });
      }
    });

    audio.addEventListener('timeupdate', () => {
      if (!audio.duration) return;
      fill.style.width = (audio.currentTime / audio.duration * 100) + '%';
      timeEl.textContent = fmt(audio.currentTime) + ' / ' + fmt(audio.duration);
    });

    audio.addEventListener('ended', () => {
      playBtn.textContent = '▶';
      eq.classList.remove('playing');
      playing = false;
    });

    track.addEventListener('click', e => {
      if (!audio.duration) return;
      const r = track.getBoundingClientRect();
      audio.currentTime = ((e.clientX - r.left) / r.width) * audio.duration;
    });

    volRange.addEventListener('input', () => {
      audio.volume = +volRange.value;
      volIcon.textContent = +volRange.value === 0 ? '🔇' : '🔊';
    });

    volIcon.addEventListener('click', () => {
      if (audio.volume > 0) {
        audio.volume = 0; volRange.value = 0; volIcon.textContent = '🔇';
      } else {
        audio.volume = 0.8; volRange.value = 0.8; volIcon.textContent = '🔊';
      }
    });
  }

  // ── Beach canvas animation ─────────────────────────────────
  let beachRAF = null;
  let beachCanvasReady = false;

  function stopBeach() {
    if (beachRAF) { cancelAnimationFrame(beachRAF); beachRAF = null; }
  }

  function initBeach() {
    initAudio();
    const canvas = document.getElementById('beach-canvas');
    const ctx    = canvas.getContext('2d');
    let W, H, horizon, sandLine;

    function resize() {
      W        = canvas.width  = canvas.offsetWidth;
      H        = canvas.height = canvas.offsetHeight;
      horizon  = H * 0.47;
      sandLine = H * 0.77;
    }
    resize();

    const resizeOb = new ResizeObserver(resize);
    resizeOb.observe(canvas);

    const stars = Array.from({ length: 88 }, () => ({
      x: Math.random(), y: Math.random() * 0.44,
      r: Math.random() * 1.4 + 0.3,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 1.4 + 0.5,
    }));

    const clouds = Array.from({ length: 4 }, (_, i) => ({
      x: i * 0.3 - 0.05, y: 0.06 + Math.random() * 0.15,
      w: 95 + Math.random() * 115, h: 28 + Math.random() * 22,
      speed: 0.022 + Math.random() * 0.014,
      alpha: 0.16 + Math.random() * 0.14,
    }));

    const gulls = Array.from({ length: 7 }, () => ({
      x: Math.random() * 1, y: 0.10 + Math.random() * 0.24,
      speed: 22 + Math.random() * 32,
      phase: Math.random() * Math.PI * 2,
      size: 7 + Math.random() * 9,
    }));

    const foam = Array.from({ length: 38 }, () => ({
      x: Math.random(), y: 0, vy: 0,
      r: Math.random() * 2.4 + 0.7,
      phase: Math.random() * Math.PI * 2,
      life: Math.random() * 2, maxLife: 1.8 + Math.random() * 2,
    }));

    const leafData = [
      { a: -0.42, l: 0.19, s: 0.06 }, { a: -0.82, l: 0.17, s: 0.07 },
      { a: -1.22, l: 0.14, s: 0.08 }, { a: -1.62, l: 0.11, s: 0.09 },
      { a:  0.18, l: 0.18, s: 0.06 }, { a:  0.58, l: 0.15, s: 0.07 },
      { a:  0.98, l: 0.13, s: 0.08 }, { a:  1.38, l: 0.10, s: 0.10 },
    ];

    function qpt(t, ax, ay, bx, by, cx, cy) {
      const u = 1 - t;
      return { x: u*u*ax + 2*u*t*bx + t*t*cx, y: u*u*ay + 2*u*t*by + t*t*cy };
    }
    function waveY(x, t, yBase, speed, amp) {
      return yBase
        + Math.sin(x * 0.009 + t * speed)            * amp
        + Math.sin(x * 0.018 + t * speed * 1.33 + 1) * amp * 0.37
        + Math.sin(x * 0.005 + t * speed * 0.65 + 2) * amp * 0.27;
    }

    function drawSky() {
      const g = ctx.createLinearGradient(0, 0, 0, horizon);
      g.addColorStop(0, '#07102b'); g.addColorStop(0.32, '#17305e');
      g.addColorStop(0.63, '#8a2050'); g.addColorStop(0.82, '#d4520a');
      g.addColorStop(1, '#f5a420');
      ctx.fillStyle = g; ctx.fillRect(0, 0, W, horizon);
    }
    function drawStars(t) {
      stars.forEach(s => {
        ctx.globalAlpha = 0.32 + 0.36 * Math.sin(s.phase + t * s.speed);
        ctx.fillStyle = '#fffde7'; ctx.beginPath();
        ctx.arc(s.x * W, s.y * H, s.r, 0, Math.PI * 2); ctx.fill();
      });
      ctx.globalAlpha = 1;
    }
    function drawSun(t) {
      const sx = W * 0.7, sy = horizon + 1;
      const halo = ctx.createRadialGradient(sx, sy, 0, sx, sy, H * 0.44);
      halo.addColorStop(0, 'rgba(255,168,28,.44)'); halo.addColorStop(0.26, 'rgba(255,88,8,.22)');
      halo.addColorStop(0.56, 'rgba(180,28,0,.07)'); halo.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = halo; ctx.fillRect(0, 0, W, H * 0.72);
      const sr = H * 0.065 * (1 + 0.028 * Math.sin(t * 2.6));
      const sg = ctx.createRadialGradient(sx, sy, 0, sx, sy, sr);
      sg.addColorStop(0, '#fffde7'); sg.addColorStop(0.45, '#ffe082'); sg.addColorStop(1, '#ff8f00');
      ctx.fillStyle = sg; ctx.beginPath(); ctx.arc(sx, sy, sr, 0, Math.PI * 2); ctx.fill();
    }
    function drawSunReflection(t) {
      const sx = W * 0.7, shim = Math.sin(t * 3.3) * W * 0.014;
      const rg = ctx.createLinearGradient(0, horizon, 0, sandLine);
      rg.addColorStop(0, 'rgba(255,138,18,.36)'); rg.addColorStop(0.5, 'rgba(255,98,8,.14)');
      rg.addColorStop(1, 'rgba(255,58,0,.02)');
      ctx.fillStyle = rg; ctx.beginPath();
      ctx.moveTo(sx - W*0.035 + shim*0.3, horizon); ctx.lineTo(sx + W*0.035 + shim*0.3, horizon);
      ctx.lineTo(sx + W*0.13 + shim, sandLine);   ctx.lineTo(sx - W*0.13 + shim, sandLine);
      ctx.closePath(); ctx.fill();
    }
    function drawClouds(dt) {
      clouds.forEach(c => {
        c.x += c.speed * dt;
        if (c.x > 1.35) c.x = -0.22;
        ctx.globalAlpha = c.alpha; ctx.fillStyle = '#ff9966';
        for (let i = 0; i < 5; i++) {
          ctx.beginPath();
          ctx.arc(c.x * W + (i-2) * c.w * 0.22, c.y * H, c.h * (0.52 + Math.abs(Math.sin(i*1.4)) * 0.48), 0, Math.PI*2);
          ctx.fill();
        }
        ctx.globalAlpha = 1;
      });
    }
    function drawWaterLayer(t, yBase, speed, amp, color, alpha) {
      ctx.beginPath(); ctx.moveTo(0, H);
      for (let x = 0; x <= W + 4; x += 4) ctx.lineTo(x, waveY(x, t, yBase, speed, amp));
      ctx.lineTo(W, H); ctx.closePath();
      ctx.globalAlpha = alpha; ctx.fillStyle = color; ctx.fill(); ctx.globalAlpha = 1;
    }
    function drawFoamCrest(t, yBase, speed, amp) {
      ctx.beginPath();
      for (let x = 0; x <= W; x += 3) {
        const y = waveY(x, t, yBase, speed, amp);
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.strokeStyle = 'rgba(255,255,255,.55)'; ctx.lineWidth = 1.8;
      ctx.globalAlpha = 0.42; ctx.stroke(); ctx.globalAlpha = 1;
    }
    function drawWater(t) {
      drawWaterLayer(t, horizon,            0.55, H*.010, '#004d6e', 1.0);
      drawWaterLayer(t, horizon + H*.04,   0.80, H*.016, '#006f98', 0.88);
      drawWaterLayer(t, horizon + H*.10,   1.10, H*.020, '#00a0be', 0.84);
      drawWaterLayer(t, sandLine - H*.05,  1.62, H*.014, '#38cce4', 0.76);
      drawFoamCrest(t, horizon + H*.04,   0.80, H*.016);
      drawFoamCrest(t, sandLine - H*.05,  1.62, H*.014);
    }
    function drawSand(t) {
      const g = ctx.createLinearGradient(0, sandLine, 0, H);
      g.addColorStop(0, '#f5e4c4'); g.addColorStop(0.25, '#e8d4a4'); g.addColorStop(1, '#c6a468');
      ctx.fillStyle = g; ctx.fillRect(0, sandLine, W, H - sandLine);
      ctx.strokeStyle = 'rgba(135,85,35,.11)'; ctx.lineWidth = 1;
      for (let i = 1; i <= 5; i++) {
        const y = sandLine + i * (H - sandLine) / 6;
        ctx.beginPath();
        for (let x = 0; x <= W; x += 6) {
          const ry = y + Math.sin(x * .042 + t * .18 + i * 2.1) * 2.5;
          x === 0 ? ctx.moveTo(x, ry) : ctx.lineTo(x, ry);
        }
        ctx.stroke();
      }
    }
    function drawPalmTree(rootX, rootY, flipped, swayT) {
      const trunkH = H * 0.27, lean = flipped ? 1 : -1;
      const sway = Math.sin(swayT * .48) * 9 * lean;
      const tipX = rootX + lean * trunkH * .37 + sway, tipY = rootY - trunkH;
      const cpX  = rootX + lean * trunkH * .17 + sway * .42, cpY = rootY - trunkH * .52;
      ctx.lineCap = 'round';
      for (let i = 0; i < 9; i++) {
        const p0 = qpt(i/9,     rootX, rootY, cpX, cpY, tipX, tipY);
        const p1 = qpt((i+1)/9, rootX, rootY, cpX, cpY, tipX, tipY);
        ctx.strokeStyle = (i%2===0) ? '#7a5520' : '#8c6322';
        ctx.lineWidth = Math.max(4, 14 - i * .85);
        ctx.beginPath(); ctx.moveTo(p0.x, p0.y); ctx.lineTo(p1.x, p1.y); ctx.stroke();
      }
      const nutR = H * .013; ctx.fillStyle = '#5c3a1e';
      for (let i = -1; i <= 1; i++) {
        ctx.beginPath(); ctx.arc(tipX + i*nutR*1.6, tipY + nutR*.5, nutR, 0, Math.PI*2); ctx.fill();
      }
      const windSway = Math.sin(swayT * .48) * .11;
      leafData.forEach((leaf, idx) => {
        const angle = (flipped ? -leaf.a : leaf.a) + windSway * (idx%2===0 ? 1 : -.55);
        const len = leaf.l * H, sag = leaf.s * H;
        const ex = tipX + Math.sin(angle) * len, ey = tipY - Math.cos(angle) * len;
        const mx = (tipX+ex)/2 + Math.cos(angle)*sag, my = (tipY+ey)/2 + sag*.88;
        const hue = 102 + (idx*11)%38, lit = 28 + (idx*4)%18;
        ctx.strokeStyle = `hsl(${hue},68%,${lit}%)`; ctx.lineWidth = Math.max(1.4, 5-idx*.4);
        ctx.beginPath(); ctx.moveTo(tipX, tipY); ctx.quadraticCurveTo(mx, my, ex, ey); ctx.stroke();
        ctx.lineWidth = 1.1; ctx.strokeStyle = `hsl(${hue},54%,${lit-5}%)`;
        for (let j = 2; j <= 7; j++) {
          const frac = j/8, pt = qpt(frac, tipX, tipY, mx, my, ex, ey);
          const perp = angle + Math.PI*.5, ll = H*.013*(1-frac*.44);
          ctx.beginPath();
          ctx.moveTo(pt.x + Math.sin(perp+.35)*ll, pt.y - Math.cos(perp+.35)*ll);
          ctx.lineTo(pt.x, pt.y);
          ctx.lineTo(pt.x + Math.sin(perp-.35)*ll, pt.y - Math.cos(perp-.35)*ll);
          ctx.stroke();
        }
      });
    }
    function drawSeagulls(t, dt) {
      gulls.forEach(g => {
        g.x = (g.x + g.speed * dt / W + 1) % 1;
        const wingA = Math.sin(t*4.4 + g.phase), s = g.size;
        ctx.globalAlpha = 0.52 + .22*Math.sin(t*.75+g.phase);
        ctx.strokeStyle = 'rgba(228,228,255,.9)'; ctx.lineWidth = 1.5; ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(g.x*W - s, g.y*H + wingA*s*.6);
        ctx.quadraticCurveTo(g.x*W - s*.44, g.y*H - wingA*s*.33, g.x*W, g.y*H);
        ctx.quadraticCurveTo(g.x*W + s*.44, g.y*H - wingA*s*.33, g.x*W + s, g.y*H + wingA*s*.6);
        ctx.stroke(); ctx.globalAlpha = 1;
      });
    }
    function drawFoam(t, dt) {
      const shoreBase = sandLine - H*.05, shoreAmp = H*.014;
      foam.forEach(p => {
        p.life += dt;
        if (p.life > p.maxLife) {
          p.x = Math.random(); p.y = waveY(p.x*W, t, shoreBase, 1.62, shoreAmp);
          p.vy = (Math.random()-.5)*9; p.life = 0;
          p.maxLife = 1.6 + Math.random()*2; p.r = Math.random()*2.3+.6;
        }
        p.y += p.vy*dt; p.vy *= .94;
        const lr = p.life/p.maxLife;
        const a = lr<.2 ? lr/.2 : lr>.7 ? (1-lr)/.3 : 1;
        ctx.globalAlpha = a*.52; ctx.fillStyle = '#fff';
        ctx.beginPath(); ctx.arc(p.x*W, p.y, p.r, 0, Math.PI*2); ctx.fill();
      });
      ctx.globalAlpha = 1;
    }

    let prev = 0;
    function loop(now) {
      beachRAF = requestAnimationFrame(loop);
      const dt = Math.min((now - prev) / 1000, 0.05); prev = now;
      const t = now / 1000;
      ctx.clearRect(0, 0, W, H);
      drawSky(); drawStars(t); drawSun(t); drawSunReflection(t);
      drawClouds(dt); drawWater(t); drawSand(t); drawFoam(t, dt);
      drawPalmTree(W*.052, sandLine + H*.006, false, t);
      drawPalmTree(W*.948, sandLine + H*.006, true,  t + .65);
      drawSeagulls(t, dt);
    }
    beachRAF = requestAnimationFrame(loop);
  }
})();
