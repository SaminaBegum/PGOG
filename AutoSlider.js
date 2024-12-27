import React, { useEffect, useState } from "react";
import "./AutoSlider.css"; 
const AutoSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "/1.jpeg",
    "/2.jpeg",
    "/3.jpeg",
    "/4.jpeg",
    "/5.jpeg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [slides.length]);

  return (
    <div className="slider-container" >
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <img key={index} src={slide} alt={`Slide ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default AutoSlider;
