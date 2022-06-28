import React from 'react';
import logo from '../eg.svg';
import { Outlet } from "react-router-dom";
import { Navbar, Nav, Offcanvas, Container } from "react-bootstrap";
import '../App.css';
import { LinkContainer } from 'react-router-bootstrap';

const Navigation = () => {
    return (
        <>
            {['lg'].map((expand) => (
                <Navbar key={expand} bg="dark" expand={expand}>
                    <Container fluid>
                    <img src={logo} alt="logo" className="Nav-logo" />
                    <Nav className="d-none d-lg-flex">
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>    
                        </LinkContainer>
                        <LinkContainer to="/info">
                            <Nav.Link>Info</Nav.Link>                        
                        </LinkContainer>    
                    </Nav>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="top"
                            className="Nav-offcanvas"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Site Links
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav>
                                    <LinkContainer to="/">
                                        <Nav.Link>Home</Nav.Link>    
                                    </LinkContainer>
                                    <LinkContainer to="/info">
                                        <Nav.Link>Info</Nav.Link>                        
                                    </LinkContainer>    
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
              ))}

        <Outlet />
        </>
    )
};

export default Navigation;