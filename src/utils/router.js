import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Route, Switch } from 'react-router-dom'

import authRequired from '../utils/authRequired'
import authRestricted from '../utils/authRestricted'

import Home from '../pages/home/home'
import Signin from '../pages/auth/signin'
import Private from '../pages/private/private'
import Dashboard from '../pages/dashboard/dashboard'

import MainLayout from '../layouts/main/main'

const Router = () => (
  <MainLayout>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/signin" component={authRestricted(Signin)} />
      <Route path="/private" component={authRequired(Private)} />
      <Route path="/dashboard" component={authRequired(Dashboard)} />
    </Switch>
  </MainLayout>
);

export default withRouter(connect()(Router))
