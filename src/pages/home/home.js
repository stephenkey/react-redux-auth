import React, { Component } from 'react';
import { connect } from 'react-redux';
import './home.scss';

class Home extends Component {
  render() {
    return (
      <p className="home">Home</p>
    )
  }
}

export default connect()(Home);