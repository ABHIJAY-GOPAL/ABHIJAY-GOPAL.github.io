<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Abhijay Gopal | EEE Engineer | AI · Space · Cybersecurity</title>
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;600;700&family=Share+Tech+Mono&display=swap" rel="stylesheet">
<style>
  :root {
    --bg: #020b18;
    --surface: #061428;
    --surface2: #0a1f3a;
    --electric: #00f0ff;
    --plasma: #7b2fff;
    --solar: #ff6b00;
    --green: #00ff88;
    --red: #ff2d55;
    --text: #cce8ff;
    --muted: #4a7aaa;
    --border: rgba(0,240,255,0.15);
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  html { scroll-behavior: smooth; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'Rajdhani', sans-serif;
    font-size: 16px;
    overflow-x: hidden;
    cursor: none;
  }

  /* CUSTOM CURSOR */
  .cursor {
    width: 12px; height: 12px;
    background: var(--electric);
    border-radius: 50%;
    position: fixed; top: 0; left: 0;
    pointer-events: none;
    z-index: 9999;
    transform: translate(-50%,-50%);
    transition: transform 0.1s, background 0.2s;
    box-shadow: 0 0 20px var(--electric);
  }
  .cursor-ring {
    width: 36px; height: 36px;
    border: 1px solid rgba(0,240,255,0.5);
    border-radius: 50%;
    position: fixed; top: 0; left: 0;
    pointer-events: none;
    z-index: 9998;
    transform: translate(-50%,-50%);
    transition: transform 0.15s ease-out;
  }

  /* CANVAS BACKGROUND */
  #bg-canvas {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    z-index: 0;
    opacity: 0.6;
  }

  /* SCROLLBAR */
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: var(--bg); }
  ::-webkit-scrollbar-thumb { background: var(--electric); border-radius: 2px; }

  /* NAV */
  nav {
    position: fixed; top: 0; left: 0; right: 0;
    z-index: 100;
    display: flex; align-items: center; justify-content: space-between;
    padding: 18px 60px;
    background: rgba(2,11,24,0.85);
    backdrop-filter: blur(16px);
    border-bottom: 1px solid var(--border);
  }

  .nav-logo {
    font-family: 'Orbitron', monospace;
    font-weight: 900;
    font-size: 1.2rem;
    color: var(--electric);
    letter-spacing: 0.1em;
    text-decoration: none;
  }
  .nav-logo span { color: var(--plasma); }

  .nav-links { display: flex; gap: 36px; list-style: none; }
  .nav-links a {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.78rem;
    color: var(--muted);
    text-decoration: none;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    transition: color 0.3s;
    position: relative;
  }
  .nav-links a::after {
    content: '';
    position: absolute; bottom: -4px; left: 0; right: 0;
    height: 1px;
    background: var(--electric);
    transform: scaleX(0);
    transition: transform 0.3s;
  }
  .nav-links a:hover { color: var(--electric); }
  .nav-links a:hover::after { transform: scaleX(1); }

  /* SECTIONS */
  section {
    position: relative; z-index: 1;
    min-height: 100vh;
    padding: 100px 80px;
  }

  /* ─── HERO ─── */
  #hero {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
    padding-top: 140px;
  }

  .hero-left { position: relative; }

  .hero-tag {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.72rem;
    letter-spacing: 0.3em;
    color: var(--electric);
    text-transform: uppercase;
    display: flex; align-items: center; gap: 12px;
    margin-bottom: 24px;
    animation: fadeSlideUp 0.8s ease forwards;
  }
  .hero-tag::before {
    content: '';
    display: inline-block;
    width: 32px; height: 1px;
    background: var(--electric);
  }

  .hero-name {
    font-family: 'Orbitron', monospace;
    font-size: clamp(2.4rem, 5vw, 4rem);
    font-weight: 900;
    line-height: 1.1;
    letter-spacing: 0.05em;
    color: #ffffff;
    animation: fadeSlideUp 0.9s 0.1s ease both;
  }
  .hero-name .accent { color: var(--electric); }

  .hero-title {
    font-family: 'Rajdhani', sans-serif;
    font-size: 1.1rem;
    font-weight: 600;
    letter-spacing: 0.2em;
    color: var(--muted);
    text-transform: uppercase;
    margin: 16px 0 32px;
    animation: fadeSlideUp 1s 0.2s ease both;
  }

  .hero-domains {
    display: flex; flex-wrap: wrap; gap: 10px;
    margin-bottom: 40px;
    animation: fadeSlideUp 1.1s 0.3s ease both;
  }

  .domain-chip {
    display: flex; align-items: center; gap: 8px;
    padding: 7px 16px;
    border: 1px solid var(--border);
    border-radius: 2px;
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.72rem;
    letter-spacing: 0.1em;
    color: var(--electric);
    background: rgba(0,240,255,0.05);
    transition: all 0.3s;
  }
  .domain-chip:hover {
    background: rgba(0,240,255,0.12);
    border-color: var(--electric);
    box-shadow: 0 0 16px rgba(0,240,255,0.2);
    transform: translateY(-2px);
  }
  .domain-chip .dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: currentColor;
    animation: pulse 2s infinite;
  }

  .hero-cta {
    display: flex; gap: 16px;
    animation: fadeSlideUp 1.2s 0.4s ease both;
  }

  .btn-primary {
    padding: 12px 28px;
    background: var(--electric);
    color: var(--bg);
    font-family: 'Orbitron', monospace;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    text-decoration: none;
    border: none;
    cursor: pointer;
    transition: all 0.3s;
    clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));
  }
  .btn-primary:hover {
    background: #fff;
    box-shadow: 0 0 30px rgba(0,240,255,0.6);
    transform: translateY(-2px);
  }

  .btn-secondary {
    padding: 12px 28px;
    background: transparent;
    color: var(--electric);
    font-family: 'Orbitron', monospace;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    text-decoration: none;
    border: 1px solid var(--electric);
    cursor: pointer;
    transition: all 0.3s;
  }
  .btn-secondary:hover {
    background: rgba(0,240,255,0.08);
    box-shadow: 0 0 20px rgba(0,240,255,0.2);
    transform: translateY(-2px);
  }

  /* PHOTO CARD */
  .hero-right {
    display: flex;
    justify-content: center;
    align-items: center;
    animation: fadeSlideUp 1s 0.5s ease both;
  }

  .photo-frame {
    position: relative;
    width: 340px; height: 420px;
  }

  .photo-frame::before,
  .photo-frame::after {
    content: '';
    position: absolute;
    border: 1px solid var(--electric);
    pointer-events: none;
    transition: all 0.5s;
  }
  .photo-frame::before {
    top: -12px; left: -12px;
    width: 60%; height: 60%;
    border-right: none; border-bottom: none;
  }
  .photo-frame::after {
    bottom: -12px; right: -12px;
    width: 60%; height: 60%;
    border-left: none; border-top: none;
  }

  .photo-inner {
    width: 100%; height: 100%;
    background: var(--surface);
    border: 1px solid rgba(0,240,255,0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    clip-path: polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px));
  }

  .photo-inner img {
    width: 100%; height: 100%;
    object-fit: cover;
    display: none; /* shown when user uploads */
  }

  .photo-placeholder {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    width: 100%; height: 100%;
    cursor: pointer;
    transition: background 0.3s;
  }
  .photo-placeholder:hover { background: rgba(0,240,255,0.04); }

  .photo-icon {
    width: 72px; height: 72px;
    border: 2px dashed rgba(0,240,255,0.4);
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    color: var(--muted);
    font-size: 1.8rem;
  }
  .photo-placeholder p {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.72rem;
    color: var(--muted);
    letter-spacing: 0.1em;
    text-align: center;
  }
  .photo-placeholder small {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.62rem;
    color: rgba(74,122,170,0.6);
    letter-spacing: 0.05em;
  }

  #photo-input { display: none; }

  .photo-hud {
    position: absolute; top: 10px; left: 10px; right: 10px;
    display: flex; justify-content: space-between;
    pointer-events: none;
  }
  .hud-tag {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.6rem;
    color: var(--electric);
    letter-spacing: 0.15em;
    opacity: 0.7;
  }

  .photo-scan {
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--electric), transparent);
    animation: scan 3s linear infinite;
    pointer-events: none;
  }

  /* STATS BAR */
  .stats-bar {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 1px;
    background: var(--border);
    margin: 0 0 80px;
    border: 1px solid var(--border);
  }
  .stat-item {
    background: var(--surface);
    padding: 28px 24px;
    text-align: center;
    transition: background 0.3s;
  }
  .stat-item:hover { background: var(--surface2); }
  .stat-num {
    font-family: 'Orbitron', monospace;
    font-size: 2rem;
    font-weight: 900;
    color: var(--electric);
    display: block;
  }
  .stat-label {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.65rem;
    color: var(--muted);
    letter-spacing: 0.15em;
    text-transform: uppercase;
    margin-top: 6px;
  }

  /* SECTION HEADERS */
  .sec-header {
    display: flex; align-items: center; gap: 20px;
    margin-bottom: 60px;
  }
  .sec-num {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.7rem;
    color: var(--plasma);
    letter-spacing: 0.2em;
  }
  .sec-title {
    font-family: 'Orbitron', monospace;
    font-size: 1.8rem;
    font-weight: 700;
    color: #fff;
    letter-spacing: 0.08em;
  }
  .sec-line {
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, var(--border) 0%, transparent 100%);
  }

  /* ─── ABOUT ─── */
  #about { background: linear-gradient(180deg, var(--bg) 0%, var(--surface) 50%, var(--bg) 100%); }

  .about-grid {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 60px;
    align-items: start;
  }

  .about-bio {
    font-size: 1.05rem;
    line-height: 1.85;
    color: rgba(204,232,255,0.8);
    margin-bottom: 28px;
  }

  .about-highlight {
    background: rgba(0,240,255,0.06);
    border-left: 2px solid var(--electric);
    padding: 20px 24px;
    margin: 28px 0;
    font-family: 'Rajdhani', sans-serif;
    font-size: 1.1rem;
    font-style: italic;
    color: var(--electric);
    letter-spacing: 0.05em;
  }

  .skills-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  .skill-bar-item { }
  .skill-bar-header {
    display: flex; justify-content: space-between;
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.7rem;
    color: var(--muted);
    letter-spacing: 0.1em;
    margin-bottom: 8px;
  }
  .skill-bar-track {
    height: 3px;
    background: rgba(0,240,255,0.1);
    border-radius: 2px;
    overflow: hidden;
  }
  .skill-bar-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--plasma), var(--electric));
    border-radius: 2px;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 1.5s cubic-bezier(0.23,1,0.32,1);
  }
  .skill-bar-fill.animated { transform: scaleX(1); }

  /* ─── RESEARCH ─── */
  #research { }

  .research-grid {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 24px;
  }

  .research-card {
    background: var(--surface);
    border: 1px solid var(--border);
    padding: 32px 28px;
    position: relative;
    overflow: hidden;
    transition: all 0.4s;
    clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px));
  }

  .research-card::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--plasma), var(--electric));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s;
  }
  .research-card:hover { border-color: rgba(0,240,255,0.4); transform: translateY(-6px); }
  .research-card:hover::before { transform: scaleX(1); }

  .research-card:nth-child(2) .card-icon { color: var(--plasma); }
  .research-card:nth-child(3) .card-icon { color: var(--solar); }
  .research-card:nth-child(4) .card-icon { color: var(--green); }
  .research-card:nth-child(5) .card-icon { color: var(--red); }
  .research-card:nth-child(6) .card-icon { color: var(--electric); }

  .card-icon {
    font-size: 2.2rem;
    margin-bottom: 20px;
    color: var(--electric);
    display: block;
  }
  .card-title {
    font-family: 'Orbitron', monospace;
    font-size: 0.9rem;
    font-weight: 700;
    color: #fff;
    letter-spacing: 0.1em;
    margin-bottom: 12px;
  }
  .card-desc {
    font-size: 0.9rem;
    line-height: 1.7;
    color: rgba(204,232,255,0.6);
  }
  .card-tags {
    display: flex; flex-wrap: wrap; gap: 6px;
    margin-top: 20px;
  }
  .card-tag {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.62rem;
    padding: 3px 10px;
    border: 1px solid rgba(0,240,255,0.2);
    color: var(--muted);
    letter-spacing: 0.1em;
  }

  /* ─── EXPERIENCE ─── */
  #experience { background: var(--surface); }

  .timeline {
    position: relative;
    padding-left: 40px;
  }
  .timeline::before {
    content: '';
    position: absolute; left: 0; top: 0; bottom: 0;
    width: 1px;
    background: linear-gradient(180deg, var(--electric), var(--plasma), transparent);
  }

  .timeline-item {
    position: relative;
    margin-bottom: 48px;
    padding-left: 36px;
  }
  .timeline-item::before {
    content: '';
    position: absolute; left: -44px; top: 6px;
    width: 10px; height: 10px;
    border-radius: 50%;
    background: var(--electric);
    box-shadow: 0 0 12px var(--electric);
  }

  .timeline-date {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.68rem;
    color: var(--electric);
    letter-spacing: 0.2em;
    margin-bottom: 8px;
  }
  .timeline-role {
    font-family: 'Orbitron', monospace;
    font-size: 1rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 4px;
  }
  .timeline-org {
    font-size: 0.9rem;
    color: var(--plasma);
    letter-spacing: 0.1em;
    margin-bottom: 14px;
    font-weight: 600;
  }
  .timeline-desc {
    font-size: 0.95rem;
    line-height: 1.75;
    color: rgba(204,232,255,0.65);
  }

  /* ─── PROJECTS ─── */
  #projects { }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 28px;
  }

  .project-card {
    background: var(--surface);
    border: 1px solid var(--border);
    padding: 36px 32px;
    position: relative;
    overflow: hidden;
    transition: all 0.4s;
  }
  .project-card:hover { border-color: rgba(123,47,255,0.5); transform: translateY(-4px); box-shadow: 0 20px 60px rgba(123,47,255,0.15); }

  .project-number {
    position: absolute; top: 24px; right: 28px;
    font-family: 'Orbitron', monospace;
    font-size: 3rem;
    font-weight: 900;
    color: rgba(0,240,255,0.04);
    line-height: 1;
  }

  .project-category {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.65rem;
    letter-spacing: 0.25em;
    color: var(--plasma);
    text-transform: uppercase;
    margin-bottom: 14px;
  }
  .project-title {
    font-family: 'Orbitron', monospace;
    font-size: 1rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 14px;
    letter-spacing: 0.05em;
  }
  .project-desc {
    font-size: 0.9rem;
    line-height: 1.7;
    color: rgba(204,232,255,0.6);
    margin-bottom: 24px;
  }
  .project-stack {
    display: flex; flex-wrap: wrap; gap: 8px;
  }
  .stack-item {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.65rem;
    padding: 4px 12px;
    background: rgba(0,240,255,0.06);
    border: 1px solid rgba(0,240,255,0.15);
    color: var(--electric);
    letter-spacing: 0.08em;
    border-radius: 1px;
  }

  /* ─── CONTACT ─── */
  #contact {
    background: linear-gradient(180deg, var(--bg) 0%, var(--surface) 100%);
    min-height: auto;
    padding-bottom: 60px;
  }

  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
  }

  .contact-info h3 {
    font-family: 'Orbitron', monospace;
    font-size: 1.4rem;
    color: #fff;
    margin-bottom: 20px;
  }
  .contact-info p {
    font-size: 1rem;
    line-height: 1.8;
    color: rgba(204,232,255,0.65);
    margin-bottom: 32px;
  }

  .contact-links { display: flex; flex-direction: column; gap: 14px; }
  .contact-link {
    display: flex; align-items: center; gap: 14px;
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.8rem;
    color: var(--muted);
    text-decoration: none;
    letter-spacing: 0.1em;
    transition: color 0.3s;
    padding: 14px 18px;
    border: 1px solid var(--border);
    transition: all 0.3s;
  }
  .contact-link:hover {
    color: var(--electric);
    border-color: var(--electric);
    background: rgba(0,240,255,0.04);
    transform: translateX(6px);
  }
  .contact-link .cl-icon {
    font-size: 1.2rem;
    width: 24px; text-align: center;
  }

  .contact-form { }
  .form-group { margin-bottom: 18px; }
  .form-group label {
    display: block;
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.68rem;
    color: var(--muted);
    letter-spacing: 0.15em;
    text-transform: uppercase;
    margin-bottom: 8px;
  }
  .form-group input,
  .form-group textarea {
    width: 100%;
    background: var(--surface);
    border: 1px solid var(--border);
    padding: 12px 16px;
    font-family: 'Rajdhani', sans-serif;
    font-size: 0.95rem;
    color: var(--text);
    outline: none;
    transition: border-color 0.3s;
    resize: none;
  }
  .form-group input:focus,
  .form-group textarea:focus {
    border-color: var(--electric);
    box-shadow: 0 0 0 2px rgba(0,240,255,0.08);
  }
  .form-group textarea { min-height: 100px; }

  /* FOOTER */
  footer {
    position: relative; z-index: 1;
    background: var(--bg);
    border-top: 1px solid var(--border);
    padding: 24px 80px;
    display: flex; justify-content: space-between; align-items: center;
  }
  footer p {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.68rem;
    color: var(--muted);
    letter-spacing: 0.1em;
  }
  .footer-status {
    display: flex; align-items: center; gap: 8px;
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.68rem;
    color: var(--green);
    letter-spacing: 0.1em;
  }
  .status-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: var(--green);
    animation: pulse 2s infinite;
  }

  /* ANIMATIONS */
  @keyframes fadeSlideUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }
  @keyframes scan {
    0% { top: 0; opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { top: 100%; opacity: 0; }
  }
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-12px); }
  }

  /* GLITCH EFFECT */
  .glitch {
    position: relative;
    animation: glitch 5s infinite;
  }
  @keyframes glitch {
    0%, 92%, 100% { transform: none; text-shadow: none; }
    93% { transform: translate(-2px,1px); text-shadow: 2px 0 var(--red); }
    94% { transform: translate(2px,-1px); text-shadow: -2px 0 var(--electric); }
    95% { transform: none; text-shadow: none; }
  }

  /* FLOATING ORBIT DECOR */
  .orbit-decor {
    position: absolute;
    right: 60px; top: 50%;
    transform: translateY(-50%);
    width: 200px; height: 200px;
    pointer-events: none;
  }
  .orbit-ring {
    position: absolute;
    border-radius: 50%;
    border: 1px solid rgba(0,240,255,0.1);
  }
  .orbit-ring:nth-child(1) { inset: 20px; animation: spin 20s linear infinite; }
  .orbit-ring:nth-child(2) { inset: 50px; animation: spin 12s linear infinite reverse; border-color: rgba(123,47,255,0.15); }
  .orbit-ring:nth-child(3) { inset: 80px; animation: spin 8s linear infinite; border-color: rgba(255,107,0,0.1); }

  /* SCROLLING TICKER */
  .ticker-wrap {
    background: var(--surface);
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    padding: 10px 0;
    overflow: hidden;
    position: relative; z-index: 1;
  }
  .ticker-inner {
    display: flex;
    white-space: nowrap;
    animation: ticker 30s linear infinite;
  }
  .ticker-item {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.7rem;
    letter-spacing: 0.2em;
    color: var(--muted);
    padding: 0 40px;
    flex-shrink: 0;
  }
  .ticker-item span { color: var(--electric); }
  @keyframes ticker {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }

  /* RESPONSIVE */
  @media (max-width: 1024px) {
    section { padding: 80px 40px; }
    nav { padding: 18px 40px; }
    #hero { grid-template-columns: 1fr; padding-top: 120px; }
    .hero-right { justify-content: flex-start; }
    .research-grid { grid-template-columns: repeat(2,1fr); }
    .projects-grid { grid-template-columns: 1fr; }
    .contact-grid { grid-template-columns: 1fr; }
    .about-grid { grid-template-columns: 1fr; }
    footer { padding: 24px 40px; }
  }
  @media (max-width: 640px) {
    .stats-bar { grid-template-columns: repeat(2,1fr); }
    .research-grid { grid-template-columns: 1fr; }
    .nav-links { display: none; }
    .hero-name { font-size: 2.4rem; }
  }
