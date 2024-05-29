import React, { useState, useRef } from 'react';
import Skillcard from '@components/Skillcard';

const Skillset = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const carouselRef = useRef(null);

  const cardWidth = 150; // Ancho de cada tarjeta
  const gap = 10; 

  const handlePrevClick = () => {
    setScrollPosition((prev) => Math.max(prev - (cardWidth + gap), 0));
  };

  const handleNextClick = () => {
    if (carouselRef.current) {
      const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
      setScrollPosition((prev) => Math.min(prev + (cardWidth + gap), maxScroll));
    }
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button prev" onClick={handlePrevClick}>‹</button>
      <div className="skillset" ref={carouselRef} style={{ transform: `translateX(-${scrollPosition}px)` }}>
        <Skillcard skill="Python" percentage="90%" imagen="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/935px-Python-logo-notext.svg.png" />
        <Skillcard skill="Java" percentage="80%" imagen="https://upload.wikimedia.org/wikipedia/commons/b/bb/Java-logo.png" />
        <Skillcard skill="JavaScript" percentage="75%" imagen="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" />
        <Skillcard skill="React" percentage="50%" imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa7ECW4xHgJyeIQexegqGhxgHGknkobmD0xA&s" />
        <Skillcard skill="Vite" percentage="40%" imagen="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/2078px-Vitejs-logo.svg.png" />
        <Skillcard skill="Express" percentage="50%" imagen="https://miro.medium.com/v2/resize:fit:365/1*Jr3NFSKTfQWRUyjblBSKeg.png" />
        <Skillcard skill="Kotlin" percentage="30%" imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDP-LG1v6Ao1muLcXgIpbFDqhsiQ05mKXDxQ&s" />
        <Skillcard skill="Docker" percentage="80%" imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJl4fp0SkQbTPU5ZxVl6AKWYuKCwM0gIhNtQ&s" />
        <Skillcard skill="Html" percentage="90%" imagen="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png" />
        <Skillcard skill="CSS" percentage="80%" imagen="https://cdn.iconscout.com/icon/free/png-256/free-css3-8-1175200.png?f=webp" />
        <Skillcard skill="SQL" percentage="95%" imagen="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sql_data_base_with_logo.png/640px-Sql_data_base_with_logo.png" />
        <Skillcard skill="Next" percentage="20%" imagen="https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-y563b8iq.png" />
        <Skillcard skill="C#" percentage="70%" imagen="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/1200px-Logo_C_sharp.svg.png" />
        <Skillcard skill="C++" percentage="70%" imagen="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png" />
      </div>
      <button className="carousel-button next" onClick={handleNextClick}>›</button>
    </div>
  );
};

export default Skillset;
