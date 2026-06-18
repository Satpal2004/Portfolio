import { useState, useEffect, useRef } from 'react';
import {gsap} from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)
// import './AtomSkills.css';
// Use public assets by URL path (Vite serves files in `public/` at project root)
const reactjs = '/images/reactjs.webp';
const colab = '/images/colab.webp';
const css = '/images/css.webp';
const git = '/images/git.webp';
const html = '/images/html.webp';
const javascript = '/images/javascript.webp';
const matplot = '/images/matplot.webp';
const node = '/images/node.webp';
const numpy = '/images/numpy.webp';
const pandas = '/images/pandas.webp';
const python = '/images/python.webp';
const scikit = '/images/scikit.webp';
const sql = '/images/sql.webp';
const vscode = '/images/vscode.webp';

const skillsCss = `
// @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap');

/* ──────────────────────────────────────────
   Section Layout
   ────────────────────────────────────────── */
// .atom-skills-section {
//   // width: 100%;
//   // min-height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   // background: radial-gradient(ellipse at 50% 50%, #0d1b2a 0%, #060e1a 50%, #020409 100%);
//   // position: relative;
//   // overflow: hidden;
//   // font-family: 'Inter', sans-serif;
//   // padding: 40px 20px;
// }

/* Mesh grid background */
// .atom-skills-section::before {
//   content: '';
//   position: absolute;
//   inset: 0;
//   background-image:
//     linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px),
//     linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px);
//   background-size: 60px 60px;
//   animation: gridPulse 8s ease-in-out infinite;
// }

/* Ambient light spots */
.atom-skills-section::after {
  content: '';
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(123, 47, 247, 0.08) 0%, transparent 70%);
  top: 20%;
  left: 30%;
  animation: ambientDrift 12s ease-in-out infinite alternate;
  pointer-events: none;
}

@keyframes gridPulse {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
}

@keyframes ambientDrift {
  0% { transform: translate(0, 0) scale(1); }
  100% { transform: translate(60px, -40px) scale(1.2); }
}

.atom-skills-container {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  max-width: 900px;
  width: 100%;
}

/* ──────────────────────────────────────────
   Heading
   ────────────────────────────────────────── */
.atom-skills-heading {
  width: 100%;
  height: auto;
  text-transform: uppercase;
}


/* ──────────────────────────────────────────
   Atom Wrapper & SVG
   ────────────────────────────────────────── */
.atom-wrapper {
  position: relative;
  width: 100%;
  max-width: 800px;
  aspect-ratio: 4 / 3;
}

.atom-svg {
  width: 100%;
  height: 100%;
  cursor: crosshair;
}

/* ──────────────────────────────────────────
   Background Particles
   ────────────────────────────────────────── */
.bg-particle {
  animation: particleTwinkle 4s ease-in-out infinite alternate;
}

@keyframes particleTwinkle {
  0% { opacity: 0.05; }
  50% { opacity: 0.2; }
  100% { opacity: 0.05; }
}

/* ──────────────────────────────────────────
   Orbit Paths
   ────────────────────────────────────────── */
.orbit-path {
  animation: orbitFadeIn 1.5s ease-out forwards;
  opacity: 0;
  stroke-dasharray: 4 8;
}

@keyframes orbitFadeIn {
  to { opacity: 1; }
}

/* ──────────────────────────────────────────
   Nucleus
   ────────────────────────────────────────── */
.nucleus-group {
  animation: nucleusPulse 3s ease-in-out infinite;
}

@keyframes nucleusPulse {
  0%, 100% { filter: url(#nucleus-glow); }
  50% { filter: url(#nucleus-glow) brightness(1.1); }
}

.nucleus-ring.ring-1 {
  animation: ringPulse1 4s ease-in-out infinite;
}

.nucleus-ring.ring-2 {
  animation: ringPulse2 5s ease-in-out infinite;
}

@keyframes ringPulse1 {
  0%, 100% { r: 68; opacity: 0.2; }
  50% { r: 72; opacity: 0.35; }
}

@keyframes ringPulse2 {
  0%, 100% { r: 58; opacity: 0.25; }
  50% { r: 62; opacity: 0.4; }
}

.inner-ring {
  animation: innerSpin 20s linear infinite;
  transform-origin: center;
}

.inner-ring-2 {
  animation: innerSpin 25s linear infinite reverse;
  transform-origin: center;
}

@keyframes innerSpin {
  to { transform: rotate(360deg); }
}

.nucleus-dot {
  animation: dotPulse 2s ease-in-out infinite;
}

@keyframes dotPulse {
  0%, 100% { opacity: 0.3; r: 2.5; }
  50% { opacity: 0.8; r: 3.5; }
}

.nucleus-text {
  text-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
  animation: textGlow 3s ease-in-out infinite;
}

@keyframes textGlow {
  0%, 100% { opacity: 0.9; }
  50% { opacity: 1; }
}

/* ──────────────────────────────────────────
   Electrons
   ────────────────────────────────────────── */
.electron-group {
  cursor: pointer;
  // transition: opacity 0.3s ease;
}

.electron-ring {
  transition: r 0.3s ease, fill 0.3s ease, stroke-width 0.3s ease;
}

.electron-core {
  transition: r 0.25s ease;
}

.electron-trail {
  transition: r 0.3s ease, opacity 0.3s ease;
}

// .electron-group.hovered .electron-core {
//   animation: electronPulse 0.8s ease-in-out infinite;
// }

// @keyframes electronPulse {
//   0%, 100% { opacity: 1; }
//   50% { opacity: 0.7; }
// }

/* ──────────────────────────────────────────
   Skill Labels
   ────────────────────────────────────────── */
.skill-label-group {
  animation: labelPop 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  opacity: 0;
}

@keyframes labelPop {
  from { opacity: 0; transform: translateY(5px) scale(0.9); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

.skill-label {
  text-shadow: 0 0 12px currentColor;
}

/* ──────────────────────────────────────────
   Skill Detail Card (bottom overlay)
   ────────────────────────────────────────── */
.skill-detail-card {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 28px;
  background: rgba(10, 14, 26, 0.85);
  border: 1px solid;
  border-radius: 16px;
  backdrop-filter: blur(16px);
  animation: cardSlideUp 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  min-width: 240px;
}

@keyframes cardSlideUp {
  from { opacity: 0; transform: translateX(-50%) translateY(10px); }
  to { opacity: 1; transform: translateX(-50%) translateY(0); }
}

.skill-detail-icon {
  font-size: 28px;
  line-height: 1;
}

.skill-detail-name {
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  white-space: nowrap;
}

.skill-detail-bar {
  flex: 1;
  height: 4px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 2px;
  overflow: hidden;
  min-width: 60px;
}

.skill-detail-bar-fill {
  height: 100%;
  border-radius: 2px;
  animation: barFill 0.6s ease-out forwards;
  width: 0%;
}

@keyframes barFill {
  from { width: 0%; }
}

/* ──────────────────────────────────────────
   Responsive
   ────────────────────────────────────────── */
@media (max-width: 768px) {

  .skill-detail-card {
    padding: 10px 18px;
    min-width: 180px;
    gap: 10px;
  }

  .skill-detail-name {
    font-size: 13px;
  }

  .skill-detail-icon {
    font-size: 22px;
  }
}
`

