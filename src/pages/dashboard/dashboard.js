import React, { Component } from 'react'
import { connect } from 'react-redux'
import './dashboard.scss'

class Dashboard extends Component {
  render() {
    return (
      <p>Dashboard</p>
    )
  }
}

export default connect()(Dashboard)
