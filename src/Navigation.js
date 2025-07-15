import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import svkLogo from "./pictures/svkLogo.jpeg";
import LoginIcon from "./admin/loginIcon";


function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand className="navbarBrand " as={Link} to="/">
        <img src={svkLogo} id="NavbarLogo" alt="logo des SVK" />{" "}
        <strong className="m-2">SV Kretzschau</strong>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto ">
          {/* <Nav.Link className="NavItem" as={Link} to="/aktuelles">
            Aktuelles
          </Nav.Link> */}
          <Nav.Link className="NavItem" as={Link} to="/ersteMannschaft">
            1. Mannschaft
          </Nav.Link>
          <Nav.Link className="NavItem" as={Link} to="/zweiteMannschaft">
            2. Mannschaft
          </Nav.Link>
          <NavDropdown
            title="Junioren"
            id="junioren-dropdown"
            className="NavItem"
          >
            <NavDropdown.Item as={Link} to="/Junioren/C-Junioren">
              C-Junioren
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/Junioren/D-Junioren">
              D-Junioren
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/Junioren/E-Junioren">
              E-Junioren
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/Junioren/F-Junioren">
              F-Junioren
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/Junioren/G-Junioren">
              G-Junioren
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/Junioren/anmeldung">
              Anmeldung
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link className="NavItem" as={Link} to="/sponsoren">
           Sponsoren
          </Nav.Link>
          <LoginIcon />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
