import React from 'react';


const Footer = () => {
  return (
    <>
      <footer className="footer-root">
        <div className="footer-watermark">SATPAL</div>

        <div className="footer-container">
          <div className="footer-grid">

            {/* ── Brand ── */}
            <div>
              <a href="#" className="brand-name">
                Satpal Sharma <span className="brand-dot">.</span>
              </a>
              <span className="brand-tagline">Frontend Engineer</span>

              <p className="brand-description">
                Crafting immersive digital experiences through clean code and
                thoughtful design. Focused on building scalable frontend
                architectures and pixel-perfect UIs.
              </p>

              <hr className="brand-divider" />

              <div className="social-row">
                {[
                  {
                    name: 'LinkedIn',
                    path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
                    href: 'https://www.linkedin.com/in/satpal-sharma-362587281/',
                  },
                  {
                    name: 'GitHub',
                    path: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
                    href: 'https://github.com/Satpal2004'
                  },
                  {
                    name: 'Twitter',
                    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
                    href: '#'
                  },
                ].map((s) => (
                  <a key={s.name} href={s.href} target="_blank" className="social-link">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d={s.path} clipRule="evenodd" />
                    </svg>
                    {s.name}
                  </a>
                ))}
              </div>
            </div>

            {/* ── Navigation ── */}
            <div className="nav-section">
              <h4>Navigation</h4>
              <ul className="nav-list">
                {[
                  { label: 'Selected Work', href: '#projects' },
                  { label: 'About Me', href: '#about' },
                  { label: 'Skills', href: '#skills' },
                  { label: 'Contact', href: '#contact' },
                ].map((item) => (
                  <li key={item.href}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Get In Touch ── */}
            <div className="contact-section">
              <h4>Get In Touch</h4>
              <div className="contact-card">
                <div className="contact-badge">
                  <span className="dot" />
                  Available for work
                </div>
                <p>
                  Currently open to new opportunities. Whether you have a
                  question or just want to say hi, I'll get back to you!
                </p>
                <a href="mailto:satpal9334236@gmail.com" className="cta-link">
                  Say Hello
                  <svg viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>

          </div>

          <div className="w-ful md:h-55 h-15 mt-5">
            <h1 className='footerBigText text-center uppercase lg:text-[175px] md:text-[100px] sm:text-[80px] text-5xl font-[moonerRegular]'>Developer</h1>
          </div>
          {/* ── Bottom Bar ── */}
          <div className="footer-bottom md:mt-10 mt-5">
            <p className="footer-copy">
              &copy; 2026 <strong>Satpal Sharma</strong>. Designed &amp; Built
              with passion.
            </p>
            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Styleguide</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;