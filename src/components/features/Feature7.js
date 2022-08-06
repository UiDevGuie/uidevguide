import React from "react";

// reactstrap components
import { Button, Card, CardBody, Container, Row, Col } from "reactstrap";

// Core Components

function Feature7() {
  return (
    <>
      <div className="section features-7 bg-secondary">
        <Container>
          <Row>
            <Col className="text-center mx-auto" md="8">
              <h3 className="display-3">Follow your dreams</h3>
              <p className="lead">
                We’re constantly trying to express ourselves and actualize our
                dreams. If you have the opportunity to play this game of life
                you need to appreciate every moment.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center mt-5">
            <Col lg="12">
              <Row className="row-grid">
                <Col lg="4">
                  <Card className="card-lift--hover shadow border-0">
                    <CardBody className="py-5">
                      <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                        <i className="ni ni-check-bold"></i>
                      </div>
                      <h6 className="text-primary text-uppercase">
                        Download Argon
                      </h6>
                      <p className="description mt-3">
                        Because I’m here to follow my dreams and inspire other
                        people to follow their dreams, too. That’s what I’m here
                        for.
                      </p>
                      <Button
                        className="mt-4"
                        color="primary"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        Learn more
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="4">
                  <Card className="card-lift--hover shadow border-0">
                    <CardBody className="py-5">
                      <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                        <i className="ni ni-istanbul"></i>
                      </div>
                      <h6 className="text-success text-uppercase">
                        Build Something
                      </h6>
                      <p className="description mt-3">
                        Society has put up so many boundaries, so many
                        limitations on what’s right and wrong that it’s almost
                        impossible.
                      </p>
                      <Button
                        className="mt-4"
                        color="success"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        Learn more
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="4">
                  <Card className="card-lift--hover shadow border-0">
                    <CardBody className="py-5">
                      <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                        <i className="ni ni-planet"></i>
                      </div>
                      <h6 className="text-warning text-uppercase">
                        Prepare Launch
                      </h6>
                      <p className="description mt-3">
                        Why would anyone pick blue over pink? Pink is obviously
                        a better color.Everyone’s born confident, and
                        everything’s...
                      </p>
                      <Button
                        className="mt-4"
                        color="warning"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        Learn more
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Feature7;
