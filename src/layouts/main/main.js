import React, { Component } from 'react';
import { connect } from 'react-redux';

class MainLayout extends Component {
  render() {
    return (
      <div className='light'>
        <div className='container'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default connect()(MainLayout);