</style>
</head>
<body>

<!-- CUSTOM CURSOR -->
<div class="cursor" id="cursor"></div>
<div class="cursor-ring" id="cursor-ring"></div>

<!-- ANIMATED BACKGROUND CANVAS -->
<canvas id="bg-canvas"></canvas>

<!-- NAV -->
<nav>
  <a class="nav-logo" href="#"><span>AG</span> // PORTFOLIO</a>
  <ul class="nav-links">
    <li><a href="#about">About</a></li>
    <li><a href="#research">Research</a></li>
    <li><a href="#experience">Experience</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>

<!-- ═══ HERO ═══ -->
<section id="hero">
  <div class="hero-left">
    <div class="hero-tag">
      <span>System Online</span>
      <span style="color:var(--green);animation:pulse 1.5s infinite">●</span>
    </div>
    <h1 class="hero-name glitch">
      ABHIJAY<br><span class="accent">GOPAL</span>
    </h1>
    <div class="hero-title">Electrical & Electronics Engineer</div>
    <div class="hero-domains">
      <div class="domain-chip"><span class="dot" style="background:var(--electric)"></span> Artificial Intelligence</div>
      <div class="domain-chip"><span class="dot" style="background:var(--solar)"></span> Space Technology</div>
      <div class="domain-chip"><span class="dot" style="background:var(--plasma)"></span> Cybersecurity</div>
      <div class="domain-chip"><span class="dot" style="background:var(--green)"></span> Embedded Systems</div>
    </div>
    <div class="hero-cta">
      <a href="#projects" class="btn-primary">View Projects</a>
      <a href="#contact" class="btn-secondary">Contact Me</a>
    </div>
  </div>

  <div class="hero-right">
    <div class="photo-frame">
      <div class="photo-inner" id="photo-container" onclick="document.getElementById('photo-input').click()">
        <div class="photo-hud">
          <span class="hud-tag">ID // AG-EEE</span>
          <span class="hud-tag">RES_ENG</span>
        </div>
        <div class="photo-scan"></div>
        <div class="photo-placeholder" id="photo-placeholder">
          <div class="photo-icon">👤</div>
          <p>UPLOAD PHOTO</p>
          <small>Click to add your photo</small>
        </div>
        <img id="profile-photo" src="" alt="Abhijay Gopal">
      </div>
      <input type="file" id="photo-input" accept="image/*" onchange="loadPhoto(event)">
    </div>
  </div>
