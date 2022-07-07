import React from 'react';
import ReactDOM from 'react-dom/client';
import { hydrateRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import store from './base/state';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
export let renderFunction = (state) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>

  );
}
renderFunction();
