import "./AboutCard.css";

import React from "react";

function AboutCard(props) {
  return (
    <div className="acard-outer">
      <div className="acard-image">
        <div className="aimage">
          <img src={props.image} alt="about-card" className="aimage" />
        </div>
      </div>

      <div className="acard-heading">{props.heading}</div>

      <div className="acard-para">{props.text}</div>
    </div>
  );
}

export default AboutCard;
