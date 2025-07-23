import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Accueil', href: '#home' },
    { name: 'À propos', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Galerie', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-2xl border-b border-gray-200' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <div className={`w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center transform transition-all duration-300 ${
              isScrolled ? 'scale-100' : 'scale-110'
            }`}>
              <span className="text-white font-bold text-xl">TM</span>
            </div>
            <h1 className={`text-2xl font-bold transition-all duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white drop-shadow-lg'
            }`}>
              Taj Mahal
            </h1>
          </div>

          {/* Navigation desktop améliorée */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-semibold transition-all duration-300 hover:scale-105 relative group ${
                  isScrolled ? 'text-gray-700 hover:text-amber-600' : 'text-white hover:text-amber-300'
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Informations de contact améliorées */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
              isScrolled ? 'bg-gray-100' : 'bg-white/10 backdrop-blur-sm'
            }`}>
              <Phone className={`w-4 h-4 ${isScrolled ? 'text-gray-600' : 'text-white'}`} />
              <span className={`text-sm font-medium ${isScrolled ? 'text-gray-600' : 'text-white'}`}>
                (555) 123-4567
              </span>
            </div>
          </div>

          {/* Bouton menu mobile amélioré */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-full transition-all duration-300 ${
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Navigation mobile améliorée */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl mt-2 p-6 border border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 font-semibold hover:text-amber-600 transition-all duration-300 hover:translate-x-2 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-200 flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-600 font-medium">(555) 123-4567</span>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;