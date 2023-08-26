import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="header-logo">
                <p class="logotext">
                  Terzo Sanitär
                </p>
            </div>
            <nav>
                <ul>
                    <li><a href="/">Startseite</a></li>
                    <li><a href="/">Dienstleistungen</a></li>
                    <li><a href="/">Kontakt</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
