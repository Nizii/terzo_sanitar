import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
      <div className="header-section">
        <div className="adress-bar">
          <div className="adress-text">
            terzosanitaer@bluewin.ch | Telefon +41 76 589 33 31 | Öffnungszeiten 07.00 - 17.00
          </div>
        </div>        
        <header className="header">
          <div className="header-logo">
            <p className="logotext">
              Terzo Sanitär
            </p>
          </div>
          <nav>
            <ul>
              <li><Link className="nav-text" to="/">Startseite</Link></li>
              <li><Link className="nav-text" to="/dienstleistungen">Dienstleistungen</Link></li>
              <li><Link className="nav-text" to="/kontakt">Kontakt</Link></li>
              <li><Link className="nav-text" to="/about-me">Über mich</Link></li> {}
            </ul>
          </nav>
        </header>
      </div>
    );
}

export default Header;
