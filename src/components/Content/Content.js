import React, { useState, useEffect } from 'react';
import './Content.css';


function Content() {
  const [currentImage, setCurrentImage] = useState("bad.png");
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
      const images = ["bad.png", "kuche.png", "heizung.png"];
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
          }, 1000);  // nach 1s (entspricht der Dauer des Ausblendens)
      };

      const intervalId = setInterval(changeImage, 6000); // 1s zum Ausblenden + 3s Anzeige = 4s

      return () => {
          clearInterval(intervalId);
      };
  }, []);

  return (
    <div className="content">
      <img src={currentImage} alt="Sanitär-Bild" style={{ opacity: opacity }} className="content-image" />
      <div className="content-inner">
        <h2>Willkommen bei Terzo Sanitär</h2>
        <p>Terzo Sanitär ist Ihr zuverlässiger Partner für alle sanitären Anforderungen. Seit Jahren bieten wir qualitativ hochwertige Dienstleistungen für unsere geschätzten Kunden. Lassen Sie uns Ihnen helfen, Ihr Traumbad zu gestalten!</p>
        
        <h3>Unsere Dienstleistungen</h3>
        <ul>
            <li>Sanitärinstallation</li>
            <li>Badrenovierung</li>
            <li>Notfallreparaturen</li>
            <li>Heizungsinstallation und -wartung</li>
            <li>Wasseraufbereitung</li>
        </ul>

        <h3>Warum Terzo Sanitär?</h3>
        <p>Professionalität, Zuverlässigkeit und herausragender Kundenservice sind die Säulen unserer Geschäftsphilosophie. Bei Terzo Sanitär sind Sie nicht nur ein Kunde, sondern ein geschätzter Partner.</p>
      </div>
    </div>
  );
}

export default Content;
