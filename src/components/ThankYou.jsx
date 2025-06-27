// src/components/ThankYou.jsx
function ThankYou() {
    return (
      <section className="py-20 bg-dark text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Thank You!</h2>
          <p className="text-xl text-secondary mb-8">
            Your submission has been received. We'll get back to you soon.
          </p>
          <a
            href="/"
            className="inline-block bg-accent text-dark px-8 py-4 rounded-full text-lg font-medium glow transform hover:scale-110 transition-all duration-300"
          >
            Return to Home
          </a>
        </div>
      </section>
    )
  }
  
  export default ThankYou