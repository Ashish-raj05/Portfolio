import { useState } from 'react'
import Navbar from './component/navbar'
import Skills from './component/skills'
import Home from './component/home'
import Projects from './component/projects'
import Footer from './component/footer'
import Contact from './component/contact'

import './App.css'
// import Router from './component/router.jsx'

function App() {
 

  return (
    <>
      <Navbar/>
      <Home />
      <Skills />
      <Projects />
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
