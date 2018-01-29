import React from "react";
import { Row } from "react-bootstrap";
import HeroImageSection from "./heroImageSection";
import FeaturedClientStorySection from "./featuredClientStorySection";

import HeroImage from "../../img/home-page.png";
import CapabilitiesWidgetImage from "../../img/capabilities-widget.PNG";
import MedicalInformaticsAndReportingImage from "../../img/client-stories/medical-informatics-and-reporting.jpg";
import ClaimsModernizationImage from "../../img/client-stories/claims-modernization.jpg";
import ArchitectureReviewImage from "../../img/client-stories/architecture-review.jpg";

class HomePage extends React.Component {
  render() {
    return (
      <div className="header-margin">
        <HeroImageSection
          image={HeroImage}
          title="Architects specialized in Insurance and Healthcare"
          text="Founded in 1998 X by 2 is a technology consultancy focused on the
        practice of application and data architecture and the delivery of core
        client systems, strategic business applications, and enterprise
        integrations in the insurance and healthcare industries."
        />
        <Row>
          <h1>services, expertise and industries</h1>
        </Row>
        <img
          src={CapabilitiesWidgetImage}
          alt="Capabilities Widget"
          style={{ width: "100%" }}
        />
        <Row>
          <h1>featured client stories</h1>
        </Row>
        <Row>
          <FeaturedClientStorySection
            id="medical-informatics-and-reporting"
            isHiddenOnMobile
            image={MedicalInformaticsAndReportingImage}
            title="Medical Informatics and Reporting"
            content="In close collaboration with X by 2, a leading health insurer is developing advanced medical informatics and reporting capabilities that enable them to better evaluate the impact of systemic improvements in care processes, providing them with the flexibility and responsiveness to adapt to a rapidly change health care reform ecosystem."
            linkText="<b>Adapting</b> in today's <b>business environment</b>"
          />
          <FeaturedClientStorySection
            id="claims-modernization"
            isHiddenOnMobile
            image={ClaimsModernizationImage}
            title="Claims Modernization"
            content="The claims functions is part of an insurer’s trust compact with their insureds, and having a modern system that delivers services and payments promptly and accurately is a competitive differentiator.  X by 2 led (?) a claims modernization project for a large insurer whose incumbent system was well past its prime.  The X by 2 team was tasked with sourcing, assessing, and recommending a new and modern claims system for the insurer.  The approach taken was at once pragmatic and aspirational.  Pragmatic in terms of what would  ... casualty and life insurer in the Midwest.   The insurer chose X by 2 for the program leadership tracks in several functional categories, including architecture, integration, and core systems implementation."
            linkText="Our <b>business transformation ideology</b>"
          />
          <FeaturedClientStorySection
            id="architecture-review"
            image={ArchitectureReviewImage}
            title="Architecture Review"
            content="Software and application architectures are the blueprints for an effective and efficient business technology ecosystem.  But they’re not static one-and-done documents and should never be treated as such.  X by 2 worked with a large regional insurer to review, analyze, and update a five- year strategic architecture roadmap.  The roadmap was the insurer’s lynchpin for modernizing their data, systems, and digital environments.  A small X by 2 leadership team worked with the insurer to set up an in-flight architecture review engagement."
            linkText="How we <b>provide value</b> for <b>your business</b>"
          />
        </Row>
      </div>
    );
  }
}

export default HomePage;
