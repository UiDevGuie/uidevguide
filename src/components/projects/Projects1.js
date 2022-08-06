import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Navbar,
  Pagination,
  PaginationItem,
  PaginationLink,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// Core Components

function Projects1() {
  return (
    <>
      <div className="project-1">
        <Container>
          <Row>
            <Col className="mr-auto ml-auto text-center mb-5" lg="8">
              <h3 className="diaplay-3">Some of Our Awesome Projects</h3>
            </Col>
          </Row>
        </Container>
        <Navbar className="bg-transparent mb-5" expand="lg">
          <Container>
            <div className="navbar-translate">
              <p>52 projects found</p>
            </div>
          </Container>
        </Navbar>
        <Container>
          <Row>
            <Col lg="4" md="6">
              <Card>
                <CardHeader className="mt-2">
                  <div className="float-left">
                    <i className="ni ni-basket d-inline text-info"></i>
                    <p className="d-inline">H-23</p>
                  </div>
                  <div className="float-right">
                    <UncontrolledDropdown>
                      <Button
                        aria-expanded={false}
                        color="link"
                        data-toggle="dropdown"
                        size="sm"
                        type="button"
                      >
                        <i className="ni ni-settings-gear-65"></i>
                      </Button>
                      <DropdownMenu right x-placement="bottom-end">
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Action
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Another action
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Something else
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                </CardHeader>
                <CardBody className="text-center p-4">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="img-fluid rounded-circle shadow"
                      src={require("assets/img/slack.png")}
                      style={{ width: "100px" }}
                    ></img>
                  </a>
                  <CardTitle className="mt-3 mb-0" tag="h4">
                    Slack
                  </CardTitle>
                  <p className="card-description">
                    We are happy to work at such a great project.
                  </p>
                  <CardTitle tag="h5" className="mt-4">
                    Members
                  </CardTitle>
                  <div className="avatar-group">
                    <a
                      className="avatar avatar-lg rounded-circle"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      id="tooltip610556092"
                    >
                      <img
                        alt="..."
                        src={require("assets/img/faces/team-1.jpg")}
                      ></img>
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip610556092">
                      Ryan Tompson
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-lg rounded-circle"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      id="tooltip467974775"
                    >
                      <img
                        alt="..."
                        src={require("assets/img/faces/team-2.jpg")}
                      ></img>
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip467974775">
                      Romina Hadid
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-lg rounded-circle"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      id="tooltip533287280"
                    >
                      <img
                        alt="..."
                        src={require("assets/img/faces/team-3.jpg")}
                      ></img>
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip533287280">
                      Alexander Smith
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-lg rounded-circle"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      id="tooltip505977567"
                    >
                      <img
                        alt="..."
                        src={require("assets/img//faces/team-4.jpg")}
                      ></img>
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip505977567">
                      Jessica Doe
                    </UncontrolledTooltip>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4" md="6">
              <Card>
                <CardHeader className="mt-2">
                  <div className="float-left">
                    <i className="ni ni-button-power d-inline text-success"></i>
                    <p className="d-inline">F-43</p>
                  </div>
                  <div className="float-right">
                    <UncontrolledDropdown>
                      <Button
                        aria-expanded={false}
                        color="link"
                        data-toggle="dropdown"
                        size="sm"
                        type="button"
                      >
                        <i className="ni ni-settings-gear-65"></i>
                      </Button>
                      <DropdownMenu right x-placement="bottom-end">
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Action
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Another action
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Something else
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                </CardHeader>
                <CardBody className="text-center p-4">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="img-fluid rounded-circle shadow"
                      src={require("assets/img/spotify.jpeg")}
                      style={{ width: "100px" }}
                    ></img>
                  </a>
                  <CardTitle className="mt-3 mb-0" tag="h4">
                    Spotify
                  </CardTitle>
                  <p className="card-description">
                    We strive to embrace and drive change in our industry.
                  </p>
                  <CardTitle tag="h5" className="mt-4">
                    Members
                  </CardTitle>
                  <div className="avatar-group">
                    <a
                      className="avatar avatar-lg rounded-circle"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      id="tooltip485942054"
                    >
                      <img
                        alt="..."
                        src={require("assets/img/faces/team-1.jpg")}
                      ></img>
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip485942054">
                      Ryan Tompson
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-lg rounded-circle"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      id="tooltip194654297"
                    >
                      <img
                        alt="..."
                        src={require("assets/img/faces/team-2.jpg")}
                      ></img>
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip194654297">
                      Romina Hadid
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-lg rounded-circle"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      id="tooltip744668896"
                    >
                      <img
                        alt="..."
                        src={require("assets/img/faces/team-3.jpg")}
                      ></img>
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip744668896">
                      Alexander Smith
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-lg rounded-circle"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      id="tooltip662587306"
                    >
                      <img
                        alt="..."
                        src={require("assets/img//faces/team-4.jpg")}
                      ></img>
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip662587306">
                      Jessica Doe
                    </UncontrolledTooltip>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4" md="6">
              <Card>
                <CardHeader className="mt-2">
                  <div className="float-left">
                    <i className="ni ni-building d-inline text-danger"></i>
                    <p className="d-inline">J-11</p>
                  </div>
                  <div className="float-right">
                    <UncontrolledDropdown>
                      <Button
                        aria-expanded={false}
                        color="link"
                        data-toggle="dropdown"
                        size="sm"
                        type="button"
                      >
                        <i className="ni ni-settings-gear-65"></i>
                      </Button>
                      <DropdownMenu right x-placement="bottom-end">
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Action
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Another action
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Something else
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                </CardHeader>
                <CardBody className="text-center p-4">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="img-fluid rounded-circle shadow"
                      src={require("assets/img/dribbble.png")}
                      style={{ width: "100px" }}
                    ></img>
                  </a>
                  <CardTitle className="mt-3 mb-0" tag="h4">
                    Dribbble
                  </CardTitle>
                  <p className="card-description">
                    The time has come to bring our plans and ideas to life.
                  </p>
                  <CardTitle tag="h5" className="mt-4">
                    Members
                  </CardTitle>
                  <div className="avatar-group">
                    <a
                      className="avatar avatar-lg rounded-circle"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      id="tooltip143851957"
                    >
                      <img
                        alt="..."
                        src={require("assets/img/faces/team-1.jpg")}
                      ></img>
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip143851957">
                      Ryan Tompson
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-lg rounded-circle"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      id="tooltip846192809"
                    >
                      <img
                        alt="..."
                        src={require("assets/img/faces/team-2.jpg")}
                      ></img>
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip846192809">
                      Romina Hadid
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-lg rounded-circle"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      id="tooltip995755804"
                    >
                      <img
                        alt="..."
                        src={require("assets/img/faces/team-3.jpg")}
                      ></img>
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip995755804">
                      Alexander Smith
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-lg rounded-circle"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      id="tooltip902018889"
                    >
                      <img
                        alt="..."
                        src={require("assets/img//faces/team-4.jpg")}
                      ></img>
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip902018889">
                      Jessica Doe
                    </UncontrolledTooltip>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4" md="6">
              <Card>
                <CardHeader className="mt-2">
                  <div className="float-left">
                    <i className="ni ni-spaceship d-inline text-warning"></i>
                    <p className="d-inline">A-11</p>
                  </div>
                  <div className="float-right">
                    <UncontrolledDropdown>
                      <Button
                        aria-expanded={false}
                        color="link"
                        data-toggle="dropdown"
                        size="sm"
                        type="button"
                      >
                        <i className="ni ni-settings-gear-65"></i>
                      </Button>
                      <DropdownMenu right x-placement="bottom-end">
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Action
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Another action
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Something else
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                </CardHeader>
                <CardBody className="text-center p-4">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="img-fluid rounded-circle shadow"
                      src={require("assets/img/tim.png")}
                      style={{ width: "100px" }}
                    ></img>
                  </a>
                  <CardTitle className="mt-3 mb-0" tag="h4">
                    CreativeTim
                  </CardTitle>
                  <p className="card-description">
                    We are developing the best design projects.
                  </p>
                  <CardTitle tag="h5" className="mt-4">
                    Members
                  </CardTitle>
                  <div className="avatar-group">
                    <a
                      className="avatar avatar-lg rounded-circle"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      id="tooltip441378595"
                    >
                      <img
                        alt="..."
                        src={require("assets/img/faces/team-1.jpg")}
                      ></img>
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip441378595">
                      Ryan Tompson
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-lg rounded-circle"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      id="tooltip948230858"
                    >
                      <img
                        alt="..."
                        src={require("assets/img/faces/team-2.jpg")}
                      ></img>
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip948230858">
                      Romina Hadid
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-lg rounded-circle"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      id="tooltip112452932"
                    >
                      <img
                        alt="..."
                        src={require("assets/img/faces/team-3.jpg")}
                      ></img>
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip112452932">
                      Alexander Smith
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-lg rounded-circle"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      id="tooltip655929737"
                    >
                      <img
                        alt="..."
                        src={require("assets/img//faces/team-4.jpg")}
                      ></img>
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip655929737">
                      Jessica Doe
                    </UncontrolledTooltip>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4" md="6">
              <Card>
                <CardHeader className="mt-2">
                  <div className="float-left">
                    <i className="ni ni-umbrella-13 d-inline text-primary"></i>
                    <p className="d-inline">A-11</p>
                  </div>
                  <div className="float-right">
                    <UncontrolledDropdown>
                      <Button
                        aria-expanded={false}
                        color="link"
                        data-toggle="dropdown"
                        size="sm"
                        type="button"
                      >
                        <i className="ni ni-settings-gear-65"></i>
                      </Button>
                      <DropdownMenu right x-placement="bottom-end">
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Action
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Another action
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Something else
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                </CardHeader>
                <CardBody className="text-center p-4">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="img-fluid rounded-circle shadow"
                      src={require("assets/img/dropbox.png")}
                      style={{ width: "100px" }}
                    ></img>
                  </a>
                  <CardTitle className="mt-3 mb-0" tag="h4">
                    DropBox
                  </CardTitle>
                  <p className="card-description">
                    It is important to save every project safely with our app.
                  </p>
                  <CardTitle tag="h5" className="mt-4">
                    Members
                  </CardTitle>
                  <div className="avatar-group">
                    <a
                      className="avatar avatar-lg rounded-circle"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      id="tooltip505014392"
                    >
                      <img
                        alt="..."
                        src={require("assets/img/faces/team-1.jpg")}
                      ></img>
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip505014392">
                      Ryan Tompson
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-lg rounded-circle"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      id="tooltip223581557"
                    >
                      <img
                        alt="..."
                        src={require("assets/img/faces/team-2.jpg")}
                      ></img>
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip223581557">
                      Romina Hadid
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-lg rounded-circle"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      id="tooltip160898790"
                    >
                      <img
                        alt="..."
                        src={require("assets/img/faces/team-3.jpg")}
                      ></img>
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip160898790">
                      Alexander Smith
                    </UncontrolledTooltip>
                    <a
                      className="avatar avatar-lg rounded-circle"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      id="tooltip664397004"
                    >
                      <img
                        alt="..."
                        src={require("assets/img//faces/team-4.jpg")}
                      ></img>
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip664397004">
                      Jessica Doe
                    </UncontrolledTooltip>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4" md="6">
              <Card>
                <CardHeader className="mt-2">
                  <div className="float-left">
                    <i className="ni ni-bus-front-12 d-inline"></i>
                    <p className="d-inline">E-28</p>
                  </div>
                  <div className="float-right">
                    <UncontrolledDropdown>
                      <Button
                        aria-expanded={false}
                        color="link"
                        data-toggle="dropdown"
                        size="sm"
                        type="button"
                      >
                        <i className="ni ni-settings-gear-65"></i>
                      </Button>
                      <DropdownMenu right x-placement="bottom-end">
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Action
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Another action
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Something else
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                </CardHeader>
                <CardBody className="text-center p-4">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="img-fluid rounded-circle shadow"
                      src={require("assets/img/unass.jpg")}
                      style={{ width: "100px" }}
                    ></img>
                  </a>
                  <CardTitle className="mt-3 mb-0" tag="h4">
                    Unassigned
                  </CardTitle>
                  <p className="card-description">
                    Here you can add your description and bellow add your
                    members.
                  </p>
                  <CardTitle tag="h5" className="mt-4">
                    Members
                  </CardTitle>
                  <div className="avatar-group">
                    <a
                      className="avatar avatar-sm rounded-circle"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      id="tooltip174916573"
                    >
                      <i className="ni ni-key-25"></i>
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip174916573">
                      Add memberss
                    </UncontrolledTooltip>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <footer className="mt-5">
            <Pagination
              className="pagination float-left"
              listClassName=" float-left"
            >
              <PaginationItem>
                <PaginationLink
                  aria-label="Previous"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <span aria-hidden={true}>
                    <i aria-hidden={true} className="ni ni-bold-left"></i>
                  </span>
                </PaginationLink>
              </PaginationItem>
              <PaginationItem className="active">
                <PaginationLink
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  ...
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  6
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  aria-label="Next"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <span aria-hidden={true}>
                    <i aria-hidden={true} className="ni ni-bold-right"></i>
                  </span>
                </PaginationLink>
              </PaginationItem>
            </Pagination>

            <div className="text-right">
              <p>Showing 6 out of 36</p>
              <div></div>
            </div>
          </footer>
        </Container>
      </div>
    </>
  );
}

export default Projects1;
