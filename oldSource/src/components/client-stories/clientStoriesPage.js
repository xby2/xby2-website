import React from "react";
import ClientStorySection from "./clientStorySection";

import MedicalInformaticsAndReportingImage from "../../img/client-stories/medical-informatics-and-reporting.jpg";
import ClaimsModernizationImage from "../../img/client-stories/claims-modernization.jpg";
import ArchitectureReviewImage from "../../img/client-stories/architecture-review.jpg";
import ProjectQuarterbackingImage from "../../img/client-stories/project-quarterbacking.jpg";

class ClientStoriesPage extends React.Component {
  render() {
    return (
      <div className="header-margin">
        <ClientStorySection
          id="medical-informatics-and-reporting"
          image={MedicalInformaticsAndReportingImage}
          title="Medical Informatics and Reporting"
          contentHeader="Adapting in today’s business environment"
          content="<p>In close collaboration with X by 2, a leading health insurer is developing (has developed?) advanced medical informatics and reporting capabilities that enable them to better evaluate the impact of systemic improvements in care processes, providing them with the flexibility and responsiveness to adapt to a rapidly change health care reform ecosystem.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p><p class='quote'><q>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</q></p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmom ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>"
          capabilities={["data/integration architecture"]}
          industries={["insurance"]}
        />
        <ClientStorySection
          id="project-quarterbacking"
          image={ProjectQuarterbackingImage}
          title="Project Quarterbacking"
          contentHeader="Leadership you can count on"
          content="<p>In close collaboration with X by 2, a leading health insurer is developing (has developed?) advanced medical informatics and reporting capabilities that enable them to better evaluate the impact of systemic improvements in care processes, providing them with the flexibility and responsiveness to adapt to a rapidly change health care reform ecosystem.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p><p class='quote'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmom ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>"
          capabilities={[
            "program leadership",
            "agile implementation",
            "app/solution architecture"
          ]}
          industries={["financial services"]}
        />
        <ClientStorySection
          id="claims-modernization"
          image={ClaimsModernizationImage}
          title="Claims Modernization"
          contentHeader="Our business transformation ideology"
          content="The claims functions is part of an insurer’s trust compact with their insureds, and having a modern system that delivers services and payments promptly and accurately is a competitive differentiator.  X by 2 led (?) a claims modernization project for a large insurer whose incumbent system was well past its prime.  The X by 2 team was tasked with sourcing, assessing, and recommending a new and modern claims system for the insurer.  The approach taken was at once pragmatic and aspirational.  Pragmatic in terms of what would solve the insurer’s current problems with claims, and what could be implemented in the context of the talent and capabilities of the internal resources. Aspirational from the perspective of what capabilities and services a new system could provide for the insurer in the future.  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          capabilities={[
            "project assessments",
            "data/integration architecture"
          ]}
          industries={["healthcare"]}
        />
        <ClientStorySection
          id="architecture-review"
          image={ArchitectureReviewImage}
          title="Architecture Review"
          contentHeader="How we provide value for your business"
          content="Software and application architectures are the blueprints for an effective and efficient business technology ecosystem.  But they’re not static one-and-done documents and should never be treated as such.  X by 2 worked with a large regional insurer to review, analyze, and update a five- year strategic architecture roadmap.  The roadmap was the insurer’s lynchpin for modernizing their data, systems, and digital environments.  A small X by 2 leadership team worked with the insurer to set up an in-flight architecture review engagement that would give the insurer, and its board of directors, the confidence that they were still moving in the right direction, and if not, what course corrections were required to meet their business goals.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
          capabilities={["data/integration architecture"]}
          industries={["insurance"]}
        />
      </div>
    );
  }
}

export default ClientStoriesPage;