const SKILLS = [
  { name: 'React', icon: reactjs, color: '#61DAFB' },
  { name: 'JavaScript', icon: javascript, color: '#F7DF1E' },
  { name: 'Node.js', icon: node, color: '#68A063' },
  { name: 'Python', icon: python, color: '#3776AB' },
  { name: 'CSS', icon: css, color: '#264DE4' },
  { name: 'HTML', icon: html, color: '#E34F26' },
  { name: 'Git', icon: git, color: '#F05032' },
  { name: 'SQL', icon: sql, color: '#2496ED' },
  { name: 'VS Code', icon: vscode, color: '#FF9900' },
  { name: 'Pandas', icon: pandas, color: '#47A248' },
  { name: 'Numpy', icon: numpy, color: '#89CFF0' },
  { name: 'Scikit', icon: scikit, color: '#764ABC' },
  { name: 'Matplotlib', icon: matplot, color: '#FFFFFF' },
  { name: 'Colab', icon: colab, color: '#FFAC1C' },
];

// Distribute skills across 3 orbits
const ORBITS = [
  { skills: SKILLS.slice(0, 5), radiusX: 260, radiusY: 80, tilt: -10, speed: 0.00015, id: 0 },
  { skills: SKILLS.slice(5, 10), radiusX: 260, radiusY: 90, tilt: 50, speed: -0.0001, id: 1 },
  { skills: SKILLS.slice(10, 15), radiusX: 260, radiusY: 100, tilt: 120, speed: 0.00015, id: 2 },
];

