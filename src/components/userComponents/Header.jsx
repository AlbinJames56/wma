import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar"; 

import icon from "../../assets/logo-bgremoved.png";
import './header.css'
function Header() {
  return (
    <div  className="m-1 mx-2" >
      <Navbar collapseOnSelect expand="lg" className=" navbody fixed-top ">
        <Container>
          <Navbar.Brand href="#home" className="me-0 " >
            <img src={icon} alt="" width={80} />{" "}
          </Navbar.Brand>
          <Nav className="ms-3 ">
                <h1>World Malayalee Association</h1>
            </Nav>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav"  >
           
            <Nav className="ms-auto  ">
              <Nav.Link className="text-light" href="/" > Home</Nav.Link>
              <Nav.Link className="text-light" href="/gallery" >Gallery</Nav.Link>
              <Nav.Link className="text-light" href="/events" >Events</Nav.Link>
              <Nav.Link className="text-light" href="/committee" >Committee</Nav.Link>
              <Nav.Link className="text-light" href="/membership"  >Membership </Nav.Link>
              <Nav.Link className="text-light" href="/about" >About </Nav.Link>
              <Nav.Link className="text-light" href="/contact" >Contact Us </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
