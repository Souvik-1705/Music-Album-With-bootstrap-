

import React, { useContext } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AuthContext from '../store/AuthContext';

const NavigationBar = () => {
  const authCtx = useContext(AuthContext);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Link to="/store">
          <Navbar.Brand>MyStore</Navbar.Brand>
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Link to="/store">
              Store
            </Link>
            <Link to="/about">
              About
            </Link>
            {!authCtx.isLoggedIn && (
              <Link to="/login">
                Login
              </Link>
            )}
            {authCtx.isLoggedIn && (
              <Link to="/Contact">
              Contact
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
