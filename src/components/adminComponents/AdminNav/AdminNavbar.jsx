import React, { useState } from "react";
import "./AdminNav.css";
import Logo from "../../../assets/logo-bgremoved.png";

const AdminNavbar=({setAdminPage})=> {
  const [icon, setIcon] = useState(false);
  const setPage = (page) => {
    setAdminPage(page);
    setIcon(false);
  };
  return (
    <div>
      <div className="admin-navbar navbar navbar-expand-md bg-white shadow-sm fixed-top py-5">
        <div className="container-fluid d-flex justify-content-between align-items-center ">
          {/* <!-- Logo Section --> */}
          <div className="d-flex align-items-center">
            <img src={Logo} width={100} alt="logo" className="logo me-2" />
            <h2 className="mb-0">WMA Dashboard</h2>
          </div>

          {/* <!-- Toggle Button for Mobile --> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* 
    <!-- Navbar Menu --> */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="buttons d-flex flex-md-row flex-column gap-2">
              <button
                className="btn btn-primary admin-navbar-button w-100 p-3"
                onClick={() => setPage(0)}
              >
                View / Edit Events
              </button>
              <button
                className="btn btn-dark admin-navbar-button w-100 mb-2"
                onClick={() => setPage(1)}
              >
                View Event Registrations
              </button>
              <button
                className="btn btn-warning admin-navbar-button w-100 mb-2"
                onClick={() => setPage(2)}
              >
                View / Edit Committee
              </button>
              <button
                className="btn btn-success admin-navbar-button w-100 mb-2"
                onClick={() => setPage(3)}
              >
                Gallery
              </button>
              <button
                className="btn btn-danger admin-navbar-button w-100 mb-2"
                onClick={() => { 
                }}
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminNavbar;
