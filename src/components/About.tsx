import { motion } from 'framer-motion';
import { Compass, CheckCircle2 } from 'lucide-react';

export default function About() {
  const specializations = [
    { title: 'Vedic Kundli Analysis', desc: 'Decoding planetary positions to map life charts.' },
    { title: 'Vastu Shastra Consultation', desc: 'Harmonizing residential and business environments.' },
    { title: 'Love & Marriage Timing', desc: 'Predicting relationships, compatibility (Gun Milan), and marriage.' },
    { title: 'Career & Wealth Guidance', desc: 'Identifying business success periods and job opportunities.' },
    { title: 'Gemstone & Numerology', desc: 'Using vibrational alignment for name correction and gemstone remedies.' },
    { title: 'Dosha Nivarana Remedies', desc: 'Custom remedies for Kaal Sarp, Pitru, and Manglik Doshas.' },
  ];

  return (
    <section id="about" className="py-24 bg-dark-pure relative overflow-hidden">
      {/* Decorative Aura */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-gold opacity-[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Narrative Content */}
        <div className="space-y-8">
            <div className="space-y-3">
              <span className="flex items-center gap-2 font-outfit text-xs font-semibold tracking-widest text-gold uppercase">
                <Compass size={14} className="animate-spin-slow text-gold" /> Meet Your Astrologer
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-wide">
                About Astrologer <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-gold-dark">
                  Ravi Sharma
                </span>
              </h2>
            </div>

            <div className="font-outfit text-gray-400 space-y-4 leading-relaxed">
              <p>
                Astrologer Ravi Sharma is a highly revered Vedic Jyotish, Vastu Consultant, and Numerologist with over 15 years of dedicated practice. Born into a lineage of Vedic practitioners, he combined his traditional upbringing with extensive research to offer highly scientific, practical, and honest guidance to thousands of clients worldwide.
              </p>
              <p>
                Unlike fear-based astrology, Shri Ravi Sharma advocates for a balanced approach where astrology acts as a compass to guide, rather than a fixed boundary. His methods focus on finding the root cause of difficulties through your **Janam Kundli (Birth Chart)**, offering effective and simple remedies (Upayas) that fit into modern life.
              </p>
            </div>

            {/* Specialties Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-dark-border">
              {specializations.map((spec, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  key={i} 
                  className="flex gap-3"
                >
                  <CheckCircle2 className="text-gold shrink-0 mt-1" size={18} />
                  <div className="space-y-1">
                    <h4 className="font-outfit text-sm font-semibold text-white tracking-wide">
                      {spec.title}
                    </h4>
                    <p className="font-outfit text-xs text-gray-400">
                      {spec.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
}
