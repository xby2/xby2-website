import React from "react";
import PropTypes from "prop-types";
import { Row } from "react-bootstrap";

const CareersHeader = props => {
  return (
    <Row style={{ position: "relative" }}>
      <img className="client-story-image" src={props.image} alt={props.title} />
      <span className="client-story-definition">join our team</span>
      <br />
      <span className="client-story-title">
        {props.title.toString().toLowerCase()}
      </span>
    </Row>
  );
};

CareersHeader.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default CareersHeader;
