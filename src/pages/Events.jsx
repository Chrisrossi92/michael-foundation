import React from 'react';
import NewsCard from '../components/NewsCard';
import jersey from '../assets/jersey.png';
import basket1 from '../assets/giftbasket-one.png';
import basket2 from '../assets/giftbasket-two.png';

const Events = () => {
  return (
    <div className="events-page" style={{ padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>News & Events</h1>

      <NewsCard
        title="Sponsored Uniforms"
        date="March 30, 2025"
        image={jersey}
        description="The Michael J. Rossi Family Foundation sponsored uniforms for a local youth baseball team, continuing Michael's legacy of supporting community programs that give children a place to grow and thrive."
      />

      <NewsCard
        title="Raffle Basket Donated"
        date="March 30, 2025"
        image={basket1}
        description="To support a local fundraiser, the foundation donated a themed raffle basket filled with goodies. Supporting schools and small community initiatives is part of our mission."
      />

      <NewsCard
        title="Gardening Raffle Basket"
        date="April 2, 2025"
        image={basket2}
        description="Another beautiful raffle basket was donated, themed around gardening. These gifts reflect our commitment to brightening lives through meaningful community contributions."
      />
    </div>
  );
};

export default Events;


