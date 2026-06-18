import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ─── All 10 videos from the actual site ────────────────────────────────────
const VIDEOS = [
  "https://s3.us-east-1.amazonaws.com/assets.vmdevs/vmdevs-website/videos/creative-development-gallery/900/3+Nr+Sasha.mp4",
  "https://s3.us-east-1.amazonaws.com/assets.vmdevs/vmdevs-website/videos/creative-development-gallery/900/8+Code+Product-Card.mp4",
  "https://s3.us-east-1.amazonaws.com/assets.vmdevs/vmdevs-website/videos/creative-development-gallery/900/4+Nr+Loader.mp4",
  "https://s3.us-east-1.amazonaws.com/assets.vmdevs/vmdevs-website/videos/creative-development-gallery/900/6+Code+404.mp4",
  "https://s3.us-east-1.amazonaws.com/assets.vmdevs/vmdevs-website/videos/creative-development-gallery/900/10+Cursor.mp4",
  "https://s3.us-east-1.amazonaws.com/assets.vmdevs/vmdevs-website/videos/creative-development-gallery/900/1+Nr+Inspired.mp4",
  "https://s3.us-east-1.amazonaws.com/assets.vmdevs/vmdevs-website/videos/creative-development-gallery/900/5+Code+Loader(Updated).mp4",
  "https://s3.us-east-1.amazonaws.com/assets.vmdevs/vmdevs-website/videos/creative-development-gallery/900/9+Rusty(Updated).mp4",
  "https://s3.us-east-1.amazonaws.com/assets.vmdevs/vmdevs-website/videos/creative-development-gallery/900/2+Nr+404.mp4",
  "https://s3.us-east-1.amazonaws.com/assets.vmdevs/vmdevs-website/videos/creative-development-gallery/900/7+Code+Gallery.mp4",
];

/**
 * Layout mirrors the original:
 *   Row 1: 3 cells  → [wide] [narrow] [narrow]   spans: [3] [2] [2]
 *   Row 2: 2 cells  → [narrow] [wide]             spans: [3] [4]
 *   Row 3: 3 cells  → [narrow] [wide] [narrow]    spans: [2] [3] [2]
 *   Row 4: 2 cells  → [wide] [narrow]             spans: [4] [3]
 * Total = 10 video items  (7-column grid base)
 */
const GRID_LAYOUT = [
  // [videoIndex, colSpan, rowSpan]
  [0, 3, 1],
  [1, 2, 1],
  [2, 2, 1],
  [3, 3, 1],
  [4, 4, 1],
  [5, 2, 1],
  [6, 3, 1],
  [7, 2, 1],
  [8, 4, 1],
  [9, 3, 1],
];

// ─── Single video cell ──────────────────────────────────────────────────────
const VideoCell = ({ src, colSpan }) => {
  const cellRef  = useRef(null);
  const videoRef = useRef(null);
  const overlayRef = useRef(null);

  // Hover: play / pause + scale reveal
  const handleEnter = () => {
    const v = videoRef.current;
    if (v) v.play();
    gsap.to(cellRef.current, {
      scale: 1.03,
      duration: 0.55,
      ease: "power2.out",
    });
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleLeave = () => {
    const v = videoRef.current;
    if (v) v.pause();
    gsap.to(cellRef.current, {
      scale: 1,
      duration: 0.55,
      ease: "power2.inOut",
    });
    gsap.to(overlayRef.current, {
      opacity: 1,
      duration: 0.35,
      ease: "power2.in",
    });
  };

  // Scroll-triggered reveal
  useEffect(() => {
    const el = cellRef.current;
    gsap.fromTo(
      el,
      { opacity: 0, y: 40, scale: 0.94 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div
      ref={cellRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{
        gridColumn: `span ${colSpan}`,
        position: "relative",
        borderRadius: 8,
        overflow: "hidden",
        aspectRatio: colSpan >= 4 ? "16/9" : colSpan >= 3 ? "4/3" : "3/4",
        cursor: "pointer",
        willChange: "transform",
        transformOrigin: "center center",
      }}
    >
      {/* Video */}
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        preload="metadata"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />

      {/* Default dark overlay — lifts on hover */}
      <div
        ref={overlayRef}
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.38)",
          transition: "none",
          pointerEvents: "none",
        }}
      />

      {/* Play icon hint */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: "50%",
            border: "1.5px solid rgba(255,255,255,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0.7,
          }}
        >
          <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
            <path d="M2 1.5L13 8L2 14.5V1.5Z" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  );
};

// ─── Main gallery section ───────────────────────────────────────────────────
const VideoGallery = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    // Heading chars stagger in
    const el = headingRef.current;
    const text = el.innerText;
    el.innerHTML = text
      .split("")
      .map((ch) =>
        ch === " "
          ? `<span style="display:inline-block;width:0.28em;">&nbsp;</span>`
          : `<span style="display:inline-block;overflow:hidden;"><span class="char" style="display:inline-block;">${ch}</span></span>`
      )
      .join("");

    gsap.fromTo(
      el.querySelectorAll(".char"),
      { y: "110%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 0.7,
        stagger: 0.03,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section
      id="section-our-gallery"
      style={{
        background: "#0d0d0d",
        padding: "120px 40px 140px",
        fontFamily: "'Neue Montreal', 'DM Sans', system-ui, sans-serif",
      }}
    >
      {/* Section heading */}
      <div style={{ marginBottom: 64 }}>
        <p
          style={{
            fontSize: 11,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.35)",
            marginBottom: 16,
            fontFamily: "monospace",
          }}
        >
          Gallery
        </p>
        <h2
          ref={headingRef}
          style={{
            fontSize: "clamp(2.2rem, 5vw, 4rem)",
            fontWeight: 500,
            color: "#ffffff",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            margin: 0,
          }}
        >
          Brought to life by V&amp;M
        </h2>
      </div>

      {/* video-gallery-content */}
      <div
        className="video-gallery-content"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: 12,
          maxWidth: 1400,
          margin: "0 auto",
        }}
      >
        {GRID_LAYOUT.map(([videoIdx, colSpan]) => (
          <VideoCell
            key={videoIdx}
            src={VIDEOS[videoIdx]}
            colSpan={colSpan}
          />
        ))}
      </div>
    </section>
  );
};

export default VideoGallery;