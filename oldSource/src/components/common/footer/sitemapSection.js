import React from 'react';
import { Row, Col } from "react-bootstrap";

const SitemapSection = props => {
    return (
        <Row id="sitemap">
            <div id="sitemap-wrapper">
                <Col sm={3}>
                    <div className="sitemap-title">client stories</div>
                    <ul>
                        <li>client stories</li>
                    </ul>
                </Col>
                <Col sm={3}>
                    <div className="sitemap-title">about</div>
                    <ul>
                        <li>our culture</li>
                        <li>our people</li>
                        <li>our value</li>
                        <li>our careers</li>
                    </ul>
                </Col>
                <Col sm={3}>
                    <div className="sitemap-title">capabilities</div>
                    <ul>
                        <li>services and expertise</li>
                        <li>industry</li>
                    </ul>
                </Col>
                <Col sm={3}>
                    <div className="sitemap-title">mind share</div>
                    <ul>
                        <li>mind share</li>
                    </ul>
                </Col>
            </div>
        </Row>
    );
}

export default SitemapSection;