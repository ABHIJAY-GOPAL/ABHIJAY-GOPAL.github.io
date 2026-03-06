<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Abhijay Gopal | Engineer • Researcher • Space Systems</title>

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">

<style>

:root{
--accent:#4da3ff;
--bg:#070b14;
--card:#0f1626;
--text:#e6edf3;
--muted:#9da7b3;
}

*{box-sizing:border-box}

body{
margin:0;
font-family:Inter,system-ui;
background:var(--bg);
color:var(--text);
line-height:1.6;
}

nav{
position:fixed;
top:0;
width:100%;
background:rgba(7,11,20,.8);
backdrop-filter:blur(10px);
padding:18px 8%;
display:flex;
justify-content:space-between;
align-items:center;
z-index:1000;
}

nav a{
color:var(--text);
text-decoration:none;
margin-left:22px;
font-size:14px;
font-weight:500;
}

nav a:hover{color:var(--accent)}

.hero{
min-height:100vh;
display:flex;
flex-direction:column;
justify-content:center;
padding:120px 8% 80px;
background:radial-gradient(circle at top,#0d162b 0%,#070b14 60%);
}

.hero h1{
font-size:56px;
margin:0;
}

.hero h2{
margin-top:10px;
font-weight:500;
color:var(--accent);
}

.hero p{
max-width:700px;
margin-top:20px;
color:var(--muted);
}

.btn{
margin-top:30px;
display:inline-block;
background:var(--accent);
color:#000;
padding:14px 28px;
border-radius:8px;
font-weight:600;
text-decoration:none;
}

section{
padding:90px 8%;
max-width:1300px;
margin:auto;
}

.section-title{
font-size:32px;
margin-bottom:40px;
}

.grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
gap:28px;
}

.card{
background:var(--card);
padding:28px;
border-radius:14px;
transition:.3s;
border:1px solid rgba(255,255,255,0.04);
}

.card:hover{
transform:translateY(-6px);
border-color:rgba(77,163,255,0.5);
}

.card h3{
margin-top:0;
}

.timeline{
border-left:2px solid var(--accent);
padding-left:25px;
}

.timeline-item{
margin-bottom:35px;
}

.timeline-item h3{margin:0}

.timeline-item span{
color:var(--accent);
font-size:14px;
}

.tag{
background:#1b2440;
padding:5px 10px;
border-radius:6px;
font-size:12px;
margin:3px;
display:inline-block;
}

.publication{
margin-bottom:18px;
}

footer{
text-align:center;
padding:40px;
background:#0b1220;
color:var(--muted);
}

.social a{
margin-right:18px;
color:var(--accent);
text-decoration:none;
}

canvas{
position:fixed;
top:0;
left:0;
z-index:-1;
}

</style>
</head>

<body>

<canvas id="stars"></canvas>

<nav>
<div><b>Abhijay Gopal</b></div>
<div>
<a href="#about">About</a>
<a href="#research">Research</a>
<a href="#experience">Experience</a>
<a href="#projects">Projects</a>
<a href="#publications">Publications</a>
<a href="#awards">Awards</a>
<a href="#contact">Contact</a>
</div>
</nav>

<section class="hero">
<h1>Abhijay Gopal</h1>
<h2>Engineer • Researcher • Space Systems Enthusiast</h2>

<p>
Electrical & Electronics Engineer focused on Space Systems Engineering, Cyber Security, Renewable Energy and AI-driven technologies. My research interests lie in building resilient space infrastructure, autonomous systems, and sustainable engineering solutions for the future.
</p>

<a class="btn" href="#contact">Connect With Me</a>
</section>

<section id="about">
<h2 class="section-title">About</h2>

<p>
I am a research-oriented engineer with interdisciplinary experience spanning aerospace systems, cybersecurity, renewable energy, and robotics. I have collaborated with global technical communities through IEEE and contributed to engineering research initiatives across academia and industry.
</p>

<p>
My long-term research vision is to contribute to next-generation space technologies including satellite communications, orbital infrastructure, and cyber-secure space networks.
</p>

</section>

<section id="research">
<h2 class="section-title">Research Interests</h2>

<div class="grid">

<div class="card">
<h3>Space Systems Engineering</h3>
<p>Orbital mechanics, satellite communications, avionics architectures and mission design for next generation space infrastructure.</p>
</div>

