import React from "react";
import { Row } from "react-bootstrap";

const OpenPosition = ({ title, text, link }) => {
  return (
    <Row>
      <h2>{title.toString().toLowerCase()}</h2>
      <p>{text}</p>
      <a href={link}>position detail &gt;</a>
    </Row>
  );
};

export default OpenPosition;
