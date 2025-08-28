"use client"

import { useState, useEffect } from "react"
import "./navbar.css"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Logo */}
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          Portfolio
        </a>

        {/* Desktop Navigation */}
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="#home" className="navbar-link" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li className="navbar-item">
            <a href="#skills" className="navbar-link" onClick={closeMenu}>
              Skills
            </a>
          </li>
          <li className="navbar-item">
            <a href="#projects" className="navbar-link" onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li className="navbar-item">
            <a href="#contact" className="navbar-link" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>

        {/* Social Links & CTA */}
        <div className="navbar-actions">
          <div className="social-links">
            <a href="https://github.com/Ashish-raj05" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/ashish-raj-482a47255/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://www.instagram.com/ashishraj6219/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <a href="#contact" className="cta-button" onClick={closeMenu}>
            Let's Connect
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="mobile-toggle" onClick={toggleMenu}>
          <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
        <ul className="mobile-nav-list">
          <li>
            <a href="#home" className="mobile-nav-link" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#skills" className="mobile-nav-link" onClick={closeMenu}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="mobile-nav-link" onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="mobile-nav-link" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>

        <div className="mobile-social">
          <a
            href="https://github.com/Ashish-raj05"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-social-link"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ashish-raj-482a47255/"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-social-link"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://www.instagram.com/ashishraj6219/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-social-link"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        <a href="#contact" className="mobile-cta" onClick={closeMenu}>
          Let's Connect
        </a>
      </div>
    </nav>
  )
}

export default Navbar
