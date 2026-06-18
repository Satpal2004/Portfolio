import React from 'react'
import { Link } from 'react-router-dom'
import Skills from './Skills.jsx'
import Contact from './Contact.jsx'
import ProjectPage from './ProjectPage.jsx'
// import { div, style } from 'motion/react-client'
import logo from '/images/navlogo.png'

const navstyle = `.nav-links {
  position: relative;
  text-decoration: none;
  color: #fff;
}

.nav-links::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 50%;
  width: 0;
  height: 2px;
  background: #ffefd5;
  transform: translateX(-50%);
  transition: width 0.35s ease;
}

.nav-links:hover::after {
  width: 100%;
}`

const NavBar = () => {
  return (
    <div className='w-full h-auto fixed top-5 translate-[-50%, 50%] z-50'>
      <style>{navstyle}</style>
      <div className='navigationbar bg-white-200 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 border border-gray-100 xl:max-w-100 h-14 flex justify-center items-center rounded-4xl m-auto'>
        <div className="flex items-center justify-between md:w-75 w-45 gap-2">
          <img className='w-10 h-auto' src={logo} loading="lazy" alt="logo" />
          {/* <Herobuttons /> */}
          <Link className='nav-links text-red-700!' to='/'>home</Link>
          <Link className='nav-links text-red-700!' to='/ProjectPage'>Work</Link>
          <Link className='nav-links text-red-700!' to='/Contact'>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar