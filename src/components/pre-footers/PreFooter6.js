import React from "react";

// reactstrap components
import {
  Button,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Card,
  CardBody,
} from "reactstrap";

// Core Components

function PreFooter6() {
  const [emailFocus, setEmailFocus] = React.useState("");
  return (
    <>
      <div className="subscribe-line">
        <Container>
          <Row>
            <Col className="mx-auto" lg="6" md="10">
              <div className="text-center">
                <h2 className="title">Subscribe to our Newsletter</h2>
                <p className="description">
                  You'll be informed about updates, special offers and planned
                  changes..
                </p>
              </div>
              <Card className="card-raised card-form-horizontal">
                <CardBody>
                  <Form action="" method="">
                    <Row>
                      <Col sm="8">
                        <InputGroup className={emailFocus}>
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Your Email..."
                            type="email"
                            onFocus={() => setEmailFocus("focused")}
                            onBlur={() => setEmailFocus("")}
                          ></Input>
                        </InputGroup>
                      </Col>
                      <Col sm="4">
                        <Button color="primary" type="button">
                          Subscribe
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default PreFooter6;
