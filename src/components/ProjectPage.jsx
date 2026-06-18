// import React, { useEffect, useRef, useState } from "react";

// const projects = [
//   {
//     id: "01",
//     title: "Health Insurance Prediction",
//     category: "Machine Learning",
//     tags: ["Regression", "Analytics", "Python"],
//     desc: "Predicts insurance charges using ensemble regression models, feature engineering, and deep data analytics pipelines — turning raw actuarial data into precise cost estimates.",
//     year: "2024",
//     accent: "#991b1b",
//   },
//   {
//     id: "02",
//     title: "Event Management Platform",
//     category: "Frontend Development",
//     tags: ["React", "UI/UX", "Booking"],
//     desc: "A fully responsive event booking and management platform with real-time seat tracking, animated transitions, and a modern editorial interface built for scale.",
//     year: "2024",
//     accent: "#ffefd5",
//   },
//   {
//     id: "03",
//     title: "Portfolio Website",
//     category: "Creative Development",
//     tags: ["Animation", "Design", "Three.js"],
//     desc: "An interactive portfolio experience featuring WebGL-powered scenes, spring-based scroll animations, and obsessively refined typographic detail at every breakpoint.",
//     year: "2025",
//     accent: "#991b1b",
//   },
// ];

// const Noise = () => (
//   <svg style={{ position: "fixed", top: 0, left: 0, width: 0, height: 0 }}>
//     <filter id="noise">
//       <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
//       <feColorMatrix type="saturate" values="0" />
//     </filter>
//   </svg>
// );

// export default function ProjectPage() {
//   const [hovered, setHovered] = useState(null);
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const containerRef = useRef(null);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//     const handleMouse = (e) => setMousePos({ x: e.clientX, y: e.clientY });
//     window.addEventListener("mousemove", handleMouse);
//     return () => window.removeEventListener("mousemove", handleMouse);
//   }, []);

//   return (
//     <main
//       ref={containerRef}
//       style={{
//         background: "#0a0a0a",
//         color: "#ffefd5",
//         minHeight: "100vh",
//         overflow: "hidden",
//         position: "relative",
//       }}
//     >
//       <Noise />

//       {/* Grain overlay */}
//       <div
//         style={{
//           position: "fixed",
//           inset: 0,
//           pointerEvents: "none",
//           zIndex: 100,
//           opacity: 0.045,
//           filter: "url(#noise)",
//           background: "#ffefd5",
//         }}
//       />

//       {/* Ambient glow following mouse */}
//       <div
//         style={{
//           position: "fixed",
//           width: 600,
//           height: 600,
//           borderRadius: "50%",
//           background: "radial-gradient(circle, rgba(153,27,27,0.12) 0%, transparent 70%)",
//           transform: `translate(${mousePos.x - 300}px, ${mousePos.y - 300}px)`,
//           pointerEvents: "none",
//           zIndex: 1,
//           transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)",
//         }}
//       />

//       {/* ── HERO ── */}
//       <section
//         style={{
//           minHeight: "100vh",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "flex-end",
//           padding: "0 3rem 4rem",
//           position: "relative",
//           borderBottom: "0.5px solid rgba(255,239,213,0.12)",
//         }}
//       >
//         {/* Top nav strip */}
//         <div
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             right: 0,
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             padding: "2rem 3rem",
//             borderBottom: "0.5px solid rgba(255,239,213,0.08)",
//           }}
//         >
//           <span style={{ fontSize: 11, letterSpacing: "0.3em", color: "rgba(255,239,213,0.4)", textTransform: "uppercase", fontFamily: "monospace" }}>
//             Portfolio / Works
//           </span>
//           <span style={{ fontSize: 11, letterSpacing: "0.3em", color: "rgba(255,239,213,0.4)", textTransform: "uppercase", fontFamily: "monospace" }}>
//             2024–2025
//           </span>
//         </div>

//         {/* Decorative vertical line */}
//         <div
//           style={{
//             position: "absolute",
//             left: "50%",
//             top: "10%",
//             width: "0.5px",
//             height: "40%",
//             background: "linear-gradient(to bottom, transparent, rgba(153,27,27,0.6), transparent)",
//           }}
//         />

//         {/* Oversized rotated text */}
//         <div
//           style={{
//             position: "absolute",
//             right: "-2rem",
//             top: "50%",
//             transform: "translateY(-50%) rotate(90deg)",
//             transformOrigin: "center center",
//             fontSize: 11,
//             letterSpacing: "0.5em",
//             color: "rgba(255,239,213,0.15)",
//             textTransform: "uppercase",
//             fontFamily: "monospace",
//             whiteSpace: "nowrap",
//           }}
//         >
//           Selected Works — Creative & Technical
//         </div>

