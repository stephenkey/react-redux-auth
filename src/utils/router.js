import React from 'react';
import { Route, Switch } from 'react-router-dom';

import authRequired from './utils/authRequired';
import authRestricted from './utils/authRestricted';

import Home from './pages/home/home';
import Signin from './pages/auth/signin';
// import Signup from './pages/auth/signup';
import Private from './pages/private/private';

import MainWrapper from './MainWrapper';

const Router = () => (
  <MainWrapper>
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={authRestricted(Signin)} />
        <Route path="/private" component={authRequired(Private)} />
      </Switch>
    </main>
  </MainWrapper>
);

export default Router;
