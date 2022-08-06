import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

function Blogs5() {
  return (
    <>
      <section className="blogs-5">
        <Container>
          <Row>
            <Col className="mx-auto" md="10">
              <h2 className="title mb-5">You may also like:</h2>
              <Row>
                <Col lg="4" md="6">
                  <Card className="card-blog card-plain">
                    <div className="card-image shadow">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img rounded"
                          src={require("assets/img/sections/mark-harrison.jpg")}
                        ></img>
                      </a>
                    </div>
                    <CardBody>
                      <CardTitle tag="h4">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          That’s One Way To Ditch Your Passenger
                        </a>
                      </CardTitle>
                      <p className="card-description">
                        As near as we can tell, this guy must have thought he
                        was going over backwards and tapped the rear...
                      </p>
                      <CardFooter>
                        <div className="author">
                          <img
                            alt="..."
                            className="avatar img-raised"
                            src={require("assets/img/faces/team-3.jpg")}
                          ></img>
                          <span>Mike John</span>
                        </div>
                        <div className="stats stats-right opacity-8">
                          <i className="ni ni-watch-time"></i>5 min read
                        </div>
                      </CardFooter>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="4" md="6">
                  <Card className="card-blog card-plain">
                    <div className="card-image shadow">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img rounded"
                          src={require("assets/img/sections/twk-tt.jpg")}
                        ></img>
                      </a>
                    </div>
                    <CardBody>
                      <CardTitle tag="h4">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Shark Week: How to Watch It Scientist
                        </a>
                      </CardTitle>
                      <p className="card-description">
                        Just when you thought it was safe to turn on your
                        television, the Discovery Channel's "Shark Week"...
                      </p>
                      <CardFooter>
                        <div className="author">
                          <img
                            alt="..."
                            className="avatar img-raised"
                            src={require("assets/img/faces/team-2.jpg")}
                          ></img>
                          <span>Jona Zmud</span>
                        </div>
                        <div className="stats stats-right opacity-8">
                          <i className="ni ni-watch-time"></i>5 min read
                        </div>
                      </CardFooter>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="4" xs="12">
                  <Card className="card-blog card-plain">
                    <div className="card-image shadow">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img rounded"
                          src={require("assets/img/sections/pawel-nolbert.jpg")}
                        ></img>
                      </a>
                    </div>
                    <CardBody>
                      <CardTitle tag="h4">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Who's Afraid of the Self-Driving Car?
                        </a>
                      </CardTitle>
                      <p className="card-description">
                        It's been 60 years since the cover of Popular Mechanics
                        magazine gave us the promise of flying cars...
                      </p>
                      <CardFooter>
                        <div className="author">
                          <img
                            alt="..."
                            className="avatar img-raised"
                            src={require("assets/img/faces/team-5.jpg")}
                          ></img>
                          <span>Marc Oliver</span>
                        </div>
                        <div className="stats stats-right opacity-8">
                          <i className="ni ni-favourite-28"></i>
                          2.4K
                        </div>
                      </CardFooter>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Blogs5;
