import React from 'react'
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
    useEffect(() => {
        AOS.init({
            duration: 600,   // animation duration
            once: true,       // animate only once
            offset: 100,      // trigger point
            easing: "ease-in-out",
        });
    }, []);

    return (
        <section data-aos="fade-up" className="contact flex flex-col items-center justify-center" id="contact">
            <h2>Contact</h2>
            <div className="social-row flex justify-center items-center w-full h-20 mt-5">
                <div id="social-icons"
                    className="flex justify-evenly items-center w-full max-w-lg h-full border border-cyan-900 rounded-2xl">
                    <img loading="lazy" src="/media/gmail.jpg" alt="mail" title="Email" />
                    <img loading="lazy" src="/media/github.jpg" alt="github" title="GitHub" />
                    <img loading="lazy" src="/media/linkedin.png" alt="linkedin" title="LinkedIn" />
                    <img loading="lazy" src="/media/instagram.png" alt="instagram" title="Instagram" />
                    <img loading="lazy" src="/media/twitter.avif" alt="twitter" title="Twitter" />
                    {/* <!-- <img src="/media/whatsapp.jpg" alt="whatsapp"/> --> */}
                </div>
            </div>
            <form action="#" method="post">
                <div data-aos="fade-up" className="flex justify-center items-center w-xl h-97.5 border-red-700 mt-13!">

                    <div className="flex justify-center items-center bg-[#274d60] w-full h-full rounded-l-2xl text-[rgb(0,200,200)]">
                        Get in <br />touch <br />with me</div>

                    <div className="form_box flex flex-col align-middle gap-7 w-xl rounded-r-2xl">
                        <div className="input-field flex flex-col">
                            <input type="text" id="username" autoComplete="given-name" required />
                            <label htmlFor="username">Username</label>
                            <span></span>
                        </div>
                        <div className="input-field flex flex-col">
                            <input type="email" name="email" id="email" autoComplete="email" required />
                            <label htmlFor="email">Email</label>
                            <span></span>
                        </div>
                        <div className="input-field flex flex-col">
                            <textarea name="message" id="message" required></textarea>
                            <label htmlFor="message">Message</label>
                            <span></span>
                        </div>
                        <div className="submit flex justify-center items-center">
                            <button type="submit" className="submit-button">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default Contact