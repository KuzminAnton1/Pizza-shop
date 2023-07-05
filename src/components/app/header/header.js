import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../../../assets/icons/Logo.png';
import logoHeader from '../../../assets/icons/logo-header.png';
import './header.scss';

const Header = ({ pizzaList }) => {
  return (
    <>
      <header className="menu-block">
        <nav>
          <div className="logo">
            <img src={logo} alt="logo-icon" id="logo-img" />
            <img src={logoHeader} alt="logo-icon" id="logo-title" />
          </div>
          <ul className="menu">
            <li>
              <Link to={'/'} className="menu__item">
                Menu
              </Link>
            </li>
            <li>
              <Link to={'/contacts'} className="menu__item">
                Contacts
              </Link>
            </li>
            <li>
              <Link to={'/cart'} className="menu__item">
                Cart
              </Link>
            </li>
          </ul>
          <span className="count">{pizzaList.length}</span>
        </nav>
      </header>
    </>
  );
};

const stateProp = ({ pizzaList }) => {
  return {
    pizzaList,
  };
};

export default connect(stateProp)(Header);
