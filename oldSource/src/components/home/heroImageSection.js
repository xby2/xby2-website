import React from "react";
import PropTypes from "prop-types";
import { Row } from "react-bootstrap";

const HeroImageSection = ({ image, title, text }) => {
  return (
    <Row>
      <img src={image} style={{ width: "100%" }} alt="X by 2" />
      <span className="landing-page-hero-title">{title}</span>
      <br />
      <div className="landing-page-hero-text-wrapper">
        <span className="landing-page-hero-text">{text}</span>
      </div>
    </Row>
  );
};

HeroImageSection.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default HeroImageSection;
