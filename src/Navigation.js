import React from "react";
import ReactDOM from "react-dom";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";
import svkLogo from './pictures/svkLogo.jpeg';

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" >
      <Navbar.Brand className="navbarBrand " as={Link} to="/"><img src={svkLogo} id="NavbarLogo" /> <strong className="m-2">SV Kretzschau</strong></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto ">

          <Nav.Link className="NavItem" as={Link} to="/ersteMannschaft">
            1. Mannschaft
          </Nav.Link>
          <Nav.Link className="NavItem" as={Link} to="/zweiteMannschaft">
            2.Mannschaft
          </Nav.Link>

          <NavDropdown title="Junioren">
            <NavDropdown.Item as={Link} to="/C-Junioren">C-Junioren</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/D-Junioren">D-Junioren</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/E-Junioren">E-Junioren</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/Bambinis">Bambinis</NavDropdown.Item>


          </NavDropdown>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