</section>

<!-- TICKER -->
<div class="ticker-wrap">
  <div class="ticker-inner">
    <span class="ticker-item">⚡ <span>ELECTRICAL SYSTEMS</span></span>
    <span class="ticker-item">🛰️ <span>SPACE TECH</span></span>
    <span class="ticker-item">🤖 <span>MACHINE LEARNING</span></span>
    <span class="ticker-item">🔐 <span>CYBERSECURITY</span></span>
    <span class="ticker-item">💡 <span>VLSI DESIGN</span></span>
    <span class="ticker-item">📡 <span>SIGNAL PROCESSING</span></span>
    <span class="ticker-item">🛸 <span>SATELLITE COMM</span></span>
    <span class="ticker-item">🔒 <span>NETWORK SECURITY</span></span>
    <span class="ticker-item">⚡ <span>ELECTRICAL SYSTEMS</span></span>
    <span class="ticker-item">🛰️ <span>SPACE TECH</span></span>
    <span class="ticker-item">🤖 <span>MACHINE LEARNING</span></span>
    <span class="ticker-item">🔐 <span>CYBERSECURITY</span></span>
    <span class="ticker-item">💡 <span>VLSI DESIGN</span></span>
    <span class="ticker-item">📡 <span>SIGNAL PROCESSING</span></span>
    <span class="ticker-item">🛸 <span>SATELLITE COMM</span></span>
    <span class="ticker-item">🔒 <span>NETWORK SECURITY</span></span>
  </div>
