import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Refs erstellen für die DOM-Elemente
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const closeButtonRef = useRef(null);

  const toggleMenuAnimation = () => {
    const menu = menuRef.current;
    const hamburger = hamburgerRef.current;
    const closeButton = closeButtonRef.current;

    if (!menu || !hamburger || !closeButton) {
      console.error('Eines der Elemente ist null:', { menu, hamburger, closeButton });
      return; // Frühzeitiger Ausstieg, wenn ein Element nicht vorhanden ist
    }
    
    if (!isMenuOpen) {
      // Rotate the hamburger icon
      hamburger.classList.add('spin');
      // Open the menu
      setMenuOpen(true);
      menu.classList.add('open');
    } else {
      // Apply the rotate animation to the close button
      closeButton.classList.add('rotate');

      // We need to wait for the rotate animation to finish before closing the menu
      setTimeout(() => {
        // Close the menu
        menu.classList.remove('open');
        
        // Reset the hamburger icon rotation
        hamburger.classList.remove('spin');
        // Reset the close button rotation
        closeButton.classList.remove('rotate');

        setMenuOpen(false);
      }, 300); // The timeout should match the duration of the CSS animations
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
            ref={hamburgerRef} // Hamburger-Button Ref
            className={`hamburger-menu ${isMenuOpen ? 'spin' : ''}`}>
            ☰
          </button>
          )}
          <nav ref={menuRef} className={`${isMobile ? 'mobile-menu' : 'desktop-nav'}`}> {/* Menu Ref */}
            {isMobile && (
              <>
                {/*
                <div className="mobile-menu-logo">
                  <img src="./logo.png" alt="logo" />
                </div>
                */}
                <button
                  onClick={toggleMenuAnimation}
                  ref={closeButtonRef} // Close-Button Ref
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
