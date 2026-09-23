import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo">
              <span className="footer-prompt">~$ </span>patrick_patoski
            </span>
            <p className="footer-tagline">
              Lead Backend & Solana Smart Contract Engineer. Shipping high-performance
              distributed systems, on-chain protocols, and autonomous AI agents.
            </p>
            <div className="footer-status">
              <span className="status-dot"></span>
              <span className="status-text">Available for select contracts & full-time roles</span>
            </div>
          </div>

          <div className="footer-links-group">
            <div className="footer-col">
              <span className="footer-heading">Navigation</span>
              <Link to="/">Home</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/writeups">Writeups</Link>
              <Link to="/tools">Tools & Stack</Link>
              <Link to="/about">About Me</Link>
              <Link to="/contact">Contact</Link>
            </div>

            <div className="footer-col">
              <span className="footer-heading">Connect</span>
              <a
                href="https://github.com/patoski-patoski"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/patrick-okafor-c"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://x.com/codesbypatrick"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter (X)
              </a>
              <a href="mailto:codesbypatrick@gmail.com">
                Email
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} Patrick Okafor Chibuike. Built with clean TypeScript & React.
          </p>
          <button
            type="button"
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top of page"
          >
            ↑ Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
