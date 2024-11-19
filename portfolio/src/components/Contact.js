import React from "react";
import "./../styles/Contact.css"; // Import the CSS file for styling

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-heading">Contact Me</h1>
      <p className="contact-text">
        Feel free to reach out to me via email or phone. I’d love to hear from you!
      </p>
      <div className="contact-info">
        <div className="contact-item">
          <h2>Email:</h2>
          <a href="mailto:duncanlissy@gmail.com" className="contact-link">
            duncanlissy@gmail.com
          </a>
        </div>
        <div className="contact-item">
          <h2>Phone:</h2>
          <a href="tel:0410280434" className="contact-link">
            0410 280 434
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;