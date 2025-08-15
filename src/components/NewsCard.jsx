import React, { useRef, useEffect, useState } from 'react';
import './NewsCard.css';

const NewsCard = ({ title, date, image, description }) => {
  const ref = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`news-card ${isVisible ? 'visible' : ''}`}
    >
      <img src={image} alt={title} className="news-image" />
      <div className="news-content">
        <h3>{title}</h3>
        <p className="news-date">{date}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default NewsCard;

