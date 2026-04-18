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
    },
    {
        label: "02 — App",
        title: "Budget Tracker",
        desc: "Real-time expense tracking with category breakdowns and monthly summaries.",
        tech: "Vue · Chart.js",
        tiltIn: "rotate(5deg) translateX(40px)",
        tiltRest: "rotate(3deg)",
    },
    {
        label: "03 — Tool",
        title: "AI Writing Assistant",
        desc: "A GPT-powered writing tool with tone controls and one-click Markdown export.",
        tech: "Next.js · OpenAI",
        tiltIn: "rotate(-4deg) translateX(-30px)",
        tiltRest: "rotate(-1.5deg)",
    },
    {
        label: "04 — Game",
        title: "Pixel Dungeon",
        desc: "A browser-based roguelike with procedural level generation and pixel art.",
        tech: "Canvas · JavaScript",
        tiltIn: "rotate(6deg) translateX(35px)",
        tiltRest: "rotate(2.5deg)",
    },
];

const ProjectsCards = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);
    const dotsRef = useRef([]);

    useEffect(() => {
        const section = sectionRef.current;
        const cards = cardsRef.current;
        const dots = dotsRef.current;

        if (!section) return;

        // Initial state
        cards.forEach((card, i) => {
            gsap.set(card, {
                transform: projectsData[i].tiltIn,
                opacity: 0,
            });
        });

        // Pin sticky section
        const pinTrigger = ScrollTrigger.create({
            trigger: section,
            start: "top top",
            end: "bottom bottom",
            pin: section.querySelector(".sticky-wrap"),
            pinSpacing: true,
            // pinType: "transform",
            anticipatePin: 1,
        });

        // Scroll animation
        const scrollTrigger = ScrollTrigger.create({
            trigger: section,
            start: "top center",
            end: "bottom center",
            scrub: true,
            onUpdate: (self) => {
                const step = self.progress * cards.length;

                
                cards.forEach((card, i) => {
                    const show = step >= i - 0.05;

                    gsap.set(card, {
                        force3D: true, // smoother GPU rendering
                    });

                    gsap.to(card, {
                        transform: show
                            ? projectsData[i].tiltRest
                            : projectsData[i].tiltIn,
                        opacity: show ? 1 : 0,
                        duration: 0.5,
                        ease: "power2.out",
                    });

                    const isTop =
                        i === Math.min(Math.floor(step), cards.length - 1);

                    dots[i]?.classList.toggle("active", show && isTop);
                });
            },
        });

        // Cleanup
        return () => {
            pinTrigger.kill();
            scrollTrigger.kill();
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
        <section ref={sectionRef} className="cards-section">

            {/* Intro */}

            {/* Cards */}
            <div className="sticky-wrap">
                <div className="card-stack">
                    {projectsData.map((project, i) => (
                        <div
                            key={i}
                            ref={(el) => (cardsRef.current[i] = el)}
                            className={`project-card c${i + 1}`}
                            style={{
                                transform: project.tiltIn,
                                zIndex: i + 1,
                            }}
                        >
                            <div>
                                <div className="card-label">{project.label}</div>

                                <div className="card-title">
                                    {project.title.split(" ").map((word, idx) => (
                                        <span key={idx}>
                                            {word} <br />
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <div className="card-desc">{project.desc}</div>
                                <span className="card-tag">{project.tech}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Progress dots */}
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