// Pre-compute particle positions at module level (pure at render time)
function seededRandom(seed) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

const rng = seededRandom(42);
const PARTICLES = Array.from({ length: 40 }, () => ({
  cx: rng() * 800,
  cy: rng() * 600,
  r: rng() * 1.5 + 0.3,
  opacity: rng() * 0.15 + 0.05,
  delay: rng() * 5,
}));

// Pre-compute initial angles for each orbit
const INITIAL_ANGLES = ORBITS.map((orbit) =>
  orbit.skills.map((_, i) => (i / orbit.skills.length) * Math.PI * 2)
);

function getOrbitPoint(angle, radiusX, radiusY, tilt, cx, cy) {
  const tiltRad = (tilt * Math.PI) / 180;
  const x = radiusX * Math.cos(angle);
  const y = radiusY * Math.sin(angle);
  const rx = x * Math.cos(tiltRad) - y * Math.sin(tiltRad) + cx;
  const ry = x * Math.sin(tiltRad) + y * Math.cos(tiltRad) + cy;
  return { x: rx, y: ry };
}

function getOrbitPathD(radiusX, radiusY, tilt, cx, cy, steps = 120) {
  const tiltRad = (tilt * Math.PI) / 180;
  let d = '';
  for (let i = 0; i <= steps; i++) {
    const angle = (i / steps) * Math.PI * 2;
    const x = radiusX * Math.cos(angle);
    const y = radiusY * Math.sin(angle);
    const rx = x * Math.cos(tiltRad) - y * Math.sin(tiltRad) + cx;
    const ry = x * Math.sin(tiltRad) + y * Math.cos(tiltRad) + cy;
    d += (i === 0 ? 'M' : 'L') + rx.toFixed(2) + ',' + ry.toFixed(2);
  }
  return d + 'Z';
}

// Pre-compute static orbit path data
const CX = 400;
const CY = 300;
const ORBIT_PATHS = ORBITS.map((orbit) =>
  getOrbitPathD(orbit.radiusX, orbit.radiusY, orbit.tilt, CX, CY)
);

// Pre-compute nucleus dot positions
const NUCLEUS_DOTS = Array.from({ length: 6 }, (_, i) => {
  const a = (i / 6) * Math.PI * 2;
  const nr = 20;
  return {
    cx: CX + nr * Math.cos(a),
    cy: CY + nr * Math.sin(a),
    fill: i % 2 === 0 ? '#00d4ff' : '#7b2ff7',
    delay: i * 0.3,
  };
});

