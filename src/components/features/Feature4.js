import React from "react";

// reactstrap components
import { Card, CardImg, Container, Row, Col } from "reactstrap";

// Core Components

function Feature4() {
  return (
    <>
      <div className="section features-4">
        <Container>
          <Row>
            <Col className="text-center mx-auto" md="8">
              <h3 className="display-3">The time is now</h3>
              <p className="lead">
                The time is now to be okay to be the greatest you. Would you
                believe in what you believe in, if you were the only one who
                believed it?
              </p>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col className="mr-auto text-left mt-4" lg="4">
              <Card className="bg-default shadow border-0">
                <CardImg
                  alt="..."
                  src={require("assets/img/theme/img-1-1200x1000.jpg")}
                  top
                ></CardImg>
                <blockquote className="card-blockquote">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="svg-bg"
                    preserveAspectRatio="none"
                    viewBox="0 0 583 95"
                  >
                    <polygon
                      className="fill-default"
                      points="0,52 583,95 0,95"
                    ></polygon>
                    <polygon
                      className="fill-default"
                      opacity=".2"
                      points="0,42 583,95 683,0 0,95"
                    ></polygon>
                  </svg>
                  <h4 className="display-4 text-white">Design System</h4>
                  <p className="lead text-italic text-white">
                    That’s my skill. I’m not really specifically talented at
                    anything except for the ability to learn.
                  </p>
                </blockquote>
              </Card>
            </Col>
            <Col className="p-sm-0" lg="7">
              <Row>
                <Col md="6">
                  <div className="info info-hover-warning">
                    <div className="icon icon-shape bg-warning shadow rounded-circle text-primary">
                      <i className="ni ni-satisfied text-white"></i>
                    </div>
                    <h5 className="info-title">Best Quality</h5>
                    <p className="description opacity-8">
                      It becomes harder for us to give others a hand. We get our
                      heart broken by people we love.
                    </p>
                  </div>
                </Col>
                <Col md="6">
                  <div className="info info-hover-info">
                    <div className="icon icon-shape bg-info shadow rounded-circle text-primary">
                      <i className="ni ni-palette text-white"></i>
                    </div>
                    <h5 className="info-title">Awesome Design</h5>
                    <p className="description opacity-8">
                      As we live, our hearts turn colder. Cause pain is what we
                      go through as we become older.
                    </p>
                  </div>
                </Col>
              </Row>
              <Row className="mt-lg-4">
                <Col md="6">
                  <div className="info info-hover-danger">
                    <div className="icon icon-shape bg-danger shadow rounded-circle text-primary">
                      <i className="ni ni-user-run text-white"></i>
                    </div>
                    <h5 className="info-title">Fast Development</h5>
                    <p className="description opacity-8">
                      We’re not always in the position that we want to be at.
                      We’re constantly growing.
                    </p>
                  </div>
                </Col>
                <Col md="6">
                  <div className="info info-hover-success">
                    <div className="icon icon-shape bg-success shadow rounded-circle text-primary">
                      <i className="ni ni-glasses-2 text-white"></i>
                    </div>
                    <h5 className="info-title">Super Fresh</h5>
                    <p className="description opacity-8">
                      When we lose family over time. What else could rust the
                      heart more over time? Blackgold.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Feature4;
