import "./PrimaryButton.css";

import React from "react";

function PrimaryButton(props) {
  return (
    <div className="pri-outer">
      <div className="pri-inner">{props.text}</div>
    </div>
  );
}

export default PrimaryButton;
