// Main app load
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { registerServiceWorker, setDefaultConfig } from './utils';

// React router related imports
import { BrowserRouter } from 'react-router-dom';

// React redux related imports
import { Provider } from 'react-redux';
import store from './store';

// Bootstrap related imports
window.jQuery = window.$ = require('jquery');
window.Popper = require('popper.js');

// Set default configs for packages
setDefaultConfig();


ReactDOM.render((
  <Provider store={ store }>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  ), document.getElementById('root')
);

registerServiceWorker();