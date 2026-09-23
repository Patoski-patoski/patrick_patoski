"use client";
import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import { getYearsOfExperience } from "../utils/experience";

const Home = () => {
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const yearsOfExperience = useMemo(() => getYearsOfExperience(), []);

  const texts = useMemo(
    () => [
      `I'm Patrick Okafor — Software Engineer with ${yearsOfExperience}+ years shipping Zephyr copy-vaults, Okaform escrow surveys, and the Sentinel x402 risk oracle.`,
      "I build Anchor/Rust programs, NestJS backends, and React frontends — from PDA vaults to Helius indexers.",
      "I work at the AI × crypto edge — LLM risk synthesis, autonomous traders, and machine-to-machine payments.",
      "I turn MVPs into production systems — secure, scalable, and built for real users.",
    ],
    [yearsOfExperience]
  );

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
          Software Engineer • Solana Builder • AI Systems
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
              <i className="code-icon">
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
              </i>
            </div>
            <h3 className="service-title">Blockchain Engineering</h3>
            <p className="service-description">
              Solana-native development with Anchor and Rust — PDAs, SOL
              escrow vaults, SPL flows, and Helius-powered indexers. Shipped
              Zephyr copy-vaults, Okaform escrow + reputation, Sentinel risk
              oracle.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="api-icon">
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
              </i>
            </div>
            <h3 className="service-title">AI & Autonomous Agents</h3>
            <p className="service-description">
              LLM-powered oracles and trading agents — Gemini risk synthesis,
              SendAI Solana Agent Kit plugins, autonomous A2A traders, and
              x402 pay-per-query machine payments via Moove.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="code-icon">{"</>"}</i>
            </div>
            <h3 className="service-title">Backend Engineering</h3>
            <p className="service-description">
              Robust, scalable APIs and microservices with NestJS, Bun,
              Express, and Node.js — TypeBox validation, typed domain errors,
              and clean module boundaries built for production.
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
            <h3 className="service-title">On-Chain Data & Graph Intelligence</h3>
            <p className="service-description">
              Wash-trade rings, Sybil clusters, and peeling chains surfaced
              with CognoDB openCypher, live DEX ingestion, and Postgres /
              MongoDB + Prisma persistence for dashboards and leaderboards.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="api-icon">API</i>
            </div>
            <h3 className="service-title">API Design & Integrations</h3>
            <p className="service-description">
              REST design plus third-party rails — Jupiter swaps, Helius
              webhooks, Moove agentic payments, Telegram / X bots, and
              Copperx / Vybe APIs with auth, retries, and observability.
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
            <h3 className="service-title">System Architecture & DevOps</h3>
            <p className="service-description">
              Microservice boundaries, caching with Redis, load balancing and
              fault tolerance — shipped with Docker, CI/CD, and GitHub
              Actions from devnet to production.
            </p>
          </div>
        </div>
      </div>

      <div className="business-section">
        <h2 className="services-title">For Business Owners</h2>
        <h3 className="services-subtitle">Need a website? Let's talk.</h3>
        <p className="business-description">
          No jargon — I build fast, modern websites for businesses: company
          sites, online stores that receive payments, and landing pages that
          bring customers. Short projects, quick delivery.
        </p>
        <div className="business-buttons">
          <a
            href="https://wa.me/2348153551975?text=Hi%20Patrick%2C%20I%20need%20a%20website%20for%20my%20business."
            className="hero-button primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp
          </a>
          <Link to="/contact" className="hero-button secondary">
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
