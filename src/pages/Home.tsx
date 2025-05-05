"use client"
// src
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "../styles/Home.css"

const Home = () => {
  const [typedText, setTypedText] = useState("")
  const fullText = "Welcome to my portfolio website."

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText((prev) => prev + fullText[i])
        i++
      } else {
        clearInterval(typingInterval)

        setTimeout(() => {
          setTypedText("")
          i = 0;
        }, 1000)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-title">
          <span className="typed-text">{typedText}</span>
          <span className="cursor">_</span>
        </h1>
        <p className="hero-subtitle">
          Software developer & Blockchain Enthusiast
        </p>
        <div className="hero-buttons">
          <Link to="/projects" className="hero-button primary">
            View Projects
          </Link>
          <Link to="/contact" className="hero-button secondary">
            Contact Me
          </Link>
        </div>
      </div>

      <div className="services-section">
        <h2 className="services-title">My expertise</h2>
        <h3 className="services-subtitle">Services I offer</h3>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <i className="code-icon">{"</>"}</i>
            </div>
            <h3 className="service-title">Backend Development</h3>
            <p className="service-description">
              I build robust, scalable APIs and systems using Flask, Django,
              Express, Node, MongoDB and Redis, ensuring efficient and secure
              server-side functionality.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="database-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                </svg>
              </i>
            </div>
            <h3 className="service-title">Database Management</h3>
            <p className="service-description">
              I manage, normalize and optimize databases, ensuring data integrity,
              scalability, and high performance using SQL and NoSQL solutions.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="api-icon">API</i>
            </div>
            <h3 className="service-title">Integration Services</h3>
            <p className="service-description">
              I connect applications with third-party APIs and services,
              enabling interoperability and extending functionality through
              seamless integration.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="microservices-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
              </i>
            </div>
            <h3 className="service-title">Microservices Architecture</h3>
            <p className="service-description">
              I develop and deploy microservices, ensuring modularity,
              scalability, and efficient system communication.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="system-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
              </i>
            </div>
            <h3 className="service-title">Scalable System Design</h3>
            <p className="service-description">
              I design backend architectures to handle growing user demands with
              load balancing, caching, and containerization.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="devops-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="6" y1="3" x2="6" y2="15"></line>
                  <circle cx="18" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M18 9a9 9 0 0 1-9 9"></path>
                </svg>
              </i>
            </div>
            <h3 className="service-title">DevOps</h3>
            <p className="service-description">
              I optimize development and deployment with CI/CD pipelines,
              automation, and tools like Docker, Kubernetes, and Github Actions for
              seamless software delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home
