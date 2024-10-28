import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import icon from "../../../assets/logo-bgremoved.png";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="m-1 mx-2"> 
      <Navbar collapseOnSelect expand="lg" className="navbody fixed-top">
        <Container>
          <Navbar.Brand href="#home" className="me-0">
            <img src={icon} alt="" width={80} />
            
            <h3 className="text-wrap text-light  ms-3">World Malayalee Association</h3>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ms-auto">
            <FontAwesomeIcon icon={faBars} className="hamburger-icon" />
          </Navbar.Toggle>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="text-light" href="/">Home</Nav.Link>
              <Nav.Link className="text-light" href="/gallery">Gallery</Nav.Link>
              <Nav.Link className="text-light" href="/eventPage">Events</Nav.Link>
              <Nav.Link className="text-light" href="/committee">Committee</Nav.Link>
              <Nav.Link className="text-light" href="/membership">Membership</Nav.Link>
              <Nav.Link className="text-light" href="/about">About</Nav.Link>
              <Nav.Link className="text-light" href="/contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