</div>

<!-- STATS BAR -->
<div style="position:relative;z-index:1;padding:0 80px;">
  <div class="stats-bar">
    <div class="stat-item"><span class="stat-num" data-target="15">0</span><div class="stat-label">Research Papers</div></div>
    <div class="stat-item"><span class="stat-num" data-target="30">0</span><div class="stat-label">Projects Completed</div></div>
    <div class="stat-item"><span class="stat-num" data-target="8">0</span><div class="stat-label">Certifications</div></div>
    <div class="stat-item"><span class="stat-num" data-target="5">0</span><div class="stat-label">Publications</div></div>
  </div>
</div>

<!-- ═══ ABOUT ═══ -->
<section id="about">
  <div class="sec-header">
    <span class="sec-num">01 //</span>
    <h2 class="sec-title">ABOUT ME</h2>
    <div class="sec-line"></div>
  </div>

  <div class="about-grid">
    <div>
      <p class="about-bio">
        I'm <strong style="color:var(--electric)">Abhijay Gopal</strong>, a passionate Electrical & Electronics Engineer with a relentless drive to push the boundaries of technology. My work sits at the fascinating intersection of intelligent systems, space exploration, and digital defense.
      </p>
      <p class="about-bio">
        From designing embedded circuits that power satellite subsystems to developing AI models that detect cyber intrusions in real-time — I believe the most exciting engineering happens where disciplines collide. I approach every challenge with first-principles thinking, meticulous precision, and an explorer's curiosity.
      </p>
      <div class="about-highlight">
        "Engineering the future — one circuit, one algorithm, one orbit at a time."
      </div>
      <p class="about-bio">
        Currently focused on advancing research in AI-driven anomaly detection for space communication systems and quantum-resilient cryptography for next-generation secure networks.
      </p>
    </div>

    <div>
      <div style="margin-bottom:16px;font-family:'Share Tech Mono',monospace;font-size:0.7rem;color:var(--muted);letter-spacing:0.15em">TECHNICAL PROFICIENCY</div>
      <div class="skills-grid">
        <div class="skill-bar-item">
          <div class="skill-bar-header"><span>PYTHON / ML</span><span>92%</span></div>
          <div class="skill-bar-track"><div class="skill-bar-fill" style="--w:0.92"></div></div>
        </div>
        <div class="skill-bar-item">
          <div class="skill-bar-header"><span>CIRCUIT DESIGN</span><span>95%</span></div>
          <div class="skill-bar-track"><div class="skill-bar-fill" style="--w:0.95"></div></div>
        </div>
        <div class="skill-bar-item">
          <div class="skill-bar-header"><span>EMBEDDED C</span><span>88%</span></div>
          <div class="skill-bar-track"><div class="skill-bar-fill" style="--w:0.88"></div></div>
        </div>
        <div class="skill-bar-item">
          <div class="skill-bar-header"><span>CYBERSECURITY</span><span>85%</span></div>
          <div class="skill-bar-track"><div class="skill-bar-fill" style="--w:0.85"></div></div>
        </div>
        <div class="skill-bar-item">
          <div class="skill-bar-header"><span>VHDL / FPGA</span><span>80%</span></div>
          <div class="skill-bar-track"><div class="skill-bar-fill" style="--w:0.80"></div></div>
        </div>
        <div class="skill-bar-item">
          <div class="skill-bar-header"><span>SPACE SYSTEMS</span><span>78%</span></div>
          <div class="skill-bar-track"><div class="skill-bar-fill" style="--w:0.78"></div></div>
        </div>
        <div class="skill-bar-item">
          <div class="skill-bar-header"><span>DEEP LEARNING</span><span>87%</span></div>
          <div class="skill-bar-track"><div class="skill-bar-fill" style="--w:0.87"></div></div>
        </div>
        <div class="skill-bar-item">
          <div class="skill-bar-header"><span>MATLAB</span><span>90%</span></div>
          <div class="skill-bar-track"><div class="skill-bar-fill" style="--w:0.90"></div></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ═══ RESEARCH ═══ -->
