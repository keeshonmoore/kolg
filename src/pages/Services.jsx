import { Link } from 'react-router-dom'

function Services() {
  return (
    <div className="min-h-screen pt-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Comprehensive digital solutions to help your business grow and succeed online
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link 
            to="/services/website-creation" 
            className="bg-dark/50 p-8 rounded-lg border border-accent/20 hover:border-accent/50 transition-colors group"
          >
            <div className="text-accent text-4xl mb-4 group-hover:scale-110 transition-transform">
              <i className="fas fa-laptop-code"></i>
            </div>
            <h2 className="text-2xl font-semibold mb-4">Website Creation</h2>
            <p className="text-secondary">
              Custom websites designed to showcase your brand and engage your audience
            </p>
          </Link>

          <Link 
            to="/services/app-development" 
            className="bg-dark/50 p-8 rounded-lg border border-accent/20 hover:border-accent/50 transition-colors group"
          >
            <div className="text-accent text-4xl mb-4 group-hover:scale-110 transition-transform">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <h2 className="text-2xl font-semibold mb-4">App Development</h2>
            <p className="text-secondary">
              Innovative mobile applications built to solve problems and enhance user experiences
            </p>
          </Link>

          <Link 
            to="/services/ui-design" 
            className="bg-dark/50 p-8 rounded-lg border border-accent/20 hover:border-accent/50 transition-colors group"
          >
            <div className="text-accent text-4xl mb-4 group-hover:scale-110 transition-transform">
              <i className="fas fa-paint-brush"></i>
            </div>
            <h2 className="text-2xl font-semibold mb-4">UI/UX Design</h2>
            <p className="text-secondary">
              Beautiful and intuitive interfaces that delight users and drive engagement
            </p>
          </Link>

          <Link 
            to="/services/digital-marketing" 
            className="bg-dark/50 p-8 rounded-lg border border-accent/20 hover:border-accent/50 transition-colors group"
          >
            <div className="text-accent text-4xl mb-4 group-hover:scale-110 transition-transform">
              <i className="fas fa-bullhorn"></i>
            </div>
            <h2 className="text-2xl font-semibold mb-4">Digital Marketing</h2>
            <p className="text-secondary">
              Strategic campaigns that increase visibility and drive business growth
            </p>
          </Link>

          <Link 
            to="/services/cms" 
            className="bg-dark/50 p-8 rounded-lg border border-accent/20 hover:border-accent/50 transition-colors group"
          >
            <div className="text-accent text-4xl mb-4 group-hover:scale-110 transition-transform">
              <i className="fas fa-cogs"></i>
            </div>
            <h2 className="text-2xl font-semibold mb-4">Content Management</h2>
            <p className="text-secondary">
              Powerful CMS solutions to manage and update your content with ease
            </p>
          </Link>

          <Link 
            to="/services/ecommerce" 
            className="bg-dark/50 p-8 rounded-lg border border-accent/20 hover:border-accent/50 transition-colors group"
          >
            <div className="text-accent text-4xl mb-4 group-hover:scale-110 transition-transform">
              <i className="fas fa-shopping-cart"></i>
            </div>
            <h2 className="text-2xl font-semibold mb-4">E-Commerce</h2>
            <p className="text-secondary">
              Feature-rich online stores designed to drive sales and growth
            </p>
          </Link>

          <Link 
            to="/services/hosting" 
            className="bg-dark/50 p-8 rounded-lg border border-accent/20 hover:border-accent/50 transition-colors group"
          >
            <div className="text-accent text-4xl mb-4 group-hover:scale-110 transition-transform">
              <i className="fas fa-server"></i>
            </div>
            <h2 className="text-2xl font-semibold mb-4">Web Hosting</h2>
            <p className="text-secondary">
              Reliable and secure hosting solutions for your digital presence
            </p>
          </Link>

          <Link 
            to="/services/seo-optimization" 
            className="bg-dark/50 p-8 rounded-lg border border-accent/20 hover:border-accent/50 transition-colors group"
          >
            <div className="text-accent text-4xl mb-4 group-hover:scale-110 transition-transform">
              <i className="fas fa-search"></i>
            </div>
            <h2 className="text-2xl font-semibold mb-4">SEO Optimization</h2>
            <p className="text-secondary">
              Boost your online visibility and drive organic traffic to your website
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Services 