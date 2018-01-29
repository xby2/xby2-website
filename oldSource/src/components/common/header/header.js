import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Scrollchor from "react-scrollchor";
import "../../../css/navbar.css";

import Logo from "./logo";

class Header extends React.Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              <Logo />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer to="/client-stories">
              <NavItem>client stories</NavItem>
            </LinkContainer>
            <LinkContainer to="/capabilities">
              <NavItem>capabilities</NavItem>
            </LinkContainer>
            <LinkContainer to="/careers">
              <NavItem>careers</NavItem>
            </LinkContainer>
            <NavItem>
              <Scrollchor to="#contactForm" animate={{ offset: -100 }}>
                contact
              </Scrollchor>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
