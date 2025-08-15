import React, { useState, useEffect, useRef } from 'react';
import './Foundation.css';
import { motion, useInView } from 'framer-motion';

const TypewriterText = ({ text, speed = 70 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return <h1 className="foundation-heading">{displayedText}</h1>;
};

const Foundation = () => {
  const [showFixedButton, setShowFixedButton] = useState(false);
  const lastCardRef = useRef(null);
  const lastCardInView = useInView(lastCardRef, { once: true });

  useEffect(() => {
    if (lastCardInView) {
      setShowFixedButton(true);
    }
  }, [lastCardInView]);

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="foundation-page">
      <TypewriterText text="The Foundation" />

      <div className="foundation-cards-container">
        <motion.div
          className="foundation-card"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2>Our Mission</h2>
          <p>
            Established in 2024, the Michael J. Rossi Family Foundation was created in memory of Michael Rossi to honor the values he lived by: family, service, and community.
            Mike was a loving husband and father who dreamed of planting deep roots so that his children could grow up in a loving, supportive, and safe environment.
          </p>
        </motion.div>

        <motion.div
          className="foundation-card"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p>
            To carry forward that vision, the foundation focuses on supporting schools, youth programs, small communities, local parks, and first responders. The foundation is also committed to raising awareness and advocating for change in the trucking industry — particularly around the dangers of texting while driving.
          </p>
        </motion.div>

        <motion.div
          className="foundation-card"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2>Michael J. Rossi Memorial Scholarship</h2>
          <p>
            In collaboration with the Greater Toledo Community Foundation, this scholarship supports a student in the Electrical Engineering program at the University of Toledo.
            The scholarship honors Michael’s academic background and his passion for technology and problem solving.
          </p>
        </motion.div>

        <motion.div
          className="foundation-card"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p><strong>Eligibility criteria:</strong></p>
          <ul>
            <li>The applicant must be accepted into the Electrical Engineering program at the University of Toledo.</li>
            <li>The applicant must be a U.S. citizen.</li>
            <li>Preference will be given to applicants from Wood County, Ohio.</li>
            <li>Students receiving a full scholarship from another source are not eligible.</li>
          </ul>
        </motion.div>
      </div>

      {showFixedButton && (
        <a href="#" className="cta-fixed-button">
          Scholarship Application Coming Soon
        </a>
      )}
    </div>
  );
};

export default Foundation;







