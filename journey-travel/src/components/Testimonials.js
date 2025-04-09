import React from 'react';
import '../home.css';


const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <h2>What Our Travelers Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
            <p>"An incredible safari experience! The wildlife viewing exceeded all expectations."</p>
            <p className="author">— Sarah from UK</p>
          </div>
          <div className="testimonial-card">
            <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star-half-stroke"></i>
            <p>"The beaches were pristine and the local culture was fascinating to experience."</p>
            <p className="author">— Michael from USA</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
