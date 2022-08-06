import React from "react";

// reactstrap components
import {
  Badge,
  Button,
  CardTitle,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";

// Core Components

function Table2() {
  return (
    <>
      <div className="tables-2 mb-5">
        <Container fluid>
          <Row>
            <Col className="mx-auto text-center" md="6">
              <h2 className="title mb-5">The best solution you can choose</h2>
            </Col>
          </Row>
          <Row>
            <Col className="mx-auto" md="10">
              <div>
                <Table className="table-pricing" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>
                        <img
                          alt="..."
                          className="background"
                          src={require("assets/img/ill/bg4-1.svg")}
                        ></img>
                      </th>
                      <th className="text-center">
                        <CardTitle tag="h5">Essential</CardTitle>
                        <Button
                          color="info"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          size="sm"
                        >
                          Get started
                        </Button>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Learn more
                        </a>
                      </th>
                      <th className="text-center">
                        <CardTitle tag="h5">Premium</CardTitle>
                        <Button
                          color="info"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          size="sm"
                        >
                          Get started
                        </Button>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Learn more
                        </a>
                      </th>
                      <th className="text-center">
                        <CardTitle tag="h5">Enterprise</CardTitle>
                        <Button
                          color="info"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          size="sm"
                        >
                          Get started
                        </Button>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Learn more
                        </a>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-primary">
                      <td className="text-white">
                        <b>Pricing</b>
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>
                        Plan cost<i className="ni ni-compass-04 ml-1"></i>
                      </td>
                      <td className="text-center">Free</td>
                      <td className="text-center">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Contact us
                        </a>
                      </td>
                      <td className="text-center">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Contact us
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Platform fee<i className="ni ni-compass-04 ml-1"></i>
                      </td>
                      <td className="text-center">3%</td>
                      <td className="text-center">5%</td>
                      <td className="text-center">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Contact us
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Payment processing</td>
                      <td className="text-center">5.5% + 5c</td>
                      <td className="text-center">6.2% + 5c</td>
                      <td className="text-center">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          Contact us
                        </a>
                      </td>
                    </tr>
                    <tr className="bg-primary">
                      <td className="text-white">
                        <b>Features</b>
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Custom messages</td>
                      <td className="text-center">
                        <Badge className="badge-circle" color="danger">
                          <i className="fas fa-times text-white"></i>
                        </Badge>
                      </td>
                      <td className="text-center">
                        <Badge className="badge-circle" color="danger">
                          <i className="fas fa-times text-white"></i>
                        </Badge>
                      </td>
                      <td className="text-center">
                        <Badge className="badge-circle" color="danger">
                          <i className="fas fa-times text-white"></i>
                        </Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>Multiple requests</td>
                      <td className="text-center">
                        <Badge className="badge-circle" color="danger">
                          <i className="fas fa-times text-white"></i>
                        </Badge>
                      </td>
                      <td className="text-center">
                        <Badge className="badge-circle" color="danger">
                          <i className="fas fa-times text-white"></i>
                        </Badge>
                      </td>
                      <td className="text-center">
                        <Badge className="badge-circle" color="danger">
                          <i className="fas fa-times text-white"></i>
                        </Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>Team fundraising</td>
                      <td className="text-center">
                        <Badge className="badge-circle" color="success">
                          <i className="ni ni-check-bold text-white"></i>
                        </Badge>
                      </td>
                      <td className="text-center">
                        <Badge className="badge-circle" color="success">
                          <i className="ni ni-check-bold text-white"></i>
                        </Badge>
                      </td>
                      <td className="text-center">
                        <Badge className="badge-circle" color="success">
                          <i className="ni ni-check-bold text-white"></i>
                        </Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>Basic donor data</td>
                      <td className="text-center">
                        <Badge className="badge-circle" color="success">
                          <i className="ni ni-check-bold text-white"></i>
                        </Badge>
                      </td>
                      <td className="text-center">
                        <Badge className="badge-circle" color="danger">
                          <i className="fas fa-times text-white"></i>
                        </Badge>
                      </td>
                      <td className="text-center">
                        <Badge className="badge-circle" color="danger">
                          <i className="fas fa-times text-white"></i>
                        </Badge>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Table2;
