import React from 'react';
import '../home.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Journey Junction</h3>
            <p>Discover Kenya’s Beauty</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="about.html">About Us</a></li>
              <li><a href="carlwahu@gmail.com">Contact</a></li>
              <li><a href="terms-and-conditions.html">Terms & Conditions</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Connect With Us</h3>
            <div className="social-icons">
              <a href="https://www.facebook.com/profile.php?id=61550109443844&mibextid=ZbWKwL "><i className="fab fa-facebook-f"></i></a>
              <a href="https://twitter.com/carlwahu689"><i className="fab fa-twitter"></i></a>
              <a href="https://instagram.com/nickycarlyy8"><i className="fab fa-instagram"></i></a>
              <a href="https://www.linkedin.com/in/carlwahu"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Journey Junction. All rights reserved.</p>
          <a style={{ color: 'pink' }} href="privacy-policy.html">Privacy policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