export default function AtomSkills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [angles, setAngles] = useState(INITIAL_ANGLES);
  const isPausedRef = useRef(false);
  const animRef = useRef(null);
  const lastTimeRef = useRef(null);

  // Sync pause state to ref so animation loop reads it without re-creating
  const handleMouseEnter = (key) => {
    setHoveredSkill(key);
    isPausedRef.current = true;
  };

  const handleMouseLeave = () => {
    setHoveredSkill(null);
    isPausedRef.current = false;
  };
  const panelRef = useRef(null);

  // Animation loop lives entirely inside useEffect — no self-reference issue
  useEffect(() => {
    lastTimeRef.current = null;

    // ScrollTrigger.create({
    //   trigger: panelRef.current,
    //   start: "top top",
    //   end: "+=100%",
    //   pin: true,
    //   anticipatePin: 1,
    // });


    function tick(time) {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = time;
      }
      const dt = time - lastTimeRef.current;
      lastTimeRef.current = time;

      if (!isPausedRef.current) {
        setAngles((prev) =>
          prev.map((orbitAngles, oi) =>
            orbitAngles.map((a) => a + ORBITS[oi].speed * dt)
          )
        );
      }

      animRef.current = requestAnimationFrame(tick);
    }

    animRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  // Build electron list sorted by z-depth
  const allElectrons = [];
  ORBITS.forEach((orbit, oi) => {
    orbit.skills.forEach((skill, si) => {
      const angle = angles[oi]?.[si] ?? 0;
      const pos = getOrbitPoint(angle, orbit.radiusX, orbit.radiusY, orbit.tilt, CX, CY);
      const tiltRad = (orbit.tilt * Math.PI) / 180;
      const localY =
        orbit.radiusX * Math.cos(angle) * Math.sin(tiltRad) +
        orbit.radiusY * Math.sin(angle) * Math.cos(tiltRad);
      allElectrons.push({
        skill,
        pos,
        orbitIndex: oi,
        skillIndex: si,
        z: localY,
        color: skill.color,
        isHovered: hoveredSkill === `${oi}-${si}`,
      });
    });
  });
  allElectrons.sort((a, b) => a.z - b.z);

  const behindElectrons = allElectrons.filter((e) => e.z < 0);
  const frontElectrons = allElectrons.filter((e) => e.z >= 0);

  // Render an electron group (reused for behind & front)
  const renderElectron = (e, isBehind) => {
    const key = `${e.orbitIndex}-${e.skillIndex}`;
    return (
      <g
        key={key}
        className={`electron-group ${e.isHovered ? 'hovered' : ''}`}
        onMouseEnter={() => handleMouseEnter(key)}
        onMouseLeave={handleMouseLeave}
        style={isBehind ? { opacity: e.isHovered ? 1 : 0.4 } : undefined}
      >
        {/* Glow ring */}
        <circle
          cx={e.pos.x}
          cy={e.pos.y}
          r={e.isHovered ? 28 : 13}
          fill={e.isHovered ? e.color + '22' : e.color + '11'}
          stroke={e.color}
          strokeWidth={e.isHovered ? 2 : 0.5}
          filter={e.isHovered ? `url(#glow-${e.skill.name})` : 'none'}
          className="electron-ring"
        />
        {/* Core dot */}
        <circle
          cx={e.pos.x}
          cy={e.pos.y}
          r={e.isHovered ? 6 : 4}
          fill={e.color}
          className="electron-core"
        />
        {/* Trail effect (front electrons only) */}
        {!isBehind && (
          <circle
            cx={e.pos.x}
            cy={e.pos.y}
            r={e.isHovered ? 14 : 6}
            fill="none"
            stroke={e.color}
            strokeWidth="0.5"
            opacity={e.isHovered ? 0.4 : 0.15}
            className="electron-trail"
          />
        )}
        {/* Skill label on hover */}
        {e.isHovered && (
          <g className="skill-label-group">
            <rect
              x={e.pos.x - 55}
              y={e.pos.y - 52}
              width={110}
              height={32}
              rx={10}
              fill="#0a0e1aee"
              stroke={e.color}
              strokeWidth="1.2"
            />
            <image
              href={e.skill.icon}
              x={e.pos.x - 45}
              y={e.pos.y - 46}
              width={20}
              height={20}
              preserveAspectRatio="xMidYMid slice"
            />
            <text
              x={e.pos.x - 20}
              y={e.pos.y - 32}
              textAnchor="start"
              fill={e.color}
              fontSize="14"
              fontWeight="700"
              fontFamily="'Inter', sans-serif"
              className="skill-label"
            >
              {e.skill.name}
            </text>
          </g>
        )}
      </g>
    );
  };

  // Resolve hovered skill for detail card
  let hoveredSkillData = null;
  if (hoveredSkill) {
    const [oi, si] = hoveredSkill.split('-').map(Number);
    hoveredSkillData = ORBITS[oi]?.skills[si] ?? null;
  }

  return (
    <>
      <style>{skillsCss}</style>
      <section ref={panelRef} className="atom-skills-section flex justify-center items-center flex-col">
        <div className="atom-skills-heading lg:px-30 md:px-25 sm:px-22 px-15 lg:text-[3.1rem] md:text-[2.8rem] sm:text-[2.3rem] text-[1.7rem]">
          <span className="text-[#FAEBD7] uppercase ">Skills</span><span className='text-red-800'> & Technologies</span>
        </div>
        <div className="atom-skills-container">

          <div className="atom-wrapper">
            <svg
              viewBox="0 0 800 600"
              className="atom-svg"
              onMouseLeave={handleMouseLeave}
            >
              <defs>
                {/* Glow filters for each skill color */}
                {SKILLS.map((skill, i) => (
                  <filter key={`glow-${i}`} id={`glow-${skill.name}`} x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feFlood floodColor={skill.color} floodOpacity="0.8" result="color" />
                    <feComposite in="color" in2="blur" operator="in" result="shadow" />
                    <feMerge>
                      <feMergeNode in="shadow" />
                      <feMergeNode in="shadow" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                ))}

                {/* Nucleus glow */}
                <filter id="nucleus-glow" x="-100%" y="-100%" width="300%" height="300%">
                  <feGaussianBlur stdDeviation="12" result="blur" />
                  <feFlood floodColor="#00d4ff" floodOpacity="0.4" result="color" />
                  <feComposite in="color" in2="blur" operator="in" result="shadow" />
                  <feMerge>
                    <feMergeNode in="shadow" />
                    <feMergeNode in="shadow" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                {/* Orbit path gradient */}
                <linearGradient id="orbit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.15" />
                  <stop offset="50%" stopColor="#7b2ff7" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#00d4ff" stopOpacity="0.15" />
                </linearGradient>

                {/* Radial gradient for nucleus background */}
                <radialGradient id="nucleus-bg" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#0a1628" />
                  <stop offset="60%" stopColor="#0d1f3c" />
                  <stop offset="100%" stopColor="#060e1a" />
                </radialGradient>
              </defs>

              {/* Particle field background */}
              {PARTICLES.map((p, i) => (
                <circle
                  key={`particle-${i}`}
                  cx={p.cx}
                  cy={p.cy}
                  r={p.r}
                  fill="#ffffff"
                  opacity={p.opacity}
                  className="bg-particle"
                  style={{ animationDelay: `${p.delay}s` }}
                />
              ))}

              {/* Orbit paths */}
              {ORBIT_PATHS.map((d, oi) => (
                <path
                  key={`orbit-${oi}`}
                  d={d}
                  fill="none"
                  stroke="url(#orbit-gradient)"
                  strokeWidth="1.2"
                  className="orbit-path"
                  style={{ animationDelay: `${oi * 0.5}s` }}
                />
              ))}

              {/* Electrons BEHIND the nucleus */}
              {behindElectrons.map((e) => renderElectron(e, true))}

              {/* NUCLEUS - Center */}
              <g filter="url(#nucleus-glow)" className="nucleus-group">
                {/* Outer glow rings */}
                <circle cx={CX} cy={CY} r={68} fill="none" stroke="#00d4ff" strokeWidth="1" opacity="0.2" className="nucleus-ring ring-1" />
                <circle cx={CX} cy={CY} r={58} fill="none" stroke="#7b2ff7" strokeWidth="0.8" opacity="0.25" className="nucleus-ring ring-2" />

                {/* Main nucleus body */}
                <circle cx={CX} cy={CY} r={50} fill="url(#nucleus-bg)" stroke="#00d4ff" strokeWidth="1.5" opacity="0.9" />

                {/* Inner energy rings */}
                <circle cx={CX} cy={CY} r={42} fill="none" stroke="#00d4ff" strokeWidth="0.4" opacity="0.3" className="inner-ring" />
                <circle cx={CX} cy={CY} r={34} fill="none" stroke="#7b2ff7" strokeWidth="0.3" opacity="0.25" className="inner-ring-2" />

                {/* Nucleus decorative dots */}
                {NUCLEUS_DOTS.map((dot, i) => (
                  <circle
                    key={`ndot-${i}`}
                    cx={dot.cx}
                    cy={dot.cy}
                    r={2.5}
                    fill={dot.fill}
                    opacity="0.5"
                    className="nucleus-dot"
                    style={{ animationDelay: `${dot.delay}s` }}
                  />
                ))}

                {/* Skills text */}
                <text
                  x={CX}
                  y={CY + 2}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill="#ffffff"
                  fontSize="18"
                  fontWeight="700"
                  fontFamily="'Inter', sans-serif"
                  letterSpacing="4"
                  className="nucleus-text"
                >
                  TECHS
                </text>
              </g>

              {/* Electrons IN FRONT of the nucleus */}
              {frontElectrons.map((e) => renderElectron(e, false))}
            </svg>

            {/* Hovered skill detail card */}
            {hoveredSkillData && (
              <div className="skill-detail-card" style={{ borderColor: hoveredSkillData.color + '44' }}>
                <div className="skill-detail-icon">
                  <img src={hoveredSkillData.icon} alt={hoveredSkillData.name} style={{ width: 28, height: 28 }} />
                </div>
                <div className="skill-detail-name" style={{ color: hoveredSkillData.color }}>
                  {hoveredSkillData.name}
                </div>
                <div className="skill-detail-bar">
                  <div
                    className="skill-detail-bar-fill"
                    style={{ backgroundColor: hoveredSkillData.color, width: '85%' }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
