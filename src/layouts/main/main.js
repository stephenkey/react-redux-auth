import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from '../../components/nav/nav'

class MainLayout extends Component {
  render() {
    return (
      <div className='light'>
        <div className='container'>
          <Nav />
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default connect()(MainLayout)
