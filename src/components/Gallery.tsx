import React from 'react';
import { Camera, Users, Utensils, Building } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import LazyImage from './LazyImage';

const Gallery = () => {
  const galleryItems = [
    {
      image: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Traditional Cooking",
      category: "Kitchen"
    },
    {
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Elegant Dining",
      category: "Ambiance"
    },
    {
      image: "https://images.pexels.com/photos/1418322/pexels-photo-1418322.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Signature Dishes",
      category: "Food"
    },
    {
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Fresh Spices",
      category: "Ingredients"
    },
    {
      image: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Royal Feast",
      category: "Food"
    },
    {
      image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Warm Hospitality",
      category: "Service"
    }
  ];

  const stats = [
    { icon: Users, number: "50,000+", label: "Happy Customers" },
    { icon: Utensils, number: "200+", label: "Dishes Served Daily" },
    { icon: Building, number: "30+", label: "Years of Excellence" },
    { icon: Camera, number: "5000+", label: "Beautiful Memories" }
  ];

  return (
    <section id="gallery" className="py-24 bg-gradient-to-br from-gray-50 via-amber-50/30 to-orange-50/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-amber-300 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-amber-300 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection className="text-center mb-20">
          <span className="inline-block px-6 py-3 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-full text-amber-700 text-sm font-semibold mb-6 border border-amber-200">
            Visual Journey
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Moments of
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent block">
              Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Take a visual journey through our restaurant's atmosphere, cuisine, and the memorable experiences we create for our guests.
          </p>
        </AnimatedSection>

        {/* Enhanced Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <AnimatedSection 
              key={index}
              animation="scaleUp"
              delay={index * 100}
            >
              <div className="group text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Enhanced Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {galleryItems.map((item, index) => (
            <AnimatedSection 
              key={index}
              animation="fadeUp"
              delay={index * 100}
            >
              <div className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <div className="aspect-w-4 aspect-h-3 relative">
                  <LazyImage 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-6 left-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="text-sm font-semibold text-amber-300 mb-2">{item.category}</div>
                    <div className="text-xl font-bold">{item.title}</div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Camera className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center" delay={600}>
          <button className="group px-10 py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-full hover:from-amber-600 hover:to-amber-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-amber-500/25 relative overflow-hidden">
            <span className="relative z-10">View Complete Gallery</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Gallery;