import React from "react";
import { Row, Col, Button } from "react-bootstrap";

const CapabilitiesWidget = props => {
  return (
    <Row>
      <Row>
        <Col sm={2}>Industries</Col>
        <Col sm={5}>
          <Button>Insurance</Button>
        </Col>
        <Col sm={5}>
          <Button>Healthcare</Button>
        </Col>
      </Row>
      <Row>
        <Col sm={2}>Services</Col>
        <Col sm={2}>
          <Button>Enterprise Architecture</Button>
        </Col>
        <Col sm={2}>
          <Button>Enterprise Architecture</Button>
        </Col>
        <Col sm={2}>
          <Button>Enterprise Architecture</Button>
        </Col>
        <Col sm={2}>
          <Button>Enterprise Architecture</Button>
        </Col>
        <Col sm={2}>
          <Button>Enterprise Architecture</Button>
        </Col>
      </Row>
    </Row>
  );
};

CapabilitiesWidget.propTypes = {};

export default CapabilitiesWidget;
