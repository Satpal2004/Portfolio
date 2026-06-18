import React, { useRef } from "react";

const baseStyles = `
.btn-expanding-circle {
  --mouse-x: 50%;
  --mouse-y: 50%;

  position: relative;
  overflow: hidden;
  border: 2px solid rgba(147, 112, 219, 0.5);
  border-radius: 12px;
  padding: 12px 28px;
  font-size: 16px;
  font-weight: 600;
  color: #f5f5f5;
  // color: #0f0e0e;
  background: #C62828;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: inset 0 0 20px rgba(147, 112, 219, 0.1);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-decoration: none;
  border: none;
}

.btn-expanding-circle:hover {
  // border-color: #a78bfa;
  // color: #0f0e0e !important;
  // box-shadow: inset 0 0 30px rgba(147, 112, 219, 0.2),
  //             0 0 30px rgba(147, 112, 219, 0.3);
}

.btn-expanding-circle:hover .btn-expanding-circle-text {
  color: red !important;
  mix-blend-mode: normal;
}

.btn-expanding-circle::before {
  content: "";
  position: absolute;
  left: var(--mouse-x);
  top: var(--mouse-y);
  width: 20px;
  height: 20px;
  // color: #0f0e0e;
  // background: radial-gradient(circle, #a78bfa 0%, #7c3aed 100%);
  background: #F8FAFC;
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0);
  pointer-events: none;
  transition: transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 0 40px rgba(147, 112, 219, 0.8);
}

.btn-expanding-circle:hover::before {
  transform: translate(-50%, -50%) scale(15);
  transition: transform 0.8s cubic-bezier(0.22, 0.61, 0.36, 1);
}

.btn-expanding-circle-text {
  position: relative;
  //  color: #0f0e0e;
  z-index: 10;
  mix-blend-mode: lighten;
}

.btn-expanding-circle svg {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  stroke: black;
  fill: none;
  position: relative;
  z-index: 10;
  transition: transform 0.25s;
}

.btn-expanding-circle:hover > span {
  color: red !important;
}

.btn-expanding-circle:hover svg {
  transform: translateY(2px);
  color: red !important;
  stroke: red !important;
}

.btn-expanding-circle:active {
  transform: translateY(1px);
}

.btn-container {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}
`;

/**
 * ExpandingCircleButton - A reusable button component with expanding circle hover effect
 * @param {Object} props
 * @param {string} props.text - Button text
 * @param {string} props.href - Link href (for <a> tag) or download path
 * @param {string} props.icon - SVG icon component or JSX
 * @param {boolean} props.download - If true, uses <a> with download attribute
 * @param {string} props.type - 'button' | 'link' (default: 'button')
 * @param {Function} props.onClick - Click handler for button type
 */
const ExpandingCircleButton = (props) => {
  const buttonRef = useRef(null);

  const updatePosition = (e) => {
    const button = buttonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    button.style.setProperty("--mouse-x", `${x}px`);
    button.style.setProperty("--mouse-y", `${y}px`);
  };

  const commonProps = {
    ref: buttonRef,
    onMouseMove: updatePosition,
    onMouseEnter: updatePosition,
    onMouseLeave: updatePosition,
    className: "btn-expanding-circle",
  };

  // Render as <a> tag if href is provided
  if (props.type === "link" || props.href) {
    return (
      <>
        <style>{baseStyles}</style>
        <a
          {...commonProps}
          href={props.href}
          download={props.download}
          target={props.target}
          rel={props.rel}
        >
          {props.icon && <span>{props.icon}</span>}
          <span className="btn-expanding-circle-text">{props.text}</span>
        </a>
      </>
    );
  }

  // Render as <button> tag
  return (
    <>
      <style>{baseStyles}</style>
      <button
        {...commonProps}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.icon && <span>{props.icon}</span>}
        <span className="btn-expanding-circle-text">{props.text}</span>
      </button>
    </>
  );
};

/**
 * ActionButtons - Container component with Resume and Contact buttons
 */
const ActionButtons = () => {
  const downloadIcon = (
    <svg
      viewBox="0 0 24 24"
      // stroke="currentColor"
      // fill="none"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3v13M7 11l5 5 5-5M4 20h16" />
    </svg>
  );

  const mailIcon = (
    <svg
      viewBox="0 0 24 24"
      // stroke="currentColor"
      // fill="none"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );

  return (
    <>
      <style>{baseStyles}</style>
      <div className="btn-container">
        {/* Resume Download Button */}
        <ExpandingCircleButton
          text="Resume"
          href="src/assets/Satpal_Sharma_resume.pdf"
          download={true}
          icon={downloadIcon}
          type="link"
        />

        {/* Contact/Mail Button */}
        <ExpandingCircleButton
          text="Mail Us"
          href="mailto:satpal9334236@gmail.com"
          icon={mailIcon}
          type="link"
        />
      </div>
    </>
  );
};

export { ExpandingCircleButton };
export default ActionButtons;