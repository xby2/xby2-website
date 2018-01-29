import React from "react";
import PropTypes from "prop-types";
import { Col } from "react-bootstrap";

const CapabilitySection = props => {
  return (
    <Col
      xsHidden={props.isHiddenOnMobile}
      md={4}
      className="home-featured-client-story-section"
    >
      <img
        className="home-featured-client-story-image"
        src={props.image}
        alt={props.title}
      />
      <h2 className="home-featured-client-story-title">
        {props.title.toString().toLowerCase()}
      </h2>
      <p className="home-featured-client-story-content">
        {props.content}
      </p>
      <a
        href={"/client-stories#" + props.id}
        className="home-featured-client-story-link"
        dangerouslySetInnerHTML={{ __html: props.linkText + " &gt;" }}
      />
    </Col>
  );
};

CapabilitySection.defaultProps = {
  isHiddenOnMobile: false
};

CapabilitySection.propTypes = {
  id: PropTypes.string.isRequired,
  isHiddenOnMobile: PropTypes.bool,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired
};

export default CapabilitySection;
