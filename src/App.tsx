import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Assuming you have imported the scanMeIcon image like this:
import scanMeIcon from './assets/scan-me.png'; // Adjust the path as needed

function App() {
  return (
    <div className="min-h-screen relative">
      <Header />
      <Hero />
      <About />
      <Menu />
      {/* <Gallery /> */}
      <Contact />
      <Footer />

      {/* Floating Icon */}
      <a
        href="https://www.afterlife.org.in/product"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={scanMeIcon}
          alt="Floating Icon"
          className="fixed bottom-4 right-4 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] object-contain shadow-lg rounded-[8px]"
        />
      </a>
    </div>
  );
}

export default App;
