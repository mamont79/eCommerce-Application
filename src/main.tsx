import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import NavBar from './components/navBar';
import store from './store/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
