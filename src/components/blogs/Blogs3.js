import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

function Blogs3() {
  return (
    <>
      <section className="blogs-3">
        <Container>
          <Row>
            <Col className="mx-auto" lg="10" md="8">
              <h2 className="title mb-5">Related Stories</h2>
              <Card className="card-blog card-plain blog-horizontal mb-5">
                <Row>
                  <Col lg="4">
                    <div className="card-image shadow">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img rounded"
                          src={require("assets/img/faces/team-2.jpg")}
                        ></img>
                      </a>
                    </div>
                  </Col>
                  <Col lg="8">
                    <CardBody>
                      <CardTitle tag="h3">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Rover raised $65 million for pet sitting
                        </a>
                      </CardTitle>
                      <p className="card-description">
                        Finding temporary housing for your dog should be as easy
                        as renting an Airbnb. That’s the idea behind Rover,
                        which raised $65 million to expand its pet sitting and
                        dog-walking businesses...{" "}
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Read More
                        </a>
                      </p>
                      <div className="author">
                        <img
                          alt="..."
                          className="avatar img-raised"
                          src={require("assets/img/faces/team-1.jpg")}
                        ></img>
                        <div className="text">
                          <span className="name">Tom Hanks</span>
                          <div className="meta">Drawn on 23 Jan</div>
                        </div>
                      </div>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
              <Card className="card-blog card-plain blog-horizontal mb-5">
                <Row>
                  <Col lg="4">
                    <div className="card-image shadow">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img rounded"
                          src={require("assets/img/faces/team-3.jpg")}
                        ></img>
                      </a>
                    </div>
                  </Col>
                  <Col lg="8">
                    <CardBody>
                      <CardTitle tag="h3">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          MateLabs mixes learning with IFTTT
                        </a>
                      </CardTitle>
                      <p className="card-description">
                        If you’ve ever wanted to train a machine learning model
                        and integrate it with IFTTT, you now can with a new
                        offering from MateLabs. MateVerse, a platform where
                        novices can spin out machine...
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Read More
                        </a>
                      </p>
                      <div className="author">
                        <img
                          alt="..."
                          className="avatar img-raised"
                          src={require("assets/img/faces/team-5.jpg")}
                        ></img>
                        <div className="text">
                          <span className="name">Paul Smith</span>
                          <div className="meta">Drawn on 23 Jan</div>
                        </div>
                      </div>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
              <Card className="card-blog card-plain blog-horizontal">
                <Row>
                  <Col lg="4">
                    <div className="card-image shadow">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img rounded"
                          src={require("assets/img/faces/team-4.jpg")}
                        ></img>
                      </a>
                    </div>
                  </Col>
                  <Col lg="8">
                    <CardBody>
                      <CardTitle tag="h3">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          US venture investment ticks up in Q2
                        </a>
                      </CardTitle>
                      <p className="card-description">
                        Venture investment in U.S. startups rose sequentially in
                        the second quarter of 2017, boosted by large, late-stage
                        financings and a few outsized early-stage rounds in tech
                        and healthcare..{" "}
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Read More
                        </a>
                      </p>
                      <div className="author">
                        <img
                          alt="..."
                          className="avatar img-raised"
                          src={require("assets/img/faces/team-2.jpg")}
                        ></img>
                        <div className="text">
                          <span className="name">Jasmine Tailor</span>
                          <div className="meta">Drawn on 23 Jan</div>
                        </div>
                      </div>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Blogs3;
