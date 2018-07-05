// Main app load
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// React router related imports
import { BrowserRouter } from 'react-router-dom';

// React redux related imports
import { Provider } from 'react-redux';
import store from './store.js';

import './index.css';

ReactDOM.render((
  <Provider store={ store }>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  ), document.getElementById('root')
);

registerServiceWorker();