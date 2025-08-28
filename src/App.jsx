// import { useState } from 'react'
// import Navbar from './component/navbar'
// import Skills from './component/skills'
// import Home from './component/home'
// import Projects from './component/projects'
// import Footer from './component/footer'
// import Contact from './component/contact'

// import './App.css'
// // import Router from './component/router.jsx'

// function App() {
 

//   return (
//     <>
//       <Navbar/>
//       <Home />
//       <Skills />
//       <Projects />
//       <Contact/>
//       <Footer/>
//     </>
//   )
// }

// export default App
"use client"
import { useEffect } from 'react'
import Navbar from './component/navbar'
import Skills from './component/skills'
import Home from './component/home'
import Projects from './component/projects'
// import Footer from './component/footer'
import Contact from './component/contact'

// import { useEffect } from "react"
// import Navbar from "./components/navbar.jsx"
// import Home from "./components/home.jsx"
// import Skills from "./components/skills.jsx"
// import Projects from "./components/projects.jsx"
// import Contact from "./components/contact.jsx"
import "./App.css"

function App() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleSmoothScroll = (e) => {
      const target = e.target
      if (target.hash) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      }
    }

    document.addEventListener("click", handleSmoothScroll)
    return () => document.removeEventListener("click", handleSmoothScroll)
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App