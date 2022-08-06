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
  Row,
  Col,
} from "reactstrap";

// Core Components

function PricingCard5() {
  return (
    <>
      <Card
        className="card-pricing card-coin"
        style={{
          backgroundImage:
            "url(" + require("assets/img/ill/pattern_pricing5.svg") + ")",
        }}
      >
        <CardHeader>
          <img
            alt="..."
            className="img-center shadow"
            src={require("assets/img/dropbox.png")}
          ></img>
        </CardHeader>
        <CardBody>
          <Row>
            <Col className="text-center" md="12">
              <h5 className="text-uppercase">Platinum Pack</h5>
              <span>£ 349</span>
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
    </>
  );
}

export default PricingCard5;
