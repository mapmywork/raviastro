import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageSquare } from 'lucide-react';

export default function StickyActions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky actions when scrolled past the hero section (approx 400px)
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed bottom-0 left-0 w-full z-50 px-4 pb-4 lg:hidden grid grid-cols-2 gap-3 pointer-events-none"
        >
          {/* Call Button */}
          <a
            href="tel:+919116989988"
            className="pointer-events-auto flex items-center justify-center gap-2 bg-gradient-to-r from-gold-dark to-gold text-dark-pure font-outfit text-sm font-bold uppercase tracking-wider py-3.5 px-4 rounded-xl shadow-gold-glow-lg active:scale-95 transition-transform"
          >
            <Phone size={18} fill="currentColor" />
            <span>Call Now</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/919116989988"
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto flex items-center justify-center gap-2 bg-emerald-600 text-white font-outfit text-sm font-bold uppercase tracking-wider py-3.5 px-4 rounded-xl shadow-[0_4px_15px_rgba(16,185,129,0.3)] active:scale-95 transition-transform"
          >
            <MessageSquare size={18} fill="currentColor" />
            <span>WhatsApp</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
