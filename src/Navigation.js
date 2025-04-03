import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import svkLogo from "./pictures/svkLogo.jpeg";
import LoginIcon from "./admin/loginIcon";
import UserProvider from "./Hooks/useContext";

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
          <Nav.Link as={Link} to="/Junioren/C-Junioren">
            C-Junioren
          </Nav.Link>
          <Nav.Link as={Link} to="/Junioren/D-Junioren">
            D-Junioren
          </Nav.Link>
          <Nav.Link as={Link} to="/Junioren/E-Junioren">
            E-Junioren
          </Nav.Link>
          <Nav.Link as={Link} to="/Junioren/F-Junioren">
            F-Junioren
          </Nav.Link>
          <Nav.Link as={Link} to="/Junioren/G-Junioren">
            G-Junioren
          </Nav.Link>

          <LoginIcon />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
