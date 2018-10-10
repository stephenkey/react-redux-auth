import React, { Component } from 'react'
import { connect } from 'react-redux'
import { appConstants } from '../constants/appConstants'

export default function (ComposedComponent) {
  class AuthRestricted extends Component {
    componentWillMount() {
      if (this.props.authenticated) {
        this.props.history.push(appConstants.AFTER_SIGN_IN_ROUTE)
      }
    }

    componentWillUpdate(nextProps) {
      if (nextProps.authenticated) {
        this.props.history.push(appConstants.AFTER_SIGN_IN_ROUTE)
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated }
  }

  return connect(mapStateToProps)(AuthRestricted)
}