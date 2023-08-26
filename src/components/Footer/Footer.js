import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Terzo Sanitär alle Rechte vorbehalten.</p>
        </footer>
    );
}

export default Footer;
