import React, { useState, useEffect } from 'react';
import './Home.scss'; // Dein CSS-File für Styles
import ImageSlider from '../../Components/ImageSlider/ImgeSlider';

const Home = () => {
  const [techVisible, setTechVisible] = useState(false);

  // Effekt zum Anzeigen der Technologien nach kurzer Verzögerung
  useEffect(() => {
    const timer = setTimeout(() => setTechVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="home__hero" id='introduction'>
        <div className="home__hero-content">
          <h1 className="home__hero-title">Deine <span>Ideen.</span> Mein <span>Code.</span> - Gemeinsam zum Erfolg</h1>
          <p className="home__hero-description">„Ein leidenschaftlicher Fullstack-Entwickler mit einem Talent für Problemlösungen und der Umsetzung von pixelgenauen Designs.“</p>
          <button className="home__cta-button" onClick={() => window.location.href = '#portfolio'}>Entdecke meine Projekte</button>
        </div>
      </section>

      {/* Dynamische Technologien Section */}
      <section className="home__technologies">
        <h2 className="home__technologies-title">Technologien, mit denen ich arbeite:</h2>
        <div className={`home__tech-list ${techVisible ? 'home__tech-list--visible' : ''}`}>
          <div className="home__tech-item">React</div>
          <div className="home__tech-item">Node.js</div>
          <div className="home__tech-item">SCSS</div>
        </div>
      </section>

      {/* Ein paar Worte zu mir - Problemlösung */}
      <section className="home__problem-solving" id='features'>
        <h2 className="home__problem-solving-title">Problemlösung</h2>
        <p className="home__problem-solving-description">
          In meiner Arbeit als Entwickler geht es immer darum, kreative Lösungen für echte Probleme zu finden. Hier kannst du einen Einblick in einige Herausforderungen und meine Lösungen bekommen. Jeder Klick zeigt, wie ich mit Code reale Probleme gelöst habe.
        </p>
        <div className="home__problem-solution-container">
          <div className="home__problem">
            <h3 className="home__problem-title">Problem 1</h3>
            <p className="home__problem-description">Beschreibe das Problem hier.</p>
          </div>
          <div className="home__solution">
            <h3 className="home__solution-title">Lösung 1</h3>
            <p className="home__solution-description">Hier zeige ich die Lösung dazu. Code-Snippets oder Algorithmen könnten eingeblendet werden.</p>
          </div>
        </div>
      </section>

      {/* Vom Konzept zur Umsetzung */}
      <section className="home__concept-to-implementation" id='gallery'>
        <h2 className="home__concept-to-implementation-title">Vom Konzept zur Umsetzung</h2>
        <p className="home__concept-to-implementation-description">
          Ich arbeite eng mit Designern zusammen, um deren Mockups in funktionierende Webseiten umzusetzen. Hier siehst du einen Vorher-Nachher-Vergleich, der den Prozess der Umwandlung eines Mockups in ein vollständiges Produkt zeigt.
        </p>
        <ImageSlider/>
      </section>
    </div>
  );
};

export default Home;