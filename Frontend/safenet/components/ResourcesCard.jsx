import "./ResourcesCard.css";

import React from "react";

function ResourcesCard(props) {
  return (
    <div className="resources-card">
      <div className="resources-image">
        <img src={props.image} alt="resources-card" className="resources-im" />
      </div>

      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        className="resources-link"
      >
        <div className="resources-heading">{props.heading}</div>
        <div className="resources-para">{props.para}</div>
      </a>
    </div>
  );
}

export default ResourcesCard;
