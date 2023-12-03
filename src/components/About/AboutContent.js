import React from 'react';
import './AboutContent.css'; // Import the CSS stylesheet
import { FaLinkedin } from 'react-icons/fa';

const AboutMe = () => {
  return (
    <main className="about-me">
      <section className="about-image">
        <h2>Über mich</h2>
        <div className="about-image">
          <img src="./meinBild.jpg" alt="Salvatore Terzo" />
        </div>
      </section>
      <section className="about-info">
        <h2>Wer bin ich?</h2>
        <p className="about-highlight">Salvatore Terzo</p>
        <p className="about-highlight">Sanitär Chefmonteur</p>
        <p className='about-highlight'>
            <a href="https://linkedin.com/in/terzo-salvatore-angelo-2194b520b" className="linkedin-link">
              <FaLinkedin /> LinkedIn Profil
            </a>
          </p>


        <p>
          Mein Name ist Salvatore Terzo, geboren 1988, und Ihre Zufriedenheit ist mein oberstes Ziel.
          Meine berufliche Laufbahn begann 2008, als ich meine Lehre als Sanitär Monteur EFZ bei der renommierten Firma A. Baltensberger erfolgreich abschloss.
          Seitdem konnte ich vielfältige Erfahrungen in diversen Bereichen des Sanitärhandwerks sammeln.
          Egal ob als Bauleiter, bei Wasserschäden, in der Beratung für Umbauten oder hauptsächlich im Service – ich habe stets mein Bestes gegeben, um die Wünsche meiner Kunden zu erfüllen.
          Mein stetiges Streben nach Perfektion und Weiterentwicklung führte mich zur Weiterbildung als Chefmonteur.
          Dies war ein bedeutender Schritt in meiner Karriere und diente nicht nur der Vertiefung meines Fachwissens, sondern auch dem Ziel, mich selbstständig zu machen.
          Heute, als selbstständiger Fachmann, ist es meine Herzensangelegenheit, Ihr Anliegen mit höchster Sorgfalt und Professionalität zu behandeln.
          Denn erst wenn Sie vollständig zufrieden sind, bin ich es auch. Ich lade Sie herzlich ein, mich bei Fragen oder Anliegen zu kontaktieren.
          Gemeinsam finden wir die beste Lösung für Ihr Vorhaben.
          Ich freue mich darauf, Sie bald persönlich zu beraten und zu unterstützen!
        </p>
      </section>
    </main>
  );
};

export default AboutMe;
