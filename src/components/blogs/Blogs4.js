import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

function Blogs4() {
  return (
    <>
      <section className="blogs-4">
        <Container fluid>
          <h2 className="title mb-4">Latest Blogposts</h2>
          <br></br>
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
                      "url(" + require("assets/img/sections/athena.jpg") + ")",
                  }}
                ></div>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <CardBody>
                    <div className="content-bottom">
                      <h6 className="card-category text-white opacity-8">
                        Stellar Partnership
                      </h6>
                      <CardTitle tag="h5">Climate Change</CardTitle>
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
                      "url(" + require("assets/img/sections/thomas.jpg") + ")",
                  }}
                ></div>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <CardBody>
                    <div className="content-bottom">
                      <h6 className="card-category text-white opacity-8">
                        Digital Currency
                      </h6>
                      <CardTitle tag="h5">Save the World</CardTitle>
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
                        Blockchain Explained
                      </h6>
                      <CardTitle tag="h5">Applications Companies</CardTitle>
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
                      "url(" + require("assets/img/sections/twk-tt.jpg") + ")",
                  }}
                ></div>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <CardBody>
                    <div className="content-bottom">
                      <h6 className="card-category text-white opacity-8">
                        A Robot is Your Co-Worker
                      </h6>
                      <CardTitle tag="h5">ARFID microchips</CardTitle>
                    </div>
                  </CardBody>
                </a>
              </Card>
            </Col>
          </Row>
          <Row className="row-below">
            <Col lg="3">
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
                      "url(" + require("assets/img/ill/p2.svg") + ")",
                  }}
                ></div>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <CardBody>
                    <div className="content-bottom">
                      <h6 className="card-category text-white opacity-8">
                        Features
                      </h6>
                      <CardTitle tag="h5">FiftyThree Files For Paper</CardTitle>
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
                      "url(" + require("assets/img/ill/p8.svg") + ")",
                  }}
                ></div>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <CardBody>
                    <div className="content-bottom">
                      <h6 className="card-category text-white opacity-8">
                        News
                      </h6>
                      <CardTitle tag="h5">Focus on Your Employees</CardTitle>
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

export default Blogs4;
