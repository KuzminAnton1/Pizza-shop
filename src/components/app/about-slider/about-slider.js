import React, { useState } from 'react';
import prev from '../../../assets/icons/prev.png';
import next from '../../../assets/icons/next.png';
import './about-slider.scss';
import Slide from './slide';

const AboutSlider = () => {
  const [index, setIndex] = useState(0);

  function nextSlide(i) {
    if (index + i > 2) {
      setIndex(0);
    } else if (index + i < 0) {
      setIndex(2);
    } else {
      setIndex(index + i);
    }
  }

  return (
    <div className="about__slider">
      <div
        className="about__slider__prev"
        onClick={() => {
          nextSlide(-1);
        }}
      >
        <img src={prev} alt="prev-arrow-icon" />
      </div>
      <div className="about__slider__wrap">
        <Slide index={index} />
      </div>
      <div
        className="about__slider__next"
        onClick={() => {
          nextSlide(1);
        }}
      >
        <img src={next} alt="next-arrow-icon" />
      </div>
    </div>
  );
};

export default AboutSlider;
