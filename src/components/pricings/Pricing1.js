import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

// Core Components

function Pricing1() {
  const [activeTab, setActiveTab] = React.useState("tab1");
  return (
    <>
      <div className="pricing-1" id="pricing-1">
        <Container>
          <Row>
            <Col className="mx-auto text-center mb-5" md="6">
              <h2 className="title">Pick the best plan for you</h2>
              <h4 className="description">
                You have Free Unlimited Updates and Premium Support on each
                package.
              </h4>
              <div className="section-space"></div>
            </Col>
          </Row>
          <Row>
            <div className="nav-wrapper ml-auto mr-3 mb-3">
              <Nav
                className="nav-pills-success nav-fill flex-column flex-md-row"
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
              <Card className="card-pricing bg-gradient-info border-0 text-center mb-4">
                <CardHeader className="bg-transparent">
                  <h6 className="text-uppercase ls-1 text-white py-3 mb-0">
                    Starter
                  </h6>
                </CardHeader>
                <CardBody>
                  <div className="display-2 text-white">$22</div>
                  <span className="text-white">per month</span>
                  <ul className="list-unstyled my-4">
                    <li>
                      <div className="d-flex align-items-center">
                        <div>
                          <div className="icon icon-xs icon-shape bg-white shadow rounded-circle text-info">
                            <i className="ni ni-book-bookmark"></i>
                          </div>
                        </div>
                        <div>
                          <span className="pl-2 text-sm text-white">
                            Complete documentation
                          </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center">
                        <div>
                          <div className="icon icon-xs icon-shape bg-white shadow rounded-circle text-info">
                            <i className="ni ni-diamond"></i>
                          </div>
                        </div>
                        <div>
                          <span className="pl-2 text-sm text-white">
                            Working materials in Sketch
                          </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center">
                        <div>
                          <div className="icon icon-xs icon-shape bg-white shadow rounded-circle text-info">
                            <i className="ni ni-chart-pie-35"></i>
                          </div>
                        </div>
                        <div>
                          <span className="pl-2 text-sm text-white">
                            2GB cloud storage
                          </span>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <Button
                    className="text-white mb-3"
                    color="link"
                    type="button"
                  >
                    Get Started
                  </Button>
                </CardBody>
                <CardFooter className="bg-transparent">
                  <a
                    className="text-white"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Request a demo
                  </a>
                </CardFooter>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-pricing bg-gradient-warning border-0 text-center mb-4">
                <CardHeader className="bg-transparent">
                  <h6 className="text-uppercase ls-1 text-white py-3 mb-0">
                    PRO
                  </h6>
                </CardHeader>
                <CardBody>
                  <div className="display-2 text-white">$45</div>
                  <span className="text-white">per month</span>
                  <ul className="list-unstyled my-4">
                    <li>
                      <div className="d-flex align-items-center">
                        <div>
                          <div className="icon icon-xs icon-shape bg-white shadow rounded-circle text-warning">
                            <i className="ni ni-book-bookmark"></i>
                          </div>
                        </div>
                        <div>
                          <span className="pl-2 text-sm text-white">
                            Complete documentation
                          </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center">
                        <div>
                          <div className="icon icon-xs icon-shape bg-white shadow rounded-circle text-warning">
                            <i className="ni ni-diamond"></i>
                          </div>
                        </div>
                        <div>
                          <span className="pl-2 text-sm text-white">
                            Working materials in Sketch
                          </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center">
                        <div>
                          <div className="icon icon-xs icon-shape bg-white shadow rounded-circle text-warning">
                            <i className="ni ni-chart-pie-35"></i>
                          </div>
                        </div>
                        <div>
                          <span className="pl-2 text-sm text-white">
                            200GB cloud storage
                          </span>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <Button
                    className="text-white mb-3"
                    color="link"
                    type="button"
                  >
                    Get Started
                  </Button>
                </CardBody>
                <CardFooter className="bg-transparent">
                  <a
                    className="text-white"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Request a demo
                  </a>
                </CardFooter>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-pricing bg-gradient-success border-0 text-center mb-4">
                <CardHeader className="bg-transparent">
                  <h6 className="text-uppercase ls-1 text-white py-3 mb-0">
                    Enterprise
                  </h6>
                </CardHeader>
                <CardBody>
                  <div className="display-2 text-white">$68</div>
                  <span className="text-white">per month</span>
                  <ul className="list-unstyled my-4">
                    <li>
                      <div className="d-flex align-items-center">
                        <div>
                          <div className="icon icon-xs icon-shape bg-white shadow rounded-circle text-success">
                            <i className="ni ni-book-bookmark"></i>
                          </div>
                        </div>
                        <div>
                          <span className="pl-2 text-sm text-white">
                            Complete documentation
                          </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center">
                        <div>
                          <div className="icon icon-xs icon-shape bg-white shadow rounded-circle text-success">
                            <i className="ni ni-diamond"></i>
                          </div>
                        </div>
                        <div>
                          <span className="pl-2 text-sm text-white">
                            Working materials in Sketch
                          </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center">
                        <div>
                          <div className="icon icon-xs icon-shape bg-white shadow rounded-circle text-success">
                            <i className="ni ni-chart-pie-35"></i>
                          </div>
                        </div>
                        <div>
                          <span className="pl-2 text-sm text-white">
                            Unlimited cloud storage
                          </span>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <Button
                    className="text-white mb-3"
                    color="link"
                    type="button"
                  >
                    Get Started
                  </Button>
                </CardBody>
                <CardFooter className="bg-transparent">
                  <a
                    className="text-white"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Request a demo
                  </a>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Pricing1;
