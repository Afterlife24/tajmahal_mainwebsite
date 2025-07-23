import React from 'react';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin, Heart } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ];

  const footerLinks = {
    "Liens rapides": [
      { name: "Accueil", href: "#home" },
      { name: "À propos", href: "#about" },
      { name: "Menu", href: "#menu" },
      { name: "Galerie", href: "#gallery" },
      { name: "Contact", href: "#contact" }
    ],
    "Services": [
      { name: "Sur place", href: "#" },
      { name: "À emporter", href: "#" },
      { name: "Traiteur", href: "#" },
      { name: "Événements privés", href: "#" },
      { name: "Cartes cadeaux", href: "#" }
    ],
    "Informations": [
      { name: "Politique de confidentialité", href: "#" },
      { name: "Conditions d'utilisation", href: "#" },
      { name: "Allergènes", href: "#" },
      { name: "Valeurs nutritionnelles", href: "#" },
      { name: "Carrières", href: "#" }
    ]
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Motif de fond */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-64 h-64 border border-amber-400 rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 border border-amber-400 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Contenu principal du pied de page */}
        <div className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Informations sur le restaurant */}
            <AnimatedSection animation="fadeUp">
              <div className="lg:col-span-1">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">TM</span>
                  </div>
                  <h3 className="text-3xl font-bold">Taj Mahal</h3>
                </div>
                <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                  Découvrez le goût royal de la cuisine indienne authentique dans une atmosphère élégante inspirée du plus magnifique monument de l'Inde.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 group">
                    <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-400 group-hover:text-white transition-colors duration-300">123 Avenue Royale, New York</span>
                  </div>
                  <div className="flex items-center space-x-3 group">
                    <Phone className="w-5 h-5 text-amber-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-400 group-hover:text-white transition-colors duration-300">(555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3 group">
                    <Mail className="w-5 h-5 text-amber-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-400 group-hover:text-white transition-colors duration-300">info@tajmahal.com</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Liens du pied de page */}
            {Object.entries(footerLinks).map(([title, links], index) => (
              <AnimatedSection key={title} animation="fadeUp" delay={(index + 1) * 100}>
                <div>
                  <h4 className="text-xl font-bold mb-8 text-amber-300">{title}</h4>
                  <ul className="space-y-4">
                    {links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a 
                          href={link.href}
                          className="text-gray-400 hover:text-amber-400 transition-all duration-300 hover:translate-x-1 inline-block text-lg"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Pied de page inférieur */}
        <AnimatedSection animation="fadeUp" delay={600}>
          <div className="border-t border-gray-800 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center space-x-2 text-gray-400 text-lg">
                <span>© {currentYear} Restaurant Taj Mahal. Fait avec</span>
                <Heart className="w-5 h-5 text-red-500 fill-current animate-pulse" />
                <span>à New York</span>
              </div>
              
              {/* Liens sociaux */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-amber-500 hover:to-amber-600 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-amber-500/25"
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
};

export default Footer;