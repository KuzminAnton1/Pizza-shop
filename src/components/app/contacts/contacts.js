import React from 'react';
import './contacts.scss';

const Contacts = () => {
  return (
    <section className="contacts">
      <div className="contacts__wrap">
        <div className="contacts__wrap__info">
          <span>Prospekt Lenina 117</span>
          <span>+99 (999)999 99 99</span>
          <span>pizza-crazy@php.com</span>
        </div>
        <div className="contacts__wrap__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17459.05239398247!2d60.58993939754565!3d56.839398922521966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16e890df2f9db%3A0x365df9afaad055bf!2z0L_RgNC-0YHQvy4g0JvQtdC90LjQvdCwLCAxMTcsINCV0LrQsNGC0LXRgNC40L3QsdGD0YDQsywg0KHQstC10YDQtNC70L7QstGB0LrQsNGPINC-0LHQuy4sIDYyMDA3NQ!5e0!3m2!1sru!2sru!4v1681919658023!5m2!1sru!2sru"
            width="500"
            height="350"
            style={{ border: '0', borderRadius: '8px' }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
