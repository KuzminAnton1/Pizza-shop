import React from 'react';
import { connect } from 'react-redux';
import { addPizzaList } from '../../actions/actions';

const MenuItem = ({ name, img, reiting, descr, id, addPizzaList }) => {
  return (
    <div className="menu-list__wrap__item">
      <div className="item-font">
        <div className="menu-list__wrap__item__img">
          <img src={img} alt="pizza-img" />
        </div>
        <h2 className="menu-list__wrap__item__title">{name}</h2>
      </div>
      <div className="item-back">
        <div className="menu-list__wrap__item__descr">{descr}</div>
        <div className="menu-list__wrap__item__order">
          <img src={reiting[0]} alt="star-icon" />
          <img src={reiting[1]} alt="star-icon" />
          <img src={reiting[2]} alt="star-icon" />
          <img src={reiting[3]} alt="star-icon" />
          <img src={reiting[4]} alt="star-icon" />
        </div>
        <button
          onClick={() => addPizzaList(id, name, img)}
          className="menu-list__wrap__item__btn"
        >
          Order
        </button>
      </div>
    </div>
  );
};

const stateProp = ({ pizzaList }) => {
  return {
    pizzaList,
  };
};
const stateAction = {
  addPizzaList,
};

export default connect(stateProp, stateAction)(MenuItem);
