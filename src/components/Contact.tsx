import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      content: ["3 Rue des , ", "Vieilles Douves", "44000 ,Nantes"]
    },
    {
      icon: Phone,
      title: "Téléphone",
      content: ["02 40 89 18 31"]
    },
    {
      icon: Clock,
      title: "Horaires",
      content: ["Lun-Jeu: 11h30 - 22h00", "Ven-Sam: 11h30 - 23h00", "Dim: 12h00 - 21h00"]
    },
    {
      icon: Mail,
      title: "Email",
      content: ["saqibshahzad53@gmail.com"]
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 text-white relative overflow-hidden">
      {/* Motif de fond */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 border border-amber-400 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-amber-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 border border-amber-400 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection className="text-center mb-20">
          <span className="inline-block px-6 py-3 bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm rounded-full text-amber-300 text-sm font-semibold mb-6 border border-amber-400/30">
            Contactez-nous
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Visitez Notre
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent block">
              Restaurant
            </span>
          </h2>
          <p className="text-xl text-amber-100 max-w-4xl mx-auto leading-relaxed">
            Nous sommes situés au cœur de la ville avec un parking spacieux et un accès facile aux transports en commun.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Informations de contact - Côté gauche */}
          <AnimatedSection animation="slideLeft" className="lg:col-span-1">
            <div className="space-y-8">
              <h3 className="text-4xl font-bold mb-8">Informations de contact</h3>
              
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="group flex items-start space-x-4 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-amber-300">{info.title}</h4>
                      {info.content.map((line, lineIndex) => (
                        <p key={lineIndex} className="text-amber-100 text-base leading-relaxed">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Carte - Colonne centrale (plus large) */}
          <AnimatedSection animation="fadeIn" delay={200} className="lg:col-span-2">
            <div className="h-full rounded-3xl overflow-hidden shadow-2xl border-2 border-amber-400/30">
              {/* Espace réservé à la carte */}
              <div className="h-full bg-gradient-to-br from-amber-800 to-orange-900 flex flex-col items-center justify-center p-8 text-center">
                <MapPin className="w-16 h-16 text-amber-400 mb-6" />
                <h3 className="text-3xl font-bold text-amber-300 mb-4">Notre Adresse</h3>
                <p className="text-xl text-amber-100 mb-8 max-w-lg">
                  123 Avenue Royale, Quartier Centre-Ville<br />
                  New York, NY 10001
                </p>
                
                {/* Carte interactive */}
                <div className="w-full h-96 bg-white/10 rounded-xl border border-white/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-10 h-10 text-amber-900" />
                    </div>
                    <p className="text-amber-100">Carte interactive apparaîtrait ici</p>
                    <button className="mt-6 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium rounded-full hover:from-amber-600 hover:to-amber-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                      Ouvrir dans Google Maps
                    </button>
                  </div>
                </div>
                
                <div className="mt-8 grid grid-cols-2 gap-4 w-full">
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <h4 className="font-semibold text-amber-300 mb-2">Transports en commun</h4>
                    <p className="text-amber-100 text-sm">Métro: A, C, E à 42ème Rue</p>
                    <p className="text-amber-100 text-sm">Bus: M42, M104</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <h4 className="font-semibold text-amber-300 mb-2">Parking</h4>
                    <p className="text-amber-100 text-sm">Parking de rue disponible</p>
                    <p className="text-amber-100 text-sm">Parking couvert sur la 44ème Rue</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Section Informations supplémentaires */}
        <AnimatedSection animation="fadeIn" delay={400} className="mt-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-amber-300 mb-4">Heures d'ouverture</h3>
              <ul className="space-y-3">
                <li className="flex justify-between text-amber-100">
                  <span>Lundi - Jeudi</span>
                  <span>11h30 - 22h00</span>
                </li>
                <li className="flex justify-between text-amber-100">
                  <span>Vendredi - Samedi</span>
                  <span>11h30 - 23h00</span>
                </li>
                <li className="flex justify-between text-amber-100">
                  <span>Dimanche</span>
                  <span>12h00 - 21h00</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-amber-300 mb-4">Événements privés</h3>
              <p className="text-amber-100 mb-4">
                Notre restaurant est disponible pour des événements privés et célébrations.
              </p>
              <button className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium rounded-full hover:from-amber-600 hover:to-amber-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Demande pour événements
              </button>
            </div>
            
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-amber-300 mb-4">Restez connectés</h3>
              <p className="text-amber-100 mb-4">
                Suivez-nous sur les réseaux sociaux pour des offres spéciales et événements.
              </p>
              <div className="flex space-x-4">
                {['Facebook', 'Instagram', 'Twitter'].map((social) => (
                  <button key={social} className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300">
                    {social}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;