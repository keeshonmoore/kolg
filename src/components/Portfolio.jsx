import { useState, useEffect, useCallback } from 'react'
import Masonry from 'react-masonry-css'
import Particles from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [filter, setFilter] = useState('all')
  const [isGalleryVisible, setIsGalleryVisible] = useState(false)

  const projects = [
    {
      name: '0% Master',
      info: 'Business - Consultant Agency',
      features: ['Layout', 'Design', 'Logo', 'Color Scheme', 'Branding'],
      timeSpent: '1 Day',
      budget: '$400',
      additions: 'Logo Design',
      serviceType: 'Website Revamp',
      images: [
        '/covers/0PercentMastery-cover.jpg',
        '/kelz-about.png',
        '/kelz-contact.png',
      ],
      demoLink: 'https://0-mastery.vercel.app/',
      category: 'Consulting',
    },
    {
      name: 'David Pomeranz',
      info: 'Business - Lawyer',
      features: ['Layout', 'Design', 'Logo', 'Color Scheme', 'Branding'],
      timeSpent: '1 Day',
      budget: '$400',
      additions: 'Logo Design',
      serviceType: 'Website Revamp',
      images: [
        '/covers/DAVID POMERANZ-cover.jpg',
        '/dave-about.png',
        '/dave-contact.png',
      ],
      demoLink: 'https://david-pomeranz.vercel.app/',
      category: 'Legal',
    },
    {
      name: 'Keller Willias La Jolla',
      info: 'Business - Real Estate Agency',
      features: ['Layout', 'Design', 'Logo', 'Color Scheme', 'Branding'],
      timeSpent: '1 Day',
      budget: '$750',
      additions: 'Logo Design, SEO Enhancement',
      serviceType: 'Website Revamp',
      images: [
        '/covers/kw-cover.png',
        '/kw-team.png',
        '/kw-client.png',
        '/kw-agent.png',
      ],
      demoLink: 'https://keller-williams-la-jolla.vercel.app/',
      category: 'Real Estate',
    },
    {
      name: 'Mike Allnabulsi',
      info: 'Business - Lawyer',
      features: ['Layout', 'Design', 'Logo', 'Color Scheme', 'Branding', 'Multi Language'],
      timeSpent: '1 Day',
      budget: '$400',
      additions: 'Logo Design, SEO Enhancement',
      serviceType: 'Website Revamp',
      images: [
        '/covers/Mike-Allnabulsi-cover.jpg',
        '/mike-lang.png',
      ],
      demoLink: 'https://allnabulsi-law.vercel.app/',
      category: 'Legal',
    },
    {
      name: 'Nahrin',
      info: 'Business - Restaurant',
      features: ['Layout', 'Design', 'Logo', 'Color Scheme', 'Branding'],
      timeSpent: '1 Day',
      budget: '$500',
      additions: 'Logo Design, SEO, DoorDash Integration',
      serviceType: 'Website Revamp',
      images: [
        '/covers/nahrin-cover.jpg',
        '/nahrin-about.png',
        '/nahrin-location.png',
        '/nahrin-menu.png',
      ],
      demoLink: 'https://nahrin.vercel.app/',
      category: 'Restaurant',
    },
    {
      name: 'Shooters',
      info: 'Business - Record Label',
      features: ['Layout', 'Design', 'Logo', 'Color Scheme', 'Branding'],
      timeSpent: '1 Day',
      budget: '$500',
      additions: 'Logo Design, SEO, Booking Integration',
      serviceType: 'Website Revamp',
      images: [
        '/covers/shooters-cover.jpg',
        '/shooters-info.png',
        '/shooters-producers.png',
      ],
      demoLink: 'https://shooters.vercel.app/',
      category: 'Music',
    },
    {
      name: 'Zakhour Law',
      info: 'Business - Lawyer',
      features: ['Layout', 'Design', 'Logo', 'Color Scheme', 'Branding'],
      timeSpent: '1 Day',
      budget: '$400',
      additions: 'Logo Design, SEO Enhancement',
      serviceType: 'Website Revamp',
      images: [
        '/covers/ZakhourLaw-cover.jpg',
        '/zakhour-about.png',
        '/zakhour-contact.png',
        '/zakhour-PA.png',
        '/zakhour-PA-details.png',
      ],
      demoLink: 'https://zakhour-law.vercel.app/',
      category: 'Legal',
    },
  ]

  const categories = ['All', 'Consulting', 'Legal', 'Real Estate', 'Restaurant', 'Music']
  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category.toLowerCase() === filter)

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  const particlesOptions = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#ffffff'
      },
      shape: {
        type: 'circle'
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#ffffff',
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false
        }
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'grab'
        },
        onclick: {
          enable: true,
          mode: 'push'
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 1
          }
        },
        push: {
          particles_nb: 4
        }
      }
    },
    retina_detect: true
  }

  const closeModal = () => {
    setSelectedProject(null)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeModal()
    }
  }

  // Close modal on overlay click
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  // Scroll-triggered gallery animation
  useEffect(() => {
    const handleScroll = () => {
      const gallery = document.querySelector('.portfolio-gallery')
      if (gallery) {
        const rect = gallery.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.8) {
          setIsGalleryVisible(true)
          window.removeEventListener('scroll', handleScroll)
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Mouse trail effect
  useEffect(() => {
    const trail = document.querySelector('.mouse-trail')
    const handleMouseMove = (e) => {
      trail.style.left = `${e.clientX}px`
      trail.style.top = `${e.clientY}px`
    }
    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  }

  return (
    <section id="portfolio" className="portfolio-bg min-h-screen relative">
      <Particles
        className="particles"
        init={particlesInit}
        options={particlesOptions}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="portfolio-hero">
          <h1 className="portfolio-subheading">Portfolio</h1>
          <h2 className="portfolio-heading text-4xl md:text-5xl font-bold mb-4 typing-animation">
            Our Portfolio
          </h2>
          <p className="portfolio-subtitle">
            Discover our innovative web projects showcasing quality and creativity.
          </p>
        </div>
        <div className="portfolio-filters">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category.toLowerCase())}
              className={`portfolio-filter-button ${filter === category.toLowerCase() ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className={`portfolio-gallery my-masonry-grid ${isGalleryVisible ? 'animate-reveal' : 'opacity-0'}`}
          columnClassName="my-masonry-grid_column"
        >
          {filteredProjects.map((project, index) => (
            <div key={`${project.name}-${index}`} className="portfolio-card cursor-pointer">
              <div className="portfolio-card-inner relative" onClick={() => setSelectedProject(project)}>
                <img
                  src={project.images[0]} // Use the first image for the card preview
                  alt={project.name}
                  className="portfolio-card-image"
                />
                <div className="portfolio-card-overlay absolute inset-0 bg-dark/60 backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                  <span className="text-accent text-lg font-semibold">{project.category}</span>
                  <button className="mt-2 bg-accent text-dark px-4 py-2 rounded-full text-base font-medium glow transform hover:scale-110 transition-all duration-300">
                    View Details
                  </button>
                </div>
                <div className="portfolio-card-content">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
                  <p className="text-secondary mb-4">{project.info}</p>
                </div>
              </div>
            </div>
          ))}
        </Masonry>
      </div>

      {/* Enhanced Project Modal */}
      {selectedProject && (
        <div className="portfolio-modal-overlay" onKeyDown={handleKeyDown} onClick={handleOverlayClick}>
          <button
            onClick={closeModal}
            className="portfolio-modal-close"
            aria-label="Close modal"
          >
            <i className="fas fa-times text-2xl"></i>
          </button>
          <div className="portfolio-modal-content">
            <div className="portfolio-modal-inner md:flex md:space-x-8">
              {/* Left: Live Webpage Preview and Visit Site Button */}
              <div className="portfolio-modal-image-container md:w-1/2 mb-6 md:mb-0 flex flex-col items-center">
                <div className="portfolio-modal-preview relative w-full">
                  <iframe
                    src={selectedProject.demoLink}
                    className="portfolio-modal-iframe w-full h-96 rounded-lg border-none"
                    title={`${selectedProject.name} Preview`}
                    sandbox="allow-same-origin allow-scripts"
                  />
                </div>
                {selectedProject.demoLink && (
                  <a
                    href={selectedProject.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio-modal-visit inline-block border border-accent text-accent px-8 py-3 rounded-full text-lg font-medium hover:bg-accent hover:text-dark transition-all duration-300 w-full mt-4"
                  >
                    Visit Site
                  </a>
                )}
              </div>
              {/* Right: Project Details */}
              <div className="portfolio-modal-details md:w-1/2 flex flex-col justify-center">
                <span className="portfolio-modal-category opacity-0 animate-fade-in-right mb-4 inline-block px-4 py-1 rounded-full border border-accent/50 bg-dark/50 backdrop-blur-sm text-accent text-sm font-semibold">
                  {selectedProject.category}
                </span>
                <h3 className="portfolio-modal-title opacity-0 animate-fade-in-right text-4xl font-bold text-white mb-4">
                  {selectedProject.name}
                </h3>
                <p className="portfolio-modal-info opacity-0 animate-fade-in-right text-secondary mb-6">
                  {selectedProject.info}
                </p>
                <ul className="portfolio-modal-features space-y-3 mb-6">
                  {selectedProject.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center opacity-0 animate-feature-in"
                      style={{ animationDelay: `${idx * 0.2 + 0.4}s` }}
                    >
                      <i className="fas fa-check-circle text-accent mr-3"></i>
                      <span className="text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>
                {/* Separator Line */}
                <div className="portfolio-modal-separator my-6"></div>
                {/* Additional Project Details */}
                <div className="portfolio-modal-additional space-y-3 mb-6">
                  <div className="flex items-center opacity-0 animate-fade-in-right" style={{ animationDelay: '0.6s' }}>
                    <i className="fas fa-clock text-accent mr-3"></i>
                    <span className="text-secondary"><strong>Time Spent:</strong> {selectedProject.timeSpent}</span>
                  </div>
                  <div className="flex items-center opacity-0 animate-fade-in-right" style={{ animationDelay: '0.7s' }}>
                    <i className="fas fa-dollar-sign text-accent mr-3"></i>
                    <span className="text-secondary"><strong>Budget:</strong> {selectedProject.budget}</span>
                  </div>
                  <div className="flex items-center opacity-0 animate-fade-in-right" style={{ animationDelay: '0.8s' }}>
                    <i className="fas fa-plus-circle text-accent mr-3"></i>
                    <span className="text-secondary"><strong>Additions:</strong> {selectedProject.additions}</span>
                  </div>
                  <div className="flex items-center opacity-0 animate-fade-in-right" style={{ animationDelay: '0.9s' }}>
                    <i className="fas fa-briefcase text-accent mr-3"></i>
                    <span className="text-secondary"><strong>Service Type:</strong> {selectedProject.serviceType}</span>
                  </div>
                </div>
                {/* View Project Button */}
                {selectedProject.demoLink && (
                  <a
                    href={selectedProject.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio-modal-demo opacity-0 animate-fade-in-right inline-block bg-gradient-to-r from-accent to-[#d4e600] text-dark px-8 py-3 rounded-full text-lg font-medium glow transform hover:scale-110 transition-all duration-300 w-full animate-pulse-glow"
                    style={{ animationDelay: '1.0s' }}
                  >
                    View Project
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mouse Trail */}
      <div className="mouse-trail"></div>
    </section>
  )
}

export default Portfolio