//         {/* Hero type */}
//         <div style={{ position: "relative", zIndex: 2 }}>
//           <p
//             style={{
//               fontSize: 12,
//               letterSpacing: "0.4em",
//               textTransform: "uppercase",
//               color: "#991b1b",
//               marginBottom: "1.5rem",
//               fontFamily: "monospace",
//             }}
//           >
//             ✦ Selected Works
//           </p>

//           <h1
//             style={{
//               fontSize: "clamp(4rem, 13vw, 14rem)",
//               lineHeight: 0.88,
//               fontWeight: 400,
//               letterSpacing: "-0.03em",
//               margin: 0,
//               color: "#ffefd5",
//               mixBlendMode: "normal",
//             }}
//           >
//             Pro
//             <em style={{ color: "#991b1b", fontStyle: "italic" }}>jects</em>
//           </h1>

//           <div
//             style={{
//               display: "flex",
//               alignItems: "flex-end",
//               justifyContent: "space-between",
//               marginTop: "3rem",
//               borderTop: "0.5px solid rgba(255,239,213,0.12)",
//               paddingTop: "1.5rem",
//               gap: "2rem",
//               flexWrap: "wrap",
//             }}
//           >
//             <p
//               style={{
//                 maxWidth: 380,
//                 fontSize: 16,
//                 lineHeight: 1.7,
//                 color: "rgba(255,239,213,0.55)",
//                 margin: 0,
//                 fontFamily: "'EB Garamond', Georgia, serif",
//                 fontStyle: "italic",
//               }}
//             >
//               A curated body of work spanning machine learning, interface design, and interactive development.
//             </p>

//             <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
//               {["ML", "UI", "Dev"].map((tag) => (
//                 <span
//                   key={tag}
//                   style={{
//                     fontSize: 11,
//                     letterSpacing: "0.3em",
//                     color: "rgba(255,239,213,0.3)",
//                     fontFamily: "monospace",
//                     textTransform: "uppercase",
//                   }}
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── PROJECT LIST (unconventional staggered rows) ── */}
//       <section style={{ position: "relative", zIndex: 2 }}>
//         {projects.map((project, i) => (
//           <ProjectRow
//             key={project.id}
//             project={project}
//             index={i}
//             isHovered={hovered === i}
//             onHover={() => setHovered(i)}
//             onLeave={() => setHovered(null)}
//           />
//         ))}
//       </section>

//       {/* ── FOOTER STRIP ── */}
//       <footer
//         style={{
//           borderTop: "0.5px solid rgba(255,239,213,0.12)",
//           padding: "3rem",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           position: "relative",
//           zIndex: 2,
//         }}
//       >
//         <span style={{ fontSize: 11, letterSpacing: "0.3em", color: "rgba(255,239,213,0.25)", fontFamily: "monospace", textTransform: "uppercase" }}>
//           End of Works
//         </span>
//         <div
//           style={{
//             width: 40,
//             height: 40,
//             borderRadius: "50%",
//             border: "0.5px solid rgba(255,239,213,0.2)",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             cursor: "pointer",
//             color: "rgba(255,239,213,0.4)",
//             fontSize: 16,
//             transition: "all 0.3s",
//           }}
//           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//         >
//           ↑
//         </div>
//       </footer>
//     </main>
//   );
// }

// function ProjectRow({ project, index, isHovered, onHover, onLeave }) {
//   const isEven = index % 2 === 0;

//   return (
//     <div
//       onMouseEnter={onHover}
//       onMouseLeave={onLeave}
//       style={{
//         display: "grid",
//         gridTemplateColumns: isEven ? "1fr 1.6fr" : "1.6fr 1fr",
//         borderBottom: "0.5px solid rgba(255,239,213,0.08)",
//         minHeight: 380,
//         transition: "background 0.5s ease",
//         background: isHovered ? "rgba(255,239,213,0.02)" : "transparent",
//         position: "relative",
//         overflow: "hidden",
//         cursor: "pointer",
//       }}
//     >
//       {/* Hover red line */}
//       <div
//         style={{
//           position: "absolute",
//           left: 0,
//           top: 0,
//           width: isHovered ? "100%" : "0%",
//           height: "1.5px",
//           background: "#991b1b",
//           transition: "width 0.6s cubic-bezier(0.16,1,0.3,1)",
//           zIndex: 5,
//         }}
//       />

//       {/* Left column */}
//       <div
//         style={{
//           order: isEven ? 1 : 2,
//           borderRight: isEven ? "0.5px solid rgba(255,239,213,0.08)" : "none",
//           borderLeft: !isEven ? "0.5px solid rgba(255,239,213,0.08)" : "none",
//           padding: "3.5rem 3rem",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "space-between",
//           position: "relative",
//         }}
//       >
//         {/* Project number */}
//         <div
//           style={{
//             fontSize: "clamp(5rem, 10vw, 9rem)",
//             fontWeight: 400,
//             lineHeight: 1,
//             color: isHovered ? "rgba(153,27,27,0.25)" : "rgba(255,239,213,0.04)",
//             fontFamily: "'EB Garamond', Georgia, serif",
//             transition: "color 0.5s ease",
//             userSelect: "none",
//             position: "absolute",
//             bottom: "2rem",
//             right: isEven ? "2rem" : "auto",
//             left: !isEven ? "2rem" : "auto",
//           }}
//         >
//           {project.id}
//         </div>

