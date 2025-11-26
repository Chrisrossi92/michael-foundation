import React from 'react';
import NewsCard from '../components/NewsCard';
import jersey from '../assets/jersey.png';
import basket1 from '../assets/giftbasket-one.png';
import basket2 from '../assets/giftbasket-two.png';

const events = [
  {
    title: 'Sponsored Uniforms',
    date: 'March 30, 2025',
    image: jersey,
    description:
      "The Michael J. Rossi Family Foundation sponsored uniforms for a local youth baseball team, continuing Michael's legacy of supporting community programs that give children a place to grow and thrive.",
  },
  {
    title: 'Raffle Basket Donated',
    date: 'March 30, 2025',
    image: basket1,
    description:
      'To support a local fundraiser, the foundation donated a themed raffle basket filled with goodies. Supporting schools and small community initiatives is part of our mission.',
  },
  {
    title: 'Gardening Raffle Basket',
    date: 'April 2, 2025',
    image: basket2,
    description:
      'Another beautiful raffle basket was donated, themed around gardening. These gifts reflect our commitment to brightening lives through meaningful community contributions.',
  },
];

const Events = () => {
  return (
    <div className="events-page">
      <section className="facebook-events-intro">
        <h1>Events &amp; News</h1>
        <p>
          Many of our updates and sponsorships are shared in the{' '}
          <span>Michael Rossi Family Foundation</span> Facebook group.
          Here are a few highlights, and you can join the group to see more.
        </p>
        <a
          href="https://www.facebook.com/groups/1037060355139480"
          target="_blank"
          rel="noreferrer"
          className="facebook-cta-button"
        >
          Visit the Facebook Group
        </a>
      </section>

      {events.map((event) => (
        <NewsCard
          key={event.title}
          title={event.title}
          date={event.date}
          image={event.image}
          description={event.description}
        />
      ))}
    </div>
  );
};

export default Events;

