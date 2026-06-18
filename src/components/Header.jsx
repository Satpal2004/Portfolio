import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const toggleRef = useRef(null);

  const closeMenu = () => {
    setIsOpen(false);
    setTimeout(() => {
      AOS.refresh();
    }, 50);
  };
  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!isOpen) return;

      if (
        navRef.current?.contains(e.target) ||
        toggleRef.current?.contains(e.target)
      ) {
        return;
      }

      closeMenu();
      
    };

    // Handle Escape key to close menu
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeMenu();
    };

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Handle body scroll lock when menu is open
  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;

    if (isOpen) {
      body.style.overflow = "hidden";
      html.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
      html.style.overflow = "";
    }

    return () => {
      body.style.overflow = "";
      html.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <style>{`
        :root {
          --color-obsidian: #0f172a;
          --color-red-accent: #991b1b;
          --color-papayawhip: #ffefd5;
        }

        .menu-toggle {
          background: none;
          border: none;
          cursor: pointer;
          padding: 12px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 6px;
          width: 48px;
          height: 48px;
          position: fixed;
          top: 10px;
          right: 20px;
          z-index: 9999;
        }

        .menu-toggle span {
          width: 30px;
          height: 3px;
          background-color: var(--color-papayawhip);
          border-radius: 2px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          display: block;
        }

        /* Hamburger to X animation */
        .menu-toggle.active span:nth-child(1) {
          transform: rotate(45deg) translate(7px, 8px);
        }

        .menu-toggle.active span:nth-child(2) {
          opacity: 0;
          transform: translateX(-10px);
        }

        .menu-toggle.active span:nth-child(3) {
          transform: rotate(-45deg) translate(4px, -6px);
        }

        /* Menu container */
        .navbar-menu {
          position: fixed;
          top: 0;
          right: 0;
          height: 100vh;
          width: 80vw;
          max-width: 90%;
          background-color: var(--color-obsidian);
          z-index: 9998;
          transform: translateX(100%);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: -4px 0 20px rgba(0, 0, 0, 0.5);
        }

        .navbar-menu.open {
          transform: translateX(0);
        }

        /* Menu header */
        .navbar-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px;
          border-bottom: 1px solid rgba(255, 239, 213, 0.1);
          flex-shrink: 0;
        }

        .navbar-header-title {
          font-size: 18px;
          font-weight: 600;
          color: var(--color-papayawhip);
          letter-spacing: 0.5px;
        }

        .navbar-close-btn {
          background: none;
          border: none;
          color: var(--color-papayawhip);
          font-size: 32px;
          cursor: pointer;
          padding: 4px 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          line-height: 1;
        }

        .navbar-close-btn:hover {
          color: var(--color-red-accent);
          transform: scale(1.1);
        }

        /* Menu content */
        .navbar-links {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: 32px 24px;
          overflow-y: auto;
          flex: 1;
        }

        .navbar-links::-webkit-scrollbar {
          width: 6px;
        }

        .navbar-links::-webkit-scrollbar-track {
          background: rgba(255, 239, 213, 0.05);
        }

        .navbar-links::-webkit-scrollbar-thumb {
          background: rgba(255, 239, 213, 0.2);
          border-radius: 3px;
        }

        .navbar-links::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 239, 213, 0.3);
        }

        .navbar-link {
          color: var(--color-papayawhip);
          text-decoration: none;
          font-size: 18px;
          font-weight: 500;
          transition: all 0.3s ease;
          padding: 12px 16px;
          margin: 0 -16px;
          border-radius: 8px;
          position: relative;
        }

        .navbar-link:hover {
          color: var(--color-red-accent);
          background-color: rgba(153, 27, 27, 0.1);
          padding-left: 20px;
        }

        .navbar-link::before {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          height: 2px;
          width: 0;
          background-color: var(--color-red-accent);
          transition: width 0.3s ease;
        }

        .navbar-link:hover::before {
          width: 16px;
        }

        /* Responsive: Hide on larger screens */
        @media (min-width: 768px) {
          .menu-toggle,
          .navbar-menu {
            display: none;
          }
        }
      `}</style>

      {/* Menu Toggle Button */}
      <button
        ref={toggleRef}
        onClick={toggleMenu}
        className={`menu-toggle ${isOpen ? "active" : ""}`}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        aria-controls="navbar-menu"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Navigation Menu */}
      <nav
        ref={navRef}
        id="navbar-menu"
        className={`navbar-menu ${isOpen ? "open" : ""}`}
        role="navigation"
      >
        {/* Menu Header */}
        <div className="navbar-header">
          <span className="navbar-header-title">Navigation</span>
          <button
            type="button"
            onClick={closeMenu}
            className="navbar-close-btn"
            aria-label="Close navigation menu"
          >
            {/* ✕ */}
          </button>
        </div>

        {/* Menu Links */}
        <div className="navbar-links">
          <a href="#about" onClick={closeMenu} className="navbar-link">
            Home
          </a>
          <a href="#projects" onClick={closeMenu} className="navbar-link">
            Projects
          </a>
          <a href="#education" onClick={closeMenu} className="navbar-link">
            Education
          </a>
          <a href="#contact" onClick={closeMenu} className="navbar-link">
            Contact
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;