<section id="research">
  <div class="sec-header">
    <span class="sec-num">02 //</span>
    <h2 class="sec-title">RESEARCH DOMAINS</h2>
    <div class="sec-line"></div>
  </div>

  <div class="research-grid">
    <div class="research-card">
      <span class="card-icon">🤖</span>
      <div class="card-title">Artificial Intelligence</div>
      <p class="card-desc">Researching neural network architectures for real-time anomaly detection, federated learning for distributed systems, and AI-driven optimization in embedded environments.</p>
      <div class="card-tags">
        <span class="card-tag">Deep Learning</span>
        <span class="card-tag">CNNs</span>
        <span class="card-tag">Federated ML</span>
      </div>
    </div>

    <div class="research-card">
      <span class="card-icon">🛰️</span>
      <div class="card-title">Space Technology</div>
      <p class="card-desc">Investigating CubeSat power systems, attitude control algorithms, and AI-enhanced satellite communication protocols for next-generation LEO constellations.</p>
      <div class="card-tags">
        <span class="card-tag">CubeSat</span>
        <span class="card-tag">Orbital Mech</span>
        <span class="card-tag">SAR</span>
      </div>
    </div>

    <div class="research-card">
      <span class="card-icon">🔐</span>
      <div class="card-title">Cybersecurity</div>
      <p class="card-desc">Developing post-quantum cryptographic protocols, hardware security modules, and AI-based intrusion detection systems for critical infrastructure protection.</p>
      <div class="card-tags">
        <span class="card-tag">Post-Quantum</span>
        <span class="card-tag">IDS/IPS</span>
        <span class="card-tag">HSM</span>
      </div>
    </div>

    <div class="research-card">
      <span class="card-icon">⚡</span>
      <div class="card-title">Power Electronics</div>
      <p class="card-desc">Designing high-efficiency DC-DC converters for space applications, wireless power transfer systems, and smart grid optimization using AI controllers.</p>
      <div class="card-tags">
        <span class="card-tag">MPPT</span>
        <span class="card-tag">SMPS</span>
        <span class="card-tag">GaN FETs</span>
      </div>
    </div>

    <div class="research-card">
      <span class="card-icon">📡</span>
      <div class="card-title">Signal Processing</div>
      <p class="card-desc">Research on adaptive beamforming for phased array antennas, cognitive radio systems, and deep learning-based signal classification for spectrum management.</p>
      <div class="card-tags">
        <span class="card-tag">DSP</span>
        <span class="card-tag">OFDM</span>
        <span class="card-tag">SDR</span>
      </div>
    </div>

    <div class="research-card">
      <span class="card-icon">💻</span>
      <div class="card-title">VLSI & Embedded Systems</div>
      <p class="card-desc">Designing low-power ASICs for edge AI inference, secure boot architectures for IoT devices, and hardware accelerators for cryptographic operations.</p>
      <div class="card-tags">
        <span class="card-tag">FPGA</span>
        <span class="card-tag">ASIC</span>
        <span class="card-tag">RISC-V</span>
      </div>
    </div>
  </div>
