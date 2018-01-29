import React from "react";
import CapabilitySection from "./capabilitySection";
import CaseStudySection from "./caseStudySection";
import { Row } from "react-bootstrap";

import EnterpriseArchitectureLogo from "../common/logos/enterpriseArchitectureLogo.png";
import ApplicationSolutionArchitectureLogo from "../common/logos/applicationSolutionArchitectureLogo.png";
import DataIntegrationArchitectureLogo from "../common/logos/dataIntegrationArchitectureLogo.png";
import ProgramLeadershipAndAgileImplementationLogo from "../common/logos/programLeadershipAndAgileImplementationLogo.png";
import ProjectAssessmentsArchitectureAuditAndReviewLogo from "../common/logos/projectAssessmentsArchitectureAuditAndReviewLogo.png";
import InsuranceLogo from "../common/logos/insuranceLogo.png";
import HealthcareLogo from "../common/logos/healthcareLogo.png";
import FinancialServicesLogo from "../common/logos/financialServicesLogo.png";
import RetailLogo from "../common/logos/retailLogo.png";
import EnterpriseArchitectureCaseStudyImage from "../../img/enterprise-architecture-case-study-image.png";
import HealthcareCaseStudyImage from "../../img/healthcare-case-study.png";

class CapabilitiesPage extends React.Component {
  render() {
    return (
      <div className="header-margin">
        <Row>
          <h1>services &amp; expertise</h1>
        </Row>
        <CaseStudySection
          image={EnterpriseArchitectureCaseStudyImage}
          category="Enterprise Architecture"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        />
        <CapabilitySection
          logo={EnterpriseArchitectureLogo}
          title="Enterprise Architecture"
          content="It’s an old truism that it’s difficult to get some place if you don’t know where you’re going.  Likewise, it’s difficult to conceptualize, construct, and implement effective and efficient software platforms if you don’t have a strong underlying plan.  That underlying plan is enterprise architecture, and done well it becomes the foundation upon which flexible and responsive software solutions are implemented.  An agile enterprise architecture pays for itself over and over again by enabling organizations to effectively and responsively align business strategies with the technology solutions that are focused on the future vision of the organization."
        />
        <CapabilitySection
          logo={ApplicationSolutionArchitectureLogo}
          title="Application / Solution Architecture"
          content="One of the many analogies used to describe enterprise architecture is that of a chessboard.  The long-term goal is clear – to win the game – but how that’s achieved is descriptive rather than prescriptive.  It all depends on the context and circumstances presented within the chess match.  And that’s where application and solution architectures become the individual moves required for winning the technology “chess match” in any organization.  And just as with chess, the, the goal for organizations is to execute and implement technology solutions as efficiently and effectively as possible.  While every application and solution can be functionally unique, they all have common elements that require a holistic approach to insure that any and all applications support the business goals and objective of the organization."
        />
        <CapabilitySection
          logo={DataIntegrationArchitectureLogo}
          title="Data / Integration Architecture"
          content="Leveraging data and information for market insights and actionable strategies has become the gold standard for competitive advantage.  However, for most organizations that remains a hanging fruit just beyond their reach.  Years of poor data stewardship, proprietary data stores, and redundant data and reporting structures prevents quick actions and often defeats even the best data modernization strategies.  There is no shortcut, and doing this the right way is difficult, but with a sound approach to data and integration architecture the odds for success are greatly enhanced.  A well-conceived data and integration architecture enables the efficient collection, organization, quality, consistency, and dissemination of data directly to those areas of the organization where it can have the greatest positive impact."
        />
        <CapabilitySection
          logo={ProgramLeadershipAndAgileImplementationLogo}
          title="program leadership and agile implementation"
          content="Good project leadership is part art and part science, and it’s the combination of both that tends to bring the best results.  Much like an NFL quarterback, effective project leaders are able to convince a diverse group of individuals to come together as a team in order to achieve loftier goals than they could achieve as individuals.  That’s combined with a bias toward client advocacy and vendor solution neutrality, skills honed over many years in the trenches of architecting and implementing programs and projects.  When combined with an agile approach to project organization, management, and execution, this results in a powerful recipe for success."
        />
        <CapabilitySection
          logo={ProjectAssessmentsArchitectureAuditAndReviewLogo}
          title="project assessments architecture audit and review"
          content="A good pilot always knows the condition of his or her craft.  They know this by continually reviewing an array of instruments that provide them with the data they need to make adjustments and course corrections.  Likewise, periodic reviews of in flight projects and the architectures that undergird them provide project and business leaders with the information they need – at the right time – to make informed adjustments and course corrections on behalf of their organizations.  Just as with pilots who always are looking for the optimal flight routes, organizations look to optimize the scalability, flexibility, and long-term viability of their processes and systems."
        />

        <Row>
          <h1>industries</h1>
        </Row>
        <CaseStudySection
          image={HealthcareCaseStudyImage}
          category="Healthcare"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        />
        <CapabilitySection
          logo={InsuranceLogo}
          title="Insurance"
          content="The insurance industry is experiencing dramatic and fundamental change.  Customer centricity, innovation, and insurtech solutions have seemingly won the day, and those insurers who ignore such macro trends are risking their long-term viability.  It takes a steady hand that both understands these changes, and can contextualize them for individual insurers in order to achieve the benefits of operational and competitive advantage.  The ability to leverage that rare combination of business domain knowledge and technological prowess will go far in determining the industry’s leaders and laggards of tomorrow."
        />
        <CapabilitySection
          logo={HealthcareLogo}
          title="Healthcare"
          content="Healthcare is in the midst of a revolution based on proactive provider care and patient health, the result of which leads to operational efficiency for insurers.  The key to getting there is a granular understanding of populations of providers and patients, and the key to that is the effective use of data analytics and actionable outcomes.  While many insurers are “data-rich,” they’re still “insight-poor.”  The key to achieving actionable insights is the organization and actualization of information into achievable outcomes that are prioritized and executed from those parts of the organization where they can have the optimal impact."
        />
        <CapabilitySection
          logo={FinancialServicesLogo}
          title="Financial Services"
          content="The Financial Services sector continues to experience rapid innovation and change.  At the core of this activity is the desire to fundamentally change the consumer relationship and experience across all aspects of their financial lives.  To accomplish this the industry has changed the way it’s using technology for process effectiveness on the consumer side, and for process efficiency on the operational side.  All of this requires the ability to leverage technology and process to rapidly respond to market opportunities and changes, and to use advanced analytics to build a proactive service model for consumers."
        />
        <CapabilitySection
          logo={RetailLogo}
          title="Retail"
          content="Retail has led the way in business model and technology innovation over the past several years.  On demand consumerism, customer centricity, proactive customer service, cross-selling products and services, have all been part of the retail innovation surge.  The leaders in the retail sector have demonstrated the need for technological innovation and operational efficiency, and the responsive and flexible enterprise and data architectures required to enable it all.  The retail sector has also doubled down on its use of information and analytics to predict consumer behaviors and proactively respond to consumer needs."
        />
      </div>
    );
  }
}

export default CapabilitiesPage;
