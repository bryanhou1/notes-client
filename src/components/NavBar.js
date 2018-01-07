import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import Logo from '../logo.svg';

const NavBar = () => {
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
        <Nav pullRight>
          <LinkContainer to="/sign_up">
            <NavItem>Sign Up</NavItem>
          </LinkContainer>
          <LinkContainer to="/sign_in">
            <NavItem>Sign In</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar>
    </div>
  )
}




export default NavBar;

