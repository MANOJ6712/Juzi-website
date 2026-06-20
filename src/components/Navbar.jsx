import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './Navbar.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/menu', label: 'Menu' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <nav className={`juzi-nav ${scrolled ? 'juzi-nav--scrolled' : ''}`}>
        <div className="juzi-nav__container">
          <Link to="/" className="juzi-nav__logo">
            <span className="juzi-nav__logo-icon">🍊</span>
            <span className="juzi-nav__logo-text">JUZI</span>
          </Link>

          <div className="juzi-nav__links">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`juzi-nav__link ${location.pathname === link.path ? 'juzi-nav__link--active' : ''}`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <span className="juzi-nav__link-indicator" />
                )}
              </Link>
            ))}
            <Link to="/menu" className="juzi-nav__order-btn">Order Now</Link>
          </div>

          <button
            className="juzi-nav__hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`juzi-nav__hamburger-line ${mobileOpen ? 'juzi-nav__hamburger-line--open-1' : ''}`} />
            <span className={`juzi-nav__hamburger-line ${mobileOpen ? 'juzi-nav__hamburger-line--open-2' : ''}`} />
            <span className={`juzi-nav__hamburger-line ${mobileOpen ? 'juzi-nav__hamburger-line--open-3' : ''}`} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="juzi-nav__mobile-menu"
          >
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`juzi-nav__mobile-link ${location.pathname === link.path ? 'juzi-nav__mobile-link--active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/menu" className="juzi-nav__order-btn juzi-nav__order-btn--mobile">
              Order Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
