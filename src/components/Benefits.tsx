import { UserCheck, Zap, Video, Sparkles, Scale, Lock, IndianRupee, CalendarRange } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: <UserCheck className="text-gold" size={24} />,
      title: 'Personal Consultation',
      desc: 'Discuss directly with Astrologer Ravi Sharma for private and custom guidance.',
    },
    {
      icon: <Zap className="text-gold" size={24} />,
      title: 'Fast Response',
      desc: 'Quick booking updates and priority support over calls and WhatsApp messages.',
    },
    {
      icon: <Video className="text-gold" size={24} />,
      title: 'Online Consultation',
      desc: 'Connect easily via video call or phone call from the comfort of your home.',
    },
    {
      icon: <Sparkles className="text-gold" size={24} />,
      title: 'Trusted Remedies',
      desc: 'Simple, non-destructive, cost-effective Vedic remedies and gemstone advice.',
    },
    {
      icon: <Scale className="text-gold" size={24} />,
      title: 'Accurate Analysis',
      desc: 'Rigorous calculation of planetary alignment to ensure precise life readings.',
    },
    {
      icon: <Lock className="text-gold" size={24} />,
      title: '100% Confidential',
      desc: 'Every detail shared remains strictly secured under our privacy guarantee.',
    },
    {
      icon: <IndianRupee className="text-gold" size={24} />,
      title: 'Affordable Fees',
      desc: 'Reasonable and honest consulting pricing structure, with no hidden charges.',
    },
    {
      icon: <CalendarRange className="text-gold" size={24} />,
      title: 'Available Daily',
      desc: 'Open seven days a week for booking, ensuring help is there when you need it.',
    },
  ];

  return (
    <section className="py-24 bg-dark-pure relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-outfit text-xs font-semibold tracking-widest text-gold uppercase">
            Designed For Your Convenience
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-wide font-cinzel">
            Consultation Benefits
          </h2>
          <p className="font-outfit text-sm text-gray-400">
            Enjoy premium care, accurate answers, and highly scientific advice at every phase of your journey.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, i) => (
            <div 
              key={i}
              className="p-6 rounded-2xl bg-dark-card border border-gold border-opacity-5 hover:border-opacity-20 hover:shadow-gold-glow transition-all duration-300 flex flex-col items-center text-center group"
            >
              {/* Icon Frame */}
              <div className="p-4 rounded-full bg-gold bg-opacity-[0.03] border border-gold border-opacity-10 group-hover:scale-110 group-hover:bg-opacity-5 transition-transform duration-350 mb-4 shrink-0">
                {benefit.icon}
              </div>

              {/* Title */}
              <h3 className="font-cinzel text-md font-bold tracking-wide text-white mb-2">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="font-outfit text-xs text-gray-400 leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
