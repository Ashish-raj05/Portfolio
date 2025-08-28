
"use client"

import { useState } from "react"
import "./projects.css"
import project1 from "./image/project1.png"
import project2 from "./image/project2.png"
import project3 from "./image/project3.png"
import project0 from "./image/project0.png"
import project4 from "./image/project4.png"
import project5 from "./image/project5.png"

const Projects = () => {
  const [showFeatures, setShowFeatures] = useState({})
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
      {
      id: 1,
      title: "VehixaCars",
      description:
        "Developed a full-stack AI car discovery app with 92% image recognition accuracy, smart filters, EMI calculator",
      technologies: ["Next.JS","Tailwind","GeminiAI","Prisma","ShadcnUI"],
      image: project4,
      github: "https://github.com/Ashish-raj05/VehixaCars",
      demolink: "https://vehixa-cars.vercel.app/",
      features: [
        "AI-Powered Car Detection — 92% accurate image recognition",
        "Smart Filtering — 10+ filters to refine car searches based on user needs",
        "EMI Calculator",
        "Real-time Booking System",
        "Secure Auth with Clerk",
        "Admin Dashboard — Controls inventory, user accounts",
      ],
    }
    ,{
      id: 2,
      title: "VisualAI",
      description:
        "An AI image generator that turns text prompts into visuals using the FLUX.1-dev model, with a logo creation page, real-time previews, and a fast, responsive UI.",
      technologies: ["React", "Tailwind", "Hugging Face APIs"],
      image: project5,
      github: "https://github.com/Ashish-raj05/VisualAI",
      demolink: "https://visual-ai-two.vercel.app/",
      features: [
        "AI Image Generation",
        "Logo Generation Page",
        "FLUX Model Integration",
        "Loader Animation",
        "Live Preview & Fast UI",
      ],
    }
    ,{
      id: 3,
      title: "HostHive",
      description:
        "A comprehensive online listing website for accommodation details and pricing with user authentication and listing management.",
      technologies: ["JavaScript", "EJS", "MongoDB", "Express.js", "Node.js"],
      image: project0,
      github: "https://github.com/Ashish-raj05/HostHive",
      demolink: "https://github.com/Ashish-raj05/HostHive",
      features: [
        "User authentication and authorization",
        "Add, edit, and delete listings",
        "Responsive design for all devices",
        "Search and filter functionality",
      ],
    },
    {
      id: 4,
      title: "Weather Forecasting",
      description:
        "A modern weather application that provides accurate weather information for any city worldwide using real-time APIs.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Weather API"],
      image: project1,
      github: "https://github.com/Ashish-raj05/Weather_Info",
      demolink: "https://ashish-raj05.github.io/Weather_Info/",
      features: [
        "Real-time weather data",
        "City search functionality",
        "5-day weather forecast",
        "Beautiful animations and transitions",
      ],
    },
    {
      id: 5,
      title: "Amazon Clone",
      description:
        "A pixel-perfect clone of Amazon's homepage showcasing advanced CSS skills and responsive design principles.",
      technologies: ["HTML5", "CSS3", "Flexbox", "Grid"],
      image: project2,
      github: "https://github.com/Ashish-raj05/AmazonClone",
      demolink: "https://ashish-raj05.github.io/AmazonClone/",
      features: [
        "Pixel-perfect design recreation",
        "Fully responsive layout",
        "Advanced CSS techniques",
        "Cross-browser compatibility",
      ],
    },
    {
      id: 6,
      title: "Online Meal",
      description:
        "An elegant food ordering website with smooth navigation, attractive design, and user-friendly interface.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      image: project3,
      github: "https://github.com/Ashish-raj05/OnlineMeal",
      features: [
        "Smooth navigation between sections",
        "Attractive food gallery",
        "Contact and service sections",
        "Mobile-first responsive design",
      ],
    },
  ]

  const toggleFeatures = (projectId) => {
    setShowFeatures((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }))
  }

  const openModal = (project) => {
    setSelectedProject(project)
  }

  const closeModal = () => {
    setSelectedProject(null)
  }

  return (
    <section className="projects-section">
      <hr id="projects" />
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">A showcase of my recent work and personal projects</p>
        </div>

        {/* All Projects Grid - 2 per row, continuous flow */}
        <div className="all-projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card-item">
              <div className="project-image-wrapper">
                <img src={project.image || "/placeholder.svg"} alt={project.title} className="project-img-new" />
                <div className="project-overlay"></div>
              </div>

              <div className="project-info">
                <h3 className="project-name">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="tech-section">
                  <h4>Technologies:</h4>
                  <div className="tech-list">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-item">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="card-actions">
                  <div className="project-buttons">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                      <i className="fab fa-github"></i>
                      Code
                    </a>
                    <a href={project.demolink} className="demo-link">
                      <i className="fas fa-external-link-alt"></i>
                      Demo
                    </a>
                  </div>

                  {/* Key Features Button */}
                  <button className="key-features-btn" onClick={() => openModal(project)}>
                    <i className="fas fa-eye"></i>
                    Key Features
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              {/* Modal Header */}
              <div className="modal-header">
                <h3 className="modal-title">{selectedProject.title}</h3>
                <button className="close-btn" onClick={closeModal}>
                  <i className="fas fa-times"></i>
                </button>
              </div>

              {/* Modal Body */}
              <div className="modal-body">
                {/* Project Image */}
                <div className="modal-image-wrapper">
                  <img
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    className="modal-image"
                  />
                </div>

                {/* Description */}
                <div className="modal-section">
                  <h4>Description</h4>
                  <p>{selectedProject.description}</p>
                </div>

                {/* Technologies */}
                <div className="modal-section">
                  <h4>Technologies Used</h4>
                  <div className="tech-list">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="tech-item">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="modal-section">
                  <h4>Key Features</h4>
                  <ul className="features-list">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="feature-item">
                        <span className="feature-bullet"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="modal-actions">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-github-link"
                  >
                    <i className="fab fa-github"></i>
                    View Source Code
                  </a>
                  <a href="#" className="modal-demo-link">
                    <i className="fas fa-external-link-alt"></i>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects

