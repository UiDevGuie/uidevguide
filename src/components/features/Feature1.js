import React from "react";

// reactstrap components
import { Badge, Container, Row, Col } from "reactstrap";

// Core Components

function Feature1() {
  return (
    <>
      <div className="section features-1">
        <Container>
          <Row>
            <Col className="mx-auto text-center" md="8">
              <Badge className="mb-3" color="primary" pill>
                Insight
              </Badge>
              <h3 className="display-3">Full-Funnel Social Analytics</h3>
              <p className="lead">
                The time is now for it to be okay to be great. For being a
                bright color. For standing out.
              </p>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <div className="info">
                <div className="icon icon-lg icon-shape icon-shape-primary shadow rounded-circle">
                  <i className="ni ni-settings-gear-65"></i>
                </div>
                <h6 className="info-title text-uppercase text-primary">
                  Social Conversations
                </h6>
                <p className="description opacity-8">
                  We get insulted by others, lose trust for those others. We get
                  back stabbed by friends. It becomes harder for us to give
                  others a hand.
                </p>
                <a
                  className="text-primary"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  More about us{" "}
                  <i className="ni ni-bold-right text-primary"></i>
                </a>
              </div>
            </Col>
            <Col md="4">
              <div className="info">
                <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle">
                  <i className="ni ni-atom"></i>
                </div>
                <h6 className="info-title text-uppercase text-success">
                  Analyze Performance
                </h6>
                <p className="description opacity-8">
                  Don't get your heart broken by people we love, even that we
                  give them all we have. Then we lose family over time. As we
                  live, our hearts turn colder.
                </p>
                <a
                  className="text-primary"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Learn about our products{" "}
                  <i className="ni ni-bold-right text-primary"></i>
                </a>
              </div>
            </Col>
            <Col md="4">
              <div className="info">
                <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle">
                  <i className="ni ni-world"></i>
                </div>
                <h6 className="info-title text-uppercase text-warning">
                  Measure Conversions
                </h6>
                <p className="description opacity-8">
                  What else could rust the heart more over time? Blackgold. The
                  time is now for it to be okay to be great. or being a bright
                  color. For standing out.
                </p>
                <a
                  className="text-primary"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  Check our documentation{" "}
                  <i className="ni ni-bold-right text-primary"></i>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Feature1;
