import React from 'react';
import "../App.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="navbar-center">
        <Navbar.Brand href="/" className="navbar-brand-left">Daily Akhbaar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="navbar-nav-center">
          <Nav>
            <Nav.Link href="/national">National</Nav.Link>
            <Nav.Link href="/sports">Sports</Nav.Link>
            <Nav.Link href="/world">World</Nav.Link>
            <Nav.Link href="/entertainment">Entertainment</Nav.Link>
            <NavDropdown title="Others" id="basic-nav-dropdown">
              <NavDropdown.Item href="/business">Business</NavDropdown.Item>
              <NavDropdown.Item href="/politics">Politics</NavDropdown.Item>
              <NavDropdown.Item href="/technology">Technology</NavDropdown.Item>
              <NavDropdown.Item href="/startup">Startup</NavDropdown.Item>
              <NavDropdown.Item href="/science">Science</NavDropdown.Item>
              <NavDropdown.Item href="/miscellaneous">Miscellaneous</NavDropdown.Item>
              <NavDropdown.Item href="/automobile">Automobile</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
