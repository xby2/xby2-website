import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
import SocialMediaSection from "./socialMediaSection";
import LinkedInLogo from "../../../img/linkedInLogo";
import TwitterLogo from "../../../img/twitterLogo";
import AddressSection from "./addressSection";
import ContactForm from "./contactForm";

const ContactSection = ({ setContactFormState, contactInfo, onSave }) => {
  return (
    <Row id="contact">
      {/* Social media icons:
                        https://codepen.io/ruandre/pen/howFi */}
      <Col sm={5} id="social-media">
        <Row>
          <Col xs={6}>
            <SocialMediaSection
              url={"https://www.linkedin.com/company-beta/87251/"}
              logo={<LinkedInLogo height={75} />}
              text="connect"
            />
          </Col>
          <Col xs={6}>
            <SocialMediaSection
              url={"https://twitter.com/x_by_2"}
              logo={<TwitterLogo height={75} />}
              text="@x_by_2"
            />
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <AddressSection
              name="Detroit"
              address1="35055 West 12 Mile Rd"
              address2="Suite 220"
              city="Farmington Hills"
              state="MI"
              zip="48331"
              phone="248-538-9292"
            />
          </Col>
          <Col xs={6}>
            <AddressSection
              name="Toronto"
              address1="2425 Matheson Blvd East"
              address2="Suite 800"
              city="Mississauga"
              state="ON"
              zip="L4W 5K4"
              phone="905-267-0223"
            />
          </Col>
        </Row>
      </Col>
      <Col xs={12} sm={7} id="contactForm">
        <ContactForm
          onChange={setContactFormState}
          contactInfo={contactInfo}
          onSave={onSave}
        />
      </Col>
    </Row>
  );
};

ContactSection.propTypes = {
  setContactFormState: PropTypes.func.isRequired,
  contactInfo: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired
};

export default ContactSection;