<div class="card">
<h3>Cyber Security</h3>
<p>Security architecture, vulnerability assessment engines and resilient cyber infrastructure for mission-critical systems.</p>
</div>

<div class="card">
<h3>Renewable Energy Systems</h3>
<p>Smart grid engineering, solar energy optimization and sustainable energy technologies.</p>
</div>

<div class="card">
<h3>AI & Robotics</h3>
<p>Autonomous robotics systems, AI-assisted engineering design and environmental monitoring technologies.</p>
</div>

</div>

</section>

<section id="experience">
<h2 class="section-title">Professional Experience</h2>

<div class="timeline">

<div class="timeline-item">
<h3>Research & Technical Engineer</h3>
<span>IEEE Standards Association • 2024 – Present</span>
<p>Contributing to global white paper research on sustainable mobility frameworks, renewable integration and future transportation policies.</p>
</div>

<div class="timeline-item">
<h3>Cyber Security Research Project</h3>
<span>IIT Ropar • 2025</span>
<p>Developed an Adaptive Vulnerability Assessment and Prioritization Engine for small-scale networks.</p>
</div>

<div class="timeline-item">
<h3>Undergraduate Research Scientist</h3>
<span>CSIR – CSIO • 2023</span>
<p>Improved solar panel efficiency by 25% using nano-coating techniques and adaptive cleaning systems.</p>
</div>

<div class="timeline-item">
<h3>Avionics Researcher</h3>
<span>OrbitX Aerospace • 2022 – 2023</span>
<p>Designed propulsion models and mission simulations for reusable launch vehicle architecture.</p>
</div>

</div>

</section>

<section id="projects">
<h2 class="section-title">Key Projects</h2>

<div class="grid">

<div class="card">
<h3>Autonomous Hydrobot</h3>
<p>Autonomous robotic system designed to collect debris and monitor water ecosystems.</p>
</div>

<div class="card">
<h3>Solar Electrification Infrastructure</h3>
<p>Deployment of rural renewable energy system delivering 10kW solar electrification.</p>
</div>

<div class="card">
<h3>Railcar Immobilizer System</h3>
<p>Smart railway safety system integrating sensors and communication protocols.</p>
</div>

<div class="card">
<h3>Cyber Vulnerability Engine</h3>
<p>Network security analysis platform prioritizing vulnerabilities in small networks.</p>
</div>

</div>

</section>

<section id="publications">
<h2 class="section-title">Publications & Research</h2>

<div class="publication">Design and Implementation of Solar Electrification Station for Sustainable Energy Access – IEEE</div>
<div class="publication">Smart Railcar Immobilizer and Accident Alert System – IEEE</div>
<div class="publication">Autonomous Hydrobot for Water Debris Monitoring – National Conference</div>
<div class="publication">Energy Management System in Smart Grids – ISBN Publication</div>
<div class="publication">Cyber‑Resilient Astrodynamics Framework for Space Debris Mitigation – Ongoing Research</div>

</section>

<section id="awards">
<h2 class="section-title">Awards & Recognition</h2>

<div class="grid">
<div class="card">Young Researcher Award – INSC</div>
<div class="card">Smart India Hackathon Finalist</div>
<div class="card">Best Paper Award – IEEE Conference</div>
<div class="card">IEEE Regional Exemplary Student Branch Award</div>
<div class="card">IDEX Defence Innovation Selection</div>
<div class="card">International EV Startup Case Study Competition – Runner Up</div>
</div>

</section>

<section id="contact">
<h2 class="section-title">Contact</h2>

<p>If you are interested in collaboration, research opportunities, or academic partnerships, feel free to reach out.</p>

<div class="social">
<a href="#">Email</a>
<a href="#">LinkedIn</a>
<a href="#">ORCID</a>
<a href="#">GitHub</a>
<a href="#">Google Scholar</a>
</div>

</section>

<footer>
© 2026 Abhijay Gopal • Research Portfolio
</footer>

<script>

const canvas=document.getElementById("stars");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let stars=[];

for(let i=0;i<120;i++){
stars.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*1.5
});
}

function draw(){
ctx.clearRect(0,0,canvas.width,canvas.height);
ctx.fillStyle="#ffffff";

stars.forEach(s=>{
ctx.beginPath();
ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
ctx.fill();
});

requestAnimationFrame(draw);
}

draw();

</script>

</body>
</html>
