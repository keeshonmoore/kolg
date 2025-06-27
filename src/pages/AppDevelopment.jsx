import { useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import Particles from '@tsparticles/react'
import { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

function AppDevelopment() {
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
            src="https://assets.mixkit.co/videos/preview/mixkit-developer-working-on-code-while-watching-a-video-41254-large.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-dark to-[#0a0f07] opacity-70 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-dark to-[#0a0f07] opacity-20 animate-gradient-wave"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white animate-fade-in">
            App Development
          </h1>
          <p className="text-xl md:text-2xl text-secondary max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Custom mobile and web applications built to transform your business
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Overview Section */}
        <div className="website-creation-section grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-white">
              Modern App Development
            </h2>
            <p className="text-lg text-secondary mb-6">
              We create powerful, scalable applications that drive business growth. 
              From mobile apps to web platforms, we deliver solutions that users love.
            </p>
            <div className="flex flex-wrap gap-4">
              {['Cross-Platform', 'Scalable Architecture', 'User-Centric Design'].map((feature, idx) => (
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
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="App Development"
              className="absolute inset-0 w-full h-full object-cover transform transition-all duration-500 hover:scale-110"
            />
          </div>
        </div>

        {/* Services Section */}
        <div className="website-creation-section mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">
            Our Development Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'fas fa-mobile-alt',
                title: 'Mobile Apps',
                description: 'Native and cross-platform mobile applications for iOS and Android.',
              },
              {
                icon: 'fas fa-globe',
                title: 'Web Applications',
                description: 'Responsive web applications with modern frameworks and technologies.',
              },
              {
                icon: 'fas fa-sync',
                title: 'API Development',
                description: 'Robust backend services and APIs for seamless integration.',
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
            Development Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="website-creation-card">
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Our Approach
              </h3>
              <div className="space-y-8 relative">
                {[
                  { step: 'Planning & Analysis', desc: 'Understanding your requirements and defining the scope.' },
                  { step: 'Design & Prototyping', desc: 'Creating wireframes and prototypes for your approval.' },
                  { step: 'Development', desc: 'Building your application with clean, maintainable code.' },
                  { step: 'Testing & Deployment', desc: 'Rigorous testing and smooth deployment to production.' },
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
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="App Development Process"
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
              Ready to Build Your App?
            </h2>
            <p className="text-xl text-secondary mb-8 max-w-2xl mx-auto">
              Let's create an application that transforms your business. Contact us to get started.
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

export default AppDevelopment 