import React, { useEffect, useState } from 'react';
import { Star, Clock, MapPin } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-white rounded-full animate-ping"></div>
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-amber-300 rounded-full animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto pt-32 sm:pt-24">
        <AnimatedSection animation="fadeUp" delay={500}>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 bg-clip-text text-transparent drop-shadow-2xl">
              Taj Mahal
            </span>
            <br />
            <span className="text-xl sm:text-3xl md:text-5xl font-light text-white/90">
              Royal Indian Restaurant
            </span>
          </h1>
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" delay={700}>
          <p className="text-base sm:text-lg md:text-2xl mb-10 text-gray-200 max-w-4xl mx-auto leading-relaxed font-light">
            Experience the grandeur of Mughal cuisine in an atmosphere inspired by India's most magnificent monument. 
            Where every meal is a royal celebration.
          </p>
        </AnimatedSection>

        {/* Stats */}
        <AnimatedSection animation="fadeUp" delay={900}>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-10">
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 sm:px-6 sm:py-3 border border-white/20">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 fill-current" />
                ))}
              </div>
              <span className="text-sm sm:text-lg font-semibold">4.9/5 Rating</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 sm:px-6 sm:py-3 border border-white/20">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
              <span className="text-sm sm:text-lg font-semibold">30+ Years Legacy</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 sm:px-6 sm:py-3 border border-white/20">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
              <span className="text-sm sm:text-lg font-semibold">Prime Location</span>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Buttons */}
        <AnimatedSection animation="fadeUp" delay={1100}>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-16">
  <button 
    onClick={() => window.location.href = "https://example.com/reservations"}
    className="group px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-full hover:from-amber-600 hover:to-amber-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-amber-500/25 relative overflow-hidden"
  >
    <span className="relative z-10">Reserve Your Table</span>
    <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </button>
  <button 
    onClick={() => window.location.href = "https://example.com/menu"}
    className="group px-8 sm:px-10 py-4 sm:py-5 border-2 border-white/80 text-white font-bold rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 backdrop-blur-sm relative overflow-hidden"
  >
    <span className="relative z-10">Explore Menu</span>
  </button>
</div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Hero;
