import React from 'react';
import './KontaktContent.css'; // Import the CSS stylesheet
import { FaLinkedin } from 'react-icons/fa';

const Kontakt = () => {
  const apiKey = 'AIzaSyBulbY-7QiVsxabI5nIWHeMcGDcHqZHZkM';
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=Terzo+Sanitär+GmbH,Lindenstrasse+40,8153+Rümlang`;

  return (
    <main className="kontaktseite">
      <div className='isolation'>
        <section className="standort">
          <h2>Adresse</h2>
          <p className='kontakt-text'>Terzo Sanitär GmbH</p>
          <p className='kontakt-text'>Lindenstrasse 40</p>
          <p className='kontakt-text'>8153 Rümlang</p>
        </section>


        <section className="direktkontakt">
          <h2>Kontakt</h2>
          <p className='kontakt-text'>
            <a href="tel:+41765893331" className="phone-link-about">Telefon +41 76 589 33 31</a>
          </p>
          <p className='kontakt-text'>
            Email terzosanitaer@bluewin.ch 
          </p>

          <p className='kontakt-text'>
            Öffnungszeiten 07.00 - 17.00
          </p>       
          <br/>
          <p className='kontakt-text'>
            <a href="https://linkedin.com/in/terzo-salvatore-angelo-2194b520b" className="linkedin-link">
              <FaLinkedin /> LinkedIn Profil
            </a>
          </p>
        </section>
      </div>
      <section className="map">
       <h2>Standort</h2>
       <iframe
          title="Standort"
          width="600"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src={mapSrc}
        />
      </section>
    </main>
  );
};

export default Kontakt;
