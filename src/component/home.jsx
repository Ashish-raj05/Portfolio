// import React from "react";
// import './home.css'
// import profile from './image/profile.png'
// import { useTypewriter, Cursor } from 'react-simple-typewriter'

// export default function Home() {
//     let [text] = useTypewriter({
//         words: ['Fullstack Developer', 'Coder'],
//         loop: {},
//         typeSpeed: 120,
//     });
//     return (
//         <>
//         <hr id="home"/>
//         <div className="profile" >
//             <div className="text">
//                 <h1>Hi, I'm Ashish Raj</h1>
//                 <p className="p1">I am a <span className="auto-type" >{text}</span>
//                     <span><Cursor /></span>
//                 </p>
//                 <p className="p2">I am a full stack developer with expertise in front-end and back-end technologies. Here you'll explore my experience as a developer.</p>
//             </div>
//             <div>
//             <img src={profile} alt="profile" className="image" />

//             </div>
           
//             <a href="#contact"><button className="rbtn">Let's Contact</button></a>
//         </div>
//         </>
//     )

// }

"use client"

import { useEffect, useState } from "react"
import "./home.css"
import profile from "./image/profile.png"

export default function Home() {
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const words = ["Fullstack Developer", "Coder", "Problem Solver", "Tech Enthusiast"]

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % words.length
      const fullText = words[i]

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1))

      setTypingSpeed(isDeleting ? 30 : 150)

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500)
      } else if (isDeleting && text === "") {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleType, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed, words])

  return (
    <>
      <hr id="home" />
      <div className="profile">
        <div className="text">
          <h1 className="main-title">
            Hi, I'm <span className="gradient-text">Ashish Raj</span>
          </h1>
          <p className="p1">
            I am a <span className="auto-type">{text}</span>
            <span className="cursor">|</span>
          </p>
          <p className="p2">
            I am a full stack developer with expertise in front-end and back-end technologies. Here you'll explore my
            experience as a developer and the projects I've built.
          </p>
          <div className="button-group">
            {/* <a href="#contact" className="btn-primary">
              Let's Connect
            </a> */}
            <a href="https://drive.google.com/file/d/1hEg3skso9PnuUwM-BzKtMGw8oM3o7Kr1/view" className="btn-outline">
              <i className="fa-solid fa-download"></i>
              View Resume
            </a>
          </div>
        </div>
        <div className="image-container">
          <div className="image-wrapper">
            <img src={profile || "/placeholder.svg"} alt="profile" className="image" />
          </div>
        </div>
        <a href="#contact" className="rbtn">
          Let's Contact
        </a>
      </div>
    </>
  )
}
