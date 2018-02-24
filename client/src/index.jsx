import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import App from './components/app.jsx';
import configureStore from './configureStore';

import axios from 'axios';


const history = createHistory();
const  store  = configureStore(history);

render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('app'));