</section>

<!-- ═══ EXPERIENCE ═══ -->
<section id="experience">
  <div class="sec-header">
    <span class="sec-num">03 //</span>
    <h2 class="sec-title">EXPERIENCE & EDUCATION</h2>
    <div class="sec-line"></div>
  </div>

  <div class="timeline">
    <div class="timeline-item">
      <div class="timeline-date">2024 — PRESENT</div>
      <div class="timeline-role">Research Engineer</div>
      <div class="timeline-org">Advanced Space Systems Lab</div>
      <p class="timeline-desc">Leading development of AI-integrated power management systems for CubeSat platforms. Designed fault-tolerant attitude control algorithms and contributed to a multi-band phased array communication payload.</p>
    </div>

    <div class="timeline-item">
      <div class="timeline-date">2023 — 2024</div>
      <div class="timeline-role">Cybersecurity Research Intern</div>
      <div class="timeline-org">Secure Systems Research Group</div>
      <p class="timeline-desc">Developed ML-based intrusion detection systems achieving 97.3% detection accuracy on CICIDS dataset. Implemented post-quantum key exchange protocols on resource-constrained microcontrollers.</p>
    </div>

    <div class="timeline-item">
      <div class="timeline-date">2022 — 2023</div>
      <div class="timeline-role">AI Engineering Intern</div>
      <div class="timeline-org">Deep Tech Innovations Pvt. Ltd.</div>
      <p class="timeline-desc">Built edge AI inference engines for industrial anomaly detection. Optimized neural networks for deployment on FPGA fabric, achieving 8× latency reduction compared to CPU baselines.</p>
    </div>

    <div class="timeline-item">
      <div class="timeline-date">2020 — 2024</div>
      <div class="timeline-role">B.E. Electrical & Electronics Engineering</div>
      <div class="timeline-org">Premier Institute of Technology</div>
      <p class="timeline-desc">Graduated with First Class Distinction. Specialized in embedded systems and signal processing. Final year project: AI-powered satellite telemetry anomaly detection system.</p>
    </div>
  </div>
