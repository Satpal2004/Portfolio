import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectsFolder from "./ProjectsFolder.jsx";
import Analysis from "./Analysis.jsx";

gsap.registerPlugin(ScrollTrigger);

// const projectsData = [
//     {
//         label: "01 — Design",
//         title: "Portfolio Dashboard",
//         desc: "A clean, animated personal portfolio with dark mode and smooth transitions.",
//         tech: "React · Framer Motion",
//         tiltIn: "rotate(-6deg) translateX(-40px)",
//         tiltRest: "rotate(-2deg)",
//         link: "https://github.com/Satpal2004/Portfolio"
//     },
//     {
//         label: "02 — Website",
//         title: "Festivana",
//         desc: "A Event Management Website for handling different events with clean UI.",
//         tech: "HTML, CSS, JS, Django, SQL",
//         tiltIn: "rotate(5deg) translateX(40px)",
//         tiltRest: "rotate(3deg)",
//         link: "https://github.com/Satpal2004/Festivana"
//     },
//     {
//         label: "03 — Tool",
//         title: "TO DO App",
//         desc: "A useful tool to help to manage the daily schedules and manages efciently.",
//         tech: "HTML, CSS, JS",
//         tiltIn: "rotate(-4deg) translateX(-30px)",
//         tiltRest: "rotate(-1.5deg)",
//         link: "https://github.com/Satpal2004/To-Do-App"
//     },
//     {
//         label: "04 — App",
//         title: "Music Player",
//         desc: "A Music listing app with clean UI and basic functionalities like pause, play, next, previous, volume control",
//         tech: "HTML, CSS, JS",
//         tiltIn: "rotate(6deg) translateX(35px)",
//         tiltRest: "rotate(2.5deg)",
//         link: "https://github.com/Satpal2004/Music-Player"
//     },
// ];

const ProjectsCards = () => {
    const sectionRef = useRef(null);
    const horizText1Ref = useRef(null);
    const horizText2Ref = useRef(null);
    const horizImgRef = useRef(null);
    const panelRef = useRef(null);

    useLayoutEffect(() => {
        if (!sectionRef.current || !horizText1Ref.current || !horizText2Ref.current) return;

        const ctx = gsap.context(() => {

            ScrollTrigger.create({
                trigger: panelRef.current,
                start: "top top",
                end: "+=300%",
                pin: true,
                anticipatePin: 1,
            });

            const mm = gsap.matchMedia();

            mm.add({
                isMobile: "(max-width: 768px)",
                isDesktop: "(min-width: 769px)",
            }, (context) => {

                const { isMobile } = context.conditions;

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: horizText1Ref.current,
                        scrub: 1,
                        markers: 0,
                        start: isMobile ? "top 85%" : "top 60%",
                        end: isMobile ? "top 30%" : "top 10%",
                        invalidateOnRefresh: true,
                    }
                });

                tl.to(horizText1Ref.current, {
                    x: -100,
                    ease: "none",
                })

                    .to(horizText2Ref.current, {
                        x: 100,
                        ease: "none",
                    }, "<");

                // });

                // mm.add({
                //     isMobile: "(max-width: 768px)",
                //     isDesktop: "(min-width: 769px)",
                // }, (context) => {

                //     const { isMobile } = context.conditions;

                const headings = gsap.utils.toArray(".textHead");
                const headingsDiv = gsap.utils.toArray(".textHeadDivs");

                headings.forEach((heading, index) => {
                    const currentDiv = headingsDiv[index]
                    gsap.set(heading, {
                        autoAlpha: 0,
                        y: 120,
                    });

                    gsap.to(heading, {
                        autoAlpha: 1,
                        y: 0,
                        ease: "none",

                        scrollTrigger: {
                            trigger: currentDiv,
                            scrub: true,
                            markers: 0,

                            start: isMobile
                                ? "top 95%"
                                : "top 70%",

                            end: isMobile
                                ? "top 65%"
                                : "top 50%",

                            invalidateOnRefresh: true,
                        },
                    });
                });
            });
        }, sectionRef.current);

        ScrollTrigger.refresh();

        return () => {
            ctx.revert();
        };

    }, []);

    return (
        <>
            <section ref={sectionRef} className="cards-section md:h-[358vh] h-[150vh] md:p-18.75 p-0! relative overflow-hidden shadow-[inset_0_-35px_70px_-10px_red]" id="projects">
                <div className="intro md:h-screen h-[50vh] cursor-default">

                    <div className="text text-black">
                        <div className="textHeadDivs overflow-hidden">
                            <h1 className="textHead xl:text-[6rem] md:text-[6rem] text-[3rem] xl:font-medium font-normal xl:leading-[1.35]"><span className="text-rose-700">C</span>rafting</h1>
                        </div>
                        <div className="textHeadDivs overflow-hidden">
                            <h1 className="textHead xl:text-[6rem] md:text-[6rem] text-[3rem] xl:font-medium font-normal xl:leading-[1.35]"><span className="text-rose-700">O</span>ptimized</h1>
                        </div>
                        <div className="textHeadDivs overflow-hidden">
                            <h1 className="textHead xl:text-[6rem] md:text-[6rem] text-[3rem] xl:font-medium font-normal xl:leading-[1.35]"><span className="text-rose-700">D</span>igital</h1>
                        </div>
                        <div className="textHeadDivs overflow-hidden">
                            <h1 className="textHead xl:text-[6rem] md:text-[6rem] text-[3rem] xl:font-medium font-normal xl:leading-[1.35]"><span className="text-rose-700">E</span>xperience</h1>
                        </div>
                    </div>

                </div>
                <div className="workSection md:h-screen h-[50vh] w-full overflow-hidden">
                    <div className="overline md:ml-52! sm:ml-28! ml-12!">My experience</div>
                    <div className="w-full h-full flex flex-col items-center justify-center cursor-default  overflow-hidden ">
                        <div className="bigWorkText flex justify-center items-center w-full h-full">
                            <span
                                className="workText hidden md:flex uppercase md:text-[345px] text-[150px] text-gray-300">w</span>
                            <ProjectsFolder />
                            <span
                                className="workText hidden md:flex uppercase md:text-[345px] text-[150px] text-gray-300">r</span>
                            <span
                                className="workText hidden md:flex uppercase md:text-[345px] text-[150px] text-gray-300">k</span>
                        </div>
                        <div className="w-full h-[15%] flex items-center justify-center">
                            <h3 className="text-center text-[20px]">
                                <span className="text-black">Interested ?</span> <span className="text-red-800">click on it to experience</span>
                            </h3>
                        </div>
                    </div>
                </div>


                <div ref={panelRef} className="flex flex-col justify-center items-center md:h-[158vh] h-[50vh] w-full overflow-hidden relative">

                    <h4 ref={horizText1Ref} className="absolute z-20 uppercase md:text-[150px] text-[55px] md:left-50 md:top-40 left-15 top-40 text-red-800">Immersive</h4>
                    <img ref={horizImgRef} className="drop-shadow-orange-400 absolute z-21 w-6xl h-auto bottom-0" src="/media/robotExtend.png" alt="Robo-image" />
                    <h4 ref={horizText2Ref} className="absolute z-22 uppercase md:text-[150px] text-[55px] md:right-40 right-5 md:top-120 top-70 text-red-800">Experience</h4>
                    <Analysis />

                </div>
                {/* <div className="scroll-progress">
                {projectsData.map((_, i) => (
                    <div
                        key={i}
                        ref={(el) => (dotsRef.current[i] = el)}
                        className="dot"
                    />
                ))}
            </div> */}
            </section>
        </>
    );
};

export default ProjectsCards;
