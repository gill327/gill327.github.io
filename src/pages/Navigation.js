import React from 'react';
import logo from '../eg.svg';
import { Outlet } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import '../App.css';
import { LinkContainer } from 'react-router-bootstrap';

const Navigation = () => {
    return (
        <>
            <Navbar fixed="top" bg="dark" expand="lg">
                    <Navbar.Brand><img src={logo} alt="logo" className="Nav-logo" /></Navbar.Brand>
                    <Nav>
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>    
                        </LinkContainer>
                        <LinkContainer to="/info">
                            <Nav.Link>Info</Nav.Link>                        
                        </LinkContainer>
                        
                    </Nav>
            </Navbar>

        <Outlet />
        </>
    )
};

export default Navigation;