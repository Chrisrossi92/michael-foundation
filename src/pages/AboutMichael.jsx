import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import michaelPhoto from '../assets/michael.jpg';
import Typewriter from 'typewriter-effect';

// Example: import earlyLifePhoto from '../assets/about/early-life.jpg';
// Then set image: earlyLifePhoto in the config below.

const aboutSections = [
  {
    id: 'early-life',
    title: 'Early Life & Family',
    body: [
      `Michael J. Rossi was born on February 20, 1989 in Pittsford, New York to Frank and Liliana Rossi. From the start, Michael brought joy and pride to his family. He grew up surrounded by love, eventually marrying his beloved Megan Kapelka on May 18, 2013. Together, they built a beautiful life with their children, Calvin, Nolan, and Quinn.`,
    ],
    image: null,
    imageAlt: 'Michael as a child with family',
  },
  {
    id: 'education-career',
    title: 'Education & Career',
    body: [
      `Michael was a 2007 graduate of Bishop Hartley High School in Columbus and earned a Bachelor’s Degree in Electrical Engineering from the University of Toledo. He worked at Buehrer Group in Maumee, where he was respected for his dedication, talent, and professionalism.`,
    ],
    image: null,
    imageAlt: 'Michael in his cap and gown',
  },
  {
    id: 'passions-community',
    title: 'Passions & Community',
    body: [
      `A man of many talents, Michael enjoyed photography, sports, and lending a helping hand. A loyal Pittsburgh Steelers fan and skilled handyman, he was always ready to assist neighbors and friends. He was elected Bradner Zoning Officer and served his community proudly.`,
    ],
    image: null,
    imageAlt: 'Michael helping in the community',
  },
  {
    id: 'legacy',
    title: 'Legacy',
    body: [
      `Michael’s warmth, humor, and generosity touched everyone he met. His legacy lives on through his family, his work, and the countless acts of kindness he shared. The Michael Rossi Foundation stands as a tribute to his values—love, strength, and community.`,
    ],
    image: null,
    imageAlt: 'Family honoring Michael',
  },
];


const AboutMichael = () => {
  const sections = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      sections.current.forEach((el) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const inView = rect.top < window.innerHeight * 0.75 && rect.bottom > window.innerHeight * 0.25;
        if (inView) {
          el.classList.add('reveal');
        } else {
          el.classList.remove('reveal');
        }
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="about-michael-wrapper">
      <div className="blurred-bg" style={{ backgroundImage: `url(${michaelPhoto})` }}></div>

      <div className="about-michael">
        <section ref={(el) => (sections.current[0] = el)} className="about-section solo">
          <div className="quote-banner">
            <Typewriter
              options={{
                strings: [
                  'Son. Husband. Father. Friend.',
                  'Engineer. Problem solver.',
                  'Loved by everyone who knew him.',
                ],
                autoStart: true,
                loop: true,
                delay: 70,
                deleteSpeed: 40,
                pauseFor: 1600,
              }}
            />
          </div>
          <p className="quote">“Family meant everything to Mike, and he will always be remembered for being an amazing father.”</p>
          <div className="scroll-cue">↓</div>
        </section>

        {aboutSections.map((section, index) => (
          <section
            key={section.id}
            ref={(el) => (sections.current[index + 1] = el)}
            className="about-section"
          >
            <div className={`about-section-inner ${index % 2 === 1 ? 'reverse' : ''}`}>
              <div className="about-section-text">
                <h2>{section.title}</h2>
                {section.body.map((paragraph, pIndex) => (
                  <p key={pIndex}>{paragraph}</p>
                ))}
              </div>
              {section.image && (
                <div className="about-section-photo">
                  <img src={section.image} alt={section.imageAlt} />
                </div>
              )}
            </div>

            {section.id === 'legacy' && (
              <div className="next-section-link fade-in">
                <Link to="/foundation">Inspired by Michael? Learn how we’re carrying his legacy forward →</Link>
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
};

export default AboutMichael;
