import React from "react";
import TextInput from "../textInput";
import TextAreaInput from "../textAreaInput";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";

class ContactForm extends React.Component {
  render() {
    const { contactInfo, onChange, onSave } = this.props;

    return (
      <form>
        <Row>
          <Col sm={6}>
            <TextInput
              name="name"
              label="name"
              value={contactInfo.name}
              onChange={onChange}
            />
          </Col>
          <Col sm={6}>
            <TextInput
              name="email"
              label="email"
              value={contactInfo.email}
              onChange={onChange}
            />
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <TextAreaInput
              name="message"
              label="how can we help you?"
              type="textarea"
              value={contactInfo.message}
              onChange={onChange}
            />
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <input
              type="submit"
              value="send to X by 2"
              className="btn"
              onClick={onSave}
            />
          </Col>
        </Row>
      </form>
    );
  }
}
ContactForm.propTypes = {
  contactInfo: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired
};

export default ContactForm;
