import React from 'react';
import { Flame, Leaf, Star, Crown } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import LazyImage from './LazyImage';

// Import images from assets
import PouletRoyalImg from '../assets/Biryani poulet.jpg';
import BiryaniAgneauImg from '../assets/Butter chicken.jpg';
import PaneerMakhaniImg from '../assets/GRAND THALI ENTRÉE.jpg';
import GrilladeTandooriImg from '../assets/Macédoine de légumes.jpg';

const Menu = () => {
  const signatureDishes = [
  {
    name: "Biryani poulet",
    description: "Un mélange aromatique de riz basmati parfumé, avec morceaux de poulet marinés, safran, épices exotiques et oignons frits croustillants.",
    price: "16,00 €",
    image: PouletRoyalImg,
    isSpicy: false,
    isPopular: true,
    isSignature: true
  },
  {
    name: "Butter chicken",
    description: "Poulet tendre mijoté dans une sauce onctueuse au beurre et aux tomates, relevé d'épices douces, servi avec riz basmati ou naan.",
    price: "15,00 €",
    image: BiryaniAgneauImg,
    isSpicy: true,
    isPopular: true,
    isSignature: true
  },
  {
    name: "GRAND THALI ENTRÉE",
    description: "Assortiment généreux de plats végétariens, offrant paneer, dal, légumes épicés, raita, et naan pour une expérience complète.",
    price: "14,50 €",
    image: PaneerMakhaniImg,
    isVegetarian: true,
    isPopular: true,
    isSignature: true
  },
  {
    name: "Macédoine de légumes",
    description: "Mélange coloré de légumes finement coupés, légèrement assaisonnés et sautés pour préserver leur fraîcheur et croquant.",
    price: "12,00 €",
    image: GrilladeTandooriImg,
    isSpicy: true,
    isSignature: true
  }
];


  return (
    <section id="menu" className="py-24 bg-gradient-to-br from-slate-50 via-amber-50/30 to-orange-50/50 relative overflow-hidden">
      {/* Motif de fond */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-amber-300 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-amber-300 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-amber-300 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection className="text-center mb-20">
          <span className="inline-block px-6 py-3 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-full text-amber-700 text-sm font-semibold mb-6 border border-amber-200">
            Collection Signature
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Nos
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent block">
              Chefs-d'Œuvre Culinaires
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Découvrez les créations les plus célèbres de notre chef, chaque plat élaboré selon des recettes séculaires
            et les meilleurs ingrédients pour une expérience gastronomique inoubliable.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {signatureDishes.map((dish, index) => (
            <AnimatedSection 
              key={index}
              animation="fadeUp"
              delay={index * 200}
              className="group"
            >
              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden transform hover:-translate-y-2 hover:scale-[1.02] border border-gray-100">
                {/* Conteneur d'image */}
                <div className="relative h-64 overflow-hidden">
                  <LazyImage
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {dish.isSignature && (
                      <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-bold rounded-full shadow-lg">
                        <Crown className="w-3 h-3 mr-1" />
                        Signature
                      </span>
                    )}
                    {dish.isPopular && (
                      <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-rose-500 to-pink-600 text-white text-xs font-bold rounded-full shadow-lg">
                        <Star className="w-3 h-3 mr-1 fill-current" />
                        Populaire
                      </span>
                    )}
                  </div>

                  {/* Badge de prix */}
                  <div className="absolute top-4 right-4">
                    <span className="inline-block px-4 py-2 bg-white/95 backdrop-blur-sm text-gray-900 font-bold text-lg rounded-full shadow-lg">
                      {dish.price}
                    </span>
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors duration-300">
                      {dish.name}
                    </h3>
                    <div className="flex gap-2">
                      {dish.isSpicy && (
                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                          <Flame className="w-4 h-4 text-red-600" />
                        </div>
                      )}
                      {dish.isVegetarian && (
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <Leaf className="w-4 h-4 text-green-600" />
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed text-lg mb-6">
                    {dish.description}
                  </p>

                  <button 
                    onClick={() => window.location.href = "https://www.tajmahal-scanme.afterlife.org.in"}
                    className="w-full px-6 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-xl hover:from-amber-600 hover:to-amber-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Commander
                  </button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-16" delay={800}>
          <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-3xl p-8 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Découvrez Notre Menu Complet</h3>
            <p className="text-xl mb-6 text-amber-100">
              Plus de 50 plats authentiques de toute l'Inde
            </p>
            <button
              onClick={() => window.location.href = "https://www.tajmahal-scanme.afterlife.org.in"}
              className="px-8 py-4 bg-white text-amber-600 font-bold rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Voir le Menu Complet
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Menu;
