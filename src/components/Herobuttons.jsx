import { ExpandingCircleButton } from "./ExpandingCircleButton.jsx";


// const buttonStyles = `
//   .hero-btn {
//     align-items: center;
//     justify-content: center;
//     gap: 8px;
//     width: 140px;
//     height: 44px;
//     border-radius: 10px;
//     font-family: 'Georgia', serif;
//     font-size: 0.72rem;
//     font-weight: 700;
//     letter-spacing: 0.18em;
//     text-transform: uppercase;
//     cursor: pointer;
//     border: none;
//     text-decoration: none;
//     transition: background 0.25s, color 0.25s, gap 0.25s, transform 0.18s;
//   }

//   /* Resume — filled red */
//   .hero-btn--resume {
//     background-color: #dc2626;
//     color: #ffefd5;
//   }

//   .hero-btn--resume:hover {
//     background-color: #ffefd5;
//     color: #0f0e0e;
//     gap: 12px;
//   }

//   /* Contact — outlined */
//   .hero-btn--contact {
//     background-color: transparent;
//     color: #ffefd5;
//     outline: 1px solid #ffefd530;
//   }

//   .hero-btn--contact:hover {
//     background-color: #dc2626;
//     color: #ffefd5;
//     outline-color: #dc2626;
//     gap: 12px;
//   }

//   .hero-btn:active {
//     transform: translateY(1px);
//   }

//   .hero-btn svg {
//     width: 14px;
//     height: 14px;
//     flex-shrink: 0;
//     stroke: currentColor;
//     fill: none;
//     transition: transform 0.25s;
//   }

//   .hero-btn--resume:hover svg {
//     transform: translateY(2px);
//   }

//   .hero-btn--contact:hover svg {
//     transform: translateX(2px);
//   }
// `;

const downloadIcon = (
  <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2.5">
    <path d="M12 3v13M7 11l5 5 5-5M4 20h16" />
  </svg>
);
const mailIcon = (
  <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2.5">
    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const Buttons = () => (
  <>
    {/* <style>{buttonStyles}</style> */}

    <div className="flex items-center gap-4 w-full">

      <ExpandingCircleButton
      text="Resume"
      href="/public/Satpal_Sharma_resume.pdf"
      download={true}
      icon={downloadIcon}
      type="link"
    />

      <ExpandingCircleButton
      text="Contact"
      href="mailto:example@email.com"
      icon={mailIcon}
      type="link"
    />

    </div>
  </>
);

export default Buttons;