//         <div>
//           <p
//             style={{
//               fontSize: 10,
//               letterSpacing: "0.4em",
//               textTransform: "uppercase",
//               color: "#991b1b",
//               fontFamily: "monospace",
//               marginBottom: "0.75rem",
//             }}
//           >
//             {project.category}
//           </p>

//           <h2
//             style={{
//               fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
//               fontWeight: 400,
//               lineHeight: 1.1,
//               letterSpacing: "-0.02em",
//               color: "#ffefd5",
//               margin: 0,
//             }}
//           >
//             {project.title}
//           </h2>
//         </div>

//         <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
//           {project.tags.map((tag) => (
//             <span
//               key={tag}
//               style={{
//                 fontSize: 10,
//                 letterSpacing: "0.25em",
//                 textTransform: "uppercase",
//                 fontFamily: "monospace",
//                 color: "rgba(255,239,213,0.35)",
//                 border: "0.5px solid rgba(255,239,213,0.12)",
//                 padding: "4px 10px",
//                 borderRadius: 2,
//               }}
//             >
//               {tag}
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* Right column */}
//       <div
//         style={{
//           order: isEven ? 2 : 1,
//           padding: "3.5rem 3rem",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "space-between",
//           position: "relative",
//         }}
//       >
//         {/* Preview placeholder with animated border */}
//         <div
//           style={{
//             flex: 1,
//             borderRadius: 4,
//             border: `0.5px solid ${isHovered ? "rgba(153,27,27,0.5)" : "rgba(255,239,213,0.08)"}`,
//             background: isHovered
//               ? "linear-gradient(135deg, rgba(153,27,27,0.08) 0%, rgba(10,10,10,0) 60%)"
//               : "rgba(255,239,213,0.015)",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             marginBottom: "2rem",
//             minHeight: 160,
//             transition: "all 0.5s ease",
//             position: "relative",
//             overflow: "hidden",
//           }}
//         >
//           {/* Corner dots */}
//           {[["top:8px","left:8px"],["top:8px","right:8px"],["bottom:8px","left:8px"],["bottom:8px","right:8px"]].map((pos, ci) => {
//             const [vert, horiz] = pos;
//             const [vKey, vVal] = vert.split(":");
//             const [hKey, hVal] = horiz.split(":");
//             return (
//               <div
//                 key={ci}
//                 style={{
//                   position: "absolute",
//                   [vKey]: vVal,
//                   [hKey]: hVal,
//                   width: 4,
//                   height: 4,
//                   borderRadius: "50%",
//                   background: isHovered ? "#991b1b" : "rgba(255,239,213,0.2)",
//                   transition: "background 0.4s ease",
//                 }}
//               />
//             );
//           })}

//           <span
//             style={{
//               fontSize: 10,
//               letterSpacing: "0.4em",
//               textTransform: "uppercase",
//               fontFamily: "monospace",
//               color: "rgba(255,239,213,0.15)",
//             }}
//           >
//             Preview
//           </span>
//         </div>

//         <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "2rem" }}>
//           <p
//             style={{
//               fontSize: 15,
//               lineHeight: 1.65,
//               color: "rgba(255,239,213,0.45)",
//               margin: 0,
//               maxWidth: 340,
//               fontFamily: "'EB Garamond', Georgia, serif",
//               fontStyle: "italic",
//               flex: 1,
//             }}
//           >
//             {project.desc}
//           </p>

//           <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.5rem", flexShrink: 0 }}>
//             <span style={{ fontSize: 10, letterSpacing: "0.2em", color: "rgba(255,239,213,0.2)", fontFamily: "monospace" }}>
//               {project.year}
//             </span>
//             <button
//               style={{
//                 background: "transparent",
//                 border: "0.5px solid rgba(255,239,213,0.2)",
//                 color: "#ffefd5",
//                 padding: "10px 20px",
//                 borderRadius: 2,
//                 fontSize: 10,
//                 letterSpacing: "0.35em",
//                 textTransform: "uppercase",
//                 fontFamily: "monospace",
//                 cursor: "pointer",
//                 display: "flex",
//                 alignItems: "center",
//                 gap: 8,
//                 transition: "all 0.3s ease",
//                 ...(isHovered
//                   ? { background: "#991b1b", borderColor: "#991b1b", color: "#ffefd5" }
//                   : {}),
//               }}
//             >
//               View
//               <span style={{ transition: "transform 0.3s", transform: isHovered ? "translateX(4px)" : "translateX(0)" }}>→</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from 'react'
import Pros from './Pros.jsx'

const ProjectPage = () => {
  return (
    <Pros />
  )
}

export default ProjectPage