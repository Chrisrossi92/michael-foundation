// src/pages/Foundation.jsx
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
      {
        threshold: 0.25,
      }
    );

    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const handleCtaClick = e => {
    e.preventDefault();
    const target = document.getElementById('scholarship-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <main className="foundation-page">
      <SideBanners />

      <section className="foundation-hero">
        <h1 className="foundation-heading">The Foundation</h1>
        <p className="foundation-tagline">
          Carrying Michael&apos;s legacy of love, strength, and service forward.
        </p>
        <p className="foundation-quote">
          “A community rooted in love is a community that grows.”
        </p>
      </section>

      <section className="foundation-cards-container">
        <article className="foundation-card">
          <h2>Our Mission</h2>
          <p>
            Established in 2024, the Michael J. Rossi Family Foundation was
            created in memory of Michael Rossi to honor the values he lived by:
            family, service, and community. Mike was a loving husband and
            father who dreamed of planting deep roots so that his children could
            grow up in a loving, supportive, and safe environment.
          </p>
        </article>

        <article className="foundation-card">
          <h2>How We Serve</h2>
          <p>
            To carry forward that vision, the foundation focuses on supporting
            schools, youth programs, small communities, local parks, and first
            responders. The foundation is also committed to raising awareness
            and advocating for change in the trucking industry—particularly
            around the dangers of texting while driving.
          </p>
        </article>

        <article
          id="scholarship-section"
          className="foundation-card foundation-card--highlight"
        >
          <h2>Michael J. Rossi Memorial Scholarship</h2>
          <p>
            In collaboration with the Greater Toledo Community Foundation, this
            scholarship supports a student in the Electrical Engineering program
            at the University of Toledo. The scholarship honors Michael’s
            academic background and his passion for technology and problem
            solving.
          </p>
          <p className="foundation-subheading">
            <strong>Eligibility criteria</strong>
          </p>
          <ul>
            <li>
              The applicant must be accepted into the Electrical Engineering
              program at the University of Toledo.
            </li>
            <li>The applicant must be a U.S. citizen.</li>
            <li>Preference will be given to applicants from Wood County, Ohio.</li>
            <li>
              Students receiving a full scholarship from another source are not
              eligible.
            </li>
          </ul>
        </article>
      </section>

      <button className="cta-fixed-button" onClick={handleCtaClick}>
        Scholarship Application Coming Soon
      </button>
    </main>
  );
};

export default Foundation;
