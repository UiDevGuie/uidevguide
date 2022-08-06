import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

function Blogs2() {
  return (
    <>
      <section className="blogs-2">
        <Container fluid>
          <Row className="mb-md-5">
            <Col className="mx-auto" md="8">
              <h3 className="display-3 text-center">Our recent writings</h3>
              <p className="lead text-center">
                I always felt like I could do anything. That’s the main thing
                people are controlled by! Thoughts- their perception of
                themselves! They're slowed down by their perception of
                themselves. If you're taught you can’t do anything, you won’t do
                anything. I was taught I could do everything.
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg="3">
              <Card
                className="card-blog card-background"
                data-animation="zooming"
              >
                <div
                  className="full-background"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/sections/damian.jpg") + ")",
                  }}
                ></div>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <CardBody>
                    <div className="content-bottom">
                      <h6 className="card-category text-white opacity-8">
                        AI at the Edge
                      </h6>
                      <CardTitle tag="h5">Research Byte</CardTitle>
                    </div>
                  </CardBody>
                </a>
              </Card>
            </Col>
            <Col lg="3">
              <Card
                className="card-blog card-background"
                data-animation="zooming"
              >
                <div
                  className="full-background"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/sections/ashim.jpg") + ")",
                  }}
                ></div>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <CardBody>
                    <div className="content-bottom">
                      <h6 className="card-category text-white opacity-8">
                        Spectrum
                      </h6>
                      <CardTitle tag="h5">Data Virtualization</CardTitle>
                    </div>
                  </CardBody>
                </a>
              </Card>
            </Col>
            <Col lg="3">
              <Card
                className="card-blog card-background"
                data-animation="zooming"
              >
                <div
                  className="full-background"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/sections/odin.jpg") + ")",
                  }}
                ></div>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <CardBody>
                    <div className="content-bottom">
                      <h6 className="card-category text-white opacity-8">
                        Touch on a trend
                      </h6>
                      <CardTitle tag="h5">New Challenges</CardTitle>
                    </div>
                  </CardBody>
                </a>
              </Card>
            </Col>
            <Col lg="3">
              <Card
                className="card-blog card-background"
                data-animation="zooming"
              >
                <div
                  className="full-background"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/sections/dane.jpg") + ")",
                  }}
                ></div>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <CardBody>
                    <div className="content-bottom">
                      <h6 className="card-category text-white opacity-8">
                        Self-Driving Cars
                      </h6>
                      <CardTitle tag="h5">Driverless Future</CardTitle>
                    </div>
                  </CardBody>
                </a>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Blogs2;
