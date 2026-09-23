import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {
  const location = useLocation()
  const [activeLink, setActiveLink] = useState(location.pathname)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    setActiveLink(location.pathname)
    setIsMobileMenuOpen(false) // Close menu on route transition
  }, [location])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev)
  }

  const closeMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="navbar-wrapper">
      <nav className="navbar" aria-label="Main Navigation">
        <div className="navbar-logo">
          <Link to="/" onClick={closeMenu}>
            <span className="logo-prompt">~$&nbsp;</span>
            <span className="logo-text">patrick_patoski</span>
          </Link>
        </div>

        <button
          type="button"
          className={`navbar-toggle ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMobileMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <div className={`navbar-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link
            to="/"
            className={activeLink === '/' ? 'active' : ''}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/projects"
            className={activeLink === '/projects' ? 'active' : ''}
            onClick={closeMenu}
          >
            Projects
          </Link>
          <Link
            to="/writeups"
            className={activeLink === '/writeups' ? 'active' : ''}
            onClick={closeMenu}
          >
            Writeups
          </Link>
          <Link
            to="/tools"
            className={activeLink === '/tools' ? 'active' : ''}
            onClick={closeMenu}
          >
            Tools & Stack
          </Link>
          <Link
            to="/about"
            className={activeLink === '/about' ? 'active' : ''}
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={activeLink === '/contact' ? 'active' : ''}
            onClick={closeMenu}
          >
            Contact
          </Link>
          <a
            href="/Patrick_Okafor_Resume.pdf"
            download="Patrick_Okafor_Resume.pdf"
            className="resume-button"
            onClick={closeMenu}
          >
            Resume
          </a>
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div className="navbar-backdrop" onClick={closeMenu} />
      )}
    </header>
  )
}

export default Navbar
