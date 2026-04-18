import React from 'react'

const Skills = () => {
    return (
        <section className="skills" id="skills">
            <h2>Skills</h2>
            <div className="flex md:flex-row flex-col gap-2 md:justify-around justify-center items-center h-full ">

                <div className="lang">
                    <div className="lang-skill"><img loading="lazy" src="/media/program.png" alt="programming" /></div>
                    <div className="lang-item" style={{ "--i": 0 }}><img loading="lazy" src="/media/cpp.png" alt="cpp" /></div>
                    <div className="lang-item" style={{ "--i": 1 }}><img loading="lazy" src="/media/c.png" alt="c" /></div>
                    <div className="lang-item" style={{ "--i": 2 }}><img loading="lazy" src="/media/java.png" alt="java" /></div>
                    <div className="lang-item" style={{
                        "--i": 3
                    }}><img loading="lazy" src="/media/python.png" alt="python" /></div>
                </div>

                <div className="lang">
                    <div className="lang-skill"><img src="/media/frontend.png" alt="frontend" /></div>
                    <div className="lang-item" style={{ "--i": 0 }}><img src="/media/html.png" alt="html" /></div>
                    <div className="lang-item" style={{ "--i": 1 }}><img src="/media/css.png" alt="css" /></div>
                    <div className="lang-item" style={{ "--i": 2 }}><img src="/media/js.png" alt="js" /></div>
                    <div className="lang-item" style={{ "--i": 3 }}><img src="/media/react.png" alt="react" /></div>
                    <div className="lang-item" style={{ "--i": 4 }}><img src="/media/tail.png" alt="tailwind" /></div>
                </div>

                <div className="lang">
                    <div className="lang-skill"><img src="/media/backend.png" alt="backend" /></div>
                    <div className="lang-item" style={{ "--i": 0 }}><img src="/media/django.png" alt="django" /></div>
                    <div className="lang-item" style={{ "--i": 1 }}><img src="/media/asp.png" alt="asp.net" /></div>
                    <div className="lang-item" style={{ "--i": 2 }}><img src="/media/php.png" alt="php" /></div>
                </div>

                <div className="lang">
                    <div className="lang-skill"><img src="/media/tools.png" alt="tools" /></div>
                    <div className="lang-item" style={{ "--i": 0 }}><img src="/media/vscode.png" alt="vscode" /></div>
                    <div className="lang-item" style={{ "--i": 1 }}><img src="/media/git.png" alt="git" /></div>
                </div>
            </div>
        </section>
    )
}

export default Skills