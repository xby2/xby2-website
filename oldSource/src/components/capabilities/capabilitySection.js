import React from "react";

const CapabilitySection = props => {
  return (
    <div className="capability-section">
      <img
        className="capability-section-logo"
        src={props.logo}
        alt={props.title}
      />
      <h2 className="capability-section-title">
        {props.title.toString().toLowerCase()}.
      </h2>
      <p className="capability-section-content">
        {props.content}
      </p>
    </div>
  );
};

export default CapabilitySection;
