import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check to set the state based on current window size

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="header-section">
      <div className="adress-bar">
        <div className="adress-text">
          terzosanitaer@bluewin.ch
          <span> | </span>
          <a href="tel:+41765893331" className="phone-link">Telefon +41 76 589 33 31</a>
          <span className="opening-hours"> | Öffnungszeiten 07.00 - 17.00</span>
        </div>
      </div>
      <header className="header">
        <div className={`header-content ${isMobile ? '' : 'desktop-layout'}`}>
          <div className="header-logo">
            <p className="logotext">Terzo Sanitär</p>
          </div>
          {isMobile ? (
            <button onClick={() => setMenuOpen(!isMenuOpen)} className="hamburger-menu">
              ☰
            </button>
          ) : null}
          <nav className={`${isMobile ? 'mobile-menu' : 'desktop-nav'} ${isMenuOpen ? 'open' : ''}`}>
            <ul className='desktop-ul'>
              <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
              <li><Link to="/kontakt" onClick={() => setMenuOpen(false)}>Kontakt</Link></li>
              <li><Link to="/about-me" onClick={() => setMenuOpen(false)}>Über mich</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
