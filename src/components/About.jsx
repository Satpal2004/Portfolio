import React from 'react'
import { useRef, useEffect } from 'react'
// import { useRef, useEffect } from 'react'
// import AOS from "aos";
// import "aos/dist/aos.css";
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Typing from './Typing.jsx';
import Herobuttons from './Herobuttons.jsx';
// import ExpandingCircleButton from './ExpandingCircleButton.jsx';

const About = () => {
    const cardRef = useRef(null);
    const sectionRef = useRef(null);
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const roboRef = useRef(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.set(roboRef.current, {
                scale: 1.1,
                transformOrigin: "center center",
            });

            const roboAnim = gsap.timeline();

            roboAnim.to(roboRef.current, {
                scale: 1,
                duration: 1.2,
                ease: "expo.out",
            });

            if (!firstNameRef.current || !lastNameRef.current) return;

            gsap.set([firstNameRef.current, lastNameRef.current], {
                autoAlpha: 0,
                y: 100,
            });

            const tl = gsap.timeline({
                delay: 0.8,
                defaults: {
                    duration: 1,
                    ease: "power4.out",
                },
            });

            tl.to(firstNameRef.current, {
                y: 0,
                autoAlpha: 1,
            }).to(lastNameRef.current, {
                y: 0,
                autoAlpha: 1,
            }, "-=0.9");

            if (cardRef.current) {
                gsap.fromTo(
                    cardRef.current,
                    {
                        width: "80%",
                    },
                    {
                        width: "100%",
                        scrollTrigger: {
                            trigger: cardRef.current,
                            scrub: true,
                            start: "top 80%",
                            end: "top 20%",
                            markers: 0,
                            invalidateOnRefresh: true,
                        },
                    }
                );
            }
        }, sectionRef.current);

        return () => ctx.revert();
    }, []);



    return (
        <section ref={sectionRef} className="about flex flex-col justify-start items-center" id="about">

            <div className="w-full h-screen relative flex flex-col">

                <div
                    className="h-auto md:text-[1.3rem] text-[15px] text-gray-500 transition-all duration-300 ease absolute lg:top-30 lg:left-50 md:top-30 md:left-40 sm:top-30 sm:left-50 top-40 left-10 gap-2.5 inline-block">
                    <span>Hi there,<br />I am a </span>
                    <Typing />
                </div>
                <div className='absolute bottom-0 right-5'>
                    <img ref={roboRef} className='md:h-145  will-change-transform' src="/media/Gemini_Robo.png" alt="Robo-image" />
                </div>
                <div className="lg:translate-y-90 md:translate-y-60 translate-y-75 w-full text-center snap-start snap-mandatory">

                    <div className="overflow-hidden md:-translate-x-30 sm:-translate-x-25 -translate-x-15">
                        <h1 /*data-aos="fade-right" data-aos-duration="1000"*/ ref={firstNameRef}
                            className="font-semibold lg:text-8xl md:text-7xl text-5xl text-[#922429]
                         uppercase ">Satpal
                        </h1>
                    </div>

                    <div className="overflow-hidden md:translate-x-30 sm:translate-x-25 translate-x-15">
                        <h1 /*data-aos="fade-left" data-aos-duration="1000"*/ ref={lastNameRef}
                            className="font-semibold lg:text-8xl md:text-7xl text-5xl text-[#922429] uppercase ">sharma</h1>
                    </div>
                </div>
            </div>

            <div ref={cardRef}
                className="aboutCard">

                <div className="flex flex-col items-end text-justify">
                    <h2><strong>About Me</strong></h2>
                    {/* <ExpandingCircleButton text="Hover on" /> */}
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