</section>

<!-- ═══ PROJECTS ═══ -->
<section id="projects">
  <div class="sec-header">
    <span class="sec-num">04 //</span>
    <h2 class="sec-title">FEATURED PROJECTS</h2>
    <div class="sec-line"></div>
  </div>

  <div class="projects-grid">
    <div class="project-card">
      <div class="project-number">01</div>
      <div class="project-category">🛰️ Space Technology</div>
      <div class="project-title">CubeSat AI Telemetry Monitor</div>
      <p class="project-desc">Developed an onboard AI system for real-time satellite health monitoring using LSTM networks. Detects anomalies in power, thermal, and communication subsystems with sub-millisecond latency.</p>
      <div class="project-stack">
        <span class="stack-item">Python</span>
        <span class="stack-item">TensorFlow</span>
        <span class="stack-item">STM32</span>
        <span class="stack-item">FreeRTOS</span>
      </div>
    </div>

    <div class="project-card">
      <div class="project-number">02</div>
      <div class="project-category">🔐 Cybersecurity</div>
      <div class="project-title">Quantum-Safe IoT Security Framework</div>
      <p class="project-desc">Implemented NIST-approved post-quantum cryptographic algorithms (CRYSTALS-Kyber) on ARM Cortex-M4 microcontrollers. Created a lightweight TLS-like protocol for constrained IoT devices.</p>
      <div class="project-stack">
        <span class="stack-item">C/C++</span>
        <span class="stack-item">ARM MCU</span>
        <span class="stack-item">CRYSTALS-Kyber</span>
        <span class="stack-item">MQTT</span>
      </div>
    </div>

    <div class="project-card">
      <div class="project-number">03</div>
      <div class="project-category">🤖 Artificial Intelligence</div>
      <div class="project-title">FPGA Neural Network Accelerator</div>
      <p class="project-desc">Designed a custom hardware accelerator for CNN inference on Xilinx FPGA using VHDL. Achieved 45 TOPS/W power efficiency, 10× faster than GPU for edge deployment scenarios.</p>
      <div class="project-stack">
        <span class="stack-item">VHDL</span>
        <span class="stack-item">Xilinx Vivado</span>
        <span class="stack-item">HLS</span>
        <span class="stack-item">Python</span>
      </div>
    </div>

    <div class="project-card">
      <div class="project-number">04</div>
      <div class="project-category">⚡ Power Systems</div>
      <div class="project-title">AI-Controlled MPPT Solar Charger</div>
      <p class="project-desc">Designed a reinforcement learning-controlled MPPT system for satellite solar panels. Q-learning agent optimizes duty cycle in real-time, improving energy harvest by 23% over traditional P&O methods.</p>
      <div class="project-stack">
        <span class="stack-item">MATLAB</span>
        <span class="stack-item">Simulink</span>
        <span class="stack-item">RL</span>
        <span class="stack-item">PSIM</span>
      </div>
    </div>
  </div>
</section>

<!-- ═══ CONTACT ═══ -->
<section id="contact">
  <div class="sec-header">
    <span class="sec-num">05 //</span>
    <h2 class="sec-title">ESTABLISH CONTACT</h2>
    <div class="sec-line"></div>
  </div>

  <div class="contact-grid">
    <div class="contact-info">
      <h3>Let's Build Something Extraordinary</h3>
      <p>Whether you're working on cutting-edge space systems, AI research, or building the next-gen security architecture — I'm always open to meaningful collaborations and challenging problems.</p>

      <div class="contact-links">
        <a class="contact-link" href="mailto:abhijay.gopal@email.com">
          <span class="cl-icon">✉️</span> abhijay.gopal@email.com
        </a>
        <a class="contact-link" href="https://linkedin.com/in/abhijaygopal" target="_blank">
          <span class="cl-icon">💼</span> linkedin.com/in/abhijaygopal
        </a>
        <a class="contact-link" href="https://github.com/abhijaygopal" target="_blank">
          <span class="cl-icon">🐙</span> github.com/abhijaygopal
        </a>
        <a class="contact-link" href="#">
          <span class="cl-icon">📄</span> Download Resume / CV
        </a>
      </div>
    </div>

    <div class="contact-form">
      <div class="form-group">
        <label>Your Name</label>
        <input type="text" placeholder="Enter your name">
      </div>
      <div class="form-group">
        <label>Email Address</label>
        <input type="email" placeholder="your@email.com">
      </div>
      <div class="form-group">
        <label>Subject</label>
        <input type="text" placeholder="Research collaboration / Project / etc.">
      </div>
      <div class="form-group">
        <label>Message</label>
        <textarea placeholder="Describe your idea or query..."></textarea>
      </div>
      <button class="btn-primary" style="width:100%;padding:14px;" onclick="alert('Message sent! (Connect this to your backend)')">TRANSMIT MESSAGE ▶</button>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <p>© 2025 ABHIJAY GOPAL // ALL RIGHTS RESERVED</p>
  <div class="footer-status">
    <span class="status-dot"></span>
    SYSTEM ONLINE // OPEN TO OPPORTUNITIES
  </div>
