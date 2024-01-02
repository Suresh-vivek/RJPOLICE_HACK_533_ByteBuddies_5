import "./Header.css";

import React from "react";

import Typed from "react-typed";
import PrimaryButton from "./PrimaryButton";
import HeaderImage from "../src/assets/header-illustrion.png";

function Header() {
  return (
    <div>
      <div className="outer-header">
        <div className="header-text">
          <div className="header-heading">
            <span className="heading1">Secure your</span>
            <span className="heading1" id="heading2">
              _digital{" "}
              <Typed
                strings={["Path", "Journey"]}
                typeSpeed={150}
                backSpeed={100}
                loop
              />
            </span>
          </div>

          <div className="header-para">
            <span className="para-text">
              Welcome to <span id="safe">SafeNet</span>, where your online
              safety is our top priority. Empower yourself with knowledge to
              navigate the digital landscape securely.
            </span>
          </div>

          <div>
            <PrimaryButton text="Get Extension" />
          </div>
        </div>

        <div className="header-image">
          <div className="image-container">
            <img src={HeaderImage} alt="header-image" />
          </div>
        </div>
      </div>
      <div className="slant-rect1"></div>
      
      <div className="slant-rect2"></div>

      
    </div>
  );
}

export default Header;
