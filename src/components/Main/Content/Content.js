import React, { useState, useEffect } from 'react';
import './Content.css';


function Content() {
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
          // Bild ausblenden
          setOpacity(0);

          setTimeout(() => {
              // Bild wechseln
              currentIndex = (currentIndex + 1) % images.length;
              setCurrentImage(images[currentIndex]);
              // Bild einblenden
              setOpacity(1);
          }, 1500);  // nach 500s (entspricht der Dauer des Ausblendens)
      };

      const intervalId = setInterval(changeImage, 4000); // 1s zum Ausblenden + 3s Anzeige = 4s

      return () => {
          clearInterval(intervalId);
      };
  }, []);

  return (
    <div className="content">
      <img src={currentImage} alt="Sanitär-Bild" style={{ opacity: opacity }} className="content-image" />
      <div className="content-inner">
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
        <p>Mein Name ist Salvatore Terzo, geboren 1988, und Ihre Zufriedenheit ist mein oberstes Ziel. 
Meine berufliche Laufbahn begann 2008, als ich meine Lehre als Sanitär Monteur EFZ bei der renommierten Firma A. Baltensberger erfolgreich abschloss. 
Seitdem konnte ich vielfältige Erfahrungen in diversen Bereichen des Sanitärhandwerks sammeln. 
Egal ob als Bauleiter, bei Wasserschäden, in der Beratung für Umbauten oder hauptsächlich im Service – ich habe stets mein Bestes gegeben, um die Wünsche meiner Kunden zu erfüllen.
Mein stetiges Streben nach Perfektion und Weiterentwicklung führte mich zur Weiterbildung als Chefmonteur. 
Dies war ein bedeutender Schritt in meiner Karriere und diente nicht nur der Vertiefung meines Fachwissens, sondern auch dem Ziel, mich selbstständig zu machen.
Heute, als selbstständiger Fachmann, ist es meine Herzensangelegenheit, Ihr Anliegen mit höchster Sorgfalt und Professionalität zu behandeln. Denn erst wenn Sie vollständig zufrieden sind, bin ich es auch. Ich lade Sie herzlich ein, mich bei Fragen oder Anliegen zu kontaktieren. 
Gemeinsam finden wir die beste Lösung für Ihr Vorhaben.
Ich freue mich darauf, Sie bald persönlich zu beraten und zu unterstützen!</p>
      
        <div className="kontakt">
          
        </div>
      
      </div>
    </div>
  );
}

export default Content;
