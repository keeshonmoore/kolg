// src/components/CTA.jsx
function CTA() {
    return (
      <section id="cta" className="py-20 cta-bg" style={{ backgroundSize: '200% 200%' }}>
        <div className="px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="cta-heading text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Website?</h2>
          <p className="cta-subtitle text-xl md:text-2xl text-secondary mb-10 max-w-3xl mx-auto">
            Get in touch today to start building your dream web presence.
          </p>
          <a
            href="#contact"
            className="cta-button inline-block bg-accent text-dark px-10 py-5 rounded-full text-xl font-medium glow transform hover:scale-110 transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>
    )
  }
  
  export default CTA