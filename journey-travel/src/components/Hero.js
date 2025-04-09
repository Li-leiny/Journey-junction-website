import React from 'react';
import '../home.css';


const Hero = () => {
  return (
    <div className="intro">
      <section className="hero">
        <h1 className="scrolling-text">  Journey Junction <i className="fa-solid fa-plane"></i></h1>
        <h1 style={{ color: 'purple' }}>Discover Kenya's Wonders</h1>
        <p>Your gateway to unforgettable adventures</p>
      </section>
    </div>
  );
}

export default Hero;
