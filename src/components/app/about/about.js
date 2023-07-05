import React from 'react';
import AboutSlider from '../about-slider/about-slider';
import './about.scss';

const About = () => {
  return (
    <section className="about">
      <h2 className="about__title">About</h2>
      <h2 className="about__subtitle">orders of the month</h2>
      <div className="about__descr">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        delectus ad eveniet, dolorum iusto atque eligendi accusamus corporis
        magni alias?
      </div>
      <AboutSlider />
    </section>
  );
};

export default About;
