
import React, { useEffect } from 'react';
import './Foundation.css';
import SideBanners from '../components/SideBanners';

const Foundation = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.foundation-card');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach(card => observer.observe(card));
  }, []);

  return (
    <div className="foundation-page">
      <SideBanners />
      <h1 className="foundation-heading">The Foundation</h1>
      <p className="foundation-quote">“A community rooted in love is a community that grows.”</p>
      <div className="foundation-cards-container">
        <div className="foundation-card">
          <h2>Our Mission</h2>
          <p>
            Established in 2024, the Michael J. Rossi Family Foundation was created in memory of Michael Rossi to honor the values he lived by:
            family, service, and community. Mike was a loving husband and father who dreamed of planting deep roots so that his children could
            grow up in a loving, supportive, and safe environment.
          </p>
        </div>
        <div className="foundation-card">
          <p>
            To carry forward that vision, the foundation focuses on supporting schools, youth programs, small communities, local parks,
            and first responders. The foundation is also committed to raising awareness and advocating for change in the trucking industry—
            particularly around the dangers of texting while driving.
          </p>
        </div>
        <div className="foundation-card">
          <h2>Michael J. Rossi Memorial Scholarship</h2>
          <p>
            In collaboration with the Greater Toledo Community Foundation, this scholarship supports a student in the Electrical Engineering
            program at the University of Toledo. The scholarship honors Michael’s academic background and his passion for technology and problem solving.
          </p>
          <p><strong>Eligibility criteria:</strong></p>
          <ul>
            <li>The applicant must be accepted into the Electrical Engineering program at the University of Toledo.</li>
            <li>The applicant must be a U.S. citizen.</li>
            <li>Preference will be given to applicants from Wood County, Ohio.</li>
            <li>Students receiving a full scholarship from another source are not eligible.</li>
          </ul>
        </div>
      </div>
      <a href="#" className="cta-fixed-button">Scholarship Application Coming Soon</a>
    </div>
  );
};

export default Foundation;
