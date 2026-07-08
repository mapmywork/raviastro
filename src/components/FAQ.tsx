import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: 'How does Vedic Astrology work?',
      answer: 'Vedic Astrology (Jyotish) is an ancient science based on the principle that the positions of planets and stars at the time of your birth influence your life path. By analyzing your Janam Kundli (Birth Chart), we map these celestial positions to identify strengths, challenges, and timings of major events in your life.',
    },
    {
      question: 'Do I need my exact birth time for an accurate horoscope reading?',
      answer: 'Yes, exact birth time is highly recommended for micro-calculations like the Dasha cycles, divisional charts, and correct ascendant degree. However, if you do not have the exact time, we can perform a process called "Birth Time Rectification" by matching major life events to calculate your correct time, or consult via Palmistry.',
    },
    {
      question: 'Can the consultation be conducted online?',
      answer: 'Absolutely. We offer complete remote consultations via phone calls, WhatsApp video, or Google Meet. All remedies and birth chart PDFs will be shared with you digitally. The effectiveness of the reading remains exactly the same as in-person.',
    },
    {
      question: 'How do I book an appointment with Astrologer Ravi Sharma?',
      answer: 'You can book an appointment by filling out the Contact Form, clicking the "WhatsApp Now" button, or calling +91 9116989988 directly. Our assistant will coordinate with you to choose a convenient slot and share the payment details.',
    },
    {
      question: 'Are my consultations and details kept confidential?',
      answer: 'Yes, 100%. Client privacy is our highest priority. All your personal details, birth data, family issues, and remedies discussed are strictly confidential and are never shared with anyone.',
    },
    {
      question: 'What kinds of problems can be resolved through Vedic Astrology?',
      answer: 'Astrology acts as a guide for key areas: resolving love and marriage obstacles, restoring relationship harmony, predicting career timing and business expansion, analyzing financial blocks, recommending education fields, identifying planetary health issues, and solving Vastu imbalances.',
    },
    {
      question: 'What details should I prepare before our session?',
      answer: 'Please keep your Birth Date (DD-MM-YYYY), exact Birth Time (with AM/PM), and Birth Place (City/State) ready. If you are consulting for compatibility, please prepare the birth details of your partner as well.',
    },
    {
      question: 'Are the remedies suggested complex or expensive to perform?',
      answer: 'No. Astrologer Ravi Sharma believes in simple, practical, and non-superstitious remedies. These usually include chanting mantras, practicing charity, donation of specific foods, adjusting spatial layouts (Vastu) without demolition, or wearing verified gemstones.',
    },
    {
      question: 'How soon can I expect results from the remedies?',
      answer: 'The transition of energies takes time. Generally, clients begin to feel mental clarity and gradual positive shifts within 3 to 6 weeks of performing remedies with sincerity and faith. However, results are highly dependent on individual planetary dashas.',
    },
    {
      question: 'Do you offer gemstone recommendations, and are they authentic?',
      answer: 'Yes. We analyze your chart to find auspicious planets (Yogakarakas) and recommend specific gemstones. We guide you on the correct weight, metal, finger, and method of wearing, and can assist in sourcing 100% natural, lab-certified gems.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-dark-pure relative overflow-hidden">
      {/* Decorative Aura */}
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gold opacity-[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-outfit text-xs font-semibold tracking-widest text-gold uppercase flex items-center justify-center gap-2">
            <HelpCircle size={14} /> Clear Your Doubts
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-wide font-cinzel">
            Frequently Asked Questions
          </h2>
          <p className="font-outfit text-sm text-gray-400">
            Find answers to common queries regarding Vedic calculations, booking, online sessions, and remedies.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-gold border-opacity-10 bg-dark-card hover:border-opacity-25 transition-colors duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="font-cinzel text-sm sm:text-base font-bold text-white tracking-wide pr-4">
                    {faq.question}
                  </span>
                  <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full border border-gold border-opacity-20 text-gold bg-gold bg-opacity-5">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 border-t border-dark-border pt-4 font-outfit text-sm text-gray-400 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
