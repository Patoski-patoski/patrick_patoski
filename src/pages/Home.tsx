"use client";
import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import { getYearsOfExperience } from "../utils/experience";
import { useDocumentTitle } from "../utils/useDocumentTitle";
import { projectsData } from "../data/projectsData";

const Home = () => {
  useDocumentTitle("Home");

  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const yearsOfExperience = useMemo(() => getYearsOfExperience(), []);

  const taglines = useMemo(
    () => [
      "Shipping Anchor PDAs & SOL Escrow Vaults",
      "High-Throughput NestJS Microservices & IoT Ingestion",
      "Autonomous AI Oracles & x402 Micropayments",
      "Systems Programming in Rust, Python, and C",
      "Zero-Downtime Deployments & Sub-Block Indexers",
    ],
    []
  );

  const featuredProjects = useMemo(
    () => projectsData.filter((p) => p.featured).slice(0, 3),
    []
  );

  useEffect(() => {
    let currentIndex = 0;
    const currentText = taglines[currentTextIndex];

    const typingInterval: ReturnType<typeof setInterval> = setInterval(() => {
      if (currentIndex < currentText.length) {
        setTypedText(currentText.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);

        const pauseTimeout = setTimeout(() => {
          setShowCursor(false);
          const switchTimeout = setTimeout(() => {
            currentIndex = 0;
            setCurrentTextIndex((prev) => (prev + 1) % taglines.length);
            setShowCursor(true);
          }, 250);

          return () => clearTimeout(switchTimeout);
        }, 2200);

        return () => clearTimeout(pauseTimeout);
      }
    }, 45);

    return () => {
      clearInterval(typingInterval);
    };
  }, [currentTextIndex, taglines]);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-availability">
          <span className="pulse-dot"></span>
          <span>Available for senior roles & high-impact contracts</span>
        </div>

        <h1 className="hero-name">Patrick Okafor</h1>
        <p className="hero-role">Lead Backend & Solana Smart Contract Engineer</p>

        <div className="hero-typing-box" aria-live="polite">
          <span className="typing-prompt">$&nbsp;</span>
          <span className="typed-text">{typedText}</span>
          {showCursor && <span className="cursor">_</span>}
        </div>

        <p className="hero-summary">
          Architecting non-custodial Solana protocols, mission-critical NestJS/Bun microservices,
          and real-time IoT platforms with {yearsOfExperience}+ years of production delivery.
        </p>

        <div className="hero-metrics">
          <div className="metric-item">
            <span className="metric-number">{yearsOfExperience}+</span>
            <span className="metric-label">Years Production</span>
          </div>
          <div className="metric-item">
            <span className="metric-number">14ms→0.88ms</span>
            <span className="metric-label">RPC Optimization</span>
          </div>
          <div className="metric-item">
            <span className="metric-number">&lt;50ms</span>
            <span className="metric-label">IoT Telemetry Ingestion</span>
          </div>
          <div className="metric-item">
            <span className="metric-number">95%+</span>
            <span className="metric-label">Test Coverage</span>
          </div>
        </div>

        <div className="hero-buttons">
          <Link to="/projects" className="hero-button primary">
            Explore Work →
          </Link>
          <Link to="/contact" className="hero-button secondary">
            Get in Touch
          </Link>
          <a
            href="/Patrick_Okafor_Resume.pdf"
            download="Patrick_Okafor_Resume.pdf"
            className="hero-button outline"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* Featured Projects Highlight */}
      <section className="featured-section">
        <div className="section-header">
          <div>
            <h2 className="section-title">Featured Protocols & Systems</h2>
            <p className="section-subtitle">Highlights from recent engineering deployments</p>
          </div>
          <Link to="/projects" className="view-all-link">
            View All Projects →
          </Link>
        </div>

        <div className="featured-grid">
          {featuredProjects.map((project) => (
            <div key={project.id} className="featured-card">
              <div className="featured-card-image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <span className="featured-badge">{project.status || "Production"}</span>
              </div>
              <div className="featured-card-content">
                <div className="featured-card-header">
                  <h3 className="featured-title">{project.title}</h3>
                  {project.metric && (
                    <span className="featured-metric">{project.metric}</span>
                  )}
                </div>
                <p className="featured-description">{project.description}</p>
                <div className="featured-tags">
                  {project.technologies.slice(0, 5).map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="featured-links">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-btn primary"
                    >
                      Live Protocol ↗
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-btn secondary"
                    >
                      GitHub ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="services-section">
        <h2 className="services-title">Core Capabilities</h2>
        <h3 className="services-subtitle">What I Bring to Engineering Teams</h3>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z"></path>
              </svg>
            </div>
            <h3 className="service-title">Blockchain & Solana Engineering</h3>
            <p className="service-description">
              Solana-native development with Anchor and Rust — PDAs, non-custodial copy-vaults,
              SOL escrow state machines, SPL flows, and sub-block Helius indexers.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                <rect x="9" y="9" width="6" height="6"></rect>
                <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3"></path>
              </svg>
            </div>
            <h3 className="service-title">Autonomous AI Agents & Oracles</h3>
            <p className="service-description">
              LLM-powered risk synthesis, Mastra multimodal agents, on-chain trading bots,
              and HTTP 402 machine-to-machine micropayment protocols via Moove.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <h3 className="service-title">Backend & Microservices</h3>
            <p className="service-description">
              Resilient APIs with NestJS, Bun, Node.js, and Python. Strict TypeBox validation,
              custom domain exceptions, clean hexagonal architecture, and 95%+ test coverage.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
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
            </div>
            <h3 className="service-title">On-Chain Graph & Real-Time Data</h3>
            <p className="service-description">
              CognoDB openCypher graph queries surfacing wash-trading rings, Sybil clusters,
              and peeling chains. Real-time DEX ingestion with PostgreSQL/Prisma caching.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M2 12h20"></path>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
            <h3 className="service-title">Realtime IoT & Ingestion</h3>
            <p className="service-description">
              AWS IoT Core mutual TLS telemetry at &lt;50ms latency, Socket.IO emergency
              broadcast engines, room state machines (FSM), and multi-tier RBAC.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
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
            </div>
            <h3 className="service-title">DevOps & Cloud Reliability</h3>
            <p className="service-description">
              Zero-downtime deployment pipelines with Docker, GitHub Actions, AWS ECS Fargate,
              Redis caching, and strict multi-stage lint/test verification.
            </p>
          </div>
        </div>
      </section>

      {/* Business Strip */}
      <section className="business-section">
        <h2 className="business-tag">Direct Consulting & Builds</h2>
        <h3 className="business-headline">Need a Web App or Backend Built Fast?</h3>
        <p className="business-description">
          Whether you need a high-performance web platform, on-chain integration, or automated
          APIs, I deliver reliable, production-tested software with quick turnaround and zero jargon.
        </p>
        <div className="business-buttons">
          <a
            href="https://wa.me/2348153551975?text=Hi%20Patrick%2C%20I%20need%20a%20website%20or%20backend%20built."
            className="hero-button primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp ↗
          </a>
          <Link to="/contact" className="hero-button secondary">
            Send Message
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
