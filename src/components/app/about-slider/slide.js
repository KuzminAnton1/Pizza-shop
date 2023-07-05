import React from 'react';
import peper from '../../../assets/img/peperoni.jpeg';
import euro from '../../../assets/img/europen.webp';
import neop from '../../../assets/img/neapolitan.jpg';
import './about-slider.scss';

const Slide = ({ index }) => {
  const arr = [peper, euro, neop];
  const activeClass = 'about__slider__wrap__item__animate-slide';

  return (
    <div className="about__slider__wrap__item">
      {arr.map((item, i) => {
        if (i === index) {
          return (
            <img key={i} src={item} alt="pizza-img" className={activeClass} />
          );
        }
        return null;
      })}
    </div>
  );
};

export default Slide;
