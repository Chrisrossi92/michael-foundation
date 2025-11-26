import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-card">
        <h1>Contact Us</h1>
        <p>
          If you have questions about the Michael J. Rossi Family Foundation,
          sponsorship opportunities, or upcoming events, we’d love to hear from you.
        </p>
        <p>
          Please send us an email and a member of the family will follow up as soon as possible.
        </p>
        <a
          href="mailto:chrisrossi92@yahoo.com?subject=Message%20for%20the%20Michael%20J.%20Rossi%20Family%20Foundation"
          className="contact-email-button"
        >
          Email the Foundation
        </a>
      </div>
    </div>
  );
};

export default Contact;
