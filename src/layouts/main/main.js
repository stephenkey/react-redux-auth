import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavPrimary from '../../components/nav/navPrimary'

class MainLayout extends Component {
  render() {
    return (
      <div className='light'>
        <NavPrimary />
        <div className='container'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default connect()(MainLayout)
