// src/components/WhyChoose.jsx
function WhyChoose() {
    return (
      <section id="why-choose" className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
          {/* Text Section */}
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 p-6 rounded-lg border border-dark shadow-lg">
            <h2 className="why-choose-heading text-4xl md:text-5xl font-bold mb-6">Why Choose KOLG?</h2>
            <p className="why-choose-subtitle text-lg md:text-xl text-secondary mb-8 max-w-md mx-auto lg:mx-0">
              Experience web solutions that drive success with our expertise and innovation.
            </p>
            <ul className="space-y-4 text-secondary max-w-md mx-auto lg:mx-0">
              <li className="why-choose-list-item flex items-start">
                <i className="why-choose-icon fas fa-check-circle text-2xl mr-3 mt-1 glow"></i>
                <span>Expert Team: Skilled professionals delivering exceptional web experiences.</span>
              </li>
              <li className="why-choose-list-item flex items-start">
                <i className="why-choose-icon fas fa-check-circle text-2xl mr-3 mt-1 glow"></i>
                <span>Tailored Solutions: Custom designs crafted to align with your brand goals.</span>
              </li>
              <li className="why-choose-list-item flex items-start">
                <i className="why-choose-icon fas fa-check-circle text-2xl mr-3 mt-1 glow"></i>
                <span>Cutting-Edge Technology: Advanced tools for fast, secure websites.</span>
              </li>
              <li className="why-choose-list-item flex items-start">
                <i className="why-choose-icon fas fa-check-circle text-2xl mr-3 mt-1 glow"></i>
                <span>Proven Results: Measurable outcomes that elevate your business.</span>
              </li>
            </ul>
            <a
              href="#contact"
              className="why-choose-cta inline-block mt-8 bg-accent text-dark px-6 py-3 rounded-full text-lg font-medium glow transform hover:scale-105 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
          {/* Image Section */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg"
              alt="Website Mockup"
              className="why-choose-image w-full max-w-md rounded-lg shadow-lg transform transition-transform duration-300 glow"
            />
          </div>
        </div>
      </section>
    )
  }
  
  export default WhyChoose