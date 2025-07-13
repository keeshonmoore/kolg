// src/components/Footer.jsx
function Footer() {
    const currentYear = new Date().getFullYear()
  
    return (
      <footer className="footer-bg py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
            {/* Logo and Tagline */}
            <div className="footer-logo">
              <a href="/" className="inline-block transform hover:scale-105 transition-transform duration-200">
                <img src="/logo-white.png" alt="KOLG Logo" className="h-10 mx-auto md:mx-0" />
              </a>
              <p className="text-secondary text-sm mt-4 max-w-xs mx-auto md:mx-0">
                Transform Your Web, Amplify Your Brand
              </p>
            </div>
  
            {/* Navigation Links */}
            <div className="footer-nav">
              <h3 className="footer-heading">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/" className="footer-link">Home</a></li>
                <li><a href="/#services" className="footer-link">Services</a></li>
                <li><a href="/#why-choose" className="footer-link">Why Choose</a></li>
                <li><a href="/portfolio" className="footer-link">Portfolio</a></li>
                <li><a href="/contact" className="footer-link">Contact</a></li>
              </ul>
            </div>
  
            {/* Contact Info */}
            <div className="footer-contact">
              <h3 className="footer-heading">Contact Us</h3>
              <ul className="space-y-2 text-secondary">
                <li><a href="mailto:info@kolg.live" className="footer-link">info@kolg.com</a></li>
                <li><a href="tel:+18778121288" className="footer-link">+1-928-433-7540 </a></li>
              </ul>
            </div>
  
            {/* Social Media */}
            <div className="footer-social">
              <h3 className="footer-heading">Follow Us</h3>
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                  <i className="fab fa-x-twitter text-xl"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                  <i className="fab fa-linkedin-in text-xl"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
              </div>
            </div>
          </div>
  
          {/* Copyright */}
          <div className="footer-copyright mt-8 text-center text-secondary text-sm">
            © {currentYear} KOLG. All rights reserved.
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer
