import { useEffect, useRef, useState } from "react";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navRef = useRef(null);
  const toggleRef = useRef(null);

  // Close menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Outside click + ESC key
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

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      {/* Toggle Button */}
      <button
        ref={toggleRef}
        onClick={() => setIsOpen((prev) => !prev)}
        className={`menu-toggle ${isOpen ? "active" : ""}`}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation */}
      <nav
        ref={navRef}
        className={isOpen ? "nav-visible" : ""}
      >
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </nav>
    </>
  );
};

export default NavMenu;