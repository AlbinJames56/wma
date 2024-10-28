import React, { useState } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import "./AdminNav.css";
import Logo from "../../../assets/logo-bgremoved.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const AdminNavbar = ({ setAdminPage }) => {
  const [expanded, setExpanded] = useState(false);

  const setPage = (page) => {
    setAdminPage(page);
    setExpanded(false); // Close the menu after selecting an option
  };

  return (
    <Navbar
      bg="white"
      expand="md"
      className="admin-navbar shadow-sm fixed-top"
      expanded={expanded}
    >
      <div className="container-fluid">
        {/* Logo Section */}
        <Navbar.Brand className="d-flex align-items-center">
          <img src={Logo} width={80} alt="logo" className="logo me-2" />
          <h2 className="mb-0 text-dark">WMA Dashboard</h2>
        </Navbar.Brand>

        {/* Toggle Button for Mobile */}
        <Navbar.Toggle
          aria-controls="navbarNav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        >
          <FontAwesomeIcon icon={faBars} className="hamburger-icon" />
        </Navbar.Toggle>

        {/* Navbar Menu */}
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto d-flex flex-md-row flex-column align-items-center gap-2">
            <Button
              variant="primary"
              className="admin-navbar-button w-100  mb-2 "
              onClick={() => setPage(0)}
            >
              View / Edit Events
            </Button>
            <Button
              variant="dark"
              className="admin-navbar-button w-100 mb-2"
              onClick={() => setPage(1)}
            >
              View Event Registrations
            </Button>
            <Button
              variant="warning"
              className="admin-navbar-button w-100 mb-2"
              onClick={() => setPage(2)}
            >
              View / Edit Committee
            </Button>
            <Button
              variant="success"
              className="admin-navbar-button w-100 mb-2"
              onClick={() => setPage(3)}
            >
              Gallery
            </Button>
            <Button
              variant="danger"
              className="admin-navbar-button w-100 mb-2"
              onClick={() => {
                // Add log out functionality
              }}
            >
              Log Out
            </Button>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default AdminNavbar;
