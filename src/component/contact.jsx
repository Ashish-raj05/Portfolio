"use client"

import { useState } from "react"
import "./contact.css"

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const onSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(event.target)
    formData.append("access_key", "12be3c95-5bf3-49b3-83c0-afa30a07e1db")

    const object = Object.fromEntries(formData)
    const json = JSON.stringify(object)

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      })

      const result = await res.json()

      if (result.success) {
        setIsSubmitted(true)
        setTimeout(() => setIsSubmitted(false), 5000)
        event.target.reset()
      }
    } catch (error) {
      console.error("Error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-header">
            <h2 className="contact-title">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="contact-subtitle">
              Ready to work together? Let's discuss your project and bring your ideas to life.
            </p>
          </div>

          <div className="contact-details">
            <h3>Let's Connect</h3>
            <p className="contact-description">
              I'm always interested in new opportunities and exciting projects. Whether you have a question or just want
              to say hi, feel free to reach out!
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <p>ashishraj93865@gmail.com</p>
                </div>
              </div>

              <div className="contact-method">
                {/* <div className="contact-icon">
                  <i className="fa-solid fa-phone"></i>
                </div> */}
                {/* <div className="contact-text">
                  <h4>Phone</h4>
                  <p>+91 XXXXX XXXXX</p>
                </div> */}
              </div>

              <div className="contact-method">
                <div className="contact-icon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="contact-text">
                  <h4>Location</h4>
                  <p>India</p>
                </div>
              </div>
            </div>

            <div className="social-section">
              <h4>Follow Me</h4>
              <div className="social-links">
                <a href="https://github.com/Ashish-raj05" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/ashish-raj-482a47255/" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="https://www.instagram.com/ashishraj6219/?hl=en" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          {isSubmitted ? (
            <div className="success-message">
              <div className="success-icon">
                <i className="fa-solid fa-check-circle"></i>
              </div>
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. I'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="contact-form">
              <h2>Send Message</h2>

              <div className="form-row">
                <div className="input-box">
                  <input type="text" className="field" placeholder="Your Name" name="name" required />
                </div>
                <div className="input-box">
                  <input type="email" className="field" placeholder="Your Email" name="email" required />
                </div>
              </div>

              <div className="input-box">
                <input type="text" className="field" placeholder="Subject" name="subject" />
              </div>

              <div className="input-box">
                <textarea name="message" className="field mess" placeholder="Your Message" required></textarea>
              </div>

              <button type="submit" disabled={isSubmitting} className="submit-btn">
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-paper-plane"></i>
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact
