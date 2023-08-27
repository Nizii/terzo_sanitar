import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

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
    <div className={fadeContent ? 'fade-in' : ''}>
      {loading && <h1 className="loading-logo">Terzo Sanitär</h1>}
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default App;
