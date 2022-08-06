import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// Core Components

function Pricing5() {
  const [activeTab, setActiveTab] = React.useState("tab1");
  return (
    <>
      <section
        className="pricing-5"
        id="pricing-6"
        style={{
          backgroundImage:
            "url(" + require("assets/img/ill/bg_pricing5.svg") + ")",
        }}
      >
        <Container className="pt-5">
          <Row>
            <Col className="d-flex justify-content-center flex-column" md="4">
              <h3 className="display-3 mt-3">
                Choose a plan for your next project
              </h3>
              <Nav className="nav-pills-primary my-4" pills role="tablist">
                <NavItem>
                  <NavLink
                    className={activeTab === "tab1" ? "active" : ""}
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab("tab1");
                    }}
                  >
                    Cheaper
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === "tab2" ? "active" : ""}
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab("tab2");
                    }}
                  >
                    Expensive
                  </NavLink>
                </NavItem>
              </Nav>
              <p className="lead mt-0">
                You have Free Unlimited Updates and Premium Support on each
                package. You also have 20 days to request a refund.
              </p>
            </Col>
            <Col className="ml-auto mr-auto" lg="7" md="8">
              <TabContent className="tab-space" activeTab={activeTab}>
                <TabPane tabId="tab1">
                  <Row>
                    <Col md="6">
                      <Card className="card-pricing bg-white border-0 text-center mb-4">
                        <CardHeader className="bg-transparent">
                          <h6 className="text-uppercase ls-1 py-3 mb-0">
                            Standard
                          </h6>
                        </CardHeader>
                        <CardBody>
                          <div className="display-2">$25</div>
                          <span>per month</span>
                          <ul className="list-unstyled my-4">
                            <li className="align-items-center">
                              <b className="text-primary">20GB</b>{" "}
                              <span>File Storage</span>
                            </li>
                            <li className="align-items-center">
                              <b className="text-primary">15</b>{" "}
                              <span>Users</span>
                            </li>
                            <li className="align-items-center">
                              <b className="text-primary">false</b>{" "}
                              <span>Support</span>
                            </li>
                          </ul>
                        </CardBody>
                        <CardFooter className="bg-transparent">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            Request a demo
                          </a>
                        </CardFooter>
                      </Card>
                    </Col>
                    <Col md="6">
                      <Card className="card-pricing bg-white border-0 text-center mb-4">
                        <CardHeader className="bg-transparent">
                          <h6 className="text-uppercase ls-1 py-3 mb-0">
                            Premium
                          </h6>
                        </CardHeader>
                        <CardBody>
                          <div className="display-2">$59</div>
                          <span>per month</span>
                          <ul className="list-unstyled my-4">
                            <li className="align-items-center">
                              <b className="text-primary">50GB</b>{" "}
                              <span>File Storage</span>
                            </li>
                            <li className="align-items-center">
                              <b className="text-primary">100</b>{" "}
                              <span>Users</span>
                            </li>
                            <li className="align-items-center">
                              <b className="text-primary">Premium</b>{" "}
                              <span>Support</span>
                            </li>
                          </ul>
                        </CardBody>
                        <CardFooter className="bg-transparent">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            Request a demo
                          </a>
                        </CardFooter>
                      </Card>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="tab2">
                  <Row>
                    <Col md="6">
                      <Card className="card-pricing bg-white border-0 text-center mb-4">
                        <CardHeader className="bg-transparent">
                          <h6 className="text-uppercase ls-1 py-3 mb-0">
                            Gold
                          </h6>
                        </CardHeader>
                        <CardBody>
                          <div className="display-2">$100</div>
                          <span>per month</span>
                          <ul className="list-unstyled my-4">
                            <li className="align-items-center">
                              <b className="text-primary">200GB</b>{" "}
                              <span>File Storage</span>
                            </li>
                            <li className="align-items-center">
                              <b className="text-primary">Unlimited</b>{" "}
                              <span>Users</span>
                            </li>
                            <li className="align-items-center">
                              <b className="text-primary">Premium</b>{" "}
                              <span>Support</span>
                            </li>
                          </ul>
                        </CardBody>
                        <CardFooter className="bg-transparent">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            Request a demo
                          </a>
                        </CardFooter>
                      </Card>
                    </Col>
                    <Col md="6">
                      <Card className="card-pricing bg-white border-0 text-center mb-4">
                        <CardHeader className="bg-transparent">
                          <h6 className="text-uppercase ls-1 py-3 mb-0">
                            Platinum
                          </h6>
                        </CardHeader>
                        <CardBody>
                          <div className="display-2">$135</div>
                          <span>per month</span>
                          <ul className="list-unstyled my-4">
                            <li className="align-items-center">
                              <b className="text-primary">500GB</b>{" "}
                              <span>File Storage</span>
                            </li>
                            <li className="align-items-center">
                              <b className="text-primary">Unlimited</b>{" "}
                              <span>Users</span>
                            </li>
                            <li className="align-items-center">
                              <b className="text-primary">No time</b>{" "}
                              <span>Tracking</span>
                            </li>
                          </ul>
                        </CardBody>
                        <CardFooter className="bg-transparent">
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            Request a demo
                          </a>
                        </CardFooter>
                      </Card>
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Pricing5;
