import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import './index.scss';
import MyContext from './components/my-context/my-context';
import { Provider } from 'react-redux';
import store from './components/store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MyContext.Provider value={store}>
        <App />
      </MyContext.Provider>
    </Provider>
  </React.StrictMode>,
);
