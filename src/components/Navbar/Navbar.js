import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Eo_circle_light-blue_white_letter-r.svg/1200px-Eo_circle_light-blue_white_letter-r.svg.png"
            alt=""
            width={30}
            height={30}
            className="d-inline-block align-text-top"
          />

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/About">
                  <a className="nav-link active" aria-current="page" href="#">
                    About
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Projects">
                  <a className="nav-link active" aria-current="page" href="#">
                    Projects
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Skills">
                  <a className="nav-link active" aria-current="page" href="#">
                    Skills
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Contact">
                  <a className="nav-link active" aria-current="page" href="#">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
