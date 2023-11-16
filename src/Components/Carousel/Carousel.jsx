import React, { useState } from 'react';
import './Carousel.css';

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    '/src/images/slider3.jpg',
    '/src/images/slider2.jpg',
    '/src/images/slider1.jpg',
    '/src/images/slider4.jpg',
    '/src/images/slider5.jpg',
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className='Carousel'>
      <div className='Slider'>
        {images.map((image, index) => (
          <div key={index} style={{ display: index === currentIndex ? 'block' : 'none' }}>
            <img className='imgSlider' src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
        <button className='prevButton' onClick={prevSlide}>
          Prev
        </button>
        <button className='nextButton' onClick={nextSlide}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Carousel;
