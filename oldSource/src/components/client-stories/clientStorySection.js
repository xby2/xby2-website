import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";

const ClientStorySection = props => {
  return (
    <Row id={props.id} className="client-story-section">
      <Row style={{ position: "relative" }}>
        <img
          className="client-story-image"
          src={props.image}
          alt={props.title}
        />
        <span className="client-story-definition">client story</span>
        <br />
        <span className="client-story-title">
          {props.title.toString().toLowerCase()}
        </span>
      </Row>
      <Row>
        <Col sm={8}>
          <h2 className="client-story-content-header">
            {props.contentHeader}
          </h2>
          <div
            className="client-story-content"
            dangerouslySetInnerHTML={{ __html: props.content }}
          />
        </Col>
        <Col sm={4}>
          <h2 className="client-story-capabilities-header">
            capabilities &gt;
          </h2>
          <ul className="client-story-capabilities">
                { props.capabilities.map(capability =>
                    <li className="client-story-capability" key={capability}>
                        { capability }.
                    </li>
                )}
                { props.industries.map(industry =>
                    <li className="client-story-capability" key={industry}>
                        { industry }.
                    </li>
                )}
          </ul>
        </Col>
      </Row>
    </Row>
  );
};

ClientStorySection.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  contentHeader: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default ClientStorySection;
