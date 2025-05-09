"use client";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const texts = [
    "I'm Patrick Okafor, a software engineer with over 3 years of experience building secure and scalable software solutions.",
    "I transform ideas and MVPs into full-scale applications using modern tools such as Python, TypeScript, and Rust.",
    "I continuously invest in expanding my knowledge to stay ahead in the fast-evolving technology landscape.",
    "I specialize in delivering high-quality software that meets real-world needs with precision and efficiency.",
  ];

  useEffect(() => {
    let typingInterval: NodeJS.Timeout;
    let currentIndex = 0;

    const typeText = () => {
      const currentText = texts[currentTextIndex];

      typingInterval = setInterval(() => {
        if (currentIndex < currentText.length) {
          setTypedText(currentText.substring(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typingInterval);

          // Wait 3 seconds before transitioning to the next text
          setTimeout(() => {
            setShowCursor(false);

            setTimeout(() => {
              currentIndex = 0;
              setCurrentTextIndex((prev) => (prev + 1) % texts.length);
              setShowCursor(true);
            }, 200);
          }, 3000);
        }
      }, 100);
    };

    typeText();

    return () => {
      clearInterval(typingInterval);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[currentTextIndex]);

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-title">
          <span className="typed-text">{typedText}</span>
          {showCursor && <span className="cursor">_</span>}
        </h1>
        <p className="hero-subtitle">
          Software Engineer & Blockchain Enthusiast
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
        <h2 className="services-title">Areas of Expertise</h2>
        <h3 className="services-subtitle">What I Offer</h3>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <i className="code-icon">{"</>"}</i>
            </div>
            <h3 className="service-title">Backend Engineering</h3>
            <p className="service-description">
              I design and build robust, scalable APIs and backend systems using
              Flask, Django, Express, Node.js, MongoDB, and Redis.
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
            <h3 className="service-title">Database Design & Management</h3>
            <p className="service-description">
              I manage and optimize relational and NoSQL databases to ensure
              data integrity, performance, and scalability.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="api-icon">API</i>
            </div>
            <h3 className="service-title">API Integration</h3>
            <p className="service-description">
              I integrate third-party services and APIs to extend system
              functionality and enhance interoperability.
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
              I build and deploy microservice-based systems that emphasize
              modularity, scalability, and ease of maintenance.
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
            <h3 className="service-title">System Architecture</h3>
            <p className="service-description">
              I design high-performance systems with support for scaling, load
              balancing, caching, and fault tolerance.
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
            <h3 className="service-title">DevOps & Automation</h3>
            <p className="service-description">
              I streamline development workflows through CI/CD pipelines and
              automation tools like Docker, Kubernetes, and GitHub Actions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
