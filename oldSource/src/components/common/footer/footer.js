import React from "react";
import toastr from "toastr";
import $ from "jquery";
import "../../../css/footer.css";

import CopyrightSection from "./copyrightSection";
import SitemapSection from "./sitemapSection";
import ContactSection from "./contactSection";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactInfo: {
        name: "",
        email: "",
        message: ""
      }
    };

    this.setContactFormState = this.setContactFormState.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
  }

  setContactFormState(event) {
    const contactInfo = this.state.contactInfo;
    contactInfo[event.target.name] = event.target.value;
    this.setState({
      contactInfo: contactInfo,
      dirty: true
    });
  }

  sendEmail(event) {
    event.preventDefault();

    $.getJSON("https://randomuser.me/api/").then(data => {
      this.setState(
        {
          contactInfo: {
            name: "",
            email: "",
            message: ""
          }
        },
        function() {
          toastr.success("Email sent.");
        }
      );
    });
  }

  render() {
    return (
      <footer id="footer">
        <ContactSection
          onSave={this.sendEmail}
          setContactFormState={this.setContactFormState}
          contactInfo={this.state.contactInfo}
        />
        <SitemapSection />
        <CopyrightSection
          copyrightText="2017 X by 2"
          privacyPolicyLink="/privacy"
        />
      </footer>
    );
  }
}

export default Footer;
