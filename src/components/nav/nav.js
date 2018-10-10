import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { signOutAction } from '../../redux/actions/signOutAction'

class Nav extends Component {
  signOut(e) {
    e.preventDefault()
    this.props.signOutAction()
  }
  
  navbarLinks() {
    if (this.props.authenticated) {
      return [
        <li key="secret"><Link to="/private">Private</Link></li>,
        <li key="signout"><a onClick={this.signOut.bind(this)}>Sign out</a></li>
      ];
    }
    return [
      <li key="signin"><Link to="/signin">Sign in</Link></li>
    ];
  }

  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <Link to="/"><span className="brand">Entera</span></Link>
          <ul>
            {this.navbarLinks()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps, {signOutAction})(Nav)