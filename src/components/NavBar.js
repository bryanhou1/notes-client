import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  handleLogOut(e) {
    e.preventDefault();
    this.props.logout();
  }

  loggedInLinks(){
    return (
      <div>
        <Navbar.Text pullRight>
          Signed in as:
        </Navbar.Text>
        <Nav pullRight>
          <LinkContainer to="/user">
            <NavItem>{this.props.currentUser.name}</NavItem>
          </LinkContainer>
          <LinkContainer to="#" onClick={e => this.handleLogOut(e)}>
            <NavItem>Logout</NavItem>
          </LinkContainer>

        </Nav>

      </div>
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
    const {isLoggedIn} = this.props;

    return (
      <div>

        <Navbar className="not_signed_in" fixedTop={true} collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <LinkContainer to="/">
                <i className="fa fa-newspaper-o fa-2x" aria-hidden="true"/>
              </LinkContainer>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            {isLoggedIn ? this.loggedInLinks() : this.loggedOutLinks()}
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}




