import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// Core Components

function Team4() {
  return (
    <>
      <div className="team-4">
        <Container>
          <Row>
            <Col className="mx-auto text-center mb-5" md="8">
              <h3 className="display-3">The Amazing Team</h3>
              <p className="lead">
                Society has put up so many boundaries, so many limitations on
                what’s right and wrong that it’s almost impossible to get a pure
                thought out. It’s like a little kid, a little boy, looking at
                colors.
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="ml-auto mr-auto" lg="10">
              <Card className="card-profile card-horizontal">
                <Row>
                  <Col xl="7">
                    <div className="card-image no-mask">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img"
                          src={require("assets/img/theme/tom-klein.jpg")}
                        ></img>
                      </a>
                    </div>
                  </Col>
                  <Col xl="5">
                    <CardBody className="mt-3">
                      <div className="card-profile-stats">
                        <div className="text-left p-0">
                          <span className="heading">Willian Pearce</span>
                          <span className="description">Name</span>
                        </div>
                      </div>
                      <div className="card-profile-stats">
                        <div className="text-left p-0">
                          <span className="heading">Project Manager</span>
                          <span className="description">Position</span>
                        </div>
                      </div>
                      <div className="card-profile-stats d-flex">
                        <div className="pl-0">
                          <span className="heading">367</span>
                          <span className="description">Followers</span>
                        </div>
                        <div>
                          <span className="heading">31</span>
                          <span className="description">Projects</span>
                        </div>
                        <div>
                          <span className="heading">189</span>
                          <span className="description">Commits</span>
                        </div>
                      </div>
                      <div className="card-profile-stats">
                        <div className="text-left p-0">
                          <div className="avatar-group mb-2">
                            <a
                              className="avatar avatar-lg rounded-circle shadow"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                              id="tooltip509740348"
                            >
                              <img
                                alt="..."
                                src={require("assets/img/faces/team-1.jpg")}
                              ></img>
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip509740348"
                            >
                              Ryan Tompson
                            </UncontrolledTooltip>
                            <a
                              className="avatar avatar-lg rounded-circle shadow"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                              id="tooltip473133872"
                            >
                              <img
                                alt="..."
                                src={require("assets/img/faces/team-2.jpg")}
                              ></img>
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip473133872"
                            >
                              Romina Hadid
                            </UncontrolledTooltip>
                            <a
                              className="avatar avatar-lg rounded-circle shadow"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                              id="tooltip19046757"
                            >
                              <img
                                alt="..."
                                src={require("assets/img/faces/team-3.jpg")}
                              ></img>
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip19046757"
                            >
                              Alexander Smith
                            </UncontrolledTooltip>
                            <a
                              className="avatar avatar-lg rounded-circle shadow"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                              id="tooltip678664894"
                            >
                              <img
                                alt="..."
                                src={require("assets/img//faces/team-4.jpg")}
                              ></img>
                            </a>
                            <UncontrolledTooltip
                              delay={0}
                              target="tooltip678664894"
                            >
                              Jessica Doe
                            </UncontrolledTooltip>
                          </div>
                          <span className="description">Team</span>
                        </div>
                      </div>
                    </CardBody>
                    <CardFooter>
                      <Button
                        className="px-0 mt-4"
                        color="link"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        View more<i className="ni ni-bold-right"></i>
                      </Button>
                    </CardFooter>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Team4;
