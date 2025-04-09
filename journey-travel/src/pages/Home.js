import React from 'react';
import '../home.css';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Home;
