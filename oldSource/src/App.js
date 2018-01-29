import React, { Component } from "react";
import "./css/App.css";
import { Grid } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/common/header/header";
import Footer from "./components/common/footer/footer";
import ClientStoriesPage from "./components/client-stories/clientStoriesPage";
import CapabilitiesPage from "./components/capabilities/capabilitiesPage";
import CareersPage from "./components/careers/careersPage";
import PrivacyPolicy from "./components/privacyPolicy";
import HomePage from "./components/home/homePage";

class App extends Component {
  render() {
    return (
      <Router>
        <Grid fluid>
          <Header />
          <Route exact path="/" component={HomePage} />
          <Route path="/client-stories" component={ClientStoriesPage} />
          <Route path="/capabilities" component={CapabilitiesPage} />
          <Route path="/careers" component={CareersPage} />
          <Route path="/privacy" component={PrivacyPolicy} />
          <Footer />
        </Grid>
      </Router>
    );
  }
}

export default App;
