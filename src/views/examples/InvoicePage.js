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
import DemoNavbar from "components/navbars/DemoNavbar.js";
import DemoFooter from "components/footers/DemoFooter.js";

function InvoicePage() {
  React.useEffect(() => {
    document.body.classList.add("invoice-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("invoice-page");
    };
  });
  return (
    <>
      <DemoNavbar type="transparent" />
      <div className="wrapper">
        <div className="section-shaped my-0 skew-separator skew-mini">
          <div className="page-header page-header-small header-filter">
            <div
              className="page-header-image"
              style={{
                backgroundImage:
                  "url(" + require("assets/img/pages/nathan-dumlao.jpg") + ")",
              }}
            ></div>
            <Container>
              <div className="header-body text-center mb-7">
                <Row className="justify-content-center">
                  <Col className="px-5" lg="6" md="8" xl="5">
                    <h1 className="text-white">Invoice</h1>
                    <p className="text-lead text-white">
                      Everyone’s born confident, and everything’s taken away
                      from you
                    </p>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
        </div>
        <section className="upper">
          <Container>
            <Row>
              <Col className="mx-auto" md="10">
                <Card className="card-invoice">
                  <CardHeader className="text-center">
                    <Row className="justify-content-between">
                      <Col className="text-left" md="4">
                        <img
                          alt="..."
                          className="mb-2 w-100"
                          src={require("assets/img/brand/blue.png")}
                        ></img>
                        <h6>
                          St. Independence Embankment, 050105 Bucharest, Romania
                        </h6>
                        <small className="d-block text-muted">
                          tel: +4 (074) 1090873
                        </small>
                      </Col>
                      <Col className="text-left mt-3" lg="3" md="5">
                        <h4 className="mb-1">Billed to:</h4>
                        <span className="d-block">James Thompson</span>
                        <p>
                          Bld Mihail Kogalniceanu,<br></br>
                          7652 Bucharest,<br></br>
                          Romania
                        </p>
                      </Col>
                    </Row>
                    <br></br>
                    <Row className="justify-content-md-between">
                      <Col md="4">
                        <h3 className="mt-3 text-left">
                          Invoice no <br></br>
                          <small className="mr-2">#0453119</small>
                        </h3>
                      </Col>
                      <Col lg="4" md="5">
                        <Row className="mt-5">
                          <Col md="6">Invoice date:</Col>
                          <Col md="6">06/03/2019</Col>
                        </Row>
                        <Row>
                          <Col md="6">Due date:</Col>
                          <Col md="6">11/03/2019</Col>
                        </Row>
                      </Col>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col xs="12">
                        <Table className="text-right" responsive>
                          <thead className="bg-default">
                            <tr>
                              <th className="text-right text-white" scope="col">
                                Item
                              </th>
                              <th className="text-right text-white" scope="col">
                                Qty
                              </th>
                              <th className="text-right text-white" scope="col">
                                Rate
                              </th>
                              <th className="text-right text-white" scope="col">
                                Amount
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Premium Support</td>
                              <td>1</td>
                              <td>$ 9.00</td>
                              <td>$ 9.00</td>
                            </tr>
                            <tr>
                              <td>BLK Design System PRO</td>
                              <td>3</td>
                              <td>$ 100.00</td>
                              <td>$ 300.00</td>
                            </tr>
                            <tr>
                              <td>Parts for service</td>
                              <td>1</td>
                              <td>$ 89.00</td>
                              <td>$ 89.00</td>
                            </tr>
                          </tbody>
                          <tfoot>
                            <tr>
                              <th className="h4">Total</th>
                              <th className="text-right h4" colSpan="3">
                                $ 750
                              </th>
                            </tr>
                          </tfoot>
                        </Table>
                      </Col>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-right">
                    <Col className="ml-auto" md="5">
                      <h5>Thank you!</h5>
                      <p className="description">
                        If you encounter any issues related to the invoice you
                        can contact us at:
                      </p>
                      <h6 className="d-block">
                        email:{" "}
                        <small className="text-muted">
                          support@cretive-tim.com
                        </small>
                      </h6>
                    </Col>
                  </CardFooter>
                </Card>
              </Col>
              <Col className="ml-auto" md="3">
                <Button
                  className="btn-print mt-3 mb-6"
                  color="primary"
                  onClick={() => {
                    window.print();
                    return false;
                  }}
                  type="button"
                >
                  <i className="tim-icons icon-laptop"></i>
                  Print
                </Button>
              </Col>
            </Row>
          </Container>
        </section>
        <DemoFooter />
      </div>
    </>
  );
}

export default InvoicePage;
