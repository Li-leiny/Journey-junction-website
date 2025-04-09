import React from 'react';
import '../home.css';


const Header = () => {
  return (
    <div className="header-wrapper">
      <header className="header">
        <div className="container">
          <div className="logo">
            <img src="images/journey travel.jpg" alt="Journey Junction Logo" />
          </div>
          <nav className="nav">
            <ul>
              <li><a href="home.html"><i className="fas fa-home"></i> Home</a></li>
              <li><a href="#explore"><i className="fas fa-globe"></i> Destinations</a></li>
              <li><a href="about.html"><i className="fas fa-info-circle"></i> About Us</a></li>
              <li><a href="#container"><i className="fas fa-envelope"></i> Contact</a></li>
            </ul>
          </nav>
          <div className="auth-buttons">
            <button className="btn btn-outline">Hello <i className="fa-solid fa-face-smile"></i></button>
            <button className="btn btn-outline"><a style={{ textDecoration: 'none', color: '#ffffff80' }} href="login.html">Get Started</a></button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
