import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ mode, btnText, toggleMode }) => {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg bg-body-tertiary bg-${
          mode === 'light' ? 'light' : 'dark'
        }`}
        data-bs-theme={`${mode === 'light' ? 'light' : 'dark'}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            TextUtils
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={toggleMode}
              />
              <label
                className={`form-check-label text-${
                  mode === 'light' ? 'dark' : 'light'
                }`}
                htmlFor="flexSwitchCheckDefault"
              >
                {btnText}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
