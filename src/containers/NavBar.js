import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {logout} from '../actions/index';
import {connect} from 'react-redux';

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
        <Navbar className="not_signed_in" fixedTop={true}>
          <Navbar.Header>
            <Navbar.Brand>
              <LinkContainer to="/">
                <i className="fa fa-newspaper-o fa-2x" aria-hidden="true" href="#"></i>

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

export default connect(mapStateToProps, {logout})(NavBar);


