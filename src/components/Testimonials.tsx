import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  review: string;
  image: string;
}

export default function Testimonials() {
  const reviews: Testimonial[] = [
    {
      id: 1,
      name: 'Aditya Sharma',
      location: 'Delhi, India',
      rating: 5,
      review: 'I was facing a terrible slowdown in my garment manufacturing business. Astrologer Ravi ji analyzed my 10th house and suggested Vastu changes for my factory and a lucky gemstone. Within 3 months, our exports resumed and we cleared our debts!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150',
    },
    {
      id: 2,
      name: 'Priya Patel',
      location: 'London, UK',
      rating: 5,
      review: 'My relationship with my partner was falling apart due to parental disapproval. Ravi ji did our Kundli Matching and suggested simple remedies. Today, we are happily married with the blessings of both families. Highly recommend his honest guidance.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150',
    },
    {
      id: 3,
      name: 'Vikram Malhotra',
      location: 'Mumbai, India',
      rating: 5,
      review: 'Accurate timing is his specialty. He predicted the exact month I would receive my visa and get a job offer in Canada, after three consecutive rejections. I am grateful for his guidance and the Manglik Dosha remedies he prescribed.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150',
    },
    {
      id: 4,
      name: 'Ananya Iyer',
      location: 'Bengaluru, India',
      rating: 5,
      review: 'I had severe health problems and mental anxiety for over a year. Ravi Sharma ji analyzed my birth chart and explained the ongoing Saturn Dasha effects. His gemstone and mantra remedies brought a dramatic positive shift in my energy.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150',
    },
    {
      id: 5,
      name: 'Rajesh Mehta',
      location: 'Ahmedabad, India',
      rating: 5,
      review: 'I consulted Ravi ji for a name correction of my startup. Using numerology, he altered a single letter. Believe it or not, we raised our seed funding within 45 days after the launch of the corrected brand name.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150',
    },
    {
      id: 6,
      name: 'Dr. Shalini Joshi',
      location: 'Pune, India',
      rating: 5,
      review: 'As a doctor, I was skeptical, but his scientific explanations of planetary transitions convinced me. His Kundli readings and Kaal Sarp remedies helped clear long-standing legal hurdles in expanding my hospital.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150',
    },
    {
      id: 7,
      name: 'Siddharth Roy',
      location: 'Kolkata, India',
      rating: 5,
      review: 'My marriage was on the verge of divorce. Endless arguments were draining us. Ravi ji studied our charts and pointed out a Vastu defect in our bedroom layout. Rearranging the room and following his remedies saved our home.',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150',
    },
    {
      id: 8,
      name: 'Neha Singhal',
      location: 'Gurgaon, India',
      rating: 5,
      review: 'Very professional, straightforward, and compassionate. He doesn’t scare you with exaggerated curses but focuses on practical remedies. My career progression has been highly stable following his annual horoscope guidance.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150',
    },
    {
      id: 9,
      name: 'Karan Johar (Advocate)',
      location: 'Jaipur, India',
      rating: 5,
      review: 'Ravi ji is my go-to consultant for all major decisions. His timing regarding real estate investments and property acquisitions has been 100% correct over the last six years. He is a truly genuine astrologer.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150',
    },
    {
      id: 10,
      name: 'Sneha Fernandez',
      location: 'Dubai, UAE',
      rating: 5,
      review: 'Ravi ji provided excellent career guidance for my daughter, suggesting she study computing instead of medical sciences based on her Mercury-Jupiter placement. She excelled in her university and got placed at a top firm.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150',
    },
    {
      id: 11,
      name: 'Aravind Swamy',
      location: 'Singapore',
      rating: 5,
      review: 'He identified Pitru Dosha in my chart which explained our family’s struggles. After performing the remedies he suggested, there is a sense of peace, and my brother’s health has significantly recovered.',
      image: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=150',
    },
    {
      id: 12,
      name: 'Meera Deshmukh',
      location: 'New York, USA',
      rating: 5,
      review: 'Even with a 10-hour time difference, booking an online session was seamless. His palmistry reading was shocking in its accuracy about my past events, and his numerology name balancing has given me tremendous focus.',
      image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=150',
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-dark-pure relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-outfit text-xs font-semibold tracking-widest text-gold uppercase">
            Words of Trust from Seekers
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-wide font-cinzel">
            Client Testimonials
          </h2>
          <p className="font-outfit text-sm text-gray-400">
            Real stories of transformation, clarity, and peace from clients across the globe.
          </p>
        </div>

        {/* Swiper Carousel */}
        <div className="pb-12">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="testimonial-swiper !overflow-visible"
          >
            {reviews.map((item) => (
              <SwiperSlide key={item.id} className="h-full">
                <div className="flex flex-col h-full bg-white text-dark-pure border-2 border-gold rounded-2xl p-6 sm:p-8 shadow-gold-glow relative group transition-transform duration-300 hover:scale-[1.01]">
                  
                  {/* Decorative Quote Icon */}
                  <Quote className="absolute right-6 top-6 text-gold opacity-15" size={40} />

                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="text-gold fill-gold" size={16} />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="font-outfit text-sm text-gray-700 leading-relaxed italic mb-8 flex-grow">
                    "{item.review}"
                  </p>

                  {/* Client Info Block */}
                  <div className="flex items-center gap-4 mt-auto border-t border-gray-150 pt-4">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-12 h-12 rounded-full object-cover border border-gold shrink-0"
                    />
                    <div className="flex flex-col">
                      <span className="font-cinzel text-sm font-bold text-dark-pure tracking-wide">
                        {item.name}
                      </span>
                      <span className="font-outfit text-[11px] text-gray-500 font-semibold tracking-wider uppercase">
                        {item.location}
                      </span>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}
