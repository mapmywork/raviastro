import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import SpecialConsultationBanner from './components/SpecialConsultationBanner';
import ConsultationProcess from './components/ConsultationProcess';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StickyActions from './components/StickyActions';

export default function App() {
  return (
    <div className="relative min-h-screen bg-dark-pure text-gray-200 overflow-x-hidden selection:bg-gold selection:text-dark-pure">
      
      {/* Premium Luxury Navbar */}
      <Navbar />

      {/* Hero Landing Section */}
      <Hero />

      {/* Seamless Scrolling Marquee Ticker */}
      <Marquee />

      {/* Astrologer Biography Profile */}
      <About />

      {/* Why Choose Us Cards Grid */}
      <WhyChooseUs />

      {/* Complete 30 Services Deck */}
      <Services />

      {/* Immediate Consultation Callout */}
      <SpecialConsultationBanner />

      {/* Timeline Booking Process */}
      <ConsultationProcess />

      {/* Grid of Perks/Benefits */}
      <Benefits />

      {/* White Swiper Reviews Slide Deck */}
      <Testimonials />

      {/* Accordion List FAQ */}
      <FAQ />

      {/* Big Action Conversion Banner */}
      <CTA />

      {/* Map, Working Hours, Socials, and Request Form */}
      <Contact />

      {/* Disclaimer, Links, and Info Block Footer */}
      <Footer />

      {/* Floating Call & WhatsApp Bottom Strip for Mobile */}
      <StickyActions />
      
    </div>
  );
}
