
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Abhijay Gopal — Researcher & Engineer</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Mono:wght@300;400;500&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">
<style>
  :root {
    --bg: #0a0a0f;
    --surface: #12121a;
    --border: #1e1e2e;
    --accent: #7ee8a2;
    --accent2: #38bdf8;
    --accent3: #f472b6;
    --text: #e8e8f0;
    --muted: #6b7280;
    --card: #14141f;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  html { scroll-behavior: smooth; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'DM Sans', sans-serif;
    font-weight: 300;
    line-height: 1.6;
    overflow-x: hidden;
  }

  /* Noise texture overlay */
  body::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 9999;
    opacity: 0.35;
  }

  /* Glow blobs */
  .blob {
    position: fixed;
    border-radius: 50%;
    filter: blur(120px);
    pointer-events: none;
    z-index: 0;
    opacity: 0.12;
  }
  .blob-1 { width: 600px; height: 600px; background: var(--accent); top: -200px; left: -200px; }
  .blob-2 { width: 500px; height: 500px; background: var(--accent2); bottom: 10%; right: -100px; }
  .blob-3 { width: 400px; height: 400px; background: var(--accent3); top: 40%; left: 30%; }

  /* ─── NAV ─── */
  nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem 3rem;
    backdrop-filter: blur(20px);
    background: rgba(10,10,15,0.7);
    border-bottom: 1px solid var(--border);
  }

  .nav-logo {
    font-family: 'DM Mono', monospace;
    font-size: 0.85rem;
    color: var(--accent);
    letter-spacing: 0.05em;
  }

  .nav-links { display: flex; gap: 2rem; list-style: none; }
  .nav-links a {
    font-family: 'DM Mono', monospace;
    font-size: 0.75rem;
    color: var(--muted);
    text-decoration: none;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    transition: color 0.3s;
  }
  .nav-links a:hover { color: var(--text); }

  /* ─── HERO ─── */
  .hero {
    position: relative;
    min-height: 100vh;
    display: grid;
    place-items: center;
    padding: 8rem 3rem 4rem;
    z-index: 1;
  }

  .hero-inner { max-width: 900px; }

  .hero-tag {
    font-family: 'DM Mono', monospace;
    font-size: 0.75rem;
    color: var(--accent);
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    opacity: 0;
    animation: fadeUp 0.8s ease forwards 0.2s;
  }

  .hero-tag::before {
    content: '';
    display: block;
    width: 32px;
    height: 1px;
    background: var(--accent);
  }

  h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(3rem, 7vw, 6rem);
    line-height: 1.05;
    letter-spacing: -0.02em;
    margin-bottom: 1.5rem;
    opacity: 0;
    animation: fadeUp 0.8s ease forwards 0.4s;
  }

  h1 em {
    font-style: italic;
    color: var(--accent);
  }

  .hero-desc {
    font-size: 1.1rem;
    color: var(--muted);
    max-width: 560px;
    margin-bottom: 2.5rem;
    opacity: 0;
    animation: fadeUp 0.8s ease forwards 0.6s;
  }

  .hero-ctas {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    opacity: 0;
    animation: fadeUp 0.8s ease forwards 0.8s;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.75rem;
    font-family: 'DM Mono', monospace;
    font-size: 0.8rem;
    letter-spacing: 0.05em;
    text-decoration: none;
    border-radius: 4px;
    transition: all 0.3s;
    cursor: pointer;
    border: none;
  }

  .btn-primary {
    background: var(--accent);
    color: #0a0a0f;
  }
  .btn-primary:hover { background: #a7f3c0; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(126,232,162,0.25); }

  .btn-outline {
    background: transparent;
    color: var(--text);
    border: 1px solid var(--border);
  }
  .btn-outline:hover { border-color: var(--muted); transform: translateY(-2px); }

  /* Stats strip */
  .stats {
    margin-top: 5rem;
    display: flex;
    gap: 3rem;
    flex-wrap: wrap;
    opacity: 0;
    animation: fadeUp 0.8s ease forwards 1s;
  }

  .stat-item { border-left: 2px solid var(--border); padding-left: 1.25rem; }
  .stat-num {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    color: var(--text);
  }
  .stat-num span { color: var(--accent); }
  .stat-label { font-size: 0.8rem; color: var(--muted); font-family: 'DM Mono', monospace; }

  /* ─── SECTION SHARED ─── */
  section { position: relative; z-index: 1; }

  .container { max-width: 1100px; margin: 0 auto; padding: 6rem 3rem; }

  .section-label {
    font-family: 'DM Mono', monospace;
    font-size: 0.7rem;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--accent);
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
  .section-label::before {
    content: '';
    display: block;
    width: 24px;
    height: 1px;
    background: var(--accent);
  }

  h2 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 4vw, 3rem);
    line-height: 1.1;
    margin-bottom: 3rem;
    letter-spacing: -0.01em;
  }

  /* ─── ABOUT ─── */
  .about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }

  .about-text p { color: var(--muted); margin-bottom: 1rem; line-height: 1.8; }
  .about-text p strong { color: var(--text); font-weight: 500; }

  .skills-grid {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .skill-row { display: flex; flex-direction: column; gap: 0.4rem; }
  .skill-info { display: flex; justify-content: space-between; font-family: 'DM Mono', monospace; font-size: 0.75rem; }
  .skill-info span:first-child { color: var(--text); }
  .skill-info span:last-child { color: var(--accent); }

  .skill-bar { height: 3px; background: var(--border); border-radius: 2px; overflow: hidden; }
  .skill-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--accent), var(--accent2));
    border-radius: 2px;
    transform-origin: left;
    transform: scaleX(0);
    transition: transform 1s ease 0.2s;
  }
  .skill-fill.animate { transform: scaleX(1); }

  /* ─── RESEARCH / PROJECTS ─── */
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 1.5rem;
  }

  .project-card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 2rem;
    transition: all 0.3s;
    position: relative;
    overflow: hidden;
  }

  .project-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--accent), var(--accent2));
    transform: scaleX(0);
    transition: transform 0.3s;
    transform-origin: left;
  }

  .project-card:hover { transform: translateY(-4px); border-color: rgba(126,232,162,0.2); box-shadow: 0 20px 40px rgba(0,0,0,0.4); }
  .project-card:hover::before { transform: scaleX(1); }

  .project-type {
    font-family: 'DM Mono', monospace;
    font-size: 0.65rem;
    color: var(--accent);
    letter-spacing: 0.15em;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  .project-card h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.3rem;
    margin-bottom: 0.75rem;
    letter-spacing: -0.01em;
  }

  .project-card p { font-size: 0.9rem; color: var(--muted); line-height: 1.7; margin-bottom: 1.5rem; }

  .project-tags { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1.5rem; }
  .tag {
    font-family: 'DM Mono', monospace;
    font-size: 0.65rem;
    padding: 0.25rem 0.6rem;
    background: var(--border);
    color: var(--muted);
    border-radius: 3px;
    letter-spacing: 0.05em;
  }

  .project-links { display: flex; gap: 1rem; }
  .project-link {
    font-family: 'DM Mono', monospace;
    font-size: 0.72rem;
    color: var(--muted);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    transition: color 0.2s;
    letter-spacing: 0.05em;
  }
  .project-link:hover { color: var(--accent); }

  /* ─── PUBLICATIONS ─── */
  .pubs-section { background: var(--surface); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }

  .pub-list { display: flex; flex-direction: column; gap: 1.5rem; }

  .pub-item {
    display: grid;
    grid-template-columns: 60px 1fr;
    gap: 1.5rem;
    align-items: start;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--border);
  }
  .pub-item:last-child { border-bottom: none; }

  .pub-year {
    font-family: 'DM Mono', monospace;
    font-size: 0.8rem;
    color: var(--accent);
    padding-top: 0.2rem;
  }

  .pub-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.1rem;
    margin-bottom: 0.4rem;
    line-height: 1.3;
  }

  .pub-venue { font-size: 0.85rem; color: var(--muted); margin-bottom: 0.75rem; }

  .pub-actions { display: flex; gap: 1rem; }
  .pub-badge {
    font-family: 'DM Mono', monospace;
    font-size: 0.65rem;
    padding: 0.2rem 0.6rem;
    border-radius: 3px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    text-decoration: none;
    transition: opacity 0.2s;
  }
  .pub-badge:hover { opacity: 0.7; }
  .badge-pdf { background: rgba(126,232,162,0.15); color: var(--accent); }
  .badge-cite { background: rgba(56,189,248,0.15); color: var(--accent2); }
  .badge-code { background: rgba(244,114,182,0.15); color: var(--accent3); }

  /* ─── TIMELINE / EDUCATION ─── */
  .timeline { position: relative; padding-left: 2rem; }
  .timeline::before {
    content: '';
    position: absolute;
    left: 0; top: 8px; bottom: 8px;
    width: 1px;
    background: linear-gradient(to bottom, var(--accent), transparent);
  }

  .timeline-item {
    position: relative;
    margin-bottom: 2.5rem;
  }

  .timeline-item::before {
    content: '';
    position: absolute;
    left: -2rem;
    top: 8px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--accent);
    border: 2px solid var(--bg);
    box-shadow: 0 0 0 3px rgba(126,232,162,0.2);
  }

  .timeline-date {
    font-family: 'DM Mono', monospace;
    font-size: 0.72rem;
    color: var(--accent);
    margin-bottom: 0.4rem;
  }

  .timeline-title {
    font-size: 1.05rem;
    font-weight: 500;
    margin-bottom: 0.2rem;
  }

  .timeline-place { font-size: 0.85rem; color: var(--muted); margin-bottom: 0.5rem; }
  .timeline-desc { font-size: 0.85rem; color: var(--muted); line-height: 1.7; }

  /* ─── CONTACT ─── */
  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: start;
  }

  .contact-desc { color: var(--muted); line-height: 1.8; margin-bottom: 2rem; }

  .social-links { display: flex; flex-direction: column; gap: 0.75rem; }

  .social-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.9rem 1.25rem;
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 6px;
    text-decoration: none;
    transition: all 0.3s;
    color: var(--text);
  }

  .social-item:hover { border-color: var(--accent); transform: translateX(4px); background: rgba(126,232,162,0.05); }

  .social-icon { font-size: 1.1rem; width: 24px; }
  .social-name { font-family: 'DM Mono', monospace; font-size: 0.78rem; }
  .social-handle { font-size: 0.8rem; color: var(--muted); margin-left: auto; }

  .contact-form { display: flex; flex-direction: column; gap: 1rem; }

  .form-group { display: flex; flex-direction: column; gap: 0.4rem; }

  .form-label {
    font-family: 'DM Mono', monospace;
    font-size: 0.7rem;
    color: var(--muted);
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .form-input, .form-textarea {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 4px;
    padding: 0.75rem 1rem;
    color: var(--text);
    font-family: 'DM Sans', sans-serif;
    font-size: 0.9rem;
    outline: none;
    transition: border-color 0.3s;
  }

  .form-input:focus, .form-textarea:focus { border-color: var(--accent); }
  .form-textarea { resize: vertical; min-height: 120px; }

  /* ─── FOOTER ─── */
  footer {
    border-top: 1px solid var(--border);
    padding: 2rem 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 1;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .footer-copy {
    font-family: 'DM Mono', monospace;
    font-size: 0.72rem;
    color: var(--muted);
  }

  .footer-copy span { color: var(--accent); }

  /* ─── ANIMATIONS ─── */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .reveal {
    opacity: 0;
    transform: translateY(32px);
    transition: opacity 0.7s ease, transform 0.7s ease;
  }
  .reveal.visible { opacity: 1; transform: translateY(0); }

  /* Cursor dot */
  .cursor {
    width: 8px; height: 8px;
    background: var(--accent);
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 9998;
    transition: transform 0.1s;
    mix-blend-mode: difference;
  }

  .cursor-ring {
    width: 32px; height: 32px;
    border: 1px solid rgba(126,232,162,0.4);
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 9997;
    transition: all 0.15s ease;
  }

  /* Responsive */
  @media (max-width: 768px) {
    nav { padding: 1rem 1.5rem; }
    .nav-links { gap: 1.25rem; }
    .container { padding: 4rem 1.5rem; }
    .about-grid, .contact-grid { grid-template-columns: 1fr; }
    .hero { padding: 7rem 1.5rem 3rem; }
    .stats { gap: 1.5rem; }
    footer { flex-direction: column; align-items: flex-start; padding: 1.5rem; }
    .cursor, .cursor-ring { display: none; }
    .pub-item { grid-template-columns: 1fr; }
  }
</style>
</head>
<body>

<!-- Custom cursor -->
<div class="cursor" id="cursor"></div>
<div class="cursor-ring" id="cursor-ring"></div>

<!-- Background blobs -->
<div class="blob blob-1"></div>
<div class="blob blob-2"></div>
<div class="blob blob-3"></div>

<!-- NAV -->
<nav>
  <div class="nav-logo">AM.research</div>
  <ul class="nav-links">
    <li><a href="#about">About</a></li>
    <li><a href="#research">Research</a></li>
    <li><a href="#publications">Papers</a></li>
    <li><a href="#education">CV</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>

<!-- HERO -->
<section class="hero" id="home">
  <div class="hero-inner">
    <div class="hero-tag">Available for collaboration</div>
    <h1>Alex <em>Morgan</em>,<br>Researcher & Engineer</h1>
    <p class="hero-desc">
      M.Sc. candidate in Machine Learning at MIT. I work on the intersection of
      deep learning, scientific computing, and systems design — building tools
      that make research reproducible and real.
    </p>
    <div class="hero-ctas">
      <a href="#research" class="btn btn-primary">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
        View Research
      </a>
      <a href="#contact" class="btn btn-outline">Get in Touch</a>
    </div>
    <div class="stats">
      <div class="stat-item">
        <div class="stat-num">8<span>+</span></div>
        <div class="stat-label">Publications</div>
      </div>
      <div class="stat-item">
        <div class="stat-num">340<span>+</span></div>
        <div class="stat-label">Citations</div>
      </div>
      <div class="stat-item">
        <div class="stat-num">12<span>+</span></div>
        <div class="stat-label">Open-Source Projects</div>
      </div>
      <div class="stat-item">
        <div class="stat-num">3<span>yrs</span></div>
        <div class="stat-label">Research Experience</div>
      </div>
    </div>
  </div>
</section>

<!-- ABOUT -->
<section id="about">
  <div class="container">
    <div class="section-label">About Me</div>
    <div class="about-grid">
      <div class="about-text reveal">
        <h2>Building at the edge of <em>what's known</em></h2>
        <p>I'm a second-year M.Sc. student advised by Prof. Jane Smith at the <strong>MIT CSAIL</strong> lab. My research focuses on efficient neural architectures and their applications to scientific discovery.</p>
        <p>Before grad school, I spent two years at <strong>DeepMind</strong> as a research engineer, shipping production ML systems and co-authoring papers on sparse attention mechanisms.</p>
        <p>I believe great research is both rigorous and reproducible. All my work comes with clean code, thorough documentation, and public datasets wherever possible.</p>
        <div style="margin-top: 1.5rem; display: flex; gap: 1rem; flex-wrap: wrap;">
          <a href="#" class="btn btn-outline" style="font-size: 0.75rem; padding: 0.6rem 1.25rem;">Download CV</a>
          <a href="#" class="btn btn-outline" style="font-size: 0.75rem; padding: 0.6rem 1.25rem;">Google Scholar</a>
        </div>
      </div>
      <div class="skills-grid reveal">
        <div class="skill-row">
          <div class="skill-info"><span>PyTorch / JAX</span><span>95%</span></div>
          <div class="skill-bar"><div class="skill-fill" style="--w: 0.95"></div></div>
        </div>
        <div class="skill-row">
          <div class="skill-info"><span>Transformer Architectures</span><span>92%</span></div>
          <div class="skill-bar"><div class="skill-fill" style="--w: 0.92"></div></div>
        </div>
        <div class="skill-row">
          <div class="skill-info"><span>CUDA / GPU Optimization</span><span>80%</span></div>
          <div class="skill-bar"><div class="skill-fill" style="--w: 0.80"></div></div>
        </div>
        <div class="skill-row">
          <div class="skill-info"><span>Scientific Computing (NumPy/SciPy)</span><span>88%</span></div>
          <div class="skill-bar"><div class="skill-fill" style="--w: 0.88"></div></div>
        </div>
        <div class="skill-row">
          <div class="skill-info"><span>MLOps (Weights & Biases, Ray)</span><span>75%</span></div>
          <div class="skill-bar"><div class="skill-fill" style="--w: 0.75"></div></div>
        </div>
        <div class="skill-row">
          <div class="skill-info"><span>Rust / C++ (systems)</span><span>65%</span></div>
          <div class="skill-bar"><div class="skill-fill" style="--w: 0.65"></div></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- RESEARCH / PROJECTS -->
<section id="research" style="background: var(--surface); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);">
  <div class="container">
    <div class="section-label">Work</div>
    <h2>Research & <em>Projects</em></h2>
    <div class="projects-grid">

      <div class="project-card reveal">
        <div class="project-type">⬡ Research Project</div>
        <h3>SparseFormer: Efficient Attention via Learned Sparsity</h3>
        <p>A novel attention mechanism that learns which token pairs to attend to, reducing complexity from O(n²) to O(n log n) with minimal accuracy loss on long-context benchmarks.</p>
        <div class="project-tags">
          <span class="tag">PyTorch</span><span class="tag">Transformers</span><span class="tag">CUDA</span><span class="tag">NeurIPS 2024</span>
        </div>
        <div class="project-links">
          <a href="#" class="project-link">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            GitHub
          </a>
          <a href="#" class="project-link">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            Paper
          </a>
          <a href="#" class="project-link">🔗 Demo</a>
        </div>
      </div>

      <div class="project-card reveal">
        <div class="project-type">⬡ Open Source Tool</div>
        <h3>ReproKit: Reproducibility Toolkit for ML Research</h3>
        <p>A Python library that automates experiment tracking, seed management, and environment snapshotting — making research reproducible by default with zero config overhead.</p>
        <div class="project-tags">
          <span class="tag">Python</span><span class="tag">CLI</span><span class="tag">Docker</span><span class="tag">1.2k ⭐</span>
        </div>
        <div class="project-links">
          <a href="#" class="project-link">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            GitHub
          </a>
          <a href="#" class="project-link">📦 PyPI</a>
          <a href="#" class="project-link">📖 Docs</a>
        </div>
      </div>

      <div class="project-card reveal">
        <div class="project-type">⬡ Collaborative Research</div>
        <h3>Neural Scaling Laws for Scientific Simulations</h3>
        <p>Empirical study of how neural network performance scales with compute and data in physics simulation tasks, in collaboration with researchers at Stanford and ETH Zürich.</p>
        <div class="project-tags">
          <span class="tag">JAX</span><span class="tag">Scientific ML</span><span class="tag">Scaling</span><span class="tag">ICML 2024</span>
        </div>
        <div class="project-links">
          <a href="#" class="project-link">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            GitHub
          </a>
          <a href="#" class="project-link">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            arXiv
          </a>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- PUBLICATIONS -->
<section id="publications" class="pubs-section">
  <div class="container">
    <div class="section-label">Publications</div>
    <h2>Selected <em>Papers</em></h2>
    <div class="pub-list">

      <div class="pub-item reveal">
        <div class="pub-year">2024</div>
        <div>
          <div class="pub-title">SparseFormer: Learning to Attend Sparsely for Long-Context Language Understanding</div>
          <div class="pub-venue">A. Morgan, J. Smith, R. Patel — <strong>NeurIPS 2024</strong> (Spotlight)</div>
          <div class="pub-actions">
            <a href="#" class="pub-badge badge-pdf">PDF</a>
            <a href="#" class="pub-badge badge-cite">Cite</a>
            <a href="#" class="pub-badge badge-code">Code</a>
          </div>
        </div>
      </div>

      <div class="pub-item reveal">
        <div class="pub-year">2024</div>
        <div>
          <div class="pub-title">Neural Scaling Laws for Scientific Simulation: An Empirical Study</div>
          <div class="pub-venue">A. Morgan, L. Chen, M. Weber — <strong>ICML 2024</strong></div>
          <div class="pub-actions">
            <a href="#" class="pub-badge badge-pdf">PDF</a>
            <a href="#" class="pub-badge badge-cite">Cite</a>
            <a href="#" class="pub-badge badge-code">Code</a>
          </div>
        </div>
      </div>

      <div class="pub-item reveal">
        <div class="pub-year">2023</div>
        <div>
          <div class="pub-title">Efficient Fine-Tuning of Large Language Models via Structured Pruning</div>
          <div class="pub-venue">A. Morgan, T. Johnson — <strong>ICLR 2023</strong></div>
          <div class="pub-actions">
            <a href="#" class="pub-badge badge-pdf">PDF</a>
            <a href="#" class="pub-badge badge-cite">Cite</a>
          </div>
        </div>
      </div>

      <div class="pub-item reveal">
        <div class="pub-year">2022</div>
        <div>
          <div class="pub-title">Reproducibility in Deep Learning: A Systematic Review and Practical Guidelines</div>
          <div class="pub-venue">A. Morgan et al. — <strong>ACM Computing Surveys</strong>, Vol. 55(4)</div>
          <div class="pub-actions">
            <a href="#" class="pub-badge badge-pdf">PDF</a>
            <a href="#" class="pub-badge badge-cite">Cite</a>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- EDUCATION & EXPERIENCE -->
<section id="education">
  <div class="container">
    <div class="section-label">Background</div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4rem;">
      <div class="reveal">
        <h2 style="font-size: 1.8rem; margin-bottom: 2rem;">Education</h2>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-date">2023 – Present</div>
            <div class="timeline-title">M.Sc. Computer Science (AI Track)</div>
            <div class="timeline-place">MIT, Cambridge, MA</div>
            <div class="timeline-desc">Thesis: "Efficient Attention Mechanisms for Long-Context Reasoning". GPA: 4.0/4.0. NSF Graduate Research Fellow.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">2019 – 2023</div>
            <div class="timeline-title">B.Sc. Computer Science & Mathematics</div>
            <div class="timeline-place">UC Berkeley, Berkeley, CA</div>
            <div class="timeline-desc">Summa Cum Laude. Outstanding Senior Thesis Award. Dean's List all semesters.</div>
          </div>
        </div>
      </div>
      <div class="reveal">
        <h2 style="font-size: 1.8rem; margin-bottom: 2rem;">Experience</h2>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-date">Summer 2024</div>
            <div class="timeline-title">Research Intern</div>
            <div class="timeline-place">Google DeepMind, London</div>
            <div class="timeline-desc">Worked on mixture-of-experts scaling with the Gemini team. Co-authored 1 workshop paper.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">2021 – 2023</div>
            <div class="timeline-title">Research Engineer</div>
            <div class="timeline-place">DeepMind, London</div>
            <div class="timeline-desc">Shipped sparse-attention production systems serving 100M+ requests/day. Led 3-person engineering pod.</div>
          </div>
          <div class="timeline-item">
            <div class="timeline-date">Summer 2021</div>
            <div class="timeline-title">ML Engineer Intern</div>
            <div class="timeline-place">Stripe, San Francisco</div>
            <div class="timeline-desc">Built fraud detection model reducing false positive rate by 18%.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CONTACT -->
<section id="contact" style="background: var(--surface); border-top: 1px solid var(--border);">
  <div class="container">
    <div class="section-label">Get in Touch</div>
    <div class="contact-grid">
      <div class="reveal">
        <h2>Let's <em>collaborate</em></h2>
        <p class="contact-desc">
          I'm open to research collaborations, internship opportunities, and interesting side projects.
          If you're working on something that could benefit from my expertise in ML systems or efficient architectures — reach out.
        </p>
        <div class="social-links">
          <a href="mailto:alex@mit.edu" class="social-item">
            <span class="social-icon">✉</span>
            <span class="social-name">Email</span>
            <span class="social-handle">alex@mit.edu</span>
          </a>
          <a href="#" class="social-item">
            <span class="social-icon" style="font-family: monospace;">gh</span>
            <span class="social-name">GitHub</span>
            <span class="social-handle">@alexmorgan-ml</span>
          </a>
          <a href="#" class="social-item">
            <span class="social-icon">in</span>
            <span class="social-name">LinkedIn</span>
            <span class="social-handle">alex-morgan-ml</span>
          </a>
          <a href="#" class="social-item">
            <span class="social-icon">𝕏</span>
            <span class="social-name">Twitter / X</span>
            <span class="social-handle">@alexmorgan_ai</span>
          </a>
        </div>
      </div>
      <div class="reveal">
        <div class="contact-form">
          <div class="form-group">
            <label class="form-label">Your Name</label>
            <input type="text" class="form-input" placeholder="Dr. Jane Smith">
          </div>
          <div class="form-group">
            <label class="form-label">Email</label>
            <input type="email" class="form-input" placeholder="you@university.edu">
          </div>
          <div class="form-group">
            <label class="form-label">Message</label>
            <textarea class="form-textarea" placeholder="I'd love to collaborate on..."></textarea>
          </div>
          <button class="btn btn-primary" style="align-self: flex-start;">Send Message</button>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="footer-copy">© 2024 Alex Morgan — Built with <span>♥</span> and hosted on GitHub Pages</div>
  <div class="footer-copy" style="display: flex; gap: 1.5rem;">
    <a href="#home" style="color: var(--muted); text-decoration: none; font-size: 0.72rem; font-family: 'DM Mono', monospace;">↑ Back to top</a>
  </div>
</footer>

<script>
// Custom cursor
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = (mx - 4) + 'px';
  cursor.style.top = (my - 4) + 'px';
});

function animateRing() {
  rx += (mx - rx - 16) * 0.15;
  ry += (my - ry - 16) * 0.15;
  ring.style.left = rx + 'px';
  ring.style.top = ry + 'px';
  requestAnimationFrame(animateRing);
}
animateRing();

// Scroll reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      // Animate skill bars
      e.target.querySelectorAll('.skill-fill').forEach(bar => {
        bar.classList.add('animate');
        bar.style.transform = `scaleX(${bar.style.getPropertyValue('--w') || 1})`;
      });
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Skill bar widths
document.querySelectorAll('.skill-fill').forEach(bar => {
  const w = bar.closest('.skill-row').querySelector('.skill-info span:last-child').textContent;
  bar.dataset.width = parseInt(w) / 100;
});

// Intersection for skills specifically
const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.skill-fill').forEach(bar => {
        const w = parseFloat(bar.dataset.width);
        bar.style.transform = `scaleX(${w})`;
      });
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skills-grid').forEach(el => skillObserver.observe(el));
</script>

</body>
</html>

