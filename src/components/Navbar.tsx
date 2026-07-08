import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-dark bg-opacity-95 border-b border-gold border-opacity-10 backdrop-blur-md py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex flex-col group">
              <span className="font-cinzel text-xl sm:text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-gold-dark group-hover:opacity-90 transition-opacity">
                ASTROLOGER RAVI SHARMA
              </span>
              <span className="text-[10px] sm:text-xs tracking-widest text-gold-light opacity-60 uppercase font-outfit mt-0.5">
                Ancient Vedic Jyotish & Vastu Expert
              </span>
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-outfit text-sm font-medium tracking-wide text-gray-300 hover:text-gold transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="#contact"
                className="font-outfit text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded border border-gold border-opacity-40 text-gold hover:bg-gold hover:text-dark-pure hover:border-transparent transition-all duration-300 shadow-gold-glow"
              >
                Book Consultation
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gold focus:outline-none hover:opacity-80 transition-opacity"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-dark-card border-b border-gold border-opacity-10 backdrop-blur-lg overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block font-outfit text-base font-medium text-gray-300 hover:text-gold transition-colors py-2"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-4 flex flex-col gap-3">
                  <a
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="w-full text-center font-outfit text-sm font-semibold uppercase tracking-wider py-3 rounded bg-gradient-to-r from-gold-dark via-gold to-gold-light text-dark-pure shadow-gold-glow"
                  >
                    Book Consultation
                  </a>
                  <div className="flex gap-3">
                    <a
                      href="https://wa.me/919116989988"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 font-outfit text-xs font-semibold uppercase tracking-wider py-2.5 rounded border border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-all"
                    >
                      <MessageSquare size={16} /> WhatsApp
                    </a>
                    <a
                      href="tel:+919116989988"
                      className="flex-1 flex items-center justify-center gap-2 font-outfit text-xs font-semibold uppercase tracking-wider py-2.5 rounded border border-gold text-gold hover:bg-gold hover:text-dark-pure transition-all"
                    >
                      <Phone size={16} /> Call Now
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
