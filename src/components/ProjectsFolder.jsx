// import React, { useRef, useEffect } from 'react';
// import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import folder_fornt from '/images/folder-icon-front.png'
import folder_back from '/images/folder-icon-back.png'
import projects_folder from '/images/inner-cards.png'
import hover_icon from '/images/hover_icon_32.png'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useRef } from 'react';
import gsap from 'gsap';
import React from 'react';
import ProjectPage from './ProjectPage.jsx';

const folderStyle = `
  .folder-wrapper {
            perspective: 2000px;
            cursor: url("${hover_icon}") 16 16, auto;
            justify-content: center;
            align-items: flex-start;
            width: 25vw;
            height: 22vw;
            display: flex;
            position: relative;
            transform: perspective(2000px);
            max-width: 100%;
            transition-delay: 1.2s;
        }

        .front-folder {
            z-index: 24;
            pointer-events: none;
            transform-origin: 50% 100%;
            width: 100%;
            max-width: none;
            height: 18vw;
            transform-style: preserve-3d;
            position: absolute;
            bottom: 0;
            transform: rotateX(-20deg) rotateY(0) rotateZ(0);
            transition: transform 0.50s cubic-bezier(0.22, 1.8, 0.36, 1);
        }

        .projects-folder {
            z-index: 23;
            pointer-events: none;
            width: 98%;
            max-width: none;
            height:5.8vw;
            position: relative;
            top: 3.4vw;
            transition: transform 0.1s ease-out;
        }

        .back-folder {
            z-index: 22;
            pointer-events: none;
            width: 100%;
            max-width: none;
            height: 23vw;
            position: absolute;
            bottom: 0;
        }

        folder-wrapper img {
            max-width: 100%;
            vertical-align: middle;
            display: inline-block;
        }

        // .folder-wrapper:hover .front-folder {
        //     transform: rotateX(-32deg) scaleY(1.02);
        // }

        // .folder-wrapper:hover .projects-folder {
        //     transform: translate3d(0px, 2.5vw, 0px) scale(1, 1.8);
        // }
`;

const ProjectsFolder = () => {

  const folderFrontRef = useRef(null);
  const projectFolderRef = useRef(null);

  const handleMouseEnter = () => {
    const tl = gsap.timeline();

    tl.to(folderFrontRef.current, {
        rotateX: "-35deg",
        scaleY: 1.02,
        duration: 0.2,
        ease: "power3.out",
    })
    tl.to(folderFrontRef.current, {
        rotateX: "-32deg",
        // scaleY: 1.02,
        duration: 0.2,
        ease: "power3.out",
    },"<")

    .to(projectFolderRef.current, {
        y: "2.5vw",
        scaleX: 1,
        scaleY: 1.8,
        duration: 0.2,
        ease: "power3.out",
    }, "<");
};

const handleMouseLeave = () => {
    const tl = gsap.timeline({
      delay: 0.4,
    });

    tl.to(folderFrontRef.current,{
      rotateX: "-34deg",
      duration: 0.4,
      ease: "power3.out"
    })

    tl.to(folderFrontRef.current, {
        rotateX: "-20deg",
        scaleY: 1,
        duration: 0.4,
        ease: "power3.out",
    })

    .to(projectFolderRef.current, {
        y: "0vw",
        scaleX: 1,
        scaleY: 1,
        duration: 0.4,
        ease: "power3.out",
    }, "<");
};

// gsap.killTweensOf([
//     folderFrontRef.current,
//     projectFolderRef.current
// ]);


  return (
    <>
      <style>{folderStyle}</style>

      <Link to="/ProjectPage">
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="folder-wrapper">
          <img ref={folderFrontRef} className="front-folder" src={folder_fornt} alt="front-folder" />
          <img ref={projectFolderRef} src={projects_folder} alt="demo-folder" className="projects-folder" />
          <img src={folder_back} alt="back folder" className="back-folder" />
        </div>
      </Link>

    </>
  );
};

export default ProjectsFolder;