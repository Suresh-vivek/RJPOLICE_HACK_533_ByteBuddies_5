// FraudCard.jsx
import React from "react";
import "./FraudCard.css";
import TOI from "../src/assets/toi.png";

const FraudCard = ({ headline, summary, link, image_link }) => {
  return (
    <div className="fraud-card">
      <div className="fraud-image">
        <img src={TOI && image_link} />
      </div>
      <div className="fraud-content">
        <span className="fraud-head">{headline}</span>
        <span className="fraud-summary">{summary}</span>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="fraud-link"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default FraudCard;
