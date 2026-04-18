import React from 'react'
import { useState, useRef, useEffect } from 'react'
import Typing from './Typing.jsx'
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
    const cardRef = useRef(null);
    const sectionRef = useRef(null);

    const [width, setWidth] = useState(70);
    const [radius, setRadius] = useState(30);

    useEffect(() => {

        AOS.init({
            duration: 300,   // animation duration
            once: true,       // animate only once
            offset: 100,      // trigger point
            easing: "ease-in-out",
        });


        const handleScroll = () => {
            const card = cardRef.current;
            const section = sectionRef.current;


            if (card && section) {
                // const cardRect = card.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                const sectionRect = section.getBoundingClientRect();

                // NEW: Width changes based on section scroll progress
                const sectionTop = sectionRect.top;
                const sectionHeight = sectionRect.height;
                const sectionProgress = -sectionTop / (sectionHeight - windowHeight);
                const clampedProgress = Math.max(0, Math.min(sectionProgress, 1));

                // Width changes from 70% to 110% as you scroll through the section
                const minWidth = 70;
                const maxWidth = 100;
                const currentWidth = minWidth + (clampedProgress * (maxWidth - minWidth));
                const newRadius = 30 - (30 * clampedProgress);

                setWidth(currentWidth)
                setRadius(newRadius)

            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.addEventListener("scroll", handleScroll);
    }, []);
    return (
        <section ref={sectionRef} className="about flex flex-col justify-start items-center" id="about">
            <div className="hero-top-bar">
                <img src="/media/navlogo.png" loading="lazy" alt="logo" />
            </div>
            <div
                className="h-auto text-[1.3rem] text-gray-500 transition-all duration-300 ease absolute lg:top-30 lg:left-50 md:top-30 md:left-40 sm:top-30 sm:left-50 top-40 left-10 gap-2.5 inline-block">
                <span>Hi there,<br />I am a </span>
                <Typing />
            </div>
            <div className="lg:translate-y-70 translate-y-60 w-full text-center snap-start snap-mandatory">
                <h1 data-aos="fade-right" data-aos-duration="1000"
                    className="font-semibold lg:text-8xl md:text-7xl text-5xl text-cyan-500 uppercase md:-translate-x-30">Satpal
                </h1>
                <h1 data-aos="fade-left" data-aos-duration="1000"
                    className="font-semibold lg:text-8xl md:text-7xl text-5xl text-cyan-500 uppercase md:translate-x-30">sharma</h1>
            </div>
            <div className="scroll-indicator animate-pulse lg:top-145 top-128">
                <img className="animate-bounce" src="/media/south_arrow.svg" loading="lazy" alt="scroll down arrow" />
            </div>
            <div ref={cardRef} style={{
                width: `${width}%`,
                borderRadius: `${radius}px ${radius}px 0 0`,
                transition: `all 0.2 ease`,
            }} className="aboutcard">

                <div className="flex flex-col items-end text-justify">
                    <h2><strong>About Me</strong></h2>
                    <br />
                    <p className="max-w-md">
                        I am a Bachelor of Computer Applications (BCA) student with a strong interest in software development and
                        web
                        technologies.
                        I have hands‑on experience in HTML, CSS, JavaScript, Java, PHP, and ASP.NET Web Forms. As a fresher, I am
                        highly motivated
                        to learn, improve my skills, and contribute to real‑world IT solutions with a problem‑solving mindset.
                    </p>
                </div>
            </div>

        </section>
    )
}

export default About