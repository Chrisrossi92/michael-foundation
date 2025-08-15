import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import michaelPhoto from '../assets/michael.jpg';
import { Typewriter } from 'react-simple-typewriter';


const AboutMichael = () => {
  const sections = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      sections.current.forEach((el) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const inView = rect.top < window.innerHeight * 0.75 && rect.bottom > window.innerHeight * 0.25;
        el.style.opacity = inView ? '1' : '0';
        el.style.transform = inView ? 'translateY(0)' : 'translateY(40px)';
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
          <p className="quote">“Family meant everything to Mike, and he will always be remembered for being an amazing father.”</p>
          <div className="scroll-cue">↓</div>
        </section>

        <section ref={(el) => (sections.current[1] = el)} className="about-section">
          <h2>Early Life & Family</h2>
          <p>
            Michael J. Rossi was born on February 20, 1989 in Pittsford, New York to Frank and Liliana Rossi. From the start, Michael brought joy and pride to his family. He grew up surrounded by love, eventually marrying his beloved Megan Kapelka on May 18, 2013. Together, they built a beautiful life with their children, Calvin, Nolan, and Quinn.
          </p>
        </section>

        <section ref={(el) => (sections.current[2] = el)} className="about-section">
          <h2>Education & Career</h2>
          <p>
            Michael was a 2007 graduate of Bishop Hartley High School in Columbus and earned a Bachelor’s Degree in Electrical Engineering from the University of Toledo. He worked at Buehrer Group in Maumee, where he was respected for his dedication, talent, and professionalism.
          </p>
        </section>

        <section ref={(el) => (sections.current[3] = el)} className="about-section">
          <h2>Passions & Community</h2>
          <p>
            A man of many talents, Michael enjoyed photography, sports, and lending a helping hand. A loyal Pittsburgh Steelers fan and skilled handyman, he was always ready to assist neighbors and friends. He was elected Bradner Zoning Officer and served his community proudly.
          </p>
        </section>

        <section ref={(el) => (sections.current[4] = el)} className="about-section">
          <h2>Legacy</h2>
          <p>
            Michael’s warmth, humor, and generosity touched everyone he met. His legacy lives on through his family, his work, and the countless acts of kindness he shared. The Michael Rossi Foundation stands as a tribute to his values—love, strength, and community.
          </p>
          <div className="next-section-link fade-in">
            <Link to="/foundation">Inspired by Michael? Learn how we’re carrying his legacy forward →</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutMichael;