import React from 'react';
import ReactDOM from 'react-dom';
import {Nav,Navbar} from 'react-bootstrap';
import { Switch, Route, Link } from 'react-router-dom';



function Navigation() {
    return <div className="BannerNav">
        <Navbar className="primary-color " expand="sm">
                <Navbar.Brand className="NavBarBrand" href="#home">SVK</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link className="NavItem " as={Link} to="/">Home</Nav.Link>
                    <Nav.Link className="NavItem" as={Link} to="/erste_Mannschaft">1. Mannschaft</Nav.Link>
                    <Nav.Link className="NavItem" as={Link} to="/zweite_Mannschaft">2.Mannschaft</Nav.Link>
                    <Nav.Link className="NavItem" as={Link} to="/shop">Shop</Nav.Link>
                    
                </Nav>
                </Navbar.Collapse>
            
        </Navbar>
        
    </div>

}



export default Navigation;