</footer>

<script>
// ── CURSOR ──
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
function animCursor() {
  cursor.style.left = mx + 'px'; cursor.style.top = my + 'px';
  rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
  requestAnimationFrame(animCursor);
}
animCursor();
document.querySelectorAll('a,button,.research-card,.project-card,.domain-chip').forEach(el => {
  el.addEventListener('mouseenter', () => { cursor.style.transform = 'translate(-50%,-50%) scale(2)'; ring.style.transform = 'translate(-50%,-50%) scale(1.5)'; });
  el.addEventListener('mouseleave', () => { cursor.style.transform = 'translate(-50%,-50%) scale(1)'; ring.style.transform = 'translate(-50%,-50%) scale(1)'; });
});

// ── CANVAS BACKGROUND ──
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let W, H;
function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
resize(); window.addEventListener('resize', resize);

// Nodes for circuit/network effect
const nodes = Array.from({length: 60}, () => ({
  x: Math.random()*1920, y: Math.random()*1080,
  vx: (Math.random()-0.5)*0.4, vy: (Math.random()-0.5)*0.4,
  r: Math.random()*2+1,
  type: Math.floor(Math.random()*3) // 0:circuit, 1:star, 2:grid
}));

// Stars
const stars = Array.from({length: 150}, () => ({
  x: Math.random()*1920, y: Math.random()*1080,
  s: Math.random()*1.5, o: Math.random()
}));

function drawBg() {
  ctx.clearRect(0,0,W,H);

  // Stars
  stars.forEach(s => {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.s, 0, Math.PI*2);
    ctx.fillStyle = `rgba(200,230,255,${s.o*0.4})`;
    ctx.fill();
  });

  // Node connections
  nodes.forEach((n,i) => {
    n.x += n.vx; n.y += n.vy;
    if(n.x<0||n.x>W) n.vx *= -1;
    if(n.y<0||n.y>H) n.vy *= -1;
    for(let j=i+1;j<nodes.length;j++) {
      const dx = nodes[j].x-n.x, dy = nodes[j].y-n.y;
      const dist = Math.sqrt(dx*dx+dy*dy);
      if(dist < 180) {
        const alpha = (1-dist/180)*0.25;
        ctx.beginPath();
        ctx.moveTo(n.x, n.y);
        // Circuit-like lines (with right angles)
        if(i%3===0) {
          ctx.lineTo(n.x, nodes[j].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
        } else {
          ctx.lineTo(nodes[j].x, n.y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
        }
        ctx.strokeStyle = `rgba(0,240,255,${alpha})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
    // Node dot
    ctx.beginPath();
    ctx.arc(n.x, n.y, n.r, 0, Math.PI*2);
    ctx.fillStyle = n.type===0 ? 'rgba(0,240,255,0.6)' : n.type===1 ? 'rgba(123,47,255,0.5)' : 'rgba(255,107,0,0.4)';
    ctx.fill();
  });

  // Circuit trace decorations (static)
  ctx.strokeStyle = 'rgba(0,240,255,0.04)';
  ctx.lineWidth = 1;
  for(let i=0;i<8;i++) {
    ctx.beginPath();
    ctx.moveTo(0, i*H/8);
    ctx.lineTo(W*0.3, i*H/8);
    ctx.lineTo(W*0.3, (i+0.5)*H/8);
    ctx.lineTo(W*0.6, (i+0.5)*H/8);
    ctx.stroke();
  }

  requestAnimationFrame(drawBg);
}
drawBg();

// ── COUNTER ANIMATION ──
function animateCounters() {
  document.querySelectorAll('[data-target]').forEach(el => {
    const target = parseInt(el.dataset.target);
    let current = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = Math.floor(current) + '+';
      if(current >= target) { el.textContent = target+'+'; clearInterval(timer); }
    }, 20);
  });
}

// ── SKILL BAR ANIMATION ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => bar.classList.add('animated'));
    }
  });
}, { threshold: 0.3 });

const aboutSection = document.getElementById('about');
if(aboutSection) observer.observe(aboutSection);

// ── STATS COUNTER ON SCROLL ──
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => { if(entry.isIntersecting) animateCounters(); });
}, { threshold: 0.5 });
const statsBar = document.querySelector('.stats-bar');
if(statsBar) statsObserver.observe(statsBar);

// ── PHOTO UPLOAD ──
function loadPhoto(event) {
  const file = event.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    const img = document.getElementById('profile-photo');
    const placeholder = document.getElementById('photo-placeholder');
    img.src = e.target.result;
    img.style.display = 'block';
    placeholder.style.display = 'none';
  };
  reader.readAsDataURL(file);
}

// ── FADE IN ON SCROLL ──
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.research-card,.project-card,.timeline-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  fadeObserver.observe(el);
});

// Smooth scrolling for nav
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if(target) target.scrollIntoView({ behavior: 'smooth' });
  });
});
</script>
</body>
</html>
