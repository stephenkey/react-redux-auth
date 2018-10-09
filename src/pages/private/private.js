import React, { Component } from 'react';
import { connect } from 'react-redux';
import './private.scss';

class Private extends Component {
  render() {
    return (
      <p>Private</p>
    )
  }
}

export default connect()(Private);