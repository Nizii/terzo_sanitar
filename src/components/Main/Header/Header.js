import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleMenuAnimation = () => {
    const menu = document.querySelector('.mobile-menu');
    if (!isMenuOpen) {
      // Wird ausgeführt, wenn das Menü derzeit geschlossen ist und geöffnet werden soll.
      setMenuOpen(true); // Ändern Sie den Status sofort, um das Menü zu öffnen.
      menu.classList.add('open');
    } else {
      // Wird ausgeführt, wenn das Menü geöffnet ist und geschlossen werden soll.
      // Starten Sie die Schließanimation des Menüs und warten Sie auf deren Ende.
      menu.classList.remove('open');
      setTimeout(() => {
        setMenuOpen(false); // Ändern Sie den Status nach der Animation, um das Menü zu schließen.
      }, 700); // Diese Dauer sollte der Animationsdauer entsprechen.
    }
  };
  
  
  

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

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
          {isMobile && (
            <button
              onClick={toggleMenuAnimation}
              className={`hamburger-menu ${isMenuOpen ? 'spin-shrink' : ''}`}>
              ☰
            </button>
          )}
          <nav className={`${isMobile ? 'mobile-menu' : 'desktop-nav'}`}>
            {isMobile && (
              <>
                {/*
                <div className="mobile-menu-logo">
                  <img src="./logo.png" alt="logo" />
                </div>
                */}
                <button
                  onClick={toggleMenuAnimation}
                  className="close-menu">
                  &times;
                </button>
              </>
            )}
            <ul className='desktop-ul'>
              <li><Link to="/" onClick={toggleMenuAnimation}>Home</Link></li>
              {/*
              <li><Link to="/kontakt" onClick={toggleMenuAnimation}>Kontakt</Link></li>
              */}
              <li><Link to="/about-me" onClick={toggleMenuAnimation}>Über mich</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
