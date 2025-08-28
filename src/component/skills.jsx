"use client"

import { useEffect, useRef } from "react"
import "./skills.css"
import expressLogo from "./image/expressLogo.png"
import mongoLogo from "./image/mongoLogo.png"
import cppLogo from "./image/cppLogo.png"

export default function Skills() {
  const skillsRef = useRef(null)

  const skills = [
    { name: "React.js", icon: "fa-brands fa-react", level: 90 },
    { name: "Bootstrap", icon: "fa-brands fa-bootstrap", level: 85 },
    { name: "Node.js", icon: "fa-brands fa-node", level: 85 },
    { name: "Express.js", image: expressLogo, level: 85 },
    { name: "MongoDB", image: mongoLogo, level: 80 },
    { name: "JavaScript", icon: "fa-brands fa-js", level: 95 },
    { name: "SQL", icon: "fa-solid fa-database", level: 82 },
    { name: "CSS", icon: "fa-brands fa-css3-alt", level: 90 },
    { name: "HTML", icon: "fa-brands fa-html5", level: 95 },
    { name: "Git/GitHub", icon: "fa-brands fa-github", level: 88 },
    { name: "C++", image: cppLogo, level: 75 },
    // { name: "Python", icon: "fa-brands fa-python", level: 70 },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const skillCards = skillsRef.current?.querySelectorAll(".skill-card")
    skillCards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <hr id="skills" />
      <div className="center">
        <div className="heading">
          <span className="gradient-text">Skills</span>
        </div>
        <p className="skills-description">Technologies and tools I work with to bring ideas to life</p>
        <div className="skills" ref={skillsRef}>
          {skills.map((skill, index) => (
            <div key={skill.name} className="skill-card subSkill" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="skill-icon">
                {skill.icon ? (
                  <i className={skill.icon}></i>
                ) : (
                  <img src={skill.image || "/placeholder.svg"} alt={skill.name} />
                )}
              </div>
              <span className="skill-name">{skill.name}</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${skill.level}%` }}></div>
              </div>
              <span className="skill-level">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
