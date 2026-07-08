import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import slide1Img from '../assets/1.png';
import slide2Img from '../assets/2.png';
import slide3Img from '../assets/3.png';
import slide4Img from '../assets/4.png';

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const images = [slide1Img, slide2Img, slide3Img, slide4Img];

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    
    return () => clearInterval(timer);
  }, [current, images.length]);

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const slideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 }
      }
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? '100%' : '-100%',
      opacity: 0,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 }
      }
    })
  };

  return (
    <section id="home" className="relative w-full bg-dark-pure pt-20 sm:pt-24">
      <div className="relative w-full max-w-[1920px] mx-auto overflow-hidden group">
        {/* Invisible spacer image to maintain exact aspect ratio of the banner */}
        <img src={images[0]} alt="Spacer" className="w-full h-auto invisible pointer-events-none" />

        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={current}
            src={images[current]}
            alt={`Hero Banner ${current + 1}`}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full object-cover bg-black/20"
          />
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="absolute inset-0 flex items-center justify-between px-2 sm:px-8 z-10 pointer-events-none">
          <button
            onClick={handlePrev}
            className="pointer-events-auto p-2 sm:p-3 rounded-full bg-black/40 text-white hover:bg-black/70 hover:scale-110 backdrop-blur-sm transition-all duration-300 shadow-lg"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="pointer-events-auto p-2 sm:p-3 rounded-full bg-black/40 text-white hover:bg-black/70 hover:scale-110 backdrop-blur-sm transition-all duration-300 shadow-lg"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > current ? 1 : -1);
                setCurrent(idx);
              }}
              className={`h-2 transition-all duration-300 rounded-full shadow-lg ${
                idx === current ? 'bg-gold w-8' : 'bg-white/50 hover:bg-white/80 w-2'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

