import React from 'react'
import { useEffect, useRef, useState } from "react";

const EduTimeline = ({ itemsData }) => {
  const timelineRef = useRef(null);
  const progressRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);

  const totalItems = itemsData.length;

  // Scroll logic
  useEffect(() => {
    const handleScroll = () => {
      const timeline = timelineRef.current;
      const progressLine = progressRef.current;

      if (!timeline || !progressLine) return;

      const rect = timeline.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      let progressHeight = windowHeight - rect.top;
      let maxHeight = timeline.offsetHeight;

      progressHeight = Math.max(0, Math.min(progressHeight, maxHeight));
      progressLine.style.height = `${progressHeight}px`;

      const itemHeight = maxHeight / totalItems;
      let index = Math.floor(progressHeight / itemHeight);
      index = Math.max(0, Math.min(index, totalItems - 1));

      setCurrentIndex(index);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [totalItems]);

  // Update progress when currentIndex changes (for swipe)
  useEffect(() => {
    const timeline = timelineRef.current;
    const progressLine = progressRef.current;

    if (!timeline || !progressLine) return;

    const maxHeight = timeline.offsetHeight;
    const progressHeight = (currentIndex + 1) * (maxHeight / totalItems);

    progressLine.style.height = `${progressHeight}px`;
  }, [currentIndex, totalItems]);

  // Touch handlers
  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!startX) return;

    const endX = e.changedTouches[0].clientX;
    const diffX = startX - endX;

    if (Math.abs(diffX) > 50) {
      if (diffX > 0 && currentIndex < totalItems - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else if (diffX < 0 && currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1);
      }
    }

    setStartX(0);
  };

  return (
    <section className="education" id="education">
      <h2>Education</h2>
      <div ref={timelineRef} className="relative timeline" onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}>

        <div ref={progressRef}
          className="progress-line "
          style={{ height: "0px" }} id="progress">
          <div className="endtip"></div>
        </div>


        {itemsData.map((item, index) => (
          <div
            key={index}
            className={`container ${item.side} snap-start ${index <= currentIndex ? "show" : ""
              }`}
          >
            <i className={`${item.icon} icon`}></i>

            <div className="content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}

      </div>
    </section>
  )
};

export default EduTimeline