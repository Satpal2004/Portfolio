import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const toggleRef = useRef(null);

  const closeMenu = () => setIsOpen(false);

  // Close on outside click + ESC
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!isOpen) return;

      if (
        navRef.current?.contains(e.target) ||
        toggleRef.current?.contains(e.target)
      ) return;

      closeMenu();
    };

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

  // Prevent background scroll
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
  }, [isOpen]);

  return (
    <>
      {/* Toggle Button (ONLY MOBILE) */}
      <button
        ref={toggleRef}
        onClick={() => setIsOpen((prev) => !prev)}
        className={`md:hidden fixed top-5 right-5 z-50 menu-toggle ${
          isOpen ? "active" : ""
        }`}
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile Navigation */}
      <nav
        ref={navRef}
        className={`
          fixed top-0 left-0 w-full h-screen z-40
          bg-black/90 backdrop-blur-md
          flex flex-col items-center justify-center gap-8
          text-white text-xl
          transition-transform duration-500
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:hidden
        `}
      >
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#education" onClick={closeMenu}>Education</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </nav>
    </>
  );
};

export default Navbar;