import { motion } from 'framer-motion';
import { PhoneCall, CalendarCheck, FileSpreadsheet, Sparkles, Compass } from 'lucide-react';

export default function ConsultationProcess() {
  const steps = [
    {
      step: '01',
      icon: <PhoneCall className="text-gold" size={24} />,
      title: 'Call or WhatsApp',
      description: 'Initiate connection by clicking our direct dial or WhatsApp chat link to inquire about timings.',
    },
    {
      step: '02',
      icon: <FileSpreadsheet className="text-gold" size={24} />,
      title: 'Share Birth Details',
      description: 'Provide your accurate Date of Birth, Birth Time, and Birth Place for precise horoscope calculations.',
    },
    {
      step: '03',
      icon: <CalendarCheck className="text-gold" size={24} />,
      title: 'Book Consultation',
      description: 'Secure an available slot for a detailed one-on-one telephonic or video meeting session.',
    },
    {
      step: '04',
      icon: <Compass className="text-gold" size={24} />,
      title: 'Receive Astrology Guidance',
      description: 'Have a detailed session talking through planetary charts, houses, dashas, and current issues.',
    },
    {
      step: '05',
      icon: <Sparkles className="text-gold" size={24} />,
      title: 'Follow Remedies',
      description: 'Receive personalized Vedic remedies, gemstone suggestions, mantra vibrations, or Vastu alignments.',
    },
  ];

  return (
    <section id="process" className="py-24 bg-dark-pure relative overflow-hidden">
      {/* Background Decorative Mandala */}
      <div className="absolute left-10 top-10 w-96 h-96 bg-gold opacity-[0.01] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="font-outfit text-xs font-semibold tracking-widest text-gold uppercase">
            Step-By-Step Path to Clarity
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-wide font-cinzel">
            Consultation Process
          </h2>
          <p className="font-outfit text-sm text-gray-400">
            How to consult with Astrologer Ravi Sharma. An organized, streamlined method to get answers to your life questions.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-gold border-opacity-15 md:border-l-0 md:before:content-[''] md:before:absolute md:before:left-1/2 md:before:h-full md:before:w-0.5 md:before:bg-gold md:before:bg-opacity-15 space-y-12 md:space-y-0">
          {steps.map((step, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={idx} className="relative md:grid md:grid-cols-2 md:gap-8 items-center min-h-[150px]">
                
                {/* Visual Timeline Marker Node */}
                <div className="absolute left-[-25px] md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-dark-card border-2 border-gold shadow-gold-glow z-20">
                  {step.icon}
                </div>

                {/* Content block: Alternates left and right on desktop */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`pl-8 md:pl-0 ${
                    isEven 
                      ? 'md:text-right md:col-start-1 md:pr-12' 
                      : 'md:text-left md:col-start-2 md:pl-12'
                  }`}
                >
                  {/* Step Number */}
                  <span className="font-cinzel text-4xl font-black text-gold text-opacity-10 block mb-1">
                    STEP {step.step}
                  </span>
                  
                  {/* Step Title */}
                  <h3 className="font-cinzel text-lg font-bold text-white tracking-wide mb-2">
                    {step.title}
                  </h3>
                  
                  {/* Step Description */}
                  <p className="font-outfit text-sm text-gray-400 leading-relaxed max-w-md mx-auto md:mx-0 inline-block">
                    {step.description}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
