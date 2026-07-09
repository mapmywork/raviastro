import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageSquare, Compass, Heart, Briefcase, Sparkles, Binary, Home } from 'lucide-react';


interface Service {
  id: number;
  title: string;
  description: string;
  category: 'love' | 'career' | 'kundli' | 'numerology' | 'vastu';
  image: string;
}

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Services', icon: <Compass size={16} /> },
    { id: 'love', name: 'Love & Marriage', icon: <Heart size={16} /> },
    { id: 'career', name: 'Career & Finance', icon: <Briefcase size={16} /> },
    { id: 'kundli', name: 'Kundli & Dosha', icon: <Sparkles size={16} /> },
    { id: 'numerology', name: 'Numerology & Palmistry', icon: <Binary size={16} /> },
    { id: 'vastu', name: 'Vastu & Healing', icon: <Home size={16} /> },
  ];

  const servicesList: Service[] = [
    // --- Love & Marriage (8 services) ---
    {
      id: 1,
      title: 'Love Problem Solution',
      description: 'Resolving misunderstandings, communication gaps, and third-party issues in relationship affairs.',
      category: 'love',
      image: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=400',
    },
    {
      id: 2,
      title: 'Love Marriage Guidance',
      description: 'Navigating parental disapproval and societal delays to align planetary systems for a happy union.',
      category: 'love',
      image: 'https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?q=80&w=400',
    },
    {
      id: 3,
      title: 'Relationship Guidance',
      description: 'Strengthening emotional intimacy and resolving cyclic arguments using natal compatibility charts.',
      category: 'love',
      image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=400',
    },
    {
      id: 4,
      title: 'Breakup Solution',
      description: 'Vedic healing for emotional trauma and restoring planetary harmony post-relationship endings.',
      category: 'love',
      image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=400',
    },
    {
      id: 5,
      title: 'Get Ex Love Back',
      description: 'Analyzing compatibility blockages to remove obstacles and reignite lost affection between partners.',
      category: 'love',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400',
    },
    {
      id: 6,
      title: 'Marriage Problem Solution',
      description: 'Overcoming obstacles that delay marriage or creating harmony after disputes arise.',
      category: 'love',
      image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=400',
    },
    {
      id: 7,
      title: 'Husband Wife Disputes',
      description: 'Resolving domestic friction, ego clashes, and mutual trust issues using planetary adjustment remedies.',
      category: 'love',
      image: 'https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?q=80&w=400',
    },
    {
      id: 8,
      title: 'Family Problems',
      description: 'Restoring absolute peace, resolving property disputes, and building harmony among family members.',
      category: 'love',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=400',
    },

    // --- Career & Finance (6 services) ---
    {
      id: 9,
      title: 'Career Guidance',
      description: 'Analyzing the 10th House of your birth chart to find the right career choice and industry.',
      category: 'career',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=400',
    },
    {
      id: 10,
      title: 'Business Astrology',
      description: 'Identifying lucky business partners, auspicious dates, and highly profitable sectors for investment.',
      category: 'career',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400',
    },
    {
      id: 11,
      title: 'Financial Astrology',
      description: 'Determining the wealth-creating potential (Dhana Yogas) of your horoscope and debt recovery.',
      category: 'career',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=400',
    },
    {
      id: 12,
      title: 'Career Timing',
      description: 'Mapping the precise periods of promotion, job switches, increments, and career breakthroughs.',
      category: 'career',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=400',
    },
    {
      id: 13,
      title: 'Business Timing',
      description: 'Pinpointing when to expand your enterprise, launch products, or pause critical deals.',
      category: 'career',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=400',
    },
    {
      id: 14,
      title: 'Foreign Settlement Guidance',
      description: 'Assessing your charts for educational or professional opportunities to travel and settle abroad.',
      category: 'career',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=400',
    },

    // --- Kundli & Doshas (6 services) ---
    {
      id: 15,
      title: 'Kundli Matching',
      description: 'Comprehensive 36-Guna matching (Ashtakoot Milan) to evaluate marital longevity, health, and mutual love.',
      category: 'kundli',
      image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=400',
    },
    {
      id: 16,
      title: 'Kundli Analysis',
      description: 'In-depth readings of lagna chart, planetary dasha cycles, and major transits for life forecasts.',
      category: 'kundli',
      image: 'https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?q=80&w=400',
    },
    {
      id: 17,
      title: 'Janam Kundli',
      description: 'Creation of personalized birth charts detailing ascendant, moon sign, nakshatra, and planet positions.',
      category: 'kundli',
      image: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=400',
    },
    {
      id: 18,
      title: 'Manglik Dosha',
      description: 'Remedies and rituals to pacify the intense placement of Mars (Mangal) in marriage houses.',
      category: 'kundli',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400',
    },
    {
      id: 19,
      title: 'Kaal Sarp Dosha',
      description: 'Relief remedies for charts where all planets are hemmed between Rahu and Ketu, causing blocks.',
      category: 'kundli',
      image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=400',
    },
    {
      id: 20,
      title: 'Pitru Dosha',
      description: 'Mitigation guidelines to clear ancestral line blockages, restoring child and lineage health.',
      category: 'kundli',
      image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=400',
    },

    // --- Numerology & Palmistry (5 services) ---
    {
      id: 21,
      title: 'Numerology',
      description: 'Decoding the impact of your birth date numbers, path destiny number, and daily vibrational codes.',
      category: 'numerology',
      image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=400',
    },
    {
      id: 22,
      title: 'Palm Reading',
      description: 'Analyzing mounts, lines of heart, life, head, and fate on your palms for life guidance.',
      category: 'numerology',
      image: 'https://images.unsplash.com/photo-1590073844006-33379778ae09?q=80&w=400',
    },
    {
      id: 23,
      title: 'Vehicle Number Numerology',
      description: 'Choosing custom registration numbers that match your destiny for safety and prosperity.',
      category: 'numerology',
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=400',
    },
    {
      id: 24,
      title: 'Name Correction',
      description: 'Adjusting letters in your spelling to align your name vibration with your birth date numbers.',
      category: 'numerology',
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=400',
    },
    {
      id: 25,
      title: 'Lucky Number Analysis',
      description: 'Pinpointing numbers, colors, and days that enhance luck, success, and positive returns.',
      category: 'numerology',
      image: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?q=80&w=400',
    },

    // --- Vastu & Healing (5 services) ---
    {
      id: 26,
      title: 'Vastu Consultation',
      description: 'Non-destructive correction methods to balance the five natural elements in your living space.',
      category: 'vastu',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400',
    },
    {
      id: 27,
      title: 'Health Astrology',
      description: 'Studying the 6th and 8th houses to identify physical weaknesses and planetary timings of illness.',
      category: 'vastu',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=400',
    },
    {
      id: 28,
      title: 'Child Education Guidance',
      description: 'Analyzing the 5th house of intellect to map a child’s concentration fields and study remedies.',
      category: 'vastu',
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=400',
    },
    {
      id: 29,
      title: 'Gemstone Consultation',
      description: 'Prescribing precious/semi-precious stones (ruby, sapphire, emerald) based on planetary strength.',
      category: 'vastu',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=400',
    },
    {
      id: 30,
      title: 'Marriage Timing',
      description: 'Analyzing planetary transits (Jupiter, Venus) to pinpoint the exact window of marriage.',
      category: 'vastu',
      image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=400',
    },
  ];



  const filteredServices = activeCategory === 'all'
    ? servicesList
    : servicesList.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-24 bg-dark-pure relative overflow-hidden">
      {/* Decorative grids */}
      <div className="absolute right-0 top-1/3 w-96 h-96 bg-gold opacity-[0.01] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-gold opacity-[0.01] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-outfit text-xs font-semibold tracking-widest text-gold uppercase">
            Ancient Science, Modern Remedies
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-wide font-cinzel">
            Astrology Consultation Services
          </h2>
          <p className="font-outfit text-sm text-gray-400">
            Choose from a wide spectrum of Vedic and scientific astro-consultations. Filter by category to find the answer you seek.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 font-outfit text-xs font-semibold uppercase tracking-wider px-5 py-3 rounded-xl border transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-gold-dark via-gold to-gold-light text-dark-pure border-transparent shadow-gold-glow'
                  : 'bg-dark bg-opacity-40 border-dark-border text-gray-400 hover:border-gold hover:border-opacity-30 hover:text-white'
              }`}
            >
              {cat.icon}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Services Grid with AnimatePresence */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={service.id}
                className="flex flex-col rounded-2xl border border-gold border-opacity-10 bg-dark-card hover:border-opacity-30 hover:shadow-gold-glow transition-all duration-500 overflow-hidden group"
              >
                {/* Image Aspect ratio container */}
                <div className="h-52 overflow-hidden relative">
                  {/* Subtle golden screen */}
                  <div className="absolute inset-0 bg-gold bg-opacity-[0.05] z-10 mix-blend-color" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent z-20" />
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.8] group-hover:brightness-[0.95]"
                  />
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-cinzel text-lg font-bold tracking-wide text-gold mb-3">
                    {service.title}
                  </h3>
                  <p className="font-outfit text-sm text-gray-400 leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>

                  {/* CTAs */}
                  <div className="grid grid-cols-2 gap-3 mt-auto">
                    <a
                      href={`https://wa.me/919116989988?text=Hello%20Astrologer%20Ravi%20Sharma,%20I%20am%20interested%20in%20your%20${encodeURIComponent(service.title)}%20service.%20Please%20guide%20me.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 font-outfit text-xs font-semibold uppercase tracking-wider py-2.5 rounded-lg border border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-colors duration-200"
                    >
                      <MessageSquare size={14} /> WhatsApp
                    </a>
                    <a
                      href="tel:+919116989988"
                      className="flex items-center justify-center gap-2 font-outfit text-xs font-semibold uppercase tracking-wider py-2.5 rounded-lg border border-gold text-gold hover:bg-gold hover:text-dark-pure transition-colors duration-200"
                    >
                      <Phone size={14} /> Call Now
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
