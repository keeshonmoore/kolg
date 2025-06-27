import { useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import Particles from '@tsparticles/react'
import { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

function SEOOptimization() {
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
      links: {
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
        outModes: {
          default: 'out'
        },
        bounce: false,
        attract: {
          enable: false
        }
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'grab'
        },
        onClick: {
          enable: true,
          mode: 'push'
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 1
          }
        },
        push: {
          quantity: 4
        }
      }
    },
    detectRetina: true
  }

  // Initialize particles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    })
  }, [])

  return (
    <div className="min-h-screen pt-20 bg-dark relative overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 z-0"
      />

      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-digital-marketing-analytics-1371-large.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-dark to-[#0a0f07] opacity-70 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-dark to-[#0a0f07] opacity-20 animate-gradient-wave"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animate-fade-in">
            SEO Optimization
          </h1>
          <p className="text-xl md:text-2xl text-secondary max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Boost your online visibility and drive organic traffic to your website
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Overview Section */}
        <div className="website-creation-section grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-white">
              Search Engine Excellence
            </h2>
            <p className="text-lg text-secondary mb-6">
              Our comprehensive SEO strategies help your website rank higher in 
              search results, attract more visitors, and convert them into 
              customers. We combine technical expertise with creative content 
              strategies for maximum impact.
            </p>
            <div className="flex flex-wrap gap-4">
              {['Keyword Research', 'Content Optimization', 'Technical SEO'].map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center text-accent"
                >
                  <i className="fas fa-check-circle text-2xl mr-3"></i>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden animate-scale-in">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="SEO Analysis"
              className="absolute inset-0 w-full h-full object-cover transform transition-all duration-500 hover:scale-110"
            />
          </div>
        </div>

        {/* Services Section */}
        <div className="website-creation-section mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">
            Our SEO Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'fas fa-search',
                title: 'Keyword Research',
                description: 'In-depth analysis of search terms to target the right audience.',
              },
              {
                icon: 'fas fa-file-alt',
                title: 'Content Optimization',
                description: 'Creating and optimizing content that ranks and converts.',
              },
              {
                icon: 'fas fa-chart-line',
                title: 'Performance Tracking',
                description: 'Monitoring and analyzing your SEO performance metrics.',
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="website-creation-card"
                style={{ animationDelay: `${0.2 + idx * 0.2}s` }}
              >
                <div className="text-accent text-4xl mb-4">
                  <i className={service.icon}></i>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
                <p className="text-secondary">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="website-creation-section mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">
            SEO Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="website-creation-card">
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Our Approach
              </h3>
              <div className="space-y-8 relative">
                {[
                  { step: 'Audit & Analysis', desc: 'Comprehensive review of your current SEO status.' },
                  { step: 'Strategy Development', desc: 'Creating a customized SEO plan for your business.' },
                  { step: 'Implementation', desc: 'Executing the SEO strategy across your website.' },
                  { step: 'Monitoring & Optimization', desc: 'Tracking results and making continuous improvements.' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="website-creation-process-step"
                    style={{ animationDelay: `${0.2 + idx * 0.2}s` }}
                  >
                    <div className="text-accent text-xl mr-4">{idx + 1}</div>
                    <div>
                      <h4 className="font-semibold mb-2 text-white">{item.step}</h4>
                      <p className="text-secondary">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-full rounded-lg overflow-hidden animate-scale-in">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="SEO Process"
                className="absolute inset-0 w-full h-full object-cover transform transition-all duration-500 hover:scale-110"
              />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="website-creation-section text-center relative py-16">
          <div className="absolute inset-0 bg-gradient-to-br from-dark to-[#0a0f07] animate-gradient-wave"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Ready to Improve Your Search Rankings?
            </h2>
            <p className="text-xl text-secondary mb-8 max-w-2xl mx-auto">
              Let's develop an SEO strategy that drives organic traffic to your website. Contact us to get started.
            </p>
            <Link
              to="/contact"
              className="website-creation-cta"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SEOOptimization 