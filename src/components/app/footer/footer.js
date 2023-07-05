import React from 'react';
import logo from '../../../assets/icons/Logo.png';
import logoHeader from '../../../assets/icons/logo-header.png';
import clock from '../../../assets/icons/watch.png';
import point from '../../../assets/icons/point.png';
import phone from '../../../assets/icons/phone.png';
import './footer.scss';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer__data">
          <div className="footer__data__item">
            <div className="item__img">
              <img src={clock} alt="time-icon" />
            </div>
            <div className="item__text_one">Today 8:00 am - 22:00 pm</div>
            <div className="item__text_two">Working hours</div>
          </div>
          <div className="footer__data__item">
            <div className="item__img">
              <img src={point} alt="point-icon" />
            </div>
            <div className="item__text_one">Prospekt Lenina 117</div>
            <div className="item__text_two">Get Directions</div>
          </div>
          <div className="footer__data__item">
            <div className="item__img">
              <img src={phone} alt="phone-icon" />
            </div>
            <div className="item__text_one">+99 (999)999 99 99</div>
            <div className="item__text_two">Call Online</div>
          </div>
        </div>
        <div className="footer__logo">
          <img src={logo} alt="logo-icon" />
          <img src={logoHeader} alt="logo-icon" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
