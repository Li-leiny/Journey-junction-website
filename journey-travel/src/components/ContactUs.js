import React from 'react';
import '../home.css';


const ContactUs = () => {
  return (
    <section className="contact-us">
      <div className="container" id="container">
        <h2>Contact Us</h2>
        <div className="contact-grid">
          <div className="contact-card">
            <i className="fas fa-phone"></i>
            <h3>Phone</h3>
            <p>+254 718 305 753</p>
          </div>
          <div className="contact-card">
            <i className="fas fa-envelope"></i>
            <h3>Email</h3>
            <p>info@journeyjunction.co.ke</p>
          </div>
          <div className="contact-card">
            <i className="fas fa-map-marker-alt"></i>
            <h3>Address</h3>
            <p>Kimathi Street, Nairobi, Kenya</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
