import React from 'react';
import './AboutContent.css'; // Import the CSS stylesheet

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
      <section className="about-contact">
        <h2>Kontakt</h2>
        <p>Email: terzosanitaer@bluewin.ch</p>
        <p>Telefon: +41 76 589 33 31</p>
        <p>Öffnungszeiten: 07.00 - 17.00</p>
        {/* A contact form could be inserted here if desired */}
      </section>
    </main>
  );
};

export default AboutMe;
