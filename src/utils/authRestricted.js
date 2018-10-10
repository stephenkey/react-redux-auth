import React, { Component } from 'react'
import { connect } from 'react-redux'

export default function (ComposedComponent) {
  class AuthRestricted extends Component {
    componentWillMount() {
      if (this.props.authenticated) {
        this.props.history.push('/private')
      }
    }

    componentWillUpdate(nextProps) {
      if (nextProps.authenticated) {
        this.props.history.push('/private')
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