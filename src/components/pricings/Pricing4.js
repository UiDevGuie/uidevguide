import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// Core Components

function Pricing4() {
  return (
    <>
      <div className="pricing-4" id="pricing-5">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <h2 className="title">Pick the best plan for you</h2>
              <h4 className="description">
                You have Free Unlimited Updates and Premium Support on each
                package.
              </h4>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col md="4">
              <Card className="card-pricing card-coin">
                <CardHeader>
                  <img
                    alt="..."
                    className="img-center shadow"
                    src={require("assets/img/theme/vue.jpg")}
                  ></img>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col className="text-center" md="12">
                      <h5 className="text-uppercase">Standard Pack</h5>
                      <span>£ 39</span>
                      <hr className="bg-info"></hr>
                    </Col>
                  </Row>
                  <Row>
                    <ListGroup>
                      <ListGroupItem>50 messages</ListGroupItem>
                      <ListGroupItem>100 emails</ListGroupItem>
                      <ListGroupItem>No Support</ListGroupItem>
                    </ListGroup>
                  </Row>
                </CardBody>
                <CardFooter className="text-center bg-transparent">
                  <Button className="mb-3" color="primary">
                    Get plan
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-pricing card-coin">
                <CardHeader>
                  <img
                    alt="..."
                    className="img-center shadow"
                    src={require("assets/img/theme/react.jpg")}
                  ></img>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col className="text-center" md="12">
                      <h5 className="text-uppercase">Premium Pack</h5>
                      <span>£ 49</span>
                      <hr className="bg-info"></hr>
                    </Col>
                  </Row>
                  <Row>
                    <ListGroup>
                      <ListGroupItem>100 messages</ListGroupItem>
                      <ListGroupItem>1K emails</ListGroupItem>
                      <ListGroupItem>Premium Support</ListGroupItem>
                    </ListGroup>
                  </Row>
                </CardBody>
                <CardFooter className="text-center bg-transparent">
                  <Button className="mb-3" color="primary">
                    Get plan
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-pricing card-coin">
                <CardHeader>
                  <img
                    alt="..."
                    className="img-center shadow"
                    src={require("assets/img/theme/sketch.jpg")}
                  ></img>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col className="text-center" md="12">
                      <h5 className="text-uppercase">Platinum Pack</h5>
                      <span>£ 69</span>
                      <hr className="bg-info"></hr>
                    </Col>
                  </Row>
                  <Row>
                    <ListGroup>
                      <ListGroupItem>350 messages</ListGroupItem>
                      <ListGroupItem>10K emails</ListGroupItem>
                      <ListGroupItem>24/7 Support</ListGroupItem>
                    </ListGroup>
                  </Row>
                </CardBody>
                <CardFooter className="text-center bg-transparent">
                  <Button className="mb-3" color="primary">
                    Get plan
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Pricing4;
