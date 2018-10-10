import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { signOutAction } from '../../redux/actions/signOutAction'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class NavPrimary extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  signOut(e) {
    e.preventDefault()
    this.props.signOutAction()
  }
  
  navbarLinks() {
    if (this.props.authenticated) {
      return [
        <NavItem key="dashboard"><NavLink tag={Link} to="/dashboard">Dashboard</NavLink></NavItem>,
        <NavItem key="signout"><NavLink onClick={this.signOut.bind(this)}>Sign out</NavLink></NavItem>
      ];
    }
    return [
      <NavItem key="signin"><NavLink tag={Link} to="/signin">Sign In</NavLink></NavItem>
    ];
  }

  render() {
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand tag={Link} to="/">Entera</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {this.navbarLinks()}
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps, {signOutAction})(NavPrimary)
