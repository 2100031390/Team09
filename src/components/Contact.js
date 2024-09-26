import React from 'react';
import './Contact.css'; // Importing styles for Contact

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <p>If you have any questions or would like to get in touch, please fill out the form below:</p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" rows="5" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
