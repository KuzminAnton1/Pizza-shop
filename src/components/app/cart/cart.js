import './cart.scss';
import { connect } from 'react-redux';

import React from 'react';

const Cart = ({ pizzaList }) => {
  return (
    <>
      <section className="cart">
        <div className="cart__wrap">
          {pizzaList.map((item) => {
            const { title, img, quantity } = item;
            return (
              <div className="cart__wrap__item">
                <div className="cart__wrap__item__img">
                  <img src={img} alt={title} />
                </div>
                <h2 className="cart__wrap__item__title">{title}</h2>
                <h4 className="cart__wrap__item__quant">X {quantity}</h4>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

const stateProp = ({ pizzaList }) => {
  return {
    pizzaList,
  };
};

export default connect(stateProp)(Cart);
