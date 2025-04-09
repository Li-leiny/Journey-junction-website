import React from 'react';
import '../home.css';

const Services = () => {
  const services = [
    { src: 'images/pexels-fanuel-30483307.jpg', alt: 'Mombasa', caption: 'Mombasa' },
    { src: 'images/pexels-ocean-beach-resort-spa-159588041-11495414.jpg', alt: 'Malindi', caption: 'Malindi' },
    { src: 'images/pexels-youngafrikanna-29891537.jpg', alt: 'Nairobi', caption: 'Nairobi' },
    { src: 'images/pexels-paraphoto-23696154.jpg', alt: 'Maasai Mara', caption: 'Maasai Mara' },
    { src: 'images/pexels-twilightkenya-14510929.jpg', alt: 'Mount Kilimanjaro', caption: 'Mount Kilimanjaro' },
    { src: 'images/pexels-perventuator-8341090.jpg', alt: 'Lake Nakuru', caption: 'Lake Nakuru' },
    { src: 'images/pexels-bert-6926305-5985284.jpg', alt: 'Amboseli', caption: 'Amboseli' },
    { src: 'images/pexels-kureng-workx-2546437-13033070.jpg', alt: 'Maasai Land', caption: 'Maasai Land' },
    { src: 'images/pexels-the-vedette-1476356.jpg', alt: 'Diani Beach, Kwale', caption: 'Diani Beach, Kwale' },
    { src: 'images/pexels-tanzania-wild-sky-986912744-20179675.jpg', alt: 'Maasai Mara hot air balloons', caption: 'Maasai Mara' },
    { src: 'images/pexels-gil-daix-2046153486-29578085.jpg', alt: 'Watamu, Kilifi', caption: 'Kilifi' },
    { src: 'images/pexels-david-munyasa-357828253-14317116.jpg', alt: 'Migori', caption: 'Lake Victoria' },
  ];

  return (
    <div>
    <h2 className="our-services" id="explore">Explore destinations</h2>
    <section className="services-section">
      {services.map((service, index) => (
        <div className="services" key={index}>
          <img src={service.src} alt={service.alt} />
          <div className={`image-caption image-caption-${index + 1}`}>{service.caption}</div>
        </div>
      ))}
    </section>
    </div>
  );
};

export default Services;
