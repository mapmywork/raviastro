import { Phone, MessageSquare } from 'lucide-react';

export default function MobileCTA() {
  return (
    <div className="lg:hidden w-full px-4 py-4 bg-dark-pure grid grid-cols-2 gap-3 relative z-20 border-b border-gold border-opacity-10">
      {/* Call Button */}
      <a
        href="tel:+919116989988"
        className="flex items-center justify-center gap-2 bg-gradient-to-r from-gold-dark to-gold text-dark-pure font-outfit text-sm font-bold uppercase tracking-wider py-3.5 px-4 rounded-xl shadow-gold-glow-lg active:scale-95 transition-transform"
      >
        <Phone size={18} fill="currentColor" />
        <span>Call Now</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919116989988"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-emerald-600 text-white font-outfit text-sm font-bold uppercase tracking-wider py-3.5 px-4 rounded-xl shadow-[0_4px_15px_rgba(16,185,129,0.3)] active:scale-95 transition-transform"
      >
        <MessageSquare size={18} fill="currentColor" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
