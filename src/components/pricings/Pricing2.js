import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

// Core Components

function Pricing2() {
  const [activeTab, setActiveTab] = React.useState("tab1");
  return (
    <>
      <div className="pricing-2" id="pricing-2">
        <Container>
          <Row>
            <Col className="mx-auto text-center mb-3" md="6">
              <h3 className="display-3">Pick the best plan for you</h3>
              <p className="lead">
                You have Free Unlimited Updates and Premium Support on each
                package.
              </p>
              <div className="section-space"></div>
            </Col>
          </Row>
          <div className="space-100"></div>
          <Row>
            <div className="nav-wrapper mx-auto mr-3 mb-3">
              <Nav
                className="nav-pills-info nav-fill flex-column flex-md-row"
                pills
                role="tablist"
              >
                <NavItem>
                  <NavLink
                    className={
                      "mb-sm-3 mb-md-0 " +
                      (activeTab === "tab1" ? "active" : "")
                    }
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab("tab1");
                    }}
                  >
                    <i className="ni ni-satisfied mr-2"></i>
                    Monthly
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={
                      "mb-sm-3 mb-md-0 " +
                      (activeTab === "tab2" ? "active" : "")
                    }
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab("tab2");
                    }}
                  >
                    <i className="ni ni-collection mr-2"></i>
                    Yearly
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </Row>
          <Row>
            <Col md="4">
              <Card
                className="card-pricing bg-info card-background"
                data-background="image"
                style={{
                  backgroundImage:
                    "url(" + require("assets/img/ill/pricing_bg.svg") + ")",
                }}
              >
                <CardBody>
                  <h6 className="card-category text-white text-uppercase">
                    Starter
                  </h6>
                  <CardTitle tag="h1">
                    <small className="text-white">$</small>
                    199
                  </CardTitle>
                  <ul>
                    <li>
                      <b>10</b> Projects
                    </li>
                    <li>
                      <b>1</b> Team Members
                    </li>
                    <li>
                      <b>5</b> Personal Contacts
                    </li>
                    <li>
                      <b>500</b> Messages
                    </li>
                  </ul>
                  <Button
                    className="btn-white mt-3"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    Get Started
                  </Button>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card
                className="card-pricing bg-warning card-background"
                data-background="image"
                style={{
                  backgroundImage:
                    "url(" + require("assets/img/ill/pricing_bg.svg") + ")",
                }}
              >
                <CardBody>
                  <h6 className="card-category text-white text-uppercase">
                    PRO
                  </h6>
                  <CardTitle tag="h1">
                    <small className="text-white">$</small>
                    399
                  </CardTitle>
                  <ul>
                    <li>
                      <b>100</b> Projects
                    </li>
                    <li>
                      <b>10</b> Team Members
                    </li>
                    <li>
                      <b>50</b> Personal Contacts
                    </li>
                    <li>
                      <b>500</b> Messages
                    </li>
                  </ul>
                  <Button
                    className="btn-white mt-3"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    Get Started
                  </Button>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card
                className="card-pricing bg-success card-background"
                data-background="image"
                style={{
                  backgroundImage:
                    "url(" + require("assets/img/ill/pricing_bg.svg") + ")",
                }}
              >
                <CardBody>
                  <h6 className="card-category text-white text-uppercase">
                    Enterprise
                  </h6>
                  <CardTitle tag="h1">
                    <small className="text-white">$</small>
                    599
                  </CardTitle>
                  <ul>
                    <li>
                      <b>1K</b> Projects
                    </li>
                    <li>
                      <b>100</b> Team Members
                    </li>
                    <li>
                      <b>500</b> Personal Contacts
                    </li>
                    <li>
                      <b>Unlimited</b> Messages
                    </li>
                  </ul>
                  <Button
                    className="btn-white mt-3"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    Get Started
                  </Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Pricing2;
