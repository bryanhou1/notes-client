import React from 'react';
import {Navbar, Button, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {Link} from 'react-router-dom';
import Logo from'../logo.svg';

const NavBar = () => 
  <div>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
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
  </div>;



export default NavBar;

