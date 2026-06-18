import React from 'react'
import Contact from './Contact.jsx'
import About from './About.jsx'
import Skills from './Skills.jsx'
import EduTimeline from './EduTimeline.jsx'
import Projects from './ProjectsCards.jsx'

// import Achievement from './Achievement.jsx'

const Body = () => {
    
    const itemsData = [
        {
            title: "Matriculation",
            desc: "N.S.C High School (2021)",
            icon: "fas fa-school",
            side: "left",
        },
        {
            title: "Intermediate",
            desc: "Central Karimia High School (2023)",
            icon: "fas fa-book",
            side: "right",
        },
        {
            title: "BCA",
            desc: "Srinath University (2026)",
            icon: "fas fa-graduation-cap",
            side: "left",
        }
    ];

    return (
        <main id="home">
            <About />

            {/* <!-- SKILLS --> */}
            <Skills />

            {/* <!-- PROJECTS --> */}
            <Projects />

            <EduTimeline itemsData={itemsData}/>
            <Contact />
        </main>
    )
}

export default Body