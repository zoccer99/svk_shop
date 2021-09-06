import React from "react";
import ReactDOM from "react-dom";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";
import svkLogo from './pictures/svkLogo.jpeg';

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand href="#home">SV Kretzschau</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="NavItem " as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link className="NavItem" as={Link} to="/ersteMannschaft">
            1. Mannschaft
          </Nav.Link>
          <Nav.Link className="NavItem" as={Link} to="/zweiteMannschaft">
            2.Mannschaft
          </Nav.Link>
          <NavDropdown title="Junioren">
            <NavDropdown.Item>C-Junioren</NavDropdown.Item>
            <NavDropdown.Item>D-Junioren</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/E-Junioren">E-Junioren</NavDropdown.Item>
          </NavDropdown>

          <Nav.Link className="NavItem" as={Link} to="/shop">
            Shop
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
