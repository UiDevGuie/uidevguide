import React from "react";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";

// Core Components

function Table1() {
  return (
    <>
      <div className="tables-1">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <h2 className="title mb-4">Find out more details</h2>
              <div className="section-space"></div>
            </Col>
          </Row>
          <Row>
            <Col className="mx-auto" md="12">
              <div>
                <Card className="card-plain">
                  <CardBody>
                    <Table className="table-pricing" responsive>
                      <thead className="text-primary">
                        <tr>
                          <th>
                            <h5 className="mb-0">Space individual</h5>
                          </th>
                          <th className="text-center">
                            <p>Team</p>
                            <h4 className="desc">$39</h4>
                            <Button
                              color="success"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                              outline
                              size="sm"
                            >
                              Choose Plan
                            </Button>
                          </th>
                          <th className="text-center">
                            <p>Growth</p>
                            <h4 className="desc">$79</h4>
                            <Button
                              color="success"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                              outline
                              size="sm"
                            >
                              Choose Plan
                            </Button>
                          </th>
                          <th className="text-center">
                            <p>Enterprise</p>
                            <h4 className="desc">$99</h4>
                            <Button
                              color="success"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                              size="sm"
                            >
                              Choose Plan
                            </Button>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Community support</td>
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
                          <td>100+ Example Pages</td>
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
                          <td>50+ Section Examples</td>
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
                          <td>Multiple use</td>
                          <td className="text-center">
                            <Badge className="badge-circle" color="danger">
                              <i className="fas fa-times text-white"></i>
                            </Badge>
                          </td>
                          <td className="text-center">upon request</td>
                          <td className="text-center">
                            <Badge className="badge-circle" color="success">
                              <i className="ni ni-check-bold text-white"></i>
                            </Badge>
                          </td>
                        </tr>
                        <tr>
                          <td>Custom messages</td>
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
                      </tbody>
                    </Table>
                  </CardBody>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Table1;
