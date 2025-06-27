// src/components/Services.jsx
import { Link } from 'react-router-dom'

function Services() {
    return (
      <section id="services" className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="services-heading text-4xl md:text-5xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link 
              to="/services/website-creation" 
              className="service-card p-6 rounded-lg bg-dark border border-dark hover:bg-accent hover:text-dark transition-colors group"
            >
              <i className="service-icon fas fa-code text-4xl mb-4 group-hover:text-dark"></i>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-dark">Website Creation</h3>
              <p className="text-secondary group-hover:text-dark">Custom-built, responsive websites tailored to your brand's unique vision.</p>
            </Link>

            <Link 
              to="/services/app-development" 
              className="service-card p-6 rounded-lg bg-dark border border-dark hover:bg-accent hover:text-dark transition-colors group"
            >
              <i className="service-icon fas fa-mobile-alt text-4xl mb-4 group-hover:text-dark"></i>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-dark">App Development</h3>
              <p className="text-secondary group-hover:text-dark">Innovative mobile applications built to solve problems and enhance user experiences.</p>
            </Link>

            <Link 
              to="/services/ui-design" 
              className="service-card p-6 rounded-lg bg-dark border border-dark hover:bg-accent hover:text-dark transition-colors group"
            >
              <i className="service-icon fas fa-paintbrush text-4xl mb-4 group-hover:text-dark"></i>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-dark">UI/UX Design</h3>
              <p className="text-secondary group-hover:text-dark">Intuitive, user-friendly interfaces that enhance engagement and usability.</p>
            </Link>

            <Link 
              to="/services/digital-marketing" 
              className="service-card p-6 rounded-lg bg-dark border border-dark hover:bg-accent hover:text-dark transition-colors group"
            >
              <i className="service-icon fas fa-bullhorn text-4xl mb-4 group-hover:text-dark"></i>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-dark">Digital Marketing</h3>
              <p className="text-secondary group-hover:text-dark">Strategic campaigns that increase visibility and drive business growth.</p>
            </Link>

            <Link 
              to="/services/cms" 
              className="service-card p-6 rounded-lg bg-dark border border-dark hover:bg-accent hover:text-dark transition-colors group"
            >
              <i className="service-icon fas fa-cogs text-4xl mb-4 group-hover:text-dark"></i>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-dark">Content Management Systems</h3>
              <p className="text-secondary group-hover:text-dark">Flexible CMS solutions for easy content updates and management.</p>
            </Link>

            <Link 
              to="/services/ecommerce" 
              className="service-card p-6 rounded-lg bg-dark border border-dark hover:bg-accent hover:text-dark transition-colors group"
            >
              <i className="service-icon fas fa-shopping-cart text-4xl mb-4 group-hover:text-dark"></i>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-dark">E-Commerce Solutions</h3>
              <p className="text-secondary group-hover:text-dark">Robust online stores designed for seamless transactions and growth.</p>
            </Link>

            <Link 
              to="/services/hosting" 
              className="service-card p-6 rounded-lg bg-dark border border-dark hover:bg-accent hover:text-dark transition-colors group"
            >
              <i className="service-icon fas fa-database text-4xl mb-4 group-hover:text-dark"></i>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-dark">Hosting & Maintenance</h3>
              <p className="text-secondary group-hover:text-dark">Reliable hosting and ongoing support to keep your site running smoothly.</p>
            </Link>

            <Link 
              to="/services/seo-optimization" 
              className="service-card p-6 rounded-lg bg-dark border border-dark hover:bg-accent hover:text-dark transition-colors group"
            >
              <i className="service-icon fas fa-search text-4xl mb-4 group-hover:text-dark"></i>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-dark">SEO Optimization</h3>
              <p className="text-secondary group-hover:text-dark">Boost your site's visibility with strategic search engine optimization.</p>
            </Link>
          </div>
        </div>
      </section>
    )
  }
  
  export default Services