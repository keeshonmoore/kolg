// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Services from './components/Services'
import WhyChoose from './components/WhyChoose'
import CTA from './components/CTA'
import PortfolioCTA from './components/PortfolioCTA'
import ScrollToTop from './components/ScrollToTop'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import WebsiteCreation from './pages/WebsiteCreation'
import AppDevelopment from './pages/AppDevelopment'
import UIDesign from './pages/UIDesign'
import DigitalMarketing from './pages/DigitalMarketing'
import SEOOptimization from './pages/SEOOptimization'
import ECommerce from './pages/ECommerce'
import Hosting from './pages/Hosting'
import CMS from './pages/CMS'
import Login from './pages/Login'

function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={
            <>
              <Header />
              <ScrollToTop />
              <main>
                <Routes>
                  <Route path="/" element={<>
                    <Home />
                    <Services />
                    <WhyChoose />
                    <CTA />
                    <PortfolioCTA />
                    <Contact />
                  </>} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/services/website-creation" element={<WebsiteCreation />} />
                  <Route path="/services/app-development" element={<AppDevelopment />} />
                  <Route path="/services/ui-design" element={<UIDesign />} />
                  <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
                  <Route path="/services/seo-optimization" element={<SEOOptimization />} />
                  <Route path="/services/ecommerce" element={<ECommerce />} />
                  <Route path="/services/hosting" element={<Hosting />} />
                  <Route path="/services/cms" element={<CMS />} />
                </Routes>
              </main>
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App