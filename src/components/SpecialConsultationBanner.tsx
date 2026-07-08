import { Phone, MessageSquare, Calendar } from 'lucide-react';

export default function SpecialConsultationBanner() {
  return (
    <section className="py-16 bg-dark-pure relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Container with gold borders */}
      <div className="max-w-7xl mx-auto relative rounded-3xl border border-gold border-opacity-30 bg-gradient-to-r from-dark-pure via-dark-card to-dark-pure shadow-gold-glow-lg overflow-hidden py-12 px-6 sm:px-12 lg:py-16 lg:px-20">
        
        {/* Decorative Golden Starbursts */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gold opacity-[0.03] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold opacity-[0.03] rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-4">
            <span className="font-outfit text-xs font-semibold tracking-widest text-gold uppercase">
              Urgent Planetary Blockages?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-wide font-cinzel text-white leading-tight">
              Need Immediate Guidance?
            </h2>
            <p className="font-outfit text-sm text-gray-400 max-w-xl">
              Connect with Astrologer Ravi Sharma directly for immediate consultation regarding relationships, sudden business downfalls, career confusion, or Vastu emergencies.
            </p>
          </div>

          {/* Buttons Panel */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="#contact"
              className="w-full sm:w-auto flex items-center justify-center gap-2 font-outfit text-xs font-bold uppercase tracking-wider py-4 px-8 rounded-xl bg-gradient-to-r from-gold-dark via-gold to-gold-light text-dark-pure shadow-gold-glow hover:shadow-none transition-all duration-300"
            >
              <Calendar size={16} />
              <span>Book Consultation</span>
            </a>
            
            <a
              href="https://wa.me/919116989988?text=Hello%20Astrologer%20Ravi%20Sharma,%20I%20need%20immediate%20astrological%20guidance."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 font-outfit text-xs font-bold uppercase tracking-wider py-4 px-8 rounded-xl border border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-all duration-300"
            >
              <MessageSquare size={16} />
              <span>WhatsApp Now</span>
            </a>
            
            <a
              href="tel:+919116989988"
              className="w-full sm:w-auto flex items-center justify-center gap-2 font-outfit text-xs font-bold uppercase tracking-wider py-4 px-8 rounded-xl border border-gold text-gold hover:bg-gold hover:text-dark-pure transition-all duration-300"
            >
              <Phone size={16} />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
