import React from "react";
import { Row } from "react-bootstrap";

const CaseStudySection = props => {
  return (
    <Row className="case-study-section">
      <img
        className="case-study-image"
        src={props.image}
        alt={props.category}
      />
      <h2 className="case-study-title">case study</h2>
      <h3 className="case-study-category">
        {props.category.toString().toUpperCase()}
      </h3>
      <p className="case-study-content">
        {props.content}
      </p>
    </Row>
  );
};

export default CaseStudySection;
