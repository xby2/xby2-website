import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CopyrightSection = ({ copyrightText, privacyPolicyLink, privacyPolicyText }) => {
    return (
        <Row id="copyright">
            <Col xs={6} className="text-left">
                &copy;{copyrightText}
            </Col>
            <Col xs={6} className="text-right">
                <Link to={privacyPolicyLink}>{privacyPolicyText}</Link>
            </Col>
        </Row>
    );
}

CopyrightSection.propTypes = {
    copyrightText: PropTypes.string.isRequired,
    privacyPolicyLink: PropTypes.string.isRequired,
};

CopyrightSection.defaultProps = {
    privacyPolicyText: 'Privacy Policy'
}

export default CopyrightSection;