import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const contactStyles = `
  /* ── Root ── */
  .contact-section-panel {
    background-color: #0f0e0e;
    padding: 96px 24px 80px;
    // font-family: 'Georgia', serif;
    position: relative;
    overflow: hidden;
  }

  /* faint watermark letter */
  .contact-section-panel::before {
    content: 'CONTACT';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: clamp(4rem, 14vw, 11rem);
    font-weight: 900;
    letter-spacing: 0.1em;
    color: #ffefd504;
    pointer-events: none;
    user-select: none;
    white-space: nowrap;
    font-family: 'Georgia', serif;
  }

  .contact-wrapper {
    max-width: 1100px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  /* ── Section header ── */
  .contact-header {
    margin-bottom: 56px;
  }

  .contact-header .overline {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-size: 0.68rem;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    font-weight: 700;
    color: #dc2626;
    margin-bottom: 14px;
  }

  .contact-header .overline::before {
    content: '';
    display: inline-block;
    width: 32px;
    height: 1px;
    background-color: #dc2626;
  }

  .contact-header h2 {
    font-size: clamp(2rem, 5vw, 3.2rem);
    font-weight: 800;
    color: #ffefd5;
    line-height: 1.1;
    letter-spacing: -0.03em;
    margin: 0;
  }

  .contact-header h2 span {
    color: #dc2626;
  }

  /* ── Social strip ── */
  .social-strip {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 56px;
  }

  .social-pill {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 9px 18px;
    border: 1px solid #ffefd520;
    border-radius: 999px;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #ffefd5aa;
    text-decoration: none;
    background: #1a1818;
    transition: background 0.25s, color 0.25s, border-color 0.25s, transform 0.2s;
  }

  .social-pill svg {
    width: 14px;
    height: 14px;
    fill: currentColor;
    flex-shrink: 0;
  }

  .social-pill:hover {
    background-color: #dc2626;
    color: #ffefd5;
    border-color: #dc2626;
    transform: translateY(-2px);
  }

  /* ── Two-column layout ── */
  .contact-body {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
  }

  @media (min-width: 768px) {
    .contact-body {
      grid-template-columns: 1fr 1.6fr;
      gap: 48px;
      align-items: start;
    }
  }

  /* ── Left panel ── */
  .info-panel {
    background-color: #1a1818;
    border: 1px solid #ffefd512;
    border-radius: 10px;
    padding: 36px 28px;
  }

  .info-panel .panel-label {
    font-size: 0.65rem;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    font-weight: 700;
    color: #dc2626;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .info-panel .panel-label::after {
    content: '';
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, #dc2626, transparent);
  }

  .info-panel h3 {
    font-size: 1.5rem;
    font-weight: 800;
    color: #ffefd5;
    line-height: 1.3;
    letter-spacing: -0.02em;
    margin: 0 0 16px 0;
  }

  .info-panel p {
    font-size: 0.88rem;
    line-height: 1.85;
    color: #ffefd5aa;
    margin: 0 0 28px 0;
  }

  /* availability badge */
  .availability {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    background-color: #0f0e0e;
    border: 1px solid #ffefd515;
    border-radius: 6px;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #ffefd580;
  }

  .availability .pulse-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: #22c55e;
    animation: pulse-dot 2s ease-in-out infinite;
    flex-shrink: 0;
  }

  @keyframes pulse-dot {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.4; transform: scale(0.8); }
  }

  .info-divider {
    margin: 28px 0;
    height: 1px;
    background: linear-gradient(90deg, #dc2626 0%, transparent 100%);
    border: none;
  }

  .direct-email {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .direct-email span {
    font-size: 0.65rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    font-weight: 700;
    color: #dc2626;
  }

  .direct-email a {
    font-size: 0.85rem;
    color: #ffefd5cc;
    text-decoration: none;
    word-break: break-all;
    transition: color 0.2s;
  }

  .direct-email a:hover {
    color: #ffefd5;
  }

  /* ── Right panel – form ── */
  .form-panel {
    background-color: #1a1818;
    border: 1px solid #ffefd512;
    border-radius: 10px;
    padding: 36px 28px;
  }

  .form-panel .panel-label {
    font-size: 0.65rem;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    font-weight: 700;
    color: #dc2626;
    margin-bottom: 28px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .form-panel .panel-label::after {
    content: '';
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, #dc2626, transparent);
  }

  /* floating-label input field */
  .field {
    position: relative;
    margin-bottom: 28px;
  }

  .field input,
  .field textarea {
    width: 100%;
    background: transparent;
    border: none;
    border-bottom: 1px solid #ffefd525;
    padding: 12px 0 10px;
    font-size: 0.92rem;
    color: #ffefd5;
    font-family: 'Georgia', serif;
    outline: none;
    resize: none;
    transition: border-color 0.25s;
    box-sizing: border-box;
  }

  .field textarea {
    min-height: 96px;
  }

  .field input:focus,
  .field textarea:focus {
    border-bottom-color: #dc2626;
  }

  /* underline animation bar */
  .field .bar {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background-color: #dc2626;
    transition: width 0.3s ease;
    pointer-events: none;
  }

//   .field input:focus ~ .bar,
//   .field textarea:focus ~ .bar {
//     width: 100%;
//   }

  /* floating label */
  .field label {
    position: absolute;
    top: 12px;
    left: 0;
    font-size: 0.82rem;
    color: #ffefd550;
    letter-spacing: 0.06em;
    pointer-events: none;
    transition: top 0.22s, font-size 0.22s, color 0.22s;
  }

  .field input:focus + label,
  .field input:not(:placeholder-shown) + label,
  .field textarea:focus + label,
  .field textarea:not(:placeholder-shown) + label {
    top: -14px;
    font-size: 0.64rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #dc2626;
    font-weight: 700;
  }

  /* two-col row inside form */
  .field-row {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0;
  }

  @media (min-width: 520px) {
    .field-row {
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }
  }

  /* ── Submit button ── */
  .submit-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin-top: 8px;
    padding: 13px 32px;
    background-color: #dc2626;
    color: #ffefd5;
    border: none;
    border-radius: 4px;
    font-family: 'Georgia', serif;
    font-size: 0.82rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    cursor: pointer;
    transition: background 0.25s, color 0.25s, gap 0.25s, transform 0.2s;
  }

  .submit-btn svg {
    width: 14px;
    height: 14px;
    stroke: currentColor;
    fill: none;
    flex-shrink: 0;
    transition: transform 0.25s;
  }

  .submit-btn:hover {
    background-color: #ffefd5;
    color: #0f0e0e;
    gap: 14px;
  }

  .submit-btn:hover svg {
    transform: translateX(3px);
  }

  .submit-btn:active {
    transform: translateY(1px);
  }
`;

