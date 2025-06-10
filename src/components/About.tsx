import React from 'react';
import { Crown, Users, Award, Heart } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import LazyImage from './LazyImage';

const About = () => {
  const features = [
    {
      icon: Crown,
      title: "Royal Heritage",
      description: "Recipes passed down through generations of royal chefs, bringing authentic Mughal flavors to your table."
    },
    {
      icon: Users,
      title: "Family Tradition",
      description: "Founded in 1990 by the Sharma family, we've been serving the community with love and dedication for over three decades."
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized as the 'Best Indian Restaurant' for five consecutive years by the City Culinary Association."
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every dish is prepared with the finest ingredients and traditional cooking methods, served with genuine hospitality."
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-amber-50 via-orange-50/50 to-red-50/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-64 h-64 border border-amber-300 rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 border border-amber-300 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection className="text-center mb-20">
          <span className="inline-block px-6 py-3 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-full text-amber-700 text-sm font-semibold mb-6 border border-amber-200">
            Our Legacy
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            A Journey Through
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent block">
              Royal Indian Heritage
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Step into a world where culinary artistry meets royal tradition. Our restaurant pays homage to the 
            magnificent Taj Mahal, offering an authentic dining experience that transports you to the golden age of Indian cuisine.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <AnimatedSection animation="slideLeft">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-3xl blur-xl"></div>
              <LazyImage 
                src="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Traditional Indian cooking"
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="slideRight" delay={200}>
            <div className="space-y-8">
              <h3 className="text-4xl font-bold text-gray-900">
                From Heritage to Your Plate
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our master chefs have spent years perfecting the art of Indian cuisine, studying under renowned culinary masters 
                and preserving authentic cooking techniques that have been cherished for centuries.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Every spice is carefully selected, every recipe meticulously crafted, and every dish thoughtfully presented 
                to honor the rich culinary heritage of India while creating memorable experiences for our guests.
              </p>
              <div className="pt-6">
                <button className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-full hover:from-amber-600 hover:to-amber-700 transform hover:scale-105 transition-all duration-300 shadow-lg relative overflow-hidden">
                  <span className="relative z-10">Discover Our Story</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection 
              key={index}
              animation="fadeUp"
              delay={index * 150}
            >
              <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border border-gray-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;