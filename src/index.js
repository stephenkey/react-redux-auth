import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './redux/store'

import { userConstants } from './constants/userConstants'
import * as serviceWorker from './serviceWorker'

import App from './components/app/app'

const rootElement = document.querySelector('#root')
const access_token = localStorage.getItem('access_token')

if(access_token) {
  store.dispatch({ type: userConstants.AUTHENTICATED })
}

render(
  <Provider store={store}>
    <Router basename="/">
      <App />
    </Router>
  </Provider>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
