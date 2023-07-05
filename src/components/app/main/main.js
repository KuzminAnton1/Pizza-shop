import React from 'react';
import clock from '../../../assets/icons/watch.png';
import point from '../../../assets/icons/point.png';
import phone from '../../../assets/icons/phone.png';
import './main.scss';

const Main = () => {
  return (
    <section className="main">
      <div className="container">
        <h1 className="main__title">
          Your <span>favourite food</span> delicious & hot <span>PIZZA</span>
        </h1>
        <h2 className="main__subtitle">
          The chefs of CRAZY PIZZA prepare the best pizza in the country, when
          cooking it, the chefs use only high-quality and fresh products.
        </h2>
        <button className="main__btn">Order Now</button>
        <div className="main__data">
          <div className="main__data__item">
            <div className="item__img">
              <img src={clock} alt="time-icon" />
            </div>
            <div className="item__text_one">Today 8:00 am - 22:00 pm</div>
            <div className="item__text_two">Working hours</div>
          </div>
          <div className="main__data__item">
            <div className="item__img">
              <img src={point} alt="point-icon" />
            </div>
            <div className="item__text_one">Prospekt Lenina 117</div>
            <div className="item__text_two">Get Directions</div>
          </div>
          <div className="main__data__item">
            <div className="item__img">
              <img src={phone} alt="phone-icon" />
            </div>
            <div className="item__text_one">+99 (999)999 99 99</div>
            <div className="item__text_two">Call Online</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
