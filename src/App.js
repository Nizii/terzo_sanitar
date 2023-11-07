import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Main/Header/Header';
import Content from './components/Main/Content/Content';
import Footer from './components/Main/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutContent from './components/About/AboutContent';


function App() {
  const [loading, setLoading] = useState(true);
  const [fadeContent, setFadeContent] = useState(false);
  const [showLogo, setShowLogo] = useState(true); // Neuer Zustand für das Logo

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setFadeContent(true);
      setShowLogo(false); // Versteckt das Logo nach dem Timer
    }, 1000); // Zeitraum, nach dem das Logo verschwindet (hier: 3 Sekunden)
  
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className={fadeContent ? 'fade-in' : ''}>
        {loading && <div className="loading-container"><img src="./logo.png" className={`logo ${showLogo ? 'fade-in' : 'fade-out'}`} alt="Terzo Sanitär" /></div>}
        {!showLogo && (
          <>
            <Header />
            <Routes>
              <Route path="/" element={<Content />} />
              <Route path="/about-me" element={<AboutContent />} />
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
