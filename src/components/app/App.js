import './App.css';
import WrapHideComponent from '../wrap-hide-component/wrap-hide-component';
import { connect } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './header/header';
import Footer from './footer/footer';
import Main from './main/main';
import About from './about/about';
import MenuList from './menu/menu-list';
import Cart from './cart/cart';
import Contacts from './contacts/contacts';

function App() {
  const MainPage = (
    <div>
      <Main />
      <About />
      <MenuList />
    </div>
  );
  return (
    <>
      <BrowserRouter basename="/Pizza-shop">
        <Header />
        <Routes>
          <Route exact path="/" element={MainPage} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default WrapHideComponent()(connect()(App));
