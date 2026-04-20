import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
    {
        label: "01 — Design",
        title: "Portfolio Dashboard",
        desc: "A clean, animated personal portfolio with dark mode and smooth transitions.",
        tech: "React · Framer Motion",
        tiltIn: "rotate(-6deg) translateX(-40px)",
        tiltRest: "rotate(-2deg)",
        link: "https://github.com/Satpal2004/Portfolio"
    },
    {
        label: "02 — Website",
        title: "Festivana",
        desc: "A Event Management Website for handling different events with clean UI.",
        tech: "HTML, CSS, JS, Django, SQL",
        tiltIn: "rotate(5deg) translateX(40px)",
        tiltRest: "rotate(3deg)",
        link: "https://github.com/Satpal2004/Festivana"
    },
    {
        label: "03 — Tool",
        title: "TO DO App",
        desc: "A useful tool to help to manage the daily schedules and manages efciently.",
        tech: "HTML, CSS, JS",
        tiltIn: "rotate(-4deg) translateX(-30px)",
        tiltRest: "rotate(-1.5deg)",
        link: "https://github.com/Satpal2004/To-Do-App"
    },
    {
        label: "04 — App",
        title: "Music Player",
        desc: "A Music listing app with clean UI and basic functionalities like pause, play, next, previous, volume control",
        tech: "HTML, CSS, JS",
        tiltIn: "rotate(6deg) translateX(35px)",
        tiltRest: "rotate(2.5deg)",
        link: "https://github.com/Satpal2004/Music-Player"
    },
];

const ProjectsCards = () => {
    const sectionRef = useRef(null);
    const stickyRef = useRef(null);
    const cardsRef = useRef([]);
    const dotsRef = useRef([]);
    const lastActiveRef = useRef(-1);

    useEffect(() => {
        const section = sectionRef.current;
        const sticky = stickyRef.current;
        const cards = cardsRef.current;
        const dots = dotsRef.current;
        const n = cards.length;

        if (!section || !sticky || cards.some((c) => !c)) return;

        // Initial state
        cards.forEach((card, i) => {
            gsap.set(card, {
                transform: projectsData[i].tiltIn,
                opacity: 0,
                zIndex: n - i,
            });
        });

        // Single trigger: pin + scrub in one — pinSpacing adds the scroll room,
        // so .cards-section needs NO height in CSS.
        const st = ScrollTrigger.create({
            trigger: section,
            start: "top top",
            end: `+=${n * window.innerHeight * 0.85}`,
            pin: sticky,           // pin the sticky-wrap element directly
            pinSpacing: true,      // ScrollTrigger injects its own spacer — don't fight it
            anticipatePin: 1,
            scrub: 0.8,
            onUpdate: (self) => {
                const step = self.progress * n;
                const activeIndex = Math.min(Math.floor(step), n - 1);

                if (activeIndex !== lastActiveRef.current) {
                    lastActiveRef.current = activeIndex;
                    dots.forEach((dot, i) =>
                        dot?.classList.toggle("active", i === activeIndex)
                    );
                }

                cards.forEach((card, i) => {
                    if (i < activeIndex) {
                        gsap.to(card, {
                            transform: projectsData[i].tiltRest,
                            opacity: 1,
                            zIndex: i,
                            duration: 0.4,
                            ease: "power2.out",
                            overwrite: "auto",
                        });
                    } else if (i === activeIndex) {
                        gsap.to(card, {
                            transform: projectsData[i].tiltRest,
                            opacity: 1,
                            zIndex: n,
                            duration: 0.5,
                            ease: "power2.out",
                            overwrite: "auto",
                        });
                    } else {
                        gsap.to(card, {
                            transform: projectsData[i].tiltIn,
                            opacity: 0,
                            zIndex: n - i,
                            duration: 0.4,
                            ease: "power2.in",
                            overwrite: "auto",
                        });
                    }

                    card.style.pointerEvents = i === activeIndex ? "auto" : "none";
                });
            },
        });

        return () => {
            st.kill();
            gsap.killTweensOf(cards);
        };
    }, []);

    return (<>
        <div className="intro">
            <h2>Projects</h2>
            <h1>
                Let's explore <br /> my projects
            </h1>
            <p>Scroll to see what I've been building.</p>
            <div className="scroll-hint">↓ scroll</div>
        </div>

        {/* cards-section: NO height here — ScrollTrigger pinSpacing handles it */}
        <section ref={sectionRef} className="cards-section">

            <div ref={stickyRef} className="sticky-wrap">
                <div className="card-stack">
                    {projectsData.map((project, i) => (
                        <div
                            key={i}
                            ref={(el) => (cardsRef.current[i] = el)}
                            className={`project-card c${i + 1}`}
                        >
                            <div>
                                <div className="card-label">{project.label}</div>
                                <div className="card-title">
                                    {project.title.split(" ").map((word, idx) => (
                                        <span key={idx}>{word} <br /></span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <div className="card-desc">{project.desc}</div>
                                <span className="card-tag">{project.tech}</span>
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="get-code-btn"
                                    >
                                        Get the Code
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="scroll-progress">
                {projectsData.map((_, i) => (
                    <div
                        key={i}
                        ref={(el) => (dotsRef.current[i] = el)}
                        className="dot"
                    />
                ))}
            </div>
        </section>
    </>
    );
};

export default ProjectsCards;
