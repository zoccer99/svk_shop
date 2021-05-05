import React from 'react';
import ReactDOM from 'react-dom';
import {Nav,Navbar} from 'react-bootstrap';
import { Switch, Route, Link } from 'react-router-dom';



function Navigation() {
    return <div className="mb-3">
        <Navbar className="primary-color" expand="sm" variant="dark">
                <Navbar.Brand href="#home">SVK</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/erste_Mannschaft">1. Mannschaft</Nav.Link>
                    <Nav.Link as={Link} to="/zweite_Mannschaft">2.Mannschaft</Nav.Link>
                    <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            
        </Navbar>
        
    </div>

}



export default Navigation;