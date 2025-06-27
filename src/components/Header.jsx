// src/components/Header.jsx
import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const dropdownRef = useRef(null)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
    setIsServicesOpen(false)
  }, [location])

  const services = [
    {
      name: 'Website Creation',
      href: '/website-creation',
      description: 'Custom websites built to your specifications',
    },
    {
      name: 'UI Design',
      href: '/ui-design',
      description: 'Beautiful and intuitive user interfaces',
    },
    {
      name: 'Hosting',
      href: '/hosting',
      description: 'Reliable and secure hosting solutions',
    },
    {
      name: 'SEO Optimization',
      href: '/seo-optimization',
      description: 'Improve your search engine rankings',
    },
    {
      name: 'CMS',
      href: '/cms',
      description: 'Content management solutions',
    },
    {
      name: 'App Development',
      href: '/app-development',
      description: 'Custom mobile and web applications',
    },
    {
      name: 'Digital Marketing',
      href: '/digital-marketing',
      description: 'Strategic digital marketing solutions',
    },
  ]

  return (
    <header className="fixed top-0 w-full bg-dark/90 backdrop-blur-md shadow-sm z-20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="transform hover:scale-105 transition-transform duration-200">
          <img src="/logo-white.png" alt="KOLG Logo" className="h-8" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="nav-link">Home</Link>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleServices}
              className="nav-link flex items-center group"
            >
              Services
              <i className={`fas fa-chevron-down ml-2 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}></i>
            </button>
            {isServicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-dark/95 backdrop-blur-md rounded-lg shadow-lg py-2 border border-accent/20">
                <Link to="/services/website-creation" className="block px-4 py-3 text-sm text-secondary hover:text-accent hover:bg-dark/50 transition-colors duration-200">
                  <i className="fas fa-code mr-2"></i>
                  Website Creation
                </Link>
                <Link to="/services/ui-design" className="block px-4 py-3 text-sm text-secondary hover:text-accent hover:bg-dark/50 transition-colors duration-200">
                  <i className="fas fa-paintbrush mr-2"></i>
                  UI/UX Design
                </Link>
                <Link to="/services/seo-optimization" className="block px-4 py-3 text-sm text-secondary hover:text-accent hover:bg-dark/50 transition-colors duration-200">
                  <i className="fas fa-search mr-2"></i>
                  SEO Optimization
                </Link>
                <Link to="/services/hosting" className="block px-4 py-3 text-sm text-secondary hover:text-accent hover:bg-dark/50 transition-colors duration-200">
                  <i className="fas fa-database mr-2"></i>
                  Hosting & Maintenance
                </Link>
                <Link to="/services/cms" className="block px-4 py-3 text-sm text-secondary hover:text-accent hover:bg-dark/50 transition-colors duration-200">
                  <i className="fas fa-cogs mr-2"></i>
                  Content Management
                </Link>
                <Link to="/services/app-development" className="block px-4 py-3 text-sm text-secondary hover:text-accent hover:bg-dark/50 transition-colors duration-200">
                  <i className="fas fa-mobile-alt mr-2"></i>
                  App Development
                </Link>
                <Link to="/services/digital-marketing" className="block px-4 py-3 text-sm text-secondary hover:text-accent hover:bg-dark/50 transition-colors duration-200">
                  <i className="fas fa-bullhorn mr-2"></i>
                  Digital Marketing
                </Link>
              </div>
            )}
          </div>
          <Link to="/#why-choose" className="nav-link">Why Choose</Link>
          <Link to="/portfolio" className="nav-link">Portfolio</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link 
            to="/login" 
            className="border-2 border-accent text-accent px-6 py-2 rounded-full font-semibold hover:bg-accent/10 transition-colors duration-200 flex items-center"
          >
            <i className="fas fa-sign-in-alt mr-2"></i>
            Portal Login
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex flex-col space-y-1.5 p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${isMenuOpen ? 'hamburger-top-open' : ''}`}></span>
          <span className={`hamburger ${isMenuOpen ? 'hamburger-middle-open' : ''}`}></span>
          <span className={`hamburger ${isMenuOpen ? 'hamburger-bottom-open' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-dark transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="flex flex-col items-center py-4 space-y-4">
          <Link to="/" className="nav-link" onClick={toggleMenu}>Home</Link>
          <div className="w-full text-center">
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="nav-link flex items-center justify-center w-full"
            >
              Services
              <i className={`fas fa-chevron-down ml-2 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}></i>
            </button>
            {isServicesOpen && (
              <div className="mt-2 space-y-2 bg-dark/50 rounded-lg py-2">
                <Link to="/website-creation" className="block nav-link text-sm px-4 py-2" onClick={toggleMenu}>
                  <i className="fas fa-code mr-2"></i>
                  Website Creation
                </Link>
                <Link to="/ui-design" className="block nav-link text-sm px-4 py-2" onClick={toggleMenu}>
                  <i className="fas fa-paintbrush mr-2"></i>
                  UI/UX Design
                </Link>
                <Link to="/seo-optimization" className="block nav-link text-sm px-4 py-2" onClick={toggleMenu}>
                  <i className="fas fa-search mr-2"></i>
                  SEO Optimization
                </Link>
                <Link to="/hosting" className="block nav-link text-sm px-4 py-2" onClick={toggleMenu}>
                  <i className="fas fa-database mr-2"></i>
                  Hosting & Maintenance
                </Link>
                <Link to="/cms" className="block nav-link text-sm px-4 py-2" onClick={toggleMenu}>
                  <i className="fas fa-cogs mr-2"></i>
                  Content Management
                </Link>
                <Link to="/app-development" className="block nav-link text-sm px-4 py-2" onClick={toggleMenu}>
                  <i className="fas fa-mobile-alt mr-2"></i>
                  App Development
                </Link>
                <Link to="/digital-marketing" className="block nav-link text-sm px-4 py-2" onClick={toggleMenu}>
                  <i className="fas fa-bullhorn mr-2"></i>
                  Digital Marketing
                </Link>
              </div>
            )}
          </div>
          <Link to="/#why-choose" className="nav-link" onClick={toggleMenu}>Why Choose</Link>
          <Link to="/portfolio" className="nav-link" onClick={toggleMenu}>Portfolio</Link>
          <Link to="/contact" className="nav-link" onClick={toggleMenu}>Contact</Link>
          <Link 
            to="/login" 
            className="border-2 border-accent text-accent px-6 py-2 rounded-full font-semibold hover:bg-accent/10 transition-colors duration-200 flex items-center"
            onClick={toggleMenu}
          >
            <i className="fas fa-sign-in-alt mr-2"></i>
            Portal Login
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header