const socialLinks = [
  {
    name: 'Email',
    href: 'mailto:satpal9334236@gmail.com',
    path: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/Satpal2004',
    path: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/satpal-sharma-362587281/',
    path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
  },
  {
    name: 'Instagram',
    href: '#',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
  },
  {
    name: 'Twitter',
    href: '#',
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
];

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      offset: 100,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <>
      <style>{contactStyles}</style>

      <section className="contact-section-panel" id="contact">
        <div className="contact-wrapper">

          {/* ── Section header ── */}
          <div className="contact-header" data-aos="fade-up">
            <div className="overline">Let's talk</div>
            <h2>
              Have a project<br />in <span>mind?</span>
            </h2>
          </div>

          {/* ── Social strip ── */}
          <div className="social-strip" data-aos="fade-up" data-aos-delay="100">
            {socialLinks.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noreferrer" className="social-pill">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d={s.path} clipRule="evenodd" />
                </svg>
                {s.name}
              </a>
            ))}
          </div>

          {/* ── Body: info + form ── */}
          <div className="contact-body">

            {/* Left info panel */}
            <div className="info-panel" data-aos="fade-up" data-aos-delay="150">
              <div className="panel-label">Info</div>
              <h3>Get in touch with me</h3>
              <p>
                Currently open to new opportunities. Whether you have a project,
                a question, or just want to say hi — I'll do my best to get
                back to you!
              </p>
              <div className="availability">
                <span className="pulse-dot" />
                Available for work
              </div>
              <hr className="info-divider" />
              <div className="direct-email">
                <span>Direct Email</span>
                <a href="mailto:satpal9334236@gmail.com">satpal9334236@gmail .com</a>
              </div>
            </div>

            {/* Right form panel */}
            <div className="form-panel" data-aos="fade-up" data-aos-delay="200">
              <div className="panel-label">Send a Message</div>
              <form action="#" method="post" noValidate>

                <div className="field-row">
                  <div className="field">
                    <input
                      type="text"
                      id="username"
                      placeholder=" "
                      autoComplete="given-name"
                      required
                    />
                    <label htmlFor="username">Your Name</label>
                    <span className="bar" />
                  </div>

                  <div className="field">
                    <input
                      type="email"
                      id="email"
                      placeholder=" "
                      autoComplete="email"
                      required
                    />
                    <label htmlFor="email">Email Address</label>
                    <span className="bar" />
                  </div>
                </div>

                <div className="field">
                  <input
                    type="text"
                    id="subject"
                    placeholder=" "
                    required
                  />
                  <label htmlFor="subject">Subject</label>
                  <span className="bar" />
                </div>

                <div className="field">
                  <textarea
                    id="message"
                    placeholder=" "
                    required
                  />
                  <label htmlFor="message">Your Message</label>
                  <span className="bar" />
                </div>

                <button type="submit" className="submit-btn">
                  Send Message
                  <svg viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;