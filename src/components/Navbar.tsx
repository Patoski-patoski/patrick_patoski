import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {
  const location = useLocation()
  const [activeLink, setActiveLink] = useState(location.pathname)

  useEffect(() => {
    setActiveLink(location.pathname)
  }, [location])


  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <span className="logo-text">~$ patrick_patoski</span>
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className={activeLink === '/' ? 'active' : ''}>
          Home
        </Link>
        <Link to="/projects" className={activeLink === '/projects' ? 'active' : ''}>
          Projects
        </Link>
        <Link to="/writeups" className={activeLink === '/writeups' ? 'active' : ''}>
          Writeups
        </Link>
        <Link to="/tools" className={activeLink === '/tools' ? 'active' : ''}>
          Tools & Skills
        </Link>
        <Link to="/about" className={activeLink === '/about' ? 'active' : ''}>
          About
        </Link>
        <Link to="/contact" className={activeLink === '/contact' ? 'active' : ''}>
          Contact
        </Link>
        
      
      </div>
    </nav>
  )
}

export default Navbar
