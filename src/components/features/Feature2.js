import React from "react";

// reactstrap components
import { Badge, Container, Row, Col } from "reactstrap";

// Core Components

function Feature2() {
  return (
    <>
      <div className="section features-2">
        <Container>
          <Row className="align-items-center">
            <Col className="mr-auto text-left" lg="4" md="8">
              <div className="pr-md-5">
                <div className="icon icon-lg icon-shape icon-shape-primary shadow rounded-circle mb-5">
                  <i className="ni ni-favourite-28"></i>
                </div>
                <h3>Awesome features</h3>
                <p>
                  The kit comes with three pre-built pages to help you get
                  started faster. You can change the text and images and you're
                  good to go.
                </p>
                <ul className="list-unstyled mt-5">
                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div>
                        <Badge className="badge-circle mr-3" color="primary">
                          <i className="ni ni-settings-gear-65"></i>
                        </Badge>
                      </div>
                      <div>
                        <h6 className="mb-0">Carefully crafted components</h6>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div>
                        <Badge className="badge-circle mr-3" color="primary">
                          <i className="ni ni-html5"></i>
                        </Badge>
                      </div>
                      <div>
                        <h6 className="mb-0">Amazing page examples</h6>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="d-flex align-items-center">
                      <div>
                        <Badge className="badge-circle mr-3" color="primary">
                          <i className="ni ni-satisfied"></i>
                        </Badge>
                      </div>
                      <div>
                        <h6 className="mb-0">Super friendly support team</h6>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
            <Col className="pl-md-0" lg="7" md="12">
              <Row>
                <Col lg="4" md="4">
                  <div className="info text-left bg-info shadow">
                    <div className="icon icon-shape bg-gradient-white shadow rounded-circle text-primary">
                      <i className="ni ni-satisfied text-info"></i>
                    </div>
                    <h5 className="info-title text-white">Best Quality</h5>
                    <p className="description">
                      What matters is the people who are sparked by it. And the
                      people who are like offended by it.
                    </p>
                  </div>
                </Col>
                <Col lg="4" md="4">
                  <div className="info text-left bg-danger info-raised shadow">
                    <div className="icon icon-shape bg-gradient-white shadow rounded-circle text-primary">
                      <i className="ni ni-palette text-danger"></i>
                    </div>
                    <h5 className="info-title text-white">Awesome Design</h5>
                    <p className="description">
                      Because it's about motivating the doers. Because I’m here
                      to follow my dreams and inspire the world.
                    </p>
                  </div>
                </Col>
                <Col lg="4" md="4">
                  <div className="info text-left bg-default shadow">
                    <div className="icon icon-shape bg-gradient-white shadow rounded-circle text-primary">
                      <i className="ni ni-spaceship text-default"></i>
                    </div>
                    <h5 className="info-title text-white">Great Performance</h5>
                    <p className="description">
                      There’s nothing I really wanted to do in life that I
                      wasn’t able to get good at. We’re constantly growing.
                    </p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg="4" md="4">
                  <div className="info text-left bg-primary shadow">
                    <div className="icon icon-shape bg-gradient-white shadow rounded-circle text-primary">
                      <i className="ni ni-planet text-primary"></i>
                    </div>
                    <h5 className="info-title text-white">Fast Development</h5>
                    <p className="description">
                      I always felt like I could do anything. That’s the main
                      thing people are controlled by the force!
                    </p>
                  </div>
                </Col>
                <Col lg="4" md="4">
                  <div className="info text-left bg-warning info-raised shadow">
                    <div className="icon icon-shape bg-gradient-white shadow rounded-circle text-primary">
                      <i className="ni ni-glasses-2 text-warning"></i>
                    </div>
                    <h5 className="info-title text-white">Super Fresh</h5>
                    <p className="description">
                      Thoughts- their perception of themselves! They're slowed
                      down by their perception of themselves.
                    </p>
                  </div>
                </Col>
                <Col lg="4" md="4">
                  <div className="info text-left bg-success shadow">
                    <div className="icon icon-shape bg-gradient-white shadow rounded-circle text-primary">
                      <i className="ni ni-notification-70 text-success"></i>
                    </div>
                    <h5 className="info-title text-white">Organized Content</h5>
                    <p className="description">
                      If you're taught you can’t do anything, you won’t do
                      anything. I was taught I could do everything.
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

export default Feature2;
