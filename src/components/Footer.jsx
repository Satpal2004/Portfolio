import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-grid grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 max-w-7xl mx-auto px-4 py-10 mb-10!">

                    <div className="md:col-span-12 lg:col-span-5 place-items-center">
                        <a href="#" className="footer-brand">
                            Satpal Sharma<span className="text-cyan-500">.</span>
                        </a>
                        <p className="footer-copy my-4!">
                            Crafting immersive digital experiences through clean code and thoughtful design. Focused on building
                            scalable frontend architectures and pixel-perfect UIs. Let's build something remarkable together.
                        </p>

                        <div className="footer-social-links flex space-x-5 mt-8!">
                            <a href="#"
                                className="text-gray-500 hover:text-cyan-400 transition-colors duration-300 transform hover:-translate-y-1 mb-4">
                                <span className="sr-only">LinkedIn</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd"
                                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                                        clipRule="evenodd" />
                                </svg>
                            </a>
                            <a href="#"
                                className="text-gray-500 hover:text-cyan-400 transition-colors duration-300 transform hover:-translate-y-1">
                                <span className="sr-only">GitHub</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd"
                                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                        clipRule="evenodd" />
                                </svg>
                            </a>
                            <a href="#"
                                className="text-gray-500 hover:text-cyan-400 transition-colors duration-300 transform hover:-translate-y-1">
                                <span className="sr-only">Twitter</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="md:col-span-4 lg:col-span-2 lg:col-start-7">
                        <h3 className="text-sm font-semibold text-white tracking-wider uppercase my-3.5!">Navigation</h3>
                        <ul className="footer-nav-list">
                            <li><a href="#projects"
                                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 block">Selected Work</a></li>
                            <li><a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 block">About
                                Me</a></li>
                            <li><a href="#skills"
                                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 block">Skills</a></li>
                            <li><a href="#contact"
                                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 block">Contact</a></li>
                        </ul>
                    </div>

                    <div className="md:col-span-8 lg:col-span-4">
                        <h3 className="text-sm font-semibold text-white tracking-wider uppercase footer-heading my-3.5!">Get In Touch</h3>
                        <p className="footer-copy text-sm my-4!">
                            Currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to
                            get back to you!
                        </p>
                        <a href="mailto:satpal9334236@gmail.com"
                            className="group relative inline-flex items-center justify-center px-8! py-3! font-medium text-white transition-all duration-300 bg-gray-800 rounded-3xl hover:bg-gray-700 overflow-hidden ring-1 ring-gray-700 hover:ring-cyan-500">
                            <span
                                className="absolute inset-0 w-full h-full rounded-3xl opacity-30 bg-linear-to-b from-transparent via-transparent to-cyan-500"></span>
                            <span className="relative flex items-center justify-center w-37.5 h-10 gap-2">
                                Say Hello
                                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none"
                                    stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3">
                                    </path>
                                </svg>
                            </span>
                        </a>
                    </div>

                </div>

                <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        &copy; 2026 Your Name. Designed & Built with passion.
                    </p>

                    <div className="flex space-x-6 text-sm">
                        <a href="#" className="text-gray-500 hover:text-white transition-colors duration-300">Privacy Policy</a>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors duration-300">Styleguide</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer