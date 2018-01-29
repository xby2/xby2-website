import React from "react";
import { Row } from "react-bootstrap";

import CareersHeaderImage from "../../img/careers-header.jpg";
import CareersHeader from "./careersHeader";
import OpenPositionsSection from "./openPositionsSection";
import JoinOurTeamSection from "./joinOurTeamSection";

class CareersPage extends React.Component {
  render() {
    return (
      <div>
        <CareersHeader title="careers" image={CareersHeaderImage} />
        <Row>
          <OpenPositionsSection width={9} />
          <JoinOurTeamSection width={3} />
        </Row>
      </div>
    );
  }
}

export default CareersPage;
