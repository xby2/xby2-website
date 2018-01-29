import React from "react";
import PropTypes from "prop-types";
import { Col } from "react-bootstrap";
import OpenPosition from "./openPosition";

const OpenPositionsSection = ({ width }) => {
  return (
    <Col sm={width}>
      <h1>open positions</h1>
      <OpenPosition title="designer" />
      <OpenPosition title="database developer" />
      <OpenPosition title="data architect" />
    </Col>
  );
};

OpenPositionsSection.propTypes = {
  width: PropTypes.number.isRequired
};

export default OpenPositionsSection;
