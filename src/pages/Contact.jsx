import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can later wire this up to Formspree or a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      {submitted ? (
        <p className="thank-you">Thank you for your message. We'll be in touch soon!</p>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>

          <label>
            Email
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>

          <label>
            Message
            <textarea name="message" value={formData.message} onChange={handleChange} required />
          </label>

          <button type="submit">Send Message</button>
        </form>
      )}
    </div>
  );
};

export default Contact;
