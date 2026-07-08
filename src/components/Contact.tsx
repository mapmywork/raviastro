import { Phone, Mail, Clock, MapPin, MessageSquare } from 'lucide-react';

export default function Contact() {

  return (
    <section id="contact" className="py-24 bg-dark-pure relative overflow-hidden">
      {/* Decorative Aura */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-gold opacity-[0.01] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-outfit text-xs font-semibold tracking-widest text-gold uppercase">
            Start Your Transformation
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-wide font-cinzel">
            Connect With Astrologer Ravi
          </h2>
          <p className="font-outfit text-sm text-gray-400">
            Submit your queries or call us directly. Let us know how we can guide you.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          
          {/* Contact details & Map */}
          <div className="space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="font-cinzel text-xl font-bold text-white tracking-wide border-b border-dark-border pb-3">
                Get In Touch
              </h3>
              
              <ul className="space-y-6 font-outfit text-sm">
                <li className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gold bg-opacity-[0.03] border border-gold border-opacity-10 text-gold">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 font-bold block mb-0.5 uppercase tracking-wider">Call or WhatsApp</span>
                    <a href="tel:+919116989988" className="text-white hover:text-gold text-base font-semibold transition-colors">
                      +91 9116989988
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gold bg-opacity-[0.03] border border-gold border-opacity-10 text-gold">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 font-bold block mb-0.5 uppercase tracking-wider">Email Address</span>
                    <span className="text-white text-base font-semibold">
                      info@astrologerravisarma.com
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gold bg-opacity-[0.03] border border-gold border-opacity-10 text-gold">
                    <Clock size={20} />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 font-bold block mb-0.5 uppercase tracking-wider">Consultation Hours</span>
                    <span className="text-white text-base font-semibold">
                      09:00 AM - 09:00 PM Daily
                    </span>
                    <span className="text-xs text-gold-light opacity-50 block mt-0.5">(Prior Appointment Required)</span>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gold bg-opacity-[0.03] border border-gold border-opacity-10 text-gold">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 font-bold block mb-0.5 uppercase tracking-wider">Consultation Studio</span>
                    <span className="text-white text-sm leading-relaxed">
                      Sector 5, Mansarovar, Jaipur, Rajasthan - 302020
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Google Map Placeholder (Styled Luxuriously) */}
            <div className="relative h-44 rounded-2xl border border-gold border-opacity-10 bg-dark-card overflow-hidden shadow-glass group">
              {/* Fake Dark Map Background */}
              <div 
                className="absolute inset-0 bg-cover bg-center filter grayscale brightness-50 opacity-40 group-hover:scale-105 transition-transform duration-700" 
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=600')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-pure to-transparent z-10" />
              
              {/* Map Info overlay */}
              <div className="absolute inset-0 z-20 p-6 flex flex-col justify-between items-start">
                <div className="flex items-center gap-2">
                  <MapPin className="text-gold" size={16} />
                  <span className="font-cinzel text-xs font-bold text-white tracking-widest uppercase">
                    Jaipur Studio Map
                  </span>
                </div>
                
                <a 
                  href="https://maps.google.com/?q=Sector+5,+Mansarovar,+Jaipur,+Rajasthan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-outfit text-[10px] font-bold uppercase tracking-wider px-4 py-2 rounded bg-gold text-dark-pure group-hover:bg-gold-light transition-colors"
                >
                  View Interactive Map
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <span className="font-outfit text-xs text-gray-500 font-bold block uppercase tracking-wider">Follow Astrologer Ravi</span>
              <div className="flex gap-4">
                <a href="tel:+919116989988" className="p-2.5 rounded-lg border border-gold border-opacity-20 text-gold hover:bg-gold hover:text-dark-pure transition-colors">
                  <Phone size={18} />
                </a>
                <a href="https://wa.me/919116989988" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg border border-gold border-opacity-20 text-gold hover:bg-gold hover:text-dark-pure transition-colors">
                  <MessageSquare size={18} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg border border-gold border-opacity-20 text-gold hover:bg-gold hover:text-dark-pure transition-colors flex items-center justify-center" aria-label="Instagram">
                  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg border border-gold border-opacity-20 text-gold hover:bg-gold hover:text-dark-pure transition-colors flex items-center justify-center" aria-label="YouTube">
                  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </a>
              </div>
            </div>
          </div>



        </div>
      </div>
    </section>
  );
}
