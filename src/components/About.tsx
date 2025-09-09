import React from 'react';
import { Crown, Users, Award, Heart } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import LazyImage from './LazyImage';
import IndianCuisineImg from '../assets/chicken-makhani-biryani.jpeg';


const About = () => {
  const features = [
    {
      icon: Crown,
      title: "Héritage Royal",
      description: "Recettes transmises à travers les générations de chefs royaux, apportant des saveurs mogholes authentiques à votre table."
    },
    {
      icon: Users,
      title: "Tradition Familiale",
      description: "Fondé en 1990 par la famille Sharma, nous servons la communauté avec amour et dévouement depuis plus de trois décennies."
    },
    {
      icon: Award,
      title: "Primé",
      description: "Reconnu comme le 'Meilleur Restaurant Indien' pendant cinq années consécutives par l'Association Culinaire de la Ville."
    },
    {
      icon: Heart,
      title: "Préparé avec Amour",
      description: "Chaque plat est préparé avec les meilleurs ingrédients et des méthodes de cuisson traditionnelles, servi avec une hospitalité authentique."
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-amber-50 via-orange-50/50 to-red-50/30 relative overflow-hidden">
      {/* Motif de fond */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-64 h-64 border border-amber-300 rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 border border-amber-300 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection className="text-center mb-20">
          <span className="inline-block px-6 py-3 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-full text-amber-700 text-sm font-semibold mb-6 border border-amber-200">
            Notre Héritage
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Un Voyage à Travers
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent block">
              l'Héritage Royal Indien
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Entrez dans un monde où l'art culinaire rencontre la tradition royale. Notre restaurant rend hommage au 
            magnifique Taj Mahal, offrant une expérience culinaire authentique qui vous transporte à l'âge d'or de la cuisine indienne.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <AnimatedSection animation="slideLeft">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-3xl blur-xl"></div>
              <LazyImage 
                src={IndianCuisineImg}
                alt="Cuisine indienne traditionnelle"
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="slideRight" delay={200}>
            <div className="space-y-8">
              <h3 className="text-4xl font-bold text-gray-900">
                De l'Héritage à Votre Assiette
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Nos chefs maîtres ont passé des années à perfectionner l'art de la cuisine indienne, étudiant auprès de maîtres culinaires renommés 
                et préservant des techniques de cuisine authentiques chéries depuis des siècles.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Chaque épice est soigneusement sélectionnée, chaque recette méticuleusement élaborée, et chaque plat présenté avec soin 
                pour honorer le riche héritage culinaire de l'Inde tout en créant des expériences mémorables pour nos invités.
              </p>
              <div className="pt-6">
                <button className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-full hover:from-amber-600 hover:to-amber-700 transform hover:scale-105 transition-all duration-300 shadow-lg relative overflow-hidden">
                  <span className="relative z-10">Découvrez Notre Histoire</span>
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