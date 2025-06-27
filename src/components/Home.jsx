// src/components/Home.jsx
function Home() {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="relative text-center max-w-4xl px-4 sm:px-6 lg:px-8 z-10">
          <h1 className="hero-heading text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Transform Your Website, Amplify Your Brand
          </h1>
          <p className="hero-subtitle text-lg sm:text-xl lg:text-2xl text-secondary mb-10 max-w-2xl mx-auto">
            Crafting stunning, high-performance websites through expert design, revamps, hosting, and maintenance.
          </p>
          <a
            href="#services"
            className="hero-cta inline-block bg-accent text-dark px-8 py-4 rounded-full text-lg font-medium glow transform hover:scale-105 transition-all duration-300"
          >
            Explore Services
          </a>
        </div>
      </section>
    )
  }
  
  export default Home