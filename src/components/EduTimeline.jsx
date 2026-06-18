import React, { useEffect, useRef, useState, useCallback } from 'react';

const timelineStyles = `
  /* ── Section ── */
  .edu-section {
    background-color: #0f0e0e;
    padding: 96px 24px 80px;
    font-family: 'moonerRegular','Georgia', serif;
    position: relative;
    overflow: hidden;
  }

  i{
  color: red;
  }
  
  /* faint watermark */
  .edu-section::before {
    content: 'EDUCATION';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: clamp(3rem, 10vw, 8rem);
    font-weight: 900;
    letter-spacing: 0.12em;
    color: #ffefd504;
    pointer-events: none;
    user-select: none;
    white-space: nowrap;
    font-family: 'Georgia', serif;
  }

  .edu-wrapper {
    max-width: 1100px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  /* ── Section header ── */
  .edu-header {
    margin-bottom: 64px;
  }

  .edu-header .overline {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-size: 0.68rem;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    font-weight: 700;
    color: #dc2626;
    margin-bottom: 14px;
  }

  .edu-header .overline::before {
    content: '';
    display: inline-block;
    width: 32px;
    height: 1px;
    background-color: #dc2626;
  }

  .edu-header h2 {
    font-size: clamp(2rem, 5vw, 3.2rem);
    font-weight: 800;
    color: #ffefd5;
    line-height: 1.1;
    letter-spacing: -0.03em;
    margin: 0;
  }

  .edu-header h2 span {
    color: #dc2626;
  }

  /* ── Timeline track ── */
  .timeline-track {
    position: relative;
  }

  /* static grey rail */
  .timeline-track::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    bottom: 0;
    width: 1px;
    background-color: #ffefd510;
    z-index: 0;
  }

  @media (max-width: 767px) {
    .timeline-track::before {
      left: 16px;
      transform: none;
    }
  }

  /* ── Red progress line ── */
  .progress-rail {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    width: 1px;
    background-color: #dc2626;
    height: 0;
    z-index: 1;
    transition: height 0.1s linear;
  }

  /* glowing tip */
  .progress-rail::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 50%;
    transform: translateX(-50%);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #dc2626;
    box-shadow: 0 0 10px 3px #dc262660;
  }

  @media (max-width: 767px) {
    .progress-rail {
      left: 16px;
      transform: none;
    }
  }

  /* ── Timeline item ── */
  .tl-item {
    position: relative;
    display: flex;
    align-items: flex-start;
    gap: 32px;
    margin-bottom: 64px;
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }

  .tl-item.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* left side — card right, dot left */
  .tl-item.left {
    flex-direction: row-reverse;
    padding-right: calc(50% + 32px);
  }

  /* right side — card left, dot right */
  .tl-item.right {
    flex-direction: row;
    padding-left: calc(50% + 32px);
  }

  @media (max-width: 767px) {
    .tl-item.left,
    .tl-item.right {
      flex-direction: row;
      padding-left: 48px;
      padding-right: 0;
    }
  }

  /* ── Centre dot ── */
  .tl-dot {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 16px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #1a1818;
    border: 1px solid #ffefd520;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    transition: border-color 0.35s, background 0.35s, box-shadow 0.35s;
    flex-shrink: 0;
  }

  .tl-item.visible .tl-dot {
    border-color: #dc2626;
    background-color: #dc262615;
    box-shadow: 0 0 12px 3px #dc262630;
  }

  .tl-dot svg {
    width: 15px;
    height: 15px;
    stroke: #ffefd550;
    fill: none;
    transition: stroke 0.35s;
  }

  .tl-item.visible .tl-dot svg {
    stroke: #dc2626;
  }

  @media (max-width: 767px) {
    .tl-dot {
      left: 0;
      transform: none;
      width: 32px;
      height: 32px;
    }
  }

  /* ── Card ── */
  .tl-card {
    background-color: #1a1818;
    border: 1px solid #ffefd510;
    border-radius: 8px;
    padding: 24px 24px 20px;
    max-width: 400px;
    width: 100%;
    transition: border-color 0.3s, box-shadow 0.3s;
  }

  .tl-item.visible .tl-card {
    border-color: #ffefd520;
  }

  .tl-card:hover {
    border-color: #dc262650;
    box-shadow: 0 0 24px #dc262615;
  }

  .tl-card .card-label {
    font-size: 0.62rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    font-weight: 700;
    color: #dc2626;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .tl-card .card-label::after {
    content: '';
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, #dc2626, transparent);
  }

  .tl-card h3 {
    font-size: 1.05rem;
    font-weight: 800;
    color: #ffefd5;
    letter-spacing: -0.02em;
    margin: 0 0 10px 0;
  }

  .tl-card p {
    font-size: 0.85rem;
    line-height: 1.8;
    color: #ffefd5aa;
    margin: 0;
  }

  .tl-card .card-year {
    display: inline-block;
    margin-top: 14px;
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #ffefd540;
  }
`;


