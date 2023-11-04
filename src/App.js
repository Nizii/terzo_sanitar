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

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setFadeContent(true);
    }, 1000);
  
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className={fadeContent ? 'fade-in' : ''}>
        {loading && <h1 className="loading-logo">Terzo Sanitär</h1>}
        
        <Header />

        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/about-me" element={<AboutContent />} />
          
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
