import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

function Blogs1() {
  return (
    <>
      <section className="blogs-1">
        <Container>
          <Row className="mb-5">
            <Col md="8">
              <h3 className="display-3">Our recent writings</h3>
              <p className="lead mt-1">
                The time is now for it to be okay to be great. People in this
                world shun people for being great.
              </p>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col lg="3">
              <Card
                className="card-blog card-background"
                data-animation="zooming"
              >
                <div
                  className="full-background"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/theme/josh-appel.jpg") + ")",
                  }}
                ></div>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <CardBody>
                    <div className="content-bottom">
                      <h6 className="card-category text-white opacity-8">
                        New Challenges
                      </h6>
                      <CardTitle tag="h5">Touch on a trend</CardTitle>
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
                      "url(" + require("assets/img/theme/john-hoang.jpg") + ")",
                  }}
                ></div>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <CardBody>
                    <div className="content-bottom">
                      <h6 className="card-category text-white opacity-8">
                        New Opportunities
                      </h6>
                      <CardTitle tag="h5">Constantly growing</CardTitle>
                    </div>
                  </CardBody>
                </a>
              </Card>
            </Col>
            <Col lg="6">
              <Card
                className="card-blog card-background"
                data-animation="zooming"
              >
                <div
                  className="full-background"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/theme/kit-suman.jpg") + ")",
                  }}
                ></div>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <CardBody>
                    <div className="content-bottom">
                      <h6 className="card-category text-white opacity-8">
                        Sales Leads
                      </h6>
                      <CardTitle tag="h5">
                        Configure Blockchain Technology
                      </CardTitle>
                    </div>
                  </CardBody>
                </a>
              </Card>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col lg="6">
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
          </Row>
          <Button className="btn-icon mt-4" color="primary" type="button">
            <span className="btn-inner--text">Show more</span>
            <span className="btn-inner--icon">
              <i className="ni ni-bold-right"></i>
            </span>
          </Button>
        </Container>
      </section>
    </>
  );
}

export default Blogs1;
