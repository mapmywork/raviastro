import { Phone, MessageSquare, Calendar } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative py-24 bg-dark-pure overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 stars-overlay opacity-25 pointer-events-none" />

      {/* Rotating Mandala Background Outline */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none">
        <svg className="w-[800px] h-[800px] text-gold animate-spin-reverse-slow" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="0.3" />
          <path d="M100 10 L100 190 M10 100 L190 100" stroke="currentColor" strokeWidth="0.2" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
        <span className="font-outfit text-xs font-bold tracking-widest text-gold uppercase">
          Empower Your Journey
        </span>
        
        <h2 className="text-4xl sm:text-5xl font-extrabold font-cinzel tracking-tight text-white leading-tight">
          Your Answers May Be Just <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-gold-dark filter drop-shadow-[0_2px_8px_rgba(212,175,55,0.15)]">
            One Consultation Away
          </span>
        </h2>
        
        <p className="font-outfit text-base text-gray-400 max-w-xl mx-auto leading-relaxed">
          Align your actions with cosmic timings. Book a confidential, accurate birth chart analysis today and take the first step towards a prosperous future.
        </p>

        {/* Buttons Panels */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 max-w-md mx-auto">
          <a
            href="#contact"
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 font-outfit text-xs font-bold uppercase tracking-wider py-4 px-6 rounded-xl bg-gradient-to-r from-gold-dark via-gold to-gold-light text-dark-pure shadow-gold-glow-lg hover:shadow-none transition-all duration-300"
          >
            <Calendar size={16} />
            <span>Book Consultation</span>
          </a>
          
          <a
            href="https://wa.me/919116989988?text=Hello%20Astrologer%20Ravi%20Sharma,%20I%20want%20to%20book%20a%20consultation%20with%20you."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 font-outfit text-xs font-bold uppercase tracking-wider py-4 px-6 rounded-xl border border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-all duration-300"
          >
            <MessageSquare size={16} />
            <span>WhatsApp</span>
          </a>
          
          <a
            href="tel:+919116989988"
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 font-outfit text-xs font-bold uppercase tracking-wider py-4 px-6 rounded-xl border border-gold text-gold hover:bg-gold hover:text-dark-pure transition-all duration-300"
          >
            <Phone size={16} />
            <span>Call Now</span>
          </a>
        </div>
      </div>
    </section>
  );
}
