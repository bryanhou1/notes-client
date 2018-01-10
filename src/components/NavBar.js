import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

export default class NavBar extends Component {
  handleLogOut(e) {
    e.preventDefault();
    this.props.logout();
  }

  loggedInLinks(){
    return (
      <div>
        <Nav pullRight>
          <LinkContainer to="#" onClick={e => this.handleLogOut(e)}>
            <NavItem>Logout</NavItem>
          </LinkContainer>
        </Nav>
        <Navbar.Text pullRight>
          Signed in as: <Navbar.Link href="#">{this.props.currentUser.name}</Navbar.Link>
        </Navbar.Text>
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
              <i className="fa fa-newspaper-o fa-2x" aria-hidden="true" href="#"/>
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




