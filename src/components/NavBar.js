import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import Logo from '../logo.svg';
import * as actions from '../actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class NavBar extends Component {
  handleLogOut(e) {
    e.preventDefault();
    this.props.logout();
  }

  loggedInLinks(){
    return (
      <Nav pullRight>
        <LinkContainer to="#" onClick={e => this.handleLogOut(e)}>
          <NavItem>Logout</NavItem>
        </LinkContainer>
      </Nav>
    )
  }

  loggedOutLinks() {
    return (
      <Nav pullRight>
        <LinkContainer to="/sign_up">
          <NavItem>Sign Up</NavItem>
        </LinkContainer>
        <LinkContainer to="/sign_in">
          <NavItem>Sign In</NavItem>
        </LinkContainer>
      </Nav>
    )
  }

  render () {
    const {loggedIn} = this.props;

    return (
      <div>
        <Navbar className="not_signed_in">
          <Navbar.Header>
            <Navbar.Brand>
              <LinkContainer to="/">
                <img src={Logo} alt="Logo" href="#" />
              </LinkContainer>
            </Navbar.Brand>
          </Navbar.Header>
            {loggedIn ? this.loggedInLinks() : this.loggedOutLinks()}
        </Navbar>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: !!state.current_user.user.jwt
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);


