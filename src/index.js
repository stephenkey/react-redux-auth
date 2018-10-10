import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from "./redux/store";

import { userConstants } from './constants/userConstants';
import * as serviceWorker from './serviceWorker';

import App from './components/app/app';

const rootElement = document.querySelector('#root')
const user = localStorage.getItem('user');

if(user) {
  store.dispatch({ type: userConstants.AUTHENTICATED });
}

render(
  <Provider store={store}>
    <Router basename="/home">
      <App />
    </Router>
  </Provider>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
