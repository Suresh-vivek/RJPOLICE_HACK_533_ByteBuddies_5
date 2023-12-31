import "./Navbar.css";

import React from "react";
import LogoImage from "../src/assets/Logo.png";
import { Link } from "react-router-dom";
import PrimaryButton from "./PrimaryButton";
import { useState } from "react";
import Logo2 from "../src/assets/safeNetLogo.png";

function Navbar() {
  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 80) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  window.addEventListener("scroll", setFixed);
  return (
    <div className="outer-nav" id={fix ? "fixed-nav" : ""}>
      <div className="nav-logo">
        <Link to="/">
          <img src={fix ? Logo2 : LogoImage} className="nav-image" />
        </Link>
      </div>

      <div className="nav-links">
        <a href="#" className="nav-alinks" id={fix ? "fixed-links" : ""}>
          About
        </a>

        <Link to="resources">
          <a href="#" className="nav-alinks" id={fix ? "fixed-links" : ""}>
            Resources
          </a>
        </Link>

        <Link to="stories">
          <a href="#" className="nav-alinks" id={fix ? "fixed-links" : ""}>
            Stories
          </a>
        </Link>

        <Link to="contact">
          {" "}
          <a href="#" className="nav-alinks" id={fix ? "fixed-links" : ""}>
            Contact
          </a>{" "}
        </Link>

        <Link to="community">
          <a href="#" className="nav-alinks" id={fix ? "fixed-links" : ""}>
            Community
          </a>
        </Link>
      </div>

      <div className="nav-right">
        <a
          href="#"
          className="nav-alinks"
          id={fix ? "fixed-feedback" : "nav-feedback"}
        >
          Feedback
        </a>

        <div className="nav-comm">
          <PrimaryButton text="Extension" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
