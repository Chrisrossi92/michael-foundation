import React from 'react';
import Rain1 from '../assets/Rain1.JPG';
import Rain2 from '../assets/Rain2.JPG';
import Rain3 from '../assets/Rain3.JPG';
import Rain4 from '../assets/Rain4.JPG';
import Rain5 from '../assets/Rain5.jpeg';
import foundationLogo from '../assets/rossi-logo.jpeg';
import familyBackground from '../assets/rossi-family.jpg';


const photoRain = [Rain1, Rain2, Rain3, Rain4, Rain5];

const Home = () => (
  <section className="hero">
  <div className="hero-overlay">
    <div className="photo-rain">
      {Array.from({ length: 10 }).map((_, index) => {
        const randomImg = photoRain[Math.floor(Math.random() * photoRain.length)];
        const left = Math.random() * 100;
        const delay = Math.random() * 15;
        const size = 100 + Math.random() * 40;
        return (
          <img
            key={index}
            src={randomImg}
            alt="Michael memory"
            className="falling-photo"
            style={{
              left: `${left}vw`,
              animationDelay: `${delay}s`,
              width: `${size}px`,
            }}
          />
        );
      })}
    </div>

    <div className="hero-content centered-logo">
      <img
        src={foundationLogo}
        alt="Michael J. Rossi Family Foundation Logo"
        className="foundation-hero-logo"
      />
      <p className="tagline">Carrying forward a legacy of love, strength, and service.</p>
      <a href="/about-michael" className="hero-button">Continue to Michael’s Story ↓</a>
    </div>
  </div>
</section>

);

export default Home;