const EduTimeline = ({ itemsData = [] }) => {
  const trackRef  = useRef(null);
  const railRef   = useRef(null);
  const [visibleSet, setVisibleSet] = useState(new Set());
  const [startX, setStartX]         = useState(null);
  const [mobileIndex, setMobileIndex] = useState(0);

  const total = itemsData.length;

  /* ── Scroll: drive the red rail + reveal cards ── */
  const handleScroll = useCallback(() => {
    const track = trackRef.current;
    const rail  = railRef.current;
    if (!track || !rail) return;

    const rect       = track.getBoundingClientRect();
    const maxHeight  = track.offsetHeight;
    const filled     = Math.max(0, Math.min(window.innerHeight - rect.top, maxHeight));

    rail.style.height = `${filled}px`;

    // reveal items whose midpoint is above the viewport bottom
    const items = track.querySelectorAll('.tl-item');
    const next  = new Set(visibleSet);

    items.forEach((el, i) => {
      const mid = el.getBoundingClientRect().top + el.offsetHeight / 2;
      if (mid < window.innerHeight) next.add(i);
    });

    if (next.size !== visibleSet.size) setVisibleSet(new Set(next));
  }, [visibleSet]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    // handleScroll(); // run once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  /* ── Touch: swipe on mobile steps through items ── */
  const handleTouchStart = (e) => setStartX(e.touches[0].clientX);

  const handleTouchEnd = (e) => {
    if (startX === null) return;
    const diff = startX - e.changedTouches[0].clientX;

    if (Math.abs(diff) > 50) {
      setMobileIndex((prev) =>
        diff > 0 ? Math.min(prev + 1, total - 1) : Math.max(prev - 1, 0)
      );
    }
    setStartX(null);
  };

  /* sync mobile swipe → rail height */
  useEffect(() => {
    const track = trackRef.current;
    const rail  = railRef.current;
    if (!track || !rail || window.innerWidth >= 768) return;

    const h = ((mobileIndex + 1) / total) * track.offsetHeight;
    rail.style.height = `${h}px`;

    setVisibleSet(new Set(Array.from({ length: mobileIndex + 1 }, (_, i) => i)));
  }, [mobileIndex, total]);




  return (
    <>
      <style>{timelineStyles}</style>

      <section className="edu-section" id="education">
        <div className="edu-wrapper">

          {/* Header */}
          <div className="edu-header">
            <div className="overline">My journey</div>
            <h2>Education &amp; <span>Background</span></h2>
          </div>

          {/* Timeline */}
          <div
            ref={trackRef}
            className="timeline-track"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Animated red rail */}
            <div ref={railRef} className="progress-rail" />

            {itemsData.map((item, index) => (
              <div
                key={index}
                className={`tl-item ${item.side ?? (index % 2 === 0 ? 'left' : 'right')} ${visibleSet.has(index) ? 'visible' : ''}`}
              >
                {/* Centre dot */}
                <div className="tl-dot">
                  <i className={`${item.icon} icon`}></i>
                </div>

                {/* Card */}
                <div className="tl-card">
                  <div className="card-label">{item.label ?? 'Education'}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  {item.year && <span className="card-year">{item.year}</span>}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default EduTimeline;