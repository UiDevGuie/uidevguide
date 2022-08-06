import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";

// Core Components

function Pricing3() {
  return (
    <>
      <section
        className="pricing-3"
        id="pricing-4"
        style={{
          backgroundImage: "url(" + require("assets/img/ill/1.svg") + ")",
        }}
      >
        <Container>
          <Row>
            <Col className="mx-auto text-center my-5" lg="8">
              <h3 className="display-3">Some of Our Pricing Plans</h3>
            </Col>
          </Row>
          <Row>
            <Col className="pr-md-0" md="5">
              <Card className="card-pricing text-center bg-default">
                <CardHeader className="bg-transparent">
                  <h4 className="text-uppercase ls-1 text-primary py-3 mb-0">
                    Bravo pack
                  </h4>
                </CardHeader>
                <CardBody className="px-lg-6">
                  <div className="display-2 text-white">$49</div>
                  <span className="text-muted">per application</span>
                  <ul className="list-unstyled my-4">
                    <li>
                      <div className="d-flex align-items-center">
                        <div>
                          <div className="icon icon-xs icon-shape icon-shape-primary shadow rounded-circle">
                            <i className="ni ni-folder-17 text-white"></i>
                          </div>
                        </div>
                        <div>
                          <span className="pl-2 text-sm">
                            Complete documentation
                          </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center">
                        <div>
                          <div className="icon icon-xs icon-shape icon-shape-primary shadow rounded-circle">
                            <i className="ni ni-camera-compact text-white"></i>
                          </div>
                        </div>
                        <div>
                          <span className="pl-2 text-sm">
                            Working materials in Sketch
                          </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex align-items-center">
                        <div>
                          <div className="icon icon-xs icon-shape icon-shape-primary shadow rounded-circle">
                            <i className="ni ni-chart-pie-35 text-white"></i>
                          </div>
                        </div>
                        <div>
                          <span className="pl-2 text-sm">
                            2GB cloud storage
                          </span>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <Button className="mb-3" color="primary" type="button">
                    Start free trial
                  </Button>
                </CardBody>
                <CardFooter className="bg-transparent">
                  <a
                    className="text-muted"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Request a demo
                  </a>
                </CardFooter>
              </Card>
            </Col>
            <Col className="pl-md-0" md="7">
              <Card className="card-pricing border-0 text-center my-5">
                <CardHeader className="bg-transparent">
                  <h4 className="text-uppercase ls-1 text-primary py-3 mb-0">
                    Enterprise
                  </h4>
                </CardHeader>
                <CardBody className="px-lg-6">
                  <div className="card-description">
                    What colors are good, before somebody tells you you
                    shouldn’t like pink because that’s for girls, or you’d
                    instantly become a gay two-year-old.
                  </div>
                  <Table className="table-bordered mt-3">
                    <tbody>
                      <tr>
                        <td>24/7 Support</td>
                        <td>Design Tools</td>
                      </tr>
                      <tr>
                        <td>10K emails</td>
                        <td>Private Brand</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
                <CardFooter>
                  <a
                    className="text-primary"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Create new account
                  </a>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Pricing3;
