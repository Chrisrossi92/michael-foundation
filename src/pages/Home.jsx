import React from 'react';
import { Link } from 'react-router-dom';
import familyPhoto from '../assets/rossi-family.jpg';

const rainImages = import.meta.glob(
  '../assets/rain/*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP}',
  {
    eager: true,
    as: 'url',
  }
);
const photoSources = Object.values(rainImages);
const MAX_FALLING_PHOTOS = 7;
const TOTAL_PHOTOS = Math.min(photoSources.length || 1, MAX_FALLING_PHOTOS);

const Home = () => {
  // To change these photos, just add/remove images in src/assets/rain/.
  const fallingPhotos = Array.from({ length: TOTAL_PHOTOS }).map((_, index) => {
    const src = photoSources[Math.floor(Math.random() * photoSources.length)];
    return {
      key: index,
      src,
      left: Math.random() * 100,
      delay: Math.random() * -15,
      duration: 12 + Math.random() * 8,
    };
  });

  return (
    <section className="hero">
      <div className="hero-overlay" />

      <div className="photo-rain">
        {fallingPhotos.map(photo => (
          <img
            key={photo.key}
            src={photo.src}
            alt="Family moment"
            className="falling-photo"
            style={{
              left: `${photo.left}%`,
              animationDelay: `${photo.delay}s`,
              animationDuration: `${photo.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="hero-content">
        <div className="hero-photo-frame">
          <img src={familyPhoto} alt="Rossi Family" />
        </div>
        <h1 className="hero-title">Michael J. Rossi Family Foundation</h1>

        <Link to="/about-michael" className="hero-button">
          Continue to Michael&apos;s Story ↓
        </Link>
      </div>
    </section>
  );
};

export default Home;
