import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import authRequired from '../utils/authRequired';
import authRestricted from '../utils/authRestricted';

import Home from '../pages/home/home';
import Signin from '../pages/auth/signin';
import Private from '../pages/private/private';

import MainLayout from '../layouts/main/main';

const Router = () => (
  <MainLayout>
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={authRestricted(Signin)} />
        <Route path="/private" component={authRequired(Private)} />
      </Switch>
    </main>
  </MainLayout>
);

export default connect()(Router);
