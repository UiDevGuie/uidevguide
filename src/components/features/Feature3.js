import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// Core Components

function Feature3() {
  return (
    <>
      <div
        className="section features-3 my-5"
        style={{
          backgroundImage: "url(" + require("assets/img/ill/p31.svg") + ")",
        }}
      >
        <Container>
          <Row className="text-center justify-content-center">
            <Col lg="8">
              <h3 className="display-3 text-white">
                Build something great
                <span className="text-success">with our products</span>
              </h3>
              <p className="lead text-white">
                We’re constantly trying to express ourselves and actualize our
                dreams. If you have the opportunity to play this game of life
                you need to appreciate every moment.
              </p>
            </Col>
          </Row>
          <Row className="row-grid mt-5">
            <Col lg="6">
              <div className="info info-horizontal bg-white">
                <div className="icon icon-shape icon-shape-info rounded-circle text-white">
                  <i className="ni ni-hat-3 text-info"></i>
                </div>
                <div className="description pl-4">
                  <h5 className="title text-info">Modular Components</h5>
                  <p>
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever.
                  </p>
                  <a
                    className="text-info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="info info-horizontal bg-white">
                <div className="icon icon-shape icon-shape-warning rounded-circle text-white">
                  <i className="ni ni-istanbul text-warning"></i>
                </div>
                <div className="description pl-4">
                  <h5 className="title text-warning">Modern Interface</h5>
                  <p>
                    If everything I did failed - which it doesn't, it actually
                    succeeds - just the fact that I'm willing to fail is an
                    inspiration.
                  </p>
                  <a
                    className="text-warning"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="row-grid">
            <Col lg="6">
              <div className="info info-horizontal bg-white">
                <div className="icon icon-shape icon-shape-danger rounded-circle text-white">
                  <i className="ni ni-trophy text-danger"></i>
                </div>
                <div className="description pl-4">
                  <h5 className="title text-danger">Great Features</h5>
                  <p>
                    People are so scared to lose that they don't even try. Like,
                    one thing people can't say is that I'm not trying, and I'm
                    not trying my hardest.
                  </p>
                  <a
                    className="text-danger"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="info info-horizontal bg-white">
                <div className="icon icon-shape icon-shape-success rounded-circle text-white">
                  <i className="ni ni-image text-success"></i>
                </div>
                <div className="description pl-4">
                  <h5 className="title text-success">Awesome Support</h5>
                  <p>
                    The time is now for it to be okay to be great. People in
                    this world shun people for being great. For being a bright
                    color.
                  </p>
                  <a
                    className="text-success"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Feature3;
