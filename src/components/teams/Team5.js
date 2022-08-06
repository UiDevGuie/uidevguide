import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
} from "reactstrap";

// Core Components

function Team5() {
  return (
    <>
      <div className="team-5">
        <Container>
          <Row>
            <Col className="mx-auto text-center mb-5" md="8">
              <h3 className="display-3">Meet our awesome team</h3>
              <p className="lead">
                People are so scared to lose that they don't even try. Like, one
                thing people can't say is that I'm not trying, and I'm not
                trying my hardest, and I'm not trying to do the best way I know
                how.
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg="4" md="6">
              <Card className="card-profile">
                <CardHeader
                  className="bg-info"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/ill/inn.svg") + ")",
                  }}
                >
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised rounded-circle"
                        src={require("assets/img/faces/team-2.jpg")}
                      ></img>
                    </a>
                  </div>
                </CardHeader>
                <CardBody className="pt-0">
                  <div className="d-flex justify-content-between">
                    <Button
                      className="mr-4 mt-3"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Connect
                    </Button>
                    <Button
                      className="float-right mt-3"
                      color="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Message
                    </Button>
                  </div>
                  <Row>
                    <div className="col">
                      <div className="card-profile-stats d-flex justify-content-center">
                        <div>
                          <span className="heading">22</span>
                          <span className="description">Friends</span>
                        </div>
                        <div>
                          <span className="heading">10</span>
                          <span className="description">Photos</span>
                        </div>
                        <div>
                          <span className="heading">89</span>
                          <span className="description">Comments</span>
                        </div>
                      </div>
                    </div>
                  </Row>
                  <div className="text-center">
                    <h5 className="h4">
                      Melanie Paisley
                      <span className="font-weight-light">, 31</span>
                    </h5>
                    <div className="font-weight-300">
                      <i className="ni location_pin mr-2"></i>
                      Beijing, China
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4" md="6">
              <Card className="card-profile" data-background="cover">
                <img
                  alt="..."
                  className="img pattern pattern-top"
                  src={require("assets/img/ill/linth3.svg")}
                ></img>
                <CardHeader>
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised rounded-circle"
                        src={require("assets/img/faces/michael.jpg")}
                      ></img>
                    </a>
                  </div>
                </CardHeader>
                <CardBody className="pt-0">
                  <div className="text-center">
                    <h5 className="h5 mt-3">
                      Byron Reese
                      <span className="font-weight-light">, 29</span>
                    </h5>
                    <div className="font-weight-300">
                      <i className="ni location_pin mr-2"></i>
                      California
                    </div>
                  </div>
                  <div className="card-profile-stats d-flex justify-content-center">
                    <div>
                      <span className="heading">23K</span>
                      <span className="description">Followers</span>
                    </div>
                    <div>
                      <span className="heading">47</span>
                      <span className="description">Posts</span>
                    </div>
                  </div>
                  <Button block color="success" size="lg" type="button">
                    Like!
                  </Button>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4" md="6">
              <Card className="card-profile">
                <CardHeader
                  className="bg-info"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/ill/inn.svg") + ")",
                  }}
                >
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised rounded-circle"
                        src={require("assets/img/faces/team-3.jpg")}
                      ></img>
                    </a>
                  </div>
                </CardHeader>
                <CardBody className="pt-0">
                  <div className="d-flex justify-content-between">
                    <Button
                      className="mr-4 mt-3"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Connect
                    </Button>
                    <Button
                      className="float-right mt-3"
                      color="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Message
                    </Button>
                  </div>
                  <Row>
                    <div className="col">
                      <div className="card-profile-stats d-flex justify-content-center">
                        <div>
                          <span className="heading">22</span>
                          <span className="description">Friends</span>
                        </div>
                        <div>
                          <span className="heading">10</span>
                          <span className="description">Photos</span>
                        </div>
                        <div>
                          <span className="heading">89</span>
                          <span className="description">Comments</span>
                        </div>
                      </div>
                    </div>
                  </Row>
                  <div className="text-center">
                    <h5 className="h4">
                      Johana Doe
                      <span className="font-weight-light">, 29</span>
                    </h5>
                    <div className="font-weight-300">
                      <i className="ni location_pin mr-2"></i>
                      California
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Team5;
