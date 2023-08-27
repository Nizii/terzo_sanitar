import React from 'react';
import './Header.css';

function Header() {
    return (
      <div>
        <div className="adress-bar">
        <div className="adress-text">terzosanitaer@bluewin.ch | Telefon 044 444 44 44  | Öffnungszeiten 07.00 - 17.00</div>
        </div>        
        <header className="header">
          <div className="header-logo">
            <p class="logotext">
              Terzo Sanitär
            </p>
          </div>
          <nav>
            <ul>
              <li><a class="nav-text" href="/">Startseite</a></li>
              <li><a class="nav-text" href="/">Dienstleistungen</a></li>
              <li><a class="nav-text" href="/">Kontakt</a></li>
            </ul>
          </nav>
        </header>
      </div>
    );
}

export default Header;
