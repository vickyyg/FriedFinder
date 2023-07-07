import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';


function Navegador() {
  return (
    <>
      <Navbar bg="black" variant="dark" expand="md">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="./public/logo2.png"
              style={{ width: "250px", height: "100px" }}
              alt="Logo"
              className="logo-img"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              
              <Nav.Link style={{ fontFamily: 'Titan One', color: "#E71515" }} href="#home">Home</Nav.Link>
              
              <Nav.Link style={{ fontFamily: 'Titan One', color: "#E71515" }} href="#features">Features</Nav.Link>
              
              <Nav>
              <Nav.Link style={{ fontFamily: 'Titan One', color: "#E71515" }} href="#pricing">Pricing</Nav.Link>
              </Nav>
            </Nav> 
            <Nav>
              <NavLink to="/cart" style={{ fontSize: "30px" }}>🛒</NavLink>
            </Nav>

          </Navbar.Collapse>
        </Container>
        
      </Navbar>
    </>
  );
}

export default Navegador;
