import { Phone, Mail, Clock, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-dark-pure border-t border-gold border-opacity-10 pt-16 pb-8 overflow-hidden">
      {/* Decorative Golden Aura */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold opacity-[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand & About */}
          <div className="space-y-4">
            <a href="#home" className="flex flex-col">
              <span className="font-cinzel text-xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-gold-dark">
                ASTROLOGER RAVI SHARMA
              </span>
              <span className="text-[10px] tracking-widest text-gold-light opacity-60 uppercase font-outfit mt-0.5">
                Vedic Jyotish & Vastu Expert
              </span>
            </a>
            <p className="font-outfit text-sm text-gray-400 leading-relaxed pt-2">
              Deeply rooted in the ancient wisdom of Vedic Astrology, Jyotish Shastra, and Vastu. Offering authentic, accurate predictions and trusted remedies to guide you through love, career, family, and health.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-cinzel text-md font-semibold tracking-wider text-gold mb-6 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-0.5 after:bg-gold">
              Quick Links
            </h3>
            <ul className="space-y-3 font-outfit text-sm">
              <li>
                <a href="#home" className="text-gray-400 hover:text-gold transition-colors duration-200">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-gold transition-colors duration-200">About Astrologer</a>
              </li>
              <li>
                <a href="#why-us" className="text-gray-400 hover:text-gold transition-colors duration-200">Why Choose Us</a>
              </li>
              <li>
                <a href="#process" className="text-gray-400 hover:text-gold transition-colors duration-200">Consultation Process</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-gold transition-colors duration-200">Client Reviews</a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-gold transition-colors duration-200">FAQs</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Major Services */}
          <div>
            <h3 className="font-cinzel text-md font-semibold tracking-wider text-gold mb-6 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-0.5 after:bg-gold">
              Services
            </h3>
            <ul className="space-y-3 font-outfit text-sm">
              <li>
                <a href="#services" className="text-gray-400 hover:text-gold transition-colors duration-200">Love & Marriage Solution</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-gold transition-colors duration-200">Kundli Analysis & Matching</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-gold transition-colors duration-200">Career & Financial Timing</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-gold transition-colors duration-200">Vastu Shastra Remedies</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-gold transition-colors duration-200">Palmistry & Numerology</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-gold transition-colors duration-200">Dosha Nivarana Guidance</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact details */}
          <div>
            <h3 className="font-cinzel text-md font-semibold tracking-wider text-gold mb-6 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-0.5 after:bg-gold">
              Contact Info
            </h3>
            <ul className="space-y-4 font-outfit text-sm">
              <li className="flex items-start gap-3">
                <Phone className="text-gold mt-1 shrink-0" size={16} />
                <a href="tel:+919116989988" className="text-gray-400 hover:text-gold transition-colors">
                  +91 9116989988
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-gold mt-1 shrink-0" size={16} />
                <span className="text-gray-400">info@astrologerravisarma.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="text-gold mt-1 shrink-0" size={16} />
                <span className="text-gray-400">
                  Daily: 09:00 AM - 09:00 PM <br />
                  <span className="text-xs text-gold-light opacity-50">(Prior Booking Recommended)</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-dark-border my-8" />

        {/* Disclaimer and Copyright */}
        <div className="space-y-6">
          <p className="font-outfit text-xs text-gray-500 text-justify leading-relaxed">
            <span className="text-gold-light opacity-70 font-semibold block mb-1 uppercase tracking-wider">Disclaimer:</span>
            Vedic astrology is an ancient spiritual science based on birth charts and planetary transits. Predictions, guidance, and remedies provided by Astrologer Ravi Sharma are meant to guide you, but results may vary based on personal actions (Karma), efforts, and planetary configurations. We do not make absolute guarantees, and consultations should not be treated as a replacement for professional legal, medical, or financial advice.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-dark-border border-opacity-50">
            <p className="font-outfit text-xs text-gray-400 text-center sm:text-left">
              &copy; {currentYear} Astrologer Ravi Sharma. All Rights Reserved. Crafted for Premium Vedic Consultations.
            </p>
            <button
              onClick={handleScrollToTop}
              className="flex items-center gap-1.5 font-outfit text-xs font-semibold uppercase tracking-wider text-gold hover:text-gold-light transition-colors group"
            >
              Back To Top 
              <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
