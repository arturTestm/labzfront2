import React from 'react';
import ReactDOM from 'react-dom';
import './Sass/app.scss';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom'
import Main from "./Routes/Main";
import './i18n/i18n';
import {Provider} from 'react-redux';
import store from "./Store/store";
require('./Axios');

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <Router>
              <Main/>
          </Router>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
