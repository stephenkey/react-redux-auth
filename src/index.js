import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from "./redux/store";

import authRequired from './hoc/authRequired';
import authRestricted from './hoc/authRestricted';

import Home from './pages/home/home';
import Signin from './pages/auth/signin';
// import Signup from './pages/auth/signup';
import Private from './pages/private/private';
import { userConstants } from './constants/userConstants';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import './assets/styles/app.scss';

const rootElement = document.querySelector('#root')
const user = localStorage.getItem('user');

if(user) {
  store.dispatch({ type: userConstants.AUTHENTICATED });
}

render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={authRestricted(Signin)} />
        <Route path="/private" component={authRequired(Private)} />
      </div>
    </Router>
  </Provider>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
