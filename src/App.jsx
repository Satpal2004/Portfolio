import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './components/Home.jsx'
import ProjectPage from './components/ProjectPage.jsx'
import Contact from './components/Contact.jsx'
import NavBar from './components/NavBar.jsx'
import Skills from './components/Skills.jsx'
import { AnimatePresence, motion } from 'motion/react'
import './index.css'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

const transitionStyles = `
.transition-container {
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  pointer-events: none;
  z-index: 100;
}

.transition-container div {
  position: relative;
  height: 100%;
  width: 100%;
  background: #F8FAFC;
}

.background-overlay {
  height: 100%;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  background: black;
  z-index: 99;
}
`

const noOfColumns = 5

const columnVariants = {
  initial: { top: 0 },
  enter: (i) => ({
    top: '100%',
    transition: {
      duration: 0.4,
      delay: 0.05 * i,
    },
    transitionEnd: {
      height: 0,
      top: 0,
    },
  }),
  exit: (i) => ({
    height: '100%',
    transition: {
      duration: 0.4,
      delay: 0.05 * i,
    },
  }),
}

const overlayVariants = {
  initial: { opacity: 0.5 },
  enter: { opacity: 0 },
  exit: { opacity: 0.5 },
}

// ─── Inner layout: needs useLocation, so must live inside <BrowserRouter> ───

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <>
      {/* Overlay + columns re-animate on every location change via the key */}
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial="initial"
          animate="enter"
          exit="exit"
          variants={overlayVariants}
          className="background-overlay"
        />
      </AnimatePresence>

      <div className="transition-container">
        <AnimatePresence mode="wait">
          {Array.from({ length: noOfColumns }, (_, i) => (
            <motion.div
              key={`${location.pathname}-col-${i}`}
              custom={noOfColumns - i}
              initial="initial"
              animate="enter"
              exit="exit"
              variants={columnVariants}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Page content — keyed so AnimatePresence detects the swap */}
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.3, delay: 0.35 } }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/ProjectPage" element={<ProjectPage />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </>
  )
}

// ─── ScrollSmoother wrapper (plain div — no motion wrapper) ─────────────────

function SmoothedLayout() {
  const wrapperRef = useRef(null)

  useEffect(() => {
    if (!wrapperRef.current) return

    const smoother = ScrollSmoother.create({
      wrapper: wrapperRef.current,
      content: '.smooth-content',
      smooth: 1.5,
      smoothTouch: 0.1,
      effects: true,
      normalizeScroll: true,
    })

    window.scrollSmoother = smoother
    ScrollTrigger.refresh()

    return () => {
      smoother.kill()
      delete window.scrollSmoother
    }
  }, [])

  return (
    <>
      <NavBar />
      <div className="smooth-wrapper" ref={wrapperRef}>
        <div className="smooth-content">
          <style>{transitionStyles}</style>
          <AnimatedRoutes />
        </div>
      </div>
    </>
  )
}

// ─── Root ────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <BrowserRouter>
      <SmoothedLayout />
    </BrowserRouter>
  )
}