import { motion } from 'framer-motion';
import { Award, ShieldCheck, HeartHandshake, User, Target, Zap, Laptop, Star } from 'lucide-react';

export default function WhyChooseUs() {
  const cards = [
    {
      icon: <Award size={32} strokeWidth={1.5} />,
      title: '15+ Years Experience',
      description: 'Over a decade and a half of studying birth charts and delivering trusted predictions.',
    },
    {
      icon: <ShieldCheck size={32} strokeWidth={1.5} />,
      title: '100% Confidential',
      description: 'Your details, birth charts, problems, and consultation notes are kept strictly private.',
    },
    {
      icon: <Star size={32} strokeWidth={1.5} />,
      title: 'Trusted Guidance',
      description: 'Sincere, honest guidance without creating unnecessary fear or selling expensive superstitions.',
    },
    {
      icon: <User size={32} strokeWidth={1.5} />,
      title: 'Personal Consultation',
      description: 'One-on-one focused analysis directly with Astrologer Ravi Sharma for deep insights.',
    },
    {
      icon: <Target size={32} strokeWidth={1.5} />,
      title: 'Accurate Predictions',
      description: 'Calculations based on rigorous mathematical Vedic algorithms to predict key time periods.',
    },
    {
      icon: <Zap size={32} strokeWidth={1.5} />,
      title: 'Instant Support',
      description: 'Fast booking, quick online responses, and prompt delivery of remedies.',
    },
    {
      icon: <Laptop size={32} strokeWidth={1.5} />,
      title: 'Online Consultation',
      description: 'Access consultation from anywhere in the world via phone call, Google Meet, or WhatsApp.',
    },
    {
      icon: <HeartHandshake size={32} strokeWidth={1.5} />,
      title: 'Customer Satisfaction',
      description: 'Our core philosophy is providing clarity and peace of mind to each and every seeker.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring' as const, stiffness: 100, damping: 20 },
    },
  };

  return (
    <section id="why-us" className="py-24 bg-dark-pure relative overflow-hidden">
      {/* Decorative center glowing background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold opacity-[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-outfit text-xs font-semibold tracking-widest text-gold uppercase">
            A Spiritual Pillar of Trust
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-wide font-cinzel">
            Why Choose Astrologer Ravi Sharma?
          </h2>
          <p className="font-outfit text-sm text-gray-400">
            A blending of deep spiritual inheritance, years of dedicated study, and a modern, realistic approach to life guidance.
          </p>
        </div>

        {/* Yellow/Gold Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {cards.map((card, idx) => (
            <motion.div
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                boxShadow: '0 20px 40px rgba(212, 175, 55, 0.25)',
              }}
              key={idx}
              className="flex flex-col p-6 rounded-2xl bg-gradient-to-br from-gold-light via-gold to-gold-dark text-dark-pure border border-gold-light border-opacity-40 transition-all duration-300 relative group cursor-pointer overflow-hidden shadow-gold-glow"
            >
              {/* Card light reflection shine effect on hover */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-1000 ease-out" />
              
              {/* Card Icon */}
              <div className="mb-4 text-dark-pure shrink-0">
                {card.icon}
              </div>

              {/* Card Heading */}
              <h3 className="font-cinzel text-lg font-bold tracking-wide mb-2 text-dark-pure">
                {card.title}
              </h3>

              {/* Card Description */}
              <p className="font-outfit text-xs leading-relaxed text-dark-pure opacity-80 mt-auto font-medium">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
