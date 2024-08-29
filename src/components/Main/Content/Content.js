import React, { useState, useEffect } from 'react';
import './Content.css'; // Einziger CSS-Import
import { FaLinkedin } from 'react-icons/fa';

function SinglePage() {
  const [currentImage, setCurrentImage] = useState("1.JPG");
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
      const images = [
        "1.JPG",
        "2.JPG",
        "3.JPG",
        "4.JPG",
        "5.JPG",
        "6.JPG",
        "7.JPG",
        "8.JPG"
      ];
      let currentIndex = 0;

      const changeImage = () => {
        setOpacity(0);
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % images.length;
            setCurrentImage(images[currentIndex]);
            setTimeout(() => {
                setOpacity(1);
            }, 500);
        }, 1000);
      };
    
      const intervalId = setInterval(changeImage, 5000);
      return () => {
          clearInterval(intervalId);
      };
  }, []);

  const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY';
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=Terzo+Sanitär+GmbH,Lindenstrasse+40,8153+Rümlang`;

  return (
    <div className="content">
      {/* Main Image Section */}
      <img src={currentImage} alt="Sanitär-Bild" style={{ opacity: opacity }} className="content-image" />
      <div className="content-inner">
        {/* Main Content */}
        <h2>Willkommen bei Terzo Sanitär GmbH</h2>
        <p>Terzo Sanitär ist Ihr zuverlässiger Partner für alle sanitären Anforderungen. Seit Jahren bieten wir qualitativ hochwertige Dienstleistungen für unsere geschätzten Kunden. Lassen Sie uns Ihnen helfen, Ihr Traumbad zu gestalten!</p>
        
        <h3>Unsere Dienstleistungen</h3>
        <ul>
            <li>Beratung</li>
            <li>Service/Reparaturen</li>
            <li>Kleinumbauten</li>
            <li>Wasserschadenortung/Behebung</li>
        </ul>

        <h3>Warum Terzo Sanitär?</h3>
        <p>Mein Name ist Salvatore Terzo, geboren 1988, und Ihre Zufriedenheit ist mein oberstes Ziel. Meine berufliche Laufbahn begann 2008, als ich meine Lehre als Sanitär Monteur EFZ bei der renommierten Firma A. Baltensberger erfolgreich abschloss. Seitdem konnte ich vielfältige Erfahrungen in diversen Bereichen des Sanitärhandwerks sammeln. Egal ob als Bauleiter, bei Wasserschäden, in der Beratung für Umbauten oder hauptsächlich im Service – ich habe stets mein Bestes gegeben, um die Wünsche meiner Kunden zu erfüllen. Mein stetiges Streben nach Perfektion und Weiterentwicklung führte mich zur Weiterbildung als Chefmonteur. Dies war ein bedeutender Schritt in meiner Karriere und diente nicht nur der Vertiefung meines Fachwissens, sondern auch dem Ziel, mich selbstständig zu machen. Heute, als selbstständiger Fachmann, ist es meine Herzensangelegenheit, Ihr Anliegen mit höchster Sorgfalt und Professionalität zu behandeln. Denn erst wenn Sie vollständig zufrieden sind, bin ich es auch. Ich lade Sie herzlich ein, mich bei Fragen oder Anliegen zu kontaktieren. Gemeinsam finden wir die beste Lösung für Ihr Vorhaben. Ich freue mich darauf, Sie bald persönlich zu beraten und zu unterstützen!</p>
      </div>

      {/* About Me Section */}
      <div className="about-me">
        <h2>Über mich</h2>
        <div className="about-content">
          <section className="about-image">
            <img src="./meinBild.jpg" alt="Salvatore Terzo" />
          </section>
          <section className="about-info">
            <p className="about-highlight">Salvatore Terzo</p>
            <p className="about-highlight">Sanitär Chefmonteur</p>
            <p className='about-highlight'>
              <a href="https://linkedin.com/in/terzo-salvatore-angelo-2194b520b" className="linkedin-link">
                <FaLinkedin /> LinkedIn Profil
              </a>
            </p>
            <p>Mein Name ist Salvatore Terzo, geboren 1988, und Ihre Zufriedenheit ist mein oberstes Ziel...</p>
          </section>
        </div>
      </div>

      {/* Contact Section */}
      <div className="kontaktseite">
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
      </div>

      {/* Cooperation and Suppliers Section */}
      <div className="kooperationen">
  <h2>Kooperationen und Lieferanten</h2>
  <div className="kooperationen-container">
    <div className="kooperationen-item">
      <img src="./images/baeder.jpg" alt="Richner Miauton" />
      <a href="https://www.baubedarf-richner-miauton.ch/de/produkte/baeder/" target="_blank" rel="noopener noreferrer">Richner Miauton</a>
    </div>
    <div className="kooperationen-item">
      <img src="./images/sanitastroesch.jpg" alt="Sanitas Troesch" />
      <a href="https://www.sanitastroesch.ch/de" target="_blank" rel="noopener noreferrer">Sanitas Troesch</a>
    </div>
    <div className="kooperationen-item">
      <img src="./images/baltensperger.jpg" alt="Baltensperger" />
      <a href="https://baltensperger.ch/" target="_blank" rel="noopener noreferrer">Baltensperger</a>
    </div>
    <div className="kooperationen-item">
      <img src="./images/dalidali.jpg" alt="Dali Dali" />
      <a href="https://www.dalidali.ch/kontakt" target="_blank" rel="noopener noreferrer">Dali Dali</a>
    </div>
  </div>
</div>

    </div>
  );
}

export default SinglePage;
