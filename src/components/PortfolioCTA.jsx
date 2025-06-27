// src/components/PortfolioCTA.jsx
import { useState } from 'react'

function PortfolioCTA() {
  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = [
    {
      name: '0% Master',
      info: 'A sleek Consultant Agency platform with seamless UX and robust performance.',
      features: ['Responsive Design', 'Fast Load Times', 'Secure Payments'],
      coverImage: '/covers/0PercentMastery-cover.jpg'
    },
    {
      name: 'Nahrin Fish & Chicken Grill',
      info: 'A modern Restaurant site showcasing creative design and interactivity.',
      features: ['Dynamic Animations', 'Custom UI', 'Mobile Optimized'],
      coverImage: '/covers/nahrin-cover.jpg'
    },
    {
      name: 'Zakhour Law',
      info: 'A Law website with advanced SEO and responsive layouts.',
      features: ['SEO Optimization', 'Clean Code', 'Cross-Browser Support'],
      coverImage: '/covers/ZakhourLaw-cover.jpg'
    },
    {
      name: 'Mike Allnabulsi',
      info: 'A personal portfolio site with a modern design and interactive elements.',
      features: ['Modern Design', 'Interactive Animations', 'User-Friendly'],
      coverImage: '/covers/Mike-Allnabulsi-cover.jpg'
    },
  ]

  return (
    <section id="portfolio-cta" className="bg-dark">
      <div className="flex flex-col lg:flex-row">
        {/* Left Side: Portfolio Rows */}
        <div className="lg:w-1/2 flex flex-col">
          {projects.map((project, index) => (
            <a href="/portfolio" key={index}>
              <div
                className="portfolio-cta-row relative h-32 flex items-center justify-center transition-transform duration-300"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                style={{
                  backgroundImage: `url(${project.coverImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="portfolio-cta-overlay absolute inset-0 bg-dark/60 backdrop-blur-sm"></div>
                <h3 className="portfolio-cta-name relative text-2xl font-bold text-white z-10 transition-colors duration-300">
                  {project.name}
                </h3>
              </div>
            </a>
          ))}
        </div>
        {/* Right Side: Dynamic Text */}
        <div className="lg:w-1/2 flex items-center justify-center p-4">
          <div className="portfolio-cta-text-container text-center">
            {hoveredProject === null ? (
              <div className="portfolio-cta-text">
                <h2 className="portfolio-cta-text-heading text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h2>
                <p className="portfolio-cta-text-info text-xl md:text-2xl text-secondary mb-6 max-w-md mx-auto">
                  Explore our diverse range of web projects, showcasing innovation and quality.
                </p>
              </div>
            ) : (
              <div className="portfolio-cta-text">
                <h2 className="portfolio-cta-text-heading text-4xl md:text-5xl font-bold mb-4">{projects[hoveredProject].name}</h2>
                <p className="portfolio-cta-text-info text-xl md:text-2xl text-secondary mb-4 max-w-md mx-auto">
                  {projects[hoveredProject].info}
                </p>
                <ul className="portfolio-cta-text-info text-lg text-secondary mb-6 max-w-md mx-auto space-y-2">
                  {projects[hoveredProject].features.map((feature, idx) => (
                    <li key={idx} className="flex items-center justify-center">
                      <i className="fas fa-check-circle text-accent mr-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortfolioCTA